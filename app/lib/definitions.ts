// Type definition for session payload
export type SessionPayload = {
  userId?: string; // Optional user ID
  expiresAt?: Date; // Optional expiration date
};

// Type definition for form state
export type FormState =
  | {
      errors?: {
        name?: string[]; // Optional array of name-related errors
        email?: string[]; // Optional array of email-related errors
        password?: string[]; // Optional array of password-related errors
      };
      message?: string; // Optional message
    }
  | undefined; // Undefined if form state is not defined
