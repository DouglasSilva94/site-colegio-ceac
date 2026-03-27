import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Coluna 1: Sobre o CEAC */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">CEAC</h3>
            <p className="text-sm leading-relaxed">
              Centro Educacional Abreu Carmo: Transformando o futuro através do afeto e da metodologia interacionista em Rio das Ostras.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/centroeducacionalabreucarmo/" className="hover:text-blue-400 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ensino" className="hover:text-white transition">Ensino Infantil e Fundamental</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition">Sobre a Instituição</Link></li>
              <li><Link href="#" className="hover:text-white transition">Matrículas 2026</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span>Rua Macaé, 241 - Jardim Mariléa, Rio das Ostras - RJ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span>(22) 99942-7236</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span>contato@ceacro.com.br</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Localização */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horário</h4>
            <p className="text-sm">Segunda a Sexta</p>
            <p className="text-lg font-bold text-white">07:00 – 18:30</p>
            <p className="text-xs mt-2 text-slate-500">Sábado e Domingo: Fechado</p>
          </div>
        </div>

        {/* Assinatura Gen Sistemas */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Centro Educacional Abreu Carmo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 group">
            <span className="text-slate-500">Desenvolvido por</span>
            <Link 
              href="https://gensistemas.com.br" 
              className="font-bold text-blue-400 flex items-center gap-1 hover:text-blue-300 transition"
            >
              Gen Sistemas <ExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;