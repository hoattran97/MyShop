import React, { Component } from 'react'
import {
  View, Text, Image,
  StyleSheet, Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Constant from "../../../DatabaseConfig"

const { width, height } = Dimensions.get('window');
const url = "http://"+Constant.SERVER_IP+"/MyShop/api/images/type/";

export default class Category extends Component{
  
  gotoListProduct() {
    const { navigator } = this.props;
    navigator.push({ name: 'LIST_PRODUCT' });
  }
  
  render() {
    const { types } = this.props;
    const { wrapper,imageStyle,textStyle,cateTitle } = styles;
    const swiper = (
      <Swiper showsButtons={true} width={imageWidth} height={imageHeight}>
        {types.map(e => (
          <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={e.id}>
            <Image source={{uri:`${url}${e.image}` }} style={imageStyle}>
              <Text style={cateTitle}>{e.name}</Text>
            </Image>
          </TouchableOpacity>
        ))}
      </Swiper>
    )
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4 }}>
          {types.length ? swiper : null}
        </View>
      </View>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 5,
    marginTop:5,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 20,
    color:'#AFAEAF',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    alignItems: 'center',
    justifyContent:'center',
  },
  cateTitle: {
    fontSize: 15,
    fontFamily: 'Avenir',
    color:'#9A9A9A',
  }
})