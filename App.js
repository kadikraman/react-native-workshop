import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { send, subscribe } from './chatServer';
import Header from './Header';

const CHANNEL = 'hackconf';
const NAME = 'Kadi';
const AVATAR = 'https://pbs.twimg.com/profile_images/1180146316267143173/-2ST_BYP_400x400.jpg';

const renderItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.rowText}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    subscribe(CHANNEL, messages => {
      setMessages(messages);
    });
    }, [])

  const sendMessage = React.useCallback(async () => {
    await send({
      channel: CHANNEL,
      sender: NAME,
      message: text,
    });

    setText('');
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={CHANNEL} />
      <FlatList
        data={messages}
        renderItem={renderItem}
        inverted
      />
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.footer}>
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Type something nice'
          />
        </View>
        </KeyboardAvoidingView>
      <TouchableOpacity onPress={sendMessage}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    flexDirection: 'row',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
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
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowText: {
    flex: 1,
  },
});
