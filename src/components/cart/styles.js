import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    paddingTop: 20
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    
  },
  leftContainer: {
    marginRight: 8,
    justifyContent: 'center'
  },
  leftIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textLine: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightContainer: {
    marginLeft: 8,
  },
  newText:{
    textAlign: 'center',
    paddingTop: 10
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    color: 'green',
  }
});
