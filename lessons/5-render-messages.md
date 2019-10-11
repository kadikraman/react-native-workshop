# Render messages

Next, let's put some messages on the screen! We'll want to render the messages as a list, so we'll need to start by importing the [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) component from the react-native package on the top of the file:
```diff
import React from 'react';
- import { StyleSheet, Text, View } from 'react-native';
+ import { StyleSheet, Text, View, FlatList } from 'react-native';
```

Then, we can replace the placeholder text in our function return with a FlatList:
```diff
  render() {
    return (
      <View style={styles.container}>
-        <Text>Open up App.js to start working on your app!</Text>
+        <FlatList
+          data={messages}
+          renderItem={renderItem}
+          inverted
+        />
      </View>
    );
  }
```

We pass FlatList attributes, or [Props](https://facebook.github.io/react-native/docs/props.html). Props is how React components can pass data to each other. In this case, the props are:

1. `data={messages}` - FlatList expects an array of "data" to render, so we give it a list of messages we fetched earlier.
2. `renderItem={renderItem}` - FlatList also needs a callback it can call for each item in the `data` array to render the corresponding row. Here we pass it a method `renderItem`.
3. `inverted` - This prop will render the list in reverse order, so that latest messages are always anchored to the bottom of the list.

The `rendeItem` function is a plain old function that takes the item data and renders it. This could be done inline, but it is generally good practice to break the `renderItem` function out of the JSX, because React Native can then do some performance optimisations behind the scenes. This won't be possible with an anonymous function.

Place the renderItem method immediately *above* the App function:

```js
  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  }
```

If you are using a Channel that someone has posted any messages in it, you should now see them on the screen! They'll look a bit ugly, and a bit squashed, though. That's because we haven't yet added any styles. Let's do that next.
