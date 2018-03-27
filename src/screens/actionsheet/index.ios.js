import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text,Root
} from "native-base";
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class ActionSheetNB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if(this.state.clicked==="Option 0"){
      alert("first selected")
    }
    if(this.state.clicked==="Option 1"){alert("second Selected")}
    return (
      <Root>
      <Container style={{ backgroundColor: "#fff" }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => null}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>ActionSheet</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show( {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select an option"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
      </Root>
    );
  }
}
