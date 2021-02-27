import {
  Container,
  ImageStyled,
  DescribeStyled,
  PriceStyled,
  ButtonStyled,
  DivStyled,
  Card,
  DivPlaceStyled,
  H3Styled,
  DivData,
  Main,
  ButtonEndStyled,
  DivContaineStyled,
  QtdProducts,
  PriceTotal,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { removeCartThunks } from "../../Store/modules/Cart/thunks";

const ProductsCart = () => {
  const dispatch = useDispatch();
  const { cartReduces } = useSelector((state) => state);

  const handleRemoveCart = (id) => {
    dispatch(removeCartThunks(id));
  };

  return (
    <Main>
      <Container>
        {cartReduces.map((ele, index) => (
          <Card key={index}>
            <ImageStyled src={ele.image} />
            <DivContaineStyled>
              <DescribeStyled>{ele.describe}</DescribeStyled>
              <PriceStyled>R${ele.price}</PriceStyled>
            </DivContaineStyled>
            <ButtonStyled onClick={() => handleRemoveCart(ele.id)}>
              Excluir
            </ButtonStyled>
          </Card>
        ))}
      </Container>
      <DivStyled>
        <DivPlaceStyled>
          <H3Styled>Resumo da Compra</H3Styled>
          <DivData>
            <QtdProducts>{cartReduces.length} Produtos</QtdProducts>
            <PriceTotal>
              {cartReduces.reduce((acu, prod) => acu + Number(prod.price), 0)}
            </PriceTotal>
          </DivData>
          <ButtonEndStyled>Finalizar Compra</ButtonEndStyled>
        </DivPlaceStyled>
      </DivStyled>
    </Main>
  );
};

export default ProductsCart;
