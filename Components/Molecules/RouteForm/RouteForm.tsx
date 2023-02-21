import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const RouteForm = ({ children }: Props) => {
  return <form>{children}</form>;
};
