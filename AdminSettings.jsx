import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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


      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
              <Text style={styles.title}>Found Items</Text>
        </View>

        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Bryl Darel Gorgonio</Text>
        </View>

        <View style={styles.menuGrid}>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <Image
              source={require('Arhives_alt.png')}
              style={styles.icon}
            />
            <Text style={styles.menuButtonText}>Transaction History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <Image
              source={require('Chart.png')}
              style={styles.icon}
            />
            <Text style={styles.menuButtonText}>Statistics and Graphs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <Image
              source={require('FoundIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.menuButtonText}>Found Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <Image
              source={require('lost-package.png')}
              style={styles.icon}
            />
            <Text style={styles.menuButtonText}>Lost Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <Image
              source={require('MessageIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.menuButtonText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <Image
              source={require('Folder.png')}
              style={styles.icon}
            />
            <Text style={styles.menuButtonText}>My Listings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Privacy</Text>
          <Text style={styles.footerText}>·</Text>
          <Text style={styles.footerText}>Terms</Text>
          <Text style={styles.footerText}>·</Text>
          <Text style={styles.footerText}>More</Text>
          <Text style={styles.footerText}>·</Text>
          <Text style={styles.footerText}>FoundIT © 2024</Text>
        </View>
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
  headerIcons: {
    flexDirection: 'row',
    paddingTop: 60,
  },
  burgerIcon: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  icon: {
    width:30,
    height:30,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  topBar: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  profileImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    rowGap: 10,
    columnGap: 10,
    marginBottom: 300,
  },
  menuButtonContainer: {
    width: '48%',
    backgroundColor: '#cce0ff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#073763',
    width: '100%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 5,
  },
});
