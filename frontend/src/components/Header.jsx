import DarkModeButton from './components/DarkModeButton'
import { HEADER_LINKS } from '../mocks/texts'

const Header = () => {
  return (
    <header className="w-full bg-surface shadow-md border-b border-border transition-colors duration-300 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <h1 className="text-surface-foreground font-bold text-2xl">
          ProLink
        </h1>

        <nav className="hidden md:flex gap-18 text-surface-foreground font-medium">
          {HEADER_LINKS.map(({ href, label }) => (
            <a 
              key={href}
              href={href} 
              className="hover:text-accent transition-colors duration-200 hover:border-b"
            >
              {label}
            </a>
          ))}
        </nav>
        <DarkModeButton />
      </div>
    </header>
  )
}

export default Header