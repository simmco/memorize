"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDomains = fetchDomains;
exports.fetchDomainsCategories = fetchDomainsCategories;
exports.addNewDomain = addNewDomain;
exports.addNewCategory = addNewCategory;
exports.addNewCard = addNewCard;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

require("isomorphic-fetch");

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function fetchDomainsCategories(domainId) {
  return function (dispatch) {
    fetch(URL + "/domains/" + domainId).then(function (res) {
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

function addNewDomain(topic, description) {
  return function (dispatch) {
    fetch(URL + "/domain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)({ topic: topic, description: description })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.ADD_DOMAIN,
        payload: json.domain
      });
    });
  };
}

function addNewCategory(topic, description, domainId) {
  return function (dispatch) {
    fetch(URL + "/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)({ topic: topic, description: description, domainId: domainId })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.ADD_CATEGORY,
        payload: json.categorie
      });
    });
  };
}

function addNewCard(topic, description, categoryId) {
  return function (dispatch) {
    fetch(URL + "/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)({ topic: topic, description: description, categoryId: categoryId })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.ADD_CARD,
        payload: json.newCard
      });
    });
  };
}