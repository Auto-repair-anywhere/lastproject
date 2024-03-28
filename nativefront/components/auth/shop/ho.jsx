import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Ho = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        height:70,
        borderRadius:40,
        marginTop:20,
        marginBottom:10
      }}>
        <Text style={{
          fontSize:30,
          color:'#00BFFF',
          textAlign:'center',
          fontWeight:'bold'

        }}>LOOKING FOR ? </Text>
      </View>


      <View style={styles.firstSection}>
       <TouchableOpacity>
       <View style={styles.containerItem}>
         <View style={{
          borderRadius:30
         }}>
         <Image
            source={require('../../../assets/request.png')}
            style={styles.containerImage}
          />
         </View>
          <Text style={styles.containerText}>Request service</Text>
        </View>
       </TouchableOpacity>

       <TouchableOpacity>
        <View style={styles.containerItem}>
          <Image
            source={require('../../../assets/rassi.png')}
            style={styles.containerImage}
          />
          <Text style={styles.containerText}>Road Map Assistance</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>

        <View style={styles.containerItem}>
          <Image
            source={require('../../../assets/helpc.png')}
            style={styles.containerImage}
          />
          <Text style={styles.containerText}>Community Assistance</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.containerItem}>
          <Image
            source={require('../../../assets/helpp.png')}
            style={styles.containerImage}
          />
          <Text style={styles.containerText}>Professional Assistance</Text>
        </View>
        </TouchableOpacity>
      </View>
      

      {/* About Us section */}
      <View style={styles.section}>
        <View style={{
            backgroundColor:'rgb(58,159,253)' ,
            borderRadius:30,
            justifyContent:'center'
        }}>
        <Text style={styles.heading}>About Us</Text>
        </View>
        <Text  style={{
            fontSize:20, padding:5
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
          mauris in risus consectetur, ac hendrerit justo varius. Integer
          molestie purus nec metus tincidunt, vel venenatis metus faucibus.
          Aliquam erat volutpat. Vestibulum ac diam dui. Cras bibendum arcu
          nec lacinia pulvinar.
        </Text>
        <Text style={styles.subheading}>Our Rules:</Text>
        <Text style={{fontSize:20}}>- Rule 1</Text>
        <Text style={{fontSize:20}}>- Rule 2</Text>
        <Text style={{fontSize:20}}>- Rule 3</Text>
      </View>

      {/* Team section */}
      <View style={styles.section}>
      <View style={{
        backgroundColor:'rgb(58,159,253)',
        borderRadius:30,
        padding:5
      }}>
      <Text style={styles.heading}>Our Team</Text>
      </View>
        <View style={styles.teamMember}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQGu7Qg8Rn6QIA/profile-displayphoto-shrink_800_800/0/1692195369726?e=1717027200&v=beta&t=2VRYZ7etYQ_EeAXHACm81mTaQ0Xmz_66cKdkmcTHHDg' }}
            style={styles.teamMemberImage}
          />
          <Text style={styles.teamMemberName}>Achref Farhat </Text>
          <Text style={styles.teamMemberRole}>ProductOwner</Text>
        </View>
        <View style={styles.teamMember}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/C4E03AQFOMvLXKzMHzw/profile-displayphoto-shrink_800_800/0/1642020710004?e=1717027200&v=beta&t=47o4xl8jqgBKkzi2CHTyjWSliRoQmeHmYgd4QCZg4CY' }}
            style={styles.teamMemberImage}
          />
          <Text style={styles.teamMemberName}>Hechmi Ben Sassi</Text>
          <Text style={styles.teamMemberRole}>Admin</Text>
        </View>

        <View style={styles.teamMember}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/C4E03AQFOMvLXKzMHzw/profile-displayphoto-shrink_800_800/0/1642020710004?e=1717027200&v=beta&t=47o4xl8jqgBKkzi2CHTyjWSliRoQmeHmYgd4QCZg4CY' }}
            style={styles.teamMemberImage}
          />
          <Text style={styles.teamMemberName}>Khaled Nacef</Text>
          <Text style={styles.teamMemberRole}>Admin</Text>
        </View>

        <View style={styles.teamMember}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/C4E03AQFOMvLXKzMHzw/profile-displayphoto-shrink_800_800/0/1642020710004?e=1717027200&v=beta&t=47o4xl8jqgBKkzi2CHTyjWSliRoQmeHmYgd4QCZg4CY' }}
            style={styles.teamMemberImage}
          />
          <Text style={styles.teamMemberName}>Nour Jerbi</Text>
          <Text style={styles.teamMemberRole}>Admin</Text>
        </View>

        <View style={styles.teamMember}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/C4E03AQFOMvLXKzMHzw/profile-displayphoto-shrink_800_800/0/1642020710004?e=1717027200&v=beta&t=47o4xl8jqgBKkzi2CHTyjWSliRoQmeHmYgd4QCZg4CY' }}
            style={styles.teamMemberImage}
          />
          <Text style={styles.teamMemberName}>Mahdi Abichouou</Text>
          <Text style={styles.teamMemberRole}>Admin</Text>
        </View>


      </View>

      {/* Contact Us section */}
      <View style={styles.section}>
       <View style={{
        backgroundColor:'rgb(58,159,253)',
        justifyContent:'center',
        borderRadius:30,
        marginBottom:20
       }}>
       <Text style={styles.heading}>Contact Us</Text>
       </View>
        <Text>Email: contact@example.com</Text>
        <Text>Phone: +1234567890</Text>
        <Text>Address: 123 Main Street, City, Country</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  firstSection: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'system',
  },
  subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  teamMember: {
    alignItems: 'center',
    marginBottom: 20,
  },
  teamMemberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  teamMemberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  teamMemberRole: {
    fontSize: 14,
    color: '#888',
  },
  containerItem: {
    justifyContent:'space-between',
    flexDirection:'row',
    margin: 10,
    border: 2,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor:'rgb(58,159,253)' ,
    padding:3.5
  },
  containerImage: {
    height: 100,
    width: 150,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius:10
  },
  containerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
    marginTop:50,
    marginLeft:7
  },
});

export default Ho;
