/*
this is a component that I can use lots of times to create similar things
*/
import React from 'react'
import './styles/Card.css'
import circlesImg from '../images/circles.png'
//background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);

class Card extends React.Component{
    /*
    constructor(props){
        super(props)
        this.state = {
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: this.props.img
            })
        }, 5000)
    }*/

    render(){
        const { tittle, description, img, leftColor, rightColor } = this.props//this is to work in an easier way, so you just need to type this if you do not want to type lots of this.props
        return (
            <div className="card mx-auto Fitness-Card mt-3"
            style={{
                backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="topp">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className=""/>
                        </div>
                        <div className="col-6 Fitness-Card-info">
                            <h1>{tittle}</h1>
                            <p className="tam">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card