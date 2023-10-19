import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultsList({ title, results, loading }) {
  const navigation = useNavigation();

  const renderSkeletonLoader = () => {
    return (
      <View style={styles.skeletonContainer}>
        <ActivityIndicator size="large" color="#EA004B" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {loading ? (
        renderSkeletonLoader()
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  skeletonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100, // Yüklenirken görüntülemek istediğiniz yüksekliği ayarlayın
  },
});
