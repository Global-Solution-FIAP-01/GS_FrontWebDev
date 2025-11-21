require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const profiles = require("./profiles.json");

app.get("/api/profiles", (req, res) => {
  res.status(200).json(profiles);
});

app.get("/api/profiles/search", (req, res) => {
  const { area, cidade, tecnologia, nome } = req.query;

  let resultado = [...profiles];

  if (nome) {
    resultado = resultado.filter((p) =>
      p.title.toLowerCase().includes(nome.toLowerCase())
    );
  }

  if (area) {
    resultado = resultado.filter(
      (p) => p.area?.toLowerCase() === area.toLowerCase()
    );
  }

  if (cidade) {
    resultado = resultado.filter((p) =>
      p.localizacao?.toLowerCase().includes(cidade.toLowerCase())
    );
  }

  if (tecnologia) {
    resultado = resultado.filter((p) =>
      p.habilidadesTecnicas?.some(
        (skill) => skill.toLowerCase() === tecnologia.toLowerCase()
      )
    );
  }

  res.status(200).json(resultado);
});

app.get("/api/profiles/:id", (req, res) => {
  const { id } = req.params;
  const profile = profiles.find((p) => p.id === Number(id));

  if (!profile) {
    return res.status(404).json({ error: "Perfil não encontrado" });
  }

  res.status(200).json(profile);
});

/*
  -----------------------------------------------------
  SERVIDOR
  -----------------------------------------------------
*/

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
