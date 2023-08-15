interface IFooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: IFooterProps) => {
  return <div>{children}</div>;
};

export default Footer;
