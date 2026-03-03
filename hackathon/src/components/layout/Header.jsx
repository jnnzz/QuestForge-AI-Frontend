import { motion } from 'framer-motion';
import { Bell, Search, Zap, Target } from 'lucide-react';

const Header = () => {
  const userLevel = 42;
  const currentXP = 7850;
  const nextLevelXP = 10000;
  const xpPercentage = (currentXP / nextLevelXP) * 100;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 bg-quest-slate/95 backdrop-blur-md border-b border-gray-700 shadow-xl"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search quests, skills, achievements..."
              className="w-full bg-quest-dark/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
            />
          </div>
        </div>

        {/* Right Section: Current Quest + User Profile */}
        <div className="flex items-center space-x-6 ml-6">
          {/* Current Quest Indicator */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 10px rgba(59, 130, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.8)',
                '0 0 10px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex items-center space-x-3 bg-electric-blue/10 border border-electric-blue/50 rounded-lg px-4 py-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Target className="w-5 h-5 text-electric-blue" />
            </motion.div>
            <div>
              <p className="text-xs text-gray-400">Current Quest</p>
              <p className="text-sm font-semibold text-white">React Mastery Challenge</p>
            </div>
            <div className="flex items-center space-x-1 ml-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-xs text-electric-blue font-bold">In Progress</span>
            </div>
          </motion.div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </button>

          {/* User Profile Section */}
          <div className="flex items-center space-x-4 border-l border-gray-700 pl-6">
            {/* XP Progress Bar */}
            <div className="hidden xl:block min-w-[200px]">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-quest-green" />
                  <span className="text-xs text-gray-400">XP Progress</span>
                </div>
                <span className="text-xs font-bold text-quest-green">
                  {currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()}
                </span>
              </div>
              <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${xpPercentage}%` }}
                  transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-quest-green to-emerald-400 rounded-full"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  }}
                />
                {/* Animated Glow Effect */}
                <motion.div
                  animate={{
                    x: [-100, 300],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{ width: '50px' }}
                />
              </div>
            </div>

            {/* User Avatar + Level Badge */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                {/* Level Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="absolute -bottom-1 -right-1 bg-neon-purple rounded-full px-2 py-0.5 border-2 border-quest-slate"
                  style={{
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4)',
                  }}
                >
                  <span className="text-xs font-bold text-white">{userLevel}</span>
                </motion.div>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-white">John Doe</p>
                <p className="text-xs text-gray-400">Elite Learner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
