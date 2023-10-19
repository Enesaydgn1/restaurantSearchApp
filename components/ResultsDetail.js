import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export default function ResultsDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={result.image_url ? { uri: result.image_url } : null} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.statistics}>{result.rating} <AntDesign name="star" size={12} color="orange" />, {result.review_count} Değerlendirme</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 220,
        height: 120,
        borderRadius: 9,
        marginBottom: 8
    },
    name:{
        fontWeight:'bold',
        fontSize:12
    },
    statistics:{
        fontSize:10,
        color:'gray',
        marginTop:3
    }
})