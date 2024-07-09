type NameConditionType = {firstName:string , lastName:string}

type personList = {
    list:NameConditionType[]
}


const PersonList = (props:personList) => {
    const list: NameConditionType[] = props.list
    return (
        <div>
            {list.map((person , id) => <h2 key={id}>{person.firstName} {person.lastName}</h2>)}
        </div>
    );
};

export default PersonList;