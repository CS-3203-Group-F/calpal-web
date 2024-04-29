"use client"
import { useState } from "react";
import React, { useEffect } from 'react';
import './Settings.css'; 

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);  //allows you to open and close the settings page
  const [currentView, setCurrentView] = useState('view1'); //allows you to switch between different views of the mainBox
  const [selectedButton, setSelectedButton] = useState('view1'); // allows you to change the color of the selected button

  const accountName = 'Lauren Dodge'; //hardcoded account name
  //Public Profile Variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const displayName = `${firstName} ${lastName}`; //display name is a combination of first and last name, this will used in the database
  const [biography, setBiography] = useState('');
  const [avatar, setAvatar] = useState('');
  const [displayGroups, setDisplayGroups] = useState(false);
  const [displayOption, setDisplayOption] = useState('');

  //Account Settings Variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  

  const [phoneNumber, setPhoneNumber] = useState('');
  const [timezone, setTimezone] = useState('CST');

  
  const [theme, setTheme] = useState('system'); //default theme is system
  
      
      
    const openSettings = () => { //function to open settings
      setIsOpen(true);
    };

    const closeSettings = () => { //function to close settings
      setIsOpen(false);
    };

  const handleButtonClick = (view:string) => { //function to handle button click in the left panel
    setCurrentView(view);
    setSelectedButton(view);
  };
////////////////////////////////////////////Public Profile Variables////////////////////////////////////////////////////////
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle first name change
      setFirstName(event.target.value);
    };
    
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {  //function to handle last name change
      setLastName(event.target.value);
    };
    
    const handleBiographyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {  //function to handle biography change
      setBiography(event.target.value);
    };
    
    const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {  //function to handle profile picture change
      if (event.target.files && event.target.files.length > 0) {
        setAvatar(URL.createObjectURL(event.target.files[0]));
      }
    };

    const handleDisplayGroupsChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle display groups change
      setDisplayGroups(event.target.checked);
    };
    
    const handleDisplayOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle display option change
      setDisplayOption(event.target.value);
    };
