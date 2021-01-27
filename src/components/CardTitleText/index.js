import React from "react";
import ArticleContext from "../../utils/ArticleContext";

function CardTitleText() {
  return <ArticleContext.Consumer>{({ title }) => <h2>{title}</h2>}</ArticleContext.Consumer>;
}

export default CardTitleText;
