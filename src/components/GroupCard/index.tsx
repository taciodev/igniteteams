import { TouchableOpacityProps } from "react-native";
import { Container, Text, UsersIcon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Text>{title}</Text>
    </Container>
  );
}