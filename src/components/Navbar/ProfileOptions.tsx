import React from 'react';

const ProfileOptions: React.FC = () => {
    return (
        <div className="profile-options">
            <button onClick={() => alert('Relogin functionality here')}>Relogin</button>
            {/* Additional profile options can be added here */}
        </div>
    );
};

export default ProfileOptions;