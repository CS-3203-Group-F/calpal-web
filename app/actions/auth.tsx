"use server";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "../lib/session";

export async function signIn(data: FormData) {
  const result = await LoginAction(data);
  if (result) {
    const email = data.get("email")?.toString();
    console.log(email);
    if (email) {
      await createSession(email);
      return redirect("/Calendar"); // Redirect to home page
    }
  }
}

export async function LoginAction(data: FormData) {
  try {
    // Makes sure password and email are not null
    const password = data.get("password");
    const email = data.get("email");

    // Only run if password and email are not null
    if (password && email) {
      const res = await fetch("http://35.233.194.137/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`,
      });
      console.log(res);

      if (res.status === 200) {
        // Redirect to home page or any other page after successful login
        console.log("Login successful");
        return true;
      } else {
        // Handle failed login
        console.error("Login failed");
        return false;
      }
    }
  } catch (error) {
    console.error("An error occurred while logging in:", error);
  }
}

export async function logout() {
  deleteSession();
  redirect("/Login");
}
