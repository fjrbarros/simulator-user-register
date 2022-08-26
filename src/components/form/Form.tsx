interface IProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  id?: string;
}

const Form: React.FC<IProps> = ({ children, onSubmit, id }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event);
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
