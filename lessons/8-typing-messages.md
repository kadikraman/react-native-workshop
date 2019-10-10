# Typing messages

Next, we'll allow the user to send messages. We already have access to the `send` method of the chat server, we'll just need a text input where the user can type, and a "Send" button the user can press to send the typed message.

Start by importing the [TextInput](https://facebook.github.io/react-native/docs/textinput.html) primitive from `react-native`:
```diff
- import { StyleSheet, Text, View, FlatList } from 'react-native';
+ import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
```

Before we render the TextInput, we'll need a place to keep track of the text the user has typed. As you might remember from earlier, we can use the `useState` hook for this. Let's add another `useState` hook to hold the typed message:
```js
const [text, setText] = React.useState("");
```

Now we can add our TextInput to our UI. Add the following lines immediately after the `<FlatList ... />` component, but before the closing container `</View>`
```js
<View style={styles.footer}>
  <TextInput
    value={text}
    onChangeText={setText}
    style={styles.input}
    underlineColorAndroid="transparent"
    placeholder="Type something nice"
  />
</View>
```

// TODO - explain

We don't yet see much on the screen. That is because the text input needs styling and dimensions. Add the missing `footer` and `input` style declarations into the StyleSheet at the bottom of the file:
```js
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
```

And now we should have a visible input field at the bottom of the screen! Before we go ahead and add the Send button, there is one more thing we need to do. Notice how the on-screen keyboard hides the text input, so you don't know what you are typing? Annoying, but don't worry, it's easy to fix with the help of [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview.html)

Import it from react-native:
```diff
- import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
+ import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
```

And wrap it around our footer View, giving it a `behavior` prop value of "padding":
```diff
+ <KeyboardAvoidingView behavior="padding">
  <View style={styles.footer}>
    <TextInput
      value={text}
      onChangeText={setText}
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder="Type something nice"
    />
  </View>
+ </KeyboardAvoidingView>
```

Finally, if you are using one of the newer iPhones or larger Android phones, you'll notice that the bottom of the input is actually obscurred by the bottom of the screen. To protect against this, you can use [SafeAreaView](https://facebook.github.io/react-native/docs/safeareaview)

Import it from react-native:
```diff
- import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
+ import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';
```

```diff
-  <View style={styles.container}>
+  <SafeAreaView style={styles.container}>
    <FlatList
      data={messages}
      renderItem={renderItem}
      inverted
    />
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.footer}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Type something nice"
        />
      </View>
      </KeyboardAvoidingView>
-  </View>
+  </SafeAreaView>
```

And that should do it!
