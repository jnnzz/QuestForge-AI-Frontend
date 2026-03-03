// Challenge Bank for Boss Arena
// Challenges are organized by:
// 1. Default Quests (for users who haven't uploaded syllabus)
// 2. Weekly Schedule Topics (for users with uploaded syllabus)

export const defaultQuestChallenges = {
  // Quest 1: HTML & CSS
  quest1: [
    {
      id: 'html-css-1',
      type: 'code',
      difficulty: 'Easy',
      title: 'Create a Semantic HTML Structure',
      description: 'Build a personal profile card using semantic HTML5 elements. Include a header, main content area, and footer.',
      problem: `Create an HTML structure with:
- <header> containing your name
- <main> with an <article> about yourself
- <footer> with contact links`,
      starterCode: `<!-- Write your HTML here -->
<div class="profile-card">
  
</div>`,
      solution: `<div class="profile-card">
  <header>
    <h1>John Doe</h1>
  </header>
  <main>
    <article>
      <p>Web Developer passionate about creating amazing experiences.</p>
    </article>
  </main>
  <footer>
    <a href="mailto:john@example.com">Contact</a>
  </footer>
</div>`,
      hints: [
        'Use semantic HTML5 tags like <header>, <main>, <article>',
        'Keep the structure clean and organized',
        'Remember to close all tags properly'
      ],
      xpReward: 500
    },
    {
      id: 'html-css-2',
      type: 'multiple-choice',
      difficulty: 'Easy',
      title: 'Flexbox Layout Knowledge',
      question: 'Which CSS property is used to align flex items along the main axis?',
      options: [
        { id: 'a', text: 'align-items', isCorrect: false },
        { id: 'b', text: 'justify-content', isCorrect: true },
        { id: 'c', text: 'flex-direction', isCorrect: false },
        { id: 'd', text: 'align-content', isCorrect: false }
      ],
      explanation: 'justify-content aligns items along the main axis (horizontal by default), while align-items works on the cross axis.',
      xpReward: 300
    },
    {
      id: 'html-css-3',
      type: 'code',
      difficulty: 'Medium',
      title: 'Responsive Navigation Bar',
      description: 'Create a responsive navigation bar using Flexbox that centers items horizontally.',
      starterCode: `.navbar {
  /* Add your CSS here */
}

.nav-links {
  list-style: none;
  /* Add flexbox properties */
}`,
      solution: `.navbar {
  background-color: #333;
  padding: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}`,
      hints: [
        'Use display: flex on the container',
        'justify-content centers items horizontally',
        'gap creates space between items'
      ],
      xpReward: 700
    }
  ],

  // Quest 2: JavaScript Fundamentals
  quest2: [
    {
      id: 'js-1',
      type: 'code',
      difficulty: 'Easy',
      title: 'Array Filter Function',
      description: 'Write a function that filters an array to return only even numbers.',
      starterCode: `function getEvenNumbers(numbers) {
  // Your code here
  
}

// Test: getEvenNumbers([1, 2, 3, 4, 5, 6]) should return [2, 4, 6]`,
      solution: `function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}`,
      hints: [
        'Use the filter() method',
        'Check if number % 2 equals 0',
        'Arrow functions make this concise'
      ],
      xpReward: 600
    },
    {
      id: 'js-2',
      type: 'multiple-choice',
      difficulty: 'Medium',
      title: 'Async/Await Understanding',
      question: 'What keyword must be used before a function to use await inside it?',
      options: [
        { id: 'a', text: 'promise', isCorrect: false },
        { id: 'b', text: 'async', isCorrect: true },
        { id: 'c', text: 'await', isCorrect: false },
        { id: 'd', text: 'defer', isCorrect: false }
      ],
      explanation: 'The async keyword must precede a function declaration to use await inside. It makes the function return a Promise automatically.',
      xpReward: 400
    },
    {
      id: 'js-3',
      type: 'code',
      difficulty: 'Medium',
      title: 'DOM Manipulation Challenge',
      description: 'Write code to change the text content of an element with id "message" when a button is clicked.',
      starterCode: `// Get the button and message elements
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add event listener here

`,
      solution: `const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Button was clicked!';
});`,
      hints: [
        'Use addEventListener with "click" event',
        'Change textContent property of the element',
        'Arrow functions work great for event handlers'
      ],
      xpReward: 800
    },
    {
      id: 'js-4',
      type: 'code',
      difficulty: 'Hard',
      title: 'Fetch API Challenge',
      description: 'Write an async function that fetches data from an API and returns the parsed JSON.',
      starterCode: `async function fetchUserData(userId) {
  // Fetch from: https://jsonplaceholder.typicode.com/users/\${userId}
  // Return the parsed JSON data
  
}`,
      solution: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}`,
      hints: [
        'Use await with fetch()',
        'Parse response with .json()',
        'Add try/catch for error handling'
      ],
      xpReward: 1000
    }
  ],

  // Quest 3: Git & Version Control
  quest3: [
    {
      id: 'git-1',
      type: 'multiple-choice',
      difficulty: 'Easy',
      title: 'Git Basics',
      question: 'Which command is used to save changes to the local repository?',
      options: [
        { id: 'a', text: 'git add', isCorrect: false },
        { id: 'b', text: 'git push', isCorrect: false },
        { id: 'c', text: 'git commit', isCorrect: true },
        { id: 'd', text: 'git save', isCorrect: false }
      ],
      explanation: 'git commit saves your staged changes to the local repository with a message describing what changed.',
      xpReward: 300
    },
    {
      id: 'git-2',
      type: 'multiple-choice',
      difficulty: 'Medium',
      title: 'Branching Strategy',
      question: 'What is the purpose of creating branches in Git?',
      options: [
        { id: 'a', text: 'To make the repository larger', isCorrect: false },
        { id: 'b', text: 'To work on features without affecting main code', isCorrect: true },
        { id: 'c', text: 'To delete old code', isCorrect: false },
        { id: 'd', text: 'To speed up commits', isCorrect: false }
      ],
      explanation: 'Branches allow you to work on new features or fixes in isolation without affecting the main/master branch until you\'re ready to merge.',
      xpReward: 400
    },
    {
      id: 'git-3',
      type: 'multiple-choice',
      difficulty: 'Medium',
      title: 'Merge Conflicts',
      question: 'When do merge conflicts occur?',
      options: [
        { id: 'a', text: 'When two branches modify the same lines of code', isCorrect: true },
        { id: 'b', text: 'When you commit too frequently', isCorrect: false },
        { id: 'c', text: 'When pushing to remote', isCorrect: false },
        { id: 'd', text: 'When creating a new branch', isCorrect: false }
      ],
      explanation: 'Merge conflicts happen when Git can\'t automatically resolve differences between two branches that modified the same lines.',
      xpReward: 500
    }
  ]
};

// Weekly Schedule Challenges (for users who uploaded syllabus)
export const weeklyScheduleChallenges = {
  // Week 1: HTML & CSS Foundations
  week1: [
    {
      day: 'Monday',
      challenges: [
        {
          id: 'w1-mon-1',
          type: 'code',
          difficulty: 'Easy',
          title: 'HTML5 Semantic Elements',
          description: 'Create a blog post layout using semantic HTML5 elements.',
          starterCode: `<!-- Create a blog post structure -->
<body>
  
</body>`,
          solution: `<body>
  <article>
    <header>
      <h1>My First Blog Post</h1>
      <time datetime="2026-03-03">March 3, 2026</time>
    </header>
    <section>
      <p>Content goes here...</p>
    </section>
    <footer>
      <p>Author: John Doe</p>
    </footer>
  </article>
</body>`,
          xpReward: 500
        },
        {
          id: 'w1-mon-2',
          type: 'multiple-choice',
          difficulty: 'Easy',
          title: 'Semantic HTML Knowledge',
          question: 'Which element represents a self-contained composition in a document?',
          options: [
            { id: 'a', text: '<div>', isCorrect: false },
            { id: 'b', text: '<section>', isCorrect: false },
            { id: 'c', text: '<article>', isCorrect: true },
            { id: 'd', text: '<span>', isCorrect: false }
          ],
          explanation: '<article> represents a self-contained composition that could be distributed independently, like a blog post or news article.',
          xpReward: 300
        }
      ]
    },
    {
      day: 'Tuesday',
      challenges: [
        {
          id: 'w1-tue-1',
          type: 'code',
          difficulty: 'Medium',
          title: 'CSS Selectors & Properties',
          description: 'Style a button with hover effects using CSS.',
          starterCode: `.button {
  /* Add your CSS here */
}

.button:hover {
  /* Add hover styles */
}`,
          solution: `.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}`,
          xpReward: 600
        }
      ]
    },
    {
      day: 'Wednesday',
      challenges: [
        {
          id: 'w1-wed-1',
          type: 'code',
          difficulty: 'Medium',
          title: 'Flexbox Container Properties',
          description: 'Create a centered card layout using Flexbox.',
          starterCode: `.container {
  /* Center the card */
}`,
          solution: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
          xpReward: 700
        }
      ]
    }
  ],

  // Week 2: JavaScript Basics
  week2: [
    {
      day: 'Monday',
      challenges: [
        {
          id: 'w2-mon-1',
          type: 'code',
          difficulty: 'Easy',
          title: 'Variables and Data Types',
          description: 'Declare variables of different types and perform operations.',
          starterCode: `// Declare variables and perform operations
let name = '';
let age = 0;
let isStudent = false;

// Your code here
`,
          solution: `let name = 'John';
let age = 25;
let isStudent = true;

console.log(\`\${name} is \${age} years old\`);
console.log(\`Is student: \${isStudent}\`);`,
          xpReward: 400
        },
        {
          id: 'w2-mon-2',
          type: 'multiple-choice',
          difficulty: 'Easy',
          title: 'Variable Declaration',
          question: 'Which keyword declares a variable that cannot be reassigned?',
          options: [
            { id: 'a', text: 'var', isCorrect: false },
            { id: 'b', text: 'let', isCorrect: false },
            { id: 'c', text: 'const', isCorrect: true },
            { id: 'd', text: 'static', isCorrect: false }
          ],
          explanation: 'const declares a constant variable that cannot be reassigned after initialization.',
          xpReward: 300
        }
      ]
    },
    {
      day: 'Tuesday',
      challenges: [
        {
          id: 'w2-tue-1',
          type: 'code',
          difficulty: 'Medium',
          title: 'Function with Parameters',
          description: 'Create a function that calculates the area of a rectangle.',
          starterCode: `function calculateArea(length, width) {
  // Your code here
  
}`,
          solution: `function calculateArea(length, width) {
  return length * width;
}`,
          xpReward: 500
        }
      ]
    }
  ],

  // Week 3: JavaScript Intermediate  
  week3: [
    {
      day: 'Monday',
      challenges: [
        {
          id: 'w3-mon-1',
          type: 'code',
          difficulty: 'Medium',
          title: 'Event Listeners',
          description: 'Add a click event listener that changes button text.',
          starterCode: `const button = document.querySelector('.btn');

// Add event listener here
`,
          solution: `const button = document.querySelector('.btn');

button.addEventListener('click', function() {
  this.textContent = 'Clicked!';
});`,
          xpReward: 700
        }
      ]
    },
    {
      day: 'Tuesday',
      challenges: [
        {
          id: 'w3-tue-1',
          type: 'code',
          difficulty: 'Hard',
          title: 'Fetch API with Error Handling',
          description: 'Fetch data from an API and handle errors properly.',
          starterCode: `async function getData() {
  // Your code here
  
}`,
          solution: `async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}`,
          xpReward: 900
        }
      ]
    }
  ],

  // Week 4: Git & Final Project
  week4: [
    {
      day: 'Monday',
      challenges: [
        {
          id: 'w4-mon-1',
          type: 'multiple-choice',
          difficulty: 'Easy',
          title: 'Git Workflow',
          question: 'What is the correct order of basic Git commands?',
          options: [
            { id: 'a', text: 'commit → add → push', isCorrect: false },
            { id: 'b', text: 'add → commit → push', isCorrect: true },
            { id: 'c', text: 'push → add → commit', isCorrect: false },
            { id: 'd', text: 'add → push → commit', isCorrect: false }
          ],
          explanation: 'First add changes to staging (git add), then commit to local repo (git commit), then push to remote (git push).',
          xpReward: 400
        }
      ]
    },
    {
      day: 'Tuesday',
      challenges: [
        {
          id: 'w4-tue-1',
          type: 'multiple-choice',
          difficulty: 'Medium',
          title: 'GitHub Collaboration',
          question: 'What is a Pull Request used for?',
          options: [
            { id: 'a', text: 'Downloading code from GitHub', isCorrect: false },
            { id: 'b', text: 'Proposing changes to be merged into a branch', isCorrect: true },
            { id: 'c', text: 'Creating a new repository', isCorrect: false },
            { id: 'd', text: 'Deleting branches', isCorrect: false }
          ],
          explanation: 'Pull Requests let you propose changes, discuss them, and request that they be merged into another branch.',
          xpReward: 500
        }
      ]
    }
  ]
};

// Helper function to get challenge based on context
export function getChallengeForToday(hasSyllabus, currentQuest = 1, currentWeek = 1, currentDay = 'Monday') {
  if (!hasSyllabus) {
    // Return challenges from default quests
    const questKey = `quest${currentQuest}`;
    const challenges = defaultQuestChallenges[questKey];
    if (challenges && challenges.length > 0) {
      // Return a random challenge from this quest
      return challenges[Math.floor(Math.random() * challenges.length)];
    }
  } else {
    // Return challenges from weekly schedule
    const weekKey = `week${currentWeek}`;
    const weekData = weeklyScheduleChallenges[weekKey];
    if (weekData) {
      const dayData = weekData.find(d => d.day === currentDay);
      if (dayData && dayData.challenges.length > 0) {
        // Return a random challenge from this day
        return dayData.challenges[Math.floor(Math.random() * dayData.challenges.length)];
      }
    }
  }
  
  // Fallback to a default challenge
  return defaultQuestChallenges.quest1[0];
}
