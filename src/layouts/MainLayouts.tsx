import React, { ReactNode } from "react";
import AppHeader from "src/components/Header";
import { AppFooter } from "src/components/Footer";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export interface ILayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
}
