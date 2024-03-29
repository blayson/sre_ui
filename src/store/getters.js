//to handle state
export const getters = {
  allReviews: (state) => state.status.reviews.data,

  productCategories: (state) => state.categories,

  getTotal: (state) => state.status.reviews.response.total,

  getResponseData: (state) => state.status.reviews.response,

  getFeatureNames: (state) => state.featureNames,

  getSuggestionById: (state) => (dataId) => {
    for (const data of state.status.reviews.data) {
      if (dataId === data.reviews_suggestions_id) {
        return { changes: data.changes, reviewsId: data.reviews_id };
      }
    }
  },

  getUpdatedDataHistory: (state) => (index) => {
    for (const data of state.status.reviews.updatedDataHistory) {
      if (data.index === index) {
        return data;
      }
    }
    return null;
  },

  getInitialRowData: (state) => (dataId) => {
    for (const data of state.status.reviews.data) {
      if (dataId === data.id) {
        return data;
      }
    }
  },
};
