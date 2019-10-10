## Avatars

It might nice to have avatars! In fact, the backend already support avatars, we just haven't been using them.

First, find yourself a profile photo that's hosted somewhere online (for example your Twitter or Facebook profile image), copy the image URL and edit that into the hard-coded configuration section above the App component:
```diff
const CHANNEL = 'hackconf';
const NAME = 'Your Name';
+const AVATAR = 'https://pbs.twimg.com/profile_images/1180146316267143173/-2ST_BYP_400x400.jpg';
```

Then, in the `sendMessage` function add your avatar to the message payload:
```diff
await send({
  channel: CHANNEL,
  sender: NAME,
+  avatar: AVATAR,
  message,
});
```

That takes care of sending your avatar, but we still need to render the avatars next to each message. For that we can use the Image component:

```diff
- import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
+ import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
```

Remember that the `renderItem` function is responsible for rendering each message. We'll need to add the `Image` element, and add a `View` wrapper around the two Text elements so that we can lay them out nicely:
```diff
const renderItem = ({ item }) => {
  return (
    <View style={styles.row}>
+      <Image style={styles.avatar} source={{ uri: item.avatar }} />
+      <View style={styles.rowText}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
+      </View>
    </View>
  );
}
```

We used the `styles.avatar` and `styles.rowText` styles, but we haven't declared them yet. Here's how I did it, but feel free to play with the styles yourself:
```js
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowText: {
    flex: 1,
  },
```

Also, update the `row` style to include `flexDirection: 'row'`  to ensure the avatar gets displayed next to the message, not on a separate row.

Unlike on the web, images loaded from the internet do not get automatically sized. They need to be either absolutely sized with width and height, as above, or rendered to fill a container with a flex style. This is because we won't know what the size of the image is before it is downloaded, and we don't want the layout to "jank" when the image arrives and changes the layout around it.

Note that we are using the `borderRadius` prop to create rounded corners for the image. For fully round image, as above, use a `borderRadius` that is half the width and height or the image. For more gently rounded "Twitter-style" corners, try a lower radius.
