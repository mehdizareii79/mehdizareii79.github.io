# [silvery107.github.io](https://silvery107.github.io/)

Welcome! This is my personal academic website built with Jekyll and hosted on GitHub Pages. It features a modern, responsive design with dynamic elements including dark mode, image zooming, animated background, and automatic last-updated timestamps.

## Quick Start

### 1. Fork and Setup Repository
1. **Fork this repository** to your GitHub account
2. **Rename the repository** to `your-username.github.io` (replace `your-username` with your GitHub username)
3. **Enable GitHub Pages** in repository settings (Settings → Pages → Source: Deploy from a branch → Branch: main)

### 2. Basic Configuration (`_config.yml`)

Edit the `_config.yml` file with your personal information:

```yaml
# Basic Information
title: Your Full Name
description: Your Title/Position (e.g., "PhD Student in Computer Science")
logo: assets/img/your-photo.jpg  # Add your photo to assets/img/

# Contact & Social Links
url_github: https://github.com/your-username
url_email: your.email@university.edu
url_linkedin: https://www.linkedin.com/in/your-profile
url_scholar: https://scholar.google.com/citations?user=YOUR_ID

# Optional: Add your name in another language/script
chinese_name: assets/img/your-name.svg  # If applicable

# Analytics (optional)
google_analytics: YOUR_GA_ID  # Get from Google Analytics
```

### 3. Content Customization

Check the `_includes/` folder for various sections:
- `experience.html` - Work experience and research positions
- `education.html` - Educational background and degrees  
- `projects.html` - Key projects and research work
- `news.html` - Recent updates and announcements

Edit these files to replace the content with your own information.

### 4. Google Analytics

1. Create a Google Analytics account and get your tracking ID
2. Add it to `_config.yml` under `google_analytics`

## References

### Design Inspiration
- [The Minimal Theme](https://github.com/pages-themes/minimal) - Base Jekyll theme
- [Homepage of Bodun Hu](https://www.bodunhu.com/) - Academic website inspiration
- [Homepage of Dr. Fabian Stöckl](https://fabian-stoeckl.com/) - Design reference
- [Homepage of Yaoyao Liu](https://www.cs.jhu.edu/~yyliu/) - Layout inspiration

### Technical Implementation
- [Canvas Nest](https://github.com/hustcc/canvas-nest.js) - Animated background
- [Buttons](https://codepen.io/ben_jammin/pen/syaCq) - Custom button styles
- [Image Zooming](https://blog.walterlv.com/post/create-click-to-zoom-image-for-web-pages.html) - Zoom functionality
- [Dark Mode](https://github.com/darkreader/darkreader) - Dark mode implementation
- [Floating Action Button](https://codepen.io/cheryllaird/pen/LZWYGV) - FAB component

### GitHub Integration
- [GitHub API Documentation](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository) - Repository info API
- [XMLHttpRequest Tutorial](https://codepen.io/chelsslehc/pen/eaVXQj) - AJAX requests
- [git-filter-repo](https://github.com/newren/git-filter-repo) - Git history management

### Utilities
- [Favicon Generator](https://redketchup.io/favicon-generator) - Favicon creation
- [HTML Video Guide](https://www.w3schools.com/tags/tag_video.asp) - Video embedding
