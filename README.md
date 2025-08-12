# Tal Yefet - HR Consultant Website

A professional website for Tal Yefet, an HR consultant specializing in time optimization for large corporations. This website serves as both a portfolio and a business promotion platform with a comprehensive admin panel for managing content.

## Features

### 🏠 **Public Website**
- **Home Page**: Showcases services, featured content, and business highlights
- **About Page**: Professional background, expertise, and experience
- **Services Page**: Detailed service offerings with pricing and process information
- **Blog**: Professional articles about HR optimization and time management
- **Videos**: Training videos and educational content
- **Contact Page**: Contact form and business information

### ⚙️ **Admin Panel**
- **Content Management**: Create, edit, and delete blog posts and videos
- **Media Upload**: Drag-and-drop file uploads for videos and images
- **Status Management**: Publish/draft content with easy status toggling
- **Rich Text Editing**: Advanced text editor for blog posts
- **Tag Management**: Organize content with customizable tags
- **Search & Filter**: Find and organize content efficiently

### 🎨 **Design Features**
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Hebrew RTL Support**: Full right-to-left language support
- **Professional Theme**: Clean, business-focused design
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: WCAG compliant design elements

## Technology Stack

- **Frontend**: React 18 with modern hooks
- **State Management**: Redux with Redux Toolkit
- **Routing**: React Router v7
- **Styling**: SCSS with CSS custom properties
- **File Upload**: React Dropzone for media handling
- **Date Handling**: date-fns with Hebrew locale support
- **Build Tool**: Vite for fast development and building

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tal-yefet-hr-consultant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Project Structure

```
src/
├── cmps/                 # Reusable components
│   ├── AppHeader.jsx    # Navigation header
│   ├── AppFooter.jsx    # Site footer
│   ├── Hero.jsx         # Hero section
│   ├── PostEditor.jsx   # Blog post editor
│   ├── VideoUploader.jsx # Video upload component
│   ├── PostList.jsx     # Admin post management
│   └── VideoList.jsx    # Admin video management
├── pages/                # Page components
│   ├── Home.jsx         # Landing page
│   ├── AdminPanel.jsx   # Admin dashboard
│   ├── Blog.jsx         # Blog listing
│   ├── BlogPost.jsx     # Individual blog post
│   ├── Videos.jsx       # Video gallery
│   ├── About.jsx        # About page
│   ├── Services.jsx     # Services page
│   └── Contact.jsx      # Contact page
├── store/                # Redux state management
│   ├── actions/         # Redux actions
│   ├── reducers/        # Redux reducers
│   └── store.js         # Store configuration
├── service/              # Business logic services
│   └── content.service.js # Content management service
└── assets/style/         # SCSS stylesheets
    ├── main.scss         # Main stylesheet
    ├── cmps/             # Component styles
    ├── pages/            # Page styles
    └── setup/            # SCSS variables and mixins
```

## Content Management

### Blog Posts
- **Title**: Post headline
- **Excerpt**: Short summary for listings
- **Content**: Full article text
- **Tags**: Categorization labels
- **Status**: Published or draft
- **Metadata**: Creation date, last updated

### Videos
- **Title**: Video name
- **Description**: Video summary
- **File**: Video file upload
- **Thumbnail**: Optional preview image
- **Tags**: Content categorization
- **Status**: Published or draft
- **Metadata**: Duration, file size, dates

## Admin Access

Access the admin panel at `/admin` to:
- Manage blog posts and videos
- Upload new content
- Edit existing content
- Control publication status
- Organize content with tags

## Customization

### Colors and Theme
Edit `src/assets/style/setup/_vars.scss` to customize:
- Primary colors
- Accent colors
- Text colors
- Background colors
- Border colors

### Content
- Update business information in component files
- Modify service descriptions
- Change contact details
- Update professional background

### Styling
- Modify SCSS files for design changes
- Update component layouts
- Adjust responsive breakpoints
- Customize animations and transitions

## Deployment

### Static Hosting
The built files can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

### Environment Variables
No environment variables are required for basic functionality. The website uses local storage for content persistence.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and media lazy loading
- **Optimized Builds**: Vite-optimized production builds
- **Responsive Images**: Optimized image handling
- **Minimal Dependencies**: Lightweight bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Tal Yefet's business use.

## Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for Tal Yefet's HR Consulting Business**
