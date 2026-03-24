# Revolution Events Website

![Revolution Events Logo](./public/logo2.png)

A modern, responsive single-page website for **Revolution Events Ltd** - Tanzania's premier event production company.

## About

**Revolution Events Ltd** is headquartered in Dar es Salaam, Tanzania, with over 20 years of experience delivering world-class events. They specialize in:

- 🎆 **Fireworks & Pyrotechnics** - Tanzania's #1 pyrotechnics provider
- 📺 **HD LED Screens** - Largest inventory of P2 LED panels in Tanzania
- 🎥 **Projection Mapping** - First company to bring projection mapping to Tanzania
- ✨ **Visual Effects** - Flame throwers, CO₂ thrusters, smoke machines, and more
- ⛺ **Marquee & Tent Hire** - Up to 50m × 20m coverage

## Website Sections

1. **Hero** - Full-screen landing with animated particles, company stats
2. **About** - Company history, credentials, and core pillars
3. **Services** - Five specialisms in mosaic grid layout
4. **Process** - Four-step workflow (Consultation → Design → Production → Delivery)
5. **Portfolio** - Filterable gallery of past events
6. **Clients** - Logo ticker and client grid (30+ brands)
7. **Testimonials** - Client reviews and testimonials
8. **Contact** - Full contact form with enquiry fields
9. **Footer** - Multi-column footer with links and contact info

## Technology Stack

- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **CSS** - Custom styling (no frameworks)
- **Google Fonts** - Bebas Neue, Montserrat, Raleway

# Revolution Events Website

![Revolution Events Logo](./public/logo2.png)

A modern, responsive single-page website for **Revolution Events Ltd** - Tanzania's premier event production company.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📚 Git Commands

### Setup
```bash
# Initialize a new git repository
git init

# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Branching
```bash
# Create a new branch
git checkout -b feature/your-feature

# Switch branches
git checkout main

# List all branches
git branch

# Delete a branch
git branch -d branch-name
```

### Making Changes
```bash
# Check status
git status

# Add all changes
git add .

# Add specific file
git add filename

# Commit changes
git commit -m "Your commit message"

# Add and commit in one command
git commit -am "Your commit message"
```

### History & Navigation
```bash
# View commit history
git log

# View recent commits (compact)
git log --oneline

# View differences
git diff

# View specific file changes
git diff filename
```

### Syncing
```bash
# Pull latest changes
git pull origin main

# Push to remote
git push origin main

# Push to specific branch
git push origin branch-name

# Push and set upstream
git push -u origin branch-name
```

### Stashing
```bash
# Save changes temporarily
git stash

# List stashes
git stash list

# Apply stash
git stash apply

# Apply and remove stash
git stash pop
```

### Undoing Changes
```bash
# Discard changes in working directory
git checkout -- filename

# Unstage a file
git reset filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Completely undo last commit
git reset --hard HEAD~1
```

---

## 🔧 Common Workflow

### Typical Development Flow
```bash
# 1. Create and switch to new branch
git checkout -b feature/my-feature

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push to remote
git push -u origin feature/my-feature

# 4. After testing, merge to main
git checkout main
git pull origin main
git merge feature/my-feature
git push origin main

# 5. Delete branch (optional)
git branch -d feature/my-feature
git push origin --delete feature/my-feature
```

### Reverting a Commit
```bash
# Find the commit hash
git log --oneline

# Revert specific commit
git revert commit-hash
```

---

## 📁 Project Structure

```
revolution_events/
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── main.jsx         # Entry point
│   └── styles/
│       └── index.css    # All styling
├── public/
│   ├── logo1.png        # About section logo
│   ├── logo2.png        # Navbar & footer logo
│   └── logo3.png         # Loader logo
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json
```

## Contact

- 📍 P.O Box 5315, Dar es Salaam, Tanzania
- 📞 +255 762 76 11 32 | +255 784 62 44 34
- ✉️ admin@revolution.co.tz
- 🌐 www.revolution.co.tz