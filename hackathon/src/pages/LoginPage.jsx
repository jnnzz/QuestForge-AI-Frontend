import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FieldSelection from '../components/onboarding/FieldSelection';
import { loginUser } from '../api/authApi';

const Login = () => {
  const [showFieldSelection, setShowFieldSelection] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user already has both auth and field
    const savedFieldId = localStorage.getItem('selectedFieldId');
    const isLoggedIn = localStorage.getItem('isAuthenticated');

    if (isLoggedIn && savedFieldId) {
      // User is already authenticated and has selected field - redirect
      navigate('/login/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      return;
    }

    setIsLoading(true);
    
    // Call backend login API
    const result = await loginUser(formData.email, formData.password);
    
    setIsLoading(false);
    
    if (result.success) {
      // Check if field is already selected
      const savedFieldId = localStorage.getItem('selectedFieldId');
      if (savedFieldId) {
        navigate('/login/dashboard');
      } else {
        // Show field selection modal
        setShowFieldSelection(true);
      }
    }
  };

  const handleFieldSelect = (field) => {
    // Only save the field ID to localStorage (not the icon component)
    localStorage.setItem('selectedFieldId', field.id);
    setShowFieldSelection(false);
    navigate('/login/dashboard');
  };

  // Login page UI
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-quest-dark via-quest-slate to-quest-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full mx-4"
        >
          <div className="bg-quest-slate border border-gray-700 rounded-2xl p-8 shadow-2xl">
            {/* Logo/Title */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="text-center mb-8"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-slate-600 to-blue-700 rounded-2xl mb-4"
                   style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}>
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">QuestForge AI</h1>
              <p className="text-gray-400">Level up your learning journey</p>
            </motion.div>

            {/* Login Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleLogin}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-quest-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-quest-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-slate-600 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              >
                {isLoading ? 'Logging in...' : 'Start Your Quest'}
              </motion.button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Don't have an account?{' '}
                <span 
                  onClick={() => navigate('/register')}
                  className="text-blue-400 cursor-pointer hover:underline"
                >
                  Sign up
                </span>
              </p>
            </motion.form>
          </div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-500 text-sm mt-6"
          >
            Powered by AI • Gamified Learning Platform
          </motion.p>
        </motion.div>
      </div>

      {/* Field Selection Modal */}
      <AnimatePresence>
        {showFieldSelection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)' }}
          >
            <div className="min-h-screen flex items-center justify-center py-8">
              <FieldSelection onFieldSelect={handleFieldSelect} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Login;
