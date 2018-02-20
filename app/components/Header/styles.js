import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': { paddingTop: 25 },
  },
  icon: { width: 18 },
  button: { alignSelf: 'flex-end', paddingVertical: 5, paddingHorizontal: 20 },
});

export default styles;
