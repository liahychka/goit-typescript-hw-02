type Mes = { 
  message: string;
}

const ErrorMessage: React.FC<Mes> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;