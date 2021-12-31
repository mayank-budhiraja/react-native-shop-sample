import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  ButtonContainer: {
    marginHorizontal: 150,
    marginTop: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.app_icons,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    top: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textInputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    top: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
