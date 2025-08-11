# CCTV Security Company Website

A modern, responsive website for a CCTV security company built with React, Tailwind CSS, and Vite. This website is similar to [TechEye.lk](https://techeye.lk/) and showcases comprehensive security solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for security companies
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **Service Showcase**: Comprehensive display of security services
- **Company Information**: Detailed about us and company values
- **Professional Footer**: Complete footer with company links and information

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Custom SVG icons and emojis
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
client/
├── public/
│   ├── Home/           # Home page images
│   ├── Oursrvices/     # Service-related images
│   └── Techeye/        # Team and tech images
├── src/
│   ├── Pages/          # Page components
│   │   ├── Header.jsx  # Navigation header
│   │   ├── Home.jsx    # Home page
│   │   ├── Aboutus.jsx # About us page
│   │   ├── Contactus.jsx # Contact page
│   │   └── Footer.jsx  # Footer component
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CCTV/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📱 Pages

### Home Page (`/`)
- Hero section with compelling call-to-action
- Services showcase with images
- Company statistics and achievements
- Why choose us section
- Call-to-action for quotes

### About Us (`/about`)
- Company story and history
- Mission and vision statements
- Core company values
- Company timeline/milestones
- Team member profiles

### Contact Us (`/contact`)
- Contact form with validation
- Company contact information
- Office location and business hours
- Service list
- Multiple contact methods

## 🎨 Design Features

- **Color Scheme**: Professional blue theme suitable for security companies
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows for depth and modern feel
- **Animations**: Smooth transitions and hover effects
- **Icons**: Mix of emojis and SVG icons for visual appeal

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
- Update company information in each component
- Replace images in the `public` folder
- Modify contact details and phone numbers
- Update service descriptions

### Styling
- Modify `src/index.css` for custom styles
- Update Tailwind classes in components
- Add new animations in the config file

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational and commercial use. Please ensure you have the rights to use any images or content.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this website template, please contact the development team.

---

**Built with ❤️ using React and Tailwind CSS**
