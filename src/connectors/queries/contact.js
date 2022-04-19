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

export { CONTACT_QUERY };
