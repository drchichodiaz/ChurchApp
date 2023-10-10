import { View, Text, LayoutAnimation } from 'react-native'
import React from 'react'

export const  toggleAnimation = {
    duration:300,
    update:{
        duration: 300,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
    }

}