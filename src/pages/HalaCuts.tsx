import React from 'react'
import {
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'
import logo from "../images/logo2.0.png"
import MenuPricingTableBeef from "../components/Menu/Beef"
import MenuPricingTableChicken from "../components/Menu/Chicken"
import MenuPricingTableGoatLamb from "../components/Menu/Goat_Lamb"
import Footer from "../components/Footer/Footer"
import HalalHeader from "../components/Header/Header"
import MarketImage from "../images/MarketMenu.png"


const HalaCuts = () => (
    <Segment vertical style={{ background: "#3A3A3C", }}>
        <HalalHeader></HalalHeader>
        <Grid container columns={2} stackable verticalAlign='middle' style={{ background: "white", }}>
            <Grid.Row>
                <Grid.Column floated='left'>
                    <Image src={logo} size='huge' />
                </Grid.Column>
                <Grid.Column >
                    <Header as='h4' style={{ fontSize: '2em' }}>
                        What makes meat Halal?
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        The animal or poultry has to be slaughtered in the ritual way known as Zibah or Zabihah. See the list below for additional details.
                    </p>
                    <List>
                        <List.Item>Animals are required to be alive and healthy at the time of slaughter, since carrion is forbidden and, jugular vein, carotid artery and windpipe have to be severed by a razor sharp knife by a single swipe, to incur as less a pain as possible.
                        </List.Item>
                        <List.Item>All the flowing blood (al- An`am 6:145) must be drained out of the carcass, as blood is forbidden
                        </List.Item>
                        <List.Item>Swine flesh is also forbidden
                        </List.Item>
                        <List.Item>Forbidden is an animal that has been killed by strangling or by a violent blow, or by a headlong fall
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid container stackable textAlign="center" verticalAlign='top' style={{ background: "white", }}>
            <Grid.Row  columns={1}>
                <Grid.Column >
                    <Image src={MarketImage} centered/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Header as='h2'>
                        Beef
                </Header>
                    <MenuPricingTableBeef></MenuPricingTableBeef>
                </Grid.Column>
                <Grid.Column >
                    <Header as='h2' >
                        Chicken
                </Header>
                    <MenuPricingTableChicken></MenuPricingTableChicken>
                </Grid.Column>
                <Grid.Column>
                    <Header as='h2' >
                        Goat and Lamb
                </Header>
                    <MenuPricingTableGoatLamb></MenuPricingTableGoatLamb>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Footer></Footer>
    </Segment>

)
export default HalaCuts