import React from 'react'
import {useState} from 'react'

const About = (props) => {
    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

  //   const [BtnText,setBtnText]=useState('Enable Dark Mode')

  //  const toggleStyle=()=>{
  //   if(myStyle.color==='black'){
  //       setMyStyle({
  //           color:'white',
  //           backgroundColor:'black',
  //           border: '1px solid white'
  //       })
  //       setBtnText("Enable Light Mode");
  //   }
  //   else{
  //       setMyStyle({
  //           color:'black',
  //           backgroundColor:'white',
  //           border: '1 px solid black'
  //       }

  //       )
  //       setBtnText("Enable Dark Mode");
        
  //   }
  //  }

    let myStyle={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'#989898':'white', 
   
    }

    let mystyleheading={
     color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'? 'black':'white',
    }

   






  return (
<>
<div className="container" >
<h1 className="my-3 display-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
<div class="accordion" id="accordionExample ">
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyleheading}>
       <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 



      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyleheading}>
      <strong>Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyleheading}>
      <strong>Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
       
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.



      </div>
    </div>
  </div>
</div>
</div>


{/* <div className='container my-3'>
    <button type="button" className="btn btn-primary" onClick={toggleStyle}>{BtnText}</button>
</div> */}
 </>
  )
}

export default About
