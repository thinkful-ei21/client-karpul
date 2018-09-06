# karpul

Karpul is a carpool app that allows users to find and create carpools.   
The live app can be found [here](http://karpul-client.surge.sh/) and the live server can be found [here](https://karpul-server.herokuapp.com/) on heroku.

### libraries and tools

- Node.js, Express.js,
- React.js, Redux.js,
- bcrypt, passport,
- mongoose, MongoDB
- mapbox, cloudinary
- Heroku for the server
- surge for hosting the client

### Features

This app allows you to find nearby carpools based on the time of day.
You can also join someone else's carpool by using a fully rendered world map.
Users are also capable of loading up a profile picture.

### Map

In order to see the map we need the mapbox api. In order for the map to display with the familiar google maps style we also need to link to an api stylesheet.
In order for the maps to work we need to use a react-mapbox-wrapper.
This allows us to manipulate the state (dimension and features) of the map with react, and later with redux.  
In order for us to gain coordinates for locations on the map from addresses that are given to us we need an api that performs geocoding. There are several apis that perform this task. We used here.com for this.

