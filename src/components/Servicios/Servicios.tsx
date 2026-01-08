import React from "react";
import { PageHero } from "../../layouts/PageHero";

export const Servicios: React.FC = () => {
  return (
    <>
      <PageHero />
      <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
        <h1>Servicios</h1>
        <p>Servicios ofrecidos por el colegio...</p>
      </main>
    </>
  );
};
