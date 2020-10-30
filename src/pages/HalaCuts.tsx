import React from 'react'
import {
    Container,
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


const HalaCuts = () => (
    <Segment vertical style={{ padding: '5em 0em', background:"black", }}>
        <Container style={{ background:"white"}}>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column floated='left' width={7}>
                        <Image src={logo} size='huge' />
                    </Grid.Column>
                    <Grid.Column width={9}>
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
        </Container>
        <Container textAlign="center" style={{ background:"white"}}>
            <Grid container textAlign="center" verticalAlign='top'>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h2'>
                            Beef
                        </Header>
                        <MenuPricingTableBeef></MenuPricingTableBeef>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h2' >
                            Chicken
                        </Header>
                        <MenuPricingTableChicken></MenuPricingTableChicken>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h2' >
                            Goat and Lamb
                        </Header>
                        <MenuPricingTableGoatLamb></MenuPricingTableGoatLamb>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        <Container style={{ background:"white", marginTop:"10px"}}>
            <Footer></Footer>
        </Container>
 
    </Segment>

)
export default HalaCuts