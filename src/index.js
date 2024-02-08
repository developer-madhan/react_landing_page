import React from "react";
import ReactDOM from "react-dom";
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
      img='./Capture1.PNG'
      title='About the company'
      description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
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

ReactDOM.render(<Body/>,document.getElementById('root'));