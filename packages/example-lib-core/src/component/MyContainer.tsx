import { ReactNode } from "react";

export type MyContainerProps = {
  children: ReactNode;
};

export const MyContainer = (props: MyContainerProps) => {
  return (
    <>
      <div>
        aaa<br></br>
        {props.children}
      </div>
    </>
  );
};
