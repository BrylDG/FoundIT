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

//Ari e butang ang Messages data
export default function App() {
  const items = [
    { id: '1', image: 'https://via.placeholder.com/150', name: 'Bryl Darel Gorgonio', item: 'Wallet', message: 'Hello!'},
  ];

  //Listing Container, mao ni ang ma create if mag add ka ug message
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.infoSide}>
        <View style={styles.infoTop}>
          <Text style={styles.itemLabel}>{item.name}</Text>
          <View style={styles.divider} /> 
          <Text style={styles.itemLabel}>{item.item}</Text>
        </View>
        <Text style={styles.locationLabel}>{item.message}</Text>
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

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topBar}>
              <Text style={styles.title}>Messages</Text>
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
  itemsGrid: {
    paddingHorizontal: 10,
  },
  infoTop: {
    flexDirection: 'row',
    marginBottom:5,
  },
  itemContainer: {
    width:'97%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight:  10,
  },
  itemLabel: {
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
    divider: {
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    height: 16,
    marginHorizontal: 5,
  },
});
