"use client";
import { useState } from "react";
import React, { useEffect } from "react";
import "./Settings.css";
import {
  PersonApple,
  SettingsGear,
  PaintBrush,
  SettingsGearApple,
  CameraApple,
} from "../Icons";

// Open Settings Component
function SettingsOpen(props: { handleOpen: any }) {
  return (
    <div className="relative">
      <button
        onClick={props.handleOpen}
        className="hover:rotate-90 transition-transform flex flex-row items-center px-3 py-2 gap-2 rounded-lg"
      >
        <SettingsGear />
      </button>
    </div>
  );
}

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false); //allows you to open and close the settings page
  const [currentView, setCurrentView] = useState("view1"); //allows you to switch between different views of the mainBox
  const [selectedButton, setSelectedButton] = useState("view1"); // allows you to change the color of the selected button

  const accountName = "Lauren Dodge"; //hardcoded account name
  //Public Profile Variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const displayName = `${firstName} ${lastName}`; //display name is a combination of first and last name, this will used in the database
  const [biography, setBiography] = useState("");
  const [avatar, setAvatar] = useState("");
  const [displayGroups, setDisplayGroups] = useState(false);
  const [displayOption, setDisplayOption] = useState("");

  //Account Settings Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [timezone, setTimezone] = useState("CST");

  //Appearance Variables
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "system";
  };
  const [theme, setTheme] = useState(getInitialTheme());
  const [selectedThemeButton, setSelectedThemeButton] = useState(
    getInitialTheme()
  );

  //function to open settings
  const openSettings = () => {
    setIsOpen(true);
  };
  //function to close settings
  const closeSettings = () => {
    setIsOpen(false);
  };
  //function to handle button click in the left panel
  const handleButtonClick = (view: string) => {
    setCurrentView(view);
    setSelectedButton(view);
  };
  ////////////////////////////////////////////Public Profile Functions////////////////////////////////////////////////////////
  //function to handle first name change
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };
  //function to handle last name change
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  //function to handle biography change
  const handleBiographyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBiography(event.target.value);
  };
  //function to handle profile picture change
  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    props: any //props is passed from the parent component
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const newAvatar = URL.createObjectURL(event.target.files[0]);
      setAvatar(newAvatar);
      // Call the setAvatar function passed from the parent component
      props.setAvatar(newAvatar);
    }
  };

  const handleDisplayGroupsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //function to handle display groups change
    setDisplayGroups(event.target.checked);
  };

  const handleDisplayOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //function to handle display option change
    setDisplayOption(event.target.value);
  };
  ////////////////////////////////////////////Account Settings Functions////////////////////////////////////////////////////////
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //function to handle username change
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //function to handle password change
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //function to handle new password change
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //function to handle confirm password change
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  //Function to handle phone number change
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove all non-digits
    let formattedInput = "";

    if (input.length > 0) {
      formattedInput += "(" + input.substr(0, 3);
    }
    if (input.length > 3) {
      formattedInput += ") " + input.substr(3, 3);
    }
    if (input.length > 6) {
      formattedInput += "-" + input.substr(6, 4);
    }

    setPhoneNumber(formattedInput);

    if (!event.target.validity.valid) {
      event.target.setCustomValidity("Please enter 9 digits");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleTimezoneChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTimezone(event.target.value);
  };

  ////////////////////////////////////////////Appearance Functions////////////////////////////////////////////////////////

  // Move the slider to the selected button
  useEffect(() => {
    const slider = document.querySelector(".slider") as HTMLElement;
    const activeButton = document.querySelector(
      `.themeButton[data-theme="${selectedThemeButton}"]`
    ) as HTMLElement;

    if (slider && activeButton) {
      slider.style.transform = `translateX(${activeButton.offsetLeft}px)`;
      slider.style.width = `${activeButton.offsetWidth}px`;
    }
  }, [selectedThemeButton]);

  // Apply the theme when the component mounts
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme =
      getInitialTheme() === "system" ? systemTheme : getInitialTheme();
    applyTheme(initialTheme);
  }, []);

  // Handle changes to the theme
  const handleThemeChange = (selectedTheme: any) => {
    let resolvedTheme = selectedTheme;
    // If the theme is set to 'system', resolve it to light or dark based on the system preference
    if (selectedTheme === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      localStorage.setItem("theme", selectedTheme); // Save the theme choice only if it's not 'system'
    }
    // Update the state and apply the theme
    setTheme(resolvedTheme);
    setSelectedThemeButton(selectedTheme); // Keep the slider on the button clicked
    applyTheme(resolvedTheme);
  };
  // Apply the theme to the app
  const applyTheme = (appliedTheme: any) => {
    const rootElement = document.documentElement;
    rootElement.classList.remove("light-theme", "dark-theme");
    rootElement.classList.add(`${appliedTheme}-theme`);
  };

  //function to handle save Changes button click
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Update the user's profile details
    // This is just a placeholder. Replace this with the actual code that sends to database.
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Biography:", biography);
    console.log("Profile Picture:", avatar);
    console.log(timezone);
    console.log(theme);
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE
    //DELETE THIS CODE WHEN CONNECTED TO DATABASE

    // Close the settings
    closeSettings();
  };

  return (
    <div className="z-50">
      <SettingsOpen handleOpen={openSettings} />
      {/* button to open settings Page */}
      {isOpen && (
        <div className="backdrop">
          <div className="settingsContainer">
            {/* the left side of settings display that shows the buttons starts here*/}
            <div className="leftPanel">
              <h1
                className="title"
                style={{ paddingTop: "50px", paddingLeft: "20px" }}
              >
                Settings
              </h1>
              <h2 className="profileName" style={{ paddingLeft: "20px" }}>
                <img
                  className="leftProfilePicture"
                  src={avatar || "/profilePictures/DefaultPFP.png"} //Profile Picture for Left Panel
                  alt="Profile"
                />
                {accountName} {/*Users account name*/}
              </h2>
              {/*The following Lines Changes the color of the selected button as you click and change views of the settings MainBox */}
              <button
                className={`leftPanelButton  ${
                  selectedButton === "view1" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("view1")}
              >
                <span className="icon">
                  <PersonApple color="#78716C" />
                </span>
                Public Profile
              </button>
              <button
                className={`leftPanelButton  ${
                  selectedButton === "view2" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("view2")}
              >
                <span className="icon">
                  <SettingsGearApple color="#78716C" />
                </span>
                Account
              </button>
              <button
                className={`leftPanelButton  ${
                  selectedButton === "view3" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("view3")}
              >
                <span className="icon">
                  <PaintBrush color="#78716C" />
                </span>
                Appearance
              </button>
              {/* Add more buttons for other settings here */}
            </div>

            {/* the right side of settings display that shows all the actual settings starts here*/}
            <div className="mainBox">
              {/*Button to close the settings Page */}
              <button className="closeButton" onClick={closeSettings}>
                {" "}
                X
              </button>
              {/*Public Profile View of the mainBox */}
              {/*///////////////////////Beginning of Public Profile View//////////////////////////////*/}
              {currentView === "view1" && (
                <form onSubmit={handleSubmit}>
                  <div className="saveButtonContainer">
                    <h1
                      className="title"
                      style={{ paddingTop: "50px", paddingLeft: "20px" }}
                    >
                      Public Profile
                    </h1>
                    {/*Save Changes Button */}
                    <button
                      type="submit"
                      className="saveButton"
                      style={{ marginTop: "5.5%" }}
                    >
                      Save Changes
                    </button>
                  </div>

                  {/** Profile Picture Section**/}
                  <div className="avatarContainer">
                    <div>
                      <div className="imageContainer">
                        <img
                          className="avatarImage"
                          //if there is no Picture chosen by the User, display the default profile picture
                          src={
                            avatar !== ""
                              ? avatar
                              : "/profilePictures/DefaultPFP.png"
                          }
                          alt="Profile"
                        />

                        <label
                          htmlFor="profilePicture"
                          className="changeButton"
                        >
                          <CameraApple color="#78716C" />
                        </label>
                        <input
                          type="file"
                          id="profilePicture"
                          className="hidden"
                          onChange={
                            (event) =>
                              handleProfilePictureChange(event, { setAvatar }) //passing the setAvatar function to the handleProfilePictureChange function
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="subtitle">Avatar</h2>
                      <p className="subtitleDescription">
                        Your avatar will be displayed to other CalPal users you
                        share a group with, or anyone that finds your profile.
                      </p>
                    </div>
                  </div>

                  {/** Display Name Section**/}
                  <div className="inputContainer">
                    <hr className="thinLine" />
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        {/*allows correct spacing between Title and subtitle */}
                        <h2 className="subtitle">Display Name</h2>
                        <p className="subtitleDescription">
                          The name that other people will recognize you with.
                        </p>
                      </div>
                      <div className="inputHorizontal">
                        <div className="inputLabelContainer">
                          <label className="inputLabel" htmlFor="firstName">
                            First Name
                          </label>
                          <input
                            className="inputBox"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                            name="firstName"
                            pattern="[A-Za-z]+" // Only allow letters
                          />
                        </div>
                        <div className="inputLabelConatiner">
                          <label className="inputLabel" htmlFor="lastName">
                            Last Name
                          </label>
                          <input
                            className="inputBox"
                            value={lastName}
                            onChange={handleLastNameChange}
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                            pattern="[A-Za-z]+" // Only allow letters
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/** Biography Section**/}
                  <div className="inputContainer">
                    <hr className="thinLine" />
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between input box and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        {/*allows correct spacing between Title and subtitle */}
                        <h2 className="subtitle">Biography</h2>
                        <p
                          className="subtitleDescription"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Tell others about yourself.
                        </p>
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
                        <span className="characterCount">
                          {biography.length}/200
                        </span>
                      </div>
                    </div>
                  </div>

                  {/** Privacy Section**/}
                  <div className="inputContainer">
                    <hr className="thinLine" />
                    {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between Title and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <h2 className="subtitle">Privacy</h2>
                        <p className="subtitleDescription">
                          Choose what information other users can see.
                        </p>
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
                          <label htmlFor="displayGroups">
                            Display my groups on my profile
                          </label>
                        </div>

                        <div style={{ opacity: displayGroups ? 1 : 0.5 }}>
                          {" "}
                          {/* only show options if displayGroups is true */}
                          <div className="option">
                            <input
                              type="radio"
                              id="displayToEveryone"
                              name="displayOption"
                              value="everyone"
                              disabled={!displayGroups}
                              checked={displayOption === "everyone"}
                              onChange={handleDisplayOptionChange}
                            />
                            <label htmlFor="displayToEveryone">
                              Display to everyone
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="radio"
                              id="displayToFriends"
                              name="displayOption"
                              value="friends"
                              disabled={!displayGroups}
                              checked={displayOption === "friends"}
                              onChange={handleDisplayOptionChange}
                            />
                            <label htmlFor="displayToFriends">
                              Display only to friends
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form> ///////////////////////////////** End of Public Profile Form **/////////////////////////////////////////////////
              )}
              {/*//////////////////////////////////Beginning of Account Settings Form/////////////////////////////////////////////////*/}
              {currentView === "view2" && (
                <form onSubmit={handleSubmit}>
                  <div className="saveButtonContainer">
                    <h1
                      className="title"
                      style={{
                        paddingTop: "50px",
                        paddingLeft: "20px",
                        marginBottom: "5%",
                      }}
                    >
                      Account
                    </h1>
                    <button type="submit" className="saveButton">
                      Save Changes
                    </button>
                  </div>

                  <div className="inputContainer">
                    {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between Title and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <h2 className="subtitle">Username</h2>
                        <p className="subtitleDescription">
                          The name that other people can find you with
                        </p>
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
                    {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between Title and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <h2 className="subtitle">Password</h2>
                        <p className="subtitleDescription">
                          The password used to login into your account
                        </p>
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
                    {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between Title and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <h2 className="subtitle">Contact Information</h2>
                        <p className="subtitleDescription">
                          The email and phone number used for account recovery.
                        </p>
                      </div>
                      <div
                        className="inputHorizontal"
                        style={{ marginRight: "5%" }}
                      >
                        <div className="inputLabelContainer">
                          <label className="inputLabel" htmlFor="email">
                            Email{" "}
                          </label>
                          <input
                            className="inputBox"
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            placeholder="email"
                            id="email"
                            name="email"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" //Email Regex
                          />
                        </div>

                        <div className="inputLabelConatiner">
                          <label className="inputLabel">Phone Number</label>
                          <input
                            className="inputBox"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            type="text"
                            placeholder="(555) 555-5555"
                            id="phoneNumber"
                            name="phoneNumber"
                            pattern="\(\d{3}\) \d{3}-\d{4}" //Phone Number Regex
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inputContainer">
                    <hr className="thinLine" />
                    {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between Title and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <h2 className="subtitle">Time Zone</h2>
                        <p className="subtitleDescription">
                          The time zone which is displayed in your calendar
                        </p>
                      </div>
                      <div className="inputLabelContainer">
                        <select
                          className="inputBox"
                          value={timezone}
                          onChange={handleTimezoneChange}
                          id="timezone"
                          name="timezone"
                        >
                          <option value="EST">
                            EST "Eastern Standard Time"
                          </option>
                          <option value="CST">
                            CST "Central Standard Time"
                          </option>
                          <option value="MST">
                            MST "Mountain Standard Time"
                          </option>
                          <option value="PST">
                            PST "Pacific Standard Time"
                          </option>
                          <option value="AKST">
                            AKST "Alaska Standard Time"
                          </option>
                          <option value="HAST">
                            HAST "Hawaii-Aleutian Standard Time"
                          </option>
                          <option value="SST">SST "Samoa Standard Time"</option>
                          <option value="IDLW">
                            IDLW "International Date Line West"
                          </option>
                          <option value="UTC">
                            UTC "Coordinated Universal Time"
                          </option>
                          <option value="CET">
                            CET "Central European Time"
                          </option>
                          <option value="EET">
                            EET "Eastern European Time"
                          </option>
                          <option value="FET">
                            FET "Further-Eastern European Time"
                          </option>
                          <option value="GST">
                            GST "Greenwich Standard Time"
                          </option>
                          <option value="PKT">
                            PKT "Pakistan Standard Time"
                          </option>
                          <option value="BST">
                            BST "Bangladesh Standard Time"
                          </option>
                          <option value="ICT">ICT "Indochina Time"</option>
                          <option value="CST">CST "China Standard Time"</option>
                          <option value="JST">JST "Japan Standard Time"</option>
                          <option value="AEST">
                            AEST "Australian Eastern Standard Time"
                          </option>
                          <option value="VLAT">
                            VLAT "Vladivostok Standard Time"
                          </option>
                          <option value="NZST">
                            NZST "New Zealand Standard Time"
                          </option>
                          <option value="TOT">TOT "Tonga Standard Time"</option>
                          <option value="LINT">LINT "Line Islands Time"</option>
                          <option value="SST">
                            SST "Solomon Standard Time"
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              )}{" "}
              {/*///////////////////////////////////////End of Account View //////////////////////////////////////////////////////*/}
              {/*//////////////////////////////////////Beginnign of Appearance View /////////////////////////////////////////////////*/}
              {currentView === "view3" && (
                <div>
                  <div className="saveButtonContainer">
                    <h1
                      className="title"
                      style={{
                        paddingTop: "50px",
                        paddingLeft: "20px",
                        marginBottom: "5%",
                      }}
                    >
                      Appearance
                    </h1>
                    <button
                      type="submit"
                      className="saveButton"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                  <div className="inputContainer">
                    {/*allows correct spacing between input box and subtitle */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {" "}
                      {/*allows correct spacing between Title and subtitle */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <h2 className="subtitle">Color Theme</h2>
                        <p className="subtitleDescription">
                          Personalize the general interface theme.
                        </p>
                      </div>
                      <div className="themeButtonContainer">
                        <div className="slider"></div>
                        <button
                          className="themeButton"
                          data-theme="system" //data-theme is used to determine the theme when the button is clicked
                          onClick={() => handleThemeChange("system")}
                        >
                          System
                        </button>
                        <button
                          className="themeButton"
                          data-theme="light" //data-theme is used to determine the theme when the button is clicked
                          onClick={() => handleThemeChange("light")}
                        >
                          Light
                        </button>
                        <button
                          className="themeButton"
                          data-theme="dark" //data-theme is used to determine the theme when the button is clicked
                          onClick={() => handleThemeChange("dark")}
                        >
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
