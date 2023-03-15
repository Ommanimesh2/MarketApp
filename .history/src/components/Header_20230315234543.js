import React from 'react'

const Header = () => {
  return (
    <ScreenWrapper>
          <View style={styles.header}>
        <Text style={styles.headertext}> Add New Job </Text>
      </View>
        </ScreenWrapper>
  )
}

header:{
    backgroundColor:'#00AC00',
  width:'100%',
  height:48,
  marginLeft:-24,
  width:400,
  
  },
  headertext:{
    color: '#FFFFFF',
  fontSize:20,
  margin:8,
  
  },
export default Header
