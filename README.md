# Weather App

This is a simple Weather App built using Node.js, Express, Handlebars, and Vercel. The app allows users to check the weather by entering their location.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Directory Structure](#directory-structure)
- [Contact](#contact)

## Overview

The Weather App provides current weather information for a given location. Users can enter their location to receive weather updates.

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create environment variables:**

    Create a `.env` file in the root directory and add your API keys:

    ```env
    GEOCODE_API_KEY=your_geocode_api_key
    FORECAST_API_KEY=your_forecast_api_key
    ```

4. **Run the server:**

    ```bash
    npm start
    ```

5. **Visit the app in your browser:**

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- **Home Page:** Displays the main interface where users can navigate to different sections.
- **About Page:** Provides information about the project.
- **Weather Page:** Users can enter their location to get current weather information.
- **Help Page:** Offers guidance on how to use the app and navigate the site.

## Deployment

This project is configured to be deployed on Vercel. Follow these steps to deploy:

1. **Install Vercel CLI (if not already installed):**

    ```bash
    npm install -g vercel
    ```

2. **Deploy to Vercel:**

    ```bash
    vercel
    ```

3. **Follow the prompts to complete the deployment.**

## Directory Structure

Here is an overview of the project directory structure:

/project-root
/public
/js
app.js # Client-side JavaScript
/css
styles.css # Custom CSS styles
help.html # Help page
/src
app.js # Express server setup
/utils
geocode.js # Geocoding utility
forecast.js # Weather forecast utility
/Templates
/views
index.hbs # Home page template
about.hbs # About page template
help.hbs # Help page template
weather.hbs # Weather page template
404.hbs # 404 error page template
/partials
header.hbs # Header partial template
footer.hbs # Footer partial template
package.json # Project dependencies and scripts
vercel.json # Vercel configuration file
README.md # Project documentation

## Contact

- **Name:** Gideon Suttle

Feel free to create issues or pull requests if you find any bugs or want to contribute to the project.