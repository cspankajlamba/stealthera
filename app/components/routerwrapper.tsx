import React from "react";

const ReactWrapper = ({path, component:Component}) =>{
    const currentPath = window.location.pathname;
    if(currentPath === path){
        return  <Component/>;
    }
    return null;    
};

export default ReactWrapper;