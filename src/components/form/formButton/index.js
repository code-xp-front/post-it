import React from 'react'


const FormButton = ({ children, ...props }) => (
    <button {...props}>
        {children}
    </button>
)

export default FormButton