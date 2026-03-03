export const fieldRoadmaps = {
  'web-dev': {
    phases: [
      {
        phase: 1,
        name: 'Foundation',
        duration: '4 weeks',
        quests: [
          { id: 1, title: 'HTML & CSS Basics', type: 'core', difficulty: 'Easy', xp: 200, estimatedTime: '5 hours' },
          { id: 2, title: 'Responsive Design', type: 'core', difficulty: 'Medium', xp: 300, estimatedTime: '6 hours' },
          { id: 3, title: 'CSS Flexbox & Grid', type: 'side', difficulty: 'Easy', xp: 150, estimatedTime: '4 hours' },
          { id: 4, title: 'JavaScript Fundamentals', type: 'core', difficulty: 'Medium', xp: 400, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 2,
        name: 'Frontend Frameworks',
        duration: '8 weeks',
        quests: [
          { id: 5, title: 'React Fundamentals', type: 'core', difficulty: 'Medium', xp: 500, estimatedTime: '10 hours' },
          { id: 6, title: 'React Hooks Deep Dive', type: 'core', difficulty: 'Hard', xp: 750, estimatedTime: '12 hours' },
          { id: 7, title: 'State Management with Redux', type: 'core', difficulty: 'Hard', xp: 800, estimatedTime: '10 hours' },
          { id: 8, title: 'React Router Navigation', type: 'side', difficulty: 'Medium', xp: 350, estimatedTime: '5 hours' },
          { id: 9, title: 'Tailwind CSS Mastery', type: 'side', difficulty: 'Easy', xp: 250, estimatedTime: '6 hours' },
        ],
      },
      {
        phase: 3,
        name: 'Backend Development',
        duration: '8 weeks',
        quests: [
          { id: 10, title: 'Node.js & Express Setup', type: 'core', difficulty: 'Medium', xp: 450, estimatedTime: '8 hours' },
          { id: 11, title: 'RESTful API Design', type: 'core', difficulty: 'Hard', xp: 700, estimatedTime: '12 hours' },
          { id: 12, title: 'MongoDB Fundamentals', type: 'core', difficulty: 'Medium', xp: 500, estimatedTime: '10 hours' },
          { id: 13, title: 'Authentication & JWT', type: 'core', difficulty: 'Hard', xp: 850, estimatedTime: '14 hours' },
          { id: 14, title: 'GraphQL Basics', type: 'side', difficulty: 'Medium', xp: 400, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 4,
        name: 'Full-Stack Integration',
        duration: '6 weeks',
        quests: [
          { id: 15, title: 'Connect Frontend & Backend', type: 'core', difficulty: 'Hard', xp: 900, estimatedTime: '16 hours' },
          { id: 16, title: 'Deployment with Vercel/Heroku', type: 'core', difficulty: 'Medium', xp: 600, estimatedTime: '8 hours' },
          { id: 17, title: 'Build E-commerce Project', type: 'core', difficulty: 'Expert', xp: 1500, estimatedTime: '40 hours' },
        ],
      },
    ],
  },
  
  'data-science': {
    phases: [
      {
        phase: 1,
        name: 'Python & Math Foundations',
        duration: '6 weeks',
        quests: [
          { id: 1, title: 'Python Basics', type: 'core', difficulty: 'Easy', xp: 200, estimatedTime: '8 hours' },
          { id: 2, title: 'NumPy & Pandas', type: 'core', difficulty: 'Medium', xp: 400, estimatedTime: '12 hours' },
          { id: 3, title: 'Statistics Fundamentals', type: 'core', difficulty: 'Medium', xp: 500, estimatedTime: '10 hours' },
          { id: 4, title: 'Data Visualization with Matplotlib', type: 'side', difficulty: 'Easy', xp: 250, estimatedTime: '6 hours' },
        ],
      },
      {
        phase: 2,
        name: 'Machine Learning',
        duration: '10 weeks',
        quests: [
          { id: 5, title: 'Supervised Learning Algorithms', type: 'core', difficulty: 'Hard', xp: 800, estimatedTime: '16 hours' },
          { id: 6, title: 'Unsupervised Learning', type: 'core', difficulty: 'Hard', xp: 750, estimatedTime: '14 hours' },
          { id: 7, title: 'Model Evaluation & Tuning', type: 'core', difficulty: 'Medium', xp: 600, estimatedTime: '10 hours' },
          { id: 8, title: 'Feature Engineering', type: 'side', difficulty: 'Medium', xp: 400, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 3,
        name: 'Deep Learning & AI',
        duration: '12 weeks',
        quests: [
          { id: 9, title: 'Neural Networks Basics', type: 'core', difficulty: 'Hard', xp: 900, estimatedTime: '18 hours' },
          { id: 10, title: 'CNN for Image Recognition', type: 'core', difficulty: 'Expert', xp: 1200, estimatedTime: '24 hours' },
          { id: 11, title: 'RNN & NLP', type: 'core', difficulty: 'Expert', xp: 1100, estimatedTime: '20 hours' },
          { id: 12, title: 'Transfer Learning & Fine-tuning', type: 'side', difficulty: 'Hard', xp: 700, estimatedTime: '12 hours' },
        ],
      },
    ],
  },
  
  'mobile-dev': {
    phases: [
      {
        phase: 1,
        name: 'Mobile Fundamentals',
        duration: '4 weeks',
        quests: [
          { id: 1, title: 'Mobile UI/UX Principles', type: 'core', difficulty: 'Easy', xp: 200, estimatedTime: '6 hours' },
          { id: 2, title: 'React Native Setup', type: 'core', difficulty: 'Medium', xp: 350, estimatedTime: '8 hours' },
          { id: 3, title: 'Component Design', type: 'core', difficulty: 'Medium', xp: 400, estimatedTime: '10 hours' },
          { id: 4, title: 'Navigation Patterns', type: 'side', difficulty: 'Easy', xp: 250, estimatedTime: '6 hours' },
        ],
      },
      {
        phase: 2,
        name: 'Advanced Features',
        duration: '8 weeks',
        quests: [
          { id: 5, title: 'State Management (Redux)', type: 'core', difficulty: 'Hard', xp: 700, estimatedTime: '12 hours' },
          { id: 6, title: 'API Integration', type: 'core', difficulty: 'Medium', xp: 500, estimatedTime: '10 hours' },
          { id: 7, title: 'Push Notifications', type: 'core', difficulty: 'Hard', xp: 650, estimatedTime: '12 hours' },
          { id: 8, title: 'Offline Storage & Sync', type: 'side', difficulty: 'Medium', xp: 450, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 3,
        name: 'Native Features & Deployment',
        duration: '6 weeks',
        quests: [
          { id: 9, title: 'Camera & Media Access', type: 'core', difficulty: 'Hard', xp: 750, estimatedTime: '14 hours' },
          { id: 10, title: 'Geolocation & Maps', type: 'side', difficulty: 'Medium', xp: 500, estimatedTime: '10 hours' },
          { id: 11, title: 'App Store Deployment', type: 'core', difficulty: 'Medium', xp: 600, estimatedTime: '12 hours' },
          { id: 12, title: 'Build Social Media App', type: 'core', difficulty: 'Expert', xp: 1400, estimatedTime: '50 hours' },
        ],
      },
    ],
  },
  
  'cybersecurity': {
    phases: [
      {
        phase: 1,
        name: 'Security Fundamentals',
        duration: '6 weeks',
        quests: [
          { id: 1, title: 'Network Basics & Protocols', type: 'core', difficulty: 'Medium', xp: 400, estimatedTime: '10 hours' },
          { id: 2, title: 'Operating Systems Security', type: 'core', difficulty: 'Medium', xp: 450, estimatedTime: '12 hours' },
          { id: 3, title: 'Cryptography Basics', type: 'core', difficulty: 'Hard', xp: 700, estimatedTime: '14 hours' },
          { id: 4, title: 'Linux Command Line', type: 'side', difficulty: 'Easy', xp: 250, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 2,
        name: 'Ethical Hacking',
        duration: '10 weeks',
        quests: [
          { id: 5, title: 'Penetration Testing Methodology', type: 'core', difficulty: 'Hard', xp: 850, estimatedTime: '16 hours' },
          { id: 6, title: 'Web Application Security', type: 'core', difficulty: 'Hard', xp: 900, estimatedTime: '18 hours' },
          { id: 7, title: 'Network Scanning & Enumeration', type: 'core', difficulty: 'Medium', xp: 600, estimatedTime: '12 hours' },
          { id: 8, title: 'Social Engineering', type: 'side', difficulty: 'Medium', xp: 400, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 3,
        name: 'Advanced Defense',
        duration: '8 weeks',
        quests: [
          { id: 9, title: 'Incident Response', type: 'core', difficulty: 'Hard', xp: 950, estimatedTime: '20 hours' },
          { id: 10, title: 'Malware Analysis', type: 'core', difficulty: 'Expert', xp: 1200, estimatedTime: '24 hours' },
          { id: 11, title: 'Security Audit Project', type: 'core', difficulty: 'Expert', xp: 1500, estimatedTime: '40 hours' },
        ],
      },
    ],
  },
  
  'cloud-devops': {
    phases: [
      {
        phase: 1,
        name: 'Cloud Foundations',
        duration: '5 weeks',
        quests: [
          { id: 1, title: 'Cloud Computing Basics', type: 'core', difficulty: 'Easy', xp: 250, estimatedTime: '6 hours' },
          { id: 2, title: 'AWS/Azure Fundamentals', type: 'core', difficulty: 'Medium', xp: 450, estimatedTime: '12 hours' },
          { id: 3, title: 'Linux Administration', type: 'core', difficulty: 'Medium', xp: 400, estimatedTime: '10 hours' },
          { id: 4, title: 'Networking in the Cloud', type: 'side', difficulty: 'Medium', xp: 350, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 2,
        name: 'DevOps Tools & Automation',
        duration: '8 weeks',
        quests: [
          { id: 5, title: 'Docker Containerization', type: 'core', difficulty: 'Hard', xp: 750, estimatedTime: '14 hours' },
          { id: 6, title: 'Kubernetes Orchestration', type: 'core', difficulty: 'Hard', xp: 900, estimatedTime: '18 hours' },
          { id: 7, title: 'CI/CD Pipelines', type: 'core', difficulty: 'Medium', xp: 600, estimatedTime: '12 hours' },
          { id: 8, title: 'Infrastructure as Code (Terraform)', type: 'core', difficulty: 'Hard', xp: 800, estimatedTime: '16 hours' },
        ],
      },
      {
        phase: 3,
        name: 'Monitoring & Optimization',
        duration: '6 weeks',
        quests: [
          { id: 9, title: 'Monitoring & Logging', type: 'core', difficulty: 'Medium', xp: 550, estimatedTime: '10 hours' },
          { id: 10, title: 'Security & Compliance', type: 'core', difficulty: 'Hard', xp: 700, estimatedTime: '14 hours' },
          { id: 11, title: 'Cost Optimization', type: 'side', difficulty: 'Medium', xp: 400, estimatedTime: '8 hours' },
          { id: 12, title: 'Deploy Microservices Project', type: 'core', difficulty: 'Expert', xp: 1600, estimatedTime: '45 hours' },
        ],
      },
    ],
  },
  
  'game-dev': {
    phases: [
      {
        phase: 1,
        name: 'Game Design Basics',
        duration: '6 weeks',
        quests: [
          { id: 1, title: 'Game Design Principles', type: 'core', difficulty: 'Easy', xp: 250, estimatedTime: '8 hours' },
          { id: 2, title: 'Unity/Unreal Engine Intro', type: 'core', difficulty: 'Medium', xp: 400, estimatedTime: '12 hours' },
          { id: 3, title: 'C# Programming for Games', type: 'core', difficulty: 'Medium', xp: 450, estimatedTime: '14 hours' },
          { id: 4, title: '2D Sprite Animation', type: 'side', difficulty: 'Easy', xp: 300, estimatedTime: '8 hours' },
        ],
      },
      {
        phase: 2,
        name: '3D Game Development',
        duration: '10 weeks',
        quests: [
          { id: 5, title: '3D Modeling & Assets', type: 'core', difficulty: 'Hard', xp: 750, estimatedTime: '16 hours' },
          { id: 6, title: 'Physics & Collisions', type: 'core', difficulty: 'Hard', xp: 800, estimatedTime: '18 hours' },
          { id: 7, title: 'Character Controllers', type: 'core', difficulty: 'Medium', xp: 600, estimatedTime: '12 hours' },
          { id: 8, title: 'AI & Pathfinding', type: 'core', difficulty: 'Hard', xp: 900, estimatedTime: '20 hours' },
        ],
      },
      {
        phase: 3,
        name: 'Advanced Features & Polish',
        duration: '12 weeks',
        quests: [
          { id: 9, title: 'Multiplayer Networking', type: 'core', difficulty: 'Expert', xp: 1200, estimatedTime: '24 hours' },
          { id: 10, title: 'Visual Effects & Shaders', type: 'side', difficulty: 'Hard', xp: 750, estimatedTime: '16 hours' },
          { id: 11, title: 'Sound Design & Music', type: 'side', difficulty: 'Medium', xp: 400, estimatedTime: '10 hours' },
          { id: 12, title: 'Build & Publish Complete Game', type: 'core', difficulty: 'Expert', xp: 2000, estimatedTime: '80 hours' },
        ],
      },
    ],
  },
};
