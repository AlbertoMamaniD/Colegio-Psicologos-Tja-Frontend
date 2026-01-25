import React from "react";
import { PageHero } from "../../layouts/PageHero";
import { Notices } from "./Notices";
import { Trayectoria } from "./Trayectoria";
import { ServiciosColegio } from "./ServiciosColegio";
import { Equipo } from "./Equipo";
export const Home: React.FC = () => {
  return (
    <>
      <PageHero />
      <Notices />
      <ServiciosColegio />
      <Equipo />
      <Trayectoria />


      
    </>
  );
};
