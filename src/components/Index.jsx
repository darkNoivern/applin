import React from 'react';
import Delete from './Delete';
import Error from './Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Delete />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </>
    )
}

export default Index