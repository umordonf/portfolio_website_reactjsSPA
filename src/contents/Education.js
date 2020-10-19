import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="B.sc Computer Science" where="University of Manitoba" to="May 2017" />
                <Widecard title="Diploma" where="Sisler High School" to="July 2009" />
            </div>
        )
    }
}

export default Education