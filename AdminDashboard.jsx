import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

//Ari e butang ang listing data
export default function App() {
  const items = [
    { id: '1', image: 'https://via.placeholder.com/150', label: 'WALLET', location: 'Lahug, Cebu City'},
    { id: '2', image: 'https://via.placeholder.com/150', label: 'IPHONE', location: 'Lahug, Cebu City'},
    { id: '3', image: 'https://via.placeholder.com/150', label: 'ID', location: 'Lahug, Cebu City'},
    { id: '4', image: 'https://via.placeholder.com/150', label: 'WALLET', location: 'Lahug, Cebu City'},
    { id: '5', image: 'https://via.placeholder.com/150', label: 'KEYS', location: 'Lahug, Cebu City'},
    { id: '6', image: 'https://via.placeholder.com/150', label: 'PLATE NO.', location: 'Lahug, Cebu City'},
    { id: '6', image: 'https://via.placeholder.com/150', label: 'PLATE NO.', location: 'Lahug, Cebu City'},
    { id: '6', image: 'https://via.placeholder.com/150', label: 'PLATE NO.', location: 'Lahug, Cebu City'},
    { id: '6', image: 'https://via.placeholder.com/150', label: 'PLATE NO.', location: 'Lahug, Cebu City'},
  ];

  //Listing Container, mao ni ang ma create if mag add ka ug listing
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemLabel}>{item.label}</Text>
      <Text style={styles.locationLabel}>{item.location}</Text>
    </View>
  );

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

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topBar}>
              <Text style={styles.title}>Found Items</Text>
              <TouchableOpacity>
                <Image
                  source={require('Searchbar.png')}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+ Add Listing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>☰ Categories</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.locationBar}>
              <Image
                source={require('Pin_alt.png')}
                style={styles.locationIcon}
              />
              <Text style={styles.location}>Cebu City, Cebu</Text>
            </View>

            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={styles.itemsGrid}
            />
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
  searchIcon: {
    width: 35,
    height: 35,
  },
  topBar: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 50,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '45%',
  },
  button2: {
    backgroundColor: '#073763',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  location: {
    color: '#666',
    fontSize: 16,
    paddingLeft: 10,
  },
  itemsGrid: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
  },
  itemImage: {
    width: 170,
    height: 170,
    borderRadius: 10,
    marginBottom: 5,
  },
  itemLabel: {
    paddingLeft: 3,
    fontSize: 14,
    fontWeight: 500,
    color: '#333',
  },
  locationLabel: {
    paddingLeft: 3,
    fontSize: 12,
    fontWeight: 300,
    color: '#333',
  },
});
