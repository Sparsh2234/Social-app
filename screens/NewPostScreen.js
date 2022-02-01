import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native'
import { bottomTabIcons } from '../component/home/BottomTabs'
import AddNewPost from '../component/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style = {{backgroundColor: 'black', flex: 1}}>
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreen
