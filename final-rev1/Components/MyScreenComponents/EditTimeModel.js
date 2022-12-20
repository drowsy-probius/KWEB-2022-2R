import { View, Text, Modal, StyleSheet, BackHandler } from 'react-native'
import React from 'react'

const EditTimeModel = ({visible}) => {

    return (
    <View>
        <Modal
            visible={visible}
            transparent={true}
        >
            <View style={styles.container}>
                <Text>
                    EDIT TIME!
                </Text>
            </View>
        </Modal>
    </View>
  )
}

export default EditTimeModel

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: 100,
        backgroundColor: '#F2F0FE',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        
    }   
})