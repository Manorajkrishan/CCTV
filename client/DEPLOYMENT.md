# 🚀 eSight Technology Website - Deployment Guide

## 📁 Project Build Complete!

Your project has been successfully built and is ready for hosting. The build files are located in the `dist/` folder.

## 🌐 Hosting Options

### **1. Apache Server (Linux/Shared Hosting)**
- **Files needed**: All contents from `dist/` folder
- **Configuration**: `.htaccess` file is already included
- **Upload**: Upload all files to your web root directory

### **2. IIS Server (Windows)**
- **Files needed**: All contents from `dist/` folder
- **Configuration**: `web.config` file is already included
- **Upload**: Upload all files to your web root directory

### **3. Nginx Server**
- **Files needed**: All contents from `dist/` folder
- **Configuration**: Add this to your nginx.conf:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Enable gzip compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### **4. Netlify/Vercel (Static Hosting)**
- **Files needed**: All contents from `dist/` folder
- **Upload**: Drag and drop the `dist/` folder contents
- **Configuration**: Automatically handles React Router

## 📤 Upload Instructions

### **Step 1: Prepare Files**
- Navigate to your project's `dist/` folder
- Select all files and folders
- Create a ZIP archive (optional but recommended)

### **Step 2: Upload to Server**
- **FTP/SFTP**: Upload all files to your web root directory
- **cPanel File Manager**: Upload files to `public_html/`
- **Plesk**: Upload to your domain's document root
- **Direct Upload**: Use your hosting provider's file upload tool

### **Step 3: Verify Upload**
- Ensure these files are in your web root:
  - `index.html`
  - `.htaccess` (Apache) or `web.config` (IIS)
  - `assets/` folder
  - All image folders (`Home/`, `aboutus/`, `Service/`, etc.)

## 🔧 Server Configuration

### **Apache (.htaccess)**
- ✅ URL rewriting enabled
- ✅ Compression enabled
- ✅ Browser caching configured
- ✅ Security headers set
- ✅ React Router support

### **IIS (web.config)**
- ✅ URL rewriting enabled
- ✅ Compression enabled
- ✅ Browser caching configured
- ✅ Security headers set
- ✅ React Router support

## 🚨 Important Notes

### **React Router Support**
- All routes will redirect to `index.html`
- This enables client-side routing to work properly
- Direct URL access will work (e.g., `/about`, `/contact`)

### **File Permissions**
- **Apache**: Files should be readable (644)
- **Directories**: Should be executable (755)
- **Upload via FTP**: Use binary mode for images

### **SSL/HTTPS**
- Uncomment HTTPS redirect in `.htaccess` if you have SSL
- Update `web.config` for IIS SSL configuration

## 📱 Mobile Optimization

- ✅ Mobile-responsive design implemented
- ✅ Animations disabled on mobile for better performance
- ✅ Touch-friendly navigation
- ✅ Optimized images and assets

## 🎯 Performance Features

- ✅ Gzip compression enabled
- ✅ Browser caching configured
- ✅ Optimized asset delivery
- ✅ Security headers implemented
- ✅ Directory browsing disabled

## 🔍 Testing Your Deployment

1. **Homepage**: Visit your domain root
2. **Navigation**: Test all menu links
3. **Direct URLs**: Try accessing `/about`, `/contact`, etc.
4. **Mobile**: Test on mobile devices
5. **Performance**: Use Google PageSpeed Insights

## 🆘 Troubleshooting

### **404 Errors on Direct URLs**
- Ensure `.htaccess` or `web.config` is uploaded
- Check server supports URL rewriting
- Verify file permissions

### **Images Not Loading**
- Check image file paths
- Verify image files were uploaded
- Check file permissions

### **Slow Loading**
- Enable server-side compression
- Check browser caching headers
- Optimize image sizes if needed

## 📞 Support

If you encounter issues:
1. Check server error logs
2. Verify file uploads are complete
3. Test with a simple HTML file first
4. Contact your hosting provider for server-specific issues

---

## 🎉 Ready to Deploy!

Your eSight Technology website is now ready for hosting. The build includes:
- ✅ Production-optimized React app
- ✅ Server configuration files
- ✅ Mobile-responsive design
- ✅ Performance optimizations
- ✅ Security headers
- ✅ SEO meta tags

Upload the contents of the `dist/` folder to your web server and your website will be live! 🚀

