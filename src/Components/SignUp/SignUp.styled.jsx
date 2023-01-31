import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(194, 209, 99, 0.5);
`;

const Dialog = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  margin: auto;
  padding-top: 25px;
  /* margin-left: auto;
  margin-right: auto;
  margin-right: auto;
  margin-right: auto; */
  padding-left: 20px;
  border: 3px solid;
  border-radius: 12px;
  background-color: #9cda9e;
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
  SubBTN,
};