import './App.css';
import {Hello} from './Hello'
import Welcome from './Welcome';
import Message from './Message'
import CompLifeCycle from './CompLifeCycle';
import Clock from './Clock';
import Test from'./Test'
import ConForm from './ConForm'
import Add from './Add';
import Formval from './Formval';

function App() {
  return (
    <div className="App">
      <Formval/>
      {/* <Add/> */}
      {/* <ConForm/> */}
      {/* <Test/> */}
      {/* <Clock/> */}
      {/* <CompLifeCycle/> */}
      {/* <Message/> */}
      {/* <Hello name='dev' role='web developer'><p>This is child props</p></Hello>
      <Hello name='himanshu' role='tester'><button>Submit</button></Hello>
      <Hello name='shrey' role='android developer'/>
      <Welcome name='Dev'/>
      <Welcome name='Shrey'/> */}
    </div>
  );
}

export default App;
