import "isomorphic-fetch";
import { FETCH_DOMAIN, FETCH_CATEGORY } from "./types";

const URL = "http://localhost:3090/api";

export function fetchDomains() {
  return function(dispatch) {
    fetch(`${URL}/domains`).then(res => res.json()).then(json =>
      dispatch({
        type: FETCH_DOMAIN,
        payload: json.domains
      })
    );
  };
}

export function fetchDomainsCategories(domain) {
  return function(dispatch) {
    fetch(`${URL}/domains/${domain}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch({
          type: FETCH_CATEGORY,
          payload: json.categories
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function addNewDomain(domainName, description) {
  return function(dispatch) {
    fetch(`${URL}/domain`, {
      type: "POST",
      body: {}
    });
  };
}
