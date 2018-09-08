# karpul

Karpul is a carpool app that allows users to find and create carpools.   
The live app can be found [here](http://karpul-client.surge.sh/) and the live server can be found [here](https://karpul-server.herokuapp.com/) on heroku.

Here is a link to the server repo https://github.com/thinkful-ei21/Karpul_server

### Libraries and Tools

- Node.js, Express.js,
- React.js, Redux.js,
- bcrypt.js, passport.js, JWT Auth
- mongoose, MongoDB
- Heroku for the server
- Surge for hosting the client

### APIs
- Mapbox https://www.mapbox.com/ - mapping coordinates and location pin rendering
- Here https://www.here.com/en - takes location address and converts to latitude and longitude
- Algolia https://community.algolia.com/places/ - implements auto complete for address input
- Cloudinary https://cloudinary.com/ - image uploading and hosting

### Features

- Users can choose to either host or join carpools
- Carpools can be customized by time and days of the week
- Users can search for nearby carpools by destination
- Application uses custom request/accept system for adding carpool members
- Users can upload custom profile pictures
- Detailed information provided about carpools and carpool members

### Map

In order to see the map we need the mapbox api. In order for the map to display with the familiar google maps style we also need to link to an api stylesheet.
In order for the maps to work we need to use a react-mapbox-wrapper.
This allows us to manipulate the state (dimension and features) of the map with react, and later with redux.  
In order for us to gain coordinates for locations on the map from addresses that are given to us we need an api that performs geocoding. There are several apis that perform this task. We used here.com for this.

### Lessons Learned 

-Communication is key!
-Third party APIs vary in complexity and implementation.
-The right API to use isn’t always obvious.
-Using branches is important.

### Wireframes
![wireframe-01](https://user-images.githubusercontent.com/8137381/45229734-8eb8d700-b27b-11e8-9178-dce6bce10598.png)
![wireframe-02](https://user-images.githubusercontent.com/8137381/45229747-94aeb800-b27b-11e8-8d0b-116cb2cdaee1.png)![wireframe-03](https://user-images.githubusercontent.com/8137381/45229874-fe2ec680-b27b-11e8-818e-fd8575cc1334.png)

### Screenshots

#### Mobile
![01_login-phonex](https://user-images.githubusercontent.com/8137381/45250264-3f5ac100-b2e4-11e8-8305-d54ae285e792.png)   ![02_profile-iphonex](https://user-images.githubusercontent.com/8137381/45250265-3f5ac100-b2e4-11e8-8382-63919cc0a757.png)


![03_findkarpools_iphonex](https://user-images.githubusercontent.com/8137381/45250266-3f5ac100-b2e4-11e8-873f-e1964af725d7.png)   ![04_fidkarpools_2-iphonex](https://user-images.githubusercontent.com/8137381/45250267-3f5ac100-b2e4-11e8-8c4e-778323e0c243.png)


![05_mycarpools_2-iphonex](https://user-images.githubusercontent.com/8137381/45250268-3f5ac100-b2e4-11e8-9ca6-ccbb79a95d5d.png)   ![06_mycarpools-iphonex](https://user-images.githubusercontent.com/8137381/45250269-3f5ac100-b2e4-11e8-84b5-ff1bb4016dbb.png)

#### Desktop
![07_login-desktop](https://user-images.githubusercontent.com/8137381/45250270-3ff35780-b2e4-11e8-818b-cde5d79a7cd5.png)

![08_findcarpools-desktop](https://user-images.githubusercontent.com/8137381/45250271-3ff35780-b2e4-11e8-97ef-cc20c5dbe771.png)

![09_findcarpools-desktop](https://user-images.githubusercontent.com/8137381/45250272-3ff35780-b2e4-11e8-8aac-5bb30460b1d1.png)

![10_findcarpools-desktop](https://user-images.githubusercontent.com/8137381/45250274-3ff35780-b2e4-11e8-9f55-3da8eeebd120.png)

![14_mycarpools-desktop](https://user-images.githubusercontent.com/8137381/45250275-3ff35780-b2e4-11e8-80ac-f0a42f322a6c.png)

![15_mycarpools-desktop](https://user-images.githubusercontent.com/8137381/45250276-3ff35780-b2e4-11e8-85b8-bc22b47ef318.png)

