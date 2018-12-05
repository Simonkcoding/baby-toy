import React, { Component } from 'react'
import './box.css'
import { Collapse } from 'reactstrap'
import api from '../../../ultis/api';

export default class toyBox extends Component {
    state = {
        toy: this.props.toy,
        isCollapse: false,
        targetBaby: []
    }

    checkBaby = () => {
        this.setState({ targetBaby: this.props.baby }, () => console.log(this.state.targetBaby))
    }



    handleOnClick = () => {
        this.setState({
            isCollapse: !this.state.isCollapse
        })
        this.checkBaby()
    }

    sendToy2Baby = (e) => {
        e.preventDefault()
        let babyid = this.state.targetBaby._id
        let toyid = this.state.toy._id
        let query = {
            babyid,
            toyid
        }
        console.log(query)
        api.giveToy2Baby(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.setState({
            isCollapse: !this.state.isCollapse
        })
    }

    render() {
        return (
            <div className="img-div"
            >
                <img src={this.state.toy.imgurl}
                    onClick={this.handleOnClick} />
                <Collapse isOpen={this.state.isCollapse}>
                    <div className='toy-form'>
                        {(this.state.targetBaby.length == 0) ? (<p>Please find a baby</p>)
                            : (
                                <div>
                                    <p>Send this present to:</p>{this.state.targetBaby.name}
                                    <br />
                                    <button className='btn'
                                        onClick={this.sendToy2Baby}
                                    >Send</button>
                                </div>
                            )}

                    </div>
                </Collapse>
            </div>
        )
    }
}
