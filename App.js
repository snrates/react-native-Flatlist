import React, { useState } from 'react';
import {KeyboardAvoidingView, FlatList,StyleSheet, SafeAreaView, Text, Dimensions, View } from 'react-native';
import Input from './src/Compononts/input';
import Click from './src/Compononts/button'
const {width,height}=Dimensions.get('window')

const Listpage= (props) =>{

  const [title, setTitle]=useState('')

  const [dsc, setDsc]=useState('')
   
   const[data,setData]=useState('')

const renderItem = ({item}) => (

  <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.dsc}</Text>
  </View>
);

  return(
   <SafeAreaView style={styles.container}>
   
   <KeyboardAvoidingView  behavior="height" style={{flex:1}}>
    
   <FlatList
     data={data}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     ListEmptyComponent={() =>{
       //EĞER LİSTEDE BİR ŞEY YOKSA UYURI MESAJI VERİR
       return(
         <View style={{
           backgroundColor: 'green',
           fontSize: 15,
           alignItems: 'center',
           }}>
           <Text>Herhangi bir veri bulunamadı </Text>
         </View>
       )
     }}
     ItemSeparatorComponent={() =>{
      //LİSTEDE INPUTLAR ARASI BİR ÇİZGİ GİBİ DÜŞÜNÜLEBİLİR
      return(
        <View style={{
          backgroundColor: 'orange',
          height: 3,
          borderEndWidth: 6,
          borderStartWidth: 6

        }}/>
      )

     }}
     ListFooterComponent={() =>{ 
       //LİSTENİN EN ALTINDA SABİT DURUR
        return(
          <View style={{
            backgroundColor: 'grey',
            height: 15
          }} 
          />
        )
     }}
     ListHeaderComponent={() =>{
      //LİSTENŞN EN ÜSTÜNDE SABİT DURUR 
      return(
        <View style={{
          backgroundColor: 'grey',
          height: 15
        }} 
        />
       )
     }}
   />
      <View style={{
          
          alignItems: 'center',
          justifyContent: 'center'  
        
         }}>   
        <Input 
           placeholder= 'Title'
           value={title}
           onChangeText= { (value)=>setTitle(value)}
        />
        <Input 
           placeholder= 'Discription'
           value={dsc}
           onChangeText= { (value)=>setDsc(value)}
        />
        <Click
          text={'Add'}
          onPress={() => {
             let arr =[... data]

             let obj = {
               id: data.length,
               title,
               dsc,
             };
             arr.push(obj)

             setData(arr)
          }}
        />

        


        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Listpage;

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
  fontSize: 10 ,
 }
});


/*<Button
text={'Add'}
onPress={() => {
   let arr = data;
   let obj = {
     id: title.length,
     title,
     dsc
   };
   data.push(obj)
}}
/>
<KeyboardAvoidingView
      behavior="padding" style={{ flex: 1,backgroundColor: 'orange',}}>
       </KeyboardAvoidingView>


*/
