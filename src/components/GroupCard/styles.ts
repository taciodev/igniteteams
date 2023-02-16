import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  max-width: 320px;

  margin: 0 auto 20px;
  padding: 24px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;


export const Text = styled.Text`
  margin-left: 20px;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const UsersIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))``;


