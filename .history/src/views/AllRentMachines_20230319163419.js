import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import ScreenWrapper from '../components/ScreenWrapper'
import MachineCard from '../components/MachineCard'
import { ScrollView } from 'react-native'
const AllRentMachines = () => {
  const [rentdata, setRentdata] = useState([])
  useEffect(() => {
    axios.get("https://ommanimesh.pythonanywhere.com/api/rentdata").then((response) => {
        console.log(response)
        setRentdata(response.data);
      });
},[])


  return (
    <ScreenWrapper>
 {
   alljobdata.map((e)=>{
     return(
       <>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.app}>

            <MachineCard  
                name={e.Name}
                MachineDetails={e.MachineDetails}
                Location={e.location}
                Price={e.Price}
                Contact={e.Contact}
            />
     
       
       
               </ScrollView>
  
             </>
    ) } )}
    </ScreenWrapper>
  )
}

export default AllRentMachines

const styles = StyleSheet.create({
  app: {
    width: 400,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",

    // my visual styles; not important for grid

    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff"
  }
})