import React from 'react';
import styled from 'styled-components';
import ToggleTheme from '../buttons/toggleTheme/ToggleTheme';

const StyledHeader = styled.header`
  padding: 30px 25px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.themeMode.backgroundSecondary};
  box-shadow: ${({ theme }) => theme.themeMode.header.boxShadow};
`;

interface IPropStyle {
  flex?: number;
  display?: string;
  justifyContent?: string;
}

const Flex = styled.div<IPropStyle>`
  flex: ${({ flex }) => flex || 0};
  display: ${({ display }) => display || 0};
  justify-content: ${({ justifyContent }) => justifyContent || 0};
`;

const Text = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;

const Header: React.FC<{ text: string }> = ({ text }) => {
  return (
    <StyledHeader>
      <Flex flex={1} />
      <Flex flex={2}>
        <Text>{text}</Text>
      </Flex>
      <Flex flex={1} display="flex" justifyContent="end">
        <ToggleTheme />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
