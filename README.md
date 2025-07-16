# Weather Forecast App

Live version of the app is published here 

## Features

- **Real-time Weather Data**: Fetches current weather information from OpenWeatherMap API
- **City Search**: Search for weather information by city name
- **Search History**: Automatically saves and displays previously searched cities
- **History Management**: Click on history items to quickly reload weather data
- **Remove History Items**: Delete unwanted items from search history
- **Undo Functionality**: Restore accidentally removed history items
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Comprehensive error handling for API failures and invalid inputs
- **Loading States**: Visual feedback during API calls
- **TypeScript**: Full type safety throughout the application

## Demo

### Current Weather Display
- Current temperature
- Weather description (e.g., "Cloudy," "Sunny," "Rainy")
- Minimum and maximum temperatures for the day
- Wind speed

### Search History
- Persistent storage of searched cities
- One-click weather retrieval from history
- Remove individual history items
- Undo remove actions

## Technology Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **React Icons** - Icon Library
- **CSS Modules** - Styling
- **Jest & React Testing Library** - Testing Framework
- **OpenWeatherMap API** - Weather Data Provider

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd forecast-app
   ```

2. **Install dependencies**
   ```bash
   npm install

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

   To get an API key:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key from your dashboard

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will open in your browser at `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.
