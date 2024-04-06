import React from "react";
import { Image, ImageBackground, ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from './styles'; // Importing styles from a separate file
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    {/* Text and Cart Image */}
                    <View style={styles.textAndCartContainer}>
                        <Text style={styles.textLine}>Planta - tỏa sáng</Text>
                        <Image
                            style={styles.imageCart}
                            source={require('../../../assets/image/shopping-cart.png')}
                        />
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
                    <Text style={styles.text}>Cây Trồng</Text>
                    <View style={styles.containerList}>
                        {/* First row */}
                        <View style={styles.rowContainer}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/1.png')}
                                />
                                <Text style={styles.itemText}>$10 - Pink Anthurium</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/2.png')}
                                />
                                <Text style={styles.itemText}>$15 - Black Love Anthurium</Text>
                            </View>
                        </View>
                        {/* Second row */}
                        <View style={styles.rowContainer}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/3.png')}
                                />
                                <Text style={styles.itemText}>$20 - Grey Star Calarthea</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/4.png')}
                                />
                                <Text style={styles.itemText}>$25 - Banana Plant</Text>
                            </View>
                        </View>
                        {/* third row */}
                        <View style={styles.rowContainer}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/5.png')}
                                />
                                <Text style={styles.itemText}>$20 - Song of India</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/6.png')}
                                />
                                <Text style={styles.itemText}>$25 - Sago Palm</Text>
                            </View>
                        </View>
                        {/* forth row */}
                        <View style={styles.rowContainer}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/7.png')}
                                />
                                <Text style={styles.itemText}>$20 - Devil's Ivy</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    source={require('../../../assets/image/20.png')}
                                />
                                <Text style={styles.itemText}>$25 - Spider Plant</Text>
                            </View>
                            
                        </View>
                        <Text style ={styles.textnew}>Xem thêm Cây Trồng</Text>
                        {/* List2 */}
                        <View>
                            <Text style={styles.text}>Chậu Cây Trồng</Text>
                            <View style={styles.containerList}>
                                {/* First row */}
                                <View style={styles.rowContainer}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/8.png')}
                                        />
                                        <Text style={styles.itemText}>$10 - Planta Trắng</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/9.png')}
                                        />
                                        <Text style={styles.itemText}>$15 - Planta Lemon Balm</Text>
                                    </View>
                                </View>
                                {/* Second row */}
                                <View style={styles.rowContainer}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/10.png')}
                                        />
                                        <Text style={styles.itemText}>$20 - Planta Rosewood</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/11.png')}
                                        />
                                        <Text style={styles.itemText}>$25 - Planta Dove Grey</Text>
                                    </View>
                                </View>
                                {/* third row */}
                                <View style={styles.rowContainer}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/12.png')}
                                        />
                                        <Text style={styles.itemText}>$20 - Planta Đen</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/13.png')}
                                        />
                                        <Text style={styles.itemText}>$25 - Planta Matte Black</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style ={styles.textnew}>Xem thêm Chậu Cây</Text>
                        {/* List3 */}
                        <View>
                            <Text style={styles.text}>Phụ Kiện Chăm Sóc</Text>
                            <View style={styles.containerList}>
                                {/* First row */}
                                <View style={styles.rowContainer}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/14.png')}
                                        />
                                        <Text style={styles.itemText}>$10 - Bình tưới Sierra nhỏ</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/15.png')}
                                        />
                                        <Text style={styles.itemText}>$15 - Bình tưới Sierra lớn</Text>
                                    </View>
                                </View>
                                {/* Second row */}
                                <View style={styles.rowContainer}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/16.png')}
                                        />
                                        <Text style={styles.itemText}>$20 - Bình tưới CB2 SAIC</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/17.png')}
                                        />
                                        <Text style={styles.itemText}>$25 - Bình xịt Xiaoda</Text>
                                    </View>
                                </View>
                                {/* third row */}
                                <View style={styles.rowContainer}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/18.png')}
                                        />
                                        <Text style={styles.itemText}>$20 - Bộ cuốc xẻng mini</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/image/19.png')}
                                        />
                                        <Text style={styles.itemText}>$25 - Giá đỡ Finn Terrazzo</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style ={styles.textnew}>Xem thêm Phụ Kiện</Text>
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
