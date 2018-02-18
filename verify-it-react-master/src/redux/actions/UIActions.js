// show/hide sidebar on navigation
export const UPDATE_SIDEBAR_SHOW_STATUS = 'UPDATE_SIDEBAR_SHOW_STATUS';
const updateSidebarStatus = status => ({
  type : UPDATE_SIDEBAR_SHOW_STATUS,
  status
});
export const updateSideMenu = () => (dispatch) => {
  dispatch(updateSidebarStatus());
};

