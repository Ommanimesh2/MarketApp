import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'


const CreateAccount = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmpass: "",
  };
  
  const {user,setUser}=useContext(dataContext);
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  async function registerUser(e){
    e.preventDefault();
    const response=await fetch('http://localhost:4000/auth/register',{
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
      <Text>CreateAccount</Text>
    </ScreenWrapper>
  )
}

export default CreateAccount

const styles = StyleSheet.create({})