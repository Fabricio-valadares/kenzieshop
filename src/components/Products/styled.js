import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #eee;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const ImageStyled = styled.img`
  width: 10rem;
`;
export const DescribeStyled = styled.p`
  padding: 0 18px;
`;

export const DivContaineStyled = styled.div`
  border-top: 0.5px solid #eee;
`;
export const PriceStyled = styled.h4`
  padding: 1px 18px;
`;
export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  width: 14rem;
  background: #3483fa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  height: 2.8rem;
  border-radius: 7px;
  font-weight: 200;
  color: #fff;
  font-size: 1rem;

  &:hover {
    background-color: #2968c8;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 10px;
  font-weight: 300;
  line-height: 1.3;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
`;
