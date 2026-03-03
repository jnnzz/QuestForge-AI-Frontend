import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";

const getToken = () => localStorage.getItem("token");

// Get User Profile
export const getUserProfile = async () => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/user/profile`,
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
      showToast("error", response.data.message || "Failed to fetch profile");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Profile Error:", error);
    return { success: false };
  }
};

// Update User Profile
export const updateUserProfile = async (profileData) => {
  try {
    const token = getToken();
    const response = await axios.put(
      `${backendConnection()}/api/user/profile`,
      profileData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Profile updated successfully");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Profile update failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Update Profile Error:", error);
    return { success: false };
  }
};

// Select Learning Field
export const selectField = async (fieldId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/user/select-field`,
      {
        fieldId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Field selected successfully");
      localStorage.setItem("selectedFieldId", fieldId);
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Field selection failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Select Field Error:", error);
    return { success: false };
  }
};

// Get User Statistics
export const getUserStats = async () => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/user/stats`,
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
      showToast("error", response.data.message || "Failed to fetch stats");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Stats Error:", error);
    return { success: false };
  }
};

// Update User XP
export const updateUserXP = async (xpAmount, questId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/user/update-xp`,
      {
        xpAmount,
        questId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || `+${xpAmount} XP earned!`);
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Failed to update XP");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Update XP Error:", error);
    return { success: false };
  }
};

// Get User Achievements
export const getUserAchievements = async () => {
  try {
    const token = getToken();
    const response = await axios.get(
      `${backendConnection()}/api/user/achievements`,
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
      showToast("error", response.data.message || "Failed to fetch achievements");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Get Achievements Error:", error);
    return { success: false };
  }
};
