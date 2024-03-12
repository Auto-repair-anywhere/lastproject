import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Sidebar = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const menuItems = [
    { title: 'Profile', icon: 'person' },
    { title: 'Request on Hold', icon: 'pause' },
    { title: 'Workshops', icon: 'hammer' },
    { title: 'Requests History', icon: 'history' },
    { title: 'Notification', icon: 'notifications' },
    { title: 'Offers', icon: 'gift' },
    { title: 'Support', icon: 'help' },
    { title: 'Privacy Policy', icon: 'lock-closed' },
    { title: 'Share', icon: 'share-social' },
    { title: 'Logout', icon: 'log-out' }
  ];

  const handleMenuItemPress = (menuItem) => {
    // Toggle sidebar visibility
    setSidebarVisible(!sidebarVisible);
    // Implement navigation logic here
    console.log(`Pressed ${menuItem}`); // Wrap the string within a <Text> component
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setSidebarVisible(!sidebarVisible)}> {/* Toggle sidebar visibility */}
        <View style={styles.buttonLines}>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={sidebarVisible}
        onRequestClose={() => setSidebarVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.sidebar}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleMenuItemPress(item.title)}>
                <Ionicons name={item.icon} size={24} color="black" style={styles.icon} />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 100,
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonLines: {
    width: 30,
    height: 20,
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sidebar: {
    backgroundColor: '#fff',
    minHeight: '50%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default Sidebar;
