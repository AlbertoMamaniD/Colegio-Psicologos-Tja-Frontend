import React from "react";

export const Home: React.FC = () => {
  return (
    <main style={{ padding: "2rem", minHeight: "calc(100vh - 400px)" }}>
      <h1>Bienvenido a MiApp</h1>
      <p>Aquí va todo tu contenido principal...</p>
      <div style={{ height: "150vh" }}></div>
    </main>
  );
};
