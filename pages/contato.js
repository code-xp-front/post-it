import React from 'react'
import withRedux from "next-redux-wrapper";
import Layout from '../components/layout'
import makeStore from '../store'


const Contact = () => (
    <Layout>
        <h1>Contato</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur vitae augue mi. Nulla ligula diam, dignissim et dapibus nec, 
            dictum nec ipsum.
            Morbi eleifend eget velit a convallis
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur vitae augue mi. Nulla ligula diam, dignissim et dapibus nec, 
            dictum nec ipsum.
            Morbi eleifend eget velit a convallis
        </p>
    </Layout>
)


export default withRedux(makeStore)(Contact)