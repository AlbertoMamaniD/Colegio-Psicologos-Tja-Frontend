import React from "react";
import { PageHero } from "../../layouts/PageHero";

export const AcercaDe: React.FC = () => {
  return (
    <>
      <PageHero />
      <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
        <h1>Acerca de Nosotros</h1>
        <p>Información sobre el colegio...</p>
      </main>
    </>
  );
};
