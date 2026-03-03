# QuestForge API Documentation

This folder contains all API integration files for the QuestForge AI application.

## 📁 File Structure

```
api/
├── backendApi.js       # Backend connection configuration
├── authApi.js          # Authentication endpoints
├── userApi.js          # User profile and stats endpoints
├── questsApi.js        # Quest management endpoints
├── leaderboardApi.js   # Leaderboard endpoints
├── bossApi.js          # Boss arena endpoints
└── index.js            # Centralized exports
```

## 🚀 Usage

### Import from index.js (Recommended)
```javascript
import { loginUser, getUserProfile, getQuestsByField } from '../api';
```

### Or import directly from specific files
```javascript
import { loginUser } from '../api/authApi';
import { getUserProfile } from '../api/userApi';
```

## 📝 API Examples

### Authentication

#### Login
```javascript
import { loginUser } from '../api';

const handleLogin = async () => {
  const result = await loginUser('user@example.com', 'password123');
  if (result.success) {
    // Navigate to dashboard
    navigate('/dashboard');
  }
};
```

#### Register
```javascript
import { registerUser } from '../api';

const handleRegister = async () => {
  const result = await registerUser('John Doe', 'user@example.com', 'password123');
  if (result.success) {
    // Navigate to login
    navigate('/login');
  }
};
```

### User Profile

#### Get Profile
```javascript
import { getUserProfile } from '../api';

const loadProfile = async () => {
  const result = await getUserProfile();
  if (result.success) {
    setProfile(result.data);
  }
};
```

#### Update Profile
```javascript
import { updateUserProfile } from '../api';

const saveProfile = async () => {
  const result = await updateUserProfile({
    name: 'John Doe',
    bio: 'Full-stack developer',
  });
};
```

### Quests

#### Get Quests by Field
```javascript
import { getQuestsByField } from '../api';

const loadQuests = async (fieldId) => {
  const result = await getQuestsByField(fieldId);
  if (result.success) {
    setQuests(result.data);
  }
};
```

#### Start Quest
```javascript
import { startQuest } from '../api';

const handleStartQuest = async (questId) => {
  const result = await startQuest(questId);
  if (result.success) {
    // Update UI
  }
};
```

### Leaderboard

#### Get Field Leaderboard
```javascript
import { getLeaderboardByField } from '../api';

const loadLeaderboard = async (fieldId) => {
  const result = await getLeaderboardByField(fieldId, 50);
  if (result.success) {
    setLeaderboard(result.data);
  }
};
```

## ⚙️ Configuration

### Backend URL
Edit `backendApi.js` to configure your backend URL:

```javascript
const backendConnection = () => {
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:5000';
  }
  return import.meta.env.VITE_API_URL || 'https://api.questforge.com';
};
```

### Environment Variables
Create a `.env` file in the root:

```bash
VITE_API_URL=https://api.questforge.com
```

## 🔔 Toast Notifications

The `alertHelper.js` utility handles all notifications. You can integrate with any toast library:

### With react-toastify
```javascript
import { toast } from 'react-toastify';

export const showToast = (type, message) => {
  if (type === 'success') toast.success(message);
  else if (type === 'error') toast.error(message);
  else if (type === 'info') toast.info(message);
  else if (type === 'warning') toast.warning(message);
};
```

### With sonner
```javascript
import { toast } from 'sonner';

export const showToast = (type, message) => {
  if (type === 'success') toast.success(message);
  else if (type === 'error') toast.error(message);
  // ... etc
};
```

## 🔐 Authentication

All authenticated endpoints automatically include the Bearer token from localStorage:

```javascript
headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem('token')}`,
}
```

## 📊 Response Format

All API functions return a consistent format:

```javascript
{
  success: boolean,
  data?: any,        // Only on success
  message?: string   // Error message or success message
}
```

## 🛠️ Error Handling

All APIs include comprehensive error handling:
- Network errors
- Server errors
- Validation errors
- Toast notifications for all errors

## 📦 Dependencies

Required packages:
```bash
npm install axios
```

## 🎯 Best Practices

1. **Always check the success flag** before accessing data
2. **Use try-catch** in your components for additional safety
3. **Handle loading states** in your UI
4. **Clear tokens** on logout or 401 errors
5. **Validate data** before sending to API

## 📞 Support

For questions or issues, please refer to the main project documentation.
