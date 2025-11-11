import DarkModeButton from './components/DarkModeButton'

const Header = () => {
  return (
    <header className='w-full bg-white shadow-md'>
      <div className='flex items-center justify-between max-w-7xl mx-auto p-4'>
        <h1>MinhaPlataforma</h1>
        <nav className='hidden md:flex gap-12 text-gray-700 font-medium'>
          <a href="#home">Home</a>
          <a href="#descricao">Descrição</a>
          <a href="#cards">Cards</a>
          <a href="#contato">Contato</a>
        </nav>
        <DarkModeButton />
      </div>
    </header>
  )
}

export default Header