# Connect to the chat server

First, let's all connect to a shared chat server. Our chat server is hosted in Firebase, so let's go ahead and install Firebase npm module in our project:

```
npm install firebase
```

Stop the `npm start` command and run the app again (this is needed for the Firebase package).

Now, let's create a new file, call it `chatServer.js` in the root directory of your project, and copy the contents of [`chatServer.js`](../chatServer.js) over exactly. This is will handle sending and reading messages from Firebase. You can explore the code in your own time, but please do not change any of it during this workshop.

Then, in **App.js** add the following lines after the react-native imports:

```js
import { send, subscribe } from './chatServer';

const NAME = 'Your Name';
const CHANNEL = 'hackconf';
```

Replace "Your name" with you own name. The channel can be any alphanumeric string - feel free to set up your own secret channel or use the default "hackconf" to participate with everyone else. You'll now have access to two functions, `send` and `subscribe` that we'll use to send and receive messages.
