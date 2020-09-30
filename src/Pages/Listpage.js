import React, { useEffect } from 'react';
import { KeyboardAvoidingView, FlatList, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Click from '../Compononts/button';
import { connect } from 'react-redux';
import { getList } from '../actions'


const Listpage = (props) => {

  useEffect(async () => {
    props.getList();
  }, [])

  const renderItem = ({ item }) => (

    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.dsc}</Text>
    </View>
  );

  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>

        <FlatList style={{ flex: 1 }}
          data={props.list}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          ListEmptyComponent={() => {
            return (
              <View style={{
                fontSize: 15,
                alignItems: 'center',
              }}>
                <Text>Herhangi bir veri bulunamadı </Text>
                <Click
                  text={'Add'}
                  onPress={() => props.navigation.navigate('Listdetail')}
                />

              </View>
            )
          }}
        />

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const mapStateToProps = ({ listResponse }) => {
  const { list, loading } = listResponse;
  return { list, loading };
}
export default connect(mapStateToProps, { getList })(Listpage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'pink'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 12,
    borderWidth: 1,
  },
  title: {
    fontSize: 15,
  },
  dsc: {
    fontSize: 10,
  }
});