////////////////////////////////////////////Account Settings Variables////////////////////////////////////////////////////////
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle username change
      setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle password change
      setPassword(event.target.value);
    };
    
    const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle new password change
      setNewPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle confirm password change
      setConfirmPassword(event.target.value);
    };
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle email change
      setEmail(event.target.value);
    };
    
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => { //function to handle phone number change
      setPhoneNumber(event.target.value);
    };

    

    const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTimezone(event.target.value);
    };

    

    useEffect(() => {
      handleThemeChange(theme);
    }, []);

    const handleThemeChange = (newTheme: string) => {
      setTheme(newTheme);
       
      // Remove the active class from all buttons
      const buttons = document.querySelectorAll('.themeButton');
      buttons.forEach(button => button.classList.remove('active'));
        
      // Add the active class to the clicked button
      const activeButton = document.querySelector(`.themeButton[data-theme="${newTheme}"]`);
      activeButton?.classList.add('active');
        
      // Move the rectangle
      const slider = document.querySelector('.slider') as HTMLElement;
      const container = document.querySelector('.themeButtonContainer');
      if (slider && activeButton && container) {
        const activeButtonWidth = activeButton.getBoundingClientRect().width;
        const activeButtonLeft = activeButton.getBoundingClientRect().left;
        const containerLeft = container.getBoundingClientRect().left;
        
        slider.style.width = `${activeButtonWidth}px`; // Set the width of the slider to the width of the active button
        slider.style.left = `${activeButtonLeft - containerLeft + activeButtonWidth / 2 - slider.offsetWidth / 2}px`; // Center the slider over the active button
      }
        
      const rootElement = document.documentElement;
      rootElement.classList.remove('light-theme', 'dark-theme'); // Remove the current theme class
      rootElement.classList.add(`${newTheme}-theme`); // Add the new theme class
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //function to handle save Changes button click
    event.preventDefault();
  
    // Update the user's profile details
    // This is just a placeholder. Replace this with the actual code that sends to database.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Biography:', biography);
    console.log('Profile Picture:', avatar);
    console.log(timezone)
    console.log(theme)

    // Close the settings
    closeSettings();
  
    
  };

  return (
    <div>
      <button onClick={openSettings}>Settings</button> {/* button to open settings Page */}

      {isOpen && (
        <div className="backdrop">
          <div className="settingsContainer">
        
           {/* the left side of settings display that shows the buttons starts here*/}
            <div className="leftPanel">
              <h1 className ="title" style={{ paddingTop: '50px', paddingLeft: '20px' }}>Settings</h1>
              <h2 className="profileName" style={{ paddingLeft: '20px' }}>{accountName}</h2>
              {/*Next three Lines Chnages the color of the selected button as you click and change views of the settings MainBox */ }
              <button className={ `leftPanelButton  ${selectedButton === 'view1' ? 'selected' : ''}`} onClick={() => handleButtonClick('view1')}>Public Profile</button> 
              <button className={ `leftPanelButton  ${selectedButton === 'view2' ? 'selected' : ''}`} onClick={() => handleButtonClick('view2')}>Account</button> 
              <button className={ `leftPanelButton  ${selectedButton === 'view3' ? 'selected' : ''}`} onClick={() => handleButtonClick('view3')}>Appearance</button> 
                  {/* Add more buttons for other settings here */}
                  <button onClick={closeSettings}>Close</button>
            
            </div>
            {/* the right side of settings display that shows all the actual settings starts here*/}
            <div className="mainBox">
              {/*Public Profile View of the mainBox */}

              {/*///////////////////////Beginning of Public Profile View//////////////////////////////*/}
              {currentView === 'view1' &&( 
              
              <form onSubmit={handleSubmit} >
                <div className ="saveButtonContainer">
                  <h1 className="title" style={{ paddingTop: '50px', paddingLeft: '20px' }}>Public Profile</h1>
                  <button type="submit" className="saveButton" style = {{marginTop: '5.5%'}}>Save Changes</button>
                </div>
                  
                  {/** Profile Picture Section**/}
                  <div className="avatarContainer">
                    <div>
                    <div className="imageContainer">
                      <img className="avatarImage" src={avatar} alt="Profile" />
                      <label htmlFor="profilePicture" className="changeButton">Change</label>
                      <input type="file" id="profilePicture" className="hidden" onChange={handleProfilePictureChange} />
                      </div>
                    </div>
                    <div>
                      <h2 className="subtitle">Avatar</h2>
                      <p className="subtitleDescription">Your avatar will be displayed to other CalPal users you share a group with, or anyone that finds your profile.</p>
                    </div>
                  </div>
                  
                  {/** Display Name Section**/}
                  <div className="inputContainer">
                      <hr className="thinLine" />
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                      <h2 className="subtitle">Display Name</h2>
                      <p className="subtitleDescription">The name that other people will recognize you with.</p>
                      </div>
                      <div className="inputHorizontal">
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
                  {/** Biography Section**/}
                    <div className="inputContainer">
                      <hr className="thinLine" />
                      <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
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
                        maxLength={200}
                      />
                      <div className="biographyContainer">
                      <span className="characterCount">{biography.length}/200</span>
                      </div>
                      
                    </div>
                    </div>

                    {/** Privacy Section**/}
                    <div className="inputContainer">
                    <hr className="thinLine" />
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                    <h2 className="subtitle">Privacy</h2>
                    <p className="subtitleDescription">Choose what information other users can see.</p>
                    </div>
                    <div className="privacyOptions">
                      <div>
                        <input
                          type="checkbox"
                          id="displayGroups"
                          name="displayGroups"
                          checked={displayGroups}
                          onChange={handleDisplayGroupsChange}
                        />
                        <label htmlFor="displayGroups">Display my groups on my profile</label>
                      </div>

                      <div style={{ opacity: displayGroups ? 1 : 0.5 }}> {/* only show options if displayGroups is true */}
                      <div className="option">
                        <input
                          type="radio"
                          id="displayToEveryone"
                          name="displayOption"
                          value="everyone"
                          disabled={!displayGroups}
                          checked={displayOption === 'everyone'}
                          onChange={handleDisplayOptionChange}
                        />
                        <label htmlFor="displayToEveryone">Display to everyone</label>
                        </div>
                        <div className="option">
                        <input
                          type="radio"
                          id="displayToFriends"
                          name="displayOption"
                          value="friends"
                          disabled={!displayGroups}
                          checked={displayOption === 'friends'}
                          onChange={handleDisplayOptionChange}
                        />
                        <label htmlFor="displayToFriends">Display only to friends</label>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>

                
                 
                </form>   ///////////////////////////////** End of Public Profile Form **/////////////////////////////////////////////////
              )} 

                {/*//////////////////////////////////Beginning of Account Settings Form/////////////////////////////////////////////////*/}
              {currentView === 'view2' && 
               <form onSubmit={handleSubmit} >
               <div className ="saveButtonContainer">
                 <h1 className="title" style={{ paddingTop: '50px', paddingLeft: '20px', marginBottom: '5%' }}>Account</h1>
                 <button type="submit" className="saveButton">Save Changes</button>
               </div>

               <div className="inputContainer">
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                      <h2 className="subtitle">Username</h2>
                      <p className="subtitleDescription">The name that other people can find you with</p>
                      </div>
                      <div className="inputHorizontal">
                        <div className="inputLabelContainer">
                          <input
                            className="inputBox"
                            value={username}
                            onChange={handleUsernameChange}
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inputContainer">
                      <hr className="thinLine" />
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                      <h2 className="subtitle">Password</h2>
                      <p className="subtitleDescription">The password used to login into your account</p>
                      </div>
                      <div className="inputHorizontal">
                        <div className="inputLabelContainer">
                          <input
                            className="inputBox"
                            value={password}
                            onChange={handlePasswordChange}
                            type="text"
                            placeholder="password"
                            id="password"
                            name="password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

               <div className="inputContainer">
                      <hr className="thinLine" />
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                      <h2 className="subtitle">Contact Information</h2>
                      <p className="subtitleDescription">The email and phone number used for account recovery.</p>
                      </div>
                      <div className="inputHorizontal" style={{ marginRight : '5%' }}>
                        <div className="inputLabelContainer">
                          <label className= "inputLabel" htmlFor="firstName">Email</label>
                          <input
                            className="inputBox"
                            value={email}
                            onChange={handleEmailChange}
                            type="text"
                            placeholder="email"
                            id="email"
                            name="email"
                          />
                        </div>
                        
                        <div className="inputLabelConatiner">
                          <label className ="inputLabel" htmlFor="lastName">Phone Number</label>
                          <input
                            className="inputBox"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            type="text"
                            placeholder="(555-555-5555)"
                            id="phoneNumber"
                            name="phoneNumber"
                          />
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="inputContainer">
                  <hr className="thinLine" />
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                      <h2 className="subtitle">Time Zone</h2>
                      <p className="subtitleDescription">The time zone which is displayed in your calendar</p>
                      </div>
                  <div className="inputLabelContainer">
                  
                  <select
                    className="inputBox"
                    value={timezone}
                    onChange={handleTimezoneChange}
                    id="timezone"
                    name="timezone"
                  >
                    <option value="EST">EST "Eastern Standard Time"</option> 
                    <option value="CST">CST "Central Standard Time"</option>
                    <option value="MST">MST "Mountain Standard Time"</option>
                    <option value="PST">PST "Pacific Standard Time"</option>
                    <option value="AKST">AKST "Alaska Standard Time"</option>
                    <option value="HAST">HAST "Hawaii-Aleutian Standard Time"</option>
                    <option value="SST">SST "Samoa Standard Time"</option>
                    <option value="IDLW">IDLW "International Date Line West"</option>
                    <option value="UTC">UTC "Coordinated Universal Time"</option>
                    <option value="CET">CET "Central European Time"</option>
                    <option value="EET">EET "Eastern European Time"</option>
                    <option value="FET">FET "Further-Eastern European Time"</option>
                    <option value="GST">GST "Greenwich Standard Time"</option>
                    <option value="PKT">PKT "Pakistan Standard Time"</option>
                    <option value="BST">BST "Bangladesh Standard Time"</option>
                    <option value="ICT">ICT "Indochina Time"</option>
                    <option value="CST">CST "China Standard Time"</option>
                    <option value="JST">JST "Japan Standard Time"</option>
                    <option value="AEST">AEST "Australian Eastern Standard Time"</option>
                    <option value="VLAT">VLAT "Vladivostok Standard Time"</option>
                    <option value="NZST">NZST "New Zealand Standard Time"</option>
                    <option value="TOT">TOT "Tonga Standard Time"</option>
                    <option value="LINT">LINT "Line Islands Time"</option>
                    <option value="SST">SST "Solomon Standard Time"</option>

                  </select>
                  </div>
                  </div>
                  </div>

              </form>
              }  {/*///////////////////////////////////////End of Account View //////////////////////////////////////////////////////*/}

              {/*//////////////////////////////////////Beginnign of Appearance View /////////////////////////////////////////////////*/}
              {currentView === 'view3' &&
                 
                  
                  <div >
                  <div className ="saveButtonContainer">
                  <h1 className="title" style={{ paddingTop: '50px', paddingLeft: '20px', marginBottom: '5%' }}>Appearance</h1>
                  <button type="submit" className="saveButton" onClick= {handleSubmit}>Save Changes</button>
                </div>
                  <div className="inputContainer">
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}> {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}> {/*allows correct spacing between Title and subtitle */}
                    <h2 className="subtitle">Color Theme</h2>
                    <p className="subtitleDescription">Personalize the general interface theme.</p>
                    </div>
                      <div className="themeButtonContainer">
                        <div className="slider"></div>
                        <button className="themeButton" data-theme ="system" onClick={() => handleThemeChange('system')}>System</button>
                        <button className="themeButton" data-theme ="light" onClick={() => handleThemeChange('light')}>Light</button>
                        <button className="themeButton" data-theme ="dark" onClick={() => handleThemeChange('dark')}>Dark</button>
                      </div>
                    </div>
                  </div>
                </div>
              
                }
                
              
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;

