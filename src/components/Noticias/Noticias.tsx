import React from "react";
import { PageHero } from "../../layouts/PageHero";
import { Carousel } from "../../layouts/Carousel";
import { Eventos } from "./Eventos";

export const Noticias: React.FC = () => {
  return (
    <>
      <PageHero />
      <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
        <h1>Noticias y Eventos</h1>
        <p>Últimas noticias y eventos del colegio...</p>
      </main>
      <Carousel/>
      <Eventos/>
    </>
  );
};
