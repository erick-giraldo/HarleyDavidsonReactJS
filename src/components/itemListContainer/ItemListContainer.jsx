import React from "react";
import "../../assets/scss/index.scss";

const ItemListContainer = (props) => {
  const { usersList:user } = props;

  return <h1 className="greeting">Bienvenido {user[0].name}</h1>;
};

export default ItemListContainer;