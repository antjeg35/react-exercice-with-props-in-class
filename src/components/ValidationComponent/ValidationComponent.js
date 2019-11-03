import React from 'react';

const validationComponent = (props) => {
    let warning = "";
    if(props.count<5){
        warning = ( "text too short" )
    }

    return(
        <p>{props.count}{warning}</p>
    )
}
export default validationComponent;