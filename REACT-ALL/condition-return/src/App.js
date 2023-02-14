import logo from './logo.svg';
import './App.css';
import User from './component/login/User'
import ClassUser from './component/classLogin/ClassUser';
import UserTurnary from './component/ternary/UserTurnary';
import ClassTernaryUser from './component/classLogin/ClassTernaryUser';

function App() {
  return (
    <>
      {/* <User /> */}
      {/* <ClassUser /> */}
      {/* <ClassTernaryUser /> */}
      <UserTurnary />
    </>
  );
}

export default App;
