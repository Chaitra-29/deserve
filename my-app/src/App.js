import avatar from './resource/avatar.png';
import Dashboard from './Dashboard';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-top">
        <img className="float-right margin-10" alt='avatar' src={avatar} width="40" height="40"/>
        <div className="nav-div float-right">
          <label className="display-block nav-text">Cody Simmons</label>
          <label className="nav-label">Lecturer</label>
        </div>
        <div className="nav-first-div">
          <label className="nav-first-text">C</label>
        </div>
      </nav>
      <div className="App display-inline-flex">
      <nav className="nav-side"></nav>
      <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
