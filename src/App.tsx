import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomSignIn from './routes/sign-in'; // Ensure './components/SignIn.tsx' exists

import CustomSignUp from './routes/sign-up';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<CustomSignIn />} />
        <Route path="/sign-up" element={<CustomSignUp />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
