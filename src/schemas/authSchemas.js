import * as z from "zod";

export const registerSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6).max(255),
		confirmPassword: z.string().min(6).max(255),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(255),
});
