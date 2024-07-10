import { MouseEvent } from "react";

type ButtonType = {
    handleClick: (event: MouseEvent<HTMLButtonElement> , id:number)=>void
}

const Button = (props:ButtonType) => {
    return <button onClick={event => props.handleClick(event , 20)}>Click</button>
};

export default Button;