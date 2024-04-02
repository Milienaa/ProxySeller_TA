import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './app.scss';
import Header from './Components/Header/Header';
import Contacts from './Components/Contacts/Contacts';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import SinglePost from './Components/Contacts/SinglePost';
import AllPosts from './Components/Contacts/AllPosts';


function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route path='/users' element={<Contacts />} />
        <Route path='/posts' element={<AllPosts />} />
        <Route path='/posts/:id' element={<SinglePost />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<Navigate to='/users'/>} />
        </Routes>
    </>
    
  );
}

export default App;
