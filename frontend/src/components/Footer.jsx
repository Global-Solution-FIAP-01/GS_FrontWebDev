import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contato" className="w-full bg-surface text-surface-foreground border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <h1 className="text-xl font-semibold text-primary">
          ProLink
        </h1>
        <div className="flex gap-6 text-2xl" style={{ color: "var(--color-primary)" }}>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <FaGithub />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <FaInstagram />
          </a>
        </div>
        <h2 className="text-lg font-semibold text-primary hover:opacity-80 transition-opacity">
            Email: prolink@gmail.com
        </h2>
        <p className="text-sm text-muted-foreground">
          © 2025 — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
