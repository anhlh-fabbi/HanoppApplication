import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const FirstOpenAppScreen = () => {
  const [type, setType] = useState(0);
  return (
    <View style={styles.screenContainer}>
      <Image
        source={require('../assets/firstOpenApp/logo.gif')}
        style={styles.imageLogo}
      />
      <View style={styles.progressbarContainer}>
        <View
          style={[
            styles.loadProgressbarItem,
            {backgroundColor: '#1561b5'},
            {borderTopLeftRadius: 10, borderBottomLeftRadius: 10},
          ]}
        />
        <View
          style={[
            styles.loadProgressbarItem,
            {backgroundColor: type >= 1 ? '#1561b5' : '#fff'},
          ]}
        />
        <View
          style={[
            styles.loadProgressbarItem,
            {backgroundColor: type >= 2 ? '#1561b5' : '#fff'},
            {
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.btnNextContainer}
        onPress={() => setType(type + 1)}>
        <Text>Tiếp theo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#426d49',
    alignItems: 'center',
  },
  imageLogo: {
    width: '100%',
  },
  btnNextContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 40,
    width: 100,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
  },
  progressbarContainer: {
    flexDirection: 'row',
  },
  loadProgressbarItem: {
    height: 20,
    width: 50,
    borderWidth: 2,
    borderColor: '#ecb828',
  },
});
export default FirstOpenAppScreen;
