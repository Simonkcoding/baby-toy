import React from 'react'
import './box.css'
export default function babyBox(props) {
    return (
        <div>
            <div className='box box-img'>
                <img src={props.baby.imgurl} height='100px' />
            </div>
            <div className='box box-text'>
                <p>Name: {props.baby.name}</p>
                <p>Love: {props.baby.love}</p>
            </div>
            <div className='box box-ctrl'>
                <button className='btn btn-danger'
                onClick={()=>props.delete(props.baby._id)}
                >DELETE</button><br/>
            </div>
            <div className='toy-thumbnail'>
                {(props.baby.toy.length == 0) ? (
                    <p>no toys for this baby yet</p>
                ): (props.baby.toy.map(toy => (
                        <div className='mini-toy' key={toy.name}>
                            <img src={toy.imgurl} width='50px' height='50px' 
                            // onClick={()=>props.deletethumbnail(props.baby._id)}
                            />
                        </div>
                    )))}
            </div>
        </div >
    )
}
