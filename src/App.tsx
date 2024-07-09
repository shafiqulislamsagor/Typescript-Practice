import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personValue:{fastName:string ,lastName:string} = {
    fastName:'Sagor',
    lastName:'Hasan'
  }

  const personlist:{firstName:string,lastName:string}[] = [
    {firstName:'Sagor', lastName:'hasan'},
    {firstName:'razu', lastName:'hasan'},
    {firstName:'rased', lastName:'hasan'}
  ]
  return (
    <div className="App">
      <Greet messageCount={10} name='sagor' studentBoolean/>
      <Person person={personValue}/>
      <PersonList list={personlist}/>
    </div>
  );
}

export default App;
