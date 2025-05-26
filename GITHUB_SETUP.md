# GitHub Repository Setup Instructions

Follow these steps to create a GitHub repository for your resume website:

## 1. Create a New Repository on GitHub

1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Enter a repository name (e.g., "trevor-moreau-resume")
4. Add a description (optional): "Professional resume website for Trevor Moreau"
5. Choose "Public" or "Private" visibility as preferred
6. Check "Add a README file" (optional, as we already have one)
7. Click "Create repository"

## 2. Upload Files to GitHub

### Option 1: Using GitHub Web Interface

1. Navigate to your new repository
2. Click the "Add file" dropdown and select "Upload files"
3. Drag and drop all the files and folders from the resume_website_package
4. Add a commit message (e.g., "Initial upload of resume website files")
5. Click "Commit changes"

### Option 2: Using Git Command Line

```bash
# Clone the repository
git clone https://github.com/yourusername/trevor-moreau-resume.git

# Copy all files to the repository folder
# (Replace with the path to where you extracted the files)
cp -r /path/to/resume_website_package/* trevor-moreau-resume/

# Navigate to the repository folder
cd trevor-moreau-resume

# Add all files to git
git add .

# Commit the changes
git commit -m "Initial upload of resume website files"

# Push to GitHub
git push origin main
```

## 3. Verify Repository

1. Refresh your GitHub repository page
2. Ensure all files and folders are visible:
   - index.html
   - css/ folder with styles.css and interactive.css
   - js/ folder with main.js and chatbot_embed_placeholder.js
   - images/ folder
   - README.md

Your resume website is now stored in GitHub and ready for deployment to AWS Lightsail.
