import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  BookOpen, 
  Trophy, 
  Medal, 
  Crown, 
  Sparkles,
  Target,
  Shield,
  Swords,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';

const Dashboard = ({ selectedField }) => {
  const navigate = useNavigate();
  
  // Leaderboard data organized by field
  const leaderboardData = {
    'web-dev': [
      { id: 1, name: 'Alex Chen', xp: 52480, level: 47, rank: 1, avatar: 'https://i.pravatar.cc/150?img=12' },
      { id: 2, name: 'Sarah Kim', xp: 51230, level: 46, rank: 2, avatar: 'https://i.pravatar.cc/150?img=5' },
      { id: 3, name: 'Marcus Johnson', xp: 48920, level: 45, rank: 3, avatar: 'https://i.pravatar.cc/150?img=53' },
      { id: 4, name: 'Emily Rodriguez', xp: 47350, level: 44, rank: 4, avatar: 'https://i.pravatar.cc/150?img=47' },
      { id: 5, name: 'John Doe', xp: 47350, level: 42, rank: 5, isCurrentUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
      { id: 6, name: 'David Park', xp: 45120, level: 41, rank: 6, avatar: 'https://i.pravatar.cc/150?img=14' },
      { id: 7, name: 'Sophie Zhang', xp: 43890, level: 40, rank: 7, avatar: 'https://i.pravatar.cc/150?img=32' },
      { id: 8, name: 'James Wilson', xp: 42150, level: 39, rank: 8, avatar: 'https://i.pravatar.cc/150?img=59' },
    ],
    'data-science': [
      { id: 1, name: 'Dr. Lisa Wang', xp: 68920, level: 58, rank: 1, avatar: 'https://i.pravatar.cc/150?img=26' },
      { id: 2, name: 'Robert Chen', xp: 65340, level: 56, rank: 2, avatar: 'https://i.pravatar.cc/150?img=11' },
      { id: 3, name: 'Maya Patel', xp: 61230, level: 54, rank: 3, avatar: 'https://i.pravatar.cc/150?img=23' },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
      { id: 5, name: 'Kevin Liu', xp: 45890, level: 41, rank: 5, avatar: 'https://i.pravatar.cc/150?img=17' },
    ],
    'mobile-dev': [
      { id: 1, name: 'Nina Patel', xp: 59320, level: 52, rank: 1, avatar: 'https://i.pravatar.cc/150?img=44' },
      { id: 2, name: 'Tom Anderson', xp: 56780, level: 50, rank: 2, avatar: 'https://i.pravatar.cc/150?img=60' },
      { id: 3, name: 'Rachel Green', xp: 53210, level: 48, rank: 3, avatar: 'https://i.pravatar.cc/150?img=49' },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
      { id: 5, name: 'Mike Ross', xp: 44120, level: 40, rank: 5, avatar: 'https://i.pravatar.cc/150?img=18' },
    ],
    'cybersecurity': [
      { id: 1, name: 'Eve Martinez', xp: 71450, level: 61, rank: 1, avatar: 'https://i.pravatar.cc/150?img=41' },
      { id: 2, name: 'Ryan Black', xp: 68920, level: 59, rank: 2, avatar: 'https://i.pravatar.cc/150?img=57' },
      { id: 3, name: 'Alice Cooper', xp: 64310, level: 56, rank: 3, avatar: 'https://i.pravatar.cc/150?img=45' },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
      { id: 5, name: 'Bob White', xp: 42890, level: 39, rank: 5, avatar: 'https://i.pravatar.cc/150?img=15' },
    ],
    'cloud-devops': [
      { id: 1, name: 'Carlos Santos', xp: 63210, level: 55, rank: 1, avatar: 'https://i.pravatar.cc/150?img=33' },
      { id: 2, name: 'Jennifer Lee', xp: 60450, level: 53, rank: 2, avatar: 'https://i.pravatar.cc/150?img=38' },
      { id: 3, name: 'Ahmed Hassan', xp: 57890, level: 51, rank: 3, avatar: 'https://i.pravatar.cc/150?img=51' },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
      { id: 5, name: 'Linda Brown', xp: 45120, level: 41, rank: 5, avatar: 'https://i.pravatar.cc/150?img=31' },
    ],
    'game-dev': [
      { id: 1, name: 'Lucas Wright', xp: 69850, level: 60, rank: 1, avatar: 'https://i.pravatar.cc/150?img=52' },
      { id: 2, name: 'Mia Taylor', xp: 66320, level: 57, rank: 2, avatar: 'https://i.pravatar.cc/150?img=25' },
      { id: 3, name: 'Ethan Moore', xp: 62140, level: 54, rank: 3, avatar: 'https://i.pravatar.cc/150?img=56' },
      { id: 4, name: 'John Doe', xp: 47350, level: 42, rank: 4, isCurrentUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
      { id: 5, name: 'Olivia Davis', xp: 43780, level: 40, rank: 5, avatar: 'https://i.pravatar.cc/150?img=20' },
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

  // Check syllabus status from localStorage
  const syllabusUploaded = localStorage.getItem('syllabusUploaded') === 'true';
  const currentQuest = localStorage.getItem('currentQuest') || '1';
  const currentWeek = localStorage.getItem('currentWeek') || '1';

  // Feature cards data
  const featureCards = [
    {
      id: 'syllabus',
      title: 'Syllabus Sync',
      icon: FileText,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      status: syllabusUploaded ? 'Synced' : 'Not Synced',
      statusColor: syllabusUploaded ? 'text-emerald-400' : 'text-yellow-400',
      description: syllabusUploaded 
        ? `Week ${currentWeek} - Learning in progress` 
        : 'Upload your syllabus to get personalized quests',
      progress: syllabusUploaded ? 35 : 0,
      action: () => navigate('/login/syllabus'),
      buttonText: syllabusUploaded ? 'View Schedule' : 'Upload Syllabus',
    },
    {
      id: 'quests',
      title: 'Quests',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      status: `Quest ${currentQuest}`,
      statusColor: 'text-purple-400',
      description: 'Complete quests to earn XP and level up your skills',
      progress: 45,
      action: () => navigate('/login/quests'),
      buttonText: 'View Quests',
      stats: { completed: 2, total: 3 },
    },
    {
      id: 'boss',
      title: 'Boss Arena',
      icon: Swords,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/30',
      status: syllabusUploaded ? 'Challenge Ready' : 'Locked',
      statusColor: syllabusUploaded ? 'text-emerald-400' : 'text-gray-500',
      description: syllabusUploaded 
        ? 'Test your knowledge against AI bosses' 
        : 'Complete syllabus sync to unlock',
      progress: 0,
      action: () => navigate('/login/bossArena'),
      buttonText: syllabusUploaded ? 'Enter Arena' : 'Locked',
      locked: !syllabusUploaded,
    },
  ];

  // Quick stats
  const quickStats = [
    { icon: Zap, label: 'Total XP', value: '2,450', color: 'text-yellow-400' },
    { icon: CheckCircle, label: 'Quests Done', value: '2', color: 'text-emerald-400' },
    { icon: Shield, label: 'Bosses Defeated', value: '0', color: 'text-red-400' },
    { icon: Clock, label: 'Study Streak', value: '3 days', color: 'text-cyan-400' },
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 text-left">Welcome back, Adventurer!</h1>
            <p className="text-gray-400 text-left">Ready to continue your learning journey in {fieldName}?</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-quest-slate rounded-xl px-4 py-3 lg:px-6 lg:py-4 border border-gray-700">
            {quickStats.map((stat, index) => (
              <div key={stat.label} className={`flex items-center space-x-2 ${index > 0 ? 'md:pl-4 md:border-l md:border-gray-700' : ''}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-base lg:text-lg font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
      >
        {featureCards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            whileHover={{ scale: card.locked ? 1 : 1.02, y: card.locked ? 0 : -5 }}
            className={`relative bg-gradient-to-br ${card.bgColor} rounded-2xl p-6 border ${card.borderColor} shadow-xl overflow-hidden flex flex-col h-full min-h-[320px] ${
              card.locked ? 'opacity-60' : ''
            }`}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`px-3 py-1 rounded-full bg-quest-dark/50 ${card.statusColor} text-sm font-semibold`}>
                  {card.status}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{card.title}</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">{card.description}</p>

              {/* Content area - grows to fill space */}
              <div className="flex-grow">
                {/* Progress bar (if applicable) */}
                {card.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-semibold">{card.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-quest-dark/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${card.progress}%` }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${card.color} rounded-full`}
                      />
                    </div>
                  </div>
                )}

                {/* Stats (for quests) */}
                {card.stats && (
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-gray-300">{card.stats.completed}/{card.stats.total} completed</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: card.locked ? 1 : 1.05 }}
                whileTap={{ scale: card.locked ? 1 : 0.95 }}
                onClick={card.locked ? undefined : card.action}
                disabled={card.locked}
                className={`mt-auto w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold transition-all ${
                  card.locked 
                    ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed' 
                    : `bg-gradient-to-r ${card.color} text-white hover:shadow-lg`
                }`}
              >
                <span>{card.buttonText}</span>
                {!card.locked && <ArrowRight className="w-4 h-4" />}
              </motion.button>
            </div>
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
                  <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg ring-2 ${
                    user.isCurrentUser ? 'ring-blue-500' : user.rank <= 3 ? 'ring-amber-500/50' : 'ring-gray-600'
                  }`}>
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
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
