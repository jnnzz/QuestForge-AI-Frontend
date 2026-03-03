import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";

const getToken = () => localStorage.getItem("token");

// User Registration
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/auth/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      showToast("success", response.data.message || "Registration successful!");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Registration failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Registration Error:", error);
    return { success: false };
  }
};

// User Login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const { token, user } = response.data;
      
      // Store token in localStorage
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("isAuthenticated", "true");
      }
      
      showToast("success", response.data.message || "Login successful!");
      return { success: true, data: response.data };
    } else {
      showToast("error", response.data.message || "Login failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "Invalid credentials");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Login Error:", error);
    return { success: false };
  }
};

// User Logout
export const logoutUser = async () => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/auth/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("selectedFieldId");

    if (response.status === 200) {
      showToast("success", "Logged out successfully");
      return { success: true };
    }
  } catch (error) {
    // Still clear storage even if API call fails
    localStorage.clear();
    console.error("Logout Error:", error);
    return { success: true }; // Return success anyway since local data is cleared
  }
};

// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/auth/forgot-password`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Password reset email sent");
      return { success: true };
    } else {
      showToast("error", response.data.message || "Failed to send reset email");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Forgot Password Error:", error);
    return { success: false };
  }
};

// Reset Password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/auth/reset-password`,
      {
        token,
        password: newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Password reset successful");
      return { success: true };
    } else {
      showToast("error", response.data.message || "Password reset failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Reset Password Error:", error);
    return { success: false };
  }
};

// Change Password (for authenticated users)
export const changePassword = async (currentPassword, newPassword) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${backendConnection()}/api/auth/change-password`,
      {
        currentPassword,
        newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      showToast("success", response.data.message || "Password changed successfully");
      return { success: true };
    } else {
      showToast("error", response.data.message || "Password change failed");
      return { success: false };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "Network error. Please try again.");
    }
    console.error("Change Password Error:", error);
    return { success: false };
  }
};

// Verify Token
export const verifyToken = async () => {
  try {
    const token = getToken();
    if (!token) {
      return { success: false, message: "No token found" };
    }

    const response = await axios.get(
      `${backendConnection()}/api/auth/verify`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Token Verification Error:", error);
    return { success: false };
  }
};
