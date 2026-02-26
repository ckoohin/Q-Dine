import Link from "next/link";

export default function AuthButton() {
  // Sau này bạn thay bằng state: loggedIn ? UserMenu : LoginButton
  return (
    <Link
      href="/login"
      className="flex min-w-[100px] items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-105 active:scale-95 transition-all"
    >
      Đăng nhập
    </Link>
  );
}