import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Award, Users, Trophy, Medal, Crown } from 'lucide-react';

const Dashboard = ({ selectedField }) => {
  // Leaderboard data organized by field
  const leaderboardData = {
    'web-dev': [
      { id: 1, name: 'Alex Chen', xp: 52480, level: 47, rank: 1 },
      { id: 2, name: 'Sarah Kim', xp: 51230, level: 46, rank: 2 },
      { id: 3, name: 'Marcus Johnson', xp: 48920, level: 45, rank: 3 },
      { id: 4, name: 'Emily Rodriguez', xp: 47350, level: 44, rank: 4 },
      { id: 5, name: 'John Doe', xp: 47350, level: 42, rank: 5, isCurrentUser: true },
      { id: 6, name: 'David Park', xp: 45120, level: 41, rank: 6 },
      { id: 7, name: 'Sophie Zhang', xp: 43890, level: 40, rank: 7 },
      { id: 8, name: 'James Wilson', xp: 42150, level: 39, rank: 8 },
    ],
    'data-science': [
      { id: 1, name: 'Dr. Lisa Wang', xp: 68920, level: 58, rank: 1 },
      { id: 2, name: 'Robert Chen', xp: 65340, level: 56, rank: 2 },
      { id: 3, name: 'Maya Patel', xp: 61230, level: 54, rank: 3 },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true },
      { id: 5, name: 'Kevin Liu', xp: 45890, level: 41, rank: 5 },
    ],
    'mobile-dev': [
      { id: 1, name: 'Nina Patel', xp: 59320, level: 52, rank: 1 },
      { id: 2, name: 'Tom Anderson', xp: 56780, level: 50, rank: 2 },
      { id: 3, name: 'Rachel Green', xp: 53210, level: 48, rank: 3 },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true },
      { id: 5, name: 'Mike Ross', xp: 44120, level: 40, rank: 5 },
    ],
    'cybersecurity': [
      { id: 1, name: 'Eve Martinez', xp: 71450, level: 61, rank: 1 },
      { id: 2, name: 'Ryan Black', xp: 68920, level: 59, rank: 2 },
      { id: 3, name: 'Alice Cooper', xp: 64310, level: 56, rank: 3 },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true },
      { id: 5, name: 'Bob White', xp: 42890, level: 39, rank: 5 },
    ],
    'cloud-devops': [
      { id: 1, name: 'Carlos Santos', xp: 63210, level: 55, rank: 1 },
      { id: 2, name: 'Jennifer Lee', xp: 60450, level: 53, rank: 2 },
      { id: 3, name: 'Ahmed Hassan', xp: 57890, level: 51, rank: 3 },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true },
      { id: 5, name: 'Linda Brown', xp: 45120, level: 41, rank: 5 },
    ],
    'game-dev': [
      { id: 1, name: 'Lucas Wright', xp: 69850, level: 60, rank: 1 },
      { id: 2, name: 'Mia Taylor', xp: 66320, level: 57, rank: 2 },
      { id: 3, name: 'Ethan Moore', xp: 62140, level: 54, rank: 3 },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true },
      { id: 5, name: 'Olivia Davis', xp: 43780, level: 40, rank: 5 },
    ],
  };

  const fieldName = selectedField?.name || 'Web Development';
  const fieldId = selectedField?.id || 'web-dev';
  const currentLeaderboard = leaderboardData[fieldId] || leaderboardData['web-dev'];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (rank) => {
    if (rank === 1) return 'from-yellow-500 to-yellow-600';
    if (rank === 2) return 'from-gray-400 to-gray-500';
    if (rank === 3) return 'from-amber-500 to-amber-600';
    return 'from-slate-600 to-slate-700';
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return null;
  };

  const getRankColor = (rank) => {
    if (rank === 1) return 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50';
    if (rank === 2) return 'from-gray-400/20 to-gray-500/20 border-gray-400/50';
    if (rank === 3) return 'from-amber-500/20 to-amber-600/20 border-amber-500/50';
    return 'from-quest-dark to-quest-dark border-gray-700';
  };

  const stats = [
    { icon: TrendingUp, label: 'Total XP', value: '47,350', color: 'from-emerald-700 to-emerald-600' },
    { icon: BookOpen, label: 'Quests Completed', value: '23', color: 'from-slate-600 to-blue-700' },
    { icon: Award, label: 'Achievements', value: '18', color: 'from-slate-700 to-purple-700' },
    { icon: Users, label: 'Guild Rank', value: '#127', color: 'from-blue-800 to-blue-600' },
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
        <h1 className="text-4xl font-bold text-white mb-2">Welcome back, John!</h1>
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

      {/* Leaderboard Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-quest-slate rounded-xl p-6 border border-gray-700 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
              <p className="text-sm text-gray-400">{fieldName} Rankings</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Your Rank</p>
            <p className="text-2xl font-bold text-blue-400">#{currentLeaderboard.find(u => u.isCurrentUser)?.rank || 'N/A'}</p>
          </div>
        </div>

        <div className="space-y-3">
          {currentLeaderboard.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              className={`relative rounded-lg p-4 border transition-all ${
                user.isCurrentUser 
                  ? 'bg-gradient-to-r from-blue-900/40 to-blue-800/40 border-blue-500/60 shadow-lg shadow-blue-500/20' 
                  : `bg-gradient-to-r ${getRankColor(user.rank)}`
              } hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-quest-dark/50 border border-gray-700">
                    {getRankIcon(user.rank) || (
                      <span className="text-xl font-bold text-gray-400">#{user.rank}</span>
                    )}
                  </div>

                  {/* Avatar */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${
                    user.isCurrentUser ? 'from-blue-500 to-blue-600' : getAvatarColor(user.rank)
                  } shadow-lg`}>
                    <span className="text-white font-bold text-sm">{getInitials(user.name)}</span>
                  </div>

                  {/* User Info */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className={`font-semibold ${
                        user.isCurrentUser ? 'text-blue-300' : 'text-white'
                      }`}>
                        {user.name}
                        {user.isCurrentUser && (
                          <span className="ml-2 text-xs px-2 py-1 bg-blue-500/30 rounded-full text-blue-300">
                            You
                          </span>
                        )}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400">Level {user.level}</p>
                  </div>
                </div>

                {/* XP */}
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xl font-bold text-white">{user.xp.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-400">Total XP</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="w-full mt-4 py-3 bg-quest-dark border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-slate-500 transition-all"
        >
          View Full Leaderboard
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
