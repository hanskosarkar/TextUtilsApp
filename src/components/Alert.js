import React from 'react'

function Alert(props) {

    return (
        <div className="h-12">
           { props.alert && <div className="alertBox text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold ">{props.alert.type}{props.alert.msg}</strong> 
            </div> }
        </div>
        
    )
}

export default Alert
 