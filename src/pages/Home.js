import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import doctor from '../assets/svgs/doctor.svg'
// import { config } from '../config'



class Home extends Component {
  navigate(route){
    this.props.history.push(route);
  }
  render(){
    return (
      <div className="container pt-5">
        <h2 className="text-center font-weight-bold">NIGER STATE COVID 19 MONITOR</h2>
        <div className="container-fluid p-4 text-center">
          <img src={doctor} alt="doctor" style={{width: '200px', height: 'auto'}}/>
          <p className="pt-2">
          Take this self-assessment if you think you were exposed to COVID-19 (novel coronavirus) or have symptoms.<br></br> 
          You’ll get information on what to do next.
          </p>
          <p>
            You can also take it on behalf of someone else.
          </p>
          <div className="row bg-success p-3 m-md-4 rounded">
            <div className="action-card col-md-3 mt-xs-4" onClick={() => this.navigate('/details')}>
              <div class="card">
                <div class="card-body font-weight-bolder">
                  Take Test <i className="fa fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="action-card col-md-3 mt-xs-4" onClick={() => this.navigate('/precautions')}>
              <div class="card">
                <div class="card-body font-weight-bolder">
                  Precations <i className="fa fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="action-card col-md-3 mt-xs-4" onClick={() => this.navigate('/statistics')}>
              <div class="card">
                <div class="card-body font-weight-bolder">
                  Statistics <i className="fa fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="action-card col-md-3" onClick={() => this.navigate('/help')}>
              <div class="card">
                <div class="card-body font-weight-bolder">
                  Get Help <i className="fa fa-arrow-right"></i>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      );
  }
}

export default Home;
