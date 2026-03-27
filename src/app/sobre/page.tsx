import React from 'react';
import { Heart, Users, ShieldCheck, MapPin } from 'lucide-react';

export default function SobreNos() {
  const valores = [
    { icon: <Heart className="text-red-500" />, title: "Afeto", desc: "Acreditamos que o aprendizado real acontece onde há acolhimento." },
    { icon: <Users className="text-blue-500" />, title: "Interação", desc: "Metodologia interacionista: o aluno como protagonista do saber." },
    { icon: <ShieldCheck className="text-green-500" />, title: "Segurança", desc: "Ambiente monitorado e preparado para o bem-estar dos alunos." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Seção Principal */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Nossa História</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Compromisso com a educação no <span className="text-blue-600">Jardim Mariléa.</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            O Centro Educacional Abreu Carmo nasceu com o propósito de oferecer a Rio das Ostras uma educação que vai além dos livros. Nossa instituição se consolidou como referência pelo atendimento humanizado e pela busca constante por inovação pedagógica.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Localizados na Rua Macaé, oferecemos uma estrutura pensada para cada etapa do desenvolvimento, desde os primeiros passos na Creche até a formação profissional nos Cursos Técnicos.
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
             <img 
      src="https://diarioescola.com.br/wp-content/uploads/2023/10/infraestrutura-escolar_01.jpg" 
      alt="Fachada do colégio"
      className="w-full h-full object-cover" 
    />
             <div className="bg-blue-100 w-full h-full flex items-center justify-center text-blue-400 text-xs p-4 text-center italic">Foto: Estrutura Escolar</div>
          </div>
          <div className="h-64 bg-slate-200 rounded-2xl mt-8 overflow-hidden shadow-lg">
             {/* Foto de alunos em atividade */}
              <img 
      src="https://www.multimeios.com.br/wp-content/uploads/2018/12/educacao-infantil-1024x683.jpg" 
      alt="Fachada do colégio"
      className="w-full h-full object-cover" 
    />
             <div className="bg-green-100 w-full h-full flex items-center justify-center text-green-400 text-xs p-4 text-center italic">Foto: Atividade Pedagógica</div>
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Nossos Pilares</h2>
            <p className="text-slate-500 mt-2">O que nos guia todos os dias no CEAC</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {valores.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização / Mapa */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-blue-900 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl">
          <div className="md:w-1/2 p-12 text-white space-y-6">
            <h2 className="text-3xl font-bold">Venha nos conhecer</h2>
            <p className="opacity-80">Estamos de portas abertas para apresentar nossa metodologia e equipe para sua família.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span>Rua Macaé, 241 - Mariléa, Rio das Ostras</span>
              </div>
              <div className="bg-blue-800 p-4 rounded-xl inline-block">
                <p className="text-sm font-bold">Horário de Atendimento:</p>
                <p className="text-xs opacity-70">Segunda a Sexta: 07h às 18h30</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[300px] bg-slate-300">
             {/* Aqui você pode integrar um Iframe do Google Maps futuramente */}
             <div className="w-full h-full flex items-center justify-center text-slate-500 italic">
               <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.444458315185!2d-41.9333333!3d-22.5222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96399999999999%3A0x99999999999999!2sR.%20Maca%C3%A9%2C%20241%20-%20Jardim%20Maril%C3%A9a%2C%20Rio%20das%20Ostras%20-%20RJ%2C%2028895-889!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Localização do CEAC Rio das Ostras"
    className="grayscale hover:grayscale-0 transition-all duration-500"
  />
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}