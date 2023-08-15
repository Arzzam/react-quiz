import styled, { StyleSheetManager } from "styled-components";
import isValidProp from "@emotion/is-prop-valid";
import { IButtonProps, IStyledButtonProps } from "./buttonTypes";

const StyledButton = styled.button<IStyledButtonProps>`
  display: block;
  font-family: inherit;
  color: ${(props) =>
    props.correct
      ? "var(--color-light)"
      : props.wrong
      ? "var(--color-darkest)"
      : "inherit"};
  font-size: 2rem;
  border: 2px solid
    ${(props) =>
      props.correct === true
        ? "var(--color-theme)"
        : props.wrong === true
        ? "var(--color-accent)"
        : "var(--color-dark)"};
  background-color: ${(props) =>
    props.correct === true
      ? "var(--color-theme)"
      : props.wrong === true
      ? "var(--color-accent)"
      : "var(--color-dark)"};
  padding: 1rem 2.4rem;
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
`;

const Button = ({
  children,
  className,
  correct,
  wrong,
  ...props
}: IButtonProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(props) => isValidProp(props)}>
      <StyledButton
        className={`${className}`}
        {...props}
        correct={correct ? true : false}
        wrong={wrong ? true : false}
      >
        {children}
      </StyledButton>
    </StyleSheetManager>
  );
};

export default Button;
