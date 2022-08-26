import styled from 'styled-components';
import { Header, Modal, PrimaryContainer, Button, Form } from './components';
import { useAppContext } from './store';

const ContainerButtons = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px;
`;

const App = () => {
  const { openModal, setOpenModal } = useAppContext();

  return (
    <>
      <PrimaryContainer isFullSize>
        <Header text="Cadastro de usuário" />
        <ContainerButtons>
          <Button label="Pesquisar" />
          <Button label="Cadastrar" onClick={() => setOpenModal(true)} />
        </ContainerButtons>
      </PrimaryContainer>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form>
          <input type="text" placeholder="teste" />
        </Form>
      </Modal>
    </>
  );
};

export default App;
