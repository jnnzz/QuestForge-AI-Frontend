# API Integration Guide

This document provides examples of how the API has been integrated into the QuestForge AI application.

## ✅ Already Integrated

### 1. **LoginPage.jsx**
- Uses `loginUser()` API for authentication
- Handles form submission with email and password
- Shows loading state during API call
- Redirects to dashboard or field selection on success

```javascript
import { loginUser } from '../api';

const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  const result = await loginUser(formData.email, formData.password);
  setIsLoading(false);
  
  if (result.success) {
    // Handle success - navigate to dashboard
  }
};
```

### 2. **RegisterPage.jsx**
- Uses `registerUser()` API for user registration
- Validates form data before submission
- Shows loading state during API call
- Redirects to login page on successful registration

```javascript
import { registerUser } from '../api';

const handleRegister = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    setIsLoading(true);
    const result = await registerUser(name, email, password);
    setIsLoading(false);
    
    if (result.success) {
      navigate('/login');
    }
  }
};
```

### 3. **FieldSelection.jsx**
- Uses `selectField()` API to save user's field selection
- Calls API before updating localStorage
- Only proceeds if API call succeeds

```javascript
import { selectField } from '../../api';

const handleFieldSelect = async (field) => {
  const result = await selectField(field.id);
  
  if (result.success) {
    // Update local storage and proceed
    localStorage.setItem('currentQuest', '1');
    onFieldSelect(field);
  }
};
```

## 📋 Integration Checklist

### Pages/Components Requiring API Integration

#### High Priority
- ✅ **LoginPage.jsx** - Integrated
- ✅ **RegisterPage.jsx** - Integrated
- ✅ **FieldSelection.jsx** - Integrated
- ⚪ **DashboardPage.jsx** - Needs integration for:
  * `getUserStats()` - Fetch user statistics
  * `getLeaderboardByField()` - Fetch leaderboard data
- ⚪ **QuestsPage.jsx** - Needs integration for:
  * `getQuestsByField()` - Fetch quests for selected field
  * `startQuest()` - Start a quest
- ⚪ **BossArenaPage.jsx** - Needs integration for:
  * `getBossChallenges()` - Fetch boss challenges
  * `startBossChallenge()` - Start boss battle
  * `submitBossAnswer()` - Submit answers
- ⚪ **SkillPassportPage.jsx** - Needs integration for:
  * `getUserAchievements()` - Fetch user achievements

#### Medium Priority
- ⚪ **Header.jsx** - Add logout button with:
  * `logoutUser()` - Handle user logout
  * `getUserProfile()` - Fetch user data for display
- ⚪ **SyllabusPage.jsx** - If uploading syllabus to backend

## 🎯 Integration Examples

### Dashboard Integration Example

```javascript
// DashboardPage.jsx
import { useEffect, useState } from 'react';
import { getUserStats, getLeaderboardByField } from '../api';

const Dashboard = ({ selectedField }) => {
  const [stats, setStats] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      
      // Fetch user stats
      const statsResult = await getUserStats();
      if (statsResult.success) {
        setStats(statsResult.data);
      }
      
      // Fetch leaderboard
      const fieldId = selectedField?.id || 'web-dev';
      const leaderboardResult = await getLeaderboardByField(fieldId, 8);
      if (leaderboardResult.success) {
        setLeaderboard(leaderboardResult.data);
      }
      
      setLoading(false);
    };

    loadDashboardData();
  }, [selectedField]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render dashboard with fetched data
  return (
    <div>
      {/* Use stats and leaderboard data */}
    </div>
  );
};
```

### Quests Page Integration Example

