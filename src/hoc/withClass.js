import React from 'react';

const withClass = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent {...props} />
        </div>
    )
}

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );
export default withClass;