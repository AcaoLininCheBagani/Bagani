export default function Header() {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Bagani</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
    );
  }