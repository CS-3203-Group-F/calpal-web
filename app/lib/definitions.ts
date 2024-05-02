export type SessionPayload = {
  userId?: string;
  expiresAt?: Date;
};

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
