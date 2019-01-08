// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import RecipeListing from "features/recipes/containers/listing";
import recipeStore from "recipeStore";

export default class RecipeApp extends Component {
  render() {
    return (
      <Provider store={recipeStore}>
        <Layout>
          <RecipeListing />
        </Layout>
      </Provider>
    );
  }
}
