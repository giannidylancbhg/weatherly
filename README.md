# Weatherly

Weatherly is a weather application built with React that provides current weather conditions and forecasts based on a searched location or the user's current location.

## Features

- Search for cities and locations
- Display current weather conditions
- Display weather forecasts
- Display weather highlights such as humidity, wind speed, and pressure
- Automatically detect the user's current location
- Use Liloan, Cebu as the default location
- Navigate through location suggestions using the keyboard
- Select a location from the search suggestions

## Tech Stack

- React
- JavaScript
- CSS
- Vite
- OpenWeather API
- Browser Geolocation API
- Font Awesome

## Installation and Running

### 1. Clone the repository

```bash
git clone https://github.com/giannidylancbhg/weather-web-app.git
```

### 2. Navigate to the project directory

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root of the project:

```bash
VITE_API_KEY=your_openweather_api_key
```

Replace `your_openweather_api_key` with your OpenWeather API key.

> Do not commit your `.env` file to the repository.

### 5. Run the development server

```bash
npm run dev
```

**Vite** will provide a local URL in the terminal. Open the URL in your browser to run the application.

## Geolocation

Weatherly uses the browser's Geolocation API to detect the user's current coordinates.

#### When the application starts:

1. Liloan, Cebu is displayed as the default location.
2. The browser requests permission to access the user's location.
3. If permission is granted, the application retrieves the user's latitude and longitude.
4. Weatherly uses the coordinates to retrieve weather data for the user's current location.
5. If location access is `denied` or `unavailable`, **Liloan, Cebu** remains as the default location.

## API

Weather data is provided by the OpenWeather API.

#### The application uses:

- Current Weather API — retrieves current weather conditions.
- 5 Day / 3 Hour Forecast API — retrieves forecast data.
- Geocoding API — retrieves coordinates for searched locations.

## Environmental Variables

| Variable | Description || --- | --- || `VITE_API_KEY` | OpenWeather API key |

## Notes

- Location access requires the user to grant permission in the browser.
- If location access is unavailable or denied, the application falls back to Liloan, Cebu.
- An OpenWeather API key is required to retrieve weather data.

## License

This project was created for educational and portfolio purposes.
