import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises.js'
import ExerciseNew from '../pages/ExerciseNew.js'
import NotFound from '../pages/NotFound.js'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises} /> 
            <Route exact path="/exercise/new" component={ExerciseNew} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
/*
function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises} /> 
                <Route exact path="/exercise/new" component={ExerciseNew} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )//exact path is when yoy have similar path names, so it will help
}old way to do it
*/
export default App