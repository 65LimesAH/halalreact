import React from 'react'
import {
    Grid,
    Header,


} from 'semantic-ui-react'

const Footer = () => (

        <Grid divided textAlign="center" stackable>
          <Grid.Row>

            <Grid.Column width={7}>
              <Header as='h4' >
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

)
export default Footer