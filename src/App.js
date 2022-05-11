import React from 'react';

import './App.css';
import Loader from './components/Loader';

import Navbar from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import { Suspense } from 'react/cjs/react.production.min';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Experience = React.lazy(() => import('./routes/Experience'));
const Work = React.lazy(() => import('./routes/Work'));
const Contact = React.lazy(() => import('./routes/Contact'));

function App() {
	return (
<HashRouter>
		<div className='app'>
		
			<>
				<Suspense fallback={<Loader />}>
					<Navbar />
						<Routes>
						<Route  path='/' element={<Home />} />

							<Route path='/about' element={<About />} />
							<Route path='/experience' element={<Experience />} />
							<Route path='/work' element={<Work />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='*' element={<NotFound />} />

						</Routes>
				</Suspense>
			</>
		</div>
		</HashRouter>
	);
}

export default App;
