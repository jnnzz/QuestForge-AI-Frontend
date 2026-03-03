import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";

const getToken = () => localStorage.getItem("token");

// Get All Quests for a Field
export const getQuestsByField = async (fieldId) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/quests/field/${fieldId}`,
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
      showToast("error", response.data.message || "Failed to fetch quests");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Quests Error:", error);
    return { success: false };
  }
};

// Get Single Quest Details
export const getQuestById = async (questId) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/quests/${questId}`,
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
      showToast("error", response.data.message || "Failed to fetch quest details");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Quest Error:", error);
    return { success: false };
  }
};

// Start a Quest
export const startQuest = async (questId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/quests/${questId}/start`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Quest started!");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to start quest");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Start Quest Error:", error);
    return { success: false };
  }
};

// Complete a Quest
export const completeQuest = async (questId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/quests/${questId}/complete`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Quest completed! 🎉");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to complete quest");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Complete Quest Error:", error);
    return { success: false };
  }
};

// Update Quest Progress
export const updateQuestProgress = async (questId, progress) => {
  try {
    const token = getToken();
    const response = await axios.put(
      `${backendConnection()}/api/quests/${questId}/progress`,
      {
        progress,
      },
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
      showToast("error", response.data.message || "Failed to update progress");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Update Progress Error:", error);
    return { success: false };
  }
};

// Get User's Active Quests
export const getActiveQuests = async () => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/quests/active`,
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
      showToast("error", response.data.message || "Failed to fetch active quests");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Active Quests Error:", error);
    return { success: false };
  }
};

// Get User's Completed Quests
export const getCompletedQuests = async () => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/quests/completed`,
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
      showToast("error", response.data.message || "Failed to fetch completed quests");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Completed Quests Error:", error);
    return { success: false };
  }
};

// Submit Quest Answer/Task
export const submitQuestTask = async (questId, taskData) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/quests/${questId}/submit`,
      taskData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Task submitted successfully!");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Task submission failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Submit Task Error:", error);
    return { success: false };
  }
};
