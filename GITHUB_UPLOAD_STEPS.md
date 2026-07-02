# GitHub Upload Steps

## Option A: GitHub website upload

1. Go to https://github.com/new
2. Repository name: `fitpals`
3. Visibility: `Public`
4. Create repository.
5. Click `uploading an existing file`.
6. Drag all files from this folder into GitHub:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `manifest.webmanifest`
   - `.nojekyll`
   - `README.md`
   - `assets/`
7. Commit the files.
8. Go to `Settings > Pages`.
9. Choose `Deploy from a branch`.
10. Select `main` and `/ (root)`.
11. Save.

## Option B: Terminal upload after creating the repo

After creating an empty GitHub repo, run these from this folder:

```bash
git init
git add .
git commit -m "Deploy FitPals prototype"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/fitpals.git
git push -u origin main
```

Then enable GitHub Pages from `Settings > Pages`.
