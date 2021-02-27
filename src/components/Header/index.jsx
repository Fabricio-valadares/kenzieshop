import { useState } from "react";
import { FaSignInAlt, FaShoppingCart, FaTimesCircle } from "react-icons/fa";
import {
  HeaderStyled,
  Logo,
  DivStyled,
  Text,
  DivAlert,
  DivStyledCard,
  DivNumber,
} from "./styled";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();
  const [view, setView] = useState(false);
  const { cartReduces } = useSelector((state) => state);

  return (
    <HeaderStyled>
      <Logo onClick={() => history.push("/")}>LOGO</Logo>
      <DivStyled>
        <DivStyledCard onClick={() => history.push("/cart")}>
          <DivNumber>{cartReduces.length}</DivNumber>
          <FaShoppingCart size={22} />
          <Text>Carrinho</Text>
        </DivStyledCard>
        <DivStyledCard onClick={() => setView(!view)}>
          {view && (
            <DivAlert>
              {"Não Funciona :)"}{" "}
              <FaTimesCircle style={{ "margin-left": "10px" }} />
            </DivAlert>
          )}
          <FaSignInAlt size={22} />
          <Text>Entrar</Text>
        </DivStyledCard>
      </DivStyled>
    </HeaderStyled>
  );
};

export default Header;
