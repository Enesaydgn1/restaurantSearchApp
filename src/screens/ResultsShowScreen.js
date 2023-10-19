import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../../api/yelp';
import { AntDesign } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {
  const id = route.params.id;
  const [results, setResults] = useState(null);
  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  }

  useEffect(() => {
    getResults(id)
  }, [])
  if (!results) {
    return null;
  }

  return (
    <View style={styles.container}>

      <FlatList
        horizontal={true}
        data={results.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}

      />
      <View>
        <Text style={styles.title}>{results.name}</Text>
        <Text style={styles.phone}>Telefon Numarası : {results.phone}</Text>
        <Text style={styles.phone}>Adress : {results.phone}</Text>
        {results.isClose ?
          <View style={styles.isActiveContainer}>
            <Text style={{color:'red'}}>Kapalı</Text>
            <AntDesign name="closecircle" size={24} color="red" />
          </View> :
          <View style={styles.isActiveContainer}>
            <Text style={styles.isActiveName}>Açık</Text>
            <AntDesign name="checkcircle" size={24} color="green" />
          </View>}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    height: 200,
    width:300,
    margin: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    textAlign:'center'
  },
  phone:{
    margin:10
  },
  isActiveContainer:{
    flexDirection:'row',
    justifyContent:'around',
    margin:10
  },
  isActiveName:{
    color:'green',
    fontWeight:'bold'
  }


})