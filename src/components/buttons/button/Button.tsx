import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.themeMode.backgroundSecondary};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: ${({ theme }) => theme.themeMode.textColor};
  transition: all 400ms ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.themeMode.button.boxShadow};
  }
`;

interface IProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Modal: React.FC<IProps> = ({ label, type = 'button', onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Modal;
