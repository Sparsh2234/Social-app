import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View style = {styles.container}>
            <Header/>
            <FormikPostUploader />
        </View>
    )
}

const Header = () => (
    <View style = {styles.headerContainer}>
        <TouchableOpacity>
            <Image 
            source = {{uri: 'https://img.icons8.com/ios-glyphs/90/000000/back.png'}}
            style={{width: 30, height:30, tintColor: 'white'}} />
        </TouchableOpacity>
        <Text style = {styles.headerText}>NEW POST</Text>
        <Text></Text>
    </View>
)
const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 10,

    },

    headerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },

    headerText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25
    }
})

export default AddNewPost
