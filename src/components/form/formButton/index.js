import React from 'react'
import classnames from 'classnames'
import './formButton.css'


const FormButton = ({ secondary, children, ...props }) => (
    <button {...props} className={classnames('form-button', {'form-button--secondary': secondary})}>
        {children}
    </button>
)

export default FormButton