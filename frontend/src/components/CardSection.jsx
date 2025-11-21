import { useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";

const CardSection = () => {
  const [profiles, setProfiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [backendError, setBackendError] = useState(false);
  const [search, setSearch] = useState("");

  const fetchProfiles = (query = "") => {
    setLoading(true);

    const url = query
      ? `http://localhost:3001/api/profiles/search?nome=${query}`
      : `http://localhost:3001/api/profiles`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Falha no backend");
        return res.json();
      })
      .then((data) => {
        setProfiles(data);
        setBackendError(false);
      })
      .catch(() => {
        setBackendError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchProfiles(value);
  };

  const handleCardClick = (id) => {
    fetch(`http://localhost:3001/api/profiles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
        setOpen(true);
      });
  };

  return (
    <section className="flex flex-col items-center w-full bg-surface p-4 min-h-[400px]">
      <input
        type="text"
        placeholder="Buscar por nome, cargo, cidade ou habilidade..."
        value={search}
        onChange={handleSearchChange}
        className="w-1/2 p-3 mb-10 rounded-xl bg-card text-foreground border border-border focus:outline-none"
      />

      {loading && (
        <div className="grid grid-cols-4 gap-20 w-full">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-64 h-60 bg-muted rounded-xl animate-pulse opacity-60"
            ></div>
          ))}
        </div>
      )}

      {!loading && backendError && (
        <div className="text-center p-10 bg-card border border-border rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-surface-foreground mb-2">
            Servidor indisponível
          </h2>
          <p className="text-muted-foreground">
            Não foi possível conectar ao backend.<br />
            Verifique se o servidor está rodando.
          </p>
        </div>
      )}

      {!loading && !backendError && (
        <div className="grid grid-cols-4 gap-20">
          {profiles.length > 0 ? (
            profiles.map((item) => (
              <Card key={item.id} data={item} onClick={handleCardClick} />
            ))
          ) : (
            <p className="text-muted-foreground text-center">
              Nenhum perfil encontrado 🔍
            </p>
          )}
        </div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} data={selected} />
    </section>
  );
};

export default CardSection;
