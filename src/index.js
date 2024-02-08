import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const Body = () => {
  return (
    <div id="body">
      <Header />
      <Card
      className='section'
      img='.'
      />
      
    </div>
  );
};

const Header =()=>{
  return(
    <div className='header'>
      <span className='header-title' >
        This is top heading
      </span>
      <br/>
      <span className="header-text" >
        the second heading
      </span>
    </div>
  )
}

const Card =(props) =>{
  return(
    <div className={props.className} >
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt=''/>
      </div>
      <div className="big-div">
        <span className='div-title'>
          {props.title}
        </span>
        <br/>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  )
}