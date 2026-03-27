import React from 'react';
import { BookOpen, CheckCircle, Award, Clock } from 'lucide-react';

export default function CursosTecnicos() {
  const cursos = [
    {
      nome: "Técnico em Administração",
      duracao: "18 meses",
      descricao: "Formação completa para gestão de empresas, RH, finanças e logística. Ideal para o comércio local e empresas de serviços.",
      tags: ["Reconhecido pelo MEC", "Estágio"]
    },
    {
      nome: "Técnico em Informática",
      duracao: "15 meses",
      descricao: "Foco em suporte, redes e introdução ao desenvolvimento, preparando o aluno para o setor de TI em expansão na região.",
      tags: ["Laboratório Próprio", "Prático"]
    },
    {
      nome: "Formação de Professores",
      duracao: "3 anos (Normal)",
      descricao: "Habilitação para atuar na Educação Infantil e anos iniciais do Ensino Fundamental. Tradição do CEAC na formação docente.",
      tags: ["Magistério", "Prática Pedagógica"]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Cabeçalho */}
      <header className="bg-blue-800 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold">Cursos Técnicos</h1>
        <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto">
          Acelere sua entrada no mercado de trabalho com formação técnica de qualidade em Rio das Ostras.
        </p>
      </header>

      {/* Diferenciais */}
      <section className="container mx-auto px-6 -mt-10 grid md:grid-cols-3 gap-6">
        {[
          { icon: <Award className="text-blue-600" />, title: "Diploma Reconhecido", text: "Certificados válidos em todo o território nacional." },
          { icon: <Clock className="text-blue-600" />, title: "Aulas Noturnas", text: "Horários flexíveis para quem já trabalha ou estagia." },
          { icon: <BookOpen className="text-blue-600" />, title: "Foco Prático", text: "Metodologia voltada para as necessidades das empresas locais." }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            <p className="text-sm text-slate-500 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Lista de Cursos */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Nossos Cursos Disponíveis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition">
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {curso.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{curso.nome}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {curso.descricao}
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-8">
                  <Clock size={16} /> Duração: {curso.duracao}
                </div>
                <button className="w-full py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-900 transition">
                  Solicitar Grade Curricular
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Pronto para dar o próximo passo na sua carreira?</h2>
        <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition">
          Inscreva-se Agora
        </button>
      </section>
    </main>
  );
}