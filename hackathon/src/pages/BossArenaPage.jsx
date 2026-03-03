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
  Star,
  Code as CodeIcon,
  CheckCircle,
  XCircle,
  Lightbulb
} from 'lucide-react';
import Confetti from 'react-confetti';
import { getChallengeForToday } from '../data/challenges';

const BossArena = ({ onBossModeChange }) => {
  const [bossHealth, setBossHealth] = useState(100);
  const [userHealth, setUserHealth] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [showVictory, setShowVictory] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [attempts, setAttempts] = useState(0);
  
  // Challenge system states
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHints, setShowHints] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Get syllabus status and current progress from localStorage
  const hasSyllabus = localStorage.getItem('syllabusUploaded') === 'true';
  const currentQuest = parseInt(localStorage.getItem('currentQuest') || '1', 10);
  const currentWeek = parseInt(localStorage.getItem('currentWeek') || '1', 10);
  const currentDay = localStorage.getItem('currentDay') || 'Monday';

  const bossData = {
    name: currentChallenge?.type === 'code' ? 'The Code Crusher' : 'The Quiz Master',
    level: currentChallenge?.difficulty === 'Hard' ? 50 : currentChallenge?.difficulty === 'Medium' ? 40 : 30,
    difficulty: currentChallenge?.difficulty?.toUpperCase() || 'MEDIUM',
    weakness: currentChallenge?.type === 'code' ? 'Clean Code' : 'Quick Thinking',
    attacks: currentChallenge?.type === 'code' 
      ? ['Syntax Error', 'Stack Overflow', 'Infinite Loop', 'Memory Leak']
      : ['Time Pressure', 'Confusion', 'Mind Tricks', 'Doubt'],
  };

  // Load challenge when battle starts
  useEffect(() => {
    if (isActive && !currentChallenge) {
      const challenge = getChallengeForToday(hasSyllabus, currentQuest, currentWeek, currentDay);
      setCurrentChallenge(challenge);
      if (challenge.type === 'code') {
        setUserAnswer(challenge.starterCode || '');
      }
    }
  }, [isActive, currentChallenge, hasSyllabus, currentQuest, currentWeek, currentDay]);

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
    setAttempts(0);
    setFeedback(null);
    setSelectedOption(null);
    setShowHints(false);
    // Challenge will be loaded by useEffect
  };

  const handleSubmitAnswer = () => {
    if (!currentChallenge) return;
    
    setAttempts(attempts + 1);
    
    if (currentChallenge.type === 'code') {
      // For code challenges, check if code is similar to solution
      // In a real app, you'd run the code or use more sophisticated checking
      const userCode = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
      const solutionCode = currentChallenge.solution.trim().toLowerCase().replace(/\s+/g, '');
      
      // Simple similarity check (in production, you'd want to actually run and test the code)
      const similarity = calculateSimilarity(userCode, solutionCode);
      
      if (similarity > 0.6) {
        // Correct answer!
        const damage = 40 + (similarity * 20);
        setBossHealth(Math.max(0, bossHealth - damage));
        setFeedback({ type: 'success', message: `Great code! Dealt ${damage.toFixed(0)} damage!` });
        setIsCorrect(true);
        
        if (bossHealth - damage <= 0) {
          handleDefeatBoss();
        }
      } else {
        // Wrong answer
        const counterDamage = 20;
        setUserHealth(Math.max(0, userHealth - counterDamage));
        setFeedback({ type: 'error', message: `Code needs improvement. Took ${counterDamage} damage!` });
        setIsCorrect(false);
        
        if (userHealth - counterDamage <= 0) {
          setFeedback({ type: 'error', message: 'You were defeated! Try again!' });
        }
      }
    } else {
      // Multiple choice
      if (!selectedOption) {
        setFeedback({ type: 'error', message: 'Please select an answer!' });
        return;
      }
      
      const correctOption = currentChallenge.options.find(opt => opt.isCorrect);
      
      if (selectedOption === correctOption.id) {
        // Correct!
        const damage = 50;
        setBossHealth(Math.max(0, bossHealth - damage));
        setFeedback({ 
          type: 'success', 
          message: `Correct! ${currentChallenge.explanation || 'Well done!'}`,
          damage 
        });
        setIsCorrect(true);
        
        if (bossHealth - damage <= 0) {
          handleDefeatBoss();
        }
      } else {
        // Wrong
        const counterDamage = 25;
        setUserHealth(Math.max(0, userHealth - counterDamage));
        setFeedback({ 
          type: 'error', 
          message: `Wrong! ${currentChallenge.explanation || 'Try again!'}`,
          damage: counterDamage 
        });
        setIsCorrect(false);
        
        if (userHealth - counterDamage <= 0) {
          setFeedback({ type: 'error', message: 'You were defeated! Try again!' });
        }
      }
    }
  };

  const calculateSimilarity = (str1, str2) => {
    // Simple Levenshtein distance-based similarity
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    return (longer.length - editDistance(longer, shorter)) / longer.length;
  };

  const editDistance = (str1, str2) => {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  const handleDefeatBoss = () => {
    setBossHealth(0);
    setShowConfetti(true);
    setTimeout(() => {
      setShowVictory(true);
      // Award XP (in production, save this to user profile)
      const xpEarned = currentChallenge?.xpReward || 500;
      console.log(`Earned ${xpEarned} XP!`);
    }, 500);
  };

  const handleReset = () => {
    setIsActive(false);
    setBossHealth(100);
    setUserHealth(100);
    setAttempts(0);
    setUserAnswer('');
    setSelectedOption(null);
    setShowVictory(false);
    setShowConfetti(false);
    setCurrentChallenge(null);
    setFeedback(null);
    setShowHints(false);
    setIsCorrect(false);
  };

  const handleNewChallenge = () => {
    const challenge = getChallengeForToday(hasSyllabus, currentQuest, currentWeek, currentDay);
    setCurrentChallenge(challenge);
    setBossHealth(100);
    setUserHealth(100);
    setAttempts(0);
    setUserAnswer(challenge.type === 'code' ? (challenge.starterCode || '') : '');
    setSelectedOption(null);
    setFeedback(null);
    setShowHints(false);
    setIsCorrect(false);
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
          isActive ? 'border-2 border-gray-600 shadow-xl' : 'border-2 border-gray-700'
        }`}
        style={{
          boxShadow: isActive ? '0 0 20px rgba(0, 0, 0, 0.5)' : 'none',
        }}
      >


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
                {hasSyllabus 
                  ? `Face today's challenge based on your ${currentDay} schedule (Week ${currentWeek})`
                  : `Face challenges from Quest ${currentQuest}!`
                }
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {hasSyllabus 
                  ? 'Challenges are generated from your uploaded syllabus'
                  : 'Complete default quests to unlock more challenges'
                }
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {hasSyllabus 
                  ? ['Week-based', 'Dynamic', 'Personalized', 'Adaptive'].map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/50 text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))
                  : ['HTML/CSS', 'JavaScript', 'Git', 'Projects'].map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/50 text-sm font-semibold"
                      >
                        {topic}
                      </span>
                    ))
                }
              </div>
            </div>
          ) : (
            // Active Battle State
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Challenge Area */}
              <div className="lg:col-span-2">
                {currentChallenge && (
                  <>
                    {/* Challenge Header */}
                    <div className="bg-quest-dark rounded-xl border border-gray-700 p-6 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {currentChallenge.type === 'code' ? (
                              <CodeIcon className="w-6 h-6 text-blue-400" />
                            ) : (
                              <Target className="w-6 h-6 text-purple-400" />
                            )}
                            <h3 className="text-2xl font-bold text-white">{currentChallenge.title}</h3>
                          </div>
                          <p className="text-gray-400">{currentChallenge.description || currentChallenge.question}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                          currentChallenge.difficulty === 'Easy' 
                            ? 'bg-green-500/20 text-green-400'
                            : currentChallenge.difficulty === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {currentChallenge.difficulty}
                        </span>
                      </div>

                      {currentChallenge.problem && (
                        <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                          <p className="text-sm text-gray-300 whitespace-pre-line">{currentChallenge.problem}</p>
                        </div>
                      )}
                    </div>

                    {/* Challenge Input Area */}
                    {currentChallenge.type === 'code' ? (
                      // Code Editor
                      <div className="bg-quest-dark rounded-xl border border-gray-700 overflow-hidden">
                        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <span className="ml-4 text-sm text-gray-400 font-mono">solution.js</span>
                          </div>
                          <span className="text-xs text-gray-500">Attempts: {attempts}</span>
                        </div>

                        <textarea
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="w-full h-80 bg-quest-dark text-green-400 font-mono text-sm p-4 focus:outline-none resize-none"
                          style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
                          placeholder="Write your code here..."
                        />

                        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-t border-gray-700">
                          <div className="flex items-center space-x-3">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleSubmitAnswer}
                              disabled={bossHealth === 0 || userHealth === 0}
                              className="px-4 py-2 bg-gradient-to-r from-slate-600 to-blue-700 text-white font-semibold rounded-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Play className="w-4 h-4" />
                              <span>Submit Code</span>
                            </motion.button>
                            
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setShowHints(!showHints)}
                              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-lg flex items-center space-x-2"
                            >
                              <Lightbulb className="w-4 h-4" />
                              <span>{showHints ? 'Hide' : 'Show'} Hints</span>
                            </motion.button>
                          </div>
                          
                          <span className="text-sm text-gray-400">XP: +{currentChallenge.xpReward}</span>
                        </div>
                      </div>
                    ) : (
                      // Multiple Choice
                      <div className="bg-quest-dark rounded-xl border border-gray-700 p-6">
                        <div className="space-y-3 mb-6">
                          {currentChallenge.options.map((option) => (
                            <motion.button
                              key={option.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setSelectedOption(option.id)}
                              disabled={feedback?.type === 'success'}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                selectedOption === option.id
                                  ? 'border-blue-500 bg-blue-500/20'
                                  : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                              } ${feedback?.type === 'success' && option.isCorrect ? 'border-green-500 bg-green-500/20' : ''}
                              ${feedback && selectedOption === option.id && !option.isCorrect ? 'border-red-500 bg-red-500/20' : ''}
                              disabled:cursor-not-allowed`}
                            >
                              <div className="flex items-center space-x-3">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                  selectedOption === option.id ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                                } ${feedback?.type === 'success' && option.isCorrect ? 'bg-green-500 text-white' : ''}
                                ${feedback && selectedOption === option.id && !option.isCorrect ? 'bg-red-500 text-white' : ''}`}>
                                  {option.id.toUpperCase()}
                                </span>
                                <span className="text-white">{option.text}</span>
                              </div>
                            </motion.button>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmitAnswer}
                            disabled={!selectedOption || bossHealth === 0 || userHealth === 0 || feedback?.type === 'success'}
                            className="px-6 py-3 bg-gradient-to-r from-slate-600 to-blue-700 text-white font-semibold rounded-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <CheckCircle className="w-5 h-5" />
                            <span>Submit Answer</span>
                          </motion.button>
                          
                          <span className="text-sm text-gray-400">XP: +{currentChallenge.xpReward}</span>
                        </div>
                      </div>
                    )}

                    {/* Hints Section */}
                    <AnimatePresence>
                      {showHints && currentChallenge.hints && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 bg-amber-500/10 rounded-xl border border-amber-500/50 p-4"
                        >
                          <h4 className="text-amber-400 font-semibold mb-3 flex items-center space-x-2">
                            <Lightbulb className="w-4 h-4" />
                            <span>Hints</span>
                          </h4>
                          <ul className="space-y-2">
                            {currentChallenge.hints.map((hint, index) => (
                              <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                                <span className="text-amber-400 mt-1">•</span>
                                <span>{hint}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Feedback Section */}
                    <AnimatePresence>
                      {feedback && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`mt-4 p-4 rounded-xl border-2 ${
                            feedback.type === 'success'
                              ? 'bg-green-500/10 border-green-500'
                              : 'bg-red-500/10 border-red-500'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            {feedback.type === 'success' ? (
                              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <p className={`font-semibold ${
                                feedback.type === 'success' ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {feedback.type === 'success' ? 'Correct!' : 'Incorrect!'}
                              </p>
                              <p className="text-gray-300 text-sm mt-1">{feedback.message}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

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
                  </>
                )}
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
                <div className="bg-blue-500/10 rounded-xl border border-blue-500/50 p-4">
                  <h4 className="text-blue-400 font-semibold mb-2 text-sm flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Challenge Info</span>
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {currentChallenge?.type === 'code' 
                      ? 'Write clean, working code to deal maximum damage!' 
                      : 'Choose the correct answer to defeat the boss!'}
                  </p>
                  {isCorrect && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNewChallenge}
                      className="w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-lg"
                    >
                      Next Challenge
                    </motion.button>
                  )}
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
                <p className="text-2xl text-white font-bold mb-2">Boss Defeated!</p>
                <p className="text-gray-400 mb-6">
                  You've proven your mastery and earned legendary rewards!
                </p>

                {/* Rewards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-quest-dark/60 rounded-lg p-4 border border-[#4ADE80]/50">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-yellow-400">+{currentChallenge?.xpReward || 500}</p>
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
