import styled from "styled-components";

const WrapperDay = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
`;

const WrapperBTN = styled.div`
  /* display: inline-block; */
  width: 80px;
  /* height: 35px; */
  /* background-color: aqua; */
`;

const BTN = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 70px;
  height: 30px;
  margin: 2px;
  padding: 2px;
  color: black;
`;

const Days = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 80px;
  /* color: inherit; */
`;

const Time = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 40px;
  /* color: inherit; */
`;

export {
  WrapperDay,
  WrapperBTN,
  Days,
  BTN,
  Time
}