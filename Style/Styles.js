import {StyleSheet} from 'react-native';

export const loginScreenStyle = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    margin: 15,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 4,
    paddingLeft: 10,
  },
  inputContainer: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    borderColor: '#e7e7de',
    borderWidth: 1,
    margin: 5,
    color: 'white',
    fontSize: 15,
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },
  inputFocused: {
    borderColor: '#e7e7de',
    borderWidth: 2,
    margin: 5,
    color: 'white',
    fontSize: 15,
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },

  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'transparent',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export const registerScreenStyle = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    borderColor: '#e7e7de',
    borderWidth: 1,
    margin: 5,
    color: 'white',
    fontSize: 15,
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },
  inputFocused: {
    borderColor: '#e7e7de',
    borderWidth: 2,
    margin: 5,
    color: 'white',
    fontSize: 15,
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },

  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'transparent',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },

  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export const profileScreenStyle = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: '40%',
  },
});

export const editProfileScreenStyle = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 25,
    color: 'white',
    margin: 5,
    fontWeight: 'bold',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },

  button: {
    backgroundColor: 'transparent',
    marginBottom: 5,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: '15%',
  },
  saveButtonContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
  },
  saveButtonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  saveButton: {
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: '60%',
  },
});

export const signInStackStyle = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  drawer: {
    width: 220,
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
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    margin: 15,
  },
  user: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});
