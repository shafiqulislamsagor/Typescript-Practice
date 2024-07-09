type GreetProps = {
    name: string ,

}

const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2 className="text-2xl text-lime-500">Wellcome {props.name} ! You have 10 unread message.</h2>
            <p>Hi i am a students</p>
        </div>
    );
};

export default Greet;