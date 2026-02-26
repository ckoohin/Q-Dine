import Container from "@/components/Container";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import AuthButton from "./AuthButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <Container
        className="flex items-center justify-between px-6 py-4"
        classNameContent="flex flex-row items-center justify-between max-w-[1300px] w-full"
      >
        <Brand />

        <nav className="hidden md:flex items-center gap-10">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-4">
          <AuthButton />
        </div>
      </Container>
    </header>
  );
}