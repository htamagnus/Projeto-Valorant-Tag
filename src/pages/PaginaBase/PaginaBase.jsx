import React from "react";
import Header from "../../components/Header/Header";
import FavoritosProvider from "../../contextos/Favoritos";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
  return (
    <main>
      <Header />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Footer />
    </main>
  );
}
