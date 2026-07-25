import { z } from "zod";

export const reservationSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  guests: z
    .string()
    .min(1, "Select number of guests")
    .refine((v) => Number(v) >= 1 && Number(v) <= 20, {
      message: "Guests must be between 1 and 20",
    }),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().max(500, "Message is too long").optional(),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;
