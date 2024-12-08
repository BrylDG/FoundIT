import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const App = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "other",
      text: "I think that item you found is mine. Kindly reply. Thank you!",
      image: "https://via.placeholder.com/50",
    },
    {
      id: "2",
      sender: "self",
      text: "Hi! Can you describe it to confirm? Thanks!",
    },
  ]);

  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (messageText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), sender: "self", text: messageText },
      ]);
      setMessageText("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "self" ? styles.selfMessage : styles.otherMessage,
      ]}
    >
      {item.sender === "other" && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Mark Jess Enfermo</Text>
          <Text style={styles.headerSubtitle}>LOST ITEM NAME</Text>
        </View>
        <TouchableOpacity>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="add" size={24} color="#007bff" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={messageText}
          onChangeText={setMessageText}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
          <Icon name="send" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f3ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTextContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 14,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  selfMessage: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: 0,
    marginLeft: 40,
  },
  otherMessage: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 0,
    marginRight: 40,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 14,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  iconButton: {
    padding: 5,
  },
});

export default App;
