import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Footer,  { footerIcons } from './Footer'
import WeeklyStatus from './WeeklyStatus'

export const weekstatus = [1, 2, 3, 0, 0, 0, 0]

const Home = () => {

 
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.header}>My Goal</Text>
        <View style={styles.box}>
          <Text style={styles.p}>매일 아침 9시에 책상 앞에서 노트북 사진 찍기</Text>
        </View>
        <Text style={styles.header}>Weekly Status</Text>
        {/* <WeeklyStatus status = {weekstatus}></WeeklyStatus> */}
      </View>
      <Footer icons = {footerIcons}></Footer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4FE',
    height: '100%',
    padding: 28,
  },
  box: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    marginTop: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginTop: 40,
  },
  p: {
    fontSize: 14,
    fontFamily: 'Arial',
    
  }
})

export default Home
