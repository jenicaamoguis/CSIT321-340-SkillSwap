# SkillSwap Frontend - Quick Start Guide

## 🚀 One-Minute Setup

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app opens at `http://localhost:3000`

## 📁 What's Included

✅ **9 Pages** - Complete user flows (Home, Browse, Detail, Post, Messages, Profile, Auth)
✅ **11 Reusable Components** - Navbar, Cards, Modals, Forms, etc.
✅ **Global Styling** - CSS variables, responsive design, animations
✅ **API Ready** - Axios client configured for backend integration
✅ **Routing** - Full navigation with React Router v6
✅ **Form Handling** - Validation and error messages
✅ **Responsive** - Mobile, tablet, desktop ready

## 🎯 Quick Navigation

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with features |
| Browse Skills | `/skills` | Search & filter skills |
| Skill Detail | `/skill/:id` | View full skill info |
| My Skills | `/my-skills` | Manage your skills |
| Post Skill | `/post-skill` | Create new skill |
| Messages | `/messages` | Chat with others |
| Profile | `/profile` | User settings & reviews |
| Login | `/login` | Sign in |
| Signup | `/signup` | Create account |

## 🎨 Key Features Implemented

### UI/UX
- Modern light theme with indigo primary color
- Smooth animations and transitions
- Consistent spacing and typography
- Mobile-first responsive design

### Components
- **Navbar**: Sticky, responsive navigation
- **SkillCard**: Displays skill info with ratings
- **UserProfileCard**: Shows user stats and actions
- **MessageItem**: Chat message bubbles
- **ReviewCard**: User reviews with ratings
- **Modal**: Confirmation dialogs
- **Alert**: Success/error notifications
- **Filter**: Category and level filters
- **LoadingSpinner**: Loading state
- **EmptyState**: No data placeholder

### Pages
All pages include proper layouts, forms, modals, and error handling

## 🔧 Integration with Backend

1. **Connect to Backend API**
   - Update `REACT_APP_API_URL` in `.env`
   - Default: `http://localhost:8080/api`

2. **API Client Ready**
   - All endpoints configured in `src/api/client.js`
   - Just call the functions when backend is ready

3. **Mock Data**
   - Currently using mock data for demonstration
   - Replace with real API calls when ready

## 💻 Example: Using the API

```javascript
import { skillsAPI } from './api/client';

// Get all skills
const skills = await skillsAPI.getAll();

// Get skill by ID
const skill = await skillsAPI.getById(1);

// Create new skill
await skillsAPI.create({
  title: 'React Development',
  category: 'Programming',
  description: 'Learn React',
  level: 'Intermediate',
  type: 'offer'
});

// Update skill
await skillsAPI.update(1, { title: 'Advanced React' });

// Delete skill
await skillsAPI.delete(1);
```

## 🎨 Customization

### Change Primary Color
Edit `src/styles/global.css`:
```css
:root {
  --primary-color: #YOUR_HEX_CODE;
}
```

### Add New Page
1. Create file in `src/pages/YourPage.jsx`
2. Create styles `src/pages/YourPage.css`
3. Add route in `src/App.js`:
```jsx
<Route path="/your-page" element={<YourPage />} />
```

### Add New Component
1. Create file in `src/components/YourComponent.jsx`
2. Create styles `src/components/YourComponent.css`
3. Export and use in pages

## 📦 Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## 🧪 Testing

```bash
npm test
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and up
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔐 Authentication (Next Steps)

Current implementation uses mock authentication. To integrate:

1. Update login/signup in API client
2. Store JWT token in localStorage
3. Add axios interceptor for token
4. Create auth context for state management
5. Protect routes with PrivateRoute component

## 🐛 Common Issues

**Port 3000 in use?**
```bash
npm start -- --port 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS issues with backend?**
Configure CORS in Spring Boot backend:
```java
@Configuration
public class CorsConfig {
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(List.of("http://localhost:3000"));
    config.setAllowedMethods(List.of("*"));
    config.setAllowedHeaders(List.of("*"));
    config.setAllowCredentials(true);
    // ... rest of config
  }
}
```

## 📚 Project Structure

```
src/
├── components/          # Reusable UI components (11 total)
├── pages/              # Page components (9 total)
├── api/                # API client setup
├── styles/             # Global CSS with variables
├── utils/              # Helper functions
├── App.js              # Main router setup
└── index.js            # React entry point
```

## ✨ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm start`
3. 🔜 Connect backend API when ready
4. 🔜 Add authentication tokens
5. 🔜 Add state management (Redux/Context)
6. 🔜 Deploy to production

## 📞 Need Help?

- Check component docs in `FRONTEND_README.md`
- Review API client in `src/api/client.js`
- Look at example usage in page components

---

**You're all set!** Your modern SkillSwap frontend is ready to connect with the backend.
