import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  ScrollView,
  FlatList,
  Text
} from "react-native";

import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import RecipeCard from "../recipe_card";
import styles from "./styles";

class RecipesListing extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  static renderContentHolder() {
    return (
      <View style={styles.loaderWrap}>
        <ActivityIndicator size="large" color="#ccc" />
      </View>
    );
  }

  renderHeader = () => {
    return (
      <View>
        <Text style={styles.listHeader}>{"Recipes"}</Text>
        <Text style={styles.listSubHeader} />
      </View>
    );
  };

  renderFooter = () => {
    return (
      <Button
        title="Load More"
        onPress={this.handleShowAll}
        buttonStyle={styles.loadMoreTrigger}
        titleStyle={styles.loadMoreText}
        clear="true"
      />
    );
  };

  renderRecipeCard = ({ item }) => {
    return (
      <RecipeCard
        recipe={item}
        key={item.id}
        showItemDetail={this.props.navigateToRecipeDetail}
      />
    );
  };

  componentDidMount() {
    this.props.getListingData();
  }

  __keyExtractor(item) {
    return item.id;
  }

  renderData() {
    const { navigateToRecipeForm, listingData: data } = this.props;
    const listingData = [...data, ...data];
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.containerWrap}>
          <FlatList
            numColumns={2}
            data={listingData}
            renderItem={this.renderRecipeCard}
            extraData={this.state}
            keyExtractor={this.__keyExtractor}
            style={styles.listContainer}
            containerStyle={styles.container}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
          />
        </ScrollView>
      </View>
    );
  }

  render() {
    return this.props.listingData
      ? this.renderData()
      : RecipesListing.renderContentHolder();
  }
}
11;

RecipesListing.propTypes = {
  listingData: PropTypes.array.isRequired
};

export default RecipesListing;
