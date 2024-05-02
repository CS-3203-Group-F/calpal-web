// Importing necessary modules and functions
import "server-only"; // Importing server-only module
import { cookies } from "next/headers"; // Importing cookies function from next/headers
import { decrypt } from "@/app/lib/session"; // Importing decrypt function from session module
import { redirect } from "next/navigation"; // Importing redirect function from next/navigation
import { cache } from "react"; // Importing cache function from react module

// Function to verify user session
export const verifySession = cache(async (willRedirect = true) => {
  // Extract session cookie
  const cookie = cookies().get("session")?.value;
  // Decrypt session cookie
  const session = await decrypt(cookie);

  // If session userId doesn't exist and willRedirect is true, redirect to login page
  if (!session?.userId && willRedirect) {
    redirect("/Login"); // Redirect to Login page
  }

  // Return session information
  return { isAuth: true, userId: session?.userId }; // Return whether user is authenticated and user ID
});
