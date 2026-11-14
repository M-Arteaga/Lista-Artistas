import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ArtistBox from '../components/ArtistBox';
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
    // const { id, name, image } = useLocalSearchParams();
    // const artist_data = {
    //     id,
    //     name,
    //     image
    // }
    const params = useLocalSearchParams();

    const artist_data = {
        id: String(params.id),
        name: String(params.name),
        image: String(params.image),
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: artist_data.image }} testID="artist-image" />
            <Text style={styles.title}>{artist_data.name}</Text>
            <Text style={styles.id}>{artist_data.id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        paddingTop: 2,
        color: '#ff0000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
    },
    id: {
        color: '#aaa',
        fontSize: 16,
        marginTop: 8,
    },
});

// import React from "react";
// import { View, StyleSheet } from "react-native";
// import ArtistBox from './components/ArtistBox';
// import { useLocalSearchParams } from "expo-router";

// export default function Detail() {
//     const { id, name, image } = useLocalSearchParams();
//     const artist_data = {
//         id,
//         name,
//         image
//     }

//     return (
//         <View style={styles.container}>
//             {/* Add the UI */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingTop: 0,
//     },
// });