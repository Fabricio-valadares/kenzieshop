import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 100px;
  display: flex;
  background-color: #fee859;
  color: #333;
  justify-content: space-between;
  border-bottom: 1px solid #0000001a;
  align-items: center;
`;

export const DivAlert = styled.div`
  background-color: red;
  position: absolute;
  left: 50%;
  top: 5px;
  width: 162px;
  height: 45px;
  display: flex;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Logo = styled.div`
  margin-left: 20px;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 200;
`;

export const DivNumber = styled.div`
  border-radius: 50%;
  position: relative;
  background-color: #00f;
  width: 17px;
  color: #fff;
  height: 17px;
  text-align: center;
  font-size: 13px;
  left: 30px;
  bottom: 7px;
`;

export const DivStyled = styled.div`
  display: flex;
  margin-right: 20px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;

export const DivStyledCard = styled.div`
  display: flex;
  justify-content: center;
  width: 174px;
  display: flex;
  justify-content: space-around;
  margin-right: 10px;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin-left: 10px;
`;
