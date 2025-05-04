import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { FooterNav } from "./nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 relative">
      <div className="container mx-auto py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Criando experiências digitais excepcionais através de design e desenvolvimento inovadores.
            </p>
            <SocialLinks />
          </div>

          <FooterNav
            title="SERVIÇOS"
            titleColor="text-orange-400"
            links={[
              { label: "Desenvolvimento Web", href: "#" },
              { label: "Arte Digital & Design", href: "#" },
              { label: "Soluções E-commerce", href: "#" },
              { label: "Marketing Digital", href: "#" },
            ]}
          />

          <FooterNav
            title="EMPRESA"
            titleColor="text-white"
            links={[
              { label: "Sobre Nós", href: "#" },
              { label: "Nosso Trabalho", href: "#" },
              { label: "Carreiras", href: "#" },
              { label: "Contato", href: "#" },
            ]}
          />

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
