"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importamos o componente de imagem do Next
import { Menu, X } from 'lucide-react'; // Removido o graduationCap que causava erro

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Ensino', href: '/ensino' },
    { name: 'Sobre Nós', href: '/sobre' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-blue-600 shadow-sm">
                <Image 
                  src="/logo-ceac.jpg" 
                  alt="Logo CEAC" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-blue-800 text-lg leading-tight">CEAC</span>
                <span className="hidden lg:block text-[10px] font-medium text-slate-500 uppercase tracking-tighter">
                  Centro Educacional Abreu Carmo
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-semibold transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/5522999427236"
              className="bg-blue-700 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition shadow-md shadow-blue-100 text-sm"
            >
              Matrículas
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 last:border-0"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/5522999427236"
              className="block w-full text-center bg-blue-700 text-white px-5 py-4 rounded-xl font-bold mt-4 shadow-lg"
            >
              Falar com a Escola
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;