import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <h5> Seçili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }
}

//bu component'lerin proplarına bir state bağla
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer // bizim store'larda belirli bir reducer var o store'daki changeCategoryReducer 'a map et
  }
}
export default connect(mapStateToProps)(CategoryList);