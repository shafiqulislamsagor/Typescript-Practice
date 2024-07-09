type PersonService = {
    person:{
        fastName: string,
    lastName: string,
    }
}
const Person = (props:PersonService) => {
    return (
        <div>
            This is person name {props.person.fastName} {props.person.lastName}
        </div>
    );
};

export default Person;