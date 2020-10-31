import React from "react";
import { Grid, Icon, Image, Header } from "semantic-ui-react";
import Cleaver from "../Header/Image/Cleaver.png";
import logo from "../Header/Image/logo2.0.png";
import background from "../Header/Image/background.jpeg";

const HalalHeader = () => (
  <Grid
    container
    stackable
    style={{
      background: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <Grid.Row textAlign="right" columns={1}>
      <Grid.Column>
        <Image src={Cleaver} size="mini" floated="left" />
        <a href="https://www.facebook.com/halalcuts/" >
          <Icon name="facebook" circular inverted color={"orange"} size="large" />
        </a>
        <a href="https://www.instagram.com/halalcutstx/" >
          <Icon name="instagram" circular inverted color={"orange"} size="large" />
        </a>
        <a href="tel:4695658083" >        
          <Icon name="phone square" circular inverted color={"orange"} size="large" />
        </a>
        <a href="https://goo.gl/maps/ZD7j4KLES35xWU6c6">
          <Icon
            name="map marker alternate"
            circular
            inverted
            color={"orange"}
            size="large"
          />
          </a>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} divided verticalAlign="middle">
      <Grid.Column floated="left">
        <Image src={logo} size="huge" />
      </Grid.Column>
      <Grid.Column>
        <Header as="h4" style={{ fontSize: "2em" }}>
          Halal Cuts Opens Sunday Nov 1st.
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Come and enjoy fresh halal cuts with our team and family!
        </p>

      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3} textAlign="center">
      <Grid.Column>
        <Header as="h4" style={{ fontSize: "1.25em" }} block color="orange">
          Where to find us!
          <Header.Subheader>
            3642 N. Beltline Rd, Irving TX 75062
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header as="h4" style={{ fontSize: "1.25em" }} block color="orange">
          Market Hours
          <Header.Subheader>7 days a week 9am to 9pm</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header as="h4" style={{ fontSize: "1.25em" }} block color="orange">
          Taco Shop Hours
          <Header.Subheader>7 days a week 11am to 10pm</Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default HalalHeader;
