import "isomorphic-fetch";
import {
  FETCH_DOMAIN,
  FETCH_CATEGORY,
  ADD_DOMAIN,
  ADD_CATEGORY,
  ADD_CARD
} from "./types";

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

export function fetchDomainsCategories(domainId) {
  return function(dispatch) {
    fetch(`${URL}/domains/${domainId}`)
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

export function addNewDomain(topic, description) {
  return function(dispatch) {
    fetch(`${URL}/domain`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic, description })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch({
          type: ADD_DOMAIN,
          payload: json.domain
        });
      });
  };
}

export function addNewCategory(topic, description, domainId) {
  return function(dispatch) {
    fetch(`${URL}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic, description, domainId })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch({
          type: ADD_CATEGORY,
          payload: json.categorie
        });
      });
  };
}

export function addNewCard(topic, description, categoryId) {
  return function(dispatch) {
    fetch(`${URL}/card`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic, description, categoryId })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch({
          type: ADD_CARD,
          payload: json.newCard
        });
      });
  };
}
