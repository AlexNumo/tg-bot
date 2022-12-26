import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PositionTable = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ScheduleLink = styled(NavLink)`
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 400;
    margin-top: 35px;
    background-color: aqua;
    border-radius: 22px;
    color: black;
    text-decoration: none;
    border: 1px solid;
    width: 100px;
    text-align: center;
`;

export {
  PositionTable,
  ScheduleLink,
};