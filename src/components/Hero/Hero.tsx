import React from 'react'
import { Container, Segment, Image } from 'semantic-ui-react'
import logo from "../Hero/Images/logo2.0.png"
import background from '../Hero/Images/background.jpeg'

const Hero = ()=> (
<Segment text className="Hero" style={{background: `url(${background})`, height:"100vh", width:"auto", backgroundSize:"cover", backgroundRepeat:"no-repeat",}} >
    <Container textAlign="center" >
        <Image src={logo} alt="logo" fluid style={{maxHeight:"75vh", width:"auto", marginLeft:"auto", marginRight:"auto",}}/>
    </Container>
</Segment>
)
export default Hero