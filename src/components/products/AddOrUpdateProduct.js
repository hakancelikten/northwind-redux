import React, { useEffect, userState, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history, // bu reacttan gelen bişey. daha önce geldiğimiz sayfalara yönlendirme yapmak için kullandığımız birşey
  ...props
}) {
  //product state'ini setProduct fonksiyonuyla set edebilirim demektir.
  const [product, setProduct] = useState({ ...props.product });

  useEffect(() => {
    if (categories.length === 0) {
      // props'tan gelen categories içi boşsa kategorileri çek
      getCategories();
    }
    //burada state içerisindeki product nesnesine props'tan gelen product nesnesini set ettik
    setProduct({ ...props.product });
  }, [props.product]); // props.product'ı izle bu dom'a yerleştiği zaman bu işlemi bitirebilirsin demektir. Bunu kullanmadığımızda sonsuz döngüye girmektedir.

  function handleChange(event) {
    const { name, value } = event.target; // event target içerisindeki name ve value değerlerini bu şekilde bir const ile set edebiliyoruz.

    setProduct((previousProduct) => ({
      ...previousProduct, // önceki product'ı extend et yani onun üzerine yaz
      [name]: name === "categoryId" ? parseInt(value, 10) : value, //önceki product'ın yani state'teki product'ın name alanı içerisinde categoryId alanı varsa değerini integer'a çeviriyoruz.
    }));

    function handleSave(event) {
      event.preventDefault();
      saveProduct(product).then(() => {
        history.push("/");
      });
    }
  }
}
export function getProductById(products, productId) {
  let product = products.find((product) => product.id === product.id) || null;
  return product;
}

//ownProps: bizim component'lerimizin kendi içerisinde barındırdıkları prop'lara karşılık gelmektedir.
function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productReducer.length > 0
      ? getProductById(state.productReducer, productId)
      : {};
  return {
    product,
    products: state.productReducer,
    categories: state.categoryReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapDispatchToProps, mapStateToProps)(AddOrUpdateProduct);
