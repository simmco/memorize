"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDomains = fetchDomains;
exports.fetchDomainsCategories = fetchDomainsCategories;
exports.addNewDomain = addNewDomain;

require("isomorphic-fetch");

var _types = require("./types");

var URL = "http://localhost:3090/api";

function fetchDomains() {
  return function (dispatch) {
    fetch(URL + "/domains").then(function (res) {
      return res.json();
    }).then(function (json) {
      return dispatch({
        type: _types.FETCH_DOMAIN,
        payload: json.domains
      });
    });
  };
}

function fetchDomainsCategories(domain) {
  return function (dispatch) {
    fetch(URL + "/domains/" + domain).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.FETCH_CATEGORY,
        payload: json.categories
      });
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function addNewDomain(domainName, description) {
  return function (dispatch) {
    fetch(URL + "/domain", {
      type: "POST",
      body: {}
    });
  };
}