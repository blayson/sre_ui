import { HISTORY_SIZE } from "@/helpers/constants";

export const mutations = {
  SAVE_REVIEWS(state, reviews) {
    state.status.reviews.data = reviews;
  },

  SAVE_CATEGORIES(state, categories) {
    state.categories = categories;
  },

  SAVE_FEATURE_NAMES(state, featureNames) {
    state.featureNames = featureNames;
  },

  SAVE_SELECTED_CATEGORIES(state, selected) {
    state.selectedCategories = selected;
  },

  SAVE_CELL_UPDATES(state, payload) {
    state.status.reviews.updatedDataHistory.unshift(payload);
    if (state.status.reviews.updatedDataHistory.length > HISTORY_SIZE) {
      state.status.reviews.updatedDataHistory.pop();
    }
  },

  SAVE_EDITED_FEATURE_REVIEW_ID(state, payload) {
    state.editedFeatureReviewId = payload;
  },

  SAVE_RESPONSE(state, data) {
    state.status.reviews.response = data;
  },

  SET_ACTIVE_MENU_ITEM(state, data) {
    state.status.profile.activeMenuItem = data;
  },

  UNDO_LAST_UPDATE(state) {
    if (state.status.reviews.updatedDataHistory.length >= 1) {
      const undoState = state.status.reviews.updatedDataHistory.shift();
      state.status.reviews.poppedDataHistory.unshift(undoState);
    }
    // Pop last item from the array as we have maximum history size
    if (state.status.reviews.poppedDataHistory.length > HISTORY_SIZE) {
      state.status.reviews.poppedDataHistory.pop();
    }
  },

  REDO_LAST_UPDATE(state) {
    if (state.status.reviews.poppedDataHistory.length >= 1) {
      const redoState = state.status.reviews.poppedDataHistory.shift();
      state.status.reviews.updatedDataHistory.unshift(redoState);
    }
    // Pop last item from the array as we have maximum history size
    if (state.status.reviews.updatedDataHistory.length > HISTORY_SIZE) {
      state.status.reviews.updatedDataHistory.pop();
    }
  },

  NULLIFY_UNDO_REDO(state) {
    state.status.reviews.updatedData = [];
    state.status.reviews.updatedDataHistory = [];
    state.status.reviews.poppedDataHistory = [];
  },

  SAVE_ERROR(state, dataName, status) {
    state.status[dataName].error = status;
  },

  SAVE_RESPONSE_STATUS(state, dataName, status) {
    state.status[dataName].responseStatus = status;
  },

  SET_TAB(state, tab) {
    state.selectedReviewStatusTab = tab;
  },

  LOGIN_SUCCESS(state, user) {
    state.status.auth.loggedIn = true;
    state.status.auth.user = user;
  },
  LOGIN_FAILURE(state) {
    state.status.auth.loggedIn = false;
    state.status.auth.user = null;
  },
  LOGOUT(state) {
    state.status.auth.loggedIn = false;
    state.status.auth.user = null;
  },
  REGISTER_SUCCESS(state, status) {
    state.status.auth.loggedIn = false;
    state.status.auth.responseStatus = status;
  },
  UPDATE_USER_SUCCESS(state, status) {
    state.status.auth.responseStatus = status;
  },

  REGISTER_FAILURE(state, status) {
    state.status.auth.loggedIn = false;
    state.status.auth.responseStatus = status;
  },

  SAVE_ALL_USERS(state, data) {
    state.status.users.allUsers = data;
  },
};
