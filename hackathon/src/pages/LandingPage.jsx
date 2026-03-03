import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Trophy, 
  Target, 
  Users, 
  BookOpen, 
  Shield, 
  Star,
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle,
  Gamepad2,
  GraduationCap,
  Rocket
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '10K+', label: 'Active Learners', icon: Users },
    { value: '500+', label: 'Quests Completed', icon: Target },
    { value: '95%', label: 'Success Rate', icon: Trophy },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: 'Gamified Learning',
      description: 'Turn boring courses into epic quests. Earn XP, level up, and unlock achievements as you master new skills.'
    },
    {
      icon: Target,
      title: 'AI-Powered Roadmaps',
      description: 'Upload your syllabus and let AI create personalized learning paths tailored to your goals and schedule.'
    },
    {
      icon: Trophy,
      title: 'Boss Arena Challenges',
      description: 'Test your knowledge in intense boss battles. Answer questions correctly to defeat bosses and prove your mastery.'
    },
    {
      icon: GraduationCap,
      title: 'Skill Passport',
      description: 'Track your progress with a visual skill passport. Showcase your achievements and verified competencies.'
    },
    {
      icon: Users,
      title: 'Leaderboards',
      description: 'Compete with fellow learners. Climb the ranks and become the top player in your field.'
    },
    {
      icon: Sparkles,
      title: 'AI Mentor',
      description: 'Get instant help from your AI mentor. Ask questions, get explanations, and stay on track.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Web Developer',
      avatar: 'AC',
      content: 'QuestForge transformed how I learn. The gamification keeps me motivated, and I actually look forward to studying now!',
      xp: '12,450 XP'
    },
    {
      name: 'Sarah Miller',
      role: 'Data Scientist',
      avatar: 'SM',
      content: 'The AI-generated roadmaps are incredible. It understood my syllabus and created a perfect study plan.',
      xp: '8,920 XP'
    },
    {
      name: 'James Park',
      role: 'Cybersecurity Student',
      avatar: 'JP',
      content: 'Boss Arena is addictive! I never thought I would enjoy testing my knowledge this much.',
      xp: '15,200 XP'
    }
  ];

  return (
    <div className="min-h-screen bg-quest-dark overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-quest-dark/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">QuestForge AI</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/login')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Log In
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/register')}
                className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Learning Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Level Up Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Transform your education into an epic adventure. Complete quests, defeat bosses, 
                earn XP, and master new skills with AI-powered gamified learning.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/register')}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                >
                  <span>Start Your Quest</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <button className="flex items-center space-x-2 px-6 py-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main Quest Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-quest-slate border border-gray-700 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Current Quest</h3>
                    <p className="text-gray-400 text-sm">JavaScript Fundamentals</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-cyan-400 font-semibold">75%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold">+250 XP</span>
                  <span className="text-gray-500 text-sm">2 days left</span>
                </div>
              </motion.div>

              {/* Achievement Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  <div>
                    <p className="text-white font-bold text-sm">Achievement Unlocked!</p>
                    <p className="text-yellow-400 text-xs">First Quest Complete</p>
                  </div>
                </div>
              </motion.div>

              {/* Level Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-quest-slate border border-gray-700 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">12</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Current Level</p>
                    <p className="text-white font-bold">Intermediate</p>
                    <p className="text-cyan-400 text-xs">2,450 / 3,000 XP</p>
                  </div>
                </div>
              </motion.div>

              {/* Boss Battle Card */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-1/2 -right-8 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">Boss Arena</p>
                    <p className="text-red-400 text-xs">Challenge Ready!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Level Up</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to make learning addictive and effective
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-quest-slate border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-quest-slate/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Quest Begins
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Here</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start your learning adventure in just 3 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Path',
                description: 'Select your field of study - Web Dev, Data Science, Mobile, and more.',
                icon: Target
              },
              {
                step: '02',
                title: 'Upload Your Syllabus',
                description: 'Let AI analyze your course material and create a personalized quest map.',
                icon: BookOpen
              },
              {
                step: '03',
                title: 'Start Conquering',
                description: 'Complete quests, defeat bosses, and watch your skills level up!',
                icon: Rocket
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-cyan-500/10 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative bg-quest-slate border border-gray-700 rounded-2xl p-8 pt-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Loved by
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Learners</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our community has to say about their learning journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-quest-slate border border-gray-700 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-yellow-500/20 rounded-full">
                    <span className="text-yellow-400 text-sm font-semibold">{testimonial.xp}</span>
                  </div>
                </div>
                <p className="text-gray-400">{testimonial.content}</p>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/30">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Quest?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who have transformed their education into an epic adventure. 
                Your journey to mastery begins now.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/register')}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                >
                  <span>Create Free Account</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <button 
                  onClick={() => navigate('/login')}
                  className="px-8 py-4 text-gray-300 hover:text-white font-semibold transition-colors"
                >
                  Already have an account?
                </button>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">QuestForge AI</span>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 QuestForge AI. Powered by AI • Gamified Learning Platform
            </p>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
