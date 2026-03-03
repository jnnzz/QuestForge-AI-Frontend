import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Award, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: TrendingUp, label: 'Total XP', value: '47,350', color: 'from-quest-green to-emerald-400' },
    { icon: BookOpen, label: 'Quests Completed', value: '23', color: 'from-neon-blue to-cyan-400' },
    { icon: Award, label: 'Achievements', value: '18', color: 'from-neon-purple to-purple-400' },
    { icon: Users, label: 'Guild Rank', value: '#127', color: 'from-electric-blue to-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Welcome back, John! 🎮</h1>
        <p className="text-gray-400">Ready to continue your learning journey?</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-quest-slate rounded-xl p-6 border border-gray-700 shadow-xl"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Active Quests Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-quest-slate rounded-xl p-6 border border-gray-700 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Active Quests</h2>
        <div className="space-y-4">
          {[
            { title: 'React Mastery Challenge', progress: 78, difficulty: 'Hard', xp: 500 },
            { title: 'TypeScript Fundamentals', progress: 45, difficulty: 'Medium', xp: 300 },
            { title: 'CSS Animation Workshop', progress: 92, difficulty: 'Easy', xp: 200 },
          ].map((quest, index) => (
            <motion.div
              key={quest.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-quest-dark/50 rounded-lg p-4 border border-gray-700 hover:border-neon-blue transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold">{quest.title}</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${
                      quest.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                      quest.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {quest.difficulty}
                    </span>
                    <span className="text-xs text-gray-400">+{quest.xp} XP</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-neon-blue">{quest.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${quest.progress}%` }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-neon-blue to-electric-blue"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
