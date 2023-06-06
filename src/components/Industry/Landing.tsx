import React, { ReactNode, useEffect, useState } from "react";

export interface ILandingProps {
  children: ReactNode;
}

export const Landing = (props: ILandingProps) => {
  const { children } = props;
  return <div className="industry-landing">{children}</div>;
};
