import React from 'react'
import Head from 'next/head'
import Navbar from '../navbar'
import Container from '../container'
import './layout.css'
import 'normalize.css'


const Layout = ({ children, ...props }) => (
    <React.Fragment>
        <Head>
            <title>Post-It</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <Navbar />
        <Container {...props}>
            {children}
        </Container>
    </React.Fragment>
)

export default Layout