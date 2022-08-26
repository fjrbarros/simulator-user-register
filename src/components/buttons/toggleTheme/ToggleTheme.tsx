import styled from 'styled-components';
import { useThemeContext } from '../../../theme';

const InputCheck = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + label div {
    transform: translateX(24px);
  }
`;

const LabelCheck = styled.label`
  width: 50px;
  height: 26px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.2);
`;

const Moon = styled.i`
  color: #d5d5d5;
`;

const Sun = styled.i`
  color: #d9d900;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

const ToggleTheme = () => {
  const { toggleThemeMode, isModeDark } = useThemeContext();

  return (
    <>
      <InputCheck
        type="checkbox"
        id="checkbox"
        checked={!isModeDark}
        onChange={toggleThemeMode}
      />
      <LabelCheck htmlFor="checkbox">
        <Moon className="fas fa-moon" />
        <Sun className="fas fa-sun" />
        <Ball className="ball" />
      </LabelCheck>
    </>
  );
};

export default ToggleTheme;
