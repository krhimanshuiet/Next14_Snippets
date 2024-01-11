import React from "react";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const layout = ({ children, modal }: Props) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default layout;
