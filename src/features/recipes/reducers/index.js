import update from "immutability-helper";
import { RECIPE_ACTIONS } from "../constants";

let initialState = {
  listings: null,
  details: null,
  meta: {
    isLoading: false,
    error: null
  }
};

const populateListingData = (state, { payload }) =>
  update(state, {
    $merge: {
      listings: payload,
      meta: {
        isLoading: false
      }
    }
  });

const triggerFetchListingData = state =>
  update(state, {
    $merge: {
      meta: {
        isLoading: true
      }
    }
  });

const populateRecipeDataError = (state, data) =>
  update(state, {
    $merge: {
      loading: false,
      recipeCreateSuccess: false,
      recipeCreated: data.payload.success,
      error: data.payload.error,
      uploadSuccess: undefined
    }
  });

const indicateError = ({ error }) =>
  update({
    meta: {
      $merge: {
        isLoading: false,
        error
      }
    }
  });

const recipesData = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_ACTIONS.fetchRecipesRequest:
      return triggerFetchListingData(state);

    case RECIPE_ACTIONS.fetchRecipesSuccess:
      return populateListingData(state, action);

    case RECIPE_ACTIONS.fetchRecipesError:
      return indicateError(action);

    default:
      return state;
  }
};

export default recipesData;
