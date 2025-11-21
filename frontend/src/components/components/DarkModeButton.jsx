import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <button
        className="p-3 rounded-full transition-all duration-300"
        aria-label="Alternar modo escuro"
      >
        <Moon size={24} className="text-gray-400" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {dark ? (
        <Sun
          size={24}
          className="text-orange-400 transition-colors duration-300 hover:text-yellow-300"
        />
      ) : (
        <Moon
          size={24}
          className="text-gray-700 transition-colors duration-300 hover:text-gray-900"
        />
      )}
    </button>
  );
}