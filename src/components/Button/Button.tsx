interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button
      className={`block text-3xl border-[2px] border-color-dark bg-color-dark py-5 px-10 cursor-pointer rounded-[100px] transition-[0.3s] ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
