import React, {useState, useEffect} from 'react';

import './App.css';
import Loader from './components/Loader';

import Navbar from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Experience from './routes/Experience';
import Work from './routes/Work';

function App() {
	const [loading, setLoading] = useState(true)

	
	useEffect(() => {
		setTimeout(() => setLoading(false), 3000)
	}, [])

	return (
<HashRouter>
		<div className='app'>
			{!loading ? <Navbar/> : null}
			{!loading ?  (
						<Routes>
						<Route  path='/' element={<Home />} />

							<Route path='about' element={<About />} />
							<Route path='experience' element={<Experience />} />
							<Route path='work' element={<Work />} />
							<Route path='contact' element={<Contact />} />
							<Route path='*' element={<NotFound />} />

						</Routes>
			) :<Loader/>}
		</div>
		</HashRouter>
	);
}

export default App;
