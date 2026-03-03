import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";

const getToken = () => localStorage.getItem("token");

// Get All Boss Challenges
export const getBossChallenges = async (fieldId) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/boss/challenges?fieldId=${fieldId}`,
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
      showToast("error", response.data.message || "Failed to fetch boss challenges");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Boss Challenges Error:", error);
    return { success: false };
  }
};

// Start Boss Challenge
export const startBossChallenge = async (bossId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/boss/${bossId}/start`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Boss challenge started!");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to start boss challenge");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Start Boss Challenge Error:", error);
    return { success: false };
  }
};

// Submit Boss Challenge Answer
export const submitBossAnswer = async (bossId, answerData) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/boss/${bossId}/submit`,
      answerData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      if (response.data.success) {
        showToast("success", response.data.message || "Boss defeated! 🏆");
      } else {
        showToast("error", response.data.message || "Incorrect answer. Try again!");
      }
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to submit answer");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Submit Boss Answer Error:", error);
    return { success: false };
  }
};

// Get Boss Challenge Details
export const getBossDetails = async (bossId) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/boss/${bossId}`,
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
      showToast("error", response.data.message || "Failed to fetch boss details");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Boss Details Error:", error);
    return { success: false };
  }
};

// Get User's Boss Battle History
export const getBossHistory = async () => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/boss/history`,
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
      showToast("error", response.data.message || "Failed to fetch boss history");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Boss History Error:", error);
    return { success: false };
  }
};

// Get Boss Leaderboard
export const getBossLeaderboard = async (bossId) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/boss/${bossId}/leaderboard`,
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
      showToast("error", response.data.message || "Failed to fetch boss leaderboard");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Boss Leaderboard Error:", error);
    return { success: false };
  }
};
