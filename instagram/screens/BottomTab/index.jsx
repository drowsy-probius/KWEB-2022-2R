import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

import React, { useState } from "react";
//import { Divider } from "react-native-element";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/shopping-mall.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/shopping-mall.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/bubbles/50/000000/conference-call.png",
    inactive: "https://img.icons8.com/bubbles/50/000000/conference-call.png",
  },
];

export const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilepic : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilepic(activeTab)
            : null,
        ]}
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

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "7%",
    zIndex: 999,
    height: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilepic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});
