import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from "react-native"; // Thêm Alert vào danh sách import
import { styles } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserLogin } from "../../../context/index.context";

const Profile = ({navigation}) => {
    const { userLogin } = useUserLogin();

    const handleLogout = () => {
        Alert.alert(
            "Xác nhận",
            "Bạn có muốn đăng xuất không?",
            [
                {
                    text: "Không",
                    style: "cancel"
                },
                { 
                    text: "Có", 
                    onPress: () => {
                        navigation.navigate('SignIn')
                        // Thực hiện hành động đăng xuất ở đây
                    }
                }
            ]
        );
    };

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
                <Text style={styles.profileName}>{userLogin.name}</Text>
                <Text style={styles.profileDetail}>Email: {userLogin.email}</Text>
            </View>
            <View style={styles.ListProfile}>
                <Text style={{ marginTop: 15, fontSize: 20, borderBottomWidth: 0.3, color: '#ABABAB' }}>Chung</Text>
                <View>
                    <Text style={{ marginTop: 15, fontSize: 20, }}>Chỉnh sửa thông tin</Text>
                    <Text style={{ marginTop: 15, fontSize: 20, }}>Cẩm nang cây trồng</Text>
                    <Text style={{ marginTop: 15, fontSize: 20, }}>Lịch sử giao dịch</Text>
                    <Text style={{ marginTop: 15, fontSize: 20, }}>Q & A</Text>
                </View>
            </View>
            <View style={styles.ListProfile}>
                <Text style={{ marginTop: 15, fontSize: 20, borderBottomWidth: 0.3, color: '#ABABAB' }}>Bảo mật và Điều khoản</Text>
                <View>
                    <Text style={{ marginTop: 15, fontSize: 20, }}>Điều khoản và Điều kiện</Text>
                    <Text style={{ marginTop: 15, fontSize: 20, }}>Chính sách quyền riêng tư</Text>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={{ marginTop: 15, fontSize: 20, color: 'red' }}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
