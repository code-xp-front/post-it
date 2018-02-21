import React from 'react'


// export default props => React.createElement('section', props)

// const Section = props => React.createElement('section', props)

const Section = ({ children, ...props}) => (
    <section {...props}>
        {children}
    </section>
)

export default Section