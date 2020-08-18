import React from 'react'
import { Link } from 'react-router-dom' //this is much better than <a /> because the page will not refresh

const Add = () => (
    <div className="mt-5 mb-5">
        <Link to="/exercise/new">
            <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"/>
        </Link>
    </div>
)
/*
function Add(props){
    return(
        <div className="mt-5 mb-5">
            <Link to="/exercise/new">
                <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"/>
            </Link>
        </div>
    )
}this is an old way to do it*/

export default Add