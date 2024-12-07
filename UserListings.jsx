import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

const App = () => {
  const [sortBy, setSortBy] = useState('');
  const [status, setStatus] = useState('');

  const listings = [
    {
      id: '1',
      title: 'Key',
      description: 'Found Yamaha Motorcycle Key\nMambaling Area',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '2',
      title: 'iPhone',
      description: 'iPhone 15 found in a taxi.\nColon Area',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '3',
      title: 'Key',
      description: 'Keys found in the comfort room, men’s.\nUC 4th Floor',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '4',
      title: 'ID',
      description: 'Driver’s License found in the lobby.\nUC Ground Floor',
      image: 'https://via.placeholder.com/80',
    },
  ];

  const renderListing = ({ item }) => (
    <View style={styles.listingCard}>
      <Image source={{ uri: item.image }} style={styles.listingImage} />
      <View style={styles.detailDiv}>
        <View style={styles.listingContent}>
          <Text style={styles.listingTitle}>{item.title}</Text>
          <Text style={styles.listingDescription}>{item.description}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButtonStatus}>
            <Text style={styles.actionButtonText}>Mark as returned</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonEdit}>
            <Text style={styles.actionButtonText}>Edit Listing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonDelete}>
            <Text style={styles.actionButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
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

      <ScrollView>
        <View style={styles.topBar}>
          <Text style={styles.title}>My Listings</Text>
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

        //FilterDiv
        <View style={styles.filterDiv}>
          <View style={styles.filters}>
            <Text style={styles.filterText}>Filters</Text>
            <TouchableOpacity>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSortBy(value)}
              items={[
                { label: 'Date', value: 'date' },
                { label: 'Category', value: 'category' },
                { label: 'Status', value: 'status' },
              ]}
              placeholder={{ label: 'Sort By', value: null }}
              style={pickerStyles}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              onValueChange={(value) => setStatus(value)}
              items={[
                { label: 'Active', value: 'active' },
                { label: 'Returned', value: 'returned' },
                { label: 'Lost', value: 'lost' },
              ]}
              placeholder={{ label: 'Status', value: null }}
              style={pickerStyles}
            />
          </View>
        </View>


        <FlatList
          data={listings}
          renderItem={renderListing}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  filterDiv: {
    backgroundColor: '#E7F3FF',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 15,
  },
  dropdownContainer: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#007bff',
    marginBottom: 5,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  listingImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  listingContent: {
    flex: 1,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listingDescription: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 5,
    marginTop: 5,
  },
  actionButtonStatus: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  actionButtonEdit: {
    backgroundColor: '#555',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  actionButtonDelete: {
    backgroundColor: '#ff0000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

const pickerStyles = {
  inputIOS: {
    fontSize: 12,
    borderRadius: 10,
    color: '#333',
    backgroundColor: '#007bff',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 12,
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#007bff',
    paddingRight: 30,
  },
};

export default App;
