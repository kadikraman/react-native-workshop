# Sending messages

Now that we can collect user input, we'll want to send it to our server. Let's declare a `sendMessage` method on our component, for example below the `useEffect` hook we used when subscribing to messages:

```js
const sendMessage = React.useCallback(async () => {
  // send message to our channel, with sender name.
  // the `await` keyword means this function execution
  // waits until the message is sent
  await send({
    channel: CHANNEL,
    sender: NAME,
    message: text,
  });

  // clear the input
  setText('');
}, []);
```

This function looks slightly different that our other methods because of the `async` keyword that precedes the arrow function. In the middle of the function, you see another keyword `await`. These are part of the ES7 `async/await` feature, which makes it easier to deal with asynchronous code where you would normally have used Promises. For the purposes of this tutorial, going deeper into async/await is not important, but they are very useful and worth [learning more about](https://ponyfoo.com/articles/understanding-javascript-async-await).

We then need a Send button to call our `sendMessage` method. Let's start (you know the drill by now) by importing one more primitive from react-native, this time `TouchableOpacity`:

```diff
- import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';
+ import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
```

[TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html), and its cousins TouchableHighlight, TouchableWithoutFeedback and TouchableNativeFeedback are the primitive components we can use to compose buttons and other elements with simple press interactions.

Let's put that inside our footer `View`, on the next line immediately after the `<TextInput />` element:

```js
  <TouchableOpacity onPress={sendMessage}>
    <Text style={styles.send}>Send</Text>
  </TouchableOpacity>
```

And of course, we'll style the button by adding a "send" style key to the StyleSheet:
```js
  send: {
    alignSelf: 'center',
    color: 'teal',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
```
