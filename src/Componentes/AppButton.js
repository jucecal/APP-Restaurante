import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../consts/colors'

export default function ({ title, onPress, color = "primary", disabled = false }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        margin: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        // textTransform: 'uppercase',
        fontWeight: '700'
    }
})
