import React from 'react'
import {Route ,Switch} from 'react-router-dom'
import Feedback from './feedback'

import Form from './form'
import NotFound from './notfound'
function SenPiper(){
    return (<>
    
        <Switch>
            <Route exact path="/"><Feedback/></Route>
            <Route exact path="/form" ><Form/></Route>
            <Route path="/*"><NotFound/></Route>
        </Switch>
    
    </>)
}

export default SenPiper;