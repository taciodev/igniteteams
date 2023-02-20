import { TouchableOpacityProps } from "react-native";
import { Container, Title, UsersIcon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Title>{title}</Title>
    </Container>
  );
}
