import React from 'react';
import { MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider">
            Matrículas Abertas 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Educação que transforma com <span className="text-blue-600">afeto e inovação.</span>
          </h1>
          <p className="text-lg text-slate-600">
            No Centro Educacional Abreu Carmo, unimos a prática interacionista ao desenvolvimento socioemocional, preparando seu filho para os desafios do futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://wa.me/5522999427236?text=Olá! Vi o site e gostaria de informações sobre as matrículas."
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition font-bold shadow-lg shadow-green-200"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </Link>
            <Link 
              href="/ensino"
              className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition font-bold"
            >
              Conhecer Metodologia <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="w-full h-[450px] bg-blue-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <div className="flex items-center justify-center h-full text-blue-500 bg-blue-100 italic p-8 text-center">
             <img 
      src="https://scontent-gig4-2.xx.fbcdn.net/v/t39.30808-6/484871522_122198627726249040_2125450075682617987_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeGnUrhDKfrFm-Nmljp7iM945KacIQjdQGHkppwhCN1AYfC_lEoEhuzyf5uqJeDnwDUJ-JZWoRnqLgWfA2KVQ4j5&_nc_ohc=z6hCYxrNNlYQ7kNvwGbGxHh&_nc_oc=Adpa64fZbhHukbUu0nhEgl_Cm2tOm9Ul-cowPBsbpxCKiMdnsgO5Tyu3W0sk4nFWZni8weRvoT8p3lLYpgDDZByT&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=C2zzg504OMSbwHJutRZAwA&_nc_ss=7a32e&oh=00_AfxYoN2a-ipqCEMSUKIw6fUni21-PNI_G26nhXpT1nX7Zg&oe=69CB619E" 
      alt="Fachada do colégio"
      className="w-full h-full object-cover" 
    />
            </div>
          </div>
          {/* Badge flutuante */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
            <p className="text-blue-600 font-bold text-2xl">07:00 – 18:30</p>
            <p className="text-slate-500 text-sm">Horário estendido para pais</p>
          </div>
        </div>
      </section>

      {/* Seção de Destaques Rápidos */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><MapPin /></div>
            <div>
              <h4 className="font-bold text-slate-800">Localização Privilegiada</h4>
              <p className="text-sm text-slate-500">No coração do Jardim Mariléa, Rio das Ostras.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Clock /></div>
            <div>
              <h4 className="font-bold text-slate-800">Período Integral</h4>
              <p className="text-sm text-slate-500">Segurança e cuidado durante todo o dia.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><MessageCircle /></div>
            <div>
              <h4 className="font-bold text-slate-800">Atendimento Direto</h4>
              <p className="text-sm text-slate-500">Comunicação facilitada entre escola e família.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}