"use server";

import { compare } from "bcrypt";

export const comparePasswords = async ({ credentialsPassword, userPassword }: { credentialsPassword: string; userPassword: string }) => compare(credentialsPassword, userPassword);
