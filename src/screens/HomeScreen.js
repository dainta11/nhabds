import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { categoryData } from '../data/categoryData';
import BoxButton from '../components/BoxButton';
import BrandHeader from '../components/BrandHeader';

const HomeScreen = () => {
  return (
    <>
      <BrandHeader />
      <View style={styles.container}>
        {categoryData.map((item) => {
          return (
              <BoxButton key={item.name} name={item.name} image={item.image} />
          )
        })}
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});


export default HomeScreen;
