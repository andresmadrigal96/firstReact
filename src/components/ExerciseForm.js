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

class ExerciseForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault()//this method is created if you do not want to see a reload on the website
        console.log(this.state)
    }

    render(){
        const { onChange, form } = this.props
        return (
            <div className="container mt-5">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="tittle" 
                        name="tittle"//name will help us to identify an object inside the DOM
                        onChange={onChange}
                        value={form.tittle}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={onChange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={onChange}
                            value={form.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary mt-3"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }
}

export default ExerciseForm