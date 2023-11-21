import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ContentPage from'./components/ContentPage';
import ProfilePage  from './components/ProfilePage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}  />

          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
  );
}

export default App;