```javascript
// QuestsPage.jsx
import { useEffect, useState } from 'react';
import { getQuestsByField, startQuest } from '../api';

const QuestsPage = ({ selectedField }) => {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuests = async () => {
      if (!selectedField?.id) return;
      
      setLoading(true);
      const result = await getQuestsByField(selectedField.id);
      
      if (result.success) {
        setQuests(result.data);
      }
      
      setLoading(false);
    };

    loadQuests();
  }, [selectedField]);

  const handleStartQuest = async (questId) => {
    const result = await startQuest(questId);
    if (result.success) {
      // Update UI or refetch quests
    }
  };

  // Render quests
  return (
    <div>
      {quests.map(quest => (
        <div key={quest.id}>
          <h3>{quest.title}</h3>
          <button onClick={() => handleStartQuest(quest.id)}>
            Start Quest
          </button>
        </div>
      ))}
    </div>
  );
};
```

### Boss Arena Integration Example

```javascript
// BossArenaPage.jsx
import { useEffect, useState } from 'react';
import { getBossChallenges, submitBossAnswer } from '../api';

const BossArenaPage = () => {
  const [bosses, setBosses] = useState([]);
  const [selectedBoss, setSelectedBoss] = useState(null);

  useEffect(() => {
    const loadBosses = async () => {
      const fieldId = localStorage.getItem('selectedFieldId');
      const result = await getBossChallenges(fieldId);
      
      if (result.success) {
        setBosses(result.data);
      }
    };

    loadBosses();
  }, []);

  const handleSubmitAnswer = async (bossId, answerData) => {
    const result = await submitBossAnswer(bossId, answerData);
    
    if (result.success) {
      if (result.data.correct) {
        // Boss defeated!
        // Update UI, show rewards, etc.
      } else {
        // Wrong answer, try again
      }
    }
  };

  // Render boss challenges
};
```

### Header with Logout Button Example

```javascript
// Header.jsx
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../api';
import { LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.success) {
      navigate('/login');
    }
  };

  return (
    <header>
      {/* User info and XP bar */}
      
      <button 
        onClick={handleLogout}
        className="flex items-center space-x-2 text-gray-400 hover:text-white"
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </header>
  );
};
```

## 🔧 Common Patterns

### 1. Loading States
Always show loading states during API calls:

```javascript
const [loading, setLoading] = useState(false);

const handleAction = async () => {
  setLoading(true);
  const result = await apiCall();
  setLoading(false);
  // Handle result
};
```

### 2. Error Handling
API functions already show toast notifications, but you can add custom error handling:

```javascript
const result = await apiCall();
if (!result.success) {
  // Custom error handling
  setError('Operation failed');
}
```

### 3. Data Refetching
Refetch data after mutations:

```javascript
const handleComplete = async (questId) => {
  const result = await completeQuest(questId);
  if (result.success) {
    // Refetch quests to get updated data
    loadQuests();
  }
};
```

### 4. Authentication Check
Check authentication on protected pages:

```javascript
useEffect(() => {
  const checkAuth = async () => {
    const result = await verifyToken();
    if (!result.success) {
      navigate('/login');
    }
  };
  checkAuth();
}, []);
```

## 📊 API Response Format

All APIs return consistent format:

```javascript
{
  success: boolean,
  data?: any,      // Present on success
  message?: string // Error or success message
}
```

## 🚀 Next Steps

1. **Install axios** if not already installed:
   ```bash
   npm install axios
   ```

2. **Configure backend URL** in `src/api/backendApi.js`

3. **Integrate remaining pages** following the examples above

4. **Add loading spinners/skeletons** for better UX

5. **Handle offline scenarios** gracefully

6. **Add retry logic** for failed requests (optional)

## 📝 Notes

- All API calls are asynchronous (use `async/await`)
- Toast notifications are handled automatically by the API layer
- Tokens are managed automatically via localStorage
- Always check `result.success` before proceeding
- Consider adding React Query or SWR for advanced data fetching

## ❓ Need Help?

Refer to:
- `src/api/README.md` - API documentation
- Individual API files for detailed endpoint information
- Example integrations in LoginPage.jsx and RegisterPage.jsx
