import './App.css';
import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';

function App() { /* this is the root component */
  return (
    <div className="App">
      <Contacts name="Collin" age="26" school="North Central" graduationYear="2013" />
      <p>----------------------------</p>
      <State />
    </div>
  );
}

export default App;
