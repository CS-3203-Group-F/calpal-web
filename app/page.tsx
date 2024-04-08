"use client"
import { useState } from "react";
import './Settings.css'; // Import your CSS

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSettings = () => {
    setIsOpen(true);
  };

  const closeSettings = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openSettings}>Settings</button>

      {isOpen && (
        <div className="backdrop" onClick={closeSettings}>
          <div className="settingsContainer">
        
           
            <div className="leftPanel">
              <h1 className ="title" style={{ paddingTop: '50px', paddingLeft: '20px' }}>Settings</h1>
                  {/* Add your settings here */}
                  <button onClick={closeSettings}>Close</button>
            
            </div>

            <div className="mainBox">
              
              
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;