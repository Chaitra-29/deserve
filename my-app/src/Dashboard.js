import './App.css';
import Card from './Card';
import List from './List';
function Dashboard() {
  return (
      <div className="dashboard-div-main">
        <h2 className="margin-small">Dashboard</h2>
        <label className="nav-label">Mobile Ux/UI Design course</label>
        <Card></Card>
        <List></List>
      </div>
      
  );
}

export default Dashboard;
