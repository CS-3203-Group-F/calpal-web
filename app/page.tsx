"use client"
import { useState } from "react";
import './Settings.css'; 

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('view1'); //allows you to switch between different views of the mainBox
  const [selectedButton, setSelectedButton] = useState('view1'); // allows you to change the color of the selected button

  const accountName = 'Lauren Dodge'; //hardcoded account name
  //Public Profile Variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const displayName = `${firstName} ${lastName}`; //display name is a combination of first and last name
  const [biography, setBiography] = useState('');
  const [avatar, setAvatar] = useState('');

  const openSettings = () => {
    setIsOpen(true);
  };

  const closeSettings = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (view:string) => { //function to handle button click in the left panel
    setCurrentView(view);
    setSelectedButton(view);
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  
  const handleBiographyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBiography(event.target.value);
  };
  
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Update the user's profile details
    // This is just a placeholder. Replace this with the actual code that sends to database.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Biography:', biography);
    console.log('Profile Picture:', avatar);
  
    
  };

  return (
    <div>
      <button onClick={openSettings}>Settings</button>

      {isOpen && (
        <div className="backdrop">
          <div className="settingsContainer">
        
           {/* the left side of settings display that shows the buttons starts here*/}
            <div className="leftPanel">
              <h1 className ="title" style={{ paddingTop: '50px', paddingLeft: '20px' }}>Settings</h1>
              <h2 className="profileName" style={{ paddingLeft: '20px' }}>{accountName}</h2>
              <button className={ `leftPanelButton  ${selectedButton === 'view1' ? 'selected' : ''}`} onClick={() => handleButtonClick('view1')}>Public Profile</button> 
              <button className={ `leftPanelButton  ${selectedButton === 'view2' ? 'selected' : ''}`} onClick={() => handleButtonClick('view2')}>Account</button> 
              <button className={ `leftPanelButton  ${selectedButton === 'view3' ? 'selected' : ''}`} onClick={() => handleButtonClick('view3')}>Appearance</button> 
                  {/* Add more buttons for other settings here */}
                  <button onClick={closeSettings}>Close</button>
            
            </div>
            {/* the right side of settings display that shows all the actual settings starts here*/}
            <div className="mainBox">
              {/*Public Profile View of the mainBox */}
              {currentView === 'view1' &&( 
              
              <form onSubmit={handleSubmit} className="profileForm">
                  <h1 className="title" style={{ paddingTop: '50px', paddingLeft: '20px' }}>Public Profile</h1>
                  
                  {/** Profile Picture **/}
                  <label>
                    Profile Picture:
                    <input type="file" onChange={handleProfilePictureChange} />
                  </label>
                  {avatar && <img className="avatarImage" src={avatar} alt="Profile" />}
                  
                  {/** Display Name **/}
                  <div className="inputContainer">
                      <hr className="thinLine" />
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}> 
                      <h2 className="subtitle">Display Name</h2>
                      <p className="subtitleDescription">The name that other people will recognize you with.</p>
                      </div>
                      <div className="input">
                        <div className="inputLabelContainer">
                          <label className= "inputLabel" htmlFor="firstName">First Name</label>
                          <input
                            className="inputBox"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                            name="firstName"
                          />
                        </div>
                        <div className="inputLabelConatiner">
                          <label className ="inputLabel" htmlFor="lastName">Last Name</label>
                          <input
                            className="inputBox"
                            value={lastName}
                            onChange={handleLastNameChange}
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                          />
                          </div>
                      </div>
                    </div>
                  </div>
                  {/** Biography **/}
                    <div className="inputContainer">
                      <hr className="thinLine" />
                      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h2 className="subtitle">Biography</h2>
                      <p className="subtitleDescription" style ={{whiteSpace: 'nowrap'}}>Tell others about yourself.</p>
                      </div>
                        <textarea
                        className="inputBiographyBox"
                        value={biography}
                        onChange={handleBiographyChange}
                        placeholder="Biography"
                        id="biography"
                        name="biography"
                      />
                    </div>
                    </div>


                  <button type="submit" className="saveButton">Save</button>
                </form>
              
              
              )} 
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