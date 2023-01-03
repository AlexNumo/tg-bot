import styled from "styled-components";

const WrapperDay = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
`;

const WrapperBTN = styled.div`
  /* display: inline-block; */
  width: 80px;
  height: 35px;
  /* background-color: aqua; */
`;

const BTN = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  /* margin: 2px; */
  border-radius: 0px;
`;

const Days = styled.span`
  width: 80px;
`;

const Time = styled.span`
  width: 40px;
`;

export {
  WrapperDay,
  WrapperBTN,
  Days,
  BTN,
  Time
}