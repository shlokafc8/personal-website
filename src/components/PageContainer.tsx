import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-6 py-10 md:px-10">
      {children}
    </div>
  );
}
