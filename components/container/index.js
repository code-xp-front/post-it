import React from 'react'
import './container.css'


const Container = ({ className, children }) => (
    <main className={['container', className].join(' ')}>
        {children}
    </main>
)

export default Container