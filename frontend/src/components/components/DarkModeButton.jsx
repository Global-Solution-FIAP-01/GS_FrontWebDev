import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);

  // define o tema inicial corretamente
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  // atualiza o tema ao alternar
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
      aria-label="Alternar modo escuro"
    >
      {dark ? (
        <Sun
          size={24}
          className="text-orange-400 transition-colors duration-300 hover:text-yellow-300"
        />
      ) : (
        <Moon
          size={24}
          className="text-gray-900 transition-colors duration-300 hover:text-gray-700"
        />
      )}
    </button>
  );
}
