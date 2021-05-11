
import {Switch,Route} from 'react-router-dom'
import { ExamEndPage } from './pages/ExamEndPage';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/final' component={ExamEndPage}/>
    </Switch>
    </>
  );
}

export default App;
