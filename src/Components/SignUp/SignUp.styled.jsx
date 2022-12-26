import styled from "styled-components";

const Wrapper = styled.tr`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(53, 51, 51, 0.5)
`;

const Dialog = styled.td`
  position: relative;
  width: 300px;
  height: 300px;
  /* top: 50%;
  left: 50%; */
  /* right: 50%;
  bottom: 50%; */
  margin: auto;
  margin-top: 20px;
  /* margin-top: auto;
  margin-left: auto; */
  border: 3px solid;
  background-color: #4feeee;
  /* margin: 10px; */
`;


export {
  Wrapper,
  Dialog
};