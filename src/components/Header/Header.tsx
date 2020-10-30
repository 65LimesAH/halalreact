import React from 'react'
import { Grid, Icon, } from 'semantic-ui-react'

const HalalHeader = () => (
<Grid container columns={1}  style={{ background: "white", }} stackable >
    <Grid.Row textAlign='right'>
        <Grid.Column >
                <Icon name='facebook' circular color={"orange"} size='large'/>
                <Icon name='instagram' circular color={"orange"} size='large' />
                <Icon name='twitter' circular color={"orange"} size='large' />
                <Icon name='phone square' circular color={"orange"} size='large'/>
                <Icon name='map marker alternate' circular color={"orange"} size='large'/>
        </Grid.Column>
    </Grid.Row>
</Grid>
)
export default HalalHeader