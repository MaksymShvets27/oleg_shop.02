import styled from "styled-components";
import { AdminFormSelect } from "../Admin/Admin.styled";

export const SearchPageContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;
  padding: 10px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px 0;
    gap: 30px;
  }
`;

export const SearchPageInput = styled.input`
  display: flex;
  background: inherit;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 330px;
    font-size: 15px;
  }
`;

export const SearchPageSelect = styled(AdminFormSelect)`
  width: 180px;
  min-height: auto;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 340px;
    font-size: 15px;
  }
`;

export const NoGoods = styled.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const SearchPageCheckBoxsGroup = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SearchPageCheckBox = styled.input``;

export const SearchPageLegend = styled.h4`
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 23px;
  }
`;

export const SearchPageLabel = styled.label`
  display: flex;
  background: inherit;
  border: 2px solid black;
  border-radius: 8px;
  padding: 3px 5px;
  color: black;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
