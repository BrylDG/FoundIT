import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Switch,
  ScrollView,
} from 'react-native';

export default function App() {
  const [isOnlyMe, setIsOnlyMe] = useState(false);

  const toggleSwitch = () => setIsOnlyMe(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('Logo.png')} 
          style={styles.image}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.burgerIcon}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Add Listing</Text>

        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Bryl Darel Gorgonio</Text>
            <Text style={styles.profileSubText}>Add Found Item</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.photoUploader}>
          <Text style={styles.photoText}>+</Text>
          <Text style={styles.photoSubText}>Add Photos</Text>
        </TouchableOpacity>

        <Text style={styles.titleLabel}>Item Details</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.label}>Location Found</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.label}>Item Description</Text>
          <TextInput 
            style={[styles.input, styles.textArea]}
            multiline 
          />

          <Text style={styles.label}>Category</Text>
          <TextInput style={styles.input}/>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Only Me</Text>
            <Switch
              trackColor={{ false: "#ccc", true: "#007bff" }}
              thumbColor={isOnlyMe ? "#fff" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isOnlyMe}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>List Item</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#007bff',
  },
  image: {
    width: 100,
    height: 100,
  },
  headerIcons: {
    flexDirection: 'row',
    paddingTop: 60,
  },
  burgerIcon: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  titleLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  profileSubText: {
    fontSize: 14,
    color: '#666',
  },
  photoUploader: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  photoText: {
    fontSize: 32,
    color: '#666',
  },
  photoSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 80,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
