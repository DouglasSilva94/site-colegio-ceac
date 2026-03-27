import React from 'react';
import { Baby, School, Clock, Star, Lightbulb, Heart } from 'lucide-react';

export default function Ensino() {
  const diferenciais = [
    { icon: <Clock className="text-blue-600" />, title: "Horário Estendido", text: "Atendimento das 07:00 às 18:30, ideal para pais que trabalham." },
    { icon: <Lightbulb className="text-yellow-500" />, title: "Interacionismo", text: "O aluno aprende construindo o conhecimento através da experiência." },
    { icon: <Heart className="text-red-500" />, title: "Socioemocional", text: "Foco no desenvolvimento da inteligência emocional e empatia." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Dinâmico */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nossa Proposta Pedagógica</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Educação Infantil e Ensino Fundamental I com foco no desenvolvimento integral e humano.
        </p>
      </section>

      {/* Diferenciais Rápidos */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Segmento: Educação Infantil */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <Baby size={18} /> Educação Infantil (Creche)
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Onde cada descoberta é celebrada.</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            No CEAC, a Educação Infantil é vista como a base de tudo. Nossa creche oferece um ambiente lúdico e seguro, onde a criança é estimulada a explorar o mundo ao seu redor através de brincadeiras direcionadas e muito afeto.
          </p>
          <ul className="space-y-3">
            {['Estimulação Psicomotora', 'Iniciação à Musicalização', 'Higiene e Nutrição Cuidadosa', 'Espaços de Brincar Adaptados'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700">
                <Star size={16} className="text-yellow-500 fill-yellow-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 bg-slate-100 h-80 rounded-3xl flex items-center justify-center text-slate-400 italic shadow-inner">
          <img 
      src="https://cdn.prod.website-files.com/64130dafe2e39078358d50e1/64c802bade4941d4f62e1b04_Adaptando-se_a%CC%80_creche_blog.jpg" 
      alt="Crianças na creche"
      className="w-full h-full object-cover" 
    />
        </div>
      </section>

      {/* Segmento: Ensino Fundamental */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row-reverse items-center gap-12 border-t border-slate-100">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <School size={18} /> Ensino Fundamental I
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Autonomia para aprender e crescer.</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Do 1º ao 5º ano, consolidamos a alfabetização e o raciocínio lógico. Nossa abordagem interacionista permite que o conteúdo ganhe vida, conectando o que se aprende em sala de aula com o cotidiano do aluno.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-blue-800">Projetos</h4>
              <p className="text-xs text-slate-500">Trabalhos interdisciplinares que estimulam a pesquisa.</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-blue-800">Valores</h4>
              <p className="text-xs text-slate-500">Ética e cidadania presentes em cada aula.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-100 h-80 rounded-3xl flex items-center justify-center text-slate-400 italic shadow-inner">
           <img 
      src="https://hmgnovosite.agostinianomendel.com.br/wp-content/uploads/2022/09/Criancas-Fund-1-em-sala-de-aula-2-scaled.jpg"
      alt="Alunos fundamental 1"
      className="w-full h-full object-cover" 
    />
        </div>
      </section>

      {/* Chamada para Matrícula */}
      <section className="bg-yellow-400 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Garanta a vaga do seu filho no CEAC</h2>
          <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg">
            Agendar Visita Pedagógica
          </button>
        </div>
      </section>
    </main>
  );
}