import { Home, Play, Scoreboard } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/play/:slug' element={<Play />} />
                <Route path='/scoreboard' element={<Scoreboard />} />
            </Routes>
        </Router>
    )
}

export default App;