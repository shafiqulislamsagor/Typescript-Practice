import React from "react";

type FormType = {
    name: string,
    handleFrom: (event:React.FormEvent<HTMLFormElement>)=> void
}

const Form = (props:FormType) => {
    return (
        <>
            <form onSubmit={props.handleFrom}>
                <input type="text" className="border text-black" name={props.name}/>
                <button type="submit" className="py-2 px-3 border rounded-lg">Submit</button>
            </form>
        </>
    );
};

export default Form;