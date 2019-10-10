# Get messages

Next, we'll need to subscribe to our channel when our app starts. Add the following lines immediately below the component declaration:

```js
export default function App() {
  // new lines below...
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    subscribe(CHANNEL, messages => {
      setMessages(messages);
    });
    }, [])
  //...end new lines
}
```

It's just a few of lines of code, but there is a lot to unpack here.

// TODO: explain
