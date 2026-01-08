import React from "react";
import { PageHero } from "../../layouts/PageHero";

export const Noticias: React.FC = () => {
  return (
    <>
      <PageHero />
      <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
        <h1>Noticias y Eventos</h1>
        <p>Últimas noticias y eventos del colegio...</p>
      </main>
    </>
  );
};
