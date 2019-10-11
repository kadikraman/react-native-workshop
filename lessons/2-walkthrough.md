# Code walkthrough

Okay, let's get started by familiarising ourselves with the anatomy of a React module.

Open the directory in your favorite IDE or text editor: [Atom](https://atom.io/), [VS Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), Vim, Emacs, WebStorm... anything will do.

Open the **App.js** file. This is where we will do most of our coding today. It should look something like this.

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```


Looking at the file, you can see three main sections.

#### Imports

First we import `React` so we can create our own React components, and three named components from `react-native`, which we can use to compose our UI:

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
```

The `import` keyword (and its mirror image `export` as seen on the next line) are part of the [ES6 Modules](http://www.reactnativeexpress.com/imports_and_exports) feature that allow us to split our application across multiple files and modules. React Native uses all the latest and greatest JavaScript features, even some that are not yet generally available in web browsers.

#### Component

Next we declare our `App` component and export it, so it can be accessed by React Native. This component can contain any JavaScript code in the body, that returns some [JSX](http://www.reactnativeexpress.com/jsx). Every React component returns some JSX, which is what you'll see on the screen.

```js
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
```

JSX is an extension to JavaScript that adds an ability to render React elements in a HTML-like syntax. In this case we use two types of components, `<View>` and `<Text>`. If you were to replace `View` with `div` and `Text` with `span`, this would look almost regular HTML (and exactly the same as React on the web):
```html
<div style={styles.container}>
  <span>Open up App.js to start working on your app!</span>
</div>
```

Because React Native exists for creating native apps, web primitives like div and span aren't available to us. Instead, on line 2 we imported some of the React Native primitives: View, Text, etc. There are counterparts for most important web primitives, as well as hundreds of others, either included in React Native, included in Expo, or installable via NPM. We will look at these later.

#### Styles

The last section in the file are the styles. If JSX reminded you of HTML, the React Native style system should remind you of CSS.
```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

The same in CSS would look something like this:
```CSS
.container {
  display: flex;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
}
```

In fact, React Native implements a subset of CSS in JavaScript, including the [Flexbox](http://www.reactnativeexpress.com/flexbox) layout system we'll use to arrange our app components on the screen. The `display: flex` line from the CSS translation is not necessary in React Native, because all components "flex" by default.

Now, finally, let's code!
