import styled from 'styled-components';

const StyledSecondaryContainer = styled.div<IPropsStyle>`
  background-color: ${({ theme }) => theme.themeMode.backgroundSecondary};
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
  children?: React.ReactNode;
  className?: string;
}

const SecondaryContainer: React.FC<IProps> = ({
  children,
  width,
  height,
  isFullSize,
  className,
}) => {
  return (
    <StyledSecondaryContainer
      width={width}
      height={height}
      isFullSize={isFullSize}
      className={className}
    >
      {children}
    </StyledSecondaryContainer>
  );
};

export default SecondaryContainer;
