import React from "react";
import { CDBProgress, CDBContainer } from "cdbreact";

export const ProgressBar = ({ percentage }) => {
  return (
    <CDBContainer className="progress-bar">
        <CDBProgress value={ percentage } colors="light"/>
    </CDBContainer>
  );
};