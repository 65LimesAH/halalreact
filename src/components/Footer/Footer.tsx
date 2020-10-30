import React from 'react'
import {
  Grid,
  Header,
  Icon,
  Image
} from 'semantic-ui-react'
import LogoHor from '../Footer/Images/logo2.0hor.png'

const Footer = () => (

  <Grid container divided textAlign="center" stackable style={{ background: "white", }}>
    <Grid.Row>
      <Grid.Column width={7}>
        <Header as='h4' >
          <Image src={LogoHor} alt='Halal Cuts Logo' style={{ height:'7vh', width:'auto'}}/>
      </Header>
        <p> Created with <Icon name='heart outline' circular color={"green"} /> by 65 Limes powered by <Icon name='react' circular color={"blue"} /></p>
      </Grid.Column>
    </Grid.Row>
  </Grid>

)
export default Footer