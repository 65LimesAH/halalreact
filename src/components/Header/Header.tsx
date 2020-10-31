import React from "react";
import { Grid, Icon, Image, Header, List } from "semantic-ui-react";
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
    }}
  >
    <Grid.Row textAlign="right" columns={1}>
      <Grid.Column>
        <Image src={Cleaver} size="mini" floated="left" />
        <Icon name="facebook" circular color={"orange"} size="large" />
        <Icon name="instagram" circular color={"orange"} size="large" />
        <Icon name="twitter" circular color={"orange"} size="large" />
        <Icon name="phone square" circular color={"orange"} size="large" />
        <Icon
          name="map marker alternate"
          circular
          color={"orange"}
          size="large"
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} divided verticalAlign="middle">
      <Grid.Column floated="left">
        <Image src={logo} size="huge" />
      </Grid.Column>
      <Grid.Column>
        <Header as="h4" style={{ fontSize: "2em" }}>
          What makes meat Halal?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          The animal or poultry has to be slaughtered in the ritual way known as
          Zibah or Zabihah. See the list below for additional details.
        </p>
        <List>
          <List.Item>
            Animals are required to be alive and healthy at the time of
            slaughter, since carrion is forbidden and, jugular vein, carotid
            artery and windpipe have to be severed by a razor sharp knife by a
            single swipe, to incur as less a pain as possible.
          </List.Item>
          <List.Item>
            All the flowing blood (al- An`am 6:145) must be drained out of the
            carcass, as blood is forbidden
          </List.Item>
          <List.Item>Swine flesh is also forbidden</List.Item>
          <List.Item>
            Forbidden is an animal that has been killed by strangling or by a
            violent blow, or by a headlong fall
          </List.Item>
        </List>
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
