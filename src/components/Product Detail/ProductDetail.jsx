import React from "react";
import { useParams } from "react-router-dom";
import { topcollections } from "../../constants/index";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(topcollections);

  const collectionId = id;
  const collection = topcollections.find((item) => item.id === collectionId);

  console.log(collection);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
