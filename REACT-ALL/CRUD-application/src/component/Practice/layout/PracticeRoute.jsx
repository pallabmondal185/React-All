import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '../server/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddData from '../pages/AddData';
import AllData from '../pages/AllData';
import NavBar from './NavBar';
import EditPage from '../pages/EditPage';

const PracticeRoute = () => {
    return (
        <>
            <Provider store={Store}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<AllData />} />
                        <Route path='/add' element={<AddData />} />
                        <Route path='/edit/:id' element={<EditPage />}/>
                    </Routes>
                </Router>
            </Provider>
        </>
    )
}

export default PracticeRoute;
