import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
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

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topBar}>
              <TouchableOpacity>
                <Image
                    source={require('ArrowIcon.png')}
                    style={styles.arrowIcon}
                />
              </TouchableOpacity>
              <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder='Search'
                />
                <TouchableOpacity>
                  <Image
                    source={require('Searchbar.png')}
                    style={styles.searchIcon}
                  />
                </TouchableOpacity>
              </View>
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
    width: 30,
    height: 30,
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
  topBar: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '10',
  },
  searchBar: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    marginLeft: '10',
    width: '85%',
  },
});
