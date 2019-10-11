# Components

If you squint a little, you'll see that this component's code looks a lot like our App component! If you haven't used React, it may surprise you that an entire app, and a small header component within it are equivalent concepts.

That's the cool thing about React: it allows you to compose apps from smaller pieces, and even larger apps from smaller mini-apps, if you so wish! In a "real" app, you would probably split the chat UI into smaller, semantically named components. Instead of Texts, Views, TextInput, TouchableOpacities, StyleSheets etc, the main `App` component might looks like something like this!

```js
<Screen>
  <Header title={CHANNEL} />
  <MessageList data={this.state.messages} />
  <Composer value={this.state.typing} onSend={this.sendMessage} />
</Screen>
```

This makes our app code really easy to read and modify!
