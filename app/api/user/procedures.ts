import type { User } from "@/core/types/user";

const BASE_URL = process.env.BASE_URL;

export const getUser = async (): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}/api/user`);
    const user = await response.json();
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
