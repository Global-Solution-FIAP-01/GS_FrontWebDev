import { useState } from "react";
import { X, User } from "lucide-react";

const Modal = ({ open, onClose, data }) => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState("");

  if (!open || !data) return null;

  const handleRecommend = () => {
    alert(`Você recomendou ${data.nome}! 🎉`);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return alert("Digite uma mensagem");
    alert(`Mensagem enviada para ${data.nome}: \n\n"${message}"`);
    setMessage("");
    setShowMessageBox(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-surface text-surface-foreground w-[95%] max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border border-border animate-fadeIn p-8">

        {/* Botão Fechar fixo */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 bg-surface/80 backdrop-blur-md border border-border p-2 rounded-full
          shadow-sm hover:shadow-md hover:bg-muted transition z-[999]"
        >
          <X size={22} />
        </button>

        {/* Ícone no lugar da foto */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center shadow border-4 border-accent">
            <User className="text-muted-foreground opacity-70 w-14 h-14" />
          </div>

          <h2 className="text-3xl font-bold text-accent mt-4">{data.nome}</h2>
          <p className="text-muted-foreground">{data.cargo} — {data.localizacao}</p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-2">Habilidades Técnicas</h3>
            <div className="flex gap-2 flex-wrap">
              {data.habilidadesTecnicas?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-secondary text-white text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Experiências</h3>
            {data.experiencias?.map((exp, index) => (
              <div key={index} className="p-4 rounded-xl bg-muted border border-border">
                <p className="font-semibold">{exp.empresa}</p>
                <p className="text-sm text-muted-foreground">{exp.inicio} até {exp.fim}</p>
                <p className="text-muted-foreground mt-1">{exp.descricao}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Botões */}
        <div className="flex gap-4 mt-10 justify-center">
          <button
            onClick={handleRecommend}
            className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Recomendar profissional
          </button>

          {!showMessageBox && (
            <button
              onClick={() => setShowMessageBox(true)}
              className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              Enviar mensagem
            </button>
          )}
        </div>

        {/* Caixa de mensagem */}
        {showMessageBox && (
          <div className="mt-6 border border-border p-4 rounded-xl bg-muted">
            <textarea
              className="w-full p-3 rounded-lg bg-card text-card-foreground border border-border focus:outline-none"
              placeholder={`Escreva uma mensagem para ${data.nome}...`}
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex gap-3 justify-end mt-3">
              <button
                onClick={() => setShowMessageBox(false)}
                className="px-4 py-2 rounded-lg bg-muted-foreground text-white hover:bg-secondary transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-secondary transition"
              >
                Enviar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Modal;
