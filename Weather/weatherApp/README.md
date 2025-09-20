<div align="center">

# 🌦️ Weather App

*A beautiful and responsive weather application built with React and Vite*

![Weather App Preview](src/assets/weather.jpg)

</div>

---

## ✨ Features

- 🌡️ **Real-time Weather Data** - Get current weather information from OpenWeatherMap API
- 🔍 **City Search** - Search weather by city name with autocomplete suggestions
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🎨 **Modern Interface** - Clean and intuitive design with Tailwind CSS
- 🌈 **Weather Icons** - Dynamic weather icons from OpenWeatherMap
- 📊 **Detailed Information** - Temperature, humidity, wind speed, and cloud coverage
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Error Handling** - User-friendly error messages for invalid cities

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weatherapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get OpenWeatherMap API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key from the dashboard

4. **Configure API Key**
   - Open `src/components/Weather.jsx`
   - Replace the placeholder API key with your actual key:
   ```javascript
   const api_key = "your_actual_api_key_here"
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start searching for weather! 🌤️

## 📖 Usage

1. **Search Weather**
   - Enter a city name in the search box
   - Press Enter or click the "Search Weather" button
   - View real-time weather information

2. **Pre-filled Cities**
   - Use the dropdown suggestions for quick access
   - Available cities: Jaipur, Ajmer, Sambhar

3. **Weather Information**
   - **Temperature** - Current temperature in Celsius
   - **Humidity** - Percentage of moisture in the air
   - **Wind Speed** - Wind speed in meters per second
   - **Cloud Coverage** - Percentage of cloud cover

## 🛠️ Tech Stack

- ⚛️ **React 19** - Modern React with hooks
- ⚡ **Vite** - Fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌐 **OpenWeatherMap API** - Weather data provider
- 📦 **ESLint** - Code linting and formatting

## 📁 Project Structure

```
weatherapp/
├── src/
│   ├── components/
│   │   └── Weather.jsx          # Main weather component
│   ├── assets/
│   │   └── weather.jpg          # Background image
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # Application entry point
├── public/
├── index.html                   # HTML template
└── package.json                 # Dependencies and scripts
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for custom themes
- Update `src/index.css` for global styles
- Change background image in `src/assets/`

### Features
- Add more weather metrics in `Weather.jsx`
- Implement weather forecasts
- Add location-based weather detection
- Include weather maps integration

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Screenshots

<div align="center">


<img width="1919" height="886" alt="Image" src="https://github.com/user-attachments/assets/dfe6003e-8053-405d-9a03-e988b19c4160" />
<img width="1919" height="888" alt="Image" src="https://github.com/user-attachments/assets/a53423a0-bab0-4c56-9ae7-ef232c8c628f" />

### 📱 Mobile Responsive
*The app is fully responsive and works beautifully on all screen sizes*

### 🎯 Search Functionality
*Real-time city search with instant weather updates*

</div>

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

<div align="center">

**Made with ❤️ and lots of ☕**

*Stay updated with the weather! 🌦️*

</div>
