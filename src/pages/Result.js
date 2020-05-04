import React, {Component} from 'react';

import doctor from '../assets/svgs/doctor.svg'
// import { config } from '../config'



class Result extends Component { 
  render(){
    return (
      <div className="container pt-5">
        <h2 className="text-center font-weight-bold">COVID 19 SELF Result</h2>
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
            <a className="btn btn-success" href='/assesment'>
              Start Again
            </a>
          </div>
        </div>
        
      </div>
      );
  }
}

export default Result;
