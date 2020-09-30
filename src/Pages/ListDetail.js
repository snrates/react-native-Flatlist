
import React, { useState } from 'react';
import { ScrollView, View ,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

import Input from '../Compononts/input';
import Click from '../Compononts/button';

import { connect } from 'react-redux';
import { updateList } from '../actions'

const ListDetail = (props) => {


   const [title, setTitle] = useState('')
   const [dsc, setDsc] = useState('')

   return (
      <ScrollView>
         <View style={{
            alignItems: 'center',
            justifyContent: 'center'
         }}>

            <Input
               placeholder='Title'
               value={title}
               onChangeText={(value) => setTitle(value)}
               height={height * 0.08}
            />

            <Input
               placeholder='Discription'
               value={dsc}
               onChangeText={(value) => setDsc(value)}
               multiline
               height= {height * 0.16}

            />

            <Click
               text={'Ekle'}
               onPress={() => {
                  let obj = {
                     title,
                     dsc,
                  };
                  //  setTimeout(()=>{
                  //     //2saniye sonra çalış
                  //    dispatch({type: LOADING_START, payload:true})
                  //  },2000)
                  props.updateList(obj);
                  props.navigation.pop();
               }}
            />
            {/* {props.loading && <ActivityIndicator size='large' style={{ marginTop: 25 }}></ActivityIndicator>} */}
         </View>
      </ScrollView>
   );
}
const mapStateToProps = ({ listResponse }) => {
   const { list, loading } = listResponse;
   return { list, loading };
}
export default connect(mapStateToProps, { updateList })(ListDetail);