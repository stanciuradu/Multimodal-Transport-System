// ButtonSubmit este o componenta simpla reutilizabilă
import React from 'react';
import '../components/ButtonSubmit.scss';

function ButtonSubmit(props) {
    const{children,...otherProps}=props;
    return (
        <div>
            <button type='button' className='custom-button' {...otherProps}>
                {children}
            </button>
        </div>
    );
}

export default ButtonSubmit;
