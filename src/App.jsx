import { Home, Play, Submit } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/play' element={<Play />} />
                <Route path='/submit' element={<Submit />} />
            </Routes>
        </Router>
    )
}

export default App;