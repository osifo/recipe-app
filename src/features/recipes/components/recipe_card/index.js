import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  Vibration
} from "react-native";
import { Card, Divider } from "react-native-elements";
import PropTypes from "prop-types";
import styles from "./styles";

class RecipeCard extends Component {
  handleCardPress = () => {
    const { showItemDetail, recipe } = this.props;
    showItemDetail(recipe);
  };

  render() {
    const { recipe } = this.props;
    return (
      <View key={recipe.id} style={styles.cardContainer}>
        <TouchableHighlight onPress={this.handleCardPress}>
          <View style={styles.imageWrap}>
            <Image style={[styles.banner]} source={{ uri: recipe.imageUrl }} />
            <View style={styles.cardDetailsWrap}>
              <View style={styles.metadata}>
                <Text
                  style={styles.smallerTextBold}
                >{`${recipe.name
                  .trim()
                  .toUpperCase()} \u00b7 ${recipe.theme.toUpperCase()} \u00b7 ${recipe.serving.toUpperCase()}`}</Text>
              </View>
              <Text style={styles.smallText}>{recipe.summary}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    summary: PropTypes.string,
    desciprion: PropTypes.string,
    serving: PropTypes.string,
    duration: PropTypes.string,
    categoryId: PropTypes.number,
    theme: PropTypes.string
  }),
  showItemDetail: PropTypes.func
};

export default RecipeCard;
