import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";

const getToken = () => localStorage.getItem("token");

// Get Global Leaderboard
export const getGlobalLeaderboard = async (limit = 100) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/leaderboard/global?limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to fetch leaderboard");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Global Leaderboard Error:", error);
    return { success: false };
  }
};

// Get Leaderboard by Field
export const getLeaderboardByField = async (fieldId, limit = 100) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/leaderboard/field/${fieldId}?limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to fetch leaderboard");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Field Leaderboard Error:", error);
    return { success: false };
  }
};

// Get User Rank
export const getUserRank = async (fieldId = null) => {
  try {
    const token = getToken();
    const url = fieldId
      ? `${backendConnection()}/api/leaderboard/rank?fieldId=${fieldId}`
      : `${backendConnection()}/api/leaderboard/rank`;
    
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to fetch rank");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get User Rank Error:", error);
    return { success: false };
  }
};

// Get Top Players (Top 10)
export const getTopPlayers = async (fieldId = null) => {
  try {
    const token = getToken();
    const url = fieldId
      ? `${backendConnection()}/api/leaderboard/top?fieldId=${fieldId}`
      : `${backendConnection()}/api/leaderboard/top`;
    
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to fetch top players");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Top Players Error:", error);
    return { success: false };
  }
};

// Get Weekly Leaderboard
export const getWeeklyLeaderboard = async (fieldId = null) => {
  try {
    const token = getToken();
    const url = fieldId
      ? `${backendConnection()}/api/leaderboard/weekly?fieldId=${fieldId}`
      : `${backendConnection()}/api/leaderboard/weekly`;
    
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to fetch weekly leaderboard");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Weekly Leaderboard Error:", error);
    return { success: false };
  }
};

// Get Nearby Rankings (users around current user's rank)
export const getNearbyRankings = async (fieldId = null, range = 5) => {
  try {
    const token = getToken();
    const url = fieldId
      ? `${backendConnection()}/api/leaderboard/nearby?fieldId=${fieldId}&range=${range}`
      : `${backendConnection()}/api/leaderboard/nearby?range=${range}`;
    
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to fetch nearby rankings");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Nearby Rankings Error:", error);
    return { success: false };
  }
};
