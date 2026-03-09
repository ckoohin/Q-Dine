import { cookies } from "next/headers";
import type { User } from "@/lib/types/auth.type";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1';

export async function getMeServer(): Promise<User | null> {
  const cookieStore = await cookies();

  try {
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await axios.get<User>(`${baseURL}/auth/me`, {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data;
  } catch (err) {
    console.log("getMeServer error:", err);
    return null;
  }
}