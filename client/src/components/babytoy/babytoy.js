import React, { Component } from 'react'
import API from '../../ultis/api'
import './babytoy.css'
import Babybox from './box/babyBox'
import Toybox from './box/toyBox'
export default class babytoy extends Component {
    state = {
        babies: [],
        toys: [],
        singleBaby: [],
        searchName: "",
        name: "",
        love: "",
        imgurl: ""
    }

    componentDidMount() {
        this.loadAllBabies()
        this.loadAlltoys()
    }

    loadAllBabies = () => {
        API.getAllBabies()
            .then(res => (
                this.setState({ babies: res.data },
                    () => console.log(JSON.stringify(this.state.babies)))
            ))
            .catch(err => console.log(err))
    }

    loadAlltoys = () => {
        API.getAllToys()
            .then(res => (
                this.setState({ toys: res.data },
                    () => console.log(JSON.stringify(this.state.toys)))
            ))
            .catch(err => console.log(err))
    }

    searchHandler = (e) => {
        e.preventDefault()
        let babyName = this.state.searchName;
        API.findBabyByName(babyName)
            .then(res => (
                (!res.data) ?
                    (this.setState({ singleBaby: [] })) :
                    (this.setState({ singleBaby: res.data },
                        () => console.log((this.state.singleBaby))))
            ))
            .catch(err => console.log(err))
    }

    addHandler = (e) => {
        e.preventDefault()

        let newBaby = {
            name: this.state.name,
            love: this.state.love,
            imgurl: this.state.imgurl
        }

        API.addNewBaby(newBaby)
            .then(res => (
                this.loadAllBabies()))
            .catch(err => console.log(err))
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    deleteHandler = (id) => {
        API.deleteBabyById(id)
            .then(res => (
                this.loadAllBabies()))
            .catch(err => console.log(err))
        this.setState({ singleBaby: [] })
    }

    babyOnClickhandler = (name) => {
        this.setState({ searchName: name },
            () => {
                let babyName = this.state.searchName;
                API.findBabyByName(babyName)
                    .then(res => (
                        (!res.data) ?
                            (this.setState({ singleBaby: [] })) :
                            (this.setState({ singleBaby: res.data },
                                () => console.log((this.state.singleBaby))))
                    ))
                    .catch(err => console.log(err))
            })
    }

    render() {
        return (
            <div id='wrapper'>
                <div className='individual-baby'>
                    <h3>Baby info</h3>
                    <hr />
                    <div className='row baby-ctrl baby-find'>
                        <div className='big-card-div baby-find-form'>
                            <form className='search'>
                                <p>Find a baby:</p>
                                <label>Name:</label>
                                <input type='text' name='searchName'
                                    onChange={this.onChange}
                                /><br />
                                <button className='btn'
                                    onClick={this.searchHandler}
                                >Find</button>
                            </form>
                        </div>
                        <div className='big-card-div baby-find-show'>
                            {(this.state.singleBaby.length == 0) ? (
                                <p>Please enter a baby name</p>
                            ) : (
                                    <Babybox
                                        baby={this.state.singleBaby}
                                        delete={(id) => this.deleteHandler(id)}
                                        deletethumbnail={(id)=> this.deletethumbnailHandler(id)}
                                    />
                                )}
                        </div>
                    </div>
                </div>
                <div className='all-babies'>
                    <h3>All babies list</h3>
                    <hr />
                    <div className='row baby-ctrl baby-add'>
                        <div className='big-card-div baby-add-form'>
                            <form className='add'>
                                <p>Add a baby:</p>
                                <label>Name:</label>
                                <input type='text' name='name'
                                    onChange={this.onChange} /><br />
                                <label>Love:</label>
                                <input type='text' name='love'
                                    onChange={this.onChange} /><br />
                                <label>Image URL:</label>
                                <input type='text' name='imgurl'
                                    onChange={this.onChange} /><br />
                                <button className='btn'
                                    onClick={this.addHandler}
                                >Add</button>
                            </form>
                        </div>
                        <div className='big-card-div baby-add-show'>
                            {this.state.babies.map(baby => (
                                <div key={baby.name}
                                    className="card-div"
                                    onClick={() => {
                                        let name = baby.name
                                        this.babyOnClickhandler(name)
                                    }

                                    }
                                >
                                    <img src={baby.imgurl} width='150px' height='150px' />
                                    <p>Name: {baby.name}</p>
                                    <p>Love: {baby.love}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='toy-div'>
                    <h3>Toys</h3>
                    <hr />
                    {this.state.toys.map(toy => (
                      <Toybox
                      key={toy.name}
                      toy={toy}
                      baby={this.state.singleBaby}
                      />
                    ))}
                </div>
            </div>

        )
    }

}