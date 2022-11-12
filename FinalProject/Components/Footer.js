import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";


export const footerIcons = [
  {
    name: "camera",
    active: require("../assets/icons/camera.png"),
    inactive: require("../assets/icons/camera.png"),
  },
  {
    name: "home",
    active: require("../assets/icons/home-activated.png"),
    inactive: require("../assets/icons/home-deactivated.png"),
  },
  {
    name: "mypage",
    active: require("../assets/icons/mypage-activated.png"),
    inactive: require("../assets/icons/mypage-deactivated.png"),
  },
];

const Footer = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("home");

  const Icon = ({ icon }) => (
    <TouchableOpacity>
      <Image
        source={
          activeTab == icon.name
            ? icon.active
            : icon.inactive
        }
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#6763CE",
    width: "100%",
    height: "10%",
    zIndex: 999,
    position: "absolute",
    bottom: 0,
    justifyContent: 'center'
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
