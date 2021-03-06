const baseUrl = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1';

export function getContacts() {
  return fetch(`${baseUrl}/contacts`)
    .then(response => response.json())
    .catch(err => err);
}
