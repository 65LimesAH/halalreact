import React from 'react'
import {
    Grid,
    Header,
    Icon


} from 'semantic-ui-react'

const Footer = () => (

<Grid container divided textAlign="center" stackable style={{background:"white",}}>
  <Grid.Row>

    <Grid.Column width={7}>
      <Header as='h4' >
        Footer Header
      </Header>
      <p> Created with <Icon name='heart outline' circular color={"green"}/> by 65 Limes powered by <Icon name='react' circular color={"blue"}/></p>
    </Grid.Column>
  </Grid.Row>
</Grid>

)
export default Footer