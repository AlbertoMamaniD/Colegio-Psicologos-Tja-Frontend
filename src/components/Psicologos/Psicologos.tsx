import React from "react";
import { PageHero } from "../../layouts/PageHero";

export const Psicologos: React.FC = () => {
  return (
    <>
      <PageHero />
      <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
        <h1>Psicólogos</h1>
        <p>Directorio de psicólogos afiliados...</p>
      </main>
    </>
  );
};
