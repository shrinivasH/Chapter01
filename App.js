import React from "react";
import  ReactDOM  from "react-dom/client";


const Title= ()=>{
    return(
        <h1 id="h1" key="h1">
                Namaste React
        </h1>
    );
}
const HeaderComponent=()=>{
    return(
        <div>
            <Title></Title>
            <h2>Namaste React Functional Component</h2>
            <h2>This is h2 Tag</h2>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
