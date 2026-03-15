"use client";
import AuthScreen from "@/features/auth/_components/AuthScreen";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

export default function LoginPage() {
  const params = useSearchParams();

  useEffect(() => {
    const error = params.get("error");

    if (error === "unauthorized") {
      toast.error("Bạn không có quyền truy cập");
    }
  }, [params]);

  return (
    <>
      <AuthScreen mode="login" />
      <Toaster richColors position="top-right" />
    </>
  )

}