import PartOfSpeech from './Components/PartOfSpeech';
import SearchWord from './Components/SearchWord';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// use can chose to run the app - local / AWS stack
export const BASE_URL = 'http://localhost:3000';
// export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  console.log(BASE_URL);

  return (
    <div className="App">
      <h1 className="header">Dictionary</h1>

      <SearchWord />
      {/* <h2 className="animate">Loading</h2> */}
      <PartOfSpeech />
    </div>
  );
}

export default App;
