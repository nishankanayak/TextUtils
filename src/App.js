import {useState} from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode=()=>{
    if(mode==='light')
      {
        setMode("dark");
        document.body.style.backgroundColor='black';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
      }
  }

  return (
    <>
    <Navbar title="TextUtils" textAbout="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/*<About/>*/}
    <Textform heading="Enter your text to analyse" mode={mode} showAlert={showAlert}  />
    </>
  );
}

export default App;
