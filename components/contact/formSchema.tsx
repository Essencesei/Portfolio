"use client";

import * as z from "zod";

export const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Please include your name",
  }),
  user_email: z.string().email({
    message: "Please provide a valid email address",
  }),
  message: z.string().min(50, {
    message: "Please include a message with at least 50 characters",
  }),
});
