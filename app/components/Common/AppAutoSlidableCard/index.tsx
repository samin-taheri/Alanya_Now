import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ImageSourcePropType,
} from 'react-native';

const { width } = Dimensions.get('window');

interface Slide {
    image: ImageSourcePropType;
    text: string;
}

const slides: Slide[] = [
    {
        image: require('../../../assets/images/challenge-1.jpg'),
        text: 'Description 1',
    },
    {
        image: require('../../../assets/images/challenge-2.jpg'),
        text: 'Description 2',
    },
    {
        image: require('../../../assets/images/challenge-3.jpg'),
        text: 'Description 3',
    },
    {
        image: require('../../../assets/images/challenge-4.jpg'),
        text: 'Description 4',
    },
];

const AutoSlidableComponent: React.FC = () => {
    const flatListRef = useRef<FlatList<Slide>>(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const newPage = (currentPage + 1) % slides.length;
            setCurrentPage(newPage);
            flatListRef.current?.scrollToIndex({ animated: true, index: newPage });
        }, 5000); // Change the interval as needed (in milliseconds)

        return () => clearInterval(timer);
    }, [currentPage]);

    const renderPagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {slides.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.paginationDot,
                            index === currentPage && styles.activeDot,
                        ]}
                        onPress={() => {
                            setCurrentPage(index);
                            flatListRef.current?.scrollToIndex({ animated: true, index });
                        }}
                    />
                ))}
            </View>
        );
    };

    const renderItem = ({ item }: { item: Slide }) => (
        <View style={styles.slide}>
            <ImageBackground
                source={item.image}
                style={styles.imageBackground}
                imageStyle={styles.image}
            >
                <TouchableOpacity
                    style={styles.cardContent}
                    onPress={() => {
                        // Handle card press if needed
                    }}
                >
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.text}_${index}`}
                renderItem={renderItem}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(
                        event.nativeEvent.contentOffset.x / width
                    );
                    setCurrentPage(newIndex);
                }}
            />
            {renderPagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18
    },
    imageBackground: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 16,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', // Set the text color as needed
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'grey',
        margin: 4,
    },
    activeDot: {
        backgroundColor: 'blue', // Change the color of the active dot
    },
});

export default AutoSlidableComponent;
