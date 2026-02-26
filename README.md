# 🚀 SiteBuilder

An AI-powered website builder that transforms your ideas into fully functional websites in minutes. Simply describe what you want, and let AI handle the rest.

## ✨ Features

- **AI-Powered Generation**: Create complete websites from natural language prompts
- **Real-time Preview**: See your site come to life as it's being built
- **Modern Tech Stack**: Built with React, TypeScript, and Express
- **Secure Authentication**: Powered by Better Auth for seamless user management
- **Payment Integration**: Stripe integration for monetization
- **Database Powered**: PostgreSQL with Prisma ORM for reliable data management
- **Responsive Design**: Beautiful, mobile-first designs with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **React Router** - Client-side routing
- **Better Auth UI** - Authentication components
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

### Backend
- **Express 5** - Web framework
- **TypeScript** - Type-safe server code
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Robust database
- **Better Auth** - Authentication system
- **OpenAI** - AI integration
- **Stripe** - Payment processing

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- OpenAI API key
- Stripe account (for payments)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd site-builder
```

### 2. Install dependencies

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Environment Setup

Create `.env` files in both client and server directories:

#### Client `.env`
```env
VITE_API_URL=http://localhost:3000
```

#### Server `.env`
```env
DATABASE_URL=postgresql://user:password@localhost:5432/sitebuilder
OPENAI_API_KEY=your_openai_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
BETTER_AUTH_SECRET=your_auth_secret
PORT=3000
```

### 4. Database Setup

```bash
cd server
npx prisma migrate dev
npx prisma generate
```

### 5. Run the application

```bash
# Terminal 1 - Start the server
cd server
npm run server

# Terminal 2 - Start the client
cd client
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 📁 Project Structure

```
site-builder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   ├── configs/       # Configuration files
│   │   └── types/         # TypeScript types
│   └── package.json
│
├── server/                # Express backend
│   ├── controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── middlewares/      # Custom middlewares
│   ├── prisma/           # Database schema & migrations
│   ├── lib/              # Utility functions
│   └── package.json
│
└── README.md
```

## 🔧 Development

### Client Development
```bash
cd client
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Server Development
```bash
cd server
npm run server       # Start with nodemon (auto-reload)
npm start           # Start without auto-reload
npm run build       # Compile TypeScript
```

## 🚢 Deployment

Both client and server are configured for Vercel deployment with `vercel.json` files included.

### Deploy to Vercel

```bash
# Deploy client
cd client
vercel

# Deploy server
cd server
vercel
```

Make sure to configure environment variables in your Vercel project settings.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- Better Auth for authentication
- Stripe for payment processing
- The amazing open-source community

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ using AI and modern web technologies
