import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { fields } from '../../data/fields';

const FieldSelection = ({ onFieldSelect }) => {
  
  const handleFieldSelect = (field) => {
    // Set default quest to 1 for users who haven't uploaded syllabus
    localStorage.setItem('currentQuest', '1');
    localStorage.setItem('syllabusUploaded', 'false');
    
    // Call parent handler
    onFieldSelect(field);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="flex flex-col items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-slate-600 to-blue-700 rounded-full mb-6"
            style={{
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.6)',
            }}
          >
            <Zap className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Choose Your Quest Path
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select your IT field to unlock a personalized learning roadmap with curated quests
          </p>
        </motion.div>

        {/* Fields Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full"
        >
          {fields.map((field, index) => (
            <motion.button
              key={field.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleFieldSelect(field)}
              className="relative bg-quest-slate rounded-2xl p-8 border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 text-left overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${field.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <field.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {field.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {field.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {field.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-quest-dark/60 text-xs text-gray-300 rounded border border-gray-700"
                    >
                      {topic}
                    </span>
                  ))}
                  {field.topics.length > 3 && (
                    <span className="px-2 py-1 bg-quest-dark/60 text-xs text-gray-400 rounded border border-gray-700">
                      +{field.topics.length - 3} more
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration</span>
                  <span className="text-blue-400 font-semibold">{field.duration}</span>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-12 text-center"
        >
          Don't worry! You can change your path anytime in settings
        </motion.p>
      </div>
    </div>
  );
};

export default FieldSelection;
