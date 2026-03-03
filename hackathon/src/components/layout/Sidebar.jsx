import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Sword, 
  Trophy, 
  Award,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('selectedFieldId');
    // Navigate to login page
    navigate('/login');
  };
  
  const navItems = [
    { id: 'dashboard', path: '/login/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'syllabus', path: '/login/syllabus', icon: BookOpen, label: 'Syllabus Sync' },
    { id: 'quests', path: '/login/quests', icon: Sword, label: 'Quests' },
    { id: 'arena', path: '/login/bossArena', icon: Trophy, label: 'Boss Arena' },
    { id: 'passport', path: '/login/skill', icon: Award, label: 'Skill Passport' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-screen w-64 bg-quest-slate shadow-2xl z-50"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Sword className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">QuestForge</h1>
            <p className="text-xs text-blue-400">AI Learning Platform</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          >
            <Link
              to={item.path}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-slate-700/30 to-blue-900/30 border border-blue-500/50'
                  : 'hover:bg-gray-700/50'
              }`}
            >
              <item.icon
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.5)]'
                    : 'text-gray-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.4)]'
                }`}
              />
              <span
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}
              >
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Bottom Stats Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 space-y-3"
      >
        <div className="bg-gradient-to-br from-quest-dark to-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Daily Progress</span>
            <span className="text-xs text-blue-400 font-bold">75%</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-slate-500 to-blue-700"
            />
          </div>
        </div>

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 rounded-lg transition-all duration-300 group"
        >
          <LogOut className="w-4 h-4 text-red-400 group-hover:text-red-300" />
          <span className="text-sm font-medium text-red-400 group-hover:text-red-300">
            Logout
          </span>
        </motion.button>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
