import React, { useState } from "react";


const TrafficLight = () => {

    const [color, setColor] = useState("")

    const [colors, setColors] = useState (["red", "yellow", "green", "purple"])

    const SetColor = (LightColor) =>{
        
        return <div onClick={()=>setColor(LightColor)} className={color==LightColor?"rounded-circle "+ LightColor+"-light active":"rounded-circle "+LightColor+"-light"}>&nbsp;</div>
     }

    function ChangeColor () {
        var index = colors.indexOf(color)
        if (index == (colors.length-1)){
            setColor(colors[0])
        } else {
            setColor(colors[index + 1])
        }
    }

    function removePurple (){
        let tempArr = [...colors]
        if (colors.length == 4){
            tempArr.splice(3, 1)
            setColors(tempArr)
        } else {
            setColors(["red", "yellow", "green", "purple"])
        }
    }


    return (
    <div className="d-flex flex-column align-items-center mt-2">
        <div className="traffic-post">
        </div>
        <div className="light-box rounded">
        {
            colors.map (SetColor)
        }
        </div>
        <div>
        <button onClick={()=>removePurple ()} className="btn btn-primary mt-3 mx-1">Add/Remove Purple</button>
        <button onClick={()=>ChangeColor ()} className="btn btn-secondary mt-3 mx-1">Next Color</button>
        </div>
    </div>

    
)}


export default TrafficLight;