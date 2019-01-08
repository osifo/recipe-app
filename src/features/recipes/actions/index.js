import { loadRecipesListing } from "../api";
import { RECIPE_ACTIONS } from "../constants";

const recipesActionSuccess = (actionType, payload) => ({
  type: RECIPE_ACTIONS[`${actionType}Success`],
  success: true,
  payload
});

const recipesActionError = (actionType, error) => ({
  type: RECIPE_ACTIONS[`${actionType}Error`],
  success: false,
  error
});

const triggerFetchRecipes = () => ({
  type: RECIPE_ACTIONS.fetchRecipesRequest
});

export const getListingData = () => {
  const actionType = "fetchRecipes";

  return async dispatch => {
    dispatch(triggerFetchRecipes());

    try {
      const { error, success, data } = await loadRecipesListing();

      if (success) {
        return dispatch(recipesActionSuccess(actionType, data));
      } else {
        return dispatch(recipesActionError(actionType, error));
      }
    } catch (error) {
      return dispatch(recipesActionError(actionType, error));
    }
  };
};
