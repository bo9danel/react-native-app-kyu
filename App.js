import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFonts, Inter_900Black, Inter_700Bold} from '@expo-google-fonts/inter';
import {withSafeAreaInsets} from "react-native-safe-area-context";

// const backgroundImg = { uri: "https:capros.ro/iosapp/logoT-02.png" };
const backgroundImg = {
    uri: "https://capros.ro/bk-03.png"
};

const logoImg = {
    uri: "https://capros.ro/iosapp/logoT-02.png"
};

function HomeScreen({navigation}) {
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");

    return (
        
        <View style={styles.container}>
            <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.image}>
                <Image style={styles.logo} source={logoImg}/>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Insert your email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}/>
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Insert your password"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}/>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Welcome')}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>

    );
}

function DetailsScreen() {

    let [fontsLoaded] = useFonts({Inter_900Black, Inter_700Bold});

    return (
      <ScrollView>
        <View style={styles.containerTasks}>


            <View style={styles.headerTasks}>
                <Text style={styles.headingTasks}>Your Tasks</Text>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Welcome')}
                    style={styles.taskBtn}>
                    <Text style={styles.taskBtnText}>Add Task</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.taskRectangle}>

                <View style={styles.taskTextC}>
                    <Text style={styles.task}>First Task</Text>
                    <Text style={styles.deadline}>Deadline: 30/01/2023</Text>

                </View>

                <View style={styles.doneC}></View>
            </View>

            <View style={styles.taskRectangle}>

                <View style={styles.taskTextC}>
                    <Text style={styles.task}>Second Task</Text>
                    <Text style={styles.deadline}>Deadline: 30/01/2023</Text>

                </View>

                <View style={styles.doneC}></View>
            </View>
            
          

        </View>
        </ScrollView>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Welcome" component={DetailsScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
  
  headerTasks:{
    padding: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  
  taskBtn:{
    width: 120,
    height: 50,
    backgroundColor: '#00B407',
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  taskBtnText:{
    fontSize: 16,
    color: 'white',
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
  },
  
  headingTasks: {

        fontFamily: 'Inter_700Bold',
        fontSize: 36,
        lineHeight: 46,
        fontWeight: 'bold',
    },
    task: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    deadline: {
        fontSize: 14,
        color: 'white'
    },

    doneC: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 14,

        // left: 150,

    },

    taskRectangle: {
        marginBottom: 30,
        width: '90%',
        height: 93,
        backgroundColor: '#01BAEF',
        borderRadius: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 21
    },

    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 30
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        
    },

    logo: {
        width: 200,
        height: 50,
        alignSelf: "center",
        marginBottom: 50
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "white"
    }
});
