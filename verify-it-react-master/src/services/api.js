/**
 * Created by baebae on 4/5/16.
 */

import request from 'superagent';
import _ from 'lodash';
import { localStorage } from 'AppServices';

const base = 'http://verify-it.herokuapp.com/api';
export default {
  search: {
    users: _generateRequest({
      token: false,
      method: 'GET',
      route: '/search/user/:keyword'
    }),
    getEventByBrand: _generateRequest({
      token: true,
      method: 'GET',
      route: '/event/brand/:keyword'
    }),
    getEventByCity: _generateRequest({
      token: true,
      method: 'GET',
      route: '/event/city/:keyword'
    }),
    getNearEvent: _generateRequest({
      token: true,
      method: 'GET',
      route: '/event/date/near_today'
    }),
  },
  account: {
    login: _generateRequest({
      token: false,
      method: 'POST',
      route: '/user/login'
    }),
    signup: _generateRequest({
      token: false,
      method: 'POST',
      route: '/user'
    })
  },
  contract: {
    create: _generateRequest({
      token: true,
      method: 'POST',
      route: '/contract'
    }),
    getContracts: _generateRequest({
      token: true,
      method: 'GET',
      route: '/contract/for_user/:pageNum'
    })
  }
};

function _generateRequest(options) {
  return options.token ? (
    _requestWithToken.bind(this, options.method, options.route)
  ) : (
    _publicRequest.bind(this, options.method, options.route)
  );
}

function _requestWithToken(method, route, params, body, customToken) {

  if(!body) body = {};
  if(params) route = _parameterizeRoute(route, params);
  return new Promise((resolve, reject) => {
    localStorage.get('token')
      .then((token) => {
        request(method, base + route)
          .set('x-access-token', customToken || token)
          .accept('json')
          .send(body)
          .end((err, res) => {
            if (!res) { res = {} }
            if(err) {
              console.warn(err, res);
              reject(res);
            } else {
              resolve(res);
            }
          });
      });
  });

}

function _parameterizeRoute(route, params) {
  let parameterized = route;
  _.forEach(params, (v, k) => {
    if (typeof v === 'undefined') console.log(`warning: parameter ${k} was ${v}`);
    parameterized = parameterized.replace(':' + k, v);
  });
  return parameterized;
}

function _publicRequest(method, route, params, body) {
  if(!body) body = {};
  if(params) route = _parameterizeRoute(route, params);
  return new Promise((resolve, reject) => {
    request(method, base + route)
      .accept('json')
      .send(body)
      .end((err, res) => {
        if (!res) { res = {} }
        if (err) {
          console.warn(err);
          reject(res.body);
        } else {
          resolve(res.body);
        }
      });
  });
}

export function _externalRequest(method, route) {
  return new Promise((resolve, reject) => {
    request(method, route)
      .accept('json')
      .end((err, res) => {
        if (!res) {
          res = {}
        }
        if (!err) {
          resolve(res.body);
        }
      });
  });
}