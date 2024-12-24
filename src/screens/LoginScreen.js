import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import HomePage from './Home';

const LoginScreen = () => {
    const [secureEntry, setSecureEntry] = useState(true);
    const navigation = useNavigation();
    
    const handleGoBack = () => {
        navigation.navigate("HOME");
    };
    const handleSignUp = () => {
        navigation.navigate("SIGNUP");
    };
    const Home = () => {
        navigation.navigate("HomePage");
    };

    return (
        <View style={styles.container}>
            {/* App Name Section */}
            <View style={styles.appNameContainer}>
                <Text style={styles.appName}>TailorMe</Text>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="mail-outline" color={colors.secondary} size={30} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Your Email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock-closed-outline" color={colors.secondary} size={30} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Your Password"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                        <Icon name="eye-outline" color={colors.secondary} size={30} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgetPasswordText}>Forgot Password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.LoginTextWraper} onPress={Home}>
                    <Text style={styles.LoginText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source={require("../assets/google.png")} style={styles.googleImage} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20
    },
    appNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40, // Adjust top margin if needed
    },
    appName: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.primary,
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontWeight: '700'
    },
    inputContainer: {
        height: 55,
        marginTop: 40,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    formContainer: {
        marginTop: 20,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 15,
    },
    forgetPasswordText: {
        textAlign: 'right',
        color: colors.primary,
        marginTop: 20,
        fontSize: 15
    },
    LoginTextWraper: {
        backgroundColor: '#6200ee',
        marginTop: 13,
        borderRadius: 100
    },
    LoginText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
    },
    continueText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 12
    },
    googleImage: {
        height: 40,
        width: 25
    },
    googleButtonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleText: {
        fontSize: 17,
        fontWeight: '700',
        paddingLeft: 10
    },
    signupContainer: {
        width: 320,
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 20, 
    },
    signupText: {
        color: '#6200ee',
        fontWeight: "bold",
        marginLeft: 5, 
    },
});
