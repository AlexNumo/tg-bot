import styled from "styled-components";

const Wrapper = styled.tr`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(53, 51, 51, 0.5);
`;

const Dialog = styled.td`
  position: relative;
  width: 400px;
  height: 400px;
  padding-left: 50px;
  border: 3px solid;
  background-color: #9997e2;
`;

const KindStyle = styled.span`
  color: #cc2048;
`;

const SubBTN = styled.button`
  width: 100px;
  margin: 10px;
  margin-left: 0px;
  padding: 5px;
  border-radius: 5px;
`;

export {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN
};