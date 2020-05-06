import React, {Component} from 'react'

import doctor from '../assets/svgs/doctor.svg'


class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            nameErr: false,
            phoneErr: false
        }
    }

    continue(){
        const {name, phone} = this.state;
        if(!name) {
            this.setState({nameErr: true})
        } else {
            this.setState({nameErr: false})
        }

        if(!phone || phone.length < 11) {
            this.setState({phoneErr: true})
        } else {
            this.setState({phoneErr: false})
        }

        if(!this.state.nameErr && !this.state.phoneErr){
            this.props.history.push(`/assesment?name=${name}&phone=${phone}`);
            
        }
    }

    render(){
        return (
            <div className="container pt-5">
                <h3 className="text-center font-weight-bold">Please We would like to know a litle about you!</h3>
                <div className="container-fluid p-4 text-center">
                <img src={doctor} alt="doctor" style={{width: '200px', height: 'auto'}}/>
                    <form className="col-lg-6 mx-auto mt-4">
                        <div className="form-group text-justify">
                            <input type="text" className={this.state.nameErr? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} id="exampleInputEmail1" placeholder="Enter Your Full Name" onChange={(e) => this.setState({name: e.target.value})}/>
                            {this.state.nameErr &&
                                <div className="invalid-feedback">
                                    Please Enter Your Name.
                                </div>
                            }
                        </div>
                        <div className="form-group text-justify">
                            <input type="number" className={this.state.phoneErr? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} id="exampleInputPassword1" placeholder="Phone Number" onChange={(e) => this.setState({phone: e.target.value})} />
                            {this.state.phoneErr &&
                                <div className="invalid-feedback">
                                    Please Enter a valid Phone Number.
                                </div>
                            }
                            <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
                        </div>
                    <button className="btn btn-primary" onClick={() => this.continue()} >Continue</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Details