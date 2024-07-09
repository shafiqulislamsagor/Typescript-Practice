import Greet from "./Greet";
import Heading from "./Heading";
import Oscar from "./Oscar";

type StatusProps = {
    status:'success' | 'error' | 'loading'
}
const Status = (props:StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'Loading...';
    }
    else if(props.status === 'success'){
        message = 'Data fetched successfully!';
    }
    else if(props.status === 'error'){
        message = 'Error fetching data';
    }
    return (
        <div>
            <h2>Status - {message}</h2>
            <Heading>Placeholder Text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicpario!</Heading>
            </Oscar>
            <Greet  studentBoolean  name="Mustakim"/>
        </div>
    );
};

export default Status;