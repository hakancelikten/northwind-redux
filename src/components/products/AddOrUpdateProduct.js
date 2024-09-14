import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate kullanıyoruz
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail"; // Ürün detay bileşeni

function AddOrUpdateProduct({
  products,
  categories,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const { productId } = useParams(); // URL parametresini al
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    if (productId) {
      var fetchedProduct = getProductById(products, productId);
      setProduct(fetchedProduct || {});
    }
  }, [productId, categories, getCategories, products]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function getProductById(products, productId) {
    let product = products.find((product) => product.id == productId) || null;
    return product;
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

// Redux state'ini bileşene bağlamak için mapStateToProps fonksiyonu
const mapStateToProps = (state) => ({
  products: state.productListReducer,
  categories: state.categoryListReducer,
});

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
