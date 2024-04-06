import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => { }}>
                    <Image source={require('../../../assets/image/back.png')} style={styles.leftIcon} />
                </TouchableOpacity>
                <Text style={styles.textLine}>Profile</Text>
                <View style={styles.rightContainer} />
            </View>
            <View style={styles.profileInfoContainer}>
                    <View style={styles.avatarContainer}>
                        <Image source={require('../../../assets/image/image.png')} style={styles.profilePic} />
                    </View>
                    <Text style={styles.profileName}>Trần Thành</Text>
                    <Text style={styles.profileDetail}>Email: thanhtcpd09575@fpt.edu.vn</Text>
                </View>
        </SafeAreaView>
    );
};

export default Profile;