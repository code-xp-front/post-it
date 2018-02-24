import React from 'react'
import './container.css'


const Container = ({ className, children }) => (
    <article className={['container', className].join(' ')}>
        {children}
    </article>
)

export default Container