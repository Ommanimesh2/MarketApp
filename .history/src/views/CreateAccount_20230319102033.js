import{
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { useContext,useState } from "react";
import { Context } from "../context/Context";
const CreateAccount = ({ navigation }) => {
  const initialState = {
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(initialState);
  const {user, setUser} = useContext(Context);
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (data.password === data.confirmPassword) {
      setConfirmPass(true);
      registerUser();
      navigation.navigate("MainScreens");
    } else {
      setConfirmPass(false);
    }
  };
  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("https://ommanimesh.pythonanywhere.com/login/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const userData = await response.json();
    setUser(userData);
    
    console.log(userData);
  }
  return (
    <View>
      <Text style={styles.signheading}>Create your account</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Phone Number"
        placeholderTextColor="rgba(0, 0, 0, 0.7)"
        placeholderFontSize="20"
        autoCapitalize="none"
        name="phone"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="rgba(0, 0, 0, 0.7)"
        onChangeText={handleChange}
        value={data.password}
        placeholderFontSize="20"
        autoCapitalize="none"
        name="password"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Confirm Password"
        placeholderTextColor="rgba(0, 0, 0, 0.7)"
        placeholderFontSize="20"
        autoCapitalize="none"
        onChangeText={handleChange}
        value={data.confirmPassword}
        name="confirm"

      />
      <Text>{confirmPass ? "signup" : "Passwords doesnt match"}</Text>
      <View style={styles.signin}>
        <Pressable
          style={styles.signbutton}
          onPress={() => {
          
          }}
        >
          <Text style={styles.text}>Sign Up</Text>
        </Pressable>
      </View>
      <Text style={styles.last}>
        Already have an account?
        <Text style={styles.textlogin}>Log in</Text>
      </Text>
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
});

