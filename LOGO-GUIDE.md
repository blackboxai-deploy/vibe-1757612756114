# 🎨 Logo Integration Guide

## 📍 **Current Logo Locations**

Your logo has been added to the following locations on your website:

### 1. **Navigation Bar**
- **Location**: Top navigation
- **Size**: Medium (40x40px)
- **Style**: With company name "SocialPro"
- **Component**: `src/components/Navigation.tsx`

### 2. **Hero Section** 
- **Location**: Main landing area (centered)
- **Size**: Large (64x64px)
- **Style**: Logo only (no text)
- **Component**: `src/components/Hero.tsx`

### 3. **Footer**
- **Location**: Footer first column
- **Size**: Medium (32x32px) 
- **Style**: With company name
- **Component**: `src/components/Footer.tsx`

## 🔧 **How to Add Your Custom Logo**

### **Option 1: Replace Placeholder URL (Easiest)**

Open `src/components/Logo.tsx` and replace the placeholder URL:

```typescript
// Replace this line:
const logoUrl = "https://placehold.co/80x80/3b82f6/ffffff?text=SP";

// With your logo URL:
const logoUrl = "https://your-domain.com/your-logo.png";
```

### **Option 2: Use Local Logo File (Recommended)**

1. **Add your logo to the `public` folder:**
   ```
   public/
   ├── logo.png          <- Your logo here
   ├── logo-white.png    <- Optional: White version for dark backgrounds
   └── favicon.ico
   ```

2. **Update the Logo component:**
   ```typescript
   // In src/components/Logo.tsx, replace:
   const logoUrl = "https://placehold.co/80x80/3b82f6/ffffff?text=SP";
   
   // With:
   const logoUrl = "/logo.png";
   
   // Or for multiple variants:
   const logoUrl = variant === 'dark' ? '/logo-white.png' : '/logo.png';
   ```

### **Option 3: SVG Logo (Best Performance)**

For scalable, crisp logos at all sizes:

```typescript
// Replace the img tag with inline SVG:
<svg className={`${sizeConfig[size].image} object-contain`} viewBox="0 0 100 100">
  {/* Your SVG content here */}
  <circle cx="50" cy="50" r="40" fill="#3b82f6"/>
  <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24">SP</text>
</svg>
```

## 📐 **Logo Specifications**

### **Recommended Sizes:**
- **Small**: 24x24px (mobile nav, small elements)
- **Medium**: 40x40px (desktop nav, standard use)
- **Large**: 64x64px (hero section, prominent display)

### **File Formats:**
- **PNG**: Best for logos with transparency
- **SVG**: Best for scalability and performance
- **WEBP**: Best for file size optimization

### **Design Guidelines:**
- **Square or rectangular** aspect ratios work best
- **Minimum size**: 32x32px for clarity
- **Background**: Transparent PNG or SVG recommended
- **Colors**: Should work on both light and dark backgrounds

## 🎯 **Logo Component Usage**

The `Logo` component is flexible and reusable:

```typescript
import Logo from "@/components/Logo";

// Different size options
<Logo size="small" />    // 24x24px
<Logo size="medium" />   // 40x40px  
<Logo size="large" />    // 64x64px

// Show/hide company name
<Logo showText={true} />   // Shows "SocialPro" text
<Logo showText={false} />  // Logo only

// Light/dark variants
<Logo variant="light" />   // For light backgrounds
<Logo variant="dark" />    // For dark backgrounds

// Custom styling
<Logo className="justify-center hover:scale-110" />
```

## 🔄 **Logo Variants for Different Sections**

### **Navigation Logo:**
```typescript
<Logo size="medium" showText={true} variant="light" />
```

### **Hero Logo:**
```typescript
<Logo size="large" showText={false} variant="light" className="justify-center" />
```

### **Footer Logo:**
```typescript
<Logo size="medium" showText={true} variant="dark" />
```

## 🎨 **Advanced Customization**

### **Custom Company Name:**
Edit the Logo component to change "SocialPro":

```typescript
// In src/components/Logo.tsx
<div className={`${sizeConfig[size].text} font-bold ${textColor}`}>
  Your Company Name  {/* Change this */}
</div>
```

### **Multiple Logo Versions:**
For brands with different logo variants:

```typescript
const getLogoUrl = (size: string, variant: string) => {
  if (size === 'large') return '/logo-large.png';
  if (variant === 'dark') return '/logo-white.png';
  return '/logo.png';
};
```

### **Animated Logo:**
Add CSS animations to your logo:

```typescript
<img 
  src={logoUrl}
  alt="Company Logo" 
  className={`${sizeConfig[size].image} rounded-lg object-contain hover:scale-110 transition-transform duration-300`}
/>
```

## 📱 **Mobile Considerations**

The logo automatically adapts to different screen sizes:
- **Desktop**: Full size with text
- **Tablet**: Medium size, may hide text on small screens
- **Mobile**: Small size, optimized for limited space

## ✅ **Quick Checklist**

- [ ] Add your logo file to `/public/` folder
- [ ] Update the `logoUrl` in `src/components/Logo.tsx`
- [ ] Test logo appearance on light and dark backgrounds
- [ ] Verify logo scales properly on mobile devices
- [ ] Check logo appears in navigation, hero, and footer
- [ ] Ensure logo file size is optimized (< 50KB recommended)

## 🚀 **Ready to Use!**

Your logo system is now complete and ready for customization. Simply replace the placeholder with your actual logo file and update the component as needed!