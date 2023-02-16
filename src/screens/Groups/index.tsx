import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      
      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <GroupCard title="Galera do Ignite" onPress={() => console.log("Opa")} />

    </Container>
  );
}
