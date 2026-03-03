// API Module Exports
// Import all API functions from this single file for cleaner imports

// Authentication APIs
export {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  changePassword,
  verifyToken,
} from './authApi';

// User APIs
export {
  getUserProfile,
  updateUserProfile,
  selectField,
  getUserStats,
  updateUserXP,
  getUserAchievements,
} from './userApi';

// Quests APIs
export {
  getQuestsByField,
  getQuestById,
  startQuest,
  completeQuest,
  updateQuestProgress,
  getActiveQuests,
  getCompletedQuests,
  submitQuestTask,
} from './questsApi';

// Leaderboard APIs
export {
  getGlobalLeaderboard,
  getLeaderboardByField,
  getUserRank,
  getTopPlayers,
  getWeeklyLeaderboard,
  getNearbyRankings,
} from './leaderboardApi';

// Boss Arena APIs
export {
  getBossChallenges,
  startBossChallenge,
  submitBossAnswer,
  getBossDetails,
  getBossHistory,
  getBossLeaderboard,
} from './bossApi';

// Syllabus APIs
export {
  uploadSyllabus,
  getSyllabusById,
  getSyllabusHistory,
  getWeeklySchedule,
  deleteSyllabus,
} from './syllabusApi';

// Backend Connection
export { default as backendConnection } from './backendApi';
