import * as actionTypes from "./actionTypes";

export function getProductsSuccess(categories) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: categories };
}

export function updateProductsSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function createProductsSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  let url = "http://localhost:3000/products";
  if (product && product.id) {
    url += "/" + product.id;
  }

  return fetch(url, {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductsSuccess(savedProduct))
          : dispatch(createProductsSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) url += "?categoryId=" + categoryId;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => dispatch(getProductsSuccess(res)));
  };
}
