import { motion } from 'framer-motion';
import { Map, Lock, CheckCircle, Clock, Zap, Award, ChevronRight } from 'lucide-react';
import { fieldRoadmaps } from '../data/roadmaps';

const QuestsPage = ({ selectedField }) => {
  if (!selectedField) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Map className="w-20 h-20 text-gray-600 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">No Learning Path Selected</h2>
        <p className="text-gray-400">
          Please select your IT field to view your personalized quest roadmap
        </p>
      </div>
    );
  }

  const roadmap = fieldRoadmaps[selectedField.id];
  const FieldIcon = selectedField.icon; // Assign to capitalized variable for JSX

  if (!roadmap) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Map className="w-20 h-20 text-red-600 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">No roadmap available</h2>
        <p className="text-gray-400">
          No roadmap found for field: {selectedField.id}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center space-x-3">
              <Map className="w-10 h-10 text-neon-blue" />
              <span>Quest Roadmap</span>
            </h1>
            <p className="text-gray-400">
              Your personalized learning path for <span className="text-neon-blue font-semibold">{selectedField.name}</span>
            </p>
          </div>
          
          <div className="text-right">
            <div className="px-6 py-3 bg-quest-slate rounded-xl border border-neon-blue/50">
              <p className="text-sm text-gray-400 mb-1">Total Quests</p>
              <p className="text-3xl font-bold text-white">
                {roadmap.phases.reduce((sum, phase) => sum + phase.quests.length, 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Field Info Banner */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`relative bg-gradient-to-r ${selectedField.color} rounded-xl p-6 overflow-hidden`}
        >
          <div className="relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FieldIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedField.name}</h3>
                <p className="text-white/90">{selectedField.description}</p>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm mb-1">Estimated Duration</p>
                <p className="text-xl font-bold text-white">{selectedField.duration}</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </motion.div>
      </motion.div>

      {/* Roadmap Phases */}
      <div className="space-y-8">
        {roadmap.phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + phaseIndex * 0.1 }}
            className="relative"
          >
            {/* Phase Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-electric-blue rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                     style={{
                       boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                     }}>
                  {phase.phase}
                </div>
                {phaseIndex < roadmap.phases.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-neon-blue to-transparent" />
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-1">
                  Phase {phase.phase}: {phase.name}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{phase.duration}</span>
                  </span>
                  <span>•</span>
                  <span>{phase.quests.length} Quests</span>
                  <span>•</span>
                  <span className="text-yellow-400 font-semibold">
                    {phase.quests.reduce((sum, q) => sum + q.xp, 0)} Total XP
                  </span>
                </div>
              </div>
            </div>

            {/* Quests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-20">
              {phase.quests.map((quest, questIndex) => (
                <motion.div
                  key={quest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + phaseIndex * 0.1 + questIndex * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative bg-quest-slate rounded-xl p-6 border-2 cursor-pointer transition-all ${
                    quest.type === 'core'
                      ? 'border-electric-blue hover:shadow-lg hover:shadow-electric-blue/30'
                      : 'border-neon-purple hover:shadow-lg hover:shadow-neon-purple/30'
                  }`}
                >
                  {/* Quest Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      quest.type === 'core'
                        ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/50'
                        : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/50'
                    }`}>
                      {quest.type === 'core' ? 'CORE' : 'SIDE QUEST'}
                    </span>
                    <Lock className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Quest Title */}
                  <h3 className="text-lg font-bold text-white mb-3">{quest.title}</h3>

                  {/* Quest Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Difficulty</span>
                      <span className={`font-semibold ${
                        quest.difficulty === 'Expert' || quest.difficulty === 'Hard'
                          ? 'text-red-400'
                          : quest.difficulty === 'Medium'
                          ? 'text-yellow-400'
                          : 'text-green-400'
                      }`}>
                        {quest.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Time</span>
                      </span>
                      <span className="text-white">{quest.estimatedTime}</span>
                    </div>
                  </div>

                  {/* XP Reward */}
                  <div className={`flex items-center justify-between p-3 rounded-lg ${
                    quest.type === 'core'
                      ? 'bg-electric-blue/10 border border-electric-blue/30'
                      : 'bg-neon-purple/10 border border-neon-purple/30'
                  }`}>
                    <span className="text-sm text-gray-300 font-medium flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>Reward</span>
                    </span>
                    <span className={`text-lg font-bold ${
                      quest.type === 'core' ? 'text-electric-blue' : 'text-neon-purple'
                    }`}>
                      +{quest.xp} XP
                    </span>
                  </div>

                  {/* Start Arrow */}
                  <motion.div
                    className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity`}
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completion Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex flex-col items-center bg-quest-slate rounded-2xl p-8 border-2 border-yellow-500/50">
          <Award className="w-16 h-16 text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Completion Reward</h3>
          <p className="text-gray-400 mb-4">
            Complete all quests to earn the {selectedField.name} Master Certificate
          </p>
          <div className="flex items-center space-x-2 text-yellow-400 font-bold text-xl">
            <Zap className="w-6 h-6" />
            <span>
              +{roadmap.phases.reduce((sum, phase) => 
                sum + phase.quests.reduce((qSum, q) => qSum + q.xp, 0), 0
              )} Total XP
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestsPage;
