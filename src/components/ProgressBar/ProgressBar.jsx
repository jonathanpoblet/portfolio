import { CDBProgress, CDBContainer } from "cdbreact";

// eslint-disable-next-line react/prop-types
export const ProgressBar = ({ percentage }) => {
  return (
    <CDBContainer className="progress-bar">
        <CDBProgress value={ percentage } colors="light"/>
    </CDBContainer>
  );
};