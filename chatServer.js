import * as firebase from 'firebase';

// absolutely nothing to see here...
const config = {
  apiKey: "AIzaSyD1OmB6s60dpPyzcs3J01vyE4BQggwsmcs",
  authDomain: "reactnativeworkshop-ae8e2.firebaseapp.com",
  databaseURL: "https://reactnativeworkshop-ae8e2.firebaseio.com",
  projectId: "reactnativeworkshop-ae8e2",
  storageBucket: "reactnativeworkshop-ae8e2.appspot.com",
  messagingSenderId: "960342453305",
  appId: "1:960342453305:web:13534bfef900478c3b71e8"
};

firebase.initializeApp(config);

// Firebase does dumb things with timeouts,
// which causes warnings on Android. Ignore.
console.ignoredYellowBox = ['Setting a timer for a long period of time'];

const normalizeChannelName = channel => (channel || 'default').toLowerCase();
/**
 * Send a message
 */
export const send = ({
  channel,
  sender = 'Anonymous',
  message = null,
  avatar = null
}) => {
  if (message === '') {
    return Promise.resolve();
  }
  if (message === null) {
    throw new Error('A message body is required');
  }

  const timestamp = new Date().toISOString();
  return firebase.database()
    .ref(normalizeChannelName(channel))
    .push({ sender, message, avatar, timestamp });
};

/**
 * Subscribe to message updates
 */

let currentQuery;
let currentCallback;

export const subscribe = (channel, callback, maxMessages = 100) => {
  if (!channel) {
    throw new Error('Channel name required!');
  }

  if (!callback) {
    throw new Error('A subscription callback required!');
  }

  // only allow a single subscription at once,
  // unsubscribe from previous rooms
  if (currentQuery && currentCallback) {
    currentQuery.off('value', currentCallback);
    currentQuery = null;
    currentCallback = null;
  }

  currentQuery = firebase.database()
    .ref(normalizeChannelName(channel))
    .limitToLast(maxMessages);
  currentCallback = callback;

  currentQuery.on('value', snapshot => {
    const data = snapshot.val();
    const messages = [];
    for (const key in data) {
      const { sender, message, avatar, timestamp } = data[key];
      messages.unshift({
        key,
        sender,
        message,
        timestamp: timestamp ? new Date(timestamp) : new Date(2000, 0, 1),
        avatar: avatar || 'http://i.imgur.com/h5mhz8A.png'
      });
    }

    callback(messages);
  });
};
