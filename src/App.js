import React from 'react';

import './App.css';
import Loader from './components/Loader';
import About from './routes/About';
import Experience from './routes/Experience';
import Work from './routes/Work';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

const Home = React.lazy(()=> import ('./routes/Home'));


function App() {

	
	return (
		<div className='app'>
				<>
				<Navbar/>

					<Routes>

					<Route path='/' index element={
					<React.Suspense fallback={<Loader/>}>
					<Home/>
					</React.Suspense>
			}/>
					<Route path='/about' element={<About/>}/>
					<Route path='/experience' element={<Experience/>}/>
					<Route path='/work' element={<Work/>}/>
					<Route path='/contact' element={<Contact/>}/>
					<Route path="*" element={<NotFound/>}/>
					</Routes>
				</>
				
			
		</div>
	);
}

export default App;
