This application is used in conjunction with its [backend](https://github.com/mtthwleung/Weather-App-Backend).

The frontend is built with React.js. To run,
1) `npm install` to install dependencies
2) `npm start` or `npm run start`

This app is best viewed on a mobile screen. 
- open the page on Chrome, and right click anywhere to 'Inspect'.
- on the top navbar, to the left of the 'Elements' tab, click the icon that toggles device toolbar.
- select a device emulator to view the application (best on mobile and not tablets)

View on iPhone SE:
![image](https://github.com/mtthwleung/Weather-App-Frontend/assets/133343244/7cc38649-2bbc-4a60-a1e5-452d942b67f2)

Usage:
To check the weather, simply type the city name into the searchbar and press enter.
- currently there is only data for 3 cities available (London, Tokyo, Hong Kong).
- exact match needed (all lowercase is supported, but otherwise case sensitive as well)
- only 3 weather conditions are available (sunny, cloudy, rainy)
To toggle between celsius and fahrenheit, click on °C/°F.

To login, click on 'login' in the navbar. If you don't have an account, you can access the signup page from the login page.
If you attempt to sign up using an email that has already been used to create an account, you will receive an error message.
Likewise, if you attempt to login with an unregistered email, or input the wrong password, you will receive the corresponding error message.

Missing features:
- form validation on signup page (eg password must be certain length, contain certain characters etc...)
- browser fails to send cookie/session id to the server
- ideally if you click on one of the forecasts, that day's forecast will be displayed in the main display area.
