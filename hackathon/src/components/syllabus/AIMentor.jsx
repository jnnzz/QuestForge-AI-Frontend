import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, ArrowRight, Sparkles } from 'lucide-react';

const AIMentor = ({ suggestions = [] }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);

  // Default suggestions if none provided
  const defaultSuggestions = [
    {
      id: 1,
      topic: 'Loops',
      message: 'Low mastery in Loops detected—Try this Side Quest!',
      questTitle: 'Loop Mastery Challenge',
      type: 'side',
    },
    {
      id: 2,
      topic: 'Array Methods',
      message: 'Strengthen your Array Methods skills with this bonus quest!',
      questTitle: 'Array Ninja Training',
      type: 'side',
    },
  ];

  const displaySuggestions = suggestions.length > 0 ? suggestions : defaultSuggestions;
  const currentSuggestion = displaySuggestions[currentSuggestionIndex];

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleNextSuggestion = () => {
    if (currentSuggestionIndex < displaySuggestions.length - 1) {
      setCurrentSuggestionIndex(currentSuggestionIndex + 1);
    } else {
      setIsVisible(false);
    }
  };

  if (!isVisible || displaySuggestions.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed bottom-8 right-8 z-50 max-w-sm"
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(139, 92, 246, 0.4)',
              '0 0 40px rgba(139, 92, 246, 0.7)',
              '0 0 20px rgba(139, 92, 246, 0.4)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative bg-quest-slate rounded-2xl border-2 border-[#8B5CF6] overflow-hidden shadow-2xl"
        >
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-transparent to-neon-purple/20 pointer-events-none"
          />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 z-10 p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-white" />
          </button>

          <div className="relative p-6">
            {/* AI Mentor Header */}
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                }}
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-white font-bold flex items-center space-x-1">
                  <span>AI Mentor</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                  </motion.div>
                </h3>
                <p className="text-xs text-gray-400">Adaptive Learning Assistant</p>
              </div>
            </div>

            {/* Suggestion Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-quest-dark/60 rounded-lg p-4 mb-4 border border-[#8B5CF6]/30"
            >
              <div className="flex items-start space-x-2 mb-3">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mt-1.5 animate-pulse" />
                <p className="text-white text-sm leading-relaxed">
                  {currentSuggestion.message}
                </p>
              </div>

              {/* Suggested Quest */}
              <div className="bg-[#8B5CF6]/10 rounded-lg p-3 border border-[#8B5CF6]/40">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Recommended Quest</p>
                    <p className="text-white font-semibold text-sm">{currentSuggestion.questTitle}</p>
                  </div>
                  <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs font-bold rounded border border-neon-purple/50">
                    BONUS
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextSuggestion}
                className="flex-1 bg-gradient-to-r from-[#8B5CF6] to-purple-600 hover:from-[#7C3AED] hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center space-x-2"
                style={{
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
                }}
              >
                <span className="text-sm">Start Quest</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDismiss}
                className="px-4 py-2.5 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors text-sm font-medium"
              >
                Later
              </motion.button>
            </div>

            {/* Suggestion Counter */}
            {displaySuggestions.length > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-4">
                {displaySuggestions.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: index === currentSuggestionIndex ? 1.2 : 1,
                      opacity: index === currentSuggestionIndex ? 1 : 0.4,
                    }}
                    className={`w-2 h-2 rounded-full ${
                      index === currentSuggestionIndex ? 'bg-[#8B5CF6]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 40 - 20],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#8B5CF6] rounded-full"
                style={{ left: `${20 + i * 15}%` }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIMentor;
