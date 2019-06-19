import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet 
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';
import global from "../../global";
import searchProduct from "../../../api/searchProduct";
const { height } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: "",
        }
    }

    onSearch(){
        const { txtSearch } = this.state;
        searchProduct(txtSearch)
        .then(arrProduct => console.log(arrProduct))
        .catch(err => console.log(err));
    }

    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent" 
                    onFocus={() => global.gotoSearch()}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { 
        height: height / 23, 
        backgroundColor: '#FFF', 
        paddingLeft: 10,
        paddingVertical: 0 
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
