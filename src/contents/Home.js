import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/felix2.png';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>

                <ReactTypingEffect className="typingeffect" staticText={["Hi, my name is Felix Ordonez. I like making things and I'm sometimes funny."]} speed={100} />

                <Social />
            </div>
        )
    }
}

export default Home