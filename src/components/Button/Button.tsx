import styled from "styled-components";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  display: block;
  font-family: inherit;
  color: inherit;
  font-size: 2rem;
  border: 2px solid var(--color-dark);
  background-color: var(--color-dark);
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  border-radius: 100px;
  transition: 0.3s;

  &:not([disabled]):hover {
    background-color: var(--color-darkest);
  }

  &:hover.btn-option {
    transform: translateX(1 rem);
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }

  .btn-ui {
    float: right;
  }

  .btn-option {
    width: 100%;
    text-align: left;
  }
`;

const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
