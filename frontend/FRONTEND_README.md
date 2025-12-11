# SkillSwap Frontend

A modern, responsive React frontend for the SkillSwap application - a platform for exchanging skills with others in your community.

## 🚀 Features

- **Modern UI Design**: Clean, light theme with subtle shadows and rounded corners
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component Architecture**: Reusable, composable React components
- **Routing**: Full navigation with React Router
- **API Integration**: Ready to connect with the Spring Boot backend
- **Form Handling**: Robust form validation and user feedback
- **Messaging System**: Real-time-ready chat interface
- **User Profiles**: Complete profile management
- **Skill Management**: Browse, post, and manage skills

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── SkillCard.jsx   # Skill display card
│   ├── UserProfileCard.jsx  # User profile card
│   ├── MessageItem.jsx  # Chat message component
│   ├── ReviewCard.jsx   # Review display
│   ├── Modal.jsx       # Confirmation modal
│   ├── Alert.jsx       # Alert notifications
│   ├── Filter.jsx      # Filter sidebar
│   ├── LoadingSpinner.jsx # Loading indicator
│   └── EmptyState.jsx  # Empty state component
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── BrowseSkillsPage.jsx  # Browse skills
│   ├── SkillDetailPage.jsx   # Skill details
│   ├── MySkillsPage.jsx      # User's skills
│   ├── PostSkillPage.jsx     # Create skill
│   ├── MessagesPage.jsx      # Messaging
│   ├── ProfilePage.jsx       # User profile
│   ├── LoginPage.jsx         # Login
│   └── SignupPage.jsx        # Registration
├── api/                # API client
│   └── client.js       # Axios client & endpoints
├── utils/              # Utility functions
│   └── helpers.js      # Helper functions
├── styles/             # Global styles
│   └── global.css      # CSS variables & base styles
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Success**: `#10b981` (Green)
- **Danger**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)
- **Info**: `#3b82f6` (Blue)

### Typography
- **Font Family**: Segoe UI, Roboto, system fonts
- **Base Size**: 16px
- **Heading Sizes**: 12px - 48px
- **Font Weights**: 400, 500, 600, 700

### Spacing System
Uses CSS variables for consistent spacing:
- `--spacing-xs`: 0.25rem
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem
- `--spacing-2xl`: 3rem

## 🛠️ Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional):
```
REACT_APP_API_URL=http://localhost:8080/api
```

### Running the Application

**Development mode:**
```bash
npm start
```
Runs on `http://localhost:3000`

**Production build:**
```bash
npm run build
```

**Testing:**
```bash
npm test
```

## 📚 Component Documentation

### Navbar
Sticky navigation bar with responsive mobile menu
```jsx
<Navbar />
```

### SkillCard
Displays skill information in a card format
```jsx
<SkillCard
  id={1}
  title="React Development"
  category="Programming"
  description="Learn modern React"
  skillLevel="Intermediate"
  rating={4.8}
  reviews={24}
  offerType="offer"
/>
```

### Modal
Confirmation dialog component
```jsx
<Modal
  isOpen={true}
  title="Delete?"
  message="Are you sure?"
  onConfirm={() => {}}
  onCancel={() => {}}
  isDangerous={true}
/>
```

### Alert
Notification component
```jsx
<Alert
  type="success"
  message="Success!"
  onClose={() => {}}
/>
```

### Filter
Filter sidebar for browsing
```jsx
<Filter
  categories={['Programming', 'Design']}
  levels={['Beginner', 'Advanced']}
  onCategoryChange={(cat) => {}}
  onLevelChange={(level) => {}}
/>
```

## 🔌 API Integration

The frontend uses Axios for API calls. All endpoints are defined in `src/api/client.js`:

### Available Endpoints
- **Skills**: GET/POST/PUT/DELETE /skills
- **Users**: GET/PUT /users/{id}
- **Messages**: GET/POST /messages/conversations
- **Reviews**: GET/POST/DELETE /reviews
- **Skill Swaps**: GET/POST/PUT/DELETE /skill-swaps
- **Auth**: POST /auth/login, /auth/signup

### Example Usage
```javascript
import { skillsAPI } from './api/client';

// Get all skills
const skills = await skillsAPI.getAll();

// Create a skill
await skillsAPI.create({ title: 'React', category: 'Programming' });
```

## 🎯 Pages Overview

### HomePage
- Hero section with call-to-action
- Feature highlights
- Featured skills with filtering
- Responsive layout

### BrowseSkillsPage
- Search skills by keyword
- Filter by category and level
- Grid layout with skill cards
- Results counter

### SkillDetailPage
- Detailed skill information
- Provider profile
- Reviews section
- Related actions (contact, save)

### PostSkillPage
- Form to create new skill
- Category and level selection
- Tips and examples
- Form validation

### MySkillsPage
- List of user's posted skills
- Edit/delete actions
- Modal confirmations
- Empty state

### MessagesPage
- Conversation list
- Real-time chat interface
- Message history
- Send/receive messages

### ProfilePage
- User information display
- Edit profile form
- Reviews received
- Account settings

### AuthPages (Login/Signup)
- Email/password authentication
- Form validation
- Error handling
- Redirect on success

## 🎨 Styling

All components use CSS modules or scoped CSS files. Global styles are in `src/styles/global.css`.

### Using CSS Classes
```jsx
<div className="page-container">
  <div className="card">
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

## 🔐 Authentication

Currently using mock authentication. To integrate with backend:

1. Update `authAPI` in `src/api/client.js`
2. Store auth tokens in localStorage/sessionStorage
3. Add token to axios interceptors
4. Implement auth context/state management

## 📱 Responsive Design

The application is fully responsive:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

Mobile menu toggles at 768px breakpoint.

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build/` folder to your hosting service:
   - Vercel
   - Netlify
   - AWS S3
   - GitHub Pages
   - Azure Static Web Apps

## 📝 Environment Variables

Create a `.env` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENVIRONMENT=development
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm start -- --port 3001
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear cache
```bash
npm cache clean --force
```

## 📦 Dependencies

- **react**: ^19.2.1 - UI library
- **react-dom**: ^19.2.1 - DOM rendering
- **react-router-dom**: ^6.20.0 - Routing
- **axios**: ^1.6.2 - HTTP client
- **react-scripts**: 5.0.1 - Build tools

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is part of CSIT321-340 SkillSwap

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Ready to run!** After installing dependencies with `npm install`, just run `npm start` to see the application in action.
