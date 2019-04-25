import React from 'react';
// import { Link } from 'react-router-dom';
import { QUESTION_TYPES } from '../constants/Constants';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {



    render() {
      return (
            <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', width: '80%', height: '140px' }}>
                <button className={'nv-bt'}><Link to='../Test'>{"Create Test"}</Link></button>
                <button className={'nv-bt'}><Link to='../TestList'>{"Test List"} </Link></button>
                <button className={'nv-bt'}><Link to='../Program'>{"Create Program"} </Link></button>
                <button className={'nv-bt'}><Link to='../ProgramList'>{"Program List"} </Link></button>
                <button className={'nv-bt'}><Link to='../CandidateList'>{"Candidate List"} </Link></button>
                <button className={'nv-bt'}><Link to='../Candidate'>{"Candidate Sample"} </Link></button>
                <button className={'nv-bt'}><Link to='../'>{"User page"} </Link></button>
            </div>
        );
    }
}
export default NavBar;
