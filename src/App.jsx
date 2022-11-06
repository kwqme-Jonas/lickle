import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes} from 'react-router';
// eslint-disable-next-line no-unused-vars
import { Header, Maincontainer, createContainer } from './components';

const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary"> 
            <Header />

            <main className='mt-24 p-8 w-full'>
                <Routes>
                    <Route path='/*' element={<Maincontainer/>} />
                    <Route path='/createItem' element={<createContainer/>} />
                </Routes>
            </main> 
        </div>
        </AnimatePresence>
        
    );
};

export default App;
