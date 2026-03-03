import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, isBossMode }) => {
  return (
    <div className="min-h-screen bg-quest-dark relative">
      {/* Boss Mode Pulsing Border */}
      <AnimatePresence>
        {isBossMode && (
          <>
            {/* Top Border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="fixed top-0 left-0 right-0 h-2 bg-red-500 z-[100]"
              style={{
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.5)',
              }}
            />
            {/* Bottom Border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="fixed bottom-0 left-0 right-0 h-2 bg-red-500 z-[100]"
              style={{
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.5)',
              }}
            />
            {/* Left Border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="fixed top-0 left-0 bottom-0 w-2 bg-red-500 z-[100]"
              style={{
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.5)',
              }}
            />
            {/* Right Border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="fixed top-0 right-0 bottom-0 w-2 bg-red-500 z-[100]"
              style={{
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.5)',
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="ml-64">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="p-6"
        >
          {children}
        </motion.main>
      </div>

      {/* Background Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 left-64 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
};

export default MainLayout;
