import { 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },  

  iconsContainer: {
    flexDirection: "row",

  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  logoArrow: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 25,
    resizeMode: "contain",
  },
  unreadBadge: {
    position: "absolute",
    left: 37,
    bottom: 15,
    alignItems: 'center',
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    // backgroundColor: "#ff3250",
    backgroundColor: "red",
    borderRadius: 9999,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 5,
    paddingRight: 5,

    color: "white",
    fontWeight: "600",
    
  }
})

function Header({navigation}){
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require("../../assets/instagram/logo-white.png")}
        />
        <Image 
          style={styles.logoArrow}
          source={require("../../assets/instagram/arrow-down-white.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image 
            style={styles.icon}
            source={require("../../assets/instagram/square-plus-white.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={styles.icon}
            source={require("../../assets/instagram/heart-white.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>
              {
                parseInt(Math.random() * 20) + 1
              }
            </Text>
          </View>
          <Image 
            style={styles.icon}
            source={require("../../assets/instagram/dm-white.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header;