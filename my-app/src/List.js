import './App.css';
import avatar from './avatar.png';
import React,{useState,useEffect} from 'react';

function List() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://my-json-server.typicode.com/shripad-agashe/fake-api/students")
    .then(response => response.json())
    .then((data) => {
      setStudents(data);
    });
  },[]);

  function sort(isDecend){
    let newDataList = [];
      Object.assign(newDataList, students);
      newDataList.sort((a,b) =>{
        if(isDecend){
          if(parseInt(a.marks) < parseInt(b.marks)){
            return 1;
          }else if(parseInt(a.marks) > parseInt(b.marks)){
            return -1;
          }else{
            return 0
          }
        }else{
          if(parseInt(a.marks) > parseInt(b.marks)){
            return 1;
          }else if(parseInt(a.marks) < parseInt(b.marks)){
            return -1;
          }else{
            return 0
          }
        }
      })
      setStudents(newDataList)
  }
  function renderCells(){
    return students.map((student,index)=>{
      return (
        <li key={index}>
        <div className="list-first-div">
          <div className="list-div">
            <img className="cards-img" src={avatar} width="50" height="50"/>
            <label className="display-block nav-text cards-text-bold">{student.name}</label>
          </div>
          <label className="display-block nav-text cards-text-bold">{student.marks}</label>
        </div>
      </li>
      )
    })
  }
  return (
      <ul>
        <div className="header">
          <label>Students by average marks</label>
          <select className="nav-label" onChange={(e)=>{
            if (e.target.value === "Descending"){
              sort(true);
            }else{
              sort(false);
            }
          }}>
            <option value="Descending">Descending</option>
            <option value="Ascending">Ascending</option>
          </select>
        </div>
        {renderCells()}
      </ul>
  );
}

export default List;
