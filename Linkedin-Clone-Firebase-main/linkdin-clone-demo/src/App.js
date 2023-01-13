
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
     

      <Header />

      <div className='app_body'>
       <SideBar/>
       <Feed/>
      </div>
      
     
      {/*Widgets*/}
    </div>
  );
}

export default App;
