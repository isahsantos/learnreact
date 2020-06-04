import React, {cloneElement} from "react"
export default props => {
    return (
        <span>
         { React.Children.map(props.children,(chield,i) =>{
             return cloneElement (chield, {...props, key:i})
         })} 
        </span>

    )

}