import React from "react";

import CalcPanel from "../../components/CalcPanel";
import Header from "../../components/Header";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <section>
        <Header />
      </section>

      <section>
        <CalcPanel />
      </section>
    </Container>
  );
};

export default Home;
