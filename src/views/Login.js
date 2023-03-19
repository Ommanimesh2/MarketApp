import{
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
  Al
} from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import ScreenWrapper from "../components/ScreenWrapper";
import { useContext,useState } from "react";
import { Context } from "../context/Context";
import { ActivityIndicator } from "react-native";
const CreateAccount = ({ navigation }) => {
  const [username,setUserName]=useState(null)
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const {user, setUser} = useContext(Context);
  const {loading,setLoading}=useContext(Context)

  useEffect(()=>{
   setLoading(false)
  },[])
  const login = (username, email, password) => {
  setLoading(true)
    axios
      .post(`https://ommanimesh.pythonanywhere.com/login/`, {
        username,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUser(userInfo.data)
        setLoading(false)
        navigation.navigate("MainScreens");
    
      })
      .catch(e => {
        console.log(`register error ${e}`);
     
      });
  };

  return (
    !loading ?
    <View>
      <Text style={styles.signheading}>Login</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="username"
        placeholderTextColor="rgba(0, 0, 0, 0.7)"
        placeholderFontSize="20"
        autoCapitalize="none"
        onChangeText={text => setUserName(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="email"
        placeholderTextColor="rgba(0, 0, 0, 0.7)"
        value={email}
        placeholderFontSize="20"
        onChangeText={text => setEmail(text)}

        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="password"
        placeholderTextColor="rgba(0, 0, 0, 0.7)"
        placeholderFontSize="20"
        autoCapitalize="none"
        onChangeText={text => setPassword(text)}

        value={password}
      />
      <View style={styles.signin}>
        <Pressable
          style={styles.signbutton}
          onPress={() => {
           login(username,email,password)
          }}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
      <Text style={styles.last}>
        dont have an account?
        <Text style={styles.textlogin } onPress={()=>navigation.navigate("MainScreens")}>Create One</Text>
      </Text>
    </View> :  <View style={[styles.that, styles.horizontal]}>
              <ActivityIndicator size="large" color="#00ff00" />
              </View>
    

  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  signheading: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 167,
    marginBottom: 40,
  },
  input: {
    margin: 15,
    // marginTop:40,
    height: 66,
    borderColor: "#7a42f4",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#D8DADC",
    borderRadius: 10,
    padding: 15,
  },

  signbutton: {
    height: 56,
    margin: 15,
    backgroundColor: "#00AC00",
    borderRadius: 10,
    borderStyle: "solid",
    //   borderWidth:2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  last: {
    marginTop: "4%",
    textAlign: "center",
  },
  that:{
  flex: 1,
  justifyContent: 'center',
},
horizontal: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 10,
},
});
