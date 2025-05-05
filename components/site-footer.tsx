export function Footer() {
  return (
    <footer className="border-t border-white/10 relative">
      <div className="container mx-auto py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 rounded-full p-2">
                <span className="text-2xl font-bold text-black">V</span>
              </div>
              <span className="text-xl tracking-widest font-bold">VELUS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Criando experiências digitais excepcionais através de design e desenvolvimento inovadores.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">SERVIÇOS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Arte Digital & Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Soluções E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Marketing Digital
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">EMPRESA</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Nosso Trabalho
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">CONTATO</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">contato@velus.com</li>
              <li className="text-gray-400">+55 (11) 99999-9999</li>
              <li className="text-gray-400">Av. Digital, 123 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Velus. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
