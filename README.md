# ⚡ Hackwarts Hackathon 2026 ⚡

**Where Magic Meets Innovation**

A fully interactive, mobile-first hackathon website inspired by the Harry Potter wizarding world. Built with vanilla HTML, CSS, and JavaScript for maximum performance and compatibility.

## 🎯 Features

- **Mobile-First Design**: Optimized for smartphones and low-end devices
- **5 Magical Houses**: Each with 6 unique project ideas (30 total projects)
- **Interactive Accordion UI**: Smooth expand/collapse animations
- **Team Registration**: Support for teams of 1-4 members
- **Dynamic Form**: Conditional fields based on house selection
- **Bottom Navigation**: Thumb-friendly sticky navigation
- **Performance Optimized**: Lighthouse score ≥ 90, < 2MB page size
- **GPU-Accelerated Animations**: 60fps smooth scrolling
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 📂 Project Structure

```
hackathon/
├── index.html              # Main website
├── css/
│   ├── style.css          # Global styles & wizarding theme
│   └── animations.css     # Mobile-safe CSS animations
├── js/
│   ├── data.js            # Project data for all houses
│   ├── ui.js              # UI interactions & animations
│   └── form.js            # Registration form logic
├── assets/
│   ├── icons/             # House emblems & UI icons
│   └── images/            # Hero background & images
└── README.md              # This file
```

## 🏰 Houses & Projects

### 🦁 Gryffindor - Leadership • Social Impact
Projects: GRY-01 to GRY-06

### 🐍 Slytherin - Strategy • Business • Security
Projects: SLY-01 to SLY-06

### 🦅 Ravenclaw - Intelligence • Research • Automation
Projects: RAV-01 to RAV-06

### 🦡 Hufflepuff - Practical • Sustainability • Community
Projects: HUF-01 to HUF-06

### ✨ Merlinthor - Innovation • Creativity • Open Ideas
Projects: MER-01 to MER-06 (includes Open Innovation challenge)

## 🚀 Quick Start

### Local Development

1. **Clone or download this repository**

2. **Open in browser**:
   ```bash
   # Option 1: Double-click index.html
   
   # Option 2: Use Python's built-in server
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Use Node.js http-server
   npx http-server -p 8000
   ```

3. **That's it!** No build process required.

## 🌐 GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/hackwarts-hackathon.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Click Save

3. **Access your site**:
   - `https://yourusername.github.io/hackwarts-hackathon/`

## 🎨 Customization

### Change Colors

Edit `css/style.css` and modify the CSS custom properties:

```css
:root {
    --color-accent-gold: #D3A625;
    --color-gryffindor: #740001;
    /* ... add your colors ... */
}
```

### Add/Edit Projects

Edit `js/data.js` and modify the `housesData` array:

```javascript
{
    code: 'GRY-07',
    title: 'Your New Project',
    summary: 'Project description...',
    keyPoints: [
        'Feature 1',
        'Feature 2'
    ]
}
```

### Modify Prize Amounts

Edit the prizes section in `index.html`:

```html
<div class="prize-amount">₹50,000</div>
```

### Change College/Coordinator Details

Edit the footer section in `index.html`.

## 📱 Testing

### Mobile Testing
- Use Chrome DevTools Device Mode
- Test on actual devices (Android/iOS)
- Check touch targets are at least 48x48px

### Performance Testing
```bash
# Run Lighthouse audit
- Open Chrome DevTools
- Go to Lighthouse tab
- Select "Mobile" and "Performance"
- Generate report
```

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technology Stack

- **HTML5**: Semantic markup, accessibility
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: ES6+, no frameworks
- **Google Fonts**: Cinzel (headings), Inter (body)
- **LocalStorage**: Client-side data persistence

## 📊 Performance Features

- **CSS Animations Only**: GPU-accelerated transforms
- **Lazy Loading**: Images loaded on demand
- **Debounced/Throttled Events**: Optimized scroll handlers
- **Minimal JavaScript**: Logic only, no heavy libraries
- **Optimized Assets**: Compressed images
- **Mobile-First CSS**: Progressive enhancement

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Semantic HTML
- Screen reader compatible
- Reduced motion support

## 📝 Registration Data

Currently, registration data is saved to browser `localStorage`. To integrate with a backend:

1. Modify `saveRegistration()` in `js/form.js`
2. Replace localStorage with fetch/axios API call
3. Send data to your server endpoint

Example:
```javascript
async function saveRegistration(data) {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}
```

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths in `index.html`
- Ensure assets are in correct folders
- Use absolute paths if needed

**Animations not smooth?**
- Test on Chrome/Firefox (best performance)
- Check if "reduce motion" is enabled in OS
- Verify GPU acceleration is working

**Form not submitting?**
- Check browser console for errors
- Ensure all required fields are filled
- Verify localStorage is enabled

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and enhance this project for your own hackathon!

---

**Built with ❤️ and ✨ magic**

*"Help will always be given at Hogwarts to those who ask for it."*
— Albus Dumbledore
