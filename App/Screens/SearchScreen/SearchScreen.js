#!/usr/bin/env node


// ~~ Dependencies ~~
import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Icon,
  Picker,
} from 'native-base';
// ~~ Local Dependencies ~~
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class SearchScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: undefined
    };
    return;
  }
  onValueChange(value: string) {
    this.setState({ selected: value });
    return ;
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
      <StatusBar
        hidden={ false }
        barStyle={ 'light-content' }
        animated={ true }
      />
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Search' }
            icon={ 'menu' }
            onPress={ () => this.props.navigation.openDrawer() }
          />
          <Content style={ styles.content }>
            <Form>
              <Picker
                mode="dropdown"
                placeholder="Select your SIM"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Select your SIM"
                textStyle={{ color: "#5cb85c" }}
                itemStyle={{
                  backgroundColor: "#d3d3d3",
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                itemTextStyle={{ color: '#788ad2' }}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Place1" value="key0" />
                <Picker.Item label="Place2" value="key1" />
                <Picker.Item label="Place3" value="key2" />
                <Picker.Item label="Place4" value="key3" />
                <Picker.Item label="Place5" value="key4" />
              </Picker>
            </Form>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default SearchScreen;
