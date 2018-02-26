import React from "react"
import Navbar from "../navbar"
import Container from "../container"


const Layout = ({ children, ...props }) => (
    <React.Fragment>
        <Navbar />
        <Container {...props}>
            {children}
        </Container>
    </React.Fragment>
)

export default Layout