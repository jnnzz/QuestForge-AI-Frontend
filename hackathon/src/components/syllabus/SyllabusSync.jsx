import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Upload, Loader2, FileText, X, Lock, CreditCard } from 'lucide-react';

const SyllabusSync = ({ onAnalyze }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleFileSelect = (event) => {
    // Check if user has already used their free trial
    if (hasUsedFreeTrial) {
      setShowPaymentModal(true);
      event.target.value = ''; // Reset file input
      return;
    }

    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    // Check if user has already used their free trial
    if (hasUsedFreeTrial) {
      setShowPaymentModal(true);
      return;
    }

    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please drop a PDF file');
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleAnalyze = async () => {
    if (selectedFile) {
      setIsScanning(true);
      
      // Simulate PDF analysis time (no backend needed)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsScanning(false);
      setHasUsedFreeTrial(true); // Mark free trial as used
      
      // Call parent callback with the file
      if (onAnalyze) {
        onAnalyze(selectedFile, { syllabusId: 'demo-' + Date.now() });
      }
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
          <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Syllabus Sync Portal</h2>
        </motion.div>
        <p className="text-gray-400">Upload your course syllabus PDF and let AI generate a personalized weekly schedule</p>
        {hasUsedFreeTrial && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg"
          >
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400 font-medium">Free trial used - Upgrade for more uploads</span>
          </motion.div>
        )}
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
          className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-blue-700/20 to-slate-600/20 pointer-events-none"
          style={{ borderRadius: '1rem' }}
        />

        <div className="relative p-8">
          {/* File Upload Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Course Syllabus PDF
            </label>
            
            {!selectedFile ? (
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-12 transition-all ${
                  hasUsedFreeTrial
                    ? 'border-gray-700 bg-quest-dark/50 opacity-60 cursor-not-allowed'
                    : dragActive
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600 bg-quest-dark/70'
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  disabled={isScanning || hasUsedFreeTrial}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                  id="file-upload"
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <motion.div
                    animate={{
                      y: hasUsedFreeTrial ? 0 : [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: hasUsedFreeTrial ? 0 : Infinity,
                      ease: 'easeInOut',
                    }}
                    className="mb-4"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      hasUsedFreeTrial ? 'bg-gray-700/20' : 'bg-blue-400/20'
                    }`}>
                      {hasUsedFreeTrial ? (
                        <Lock className="w-8 h-8 text-gray-600" />
                      ) : (
                        <Upload className="w-8 h-8 text-blue-400" />
                      )}
                    </div>
                  </motion.div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    hasUsedFreeTrial ? 'text-gray-600' : 'text-white'
                  }`}>
                    {hasUsedFreeTrial ? 'Upload Locked' : 'Drop your syllabus PDF here'}
                  </h3>
                  <p className={`mb-4 ${
                    hasUsedFreeTrial ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {hasUsedFreeTrial ? 'Upgrade to premium for unlimited uploads' : 'or click to browse from your computer'}
                  </p>
                  {!hasUsedFreeTrial && (
                    <p className="text-sm text-gray-500">
                      Supported format: PDF (Max 10MB)
                    </p>
                  )}
                  {hasUsedFreeTrial && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowPaymentModal(true)}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                    >
                      Upgrade to Premium
                    </motion.button>
                  )}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="border-2 border-blue-500/50 rounded-xl p-6 bg-quest-dark/70"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{selectedFile.name}</h4>
                      <p className="text-sm text-gray-400">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveFile}
                    disabled={isScanning}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <X className="w-5 h-5 text-red-400" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center">
            <motion.button
              onClick={handleAnalyze}
              disabled={!selectedFile || isScanning}
              whileHover={!isScanning && selectedFile ? { scale: 1.05 } : {}}
              whileTap={!isScanning && selectedFile ? { scale: 0.95 } : {}}
              className={`relative px-8 py-4 rounded-xl font-semibold text-white transition-all overflow-hidden ${
                isScanning
                  ? 'bg-blue-500/30 cursor-not-allowed'
                  : selectedFile
                  ? 'bg-gradient-to-r from-slate-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/30'
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
            >
              {/* Button Background Animation */}
              {selectedFile && !isScanning && (
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
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Weekly Schedule</span>
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
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full"
                   style={{
                     boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.3)',
                   }}
              />
              <div className="absolute inset-4 border-4 border-transparent border-b-blue-600 border-l-blue-600 rounded-full"
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
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Processing PDF</h3>
              <p className="text-gray-400">AI is reading your syllabus and creating schedule...</p>
            </motion.div>

            {/* Progress Indicators */}
            <div className="mt-6 space-y-2">
              {['Reading PDF Content', 'Extracting Topics', 'Generating Weekly Schedule'].map((step, index) => (
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
                    className="w-2 h-2 bg-blue-400 rounded-full"
                  />
                  <span className="text-sm text-gray-300">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-quest-dark/95 backdrop-blur-md rounded-2xl flex items-center justify-center z-20"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-quest-slate rounded-xl border-2 border-amber-500/50 p-8 max-w-md w-full mx-4 shadow-2xl"
              style={{
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.3)',
              }}
            >
              {/* Lock Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Lock className="w-10 h-10 text-amber-400" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center mb-3">
                Upgrade to Premium
              </h3>
              <p className="text-gray-400 text-center mb-6">
                You've used your <span className="text-emerald-400 font-semibold">1 free upload</span>. 
                Unlock unlimited syllabus uploads and premium features!
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-300">Unlimited PDF uploads per month</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-300">AI-powered schedule optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-300">Priority support and updates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-300">Export to Google Calendar & Sheets</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-lg p-4 mb-6 text-center">
                <p className="text-sm text-gray-400 mb-1">Premium Monthly</p>
                <p className="text-3xl font-bold text-amber-400">$9.99<span className="text-lg text-gray-400">/mo</span></p>
                <p className="text-xs text-gray-500 mt-1">Cancel anytime</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Upgrade Now</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPaymentModal(false)}
                  className="w-full px-6 py-3 bg-quest-dark border border-gray-700 text-gray-400 font-semibold rounded-lg hover:border-gray-600 transition-all"
                >
                  Maybe Later
                </motion.button>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Your current schedule will remain accessible
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SyllabusSync;
