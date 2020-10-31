import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import MenuPricingTableBeef from "../components/Menu/Beef";
import MenuPricingTableChicken from "../components/Menu/Chicken";
import MenuPricingTableGoatLamb from "../components/Menu/Goat_Lamb";
import Footer from "../components/Footer/Footer";
import HalalHeader from "../components/Header/Header";
import MarketImage from "../images/MarketMenu.png";
import TacoMenu from "../images/TacoMenu.png";
import TacoCardGroup from '../components/Menu/Tacos';
import TacoSidesCardGroup from '../components/Menu/Sides';
const HalaCuts = () => (
  <Segment vertical style={{ background: "#3A3A3C" }}>
    <HalalHeader></HalalHeader>
    <Grid
      container
      stackable
      textAlign="center"
      verticalAlign="top"
      style={{ background: "white" }}
    >
      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src={MarketImage} centered />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Header as="h2">Beef</Header>
          <MenuPricingTableBeef></MenuPricingTableBeef>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2">Chicken</Header>
          <MenuPricingTableChicken></MenuPricingTableChicken>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2">Goat and Lamb</Header>
          <MenuPricingTableGoatLamb></MenuPricingTableGoatLamb>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Image src={TacoMenu} centered />
      </Grid.Row>
      <Grid.Row>
        <Header
          as="h1"
          color="orange"
          content="MAINS"
          subheader="Ask about our Family Boxes starting at $27.00!"
          dividing
        />
      </Grid.Row>
      <TacoCardGroup></TacoCardGroup>
      <Grid.Row style={{ marginTop: "20px", }}>
        <Header as="h1" dividing>Sides and Starters</Header>
      </Grid.Row>
      <TacoSidesCardGroup></TacoSidesCardGroup>
    </Grid>
    <Footer></Footer>
  </Segment>
);
export default HalaCuts;
