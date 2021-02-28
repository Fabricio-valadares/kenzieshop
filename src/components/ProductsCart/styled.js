import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
  justify-content: center;
  align-content: center;

  @media (max-width: 600px) {
    order: 2;
  }
`;

export const ImageStyled = styled.img`
  width: 10rem;
`;

export const DivContaineStyled = styled.div`
  border-top: 0.5px solid #eee;
`;
export const DescribeStyled = styled.p`
  padding: 0 18px;
`;
export const PriceStyled = styled.h4`
  padding: 1px 18px;
`;
export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  width: 14rem;
  background: red;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  height: 2.8rem;
  border-radius: 7px;
  font-weight: 200;
  color: #fff;
  font-size: 1rem;

  &:hover {
    background-color: #e02424;
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

export const Main = styled.div`
  display: flex;
  background-color: #eee;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const DivStyled = styled.div`
  width: 47%;

  @media (max-width: 600px) {
    width: auto;
  }
`;
export const DivPlaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 10px;
  font-weight: 300;
  line-height: 1.3;
  justify-content: center;
  align-items: center;
  width: 250px;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
`;
export const H3Styled = styled.h3`
  font-size: 1.3rem;
`;
export const DivData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 209px;
`;
export const QtdProducts = styled.p``;
export const PriceTotal = styled.p`
  font-weight: 400;
`;
export const ButtonEndStyled = styled.button`
  outline: none;
  border: none;
  width: 14rem;
  background: red;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  height: 2.8rem;
  border-radius: 7px;
  font-weight: 200;
  color: #fff;
  font-size: 1rem;

  &:hover {
    background-color: #e02424;
  }
`;
