import React from 'react'
import Card from './Card.js'

const ExerciseList = ({exercises}) => (
    <div>
        {
            exercises.map((exercise) => (//this is a cicle to read json objects
                
                <Card
                    key = {exercise.id} 
                    tittle = {exercise.title}
                    description = {exercise.description}
                    img = {exercise.img}
                    leftColor = {exercise.leftColor}
                    rightColor = {exercise.rightColor}
                />
                
            ))
        }
    </div>
)
/*
function ExerciseList(props){
    return(
        <div>
            {
                props.exercises.map((exercise) => (//this is a cicle to read json objects
                        return(
                            <Card 
                                tittle = {exercise.title}
                                description = {exercise.description}
                                img = {exercise.img}
                                leftColor = {exercise.leftColor}
                                rightColor = {exercise.rightColor}
                            />
                        )
                    ))
            }
        </div>
    )old way again
}*/

export default ExerciseList