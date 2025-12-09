# 🎯 Your Next.js Deployment Checklist

## Local Testing

- [ ] Run `npm install` in your project directory
- [ ] Run `npm run dev` to start development server
- [ ] Visit `http://localhost:3000` to verify it works
- [ ] Check that all sections display correctly
- [ ] Test smooth scroll navigation

## Add Your Images

- [ ] Add `banner.jpg` to `/public/img/`
- [ ] Add `project1.jpg` to `/public/img/`
- [ ] Add `project2.jpg` to `/public/img/`
- [ ] Or update image paths in `pages/index.js` if you have different names

## Push to GitHub

```bash
git add .
git commit -m "Convert to Next.js structure"
git push origin main
```

- [ ] Changes committed
- [ ] Changes pushed to GitHub
- [ ] Verify files on GitHub.com

## Builder.io Configuration

### In Builder.io Project Settings:

**Setup Command**: 
```
npm install
```

**Dev Command**: 
```
npm run dev
```

**Build Command**: 
```
npm run build
```

**Start Command**: 
```
npm start
```

**Install Command**: 
```
npm install
```

**Framework**: Select "Next.js"

**Output Directory**: `.next`

- [ ] Commands configured
- [ ] Framework set to Next.js
- [ ] Repository connected
- [ ] Trigger new deployment

## Verify Deployment

- [ ] Build succeeds without errors
- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Links work
- [ ] Smooth scroll works
- [ ] Mobile responsive

## ✅ Success Criteria

Your deployment is successful when:
1. Builder.io recognizes it as a Next.js project ✓
2. Build completes without errors ✓
3. Site loads at your Builder.io URL ✓
4. All content displays correctly ✓

## 🚨 If You See Errors

### "Cannot find module 'react'"
Run: `npm install`

### "Pages directory not found"
Check that `/pages` folder exists with `index.js`

### "Module not found: Can't resolve '../styles/globals.css'"
Check that `/styles/globals.css` exists

### Build succeeds but page is blank
Check browser console for errors
Verify image paths use `/img/` not `img/`

## 📞 Need Help?

- Check `NEXTJS_SETUP.md` for detailed setup guide
- Check `CONVERSION_COMPLETE.md` for what was changed
- Review your code in `/pages/index.js`

---

**Current Status**: ✅ Conversion Complete  
**Next Step**: Run `npm install` and test locally!
