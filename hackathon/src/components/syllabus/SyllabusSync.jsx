import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const SyllabusSync = ({ onAnalyze }) => {
  const [syllabusText, setSyllabusText] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleAnalyze = () => {
    if (syllabusText.trim()) {
      setIsScanning(true);
      // Simulate analysis time
      setTimeout(() => {
        setIsScanning(false);
        if (onAnalyze) {
          onAnalyze(syllabusText);
        }
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center space-x-3 mb-4"
        >
          <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-neon-blue" />
          </div>
          <h2 className="text-3xl font-bold text-white">Syllabus Sync Portal</h2>
        </motion.div>
        <p className="text-gray-400">Paste your course syllabus and let AI transform it into epic quests</p>
      </div>

      {/* Main Portal Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative bg-quest-slate rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
      >
        {/* Animated Border Glow */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-electric-blue/20 to-neon-purple/20 pointer-events-none"
          style={{ borderRadius: '1rem' }}
        />

        <div className="relative p-8">
          {/* Text Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Course Syllabus / Learning Materials
            </label>
            <textarea
              value={syllabusText}
              onChange={(e) => setSyllabusText(e.target.value)}
              disabled={isScanning}
              placeholder="Paste your syllabus here... Include topics, modules, learning objectives, or any course content you want to transform into quests."
              className="w-full h-64 bg-quest-dark/70 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/30 transition-all resize-none disabled:opacity-50"
            />
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center">
            <motion.button
              onClick={handleAnalyze}
              disabled={!syllabusText.trim() || isScanning}
              whileHover={!isScanning ? { scale: 1.05 } : {}}
              whileTap={!isScanning ? { scale: 0.95 } : {}}
              className={`relative px-8 py-4 rounded-xl font-semibold text-white transition-all overflow-hidden ${
                isScanning
                  ? 'bg-neon-blue/30 cursor-not-allowed'
                  : syllabusText.trim()
                  ? 'bg-gradient-to-r from-neon-blue to-electric-blue hover:shadow-lg hover:shadow-neon-blue/50'
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
            >
              {/* Button Background Animation */}
              {syllabusText.trim() && !isScanning && (
                <motion.div
                  animate={{
                    x: [-100, 500],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              )}
              
              <span className="relative flex items-center space-x-2">
                {isScanning ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Analyzing Syllabus...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Analyze & Generate Quests</span>
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Scanning Animation Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-quest-dark/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10"
          >
            {/* Rotating Neon Blue Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="relative w-32 h-32 mb-6"
            >
              <div className="absolute inset-0 border-4 border-transparent border-t-neon-blue border-r-neon-blue rounded-full"
                   style={{
                     boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.3)',
                   }}
              />
              <div className="absolute inset-4 border-4 border-transparent border-b-electric-blue border-l-electric-blue rounded-full"
                   style={{
                     boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
                   }}
              />
            </motion.div>

            {/* Scanning Text */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-2">Scanning Syllabus</h3>
              <p className="text-gray-400">AI is analyzing and creating your quest path...</p>
            </motion.div>

            {/* Progress Indicators */}
            <div className="mt-6 space-y-2">
              {['Extracting Topics', 'Mapping Dependencies', 'Generating Quests'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.5, duration: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      delay: index * 0.5,
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="w-2 h-2 bg-neon-blue rounded-full"
                  />
                  <span className="text-sm text-gray-300">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SyllabusSync;
