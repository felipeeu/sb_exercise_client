import moment from "moment";

const parseBirthday = (birthday) => (birthday ? birthday.split(" ")[0] : "");

const getAge = (birthday) => (birthday ? moment(birthday).fromNow(true) : "");

export { parseBirthday, getAge };
// Testing changes in github
