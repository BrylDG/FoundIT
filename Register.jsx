import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('Logo.png')}
          style={styles.image}
        />
        <View style={styles.form}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.labelText}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <Text style={styles.labelText}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
          />
          <Text style={styles.labelText}>Phone Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
          />
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
          />
          <Text style={styles.labelText}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Privacy</Text>
            <Text style={styles.footerText}>·</Text>
            <Text style={styles.footerText}>Terms</Text>
            <Text style={styles.footerText}>·</Text>
            <Text style={styles.footerText}>More</Text>
            <Text style={styles.footerText}>·</Text>
            <Text style={styles.footerText}>FoundIT © 2024</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#007bff',
  },
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginBottom: 100,
  },
  form: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    paddingLeft: 50,
    paddingRight: 50,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 20,
  },
  labelText: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 40,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 50,
    marginHorizontal: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
