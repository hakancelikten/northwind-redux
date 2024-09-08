import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem } from 'reactstrap';

class CategoryList extends Component {

  componentDidMount() {
    //uygulama ayağa kalktığı anda bizim categoryList state'i değişmiş olacak
    this.props.actions.getCategories();
  }

  render() {
    return (
      <div>
        {/* <h3>Categories {this.props.categories.length}</h3> */}
        <h3>Categories </h3>
        <ListGroup>
          {
            this.props.categories.map(category => (
              <ListGroupItem key={category.id} onClick={() => this.props.actions.changeCategory(category)}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
        <h5> Seçili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }
}

//bu component'lerin proplarına bir state bağla
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer, // bizim store'larda belirli bir reducer var o store'daki changeCategoryReducer 'a map et
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);