import React, { ReactNode } from "react";

import { Container, H1 } from "./style";

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => (
  <Container>
    <H1>{children}</H1>
  </Container>
);

export default PageTitle;
export { PageTitleProps };