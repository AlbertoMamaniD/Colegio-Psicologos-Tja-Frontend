import React from "react";
import { PageHero } from "../../layouts/PageHero";
import { Carousel } from "../../layouts/Carousel";
import { Eventos } from "./Eventos";

export const Noticias: React.FC = () => {
  return (
    <>
      <PageHero />
     
      <Carousel/>
      <Eventos/>
    </>
  );
};
