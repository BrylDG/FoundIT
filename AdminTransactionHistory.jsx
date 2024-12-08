import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";

const App = () => {
  const [sortOption, setSortOption] = useState("");
  const [statusOption, setStatusOption] = useState("");

  const items = [
    {
      id: "1",
      image: "https://via.placeholder.com/50",
      title: "Key",
      description: "Found Yamaha Motorcycle Key\nMambaling Area",
      author: "Bryl Darel Gorgonio",
      type: "Found",
      status: "Pending",
    },
    {
      id: "2",
      image: "https://via.placeholder.com/50",
      title: "Sample Item",
      description: "Sample Description\nsample location",
      author: "Bryl Darel Gorgonio",
      type: "Lost",
      status: "Completed",
    },
    {
      id: "3",
      image: "https://via.placeholder.com/50",
      title: "Sample Item",
      description: "Sample Description\nsample location",
      author: "Bryl Darel Gorgonio",
      type: "Lost",
      status: "In Progress",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemAuthor}>{item.author}</Text>
      </View>
      <View style={styles.actionIcons}>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="check-circle" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
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
                  { label: "Date", value: "date" },
                  { label: "Name", value: "name" },
                ]}
                placeholder={{ label: 'Sort By', value: null }}
                style={pickerStyles}
              />
            </View>
            <View style={styles.dropdownContainer}>
              <RNPickerSelect
                onValueChange={(value) => setStatus(value)}
                items={[
                  { label: "Pending", value: "pending" },
                  { label: "Completed", value: "completed" },
                  { label: "In Progress", value: "in-progress" },
                ]}
                placeholder={{ label: 'Status', value: null }}
                style={pickerStyles}
              />
            </View>
          </View>

        <View style={styles.tableHeader}>
          <Text style={styles.itemHeader}>ITEM</Text>
          <Text style={styles.typeHeader}>TYPE</Text>
          <Text style={styles.statusHeader}>STATUS</Text>
        </View>

        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.itemsList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f3ff",
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
  filterDiv: {
    backgroundColor: '#fff',
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
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  itemHeader: {
    width: '70%',
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  typeHeader: {
    width: '10%',
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 6,
  },
  statusHeader: {
    width: '20%',
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemsList: {
    paddingHorizontal: 15,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    elevation: 2,
    marginHorizontal: 6,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 12,
    color: "#666",
  },
  itemAuthor: {
    fontSize: 12,
    color: "#007bff",
  },
  actionIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 50,
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
