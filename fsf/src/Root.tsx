import React from "react";
import { Outlet } from "react-router-dom";
import { PageWrapper } from "./PageWrapper/PageWrapper";

export const Root = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};
