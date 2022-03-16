<h1 align="center">AirQ Air quality app</h1>

<p>AirQ allows a user to view a card with info about their local air quality, along with a map displaying the nearest measuring station with the air quality index included. The app will use location based on the user's IP if available, or the user may choose any available country, state, and city to view air quality there.

There is an attempt to fetch local data on page load. If the option to choose location is clicked, the drop down to select country, state, city will appear in order as each one is selected.

The info card for the desired location should be color coded based on the current air quality, and include a custom message

Heart icon on info card to save the location. If saved locations exist, the user can open a drop down list to select from them.</p>

## Built With

- Reactjs
- Leaflet maps
- axios
- styled-components
- HTML
- CSS

## Links

- [Repo](https://github.com/GregNicholas/air-quality Air quality app "AirQ Air quality app Repo")

- [Live](https://csb-3m1df2-gregnicholas.vercel.app/ "Live View")

- [API](https://api-docs.iqair.com/ "Air Visual API")

## Screenshots

![Home Page](/screenshots/1.png "Home Page")

![](/screenshots/2.png)

![](/screenshots/3.png)

## Available Commands

In the project directory, you can run:

### `npm start" : "react-scripts start"`,

The app is built using `create-react-app` so this command Runs the app in Development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `"npm run build": "react-scripts build"`,

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app will be ready to deploy!

### `"npm run test": "react-scripts test"`,

Launches the test runner in the interactive watch mode.

## Future Updates

- [x] Save Favorite Locations
- [ ] Drop Multiple points on map

## Author

**Greg Schoenberg**

- [Profile](https://github.com/GregNicholas "Greg Schoenberg")
- [Email](mailto:gregschoenberg@gmail.com?subject=Hi "Hi!")
- [Website](https://gregschoenberg.com "Welcome")

Contributions, issues, and feature requests are welcome!
