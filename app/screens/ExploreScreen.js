import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  Platform,
  Animated,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useTheme } from "@react-navigation/native";
import { markers, mapDarkStyle, mapStandarStyle } from "../model/mapData";
import { Icon, Input } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import StarRating from "../components/StarRating";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const ExploreScreen = () => {
  const theme = useTheme();

  const initialMapSate = {
    markers,
    categories: [
      {
        name: "FastFood Center",
        icon: (
          <Icon
            type="material-community"
            iconStyle={styles.chipsIcon}
            name="food-fork-drink"
            size={18}
          />
        ),
      },
      {
        name: "Restaurants",
        icon: (
          <Icon
            type="material-community"
            iconStyle={styles.chipsIcon}
            name="silverware"
            size={18}
          />
        ),
      },
      {
        name: "Dineouts",
        icon: (
          <Icon
            type="material-community"
            iconStyle={styles.chipsIcon}
            name="table-chair"
            size={18}
          />
        ),
      },
      {
        name: "Snack Corner",
        icon: (
          <Icon
            type="material-community"
            iconStyle={styles.chipsIcon}
            name="food"
            size={18}
          />
        ),
      },
      {
        name: "Hotel",
        icon: (
          <Icon
            type="material-community"
            iconStyle={styles.chipsIcon}
            name="hotel"
            size={18}
          />
        ),
      },
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };
  const [state, setState] = useState(initialMapSate);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });
  const onMarkerPress = (mapEventData) => {
    const markerId = mapEventData._targetInst.return.key;
    let x = markerId * CARD_WIDTH + (markerId + 20);
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }
    _scrollview.current.getNode().scrollTo({ x: x, y: 0, animated: true });
    //_scrollview.current.scrollTo({ x: x, y: 0, animated: true });
  };
  const _map = useRef(null);
  const _scrollview = useRef(null);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(regionTimeout);
      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        initialRegion={state.region}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.container}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandarStyle}
      >
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [{ scale: interpolations[index].scale }],
          };
          return (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require("../../assets/map_marker.png")}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search Here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
        <Icon type="material-community" name="map-search" size={20} />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{
          //IOS Only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === "android" ? 20 : 0,
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem}>
            {category.icon}
            <Text> {category.name} </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Animated.ScrollView
        ref={_scrollview}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          lef: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardTitle}>
                {marker.title}
              </Text>
              <StarRating ratings={marker.rating} reviews={marker.reviews} />
              <Text numberOfLines={1} style={styles.cardDescription}>
                {marker.description}
              </Text>
              <View style={styles.buttom}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    styles.signIn,
                    { borderColor: "#ff6347", borderWidth: 1 },
                  ]}
                >
                  <Text style={[styles.textSign, { color: "#ff6347" }]}>
                    Order Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollview: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    height: 30,
    width: 30,
  },
  buttom: {
    alignItems: "center",
    marginTop: 5,
  },
  signIn: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
