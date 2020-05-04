import React, {Component} from 'react'

class List extends Component {
    render(){
        const {data} = this.props;
        return (
            <div className="text-left">
                {data.map(item => <h5>{item.title}</h5>)}
            </div>
        )
    }
}

export default List