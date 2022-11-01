import Card from "./Card";
import React from "react";
// import { robots } from "./Robots";

const CardCreator = ({robots}) =>{
    return (
        <div>
        {robots.map(robot =>
            <Card key={robot.id} id={robot.id}  name={robot.name} email={robot.email} />
        )}
        </div>
    );
}

export default CardCreator;