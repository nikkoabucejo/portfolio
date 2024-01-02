import { NextResponse } from "next/server";
import type { User } from "@/core/types/user";

const user: User = {
  name: {
    first: "Nikko",
    last: "Abucejo",
  },
  email: "me@nikkoabucejo.com",
  domain: "nikkoabucejo.com",
};

export const GET = async () => {
  return NextResponse.json(user);
};
