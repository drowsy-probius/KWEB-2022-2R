import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";


export const AddNewPost = ({ icons }) => {
  
  return (
    <View stype= {styles.container}>
        <Header/>
        {/* formincpostUploader */}
        <FormikPostUploader></FormikPostUploader>
    </View>
  );
};

const Header = () => (
    <View style= {styles.headerContainer}>
        <TouchableOpacity>
            <Image
                source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png"}}
                style = {{ width: 38, height: 30 }}
            />
        </TouchableOpacity>
        
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text> 
    </View>


)
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText : {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25
  }
});
