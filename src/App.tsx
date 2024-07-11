import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Form from "./components/Form";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LoggedIn from "./components/state/LoggedIn";
import Status from "./components/Status";

function App() {
  const personValue: { fastName: string; lastName: string } = {
    fastName: "Sagor",
    lastName: "Hasan",
  };

  const personlist: { firstName: string; lastName: string }[] = [
    { firstName: "Sagor", lastName: "hasan" },
    { firstName: "razu", lastName: "hasan" },
    { firstName: "rased", lastName: "hasan" },
  ];
  const handler = (event: any, id: number): void => {
    console.log("button clicked", id, event);
  };

  const named: string = 'name'

  const FormHandleClick = (event:any):void =>{
    event.preventDefault();
    console.log(event.target.named)
  }
  return (
    <>
      <div className="hidden">
        <Greet messageCount={10} name="sagor" studentBoolean />
        <Person person={personValue} />
        <PersonList list={personlist} />
        <Status status="loading" />
        <Status status="success" />
        <Status status="error" />
        <Button handleClick={handler} />
        <Input value="" handleChange={(event) => console.log(event)} />
        <Form name={named} handleFrom={FormHandleClick}/>
        <Container styles={{background:"black" , padding:'4px 5px' , color:'white'}} Twd="p-2 border"/>
        <LoggedIn/>
      </div>
      <div>
      </div>
    </>
  );
}

export default App;
