"use client"
import { useState } from "react";
import './Settings.css'; 

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('view1'); //allows you to switch between different views of the mainBox
  const [selectedButton, setSelectedButton] = useState('view1'); // allows you to change the color of the selected button
  const accountName = 'Lauren Dodge'; //hardcoded account name

  const openSettings = () => {
    setIsOpen(true);
  };

  const closeSettings = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (view:string) => { //function to handle button click
    setCurrentView(view);
    setSelectedButton(view);
  };

  return (
    <div>
      <button onClick={openSettings}>Settings</button>

      {isOpen && (
        <div className="backdrop">
          <div className="settingsContainer">
        
           
            <div className="leftPanel">
              <h1 className ="title" style={{ paddingTop: '50px', paddingLeft: '20px' }}>Settings</h1>
              <h2 className="subtitle" style={{ paddingLeft: '20px' }}>{accountName}</h2>
              <button className={ `leftPanelButton  ${selectedButton === 'view1' ? 'selected' : ''}`} onClick={() => handleButtonClick('view1')}>Public Profile</button> 
              <button className={ `leftPanelButton  ${selectedButton === 'view2' ? 'selected' : ''}`} onClick={() => handleButtonClick('view2')}>Account</button> 
              <button className={ `leftPanelButton  ${selectedButton === 'view3' ? 'selected' : ''}`} onClick={() => handleButtonClick('view3')}>Appearance</button> 
                  {/* Add  settings here */}
                  <button onClick={closeSettings}>Close</button>
            
            </div>

            <div className="mainBox">
              {currentView === 'view1' && <div>Content for View 1</div>} 
              {currentView === 'view2' && <div>Content for View 2</div>}
              {currentView === 'view3' && <div>Content for View 3</div>}
              
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;