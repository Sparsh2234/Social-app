import React, {useState} from 'react'
import { View, Text } from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { TextInput, Image } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'


const PLACEHOLDER_IMG = 'https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png'

const uploadPostSchema = Yup.object().shape({
    imageURL: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})




const FormikPostUploader = () => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

    return (
        <Formik
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={uploadPostSchema}>

            {({handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (

                <>
                    <View style = {{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Image source={{uri: PLACEHOLDER_IMG}} style = {{height: 100, width: 100}}/>

                        <View style = {{flex: 1, marginLeft: 12}}>
                            <TextInput placeholder='Write a Caption...' placeholderTextColor='gray'
                                multiline = {true} style = {{color:'white', fontSize: '20'}}
                                onChangeText = {handleChange('caption')} onBlur={handleBlur('caption')} value = {values.caption}
                            />
                        </View>
                    </View>

                    <Divider width={0.2} orientation='vertical' />
                    <TextInput placeholder= 'Enter Image URL' placeholderTextColor='gray'
                        style = {{color:'white', fontSize: '18'}}
                        onChangeText={handleChange('imageUrl')} onBlur={handleBlur('imageUrl')}
                        value = {values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style = {{fontSize: 10, color: 'red'}} >
                            {errors.imageUrl}
                        </Text>
                    )}
                </>
            )}
    
        </Formik>
    )
}

export default FormikPostUploader
