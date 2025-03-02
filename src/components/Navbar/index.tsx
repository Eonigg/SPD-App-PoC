import React from 'react';
import ProfileOptions from './ProfileOptions';
import ConfigOptions from './ConfigOptions';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Sustainable Product Design</h1>
            </div>
            <div className="navbar-options">
                <ProfileOptions />
                <ConfigOptions />
            </div>
        </nav>
    );
};

export default Navbar;