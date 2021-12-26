import { useState } from 'react';
import './App.css';
import AppSearch from './component/AppSearch/AppSearch';
import Navbar from './component/Navbar/Navbar';
import WebImage from './component/WebImage/WebImage';

function App() {
  const [urlValue , setUrlValue ] = useState('');
  return (
    <div className="App">
      <Navbar/>
      <AppSearch setUrlValue={setUrlValue}/>
      <WebImage urlValue = {urlValue}/>
    </div>
  );
}

export default App;
