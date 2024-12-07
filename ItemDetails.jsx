import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function App() {
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
      <ScrollView>
        <View style={styles.imageSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300' }} // Replace with your image URI
            style={styles.mainImage}
          />
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.itemTitle}>Wallet</Text>
          <Text style={styles.itemLocation}>Highway Lahug, Cebu City</Text>

          <View style={styles.divider} />

          <Text style={styles.ownerName}>Padica, Louis Manuel</Text>
          <Text style={styles.itemDetails}>Cards{"\n"}Bills{"\n"}Driver's License{"\n"}ID's</Text>

          <View style={styles.divider} />

          <Text style={styles.subSectionTitle}>Seeker Information</Text>
          <View style={styles.seekerInfo}>
            <Image
              source={{ uri: 'https://via.placeholder.com/80' }} // Replace with profile image URI
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.seekerName}>Bryl Darel Gorgonio</Text>
              <Text style={styles.contactInfo}>Contact No: 09123456789</Text>
              <Text style={styles.additionalInfo}>Student at University of Cebu{"\n"}Tisa, Cebu City</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.messageTitle}>Send seeker a message</Text>
          <TextInput
            style={styles.messageBox}
            multiline
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Privacy · Terms · More · FoundIT © 2024</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f3ff',
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
  imageSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  mainImage: {
    width: 350,
    height: 200,
    resizeMode: 'cover',
  },
  detailsSection: {
    paddingHorizontal: 30,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2a2a2a',
    marginBottom: 5,
  },
  itemLocation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 15,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  seekerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  seekerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  additionalInfo: {
    fontSize: 14,
    color: '#555',
  },
  messageBox: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
  },
  messageTitle: {
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#555',
  },
});
