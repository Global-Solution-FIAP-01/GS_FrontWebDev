import DarkModeButton from './components/DarkModeButton'

const Header = () => {
  return (
    <header className="w-full bg-surface shadow-md border-b border-border transition-colors duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <h1 className="text-surface-foreground font-bold text-xl">
          MinhaPlataforma
        </h1>
        <nav className="hidden md:flex gap-12 text-surface-foreground font-medium">
          <a 
            href="#home" 
            className="hover:text-accent transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#descricao" 
            className="hover:text-accent transition-colors duration-200"
          >
            Descrição
          </a>
          <a 
            href="#cards" 
            className="hover:text-accent transition-colors duration-200"
          >
            Cards
          </a>
          <a 
            href="#contato" 
            className="hover:text-accent transition-colors duration-200"
          >
            Contato
          </a>
        </nav>
        <DarkModeButton />
      </div>
    </header>
  )
}

export default Header