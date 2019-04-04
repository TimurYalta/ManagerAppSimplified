import React from 'react';
// import { Link } from 'react-router-dom';
import {QUESTION_TYPES} from '../constants/Constants';
import {Link} from 'react-router-dom';
// import './style.scss';

class NavBar extends React.Component {
    render(){
        return (
            <div style={{display:'flex', justifyContent:'space-between', width:'100%' }}>
                <button><Link to='/Test'>{"Create Test"}</Link></button>
                <button><Link to='/TestList'>{"Test List"} </Link></button>
                <button><Link to='/Program'>{"Create Program"} </Link></button>
                <button><Link to='/ProgramList'>{"Program List"} </Link></button>
                <button><Link to='/CandidateList'>{"Candidate List"} </Link></button>
                <button><Link to='/Candidate'>{"Candidate Sample"} </Link></button>
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
                <button><Link to='/'>{"User page"} </Link></button>
>>>>>>> Stashed changes
=======
                <button><Link to='/UserPage'>{"User page"} </Link></button>
>>>>>>> b57713e41427ca45a64314125c9d206a328c7ca8
            </div>
        );
    }
}
export default NavBar;