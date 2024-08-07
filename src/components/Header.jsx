import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openCart } from "../store/productSlice";

const Header = () => {
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(openCart());
  };
  return (
    <StyledHeader>
      <h1>ONLINE SHOP 🎀🛒 </h1>
      <button onClick={openCartHandler}>💌CART💌</button>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 5px 40px;
  background-color: #e28dcb;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  & > h1 {
    color: white;
  }
  & > button {
    width: 300px;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    font-weight: 900;
    cursor: pointer;
    border: 1px solid red;
    background-color: #d85ab6;
    color: white;
  }
`;
