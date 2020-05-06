import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import List from '../components/List'

import doctor from '../assets/svgs/doctor.svg'

class Question extends Component {
    render(){
        const {data, saveAnswer} = this.props;
        console.log(data);
        
        return (
            <div className="container-fluid p-4 text-center col-lg-6 mx-auto">
                <img src={doctor} alt="doctor" style={{width: '200px', height: 'auto'}}/>
                <h5 className="pt-5">
                    {data.text}
                </h5>
                {data.sub && <h4 className="text-disabled"><small class="text-muted">{data.sub}</small></h4>}

                {data.type === 'list' &&  <List data={data.list} />}

                <div className="pt-4">
                    <button className="btn btn-outline-success m-3" onClick={() => saveAnswer()}>Yes</button>
                    <button className="btn btn-outline-warning m-3" onClick={() => saveAnswer()}>No</button>
                </div>
                <div className="pt-5">
                    <Link to="/" className="btn btn-danger btn-sm">
                    Cancel Test
                    </Link>
                </div>
            </div>
        )
    }
}

export default Question