import { motion } from 'framer-motion';
import { Lock, Star, Zap, Clock, Trophy, BookOpen, Code, Flame } from 'lucide-react';

const QuestMap = ({ quests = [] }) => {
  // Default quests if none provided
  const defaultQuests = [
    {
      id: 1,
      title: 'React Fundamentals',
      type: 'core',
      difficulty: 'Medium',
      xp: 500,
      icon: Code,
      progress: 0,
      locked: false,
      description: 'Master the basics of React components, props, and state',
      estimatedTime: '4 hours',
    },
    {
      id: 2,
      title: 'Hooks Deep Dive',
      type: 'core',
      difficulty: 'Hard',
      xp: 750,
      icon: Zap,
      progress: 0,
      locked: false,
      description: 'Advanced patterns with useState, useEffect, and custom hooks',
      estimatedTime: '6 hours',
    },
    {
      id: 3,
      title: 'Animation Mastery',
      type: 'side',
      difficulty: 'Easy',
      xp: 300,
      icon: Star,
      progress: 0,
      locked: false,
      description: 'Create stunning UI animations with Framer Motion',
      estimatedTime: '3 hours',
    },
    {
      id: 4,
      title: 'State Management',
      type: 'core',
      difficulty: 'Hard',
      xp: 800,
      icon: Trophy,
      progress: 0,
      locked: false,
      description: 'Context API, Redux, and advanced state patterns',
      estimatedTime: '8 hours',
    },
    {
      id: 5,
      title: 'CSS Grid Ninja',
      type: 'side',
      difficulty: 'Easy',
      xp: 250,
      icon: BookOpen,
      progress: 0,
      locked: false,
      description: 'Master modern CSS Grid layouts for responsive design',
      estimatedTime: '2 hours',
    },
    {
      id: 6,
      title: 'Performance Optimization',
      type: 'core',
      difficulty: 'Hard',
      xp: 900,
      icon: Flame,
      progress: 0,
      locked: false,
      description: 'Code splitting, memoization, and React performance best practices',
      estimatedTime: '5 hours',
    },
    {
      id: 7,
      title: 'TypeScript Basics',
      type: 'side',
      difficulty: 'Medium',
      xp: 400,
      icon: Code,
      progress: 0,
      locked: false,
      description: 'Add type safety to your React applications',
      estimatedTime: '4 hours',
    },
    {
      id: 8,
      title: 'Advanced Patterns',
      type: 'core',
      difficulty: 'Expert',
      xp: 1000,
      icon: Trophy,
      progress: 0,
      locked: true,
      description: 'Higher-order components, render props, and compound components',
      estimatedTime: '10 hours',
    },
  ];

  const displayQuests = quests.length > 0 ? quests : defaultQuests;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="mt-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Quest Map</h2>
        <p className="text-gray-400">Choose your path and start your learning adventure</p>
        
        {/* Legend */}
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-500 rounded" />
            <span className="text-sm text-gray-400">Core Quest (High XP)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-purple-500 rounded" />
            <span className="text-sm text-gray-400">Side Quest (Bonus)</span>
          </div>
        </div>
      </motion.div>

      {/* Quest Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {displayQuests.map((quest) => (
          <motion.div
            key={quest.id}
            variants={cardVariants}
            whileHover={!quest.locked ? { y: -8, scale: 1.02 } : {}}
            className={`relative bg-quest-slate rounded-xl overflow-hidden shadow-xl ${
              quest.locked ? 'opacity-60' : 'cursor-pointer'
            }`}
          >
            {/* Card Border Glow */}
            <div
              className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                quest.type === 'core'
                  ? 'border-2 border-blue-500'
                  : 'border-2 border-purple-500'
              }`}
              style={{
                boxShadow: quest.type === 'core'
                  ? '0 0 15px rgba(59, 130, 246, 0.4)'
                  : '0 0 15px rgba(168, 85, 247, 0.4)',
              }}
            />

            <div className="relative p-6">
              {/* Quest Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    quest.type === 'core'
                      ? 'bg-blue-500/20'
                      : 'bg-purple-500/20'
                  }`}
                >
                  <quest.icon
                    className={`w-6 h-6 ${
                      quest.type === 'core' ? 'text-blue-500' : 'text-purple-500'
                    }`}
                  />
                </div>

                {/* Quest Type Label */}
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    quest.type === 'core'
                      ? 'bg-blue-500/20 text-blue-500 border border-blue-500/50'
                      : 'bg-purple-500/20 text-purple-500 border border-purple-500/50'
                  }`}
                >
                  {quest.type === 'core' ? 'HIGH XP' : 'BONUS'}
                </motion.span>
              </div>

              {/* Quest Title */}
              <h3 className="text-xl font-bold text-white mb-2">{quest.title}</h3>

              {/* Quest Description */}
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{quest.description}</p>

              {/* Quest Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Difficulty</span>
                  <span
                    className={`font-semibold ${
                      quest.difficulty === 'Expert' || quest.difficulty === 'Hard'
                        ? 'text-red-400'
                        : quest.difficulty === 'Medium'
                        ? 'text-yellow-400'
                        : 'text-green-400'
                    }`}
                  >
                    {quest.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Est. Time</span>
                  </span>
                  <span className="text-white font-medium">{quest.estimatedTime}</span>
                </div>
              </div>

              {/* XP Reward */}
              <div
                className={`flex items-center justify-between p-3 rounded-lg ${
                  quest.type === 'core'
                    ? 'bg-blue-500/10 border border-blue-500/30'
                    : 'bg-purple-500/10 border border-purple-500/30'
                }`}
              >
                <span className="text-sm text-gray-300 font-medium">XP Reward</span>
                <span
                  className={`text-lg font-bold ${
                    quest.type === 'core' ? 'text-blue-500' : 'text-purple-500'
                  }`}
                >
                  +{quest.xp}
                </span>
              </div>

              {/* Start Button / Lock Overlay */}
              {quest.locked ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 bg-quest-dark/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl"
                >
                  <Lock className="w-12 h-12 text-gray-500 mb-2" />
                  <span className="text-gray-400 font-semibold">Locked</span>
                  <span className="text-xs text-gray-500 mt-1">Complete prerequisites</span>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-4 px-4 py-2 rounded-lg font-semibold text-white transition-all ${
                    quest.type === 'core'
                      ? 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30'
                      : 'bg-purple-500 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30'
                  }`}
                >
                  Start Quest
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default QuestMap;
