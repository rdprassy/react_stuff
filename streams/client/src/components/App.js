import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne =() =>{
    return <div>PageOne</div>
}

const PageTwo =() => {
    return <div>PageTwo
    <button> Click me</button>
    </div>
}


const App = () => {
    return (
        <div>App
         <BrowserRouter>
             <div>
                 <Route path="/" exact component={PageOne}/>
                 <Route path="/pageTwo" exact component={PageTwo}/>
             </div>



         </BrowserRouter>
        </div>
    );
}

export default App;