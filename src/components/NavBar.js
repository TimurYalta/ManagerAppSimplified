import React from 'react';
// import { Link } from 'react-router-dom';
import {QUESTION_TYPES} from '../constants/Constants';
import {Link} from 'react-router-dom';
// import './style.scss';

class NavBar extends React.Component {
    render(){
        return (
            <div style={{display:'flex', justifyContent:'space-between', width:'100%' }}>
                <button><Link to='/CreateTest'>{"Create Test"}</Link></button>
                <button><Link to='/'>{"Test List"} </Link></button>
                <button><Link to='/Program'>{"Create Program"} </Link></button>
                <button><Link to='/ProgramList'>{"Program List"} </Link></button>
                <button><Link to='/CandidateList'>{"Candidate List"} </Link></button>
                <button><Link to='/Candidate'>{"Candidate Sample"} </Link></button>
            </div>
        );
    }
}
export default NavBar;