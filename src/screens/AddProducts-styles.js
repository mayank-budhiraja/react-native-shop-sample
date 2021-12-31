import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  noteContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  ButtonContainer: {
    marginHorizontal: 100,
    marginTop: 100,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.app_icons,
    borderRadius: 50,
  },
  mainContainer: {
    margin: 10,
    top: 40,
  },
  header: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    height: 20,
    marginHorizontal: 20,
  },
});

export default styles;
