import React from 'react';

const ConfigOptions: React.FC = () => {
    return (
        <div>
            <h2>Configuration Options</h2>
            <label htmlFor="app-version">Select App Version:</label>
            <select id="app-version">
                <option value="v1">Version 1</option>
                <option value="v2">Version 2</option>
                <option value="v3">Version 3</option>
            </select>
        </div>
    );
};

export default ConfigOptions;