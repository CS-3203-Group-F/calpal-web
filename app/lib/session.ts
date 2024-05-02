// Importing necessary modules and functions
import "server-only"; // Importing server-only module
import { cookies } from "next/headers"; // Importing cookies function from next/headers
import { SignJWT, jwtVerify } from "jose"; // Importing SignJWT and jwtVerify functions from jose module
import { SessionPayload } from "@/app/lib/definitions"; // Importing SessionPayload type definition

// Encrypting and decrypting sessions
const secretKey = process.env.SESSION_SECRET; // Secret key for encryption/decryption (should be securely stored, preferably in environment variables)
const encodedKey = new TextEncoder().encode(secretKey); // Encoding the secret key

// Encrypts the payload using jose
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload) // Creating a JWT with the payload
    .setProtectedHeader({ alg: "HS256" }) // Setting the algorithm to HS256
    .setIssuedAt() // Setting the issued at time
    .setExpirationTime("7d") // Setting expiration time (7 days)
    .sign(encodedKey); // Signing the JWT with the secret key
}

// Descrypts the session into a readable format using jose
export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      // Verifying the JWT
      algorithms: ["HS256"], // Specifying the algorithm
    });
    return payload; // Returning the payload if verification is successful
  } catch (error) {
    console.log("Failed to verify session"); // Logging error if verification fails
  }
}

// Settings cookies
export async function createSession(userId: string) {
  // Sets the expiration date for a session, which right now is 7 days
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  // Calls the encrypt function, encrypting userId and expiration
  const session = await encrypt({ userId, expiresAt });

  // Sets the cookies using the Next.JS cookies() API. It is set on the server
  cookies().set("session", session, {
    // Setting session cookie
    httpOnly: true, // Making the cookie accessible only through HTTP requests
    secure: true, // Ensuring the cookie is sent over HTTPS only
    expires: expiresAt, // Setting expiration time for the cookie
    sameSite: "lax", // Setting SameSite attribute to lax for improved security
    path: "/", // Setting the path for which the cookie is valid
  });
}

// Deletes the session by deleting the cookie, can be called wherever
export function deleteSession() {
  cookies().delete("session"); // Deleting the session cookie
}
