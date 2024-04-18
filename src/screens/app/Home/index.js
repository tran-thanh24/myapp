import React from "react";
import { Image, ImageBackground, ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from './styles'; // Importing styles from a separate file
import { SafeAreaView } from "react-native-safe-area-context";
import ItemProductHome_Component from "../../../components/ItemProductHome_Component";
import { products } from "../../../data/data";

const Home = ({ navigation }) => {

    const renderItem = (type) => {

        const listRender = products.filter(item => item.type == type)
        // console.log(listRender);

        return listRender.map((item, i) => {
            const { price, name, plantType, image } = item;
            // console.log(price, name, plantType, image);
            if (i >= 4) return
            if (item.type == type) {
                return <ItemProductHome_Component title={item.name} image={item.image[0]} key={i} navigation={navigation} data={item}/>
            }
        })
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    {/* Text and Cart Image */}
                    <View style={styles.textAndCartContainer}>
                        <Text style={styles.textLine}>Planta - tỏa sáng</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate('cart')}}>
                        <Image
                            style={styles.imageCart}
                            source={require('../../../assets/image/shopping-cart.png')}
                            
                        />
                        </TouchableOpacity>
                    </View>
                    {/* Remaining Content */}
                    <View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLine}>không gian nhà bạn</Text>
                        </View>
                        <View style={styles.imageBackgroundContainer}>
                            <ImageBackground
                                source={require('../../../assets/image/background.png')}
                                style={styles.imageBackground}
                            />
                            <TouchableOpacity
                                style={styles.showText}
                            >
                                <Text style={styles.textImage}>Xem hàng mới về...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* list*/}
                <View style={styles.containerList}>
                    <View style={styles.containerList}>
                        {/* First row */}
                        <View >
                            <Text style={styles.text}>Cây Trồng</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around' }}>
                                {renderItem('Cây Trồng')}
                            </View>
                        </View>
                        <Text style={styles.textnew}>Xem thêm Cây Trồng</Text>
                        {/* List2 */}
                        <View >
                            <Text style={styles.text}>Chậu Cây Trồng</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around' }}>
                                {renderItem('Chậu Cây')}
                            </View>
                        </View>
                        <Text style={styles.textnew}>Xem thêm Chậu Cây</Text>
                        {/* List3 */}
                        <View>
                            <View style={styles.containerList}>
                                {/* First row */}
                                <Text style={styles.text}>Chậu Cây Trồng</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around' }}>
                                {renderItem('Dụng cụ')}
                            </View>
                            </View>
                        </View>
                        <Text style={styles.textnew}>Xem thêm Phụ Kiện</Text>
                        <View>
                            <Text style={styles.text}>Combo Chăm Sóc (mới)</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;
