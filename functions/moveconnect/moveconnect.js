const fetch = require('node-fetch');

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

exports.handler = async (event) => {
  const {
    first_name,
    last_name,
    email_address,
    contact_number,
    moving_from,
    moving_to,
    how_did_you_hear,
  } = JSON.parse(event.body);

  const data = JSON.stringify({
    type: { code: 'R', text: 'Removal' },
    method: { code: 'Road', text: 'Road' },
    removalsType: { code: 'CO', text: 'Country Removal' },
    referral: {
      source: 'Web-FRN',
      comments: how_did_you_hear,
      otherInfo: '',
    },
    brandCode: 'FRN',
    branchCode: 'FRN',
    moveManager: 'LW1',
    locations: {
      origin: {
        contact: {
          firstName: first_name,
          lastName: last_name,
          mobile: contact_number,
          email: email_address,
        },
        address: {
          postcode: moving_from,
          state: '',
          country: 'Australia',
        },
      },
      destination: {
        contact: {
          title: '',
          firstName: first_name,
          lastName: last_name,
          mobile: contact_number,
          email: email_address,
        },
        address: {
          postcode: moving_to,
          state: '',
          country: 'Australia',
        },
      },
    },
  });

  return fetch(API_ENDPOINT, {
  method: 'POST',
  body: data,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  // eslint-disable-next-line no-console
  .then((json) => console.log(json))
  .then((json) => ({
    statusCode: 200,
    body: JSON.stringify(json, null, 2),
  }))
  .catch((error) => ({ statusCode: 422, body: String(error) }));
};
