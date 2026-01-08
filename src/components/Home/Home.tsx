import React from "react";
import { PageHero } from "../../layouts/PageHero";

export const Home: React.FC = () => {
  return (
    <>
      <PageHero />
      <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          {/* Título y subtítulo movidos a PageHero */}
          {/* Botones movidos a PageHero */}
        </section>
        <div style={{ height: "150vh" }}></div>
      </main>
    </>
  );
};
