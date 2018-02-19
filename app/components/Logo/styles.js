import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerWidth: imageWidth,
  $largeImageWidth: imageWidth / 2,
  $smallContainerWidth: imageWidth / 2,
  $smallImageWidth: imageWidth / 4,
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerWidth',
    height: '$largeContainerWidth',
  },
  image: {
    width: '$largeImageWidth',
  },
  text: {
    color: '$white',
    marginTop: 15,
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
  },
});
