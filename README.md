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

### Screenshots

#### Mobile
![karpul_08-signin-iphone x](https://user-images.githubusercontent.com/8137381/45224840-d9345680-b26f-11e8-930f-4556e2e2723c.png)![karpul_09-profile-iphone x](https://user-images.githubusercontent.com/8137381/45224842-d9345680-b26f-11e8-955c-c2e10489b45f.png)

![karpul_10-findcarpool-iphone x](https://user-images.githubusercontent.com/8137381/45224844-d9cced00-b26f-11e8-8fd7-c05207b7880c.png)![karpul_11-mycarpools-iphone x](https://user-images.githubusercontent.com/8137381/45224846-da658380-b26f-11e8-8ab8-8face07562b5.png)

#### Desktop


![karpul_01-signin-desktop](https://user-images.githubusercontent.com/8137381/45224935-1a2c6b00-b270-11e8-9b6e-9cde1f67a20c.png)

![karpul_02-profile-desktop](https://user-images.githubusercontent.com/8137381/45224960-2ca6a480-b270-11e8-9b65-4cccbe878fce.png)

![karpul_03-findcarpool-locationsearch-desktop](https://user-images.githubusercontent.com/8137381/45224834-d76a9300-b26f-11e8-87ff-92ee4f1f4351.png)

![karpul_04-findcarpool-desktop](https://user-images.githubusercontent.com/8137381/45224835-d8032980-b26f-11e8-8520-268decc0464f.png)

![karpul_05-findcarpool-map-desktop](https://user-images.githubusercontent.com/8137381/45224836-d89bc000-b26f-11e8-9be3-aaade2b81d23.png)

![karpul_06-findCarpool-map-desktop_2](https://user-images.githubusercontent.com/8137381/45225010-51028100-b270-11e8-9d21-185f2b4172e6.png)

![karpul_07-myCarpool-desktop](https://user-images.githubusercontent.com/8137381/45225024-58298f00-b270-11e8-8ad4-3d2c8a079147.png)


