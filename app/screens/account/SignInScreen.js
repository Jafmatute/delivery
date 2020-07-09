import React, { useState, useContext } from "react";
import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { Image, Icon, Input } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../components/Context";
import Users from "../../model/users";
const SignInScreen = ({ navigation }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { colors } = useTheme();
  const [data, setData] = useState({
    email: "",
    password: "",
    checkInput: false,
    securityPassword: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const { signIn } = useContext(AuthContext);

  const inputChangeEmail = (e) => {
    //console.log(e);
    if (e.trim().length >= 4) {
      setData({
        ...data,
        email: e,
        checkInput: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: e,
        checkInput: false,
        isValidEmail: false,
      });
    }
  };
  const handlePassword = (e) => {
    // console.log(e);
    if (e.trim().length >= 8) {
      setData({
        ...data,
        password: e,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: e,
        isValidPassword: false,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };
  const loginHandle = (email, password) => {
    const foundUser = Users.filter((item) => {
      return email === item.email && password === item.password;
    });

    if (data.email.length === 0 || data.password.length === 0) {
      Alert.alert("Wrong Input", "email or password field cannot be empty", [
        { text: "Ok" },
      ]);
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert("Invalid user", "email or password is incorrect", [
        { text: "Ok" },
      ]);
      return;
    }
    signIn(foundUser);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={[styles.text_header]}>Iniciar Sesión</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.tex_footer, { color: colors.text }]}>Email</Text>
        <View style={styles.action}>
          <Input
            placeholder="Ingrese su email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(e) => inputChangeEmail(e)}
            onEndEditing={(x) => handleValidUser(x.nativeEvent.text)}
            leftIcon={{
              type: "material-community",
              name: "account-check-outline",
              size: 20,
              color: colors.text,
            }}
            rightIcon={
              data.checkInput ? (
                <Animatable.View animation="bounceIn">
                  <Icon
                    type="material-community"
                    name="checkbox-marked-circle-outline"
                    color="green"
                    size={20}
                  />
                </Animatable.View>
              ) : null
            }
          />
        </View>
        {data.isValidEmail ? null : (
          <Animatable.View animatable="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email must be 4 characters log</Text>
          </Animatable.View>
        )}

        <Text style={[styles.tex_footer, { color: colors.text }]}>
          Password
        </Text>
        <View style={styles.action}>
          <Input
            placeholder="Ingrese su password"
            secureTextEntry={isVisiblePassword ? false : true}
            onChangeText={(e) => handlePassword(e)}
            style={styles.textInput}
            autoCapitalize="none"
            leftIcon={{
              type: "material-community",
              name: "lock-question",
              size: 20,
              color: colors.text,
            }}
            rightIcon={
              <Icon
                type="material-community"
                name={isVisiblePassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                onPress={() => setIsVisiblePassword(!isVisiblePassword)}
                color={colors.text}
              />
            }
          />
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animatable="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email must be 8 characters log</Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forgot password ?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.email, data.password);
            }}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "#fff" }]}>Sign In </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08d4c4",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  tex_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    //borderBottomWidth: 1,
    //borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorMsg: {
    color: "red",
    marginBottom: 30,
    marginTop: -25,
    justifyContent: "center",
  },
});
