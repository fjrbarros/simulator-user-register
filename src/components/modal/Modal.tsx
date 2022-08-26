import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from '../';

const portalRoot = document.getElementById('portal-root') as HTMLElement;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.themeMode.backgroundSecondary};
  color: ${({ theme }) => theme.themeMode.textColor};
  max-width: 90%;
  max-height: 90%;
  min-width: 300px;
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 20px 10px;
  position: relative;
`;

const ModalTitle = styled.p`
  font-size: 1.5rem;
`;

const ModalClose = styled.button`
  border-radius: 50%;
  padding: 7px 12px 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 400ms ease;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
  }
  &:hover i {
    color: ${({ theme }) => !theme.themeMode.isModeDark && '#fff'};
  }
`;

const IconClose = styled.i`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.themeMode.textColor};
`;

const ModalContent = styled.div`
  padding: 10px;
`;

const ModalFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const ScrollDisabled = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

interface IProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Background>
        <StyledModal>
          <ModalHeader>
            <ModalTitle>Cadastro de usuario</ModalTitle>
            <ModalClose onClick={onClose}>
              <IconClose className="fa-solid fa-xmark" />
            </ModalClose>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
          <ModalFooter>
            <Button onClick={onClose} label="Cancelar" />
            <Button label="Salvar" />
          </ModalFooter>
        </StyledModal>
      </Background>
      <ScrollDisabled />
    </>,
    portalRoot,
  );
};

export default Modal;
