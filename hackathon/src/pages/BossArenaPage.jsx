import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Skull, 
  Heart, 
  Zap, 
  Shield, 
  Target, 
  Play, 
  RotateCcw,
  Trophy,
  Star
} from 'lucide-react';
import Confetti from 'react-confetti';

const BossArena = ({ onBossModeChange }) => {
  const [bossHealth, setBossHealth] = useState(100);
  const [userHealth, setUserHealth] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [code, setCode] = useState('// Write your solution here...\nfunction solveProblem() {\n  \n}');
  const [showVictory, setShowVictory] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const bossData = {
    name: 'The Algorithm Dragon',
    level: 45,
    difficulty: 'LEGENDARY',
    weakness: 'Optimized Code',
    attacks: ['Stack Overflow', 'Infinite Loop', 'Memory Leak', 'Null Pointer'],
  };

  useEffect(() => {
    if (onBossModeChange) {
      onBossModeChange(isActive);
    }
  }, [isActive, onBossModeChange]);

  const handleStartBattle = () => {
    setIsActive(true);
    setBossHealth(100);
    setUserHealth(100);
    setShowVictory(false);
    setShowConfetti(false);
  };

  const handleRunCode = () => {
    setAttempts(attempts + 1);
    // Simulate code execution and damage
    const damage = Math.floor(Math.random() * 20) + 10;
    setBossHealth(Math.max(0, bossHealth - damage));
    
    // Boss counter-attack
    if (bossHealth > damage) {
      const counterDamage = Math.floor(Math.random() * 15) + 5;
      setUserHealth(Math.max(0, userHealth - counterDamage));
    }
  };

  const handleDefeatBoss = () => {
    setBossHealth(0);
    setShowConfetti(true);
    setTimeout(() => {
      setShowVictory(true);
    }, 500);
  };

  const handleReset = () => {
    setIsActive(false);
    setBossHealth(100);
    setUserHealth(100);
    setAttempts(0);
    setCode('// Write your solution here...\nfunction solveProblem() {\n  \n}');
    setShowVictory(false);
    setShowConfetti(false);
  };

  return (
    <div className="relative">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center space-x-3">
              <Skull className="w-10 h-10 text-red-500" />
              <span>Boss Fight Arena</span>
            </h1>
            <p className="text-gray-400">
              Face the ultimate coding challenge and prove your mastery
            </p>
          </div>
          {!isActive ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartBattle}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg shadow-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Start Battle</span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg flex items-center space-x-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reset Arena</span>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Battle Arena */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative rounded-2xl overflow-hidden ${
          isActive ? 'border-4 border-red-500 shadow-2xl' : 'border-2 border-gray-700'
        }`}
        style={{
          boxShadow: isActive ? '0 0 40px rgba(239, 68, 68, 0.6)' : 'none',
        }}
      >
        {/* Pulsing Border Animation */}
        {isActive && (
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 border-4 border-red-500 rounded-2xl pointer-events-none"
            style={{
              boxShadow: '0 0 60px rgba(239, 68, 68, 0.8), inset 0 0 40px rgba(239, 68, 68, 0.3)',
            }}
          />
        )}

        <div className="relative bg-quest-slate p-6">
          {!isActive ? (
            // Pre-Battle State
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
              >
                <Skull className="w-20 h-20 text-red-500" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-3">Ready for Battle?</h2>
              <p className="text-gray-400 max-w-md mb-6">
                Enter the arena to face off against legendary code challenges. 
                Write optimized solutions to defeat the boss!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Arrays', 'Dynamic Programming', 'Graphs', 'Recursion'].map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/50 text-sm font-semibold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            // Active Battle State
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Code Editor */}
              <div className="lg:col-span-2">
                <div className="bg-quest-dark rounded-xl border border-gray-700 overflow-hidden">
                  {/* Editor Header */}
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="ml-4 text-sm text-gray-400 font-mono">solution.js</span>
                    </div>
                    <span className="text-xs text-gray-500">Attempts: {attempts}</span>
                  </div>

                  {/* Code Area */}
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-96 bg-quest-dark text-green-400 font-mono text-sm p-4 focus:outline-none resize-none"
                    style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
                  />

                  {/* Action Buttons */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center space-x-3 border-t border-gray-700">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleRunCode}
                      disabled={bossHealth === 0}
                      className="px-4 py-2 bg-gradient-to-r from-neon-blue to-electric-blue text-white font-semibold rounded-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Play className="w-4 h-4" />
                      <span>Run Code</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDefeatBoss}
                      disabled={bossHealth === 0}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Target className="w-4 h-4" />
                      <span>Defeat Boss</span>
                    </motion.button>
                  </div>
                </div>

                {/* User Health Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-quest-dark rounded-lg p-4 border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-green-400" />
                      <span className="text-white font-semibold">Your Health</span>
                    </div>
                    <span className="text-green-400 font-bold">{userHealth}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: `${userHealth}%` }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                      style={{
                        boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)',
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right: Boss Stats Panel */}
              <div className="space-y-6">
                {/* Boss Card */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(239, 68, 68, 0.4)',
                      '0 0 40px rgba(239, 68, 68, 0.7)',
                      '0 0 20px rgba(239, 68, 68, 0.4)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-br from-red-900/50 to-quest-dark rounded-xl border-2 border-red-500 p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center"
                    >
                      <Skull className="w-10 h-10 text-red-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{bossData.name}</h3>
                      <p className="text-sm text-red-400">Level {bossData.level}</p>
                    </div>
                  </div>

                  {/* Boss Health Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Boss Health</span>
                      <span className="text-red-400 font-bold">{bossHealth}%</span>
                    </div>
                    <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden border border-red-500/50">
                      <motion.div
                        animate={{ width: `${bossHealth}%` }}
                        className="h-full bg-gradient-to-r from-red-600 to-red-400"
                        style={{
                          boxShadow: '0 0 15px rgba(239, 68, 68, 0.8)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Boss Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>Difficulty</span>
                      </span>
                      <span className="text-red-400 font-bold">{bossData.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>Weakness</span>
                      </span>
                      <span className="text-white font-semibold">{bossData.weakness}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 flex items-center space-x-1">
                        <Zap className="w-4 h-4" />
                        <span>Reward</span>
                      </span>
                      <span className="text-yellow-400 font-bold">+2500 XP</span>
                    </div>
                  </div>
                </motion.div>

                {/* Boss Attacks */}
                <div className="bg-quest-dark rounded-xl border border-red-500/50 p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-red-500" />
                    <span>Boss Attacks</span>
                  </h4>
                  <div className="space-y-2">
                    {bossData.attacks.map((attack, index) => (
                      <motion.div
                        key={attack}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-gray-300">{attack}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Battle Tips */}
                <div className="bg-neon-blue/10 rounded-xl border border-neon-blue/50 p-4">
                  <h4 className="text-neon-blue font-semibold mb-2 text-sm">💡 Tip</h4>
                  <p className="text-gray-400 text-sm">
                    Optimize your algorithm to deal maximum damage. Efficient solutions deal critical hits!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Victory Modal */}
      <AnimatePresence>
        {showVictory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowVictory(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-quest-slate to-quest-dark rounded-3xl border-4 border-[#4ADE80] p-8 max-w-lg w-full text-center relative overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(74, 222, 128, 0.6)',
              }}
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/20 to-transparent pointer-events-none"
              />

              <div className="relative">
                {/* Trophy Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-[#4ADE80] rounded-full mb-6"
                  style={{
                    boxShadow: '0 0 40px rgba(74, 222, 128, 0.8)',
                  }}
                >
                  <Trophy className="w-14 h-14 text-white" />
                </motion.div>

                {/* Victory Text */}
                <motion.h2
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-5xl font-bold text-[#4ADE80] mb-4"
                >
                  LEVEL UP!
                </motion.h2>
                <p className="text-2xl text-white font-bold mb-2">Boss Defeated! 🎉</p>
                <p className="text-gray-400 mb-6">
                  You've proven your mastery and earned legendary rewards!
                </p>

                {/* Rewards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-quest-dark/60 rounded-lg p-4 border border-[#4ADE80]/50">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-yellow-400">+2500</p>
                    <p className="text-xs text-gray-400">XP Earned</p>
                  </div>
                  <div className="bg-quest-dark/60 rounded-lg p-4 border border-[#4ADE80]/50">
                    <Star className="w-6 h-6 text-[#4ADE80] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-[#4ADE80]">43</p>
                    <p className="text-xs text-gray-400">New Level</p>
                  </div>
                  <div className="bg-quest-dark/60 rounded-lg p-4 border border-[#4ADE80]/50">
                    <Trophy className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-400">1</p>
                    <p className="text-xs text-gray-400">Achievement</p>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowVictory(false)}
                  className="px-8 py-3 bg-gradient-to-r from-[#4ADE80] to-emerald-400 text-white font-bold rounded-lg shadow-lg"
                  style={{
                    boxShadow: '0 4px 20px rgba(74, 222, 128, 0.5)',
                  }}
                >
                  Continue Adventure
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BossArena;
