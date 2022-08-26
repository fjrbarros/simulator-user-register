import styled from 'styled-components';

const StyledPrimaryContainer = styled.div<IPropsStyle>`
  background-color: ${({ theme }) => theme.themeMode.backgroundPrimary};
  color: ${({ theme }) => theme.themeMode.textColor};
  width: ${({ width, isFullSize }) => (isFullSize ? '100vw' : width || 'auto')};
  height: ${({ height, isFullSize }) =>
    isFullSize ? '100vh' : height || 'auto'};
`;

interface IPropsStyle {
  width?: string;
  height?: string;
  isFullSize?: boolean;
}

interface IProps extends IPropsStyle {
  children: React.ReactNode;
}

const PrimaryContainer: React.FC<IProps> = ({
  children,
  width,
  height,
  isFullSize,
}) => {
  return (
    <StyledPrimaryContainer
      width={width}
      height={height}
      isFullSize={isFullSize}
    >
      {children}
    </StyledPrimaryContainer>
  );
};

export default PrimaryContainer;
