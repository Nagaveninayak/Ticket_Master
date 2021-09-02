import React from 'react'
import {connect} from 'react-redux'

function Account(props){
    // console.log('account', props) //access to history, match
    return(
        <div>
            <h2>Users Info</h2>
            {/* {console.log(props)} */}
            <h4>{props.user.username}</h4>
            <h4>{props.user.email}</h4>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Account)