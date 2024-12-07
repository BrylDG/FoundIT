import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
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
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.input}
          />
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.orSeparator}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/facebook.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            Don’t have an Account?{' '}
            <Text style={styles.signUpText}>Sign Up!</Text>
          </Text>
          <View style={styles.privacyRow}>
            <Text style={styles.privacyText}>Privacy</Text>
            <Text style={styles.privacyText}>·</Text>
            <Text style={styles.privacyText}>Terms</Text>
            <Text style={styles.privacyText}>·</Text>
            <Text style={styles.privacyText}>More</Text>
            <Text style={styles.privacyText}>·</Text>
            <Text style={styles.privacyText}>FoundIT © 2024</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#007bff',
    height: '100%',
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
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 40,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#aaa',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '100%',
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#333',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  signUpText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  privacyRow: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  privacyText: {
    fontSize: 12,
    color: '#aaa',
    marginHorizontal: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
