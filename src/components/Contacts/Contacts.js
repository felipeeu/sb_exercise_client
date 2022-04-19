import React from "react";
import { useQuery } from "graphql-hooks";
import { parseBirthday, getAge } from "../../utils";
import "./Contacts.css";
import { useRecoilValue } from "recoil";
import { inputValueState } from "../../state/atoms";
import {
  NO_RESULTS_MESSAGE,
  LOADING_MESSAGE,
  ERROR_MESSAGE,
} from "../../constants";

const CONTACT_QUERY = `query Query($contactInput: ContactInput) {
  contacts(filter: $contactInput) {
    _id
    name
    birthday
    picture
    address
    phone_number
  }
}`;

const Contacts = () => {
  const inputValue = useRecoilValue(inputValueState);
  const { loading, error, data } = useQuery(CONTACT_QUERY, {
    variables: {
      contactInput: {
        input: inputValue,
      },
    },
  });

  if (loading) return <div>{LOADING_MESSAGE}</div>;
  if (error) return <div>{ERROR_MESSAGE}</div>;
  if (data.contacts.length === 0) return <div>{NO_RESULTS_MESSAGE}</div>;

  return (
    <ul>
      {data.contacts.map(
        ({ _id, name, birthday, phone_number, address, picture }) => {
          return (
            <li key={_id} className="container">
              <img
                className="user-avatar"
                src={require(`../../assets/images/${picture}`)}
              />
              <div className="sub-container">
                <div className="label">
                  {name}, {getAge(parseBirthday(birthday))}, {phone_number}
                </div>
                <p className="description">{address}</p>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};
export { Contacts };