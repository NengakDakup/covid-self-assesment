import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import doctor from '../assets/svgs/doctor.svg'
// import { config } from '../config'



class Home extends Component {
  render(){
    return (
      <div className="container pt-5">
        <h2 className="text-center font-weight-bold">COVID 19 SELF ASSESMENT</h2>
        <div className="container-fluid p-4 text-center">
          <img src={doctor} alt="doctor" style={{width: '200px', height: 'auto'}}/>
          <p className="pt-2">
          Take this self-assessment if you think you were exposed to COVID-19 (novel coronavirus) or have symptoms.<br></br> 
          You’ll get information on what to do next.
          </p>
          <p>
            You can also take it on behalf of someone else.
          </p>
          <div>
            <Link className="btn btn-success" to='/assesment'>
              Start Assesment
            </Link>
          </div>
        </div>
        
      </div>
      );
  }
}

export default Home;
