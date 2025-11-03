# FoodApp 🍕

A React-based food recipe application built as a capstone project during my journey learning React. This app allows users to search for recipes, view detailed information about food items, and explore ingredients and cooking instructions.

🌐 **Live App**: [https://red-beach-0ddccb803.3.azurestaticapps.net/](https://red-beach-0ddccb803.3.azurestaticapps.net/)

## 📖 About

FoodApp is a modern web application that leverages the Spoonacular API to provide users with a comprehensive recipe search experience. Built with React 19 and Vite, this project demonstrates core React concepts including hooks, component composition, and state management.

While this started as a learning project, FoodApp has become a practical tool for me and my family (2adults and 2 children) to discover new recipes, get cooking inspiration, and plan our weekly meals together. It's a real-world application that we use regularly to make meal planning easier and more enjoyable.

This project was developed following the tutorial series from [FreeCodeCamp's React Course](https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza).

## ✨ Features

- 🔍 **Recipe Search**: Search for food recipes using keywords
- 📋 **Recipe Details**: View comprehensive information about each recipe including:
  - Cooking time
  - Serving size
  - Dietary information (vegetarian, vegan)
  - Price per serving
  - Ingredients list
  - Cooking instructions
- 🎨 **Modern UI**: Clean and responsive design using CSS Modules
- ⚡ **Fast Performance**: Built with Vite for optimal development and build experience

## 🛠️ Tech Stack

- **React** 19.1.1
- **Vite** 7.1.7
- **CSS Modules** for component styling
- **Spoonacular API** for recipe data

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20.19.0 or higher recommended)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/FoodApp.git
cd FoodApp/FoodApp
```

2. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the `FoodApp` directory with the following variables:

```env
VITE_BASE_URL=https://api.spoonacular.com/recipes/complexSearch
VITE_API_KEY=your_spoonacular_api_key_here
```

**Note**: You can obtain a free API key by signing up at [Spoonacular](https://spoonacular.com/food-api).

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
FoodApp/
├── src/
│   ├── component/
│   │   ├── Container.jsx          # Main container component
│   │   ├── InnerConteiner.jsx      # Inner container wrapper
│   │   ├── Search.jsx              # Recipe search component
│   │   ├── FoodList.jsx            # List of food items
│   │   ├── FoodItem.jsx            # Individual food item card
│   │   ├── FoodDetails.jsx         # Detailed recipe information
│   │   ├── ItemList.jsx            # Ingredients list component
│   │   ├── Item.jsx                # Individual ingredient item
│   │   ├── Nav.jsx                 # Navigation component
│   │   └── *.module.css            # CSS Modules for components
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   └── app.css                     # Global styles
├── public/                         # Static assets
├── dist/                           # Production build output
├── package.json
├── vite.config.js
└── .env                            # Environment variables (not committed)
```

## 🌐 Deployment

This project is hosted on **Azure Static Web Apps** and is available at [https://red-beach-0ddccb803.3.azurestaticapps.net/](https://red-beach-0ddccb803.3.azurestaticapps.net/).

### CI/CD Pipeline

The application features a fully automated CI/CD pipeline using **GitHub Actions**. Every push to the `main` branch triggers an automatic build and deployment process:

- ✅ Automatic builds on every push to `main`
- ✅ Pull request previews for testing changes
- ✅ Seamless deployment to Azure Static Web Apps
- ✅ Environment variables managed securely through GitHub Secrets

The workflow configuration can be found at `.github/workflows/azure-static-web-apps-red-beach-0ddccb803.yml`.

## 🎓 Learning Outcomes

This project helped me learn and practice:

- React fundamentals (components, props, state)
- React Hooks (useState, useEffect)
- Component composition and reusability
- CSS Modules for scoped styling
- API integration with external services
- Environment variables management
- Vite build tool and development workflow
- Git version control
- CI/CD with GitHub Actions

## 🙏 Acknowledgments

- Tutorial series: [FreeCodeCamp React Course](https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- Recipe data provided by [Spoonacular API](https://spoonacular.com/food-api)

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

This is a personal learning project. Feel free to fork it and create your own version!

---

Built with ❤️ as part of my React learning journey
