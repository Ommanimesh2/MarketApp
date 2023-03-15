import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import MapDrawer from '../components/MapDrawer'
const Login = ({navigation}) => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmpass: "",
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const LoginUser= async (e)=>{
    const response=await fetch('http://localhost:4000/auth/login',{
    method: 'POST',    
    headers:{
            'content-type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    const userData=await response.json();
  }
  return (
    <ScreenWrapper>

    <View >
      {/* <Button title='thi' onPress={()=>navigation.navigate("MainScreens")}></Button> */}
      <Text>Login</Text>
    </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})