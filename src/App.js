//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const [color,setColor]=useState('light');
 
  const showAlert=(message)=>{
    setAlert({
      msg:message,
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  
  //To enable light and dark modes
  const toggleColorBlue=()=>{
    document.body.style.backgroundColor='#add8e6';
    setMode('primary')
    
    
   }

   const toggleColorRed=()=>{
    document.body.style.backgroundColor='#ffcccb';
    setMode('danger')
    
    
   }

   const toggleColorYellow=()=>{
    document.body.style.backgroundColor='#FFFFE0';
    setMode('warning')
    
    
   }
  
  const toggleMode=()=>{
    if(mode==='light'|| mode==='primary'|| mode==='danger' ||mode==='warning'){
        setMode('dark');
        document.body.style.backgroundColor='gray';
        showAlert("Dark mode is enabled")
        document.title='Text Utils-Dark Mode enabled'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled")
    }
  }


  //To enable colour modes

 
  
  
  
  
  
  
  
  
  
  return (
    <>

    <BrowserRouter>
      





      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleColorBlue={toggleColorBlue} toggleColorRed={toggleColorRed} toggleColorYellow={toggleColorYellow}/>
      <Alert alert={alert}/>
      <div className="container my-3">
    <Routes>
      < Route exact path="/about" element={<About mode={mode} />}/>
        
        
      
           <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>
           
            </Routes>
        
        
            </div>
            
     
      </BrowserRouter>
      

 






    
   {/*
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleColorBlue={toggleColorBlue} toggleColorRed={toggleColorRed} toggleColorYellow={toggleColorYellow}/> 
  <Alert alert={alert}/>
  < div className="container my-3">
  <Switch>
        <Route path="/">
          <TextForm heading="Enter the text to analyze"/>
          </Route>

        <Route path="/about">
          <About/>
        </Route>
        
        </Switch>
         
        </div>  
      
    </Router>
   
 
  

  {/*<TextForm heading="Enter the text to analyze"/>*/}
 
 
    </>
  );
}

export default App;
