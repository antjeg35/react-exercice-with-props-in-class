import React from 'react';

const userOutput = (props) => {
    const style ={
        backgroundColor:"yellow",
        font:"bold",
        border: '1px solid red',
        margin:'10px 100px'
    }
    return(
        <div
         style={style}>
            <p> {props.name} apprend React</p>
            <p> Je commence à être à l'aise</p>
        </div>
    )
}
export default userOutput;