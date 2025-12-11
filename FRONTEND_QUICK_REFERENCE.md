# ⚡ SkillSwap Frontend - Quick Reference Card

## 🎯 Start Here

```bash
cd frontend
npm install
npm start
# Opens http://localhost:3000
```

## 📄 Documentation Files

Read in this order:
1. **FRONTEND_SETUP.md** ← START HERE (Quick start)
2. **FRONTEND_README.md** ← Full documentation
3. **FRONTEND_SUMMARY.md** ← What was built
4. **FRONTEND_STRUCTURE.md** ← File organization
5. **FRONTEND_CHECKLIST.md** ← Feature list
6. **FRONTEND_INDEX.md** ← Complete file index

## 🗺️ App Routes

```
/              → Home page
/skills        → Browse skills
/skill/:id     → Skill details
/post-skill    → Create skill
/my-skills     → Your skills
/messages      → Messaging
/profile       → Profile
/login         → Login
/signup        → Register
```

## 🧩 Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Navbar | `src/components/Navbar.jsx` | Navigation bar |
| SkillCard | `src/components/SkillCard.jsx` | Skill display |
| UserProfileCard | `src/components/UserProfileCard.jsx` | User info |
| MessageItem | `src/components/MessageItem.jsx` | Chat messages |
| ReviewCard | `src/components/ReviewCard.jsx` | User reviews |
| Modal | `src/components/Modal.jsx` | Dialogs |
| Alert | `src/components/Alert.jsx` | Notifications |
| Filter | `src/components/Filter.jsx` | Filters |
| LoadingSpinner | `src/components/LoadingSpinner.jsx` | Loading |
| EmptyState | `src/components/EmptyState.jsx` | No data |

## 📄 Pages

| Page | File | Route |
|------|------|-------|
| Home | `HomePage.jsx` | `/` |
| Browse | `BrowseSkillsPage.jsx` | `/skills` |
| Detail | `SkillDetailPage.jsx` | `/skill/:id` |
| Post | `PostSkillPage.jsx` | `/post-skill` |
| My Skills | `MySkillsPage.jsx` | `/my-skills` |
| Messages | `MessagesPage.jsx` | `/messages` |
| Profile | `ProfilePage.jsx` | `/profile` |
| Login | `LoginPage.jsx` | `/login` |
| Signup | `SignupPage.jsx` | `/signup` |

## 🔌 API Endpoints

```javascript
// Import
import { skillsAPI, usersAPI, messagesAPI, ... } from './api/client';

// Skills
skillsAPI.getAll()
skillsAPI.getById(id)
skillsAPI.create(data)
skillsAPI.update(id, data)
skillsAPI.delete(id)

// Users
usersAPI.getProfile(id)
usersAPI.updateProfile(id, data)

// Messages
messagesAPI.getConversations()
messagesAPI.getMessages(conversationId)
messagesAPI.sendMessage(conversationId, data)

// Reviews
reviewsAPI.getBySkill(skillId)
reviewsAPI.create(data)
reviewsAPI.delete(id)

// Auth
authAPI.login(email, password)
authAPI.signup(data)
authAPI.logout()
```

## 🎨 Colors

```css
Primary:    #6366f1 (Indigo)
Secondary:  #8b5cf6 (Purple)
Success:    #10b981 (Green)
Danger:     #ef4444 (Red)
Warning:    #f59e0b (Amber)
Info:       #3b82f6 (Blue)
Text Dark:  #1f2937
Text Light: #6b7280
```

## 📦 Dependencies

```json
{
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.2"
}
```

## 🎯 CSS Classes

