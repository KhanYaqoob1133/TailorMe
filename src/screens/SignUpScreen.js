import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
// import '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [secureEntry, setSecureEntry] = useState(true);
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate("LOGIN");
    };

    const Home = () => {
        navigation.navigate("HomePage");
    };

    const createUser = () => {
        if (email && password) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    Home();  // Navigate to HomePage after successful sign-up
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                    console.error(error);
                });
        } else {
            console.log("Please provide both email and password.");
        }
    };

    return (
        <View style={styles.container}>
            {/* App Name Section */}
            <View style={styles.appNameContainer}>
                <Text style={styles.appName}>TailorMe</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Let's get</Text>
                <Text style={styles.headingText}>Started</Text>
            </View>
            
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="person" color={colors.secondary} size={30} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Your Name"
                        placeholderTextColor={colors.secondary}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="mail-outline" color={colors.secondary} size={30} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Your Email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock-closed-outline" color={colors.secondary} size={30} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Your Password"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                        <Icon name="eye-outline" color={colors.secondary} size={30} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.LoginTextWraper} onPress={createUser}>
                    <Text style={styles.LoginText}>SIGN UP</Text>
                </TouchableOpacity>

                <Text style={styles.continueText}>or continue with</Text>

                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source={require("../assets/google.png")} style={styles.googleImage} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={handleSignIn}>
                        <Text style={styles.signupText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen;

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
        marginTop: 25,
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
