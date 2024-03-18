import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const circleImgUrl = 'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/408182054_876575570630424_6219883965122856211_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oZF8jsFeQA4AX_U_oL_&_nc_ht=scontent.ftun14-1.fna&oh=00_AfDRZngZcJI0xzEBlWOwB7cZbR7SQwwPUl2faRFT45276Q&oe=65ED1DE8';

const AppBar = ({ title }) => {
  return (
    <View style={styles.appBar}>
       <Image style={styles.iconContainer} resizeMode='contain' source={require('../../../assets/icons/white_arrow_back.png')}/>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{ uri: circleImgUrl }}
        style={styles.circleImage}
      />
    </View>
  );
}

export default AppBar;
