import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Searchbar from '../../components/Searchbar'
import useResults from '../../hooks/useResults'
import ResultsList from '../../components/ResultsList'

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults()
  // console.log(results)
  const [term, setTerm] = useState('')
  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <View>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length === 0 ? <Text style={{color:'red',textAlign:'center',marginTop:20,fontSize:20}}>Bu İsimde Restaurant Bulunamadı!</Text> : (
        <>
          <ResultsList title="Ucuz Restoranlar" results={filterResultsByPrice('₺')} />
          <ResultsList title="Uygun Restoranlar" results={filterResultsByPrice('₺₺')} />
          <ResultsList title="Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
        </>

      )}

    </View>
  )
}

const styles = StyleSheet.create({})