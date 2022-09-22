import { 
  View, 
  StyleSheet,
  Text,
} from "react-native"

const ListHeader = () => {
  return (
    <View>
      <Text style={styles.header}> Todo Lists </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "300",
    textAlign: "center",
    color: "#181818",
    width: "100%",
  }
});

export default ListHeader;