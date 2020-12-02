import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import SurveyScreen from '../screens/SurveyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants/backgroundConstant';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {signOut} from '../store/actions/ActionCreator';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function SignInStack() {
  const isProfileSaved = useSelector(
    (state) => state.appReducer.isProfileFilled,
  );

  const dispatch = useDispatch();
  const onSignOutPress = () => {
    dispatch(signOut());
  };
  function CustomDrawerContent(props) {
    return (
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 1, y: 1.0}}
        colors={colors}
        style={style.screen}>
        <DrawerContentScrollView {...props}>
          <View style={style.headerContainer}>
            <Text style={style.header}>Comita</Text>
          </View>
          <DrawerItemList
            activeTintColor="white"
            labelStyle={{fontSize: 16}}
            {...props}
          />
        </DrawerContentScrollView>

        <TouchableOpacity style={style.button} onPress={() => onSignOutPress()}>
          <Text style={style.buttonTitle}>Çıkış Yap </Text>
          <Icon name="exit-outline" size={30} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerStyle={style.drawer}
        headerMode="none"
        initialRouteName="Survey"
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Anket" component={SurveyScreen} />
        <Drawer.Screen name="Profil" component={EditProfileScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {isProfileSaved ? (
        <MyDrawer />
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="FillProfile" component={ProfileScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  drawer: {
    width: 200,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderRadius: 40,
    borderColor: 'white',
    marginBottom: 10,
  },
  header: {
    color: 'white',
    fontSize: 28,
    padding: 10,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'transparent',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    margin: 5,
    flexDirection: 'row',
  },
});
