import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

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
      className="sticky top-0 z-40 bg-quest-slate/95 backdrop-blur-md border-b border-gray-700 shadow-xl w-full"
    >
      <div className="flex items-center justify-end w-full px-4 py-4">
        {/* XP Progress and User Profile */}
        <div className="flex items-center space-x-6">
          {/* XP Progress Bar */}
          <div className="min-w-[200px]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-gray-400">XP Progress</span>
              </div>
              <span className="text-xs font-bold text-emerald-400">
                {currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()}
              </span>
            </div>
            <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${xpPercentage}%` }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(52, 211, 153, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)',
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-500 flex items-center justify-center text-white font-bold">
                JD
              </div>
              {/* Level Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full px-2 py-0.5 border-2 border-quest-slate"
                style={{
                  boxShadow: '0 0 8px rgba(168, 85, 247, 0.5)',
                }}
              >
                <span className="text-xs font-bold text-white">{userLevel}</span>
              </motion.div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">John Doe</p>
              <p className="text-xs text-gray-400">Elite Learner</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
