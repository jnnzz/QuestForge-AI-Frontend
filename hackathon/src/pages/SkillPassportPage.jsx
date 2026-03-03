import { motion } from 'framer-motion';
import { 
  Award, 
  Download, 
  Star, 
  Trophy, 
  Zap, 
  Code, 
  CheckCircle,
  TrendingUp,
  Calendar,
  Shield
} from 'lucide-react';

const SkillPassport = () => {
  const userData = {
    name: 'John Doe',
    title: 'Elite Learner',
    level: 42,
    totalXP: 47350,
    joinDate: 'January 2026',
    certificateId: 'QF-2026-JD-42-ELITE',
    rank: '#127',
    guild: 'Code Warriors',
  };

  const skills = [
    { name: 'React.js', level: 95, category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', level: 88, category: 'Language', color: 'from-blue-500 to-indigo-500' },
    { name: 'Node.js', level: 82, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Algorithms', level: 90, category: 'Core CS', color: 'from-purple-500 to-pink-500' },
    { name: 'System Design', level: 75, category: 'Architecture', color: 'from-orange-500 to-red-500' },
    { name: 'CSS/Tailwind', level: 92, category: 'Styling', color: 'from-pink-500 to-rose-500' },
  ];

  const achievements = [
    { icon: Trophy, title: 'Boss Slayer', description: 'Defeated 5 legendary bosses', rarity: 'Legendary' },
    { icon: Zap, title: 'Speed Runner', description: 'Completed 10 quests in 24 hours', rarity: 'Epic' },
    { icon: Star, title: 'Perfect Score', description: 'Achieved 100% on 15 quests', rarity: 'Rare' },
    { icon: Code, title: 'Code Master', description: 'Submitted 500 solutions', rarity: 'Rare' },
  ];

  const stats = [
    { label: 'Quests Completed', value: '156', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Total XP Earned', value: '47,350', icon: Zap, color: 'text-yellow-400' },
    { label: 'Win Streak', value: '12 Days', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Global Rank', value: '#127', icon: Trophy, color: 'text-purple-400' },
  ];

  const handleDownloadPDF = () => {
    // Simulate PDF download
    console.log('Downloading Skill Passport PDF...');
    alert('PDF download will be implemented with backend integration!');
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center space-x-3">
            <Award className="w-10 h-10 text-purple-400" />
            <span>Skill Passport</span>
          </h1>
          <p className="text-gray-400">Your comprehensive learning achievements</p>
        </div>
        
        {/* Download Button */}
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 10px 30px rgba(59, 130, 246, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold rounded-lg flex items-center space-x-2 shadow-lg transition-all"
          style={{
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
          }}
        >
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </motion.button>
      </motion.div>

      {/* Main Digital Certificate - Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl overflow-hidden mb-8"
        style={{
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-full h-full"
          />
        </div>

        <div className="relative p-12">
          {/* Certificate Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-blue-700 rounded-full mb-6"
              style={{
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)',
              }}
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-xl text-gray-400 mb-2">QuestForge AI Learning Platform</h2>
            <h3 className="text-5xl font-bold text-white mb-4">{userData.name}</h3>
            <p className="text-xl text-purple-400 font-semibold">{userData.title}</p>
          </div>

          {/* Certificate Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Level</p>
              <p className="text-3xl font-bold text-white">{userData.level}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Total XP</p>
              <p className="text-3xl font-bold text-yellow-400">{userData.totalXP.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Global Rank</p>
              <p className="text-3xl font-bold text-purple-400">{userData.rank}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Member Since</p>
              <p className="text-lg font-semibold text-white">{userData.joinDate}</p>
            </div>
          </div>

          {/* Certificate ID */}
          <div className="text-center py-4 border-t border-b border-gray-700/50">
            <p className="text-sm text-gray-400 mb-1">Certificate ID</p>
            <p className="text-lg font-mono text-blue-400">{userData.certificateId}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative rounded-xl overflow-hidden"
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="p-6">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-2xl overflow-hidden mb-8"
        style={{
          background: 'rgba(30, 41, 59, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Code className="w-6 h-6 text-blue-400" />
            <span>Skill Mastery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="ml-2 text-xs text-gray-400">{skill.category}</span>
                  </div>
                  <span className="text-white font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    style={{
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(30, 41, 59, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span>Achievements Unlocked</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-quest-dark/50 border border-gray-700/50"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  achievement.rarity === 'Legendary' ? 'bg-yellow-500/20' :
                  achievement.rarity === 'Epic' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.rarity === 'Legendary' ? 'text-yellow-400' :
                    achievement.rarity === 'Epic' ? 'text-purple-400' : 'text-blue-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-white font-semibold">{achievement.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      achievement.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      achievement.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {achievement.rarity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center text-gray-500 text-sm"
      >
        <p>This digital passport is verified and authenticated by QuestForge AI</p>
        <p className="flex items-center justify-center space-x-1 mt-2">
          <Calendar className="w-4 h-4" />
          <span>Generated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </p>
      </motion.div>
    </div>
  );
};

export default SkillPassport;
