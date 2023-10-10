import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Christian'} lastName={'Turner'}  age={'22'} hairColor={'Brown'} />
      <PersonCard firstName={'Cat'} lastName={'Mur'}  age={'21'} hairColor={'Brown'} />
    </div>
  );
}

export default App;
