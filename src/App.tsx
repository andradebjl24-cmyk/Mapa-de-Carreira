import { motion } from "framer-motion";
import "./App.css";

const carreira = [
  {
    fase: "Desenvolvedora Full Stack Júnior",
    descricao:
      "Construção da base técnica, desenvolvimento de projetos reais e aprofundamento em front-end, back-end e experiência do usuário.",
    hard: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git/GitHub",
      "Figma",
      "MySQL",
    ],
    soft: [
      "Comunicação",
      "Criatividade",
      "Empatia",
      "Trabalho em equipe",
    ],
  },

  {
    fase: "Desenvolvedora Full Stack Pleno",
    descricao:
      "Aprofundamento em arquitetura, APIs, banco de dados, metodologias ágeis e desenvolvimento de aplicações escaláveis.",
    hard: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "Node.js",
      "Docker",
      "Testes",
    ],
    soft: [
      "Organização",
      "Resolução de problemas",
      "Autonomia",
      "Colaboração",
    ],
  },

  {
    fase: "Desenvolvedora Full Stack Sênior",
    descricao:
      "Participação estratégica em decisões técnicas, liderança de soluções e desenvolvimento de produtos digitais completos.",
    hard: [
      "Arquitetura",
      "Cloud",
      "CI/CD",
      "Performance",
      "Escalabilidade",
    ],
    soft: [
      "Liderança",
      "Visão estratégica",
      "Mentoria",
      "Gestão técnica",
    ],
  },

  {
    fase: "Product Engineer / Liderança",
    descricao:
      "Integração entre produto, experiência do usuário e engenharia para criar soluções digitais humanas e escaláveis.",
    hard: [
      "UX/UI",
      "Produto Digital",
      "Analytics",
      "Research",
      "Design Systems",
    ],
    soft: [
      "Storytelling",
      "Negociação",
      "Comunicação estratégica",
      "Inovação",
    ],
  },

  {
    fase: "Carreira Global",
    descricao:
      "Atuação em empresas globais, participação em eventos internacionais e desenvolvimento de produtos de impacto.",
    hard: [
      "Inglês Avançado",
      "Arquitetura Global",
      "Produtos Escaláveis",
    ],
    soft: [
      "Adaptabilidade",
      "Networking",
      "Visão global",
    ],
  },
];

function App() {
  return (
    <main className="container">

      <motion.header
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="photo"></div>

        <div className="hero-info">
          <p className="tag">MAPA DE CARREIRA</p>

          <h1>Leticia Andrade da Silva Pereira</h1>

          <h2>Desenvolvedora Web Java em formação | Instituto PROA | Graduada em Análise e Desenvolvimento de Sistemas</h2>

          <p>
            Desenvolvedora apaixonada por tecnologia humana,
            experiências digitais, UX/UI, acessibilidade
            e produto digital.
          </p>

          <div className="links">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=leticiaandradealj@gmail.com" target="_blank">
              Email
            </a>

            <a
              href="https://github.com/andradebjl24-cmyk"
              target="_blank"
            >
              GitHub
            </a>

            <a href="">
              LinkedIn
            </a>

           <a href="/Curriculo.pdf" target="_blank">
            Currículo
           </a>
          </div>
        </div>
      </motion.header>

      <section className="section">
        <h2>SOBRE MIM</h2>

        <p>
          Minha paixão pela tecnologia começou em 2019.
          Em 2023 iniciei minha graduação em ADS na UNIBTA,
          começando do absoluto zero.
        </p>

        <p>
          No PROA encontrei meu maior crescimento profissional,
          trabalhando em projetos reais, apresentações,
          eventos e desenvolvimento prático.
        </p>

        <p>
          Hoje meu foco está em desenvolvimento full stack,
          UX/UI, produto digital e criação de experiências
          digitais humanas.
        </p>
      </section>

      <div className="content-grid">

        <section className="main-content">

          <div className="section">
            <h2>MAPA DE CARREIRA</h2>

            <div className="career-grid">

              {carreira.map((item, index) => (
                <motion.div
                  className="career-card"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3>{item.fase}</h3>

                  <p>{item.descricao}</p>

                  <div className="skills-area">
                    <div>
                      <h4>Hard Skills</h4>

                      <ul>
                        {item.hard.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4>Soft Skills</h4>

                      <ul>
                        {item.soft.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </section>

        <aside className="side-content">

          <div className="section">
            <h2>HARD SKILLS</h2>

            <Skill title="HTML / CSS" value="90%" />
            <Skill title="JavaScript" value="80%" />
            <Skill title="React" value="75%" />
            <Skill title="Java" value="65%" />
            <Skill title="Spring Boot" value="55%" />
            <Skill title="MySQL" value="70%" />
            <Skill title="Git / GitHub" value="80%" />
            <Skill title="Figma" value="85%" />
            <Skill title="Trello" value="85%" />
          </div>

          <div className="section">
            <h2>FORMAÇÃO</h2>

            <div className="education">
              <h3>ADS — UNIBTA</h3>

              <p>
                Formação em Análise e Desenvolvimento
                de Sistemas.
              </p>

              <span>2023 - 2025</span>
            </div>

            <div className="education">
              <h3>PROA</h3>

              <p>
                Desenvolvimento profissional e projetos
                reais na área tech.
              </p>

              <span>2026</span>
            </div>
          </div>

          <div className="section">
            <h2>PROJETOS</h2>

            <div className="project">
              <h3>Lentes do Tempo</h3>

              <p>
                Projeto desenvolvido no PROA com foco
                em experiência digital.
              </p>
            </div>

            <div className="project">
              <h3>Ever Rise</h3>

              <p>
                Solução voltada à acessibilidade e
                mobilidade assistida.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>IDIOMAS</h2>

            <div className="tags">
              <span>Português — Nativo</span>
              <span>Inglês — Básico</span>
            </div>
          </div>

        </aside>

      </div>

    </main>
  );
}

function Skill({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="skill">

      <div className="skill-title">
        <span>{title}</span>

        <span>{value}</span>
      </div>

      <div className="bar">

        <motion.div
          className="progress"
          initial={{ width: 0 }}
          whileInView={{ width: value }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

      </div>

    </div>
  );
}

export default App;