import axios from 'axios';
import backendConnection from './backendApi';
import { showToast } from '../utils/alertHelper';

// Helper function to get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Upload syllabus PDF file
 * @param {File} file - PDF file to upload
 * @returns {Promise<Object>} - Response with analyzed syllabus data
 */
export const uploadSyllabus = async (file) => {
  try {
    if (!file) {
      showToast('error', 'Please select a file to upload');
      return { success: false, message: 'No file provided' };
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      showToast('error', 'Please upload a PDF file');
      return { success: false, message: 'Invalid file type' };
    }

    // Validate file size (e.g., max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      showToast('error', 'File size must be less than 10MB');
      return { success: false, message: 'File too large' };
    }

    // Create FormData for multipart/form-data upload
    const formData = new FormData();
    formData.append('schedule', file);

    // Upload file to backend (uses cookies for auth)
    const response = await axios.post(
      `${backendConnection()}/api/schedule/upload`,
      formData,
      { 
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true 
      }
    );

    if (response.data) {
      showToast('success', response.data.message || 'Schedule uploaded and parsed successfully!');
      return {
        success: true,
        data: response.data,
        message: response.data.message || 'Upload successful'
      };
    } else {
      showToast('error', response.data.message || 'Failed to upload schedule');
      return {
        success: false,
        message: response.data.message || 'Upload failed'
      };
    }
  } catch (error) {
    console.error('Upload syllabus error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to upload syllabus. Please try again.';
    showToast('error', errorMessage);
    return {
      success: false,
      message: errorMessage,
      error: error.response?.data
    };
  }
};

/**
 * Get user's active schedule
 * @returns {Promise<Object>} - Parsed schedule with class blocks
 */
export const getMySchedule = async () => {
  try {
    const response = await axios.get(
      `${backendConnection()}/api/schedule/my`,
      { 
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true 
      }
    );

    if (response.data) {
      return {
        success: true,
        data: response.data,
        message: 'Schedule loaded successfully'
      };
    } else {
      return {
        success: false,
        message: 'No schedule found'
      };
    }
  } catch (error) {
    console.error('Get schedule error:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch schedule'
    };
  }
};

/**
 * Get quest plan with schedule mapped to quests
 * @returns {Promise<Object>} - Quest plan with classes, quest slots, and dead zones
 */
export const getQuestPlan = async () => {
  try {
    const response = await axios.get(
      `${backendConnection()}/api/schedule/quest-plan`,
      { 
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true 
      }
    );

    if (response.data) {
      return {
        success: true,
        data: response.data,
        message: response.data.message || 'Quest plan loaded'
      };
    } else {
      return {
        success: false,
        message: 'No quest plan found'
      };
    }
  } catch (error) {
    console.error('Get quest plan error:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch quest plan'
    };
  }
};

/**
 * Get syllabus analysis by ID
 * @param {string} syllabusId - Syllabus ID
 * @returns {Promise<Object>} - Syllabus data with analysis
 */
export const getSyllabusById = async (syllabusId) => {
  try {
    const token = getToken();
    const headers = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.get(
      `${backendConnection()}/api/syllabus/${syllabusId}`,
      { headers }
    );

    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    } else {
      showToast('error', response.data.message || 'Failed to fetch syllabus');
      return {
        success: false,
        message: response.data.message
      };
    }
  } catch (error) {
    console.error('Get syllabus error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to fetch syllabus';
    showToast('error', errorMessage);
    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * Get user's syllabus history
 * @returns {Promise<Object>} - List of uploaded syllabi
 */
export const getSyllabusHistory = async () => {
  try {
    const token = getToken();
    const headers = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.get(
      `${backendConnection()}/api/syllabus/history`,
      { headers }
    );

    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    } else {
      showToast('error', response.data.message || 'Failed to fetch syllabus history');
      return {
        success: false,
        message: response.data.message
      };
    }
  } catch (error) {
    console.error('Get syllabus history error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to fetch syllabus history';
    showToast('error', errorMessage);
    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * Get weekly schedule based on syllabus
 * @param {string} syllabusId - Syllabus ID
 * @returns {Promise<Object>} - Weekly schedule data
 */
export const getWeeklySchedule = async (syllabusId) => {
  try {
    const token = getToken();
    const headers = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.get(
      `${backendConnection()}/api/syllabus/${syllabusId}/schedule`,
      { headers }
    );

    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    } else {
      showToast('error', response.data.message || 'Failed to fetch schedule');
      return {
        success: false,
        message: response.data.message
      };
    }
  } catch (error) {
    console.error('Get weekly schedule error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to fetch schedule';
    showToast('error', errorMessage);
    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * Delete a syllabus
 * @param {string} syllabusId - Syllabus ID to delete
 * @returns {Promise<Object>} - Deletion result
 */
export const deleteSyllabus = async (syllabusId) => {
  try {
    const token = getToken();
    const headers = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.delete(
      `${backendConnection()}/api/syllabus/${syllabusId}`,
      { headers }
    );

    if (response.data.success) {
      showToast('success', 'Syllabus deleted successfully');
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    } else {
      showToast('error', response.data.message || 'Failed to delete syllabus');
      return {
        success: false,
        message: response.data.message
      };
    }
  } catch (error) {
    console.error('Delete syllabus error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to delete syllabus';
    showToast('error', errorMessage);
    return {
      success: false,
      message: errorMessage
    };
  }
};
