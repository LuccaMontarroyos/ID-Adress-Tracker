## IP Address Tracker
- [Application executing](#application-executing)
- [Application funcionalitys](#application-functionalitys)
- [How to use](#how-to-use)
- [Technologies used](#application-executing)

## Application executing
<img src="projeto-ip-tracker.gif">

## Application functionalitys
The application consists in a page with an input for the user to type an Ip address and then it will render on the screen a card with the informations of location, timezone and isp, with a background of the exact location of that Ip provided by the user.

## How to use 
At first you need to have NPM and Node.js installed in your system and an account on the IP Geolocation website (https://geo.ipify.org/statistics)
- Clone the repository `git clone`
- Install all dependencies `npm i` or `npm install`
- Put your link provided by the website of IP Geolocation on the Fetch Component
- Open the project and put into the terminal `npm run dev`
- Click on the link provided by the localhost

## Techonologies used
HTML & CSS to create a structure and a style and React.js to the funcionality of the application, and also imported libs to help on the project, styled-components, axios to fetch the data from the API, hooks of useState, useEffect from React and useQuery from react-query and to render the Map it was used react-leaflet

<img src="icons8-html.svg"> <img src="icons8-css.svg"> <img src="icons8-js.svg"> <img src="icons8-react-a-javascript-library-for-building-user-interfaces-48.png">
