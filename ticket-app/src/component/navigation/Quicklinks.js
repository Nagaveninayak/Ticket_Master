import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Quicklinks(props){
    // console.log('Quicklinks', props) //access to history, match....
    return(
        <div>
            <Link to = "/">home</Link>
        </div>
    )
}

export default withRouter(Quicklinks)