import React from "react";
import { useQuery } from "graphql-hooks";
import "./Contacts.css";

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
  const { loading, error, data } = useQuery(CONTACT_QUERY, {
    variables: {
      contactInput: {
        input: "45",
      },
    },
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";
  return (
    <ul>
      {data.contacts.map(
        ({ _id, name, birthday, phone_number, address }, idx) => {
          return (
            <li key={_id} className="container">
              <img
                className="user-avatar"
                src={require(`../assets/images/image${idx + 1}.png`)}
              />

              <div className="sub-container">
                <div className="label">
                  {name}, {birthday}, {phone_number}
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
