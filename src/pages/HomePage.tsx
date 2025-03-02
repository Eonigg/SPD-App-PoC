import React from 'react';
import Navbar from '../components/Navbar';
import MainWindow from '../components/MainWindow';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <MainWindow />
        </div>
    );
};

export default HomePage;