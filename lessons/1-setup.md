# Setting up development environment

Before we can start coding, we'll need to get your development environment set up!

## Prerequisites:

- you have a laptop with [Node.js](https://nodejs.org/en/) installed
- you have a smartphone with the Expo app installed ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/gb/app/expo-client/id982107779))
- your laptop and phone are both connected to the same WiFi network

We'll build the app from scratch. That means you don't need to clone this repository. Instead install the [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/) from NPM and generate a new project:
```sh
npm install -g expo-cli
expo init MyChatApp
```
The cli will ask you to choose between some preconfigured templates. For this tutorial, choose a blank template.

This will create a new React Native project in a directory `./MyChatApp`.

In order to run the Expo app on your phone, you'll need to create an Expo account and log in. For this, simply go to https://expo.io/signup and sign up for an account.

Then, log in on the cli:
```sh
expo login
```

Now let's go back to the project we generated, and start it with `npm start`:
```sh
cd MyChatApp
npm start
```

This will open Expo Developer Tools in your browser. You are now all set to run the app on your phone. Grab your iOS or Android phone and install **Expo**
([iOS App Store](https://itunes.apple.com/app/apple-store/id982107779?mt=8) | [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)) if you haven't already, and log in with your newly created Expo account. It will appear in the Projects tab, under "Recently in development".

**Note**: For your phone to find the local server, **both devices need to be on the same local network.** This means either connected to the same WiFi, or the laptop's internet tethered via the phone's internet sharing functionality.

After dismissing the first use greeting from Expo, you should now see your app on your phone.

(If you have iOS or Android simulators installed, you can run `npm run ios` or `npm run android` to start the app on the simulator instead of using a real device.)
