import React, { useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import { useTheme } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
export default function EditProfileScreen() {
  const { colors } = useTheme();

  const renderInner = () => (
    <View style={styles.panel}>
      {/**Titulo de la subida de las fotos */}
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      {/**subida de fotos */}
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose from library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButtonCancel}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const bs = useRef();
  const fall = new Animated.Value(1);
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        renderContent={renderInner}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.2, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          {/** Imagen de usuario para editar */}
          <TouchableOpacity
            onPress={() => {
              bs.current.snapTo(0);
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://api.adorable.io/avatars/263/abott@adorable.pngCopy to Clipb",
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    type="material-community"
                    color="#fff"
                    size={35}
                    name="camera"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: "#fff",
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          {/** nombre del usario*/}
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: "bold",
              color: colors.text,
            }}
          >
            Josue Flores
          </Text>
        </View>
        {/** Formulario para editar datos */}
        <View style={styles.action}>
          <Input
            placeholder="Name complet"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            leftIcon={{
              type: "material-community",
              name: "account-outline",
              size: 20,
              color: colors.text,
            }}
          />
        </View>

        {/** Phone number*/}
        <View style={styles.action}>
          <Input
            placeholder="Phone"
            placeholderTextColor="#666666"
            autoCorrect={false}
            keyboardType="number-pad"
            style={[styles.textInput, { color: colors.text }]}
            leftIcon={{
              type: "material-community",
              name: "cellphone",
              size: 20,
              color: colors.text,
            }}
          />
        </View>
        {/** Email*/}
        <View style={styles.action}>
          <Input
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            leftIcon={{
              type: "material-community",
              name: "email-outline",
              size: 20,
              color: colors.text,
            }}
          />
        </View>
        {/** Country*/}
        <View style={styles.action}>
          <Input
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            leftIcon={{
              type: "material-community",
              name: "earth",
              size: 20,
              color: colors.text,
            }}
          />
        </View>
        {/** City*/}
        <View style={styles.action}>
          <Input
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
            leftIcon={{
              type: "material-community",
              name: "map-marker-outline",
              size: 20,
              color: colors.text,
            }}
          />
        </View>
        {/** Submit  */}
        <TouchableOpacity style={styles.commandButtom} onPress={() => {}}>
          <Text styke={styles.panelButtonTitle}>Save</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButtom: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#08d4c4",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    //backgroundColor: "#ff6347",
    backgroundColor: "#fff",
    paddingTop: 20,
    //borderTopLeftRadius:20,
    //borderTopRightRadius:20,
    //shadowColor:"#000000",
    //shadowOffset:{width:0,height:0},
    //shadowRadius:5,
    //shadowOpacity:0.4,
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    //elevation:5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#08d4c4",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonCancel: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    //marginTop: 10,
    //marginBottom: 10,
    //borderBottomWidth: 1,
    //borderBottomColor: "#f2f2f2",
    //paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
