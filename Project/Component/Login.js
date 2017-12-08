import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Icon,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Login extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <ImageBackground
                    style={{width: width, height: height, flex:1,
                        justifyContent:'center', 
                        alignItems:'center',}}
                    source={require('../Images/background.jpg')}
                >
                    <Image
                        style={styles.avatar}
                        source={require('../Images/avatar.png')}
                    />
                    <View style={styles.login}>
                        <Text style={styles.title}>FoodFriends</Text>
                        <View style={{flexDirection:'row',justifyContent:'center', alignItems: 'center'}}>
                            <Image style={{width:20, height:20}} source={require('../Images/username.png')}/>                   
                            <TextInput style={{width: 280, color:'orange',}}/>
                        </View> 
                        <View style={{flexDirection:'row',justifyContent:'center', alignItems: 'center'}}>
                            <Image style={{width:15, height:15}} source={require('../Images/password.png')}/>  
                            <TextInput style={{width: 280}}/>
                        </View> 
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={()=>navigate('Home')}>
                            <View style={styles.btnLogin}>
                                <Text>ĐĂNG NHẬP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('Register')}>
                            <View style={styles.btnRegister}>
                                <Text>ĐĂNG KÍ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textForgot}>
                        <TouchableOpacity>
                            <Text style={{color:'white'}}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
    },
    avatar:{
        width: 100, 
        height: 100, 
        borderRadius:50,
        top: 50, 
        zIndex: 2,
    },
    login:{
        backgroundColor:'white', 
        width:300, 
        height:200, 
        borderRadius:7, 
        alignItems:'center'
    },
    title:{
        marginTop: 60, 
        color: 'orange', 
        fontWeight:'bold'
    },
    button:{
        flexDirection:'row', 
        marginTop: 20, 
        width:220, 
        height: 40, 
        alignItems: 'center', 
        justifyContent:'center',
    },
    btnLogin:{
        backgroundColor:'orange',
        padding:10, 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10
    },
    btnRegister:{
        backgroundColor:'gray', 
        padding:10, 
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10
    },
    textForgot:{
        alignItems:'center', 
        justifyContent:'center', 
        marginTop: 30,
    }

});