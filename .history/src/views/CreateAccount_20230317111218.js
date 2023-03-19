import {
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


const CreateAccount = () => {
  return (
    <ScreenWrapper>
      <Text>CreateAccount</Text>
    </ScreenWrapper>
  )
}

export default CreateAccount

const styles = StyleSheet.create({})