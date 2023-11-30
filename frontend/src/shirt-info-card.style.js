import styled from "styled-components";
import { Text } from "../../../components/typography/text.components";
import { Card } from "react-native-paper";

export const ShirtCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ShirtCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ShirtBrand = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.brand.secondary};
`;

export const ShirtSex = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.brand.secondary};
`;

export const ShirtTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const ShirtPrice = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.brand.secondary};
`;

export const ShirtDate = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const Info = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[5]};
  justify-content: space-between;
`;

export const DeleteBtn = styled.Button``;
