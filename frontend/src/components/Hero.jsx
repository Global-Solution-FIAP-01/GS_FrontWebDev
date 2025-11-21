import { useEffect, useRef, useState } from "react";
import BannerLight from "../assets/BannerLight.png";
import BannerDark from "../assets/BannerDark.png";

const Hero = () => {
  const prefersDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");
  const initialBanner = prefersDark ? BannerDark : BannerLight;

  const [currentBanner, setCurrentBanner] = useState(initialBanner);
  const [prevBanner, setPrevBanner] = useState(null);
  const [animating, setAnimating] = useState(false);

  const currentBannerRef = useRef(currentBanner);
  useEffect(() => {
    currentBannerRef.current = currentBanner;
  }, [currentBanner]);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");

    const onThemeChange = () => {
      const newBanner = checkDark() ? BannerDark : BannerLight;

      if (newBanner === currentBannerRef.current) return;

      setPrevBanner(currentBannerRef.current);
      setCurrentBanner(newBanner);
      setAnimating(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setPrevBanner(null);
        setAnimating(false);
        timeoutRef.current = null;
      }, 800);
    };

    const observer = new MutationObserver(onThemeChange);
    observer.observe(document.documentElement, { attributes: true });
    onThemeChange();

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-end">
      {prevBanner && (
        <img
          src={prevBanner}
          alt="Previous Banner"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
            ${animating ? "opacity-0 scale-105" : "opacity-100 scale-100"}
          `}
        />
      )}
      <img
        src={currentBanner}
        alt="Current Banner"
        className={`absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${animating ? "scale-100" : "scale-100"}
        `}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      <div className="relative z-10 mb-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-orange-400 drop-shadow-lg">
          Conecte-se com profissionais incríveis
        </h1>
        <p className="text-gray-200 mt-3 text-lg max-w-2xl mx-auto">
          Crie seu perfil, compartilhe experiências e expanda sua rede.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition">
          <a href="#descricao">Começar agora</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
