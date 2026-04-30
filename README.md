# Home Services Mobile Optimized View

A modern, mobile-first home services booking platform built with React, TypeScript, and Tailwind CSS. This application provides a seamless user experience for booking various home services, managing appointments, and connecting with service providers.

## 🚀 Features

### Core Functionality
- **Service Discovery**: Browse and search through various home service categories
- **Provider Profiles**: View detailed information about service providers
- **Booking System**: Schedule and manage service appointments
- **User Authentication**: Secure login, registration, and password recovery
- **Profile Management**: Complete user profile with preferences and settings
- **Real-time Notifications**: Stay updated with booking status and messages
- **Payment Integration**: Secure payment processing and management
- **Rating & Reviews**: Share feedback and read reviews from other users

### Advanced Features
- **Smart Search**: Advanced filtering and search capabilities
- **Calendar Integration**: Manage bookings with calendar view
- **Chat System**: In-app messaging with service providers
- **Location Services**: Address and location-based service discovery
- **Special Offers**: Access exclusive deals and promotions
- **Multi-language Support**: Internationalization capabilities
- **Dark Mode**: Toggle between light and dark themes
- **Biometric Authentication**: Fingerprint and PIN security options

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful and consistent icon library
- **React Router DOM** - Client-side routing
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **React Query (TanStack Query)** - Powerful data fetching and state management
- **Recharts** - Composable charting library
- **Sonner** - Modern toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **Vitest** - Fast unit testing framework
- **Testing Library** - React testing utilities
- **PostCSS** - CSS transformation tool
- **Autoprefixer** - CSS vendor prefixing

## 📱 Mobile Optimization

This application is specifically designed with mobile-first principles:

- **Responsive Design**: Optimized for all screen sizes with special focus on mobile devices
- **Touch-Friendly UI**: Large tap targets and gesture support
- **Performance Optimized**: Fast loading times and smooth animations
- **PWA Ready**: Progressive Web App capabilities for native-like experience
- **Offline Support**: Basic offline functionality for critical features

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/venzaba25/HomeServciesMobileOptimizedView.git
   cd HomeServciesMobileOptimizedView
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Base UI components (shadcn/ui)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── data/               # Static data and mock data
├── assets/             # Static assets (images, fonts)
└── test/               # Test files
```

## 🎨 UI Components

This project uses **shadcn/ui** components built on top of Radix UI primitives:

- **Form Components**: Input, Select, Checkbox, Radio, etc.
- **Navigation**: Menubar, Navigation Menu, Breadcrumb
- **Feedback**: Alert, Dialog, Toast, Progress
- **Layout**: Accordion, Tabs, Scroll Area, Separator
- **Data Display**: Avatar, Badge, Card, Table
- **Interactive**: Dropdown, Popover, Tooltip, Slider

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Home Services
VITE_APP_VERSION=1.0.0
```

### Tailwind CSS Configuration
The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`:

- Extended color palette
- Custom animations
- Responsive breakpoints
- Typography plugin integration

## 🧪 Testing

The project includes a comprehensive testing setup:

- **Unit Tests**: Component testing with Vitest and Testing Library
- **Integration Tests**: User flow testing
- **Type Checking**: TypeScript compilation

Run tests:
```bash
npm run test
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment
The application can be deployed to any static hosting service:

- **Vercel**: Zero-config deployment
- **Netlify**: Simple drag-and-drop deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Scalable hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project follows strict code style guidelines:

- **TypeScript**: Strict mode enabled
- **ESLint**: Recommended React and TypeScript rules
- **Prettier**: Consistent code formatting
- **Component Naming**: PascalCase for components
- **File Naming**: kebab-case for files
- **Import Organization**: Grouped and sorted imports

## 🔐 Security

- **Input Validation**: Zod schemas for all form inputs
- **XSS Protection**: React's built-in XSS protection
- **CSRF Protection**: Token-based CSRF protection
- **Secure Headers**: Proper security headers configuration
- **Authentication**: JWT-based authentication system

## 🌐 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Safari**: iOS 12+
- **Chrome Mobile**: Android 8+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **shadcn/ui** - For the beautiful component library
- **Vercel** - For the amazing hosting platform

## 📞 Support

For support, please contact:

- **Email**: support@homeservices.com
- **GitHub Issues**: [Create an issue](https://github.com/venzaba25/HomeServciesMobileOptimizedView/issues)
- **Documentation**: [View documentation](https://github.com/venzaba25/HomeServciesMobileOptimizedView/wiki)

---

**Built with ❤️ for the home services community**
