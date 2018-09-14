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
![01_karpul-client surge sh_ iphone x](https://user-images.githubusercontent.com/8137381/45571110-0bb6f400-b81a-11e8-965d-e91330fd904d.png)     ![02_karpul-client surge sh_ iphone x](https://user-images.githubusercontent.com/8137381/45571112-0bb6f400-b81a-11e8-843e-294381be9469.png)

![03_karpul-client surge sh_ iphone x](https://user-images.githubusercontent.com/8137381/45571113-0c4f8a80-b81a-11e8-9b4e-25a68d28ed76.png)     ![04_karpul-client surge sh_ iphone x](https://user-images.githubusercontent.com/8137381/45571114-0c4f8a80-b81a-11e8-9106-ed27e7cc2adc.png)

#### Desktop
![05_karpul-client surge sh_ laptop with mdpi screen](https://user-images.githubusercontent.com/8137381/45571115-0c4f8a80-b81a-11e8-893f-cc8078cfe109.png)

![06_karpul-client surge sh_ laptop with mdpi screen](https://user-images.githubusercontent.com/8137381/45571116-0ce82100-b81a-11e8-9b7e-3f2982b28aac.png)

![07_karpul-client surge sh_ laptop with mdpi screen](https://user-images.githubusercontent.com/8137381/45571117-0ce82100-b81a-11e8-8504-481133df5cc2.png)

![08_karpul-client surge sh_ laptop with mdpi screen](https://user-images.githubusercontent.com/8137381/45571118-0ce82100-b81a-11e8-988b-156a99816b87.png)

![09_karpul-client surge sh_ laptop with mdpi screen](https://user-images.githubusercontent.com/8137381/45571119-0ce82100-b81a-11e8-91f7-b90b44e8433c.png)

![10_karpul-client surge sh_ laptop with mdpi screen](https://user-images.githubusercontent.com/8137381/45571120-0ce82100-b81a-11e8-9f6c-7f56d253139e.png)


