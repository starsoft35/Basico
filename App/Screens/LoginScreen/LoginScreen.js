import React from 'react';
import {
  Image,
  KeyboardAvoidingView
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base'
import styles from './styles';
import WallpaperContainer from '../../Containers/WallpaperContainer';
import { Images } from '../../Themes';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      hidePassword: true,
      pressButton: false
    };
    return;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <WallpaperContainer
          img={ Images.loginBackground }
          overlay={ "#ED1727" }
        >
          <Image
            style={ styles.logo }
            resizeMode={ "contain" }
            source={ Images.logoLandscape }
          />
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
          >
            <Text>{ "Avoid View" }</Text>
          </KeyboardAvoidingView>
        </WallpaperContainer>
      </Container>
    );
  }
}

export default LoginScreen;
