import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileSpreadsheet, Copy, ChevronDown, ChevronUp, CheckCircle, Circle, Sword } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WeeklySchedule = ({ scheduleData }) => {
  const [expandedDay, setExpandedDay] = useState(null);
  const navigate = useNavigate();

  // Sample schedule data structure - 4 weeks for 1 month
  const defaultSchedule = [
    {
      week: 1,
      title: "HTML & CSS Foundations",
      goal: "Master the building blocks of web pages",
      days: [
        {
          day: "Monday",
          morning: "Quest 1: HTML Structure",
          afternoon: "Review semantic tags",
          evening: "4:00 - 9:30 PM: Practice Labs",
          tasks: [
            { id: 1, title: "Learn HTML5 semantic elements", completed: true, duration: "1.5 hours" },
            { id: 2, title: "Build a personal bio page", completed: true, duration: "2 hours" },
            { id: 3, title: "Practice forms and inputs", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Tuesday",
          morning: "Quest 1: CSS Basics",
          afternoon: "Color theory study",
          evening: "4:00 - 9:30 PM: Styling Practice",
          tasks: [
            { id: 4, title: "Master selectors and properties", completed: false, duration: "2 hours" },
            { id: 5, title: "Create styled components", completed: false, duration: "1.5 hours" },
            { id: 6, title: "Typography and spacing", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Wednesday",
          morning: "Quest 1: Flexbox Layout",
          afternoon: "Review Grid systems",
          evening: "4:00 - 9:30 PM: Layout Labs",
          tasks: [
            { id: 7, title: "Flexbox container properties", completed: false, duration: "1.5 hours" },
            { id: 8, title: "Build responsive navigation", completed: false, duration: "2 hours" },
            { id: 9, title: "Flex item alignment", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Thursday",
          morning: "Quest 1: CSS Grid",
          afternoon: "Portfolio planning",
          evening: "4:00 - 9:30 PM: Grid Practice",
          tasks: [
            { id: 10, title: "Grid template areas", completed: false, duration: "1.5 hours" },
            { id: 11, title: "Create photo gallery layout", completed: false, duration: "2 hours" },
            { id: 12, title: "Responsive grid design", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Friday",
          morning: "Build: Landing Page",
          afternoon: "Design refinement",
          evening: "1:30 - 9:31 PM: Project Work",
          tasks: [
            { id: 13, title: "Design landing page mockup", completed: false, duration: "1 hour" },
            { id: 14, title: "Implement HTML structure", completed: false, duration: "2 hours" },
            { id: 15, title: "Style with CSS", completed: false, duration: "2 hours" }
          ]
        },
        {
          day: "Saturday",
          morning: "Responsive Design",
          afternoon: "Testing & Review",
          evening: "10:30 AM - 7:31 PM: Finalize",
          tasks: [
            { id: 16, title: "Media queries and breakpoints", completed: false, duration: "1.5 hours" },
            { id: 17, title: "Mobile-first approach", completed: false, duration: "2 hours" },
            { id: 18, title: "Cross-browser testing", completed: false, duration: "1 hour" }
          ]
        }
      ]
    },
    {
      week: 2,
      title: "JavaScript Basics",
      goal: "Learn programming fundamentals",
      days: [
        {
          day: "Monday",
          morning: "Quest 2: Variables & Data Types",
          afternoon: "Practice coding exercises",
          evening: "4:00 - 9:30 PM: JS Fundamentals",
          tasks: [
            { id: 19, title: "Variables: let, const, var", completed: false, duration: "1 hour" },
            { id: 20, title: "Data types and operators", completed: false, duration: "1.5 hours" },
            { id: 21, title: "Type conversion exercises", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Tuesday",
          morning: "Quest 2: Functions",
          afternoon: "Algorithm practice",
          evening: "4:00 - 9:30 PM: Function Labs",
          tasks: [
            { id: 22, title: "Function declaration vs expression", completed: false, duration: "1.5 hours" },
            { id: 23, title: "Arrow functions", completed: false, duration: "1 hour" },
            { id: 24, title: "Parameters and return values", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Wednesday",
          morning: "Quest 2: Arrays & Objects",
          afternoon: "Data structure review",
          evening: "4:00 - 9:30 PM: Data Labs",
          tasks: [
            { id: 25, title: "Array methods (map, filter, reduce)", completed: false, duration: "2 hours" },
            { id: 26, title: "Object properties and methods", completed: false, duration: "1.5 hours" },
            { id: 27, title: "Destructuring assignment", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Thursday",
          morning: "Quest 2: Control Flow",
          afternoon: "Logic problem solving",
          evening: "4:00 - 9:30 PM: Conditionals",
          tasks: [
            { id: 28, title: "If/else statements", completed: false, duration: "1 hour" },
            { id: 29, title: "Switch statements", completed: false, duration: "1 hour" },
            { id: 30, title: "Loops: for, while, forEach", completed: false, duration: "2 hours" }
          ]
        },
        {
          day: "Friday",
          morning: "Build: Calculator App",
          afternoon: "UI/UX planning",
          evening: "1:30 - 9:31 PM: App Development",
          tasks: [
            { id: 31, title: "Design calculator interface", completed: false, duration: "1 hour" },
            { id: 32, title: "Implement basic operations", completed: false, duration: "2 hours" },
            { id: 33, title: "Add advanced functions", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Saturday",
          morning: "DOM Manipulation Basics",
          afternoon: "Interactive elements",
          evening: "10:30 AM - 7:31 PM: Practice",
          tasks: [
            { id: 34, title: "querySelector and getElementById", completed: false, duration: "1.5 hours" },
            { id: 35, title: "Changing content and styles", completed: false, duration: "1.5 hours" },
            { id: 36, title: "Creating and removing elements", completed: false, duration: "2 hours" }
          ]
        }
      ]
    },
    {
      week: 3,
      title: "JavaScript Intermediate",
      goal: "Build interactive web applications",
      days: [
        {
          day: "Monday",
          morning: "Quest 2: Event Listeners",
          afternoon: "Review Database notes",
          evening: "4:00 - 9:30 PM: Networking & DB",
          tasks: [
            { id: 37, title: "Learn addEventListener() method", completed: false, duration: "1 hour" },
            { id: 38, title: "Practice click, hover, and keyboard events", completed: false, duration: "1.5 hours" },
            { id: 39, title: "Build interactive button components", completed: false, duration: "1 hour" },
            { id: 40, title: "Review SQL joins and queries", completed: false, duration: "2 hours" }
          ]
        },
        {
          day: "Tuesday",
          morning: "Quest 2: Fetch API/JSON",
          afternoon: "Prep for SysAdmin Lab",
          evening: "4:00 - 9:30 PM: SysAdmin & Prog",
          tasks: [
            { id: 41, title: "Understand REST API concepts", completed: false, duration: "1 hour" },
            { id: 42, title: "Practice fetch() with async/await", completed: false, duration: "2 hours" },
            { id: 43, title: "Parse and display JSON data", completed: false, duration: "1.5 hours" },
            { id: 44, title: "Linux command practice (chmod, chown)", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Wednesday",
          morning: "Quest 2: Event Listeners (Advanced)",
          afternoon: "Review Database normalization",
          evening: "4:00 - 9:30 PM: Networking & DB",
          tasks: [
            { id: 45, title: "Event delegation patterns", completed: false, duration: "1.5 hours" },
            { id: 46, title: "Custom event handling", completed: false, duration: "1 hour" },
            { id: 47, title: "Database design practice", completed: false, duration: "2 hours" },
            { id: 48, title: "Network protocols overview", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Thursday",
          morning: "Quest 2: API Integration",
          afternoon: "SysAdmin Lab Project",
          evening: "4:00 - 9:30 PM: SysAdmin & Prog",
          tasks: [
            { id: 49, title: "Build API client with error handling", completed: false, duration: "2 hours" },
            { id: 50, title: "Implement authentication flow", completed: false, duration: "1.5 hours" },
            { id: 51, title: "Configure web server (Apache/Nginx)", completed: false, duration: "2 hours" }
          ]
        },
        {
          day: "Friday",
          morning: "Build: \"To-Do List\" JS App",
          afternoon: "Quick Review: InfoSec",
          evening: "1:30 - 9:31 PM: Techno & InfoSec",
          tasks: [
            { id: 52, title: "Design To-Do List UI mockup", completed: false, duration: "45 min" },
            { id: 53, title: "Implement add/delete functionality", completed: false, duration: "2 hours" },
            { id: 54, title: "Add local storage persistence", completed: false, duration: "1 hour" },
            { id: 55, title: "Review encryption basics (AES, RSA)", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Saturday",
          morning: "Async/Await Projects",
          afternoon: "Relax / Lunch",
          evening: "10:30 AM - 7:31 PM: Trends & Arch",
          tasks: [
            { id: 56, title: "Build weather app with API", completed: false, duration: "2.5 hours" },
            { id: 57, title: "Handle errors with try/catch", completed: false, duration: "1 hour" },
            { id: 58, title: "Optimize async performance", completed: false, duration: "1.5 hours" }
          ]
        }
      ]
    },
    {
      week: 4,
      title: "Git & Final Project",
      goal: "Version control and project deployment",
      days: [
        {
          day: "Monday",
          morning: "Quest 3: Git Basics",
          afternoon: "Repository setup",
          evening: "4:00 - 9:30 PM: Version Control",
          tasks: [
            { id: 59, title: "Git init, add, commit workflow", completed: false, duration: "1.5 hours" },
            { id: 60, title: "Branching and merging", completed: false, duration: "2 hours" },
            { id: 61, title: "Resolve merge conflicts", completed: false, duration: "1 hour" }
          ]
        },
        {
          day: "Tuesday",
          morning: "Quest 3: GitHub Collaboration",
          afternoon: "Open source exploration",
          evening: "4:00 - 9:30 PM: Remote Repos",
          tasks: [
            { id: 62, title: "Push and pull operations", completed: false, duration: "1 hour" },
            { id: 63, title: "Pull requests and code review", completed: false, duration: "2 hours" },
            { id: 64, title: "GitHub Pages deployment", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Wednesday",
          morning: "Final Project Planning",
          afternoon: "Design and wireframing",
          evening: "4:00 - 9:30 PM: Planning Session",
          tasks: [
            { id: 65, title: "Choose project idea", completed: false, duration: "1 hour" },
            { id: 66, title: "Create wireframes", completed: false, duration: "2 hours" },
            { id: 67, title: "Plan feature list", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Thursday",
          morning: "Final Project: Development",
          afternoon: "Feature implementation",
          evening: "4:00 - 9:30 PM: Coding Session",
          tasks: [
            { id: 68, title: "Build HTML structure", completed: false, duration: "1.5 hours" },
            { id: 69, title: "Style with CSS", completed: false, duration: "2 hours" },
            { id: 70, title: "Add JavaScript functionality", completed: false, duration: "2 hours" }
          ]
        },
        {
          day: "Friday",
          morning: "Final Project: Polish",
          afternoon: "Testing and debugging",
          evening: "1:30 - 9:31 PM: Final Touches",
          tasks: [
            { id: 71, title: "Responsive design tweaks", completed: false, duration: "1.5 hours" },
            { id: 72, title: "Cross-browser testing", completed: false, duration: "1 hour" },
            { id: 73, title: "Performance optimization", completed: false, duration: "1.5 hours" }
          ]
        },
        {
          day: "Saturday",
          morning: "Final Project: Deployment",
          afternoon: "Documentation",
          evening: "10:30 AM - 7:31 PM: Finish & Deploy",
          tasks: [
            { id: 74, title: "Deploy to GitHub Pages", completed: false, duration: "1 hour" },
            { id: 75, title: "Write README documentation", completed: false, duration: "1.5 hours" },
            { id: 76, title: "Share project and celebrate!", completed: false, duration: "1 hour" }
          ]
        }
      ]
    }
  ];

  const schedule = scheduleData || defaultSchedule;

  const toggleDay = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  const handleStartChallenge = (dayName) => {
    navigate('/login/bossArena', { state: { fromSchedule: true, day: dayName } });
  };

  const handleExportToSheets = () => {
    // Simulate export functionality
    alert('Exporting to Google Sheets... (Demo mode)');
  };

  const handleCopySchedule = () => {
    // Create text representation for all weeks
    const scheduleArray = Array.isArray(schedule) ? schedule : [schedule];
    let text = `Monthly Learning Schedule (4 Weeks)\n\n`;
    
    scheduleArray.forEach(weekData => {
      text += `Week ${weekData.week}: ${weekData.title}\nGoal: ${weekData.goal}\n\n`;
      text += `Day\t\tMorning (09:00 - 12:00)\t\tAfternoon (Pre-Class)\t\tEvening (The Load)\n`;
      weekData.days.forEach(day => {
        text += `${day.day}\t\t${day.morning}\t\t${day.afternoon}\t\t${day.evening}\n`;
      });
      text += '\n';
    });
    
    navigator.clipboard.writeText(text);
    alert('Full monthly schedule copied to clipboard!');
  };

  // Calculate stats across all weeks
  const scheduleArray = Array.isArray(schedule) ? schedule : [schedule];
  const totalHours = scheduleArray.reduce((total, weekData) => {
    return total + weekData.days.reduce((weekTotal, day) => {
      return weekTotal + day.tasks.reduce((sum, task) => {
        const hours = parseFloat(task.duration);
        return sum + (isNaN(hours) ? 0 : hours);
      }, 0);
    }, 0);
  }, 0);

  const totalTasks = scheduleArray.reduce((total, weekData) => {
    return total + weekData.days.reduce((weekTotal, day) => weekTotal + day.tasks.length, 0);
  }, 0);

  const completedTasks = scheduleArray.reduce((total, weekData) => {
    return total + weekData.days.reduce((weekTotal, day) => {
      return weekTotal + day.tasks.filter(t => t.completed).length;
    }, 0);
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 space-y-8"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">AI-Generated Monthly Schedule</h2>
              <p className="text-sm text-gray-400">4-Week Learning Plan based on your syllabus</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopySchedule}
              className="flex items-center space-x-2 px-4 py-2 bg-quest-slate border border-gray-700 hover:border-slate-500 rounded-lg transition-all"
            >
              <Copy className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">Copy</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExportToSheets}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30 rounded-lg transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Export to Sheets</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Render Each Week */}
      {(Array.isArray(schedule) ? schedule : [schedule]).map((weekData, weekIndex) => (
        <motion.div
          key={weekData.week}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 * weekIndex, duration: 0.5 }}
          className="bg-quest-slate rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
        >
          {/* Week Header */}
          <div className="bg-gradient-to-r from-quest-dark to-gray-900 p-6 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-2">
              Week {weekData.week}: {weekData.title}
            </h3>
            <p className="text-gray-300 italic">
              <span className="text-blue-400 font-semibold">Goal:</span> {weekData.goal}
            </p>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-quest-dark">
                  <th className="text-left p-4 text-sm font-semibold text-gray-400 border-r border-gray-700">
                    Day
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400 border-r border-gray-700">
                    Morning (09:00 - 12:00)
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400 border-r border-gray-700">
                    Afternoon (Pre-Class)
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">
                    Evening (The Load)
                  </th>
                </tr>
              </thead>
              <tbody>
                {weekData.days.map((daySchedule, index) => (
                  <React.Fragment key={`week${weekData.week}-${daySchedule.day}`}>
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors cursor-pointer"
                      onClick={() => toggleDay(`week${weekData.week}-day${index}`)}
                    >
                      <td className="p-4 border-r border-gray-700">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-blue-400">{daySchedule.day}</span>
                          {expandedDay === `week${weekData.week}-day${index}` ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </td>
                      <td className="p-4 border-r border-gray-700">
                        <span className="text-white">{daySchedule.morning}</span>
                      </td>
                      <td className="p-4 border-r border-gray-700">
                        <span className="text-gray-300">{daySchedule.afternoon}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-blue-500 font-medium">{daySchedule.evening}</span>
                      </td>
                    </motion.tr>

                    {/* Expandable Task Details */}
                    <AnimatePresence>
                      {expandedDay === `week${weekData.week}-day${index}` && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-quest-dark/50"
                        >
                          <td colSpan="4" className="p-0">
                            <motion.div
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              className="p-6 border-t border-gray-700"
                            >
                              <h4 className="text-sm font-semibold text-gray-400 mb-4 flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Daily Tasks Breakdown</span>
                              </h4>
                              <div className="space-y-3">
                                {daySchedule.tasks.map((task) => (
                                  <motion.div
                                    key={task.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center justify-between p-3 bg-quest-slate rounded-lg border border-gray-700 hover:border-slate-500 transition-all group"
                                  >
                                    <div className="flex items-center space-x-3 flex-1">
                                      {task.completed ? (
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                      )}
                                      <div className="flex-1">
                                        <p className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                                          {task.title}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                      <span className="text-xs text-gray-400 bg-quest-dark px-3 py-1 rounded-full">
                                        ⏱️ {task.duration}
                                      </span>
                                      {task.completed && (
                                        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-medium">
                                          ✓ Done
                                        </span>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                                <div className="text-sm text-gray-400">
                                  <span className="text-emerald-400 font-semibold">
                                    {daySchedule.tasks.filter(t => t.completed).length}
                                  </span>
                                  <span> / {daySchedule.tasks.length} tasks completed</span>
                                </div>
                                <div className="text-sm text-gray-400">
                                  Total: <span className="text-blue-400 font-semibold">
                                    {daySchedule.tasks.reduce((sum, t) => {
                                      const hours = parseFloat(t.duration);
                                      return sum + (isNaN(hours) ? 0 : hours);
                                    }, 0).toFixed(1)} hours
                                  </span>
                                </div>
                              </div>

                              {/* Challenge Button */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6"
                              >
                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => handleStartChallenge(daySchedule.day)}
                                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-500/50"
                                  style={{
                                    boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)',
                                  }}
                                >
                                  <Sword className="w-5 h-5" />
                                  <span>Start {daySchedule.day} Boss Challenge</span>
                                  <motion.div
                                    animate={{
                                      scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: 'easeInOut',
                                    }}
                                    className="w-2 h-2 bg-white rounded-full"
                                  />
                                </motion.button>
                                <p className="text-xs text-center text-gray-500 mt-2">
                                  Complete daily tasks to unlock quiz and earn XP
                                </p>
                              </motion.div>
                            </motion.div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer with Export Button */}
          <div className="bg-quest-dark p-4 border-t border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Week {weekData.week} schedule synced with your learning path</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExportToSheets}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export Week {weekData.week}</span>
            </motion.button>
          </div>
        </motion.div>
      ))}

      {/* Additional Info - Monthly Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 grid grid-cols-3 gap-4"
      >
        <div className="bg-quest-slate rounded-lg p-4 border border-gray-700">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Total Monthly Hours</h4>
          <p className="text-2xl font-bold text-blue-400">
            {totalHours.toFixed(1)} hrs
          </p>
          <p className="text-xs text-gray-500 mt-1">Across 4 weeks</p>
        </div>
        <div className="bg-quest-slate rounded-lg p-4 border border-gray-700">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Total Tasks</h4>
          <p className="text-2xl font-bold text-emerald-400">
            {completedTasks}/{totalTasks}
          </p>
          <p className="text-xs text-gray-500 mt-1">Completed so far</p>
        </div>
        <div className="bg-quest-slate rounded-lg p-4 border border-gray-700">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Progress</h4>
          <p className="text-2xl font-bold text-purple-400">
            {totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%
          </p>
          <p className="text-xs text-gray-500 mt-1">Overall completion</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WeeklySchedule;
