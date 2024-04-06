import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  leftIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  leftContainer: {
    marginRight: 8,
  },
  textLine: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightContainer: {
    marginLeft: 8,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  profileDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
});
