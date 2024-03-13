import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function LandingPage(){
return (
    <SafeAreaView>
        <View>
            <Image source={{ uri:'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMWJhdGNoMTEtYXVtLTMxNi1jYXJfMi5qcGc.jpg'}} style={styles.heroImg}/>
        </View>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}>Start your journey{'\n'}with {' '}
                <View style={styles.appName}>
                    <Text style={styles.appNameText}>Auto repair</Text></View></Text>
                <Text style={styles.message}>
                    Where every car problem have a solution
                </Text>
            </View>
            <TouchableOpacity style={styles.btn}
            onPress={()=>{}}>
                <Text style={styles.btnText}>
                    Let's go 
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    content:{
        padding:24,
        justifyContent:'space-between',   
    },
    header:{
        paddingHorizontal: 24,
    },
    title:{
        fontSize:28,
        fontWeight:'500',
        color:'#281b52',
        textAlign:'center',
        marginBottom:12,
        lineHeight:40,
    },
    message:{
        fontSize: 17,

        lineHeight: 24,
        fontWeight:'bold',
        color:'#9992a7',
        textAlign:'center',
        marginTop:30
    },
    hero:{
        backgroundColor:'#d8dffe',
        borderRadius :16,
        padding :16,
        margin :12,
    },
    heroImg:{
        width: '100%',
        height: 400,
    },
    appName:{
        backgroundColor:'#fff2dd',
        paddingHorizontal: 6,
        transform: [
            {
                rotate:'-5deg',
            }
        ]
    },
    appNameText:{
        fontSize:28,
        fontWeight: '700',
        color:'#281b52',

    },
    btn:{
        backgroundColor:'#56409e',
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems :'center',
        justifyContent:'center',
        borderRadius: 12,
    },
    btnText:{
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
    }
})