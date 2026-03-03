const backendConnection = () => {
  // Development environment
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:5000';
  }
  
  // Production environment
  return import.meta.env.VITE_API_URL || 'https://api.questforge.com';
};

export default backendConnection;
