# Checkpoint

At this point, you should see a styled list of messages. There is no one right way to achieve this, but this is how my App.js looks like:

```js
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { send, subscribe } from './chatServer';

const CHANNEL = 'hackconf';
const NAME = 'Kadi';

const renderItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );
}

export default function App() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    subscribe(CHANNEL, messages => {
      setMessages(messages);
    });
    }, [])

  return (
    <View style={styles.container}>
       <FlatList
         data={messages}
         renderItem={renderItem}
         inverted
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
});
```
