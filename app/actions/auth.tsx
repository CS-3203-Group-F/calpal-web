"use server";
// Importing redirect function from next/navigation and session management functions
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "../lib/session";
import { revalidatePath } from "next/cache";
import { verifySession } from "../lib/dal";

// Function to sign in user
export async function signIn(data: FormData) {
  // There is a bug which prevents us from putting redirect in a try catch block, so this is the workaround
  const result = await login(data); // Call LoginAction function to authenticate user
  if (result) {
    // If authentication is successful
    const email = data.get("email")?.toString(); // Extract email from form data
    if (email) {
      await createSession(email); // Create a session and store it in cookies
      return redirect("/Calendar"); // Redirect to Calendar page
    }
  }
}

// Function to authenticate user
export async function login(data: FormData) {
  try {
    // Makes sure password and email are not null
    const password = data.get("password")?.toString(); // Extract password from form data
    const email = data.get("email")?.toString(); // Extract email from form data

    // Only run if password and email are not null
    if (password && email) {
      // Authenticating through the database using a request
      const res = await fetch("http://35.233.194.137/login", {
        // Make a POST request to the login endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`, // Encode email and password in the request body
      });
      console.log(res);

      if (res.status === 200) {
        // If login is successful
        // Redirect to home page or any other page after successful login
        console.log("Login successful");
        return true; // Return true indicating successful login
      } else {
        // Handle failed login
        console.error("Login failed");
        return false; // Return false indicating failed login
      }
    }
  } catch (error) {
    console.error("An error occurred while logging in:", error); // Log error if any
  }
}

// Function to logout user
export async function logout() {
  // First delete session
  deleteSession(); // Delete session data
  // Then redirect to the login page
  redirect("/Login"); // Redirect to Login page after logout
}

const userId = 3;

export async function getEventData() {
  try {
    const eventIdArray = await (
      await fetch(`http://35.233.194.137/events/${userId}`)
    ).json();

    const eventPromises = eventIdArray.map((eventId: number) =>
      fetch(`http://35.233.194.137/event/${eventId}`).then((res) => res.json())
    );

    const dataArray = await Promise.all(eventPromises);

    const updatedEvents = dataArray.map((data) => ({
      id: `${userId}_${data.title}`,
      title: data.title,
      description: data.description,
      start: adjustTimezoneOffset(data.start),
      end: data.allDay ? "" : adjustTimezoneOffset(data.end),
      allDay: data.allDay,
      location: data.location,
      editable: true,
      backgroundColor: `${data.color}20`,
      textColor: `${data.color}`,
      borderColor: `${data.color}`,
      display: "block",
    }));

    return updatedEvents;
  } catch (error: any) {
    throw new Error("Failed to fetch data");
  }
}

function adjustTimezoneOffset(inputTime: string) {
  const adjustedTime = new Date(inputTime);

  adjustedTime.setTime(
    adjustedTime.getTime() + adjustedTime.getTimezoneOffset() * 60 * 1000
  );

  return adjustedTime;
}

function generateRandomHexColor(): string {
  // Generate random R, G, and B values
  const r = Math.floor(Math.random() * 256); // Random number between 0 and 255
  const g = Math.floor(Math.random() * 256); // Random number between 0 and 255
  const b = Math.floor(Math.random() * 256); // Random number between 0 and 255

  // Convert R, G, and B values to hex strings and concatenate them
  const hexColor = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return hexColor;
}

export async function postEventData(eventData: FormData): Promise<void> {
  try {
    const isAllDay =
      eventData.get("allDay")?.toString() === "on" ? true : false;

    // Add classes and interactivity to the event
    const newEvent = {
      user_id: 3,
      title: eventData.get("title")?.toString(),
      description: eventData.get("description")?.toString(),
      start: eventData.get("start")?.toString(),
      end: eventData.get("end")?.toString(),
      organizer: "Default organizer",
      allDay: isAllDay,
      color: generateRandomHexColor(),
      location: eventData.get("location")?.toString(),
    };

    // Now, send the new event data to the server
    const response = await fetch("http://35.233.194.137/createEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if required
      },
      body: JSON.stringify(newEvent),
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    revalidatePath(`/Login`);
  } catch (error: any) {
    throw new Error("Failed to post data: " + error.message);
  }
}
