import React from 'react'
import {Heading, Button} from '@chakra-ui/react'
import HeroImg from "../static/charlesdeluvio-FK81rxilUXg-unsplash.jpg"
function Home() {
  return (
    <div id="home_container">
        <div>
            <div id="home_header" class="left_home_containers">
                <Heading size='lg' fontSize='50px'>
                    Shop Everything You Need!
                </Heading>
            </div>
            <div id="home_description" class="left_home_containers">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="home_button" class="left_home_containers">
                <Button colorScheme='teal' variant='solid'>
                    Shop Now!
                </Button>
            </div>
        </div>
        <div>
            <img src={HeroImg} alt="home_image"/>
        </div>
    </div>
  )
}

export default Home