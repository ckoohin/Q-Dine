import { cookies } from "next/headers";
import type { User } from "@/lib/types/auth.type";
import http from "../services/http";

export async function getMeServer(): Promise<User | null> {
  const cookieStore = await cookies();

  try {
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await http.get<User>("/auth/me", {
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