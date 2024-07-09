type GreetProps = {
    name: string ,
    messageCount: number,
    studentBoolean: boolean 
}

const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2 className="text-2xl text-lime-500">Wellcome {props.name} ! You have {props.messageCount} unread message.</h2>
            <p className="text-xl text-gray-600 font-medium">Hi i am a {props.studentBoolean ? 'student' : 'teacher'}</p>
        </div>
    );
};

export default Greet;