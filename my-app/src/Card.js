import './css/App.css';
import avatar from './resource/avatar.png';
import line from './resource/line.png';
import React,{useState,useEffect} from 'react';
function Card() {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetch("http://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard")
    .then(response => response.json())
    .then((data) => {
      setOverview(data);
    });
  });

  function image(type){
    return type === 'calculation' ? line : avatar;
  }
  function renderCards(){
    return overview.map((data,index)=>{
      return (
        <div className="cards" key={index}>
        <img className="cards-img" alt={image(data.type)} src={image(data.type)} width="50" height="50"/>
        <div>
          <label className="nav-text cards-text-bold">{data.line1}</label><label className="nav-label margin-10">{data.line2}</label>
          <label className="display-block nav-label">{data.title}</label>
        </div>
      </div>
      )
    })
  }

  return (
    <div className="display-flex">
      {renderCards()}  
    </div>
  );
}

export default Card;
