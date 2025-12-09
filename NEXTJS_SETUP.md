# Next.js Portfolio Setup Guide

This portfolio has been converted to Next.js. Here's what you need to know:

## 🚀 Quick Start

### For Builder.io:

**Setup Command**: `npm install`  
**Dev Command**: `npm run dev`  
**Build Command**: `npm run build`  
**Start Command**: `npm start`

### Local Development:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

## 📁 Next.js Structure

```
HildaPosada/
├── pages/              ✅ Next.js pages
│   ├── _app.js        ✅ Custom App
│   ├── _document.js   ✅ Custom Document
│   └── index.js       ✅ Home page (converted from index.html)
├── public/            ✅ Static files (images, etc.)
│   └── img/
├── styles/            ✅ CSS files
│   └── globals.css    ✅ (converted from style.css)
├── package.json       ✅ Dependencies
├── next.config.js     ✅ Next.js config
└── old-static-site/   📦 (archived HTML/CSS/JS)
```

## 📝 What Changed

- ✅ Created `/pages` directory with Next.js structure
- ✅ Converted `index.html` → `pages/index.js` (React component)
- ✅ Converted `style.css` → `styles/globals.css`
- ✅ Converted `script.js` smooth scroll → React hooks in `pages/index.js`
- ✅ Created `/public` directory for images
- ✅ Old files moved to `/old-static-site` (archived)

## 🎨 Adding Images

Place images in `/public/img/` folder. Reference them as:

```jsx
<img src="/img/your-image.jpg" alt="Description" />
```

## 🌐 Deployment

### Vercel (Easiest):
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploys on push

### Builder.io:
Use the commands listed above in the Quick Start section.

## ✅ Checklist

- [x] Next.js structure created
- [x] Pages directory exists
- [x] Styles converted
- [x] JavaScript converted to React
- [x] Public directory for images
- [ ] Add your images to `/public/img/`
- [ ] Test locally with `npm run dev`
- [ ] Push to GitHub
- [ ] Deploy to Builder.io

## 📧 Questions?

Contact: [LinkedIn](https://www.linkedin.com/in/hildaposada/)
