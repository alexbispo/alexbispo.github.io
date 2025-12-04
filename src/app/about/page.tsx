import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - alexBispo",
    description: "About me and this blog.",
};

export default function About() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-6">
                Sobre Mim
            </h1>
            <div className="prose prose-lg dark:prose-invert">
                <p>
                    Sou o Alex Bispo, engenheiro de software e especialista em dados. Sou de Embu das Artes, São Paulo, uma cidade conhecida por respirar arte e criatividade.
                </p>
                <p>
                    Meu foco atual é no desenvolvimento de produtos de software "AI natives" rentáveis, escaláveis e seguros em produção. Atualmente, estou explorando arquiteturas que integram Engenharia de Software e Inteligência Artificial para resolver problemas complexos de negócio.
                </p>
                <p>
                    Anteriormente, atuei como Arquiteto de Soluções e Tech Lead em grandes players como Itaú Unibanco e Banco do Brasil (pela Stefanini). No iFood, trabalhei no "core" de sistemas de alta performance, desenvolvendo microsserviços para detecção de fraude integrados a modelos de Machine Learning. Também tive a experiência enriquecedora de viver e trabalhar na Europa (Portugal) , desenvolvendo soluções globais para empresas como o Grupo M Contigo e Aubay.
                </p>
                <p>
                    Concluí meu MBA em Data Science e Analytics na USP , uma jornada acadêmica que se somou aos meus mais de 10 anos de experiência prática com Engenharia de Software. Este blog é onde compartilho projetos, pensamentos e reflexões sobre aquilo que mais me interessa no momento.
                </p>
                <p>
                    Estou ativo no <a href="https://linkedin.com/in/alex-bispo-de-oliveira-84152162">LinkedIn</a> e no <a href="https://github.com/alexbispo">GitHub</a>. Gosto de aprender sobre novos desafios técnicos e colaborar com times de alta performance. Entre em contato se quiser encontrar uma maneira de trabalharmos juntos!
                </p>
            </div>
        </div>
    );
}
