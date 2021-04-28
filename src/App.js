
import './App.css';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName'

function App() {
  return (
    <div className="App">
      <h1>Les Informations Personnels </h1>
      <ProfilePhoto/>
     <FullName />
     <Address/>
    </div>
  );
}



export default App;
