import { createSelector } from "reselect";
import roles from "../../constants/roles";

const userSelector = (state: any) => state.User;

export const getProfileSelector = createSelector(userSelector, user => {
  if (user) {
    return user.profile;
  } else {
    return null;
  }
});

export const getIsTeacherSelector = createSelector(userSelector, user => {
  if (user) {
    return user.profile.role === roles.Teacher;
  } else {
    return false;
  }
});

export const getIsStudentSelector = createSelector(userSelector, user => {
  if (user) {
    return user.profile.role === roles.Student;
  } else {
    return false;
  }
});
