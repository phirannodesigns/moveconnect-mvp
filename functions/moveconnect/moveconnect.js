const fetch = require('node-fetch');
const { nanoid } = require('nanoid')

const API_ENDPOINT = 'https://rest.moveconnect.com/movewareUAT/v1/jobs';

const headers = {
  'mw-correlation-id': nanoid(),
  'mw-company-id': '34501',
  'mw-username': 'pmapi',
  'mw-password': 'yta6-$_g7z_XW8h',
  'mw-request-id': nanoid(),
  'Content-Type': 'application/json',
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

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
  headers,
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
