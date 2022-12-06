import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';

import { View, Text } from '../components/Themed';
import event from "../assets/data/event.json"
import { AntDesign } from '@expo/vector-icons';
import CustomButton from './AuthScreens/components/CustomButton';
import users from "../assets/data/users.json"


export default function ModalScreen({route}) {
  const id = route?.params?.id;
  console.log("Rendering event ", id);
  
  const onJoin = () => {};


  const displayedUsers = users.slice(0,5)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color={"white"} /> {" "}
        {new Date(event.date).toDateString()}
      </Text>

  
      <View style={styles.footer}>
        <View style={styles.users}>
          {displayedUsers.map((user, index) => (
            <Image key={user.id} source={{uri: user.avatarUrl}} style={[styles.userAvatar,{transform: [{translateX: -15 * index }] }, 
          ]}/>
            ))}
            <View style={[styles.userAvatar, {transform: [{translateX: -15 * displayedUsers.length }] } ]}>
              <Text>+{users.length - displayedUsers.length}</Text>
            </View>
        </View>

        <CustomButton text="Join the event" onPress={onJoin} />
      </View>
   
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: "auto",
  },
  userAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    margin: 2,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro",
  },
  users: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