```html
<!-- Container -->
<div class="page-container">...</div>

<!-- Cards -->
<div class="card">...</div>
<div class="card card-compact">...</div>

<!-- Grid -->
<div class="grid grid-2">...</div>
<div class="grid grid-3">...</div>
<div class="grid grid-4">...</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Button Sizes -->
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>

<!-- Button Full Width -->
<button class="btn btn-block">Full Width</button>

<!-- Forms -->
<div class="input-field">
  <label>Label</label>
  <input type="text" />
</div>

<form class="form-group">...</form>
<div class="form-row">...</div>

<!-- Flex -->
<div class="flex">...</div>
<div class="flex-between">...</div>
<div class="flex-center">...</div>
<div class="flex-column">...</div>

<!-- Spacing -->
<div class="mt-sm">Margin top</div>
<div class="mb-lg">Margin bottom</div>
<div class="px-md">Padding horizontal</div>
<div class="py-md">Padding vertical</div>
<div class="gap-md">Gap</div>

<!-- Text -->
<p class="text-center">Centered</p>
<p class="text-secondary">Gray text</p>
<p class="text-sm">Small text</p>
<p class="text-lg">Large text</p>
<p class="font-bold">Bold</p>

<!-- Badges -->
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>

<!-- Alerts -->
<div class="alert alert-success">Success</div>
<div class="alert alert-danger">Danger</div>
<div class="alert alert-warning">Warning</div>
<div class="alert alert-info">Info</div>
```

## 📁 File Structure

```
frontend/
├── src/
│   ├── components/      (11 components)
│   ├── pages/          (9 pages)
│   ├── api/            (client.js)
│   ├── styles/         (global.css)
│   ├── utils/          (helpers.js)
│   ├── App.js          (routing)
│   └── index.js        (entry point)
├── public/
├── package.json
└── FRONTEND_README.md
```

## 🔧 Common Tasks

### Add New Page
1. Create `src/pages/MyPage.jsx`
2. Create `src/pages/MyPage.css`
3. Add route in `src/App.js`:
```jsx
<Route path="/my-page" element={<MyPage />} />
```

### Add New Component
1. Create `src/components/MyComponent.jsx`
2. Create `src/components/MyComponent.css`
3. Import and use in pages

### Change Primary Color
Edit `src/styles/global.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
}
```

### Call API
```jsx
import { skillsAPI } from '../api/client';

useEffect(() => {
  skillsAPI.getAll().then(data => {
    setSkills(data);
  });
}, []);
```

### Add Form Validation
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  if (!email) {
    setAlert({ type: 'danger', message: 'Email required' });
    return;
  }
  // Submit
};
```

### Show Modal
```jsx
const [showModal, setShowModal] = useState(false);

<Modal
  isOpen={showModal}
  title="Confirm"
  message="Are you sure?"
  onConfirm={handleConfirm}
  onCancel={() => setShowModal(false)}
/>
```

## 🚀 Build & Deploy

```bash
# Production build
npm run build

# Deploy build/ folder to:
# - Vercel (auto from GitHub)
# - Netlify (drag & drop)
# - Azure Static Web Apps
# - AWS S3 + CloudFront
# - GitHub Pages
```

## 🔐 Environment Variables

Create `.env` in frontend/:
```
REACT_APP_API_URL=http://localhost:8080/api
```

## 📱 Responsive Breakpoints

```css
Desktop:  1024px+
Tablet:   768px - 1023px
Mobile:   < 768px
```

## 💾 Development Commands

```bash
npm start              # Start dev server
npm run build          # Production build
npm test               # Run tests
npm run eject          # Expose config (don't!)
```

## 🐛 Troubleshooting

```bash
# Port in use
npm start -- --port 3001

# Clear cache
npm cache clean --force

# Fresh install
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version          # Should be 14+
npm --version           # Should be 6+
```

## 📊 Performance Tips

1. Use React.memo() for expensive components
2. Lazy load pages with React.lazy()
3. Use useCallback() for event handlers
4. Optimize images with responsive sizes
5. Use production build for deployment

## 🎓 Learning Resources

- React: https://react.dev
- React Router: https://reactrouter.com
- Axios: https://axios-http.com
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

## ✅ Deployment Checklist

- [ ] Run `npm run build`
- [ ] Test build locally
- [ ] Update API URLs for production
- [ ] Set environment variables
- [ ] Enable CORS on backend
- [ ] Add error tracking
- [ ] Setup analytics
- [ ] Deploy to hosting
- [ ] Test all pages
- [ ] Verify API calls work

## 🎉 You're Ready!

```bash
npm install && npm start
```

Happy coding! 🚀

---

**Quick Links:**
- 📖 Main Docs: `FRONTEND_README.md`
- 🚀 Getting Started: `FRONTEND_SETUP.md`
- ✅ Features: `FRONTEND_CHECKLIST.md`
- 📁 File Structure: `FRONTEND_STRUCTURE.md`
