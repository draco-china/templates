import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";
import LocaleSwitcher from "../components/locale-switcher";

export const Route = createFileRoute("/demo/i18n")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#282c34] text-[calc(10px+2vmin)] text-white">
        <img
          alt="logo"
          className="pointer-events-none h-[40vmin] animate-[spin_20s_linear_infinite]"
          height="auto"
          src="/logo.svg"
          width="auto"
        />
        <p>{m.example_message({ username: "TanStack Router" })}</p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs"
          rel="noopener noreferrer"
          target="_blank"
        >
          {m.learn_router()}
        </a>
        <div className="mt-3">
          <LocaleSwitcher />
        </div>
      </header>
    </div>
  );
}
