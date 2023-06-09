import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllJobs from '../views/AllJobs';
import Ionicons from '@expo/vector-icons/Ionicons'
import AllRentMachines from '../views/AllRentMachines';
import AllStalls from '../views/AllStalls';
import Login from '../views/Login';
import Home from '../views/Home';
import NewJob from '../views/NewJob';
const Tab=createBottomTabNavigator()

const Routes = () => {
  return (
  <Tab.Navigator>
    <Tab.Screen 
    name="Home" 
    component={AllJobs} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../../assets/Home.png')                  
            }/>
       ), 
       tabBarLabel: 'Jobs' ,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       headerShown:false            
      }}
    />
    <Tab.Screen 
    name="Machines" 
    component={AllRentMachines} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../../assets/Machines.png')                  
            }/>
       ), 
       
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarLabel: 'Rent'        ,
       headerShown:false     
      }}
    />
    <Tab.Screen 
    name="Add" 
    component={Home} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../../assets/Add.png')                  
            }/>
       ), 
       tabBarLabel: 'Add',
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       headerShown:false             
      }}
    />
    <Tab.Screen 
    name="Stalls" 
    component={AllStalls} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../../assets/Stall.png')                  
            }/>
       ), 
       tabBarLabel: 'Stalls'   ,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       headerShown:false          
      }}
    />
    <Tab.Screen 
    name="Labour" 
    component={NewJob} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../../assets/Labour.png')                  
            }/>
       ), 
       tabBarLabel: 'Labours'  ,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray', 
       headerShown:false          
      }}
    />

  </Tab.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})