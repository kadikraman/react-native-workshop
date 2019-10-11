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

```js
  const [messages, setMessages] = React.useState([]);
```

`useState` is one of the "hooks" available in React. It is a way to store and update variables within a React component. The `useState` hook is called with the initial value of the variable (in this case, an empty array `[]`), and returns an array of two values:
1. the current value of the variable, in our case `messages`
2. an update function to update the value, in our case `setMessages`

```js
React.useEffect(() => {
  subscribe(CHANNEL, messages => {
    setMessages(messages);
  });
  }, [])
```

`useEffect` is another hook available in React. If you've used React classes before, you'll know this is equivalent to `componentDidMount`. The `useEffect` hook is run once when the component is first mounted. It takes two arguments
1. a function to execute
2. an array of variables that can trigger another execution of the function

In our function, we subscribe to messages from the specified CHANNEL, and whenever any fresh messages become available, we update our state value for messages with the new array.

We pass in an empty array, because we only want to run this function once. It's important to be really quite careful with `useEffect`. For example if we were to pass `[messages]` in the array instead of nothing, then the function would get executed every time the vale for messages changes, causing an infinite loop.
