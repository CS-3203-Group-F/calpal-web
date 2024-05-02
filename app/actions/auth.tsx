"use server";
// Importing redirect function from next/navigation and session management functions
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "../lib/session";

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
function LoginAction(data: FormData) {
  throw new Error("Function not implemented.");
}
