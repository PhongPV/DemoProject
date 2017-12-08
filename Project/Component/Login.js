import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Icon,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component{
    render(){
        
        return(
            <View style={{flex:1,backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
                <Image
                    style={{ width: 100, height: 100, borderRadius:50,top: 50, zIndex: 2}}
                    source={require('../Images/avatar.png')}
                />
                <View style={{backgroundColor:'white', width:300, height:200, borderRadius:7, alignItems:'center'}}>
                    <Text style={{marginTop: 60, color: 'orange', fontWeight:'bold'}}>FoodFriends</Text>
                    <View>
                        
                        <TextInput style={{width: 280}}/>
                    </View> 
                    <View>
                    
                        <TextInput style={{width: 280}}/>
                    </View> 
                </View>
                <View style={{flexDirection:'row', marginTop: 20, width:220, height: 40, alignItems: 'center', justifyContent:'center',}}>
                    <TouchableOpacity onPress={()=>this.navigation.navigate('Home')}>
                        <View style={{backgroundColor:'yellow',
                            padding:10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                            <Text>ĐĂNG NHẬP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.navigation.navigate('Register')}>
                        <View style={{backgroundColor:'gray', 
                            padding:10,  borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
                            <Text>ĐĂNG KÍ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', marginTop: 20,}}>
                    <TouchableOpacity>
                        <Text style={{color:'white'}}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}