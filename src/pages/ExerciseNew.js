/*import React from 'react'

class ExerciseNew extends React.Component {

    handleClick = () => {
        console.log(this)
    }
    render(){
        return (
            <button onClick={this.handleClick} className="btn btn-primary">an old class
                Submit
            </button>
        )
    }
}

/*class ExerciseNew extends React.Component {
    render(){
        return 'ExerciseNew'this is a good way to know if it is working
    }
}

export default ExerciseNew*/

import React from 'react'
import ExerciseForm from '../components/ExerciseForm.js'
import Card from '../components/Card.js'

class ExerciseNew extends React.Component {

    state = {
        form: {
            tittle: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        }
    }

    handleChange = e => {
        /*
        let partialState = {} //an object
        partialStat[e.target.name] = e.target.value 
        this.setState(partialStates)
        */
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value//thi is to put the value in the object
            }
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm 
                        onChange={this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseNew