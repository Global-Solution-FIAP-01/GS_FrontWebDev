import { X } from "lucide-react";

const Modal = ({ open, onClose, data }) => {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-surface text-surface-foreground w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-xl p-8 relative border border-border animate-fadeIn">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-accent transition"
        >
          <X size={28} />
        </button>

        <h2 className="text-3xl font-bold text-accent mb-4">
          {data.title}
        </h2>

        <p className="text-muted-foreground mb-6">{data.resumo}</p>

        {data.foto && (
          <img
            src={data.foto}
            alt={data.title}
            className="rounded-xl w-full h-56 object-cover mb-6"
          />
        )}
        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold">Informações Gerais</h3>
            <p>Cargo: <span className="text-muted-foreground">{data.cargo}</span></p>
            <p>Localização: <span className="text-muted-foreground">{data.localizacao}</span></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Habilidades Técnicas</h3>
            <ul className="list-disc ml-6 text-muted-foreground">
              {data.habilidadesTecnicas?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Soft Skills</h3>
            <ul className="list-disc ml-6 text-muted-foreground">
              {data.softSkills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Experiências</h3>
            {data.experiencias?.map((exp, index) => (
              <div key={index} className="mt-2 border border-border rounded-md p-3">
                <p className="font-semibold">{exp.empresa} — {exp.cargo}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.inicio} até {exp.fim}
                </p>
                <p className="text-muted-foreground mt-1">{exp.descricao}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Formação</h3>
            {data.formacao?.map((f, index) => (
              <p key={index} className="text-muted-foreground">
                {f.curso} — {f.instituicao} ({f.ano})
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Projetos</h3>
            {data.projetos?.map((p, index) => (
              <a
                key={index}
                href={p.link}
                target="_blank"
                className="block text-accent hover:underline"
              >
                {p.titulo} — {p.descricao}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Idiomas</h3>
            {data.idiomas?.map((lang, index) => (
              <p key={index} className="text-muted-foreground">
                {lang.idioma}: {lang.nivel}
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transition">
            Recomendar profissional
          </button>
          <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold hover:bg-accent hover:text-white transition">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
