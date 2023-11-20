import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
}

const CardContainer = styled.div`
  background: url("background_plant.jpg") center/cover no-repeat;
  border-radius: 20px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Card: React.FC<CardProps> = ({ children }) => (
  <CardContainer>
    <CardContent>{children}</CardContent>
  </CardContainer>
);

export default Card;
