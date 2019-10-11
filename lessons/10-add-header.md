# Add a header

We now have a fully functioning chat app! In fact, you could go ahead and publish it to the Expo store right now.

But it doesn't look very nice yet. Let's add a header component and a bit of colour.

We could just keep editing `App.js`, but the file is already getting quite big, and a header feels like a good, isolated component to split out to it's own file.

Let's start by creating a new file, `Header.js` in our app's root directory. Copy the following component into that file.
```js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => (
  <View style={styles.header}>
    <Text style={styles.title}>
      #{props.title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
```

Those are the styles I used, but feel free to play around it with it and make it look like you!

Because we `export` the Header component, it means we can `import` it in our main file. On top of the `App.js`, after the other import statements, add a relative import like so:

```js
import Header from './Header';
```

Then you can just drop in the Header component above the `SafeAreaView` and pass the channel name as the `title` prop. You should now see a Header on the screen!
```diff
    return (
+     <>
+       <Header title={CHANNEL} />
        <SafeAreaView style={styles.container}>
      // rest of code
+     <>
```
Note about `<></>` - in React (and subsequently React Native), every component must be wrapped in a single JSX element. If we want to return one or more adjacent element, we can wrap them in Fragments. `<>` is simply a shorthand for `<Fragment>`.

Speaking of [Props](https://facebook.github.io/react-native/docs/props.html), we briefly touched on them earlier, but this is the first time we are using them in our own components.

In our `App` component we have been using `useState`. You can think of state as the private data that a component itself owns and manages. Contrast this with `props`, which are passed as attributes, can be accessed by the component, but a **component can never modify its own props**. Think of them like function arguments.

```js
  <Text style={styles.title}>
    #{props.title}
  </Text>
```

_(Notice the `#{...}` expression? This is in fact not a React or JSX feature, it's just a hashtag followed by a regular curly brace `{}` expression and the hashtag is displayed on the screen 😁)_
