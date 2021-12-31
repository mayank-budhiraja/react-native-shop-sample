import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  headTextContainer: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  flatLisContainer: {
    marginTop: 40,
  },
  topContainer: {
    paddingVertical: 100,
    paddingHorizontal: 30,
    backgroundColor: '#7788FD',
    alignItems: 'center',
  },
  container: {
    top: -50,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  Button: {
    color: colors.app_primary,
  },
  ButtonContainer: {
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.app_icons,
    position: 'absolute',
    bottom: 40,
    right: 10,
    borderRadius: 50,
  },
});

export default styles;
