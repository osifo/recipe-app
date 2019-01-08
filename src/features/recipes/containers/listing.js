import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RecipesListing from "../components/listing";
import { getListingData } from "../actions";

const mapStateToProps = ({ recipesData }) => {
  return {
    listingData: recipesData.listings,
    loading: recipesData.meta.isLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getListingData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesListing);
