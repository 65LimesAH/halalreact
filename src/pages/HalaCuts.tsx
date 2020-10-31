import React from "react";
import { Grid, Header, Image, Segment, Placeholder } from "semantic-ui-react";
import MenuPricingTableBeef from "../components/Menu/Beef";
import MenuPricingTableChicken from "../components/Menu/Chicken";
import MenuPricingTableGoatLamb from "../components/Menu/Goat_Lamb";
import Footer from "../components/Footer/Footer";
import HalalHeader from "../components/Header/Header";
import MarketImage from "../images/MarketMenu.png";
import TacoMenu from "../images/TacoMenu.png";

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
        <Header as="h4">Coming Soon!</Header>
      </Grid.Row>
      <Grid.Row columns={3} textAlign="center">
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer></Footer>
  </Segment>
);
export default HalaCuts;
