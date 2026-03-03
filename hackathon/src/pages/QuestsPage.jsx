import { motion } from 'framer-motion';
import { Map, BookOpen, Code, GitBranch, ExternalLink, PlayCircle, FileText, Trophy, Calendar, Target, BookMarked, Gift } from 'lucide-react';

const QuestsPage = ({ selectedField }) => {
  // Roadmap data for all fields
  const roadmaps = {
    'web-dev': {
    title: "Web Development Roadmap",
    subtitle: "The First 3 Quests",
    duration: "Duration: 1-2 months",
    quests: [
      {
        id: 1,
        title: "The Architect's Blueprint",
        tech: "HTML5 & CSS3",
        weeks: "Week 1-2",
        icon: BookOpen,
        color: "from-slate-700 via-slate-600 to-blue-900",
        goal: "Master the structure and styling of the modern web. You aren't just making \"sites\"; you're learning how the browser interprets visual data.",
        topics: [
          "Semantic HTML",
          "Flexbox/Grid (Layouts)",
          "Responsive Design (Mobile-first)"
        ],
        resources: [
          {
            type: "Course",
            title: "Responsive Web Design Certification",
            provider: "freeCodeCamp",
            icon: PlayCircle,
            color: "text-emerald-400"
          },
          {
            type: "Quick Reference",
            title: "MDN Web Docs",
            provider: "The \"Bible\" of Web Dev",
            icon: FileText,
            color: "text-blue-400"
          },
          {
            type: "Interactive Game",
            title: "Flexbox Froggy",
            provider: "Great for 15-minute breaks between classes",
            icon: Trophy,
            color: "text-purple-400"
          }
        ]
      },
      {
        id: 2,
        title: "The Logic Engine",
        tech: "JavaScript Fundamentals",
        weeks: "Week 3-4",
        icon: Code,
        color: "from-slate-700 via-amber-900 to-slate-600",
        goal: "Move from static pages to functional applications. This is where you learn to handle user data and \"if/then\" logic.",
        topics: [
          "DOM Manipulation",
          "ES6 Syntax (Arrow functions, Destructuring)",
          "Fetch API (Async/Await)"
        ],
        resources: [
          {
            type: "Course",
            title: "JavaScript Algorithms and Data Structures",
            provider: "freeCodeCamp",
            icon: PlayCircle,
            color: "text-emerald-400"
          },
          {
            type: "Video Series",
            title: "JavaScript Beginner's Series",
            provider: "The Net Ninja",
            icon: PlayCircle,
            color: "text-amber-400"
          },
          {
            type: "Documentation",
            title: "JavaScript.info",
            provider: "Very deep explanations",
            icon: FileText,
            color: "text-blue-400"
          }
        ]
      },
      {
        id: 3,
        title: "The Modern Workflow",
        tech: "Git & Version Control",
        weeks: "Week 5",
        icon: GitBranch,
        color: "from-slate-700 via-purple-900 to-slate-600",
        goal: "Learn how professionals actually build software. Without Git, you can't work in a team or contribute to Open Source.",
        topics: [
          "Repositories",
          "Commits",
          "Branching, Merging",
          "GitHub Pull Requests"
        ],
        resources: [
          {
            type: "Course",
            title: "Version Control with Git",
            provider: "Udacity",
            icon: PlayCircle,
            color: "text-emerald-400"
          }
        ]
      }
    ]
    },
    'mobile-dev': {
      title: "Mobile Development Roadmap",
      subtitle: "The First 3 Quests",
      duration: "Duration: 1-2 months",
      quests: [
        {
          id: 1,
          title: "Mobile Foundations",
          tech: "React Native Basics",
          weeks: "Week 1-2",
          icon: BookOpen,
          color: "from-green-700 via-green-600 to-emerald-900",
          goal: "Learn the fundamentals of mobile app development using React Native. Build cross-platform apps for iOS and Android.",
          topics: [
            "React Native Components",
            "Navigation",
            "Mobile UI/UX Patterns"
          ],
          resources: [
            {
              type: "Course",
              title: "React Native - The Practical Guide",
              provider: "Udemy",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 2,
          title: "Native Features",
          tech: "Device APIs & Storage",
          weeks: "Week 3-4",
          icon: Code,
          color: "from-green-700 via-teal-900 to-green-600",
          goal: "Integrate native device features like camera, GPS, and local storage into your mobile apps.",
          topics: [
            "Async Storage",
            "Camera & Media",
            "Geolocation"
          ],
          resources: [
            {
              type: "Documentation",
              title: "React Native Docs",
              provider: "Official Documentation",
              icon: FileText,
              color: "text-blue-400"
            }
          ]
        },
        {
          id: 3,
          title: "App Deployment",
          tech: "Publishing to Stores",
          weeks: "Week 5",
          icon: GitBranch,
          color: "from-green-700 via-purple-900 to-green-600",
          goal: "Learn how to build, test, and deploy your apps to the App Store and Google Play.",
          topics: [
            "App Store Guidelines",
            "Google Play Console",
            "App Signing & Security"
          ],
          resources: [
            {
              type: "Guide",
              title: "Publishing to App Stores",
              provider: "React Native",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        }
      ]
    },
    'data-science': {
      title: "Data Science & AI Roadmap",
      subtitle: "The First 3 Quests",
      duration: "Duration: 2-3 months",
      quests: [
        {
          id: 1,
          title: "Python for Data Science",
          tech: "Python & NumPy",
          weeks: "Week 1-2",
          icon: BookOpen,
          color: "from-purple-700 via-purple-600 to-pink-900",
          goal: "Master Python programming and numerical computing with NumPy for data manipulation.",
          topics: [
            "Python Basics",
            "NumPy Arrays",
            "Data Structures"
          ],
          resources: [
            {
              type: "Course",
              title: "Python for Data Science",
              provider: "Coursera",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 2,
          title: "Data Analysis",
          tech: "Pandas & Visualization",
          weeks: "Week 3-4",
          icon: Code,
          color: "from-purple-700 via-pink-900 to-purple-600",
          goal: "Learn to analyze and visualize data using Pandas and Matplotlib.",
          topics: [
            "Pandas DataFrames",
            "Data Cleaning",
            "Matplotlib & Seaborn"
          ],
          resources: [
            {
              type: "Course",
              title: "Data Analysis with Python",
              provider: "freeCodeCamp",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 3,
          title: "Machine Learning Intro",
          tech: "Scikit-learn",
          weeks: "Week 5-6",
          icon: GitBranch,
          color: "from-purple-700 via-indigo-900 to-purple-600",
          goal: "Build your first machine learning models for classification and regression.",
          topics: [
            "Supervised Learning",
            "Model Training",
            "Prediction & Evaluation"
          ],
          resources: [
            {
              type: "Course",
              title: "Machine Learning Crash Course",
              provider: "Google",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        }
      ]
    },
    'cybersecurity': {
      title: "Cybersecurity Roadmap",
      subtitle: "The First 3 Quests",
      duration: "Duration: 1-2 months",
      quests: [
        {
          id: 1,
          title: "Security Fundamentals",
          tech: "Network Security Basics",
          weeks: "Week 1-2",
          icon: BookOpen,
          color: "from-red-700 via-red-600 to-orange-900",
          goal: "Understand core security concepts, threats, and defense mechanisms.",
          topics: [
            "CIA Triad",
            "Network Protocols",
            "Common Vulnerabilities"
          ],
          resources: [
            {
              type: "Course",
              title: "Introduction to Cybersecurity",
              provider: "Cisco",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 2,
          title: "Ethical Hacking",
          tech: "Penetration Testing",
          weeks: "Week 3-4",
          icon: Code,
          color: "from-red-700 via-orange-900 to-red-600",
          goal: "Learn ethical hacking techniques to identify and fix security vulnerabilities.",
          topics: [
            "Reconnaissance",
            "Exploitation",
            "Security Testing Tools"
          ],
          resources: [
            {
              type: "Platform",
              title: "TryHackMe",
              provider: "Interactive Labs",
              icon: Trophy,
              color: "text-purple-400"
            }
          ]
        },
        {
          id: 3,
          title: "Cryptography",
          tech: "Encryption & Security",
          weeks: "Week 5",
          icon: GitBranch,
          color: "from-red-700 via-purple-900 to-red-600",
          goal: "Master encryption, hashing, and secure communication protocols.",
          topics: [
            "Symmetric & Asymmetric Encryption",
            "Hashing Algorithms",
            "SSL/TLS"
          ],
          resources: [
            {
              type: "Course",
              title: "Cryptography I",
              provider: "Stanford Online",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        }
      ]
    },
    'cloud-devops': {
      title: "Cloud & DevOps Roadmap",
      subtitle: "The First 3 Quests",
      duration: "Duration: 1-2 months",
      quests: [
        {
          id: 1,
          title: "Cloud Fundamentals",
          tech: "AWS/Azure Basics",
          weeks: "Week 1-2",
          icon: BookOpen,
          color: "from-blue-700 via-blue-600 to-indigo-900",
          goal: "Learn cloud computing concepts and get started with major cloud platforms.",
          topics: [
            "Cloud Computing Models",
            "AWS EC2 & S3",
            "Cloud Architecture"
          ],
          resources: [
            {
              type: "Course",
              title: "AWS Cloud Practitioner",
              provider: "AWS Training",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 2,
          title: "Containerization",
          tech: "Docker",
          weeks: "Week 3-4",
          icon: Code,
          color: "from-blue-700 via-indigo-900 to-blue-600",
          goal: "Master containerization with Docker for consistent application deployment.",
          topics: [
            "Docker Containers",
            "Dockerfile",
            "Container Orchestration"
          ],
          resources: [
            {
              type: "Course",
              title: "Docker Mastery",
              provider: "Udemy",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 3,
          title: "CI/CD Pipelines",
          tech: "Automation",
          weeks: "Week 5",
          icon: GitBranch,
          color: "from-blue-700 via-purple-900 to-blue-600",
          goal: "Build automated deployment pipelines for continuous integration and delivery.",
          topics: [
            "GitHub Actions",
            "Jenkins",
            "Automated Testing"
          ],
          resources: [
            {
              type: "Documentation",
              title: "GitHub Actions Docs",
              provider: "GitHub",
              icon: FileText,
              color: "text-blue-400"
            }
          ]
        }
      ]
    },
    'game-dev': {
      title: "Game Development Roadmap",
      subtitle: "The First 3 Quests",
      duration: "Duration: 2-3 months",
      quests: [
        {
          id: 1,
          title: "Game Engine Basics",
          tech: "Unity Fundamentals",
          weeks: "Week 1-2",
          icon: BookOpen,
          color: "from-yellow-700 via-yellow-600 to-red-900",
          goal: "Learn Unity game engine basics and create your first 2D game.",
          topics: [
            "Unity Interface",
            "GameObjects & Components",
            "2D Physics"
          ],
          resources: [
            {
              type: "Course",
              title: "Unity Game Development",
              provider: "Unity Learn",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 2,
          title: "Game Programming",
          tech: "C# Scripting",
          weeks: "Week 3-4",
          icon: Code,
          color: "from-yellow-700 via-red-900 to-yellow-600",
          goal: "Master C# programming for game logic, player controls, and game mechanics.",
          topics: [
            "C# Basics",
            "Player Movement",
            "Game State Management"
          ],
          resources: [
            {
              type: "Course",
              title: "C# Programming for Unity",
              provider: "Coursera",
              icon: PlayCircle,
              color: "text-emerald-400"
            }
          ]
        },
        {
          id: 3,
          title: "Game Design",
          tech: "Level Design & Polish",
          weeks: "Week 5-6",
          icon: GitBranch,
          color: "from-yellow-700 via-purple-900 to-yellow-600",
          goal: "Learn game design principles, level design, and how to polish your game.",
          topics: [
            "Level Design",
            "UI/UX for Games",
            "Sound & Effects"
          ],
          resources: [
            {
              type: "Book",
              title: "The Art of Game Design",
              provider: "Jesse Schell",
              icon: FileText,
              color: "text-blue-400"
            }
          ]
        }
      ]
    }
  };

  // Get the current roadmap based on selected field, default to web-dev
  const currentRoadmap = roadmaps[selectedField?.id] || roadmaps['web-dev'];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg"
                   style={{ boxShadow: '0 0 15px rgba(100, 116, 139, 0.4)' }}>
                <Map className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">{currentRoadmap.title}</h1>
                {/* <p className="text-blue-400 font-semibold">{currentRoadmap.subtitle}</p> */}
              </div>
            </div>
            {/* <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{currentRoadmap.duration}</span>
            </div> */}
          </div>
          
          <div className="text-right">
              <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{currentRoadmap.duration}</span>
            </div>
            {/* <div className="px-6 py-3 bg-quest-slate rounded-xl border border-blue-500/50 shadow-lg">
              <p className="text-sm text-gray-400 mb-1">Total Quests</p>
              <p className="text-3xl font-bold text-white">{currentRoadmap.quests.length}</p>
            </div> */}
          </div>
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-quest-slate to-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <p className="text-gray-300 leading-relaxed text-left">
            <span className="text-blue-400 font-semibold">Your Learning Journey:</span> This roadmap will take you from zero to hero in web development. Each quest builds upon the previous one, creating a solid foundation for your career in tech. Complete all quests to unlock advanced challenges.
          </p>
        </motion.div>
      </motion.div>

      {/* Quests */}
      <div className="space-y-8">
        {currentRoadmap.quests.map((quest, index) => {
          const QuestIcon = quest.icon;
          return (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="relative"
            >
              {/* Quest Card */}
              <div className="bg-quest-slate rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:border-slate-500 transition-all">
                {/* Quest Header */}
              <div className={`relative bg-gradient-to-r ${quest.color} p-6`}>
                    <div className="relative z-10 flex items-center justify-between">
                    {/* Left Side: Icon + Quest Number + Week */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <QuestIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-white">Quest {quest.id}</span>
                        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                          {quest.weeks}
                        </span>
                      </div>
                    </div>
                    
                    {/* Right Side: Title + Tech */}
                    <div className="text-right">
                      <h2 className="text-3xl font-bold text-white mb-2">{quest.title}</h2>
                      <p className="text-white/90 font-semibold text-lg">{quest.tech}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>

                {/* Quest Content */}
                <div className="p-6 space-y-6">
                  {/* Goal Section */}
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>The Goal</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed pl-7">
                      {quest.goal}
                    </p>
                  </div>

                  {/* Key Topics */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-300 mb-3 flex items-center space-x-2">
                      <BookMarked className="w-5 h-5" />
                      <span>Key Topics</span>
                    </h3>
                    <div className="pl-7 space-y-2">
                      {quest.topics.map((topic, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.15 + idx * 0.05 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                          <span className="text-gray-300">{topic}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Free Resources */}
                  <div>
                    <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center space-x-2">
                      <Gift className="w-5 h-5" />
                      <span>Free Resources</span>
                    </h3>
                    <div className="space-y-3 pl-7">
                      {quest.resources.map((resource, idx) => {
                        const ResourceIcon = resource.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.15 + idx * 0.05 }}
                            className="group"
                          >
                            <div className="flex items-start space-x-3 p-4 bg-quest-dark rounded-xl border border-gray-700 hover:border-slate-500 transition-all cursor-pointer">
                              <ResourceIcon className={`w-5 h-5 ${resource.color} flex-shrink-0 mt-0.5`} />
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="text-sm font-semibold text-gray-400">{resource.type}:</span>
                                  <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                                    {resource.title}
                                  </span>
                                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
                                </div>
                                <p className="text-sm text-gray-500">{resource.provider}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line (except for last quest) */}
              {index < currentRoadmap.quests.length - 1 && (
                <div className="flex justify-center my-4">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.3 }}
                    className="w-1 h-8 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full"
                    style={{ originY: 0 }}
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Journey?</h3>
          <p className="text-gray-400 mb-6">
            Complete all 3 quests to unlock the advanced web development challenges and level up your skills!
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">0/3</div>
              <div className="text-sm text-gray-400">Quests Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">0 XP</div>
              <div className="text-sm text-gray-400">Total Earned</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestsPage;
