function Hb(n, r) {
  for (var o = 0; o < r.length; o++) {
    const i = r[o];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const c in i)
        if (c !== 'default' && !(c in n)) {
          const f = Object.getOwnPropertyDescriptor(i, c);
          f && Object.defineProperty(n, c, f.get ? f : { enumerable: !0, get: () => i[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) i(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === 'childList')
        for (const d of f.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function i(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function wf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Xc = { exports: {} },
  so = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh;
function $b() {
  if (Fh) return so;
  Fh = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function o(i, c, f) {
    var d = null;
    if ((f !== void 0 && (d = '' + f), c.key !== void 0 && (d = '' + c.key), 'key' in c)) {
      f = {};
      for (var p in c) p !== 'key' && (f[p] = c[p]);
    } else f = c;
    return ((c = f.ref), { $$typeof: n, type: i, key: d, ref: c !== void 0 ? c : null, props: f });
  }
  return ((so.Fragment = r), (so.jsx = o), (so.jsxs = o), so);
}
var Wh;
function qb() {
  return (Wh || ((Wh = 1), (Xc.exports = $b())), Xc.exports);
}
var H = qb(),
  Kc = { exports: {} },
  Et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jh;
function Gb() {
  if (Jh) return Et;
  Jh = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    S = Symbol.iterator;
  function A(E) {
    return E === null || typeof E != 'object'
      ? null
      : ((E = (S && E[S]) || E['@@iterator']), typeof E == 'function' ? E : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    C = {};
  function N(E, X, rt) {
    ((this.props = E), (this.context = X), (this.refs = C), (this.updater = rt || z));
  }
  ((N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (E, X) {
      if (typeof E != 'object' && typeof E != 'function' && E != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, E, X, 'setState');
    }),
    (N.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
    }));
  function k() {}
  k.prototype = N.prototype;
  function G(E, X, rt) {
    ((this.props = E), (this.context = X), (this.refs = C), (this.updater = rt || z));
  }
  var B = (G.prototype = new k());
  ((B.constructor = G), T(B, N.prototype), (B.isPureReactComponent = !0));
  var w = Array.isArray,
    O = { H: null, A: null, T: null, S: null, V: null },
    D = Object.prototype.hasOwnProperty;
  function P(E, X, rt, lt, it, ct) {
    return (
      (rt = ct.ref),
      { $$typeof: n, type: E, key: X, ref: rt !== void 0 ? rt : null, props: ct }
    );
  }
  function Q(E, X) {
    return P(E.type, X, void 0, void 0, void 0, E.props);
  }
  function J(E) {
    return typeof E == 'object' && E !== null && E.$$typeof === n;
  }
  function et(E) {
    var X = { '=': '=0', ':': '=2' };
    return (
      '$' +
      E.replace(/[=:]/g, function (rt) {
        return X[rt];
      })
    );
  }
  var at = /\/+/g;
  function v(E, X) {
    return typeof E == 'object' && E !== null && E.key != null ? et('' + E.key) : X.toString(36);
  }
  function F() {}
  function Y(E) {
    switch (E.status) {
      case 'fulfilled':
        return E.value;
      case 'rejected':
        throw E.reason;
      default:
        switch (
          (typeof E.status == 'string'
            ? E.then(F, F)
            : ((E.status = 'pending'),
              E.then(
                function (X) {
                  E.status === 'pending' && ((E.status = 'fulfilled'), (E.value = X));
                },
                function (X) {
                  E.status === 'pending' && ((E.status = 'rejected'), (E.reason = X));
                },
              )),
          E.status)
        ) {
          case 'fulfilled':
            return E.value;
          case 'rejected':
            throw E.reason;
        }
    }
    throw E;
  }
  function V(E, X, rt, lt, it) {
    var ct = typeof E;
    (ct === 'undefined' || ct === 'boolean') && (E = null);
    var ut = !1;
    if (E === null) ut = !0;
    else
      switch (ct) {
        case 'bigint':
        case 'string':
        case 'number':
          ut = !0;
          break;
        case 'object':
          switch (E.$$typeof) {
            case n:
            case r:
              ut = !0;
              break;
            case b:
              return ((ut = E._init), V(ut(E._payload), X, rt, lt, it));
          }
      }
    if (ut)
      return (
        (it = it(E)),
        (ut = lt === '' ? '.' + v(E, 0) : lt),
        w(it)
          ? ((rt = ''),
            ut != null && (rt = ut.replace(at, '$&/') + '/'),
            V(it, X, rt, '', function (Nt) {
              return Nt;
            }))
          : it != null &&
            (J(it) &&
              (it = Q(
                it,
                rt +
                  (it.key == null || (E && E.key === it.key)
                    ? ''
                    : ('' + it.key).replace(at, '$&/') + '/') +
                  ut,
              )),
            X.push(it)),
        1
      );
    ut = 0;
    var At = lt === '' ? '.' : lt + ':';
    if (w(E))
      for (var xt = 0; xt < E.length; xt++)
        ((lt = E[xt]), (ct = At + v(lt, xt)), (ut += V(lt, X, rt, ct, it)));
    else if (((xt = A(E)), typeof xt == 'function'))
      for (E = xt.call(E), xt = 0; !(lt = E.next()).done; )
        ((lt = lt.value), (ct = At + v(lt, xt++)), (ut += V(lt, X, rt, ct, it)));
    else if (ct === 'object') {
      if (typeof E.then == 'function') return V(Y(E), X, rt, lt, it);
      throw (
        (X = String(E)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (X === '[object Object]' ? 'object with keys {' + Object.keys(E).join(', ') + '}' : X) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return ut;
  }
  function M(E, X, rt) {
    if (E == null) return E;
    var lt = [],
      it = 0;
    return (
      V(E, lt, '', '', function (ct) {
        return X.call(rt, ct, it++);
      }),
      lt
    );
  }
  function K(E) {
    if (E._status === -1) {
      var X = E._result;
      ((X = X()),
        X.then(
          function (rt) {
            (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = rt));
          },
          function (rt) {
            (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = rt));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = X)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ot =
    typeof reportError == 'function'
      ? reportError
      : function (E) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var X = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == 'object' && E !== null && typeof E.message == 'string'
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', E);
            return;
          }
          console.error(E);
        };
  function nt() {}
  return (
    (Et.Children = {
      map: M,
      forEach: function (E, X, rt) {
        M(
          E,
          function () {
            X.apply(this, arguments);
          },
          rt,
        );
      },
      count: function (E) {
        var X = 0;
        return (
          M(E, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (E) {
        return (
          M(E, function (X) {
            return X;
          }) || []
        );
      },
      only: function (E) {
        if (!J(E))
          throw Error('React.Children.only expected to receive a single React element child.');
        return E;
      },
    }),
    (Et.Component = N),
    (Et.Fragment = o),
    (Et.Profiler = c),
    (Et.PureComponent = G),
    (Et.StrictMode = i),
    (Et.Suspense = g),
    (Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return O.H.useMemoCache(E);
      },
    }),
    (Et.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Et.cloneElement = function (E, X, rt) {
      if (E == null) throw Error('The argument must be a React element, but you passed ' + E + '.');
      var lt = T({}, E.props),
        it = E.key,
        ct = void 0;
      if (X != null)
        for (ut in (X.ref !== void 0 && (ct = void 0), X.key !== void 0 && (it = '' + X.key), X))
          !D.call(X, ut) ||
            ut === 'key' ||
            ut === '__self' ||
            ut === '__source' ||
            (ut === 'ref' && X.ref === void 0) ||
            (lt[ut] = X[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) lt.children = rt;
      else if (1 < ut) {
        for (var At = Array(ut), xt = 0; xt < ut; xt++) At[xt] = arguments[xt + 2];
        lt.children = At;
      }
      return P(E.type, it, void 0, void 0, ct, lt);
    }),
    (Et.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (Et.createElement = function (E, X, rt) {
      var lt,
        it = {},
        ct = null;
      if (X != null)
        for (lt in (X.key !== void 0 && (ct = '' + X.key), X))
          D.call(X, lt) && lt !== 'key' && lt !== '__self' && lt !== '__source' && (it[lt] = X[lt]);
      var ut = arguments.length - 2;
      if (ut === 1) it.children = rt;
      else if (1 < ut) {
        for (var At = Array(ut), xt = 0; xt < ut; xt++) At[xt] = arguments[xt + 2];
        it.children = At;
      }
      if (E && E.defaultProps)
        for (lt in ((ut = E.defaultProps), ut)) it[lt] === void 0 && (it[lt] = ut[lt]);
      return P(E, ct, void 0, void 0, null, it);
    }),
    (Et.createRef = function () {
      return { current: null };
    }),
    (Et.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (Et.isValidElement = J),
    (Et.lazy = function (E) {
      return { $$typeof: b, _payload: { _status: -1, _result: E }, _init: K };
    }),
    (Et.memo = function (E, X) {
      return { $$typeof: h, type: E, compare: X === void 0 ? null : X };
    }),
    (Et.startTransition = function (E) {
      var X = O.T,
        rt = {};
      O.T = rt;
      try {
        var lt = E(),
          it = O.S;
        (it !== null && it(rt, lt),
          typeof lt == 'object' && lt !== null && typeof lt.then == 'function' && lt.then(nt, ot));
      } catch (ct) {
        ot(ct);
      } finally {
        O.T = X;
      }
    }),
    (Et.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Et.use = function (E) {
      return O.H.use(E);
    }),
    (Et.useActionState = function (E, X, rt) {
      return O.H.useActionState(E, X, rt);
    }),
    (Et.useCallback = function (E, X) {
      return O.H.useCallback(E, X);
    }),
    (Et.useContext = function (E) {
      return O.H.useContext(E);
    }),
    (Et.useDebugValue = function () {}),
    (Et.useDeferredValue = function (E, X) {
      return O.H.useDeferredValue(E, X);
    }),
    (Et.useEffect = function (E, X, rt) {
      var lt = O.H;
      if (typeof rt == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return lt.useEffect(E, X);
    }),
    (Et.useId = function () {
      return O.H.useId();
    }),
    (Et.useImperativeHandle = function (E, X, rt) {
      return O.H.useImperativeHandle(E, X, rt);
    }),
    (Et.useInsertionEffect = function (E, X) {
      return O.H.useInsertionEffect(E, X);
    }),
    (Et.useLayoutEffect = function (E, X) {
      return O.H.useLayoutEffect(E, X);
    }),
    (Et.useMemo = function (E, X) {
      return O.H.useMemo(E, X);
    }),
    (Et.useOptimistic = function (E, X) {
      return O.H.useOptimistic(E, X);
    }),
    (Et.useReducer = function (E, X, rt) {
      return O.H.useReducer(E, X, rt);
    }),
    (Et.useRef = function (E) {
      return O.H.useRef(E);
    }),
    (Et.useState = function (E) {
      return O.H.useState(E);
    }),
    (Et.useSyncExternalStore = function (E, X, rt) {
      return O.H.useSyncExternalStore(E, X, rt);
    }),
    (Et.useTransition = function () {
      return O.H.useTransition();
    }),
    (Et.version = '19.1.1'),
    Et
  );
}
var tg;
function Nf() {
  return (tg || ((tg = 1), (Kc.exports = Gb())), Kc.exports);
}
var x = Nf();
const Mn = wf(x),
  df = Hb({ __proto__: null, default: Mn }, [x]);
var Qc = { exports: {} },
  uo = {},
  Zc = { exports: {} },
  Ic = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eg;
function Yb() {
  return (
    eg ||
      ((eg = 1),
      (function (n) {
        function r(M, K) {
          var ot = M.length;
          M.push(K);
          t: for (; 0 < ot; ) {
            var nt = (ot - 1) >>> 1,
              E = M[nt];
            if (0 < c(E, K)) ((M[nt] = K), (M[ot] = E), (ot = nt));
            else break t;
          }
        }
        function o(M) {
          return M.length === 0 ? null : M[0];
        }
        function i(M) {
          if (M.length === 0) return null;
          var K = M[0],
            ot = M.pop();
          if (ot !== K) {
            M[0] = ot;
            t: for (var nt = 0, E = M.length, X = E >>> 1; nt < X; ) {
              var rt = 2 * (nt + 1) - 1,
                lt = M[rt],
                it = rt + 1,
                ct = M[it];
              if (0 > c(lt, ot))
                it < E && 0 > c(ct, lt)
                  ? ((M[nt] = ct), (M[it] = ot), (nt = it))
                  : ((M[nt] = lt), (M[rt] = ot), (nt = rt));
              else if (it < E && 0 > c(ct, ot)) ((M[nt] = ct), (M[it] = ot), (nt = it));
              else break t;
            }
          }
          return K;
        }
        function c(M, K) {
          var ot = M.sortIndex - K.sortIndex;
          return ot !== 0 ? ot : M.id - K.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            p = d.now();
          n.unstable_now = function () {
            return d.now() - p;
          };
        }
        var g = [],
          h = [],
          b = 1,
          S = null,
          A = 3,
          z = !1,
          T = !1,
          C = !1,
          N = !1,
          k = typeof setTimeout == 'function' ? setTimeout : null,
          G = typeof clearTimeout == 'function' ? clearTimeout : null,
          B = typeof setImmediate < 'u' ? setImmediate : null;
        function w(M) {
          for (var K = o(h); K !== null; ) {
            if (K.callback === null) i(h);
            else if (K.startTime <= M) (i(h), (K.sortIndex = K.expirationTime), r(g, K));
            else break;
            K = o(h);
          }
        }
        function O(M) {
          if (((C = !1), w(M), !T))
            if (o(g) !== null) ((T = !0), D || ((D = !0), v()));
            else {
              var K = o(h);
              K !== null && V(O, K.startTime - M);
            }
        }
        var D = !1,
          P = -1,
          Q = 5,
          J = -1;
        function et() {
          return N ? !0 : !(n.unstable_now() - J < Q);
        }
        function at() {
          if (((N = !1), D)) {
            var M = n.unstable_now();
            J = M;
            var K = !0;
            try {
              t: {
                ((T = !1), C && ((C = !1), G(P), (P = -1)), (z = !0));
                var ot = A;
                try {
                  e: {
                    for (w(M), S = o(g); S !== null && !(S.expirationTime > M && et()); ) {
                      var nt = S.callback;
                      if (typeof nt == 'function') {
                        ((S.callback = null), (A = S.priorityLevel));
                        var E = nt(S.expirationTime <= M);
                        if (((M = n.unstable_now()), typeof E == 'function')) {
                          ((S.callback = E), w(M), (K = !0));
                          break e;
                        }
                        (S === o(g) && i(g), w(M));
                      } else i(g);
                      S = o(g);
                    }
                    if (S !== null) K = !0;
                    else {
                      var X = o(h);
                      (X !== null && V(O, X.startTime - M), (K = !1));
                    }
                  }
                  break t;
                } finally {
                  ((S = null), (A = ot), (z = !1));
                }
                K = void 0;
              }
            } finally {
              K ? v() : (D = !1);
            }
          }
        }
        var v;
        if (typeof B == 'function')
          v = function () {
            B(at);
          };
        else if (typeof MessageChannel < 'u') {
          var F = new MessageChannel(),
            Y = F.port2;
          ((F.port1.onmessage = at),
            (v = function () {
              Y.postMessage(null);
            }));
        } else
          v = function () {
            k(at, 0);
          };
        function V(M, K) {
          P = k(function () {
            M(n.unstable_now());
          }, K);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (n.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Q = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (n.unstable_next = function (M) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = A;
            }
            var ot = A;
            A = K;
            try {
              return M();
            } finally {
              A = ot;
            }
          }),
          (n.unstable_requestPaint = function () {
            N = !0;
          }),
          (n.unstable_runWithPriority = function (M, K) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var ot = A;
            A = M;
            try {
              return K();
            } finally {
              A = ot;
            }
          }),
          (n.unstable_scheduleCallback = function (M, K, ot) {
            var nt = n.unstable_now();
            switch (
              (typeof ot == 'object' && ot !== null
                ? ((ot = ot.delay), (ot = typeof ot == 'number' && 0 < ot ? nt + ot : nt))
                : (ot = nt),
              M)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = ot + E),
              (M = {
                id: b++,
                callback: K,
                priorityLevel: M,
                startTime: ot,
                expirationTime: E,
                sortIndex: -1,
              }),
              ot > nt
                ? ((M.sortIndex = ot),
                  r(h, M),
                  o(g) === null && M === o(h) && (C ? (G(P), (P = -1)) : (C = !0), V(O, ot - nt)))
                : ((M.sortIndex = E), r(g, M), T || z || ((T = !0), D || ((D = !0), v()))),
              M
            );
          }),
          (n.unstable_shouldYield = et),
          (n.unstable_wrapCallback = function (M) {
            var K = A;
            return function () {
              var ot = A;
              A = K;
              try {
                return M.apply(this, arguments);
              } finally {
                A = ot;
              }
            };
          }));
      })(Ic)),
    Ic
  );
}
var ng;
function Vb() {
  return (ng || ((ng = 1), (Zc.exports = Yb())), Zc.exports);
}
var Fc = { exports: {} },
  qe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ag;
function Pb() {
  if (ag) return qe;
  ag = 1;
  var n = Nf();
  function r(g) {
    var h = 'https://react.dev/errors/' + g;
    if (1 < arguments.length) {
      h += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) h += '&args[]=' + encodeURIComponent(arguments[b]);
    }
    return (
      'Minified React error #' +
      g +
      '; visit ' +
      h +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o() {}
  var i = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for('react.portal');
  function f(g, h, b) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : '' + S,
      children: g,
      containerInfo: h,
      implementation: b,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, h) {
    if (g === 'font') return '';
    if (typeof h == 'string') return h === 'use-credentials' ? h : '';
  }
  return (
    (qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (qe.createPortal = function (g, h) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(r(299));
      return f(g, h, null, b);
    }),
    (qe.flushSync = function (g) {
      var h = d.T,
        b = i.p;
      try {
        if (((d.T = null), (i.p = 2), g)) return g();
      } finally {
        ((d.T = h), (i.p = b), i.d.f());
      }
    }),
    (qe.preconnect = function (g, h) {
      typeof g == 'string' &&
        (h
          ? ((h = h.crossOrigin),
            (h = typeof h == 'string' ? (h === 'use-credentials' ? h : '') : void 0))
          : (h = null),
        i.d.C(g, h));
    }),
    (qe.prefetchDNS = function (g) {
      typeof g == 'string' && i.d.D(g);
    }),
    (qe.preinit = function (g, h) {
      if (typeof g == 'string' && h && typeof h.as == 'string') {
        var b = h.as,
          S = p(b, h.crossOrigin),
          A = typeof h.integrity == 'string' ? h.integrity : void 0,
          z = typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0;
        b === 'style'
          ? i.d.S(g, typeof h.precedence == 'string' ? h.precedence : void 0, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: z,
            })
          : b === 'script' &&
            i.d.X(g, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: z,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
      }
    }),
    (qe.preinitModule = function (g, h) {
      if (typeof g == 'string')
        if (typeof h == 'object' && h !== null) {
          if (h.as == null || h.as === 'script') {
            var b = p(h.as, h.crossOrigin);
            i.d.M(g, {
              crossOrigin: b,
              integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
          }
        } else h == null && i.d.M(g);
    }),
    (qe.preload = function (g, h) {
      if (typeof g == 'string' && typeof h == 'object' && h !== null && typeof h.as == 'string') {
        var b = h.as,
          S = p(b, h.crossOrigin);
        i.d.L(g, b, {
          crossOrigin: S,
          integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
          type: typeof h.type == 'string' ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == 'string' ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == 'string' ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == 'string' ? h.imageSizes : void 0,
          media: typeof h.media == 'string' ? h.media : void 0,
        });
      }
    }),
    (qe.preloadModule = function (g, h) {
      if (typeof g == 'string')
        if (h) {
          var b = p(h.as, h.crossOrigin);
          i.d.m(g, {
            as: typeof h.as == 'string' && h.as !== 'script' ? h.as : void 0,
            crossOrigin: b,
            integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          });
        } else i.d.m(g);
    }),
    (qe.requestFormReset = function (g) {
      i.d.r(g);
    }),
    (qe.unstable_batchedUpdates = function (g, h) {
      return g(h);
    }),
    (qe.useFormState = function (g, h, b) {
      return d.H.useFormState(g, h, b);
    }),
    (qe.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (qe.version = '19.1.1'),
    qe
  );
}
var lg;
function yy() {
  if (lg) return Fc.exports;
  lg = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (Fc.exports = Pb()), Fc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rg;
function Xb() {
  if (rg) return uo;
  rg = 1;
  var n = Vb(),
    r = Nf(),
    o = yy();
  function i(t) {
    var e = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) e += '&args[]=' + encodeURIComponent(arguments[a]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (f(t) !== t) throw Error(i(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var s = a.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((l = s.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === a) return (p(s), t);
          if (u === l) return (p(s), e);
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== l.return) ((a = s), (l = u));
      else {
        for (var m = !1, y = s.child; y; ) {
          if (y === a) {
            ((m = !0), (a = s), (l = u));
            break;
          }
          if (y === l) {
            ((m = !0), (l = s), (a = u));
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = u.child; y; ) {
            if (y === a) {
              ((m = !0), (a = u), (l = s));
              break;
            }
            if (y === l) {
              ((m = !0), (l = u), (a = s));
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (a.alternate !== l) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? t : e;
  }
  function h(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = h(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for('react.element'),
    A = Symbol.for('react.transitional.element'),
    z = Symbol.for('react.portal'),
    T = Symbol.for('react.fragment'),
    C = Symbol.for('react.strict_mode'),
    N = Symbol.for('react.profiler'),
    k = Symbol.for('react.provider'),
    G = Symbol.for('react.consumer'),
    B = Symbol.for('react.context'),
    w = Symbol.for('react.forward_ref'),
    O = Symbol.for('react.suspense'),
    D = Symbol.for('react.suspense_list'),
    P = Symbol.for('react.memo'),
    Q = Symbol.for('react.lazy'),
    J = Symbol.for('react.activity'),
    et = Symbol.for('react.memo_cache_sentinel'),
    at = Symbol.iterator;
  function v(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (at && t[at]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var F = Symbol.for('react.client.reference');
  function Y(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case T:
        return 'Fragment';
      case N:
        return 'Profiler';
      case C:
        return 'StrictMode';
      case O:
        return 'Suspense';
      case D:
        return 'SuspenseList';
      case J:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case z:
          return 'Portal';
        case B:
          return (t.displayName || 'Context') + '.Provider';
        case G:
          return (t._context.displayName || 'Context') + '.Consumer';
        case w:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case P:
          return ((e = t.displayName || null), e !== null ? e : Y(t.type) || 'Memo');
        case Q:
          ((e = t._payload), (t = t._init));
          try {
            return Y(t(e));
          } catch {}
      }
    return null;
  }
  var V = Array.isArray,
    M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ot = { pending: !1, data: null, method: null, action: null },
    nt = [],
    E = -1;
  function X(t) {
    return { current: t };
  }
  function rt(t) {
    0 > E || ((t.current = nt[E]), (nt[E] = null), E--);
  }
  function lt(t, e) {
    (E++, (nt[E] = t.current), (t.current = e));
  }
  var it = X(null),
    ct = X(null),
    ut = X(null),
    At = X(null);
  function xt(t, e) {
    switch ((lt(ut, e), lt(ct, t), lt(it, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Rh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = Rh(e)), (t = Ah(e, t)));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (rt(it), lt(it, t));
  }
  function Nt() {
    (rt(it), rt(ct), rt(ut));
  }
  function bt(t) {
    t.memoizedState !== null && lt(At, t);
    var e = it.current,
      a = Ah(e, t.type);
    e !== a && (lt(ct, t), lt(it, a));
  }
  function Mt(t) {
    (ct.current === t && (rt(it), rt(ct)), At.current === t && (rt(At), (ao._currentValue = ot)));
  }
  var _t = Object.prototype.hasOwnProperty,
    he = n.unstable_scheduleCallback,
    Ct = n.unstable_cancelCallback,
    qt = n.unstable_shouldYield,
    De = n.unstable_requestPaint,
    Gt = n.unstable_now,
    se = n.unstable_getCurrentPriorityLevel,
    oe = n.unstable_ImmediatePriority,
    de = n.unstable_UserBlockingPriority,
    Kt = n.unstable_NormalPriority,
    dt = n.unstable_LowPriority,
    Je = n.unstable_IdlePriority,
    ge = n.log,
    Tn = n.unstable_setDisableYieldValue,
    ue = null,
    Tt = null;
  function Qt(t) {
    if ((typeof ge == 'function' && Tn(t), Tt && typeof Tt.setStrictMode == 'function'))
      try {
        Tt.setStrictMode(ue, t);
      } catch {}
  }
  var Ut = Math.clz32 ? Math.clz32 : fa,
    Ve = Math.log,
    Zt = Math.LN2;
  function fa(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ve(t) / Zt) | 0)) | 0);
  }
  var Yn = 256,
    qa = 4194304;
  function mt(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ht(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0
        ? ((l = y & ~u),
          l !== 0
            ? (s = mt(l))
            : ((m &= y), m !== 0 ? (s = mt(m)) : a || ((a = y & ~t), a !== 0 && (s = mt(a)))))
        : ((y = l & ~u),
          y !== 0
            ? (s = mt(y))
            : m !== 0
              ? (s = mt(m))
              : a || ((a = l & ~t), a !== 0 && (s = mt(a)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & u) === 0 &&
            ((u = s & -s), (a = e & -e), u >= a || (u === 32 && (a & 4194048) !== 0))
          ? e
          : s
    );
  }
  function pe(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function da(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dr() {
    var t = Yn;
    return ((Yn <<= 1), (Yn & 4194048) === 0 && (Yn = 256), t);
  }
  function ud() {
    var t = qa;
    return ((qa <<= 1), (qa & 62914560) === 0 && (qa = 4194304), t);
  }
  function Us(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function pr(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function M0(t, e, a, l, s, u) {
    var m = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var y = t.entanglements,
      R = t.expirationTimes,
      L = t.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var I = 31 - Ut(a),
        tt = 1 << I;
      ((y[I] = 0), (R[I] = -1));
      var $ = L[I];
      if ($ !== null)
        for (L[I] = null, I = 0; I < $.length; I++) {
          var q = $[I];
          q !== null && (q.lane &= -536870913);
        }
      a &= ~tt;
    }
    (l !== 0 && cd(t, l, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(m & ~e)));
  }
  function cd(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Ut(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function fd(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - Ut(a),
        s = 1 << l;
      ((s & e) | (t[l] & e) && (t[l] |= e), (a &= ~s));
    }
  }
  function ks(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function js(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function dd() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ph(t.type));
  }
  function O0(t, e) {
    var a = K.p;
    try {
      return ((K.p = t), e());
    } finally {
      K.p = a;
    }
  }
  var pa = Math.random().toString(36).slice(2),
    He = '__reactFiber$' + pa,
    Xe = '__reactProps$' + pa,
    pl = '__reactContainer$' + pa,
    Ls = '__reactEvents$' + pa,
    z0 = '__reactListeners$' + pa,
    w0 = '__reactHandles$' + pa,
    pd = '__reactResources$' + pa,
    mr = '__reactMarker$' + pa;
  function Hs(t) {
    (delete t[He], delete t[Xe], delete t[Ls], delete t[z0], delete t[w0]);
  }
  function ml(t) {
    var e = t[He];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[pl] || a[He])) {
        if (((a = e.alternate), e.child !== null || (a !== null && a.child !== null)))
          for (t = wh(t); t !== null; ) {
            if ((a = t[He])) return a;
            t = wh(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function hl(t) {
    if ((t = t[He] || t[pl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function hr(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function gl(t) {
    var e = t[pd];
    return (e || (e = t[pd] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function we(t) {
    t[mr] = !0;
  }
  var md = new Set(),
    hd = {};
  function Ga(t, e) {
    (yl(t, e), yl(t + 'Capture', e));
  }
  function yl(t, e) {
    for (hd[t] = e, t = 0; t < e.length; t++) md.add(e[t]);
  }
  var N0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    gd = {},
    yd = {};
  function _0(t) {
    return _t.call(yd, t)
      ? !0
      : _t.call(gd, t)
        ? !1
        : N0.test(t)
          ? (yd[t] = !0)
          : ((gd[t] = !0), !1);
  }
  function ko(t, e, a) {
    if (_0(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e);
            return;
          case 'boolean':
            var l = e.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, '' + a);
      }
  }
  function jo(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, '' + a);
    }
  }
  function Vn(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, '' + l);
    }
  }
  var $s, vd;
  function vl(t) {
    if ($s === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        (($s = (e && e[1]) || ''),
          (vd =
            -1 <
            a.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < a.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      $s +
      t +
      vd
    );
  }
  var qs = !1;
  function Gs(t, e) {
    if (!t || qs) return '';
    qs = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var tt = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(tt.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(tt, []);
                } catch (q) {
                  var $ = q;
                }
                Reflect.construct(t, [], tt);
              } else {
                try {
                  tt.call();
                } catch (q) {
                  $ = q;
                }
                t.call(tt.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                $ = q;
              }
              (tt = t()) && typeof tt.catch == 'function' && tt.catch(function () {});
            }
          } catch (q) {
            if (q && $ && typeof q.stack == 'string') return [q.stack, $.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      s &&
        s.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = l.DetermineComponentFrameRoot(),
        m = u[0],
        y = u[1];
      if (m && y) {
        var R = m.split(`
`),
          L = y.split(`
`);
        for (s = l = 0; l < R.length && !R[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; s < L.length && !L[s].includes('DetermineComponentFrameRoot'); ) s++;
        if (l === R.length || s === L.length)
          for (l = R.length - 1, s = L.length - 1; 1 <= l && 0 <= s && R[l] !== L[s]; ) s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (R[l] !== L[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || R[l] !== L[s])) {
                  var I =
                    `
` + R[l].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      I.includes('<anonymous>') &&
                      (I = I.replace('<anonymous>', t.displayName)),
                    I
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      ((qs = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : '') ? vl(a) : '';
  }
  function B0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return vl(t.type);
      case 16:
        return vl('Lazy');
      case 13:
        return vl('Suspense');
      case 19:
        return vl('SuspenseList');
      case 0:
      case 15:
        return Gs(t.type, !1);
      case 11:
        return Gs(t.type.render, !1);
      case 1:
        return Gs(t.type, !0);
      case 31:
        return vl('Activity');
      default:
        return '';
    }
  }
  function bd(t) {
    try {
      var e = '';
      do ((e += B0(t)), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function fn(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function Sd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function D0(t) {
    var e = Sd(t) ? 'checked' : 'value',
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = '' + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var s = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            ((l = '' + m), u.call(this, m));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = '' + m;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Lo(t) {
    t._valueTracker || (t._valueTracker = D0(t));
  }
  function xd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = '';
    return (
      t && (l = Sd(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function Ho(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var U0 = /[\n"\\]/g;
  function dn(t) {
    return t.replace(U0, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ys(t, e, a, l, s, u, m, y) {
    ((t.name = ''),
      m != null && typeof m != 'function' && typeof m != 'symbol' && typeof m != 'boolean'
        ? (t.type = m)
        : t.removeAttribute('type'),
      e != null
        ? m === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + fn(e))
          : t.value !== '' + fn(e) && (t.value = '' + fn(e))
        : (m !== 'submit' && m !== 'reset') || t.removeAttribute('value'),
      e != null
        ? Vs(t, m, fn(e))
        : a != null
          ? Vs(t, m, fn(a))
          : l != null && t.removeAttribute('value'),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null && (t.checked = s && typeof s != 'function' && typeof s != 'symbol'),
      y != null && typeof y != 'function' && typeof y != 'symbol' && typeof y != 'boolean'
        ? (t.name = '' + fn(y))
        : t.removeAttribute('name'));
  }
  function Cd(t, e, a, l, s, u, m, y) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || a != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) return;
      ((a = a != null ? '' + fn(a) : ''),
        (e = e != null ? '' + fn(e) : a),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? s),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (t.checked = y ? t.checked : !!l),
      (t.defaultChecked = !!l),
      m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean' &&
        (t.name = m));
  }
  function Vs(t, e, a) {
    (e === 'number' && Ho(t.ownerDocument) === t) ||
      t.defaultValue === '' + a ||
      (t.defaultValue = '' + a);
  }
  function bl(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < a.length; s++) e['$' + a[s]] = !0;
      for (a = 0; a < t.length; a++)
        ((s = e.hasOwnProperty('$' + t[a].value)),
          t[a].selected !== s && (t[a].selected = s),
          s && l && (t[a].defaultSelected = !0));
    } else {
      for (a = '' + fn(a), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === a) {
          ((t[s].selected = !0), l && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Td(t, e, a) {
    if (e != null && ((e = '' + fn(e)), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? '' + fn(a) : '';
  }
  function Ed(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(i(92));
        if (V(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ''), (e = a));
    }
    ((a = fn(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== '' && l !== null && (t.value = l));
  }
  function Sl(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var k0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Rd(t, e, a) {
    var l = e.indexOf('--') === 0;
    a == null || typeof a == 'boolean' || a === ''
      ? l
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : l
        ? t.setProperty(e, a)
        : typeof a != 'number' || a === 0 || k0.has(e)
          ? e === 'float'
            ? (t.cssFloat = a)
            : (t[e] = ('' + a).trim())
          : (t[e] = a + 'px');
  }
  function Ad(t, e, a) {
    if (e != null && typeof e != 'object') throw Error(i(62));
    if (((t = t.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? t.setProperty(l, '')
            : l === 'float'
              ? (t.cssFloat = '')
              : (t[l] = ''));
      for (var s in e) ((l = e[s]), e.hasOwnProperty(s) && a[s] !== l && Rd(t, s, l));
    } else for (var u in e) e.hasOwnProperty(u) && Rd(t, u, e[u]);
  }
  function Ps(t) {
    if (t.indexOf('-') === -1) return !1;
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var j0 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    L0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $o(t) {
    return L0.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Xs = null;
  function Ks(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var xl = null,
    Cl = null;
  function Md(t) {
    var e = hl(t);
    if (e && (t = e.stateNode)) {
      var a = t[Xe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Ys(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (e = a.name),
            a.type === 'radio' && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + dn('' + e) + '"][type="radio"]'), e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var s = l[Xe] || null;
                if (!s) throw Error(i(90));
                Ys(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < a.length; e++) ((l = a[e]), l.form === t.form && xd(l));
          }
          break t;
        case 'textarea':
          Td(t, a.value, a.defaultValue);
          break t;
        case 'select':
          ((e = a.value), e != null && bl(t, !!a.multiple, e, !1));
      }
    }
  }
  var Qs = !1;
  function Od(t, e, a) {
    if (Qs) return t(e, a);
    Qs = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Qs = !1),
        (xl !== null || Cl !== null) &&
          (Ri(), xl && ((e = xl), (t = Cl), (Cl = xl = null), Md(e), t)))
      )
        for (e = 0; e < t.length; e++) Md(t[e]);
    }
  }
  function gr(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Xe] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != 'function') throw Error(i(231, e, typeof a));
    return a;
  }
  var Pn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Zs = !1;
  if (Pn)
    try {
      var yr = {};
      (Object.defineProperty(yr, 'passive', {
        get: function () {
          Zs = !0;
        },
      }),
        window.addEventListener('test', yr, yr),
        window.removeEventListener('test', yr, yr));
    } catch {
      Zs = !1;
    }
  var ma = null,
    Is = null,
    qo = null;
  function zd() {
    if (qo) return qo;
    var t,
      e = Is,
      a = e.length,
      l,
      s = 'value' in ma ? ma.value : ma.textContent,
      u = s.length;
    for (t = 0; t < a && e[t] === s[t]; t++);
    var m = a - t;
    for (l = 1; l <= m && e[a - l] === s[u - l]; l++);
    return (qo = s.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Go(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Yo() {
    return !0;
  }
  function wd() {
    return !1;
  }
  function Ke(t) {
    function e(a, l, s, u, m) {
      ((this._reactName = a),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = m),
        (this.currentTarget = null));
      for (var y in t) t.hasOwnProperty(y) && ((a = t[y]), (this[y] = a ? a(u) : u[y]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Yo
          : wd),
        (this.isPropagationStopped = wd),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
            (this.isDefaultPrevented = Yo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
            (this.isPropagationStopped = Yo));
        },
        persist: function () {},
        isPersistent: Yo,
      }),
      e
    );
  }
  var Ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vo = Ke(Ya),
    vr = b({}, Ya, { view: 0, detail: 0 }),
    H0 = Ke(vr),
    Fs,
    Ws,
    br,
    Po = b({}, vr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== br &&
              (br && t.type === 'mousemove'
                ? ((Fs = t.screenX - br.screenX), (Ws = t.screenY - br.screenY))
                : (Ws = Fs = 0),
              (br = t)),
            Fs);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Ws;
      },
    }),
    Nd = Ke(Po),
    $0 = b({}, Po, { dataTransfer: 0 }),
    q0 = Ke($0),
    G0 = b({}, vr, { relatedTarget: 0 }),
    Js = Ke(G0),
    Y0 = b({}, Ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V0 = Ke(Y0),
    P0 = b({}, Ya, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    X0 = Ke(P0),
    K0 = b({}, Ya, { data: 0 }),
    _d = Ke(K0),
    Q0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Z0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    I0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function F0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = I0[t]) ? !!e[t] : !1;
  }
  function tu() {
    return F0;
  }
  var W0 = b({}, vr, {
      key: function (t) {
        if (t.key) {
          var e = Q0[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = Go(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? Z0[t.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tu,
      charCode: function (t) {
        return t.type === 'keypress' ? Go(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? Go(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0;
      },
    }),
    J0 = Ke(W0),
    tv = b({}, Po, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Bd = Ke(tv),
    ev = b({}, vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    nv = Ke(ev),
    av = b({}, Ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lv = Ke(av),
    rv = b({}, Po, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ov = Ke(rv),
    iv = b({}, Ya, { newState: 0, oldState: 0 }),
    sv = Ke(iv),
    uv = [9, 13, 27, 32],
    eu = Pn && 'CompositionEvent' in window,
    Sr = null;
  Pn && 'documentMode' in document && (Sr = document.documentMode);
  var cv = Pn && 'TextEvent' in window && !Sr,
    Dd = Pn && (!eu || (Sr && 8 < Sr && 11 >= Sr)),
    Ud = ' ',
    kd = !1;
  function jd(t, e) {
    switch (t) {
      case 'keyup':
        return uv.indexOf(e.keyCode) !== -1;
      case 'keydown':
        return e.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ld(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var Tl = !1;
  function fv(t, e) {
    switch (t) {
      case 'compositionend':
        return Ld(e);
      case 'keypress':
        return e.which !== 32 ? null : ((kd = !0), Ud);
      case 'textInput':
        return ((t = e.data), t === Ud && kd ? null : t);
      default:
        return null;
    }
  }
  function dv(t, e) {
    if (Tl)
      return t === 'compositionend' || (!eu && jd(t, e))
        ? ((t = zd()), (qo = Is = ma = null), (Tl = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case 'compositionend':
        return Dd && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var pv = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!pv[t.type] : e === 'textarea';
  }
  function $d(t, e, a, l) {
    (xl ? (Cl ? Cl.push(l) : (Cl = [l])) : (xl = l),
      (e = Ni(e, 'onChange')),
      0 < e.length &&
        ((a = new Vo('onChange', 'change', null, a, l)), t.push({ event: a, listeners: e })));
  }
  var xr = null,
    Cr = null;
  function mv(t) {
    Sh(t, 0);
  }
  function Xo(t) {
    var e = hr(t);
    if (xd(e)) return t;
  }
  function qd(t, e) {
    if (t === 'change') return e;
  }
  var Gd = !1;
  if (Pn) {
    var nu;
    if (Pn) {
      var au = 'oninput' in document;
      if (!au) {
        var Yd = document.createElement('div');
        (Yd.setAttribute('oninput', 'return;'), (au = typeof Yd.oninput == 'function'));
      }
      nu = au;
    } else nu = !1;
    Gd = nu && (!document.documentMode || 9 < document.documentMode);
  }
  function Vd() {
    xr && (xr.detachEvent('onpropertychange', Pd), (Cr = xr = null));
  }
  function Pd(t) {
    if (t.propertyName === 'value' && Xo(Cr)) {
      var e = [];
      ($d(e, Cr, t, Ks(t)), Od(mv, e));
    }
  }
  function hv(t, e, a) {
    t === 'focusin'
      ? (Vd(), (xr = e), (Cr = a), xr.attachEvent('onpropertychange', Pd))
      : t === 'focusout' && Vd();
  }
  function gv(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Xo(Cr);
  }
  function yv(t, e) {
    if (t === 'click') return Xo(e);
  }
  function vv(t, e) {
    if (t === 'input' || t === 'change') return Xo(e);
  }
  function bv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var tn = typeof Object.is == 'function' ? Object.is : bv;
  function Tr(t, e) {
    if (tn(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var s = a[l];
      if (!_t.call(e, s) || !tn(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Xd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Kd(t, e) {
    var a = Xd(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = t + a.textContent.length), t <= e && l >= e)) return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Xd(a);
    }
  }
  function Qd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Qd(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Zd(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ho(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == 'string';
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Ho(t.document);
    }
    return e;
  }
  function lu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var Sv = Pn && 'documentMode' in document && 11 >= document.documentMode,
    El = null,
    ru = null,
    Er = null,
    ou = !1;
  function Id(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ou ||
      El == null ||
      El !== Ho(l) ||
      ((l = El),
      'selectionStart' in l && lu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Er && Tr(Er, l)) ||
        ((Er = l),
        (l = Ni(ru, 'onSelect')),
        0 < l.length &&
          ((e = new Vo('onSelect', 'select', null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = El))));
  }
  function Va(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a['Webkit' + t] = 'webkit' + e),
      (a['Moz' + t] = 'moz' + e),
      a
    );
  }
  var Rl = {
      animationend: Va('Animation', 'AnimationEnd'),
      animationiteration: Va('Animation', 'AnimationIteration'),
      animationstart: Va('Animation', 'AnimationStart'),
      transitionrun: Va('Transition', 'TransitionRun'),
      transitionstart: Va('Transition', 'TransitionStart'),
      transitioncancel: Va('Transition', 'TransitionCancel'),
      transitionend: Va('Transition', 'TransitionEnd'),
    },
    iu = {},
    Fd = {};
  Pn &&
    ((Fd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Rl.animationend.animation,
      delete Rl.animationiteration.animation,
      delete Rl.animationstart.animation),
    'TransitionEvent' in window || delete Rl.transitionend.transition);
  function Pa(t) {
    if (iu[t]) return iu[t];
    if (!Rl[t]) return t;
    var e = Rl[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in Fd) return (iu[t] = e[a]);
    return t;
  }
  var Wd = Pa('animationend'),
    Jd = Pa('animationiteration'),
    tp = Pa('animationstart'),
    xv = Pa('transitionrun'),
    Cv = Pa('transitionstart'),
    Tv = Pa('transitioncancel'),
    ep = Pa('transitionend'),
    np = new Map(),
    su =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  su.push('scrollEnd');
  function En(t, e) {
    (np.set(t, e), Ga(e, [t]));
  }
  var ap = new WeakMap();
  function pn(t, e) {
    if (typeof t == 'object' && t !== null) {
      var a = ap.get(t);
      return a !== void 0 ? a : ((e = { value: t, source: e, stack: bd(e) }), ap.set(t, e), e);
    }
    return { value: t, source: e, stack: bd(e) };
  }
  var mn = [],
    Al = 0,
    uu = 0;
  function Ko() {
    for (var t = Al, e = (uu = Al = 0); e < t; ) {
      var a = mn[e];
      mn[e++] = null;
      var l = mn[e];
      mn[e++] = null;
      var s = mn[e];
      mn[e++] = null;
      var u = mn[e];
      if (((mn[e++] = null), l !== null && s !== null)) {
        var m = l.pending;
        (m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)), (l.pending = s));
      }
      u !== 0 && lp(a, s, u);
    }
  }
  function Qo(t, e, a, l) {
    ((mn[Al++] = t),
      (mn[Al++] = e),
      (mn[Al++] = a),
      (mn[Al++] = l),
      (uu |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function cu(t, e, a, l) {
    return (Qo(t, e, a, l), Zo(t));
  }
  function Ml(t, e) {
    return (Qo(t, null, null, e), Zo(t));
  }
  function lp(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var s = !1, u = t.return; u !== null; )
      ((u.childLanes |= a),
        (l = u.alternate),
        l !== null && (l.childLanes |= a),
        u.tag === 22 && ((t = u.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Ut(a)),
          (t = u.hiddenUpdates),
          (l = t[s]),
          l === null ? (t[s] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        u)
      : null;
  }
  function Zo(t) {
    if (50 < Zr) throw ((Zr = 0), (gc = null), Error(i(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ol = {};
  function Ev(t, e, a, l) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function en(t, e, a, l) {
    return new Ev(t, e, a, l);
  }
  function fu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Xn(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = en(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function rp(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Io(t, e, a, l, s, u) {
    var m = 0;
    if (((l = t), typeof t == 'function')) fu(t) && (m = 1);
    else if (typeof t == 'string')
      m = Ab(t, a, it.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case J:
          return ((t = en(31, a, e, s)), (t.elementType = J), (t.lanes = u), t);
        case T:
          return Xa(a.children, s, u, e);
        case C:
          ((m = 8), (s |= 24));
          break;
        case N:
          return ((t = en(12, a, e, s | 2)), (t.elementType = N), (t.lanes = u), t);
        case O:
          return ((t = en(13, a, e, s)), (t.elementType = O), (t.lanes = u), t);
        case D:
          return ((t = en(19, a, e, s)), (t.elementType = D), (t.lanes = u), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case k:
              case B:
                m = 10;
                break t;
              case G:
                m = 9;
                break t;
              case w:
                m = 11;
                break t;
              case P:
                m = 14;
                break t;
              case Q:
                ((m = 16), (l = null));
                break t;
            }
          ((m = 29), (a = Error(i(130, t === null ? 'null' : typeof t, ''))), (l = null));
      }
    return ((e = en(m, a, e, s)), (e.elementType = t), (e.type = l), (e.lanes = u), e);
  }
  function Xa(t, e, a, l) {
    return ((t = en(7, t, l, e)), (t.lanes = a), t);
  }
  function du(t, e, a) {
    return ((t = en(6, t, null, e)), (t.lanes = a), t);
  }
  function pu(t, e, a) {
    return (
      (e = en(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var zl = [],
    wl = 0,
    Fo = null,
    Wo = 0,
    hn = [],
    gn = 0,
    Ka = null,
    Kn = 1,
    Qn = '';
  function Qa(t, e) {
    ((zl[wl++] = Wo), (zl[wl++] = Fo), (Fo = t), (Wo = e));
  }
  function op(t, e, a) {
    ((hn[gn++] = Kn), (hn[gn++] = Qn), (hn[gn++] = Ka), (Ka = t));
    var l = Kn;
    t = Qn;
    var s = 32 - Ut(l) - 1;
    ((l &= ~(1 << s)), (a += 1));
    var u = 32 - Ut(e) + s;
    if (30 < u) {
      var m = s - (s % 5);
      ((u = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (s -= m),
        (Kn = (1 << (32 - Ut(e) + s)) | (a << s) | l),
        (Qn = u + t));
    } else ((Kn = (1 << u) | (a << s) | l), (Qn = t));
  }
  function mu(t) {
    t.return !== null && (Qa(t, 1), op(t, 1, 0));
  }
  function hu(t) {
    for (; t === Fo; ) ((Fo = zl[--wl]), (zl[wl] = null), (Wo = zl[--wl]), (zl[wl] = null));
    for (; t === Ka; )
      ((Ka = hn[--gn]),
        (hn[gn] = null),
        (Qn = hn[--gn]),
        (hn[gn] = null),
        (Kn = hn[--gn]),
        (hn[gn] = null));
  }
  var Pe = null,
    ye = null,
    kt = !1,
    Za = null,
    wn = !1,
    gu = Error(i(519));
  function Ia(t) {
    var e = Error(i(418, ''));
    throw (Mr(pn(e, t)), gu);
  }
  function ip(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[He] = t), (e[Xe] = l), a)) {
      case 'dialog':
        (wt('cancel', e), wt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        wt('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Fr.length; a++) wt(Fr[a], e);
        break;
      case 'source':
        wt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (wt('error', e), wt('load', e));
        break;
      case 'details':
        wt('toggle', e);
        break;
      case 'input':
        (wt('invalid', e),
          Cd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          Lo(e));
        break;
      case 'select':
        wt('invalid', e);
        break;
      case 'textarea':
        (wt('invalid', e), Ed(e, l.value, l.defaultValue, l.children), Lo(e));
    }
    ((a = l.children),
      (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
      e.textContent === '' + a ||
      l.suppressHydrationWarning === !0 ||
      Eh(e.textContent, a)
        ? (l.popover != null && (wt('beforetoggle', e), wt('toggle', e)),
          l.onScroll != null && wt('scroll', e),
          l.onScrollEnd != null && wt('scrollend', e),
          l.onClick != null && (e.onclick = _i),
          (e = !0))
        : (e = !1),
      e || Ia(t));
  }
  function sp(t) {
    for (Pe = t.return; Pe; )
      switch (Pe.tag) {
        case 5:
        case 13:
          wn = !1;
          return;
        case 27:
        case 3:
          wn = !0;
          return;
        default:
          Pe = Pe.return;
      }
  }
  function Rr(t) {
    if (t !== Pe) return !1;
    if (!kt) return (sp(t), (kt = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type), (a = !(a !== 'form' && a !== 'button') || _c(t.type, t.memoizedProps))),
        (a = !a)),
      a && ye && Ia(t),
      sp(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(i(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === '/$')) {
              if (e === 0) {
                ye = An(t.nextSibling);
                break t;
              }
              e--;
            } else (a !== '$' && a !== '$!' && a !== '$?') || e++;
          t = t.nextSibling;
        }
        ye = null;
      }
    } else
      e === 27
        ? ((e = ye), wa(t.type) ? ((t = kc), (kc = null), (ye = t)) : (ye = e))
        : (ye = Pe ? An(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ar() {
    ((ye = Pe = null), (kt = !1));
  }
  function up() {
    var t = Za;
    return (t !== null && (Ie === null ? (Ie = t) : Ie.push.apply(Ie, t), (Za = null)), t);
  }
  function Mr(t) {
    Za === null ? (Za = [t]) : Za.push(t);
  }
  var yu = X(null),
    Fa = null,
    Zn = null;
  function ha(t, e, a) {
    (lt(yu, e._currentValue), (e._currentValue = a));
  }
  function In(t) {
    ((t._currentValue = yu.current), rt(yu));
  }
  function vu(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function bu(t, e, a, l) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var m = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var y = u;
          u = s;
          for (var R = 0; R < e.length; R++)
            if (y.context === e[R]) {
              ((u.lanes |= a),
                (y = u.alternate),
                y !== null && (y.lanes |= a),
                vu(u.return, a, t),
                l || (m = null));
              break t;
            }
          u = y.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(i(341));
        ((m.lanes |= a), (u = m.alternate), u !== null && (u.lanes |= a), vu(m, a, t), (m = null));
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            ((s.return = m.return), (m = s));
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Or(t, e, a, l) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(i(387));
        if (((m = m.memoizedProps), m !== null)) {
          var y = s.type;
          tn(s.pendingProps.value, m.value) || (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === At.current) {
        if (((m = s.alternate), m === null)) throw Error(i(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(ao) : (t = [ao]));
      }
      s = s.return;
    }
    (t !== null && bu(e, t, a, l), (e.flags |= 262144));
  }
  function Jo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!tn(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Wa(t) {
    ((Fa = t), (Zn = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function $e(t) {
    return cp(Fa, t);
  }
  function ti(t, e) {
    return (Fa === null && Wa(t), cp(t, e));
  }
  function cp(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Zn === null)) {
      if (t === null) throw Error(i(308));
      ((Zn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else Zn = Zn.next = e;
    return a;
  }
  var Rv =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    Av = n.unstable_scheduleCallback,
    Mv = n.unstable_NormalPriority,
    Oe = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Su() {
    return { controller: new Rv(), data: new Map(), refCount: 0 };
  }
  function zr(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Av(Mv, function () {
          t.controller.abort();
        }));
  }
  var wr = null,
    xu = 0,
    Nl = 0,
    _l = null;
  function Ov(t, e) {
    if (wr === null) {
      var a = (wr = []);
      ((xu = 0),
        (Nl = Tc()),
        (_l = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (xu++, e.then(fp, fp), e);
  }
  function fp() {
    if (--xu === 0 && wr !== null) {
      _l !== null && (_l.status = 'fulfilled');
      var t = wr;
      ((wr = null), (Nl = 0), (_l = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function zv(t, e) {
    var a = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (s) {
          a.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = e));
          for (var s = 0; s < a.length; s++) (0, a[s])(e);
        },
        function (s) {
          for (l.status = 'rejected', l.reason = s, s = 0; s < a.length; s++) (0, a[s])(void 0);
        },
      ),
      l
    );
  }
  var dp = M.S;
  M.S = function (t, e) {
    (typeof e == 'object' && e !== null && typeof e.then == 'function' && Ov(t, e),
      dp !== null && dp(t, e));
  };
  var Ja = X(null);
  function Cu() {
    var t = Ja.current;
    return t !== null ? t : re.pooledCache;
  }
  function ei(t, e) {
    e === null ? lt(Ja, Ja.current) : lt(Ja, e.pool);
  }
  function pp() {
    var t = Cu();
    return t === null ? null : { parent: Oe._currentValue, pool: t };
  }
  var Nr = Error(i(460)),
    mp = Error(i(474)),
    ni = Error(i(542)),
    Tu = { then: function () {} };
  function hp(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function ai() {}
  function gp(t, e, a) {
    switch (
      ((a = t[a]), a === void 0 ? t.push(e) : a !== e && (e.then(ai, ai), (e = a)), e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), vp(t), t);
      default:
        if (typeof e.status == 'string') e.then(ai, ai);
        else {
          if (((t = re), t !== null && 100 < t.shellSuspendCounter)) throw Error(i(482));
          ((t = e),
            (t.status = 'pending'),
            t.then(
              function (l) {
                if (e.status === 'pending') {
                  var s = e;
                  ((s.status = 'fulfilled'), (s.value = l));
                }
              },
              function (l) {
                if (e.status === 'pending') {
                  var s = e;
                  ((s.status = 'rejected'), (s.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), vp(t), t);
        }
        throw ((_r = e), Nr);
    }
  }
  var _r = null;
  function yp() {
    if (_r === null) throw Error(i(459));
    var t = _r;
    return ((_r = null), t);
  }
  function vp(t) {
    if (t === Nr || t === ni) throw Error(i(483));
  }
  var ga = !1;
  function Eu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ru(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ya(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function va(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Yt & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (l.pending = e),
        (e = Zo(t)),
        lp(t, null, a),
        e
      );
    }
    return (Qo(t, l, e, a), Zo(t));
  }
  function Br(t, e, a) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), fd(t, a));
    }
  }
  function Au(t, e) {
    var a = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var s = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var m = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (u === null ? (s = u = m) : (u = u.next = m), (a = a.next));
        } while (a !== null);
        u === null ? (s = u = e) : (u = u.next = e);
      } else s = u = e;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e));
  }
  var Mu = !1;
  function Dr() {
    if (Mu) {
      var t = _l;
      if (t !== null) throw t;
    }
  }
  function Ur(t, e, a, l) {
    Mu = !1;
    var s = t.updateQueue;
    ga = !1;
    var u = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var R = y,
        L = R.next;
      ((R.next = null), m === null ? (u = L) : (m.next = L), (m = R));
      var I = t.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (y = I.lastBaseUpdate),
        y !== m && (y === null ? (I.firstBaseUpdate = L) : (y.next = L), (I.lastBaseUpdate = R)));
    }
    if (u !== null) {
      var tt = s.baseState;
      ((m = 0), (I = L = R = null), (y = u));
      do {
        var $ = y.lane & -536870913,
          q = $ !== y.lane;
        if (q ? (Bt & $) === $ : (l & $) === $) {
          ($ !== 0 && $ === Nl && (Mu = !0),
            I !== null &&
              (I = I.next =
                { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null }));
          t: {
            var vt = t,
              gt = y;
            $ = e;
            var Wt = a;
            switch (gt.tag) {
              case 1:
                if (((vt = gt.payload), typeof vt == 'function')) {
                  tt = vt.call(Wt, tt, $);
                  break t;
                }
                tt = vt;
                break t;
              case 3:
                vt.flags = (vt.flags & -65537) | 128;
              case 0:
                if (
                  ((vt = gt.payload),
                  ($ = typeof vt == 'function' ? vt.call(Wt, tt, $) : vt),
                  $ == null)
                )
                  break t;
                tt = b({}, tt, $);
                break t;
              case 2:
                ga = !0;
            }
          }
          (($ = y.callback),
            $ !== null &&
              ((t.flags |= 64),
              q && (t.flags |= 8192),
              (q = s.callbacks),
              q === null ? (s.callbacks = [$]) : q.push($)));
        } else
          ((q = { lane: $, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            I === null ? ((L = I = q), (R = tt)) : (I = I.next = q),
            (m |= $));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((q = y),
            (y = q.next),
            (q.next = null),
            (s.lastBaseUpdate = q),
            (s.shared.pending = null));
        }
      } while (!0);
      (I === null && (R = tt),
        (s.baseState = R),
        (s.firstBaseUpdate = L),
        (s.lastBaseUpdate = I),
        u === null && (s.shared.lanes = 0),
        (Aa |= m),
        (t.lanes = m),
        (t.memoizedState = tt));
    }
  }
  function bp(t, e) {
    if (typeof t != 'function') throw Error(i(191, t));
    t.call(e);
  }
  function Sp(t, e) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) bp(a[t], e);
  }
  var Bl = X(null),
    li = X(0);
  function xp(t, e) {
    ((t = aa), lt(li, t), lt(Bl, e), (aa = t | e.baseLanes));
  }
  function Ou() {
    (lt(li, aa), lt(Bl, Bl.current));
  }
  function zu() {
    ((aa = li.current), rt(Bl), rt(li));
  }
  var ba = 0,
    Rt = null,
    It = null,
    Re = null,
    ri = !1,
    Dl = !1,
    tl = !1,
    oi = 0,
    kr = 0,
    Ul = null,
    wv = 0;
  function Ce() {
    throw Error(i(321));
  }
  function wu(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++) if (!tn(t[a], e[a])) return !1;
    return !0;
  }
  function Nu(t, e, a, l, s, u) {
    return (
      (ba = u),
      (Rt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? lm : rm),
      (tl = !1),
      (u = a(l, s)),
      (tl = !1),
      Dl && (u = Tp(e, a, l, s)),
      Cp(t),
      u
    );
  }
  function Cp(t) {
    M.H = di;
    var e = It !== null && It.next !== null;
    if (((ba = 0), (Re = It = Rt = null), (ri = !1), (kr = 0), (Ul = null), e)) throw Error(i(300));
    t === null || Ne || ((t = t.dependencies), t !== null && Jo(t) && (Ne = !0));
  }
  function Tp(t, e, a, l) {
    Rt = t;
    var s = 0;
    do {
      if ((Dl && (Ul = null), (kr = 0), (Dl = !1), 25 <= s)) throw Error(i(301));
      if (((s += 1), (Re = It = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((M.H = jv), (u = e(a, l)));
    } while (Dl);
    return u;
  }
  function Nv() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? jr(e) : e),
      (t = t.useState()[0]),
      (It !== null ? It.memoizedState : null) !== t && (Rt.flags |= 1024),
      e
    );
  }
  function _u() {
    var t = oi !== 0;
    return ((oi = 0), t);
  }
  function Bu(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Du(t) {
    if (ri) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      ri = !1;
    }
    ((ba = 0), (Re = It = Rt = null), (Dl = !1), (kr = oi = 0), (Ul = null));
  }
  function Qe() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Re === null ? (Rt.memoizedState = Re = t) : (Re = Re.next = t), Re);
  }
  function Ae() {
    if (It === null) {
      var t = Rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = It.next;
    var e = Re === null ? Rt.memoizedState : Re.next;
    if (e !== null) ((Re = e), (It = t));
    else {
      if (t === null) throw Rt.alternate === null ? Error(i(467)) : Error(i(310));
      ((It = t),
        (t = {
          memoizedState: It.memoizedState,
          baseState: It.baseState,
          baseQueue: It.baseQueue,
          queue: It.queue,
          next: null,
        }),
        Re === null ? (Rt.memoizedState = Re = t) : (Re = Re.next = t));
    }
    return Re;
  }
  function Uu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function jr(t) {
    var e = kr;
    return (
      (kr += 1),
      Ul === null && (Ul = []),
      (t = gp(Ul, t, e)),
      (e = Rt),
      (Re === null ? e.memoizedState : Re.next) === null &&
        ((e = e.alternate), (M.H = e === null || e.memoizedState === null ? lm : rm)),
      t
    );
  }
  function ii(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return jr(t);
      if (t.$$typeof === B) return $e(t);
    }
    throw Error(i(438, String(t)));
  }
  function ku(t) {
    var e = null,
      a = Rt.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = Rt.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Uu()), (Rt.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = et;
    return (e.index++, a);
  }
  function Fn(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function si(t) {
    var e = Ae();
    return ju(e, It, t);
  }
  function ju(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = a;
    var s = t.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (s !== null) {
        var m = s.next;
        ((s.next = u.next), (u.next = m));
      }
      ((e.baseQueue = s = u), (l.pending = null));
    }
    if (((u = t.baseState), s === null)) t.memoizedState = u;
    else {
      e = s.next;
      var y = (m = null),
        R = null,
        L = e,
        I = !1;
      do {
        var tt = L.lane & -536870913;
        if (tt !== L.lane ? (Bt & tt) === tt : (ba & tt) === tt) {
          var $ = L.revertLane;
          if ($ === 0)
            (R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              tt === Nl && (I = !0));
          else if ((ba & $) === $) {
            ((L = L.next), $ === Nl && (I = !0));
            continue;
          } else
            ((tt = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              R === null ? ((y = R = tt), (m = u)) : (R = R.next = tt),
              (Rt.lanes |= $),
              (Aa |= $));
          ((tt = L.action), tl && a(u, tt), (u = L.hasEagerState ? L.eagerState : a(u, tt)));
        } else
          (($ = {
            lane: tt,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            R === null ? ((y = R = $), (m = u)) : (R = R.next = $),
            (Rt.lanes |= tt),
            (Aa |= tt));
        L = L.next;
      } while (L !== null && L !== e);
      if (
        (R === null ? (m = u) : (R.next = y),
        !tn(u, t.memoizedState) && ((Ne = !0), I && ((a = _l), a !== null)))
      )
        throw a;
      ((t.memoizedState = u), (t.baseState = m), (t.baseQueue = R), (l.lastRenderedState = u));
    }
    return (s === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Lu(t) {
    var e = Ae(),
      a = e.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch,
      s = a.pending,
      u = e.memoizedState;
    if (s !== null) {
      a.pending = null;
      var m = (s = s.next);
      do ((u = t(u, m.action)), (m = m.next));
      while (m !== s);
      (tn(u, e.memoizedState) || (Ne = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, l];
  }
  function Ep(t, e, a) {
    var l = Rt,
      s = Ae(),
      u = kt;
    if (u) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = e();
    var m = !tn((It || s).memoizedState, a);
    (m && ((s.memoizedState = a), (Ne = !0)), (s = s.queue));
    var y = Mp.bind(null, l, s, t);
    if (
      (Lr(2048, 8, y, [t]), s.getSnapshot !== e || m || (Re !== null && Re.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), kl(9, ui(), Ap.bind(null, l, s, a, e), null), re === null))
        throw Error(i(349));
      u || (ba & 124) !== 0 || Rp(l, e, a);
    }
    return a;
  }
  function Rp(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = Rt.updateQueue),
      e === null
        ? ((e = Uu()), (Rt.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function Ap(t, e, a, l) {
    ((e.value = a), (e.getSnapshot = l), Op(e) && zp(t));
  }
  function Mp(t, e, a) {
    return a(function () {
      Op(e) && zp(t);
    });
  }
  function Op(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !tn(t, a);
    } catch {
      return !0;
    }
  }
  function zp(t) {
    var e = Ml(t, 2);
    e !== null && on(e, t, 2);
  }
  function Hu(t) {
    var e = Qe();
    if (typeof t == 'function') {
      var a = t;
      if (((t = a()), tl)) {
        Qt(!0);
        try {
          a();
        } finally {
          Qt(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function wp(t, e, a, l) {
    return ((t.baseState = a), ju(t, It, typeof l == 'function' ? l : Fn));
  }
  function _v(t, e, a, l, s) {
    if (fi(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          u.listeners.push(m);
        },
      };
      (M.T !== null ? a(!0) : (u.isTransition = !1),
        l(u),
        (a = e.pending),
        a === null
          ? ((u.next = e.pending = u), Np(e, u))
          : ((u.next = a.next), (e.pending = a.next = u)));
    }
  }
  function Np(t, e) {
    var a = e.action,
      l = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = M.T,
        m = {};
      M.T = m;
      try {
        var y = a(s, l),
          R = M.S;
        (R !== null && R(m, y), _p(t, e, y));
      } catch (L) {
        $u(t, e, L);
      } finally {
        M.T = u;
      }
    } else
      try {
        ((u = a(s, l)), _p(t, e, u));
      } catch (L) {
        $u(t, e, L);
      }
  }
  function _p(t, e, a) {
    a !== null && typeof a == 'object' && typeof a.then == 'function'
      ? a.then(
          function (l) {
            Bp(t, e, l);
          },
          function (l) {
            return $u(t, e, l);
          },
        )
      : Bp(t, e, a);
  }
  function Bp(t, e, a) {
    ((e.status = 'fulfilled'),
      (e.value = a),
      Dp(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next), a === e ? (t.pending = null) : ((a = a.next), (e.next = a), Np(t, a))));
  }
  function $u(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = 'rejected'), (e.reason = a), Dp(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function Dp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Up(t, e) {
    return e;
  }
  function kp(t, e) {
    if (kt) {
      var a = re.formState;
      if (a !== null) {
        t: {
          var l = Rt;
          if (kt) {
            if (ye) {
              e: {
                for (var s = ye, u = wn; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = An(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((u = s.data), (s = u === 'F!' || u === 'F' ? s : null));
              }
              if (s) {
                ((ye = An(s.nextSibling)), (l = s.data === 'F!'));
                break t;
              }
            }
            Ia(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = Qe()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Up,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = em.bind(null, Rt, l)),
      (l.dispatch = a),
      (l = Hu(!1)),
      (u = Pu.bind(null, Rt, !1, l.queue)),
      (l = Qe()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = s),
      (a = _v.bind(null, Rt, s, u, a)),
      (s.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function jp(t) {
    var e = Ae();
    return Lp(e, It, t);
  }
  function Lp(t, e, a) {
    if (
      ((e = ju(t, e, Up)[0]),
      (t = si(Fn)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var l = jr(e);
      } catch (m) {
        throw m === Nr ? ni : m;
      }
    else l = e;
    e = Ae();
    var s = e.queue,
      u = s.dispatch;
    return (
      a !== e.memoizedState && ((Rt.flags |= 2048), kl(9, ui(), Bv.bind(null, s, a), null)),
      [l, u, t]
    );
  }
  function Bv(t, e) {
    t.action = e;
  }
  function Hp(t) {
    var e = Ae(),
      a = It;
    if (a !== null) return Lp(e, a, t);
    (Ae(), (e = e.memoizedState), (a = Ae()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = t), [e, l, !1]);
  }
  function kl(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = Rt.updateQueue),
      e === null && ((e = Uu()), (Rt.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function ui() {
    return { destroy: void 0, resource: void 0 };
  }
  function $p() {
    return Ae().memoizedState;
  }
  function ci(t, e, a, l) {
    var s = Qe();
    ((l = l === void 0 ? null : l), (Rt.flags |= t), (s.memoizedState = kl(1 | e, ui(), a, l)));
  }
  function Lr(t, e, a, l) {
    var s = Ae();
    l = l === void 0 ? null : l;
    var u = s.memoizedState.inst;
    It !== null && l !== null && wu(l, It.memoizedState.deps)
      ? (s.memoizedState = kl(e, u, a, l))
      : ((Rt.flags |= t), (s.memoizedState = kl(1 | e, u, a, l)));
  }
  function qp(t, e) {
    ci(8390656, 8, t, e);
  }
  function Gp(t, e) {
    Lr(2048, 8, t, e);
  }
  function Yp(t, e) {
    return Lr(4, 2, t, e);
  }
  function Vp(t, e) {
    return Lr(4, 4, t, e);
  }
  function Pp(t, e) {
    if (typeof e == 'function') {
      t = t();
      var a = e(t);
      return function () {
        typeof a == 'function' ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Xp(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), Lr(4, 4, Pp.bind(null, e, t), a));
  }
  function qu() {}
  function Kp(t, e) {
    var a = Ae();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && wu(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function Qp(t, e) {
    var a = Ae();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && wu(e, l[1])) return l[0];
    if (((l = t()), tl)) {
      Qt(!0);
      try {
        t();
      } finally {
        Qt(!1);
      }
    }
    return ((a.memoizedState = [l, e]), l);
  }
  function Gu(t, e, a) {
    return a === void 0 || (ba & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = Fm()), (Rt.lanes |= t), (Aa |= t), a);
  }
  function Zp(t, e, a, l) {
    return tn(a, e)
      ? a
      : Bl.current !== null
        ? ((t = Gu(t, a, l)), tn(t, e) || (Ne = !0), t)
        : (ba & 42) === 0
          ? ((Ne = !0), (t.memoizedState = a))
          : ((t = Fm()), (Rt.lanes |= t), (Aa |= t), e);
  }
  function Ip(t, e, a, l, s) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var m = M.T,
      y = {};
    ((M.T = y), Pu(t, !1, e, a));
    try {
      var R = s(),
        L = M.S;
      if (
        (L !== null && L(y, R), R !== null && typeof R == 'object' && typeof R.then == 'function')
      ) {
        var I = zv(R, l);
        Hr(t, e, I, rn(t));
      } else Hr(t, e, l, rn(t));
    } catch (tt) {
      Hr(t, e, { then: function () {}, status: 'rejected', reason: tt }, rn());
    } finally {
      ((K.p = u), (M.T = m));
    }
  }
  function Dv() {}
  function Yu(t, e, a, l) {
    if (t.tag !== 5) throw Error(i(476));
    var s = Fp(t).queue;
    Ip(
      t,
      s,
      e,
      ot,
      a === null
        ? Dv
        : function () {
            return (Wp(t), a(l));
          },
    );
  }
  function Fp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ot,
      baseState: ot,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: ot,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Wp(t) {
    var e = Fp(t).next.queue;
    Hr(t, e, {}, rn());
  }
  function Vu() {
    return $e(ao);
  }
  function Jp() {
    return Ae().memoizedState;
  }
  function tm() {
    return Ae().memoizedState;
  }
  function Uv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = rn();
          t = ya(a);
          var l = va(e, t, a);
          (l !== null && (on(l, e, a), Br(l, e, a)), (e = { cache: Su() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function kv(t, e, a) {
    var l = rn();
    ((a = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null }),
      fi(t) ? nm(e, a) : ((a = cu(t, e, a, l)), a !== null && (on(a, t, l), am(a, e, l))));
  }
  function em(t, e, a) {
    var l = rn();
    Hr(t, e, a, l);
  }
  function Hr(t, e, a, l) {
    var s = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (fi(t)) nm(e, s);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var m = e.lastRenderedState,
            y = u(m, a);
          if (((s.hasEagerState = !0), (s.eagerState = y), tn(y, m)))
            return (Qo(t, e, s, 0), re === null && Ko(), !1);
        } catch {
        } finally {
        }
      if (((a = cu(t, e, s, l)), a !== null)) return (on(a, t, l), am(a, e, l), !0);
    }
    return !1;
  }
  function Pu(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Tc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fi(t))
    ) {
      if (e) throw Error(i(479));
    } else ((e = cu(t, a, l, 2)), e !== null && on(e, t, 2));
  }
  function fi(t) {
    var e = t.alternate;
    return t === Rt || (e !== null && e === Rt);
  }
  function nm(t, e) {
    Dl = ri = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)), (t.pending = e));
  }
  function am(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), fd(t, a));
    }
  }
  var di = {
      readContext: $e,
      use: ii,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useLayoutEffect: Ce,
      useInsertionEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      useHostTransitionStatus: Ce,
      useFormState: Ce,
      useActionState: Ce,
      useOptimistic: Ce,
      useMemoCache: Ce,
      useCacheRefresh: Ce,
    },
    lm = {
      readContext: $e,
      use: ii,
      useCallback: function (t, e) {
        return ((Qe().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: $e,
      useEffect: qp,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null), ci(4194308, 4, Pp.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return ci(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ci(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Qe();
        e = e === void 0 ? null : e;
        var l = t();
        if (tl) {
          Qt(!0);
          try {
            t();
          } finally {
            Qt(!1);
          }
        }
        return ((a.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, a) {
        var l = Qe();
        if (a !== void 0) {
          var s = a(e);
          if (tl) {
            Qt(!0);
            try {
              a(e);
            } finally {
              Qt(!1);
            }
          }
        } else s = e;
        return (
          (l.memoizedState = l.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (l.queue = t),
          (t = t.dispatch = kv.bind(null, Rt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Qe();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Hu(t);
        var e = t.queue,
          a = em.bind(null, Rt, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: qu,
      useDeferredValue: function (t, e) {
        var a = Qe();
        return Gu(a, t, e);
      },
      useTransition: function () {
        var t = Hu(!1);
        return ((t = Ip.bind(null, Rt, t.queue, !0, !1)), (Qe().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, a) {
        var l = Rt,
          s = Qe();
        if (kt) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = e()), re === null)) throw Error(i(349));
          (Bt & 124) !== 0 || Rp(l, e, a);
        }
        s.memoizedState = a;
        var u = { value: a, getSnapshot: e };
        return (
          (s.queue = u),
          qp(Mp.bind(null, l, u, t), [t]),
          (l.flags |= 2048),
          kl(9, ui(), Ap.bind(null, l, u, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Qe(),
          e = re.identifierPrefix;
        if (kt) {
          var a = Qn,
            l = Kn;
          ((a = (l & ~(1 << (32 - Ut(l) - 1))).toString(32) + a),
            (e = '«' + e + 'R' + a),
            (a = oi++),
            0 < a && (e += 'H' + a.toString(32)),
            (e += '»'));
        } else ((a = wv++), (e = '«' + e + 'r' + a.toString(32) + '»'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Vu,
      useFormState: kp,
      useActionState: kp,
      useOptimistic: function (t) {
        var e = Qe();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((e.queue = a), (e = Pu.bind(null, Rt, !0, a)), (a.dispatch = e), [t, e]);
      },
      useMemoCache: ku,
      useCacheRefresh: function () {
        return (Qe().memoizedState = Uv.bind(null, Rt));
      },
    },
    rm = {
      readContext: $e,
      use: ii,
      useCallback: Kp,
      useContext: $e,
      useEffect: Gp,
      useImperativeHandle: Xp,
      useInsertionEffect: Yp,
      useLayoutEffect: Vp,
      useMemo: Qp,
      useReducer: si,
      useRef: $p,
      useState: function () {
        return si(Fn);
      },
      useDebugValue: qu,
      useDeferredValue: function (t, e) {
        var a = Ae();
        return Zp(a, It.memoizedState, t, e);
      },
      useTransition: function () {
        var t = si(Fn)[0],
          e = Ae().memoizedState;
        return [typeof t == 'boolean' ? t : jr(t), e];
      },
      useSyncExternalStore: Ep,
      useId: Jp,
      useHostTransitionStatus: Vu,
      useFormState: jp,
      useActionState: jp,
      useOptimistic: function (t, e) {
        var a = Ae();
        return wp(a, It, t, e);
      },
      useMemoCache: ku,
      useCacheRefresh: tm,
    },
    jv = {
      readContext: $e,
      use: ii,
      useCallback: Kp,
      useContext: $e,
      useEffect: Gp,
      useImperativeHandle: Xp,
      useInsertionEffect: Yp,
      useLayoutEffect: Vp,
      useMemo: Qp,
      useReducer: Lu,
      useRef: $p,
      useState: function () {
        return Lu(Fn);
      },
      useDebugValue: qu,
      useDeferredValue: function (t, e) {
        var a = Ae();
        return It === null ? Gu(a, t, e) : Zp(a, It.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Lu(Fn)[0],
          e = Ae().memoizedState;
        return [typeof t == 'boolean' ? t : jr(t), e];
      },
      useSyncExternalStore: Ep,
      useId: Jp,
      useHostTransitionStatus: Vu,
      useFormState: Hp,
      useActionState: Hp,
      useOptimistic: function (t, e) {
        var a = Ae();
        return It !== null ? wp(a, It, t, e) : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: ku,
      useCacheRefresh: tm,
    },
    jl = null,
    $r = 0;
  function pi(t) {
    var e = $r;
    return (($r += 1), jl === null && (jl = []), gp(jl, t, e));
  }
  function qr(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function mi(t, e) {
    throw e.$$typeof === S
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t,
          ),
        ));
  }
  function om(t) {
    var e = t._init;
    return e(t._payload);
  }
  function im(t) {
    function e(U, _) {
      if (t) {
        var j = U.deletions;
        j === null ? ((U.deletions = [_]), (U.flags |= 16)) : j.push(_);
      }
    }
    function a(U, _) {
      if (!t) return null;
      for (; _ !== null; ) (e(U, _), (_ = _.sibling));
      return null;
    }
    function l(U) {
      for (var _ = new Map(); U !== null; )
        (U.key !== null ? _.set(U.key, U) : _.set(U.index, U), (U = U.sibling));
      return _;
    }
    function s(U, _) {
      return ((U = Xn(U, _)), (U.index = 0), (U.sibling = null), U);
    }
    function u(U, _, j) {
      return (
        (U.index = j),
        t
          ? ((j = U.alternate),
            j !== null
              ? ((j = j.index), j < _ ? ((U.flags |= 67108866), _) : j)
              : ((U.flags |= 67108866), _))
          : ((U.flags |= 1048576), _)
      );
    }
    function m(U) {
      return (t && U.alternate === null && (U.flags |= 67108866), U);
    }
    function y(U, _, j, W) {
      return _ === null || _.tag !== 6
        ? ((_ = du(j, U.mode, W)), (_.return = U), _)
        : ((_ = s(_, j)), (_.return = U), _);
    }
    function R(U, _, j, W) {
      var st = j.type;
      return st === T
        ? I(U, _, j.props.children, W, j.key)
        : _ !== null &&
            (_.elementType === st ||
              (typeof st == 'object' && st !== null && st.$$typeof === Q && om(st) === _.type))
          ? ((_ = s(_, j.props)), qr(_, j), (_.return = U), _)
          : ((_ = Io(j.type, j.key, j.props, null, U.mode, W)), qr(_, j), (_.return = U), _);
    }
    function L(U, _, j, W) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== j.containerInfo ||
        _.stateNode.implementation !== j.implementation
        ? ((_ = pu(j, U.mode, W)), (_.return = U), _)
        : ((_ = s(_, j.children || [])), (_.return = U), _);
    }
    function I(U, _, j, W, st) {
      return _ === null || _.tag !== 7
        ? ((_ = Xa(j, U.mode, W, st)), (_.return = U), _)
        : ((_ = s(_, j)), (_.return = U), _);
    }
    function tt(U, _, j) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number' || typeof _ == 'bigint')
        return ((_ = du('' + _, U.mode, j)), (_.return = U), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case A:
            return ((j = Io(_.type, _.key, _.props, null, U.mode, j)), qr(j, _), (j.return = U), j);
          case z:
            return ((_ = pu(_, U.mode, j)), (_.return = U), _);
          case Q:
            var W = _._init;
            return ((_ = W(_._payload)), tt(U, _, j));
        }
        if (V(_) || v(_)) return ((_ = Xa(_, U.mode, j, null)), (_.return = U), _);
        if (typeof _.then == 'function') return tt(U, pi(_), j);
        if (_.$$typeof === B) return tt(U, ti(U, _), j);
        mi(U, _);
      }
      return null;
    }
    function $(U, _, j, W) {
      var st = _ !== null ? _.key : null;
      if ((typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint')
        return st !== null ? null : y(U, _, '' + j, W);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case A:
            return j.key === st ? R(U, _, j, W) : null;
          case z:
            return j.key === st ? L(U, _, j, W) : null;
          case Q:
            return ((st = j._init), (j = st(j._payload)), $(U, _, j, W));
        }
        if (V(j) || v(j)) return st !== null ? null : I(U, _, j, W, null);
        if (typeof j.then == 'function') return $(U, _, pi(j), W);
        if (j.$$typeof === B) return $(U, _, ti(U, j), W);
        mi(U, j);
      }
      return null;
    }
    function q(U, _, j, W, st) {
      if ((typeof W == 'string' && W !== '') || typeof W == 'number' || typeof W == 'bigint')
        return ((U = U.get(j) || null), y(_, U, '' + W, st));
      if (typeof W == 'object' && W !== null) {
        switch (W.$$typeof) {
          case A:
            return ((U = U.get(W.key === null ? j : W.key) || null), R(_, U, W, st));
          case z:
            return ((U = U.get(W.key === null ? j : W.key) || null), L(_, U, W, st));
          case Q:
            var Ot = W._init;
            return ((W = Ot(W._payload)), q(U, _, j, W, st));
        }
        if (V(W) || v(W)) return ((U = U.get(j) || null), I(_, U, W, st, null));
        if (typeof W.then == 'function') return q(U, _, j, pi(W), st);
        if (W.$$typeof === B) return q(U, _, j, ti(_, W), st);
        mi(_, W);
      }
      return null;
    }
    function vt(U, _, j, W) {
      for (
        var st = null, Ot = null, pt = _, yt = (_ = 0), Be = null;
        pt !== null && yt < j.length;
        yt++
      ) {
        pt.index > yt ? ((Be = pt), (pt = null)) : (Be = pt.sibling);
        var Dt = $(U, pt, j[yt], W);
        if (Dt === null) {
          pt === null && (pt = Be);
          break;
        }
        (t && pt && Dt.alternate === null && e(U, pt),
          (_ = u(Dt, _, yt)),
          Ot === null ? (st = Dt) : (Ot.sibling = Dt),
          (Ot = Dt),
          (pt = Be));
      }
      if (yt === j.length) return (a(U, pt), kt && Qa(U, yt), st);
      if (pt === null) {
        for (; yt < j.length; yt++)
          ((pt = tt(U, j[yt], W)),
            pt !== null &&
              ((_ = u(pt, _, yt)), Ot === null ? (st = pt) : (Ot.sibling = pt), (Ot = pt)));
        return (kt && Qa(U, yt), st);
      }
      for (pt = l(pt); yt < j.length; yt++)
        ((Be = q(pt, U, yt, j[yt], W)),
          Be !== null &&
            (t && Be.alternate !== null && pt.delete(Be.key === null ? yt : Be.key),
            (_ = u(Be, _, yt)),
            Ot === null ? (st = Be) : (Ot.sibling = Be),
            (Ot = Be)));
      return (
        t &&
          pt.forEach(function (Ua) {
            return e(U, Ua);
          }),
        kt && Qa(U, yt),
        st
      );
    }
    function gt(U, _, j, W) {
      if (j == null) throw Error(i(151));
      for (
        var st = null, Ot = null, pt = _, yt = (_ = 0), Be = null, Dt = j.next();
        pt !== null && !Dt.done;
        yt++, Dt = j.next()
      ) {
        pt.index > yt ? ((Be = pt), (pt = null)) : (Be = pt.sibling);
        var Ua = $(U, pt, Dt.value, W);
        if (Ua === null) {
          pt === null && (pt = Be);
          break;
        }
        (t && pt && Ua.alternate === null && e(U, pt),
          (_ = u(Ua, _, yt)),
          Ot === null ? (st = Ua) : (Ot.sibling = Ua),
          (Ot = Ua),
          (pt = Be));
      }
      if (Dt.done) return (a(U, pt), kt && Qa(U, yt), st);
      if (pt === null) {
        for (; !Dt.done; yt++, Dt = j.next())
          ((Dt = tt(U, Dt.value, W)),
            Dt !== null &&
              ((_ = u(Dt, _, yt)), Ot === null ? (st = Dt) : (Ot.sibling = Dt), (Ot = Dt)));
        return (kt && Qa(U, yt), st);
      }
      for (pt = l(pt); !Dt.done; yt++, Dt = j.next())
        ((Dt = q(pt, U, yt, Dt.value, W)),
          Dt !== null &&
            (t && Dt.alternate !== null && pt.delete(Dt.key === null ? yt : Dt.key),
            (_ = u(Dt, _, yt)),
            Ot === null ? (st = Dt) : (Ot.sibling = Dt),
            (Ot = Dt)));
      return (
        t &&
          pt.forEach(function (Lb) {
            return e(U, Lb);
          }),
        kt && Qa(U, yt),
        st
      );
    }
    function Wt(U, _, j, W) {
      if (
        (typeof j == 'object' &&
          j !== null &&
          j.type === T &&
          j.key === null &&
          (j = j.props.children),
        typeof j == 'object' && j !== null)
      ) {
        switch (j.$$typeof) {
          case A:
            t: {
              for (var st = j.key; _ !== null; ) {
                if (_.key === st) {
                  if (((st = j.type), st === T)) {
                    if (_.tag === 7) {
                      (a(U, _.sibling), (W = s(_, j.props.children)), (W.return = U), (U = W));
                      break t;
                    }
                  } else if (
                    _.elementType === st ||
                    (typeof st == 'object' && st !== null && st.$$typeof === Q && om(st) === _.type)
                  ) {
                    (a(U, _.sibling), (W = s(_, j.props)), qr(W, j), (W.return = U), (U = W));
                    break t;
                  }
                  a(U, _);
                  break;
                } else e(U, _);
                _ = _.sibling;
              }
              j.type === T
                ? ((W = Xa(j.props.children, U.mode, W, j.key)), (W.return = U), (U = W))
                : ((W = Io(j.type, j.key, j.props, null, U.mode, W)),
                  qr(W, j),
                  (W.return = U),
                  (U = W));
            }
            return m(U);
          case z:
            t: {
              for (st = j.key; _ !== null; ) {
                if (_.key === st)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === j.containerInfo &&
                    _.stateNode.implementation === j.implementation
                  ) {
                    (a(U, _.sibling), (W = s(_, j.children || [])), (W.return = U), (U = W));
                    break t;
                  } else {
                    a(U, _);
                    break;
                  }
                else e(U, _);
                _ = _.sibling;
              }
              ((W = pu(j, U.mode, W)), (W.return = U), (U = W));
            }
            return m(U);
          case Q:
            return ((st = j._init), (j = st(j._payload)), Wt(U, _, j, W));
        }
        if (V(j)) return vt(U, _, j, W);
        if (v(j)) {
          if (((st = v(j)), typeof st != 'function')) throw Error(i(150));
          return ((j = st.call(j)), gt(U, _, j, W));
        }
        if (typeof j.then == 'function') return Wt(U, _, pi(j), W);
        if (j.$$typeof === B) return Wt(U, _, ti(U, j), W);
        mi(U, j);
      }
      return (typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint'
        ? ((j = '' + j),
          _ !== null && _.tag === 6
            ? (a(U, _.sibling), (W = s(_, j)), (W.return = U), (U = W))
            : (a(U, _), (W = du(j, U.mode, W)), (W.return = U), (U = W)),
          m(U))
        : a(U, _);
    }
    return function (U, _, j, W) {
      try {
        $r = 0;
        var st = Wt(U, _, j, W);
        return ((jl = null), st);
      } catch (pt) {
        if (pt === Nr || pt === ni) throw pt;
        var Ot = en(29, pt, null, U.mode);
        return ((Ot.lanes = W), (Ot.return = U), Ot);
      } finally {
      }
    };
  }
  var Ll = im(!0),
    sm = im(!1),
    yn = X(null),
    Nn = null;
  function Sa(t) {
    var e = t.alternate;
    (lt(ze, ze.current & 1),
      lt(yn, t),
      Nn === null && (e === null || Bl.current !== null || e.memoizedState !== null) && (Nn = t));
  }
  function um(t) {
    if (t.tag === 22) {
      if ((lt(ze, ze.current), lt(yn, t), Nn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Nn = t);
      }
    } else xa();
  }
  function xa() {
    (lt(ze, ze.current), lt(yn, yn.current));
  }
  function Wn(t) {
    (rt(yn), Nn === t && (Nn = null), rt(ze));
  }
  var ze = X(0);
  function hi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || a.data === '$?' || Uc(a))) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function Xu(t, e, a, l) {
    ((e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : b({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var Ku = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = rn(),
        s = ya(l);
      ((s.payload = e),
        a != null && (s.callback = a),
        (e = va(t, s, l)),
        e !== null && (on(e, t, l), Br(e, t, l)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = rn(),
        s = ya(l);
      ((s.tag = 1),
        (s.payload = e),
        a != null && (s.callback = a),
        (e = va(t, s, l)),
        e !== null && (on(e, t, l), Br(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = rn(),
        l = ya(a);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = va(t, l, a)),
        e !== null && (on(e, t, a), Br(e, t, a)));
    },
  };
  function cm(t, e, a, l, s, u, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, u, m)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Tr(a, l) || !Tr(s, u)
          : !0
    );
  }
  function fm(t, e, a, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && Ku.enqueueReplaceState(e, e.state, null));
  }
  function el(t, e) {
    var a = e;
    if ('ref' in e) {
      a = {};
      for (var l in e) l !== 'ref' && (a[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = b({}, a));
      for (var s in t) a[s] === void 0 && (a[s] = t[s]);
    }
    return a;
  }
  var gi =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var e = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == 'object' && t !== null && typeof t.message == 'string'
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', t);
            return;
          }
          console.error(t);
        };
  function dm(t) {
    gi(t);
  }
  function pm(t) {
    console.error(t);
  }
  function mm(t) {
    gi(t);
  }
  function yi(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function hm(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, { componentStack: a.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Qu(t, e, a) {
    return (
      (a = ya(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        yi(t, e);
      }),
      a
    );
  }
  function gm(t) {
    return ((t = ya(t)), (t.tag = 3), t);
  }
  function ym(t, e, a, l) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == 'function') {
      var u = l.value;
      ((t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          hm(e, a, l);
        }));
    }
    var m = a.stateNode;
    m !== null &&
      typeof m.componentDidCatch == 'function' &&
      (t.callback = function () {
        (hm(e, a, l),
          typeof s != 'function' && (Ma === null ? (Ma = new Set([this])) : Ma.add(this)));
        var y = l.stack;
        this.componentDidCatch(l.value, { componentStack: y !== null ? y : '' });
      });
  }
  function Lv(t, e, a, l, s) {
    if (((a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((e = a.alternate), e !== null && Or(e, a, s, !0), (a = yn.current), a !== null)) {
        switch (a.tag) {
          case 13:
            return (
              Nn === null ? vc() : a.alternate === null && ve === 0 && (ve = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = s),
              l === Tu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  Sc(t, l, s)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Tu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue), a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  Sc(t, l, s)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return (Sc(t, l, s), vc(), !1);
    }
    if (kt)
      return (
        (e = yn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            l !== gu && ((t = Error(i(422), { cause: l })), Mr(pn(t, a))))
          : (l !== gu && ((e = Error(i(423), { cause: l })), Mr(pn(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (l = pn(l, a)),
            (s = Qu(t.stateNode, l, s)),
            Au(t, s),
            ve !== 4 && (ve = 2)),
        !1
      );
    var u = Error(i(520), { cause: l });
    if (((u = pn(u, a)), Qr === null ? (Qr = [u]) : Qr.push(u), ve !== 4 && (ve = 2), e === null))
      return !0;
    ((l = pn(l, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = s & -s),
            (a.lanes |= t),
            (t = Qu(a.stateNode, l, t)),
            Au(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (Ma === null || !Ma.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (s &= -s),
              (a.lanes |= s),
              (s = gm(s)),
              ym(s, t, a, l),
              Au(a, s),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var vm = Error(i(461)),
    Ne = !1;
  function Ue(t, e, a, l) {
    e.child = t === null ? sm(e, null, a, l) : Ll(e, t.child, a, l);
  }
  function bm(t, e, a, l, s) {
    a = a.render;
    var u = e.ref;
    if ('ref' in l) {
      var m = {};
      for (var y in l) y !== 'ref' && (m[y] = l[y]);
    } else m = l;
    return (
      Wa(e),
      (l = Nu(t, e, a, m, u, s)),
      (y = _u()),
      t !== null && !Ne
        ? (Bu(t, e, s), Jn(t, e, s))
        : (kt && y && mu(e), (e.flags |= 1), Ue(t, e, l, s), e.child)
    );
  }
  function Sm(t, e, a, l, s) {
    if (t === null) {
      var u = a.type;
      return typeof u == 'function' && !fu(u) && u.defaultProps === void 0 && a.compare === null
        ? ((e.tag = 15), (e.type = u), xm(t, e, u, l, s))
        : ((t = Io(a.type, null, l, e, e.mode, s)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((u = t.child), !nc(t, s))) {
      var m = u.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Tr), a(m, l) && t.ref === e.ref))
        return Jn(t, e, s);
    }
    return ((e.flags |= 1), (t = Xn(u, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function xm(t, e, a, l, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Tr(u, l) && t.ref === e.ref)
        if (((Ne = !1), (e.pendingProps = l = u), nc(t, s))) (t.flags & 131072) !== 0 && (Ne = !0);
        else return ((e.lanes = t.lanes), Jn(t, e, s));
    }
    return Zu(t, e, a, l, s);
  }
  function Cm(t, e, a) {
    var l = e.pendingProps,
      s = l.children,
      u = t !== null ? t.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((e.flags & 128) !== 0) {
        if (((l = u !== null ? u.baseLanes | a : a), t !== null)) {
          for (s = e.child = t.child, u = 0; s !== null; )
            ((u = u | s.lanes | s.childLanes), (s = s.sibling));
          e.childLanes = u & ~l;
        } else ((e.childLanes = 0), (e.child = null));
        return Tm(t, e, l, a);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ei(e, u !== null ? u.cachePool : null),
          u !== null ? xp(e, u) : Ou(),
          um(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Tm(t, e, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (ei(e, u.cachePool), xp(e, u), xa(), (e.memoizedState = null))
        : (t !== null && ei(e, null), Ou(), xa());
    return (Ue(t, e, s, a), e.child);
  }
  function Tm(t, e, a, l) {
    var s = Cu();
    return (
      (s = s === null ? null : { parent: Oe._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: a, cachePool: s }),
      t !== null && ei(e, null),
      Ou(),
      um(e),
      t !== null && Or(t, e, l, !0),
      null
    );
  }
  function vi(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != 'function' && typeof a != 'object') throw Error(i(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Zu(t, e, a, l, s) {
    return (
      Wa(e),
      (a = Nu(t, e, a, l, void 0, s)),
      (l = _u()),
      t !== null && !Ne
        ? (Bu(t, e, s), Jn(t, e, s))
        : (kt && l && mu(e), (e.flags |= 1), Ue(t, e, a, s), e.child)
    );
  }
  function Em(t, e, a, l, s, u) {
    return (
      Wa(e),
      (e.updateQueue = null),
      (a = Tp(e, l, a, s)),
      Cp(t),
      (l = _u()),
      t !== null && !Ne
        ? (Bu(t, e, u), Jn(t, e, u))
        : (kt && l && mu(e), (e.flags |= 1), Ue(t, e, a, u), e.child)
    );
  }
  function Rm(t, e, a, l, s) {
    if ((Wa(e), e.stateNode === null)) {
      var u = Ol,
        m = a.contextType;
      (typeof m == 'object' && m !== null && (u = $e(m)),
        (u = new a(l, u)),
        (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ku),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = l),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Eu(e),
        (m = a.contextType),
        (u.context = typeof m == 'object' && m !== null ? $e(m) : Ol),
        (u.state = e.memoizedState),
        (m = a.getDerivedStateFromProps),
        typeof m == 'function' && (Xu(e, a, m, l), (u.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((m = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          m !== u.state && Ku.enqueueReplaceState(u, u.state, null),
          Ur(e, l, u, s),
          Dr(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      u = e.stateNode;
      var y = e.memoizedProps,
        R = el(a, y);
      u.props = R;
      var L = u.context,
        I = a.contextType;
      ((m = Ol), typeof I == 'object' && I !== null && (m = $e(I)));
      var tt = a.getDerivedStateFromProps;
      ((I = typeof tt == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (y = e.pendingProps !== y),
        I ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((y || L !== m) && fm(e, u, l, m)),
        (ga = !1));
      var $ = e.memoizedState;
      ((u.state = $),
        Ur(e, l, u, s),
        Dr(),
        (L = e.memoizedState),
        y || $ !== L || ga
          ? (typeof tt == 'function' && (Xu(e, a, tt, l), (L = e.memoizedState)),
            (R = ga || cm(e, a, R, l, $, L, m))
              ? (I ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = L)),
            (u.props = l),
            (u.state = L),
            (u.context = m),
            (l = R))
          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308), (l = !1)));
    } else {
      ((u = e.stateNode),
        Ru(t, e),
        (m = e.memoizedProps),
        (I = el(a, m)),
        (u.props = I),
        (tt = e.pendingProps),
        ($ = u.context),
        (L = a.contextType),
        (R = Ol),
        typeof L == 'object' && L !== null && (R = $e(L)),
        (y = a.getDerivedStateFromProps),
        (L = typeof y == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((m !== tt || $ !== R) && fm(e, u, l, R)),
        (ga = !1),
        ($ = e.memoizedState),
        (u.state = $),
        Ur(e, l, u, s),
        Dr());
      var q = e.memoizedState;
      m !== tt || $ !== q || ga || (t !== null && t.dependencies !== null && Jo(t.dependencies))
        ? (typeof y == 'function' && (Xu(e, a, y, l), (q = e.memoizedState)),
          (I =
            ga ||
            cm(e, a, I, l, $, q, R) ||
            (t !== null && t.dependencies !== null && Jo(t.dependencies)))
            ? (L ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, q, R),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, q, R)),
              typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (m === t.memoizedProps && $ === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (m === t.memoizedProps && $ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = q)),
          (u.props = l),
          (u.state = q),
          (u.context = R),
          (l = I))
        : (typeof u.componentDidUpdate != 'function' ||
            (m === t.memoizedProps && $ === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (m === t.memoizedProps && $ === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      vi(t, e),
      (l = (e.flags & 128) !== 0),
      u || l
        ? ((u = e.stateNode),
          (a = l && typeof a.getDerivedStateFromError != 'function' ? null : u.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Ll(e, t.child, null, s)), (e.child = Ll(e, null, a, s)))
            : Ue(t, e, a, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Jn(t, e, s)),
      t
    );
  }
  function Am(t, e, a, l) {
    return (Ar(), (e.flags |= 256), Ue(t, e, a, l), e.child);
  }
  var Iu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Fu(t) {
    return { baseLanes: t, cachePool: pp() };
  }
  function Wu(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= vn), t);
  }
  function Mm(t, e, a) {
    var l = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      m;
    if (
      ((m = u) || (m = t !== null && t.memoizedState === null ? !1 : (ze.current & 2) !== 0),
      m && ((s = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (kt) {
        if ((s ? Sa(e) : xa(), kt)) {
          var y = ye,
            R;
          if ((R = y)) {
            t: {
              for (R = y, y = wn; R.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (((R = An(R.nextSibling)), R === null)) {
                  y = null;
                  break t;
                }
              }
              y = R;
            }
            y !== null
              ? ((e.memoizedState = {
                  dehydrated: y,
                  treeContext: Ka !== null ? { id: Kn, overflow: Qn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (R = en(18, null, null, 0)),
                (R.stateNode = y),
                (R.return = e),
                (e.child = R),
                (Pe = e),
                (ye = null),
                (R = !0))
              : (R = !1);
          }
          R || Ia(e);
        }
        if (((y = e.memoizedState), y !== null && ((y = y.dehydrated), y !== null)))
          return (Uc(y) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        Wn(e);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        s
          ? (xa(),
            (s = e.mode),
            (y = bi({ mode: 'hidden', children: y }, s)),
            (l = Xa(l, s, a, null)),
            (y.return = e),
            (l.return = e),
            (y.sibling = l),
            (e.child = y),
            (s = e.child),
            (s.memoizedState = Fu(a)),
            (s.childLanes = Wu(t, m, a)),
            (e.memoizedState = Iu),
            l)
          : (Sa(e), Ju(e, y))
      );
    }
    if (((R = t.memoizedState), R !== null && ((y = R.dehydrated), y !== null))) {
      if (u)
        e.flags & 256
          ? (Sa(e), (e.flags &= -257), (e = tc(t, e, a)))
          : e.memoizedState !== null
            ? (xa(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (xa(),
              (s = l.fallback),
              (y = e.mode),
              (l = bi({ mode: 'visible', children: l.children }, y)),
              (s = Xa(s, y, a, null)),
              (s.flags |= 2),
              (l.return = e),
              (s.return = e),
              (l.sibling = s),
              (e.child = l),
              Ll(e, t.child, null, a),
              (l = e.child),
              (l.memoizedState = Fu(a)),
              (l.childLanes = Wu(t, m, a)),
              (e.memoizedState = Iu),
              (e = s));
      else if ((Sa(e), Uc(y))) {
        if (((m = y.nextSibling && y.nextSibling.dataset), m)) var L = m.dgst;
        ((m = L),
          (l = Error(i(419))),
          (l.stack = ''),
          (l.digest = m),
          Mr({ value: l, source: null, stack: null }),
          (e = tc(t, e, a)));
      } else if ((Ne || Or(t, e, a, !1), (m = (a & t.childLanes) !== 0), Ne || m)) {
        if (
          ((m = re),
          m !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : ks(l)),
            (l = (l & (m.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== R.retryLane))
        )
          throw ((R.retryLane = l), Ml(t, l), on(m, t, l), vm);
        (y.data === '$?' || vc(), (e = tc(t, e, a)));
      } else
        y.data === '$?'
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = R.treeContext),
            (ye = An(y.nextSibling)),
            (Pe = e),
            (kt = !0),
            (Za = null),
            (wn = !1),
            t !== null &&
              ((hn[gn++] = Kn),
              (hn[gn++] = Qn),
              (hn[gn++] = Ka),
              (Kn = t.id),
              (Qn = t.overflow),
              (Ka = e)),
            (e = Ju(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (xa(),
        (s = l.fallback),
        (y = e.mode),
        (R = t.child),
        (L = R.sibling),
        (l = Xn(R, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = R.subtreeFlags & 65011712),
        L !== null ? (s = Xn(L, s)) : ((s = Xa(s, y, a, null)), (s.flags |= 2)),
        (s.return = e),
        (l.return = e),
        (l.sibling = s),
        (e.child = l),
        (l = s),
        (s = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Fu(a))
          : ((R = y.cachePool),
            R !== null
              ? ((L = Oe._currentValue), (R = R.parent !== L ? { parent: L, pool: L } : R))
              : (R = pp()),
            (y = { baseLanes: y.baseLanes | a, cachePool: R })),
        (s.memoizedState = y),
        (s.childLanes = Wu(t, m, a)),
        (e.memoizedState = Iu),
        l)
      : (Sa(e),
        (a = t.child),
        (t = a.sibling),
        (a = Xn(a, { mode: 'visible', children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((m = e.deletions), m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function Ju(t, e) {
    return ((e = bi({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function bi(t, e) {
    return (
      (t = en(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function tc(t, e, a) {
    return (
      Ll(e, t.child, null, a),
      (t = Ju(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Om(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), vu(t.return, e, a));
  }
  function ec(t, e, a, l, s) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: s,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = l),
        (u.tail = a),
        (u.tailMode = s));
  }
  function zm(t, e, a) {
    var l = e.pendingProps,
      s = l.revealOrder,
      u = l.tail;
    if ((Ue(t, e, l.children, a), (l = ze.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Om(t, a, e);
          else if (t.tag === 19) Om(t, a, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      l &= 1;
    }
    switch ((lt(ze, l), s)) {
      case 'forwards':
        for (a = e.child, s = null; a !== null; )
          ((t = a.alternate), t !== null && hi(t) === null && (s = a), (a = a.sibling));
        ((a = s),
          a === null ? ((s = e.child), (e.child = null)) : ((s = a.sibling), (a.sibling = null)),
          ec(e, !1, s, a, u));
        break;
      case 'backwards':
        for (a = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && hi(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = a), (a = s), (s = t));
        }
        ec(e, !0, a, null, u);
        break;
      case 'together':
        ec(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Jn(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (Aa |= e.lanes), (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Or(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (t = e.child, a = Xn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        ((t = t.sibling), (a = a.sibling = Xn(t, t.pendingProps)), (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function nc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Jo(t)));
  }
  function Hv(t, e, a) {
    switch (e.tag) {
      case 3:
        (xt(e, e.stateNode.containerInfo), ha(e, Oe, t.memoizedState.cache), Ar());
        break;
      case 27:
      case 5:
        bt(e);
        break;
      case 4:
        xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ha(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Sa(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? Mm(t, e, a)
              : (Sa(e), (t = Jn(t, e, a)), t !== null ? t.sibling : null);
        Sa(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (Or(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          s)
        ) {
          if (l) return zm(t, e, a);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          lt(ze, ze.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Cm(t, e, a));
      case 24:
        ha(e, Oe, t.memoizedState.cache);
    }
    return Jn(t, e, a);
  }
  function wm(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ne = !0;
      else {
        if (!nc(t, a) && (e.flags & 128) === 0) return ((Ne = !1), Hv(t, e, a));
        Ne = (t.flags & 131072) !== 0;
      }
    else ((Ne = !1), kt && (e.flags & 1048576) !== 0 && op(e, Wo, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            s = l._init;
          if (((l = s(l._payload)), (e.type = l), typeof l == 'function'))
            fu(l)
              ? ((t = el(l, t)), (e.tag = 1), (e = Rm(null, e, l, t, a)))
              : ((e.tag = 0), (e = Zu(null, e, l, t, a)));
          else {
            if (l != null) {
              if (((s = l.$$typeof), s === w)) {
                ((e.tag = 11), (e = bm(null, e, l, t, a)));
                break t;
              } else if (s === P) {
                ((e.tag = 14), (e = Sm(null, e, l, t, a)));
                break t;
              }
            }
            throw ((e = Y(l) || l), Error(i(306, e, '')));
          }
        }
        return e;
      case 0:
        return Zu(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((l = e.type), (s = el(l, e.pendingProps)), Rm(t, e, l, s, a));
      case 3:
        t: {
          if ((xt(e, e.stateNode.containerInfo), t === null)) throw Error(i(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          ((s = u.element), Ru(t, e), Ur(e, l, null, a));
          var m = e.memoizedState;
          if (
            ((l = m.cache),
            ha(e, Oe, l),
            l !== u.cache && bu(e, [Oe], a, !0),
            Dr(),
            (l = m.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Am(t, e, l, a);
              break t;
            } else if (l !== s) {
              ((s = pn(Error(i(424)), e)), Mr(s), (e = Am(t, e, l, a)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (
                ye = An(t.firstChild),
                  Pe = e,
                  kt = !0,
                  Za = null,
                  wn = !0,
                  a = sm(e, null, l, a),
                  e.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Ar(), l === s)) {
              e = Jn(t, e, a);
              break t;
            }
            Ue(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          vi(t, e),
          t === null
            ? (a = Dh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : kt ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = Bi(ut.current).createElement(a)),
                (l[He] = e),
                (l[Xe] = t),
                je(l, a, t),
                we(l),
                (e.stateNode = l))
            : (e.memoizedState = Dh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          bt(e),
          t === null &&
            kt &&
            ((l = e.stateNode = Nh(e.type, e.pendingProps, ut.current)),
            (Pe = e),
            (wn = !0),
            (s = ye),
            wa(e.type) ? ((kc = s), (ye = An(l.firstChild))) : (ye = s)),
          Ue(t, e, e.pendingProps.children, a),
          vi(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            kt &&
            ((s = l = ye) &&
              ((l = pb(l, e.type, e.pendingProps, wn)),
              l !== null
                ? ((e.stateNode = l), (Pe = e), (ye = An(l.firstChild)), (wn = !1), (s = !0))
                : (s = !1)),
            s || Ia(e)),
          bt(e),
          (s = e.type),
          (u = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (l = u.children),
          _c(s, u) ? (l = null) : m !== null && _c(s, m) && (e.flags |= 32),
          e.memoizedState !== null && ((s = Nu(t, e, Nv, null, null, a)), (ao._currentValue = s)),
          vi(t, e),
          Ue(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            kt &&
            ((t = a = ye) &&
              ((a = mb(a, e.pendingProps, wn)),
              a !== null ? ((e.stateNode = a), (Pe = e), (ye = null), (t = !0)) : (t = !1)),
            t || Ia(e)),
          null
        );
      case 13:
        return Mm(t, e, a);
      case 4:
        return (
          xt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Ll(e, null, l, a)) : Ue(t, e, l, a),
          e.child
        );
      case 11:
        return bm(t, e, e.type, e.pendingProps, a);
      case 7:
        return (Ue(t, e, e.pendingProps, a), e.child);
      case 8:
        return (Ue(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return (Ue(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return ((l = e.pendingProps), ha(e, e.type, l.value), Ue(t, e, l.children, a), e.child);
      case 9:
        return (
          (s = e.type._context),
          (l = e.pendingProps.children),
          Wa(e),
          (s = $e(s)),
          (l = l(s)),
          (e.flags |= 1),
          Ue(t, e, l, a),
          e.child
        );
      case 14:
        return Sm(t, e, e.type, e.pendingProps, a);
      case 15:
        return xm(t, e, e.type, e.pendingProps, a);
      case 19:
        return zm(t, e, a);
      case 31:
        return (
          (l = e.pendingProps),
          (a = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((a = bi(l, a)), (a.ref = e.ref), (e.child = a), (a.return = e), (e = a))
            : ((a = Xn(t.child, l)), (a.ref = e.ref), (e.child = a), (a.return = e), (e = a)),
          e
        );
      case 22:
        return Cm(t, e, a);
      case 24:
        return (
          Wa(e),
          (l = $e(Oe)),
          t === null
            ? ((s = Cu()),
              s === null &&
                ((s = re),
                (u = Su()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= a),
                (s = u)),
              (e.memoizedState = { parent: l, cache: s }),
              Eu(e),
              ha(e, Oe, s))
            : ((t.lanes & a) !== 0 && (Ru(t, e), Ur(e, null, null, a), Dr()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== l
                ? ((s = { parent: l, cache: l }),
                  (e.memoizedState = s),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
                  ha(e, Oe, l))
                : ((l = u.cache), ha(e, Oe, l), l !== s.cache && bu(e, [Oe], a, !0))),
          Ue(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function ta(t) {
    t.flags |= 4;
  }
  function Nm(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Hh(e))) {
      if (
        ((e = yn.current),
        e !== null &&
          ((Bt & 4194048) === Bt
            ? Nn !== null
            : ((Bt & 62914560) !== Bt && (Bt & 536870912) === 0) || e !== Nn))
      )
        throw ((_r = Tu), mp);
      t.flags |= 8192;
    }
  }
  function Si(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? ud() : 536870912), (t.lanes |= e), (Gl |= e)));
  }
  function Gr(t, e) {
    if (!kt)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var a = null; e !== null; ) (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case 'collapsed':
          a = t.tail;
          for (var l = null; a !== null; ) (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function me(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      l = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((a |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 65011712),
          (l |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((a |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = a), e);
  }
  function $v(t, e, a) {
    var l = e.pendingProps;
    switch ((hu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (me(e), null);
      case 1:
        return (me(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          In(Oe),
          Nt(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Rr(e)
              ? ta(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), up())),
          me(e),
          null
        );
      case 26:
        return (
          (a = e.memoizedState),
          t === null
            ? (ta(e), a !== null ? (me(e), Nm(e, a)) : (me(e), (e.flags &= -16777217)))
            : a
              ? a !== t.memoizedState
                ? (ta(e), me(e), Nm(e, a))
                : (me(e), (e.flags &= -16777217))
              : (t.memoizedProps !== l && ta(e), me(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (Mt(e), (a = ut.current));
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && ta(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(i(166));
            return (me(e), null);
          }
          ((t = it.current), Rr(e) ? ip(e) : ((t = Nh(s, l, a)), (e.stateNode = t), ta(e)));
        }
        return (me(e), null);
      case 5:
        if ((Mt(e), (a = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && ta(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(i(166));
            return (me(e), null);
          }
          if (((t = it.current), Rr(e))) ip(e);
          else {
            switch (((s = Bi(ut.current)), t)) {
              case 1:
                t = s.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                t = s.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    t = s.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    t = s.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    ((t = s.createElement('div')),
                      (t.innerHTML = '<script><\/script>'),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case 'select':
                    ((t =
                      typeof l.is == 'string'
                        ? s.createElement('select', { is: l.is })
                        : s.createElement('select')),
                      l.multiple ? (t.multiple = !0) : l.size && (t.size = l.size));
                    break;
                  default:
                    t =
                      typeof l.is == 'string'
                        ? s.createElement(a, { is: l.is })
                        : s.createElement(a);
                }
            }
            ((t[He] = e), (t[Xe] = l));
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                ((s.child.return = s), (s = s.child));
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              ((s.sibling.return = s.return), (s = s.sibling));
            }
            e.stateNode = t;
            t: switch ((je(t, a, l), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!l.autoFocus;
                break t;
              case 'img':
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && ta(e);
          }
        }
        return (me(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && ta(e);
        else {
          if (typeof l != 'string' && e.stateNode === null) throw Error(i(166));
          if (((t = ut.current), Rr(e))) {
            if (((t = e.stateNode), (a = e.memoizedProps), (l = null), (s = Pe), s !== null))
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            ((t[He] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Eh(t.nodeValue, a)
              )),
              t || Ia(e));
          } else ((t = Bi(t).createTextNode(l)), (t[He] = e), (e.stateNode = t));
        }
        return (me(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Rr(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(i(318));
              if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                throw Error(i(317));
              s[He] = e;
            } else (Ar(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (me(e), (s = !1));
          } else
            ((s = up()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Wn(e), e) : (Wn(e), null);
        }
        if ((Wn(e), (e.flags & 128) !== 0)) return ((e.lanes = a), e);
        if (((a = l !== null), (t = t !== null && t.memoizedState !== null), a)) {
          ((l = e.child),
            (s = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (s = l.alternate.memoizedState.cachePool.pool));
          var u = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
            u !== s && (l.flags |= 2048));
        }
        return (a !== t && a && (e.child.flags |= 8192), Si(e, e.updateQueue), me(e), null);
      case 4:
        return (Nt(), t === null && Mc(e.stateNode.containerInfo), me(e), null);
      case 10:
        return (In(e.type), me(e), null);
      case 19:
        if ((rt(ze), (s = e.memoizedState), s === null)) return (me(e), null);
        if (((l = (e.flags & 128) !== 0), (u = s.rendering), u === null))
          if (l) Gr(s, !1);
          else {
            if (ve !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = hi(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Gr(s, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Si(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;

                  )
                    (rp(a, t), (a = a.sibling));
                  return (lt(ze, (ze.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Gt() > Ti &&
              ((e.flags |= 128), (l = !0), Gr(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = hi(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Si(e, t),
                Gr(s, !0),
                s.tail === null && s.tailMode === 'hidden' && !u.alternate && !kt)
              )
                return (me(e), null);
            } else
              2 * Gt() - s.renderingStartTime > Ti &&
                a !== 536870912 &&
                ((e.flags |= 128), (l = !0), Gr(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = s.last), t !== null ? (t.sibling = u) : (e.child = u), (s.last = u));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Gt()),
            (e.sibling = null),
            (t = ze.current),
            lt(ze, l ? (t & 1) | 2 : t & 1),
            e)
          : (me(e), null);
      case 22:
      case 23:
        return (
          Wn(e),
          zu(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (me(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : me(e),
          (a = e.updateQueue),
          a !== null && Si(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== a && (e.flags |= 2048),
          t !== null && rt(Ja),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          In(Oe),
          me(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function qv(t, e) {
    switch ((hu(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          In(Oe),
          Nt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (Mt(e), null);
      case 13:
        if ((Wn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(i(340));
          Ar();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (rt(ze), null);
      case 4:
        return (Nt(), null);
      case 10:
        return (In(e.type), null);
      case 22:
      case 23:
        return (
          Wn(e),
          zu(),
          t !== null && rt(Ja),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (In(Oe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(t, e) {
    switch ((hu(e), e.tag)) {
      case 3:
        (In(Oe), Nt());
        break;
      case 26:
      case 27:
      case 5:
        Mt(e);
        break;
      case 4:
        Nt();
        break;
      case 13:
        Wn(e);
        break;
      case 19:
        rt(ze);
        break;
      case 10:
        In(e.type);
        break;
      case 22:
      case 23:
        (Wn(e), zu(), t !== null && rt(Ja));
        break;
      case 24:
        In(Oe);
    }
  }
  function Yr(t, e) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var u = a.create,
              m = a.inst;
            ((l = u()), (m.destroy = l));
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (y) {
      le(e, e.return, y);
    }
  }
  function Ca(t, e, a) {
    try {
      var l = e.updateQueue,
        s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var m = l.inst,
              y = m.destroy;
            if (y !== void 0) {
              ((m.destroy = void 0), (s = e));
              var R = a,
                L = y;
              try {
                L();
              } catch (I) {
                le(s, R, I);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (I) {
      le(e, e.return, I);
    }
  }
  function Bm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Sp(e, a);
      } catch (l) {
        le(t, t.return, l);
      }
    }
  }
  function Dm(t, e, a) {
    ((a.props = el(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      le(t, e, l);
    }
  }
  function Vr(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == 'function' ? (t.refCleanup = a(l)) : (a.current = l);
      }
    } catch (s) {
      le(t, e, s);
    }
  }
  function _n(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (s) {
          le(t, e, s);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof a == 'function')
        try {
          a(null);
        } catch (s) {
          le(t, e, s);
        }
      else a.current = null;
  }
  function Um(t) {
    var e = t.type,
      a = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          a.autoFocus && l.focus();
          break t;
        case 'img':
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (s) {
      le(t, t.return, s);
    }
  }
  function ac(t, e, a) {
    try {
      var l = t.stateNode;
      (sb(l, t.type, a, e), (l[Xe] = e));
    } catch (s) {
      le(t, t.return, s);
    }
  }
  function km(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && wa(t.type)) || t.tag === 4
    );
  }
  function lc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || km(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if ((t.tag === 27 && wa(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function rc(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === 'HTML'
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, e)
          : ((e = a.nodeType === 9 ? a.body : a.nodeName === 'HTML' ? a.ownerDocument.body : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = _i)));
    else if (
      l !== 4 &&
      (l === 27 && wa(t.type) && ((a = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (rc(t, e, a), t = t.sibling; t !== null; ) (rc(t, e, a), (t = t.sibling));
  }
  function xi(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (l !== 4 && (l === 27 && wa(t.type) && (a = t.stateNode), (t = t.child), t !== null))
      for (xi(t, e, a), t = t.sibling; t !== null; ) (xi(t, e, a), (t = t.sibling));
  }
  function jm(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, s = e.attributes; s.length; ) e.removeAttributeNode(s[0]);
      (je(e, l, a), (e[He] = t), (e[Xe] = a));
    } catch (u) {
      le(t, t.return, u);
    }
  }
  var ea = !1,
    Te = !1,
    oc = !1,
    Lm = typeof WeakSet == 'function' ? WeakSet : Set,
    _e = null;
  function Gv(t, e) {
    if (((t = t.containerInfo), (wc = Hi), (t = Zd(t)), lu(t))) {
      if ('selectionStart' in t) var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var s = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch {
              a = null;
              break t;
            }
            var m = 0,
              y = -1,
              R = -1,
              L = 0,
              I = 0,
              tt = t,
              $ = null;
            e: for (;;) {
              for (
                var q;
                tt !== a || (s !== 0 && tt.nodeType !== 3) || (y = m + s),
                  tt !== u || (l !== 0 && tt.nodeType !== 3) || (R = m + l),
                  tt.nodeType === 3 && (m += tt.nodeValue.length),
                  (q = tt.firstChild) !== null;

              )
                (($ = tt), (tt = q));
              for (;;) {
                if (tt === t) break e;
                if (
                  ($ === a && ++L === s && (y = m),
                  $ === u && ++I === l && (R = m),
                  (q = tt.nextSibling) !== null)
                )
                  break;
                ((tt = $), ($ = tt.parentNode));
              }
              tt = q;
            }
            a = y === -1 || R === -1 ? null : { start: y, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Nc = { focusedElem: t, selectionRange: a }, Hi = !1, _e = e; _e !== null; )
      if (((e = _e), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null))
        ((t.return = e), (_e = t));
      else
        for (; _e !== null; ) {
          switch (((e = _e), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (a = e),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = a.stateNode));
                try {
                  var vt = el(a.type, s, a.elementType === a.type);
                  ((t = l.getSnapshotBeforeUpdate(vt, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (gt) {
                  le(a, a.return, gt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)) Dc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Dc(t);
                      break;
                    default:
                      t.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (_e = t));
            break;
          }
          _e = e.return;
        }
  }
  function Hm(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Ta(t, a), l & 4 && Yr(5, a));
        break;
      case 1:
        if ((Ta(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              le(a, a.return, m);
            }
          else {
            var s = el(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              le(a, a.return, m);
            }
          }
        (l & 64 && Bm(a), l & 512 && Vr(a, a.return));
        break;
      case 3:
        if ((Ta(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Sp(t, e);
          } catch (m) {
            le(a, a.return, m);
          }
        }
        break;
      case 27:
        e === null && l & 4 && jm(a);
      case 26:
      case 5:
        (Ta(t, a), e === null && l & 4 && Um(a), l & 512 && Vr(a, a.return));
        break;
      case 12:
        Ta(t, a);
        break;
      case 13:
        (Ta(t, a),
          l & 4 && Gm(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((a = Fv.bind(null, a)), hb(t, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || ea), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Te), (s = ea));
          var u = Te;
          ((ea = l),
            (Te = e) && !u ? Ea(t, a, (a.subtreeFlags & 8772) !== 0) : Ta(t, a),
            (ea = s),
            (Te = u));
        }
        break;
      case 30:
        break;
      default:
        Ta(t, a);
    }
  }
  function $m(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), $m(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Hs(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var ce = null,
    Ze = !1;
  function na(t, e, a) {
    for (a = a.child; a !== null; ) (qm(t, e, a), (a = a.sibling));
  }
  function qm(t, e, a) {
    if (Tt && typeof Tt.onCommitFiberUnmount == 'function')
      try {
        Tt.onCommitFiberUnmount(ue, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Te || _n(a, e),
          na(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Te || _n(a, e);
        var l = ce,
          s = Ze;
        (wa(a.type) && ((ce = a.stateNode), (Ze = !1)),
          na(t, e, a),
          Jr(a.stateNode),
          (ce = l),
          (Ze = s));
        break;
      case 5:
        Te || _n(a, e);
      case 6:
        if (((l = ce), (s = Ze), (ce = null), na(t, e, a), (ce = l), (Ze = s), ce !== null))
          if (Ze)
            try {
              (ce.nodeType === 9
                ? ce.body
                : ce.nodeName === 'HTML'
                  ? ce.ownerDocument.body
                  : ce
              ).removeChild(a.stateNode);
            } catch (u) {
              le(a, e, u);
            }
          else
            try {
              ce.removeChild(a.stateNode);
            } catch (u) {
              le(a, e, u);
            }
        break;
      case 18:
        ce !== null &&
          (Ze
            ? ((t = ce),
              zh(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                a.stateNode,
              ),
              io(t))
            : zh(ce, a.stateNode));
        break;
      case 4:
        ((l = ce),
          (s = Ze),
          (ce = a.stateNode.containerInfo),
          (Ze = !0),
          na(t, e, a),
          (ce = l),
          (Ze = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Te || Ca(2, a, e), Te || Ca(4, a, e), na(t, e, a));
        break;
      case 1:
        (Te ||
          (_n(a, e), (l = a.stateNode), typeof l.componentWillUnmount == 'function' && Dm(a, e, l)),
          na(t, e, a));
        break;
      case 21:
        na(t, e, a);
        break;
      case 22:
        ((Te = (l = Te) || a.memoizedState !== null), na(t, e, a), (Te = l));
        break;
      default:
        na(t, e, a);
    }
  }
  function Gm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        io(t);
      } catch (a) {
        le(e, e.return, a);
      }
  }
  function Yv(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Lm()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Lm()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function ic(t, e) {
    var a = Yv(t);
    e.forEach(function (l) {
      var s = Wv.bind(null, t, l);
      a.has(l) || (a.add(l), l.then(s, s));
    });
  }
  function nn(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var s = a[l],
          u = t,
          m = e,
          y = m;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (wa(y.type)) {
                ((ce = y.stateNode), (Ze = !1));
                break t;
              }
              break;
            case 5:
              ((ce = y.stateNode), (Ze = !1));
              break t;
            case 3:
            case 4:
              ((ce = y.stateNode.containerInfo), (Ze = !0));
              break t;
          }
          y = y.return;
        }
        if (ce === null) throw Error(i(160));
        (qm(u, m, s),
          (ce = null),
          (Ze = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) (Ym(e, t), (e = e.sibling));
  }
  var Rn = null;
  function Ym(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (nn(e, t), an(t), l & 4 && (Ca(3, t, t.return), Yr(3, t), Ca(5, t, t.return)));
        break;
      case 1:
        (nn(e, t),
          an(t),
          l & 512 && (Te || a === null || _n(a, a.return)),
          l & 64 &&
            ea &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var s = Rn;
        if ((nn(e, t), an(t), l & 512 && (Te || a === null || _n(a, a.return)), l & 4)) {
          var u = a !== null ? a.memoizedState : null;
          if (((l = t.memoizedState), a === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type), (a = t.memoizedProps), (s = s.ownerDocument || s));
                  e: switch (l) {
                    case 'title':
                      ((u = s.getElementsByTagName('title')[0]),
                        (!u ||
                          u[mr] ||
                          u[He] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = s.createElement(l)),
                          s.head.insertBefore(u, s.querySelector('head > title'))),
                        je(u, l, a),
                        (u[He] = t),
                        we(u),
                        (l = u));
                      break t;
                    case 'link':
                      var m = jh('link', 'href', s).get(l + (a.href || ''));
                      if (m) {
                        for (var y = 0; y < m.length; y++)
                          if (
                            ((u = m[y]),
                            u.getAttribute('href') ===
                              (a.href == null || a.href === '' ? null : a.href) &&
                              u.getAttribute('rel') === (a.rel == null ? null : a.rel) &&
                              u.getAttribute('title') === (a.title == null ? null : a.title) &&
                              u.getAttribute('crossorigin') ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            m.splice(y, 1);
                            break e;
                          }
                      }
                      ((u = s.createElement(l)), je(u, l, a), s.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((m = jh('meta', 'content', s).get(l + (a.content || '')))) {
                        for (y = 0; y < m.length; y++)
                          if (
                            ((u = m[y]),
                            u.getAttribute('content') ===
                              (a.content == null ? null : '' + a.content) &&
                              u.getAttribute('name') === (a.name == null ? null : a.name) &&
                              u.getAttribute('property') ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute('http-equiv') ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute('charset') === (a.charSet == null ? null : a.charSet))
                          ) {
                            m.splice(y, 1);
                            break e;
                          }
                      }
                      ((u = s.createElement(l)), je(u, l, a), s.head.appendChild(u));
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  ((u[He] = t), we(u), (l = u));
                }
                t.stateNode = l;
              } else Lh(s, t.type, t.stateNode);
            else t.stateNode = kh(s, l, t.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                l === null ? Lh(s, t.type, t.stateNode) : kh(s, l, t.memoizedProps))
              : l === null && t.stateNode !== null && ac(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (nn(e, t),
          an(t),
          l & 512 && (Te || a === null || _n(a, a.return)),
          a !== null && l & 4 && ac(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((nn(e, t), an(t), l & 512 && (Te || a === null || _n(a, a.return)), t.flags & 32)) {
          s = t.stateNode;
          try {
            Sl(s, '');
          } catch (q) {
            le(t, t.return, q);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), ac(t, s, a !== null ? a.memoizedProps : s)),
          l & 1024 && (oc = !0));
        break;
      case 6:
        if ((nn(e, t), an(t), l & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          ((l = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = l;
          } catch (q) {
            le(t, t.return, q);
          }
        }
        break;
      case 3:
        if (
          ((ki = null),
          (s = Rn),
          (Rn = Di(e.containerInfo)),
          nn(e, t),
          (Rn = s),
          an(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            io(e.containerInfo);
          } catch (q) {
            le(t, t.return, q);
          }
        oc && ((oc = !1), Vm(t));
        break;
      case 4:
        ((l = Rn), (Rn = Di(t.stateNode.containerInfo)), nn(e, t), an(t), (Rn = l));
        break;
      case 12:
        (nn(e, t), an(t));
        break;
      case 13:
        (nn(e, t),
          an(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (pc = Gt()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), ic(t, l))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null,
          L = ea,
          I = Te;
        if (((ea = L || s), (Te = I || R), nn(e, t), (Te = I), (ea = L), an(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (a === null || R || ea || Te || nl(t)),
              a = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                R = a = e;
                try {
                  if (((u = R.stateNode), s))
                    ((m = u.style),
                      typeof m.setProperty == 'function'
                        ? m.setProperty('display', 'none', 'important')
                        : (m.display = 'none'));
                  else {
                    y = R.stateNode;
                    var tt = R.memoizedProps.style,
                      $ = tt != null && tt.hasOwnProperty('display') ? tt.display : null;
                    y.style.display = $ == null || typeof $ == 'boolean' ? '' : ('' + $).trim();
                  }
                } catch (q) {
                  le(R, R.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                R = e;
                try {
                  R.stateNode.nodeValue = s ? '' : R.memoizedProps;
                } catch (q) {
                  le(R, R.return, q);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (a === e && (a = null), (e = e.return));
            }
            (a === e && (a = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null && ((a = l.retryQueue), a !== null && ((l.retryQueue = null), ic(t, a))));
        break;
      case 19:
        (nn(e, t),
          an(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), ic(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (nn(e, t), an(t));
    }
  }
  function an(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (km(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode,
              u = lc(t);
            xi(t, u, s);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (Sl(m, ''), (a.flags &= -33));
            var y = lc(t);
            xi(t, y, m);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo,
              L = lc(t);
            rc(t, L, R);
            break;
          default:
            throw Error(i(161));
        }
      } catch (I) {
        le(t, t.return, I);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Vm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Vm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function Ta(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Hm(t, e.alternate, e), (e = e.sibling));
  }
  function nl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ca(4, e, e.return), nl(e));
          break;
        case 1:
          _n(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == 'function' && Dm(e, e.return, a), nl(e));
          break;
        case 27:
          Jr(e.stateNode);
        case 26:
        case 5:
          (_n(e, e.return), nl(e));
          break;
        case 22:
          e.memoizedState === null && nl(e);
          break;
        case 30:
          nl(e);
          break;
        default:
          nl(e);
      }
      t = t.sibling;
    }
  }
  function Ea(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        s = t,
        u = e,
        m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(s, u, a), Yr(4, u));
          break;
        case 1:
          if ((Ea(s, u, a), (l = u), (s = l.stateNode), typeof s.componentDidMount == 'function'))
            try {
              s.componentDidMount();
            } catch (L) {
              le(l, l.return, L);
            }
          if (((l = u), (s = l.updateQueue), s !== null)) {
            var y = l.stateNode;
            try {
              var R = s.shared.hiddenCallbacks;
              if (R !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < R.length; s++) bp(R[s], y);
            } catch (L) {
              le(l, l.return, L);
            }
          }
          (a && m & 64 && Bm(u), Vr(u, u.return));
          break;
        case 27:
          jm(u);
        case 26:
        case 5:
          (Ea(s, u, a), a && l === null && m & 4 && Um(u), Vr(u, u.return));
          break;
        case 12:
          Ea(s, u, a);
          break;
        case 13:
          (Ea(s, u, a), a && m & 4 && Gm(s, u));
          break;
        case 22:
          (u.memoizedState === null && Ea(s, u, a), Vr(u, u.return));
          break;
        case 30:
          break;
        default:
          Ea(s, u, a);
      }
      e = e.sibling;
    }
  }
  function sc(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && zr(a)));
  }
  function uc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && zr(t)));
  }
  function Bn(t, e, a, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Pm(t, e, a, l), (e = e.sibling));
  }
  function Pm(t, e, a, l) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Bn(t, e, a, l), s & 2048 && Yr(9, e));
        break;
      case 1:
        Bn(t, e, a, l);
        break;
      case 3:
        (Bn(t, e, a, l),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && zr(t))));
        break;
      case 12:
        if (s & 2048) {
          (Bn(t, e, a, l), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              m = u.id,
              y = u.onPostCommit;
            typeof y == 'function' &&
              y(m, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (R) {
            le(e, e.return, R);
          }
        } else Bn(t, e, a, l);
        break;
      case 13:
        Bn(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Bn(t, e, a, l)
              : Pr(t, e)
            : u._visibility & 2
              ? Bn(t, e, a, l)
              : ((u._visibility |= 2), Hl(t, e, a, l, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && sc(m, e));
        break;
      case 24:
        (Bn(t, e, a, l), s & 2048 && uc(e.alternate, e));
        break;
      default:
        Bn(t, e, a, l);
    }
  }
  function Hl(t, e, a, l, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        m = e,
        y = a,
        R = l,
        L = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Hl(u, m, y, R, s), Yr(8, m));
          break;
        case 23:
          break;
        case 22:
          var I = m.stateNode;
          (m.memoizedState !== null
            ? I._visibility & 2
              ? Hl(u, m, y, R, s)
              : Pr(u, m)
            : ((I._visibility |= 2), Hl(u, m, y, R, s)),
            s && L & 2048 && sc(m.alternate, m));
          break;
        case 24:
          (Hl(u, m, y, R, s), s && L & 2048 && uc(m.alternate, m));
          break;
        default:
          Hl(u, m, y, R, s);
      }
      e = e.sibling;
    }
  }
  function Pr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          s = l.flags;
        switch (l.tag) {
          case 22:
            (Pr(a, l), s & 2048 && sc(l.alternate, l));
            break;
          case 24:
            (Pr(a, l), s & 2048 && uc(l.alternate, l));
            break;
          default:
            Pr(a, l);
        }
        e = e.sibling;
      }
  }
  var Xr = 8192;
  function $l(t) {
    if (t.subtreeFlags & Xr) for (t = t.child; t !== null; ) (Xm(t), (t = t.sibling));
  }
  function Xm(t) {
    switch (t.tag) {
      case 26:
        ($l(t),
          t.flags & Xr && t.memoizedState !== null && Ob(Rn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        $l(t);
        break;
      case 3:
      case 4:
        var e = Rn;
        ((Rn = Di(t.stateNode.containerInfo)), $l(t), (Rn = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Xr), (Xr = 16777216), $l(t), (Xr = e))
            : $l(t));
        break;
      default:
        $l(t);
    }
  }
  function Km(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Kr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((_e = l), Zm(l, t));
        }
      Km(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Qm(t), (t = t.sibling));
  }
  function Qm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Kr(t), t.flags & 2048 && Ca(9, t, t.return));
        break;
      case 3:
        Kr(t);
        break;
      case 12:
        Kr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ci(t))
          : Kr(t);
        break;
      default:
        Kr(t);
    }
  }
  function Ci(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((_e = l), Zm(l, t));
        }
      Km(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ca(8, e, e.return), Ci(e));
          break;
        case 22:
          ((a = e.stateNode), a._visibility & 2 && ((a._visibility &= -3), Ci(e)));
          break;
        default:
          Ci(e);
      }
      t = t.sibling;
    }
  }
  function Zm(t, e) {
    for (; _e !== null; ) {
      var a = _e;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ca(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          zr(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (_e = l));
      else
        t: for (a = t; _e !== null; ) {
          l = _e;
          var s = l.sibling,
            u = l.return;
          if (($m(l), l === a)) {
            _e = null;
            break t;
          }
          if (s !== null) {
            ((s.return = u), (_e = s));
            break t;
          }
          _e = u;
        }
    }
  }
  var Vv = {
      getCacheForType: function (t) {
        var e = $e(Oe),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
    },
    Pv = typeof WeakMap == 'function' ? WeakMap : Map,
    Yt = 0,
    re = null,
    zt = null,
    Bt = 0,
    Vt = 0,
    ln = null,
    Ra = !1,
    ql = !1,
    cc = !1,
    aa = 0,
    ve = 0,
    Aa = 0,
    al = 0,
    fc = 0,
    vn = 0,
    Gl = 0,
    Qr = null,
    Ie = null,
    dc = !1,
    pc = 0,
    Ti = 1 / 0,
    Ei = null,
    Ma = null,
    ke = 0,
    Oa = null,
    Yl = null,
    Vl = 0,
    mc = 0,
    hc = null,
    Im = null,
    Zr = 0,
    gc = null;
  function rn() {
    if ((Yt & 2) !== 0 && Bt !== 0) return Bt & -Bt;
    if (M.T !== null) {
      var t = Nl;
      return t !== 0 ? t : Tc();
    }
    return dd();
  }
  function Fm() {
    vn === 0 && (vn = (Bt & 536870912) === 0 || kt ? dr() : 536870912);
    var t = yn.current;
    return (t !== null && (t.flags |= 32), vn);
  }
  function on(t, e, a) {
    (((t === re && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null) &&
      (Pl(t, 0), za(t, Bt, vn, !1)),
      pr(t, a),
      ((Yt & 2) === 0 || t !== re) &&
        (t === re && ((Yt & 2) === 0 && (al |= a), ve === 4 && za(t, Bt, vn, !1)), Dn(t)));
  }
  function Wm(t, e, a) {
    if ((Yt & 6) !== 0) throw Error(i(327));
    var l = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || pe(t, e),
      s = l ? Qv(t, e) : bc(t, e, !0),
      u = l;
    do {
      if (s === 0) {
        ql && !l && za(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), u && !Xv(a))) {
          ((s = bc(t, e, !1)), (u = !1));
          continue;
        }
        if (s === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var m = 0;
          else
            ((m = t.pendingLanes & -536870913), (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            e = m;
            t: {
              var y = t;
              s = Qr;
              var R = y.current.memoizedState.isDehydrated;
              if ((R && (Pl(y, m).flags |= 256), (m = bc(y, m, !1)), m !== 2)) {
                if (cc && !R) {
                  ((y.errorRecoveryDisabledLanes |= u), (al |= u), (s = 4));
                  break t;
                }
                ((u = Ie), (Ie = s), u !== null && (Ie === null ? (Ie = u) : Ie.push.apply(Ie, u)));
              }
              s = m;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Pl(t, 0), za(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (u = s), u)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              za(l, e, vn, !Ra);
              break t;
            case 2:
              Ie = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((s = pc + 300 - Gt()), 10 < s)) {
            if ((za(l, e, vn, !Ra), Ht(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = Mh(
              Jm.bind(null, l, a, Ie, Ei, dc, e, vn, al, Gl, Ra, u, 2, -0, 0),
              s,
            );
            break t;
          }
          Jm(l, a, Ie, Ei, dc, e, vn, al, Gl, Ra, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Dn(t);
  }
  function Jm(t, e, a, l, s, u, m, y, R, L, I, tt, $, q) {
    if (
      ((t.timeoutHandle = -1),
      (tt = e.subtreeFlags),
      (tt & 8192 || (tt & 16785408) === 16785408) &&
        ((no = { stylesheets: null, count: 0, unsuspend: Mb }), Xm(e), (tt = zb()), tt !== null))
    ) {
      ((t.cancelPendingCommit = tt(oh.bind(null, t, e, u, a, l, s, m, y, R, I, 1, $, q))),
        za(t, u, m, !L));
      return;
    }
    oh(t, e, u, a, l, s, m, y, R);
  }
  function Xv(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var s = a[l],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!tn(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null)) ((a.return = e), (e = a));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function za(t, e, a, l) {
    ((e &= ~fc),
      (e &= ~al),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var u = 31 - Ut(s),
        m = 1 << u;
      ((l[u] = -1), (s &= ~m));
    }
    a !== 0 && cd(t, a, e);
  }
  function Ri() {
    return (Yt & 6) === 0 ? (Ir(0), !1) : !0;
  }
  function yc() {
    if (zt !== null) {
      if (Vt === 0) var t = zt.return;
      else ((t = zt), (Zn = Fa = null), Du(t), (jl = null), ($r = 0), (t = zt));
      for (; t !== null; ) (_m(t.alternate, t), (t = t.return));
      zt = null;
    }
  }
  function Pl(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), cb(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      yc(),
      (re = t),
      (zt = a = Xn(t.current, null)),
      (Bt = e),
      (Vt = 0),
      (ln = null),
      (Ra = !1),
      (ql = pe(t, e)),
      (cc = !1),
      (Gl = vn = fc = al = Aa = ve = 0),
      (Ie = Qr = null),
      (dc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var s = 31 - Ut(l),
          u = 1 << s;
        ((e |= t[s]), (l &= ~u));
      }
    return ((aa = e), Ko(), a);
  }
  function th(t, e) {
    ((Rt = null),
      (M.H = di),
      e === Nr || e === ni
        ? ((e = yp()), (Vt = 3))
        : e === mp
          ? ((e = yp()), (Vt = 4))
          : (Vt =
              e === vm
                ? 8
                : e !== null && typeof e == 'object' && typeof e.then == 'function'
                  ? 6
                  : 1),
      (ln = e),
      zt === null && ((ve = 1), yi(t, pn(e, t.current))));
  }
  function eh() {
    var t = M.H;
    return ((M.H = di), t === null ? di : t);
  }
  function nh() {
    var t = M.A;
    return ((M.A = Vv), t);
  }
  function vc() {
    ((ve = 4),
      Ra || ((Bt & 4194048) !== Bt && yn.current !== null) || (ql = !0),
      ((Aa & 134217727) === 0 && (al & 134217727) === 0) || re === null || za(re, Bt, vn, !1));
  }
  function bc(t, e, a) {
    var l = Yt;
    Yt |= 2;
    var s = eh(),
      u = nh();
    ((re !== t || Bt !== e) && ((Ei = null), Pl(t, e)), (e = !1));
    var m = ve;
    t: do
      try {
        if (Vt !== 0 && zt !== null) {
          var y = zt,
            R = ln;
          switch (Vt) {
            case 8:
              (yc(), (m = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              yn.current === null && (e = !0);
              var L = Vt;
              if (((Vt = 0), (ln = null), Xl(t, y, R, L), a && ql)) {
                m = 0;
                break t;
              }
              break;
            default:
              ((L = Vt), (Vt = 0), (ln = null), Xl(t, y, R, L));
          }
        }
        (Kv(), (m = ve));
        break;
      } catch (I) {
        th(t, I);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Zn = Fa = null),
      (Yt = l),
      (M.H = s),
      (M.A = u),
      zt === null && ((re = null), (Bt = 0), Ko()),
      m
    );
  }
  function Kv() {
    for (; zt !== null; ) ah(zt);
  }
  function Qv(t, e) {
    var a = Yt;
    Yt |= 2;
    var l = eh(),
      s = nh();
    re !== t || Bt !== e ? ((Ei = null), (Ti = Gt() + 500), Pl(t, e)) : (ql = pe(t, e));
    t: do
      try {
        if (Vt !== 0 && zt !== null) {
          e = zt;
          var u = ln;
          e: switch (Vt) {
            case 1:
              ((Vt = 0), (ln = null), Xl(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (hp(u)) {
                ((Vt = 0), (ln = null), lh(e));
                break;
              }
              ((e = function () {
                ((Vt !== 2 && Vt !== 9) || re !== t || (Vt = 7), Dn(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              Vt = 7;
              break t;
            case 4:
              Vt = 5;
              break t;
            case 7:
              hp(u) ? ((Vt = 0), (ln = null), lh(e)) : ((Vt = 0), (ln = null), Xl(t, e, u, 7));
              break;
            case 5:
              var m = null;
              switch (zt.tag) {
                case 26:
                  m = zt.memoizedState;
                case 5:
                case 27:
                  var y = zt;
                  if (!m || Hh(m)) {
                    ((Vt = 0), (ln = null));
                    var R = y.sibling;
                    if (R !== null) zt = R;
                    else {
                      var L = y.return;
                      L !== null ? ((zt = L), Ai(L)) : (zt = null);
                    }
                    break e;
                  }
              }
              ((Vt = 0), (ln = null), Xl(t, e, u, 5));
              break;
            case 6:
              ((Vt = 0), (ln = null), Xl(t, e, u, 6));
              break;
            case 8:
              (yc(), (ve = 6));
              break t;
            default:
              throw Error(i(462));
          }
        }
        Zv();
        break;
      } catch (I) {
        th(t, I);
      }
    while (!0);
    return (
      (Zn = Fa = null),
      (M.H = l),
      (M.A = s),
      (Yt = a),
      zt !== null ? 0 : ((re = null), (Bt = 0), Ko(), ve)
    );
  }
  function Zv() {
    for (; zt !== null && !qt(); ) ah(zt);
  }
  function ah(t) {
    var e = wm(t.alternate, t, aa);
    ((t.memoizedProps = t.pendingProps), e === null ? Ai(t) : (zt = e));
  }
  function lh(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Em(a, e, e.pendingProps, e.type, void 0, Bt);
        break;
      case 11:
        e = Em(a, e, e.pendingProps, e.type.render, e.ref, Bt);
        break;
      case 5:
        Du(e);
      default:
        (_m(a, e), (e = zt = rp(e, aa)), (e = wm(a, e, aa)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ai(t) : (zt = e));
  }
  function Xl(t, e, a, l) {
    ((Zn = Fa = null), Du(e), (jl = null), ($r = 0));
    var s = e.return;
    try {
      if (Lv(t, s, e, a, Bt)) {
        ((ve = 1), yi(t, pn(a, t.current)), (zt = null));
        return;
      }
    } catch (u) {
      if (s !== null) throw ((zt = s), u);
      ((ve = 1), yi(t, pn(a, t.current)), (zt = null));
      return;
    }
    e.flags & 32768
      ? (kt || l === 1
          ? (t = !0)
          : ql || (Bt & 536870912) !== 0
            ? (t = !1)
            : ((Ra = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = yn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        rh(e, t))
      : Ai(e);
  }
  function Ai(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        rh(e, Ra);
        return;
      }
      t = e.return;
      var a = $v(e.alternate, e, aa);
      if (a !== null) {
        zt = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        zt = e;
        return;
      }
      zt = e = t;
    } while (e !== null);
    ve === 0 && (ve = 5);
  }
  function rh(t, e) {
    do {
      var a = qv(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (zt = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        zt = t;
        return;
      }
      zt = t = a;
    } while (t !== null);
    ((ve = 6), (zt = null));
  }
  function oh(t, e, a, l, s, u, m, y, R) {
    t.cancelPendingCommit = null;
    do Mi();
    while (ke !== 0);
    if ((Yt & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= uu),
        M0(t, a, u, m, y, R),
        t === re && ((zt = re = null), (Bt = 0)),
        (Yl = e),
        (Oa = t),
        (Vl = a),
        (mc = u),
        (hc = s),
        (Im = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Jv(Kt, function () {
              return (fh(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = M.T), (M.T = null), (s = K.p), (K.p = 2), (m = Yt), (Yt |= 4));
        try {
          Gv(t, e, a);
        } finally {
          ((Yt = m), (K.p = s), (M.T = l));
        }
      }
      ((ke = 1), ih(), sh(), uh());
    }
  }
  function ih() {
    if (ke === 1) {
      ke = 0;
      var t = Oa,
        e = Yl,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var l = K.p;
        K.p = 2;
        var s = Yt;
        Yt |= 4;
        try {
          Ym(e, t);
          var u = Nc,
            m = Zd(t.containerInfo),
            y = u.focusedElem,
            R = u.selectionRange;
          if (m !== y && y && y.ownerDocument && Qd(y.ownerDocument.documentElement, y)) {
            if (R !== null && lu(y)) {
              var L = R.start,
                I = R.end;
              if ((I === void 0 && (I = L), 'selectionStart' in y))
                ((y.selectionStart = L), (y.selectionEnd = Math.min(I, y.value.length)));
              else {
                var tt = y.ownerDocument || document,
                  $ = (tt && tt.defaultView) || window;
                if ($.getSelection) {
                  var q = $.getSelection(),
                    vt = y.textContent.length,
                    gt = Math.min(R.start, vt),
                    Wt = R.end === void 0 ? gt : Math.min(R.end, vt);
                  !q.extend && gt > Wt && ((m = Wt), (Wt = gt), (gt = m));
                  var U = Kd(y, gt),
                    _ = Kd(y, Wt);
                  if (
                    U &&
                    _ &&
                    (q.rangeCount !== 1 ||
                      q.anchorNode !== U.node ||
                      q.anchorOffset !== U.offset ||
                      q.focusNode !== _.node ||
                      q.focusOffset !== _.offset)
                  ) {
                    var j = tt.createRange();
                    (j.setStart(U.node, U.offset),
                      q.removeAllRanges(),
                      gt > Wt
                        ? (q.addRange(j), q.extend(_.node, _.offset))
                        : (j.setEnd(_.node, _.offset), q.addRange(j)));
                  }
                }
              }
            }
            for (tt = [], q = y; (q = q.parentNode); )
              q.nodeType === 1 && tt.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (typeof y.focus == 'function' && y.focus(), y = 0; y < tt.length; y++) {
              var W = tt[y];
              ((W.element.scrollLeft = W.left), (W.element.scrollTop = W.top));
            }
          }
          ((Hi = !!wc), (Nc = wc = null));
        } finally {
          ((Yt = s), (K.p = l), (M.T = a));
        }
      }
      ((t.current = e), (ke = 2));
    }
  }
  function sh() {
    if (ke === 2) {
      ke = 0;
      var t = Oa,
        e = Yl,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var l = K.p;
        K.p = 2;
        var s = Yt;
        Yt |= 4;
        try {
          Hm(t, e.alternate, e);
        } finally {
          ((Yt = s), (K.p = l), (M.T = a));
        }
      }
      ke = 3;
    }
  }
  function uh() {
    if (ke === 4 || ke === 3) {
      ((ke = 0), De());
      var t = Oa,
        e = Yl,
        a = Vl,
        l = Im;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ke = 5)
        : ((ke = 0), (Yl = Oa = null), ch(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Ma = null),
        js(a),
        (e = e.stateNode),
        Tt && typeof Tt.onCommitFiberRoot == 'function')
      )
        try {
          Tt.onCommitFiberRoot(ue, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = M.T), (s = K.p), (K.p = 2), (M.T = null));
        try {
          for (var u = t.onRecoverableError, m = 0; m < l.length; m++) {
            var y = l[m];
            u(y.value, { componentStack: y.stack });
          }
        } finally {
          ((M.T = e), (K.p = s));
        }
      }
      ((Vl & 3) !== 0 && Mi(),
        Dn(t),
        (s = t.pendingLanes),
        (a & 4194090) !== 0 && (s & 42) !== 0 ? (t === gc ? Zr++ : ((Zr = 0), (gc = t))) : (Zr = 0),
        Ir(0));
    }
  }
  function ch(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), zr(e)));
  }
  function Mi(t) {
    return (ih(), sh(), uh(), fh());
  }
  function fh() {
    if (ke !== 5) return !1;
    var t = Oa,
      e = mc;
    mc = 0;
    var a = js(Vl),
      l = M.T,
      s = K.p;
    try {
      ((K.p = 32 > a ? 32 : a), (M.T = null), (a = hc), (hc = null));
      var u = Oa,
        m = Vl;
      if (((ke = 0), (Yl = Oa = null), (Vl = 0), (Yt & 6) !== 0)) throw Error(i(331));
      var y = Yt;
      if (
        ((Yt |= 4),
        Qm(u.current),
        Pm(u, u.current, m, a),
        (Yt = y),
        Ir(0, !1),
        Tt && typeof Tt.onPostCommitFiberRoot == 'function')
      )
        try {
          Tt.onPostCommitFiberRoot(ue, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = s), (M.T = l), ch(t, e));
    }
  }
  function dh(t, e, a) {
    ((e = pn(a, e)),
      (e = Qu(t.stateNode, e, 2)),
      (t = va(t, e, 2)),
      t !== null && (pr(t, 2), Dn(t)));
  }
  function le(t, e, a) {
    if (t.tag === 3) dh(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          dh(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (Ma === null || !Ma.has(l)))
          ) {
            ((t = pn(a, t)),
              (a = gm(2)),
              (l = va(e, a, 2)),
              l !== null && (ym(a, l, e, t), pr(l, 2), Dn(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Sc(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Pv();
      var s = new Set();
      l.set(e, s);
    } else ((s = l.get(e)), s === void 0 && ((s = new Set()), l.set(e, s)));
    s.has(a) || ((cc = !0), s.add(a), (t = Iv.bind(null, t, e, a)), e.then(t, t));
  }
  function Iv(t, e, a) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      re === t &&
        (Bt & a) === a &&
        (ve === 4 || (ve === 3 && (Bt & 62914560) === Bt && 300 > Gt() - pc)
          ? (Yt & 2) === 0 && Pl(t, 0)
          : (fc |= a),
        Gl === Bt && (Gl = 0)),
      Dn(t));
  }
  function ph(t, e) {
    (e === 0 && (e = ud()), (t = Ml(t, e)), t !== null && (pr(t, e), Dn(t)));
  }
  function Fv(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), ph(t, a));
  }
  function Wv(t, e) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          s = t.memoizedState;
        s !== null && (a = s.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (l !== null && l.delete(e), ph(t, a));
  }
  function Jv(t, e) {
    return he(t, e);
  }
  var Oi = null,
    Kl = null,
    xc = !1,
    zi = !1,
    Cc = !1,
    ll = 0;
  function Dn(t) {
    (t !== Kl && t.next === null && (Kl === null ? (Oi = Kl = t) : (Kl = Kl.next = t)),
      (zi = !0),
      xc || ((xc = !0), eb()));
  }
  function Ir(t, e) {
    if (!Cc && zi) {
      Cc = !0;
      do
        for (var a = !1, l = Oi; l !== null; ) {
          if (t !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var m = l.suspendedLanes,
                y = l.pingedLanes;
              ((u = (1 << (31 - Ut(42 | t) + 1)) - 1),
                (u &= s & ~(m & ~y)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((a = !0), yh(l, u));
          } else
            ((u = Bt),
              (u = Ht(
                l,
                l === re ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || pe(l, u) || ((a = !0), yh(l, u)));
          l = l.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function tb() {
    mh();
  }
  function mh() {
    zi = xc = !1;
    var t = 0;
    ll !== 0 && (ub() && (t = ll), (ll = 0));
    for (var e = Gt(), a = null, l = Oi; l !== null; ) {
      var s = l.next,
        u = hh(l, e);
      (u === 0
        ? ((l.next = null), a === null ? (Oi = s) : (a.next = s), s === null && (Kl = a))
        : ((a = l), (t !== 0 || (u & 3) !== 0) && (zi = !0)),
        (l = s));
    }
    Ir(t);
  }
  function hh(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var m = 31 - Ut(u),
        y = 1 << m,
        R = s[m];
      (R === -1
        ? ((y & a) === 0 || (y & l) !== 0) && (s[m] = da(y, e))
        : R <= e && (t.expiredLanes |= y),
        (u &= ~y));
    }
    if (
      ((e = re),
      (a = Bt),
      (a = Ht(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      a === 0 || (t === e && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Ct(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((a & 3) === 0 || pe(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && Ct(l), js(a))) {
        case 2:
        case 8:
          a = de;
          break;
        case 32:
          a = Kt;
          break;
        case 268435456:
          a = Je;
          break;
        default:
          a = Kt;
      }
      return (
        (l = gh.bind(null, t)),
        (a = he(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && Ct(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function gh(t, e) {
    if (ke !== 0 && ke !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Mi() && t.callbackNode !== a) return null;
    var l = Bt;
    return (
      (l = Ht(t, t === re ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (Wm(t, l, e),
          hh(t, Gt()),
          t.callbackNode != null && t.callbackNode === a ? gh.bind(null, t) : null)
    );
  }
  function yh(t, e) {
    if (Mi()) return null;
    Wm(t, e, !0);
  }
  function eb() {
    fb(function () {
      (Yt & 6) !== 0 ? he(oe, tb) : mh();
    });
  }
  function Tc() {
    return (ll === 0 && (ll = dr()), ll);
  }
  function vh(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : $o('' + t);
  }
  function bh(t, e) {
    var a = e.ownerDocument.createElement('input');
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute('form', t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function nb(t, e, a, l, s) {
    if (e === 'submit' && a && a.stateNode === s) {
      var u = vh((s[Xe] || null).action),
        m = l.submitter;
      m &&
        ((e = (e = m[Xe] || null) ? vh(e.formAction) : m.getAttribute('formAction')),
        e !== null && ((u = e), (m = null)));
      var y = new Vo('action', 'action', null, l, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ll !== 0) {
                  var R = m ? bh(s, m) : new FormData(s);
                  Yu(a, { pending: !0, data: R, method: s.method, action: u }, null, R);
                }
              } else
                typeof u == 'function' &&
                  (y.preventDefault(),
                  (R = m ? bh(s, m) : new FormData(s)),
                  Yu(a, { pending: !0, data: R, method: s.method, action: u }, u, R));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Ec = 0; Ec < su.length; Ec++) {
    var Rc = su[Ec],
      ab = Rc.toLowerCase(),
      lb = Rc[0].toUpperCase() + Rc.slice(1);
    En(ab, 'on' + lb);
  }
  (En(Wd, 'onAnimationEnd'),
    En(Jd, 'onAnimationIteration'),
    En(tp, 'onAnimationStart'),
    En('dblclick', 'onDoubleClick'),
    En('focusin', 'onFocus'),
    En('focusout', 'onBlur'),
    En(xv, 'onTransitionRun'),
    En(Cv, 'onTransitionStart'),
    En(Tv, 'onTransitionCancel'),
    En(ep, 'onTransitionEnd'),
    yl('onMouseEnter', ['mouseout', 'mouseover']),
    yl('onMouseLeave', ['mouseout', 'mouseover']),
    yl('onPointerEnter', ['pointerout', 'pointerover']),
    yl('onPointerLeave', ['pointerout', 'pointerover']),
    Ga('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ga(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ga('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ga('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ga(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ga(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Fr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    rb = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Fr),
    );
  function Sh(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a],
        s = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var m = l.length - 1; 0 <= m; m--) {
            var y = l[m],
              R = y.instance,
              L = y.currentTarget;
            if (((y = y.listener), R !== u && s.isPropagationStopped())) break t;
            ((u = y), (s.currentTarget = L));
            try {
              u(s);
            } catch (I) {
              gi(I);
            }
            ((s.currentTarget = null), (u = R));
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((y = l[m]),
              (R = y.instance),
              (L = y.currentTarget),
              (y = y.listener),
              R !== u && s.isPropagationStopped())
            )
              break t;
            ((u = y), (s.currentTarget = L));
            try {
              u(s);
            } catch (I) {
              gi(I);
            }
            ((s.currentTarget = null), (u = R));
          }
      }
    }
  }
  function wt(t, e) {
    var a = e[Ls];
    a === void 0 && (a = e[Ls] = new Set());
    var l = t + '__bubble';
    a.has(l) || (xh(e, t, 2, !1), a.add(l));
  }
  function Ac(t, e, a) {
    var l = 0;
    (e && (l |= 4), xh(a, t, l, e));
  }
  var wi = '_reactListening' + Math.random().toString(36).slice(2);
  function Mc(t) {
    if (!t[wi]) {
      ((t[wi] = !0),
        md.forEach(function (a) {
          a !== 'selectionchange' && (rb.has(a) || Ac(a, !1, t), Ac(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[wi] || ((e[wi] = !0), Ac('selectionchange', !1, e));
    }
  }
  function xh(t, e, a, l) {
    switch (Ph(e)) {
      case 2:
        var s = _b;
        break;
      case 8:
        s = Bb;
        break;
      default:
        s = qc;
    }
    ((a = s.bind(null, e, a, t)),
      (s = void 0),
      !Zs || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (s = !0),
      l
        ? s !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: s })
          : t.addEventListener(e, a, !0)
        : s !== void 0
          ? t.addEventListener(e, a, { passive: s })
          : t.addEventListener(e, a, !1));
  }
  function Oc(t, e, a, l, s) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var y = l.stateNode.containerInfo;
          if (y === s) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var R = m.tag;
              if ((R === 3 || R === 4) && m.stateNode.containerInfo === s) return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (((m = ml(y)), m === null)) return;
            if (((R = m.tag), R === 5 || R === 6 || R === 26 || R === 27)) {
              l = u = m;
              continue t;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    Od(function () {
      var L = u,
        I = Ks(a),
        tt = [];
      t: {
        var $ = np.get(t);
        if ($ !== void 0) {
          var q = Vo,
            vt = t;
          switch (t) {
            case 'keypress':
              if (Go(a) === 0) break t;
            case 'keydown':
            case 'keyup':
              q = J0;
              break;
            case 'focusin':
              ((vt = 'focus'), (q = Js));
              break;
            case 'focusout':
              ((vt = 'blur'), (q = Js));
              break;
            case 'beforeblur':
            case 'afterblur':
              q = Js;
              break;
            case 'click':
              if (a.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              q = Nd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              q = q0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              q = nv;
              break;
            case Wd:
            case Jd:
            case tp:
              q = V0;
              break;
            case ep:
              q = lv;
              break;
            case 'scroll':
            case 'scrollend':
              q = H0;
              break;
            case 'wheel':
              q = ov;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              q = X0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              q = Bd;
              break;
            case 'toggle':
            case 'beforetoggle':
              q = sv;
          }
          var gt = (e & 4) !== 0,
            Wt = !gt && (t === 'scroll' || t === 'scrollend'),
            U = gt ? ($ !== null ? $ + 'Capture' : null) : $;
          gt = [];
          for (var _ = L, j; _ !== null; ) {
            var W = _;
            if (
              ((j = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                j === null ||
                U === null ||
                ((W = gr(_, U)), W != null && gt.push(Wr(_, W, j))),
              Wt)
            )
              break;
            _ = _.return;
          }
          0 < gt.length && (($ = new q($, vt, null, a, I)), tt.push({ event: $, listeners: gt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            (($ = t === 'mouseover' || t === 'pointerover'),
            (q = t === 'mouseout' || t === 'pointerout'),
            $ && a !== Xs && (vt = a.relatedTarget || a.fromElement) && (ml(vt) || vt[pl]))
          )
            break t;
          if (
            (q || $) &&
            (($ =
              I.window === I
                ? I
                : ($ = I.ownerDocument)
                  ? $.defaultView || $.parentWindow
                  : window),
            q
              ? ((vt = a.relatedTarget || a.toElement),
                (q = L),
                (vt = vt ? ml(vt) : null),
                vt !== null &&
                  ((Wt = f(vt)), (gt = vt.tag), vt !== Wt || (gt !== 5 && gt !== 27 && gt !== 6)) &&
                  (vt = null))
              : ((q = null), (vt = L)),
            q !== vt)
          ) {
            if (
              ((gt = Nd),
              (W = 'onMouseLeave'),
              (U = 'onMouseEnter'),
              (_ = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((gt = Bd), (W = 'onPointerLeave'), (U = 'onPointerEnter'), (_ = 'pointer')),
              (Wt = q == null ? $ : hr(q)),
              (j = vt == null ? $ : hr(vt)),
              ($ = new gt(W, _ + 'leave', q, a, I)),
              ($.target = Wt),
              ($.relatedTarget = j),
              (W = null),
              ml(I) === L &&
                ((gt = new gt(U, _ + 'enter', vt, a, I)),
                (gt.target = j),
                (gt.relatedTarget = Wt),
                (W = gt)),
              (Wt = W),
              q && vt)
            )
              e: {
                for (gt = q, U = vt, _ = 0, j = gt; j; j = Ql(j)) _++;
                for (j = 0, W = U; W; W = Ql(W)) j++;
                for (; 0 < _ - j; ) ((gt = Ql(gt)), _--);
                for (; 0 < j - _; ) ((U = Ql(U)), j--);
                for (; _--; ) {
                  if (gt === U || (U !== null && gt === U.alternate)) break e;
                  ((gt = Ql(gt)), (U = Ql(U)));
                }
                gt = null;
              }
            else gt = null;
            (q !== null && Ch(tt, $, q, gt, !1),
              vt !== null && Wt !== null && Ch(tt, Wt, vt, gt, !0));
          }
        }
        t: {
          if (
            (($ = L ? hr(L) : window),
            (q = $.nodeName && $.nodeName.toLowerCase()),
            q === 'select' || (q === 'input' && $.type === 'file'))
          )
            var st = qd;
          else if (Hd($))
            if (Gd) st = vv;
            else {
              st = gv;
              var Ot = hv;
            }
          else
            ((q = $.nodeName),
              !q || q.toLowerCase() !== 'input' || ($.type !== 'checkbox' && $.type !== 'radio')
                ? L && Ps(L.elementType) && (st = qd)
                : (st = yv));
          if (st && (st = st(t, L))) {
            $d(tt, st, a, I);
            break t;
          }
          (Ot && Ot(t, $, L),
            t === 'focusout' &&
              L &&
              $.type === 'number' &&
              L.memoizedProps.value != null &&
              Vs($, 'number', $.value));
        }
        switch (((Ot = L ? hr(L) : window), t)) {
          case 'focusin':
            (Hd(Ot) || Ot.contentEditable === 'true') && ((El = Ot), (ru = L), (Er = null));
            break;
          case 'focusout':
            Er = ru = El = null;
            break;
          case 'mousedown':
            ou = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ou = !1), Id(tt, a, I));
            break;
          case 'selectionchange':
            if (Sv) break;
          case 'keydown':
          case 'keyup':
            Id(tt, a, I);
        }
        var pt;
        if (eu)
          t: {
            switch (t) {
              case 'compositionstart':
                var yt = 'onCompositionStart';
                break t;
              case 'compositionend':
                yt = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                yt = 'onCompositionUpdate';
                break t;
            }
            yt = void 0;
          }
        else
          Tl
            ? jd(t, a) && (yt = 'onCompositionEnd')
            : t === 'keydown' && a.keyCode === 229 && (yt = 'onCompositionStart');
        (yt &&
          (Dd &&
            a.locale !== 'ko' &&
            (Tl || yt !== 'onCompositionStart'
              ? yt === 'onCompositionEnd' && Tl && (pt = zd())
              : ((ma = I), (Is = 'value' in ma ? ma.value : ma.textContent), (Tl = !0))),
          (Ot = Ni(L, yt)),
          0 < Ot.length &&
            ((yt = new _d(yt, t, null, a, I)),
            tt.push({ event: yt, listeners: Ot }),
            pt ? (yt.data = pt) : ((pt = Ld(a)), pt !== null && (yt.data = pt)))),
          (pt = cv ? fv(t, a) : dv(t, a)) &&
            ((yt = Ni(L, 'onBeforeInput')),
            0 < yt.length &&
              ((Ot = new _d('onBeforeInput', 'beforeinput', null, a, I)),
              tt.push({ event: Ot, listeners: yt }),
              (Ot.data = pt))),
          nb(tt, t, L, a, I));
      }
      Sh(tt, e);
    });
  }
  function Wr(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function Ni(t, e) {
    for (var a = e + 'Capture', l = []; t !== null; ) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = gr(t, a)),
          s != null && l.unshift(Wr(t, s, u)),
          (s = gr(t, e)),
          s != null && l.push(Wr(t, s, u))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Ql(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ch(t, e, a, l, s) {
    for (var u = e._reactName, m = []; a !== null && a !== l; ) {
      var y = a,
        R = y.alternate,
        L = y.stateNode;
      if (((y = y.tag), R !== null && R === l)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        L === null ||
        ((R = L),
        s
          ? ((L = gr(a, u)), L != null && m.unshift(Wr(a, L, R)))
          : s || ((L = gr(a, u)), L != null && m.push(Wr(a, L, R)))),
        (a = a.return));
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var ob = /\r\n?/g,
    ib = /\u0000|\uFFFD/g;
  function Th(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        ob,
        `
`,
      )
      .replace(ib, '');
  }
  function Eh(t, e) {
    return ((e = Th(e)), Th(t) === e);
  }
  function _i() {}
  function Ft(t, e, a, l, s, u) {
    switch (a) {
      case 'children':
        typeof l == 'string'
          ? e === 'body' || (e === 'textarea' && l === '') || Sl(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && e !== 'body' && Sl(t, '' + l);
        break;
      case 'className':
        jo(t, 'class', l);
        break;
      case 'tabIndex':
        jo(t, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        jo(t, a, l);
        break;
      case 'style':
        Ad(t, l, u);
        break;
      case 'data':
        if (e !== 'object') {
          jo(t, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (e !== 'a' || a !== 'href')) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          t.removeAttribute(a);
          break;
        }
        ((l = $o('' + l)), t.setAttribute(a, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == 'function' &&
            (a === 'formAction'
              ? (e !== 'input' && Ft(t, e, 'name', s.name, s, null),
                Ft(t, e, 'formEncType', s.formEncType, s, null),
                Ft(t, e, 'formMethod', s.formMethod, s, null),
                Ft(t, e, 'formTarget', s.formTarget, s, null))
              : (Ft(t, e, 'encType', s.encType, s, null),
                Ft(t, e, 'method', s.method, s, null),
                Ft(t, e, 'target', s.target, s, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          t.removeAttribute(a);
          break;
        }
        ((l = $o('' + l)), t.setAttribute(a, l));
        break;
      case 'onClick':
        l != null && (t.onclick = _i);
        break;
      case 'onScroll':
        l != null && wt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && wt('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(i(61));
          if (((a = l.__html), a != null)) {
            if (s.children != null) throw Error(i(60));
            t.innerHTML = a;
          }
        }
        break;
      case 'multiple':
        t.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        t.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          t.removeAttribute('xlink:href');
          break;
        }
        ((a = $o('' + l)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? t.setAttribute(a, '' + l)
          : t.removeAttribute(a);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? t.setAttribute(a, '')
          : t.removeAttribute(a);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? t.setAttribute(a, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? t.setAttribute(a, l)
            : t.removeAttribute(a);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? t.removeAttribute(a)
          : t.setAttribute(a, l);
        break;
      case 'popover':
        (wt('beforetoggle', t), wt('toggle', t), ko(t, 'popover', l));
        break;
      case 'xlinkActuate':
        Vn(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Vn(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Vn(t, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Vn(t, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Vn(t, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Vn(t, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Vn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Vn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Vn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        ko(t, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < a.length) || (a[0] !== 'o' && a[0] !== 'O') || (a[1] !== 'n' && a[1] !== 'N')) &&
          ((a = j0.get(a) || a), ko(t, a, l));
    }
  }
  function zc(t, e, a, l, s, u) {
    switch (a) {
      case 'style':
        Ad(t, l, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(i(61));
          if (((a = l.__html), a != null)) {
            if (s.children != null) throw Error(i(60));
            t.innerHTML = a;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Sl(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Sl(t, '' + l);
        break;
      case 'onScroll':
        l != null && wt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && wt('scrollend', t);
        break;
      case 'onClick':
        l != null && (t.onclick = _i);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!hd.hasOwnProperty(a))
          t: {
            if (
              a[0] === 'o' &&
              a[1] === 'n' &&
              ((s = a.endsWith('Capture')),
              (e = a.slice(2, s ? a.length - 7 : void 0)),
              (u = t[Xe] || null),
              (u = u != null ? u[a] : null),
              typeof u == 'function' && t.removeEventListener(e, u, s),
              typeof l == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (a in t ? (t[a] = null) : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, l, s));
              break t;
            }
            a in t ? (t[a] = l) : l === !0 ? t.setAttribute(a, '') : ko(t, a, l);
          }
    }
  }
  function je(t, e, a) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (wt('error', t), wt('load', t));
        var l = !1,
          s = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var m = a[u];
            if (m != null)
              switch (u) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  s = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(i(137, e));
                default:
                  Ft(t, e, u, m, a, null);
              }
          }
        (s && Ft(t, e, 'srcSet', a.srcSet, a, null), l && Ft(t, e, 'src', a.src, a, null));
        return;
      case 'input':
        wt('invalid', t);
        var y = (u = m = s = null),
          R = null,
          L = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var I = a[l];
            if (I != null)
              switch (l) {
                case 'name':
                  s = I;
                  break;
                case 'type':
                  m = I;
                  break;
                case 'checked':
                  R = I;
                  break;
                case 'defaultChecked':
                  L = I;
                  break;
                case 'value':
                  u = I;
                  break;
                case 'defaultValue':
                  y = I;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (I != null) throw Error(i(137, e));
                  break;
                default:
                  Ft(t, e, l, I, a, null);
              }
          }
        (Cd(t, u, y, R, L, m, s, !1), Lo(t));
        return;
      case 'select':
        (wt('invalid', t), (l = m = u = null));
        for (s in a)
          if (a.hasOwnProperty(s) && ((y = a[s]), y != null))
            switch (s) {
              case 'value':
                u = y;
                break;
              case 'defaultValue':
                m = y;
                break;
              case 'multiple':
                l = y;
              default:
                Ft(t, e, s, y, a, null);
            }
        ((e = u),
          (a = m),
          (t.multiple = !!l),
          e != null ? bl(t, !!l, e, !1) : a != null && bl(t, !!l, a, !0));
        return;
      case 'textarea':
        (wt('invalid', t), (u = s = l = null));
        for (m in a)
          if (a.hasOwnProperty(m) && ((y = a[m]), y != null))
            switch (m) {
              case 'value':
                l = y;
                break;
              case 'defaultValue':
                s = y;
                break;
              case 'children':
                u = y;
                break;
              case 'dangerouslySetInnerHTML':
                if (y != null) throw Error(i(91));
                break;
              default:
                Ft(t, e, m, y, a, null);
            }
        (Ed(t, l, s, u), Lo(t));
        return;
      case 'option':
        for (R in a)
          if (a.hasOwnProperty(R) && ((l = a[R]), l != null))
            switch (R) {
              case 'selected':
                t.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Ft(t, e, R, l, a, null);
            }
        return;
      case 'dialog':
        (wt('beforetoggle', t), wt('toggle', t), wt('cancel', t), wt('close', t));
        break;
      case 'iframe':
      case 'object':
        wt('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Fr.length; l++) wt(Fr[l], t);
        break;
      case 'image':
        (wt('error', t), wt('load', t));
        break;
      case 'details':
        wt('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (wt('error', t), wt('load', t));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (L in a)
          if (a.hasOwnProperty(L) && ((l = a[L]), l != null))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, e));
              default:
                Ft(t, e, L, l, a, null);
            }
        return;
      default:
        if (Ps(e)) {
          for (I in a)
            a.hasOwnProperty(I) && ((l = a[I]), l !== void 0 && zc(t, e, I, l, a, void 0));
          return;
        }
    }
    for (y in a) a.hasOwnProperty(y) && ((l = a[y]), l != null && Ft(t, e, y, l, a, null));
  }
  function sb(t, e, a, l) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var s = null,
          u = null,
          m = null,
          y = null,
          R = null,
          L = null,
          I = null;
        for (q in a) {
          var tt = a[q];
          if (a.hasOwnProperty(q) && tt != null)
            switch (q) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                R = tt;
              default:
                l.hasOwnProperty(q) || Ft(t, e, q, null, l, tt);
            }
        }
        for (var $ in l) {
          var q = l[$];
          if (((tt = a[$]), l.hasOwnProperty($) && (q != null || tt != null)))
            switch ($) {
              case 'type':
                u = q;
                break;
              case 'name':
                s = q;
                break;
              case 'checked':
                L = q;
                break;
              case 'defaultChecked':
                I = q;
                break;
              case 'value':
                m = q;
                break;
              case 'defaultValue':
                y = q;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (q != null) throw Error(i(137, e));
                break;
              default:
                q !== tt && Ft(t, e, $, q, l, tt);
            }
        }
        Ys(t, m, y, R, L, I, u, s);
        return;
      case 'select':
        q = m = y = $ = null;
        for (u in a)
          if (((R = a[u]), a.hasOwnProperty(u) && R != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                q = R;
              default:
                l.hasOwnProperty(u) || Ft(t, e, u, null, l, R);
            }
        for (s in l)
          if (((u = l[s]), (R = a[s]), l.hasOwnProperty(s) && (u != null || R != null)))
            switch (s) {
              case 'value':
                $ = u;
                break;
              case 'defaultValue':
                y = u;
                break;
              case 'multiple':
                m = u;
              default:
                u !== R && Ft(t, e, s, u, l, R);
            }
        ((e = y),
          (a = m),
          (l = q),
          $ != null
            ? bl(t, !!a, $, !1)
            : !!l != !!a && (e != null ? bl(t, !!a, e, !0) : bl(t, !!a, a ? [] : '', !1)));
        return;
      case 'textarea':
        q = $ = null;
        for (y in a)
          if (((s = a[y]), a.hasOwnProperty(y) && s != null && !l.hasOwnProperty(y)))
            switch (y) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ft(t, e, y, null, l, s);
            }
        for (m in l)
          if (((s = l[m]), (u = a[m]), l.hasOwnProperty(m) && (s != null || u != null)))
            switch (m) {
              case 'value':
                $ = s;
                break;
              case 'defaultValue':
                q = s;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== u && Ft(t, e, m, s, l, u);
            }
        Td(t, $, q);
        return;
      case 'option':
        for (var vt in a)
          if ((($ = a[vt]), a.hasOwnProperty(vt) && $ != null && !l.hasOwnProperty(vt)))
            switch (vt) {
              case 'selected':
                t.selected = !1;
                break;
              default:
                Ft(t, e, vt, null, l, $);
            }
        for (R in l)
          if ((($ = l[R]), (q = a[R]), l.hasOwnProperty(R) && $ !== q && ($ != null || q != null)))
            switch (R) {
              case 'selected':
                t.selected = $ && typeof $ != 'function' && typeof $ != 'symbol';
                break;
              default:
                Ft(t, e, R, $, l, q);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var gt in a)
          (($ = a[gt]),
            a.hasOwnProperty(gt) && $ != null && !l.hasOwnProperty(gt) && Ft(t, e, gt, null, l, $));
        for (L in l)
          if ((($ = l[L]), (q = a[L]), l.hasOwnProperty(L) && $ !== q && ($ != null || q != null)))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if ($ != null) throw Error(i(137, e));
                break;
              default:
                Ft(t, e, L, $, l, q);
            }
        return;
      default:
        if (Ps(e)) {
          for (var Wt in a)
            (($ = a[Wt]),
              a.hasOwnProperty(Wt) &&
                $ !== void 0 &&
                !l.hasOwnProperty(Wt) &&
                zc(t, e, Wt, void 0, l, $));
          for (I in l)
            (($ = l[I]),
              (q = a[I]),
              !l.hasOwnProperty(I) ||
                $ === q ||
                ($ === void 0 && q === void 0) ||
                zc(t, e, I, $, l, q));
          return;
        }
    }
    for (var U in a)
      (($ = a[U]),
        a.hasOwnProperty(U) && $ != null && !l.hasOwnProperty(U) && Ft(t, e, U, null, l, $));
    for (tt in l)
      (($ = l[tt]),
        (q = a[tt]),
        !l.hasOwnProperty(tt) || $ === q || ($ == null && q == null) || Ft(t, e, tt, $, l, q));
  }
  var wc = null,
    Nc = null;
  function Bi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Rh(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Ah(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === 'foreignObject' ? 0 : t;
  }
  function _c(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      typeof e.children == 'bigint' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bc = null;
  function ub() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === Bc ? !1 : ((Bc = t), !0)) : ((Bc = null), !1);
  }
  var Mh = typeof setTimeout == 'function' ? setTimeout : void 0,
    cb = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Oh = typeof Promise == 'function' ? Promise : void 0,
    fb =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Oh < 'u'
          ? function (t) {
              return Oh.resolve(null).then(t).catch(db);
            }
          : Mh;
  function db(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function wa(t) {
    return t === 'head';
  }
  function zh(t, e) {
    var a = e,
      l = 0,
      s = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === '/$')) {
          if (0 < l && 8 > l) {
            a = l;
            var m = t.ownerDocument;
            if ((a & 1 && Jr(m.documentElement), a & 2 && Jr(m.body), a & 4))
              for (a = m.head, Jr(a), m = a.firstChild; m; ) {
                var y = m.nextSibling,
                  R = m.nodeName;
                (m[mr] ||
                  R === 'SCRIPT' ||
                  R === 'STYLE' ||
                  (R === 'LINK' && m.rel.toLowerCase() === 'stylesheet') ||
                  a.removeChild(m),
                  (m = y));
              }
          }
          if (s === 0) {
            (t.removeChild(u), io(e));
            return;
          }
          s--;
        } else a === '$' || a === '$?' || a === '$!' ? s++ : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = u;
    } while (a);
    io(e);
  }
  function Dc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Dc(a), Hs(a));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (a.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(a);
    }
  }
  function pb(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var s = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (l) {
        if (!t[mr])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((u = t.getAttribute('rel')),
                u === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== s.rel ||
                t.getAttribute('href') !== (s.href == null || s.href === '' ? null : s.href) ||
                t.getAttribute('crossorigin') !== (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute('title') !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((u = t.getAttribute('src')),
                (u !== (s.src == null ? null : s.src) ||
                  t.getAttribute('type') !== (s.type == null ? null : s.type) ||
                  t.getAttribute('crossorigin') !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var u = s.name == null ? null : '' + s.name;
        if (s.type === 'hidden' && t.getAttribute('name') === u) return t;
      } else return t;
      if (((t = An(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function mb(t, e, a) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !a) ||
        ((t = An(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Uc(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState === 'complete');
  }
  function hb(t, e) {
    var a = t.ownerDocument;
    if (t.data !== '$?' || a.readyState === 'complete') e();
    else {
      var l = function () {
        (e(), a.removeEventListener('DOMContentLoaded', l));
      };
      (a.addEventListener('DOMContentLoaded', l), (t._reactRetry = l));
    }
  }
  function An(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')) break;
        if (e === '/$') return null;
      }
    }
    return t;
  }
  var kc = null;
  function wh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === '$' || a === '$!' || a === '$?') {
          if (e === 0) return t;
          e--;
        } else a === '/$' && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Nh(t, e, a) {
    switch (((e = Bi(a)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Jr(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Hs(t);
  }
  var bn = new Map(),
    _h = new Set();
  function Di(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var la = K.d;
  K.d = { f: gb, r: yb, D: vb, C: bb, L: Sb, m: xb, X: Tb, S: Cb, M: Eb };
  function gb() {
    var t = la.f(),
      e = Ri();
    return t || e;
  }
  function yb(t) {
    var e = hl(t);
    e !== null && e.tag === 5 && e.type === 'form' ? Wp(e) : la.r(t);
  }
  var Zl = typeof document > 'u' ? null : document;
  function Bh(t, e, a) {
    var l = Zl;
    if (l && typeof e == 'string' && e) {
      var s = dn(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof a == 'string' && (s += '[crossorigin="' + a + '"]'),
        _h.has(s) ||
          (_h.add(s),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(s) === null &&
            ((e = l.createElement('link')), je(e, 'link', t), we(e), l.head.appendChild(e))));
    }
  }
  function vb(t) {
    (la.D(t), Bh('dns-prefetch', t, null));
  }
  function bb(t, e) {
    (la.C(t, e), Bh('preconnect', t, e));
  }
  function Sb(t, e, a) {
    la.L(t, e, a);
    var l = Zl;
    if (l && t && e) {
      var s = 'link[rel="preload"][as="' + dn(e) + '"]';
      e === 'image' && a && a.imageSrcSet
        ? ((s += '[imagesrcset="' + dn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == 'string' && (s += '[imagesizes="' + dn(a.imageSizes) + '"]'))
        : (s += '[href="' + dn(t) + '"]');
      var u = s;
      switch (e) {
        case 'style':
          u = Il(t);
          break;
        case 'script':
          u = Fl(t);
      }
      bn.has(u) ||
        ((t = b(
          { rel: 'preload', href: e === 'image' && a && a.imageSrcSet ? void 0 : t, as: e },
          a,
        )),
        bn.set(u, t),
        l.querySelector(s) !== null ||
          (e === 'style' && l.querySelector(to(u))) ||
          (e === 'script' && l.querySelector(eo(u))) ||
          ((e = l.createElement('link')), je(e, 'link', t), we(e), l.head.appendChild(e)));
    }
  }
  function xb(t, e) {
    la.m(t, e);
    var a = Zl;
    if (a && t) {
      var l = e && typeof e.as == 'string' ? e.as : 'script',
        s = 'link[rel="modulepreload"][as="' + dn(l) + '"][href="' + dn(t) + '"]',
        u = s;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Fl(t);
      }
      if (
        !bn.has(u) &&
        ((t = b({ rel: 'modulepreload', href: t }, e)), bn.set(u, t), a.querySelector(s) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (a.querySelector(eo(u))) return;
        }
        ((l = a.createElement('link')), je(l, 'link', t), we(l), a.head.appendChild(l));
      }
    }
  }
  function Cb(t, e, a) {
    la.S(t, e, a);
    var l = Zl;
    if (l && t) {
      var s = gl(l).hoistableStyles,
        u = Il(t);
      e = e || 'default';
      var m = s.get(u);
      if (!m) {
        var y = { loading: 0, preload: null };
        if ((m = l.querySelector(to(u)))) y.loading = 5;
        else {
          ((t = b({ rel: 'stylesheet', href: t, 'data-precedence': e }, a)),
            (a = bn.get(u)) && jc(t, a));
          var R = (m = l.createElement('link'));
          (we(R),
            je(R, 'link', t),
            (R._p = new Promise(function (L, I) {
              ((R.onload = L), (R.onerror = I));
            })),
            R.addEventListener('load', function () {
              y.loading |= 1;
            }),
            R.addEventListener('error', function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Ui(m, e, l));
        }
        ((m = { type: 'stylesheet', instance: m, count: 1, state: y }), s.set(u, m));
      }
    }
  }
  function Tb(t, e) {
    la.X(t, e);
    var a = Zl;
    if (a && t) {
      var l = gl(a).hoistableScripts,
        s = Fl(t),
        u = l.get(s);
      u ||
        ((u = a.querySelector(eo(s))),
        u ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = bn.get(s)) && Lc(t, e),
          (u = a.createElement('script')),
          we(u),
          je(u, 'link', t),
          a.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function Eb(t, e) {
    la.M(t, e);
    var a = Zl;
    if (a && t) {
      var l = gl(a).hoistableScripts,
        s = Fl(t),
        u = l.get(s);
      u ||
        ((u = a.querySelector(eo(s))),
        u ||
          ((t = b({ src: t, async: !0, type: 'module' }, e)),
          (e = bn.get(s)) && Lc(t, e),
          (u = a.createElement('script')),
          we(u),
          je(u, 'link', t),
          a.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function Dh(t, e, a, l) {
    var s = (s = ut.current) ? Di(s) : null;
    if (!s) throw Error(i(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof a.precedence == 'string' && typeof a.href == 'string'
          ? ((e = Il(a.href)),
            (a = gl(s).hoistableStyles),
            (l = a.get(e)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), a.set(e, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          a.rel === 'stylesheet' &&
          typeof a.href == 'string' &&
          typeof a.precedence == 'string'
        ) {
          t = Il(a.href);
          var u = gl(s).hoistableStyles,
            m = u.get(t);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, m),
              (u = s.querySelector(to(t))) && !u._p && ((m.instance = u), (m.state.loading = 5)),
              bn.has(t) ||
                ((a = {
                  rel: 'preload',
                  as: 'style',
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                bn.set(t, a),
                u || Rb(s, t, a, m.state))),
            e && l === null)
          )
            throw Error(i(528, ''));
          return m;
        }
        if (e && l !== null) throw Error(i(529, ''));
        return null;
      case 'script':
        return (
          (e = a.async),
          (a = a.src),
          typeof a == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
            ? ((e = Fl(a)),
              (a = gl(s).hoistableScripts),
              (l = a.get(e)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), a.set(e, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Il(t) {
    return 'href="' + dn(t) + '"';
  }
  function to(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Uh(t) {
    return b({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Rb(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (l.loading = 1)
      : ((e = t.createElement('link')),
        (l.preload = e),
        e.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        e.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        je(e, 'link', a),
        we(e),
        t.head.appendChild(e));
  }
  function Fl(t) {
    return '[src="' + dn(t) + '"]';
  }
  function eo(t) {
    return 'script[async]' + t;
  }
  function kh(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var l = t.querySelector('style[data-href~="' + dn(a.href) + '"]');
          if (l) return ((e.instance = l), we(l), l);
          var s = b({}, a, {
            'data-href': a.href,
            'data-precedence': a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement('style')),
            we(l),
            je(l, 'style', s),
            Ui(l, a.precedence, t),
            (e.instance = l)
          );
        case 'stylesheet':
          s = Il(a.href);
          var u = t.querySelector(to(s));
          if (u) return ((e.state.loading |= 4), (e.instance = u), we(u), u);
          ((l = Uh(a)),
            (s = bn.get(s)) && jc(l, s),
            (u = (t.ownerDocument || t).createElement('link')),
            we(u));
          var m = u;
          return (
            (m._p = new Promise(function (y, R) {
              ((m.onload = y), (m.onerror = R));
            })),
            je(u, 'link', l),
            (e.state.loading |= 4),
            Ui(u, a.precedence, t),
            (e.instance = u)
          );
        case 'script':
          return (
            (u = Fl(a.src)),
            (s = t.querySelector(eo(u)))
              ? ((e.instance = s), we(s), s)
              : ((l = a),
                (s = bn.get(u)) && ((l = b({}, a)), Lc(l, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement('script')),
                we(s),
                je(s, 'link', l),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case 'void':
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Ui(l, a.precedence, t));
    return e.instance;
  }
  function Ui(t, e, a) {
    for (
      var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        s = l.length ? l[l.length - 1] : null,
        u = s,
        m = 0;
      m < l.length;
      m++
    ) {
      var y = l[m];
      if (y.dataset.precedence === e) u = y;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function jc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Lc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ki = null;
  function jh(t, e, a) {
    if (ki === null) {
      var l = new Map(),
        s = (ki = new Map());
      s.set(a, l);
    } else ((s = ki), (l = s.get(a)), l || ((l = new Map()), s.set(a, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), s = 0; s < a.length; s++) {
      var u = a[s];
      if (
        !(u[mr] || u[He] || (t === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var m = u.getAttribute(e) || '';
        m = t + m;
        var y = l.get(m);
        y ? y.push(u) : l.set(m, [u]);
      }
    }
    return l;
  }
  function Lh(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(a, e === 'title' ? t.querySelector('head > title') : null));
  }
  function Ab(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break;
        return !0;
      case 'link':
        if (
          typeof e.rel != 'string' ||
          typeof e.href != 'string' ||
          e.href === '' ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case 'stylesheet':
            return ((t = e.disabled), typeof e.precedence == 'string' && t == null);
          default:
            return !0;
        }
      case 'script':
        if (
          e.async &&
          typeof e.async != 'function' &&
          typeof e.async != 'symbol' &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Hh(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  var no = null;
  function Mb() {}
  function Ob(t, e, a) {
    if (no === null) throw Error(i(475));
    var l = no;
    if (
      e.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Il(a.href),
          u = t.querySelector(to(s));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (l.count++, (l = ji.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            we(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Uh(a)),
          (s = bn.get(s)) && jc(a, s),
          (u = u.createElement('link')),
          we(u));
        var m = u;
        ((m._p = new Promise(function (y, R) {
          ((m.onload = y), (m.onerror = R));
        })),
          je(u, 'link', a),
          (e.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = ji.bind(l)),
          t.addEventListener('load', e),
          t.addEventListener('error', e)));
    }
  }
  function zb() {
    if (no === null) throw Error(i(475));
    var t = no;
    return (
      t.stylesheets && t.count === 0 && Hc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Hc(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                ((t.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function ji() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Hc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Li = null;
  function Hc(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Li = new Map()), e.forEach(wb, t), (Li = null), ji.call(t)));
  }
  function wb(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Li.get(t);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Li.set(t, a));
        for (
          var s = t.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < s.length;
          u++
        ) {
          var m = s[u];
          (m.nodeName === 'LINK' || m.getAttribute('media') !== 'not all') &&
            (a.set(m.dataset.precedence, m), (l = m));
        }
        l && a.set(null, l);
      }
      ((s = e.instance),
        (m = s.getAttribute('data-precedence')),
        (u = a.get(m) || l),
        u === l && a.set(null, s),
        a.set(m, s),
        this.count++,
        (l = ji.bind(this)),
        s.addEventListener('load', l),
        s.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ao = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: ot,
    _currentValue2: ot,
    _threadCount: 0,
  };
  function Nb(t, e, a, l, s, u, m, y) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Us(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Us(0)),
      (this.hiddenUpdates = Us(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function $h(t, e, a, l, s, u, m, y, R, L, I, tt) {
    return (
      (t = new Nb(t, e, a, m, y, R, L, tt)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = en(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Su()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: l, isDehydrated: a, cache: e }),
      Eu(u),
      t
    );
  }
  function qh(t) {
    return t ? ((t = Ol), t) : Ol;
  }
  function Gh(t, e, a, l, s, u) {
    ((s = qh(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = ya(e)),
      (l.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (a = va(t, l, e)),
      a !== null && (on(a, t, e), Br(a, t, e)));
  }
  function Yh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function $c(t, e) {
    (Yh(t, e), (t = t.alternate) && Yh(t, e));
  }
  function Vh(t) {
    if (t.tag === 13) {
      var e = Ml(t, 67108864);
      (e !== null && on(e, t, 67108864), $c(t, 67108864));
    }
  }
  var Hi = !0;
  function _b(t, e, a, l) {
    var s = M.T;
    M.T = null;
    var u = K.p;
    try {
      ((K.p = 2), qc(t, e, a, l));
    } finally {
      ((K.p = u), (M.T = s));
    }
  }
  function Bb(t, e, a, l) {
    var s = M.T;
    M.T = null;
    var u = K.p;
    try {
      ((K.p = 8), qc(t, e, a, l));
    } finally {
      ((K.p = u), (M.T = s));
    }
  }
  function qc(t, e, a, l) {
    if (Hi) {
      var s = Gc(l);
      if (s === null) (Oc(t, e, l, $i, a), Xh(t, l));
      else if (Ub(s, t, e, a, l)) l.stopPropagation();
      else if ((Xh(t, l), e & 4 && -1 < Db.indexOf(t))) {
        for (; s !== null; ) {
          var u = hl(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var m = mt(u.pendingLanes);
                  if (m !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var R = 1 << (31 - Ut(m));
                      ((y.entanglements[1] |= R), (m &= ~R));
                    }
                    (Dn(u), (Yt & 6) === 0 && ((Ti = Gt() + 500), Ir(0)));
                  }
                }
                break;
              case 13:
                ((y = Ml(u, 2)), y !== null && on(y, u, 2), Ri(), $c(u, 2));
            }
          if (((u = Gc(l)), u === null && Oc(t, e, l, $i, a), u === s)) break;
          s = u;
        }
        s !== null && l.stopPropagation();
      } else Oc(t, e, l, null, a);
    }
  }
  function Gc(t) {
    return ((t = Ks(t)), Yc(t));
  }
  var $i = null;
  function Yc(t) {
    if ((($i = null), (t = ml(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (($i = t), null);
  }
  function Ph(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (se()) {
          case oe:
            return 2;
          case de:
            return 8;
          case Kt:
          case dt:
            return 32;
          case Je:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = !1,
    Na = null,
    _a = null,
    Ba = null,
    lo = new Map(),
    ro = new Map(),
    Da = [],
    Db =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Xh(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        Na = null;
        break;
      case 'dragenter':
      case 'dragleave':
        _a = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ba = null;
        break;
      case 'pointerover':
      case 'pointerout':
        lo.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ro.delete(e.pointerId);
    }
  }
  function oo(t, e, a, l, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = hl(e)), e !== null && Vh(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Ub(t, e, a, l, s) {
    switch (e) {
      case 'focusin':
        return ((Na = oo(Na, t, e, a, l, s)), !0);
      case 'dragenter':
        return ((_a = oo(_a, t, e, a, l, s)), !0);
      case 'mouseover':
        return ((Ba = oo(Ba, t, e, a, l, s)), !0);
      case 'pointerover':
        var u = s.pointerId;
        return (lo.set(u, oo(lo.get(u) || null, t, e, a, l, s)), !0);
      case 'gotpointercapture':
        return ((u = s.pointerId), ro.set(u, oo(ro.get(u) || null, t, e, a, l, s)), !0);
    }
    return !1;
  }
  function Kh(t) {
    var e = ml(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = d(a)), e !== null)) {
            ((t.blockedOn = e),
              O0(t.priority, function () {
                if (a.tag === 13) {
                  var l = rn();
                  l = ks(l);
                  var s = Ml(a, l);
                  (s !== null && on(s, a, l), $c(a, l));
                }
              }));
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Gc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Xs = l), a.target.dispatchEvent(l), (Xs = null));
      } else return ((e = hl(a)), e !== null && Vh(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function Qh(t, e, a) {
    qi(t) && a.delete(e);
  }
  function kb() {
    ((Vc = !1),
      Na !== null && qi(Na) && (Na = null),
      _a !== null && qi(_a) && (_a = null),
      Ba !== null && qi(Ba) && (Ba = null),
      lo.forEach(Qh),
      ro.forEach(Qh));
  }
  function Gi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Vc || ((Vc = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, kb)));
  }
  var Yi = null;
  function Zh(t) {
    Yi !== t &&
      ((Yi = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Yi === t && (Yi = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            s = t[e + 2];
          if (typeof l != 'function') {
            if (Yc(l || a) === null) continue;
            break;
          }
          var u = hl(a);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Yu(u, { pending: !0, data: s, method: a.method, action: l }, l, s));
        }
      }));
  }
  function io(t) {
    function e(R) {
      return Gi(R, t);
    }
    (Na !== null && Gi(Na, t),
      _a !== null && Gi(_a, t),
      Ba !== null && Gi(Ba, t),
      lo.forEach(e),
      ro.forEach(e));
    for (var a = 0; a < Da.length; a++) {
      var l = Da[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Da.length && ((a = Da[0]), a.blockedOn === null); )
      (Kh(a), a.blockedOn === null && Da.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var s = a[l],
          u = a[l + 1],
          m = s[Xe] || null;
        if (typeof u == 'function') m || Zh(a);
        else if (m) {
          var y = null;
          if (u && u.hasAttribute('formAction')) {
            if (((s = u), (m = u[Xe] || null))) y = m.formAction;
            else if (Yc(s) !== null) continue;
          } else y = m.action;
          (typeof y == 'function' ? (a[l + 1] = y) : (a.splice(l, 3), (l -= 3)), Zh(a));
        }
      }
  }
  function Pc(t) {
    this._internalRoot = t;
  }
  ((Vi.prototype.render = Pc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var a = e.current,
        l = rn();
      Gh(a, l, t, e, null, null);
    }),
    (Vi.prototype.unmount = Pc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Gh(t.current, 2, null, t, null, null), Ri(), (e[pl] = null));
        }
      }));
  function Vi(t) {
    this._internalRoot = t;
  }
  Vi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = dd();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Da.length && e !== 0 && e < Da[a].priority; a++);
      (Da.splice(a, 0, t), a === 0 && Kh(t));
    }
  };
  var Ih = r.version;
  if (Ih !== '19.1.1') throw Error(i(527, Ih, '19.1.1'));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function'
        ? Error(i(188))
        : ((t = Object.keys(t).join(',')), Error(i(268, t)));
    return ((t = g(e)), (t = t !== null ? h(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var jb = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: M,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
      try {
        ((ue = Pi.inject(jb)), (Tt = Pi));
      } catch {}
  }
  return (
    (uo.createRoot = function (t, e) {
      if (!c(t)) throw Error(i(299));
      var a = !1,
        l = '',
        s = dm,
        u = pm,
        m = mm,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (y = e.unstable_transitionCallbacks)),
        (e = $h(t, 1, !1, null, null, a, l, s, u, m, y, null)),
        (t[pl] = e.current),
        Mc(t),
        new Pc(e)
      );
    }),
    (uo.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(i(299));
      var l = !1,
        s = '',
        u = dm,
        m = pm,
        y = mm,
        R = null,
        L = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (m = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (L = a.formState)),
        (e = $h(t, 1, !0, e, a ?? null, l, s, u, m, y, R, L)),
        (e.context = qh(null)),
        (a = e.current),
        (l = rn()),
        (l = ks(l)),
        (s = ya(l)),
        (s.callback = null),
        va(a, s, l),
        (a = l),
        (e.current.lanes = a),
        pr(e, a),
        Dn(e),
        (t[pl] = e.current),
        Mc(t),
        new Vi(e)
      );
    }),
    (uo.version = '19.1.1'),
    uo
  );
}
var og;
function Kb() {
  if (og) return Qc.exports;
  og = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (Qc.exports = Xb()), Qc.exports);
}
var Qb = Kb();
const Zb = wf(Qb);
function ia(n, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${n}`);
  return (
    r.forEach((i) => o.searchParams.append('args[]', i)),
    `Minified MUI error #${n}; visit ${o} for the full message.`
  );
}
const $n = '$$material';
function ls() {
  return (
    (ls = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var i in o) ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
          }
          return n;
        }),
    ls.apply(null, arguments)
  );
}
function Ib(n) {
  if (n.sheet) return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n) return document.styleSheets[r];
}
function Fb(n) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', n.key),
    n.nonce !== void 0 && r.setAttribute('nonce', n.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var Wb = (function () {
    function n(o) {
      var i = this;
      ((this._insertTag = function (c) {
        var f;
        (i.tags.length === 0
          ? i.insertionPoint
            ? (f = i.insertionPoint.nextSibling)
            : i.prepend
              ? (f = i.container.firstChild)
              : (f = i.before)
          : (f = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(c, f),
          i.tags.push(c));
      }),
        (this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = o.nonce),
        (this.key = o.key),
        (this.container = o.container),
        (this.prepend = o.prepend),
        (this.insertionPoint = o.insertionPoint),
        (this.before = null));
    }
    var r = n.prototype;
    return (
      (r.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (r.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fb(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = Ib(c);
          try {
            f.insertRule(i, f.cssRules.length);
          } catch {}
        } else c.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (r.flush = function () {
        (this.tags.forEach(function (i) {
          var c;
          return (c = i.parentNode) == null ? void 0 : c.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      n
    );
  })(),
  Ge = '-ms-',
  rs = '-moz-',
  jt = '-webkit-',
  vy = 'comm',
  _f = 'rule',
  Bf = 'decl',
  Jb = '@import',
  by = '@keyframes',
  t1 = '@layer',
  e1 = Math.abs,
  ms = String.fromCharCode,
  n1 = Object.assign;
function a1(n, r) {
  return Le(n, 0) ^ 45
    ? (((((((r << 2) ^ Le(n, 0)) << 2) ^ Le(n, 1)) << 2) ^ Le(n, 2)) << 2) ^ Le(n, 3)
    : 0;
}
function Sy(n) {
  return n.trim();
}
function l1(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function Lt(n, r, o) {
  return n.replace(r, o);
}
function pf(n, r) {
  return n.indexOf(r);
}
function Le(n, r) {
  return n.charCodeAt(r) | 0;
}
function Co(n, r, o) {
  return n.slice(r, o);
}
function jn(n) {
  return n.length;
}
function Df(n) {
  return n.length;
}
function Xi(n, r) {
  return (r.push(n), n);
}
function r1(n, r) {
  return n.map(r).join('');
}
var hs = 1,
  ir = 1,
  xy = 0,
  Fe = 0,
  Me = 0,
  ur = '';
function gs(n, r, o, i, c, f, d) {
  return {
    value: n,
    root: r,
    parent: o,
    type: i,
    props: c,
    children: f,
    line: hs,
    column: ir,
    length: d,
    return: '',
  };
}
function co(n, r) {
  return n1(gs('', null, null, '', null, null, 0), n, { length: -n.length }, r);
}
function o1() {
  return Me;
}
function i1() {
  return ((Me = Fe > 0 ? Le(ur, --Fe) : 0), ir--, Me === 10 && ((ir = 1), hs--), Me);
}
function un() {
  return ((Me = Fe < xy ? Le(ur, Fe++) : 0), ir++, Me === 10 && ((ir = 1), hs++), Me);
}
function qn() {
  return Le(ur, Fe);
}
function Ji() {
  return Fe;
}
function Mo(n, r) {
  return Co(ur, n, r);
}
function To(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Cy(n) {
  return ((hs = ir = 1), (xy = jn((ur = n))), (Fe = 0), []);
}
function Ty(n) {
  return ((ur = ''), n);
}
function ts(n) {
  return Sy(Mo(Fe - 1, mf(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function s1(n) {
  for (; (Me = qn()) && Me < 33; ) un();
  return To(n) > 2 || To(Me) > 3 ? '' : ' ';
}
function u1(n, r) {
  for (; --r && un() && !(Me < 48 || Me > 102 || (Me > 57 && Me < 65) || (Me > 70 && Me < 97)); );
  return Mo(n, Ji() + (r < 6 && qn() == 32 && un() == 32));
}
function mf(n) {
  for (; un(); )
    switch (Me) {
      case n:
        return Fe;
      case 34:
      case 39:
        n !== 34 && n !== 39 && mf(Me);
        break;
      case 40:
        n === 41 && mf(n);
        break;
      case 92:
        un();
        break;
    }
  return Fe;
}
function c1(n, r) {
  for (; un() && n + Me !== 57; ) if (n + Me === 84 && qn() === 47) break;
  return '/*' + Mo(r, Fe - 1) + '*' + ms(n === 47 ? n : un());
}
function f1(n) {
  for (; !To(qn()); ) un();
  return Mo(n, Fe);
}
function d1(n) {
  return Ty(es('', null, null, null, [''], (n = Cy(n)), 0, [0], n));
}
function es(n, r, o, i, c, f, d, p, g) {
  for (
    var h = 0,
      b = 0,
      S = d,
      A = 0,
      z = 0,
      T = 0,
      C = 1,
      N = 1,
      k = 1,
      G = 0,
      B = '',
      w = c,
      O = f,
      D = i,
      P = B;
    N;

  )
    switch (((T = G), (G = un()))) {
      case 40:
        if (T != 108 && Le(P, S - 1) == 58) {
          pf((P += Lt(ts(G), '&', '&\f')), '&\f') != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += ts(G);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += s1(T);
        break;
      case 92:
        P += u1(Ji() - 1, 7);
        continue;
      case 47:
        switch (qn()) {
          case 42:
          case 47:
            Xi(p1(c1(un(), Ji()), r, o), g);
            break;
          default:
            P += '/';
        }
        break;
      case 123 * C:
        p[h++] = jn(P) * k;
      case 125 * C:
      case 59:
      case 0:
        switch (G) {
          case 0:
          case 125:
            N = 0;
          case 59 + b:
            (k == -1 && (P = Lt(P, /\f/g, '')),
              z > 0 &&
                jn(P) - S &&
                Xi(z > 32 ? sg(P + ';', i, o, S - 1) : sg(Lt(P, ' ', '') + ';', i, o, S - 2), g));
            break;
          case 59:
            P += ';';
          default:
            if ((Xi((D = ig(P, r, o, h, b, c, p, B, (w = []), (O = []), S)), f), G === 123))
              if (b === 0) es(P, r, D, D, w, f, S, p, O);
              else
                switch (A === 99 && Le(P, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    es(
                      n,
                      D,
                      D,
                      i && Xi(ig(n, D, D, 0, 0, c, p, B, c, (w = []), S), O),
                      c,
                      O,
                      S,
                      p,
                      i ? w : O,
                    );
                    break;
                  default:
                    es(P, D, D, D, [''], O, 0, p, O);
                }
        }
        ((h = b = z = 0), (C = k = 1), (B = P = ''), (S = d));
        break;
      case 58:
        ((S = 1 + jn(P)), (z = T));
      default:
        if (C < 1) {
          if (G == 123) --C;
          else if (G == 125 && C++ == 0 && i1() == 125) continue;
        }
        switch (((P += ms(G)), G * C)) {
          case 38:
            k = b > 0 ? 1 : ((P += '\f'), -1);
            break;
          case 44:
            ((p[h++] = (jn(P) - 1) * k), (k = 1));
            break;
          case 64:
            (qn() === 45 && (P += ts(un())), (A = qn()), (b = S = jn((B = P += f1(Ji())))), G++);
            break;
          case 45:
            T === 45 && jn(P) == 2 && (C = 0);
        }
    }
  return f;
}
function ig(n, r, o, i, c, f, d, p, g, h, b) {
  for (var S = c - 1, A = c === 0 ? f : [''], z = Df(A), T = 0, C = 0, N = 0; T < i; ++T)
    for (var k = 0, G = Co(n, S + 1, (S = e1((C = d[T])))), B = n; k < z; ++k)
      (B = Sy(C > 0 ? A[k] + ' ' + G : Lt(G, /&\f/g, A[k]))) && (g[N++] = B);
  return gs(n, r, o, c === 0 ? _f : p, g, h, b);
}
function p1(n, r, o) {
  return gs(n, r, o, vy, ms(o1()), Co(n, 2, -2), 0);
}
function sg(n, r, o, i) {
  return gs(n, r, o, Bf, Co(n, 0, i), Co(n, i + 1, -1), i);
}
function rr(n, r) {
  for (var o = '', i = Df(n), c = 0; c < i; c++) o += r(n[c], c, n, r) || '';
  return o;
}
function m1(n, r, o, i) {
  switch (n.type) {
    case t1:
      if (n.children.length) break;
    case Jb:
    case Bf:
      return (n.return = n.return || n.value);
    case vy:
      return '';
    case by:
      return (n.return = n.value + '{' + rr(n.children, i) + '}');
    case _f:
      n.value = n.props.join(',');
  }
  return jn((o = rr(n.children, i))) ? (n.return = n.value + '{' + o + '}') : '';
}
function h1(n) {
  var r = Df(n);
  return function (o, i, c, f) {
    for (var d = '', p = 0; p < r; p++) d += n[p](o, i, c, f) || '';
    return d;
  };
}
function g1(n) {
  return function (r) {
    r.root || ((r = r.return) && n(r));
  };
}
function Ey(n) {
  var r = Object.create(null);
  return function (o) {
    return (r[o] === void 0 && (r[o] = n(o)), r[o]);
  };
}
var y1 = function (r, o, i) {
    for (var c = 0, f = 0; (c = f), (f = qn()), c === 38 && f === 12 && (o[i] = 1), !To(f); ) un();
    return Mo(r, Fe);
  },
  v1 = function (r, o) {
    var i = -1,
      c = 44;
    do
      switch (To(c)) {
        case 0:
          (c === 38 && qn() === 12 && (o[i] = 1), (r[i] += y1(Fe - 1, o, i)));
          break;
        case 2:
          r[i] += ts(c);
          break;
        case 4:
          if (c === 44) {
            ((r[++i] = qn() === 58 ? '&\f' : ''), (o[i] = r[i].length));
            break;
          }
        default:
          r[i] += ms(c);
      }
    while ((c = un()));
    return r;
  },
  b1 = function (r, o) {
    return Ty(v1(Cy(r), o));
  },
  ug = new WeakMap(),
  S1 = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var o = r.value, i = r.parent, c = r.column === i.column && r.line === i.line;
        i.type !== 'rule';

      )
        if (((i = i.parent), !i)) return;
      if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !ug.get(i)) && !c) {
        ug.set(r, !0);
        for (var f = [], d = b1(o, f), p = i.props, g = 0, h = 0; g < d.length; g++)
          for (var b = 0; b < p.length; b++, h++)
            r.props[h] = f[g] ? d[g].replace(/&\f/g, p[b]) : p[b] + ' ' + d[g];
      }
    }
  },
  x1 = function (r) {
    if (r.type === 'decl') {
      var o = r.value;
      o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && ((r.return = ''), (r.value = ''));
    }
  };
function Ry(n, r) {
  switch (a1(n, r)) {
    case 5103:
      return jt + 'print-' + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return jt + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return jt + n + rs + n + Ge + n + n;
    case 6828:
    case 4268:
      return jt + n + Ge + n + n;
    case 6165:
      return jt + n + Ge + 'flex-' + n + n;
    case 5187:
      return jt + n + Lt(n, /(\w+).+(:[^]+)/, jt + 'box-$1$2' + Ge + 'flex-$1$2') + n;
    case 5443:
      return jt + n + Ge + 'flex-item-' + Lt(n, /flex-|-self/, '') + n;
    case 4675:
      return jt + n + Ge + 'flex-line-pack' + Lt(n, /align-content|flex-|-self/, '') + n;
    case 5548:
      return jt + n + Ge + Lt(n, 'shrink', 'negative') + n;
    case 5292:
      return jt + n + Ge + Lt(n, 'basis', 'preferred-size') + n;
    case 6060:
      return jt + 'box-' + Lt(n, '-grow', '') + jt + n + Ge + Lt(n, 'grow', 'positive') + n;
    case 4554:
      return jt + Lt(n, /([^-])(transform)/g, '$1' + jt + '$2') + n;
    case 6187:
      return Lt(Lt(Lt(n, /(zoom-|grab)/, jt + '$1'), /(image-set)/, jt + '$1'), n, '') + n;
    case 5495:
    case 3959:
      return Lt(n, /(image-set\([^]*)/, jt + '$1$`$1');
    case 4968:
      return (
        Lt(
          Lt(n, /(.+:)(flex-)?(.*)/, jt + 'box-pack:$3' + Ge + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        jt +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Lt(n, /(.+)-inline(.+)/, jt + '$1$2') + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (jn(n) - 1 - r > 6)
        switch (Le(n, r + 1)) {
          case 109:
            if (Le(n, r + 4) !== 45) break;
          case 102:
            return (
              Lt(
                n,
                /(.+:)(.+)-([^]+)/,
                '$1' + jt + '$2-$3$1' + rs + (Le(n, r + 3) == 108 ? '$3' : '$2-$3'),
              ) + n
            );
          case 115:
            return ~pf(n, 'stretch') ? Ry(Lt(n, 'stretch', 'fill-available'), r) + n : n;
        }
      break;
    case 4949:
      if (Le(n, r + 1) !== 115) break;
    case 6444:
      switch (Le(n, jn(n) - 3 - (~pf(n, '!important') && 10))) {
        case 107:
          return Lt(n, ':', ':' + jt) + n;
        case 101:
          return (
            Lt(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                jt +
                (Le(n, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                jt +
                '$2$3$1' +
                Ge +
                '$2box$3',
            ) + n
          );
      }
      break;
    case 5936:
      switch (Le(n, r + 11)) {
        case 114:
          return jt + n + Ge + Lt(n, /[svh]\w+-[tblr]{2}/, 'tb') + n;
        case 108:
          return jt + n + Ge + Lt(n, /[svh]\w+-[tblr]{2}/, 'tb-rl') + n;
        case 45:
          return jt + n + Ge + Lt(n, /[svh]\w+-[tblr]{2}/, 'lr') + n;
      }
      return jt + n + Ge + n + n;
  }
  return n;
}
var C1 = function (r, o, i, c) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case Bf:
          r.return = Ry(r.value, r.length);
          break;
        case by:
          return rr([co(r, { value: Lt(r.value, '@', '@' + jt) })], c);
        case _f:
          if (r.length)
            return r1(r.props, function (f) {
              switch (l1(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return rr([co(r, { props: [Lt(f, /:(read-\w+)/, ':' + rs + '$1')] })], c);
                case '::placeholder':
                  return rr(
                    [
                      co(r, { props: [Lt(f, /:(plac\w+)/, ':' + jt + 'input-$1')] }),
                      co(r, { props: [Lt(f, /:(plac\w+)/, ':' + rs + '$1')] }),
                      co(r, { props: [Lt(f, /:(plac\w+)/, Ge + 'input-$1')] }),
                    ],
                    c,
                  );
              }
              return '';
            });
      }
  },
  T1 = [C1],
  E1 = function (r) {
    var o = r.key;
    if (o === 'css') {
      var i = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(i, function (C) {
        var N = C.getAttribute('data-emotion');
        N.indexOf(' ') !== -1 && (document.head.appendChild(C), C.setAttribute('data-s', ''));
      });
    }
    var c = r.stylisPlugins || T1,
      f = {},
      d,
      p = [];
    ((d = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (C) {
          for (var N = C.getAttribute('data-emotion').split(' '), k = 1; k < N.length; k++)
            f[N[k]] = !0;
          p.push(C);
        },
      ));
    var g,
      h = [S1, x1];
    {
      var b,
        S = [
          m1,
          g1(function (C) {
            b.insert(C);
          }),
        ],
        A = h1(h.concat(c, S)),
        z = function (N) {
          return rr(d1(N), A);
        };
      g = function (N, k, G, B) {
        ((b = G), z(N ? N + '{' + k.styles + '}' : k.styles), B && (T.inserted[k.name] = !0));
      };
    }
    var T = {
      key: o,
      sheet: new Wb({
        key: o,
        container: d,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: f,
      registered: {},
      insert: g,
    };
    return (T.sheet.hydrate(p), T);
  },
  Wc = { exports: {} },
  $t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cg;
function R1() {
  if (cg) return $t;
  cg = 1;
  var n = typeof Symbol == 'function' && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    i = n ? Symbol.for('react.fragment') : 60107,
    c = n ? Symbol.for('react.strict_mode') : 60108,
    f = n ? Symbol.for('react.profiler') : 60114,
    d = n ? Symbol.for('react.provider') : 60109,
    p = n ? Symbol.for('react.context') : 60110,
    g = n ? Symbol.for('react.async_mode') : 60111,
    h = n ? Symbol.for('react.concurrent_mode') : 60111,
    b = n ? Symbol.for('react.forward_ref') : 60112,
    S = n ? Symbol.for('react.suspense') : 60113,
    A = n ? Symbol.for('react.suspense_list') : 60120,
    z = n ? Symbol.for('react.memo') : 60115,
    T = n ? Symbol.for('react.lazy') : 60116,
    C = n ? Symbol.for('react.block') : 60121,
    N = n ? Symbol.for('react.fundamental') : 60117,
    k = n ? Symbol.for('react.responder') : 60118,
    G = n ? Symbol.for('react.scope') : 60119;
  function B(O) {
    if (typeof O == 'object' && O !== null) {
      var D = O.$$typeof;
      switch (D) {
        case r:
          switch (((O = O.type), O)) {
            case g:
            case h:
            case i:
            case f:
            case c:
            case S:
              return O;
            default:
              switch (((O = O && O.$$typeof), O)) {
                case p:
                case b:
                case T:
                case z:
                case d:
                  return O;
                default:
                  return D;
              }
          }
        case o:
          return D;
      }
    }
  }
  function w(O) {
    return B(O) === h;
  }
  return (
    ($t.AsyncMode = g),
    ($t.ConcurrentMode = h),
    ($t.ContextConsumer = p),
    ($t.ContextProvider = d),
    ($t.Element = r),
    ($t.ForwardRef = b),
    ($t.Fragment = i),
    ($t.Lazy = T),
    ($t.Memo = z),
    ($t.Portal = o),
    ($t.Profiler = f),
    ($t.StrictMode = c),
    ($t.Suspense = S),
    ($t.isAsyncMode = function (O) {
      return w(O) || B(O) === g;
    }),
    ($t.isConcurrentMode = w),
    ($t.isContextConsumer = function (O) {
      return B(O) === p;
    }),
    ($t.isContextProvider = function (O) {
      return B(O) === d;
    }),
    ($t.isElement = function (O) {
      return typeof O == 'object' && O !== null && O.$$typeof === r;
    }),
    ($t.isForwardRef = function (O) {
      return B(O) === b;
    }),
    ($t.isFragment = function (O) {
      return B(O) === i;
    }),
    ($t.isLazy = function (O) {
      return B(O) === T;
    }),
    ($t.isMemo = function (O) {
      return B(O) === z;
    }),
    ($t.isPortal = function (O) {
      return B(O) === o;
    }),
    ($t.isProfiler = function (O) {
      return B(O) === f;
    }),
    ($t.isStrictMode = function (O) {
      return B(O) === c;
    }),
    ($t.isSuspense = function (O) {
      return B(O) === S;
    }),
    ($t.isValidElementType = function (O) {
      return (
        typeof O == 'string' ||
        typeof O == 'function' ||
        O === i ||
        O === h ||
        O === f ||
        O === c ||
        O === S ||
        O === A ||
        (typeof O == 'object' &&
          O !== null &&
          (O.$$typeof === T ||
            O.$$typeof === z ||
            O.$$typeof === d ||
            O.$$typeof === p ||
            O.$$typeof === b ||
            O.$$typeof === N ||
            O.$$typeof === k ||
            O.$$typeof === G ||
            O.$$typeof === C))
      );
    }),
    ($t.typeOf = B),
    $t
  );
}
var fg;
function A1() {
  return (fg || ((fg = 1), (Wc.exports = R1())), Wc.exports);
}
var Jc, dg;
function M1() {
  if (dg) return Jc;
  dg = 1;
  var n = A1(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    i = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    c = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    f = {};
  ((f[n.ForwardRef] = i), (f[n.Memo] = c));
  function d(T) {
    return n.isMemo(T) ? c : f[T.$$typeof] || r;
  }
  var p = Object.defineProperty,
    g = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    S = Object.getPrototypeOf,
    A = Object.prototype;
  function z(T, C, N) {
    if (typeof C != 'string') {
      if (A) {
        var k = S(C);
        k && k !== A && z(T, k, N);
      }
      var G = g(C);
      h && (G = G.concat(h(C)));
      for (var B = d(T), w = d(C), O = 0; O < G.length; ++O) {
        var D = G[O];
        if (!o[D] && !(N && N[D]) && !(w && w[D]) && !(B && B[D])) {
          var P = b(C, D);
          try {
            p(T, D, P);
          } catch {}
        }
      }
    }
    return T;
  }
  return ((Jc = z), Jc);
}
M1();
var O1 = !0;
function Ay(n, r, o) {
  var i = '';
  return (
    o.split(' ').forEach(function (c) {
      n[c] !== void 0 ? r.push(n[c] + ';') : c && (i += c + ' ');
    }),
    i
  );
}
var Uf = function (r, o, i) {
    var c = r.key + '-' + o.name;
    (i === !1 || O1 === !1) && r.registered[c] === void 0 && (r.registered[c] = o.styles);
  },
  kf = function (r, o, i) {
    Uf(r, o, i);
    var c = r.key + '-' + o.name;
    if (r.inserted[o.name] === void 0) {
      var f = o;
      do (r.insert(o === f ? '.' + c : '', f, r.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function z1(n) {
  for (var r = 0, o, i = 0, c = n.length; c >= 4; ++i, c -= 4)
    ((o =
      (n.charCodeAt(i) & 255) |
      ((n.charCodeAt(++i) & 255) << 8) |
      ((n.charCodeAt(++i) & 255) << 16) |
      ((n.charCodeAt(++i) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (r =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16))));
  switch (c) {
    case 3:
      r ^= (n.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(i + 1) & 255) << 8;
    case 1:
      ((r ^= n.charCodeAt(i) & 255), (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var w1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  N1 = /[A-Z]|^ms/g,
  _1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  My = function (r) {
    return r.charCodeAt(1) === 45;
  },
  pg = function (r) {
    return r != null && typeof r != 'boolean';
  },
  tf = Ey(function (n) {
    return My(n) ? n : n.replace(N1, '-$&').toLowerCase();
  }),
  mg = function (r, o) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof o == 'string')
          return o.replace(_1, function (i, c, f) {
            return ((Ln = { name: c, styles: f, next: Ln }), c);
          });
    }
    return w1[r] !== 1 && !My(r) && typeof o == 'number' && o !== 0 ? o + 'px' : o;
  };
function Eo(n, r, o) {
  if (o == null) return '';
  var i = o;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof o) {
    case 'boolean':
      return '';
    case 'object': {
      var c = o;
      if (c.anim === 1) return ((Ln = { name: c.name, styles: c.styles, next: Ln }), c.name);
      var f = o;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            ((Ln = { name: d.name, styles: d.styles, next: Ln }), (d = d.next));
        var p = f.styles + ';';
        return p;
      }
      return B1(n, r, o);
    }
    case 'function': {
      if (n !== void 0) {
        var g = Ln,
          h = o(n);
        return ((Ln = g), Eo(n, r, h));
      }
      break;
    }
  }
  var b = o;
  if (r == null) return b;
  var S = r[b];
  return S !== void 0 ? S : b;
}
function B1(n, r, o) {
  var i = '';
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) i += Eo(n, r, o[c]) + ';';
  else
    for (var f in o) {
      var d = o[f];
      if (typeof d != 'object') {
        var p = d;
        r != null && r[p] !== void 0
          ? (i += f + '{' + r[p] + '}')
          : pg(p) && (i += tf(f) + ':' + mg(f, p) + ';');
      } else if (Array.isArray(d) && typeof d[0] == 'string' && (r == null || r[d[0]] === void 0))
        for (var g = 0; g < d.length; g++) pg(d[g]) && (i += tf(f) + ':' + mg(f, d[g]) + ';');
      else {
        var h = Eo(n, r, d);
        switch (f) {
          case 'animation':
          case 'animationName': {
            i += tf(f) + ':' + h + ';';
            break;
          }
          default:
            i += f + '{' + h + '}';
        }
      }
    }
  return i;
}
var hg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ln;
function Oo(n, r, o) {
  if (n.length === 1 && typeof n[0] == 'object' && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var i = !0,
    c = '';
  Ln = void 0;
  var f = n[0];
  if (f == null || f.raw === void 0) ((i = !1), (c += Eo(o, r, f)));
  else {
    var d = f;
    c += d[0];
  }
  for (var p = 1; p < n.length; p++)
    if (((c += Eo(o, r, n[p])), i)) {
      var g = f;
      c += g[p];
    }
  hg.lastIndex = 0;
  for (var h = '', b; (b = hg.exec(c)) !== null; ) h += '-' + b[1];
  var S = z1(c) + h;
  return { name: S, styles: c, next: Ln };
}
var D1 = function (r) {
    return r();
  },
  Oy = df.useInsertionEffect ? df.useInsertionEffect : !1,
  zy = Oy || D1,
  gg = Oy || x.useLayoutEffect,
  wy = x.createContext(typeof HTMLElement < 'u' ? E1({ key: 'css' }) : null);
wy.Provider;
var jf = function (r) {
    return x.forwardRef(function (o, i) {
      var c = x.useContext(wy);
      return r(o, c, i);
    });
  },
  zo = x.createContext({}),
  Lf = {}.hasOwnProperty,
  hf = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  U1 = function (r, o) {
    var i = {};
    for (var c in o) Lf.call(o, c) && (i[c] = o[c]);
    return ((i[hf] = r), i);
  },
  k1 = function (r) {
    var o = r.cache,
      i = r.serialized,
      c = r.isStringTag;
    return (
      Uf(o, i, c),
      zy(function () {
        return kf(o, i, c);
      }),
      null
    );
  },
  j1 = jf(function (n, r, o) {
    var i = n.css;
    typeof i == 'string' && r.registered[i] !== void 0 && (i = r.registered[i]);
    var c = n[hf],
      f = [i],
      d = '';
    typeof n.className == 'string'
      ? (d = Ay(r.registered, f, n.className))
      : n.className != null && (d = n.className + ' ');
    var p = Oo(f, void 0, x.useContext(zo));
    d += r.key + '-' + p.name;
    var g = {};
    for (var h in n) Lf.call(n, h) && h !== 'css' && h !== hf && (g[h] = n[h]);
    return (
      (g.className = d),
      o && (g.ref = o),
      x.createElement(
        x.Fragment,
        null,
        x.createElement(k1, { cache: r, serialized: p, isStringTag: typeof c == 'string' }),
        x.createElement(c, g),
      )
    );
  }),
  L1 = j1,
  yg = function (r, o) {
    var i = arguments;
    if (o == null || !Lf.call(o, 'css')) return x.createElement.apply(void 0, i);
    var c = i.length,
      f = new Array(c);
    ((f[0] = L1), (f[1] = U1(r, o)));
    for (var d = 2; d < c; d++) f[d] = i[d];
    return x.createElement.apply(null, f);
  };
(function (n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(yg || (yg = {}));
var H1 = jf(function (n, r) {
  var o = n.styles,
    i = Oo([o], void 0, x.useContext(zo)),
    c = x.useRef();
  return (
    gg(
      function () {
        var f = r.key + '-global',
          d = new r.sheet.constructor({
            key: f,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          p = !1,
          g = document.querySelector('style[data-emotion="' + f + ' ' + i.name + '"]');
        return (
          r.sheet.tags.length && (d.before = r.sheet.tags[0]),
          g !== null && ((p = !0), g.setAttribute('data-emotion', f), d.hydrate([g])),
          (c.current = [d, p]),
          function () {
            d.flush();
          }
        );
      },
      [r],
    ),
    gg(
      function () {
        var f = c.current,
          d = f[0],
          p = f[1];
        if (p) {
          f[1] = !1;
          return;
        }
        if ((i.next !== void 0 && kf(r, i.next, !0), d.tags.length)) {
          var g = d.tags[d.tags.length - 1].nextElementSibling;
          ((d.before = g), d.flush());
        }
        r.insert('', i, d, !1);
      },
      [r, i.name],
    ),
    null
  );
});
function Hf() {
  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
  return Oo(r);
}
function wo() {
  var n = Hf.apply(void 0, arguments),
    r = 'animation-' + n.name;
  return {
    name: r,
    styles: '@keyframes ' + r + '{' + n.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var $1 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  q1 = Ey(function (n) {
    return (
      $1.test(n) || (n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91)
    );
  }),
  G1 = q1,
  Y1 = function (r) {
    return r !== 'theme';
  },
  vg = function (r) {
    return typeof r == 'string' && r.charCodeAt(0) > 96 ? G1 : Y1;
  },
  bg = function (r, o, i) {
    var c;
    if (o) {
      var f = o.shouldForwardProp;
      c =
        r.__emotion_forwardProp && f
          ? function (d) {
              return r.__emotion_forwardProp(d) && f(d);
            }
          : f;
    }
    return (typeof c != 'function' && i && (c = r.__emotion_forwardProp), c);
  },
  V1 = function (r) {
    var o = r.cache,
      i = r.serialized,
      c = r.isStringTag;
    return (
      Uf(o, i, c),
      zy(function () {
        return kf(o, i, c);
      }),
      null
    );
  },
  P1 = function n(r, o) {
    var i = r.__emotion_real === r,
      c = (i && r.__emotion_base) || r,
      f,
      d;
    o !== void 0 && ((f = o.label), (d = o.target));
    var p = bg(r, o, i),
      g = p || vg(c),
      h = !g('as');
    return function () {
      var b = arguments,
        S = i && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if ((f !== void 0 && S.push('label:' + f + ';'), b[0] == null || b[0].raw === void 0))
        S.push.apply(S, b);
      else {
        var A = b[0];
        S.push(A[0]);
        for (var z = b.length, T = 1; T < z; T++) S.push(b[T], A[T]);
      }
      var C = jf(function (N, k, G) {
        var B = (h && N.as) || c,
          w = '',
          O = [],
          D = N;
        if (N.theme == null) {
          D = {};
          for (var P in N) D[P] = N[P];
          D.theme = x.useContext(zo);
        }
        typeof N.className == 'string'
          ? (w = Ay(k.registered, O, N.className))
          : N.className != null && (w = N.className + ' ');
        var Q = Oo(S.concat(O), k.registered, D);
        ((w += k.key + '-' + Q.name), d !== void 0 && (w += ' ' + d));
        var J = h && p === void 0 ? vg(B) : g,
          et = {};
        for (var at in N) (h && at === 'as') || (J(at) && (et[at] = N[at]));
        return (
          (et.className = w),
          G && (et.ref = G),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(V1, { cache: k, serialized: Q, isStringTag: typeof B == 'string' }),
            x.createElement(B, et),
          )
        );
      });
      return (
        (C.displayName =
          f !== void 0
            ? f
            : 'Styled(' +
              (typeof c == 'string' ? c : c.displayName || c.name || 'Component') +
              ')'),
        (C.defaultProps = r.defaultProps),
        (C.__emotion_real = C),
        (C.__emotion_base = c),
        (C.__emotion_styles = S),
        (C.__emotion_forwardProp = p),
        Object.defineProperty(C, 'toString', {
          value: function () {
            return '.' + d;
          },
        }),
        (C.withComponent = function (N, k) {
          var G = n(N, ls({}, o, k, { shouldForwardProp: bg(C, k, !0) }));
          return G.apply(void 0, S);
        }),
        C
      );
    };
  },
  X1 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  gf = P1.bind(null);
X1.forEach(function (n) {
  gf[n] = gf(n);
});
function K1(n) {
  return n == null || Object.keys(n).length === 0;
}
function Ny(n) {
  const { styles: r, defaultTheme: o = {} } = n,
    i = typeof r == 'function' ? (c) => r(K1(c) ? o : c) : r;
  return H.jsx(H1, { styles: i });
}
function _y(n, r) {
  return gf(n, r);
}
function Q1(n, r) {
  Array.isArray(n.__emotion_styles) && (n.__emotion_styles = r(n.__emotion_styles));
}
const Sg = [];
function ja(n) {
  return ((Sg[0] = n), Oo(Sg));
}
var ef = { exports: {} },
  Jt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xg;
function Z1() {
  if (xg) return Jt;
  xg = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    h = Symbol.for('react.suspense_list'),
    b = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    A = Symbol.for('react.view_transition'),
    z = Symbol.for('react.client.reference');
  function T(C) {
    if (typeof C == 'object' && C !== null) {
      var N = C.$$typeof;
      switch (N) {
        case n:
          switch (((C = C.type), C)) {
            case o:
            case c:
            case i:
            case g:
            case h:
            case A:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case d:
                case p:
                case S:
                case b:
                  return C;
                case f:
                  return C;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  return (
    (Jt.ContextConsumer = f),
    (Jt.ContextProvider = d),
    (Jt.Element = n),
    (Jt.ForwardRef = p),
    (Jt.Fragment = o),
    (Jt.Lazy = S),
    (Jt.Memo = b),
    (Jt.Portal = r),
    (Jt.Profiler = c),
    (Jt.StrictMode = i),
    (Jt.Suspense = g),
    (Jt.SuspenseList = h),
    (Jt.isContextConsumer = function (C) {
      return T(C) === f;
    }),
    (Jt.isContextProvider = function (C) {
      return T(C) === d;
    }),
    (Jt.isElement = function (C) {
      return typeof C == 'object' && C !== null && C.$$typeof === n;
    }),
    (Jt.isForwardRef = function (C) {
      return T(C) === p;
    }),
    (Jt.isFragment = function (C) {
      return T(C) === o;
    }),
    (Jt.isLazy = function (C) {
      return T(C) === S;
    }),
    (Jt.isMemo = function (C) {
      return T(C) === b;
    }),
    (Jt.isPortal = function (C) {
      return T(C) === r;
    }),
    (Jt.isProfiler = function (C) {
      return T(C) === c;
    }),
    (Jt.isStrictMode = function (C) {
      return T(C) === i;
    }),
    (Jt.isSuspense = function (C) {
      return T(C) === g;
    }),
    (Jt.isSuspenseList = function (C) {
      return T(C) === h;
    }),
    (Jt.isValidElementType = function (C) {
      return (
        typeof C == 'string' ||
        typeof C == 'function' ||
        C === o ||
        C === c ||
        C === i ||
        C === g ||
        C === h ||
        (typeof C == 'object' &&
          C !== null &&
          (C.$$typeof === S ||
            C.$$typeof === b ||
            C.$$typeof === d ||
            C.$$typeof === f ||
            C.$$typeof === p ||
            C.$$typeof === z ||
            C.getModuleId !== void 0))
      );
    }),
    (Jt.typeOf = T),
    Jt
  );
}
var Cg;
function I1() {
  return (Cg || ((Cg = 1), (ef.exports = Z1())), ef.exports);
}
var By = I1();
function Hn(n) {
  if (typeof n != 'object' || n === null) return !1;
  const r = Object.getPrototypeOf(n);
  return (
    (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function Dy(n) {
  if (x.isValidElement(n) || By.isValidElementType(n) || !Hn(n)) return n;
  const r = {};
  return (
    Object.keys(n).forEach((o) => {
      r[o] = Dy(n[o]);
    }),
    r
  );
}
function Ye(n, r, o = { clone: !0 }) {
  const i = o.clone ? { ...n } : n;
  return (
    Hn(n) &&
      Hn(r) &&
      Object.keys(r).forEach((c) => {
        x.isValidElement(r[c]) || By.isValidElementType(r[c])
          ? (i[c] = r[c])
          : Hn(r[c]) && Object.prototype.hasOwnProperty.call(n, c) && Hn(n[c])
            ? (i[c] = Ye(n[c], r[c], o))
            : o.clone
              ? (i[c] = Hn(r[c]) ? Dy(r[c]) : r[c])
              : (i[c] = r[c]);
      }),
    i
  );
}
const F1 = (n) => {
  const r = Object.keys(n).map((o) => ({ key: o, val: n[o] })) || [];
  return (r.sort((o, i) => o.val - i.val), r.reduce((o, i) => ({ ...o, [i.key]: i.val }), {}));
};
function W1(n) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: o = 'px',
      step: i = 5,
      ...c
    } = n,
    f = F1(r),
    d = Object.keys(f);
  function p(A) {
    return `@media (min-width:${typeof r[A] == 'number' ? r[A] : A}${o})`;
  }
  function g(A) {
    return `@media (max-width:${(typeof r[A] == 'number' ? r[A] : A) - i / 100}${o})`;
  }
  function h(A, z) {
    const T = d.indexOf(z);
    return `@media (min-width:${typeof r[A] == 'number' ? r[A] : A}${o}) and (max-width:${(T !== -1 && typeof r[d[T]] == 'number' ? r[d[T]] : z) - i / 100}${o})`;
  }
  function b(A) {
    return d.indexOf(A) + 1 < d.length ? h(A, d[d.indexOf(A) + 1]) : p(A);
  }
  function S(A) {
    const z = d.indexOf(A);
    return z === 0
      ? p(d[1])
      : z === d.length - 1
        ? g(d[z])
        : h(A, d[d.indexOf(A) + 1]).replace('@media', '@media not all and');
  }
  return { keys: d, values: f, up: p, down: g, between: h, only: b, not: S, unit: o, ...c };
}
function Tg(n, r) {
  if (!n.containerQueries) return r;
  const o = Object.keys(r)
    .filter((i) => i.startsWith('@container'))
    .sort((i, c) => {
      const f = /min-width:\s*([0-9.]+)/;
      return +(i.match(f)?.[1] || 0) - +(c.match(f)?.[1] || 0);
    });
  return o.length
    ? o.reduce(
        (i, c) => {
          const f = r[c];
          return (delete i[c], (i[c] = f), i);
        },
        { ...r },
      )
    : r;
}
function J1(n, r) {
  return (
    r === '@' || (r.startsWith('@') && (n.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/)))
  );
}
function tS(n, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, i, c] = o,
    f = Number.isNaN(+i) ? i || 0 : +i;
  return n.containerQueries(c).up(f);
}
function eS(n) {
  const r = (f, d) => f.replace('@media', d ? `@container ${d}` : '@container');
  function o(f, d) {
    ((f.up = (...p) => r(n.breakpoints.up(...p), d)),
      (f.down = (...p) => r(n.breakpoints.down(...p), d)),
      (f.between = (...p) => r(n.breakpoints.between(...p), d)),
      (f.only = (...p) => r(n.breakpoints.only(...p), d)),
      (f.not = (...p) => {
        const g = r(n.breakpoints.not(...p), d);
        return g.includes('not all and')
          ? g
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : g;
      }));
  }
  const i = {},
    c = (f) => (o(i, f), i);
  return (o(c), { ...n, containerQueries: c });
}
const nS = { borderRadius: 4 };
function bo(n, r) {
  return r ? Ye(n, r, { clone: !1 }) : n;
}
const ys = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Eg = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (n) => `@media (min-width:${ys[n]}px)` },
  aS = {
    containerQueries: (n) => ({
      up: (r) => {
        let o = typeof r == 'number' ? r : ys[r] || r;
        return (
          typeof o == 'number' && (o = `${o}px`),
          n ? `@container ${n} (min-width:${o})` : `@container (min-width:${o})`
        );
      },
    }),
  };
function sa(n, r, o) {
  const i = n.theme || {};
  if (Array.isArray(r)) {
    const f = i.breakpoints || Eg;
    return r.reduce((d, p, g) => ((d[f.up(f.keys[g])] = o(r[g])), d), {});
  }
  if (typeof r == 'object') {
    const f = i.breakpoints || Eg;
    return Object.keys(r).reduce((d, p) => {
      if (J1(f.keys, p)) {
        const g = tS(i.containerQueries ? i : aS, p);
        g && (d[g] = o(r[p], p));
      } else if (Object.keys(f.values || ys).includes(p)) {
        const g = f.up(p);
        d[g] = o(r[p], p);
      } else {
        const g = p;
        d[g] = r[g];
      }
      return d;
    }, {});
  }
  return o(r);
}
function lS(n = {}) {
  return (
    n.keys?.reduce((o, i) => {
      const c = n.up(i);
      return ((o[c] = {}), o);
    }, {}) || {}
  );
}
function Rg(n, r) {
  return n.reduce((o, i) => {
    const c = o[i];
    return ((!c || Object.keys(c).length === 0) && delete o[i], o);
  }, r);
}
function ht(n) {
  if (typeof n != 'string') throw new Error(ia(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function vs(n, r, o = !0) {
  if (!r || typeof r != 'string') return null;
  if (n && n.vars && o) {
    const i = `vars.${r}`.split('.').reduce((c, f) => (c && c[f] ? c[f] : null), n);
    if (i != null) return i;
  }
  return r.split('.').reduce((i, c) => (i && i[c] != null ? i[c] : null), n);
}
function os(n, r, o, i = o) {
  let c;
  return (
    typeof n == 'function' ? (c = n(o)) : Array.isArray(n) ? (c = n[o] || i) : (c = vs(n, o) || i),
    r && (c = r(c, i, n)),
    c
  );
}
function Ee(n) {
  const { prop: r, cssProperty: o = n.prop, themeKey: i, transform: c } = n,
    f = (d) => {
      if (d[r] == null) return null;
      const p = d[r],
        g = d.theme,
        h = vs(g, i) || {};
      return sa(d, p, (S) => {
        let A = os(h, c, S);
        return (
          S === A &&
            typeof S == 'string' &&
            (A = os(h, c, `${r}${S === 'default' ? '' : ht(S)}`, S)),
          o === !1 ? A : { [o]: A }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [r]), f);
}
function rS(n) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = n(o)), r[o]);
}
const oS = { m: 'margin', p: 'padding' },
  iS = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  Ag = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  sS = rS((n) => {
    if (n.length > 2)
      if (Ag[n]) n = Ag[n];
      else return [n];
    const [r, o] = n.split(''),
      i = oS[r],
      c = iS[o] || '';
    return Array.isArray(c) ? c.map((f) => i + f) : [i + c];
  }),
  $f = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  qf = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...$f, ...qf];
function No(n, r, o, i) {
  const c = vs(n, r, !0) ?? o;
  return typeof c == 'number' || typeof c == 'string'
    ? (f) =>
        typeof f == 'string'
          ? f
          : typeof c == 'string'
            ? c.startsWith('var(') && f === 0
              ? 0
              : c.startsWith('var(') && f === 1
                ? c
                : `calc(${f} * ${c})`
            : c * f
    : Array.isArray(c)
      ? (f) => {
          if (typeof f == 'string') return f;
          const d = Math.abs(f),
            p = c[d];
          return f >= 0
            ? p
            : typeof p == 'number'
              ? -p
              : typeof p == 'string' && p.startsWith('var(')
                ? `calc(-1 * ${p})`
                : `-${p}`;
        }
      : typeof c == 'function'
        ? c
        : () => {};
}
function Gf(n) {
  return No(n, 'spacing', 8);
}
function _o(n, r) {
  return typeof r == 'string' || r == null ? r : n(r);
}
function uS(n, r) {
  return (o) => n.reduce((i, c) => ((i[c] = _o(r, o)), i), {});
}
function cS(n, r, o, i) {
  if (!r.includes(o)) return null;
  const c = sS(o),
    f = uS(c, i),
    d = n[o];
  return sa(n, d, f);
}
function Uy(n, r) {
  const o = Gf(n.theme);
  return Object.keys(n)
    .map((i) => cS(n, r, i, o))
    .reduce(bo, {});
}
function be(n) {
  return Uy(n, $f);
}
be.propTypes = {};
be.filterProps = $f;
function Se(n) {
  return Uy(n, qf);
}
Se.propTypes = {};
Se.filterProps = qf;
function ky(n = 8, r = Gf({ spacing: n })) {
  if (n.mui) return n;
  const o = (...i) =>
    (i.length === 0 ? [1] : i)
      .map((f) => {
        const d = r(f);
        return typeof d == 'number' ? `${d}px` : d;
      })
      .join(' ');
  return ((o.mui = !0), o);
}
function bs(...n) {
  const r = n.reduce(
      (i, c) => (
        c.filterProps.forEach((f) => {
          i[f] = c;
        }),
        i
      ),
      {},
    ),
    o = (i) => Object.keys(i).reduce((c, f) => (r[f] ? bo(c, r[f](i)) : c), {});
  return ((o.propTypes = {}), (o.filterProps = n.reduce((i, c) => i.concat(c.filterProps), [])), o);
}
function xn(n) {
  return typeof n != 'number' ? n : `${n}px solid`;
}
function Cn(n, r) {
  return Ee({ prop: n, themeKey: 'borders', transform: r });
}
const fS = Cn('border', xn),
  dS = Cn('borderTop', xn),
  pS = Cn('borderRight', xn),
  mS = Cn('borderBottom', xn),
  hS = Cn('borderLeft', xn),
  gS = Cn('borderColor'),
  yS = Cn('borderTopColor'),
  vS = Cn('borderRightColor'),
  bS = Cn('borderBottomColor'),
  SS = Cn('borderLeftColor'),
  xS = Cn('outline', xn),
  CS = Cn('outlineColor'),
  Ss = (n) => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
      const r = No(n.theme, 'shape.borderRadius', 4),
        o = (i) => ({ borderRadius: _o(r, i) });
      return sa(n, n.borderRadius, o);
    }
    return null;
  };
Ss.propTypes = {};
Ss.filterProps = ['borderRadius'];
bs(fS, dS, pS, mS, hS, gS, yS, vS, bS, SS, Ss, xS, CS);
const xs = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const r = No(n.theme, 'spacing', 8),
      o = (i) => ({ gap: _o(r, i) });
    return sa(n, n.gap, o);
  }
  return null;
};
xs.propTypes = {};
xs.filterProps = ['gap'];
const Cs = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const r = No(n.theme, 'spacing', 8),
      o = (i) => ({ columnGap: _o(r, i) });
    return sa(n, n.columnGap, o);
  }
  return null;
};
Cs.propTypes = {};
Cs.filterProps = ['columnGap'];
const Ts = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const r = No(n.theme, 'spacing', 8),
      o = (i) => ({ rowGap: _o(r, i) });
    return sa(n, n.rowGap, o);
  }
  return null;
};
Ts.propTypes = {};
Ts.filterProps = ['rowGap'];
const TS = Ee({ prop: 'gridColumn' }),
  ES = Ee({ prop: 'gridRow' }),
  RS = Ee({ prop: 'gridAutoFlow' }),
  AS = Ee({ prop: 'gridAutoColumns' }),
  MS = Ee({ prop: 'gridAutoRows' }),
  OS = Ee({ prop: 'gridTemplateColumns' }),
  zS = Ee({ prop: 'gridTemplateRows' }),
  wS = Ee({ prop: 'gridTemplateAreas' }),
  NS = Ee({ prop: 'gridArea' });
bs(xs, Cs, Ts, TS, ES, RS, AS, MS, OS, zS, wS, NS);
function or(n, r) {
  return r === 'grey' ? r : n;
}
const _S = Ee({ prop: 'color', themeKey: 'palette', transform: or }),
  BS = Ee({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: or }),
  DS = Ee({ prop: 'backgroundColor', themeKey: 'palette', transform: or });
bs(_S, BS, DS);
function sn(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const US = Ee({ prop: 'width', transform: sn }),
  Yf = (n) => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
      const r = (o) => {
        const i = n.theme?.breakpoints?.values?.[o] || ys[o];
        return i
          ? n.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${i}${n.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: sn(o) };
      };
      return sa(n, n.maxWidth, r);
    }
    return null;
  };
Yf.filterProps = ['maxWidth'];
const kS = Ee({ prop: 'minWidth', transform: sn }),
  jS = Ee({ prop: 'height', transform: sn }),
  LS = Ee({ prop: 'maxHeight', transform: sn }),
  HS = Ee({ prop: 'minHeight', transform: sn });
Ee({ prop: 'size', cssProperty: 'width', transform: sn });
Ee({ prop: 'size', cssProperty: 'height', transform: sn });
const $S = Ee({ prop: 'boxSizing' });
bs(US, Yf, kS, jS, LS, HS, $S);
const Bo = {
  border: { themeKey: 'borders', transform: xn },
  borderTop: { themeKey: 'borders', transform: xn },
  borderRight: { themeKey: 'borders', transform: xn },
  borderBottom: { themeKey: 'borders', transform: xn },
  borderLeft: { themeKey: 'borders', transform: xn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: xn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Ss },
  color: { themeKey: 'palette', transform: or },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: or },
  backgroundColor: { themeKey: 'palette', transform: or },
  p: { style: Se },
  pt: { style: Se },
  pr: { style: Se },
  pb: { style: Se },
  pl: { style: Se },
  px: { style: Se },
  py: { style: Se },
  padding: { style: Se },
  paddingTop: { style: Se },
  paddingRight: { style: Se },
  paddingBottom: { style: Se },
  paddingLeft: { style: Se },
  paddingX: { style: Se },
  paddingY: { style: Se },
  paddingInline: { style: Se },
  paddingInlineStart: { style: Se },
  paddingInlineEnd: { style: Se },
  paddingBlock: { style: Se },
  paddingBlockStart: { style: Se },
  paddingBlockEnd: { style: Se },
  m: { style: be },
  mt: { style: be },
  mr: { style: be },
  mb: { style: be },
  ml: { style: be },
  mx: { style: be },
  my: { style: be },
  margin: { style: be },
  marginTop: { style: be },
  marginRight: { style: be },
  marginBottom: { style: be },
  marginLeft: { style: be },
  marginX: { style: be },
  marginY: { style: be },
  marginInline: { style: be },
  marginInlineStart: { style: be },
  marginInlineEnd: { style: be },
  marginBlock: { style: be },
  marginBlockStart: { style: be },
  marginBlockEnd: { style: be },
  displayPrint: { cssProperty: !1, transform: (n) => ({ '@media print': { display: n } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: xs },
  rowGap: { style: Ts },
  columnGap: { style: Cs },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: sn },
  maxWidth: { style: Yf },
  minWidth: { transform: sn },
  height: { transform: sn },
  maxHeight: { transform: sn },
  minHeight: { transform: sn },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function qS(...n) {
  const r = n.reduce((i, c) => i.concat(Object.keys(c)), []),
    o = new Set(r);
  return n.every((i) => o.size === Object.keys(i).length);
}
function GS(n, r) {
  return typeof n == 'function' ? n(r) : n;
}
function YS() {
  function n(o, i, c, f) {
    const d = { [o]: i, theme: c },
      p = f[o];
    if (!p) return { [o]: i };
    const { cssProperty: g = o, themeKey: h, transform: b, style: S } = p;
    if (i == null) return null;
    if (h === 'typography' && i === 'inherit') return { [o]: i };
    const A = vs(c, h) || {};
    return S
      ? S(d)
      : sa(d, i, (T) => {
          let C = os(A, b, T);
          return (
            T === C &&
              typeof T == 'string' &&
              (C = os(A, b, `${o}${T === 'default' ? '' : ht(T)}`, T)),
            g === !1 ? C : { [g]: C }
          );
        });
  }
  function r(o) {
    const { sx: i, theme: c = {}, nested: f } = o || {};
    if (!i) return null;
    const d = c.unstable_sxConfig ?? Bo;
    function p(g) {
      let h = g;
      if (typeof g == 'function') h = g(c);
      else if (typeof g != 'object') return g;
      if (!h) return null;
      const b = lS(c.breakpoints),
        S = Object.keys(b);
      let A = b;
      return (
        Object.keys(h).forEach((z) => {
          const T = GS(h[z], c);
          if (T != null)
            if (typeof T == 'object')
              if (d[z]) A = bo(A, n(z, T, c, d));
              else {
                const C = sa({ theme: c }, T, (N) => ({ [z]: N }));
                qS(C, T) ? (A[z] = r({ sx: T, theme: c, nested: !0 })) : (A = bo(A, C));
              }
            else A = bo(A, n(z, T, c, d));
        }),
        !f && c.modularCssLayers ? { '@layer sx': Tg(c, Rg(S, A)) } : Tg(c, Rg(S, A))
      );
    }
    return Array.isArray(i) ? i.map(p) : p(i);
  }
  return r;
}
const La = YS();
La.filterProps = ['sx'];
function VS(n, r) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[n] || typeof o.getColorSchemeSelector != 'function') return {};
    let i = o.getColorSchemeSelector(n);
    return i === '&'
      ? r
      : ((i.includes('data-') || i.includes('.')) && (i = `*:where(${i.replace(/\s*&$/, '')}) &`),
        { [i]: r });
  }
  return o.palette.mode === n ? r : {};
}
function Es(n = {}, ...r) {
  const { breakpoints: o = {}, palette: i = {}, spacing: c, shape: f = {}, ...d } = n,
    p = W1(o),
    g = ky(c);
  let h = Ye(
    {
      breakpoints: p,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...i },
      spacing: g,
      shape: { ...nS, ...f },
    },
    d,
  );
  return (
    (h = eS(h)),
    (h.applyStyles = VS),
    (h = r.reduce((b, S) => Ye(b, S), h)),
    (h.unstable_sxConfig = { ...Bo, ...d?.unstable_sxConfig }),
    (h.unstable_sx = function (S) {
      return La({ sx: S, theme: this });
    }),
    h
  );
}
function PS(n) {
  return Object.keys(n).length === 0;
}
function Vf(n = null) {
  const r = x.useContext(zo);
  return !r || PS(r) ? n : r;
}
const XS = Es();
function Rs(n = XS) {
  return Vf(n);
}
function nf(n) {
  const r = ja(n);
  return n !== r && r.styles
    ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r)
    : n;
}
function jy({ styles: n, themeId: r, defaultTheme: o = {} }) {
  const i = Rs(o),
    c = (r && i[r]) || i;
  let f = typeof n == 'function' ? n(c) : n;
  return (
    c.modularCssLayers &&
      (Array.isArray(f) ? (f = f.map((d) => nf(typeof d == 'function' ? d(c) : d))) : (f = nf(f))),
    H.jsx(Ny, { styles: f })
  );
}
const KS = (n) => {
  const r = { systemProps: {}, otherProps: {} },
    o = n?.theme?.unstable_sxConfig ?? Bo;
  return (
    Object.keys(n).forEach((i) => {
      o[i] ? (r.systemProps[i] = n[i]) : (r.otherProps[i] = n[i]);
    }),
    r
  );
};
function Ly(n) {
  const { sx: r, ...o } = n,
    { systemProps: i, otherProps: c } = KS(o);
  let f;
  return (
    Array.isArray(r)
      ? (f = [i, ...r])
      : typeof r == 'function'
        ? (f = (...d) => {
            const p = r(...d);
            return Hn(p) ? { ...i, ...p } : i;
          })
        : (f = { ...i, ...r }),
    { ...c, sx: f }
  );
}
const Mg = (n) => n,
  QS = () => {
    let n = Mg;
    return {
      configure(r) {
        n = r;
      },
      generate(r) {
        return n(r);
      },
      reset() {
        n = Mg;
      },
    };
  },
  Hy = QS();
function $y(n) {
  var r,
    o,
    i = '';
  if (typeof n == 'string' || typeof n == 'number') i += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var c = n.length;
      for (r = 0; r < c; r++) n[r] && (o = $y(n[r])) && (i && (i += ' '), (i += o));
    } else for (o in n) n[o] && (i && (i += ' '), (i += o));
  return i;
}
function St() {
  for (var n, r, o = 0, i = '', c = arguments.length; o < c; o++)
    (n = arguments[o]) && (r = $y(n)) && (i && (i += ' '), (i += r));
  return i;
}
function ZS(n = {}) {
  const {
      themeId: r,
      defaultTheme: o,
      defaultClassName: i = 'MuiBox-root',
      generateClassName: c,
    } = n,
    f = _y('div', { shouldForwardProp: (p) => p !== 'theme' && p !== 'sx' && p !== 'as' })(La);
  return x.forwardRef(function (g, h) {
    const b = Rs(o),
      { className: S, component: A = 'div', ...z } = Ly(g);
    return H.jsx(f, {
      as: A,
      ref: h,
      className: St(S, c ? c(i) : i),
      theme: (r && b[r]) || b,
      ...z,
    });
  });
}
const IS = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function te(n, r, o = 'Mui') {
  const i = IS[r];
  return i ? `${o}-${i}` : `${Hy.generate(n)}-${r}`;
}
function ee(n, r, o = 'Mui') {
  const i = {};
  return (
    r.forEach((c) => {
      i[c] = te(n, c, o);
    }),
    i
  );
}
function qy(n) {
  const { variants: r, ...o } = n,
    i = { variants: r, style: ja(o), isProcessed: !0 };
  return (
    i.style === o ||
      (r &&
        r.forEach((c) => {
          typeof c.style != 'function' && (c.style = ja(c.style));
        })),
    i
  );
}
const FS = Es();
function af(n) {
  return n !== 'ownerState' && n !== 'theme' && n !== 'sx' && n !== 'as';
}
function cl(n, r) {
  return (
    r &&
      n &&
      typeof n == 'object' &&
      n.styles &&
      !n.styles.startsWith('@layer') &&
      (n.styles = `@layer ${r}{${String(n.styles)}}`),
    n
  );
}
function WS(n) {
  return n ? (r, o) => o[n] : null;
}
function JS(n, r, o) {
  n.theme = ex(n.theme) ? o : n.theme[r] || n.theme;
}
function ns(n, r, o) {
  const i = typeof r == 'function' ? r(n) : r;
  if (Array.isArray(i)) return i.flatMap((c) => ns(n, c, o));
  if (Array.isArray(i?.variants)) {
    let c;
    if (i.isProcessed) c = o ? cl(i.style, o) : i.style;
    else {
      const { variants: f, ...d } = i;
      c = o ? cl(ja(d), o) : d;
    }
    return Gy(n, i.variants, [c], o);
  }
  return i?.isProcessed ? (o ? cl(ja(i.style), o) : i.style) : o ? cl(ja(i), o) : i;
}
function Gy(n, r, o = [], i = void 0) {
  let c;
  t: for (let f = 0; f < r.length; f += 1) {
    const d = r[f];
    if (typeof d.props == 'function') {
      if (((c ??= { ...n, ...n.ownerState, ownerState: n.ownerState }), !d.props(c))) continue;
    } else
      for (const p in d.props)
        if (n[p] !== d.props[p] && n.ownerState?.[p] !== d.props[p]) continue t;
    typeof d.style == 'function'
      ? ((c ??= { ...n, ...n.ownerState, ownerState: n.ownerState }),
        o.push(i ? cl(ja(d.style(c)), i) : d.style(c)))
      : o.push(i ? cl(ja(d.style), i) : d.style);
  }
  return o;
}
function Yy(n = {}) {
  const {
    themeId: r,
    defaultTheme: o = FS,
    rootShouldForwardProp: i = af,
    slotShouldForwardProp: c = af,
  } = n;
  function f(p) {
    JS(p, r, o);
  }
  return (p, g = {}) => {
    Q1(p, (D) => D.filter((P) => P !== La));
    const {
        name: h,
        slot: b,
        skipVariantsResolver: S,
        skipSx: A,
        overridesResolver: z = WS(ax(b)),
        ...T
      } = g,
      C = (h && h.startsWith('Mui')) || b ? 'components' : 'custom',
      N = S !== void 0 ? S : (b && b !== 'Root' && b !== 'root') || !1,
      k = A || !1;
    let G = af;
    b === 'Root' || b === 'root' ? (G = i) : b ? (G = c) : nx(p) && (G = void 0);
    const B = _y(p, { shouldForwardProp: G, label: tx(), ...T }),
      w = (D) => {
        if (D.__emotion_real === D) return D;
        if (typeof D == 'function')
          return function (Q) {
            return ns(Q, D, Q.theme.modularCssLayers ? C : void 0);
          };
        if (Hn(D)) {
          const P = qy(D);
          return function (J) {
            return P.variants
              ? ns(J, P, J.theme.modularCssLayers ? C : void 0)
              : J.theme.modularCssLayers
                ? cl(P.style, C)
                : P.style;
          };
        }
        return D;
      },
      O = (...D) => {
        const P = [],
          Q = D.map(w),
          J = [];
        if (
          (P.push(f),
          h &&
            z &&
            J.push(function (F) {
              const V = F.theme.components?.[h]?.styleOverrides;
              if (!V) return null;
              const M = {};
              for (const K in V) M[K] = ns(F, V[K], F.theme.modularCssLayers ? 'theme' : void 0);
              return z(F, M);
            }),
          h &&
            !N &&
            J.push(function (F) {
              const V = F.theme?.components?.[h]?.variants;
              return V ? Gy(F, V, [], F.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          k || J.push(La),
          Array.isArray(Q[0]))
        ) {
          const v = Q.shift(),
            F = new Array(P.length).fill(''),
            Y = new Array(J.length).fill('');
          let V;
          ((V = [...F, ...v, ...Y]), (V.raw = [...F, ...v.raw, ...Y]), P.unshift(V));
        }
        const et = [...P, ...Q, ...J],
          at = B(...et);
        return (p.muiName && (at.muiName = p.muiName), at);
      };
    return (B.withConfig && (O.withConfig = B.withConfig), O);
  };
}
function tx(n, r) {
  return void 0;
}
function ex(n) {
  for (const r in n) return !1;
  return !0;
}
function nx(n) {
  return typeof n == 'string' && n.charCodeAt(0) > 96;
}
function ax(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1);
}
const lx = Yy();
function Ro(n, r, o = !1) {
  const i = { ...r };
  for (const c in n)
    if (Object.prototype.hasOwnProperty.call(n, c)) {
      const f = c;
      if (f === 'components' || f === 'slots') i[f] = { ...n[f], ...i[f] };
      else if (f === 'componentsProps' || f === 'slotProps') {
        const d = n[f],
          p = r[f];
        if (!p) i[f] = d || {};
        else if (!d) i[f] = p;
        else {
          i[f] = { ...p };
          for (const g in d)
            if (Object.prototype.hasOwnProperty.call(d, g)) {
              const h = g;
              i[f][h] = Ro(d[h], p[h], o);
            }
        }
      } else
        f === 'className' && o && r.className
          ? (i.className = St(n?.className, r?.className))
          : f === 'style' && o && r.style
            ? (i.style = { ...n?.style, ...r?.style })
            : i[f] === void 0 && (i[f] = n[f]);
    }
  return i;
}
function rx(n) {
  const { theme: r, name: o, props: i } = n;
  return !r || !r.components || !r.components[o] || !r.components[o].defaultProps
    ? i
    : Ro(r.components[o].defaultProps, i);
}
function ox({ props: n, name: r, defaultTheme: o, themeId: i }) {
  let c = Rs(o);
  return (i && (c = c[i] || c), rx({ theme: c, name: r, props: n }));
}
const ua = typeof window < 'u' ? x.useLayoutEffect : x.useEffect;
function ix(n, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n, o));
}
function Pf(n, r = 0, o = 1) {
  return ix(n, r, o);
}
function sx(n) {
  n = n.slice(1);
  const r = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, 'g');
  let o = n.match(r);
  return (
    o && o[0].length === 1 && (o = o.map((i) => i + i)),
    o
      ? `rgb${o.length === 4 ? 'a' : ''}(${o.map((i, c) => (c < 3 ? parseInt(i, 16) : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function Ha(n) {
  if (n.type) return n;
  if (n.charAt(0) === '#') return Ha(sx(n));
  const r = n.indexOf('('),
    o = n.substring(0, r);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(o)) throw new Error(ia(9, n));
  let i = n.substring(r + 1, n.length - 1),
    c;
  if (o === 'color') {
    if (
      ((i = i.split(' ')),
      (c = i.shift()),
      i.length === 4 && i[3].charAt(0) === '/' && (i[3] = i[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(c))
    )
      throw new Error(ia(10, c));
  } else i = i.split(',');
  return ((i = i.map((f) => parseFloat(f))), { type: o, values: i, colorSpace: c });
}
const ux = (n) => {
    const r = Ha(n);
    return r.values
      .slice(0, 3)
      .map((o, i) => (r.type.includes('hsl') && i !== 0 ? `${o}%` : o))
      .join(' ');
  },
  go = (n, r) => {
    try {
      return ux(n);
    } catch {
      return n;
    }
  };
function As(n) {
  const { type: r, colorSpace: o } = n;
  let { values: i } = n;
  return (
    r.includes('rgb')
      ? (i = i.map((c, f) => (f < 3 ? parseInt(c, 10) : c)))
      : r.includes('hsl') && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    r.includes('color') ? (i = `${o} ${i.join(' ')}`) : (i = `${i.join(', ')}`),
    `${r}(${i})`
  );
}
function Vy(n) {
  n = Ha(n);
  const { values: r } = n,
    o = r[0],
    i = r[1] / 100,
    c = r[2] / 100,
    f = i * Math.min(c, 1 - c),
    d = (h, b = (h + o / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let p = 'rgb';
  const g = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return (n.type === 'hsla' && ((p += 'a'), g.push(r[3])), As({ type: p, values: g }));
}
function yf(n) {
  n = Ha(n);
  let r = n.type === 'hsl' || n.type === 'hsla' ? Ha(Vy(n)).values : n.values;
  return (
    (r = r.map(
      (o) => (
        n.type !== 'color' && (o /= 255),
        o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function cx(n, r) {
  const o = yf(n),
    i = yf(r);
  return (Math.max(o, i) + 0.05) / (Math.min(o, i) + 0.05);
}
function is(n, r) {
  return (
    (n = Ha(n)),
    (r = Pf(r)),
    (n.type === 'rgb' || n.type === 'hsl') && (n.type += 'a'),
    n.type === 'color' ? (n.values[3] = `/${r}`) : (n.values[3] = r),
    As(n)
  );
}
function rl(n, r, o) {
  try {
    return is(n, r);
  } catch {
    return n;
  }
}
function Ms(n, r) {
  if (((n = Ha(n)), (r = Pf(r)), n.type.includes('hsl'))) n.values[2] *= 1 - r;
  else if (n.type.includes('rgb') || n.type.includes('color'))
    for (let o = 0; o < 3; o += 1) n.values[o] *= 1 - r;
  return As(n);
}
function Pt(n, r, o) {
  try {
    return Ms(n, r);
  } catch {
    return n;
  }
}
function Os(n, r) {
  if (((n = Ha(n)), (r = Pf(r)), n.type.includes('hsl'))) n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes('rgb'))
    for (let o = 0; o < 3; o += 1) n.values[o] += (255 - n.values[o]) * r;
  else if (n.type.includes('color'))
    for (let o = 0; o < 3; o += 1) n.values[o] += (1 - n.values[o]) * r;
  return As(n);
}
function Xt(n, r, o) {
  try {
    return Os(n, r);
  } catch {
    return n;
  }
}
function fx(n, r = 0.15) {
  return yf(n) > 0.5 ? Ms(n, r) : Os(n, r);
}
function Ki(n, r, o) {
  try {
    return fx(n, r);
  } catch {
    return n;
  }
}
const Py = x.createContext(null);
function Xf() {
  return x.useContext(Py);
}
const dx = typeof Symbol == 'function' && Symbol.for,
  px = dx ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function mx(n, r) {
  return typeof r == 'function' ? r(n) : { ...n, ...r };
}
function hx(n) {
  const { children: r, theme: o } = n,
    i = Xf(),
    c = x.useMemo(() => {
      const f = i === null ? { ...o } : mx(i, o);
      return (f != null && (f[px] = i !== null), f);
    }, [o, i]);
  return H.jsx(Py.Provider, { value: c, children: r });
}
const Xy = x.createContext();
function gx({ value: n, ...r }) {
  return H.jsx(Xy.Provider, { value: n ?? !0, ...r });
}
const yx = () => x.useContext(Xy) ?? !1,
  Ky = x.createContext(void 0);
function vx({ value: n, children: r }) {
  return H.jsx(Ky.Provider, { value: n, children: r });
}
function bx(n) {
  const { theme: r, name: o, props: i } = n;
  if (!r || !r.components || !r.components[o]) return i;
  const c = r.components[o];
  return c.defaultProps
    ? Ro(c.defaultProps, i, r.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? Ro(c, i, r.components.mergeClassNameAndStyle)
      : i;
}
function Sx({ props: n, name: r }) {
  const o = x.useContext(Ky);
  return bx({ props: n, name: r, theme: { components: o } });
}
let Og = 0;
function xx(n) {
  const [r, o] = x.useState(n),
    i = n || r;
  return (
    x.useEffect(() => {
      r == null && ((Og += 1), o(`mui-${Og}`));
    }, [r]),
    i
  );
}
const Cx = { ...df },
  zg = Cx.useId;
function Do(n) {
  if (zg !== void 0) {
    const r = zg();
    return n ?? r;
  }
  return xx(n);
}
function Tx(n) {
  const r = Vf(),
    o = Do() || '',
    { modularCssLayers: i } = n;
  let c = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx';
  return (
    !i || r !== null
      ? (c = '')
      : typeof i == 'string'
        ? (c = i.replace(/mui(?!\.)/g, c))
        : (c = `@layer ${c};`),
    ua(() => {
      const f = document.querySelector('head');
      if (!f) return;
      const d = f.firstChild;
      if (c) {
        if (
          d &&
          d.hasAttribute?.('data-mui-layer-order') &&
          d.getAttribute('data-mui-layer-order') === o
        )
          return;
        const p = document.createElement('style');
        (p.setAttribute('data-mui-layer-order', o), (p.textContent = c), f.prepend(p));
      } else f.querySelector(`style[data-mui-layer-order="${o}"]`)?.remove();
    }, [c, o]),
    c ? H.jsx(jy, { styles: c }) : null
  );
}
const wg = {};
function Ng(n, r, o, i = !1) {
  return x.useMemo(() => {
    const c = (n && r[n]) || r;
    if (typeof o == 'function') {
      const f = o(c),
        d = n ? { ...r, [n]: f } : f;
      return i ? () => d : d;
    }
    return n ? { ...r, [n]: o } : { ...r, ...o };
  }, [n, r, o, i]);
}
function Qy(n) {
  const { children: r, theme: o, themeId: i } = n,
    c = Vf(wg),
    f = Xf() || wg,
    d = Ng(i, c, o),
    p = Ng(i, f, o, !0),
    g = (i ? d[i] : d).direction === 'rtl',
    h = Tx(d);
  return H.jsx(hx, {
    theme: p,
    children: H.jsx(zo.Provider, {
      value: d,
      children: H.jsx(gx, {
        value: g,
        children: H.jsxs(vx, { value: i ? d[i].components : d.components, children: [h, r] }),
      }),
    }),
  });
}
const _g = { theme: void 0 };
function Ex(n) {
  let r, o;
  return function (c) {
    let f = r;
    return (
      (f === void 0 || c.theme !== o) &&
        ((_g.theme = c.theme), (f = qy(n(_g))), (r = f), (o = c.theme)),
      f
    );
  };
}
const Kf = 'mode',
  Qf = 'color-scheme',
  Rx = 'data-color-scheme';
function Ax(n) {
  const {
    defaultMode: r = 'system',
    defaultLightColorScheme: o = 'light',
    defaultDarkColorScheme: i = 'dark',
    modeStorageKey: c = Kf,
    colorSchemeStorageKey: f = Qf,
    attribute: d = Rx,
    colorSchemeNode: p = 'document.documentElement',
    nonce: g,
  } = n || {};
  let h = '',
    b = d;
  if ((d === 'class' && (b = '.%s'), d === 'data' && (b = '[data-%s]'), b.startsWith('.'))) {
    const A = b.substring(1);
    h += `${p}.classList.remove('${A}'.replace('%s', light), '${A}'.replace('%s', dark));
      ${p}.classList.add('${A}'.replace('%s', colorScheme));`;
  }
  const S = b.match(/\[([^[\]]+)\]/);
  if (S) {
    const [A, z] = S[1].split('=');
    (z ||
      (h += `${p}.removeAttribute('${A}'.replace('%s', light));
      ${p}.removeAttribute('${A}'.replace('%s', dark));`),
      (h += `
      ${p}.setAttribute('${A}'.replace('%s', colorScheme), ${z ? `${z}.replace('%s', colorScheme)` : '""'});`));
  } else h += `${p}.setAttribute('${b}', colorScheme);`;
  return H.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > 'u' ? g : '',
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${i}';
  const light = localStorage.getItem('${f}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`,
      },
    },
    'mui-color-scheme-init',
  );
}
function Mx() {}
const Ox = ({ key: n, storageWindow: r }) => (
  !r && typeof window < 'u' && (r = window),
  {
    get(o) {
      if (typeof window > 'u') return;
      if (!r) return o;
      let i;
      try {
        i = r.localStorage.getItem(n);
      } catch {}
      return i || o;
    },
    set: (o) => {
      if (r)
        try {
          r.localStorage.setItem(n, o);
        } catch {}
    },
    subscribe: (o) => {
      if (!r) return Mx;
      const i = (c) => {
        const f = c.newValue;
        c.key === n && o(f);
      };
      return (
        r.addEventListener('storage', i),
        () => {
          r.removeEventListener('storage', i);
        }
      );
    },
  }
);
function lf() {}
function Bg(n) {
  if (typeof window < 'u' && typeof window.matchMedia == 'function' && n === 'system')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function Zy(n, r) {
  if (n.mode === 'light' || (n.mode === 'system' && n.systemMode === 'light')) return r('light');
  if (n.mode === 'dark' || (n.mode === 'system' && n.systemMode === 'dark')) return r('dark');
}
function zx(n) {
  return Zy(n, (r) => {
    if (r === 'light') return n.lightColorScheme;
    if (r === 'dark') return n.darkColorScheme;
  });
}
function wx(n) {
  const {
      defaultMode: r = 'light',
      defaultLightColorScheme: o,
      defaultDarkColorScheme: i,
      supportedColorSchemes: c = [],
      modeStorageKey: f = Kf,
      colorSchemeStorageKey: d = Qf,
      storageWindow: p = typeof window > 'u' ? void 0 : window,
      storageManager: g = Ox,
      noSsr: h = !1,
    } = n,
    b = c.join(','),
    S = c.length > 1,
    A = x.useMemo(() => g?.({ key: f, storageWindow: p }), [g, f, p]),
    z = x.useMemo(() => g?.({ key: `${d}-light`, storageWindow: p }), [g, d, p]),
    T = x.useMemo(() => g?.({ key: `${d}-dark`, storageWindow: p }), [g, d, p]),
    [C, N] = x.useState(() => {
      const Q = A?.get(r) || r,
        J = z?.get(o) || o,
        et = T?.get(i) || i;
      return { mode: Q, systemMode: Bg(Q), lightColorScheme: J, darkColorScheme: et };
    }),
    [k, G] = x.useState(h || !S);
  x.useEffect(() => {
    G(!0);
  }, []);
  const B = zx(C),
    w = x.useCallback(
      (Q) => {
        N((J) => {
          if (Q === J.mode) return J;
          const et = Q ?? r;
          return (A?.set(et), { ...J, mode: et, systemMode: Bg(et) });
        });
      },
      [A, r],
    ),
    O = x.useCallback(
      (Q) => {
        Q
          ? typeof Q == 'string'
            ? Q && !b.includes(Q)
              ? console.error(`\`${Q}\` does not exist in \`theme.colorSchemes\`.`)
              : N((J) => {
                  const et = { ...J };
                  return (
                    Zy(J, (at) => {
                      (at === 'light' && (z?.set(Q), (et.lightColorScheme = Q)),
                        at === 'dark' && (T?.set(Q), (et.darkColorScheme = Q)));
                    }),
                    et
                  );
                })
            : N((J) => {
                const et = { ...J },
                  at = Q.light === null ? o : Q.light,
                  v = Q.dark === null ? i : Q.dark;
                return (
                  at &&
                    (b.includes(at)
                      ? ((et.lightColorScheme = at), z?.set(at))
                      : console.error(`\`${at}\` does not exist in \`theme.colorSchemes\`.`)),
                  v &&
                    (b.includes(v)
                      ? ((et.darkColorScheme = v), T?.set(v))
                      : console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`)),
                  et
                );
              })
          : N((J) => (z?.set(o), T?.set(i), { ...J, lightColorScheme: o, darkColorScheme: i }));
      },
      [b, z, T, o, i],
    ),
    D = x.useCallback(
      (Q) => {
        C.mode === 'system' &&
          N((J) => {
            const et = Q?.matches ? 'dark' : 'light';
            return J.systemMode === et ? J : { ...J, systemMode: et };
          });
      },
      [C.mode],
    ),
    P = x.useRef(D);
  return (
    (P.current = D),
    x.useEffect(() => {
      if (typeof window.matchMedia != 'function' || !S) return;
      const Q = (...et) => P.current(...et),
        J = window.matchMedia('(prefers-color-scheme: dark)');
      return (
        J.addListener(Q),
        Q(J),
        () => {
          J.removeListener(Q);
        }
      );
    }, [S]),
    x.useEffect(() => {
      if (S) {
        const Q =
            A?.subscribe((at) => {
              (!at || ['light', 'dark', 'system'].includes(at)) && w(at || r);
            }) || lf,
          J =
            z?.subscribe((at) => {
              (!at || b.match(at)) && O({ light: at });
            }) || lf,
          et =
            T?.subscribe((at) => {
              (!at || b.match(at)) && O({ dark: at });
            }) || lf;
        return () => {
          (Q(), J(), et());
        };
      }
    }, [O, w, b, r, p, S, A, z, T]),
    {
      ...C,
      mode: k ? C.mode : void 0,
      systemMode: k ? C.systemMode : void 0,
      colorScheme: k ? B : void 0,
      setMode: w,
      setColorScheme: O,
    }
  );
}
const Nx =
  '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function _x(n) {
  const {
      themeId: r,
      theme: o = {},
      modeStorageKey: i = Kf,
      colorSchemeStorageKey: c = Qf,
      disableTransitionOnChange: f = !1,
      defaultColorScheme: d,
      resolveTheme: p,
    } = n,
    g = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    h = x.createContext(void 0),
    b = () => x.useContext(h) || g,
    S = {},
    A = {};
  function z(k) {
    const {
        children: G,
        theme: B,
        modeStorageKey: w = i,
        colorSchemeStorageKey: O = c,
        disableTransitionOnChange: D = f,
        storageManager: P,
        storageWindow: Q = typeof window > 'u' ? void 0 : window,
        documentNode: J = typeof document > 'u' ? void 0 : document,
        colorSchemeNode: et = typeof document > 'u' ? void 0 : document.documentElement,
        disableNestedContext: at = !1,
        disableStyleSheetGeneration: v = !1,
        defaultMode: F = 'system',
        forceThemeRerender: Y = !1,
        noSsr: V,
      } = k,
      M = x.useRef(!1),
      K = Xf(),
      ot = x.useContext(h),
      nt = !!ot && !at,
      E = x.useMemo(() => B || (typeof o == 'function' ? o() : o), [B]),
      X = E[r],
      rt = X || E,
      { colorSchemes: lt = S, components: it = A, cssVarPrefix: ct } = rt,
      ut = Object.keys(lt)
        .filter((ue) => !!lt[ue])
        .join(','),
      At = x.useMemo(() => ut.split(','), [ut]),
      xt = typeof d == 'string' ? d : d.light,
      Nt = typeof d == 'string' ? d : d.dark,
      bt = lt[xt] && lt[Nt] ? F : lt[rt.defaultColorScheme]?.palette?.mode || rt.palette?.mode,
      {
        mode: Mt,
        setMode: _t,
        systemMode: he,
        lightColorScheme: Ct,
        darkColorScheme: qt,
        colorScheme: De,
        setColorScheme: Gt,
      } = wx({
        supportedColorSchemes: At,
        defaultLightColorScheme: xt,
        defaultDarkColorScheme: Nt,
        modeStorageKey: w,
        colorSchemeStorageKey: O,
        defaultMode: bt,
        storageManager: P,
        storageWindow: Q,
        noSsr: V,
      });
    let se = Mt,
      oe = De;
    nt && ((se = ot.mode), (oe = ot.colorScheme));
    let de = oe || rt.defaultColorScheme;
    rt.vars && !Y && (de = rt.defaultColorScheme);
    const Kt = x.useMemo(() => {
        const ue = rt.generateThemeVars?.() || rt.vars,
          Tt = { ...rt, components: it, colorSchemes: lt, cssVarPrefix: ct, vars: ue };
        if ((typeof Tt.generateSpacing == 'function' && (Tt.spacing = Tt.generateSpacing()), de)) {
          const Qt = lt[de];
          Qt &&
            typeof Qt == 'object' &&
            Object.keys(Qt).forEach((Ut) => {
              Qt[Ut] && typeof Qt[Ut] == 'object'
                ? (Tt[Ut] = { ...Tt[Ut], ...Qt[Ut] })
                : (Tt[Ut] = Qt[Ut]);
            });
        }
        return p ? p(Tt) : Tt;
      }, [rt, de, it, lt, ct]),
      dt = rt.colorSchemeSelector;
    (ua(() => {
      if (oe && et && dt && dt !== 'media') {
        const ue = dt;
        let Tt = dt;
        if (
          (ue === 'class' && (Tt = '.%s'),
          ue === 'data' && (Tt = '[data-%s]'),
          ue?.startsWith('data-') && !ue.includes('%s') && (Tt = `[${ue}="%s"]`),
          Tt.startsWith('.'))
        )
          (et.classList.remove(...At.map((Qt) => Tt.substring(1).replace('%s', Qt))),
            et.classList.add(Tt.substring(1).replace('%s', oe)));
        else {
          const Qt = Tt.replace('%s', oe).match(/\[([^\]]+)\]/);
          if (Qt) {
            const [Ut, Ve] = Qt[1].split('=');
            (Ve ||
              At.forEach((Zt) => {
                et.removeAttribute(Ut.replace(oe, Zt));
              }),
              et.setAttribute(Ut, Ve ? Ve.replace(/"|'/g, '') : ''));
          } else et.setAttribute(Tt, oe);
        }
      }
    }, [oe, dt, et, At]),
      x.useEffect(() => {
        let ue;
        if (D && M.current && J) {
          const Tt = J.createElement('style');
          (Tt.appendChild(J.createTextNode(Nx)),
            J.head.appendChild(Tt),
            window.getComputedStyle(J.body),
            (ue = setTimeout(() => {
              J.head.removeChild(Tt);
            }, 1)));
        }
        return () => {
          clearTimeout(ue);
        };
      }, [oe, D, J]),
      x.useEffect(
        () => (
          (M.current = !0),
          () => {
            M.current = !1;
          }
        ),
        [],
      ));
    const Je = x.useMemo(
      () => ({
        allColorSchemes: At,
        colorScheme: oe,
        darkColorScheme: qt,
        lightColorScheme: Ct,
        mode: se,
        setColorScheme: Gt,
        setMode: _t,
        systemMode: he,
      }),
      [At, oe, qt, Ct, se, Gt, _t, he, Kt.colorSchemeSelector],
    );
    let ge = !0;
    (v || rt.cssVariables === !1 || (nt && K?.cssVarPrefix === ct)) && (ge = !1);
    const Tn = H.jsxs(x.Fragment, {
      children: [
        H.jsx(Qy, { themeId: X ? r : void 0, theme: Kt, children: G }),
        ge && H.jsx(Ny, { styles: Kt.generateStyleSheets?.() || [] }),
      ],
    });
    return nt ? Tn : H.jsx(h.Provider, { value: Je, children: Tn });
  }
  const T = typeof d == 'string' ? d : d.light,
    C = typeof d == 'string' ? d : d.dark;
  return {
    CssVarsProvider: z,
    useColorScheme: b,
    getInitColorSchemeScript: (k) =>
      Ax({
        colorSchemeStorageKey: c,
        defaultLightColorScheme: T,
        defaultDarkColorScheme: C,
        modeStorageKey: i,
        ...k,
      }),
  };
}
function Bx(n = '') {
  function r(...i) {
    if (!i.length) return '';
    const c = i[0];
    return typeof c == 'string' &&
      !c.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${n ? `${n}-` : ''}${c}${r(...i.slice(1))})`
      : `, ${c}`;
  }
  return (i, ...c) => `var(--${n ? `${n}-` : ''}${i}${r(...c)})`;
}
const Dg = (n, r, o, i = []) => {
    let c = n;
    r.forEach((f, d) => {
      d === r.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = o)
          : c && typeof c == 'object' && (c[f] = o)
        : c && typeof c == 'object' && (c[f] || (c[f] = i.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  Dx = (n, r, o) => {
    function i(c, f = [], d = []) {
      Object.entries(c).forEach(([p, g]) => {
        (!o || (o && !o([...f, p]))) &&
          g != null &&
          (typeof g == 'object' && Object.keys(g).length > 0
            ? i(g, [...f, p], Array.isArray(g) ? [...d, p] : d)
            : r([...f, p], g, d));
      });
    }
    i(n);
  },
  Ux = (n, r) =>
    typeof r == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((i) => n.includes(i)) ||
        n[n.length - 1].toLowerCase().includes('opacity')
        ? r
        : `${r}px`
      : r;
function rf(n, r) {
  const { prefix: o, shouldSkipGeneratingVar: i } = r || {},
    c = {},
    f = {},
    d = {};
  return (
    Dx(
      n,
      (p, g, h) => {
        if ((typeof g == 'string' || typeof g == 'number') && (!i || !i(p, g))) {
          const b = `--${o ? `${o}-` : ''}${p.join('-')}`,
            S = Ux(p, g);
          (Object.assign(c, { [b]: S }), Dg(f, p, `var(${b})`, h), Dg(d, p, `var(${b}, ${S})`, h));
        }
      },
      (p) => p[0] === 'vars',
    ),
    { css: c, vars: f, varsWithDefaults: d }
  );
}
function kx(n, r = {}) {
  const {
      getSelector: o = k,
      disableCssColorScheme: i,
      colorSchemeSelector: c,
      enableContrastVars: f,
    } = r,
    { colorSchemes: d = {}, components: p, defaultColorScheme: g = 'light', ...h } = n,
    { vars: b, css: S, varsWithDefaults: A } = rf(h, r);
  let z = A;
  const T = {},
    { [g]: C, ...N } = d;
  if (
    (Object.entries(N || {}).forEach(([w, O]) => {
      const { vars: D, css: P, varsWithDefaults: Q } = rf(O, r);
      ((z = Ye(z, Q)), (T[w] = { css: P, vars: D }));
    }),
    C)
  ) {
    const { css: w, vars: O, varsWithDefaults: D } = rf(C, r);
    ((z = Ye(z, D)), (T[g] = { css: w, vars: O }));
  }
  function k(w, O) {
    let D = c;
    if (
      (c === 'class' && (D = '.%s'),
      c === 'data' && (D = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (D = `[${c}="%s"]`),
      w)
    ) {
      if (D === 'media')
        return n.defaultColorScheme === w
          ? ':root'
          : { [`@media (prefers-color-scheme: ${d[w]?.palette?.mode || w})`]: { ':root': O } };
      if (D)
        return n.defaultColorScheme === w
          ? `:root, ${D.replace('%s', String(w))}`
          : D.replace('%s', String(w));
    }
    return ':root';
  }
  return {
    vars: z,
    generateThemeVars: () => {
      let w = { ...b };
      return (
        Object.entries(T).forEach(([, { vars: O }]) => {
          w = Ye(w, O);
        }),
        w
      );
    },
    generateStyleSheets: () => {
      const w = [],
        O = n.defaultColorScheme || 'light';
      function D(J, et) {
        Object.keys(et).length && w.push(typeof J == 'string' ? { [J]: { ...et } } : J);
      }
      D(o(void 0, { ...S }), S);
      const { [O]: P, ...Q } = T;
      if (P) {
        const { css: J } = P,
          et = d[O]?.palette?.mode,
          at = !i && et ? { colorScheme: et, ...J } : { ...J };
        D(o(O, { ...at }), at);
      }
      return (
        Object.entries(Q).forEach(([J, { css: et }]) => {
          const at = d[J]?.palette?.mode,
            v = !i && at ? { colorScheme: at, ...et } : { ...et };
          D(o(J, { ...v }), v);
        }),
        f &&
          w.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        w
      );
    },
  };
}
function jx(n) {
  return function (o) {
    return n === 'media'
      ? `@media (prefers-color-scheme: ${o})`
      : n
        ? n.startsWith('data-') && !n.includes('%s')
          ? `[${n}="${o}"] &`
          : n === 'class'
            ? `.${o} &`
            : n === 'data'
              ? `[data-${o}] &`
              : `${n.replace('%s', o)} &`
        : '&';
  };
}
function ne(n, r, o = void 0) {
  const i = {};
  for (const c in n) {
    const f = n[c];
    let d = '',
      p = !0;
    for (let g = 0; g < f.length; g += 1) {
      const h = f[g];
      h && ((d += (p === !0 ? '' : ' ') + r(h)), (p = !1), o && o[h] && (d += ' ' + o[h]));
    }
    i[c] = d;
  }
  return i;
}
const Lx = Es(),
  Hx = lx('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        r[`maxWidth${ht(String(o.maxWidth))}`],
        o.fixed && r.fixed,
        o.disableGutters && r.disableGutters,
      ];
    },
  }),
  $x = (n) => ox({ props: n, name: 'MuiContainer', defaultTheme: Lx }),
  qx = (n, r) => {
    const o = (g) => te(r, g),
      { classes: i, fixed: c, disableGutters: f, maxWidth: d } = n,
      p = { root: ['root', d && `maxWidth${ht(String(d))}`, c && 'fixed', f && 'disableGutters'] };
    return ne(p, o, i);
  };
function Gx(n = {}) {
  const {
      createStyledComponent: r = Hx,
      useThemeProps: o = $x,
      componentName: i = 'MuiContainer',
    } = n,
    c = r(
      ({ theme: d, ownerState: p }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!p.disableGutters && {
          paddingLeft: d.spacing(2),
          paddingRight: d.spacing(2),
          [d.breakpoints.up('sm')]: { paddingLeft: d.spacing(3), paddingRight: d.spacing(3) },
        }),
      }),
      ({ theme: d, ownerState: p }) =>
        p.fixed &&
        Object.keys(d.breakpoints.values).reduce((g, h) => {
          const b = h,
            S = d.breakpoints.values[b];
          return (
            S !== 0 && (g[d.breakpoints.up(b)] = { maxWidth: `${S}${d.breakpoints.unit}` }),
            g
          );
        }, {}),
      ({ theme: d, ownerState: p }) => ({
        ...(p.maxWidth === 'xs' && {
          [d.breakpoints.up('xs')]: { maxWidth: Math.max(d.breakpoints.values.xs, 444) },
        }),
        ...(p.maxWidth &&
          p.maxWidth !== 'xs' && {
            [d.breakpoints.up(p.maxWidth)]: {
              maxWidth: `${d.breakpoints.values[p.maxWidth]}${d.breakpoints.unit}`,
            },
          }),
      }),
    );
  return x.forwardRef(function (p, g) {
    const h = o(p),
      {
        className: b,
        component: S = 'div',
        disableGutters: A = !1,
        fixed: z = !1,
        maxWidth: T = 'lg',
        classes: C,
        ...N
      } = h,
      k = { ...h, component: S, disableGutters: A, fixed: z, maxWidth: T },
      G = qx(k, i);
    return H.jsx(c, { as: S, ownerState: k, className: St(G.root, b), ref: g, ...N });
  });
}
function of(n, r) {
  return (
    x.isValidElement(n) && r.indexOf(n.type.muiName ?? n.type?._payload?.value?.muiName) !== -1
  );
}
const Ao = { black: '#000', white: '#fff' },
  Yx = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  Wl = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  Jl = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  fo = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  tr = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  er = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  nr = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  };
function Iy() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Ao.white, default: Ao.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const Fy = Iy();
function Wy() {
  return {
    text: {
      primary: Ao.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Ao.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const vf = Wy();
function Ug(n, r, o, i) {
  const c = i.light || i,
    f = i.dark || i * 1.5;
  n[r] ||
    (n.hasOwnProperty(o)
      ? (n[r] = n[o])
      : r === 'light'
        ? (n.light = Os(n.main, c))
        : r === 'dark' && (n.dark = Ms(n.main, f)));
}
function kg(n, r, o, i, c) {
  const f = c.light || c,
    d = c.dark || c * 1.5;
  r[o] ||
    (r.hasOwnProperty(i)
      ? (r[o] = r[i])
      : o === 'light'
        ? (r.light = `color-mix(in ${n}, ${r.main}, #fff ${(f * 100).toFixed(0)}%)`)
        : o === 'dark' &&
          (r.dark = `color-mix(in ${n}, ${r.main}, #000 ${(d * 100).toFixed(0)}%)`));
}
function Vx(n = 'light') {
  return n === 'dark'
    ? { main: tr[200], light: tr[50], dark: tr[400] }
    : { main: tr[700], light: tr[400], dark: tr[800] };
}
function Px(n = 'light') {
  return n === 'dark'
    ? { main: Wl[200], light: Wl[50], dark: Wl[400] }
    : { main: Wl[500], light: Wl[300], dark: Wl[700] };
}
function Xx(n = 'light') {
  return n === 'dark'
    ? { main: Jl[500], light: Jl[300], dark: Jl[700] }
    : { main: Jl[700], light: Jl[400], dark: Jl[800] };
}
function Kx(n = 'light') {
  return n === 'dark'
    ? { main: er[400], light: er[300], dark: er[700] }
    : { main: er[700], light: er[500], dark: er[900] };
}
function Qx(n = 'light') {
  return n === 'dark'
    ? { main: nr[400], light: nr[300], dark: nr[700] }
    : { main: nr[800], light: nr[500], dark: nr[900] };
}
function Zx(n = 'light') {
  return n === 'dark'
    ? { main: fo[400], light: fo[300], dark: fo[700] }
    : { main: '#ed6c02', light: fo[500], dark: fo[900] };
}
function Ix(n) {
  return `oklch(from ${n} var(--__l) 0 h / var(--__a))`;
}
function Zf(n) {
  const {
      mode: r = 'light',
      contrastThreshold: o = 3,
      tonalOffset: i = 0.2,
      colorSpace: c,
      ...f
    } = n,
    d = n.primary || Vx(r),
    p = n.secondary || Px(r),
    g = n.error || Xx(r),
    h = n.info || Kx(r),
    b = n.success || Qx(r),
    S = n.warning || Zx(r);
  function A(N) {
    return c ? Ix(N) : cx(N, vf.text.primary) >= o ? vf.text.primary : Fy.text.primary;
  }
  const z = ({
    color: N,
    name: k,
    mainShade: G = 500,
    lightShade: B = 300,
    darkShade: w = 700,
  }) => {
    if (((N = { ...N }), !N.main && N[G] && (N.main = N[G]), !N.hasOwnProperty('main')))
      throw new Error(ia(11, k ? ` (${k})` : '', G));
    if (typeof N.main != 'string')
      throw new Error(ia(12, k ? ` (${k})` : '', JSON.stringify(N.main)));
    return (
      c
        ? (kg(c, N, 'light', B, i), kg(c, N, 'dark', w, i))
        : (Ug(N, 'light', B, i), Ug(N, 'dark', w, i)),
      N.contrastText || (N.contrastText = A(N.main)),
      N
    );
  };
  let T;
  return (
    r === 'light' ? (T = Iy()) : r === 'dark' && (T = Wy()),
    Ye(
      {
        common: { ...Ao },
        mode: r,
        primary: z({ color: d, name: 'primary' }),
        secondary: z({
          color: p,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: z({ color: g, name: 'error' }),
        warning: z({ color: S, name: 'warning' }),
        info: z({ color: h, name: 'info' }),
        success: z({ color: b, name: 'success' }),
        grey: Yx,
        contrastThreshold: o,
        getContrastText: A,
        augmentColor: z,
        tonalOffset: i,
        ...T,
      },
      f,
    )
  );
}
function Fx(n) {
  const r = {};
  return (
    Object.entries(n).forEach((i) => {
      const [c, f] = i;
      typeof f == 'object' &&
        (r[c] =
          `${f.fontStyle ? `${f.fontStyle} ` : ''}${f.fontVariant ? `${f.fontVariant} ` : ''}${f.fontWeight ? `${f.fontWeight} ` : ''}${f.fontStretch ? `${f.fontStretch} ` : ''}${f.fontSize || ''}${f.lineHeight ? `/${f.lineHeight} ` : ''}${f.fontFamily || ''}`);
    }),
    r
  );
}
function Wx(n, r) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [n.up('sm')]: { minHeight: 64 },
    },
    ...r,
  };
}
function Jx(n) {
  return Math.round(n * 1e5) / 1e5;
}
const jg = { textTransform: 'uppercase' },
  Lg = '"Roboto", "Helvetica", "Arial", sans-serif';
function Jy(n, r) {
  const {
      fontFamily: o = Lg,
      fontSize: i = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: d = 500,
      fontWeightBold: p = 700,
      htmlFontSize: g = 16,
      allVariants: h,
      pxToRem: b,
      ...S
    } = typeof r == 'function' ? r(n) : r,
    A = i / 14,
    z = b || ((N) => `${(N / g) * A}rem`),
    T = (N, k, G, B, w) => ({
      fontFamily: o,
      fontWeight: N,
      fontSize: z(k),
      lineHeight: G,
      ...(o === Lg ? { letterSpacing: `${Jx(B / k)}em` } : {}),
      ...w,
      ...h,
    }),
    C = {
      h1: T(c, 96, 1.167, -1.5),
      h2: T(c, 60, 1.2, -0.5),
      h3: T(f, 48, 1.167, 0),
      h4: T(f, 34, 1.235, 0.25),
      h5: T(f, 24, 1.334, 0),
      h6: T(d, 20, 1.6, 0.15),
      subtitle1: T(f, 16, 1.75, 0.15),
      subtitle2: T(d, 14, 1.57, 0.1),
      body1: T(f, 16, 1.5, 0.15),
      body2: T(f, 14, 1.43, 0.15),
      button: T(d, 14, 1.75, 0.4, jg),
      caption: T(f, 12, 1.66, 0.4),
      overline: T(f, 12, 2.66, 1, jg),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Ye(
    {
      htmlFontSize: g,
      pxToRem: z,
      fontFamily: o,
      fontSize: i,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: d,
      fontWeightBold: p,
      ...C,
    },
    S,
    { clone: !1 },
  );
}
const t2 = 0.2,
  e2 = 0.14,
  n2 = 0.12;
function fe(...n) {
  return [
    `${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${t2})`,
    `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${e2})`,
    `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${n2})`,
  ].join(',');
}
const a2 = [
    'none',
    fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  l2 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  r2 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Hg(n) {
  return `${Math.round(n)}ms`;
}
function o2(n) {
  if (!n) return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function i2(n) {
  const r = { ...l2, ...n.easing },
    o = { ...r2, ...n.duration };
  return {
    getAutoHeightDuration: o2,
    create: (c = ['all'], f = {}) => {
      const { duration: d = o.standard, easing: p = r.easeInOut, delay: g = 0, ...h } = f;
      return (Array.isArray(c) ? c : [c])
        .map(
          (b) =>
            `${b} ${typeof d == 'string' ? d : Hg(d)} ${p} ${typeof g == 'string' ? g : Hg(g)}`,
        )
        .join(',');
    },
    ...n,
    easing: r,
    duration: o,
  };
}
const s2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function u2(n) {
  return (
    Hn(n) ||
    typeof n > 'u' ||
    typeof n == 'string' ||
    typeof n == 'boolean' ||
    typeof n == 'number' ||
    Array.isArray(n)
  );
}
function t0(n = {}) {
  const r = { ...n };
  function o(i) {
    const c = Object.entries(i);
    for (let f = 0; f < c.length; f++) {
      const [d, p] = c[f];
      !u2(p) || d.startsWith('unstable_') ? delete i[d] : Hn(p) && ((i[d] = { ...p }), o(i[d]));
    }
  }
  return (
    o(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function $g(n) {
  return typeof n == 'number' ? `${(n * 100).toFixed(0)}%` : `calc((${n}) * 100%)`;
}
const c2 = (n) => {
  if (!Number.isNaN(+n)) return +n;
  const r = n.match(/\d*\.?\d+/g);
  if (!r) return 0;
  let o = 0;
  for (let i = 0; i < r.length; i += 1) o += +r[i];
  return o;
};
function f2(n) {
  Object.assign(n, {
    alpha(r, o) {
      const i = this || n;
      return i.colorSpace
        ? `oklch(from ${r} l c h / ${typeof o == 'string' ? `calc(${o})` : o})`
        : i.vars
          ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof o == 'string' ? `calc(${o})` : o})`
          : is(r, c2(o));
    },
    lighten(r, o) {
      const i = this || n;
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${r}, #fff ${$g(o)})` : Os(r, o);
    },
    darken(r, o) {
      const i = this || n;
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${r}, #000 ${$g(o)})` : Ms(r, o);
    },
  });
}
function bf(n = {}, ...r) {
  const {
    breakpoints: o,
    mixins: i = {},
    spacing: c,
    palette: f = {},
    transitions: d = {},
    typography: p = {},
    shape: g,
    colorSpace: h,
    ...b
  } = n;
  if (n.vars && n.generateThemeVars === void 0) throw new Error(ia(20));
  const S = Zf({ ...f, colorSpace: h }),
    A = Es(n);
  let z = Ye(A, {
    mixins: Wx(A.breakpoints, i),
    palette: S,
    shadows: a2.slice(),
    typography: Jy(S, p),
    transitions: i2(d),
    zIndex: { ...s2 },
  });
  return (
    (z = Ye(z, b)),
    (z = r.reduce((T, C) => Ye(T, C), z)),
    (z.unstable_sxConfig = { ...Bo, ...b?.unstable_sxConfig }),
    (z.unstable_sx = function (C) {
      return La({ sx: C, theme: this });
    }),
    (z.toRuntimeSource = t0),
    f2(z),
    z
  );
}
function Sf(n) {
  let r;
  return (
    n < 1 ? (r = 5.11916 * n ** 2) : (r = 4.5 * Math.log(n + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const d2 = [...Array(25)].map((n, r) => {
  if (r === 0) return 'none';
  const o = Sf(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function e0(n) {
  return {
    inputPlaceholder: n === 'dark' ? 0.5 : 0.42,
    inputUnderline: n === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: n === 'dark' ? 0.2 : 0.12,
    switchTrack: n === 'dark' ? 0.3 : 0.38,
  };
}
function n0(n) {
  return n === 'dark' ? d2 : [];
}
function p2(n) {
  const { palette: r = { mode: 'light' }, opacity: o, overlays: i, colorSpace: c, ...f } = n,
    d = Zf({ ...r, colorSpace: c });
  return { palette: d, opacity: { ...e0(d.mode), ...o }, overlays: i || n0(d.mode), ...f };
}
function m2(n) {
  return (
    !!n[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!n[0].match(/sxConfig$/) ||
    (n[0] === 'palette' && !!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const h2 = (n) => [
    ...[...Array(25)].map((r, o) => `--${n ? `${n}-` : ''}overlays-${o}`),
    `--${n ? `${n}-` : ''}palette-AppBar-darkBg`,
    `--${n ? `${n}-` : ''}palette-AppBar-darkColor`,
  ],
  g2 = (n) => (r, o) => {
    const i = n.rootSelector || ':root',
      c = n.colorSchemeSelector;
    let f = c;
    if (
      (c === 'class' && (f = '.%s'),
      c === 'data' && (f = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (f = `[${c}="%s"]`),
      n.defaultColorScheme === r)
    ) {
      if (r === 'dark') {
        const d = {};
        return (
          h2(n.cssVarPrefix).forEach((p) => {
            ((d[p] = o[p]), delete o[p]);
          }),
          f === 'media'
            ? { [i]: o, '@media (prefers-color-scheme: dark)': { [i]: d } }
            : f
              ? { [f.replace('%s', r)]: d, [`${i}, ${f.replace('%s', r)}`]: o }
              : { [i]: { ...o, ...d } }
        );
      }
      if (f && f !== 'media') return `${i}, ${f.replace('%s', String(r))}`;
    } else if (r) {
      if (f === 'media') return { [`@media (prefers-color-scheme: ${String(r)})`]: { [i]: o } };
      if (f) return f.replace('%s', String(r));
    }
    return i;
  };
function y2(n, r) {
  r.forEach((o) => {
    n[o] || (n[o] = {});
  });
}
function Z(n, r, o) {
  !n[r] && o && (n[r] = o);
}
function yo(n) {
  return typeof n != 'string' || !n.startsWith('hsl') ? n : Vy(n);
}
function ra(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = go(yo(n[r])));
}
function v2(n) {
  return typeof n == 'number'
    ? `${n}px`
    : typeof n == 'string' || typeof n == 'function' || Array.isArray(n)
      ? n
      : '8px';
}
const Un = (n) => {
    try {
      return n();
    } catch {}
  },
  b2 = (n = 'mui') => Bx(n);
function sf(n, r, o, i, c) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const f = c === 'dark' ? 'dark' : 'light';
  if (!i) {
    r[c] = p2({ ...o, palette: { mode: f, ...o?.palette }, colorSpace: n });
    return;
  }
  const { palette: d, ...p } = bf({ ...i, palette: { mode: f, ...o?.palette }, colorSpace: n });
  return (
    (r[c] = {
      ...o,
      palette: d,
      opacity: { ...e0(f), ...o?.opacity },
      overlays: o?.overlays || n0(f),
    }),
    p
  );
}
function S2(n = {}, ...r) {
  const {
      colorSchemes: o = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      nativeColor: d = !1,
      shouldSkipGeneratingVar: p = m2,
      colorSchemeSelector: g = o.light && o.dark ? 'media' : void 0,
      rootSelector: h = ':root',
      ...b
    } = n,
    S = Object.keys(o)[0],
    A = i || (o.light && S !== 'light' ? 'light' : S),
    z = b2(f),
    { [A]: T, light: C, dark: N, ...k } = o,
    G = { ...k };
  let B = T;
  if ((((A === 'dark' && !('dark' in o)) || (A === 'light' && !('light' in o))) && (B = !0), !B))
    throw new Error(ia(21, A));
  let w;
  d && (w = 'oklch');
  const O = sf(w, G, B, b, A);
  (C && !G.light && sf(w, G, C, void 0, 'light'), N && !G.dark && sf(w, G, N, void 0, 'dark'));
  let D = {
    defaultColorScheme: A,
    ...O,
    cssVarPrefix: f,
    colorSchemeSelector: g,
    rootSelector: h,
    getCssVar: z,
    colorSchemes: G,
    font: { ...Fx(O.typography), ...O.font },
    spacing: v2(b.spacing),
  };
  (Object.keys(D.colorSchemes).forEach((at) => {
    const v = D.colorSchemes[at].palette,
      F = (V) => {
        const M = V.split('-'),
          K = M[1],
          ot = M[2];
        return z(V, v[K][ot]);
      };
    (v.mode === 'light' && (Z(v.common, 'background', '#fff'), Z(v.common, 'onBackground', '#000')),
      v.mode === 'dark' &&
        (Z(v.common, 'background', '#000'), Z(v.common, 'onBackground', '#fff')));
    function Y(V, M, K) {
      if (w) {
        let ot;
        return (
          V === rl && (ot = `transparent ${((1 - K) * 100).toFixed(0)}%`),
          V === Pt && (ot = `#000 ${(K * 100).toFixed(0)}%`),
          V === Xt && (ot = `#fff ${(K * 100).toFixed(0)}%`),
          `color-mix(in ${w}, ${M}, ${ot})`
        );
      }
      return V(M, K);
    }
    if (
      (y2(v, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      v.mode === 'light')
    ) {
      (Z(v.Alert, 'errorColor', Y(Pt, v.error.light, 0.6)),
        Z(v.Alert, 'infoColor', Y(Pt, v.info.light, 0.6)),
        Z(v.Alert, 'successColor', Y(Pt, v.success.light, 0.6)),
        Z(v.Alert, 'warningColor', Y(Pt, v.warning.light, 0.6)),
        Z(v.Alert, 'errorFilledBg', F('palette-error-main')),
        Z(v.Alert, 'infoFilledBg', F('palette-info-main')),
        Z(v.Alert, 'successFilledBg', F('palette-success-main')),
        Z(v.Alert, 'warningFilledBg', F('palette-warning-main')),
        Z(
          v.Alert,
          'errorFilledColor',
          Un(() => v.getContrastText(v.error.main)),
        ),
        Z(
          v.Alert,
          'infoFilledColor',
          Un(() => v.getContrastText(v.info.main)),
        ),
        Z(
          v.Alert,
          'successFilledColor',
          Un(() => v.getContrastText(v.success.main)),
        ),
        Z(
          v.Alert,
          'warningFilledColor',
          Un(() => v.getContrastText(v.warning.main)),
        ),
        Z(v.Alert, 'errorStandardBg', Y(Xt, v.error.light, 0.9)),
        Z(v.Alert, 'infoStandardBg', Y(Xt, v.info.light, 0.9)),
        Z(v.Alert, 'successStandardBg', Y(Xt, v.success.light, 0.9)),
        Z(v.Alert, 'warningStandardBg', Y(Xt, v.warning.light, 0.9)),
        Z(v.Alert, 'errorIconColor', F('palette-error-main')),
        Z(v.Alert, 'infoIconColor', F('palette-info-main')),
        Z(v.Alert, 'successIconColor', F('palette-success-main')),
        Z(v.Alert, 'warningIconColor', F('palette-warning-main')),
        Z(v.AppBar, 'defaultBg', F('palette-grey-100')),
        Z(v.Avatar, 'defaultBg', F('palette-grey-400')),
        Z(v.Button, 'inheritContainedBg', F('palette-grey-300')),
        Z(v.Button, 'inheritContainedHoverBg', F('palette-grey-A100')),
        Z(v.Chip, 'defaultBorder', F('palette-grey-400')),
        Z(v.Chip, 'defaultAvatarColor', F('palette-grey-700')),
        Z(v.Chip, 'defaultIconColor', F('palette-grey-700')),
        Z(v.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        Z(v.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        Z(v.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        Z(v.LinearProgress, 'primaryBg', Y(Xt, v.primary.main, 0.62)),
        Z(v.LinearProgress, 'secondaryBg', Y(Xt, v.secondary.main, 0.62)),
        Z(v.LinearProgress, 'errorBg', Y(Xt, v.error.main, 0.62)),
        Z(v.LinearProgress, 'infoBg', Y(Xt, v.info.main, 0.62)),
        Z(v.LinearProgress, 'successBg', Y(Xt, v.success.main, 0.62)),
        Z(v.LinearProgress, 'warningBg', Y(Xt, v.warning.main, 0.62)),
        Z(
          v.Skeleton,
          'bg',
          w ? Y(rl, v.text.primary, 0.11) : `rgba(${F('palette-text-primaryChannel')} / 0.11)`,
        ),
        Z(v.Slider, 'primaryTrack', Y(Xt, v.primary.main, 0.62)),
        Z(v.Slider, 'secondaryTrack', Y(Xt, v.secondary.main, 0.62)),
        Z(v.Slider, 'errorTrack', Y(Xt, v.error.main, 0.62)),
        Z(v.Slider, 'infoTrack', Y(Xt, v.info.main, 0.62)),
        Z(v.Slider, 'successTrack', Y(Xt, v.success.main, 0.62)),
        Z(v.Slider, 'warningTrack', Y(Xt, v.warning.main, 0.62)));
      const V = w ? Y(Pt, v.background.default, 0.6825) : Ki(v.background.default, 0.8);
      (Z(v.SnackbarContent, 'bg', V),
        Z(
          v.SnackbarContent,
          'color',
          Un(() => (w ? vf.text.primary : v.getContrastText(V))),
        ),
        Z(v.SpeedDialAction, 'fabHoverBg', Ki(v.background.paper, 0.15)),
        Z(v.StepConnector, 'border', F('palette-grey-400')),
        Z(v.StepContent, 'border', F('palette-grey-400')),
        Z(v.Switch, 'defaultColor', F('palette-common-white')),
        Z(v.Switch, 'defaultDisabledColor', F('palette-grey-100')),
        Z(v.Switch, 'primaryDisabledColor', Y(Xt, v.primary.main, 0.62)),
        Z(v.Switch, 'secondaryDisabledColor', Y(Xt, v.secondary.main, 0.62)),
        Z(v.Switch, 'errorDisabledColor', Y(Xt, v.error.main, 0.62)),
        Z(v.Switch, 'infoDisabledColor', Y(Xt, v.info.main, 0.62)),
        Z(v.Switch, 'successDisabledColor', Y(Xt, v.success.main, 0.62)),
        Z(v.Switch, 'warningDisabledColor', Y(Xt, v.warning.main, 0.62)),
        Z(v.TableCell, 'border', Y(Xt, Y(rl, v.divider, 1), 0.88)),
        Z(v.Tooltip, 'bg', Y(rl, v.grey[700], 0.92)));
    }
    if (v.mode === 'dark') {
      (Z(v.Alert, 'errorColor', Y(Xt, v.error.light, 0.6)),
        Z(v.Alert, 'infoColor', Y(Xt, v.info.light, 0.6)),
        Z(v.Alert, 'successColor', Y(Xt, v.success.light, 0.6)),
        Z(v.Alert, 'warningColor', Y(Xt, v.warning.light, 0.6)),
        Z(v.Alert, 'errorFilledBg', F('palette-error-dark')),
        Z(v.Alert, 'infoFilledBg', F('palette-info-dark')),
        Z(v.Alert, 'successFilledBg', F('palette-success-dark')),
        Z(v.Alert, 'warningFilledBg', F('palette-warning-dark')),
        Z(
          v.Alert,
          'errorFilledColor',
          Un(() => v.getContrastText(v.error.dark)),
        ),
        Z(
          v.Alert,
          'infoFilledColor',
          Un(() => v.getContrastText(v.info.dark)),
        ),
        Z(
          v.Alert,
          'successFilledColor',
          Un(() => v.getContrastText(v.success.dark)),
        ),
        Z(
          v.Alert,
          'warningFilledColor',
          Un(() => v.getContrastText(v.warning.dark)),
        ),
        Z(v.Alert, 'errorStandardBg', Y(Pt, v.error.light, 0.9)),
        Z(v.Alert, 'infoStandardBg', Y(Pt, v.info.light, 0.9)),
        Z(v.Alert, 'successStandardBg', Y(Pt, v.success.light, 0.9)),
        Z(v.Alert, 'warningStandardBg', Y(Pt, v.warning.light, 0.9)),
        Z(v.Alert, 'errorIconColor', F('palette-error-main')),
        Z(v.Alert, 'infoIconColor', F('palette-info-main')),
        Z(v.Alert, 'successIconColor', F('palette-success-main')),
        Z(v.Alert, 'warningIconColor', F('palette-warning-main')),
        Z(v.AppBar, 'defaultBg', F('palette-grey-900')),
        Z(v.AppBar, 'darkBg', F('palette-background-paper')),
        Z(v.AppBar, 'darkColor', F('palette-text-primary')),
        Z(v.Avatar, 'defaultBg', F('palette-grey-600')),
        Z(v.Button, 'inheritContainedBg', F('palette-grey-800')),
        Z(v.Button, 'inheritContainedHoverBg', F('palette-grey-700')),
        Z(v.Chip, 'defaultBorder', F('palette-grey-700')),
        Z(v.Chip, 'defaultAvatarColor', F('palette-grey-300')),
        Z(v.Chip, 'defaultIconColor', F('palette-grey-300')),
        Z(v.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        Z(v.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        Z(v.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        Z(v.LinearProgress, 'primaryBg', Y(Pt, v.primary.main, 0.5)),
        Z(v.LinearProgress, 'secondaryBg', Y(Pt, v.secondary.main, 0.5)),
        Z(v.LinearProgress, 'errorBg', Y(Pt, v.error.main, 0.5)),
        Z(v.LinearProgress, 'infoBg', Y(Pt, v.info.main, 0.5)),
        Z(v.LinearProgress, 'successBg', Y(Pt, v.success.main, 0.5)),
        Z(v.LinearProgress, 'warningBg', Y(Pt, v.warning.main, 0.5)),
        Z(
          v.Skeleton,
          'bg',
          w ? Y(rl, v.text.primary, 0.13) : `rgba(${F('palette-text-primaryChannel')} / 0.13)`,
        ),
        Z(v.Slider, 'primaryTrack', Y(Pt, v.primary.main, 0.5)),
        Z(v.Slider, 'secondaryTrack', Y(Pt, v.secondary.main, 0.5)),
        Z(v.Slider, 'errorTrack', Y(Pt, v.error.main, 0.5)),
        Z(v.Slider, 'infoTrack', Y(Pt, v.info.main, 0.5)),
        Z(v.Slider, 'successTrack', Y(Pt, v.success.main, 0.5)),
        Z(v.Slider, 'warningTrack', Y(Pt, v.warning.main, 0.5)));
      const V = w ? Y(Xt, v.background.default, 0.985) : Ki(v.background.default, 0.98);
      (Z(v.SnackbarContent, 'bg', V),
        Z(
          v.SnackbarContent,
          'color',
          Un(() => (w ? Fy.text.primary : v.getContrastText(V))),
        ),
        Z(v.SpeedDialAction, 'fabHoverBg', Ki(v.background.paper, 0.15)),
        Z(v.StepConnector, 'border', F('palette-grey-600')),
        Z(v.StepContent, 'border', F('palette-grey-600')),
        Z(v.Switch, 'defaultColor', F('palette-grey-300')),
        Z(v.Switch, 'defaultDisabledColor', F('palette-grey-600')),
        Z(v.Switch, 'primaryDisabledColor', Y(Pt, v.primary.main, 0.55)),
        Z(v.Switch, 'secondaryDisabledColor', Y(Pt, v.secondary.main, 0.55)),
        Z(v.Switch, 'errorDisabledColor', Y(Pt, v.error.main, 0.55)),
        Z(v.Switch, 'infoDisabledColor', Y(Pt, v.info.main, 0.55)),
        Z(v.Switch, 'successDisabledColor', Y(Pt, v.success.main, 0.55)),
        Z(v.Switch, 'warningDisabledColor', Y(Pt, v.warning.main, 0.55)),
        Z(v.TableCell, 'border', Y(Pt, Y(rl, v.divider, 1), 0.68)),
        Z(v.Tooltip, 'bg', Y(rl, v.grey[700], 0.92)));
    }
    (ra(v.background, 'default'),
      ra(v.background, 'paper'),
      ra(v.common, 'background'),
      ra(v.common, 'onBackground'),
      ra(v, 'divider'),
      Object.keys(v).forEach((V) => {
        const M = v[V];
        V !== 'tonalOffset' &&
          M &&
          typeof M == 'object' &&
          (M.main && Z(v[V], 'mainChannel', go(yo(M.main))),
          M.light && Z(v[V], 'lightChannel', go(yo(M.light))),
          M.dark && Z(v[V], 'darkChannel', go(yo(M.dark))),
          M.contrastText && Z(v[V], 'contrastTextChannel', go(yo(M.contrastText))),
          V === 'text' && (ra(v[V], 'primary'), ra(v[V], 'secondary')),
          V === 'action' && (M.active && ra(v[V], 'active'), M.selected && ra(v[V], 'selected')));
      }));
  }),
    (D = r.reduce((at, v) => Ye(at, v), D)));
  const P = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: p,
      getSelector: g2(D),
      enableContrastVars: d,
    },
    { vars: Q, generateThemeVars: J, generateStyleSheets: et } = kx(D, P);
  return (
    (D.vars = Q),
    Object.entries(D.colorSchemes[D.defaultColorScheme]).forEach(([at, v]) => {
      D[at] = v;
    }),
    (D.generateThemeVars = J),
    (D.generateStyleSheets = et),
    (D.generateSpacing = function () {
      return ky(b.spacing, Gf(this));
    }),
    (D.getColorSchemeSelector = jx(g)),
    (D.spacing = D.generateSpacing()),
    (D.shouldSkipGeneratingVar = p),
    (D.unstable_sxConfig = { ...Bo, ...b?.unstable_sxConfig }),
    (D.unstable_sx = function (v) {
      return La({ sx: v, theme: this });
    }),
    (D.toRuntimeSource = t0),
    D
  );
}
function qg(n, r, o) {
  n.colorSchemes &&
    o &&
    (n.colorSchemes[r] = {
      ...(o !== !0 && o),
      palette: Zf({ ...(o === !0 ? {} : o.palette), mode: r }),
    });
}
function zs(n = {}, ...r) {
  const {
      palette: o,
      cssVariables: i = !1,
      colorSchemes: c = o ? void 0 : { light: !0 },
      defaultColorScheme: f = o?.mode,
      ...d
    } = n,
    p = f || 'light',
    g = c?.[p],
    h = { ...c, ...(o ? { [p]: { ...(typeof g != 'boolean' && g), palette: o } } : void 0) };
  if (i === !1) {
    if (!('colorSchemes' in n)) return bf(n, ...r);
    let b = o;
    'palette' in n ||
      (h[p] && (h[p] !== !0 ? (b = h[p].palette) : p === 'dark' && (b = { mode: 'dark' })));
    const S = bf({ ...n, palette: b }, ...r);
    return (
      (S.defaultColorScheme = p),
      (S.colorSchemes = h),
      S.palette.mode === 'light' &&
        ((S.colorSchemes.light = { ...(h.light !== !0 && h.light), palette: S.palette }),
        qg(S, 'dark', h.dark)),
      S.palette.mode === 'dark' &&
        ((S.colorSchemes.dark = { ...(h.dark !== !0 && h.dark), palette: S.palette }),
        qg(S, 'light', h.light)),
      S
    );
  }
  return (
    !o && !('light' in h) && p === 'light' && (h.light = !0),
    S2({ ...d, colorSchemes: h, defaultColorScheme: p, ...(typeof i != 'boolean' && i) }, ...r)
  );
}
const If = zs();
function Ff() {
  const n = Rs(If);
  return n[$n] || n;
}
function a0(n) {
  return n !== 'ownerState' && n !== 'theme' && n !== 'sx' && n !== 'as';
}
const zn = (n) => a0(n) && n !== 'classes',
  ft = Yy({ themeId: $n, defaultTheme: If, rootShouldForwardProp: zn });
function x2({ theme: n, ...r }) {
  const o = $n in n ? n[$n] : void 0;
  return H.jsx(Qy, { ...r, themeId: o ? $n : void 0, theme: o || n });
}
const Qi = {
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode',
  },
  { CssVarsProvider: C2 } = _x({
    themeId: $n,
    theme: () => zs({ cssVariables: !0 }),
    colorSchemeStorageKey: Qi.colorSchemeStorageKey,
    modeStorageKey: Qi.modeStorageKey,
    defaultColorScheme: { light: Qi.defaultLightColorScheme, dark: Qi.defaultDarkColorScheme },
    resolveTheme: (n) => {
      const r = { ...n, typography: Jy(n.palette, n.typography) };
      return (
        (r.unstable_sx = function (i) {
          return La({ sx: i, theme: this });
        }),
        r
      );
    },
  }),
  T2 = C2;
function E2({ theme: n, ...r }) {
  const o = x.useMemo(() => {
    if (typeof n == 'function') return n;
    const i = $n in n ? n[$n] : n;
    return 'colorSchemes' in i ? null : 'vars' in i ? n : { ...n, vars: null };
  }, [n]);
  return o ? H.jsx(x2, { theme: o, ...r }) : H.jsx(T2, { theme: n, ...r });
}
function Gg(...n) {
  return n.reduce(
    (r, o) =>
      o == null
        ? r
        : function (...c) {
            (r.apply(this, c), o.apply(this, c));
          },
    () => {},
  );
}
function R2(n) {
  return H.jsx(jy, { ...n, defaultTheme: If, themeId: $n });
}
function Wf(n) {
  return function (o) {
    return H.jsx(R2, { styles: typeof n == 'function' ? (i) => n({ theme: i, ...o }) : n });
  };
}
function A2() {
  return Ly;
}
const ie = Ex;
function ae(n) {
  return Sx(n);
}
function M2(n) {
  return te('MuiSvgIcon', n);
}
ee('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const O2 = (n) => {
    const { color: r, fontSize: o, classes: i } = n,
      c = { root: ['root', r !== 'inherit' && `color${ht(r)}`, `fontSize${ht(o)}`] };
    return ne(c, M2, i);
  },
  z2 = ft('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.color !== 'inherit' && r[`color${ht(o.color)}`],
        r[`fontSize${ht(o.fontSize)}`],
      ];
    },
  })(
    ie(({ theme: n }) => ({
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      flexShrink: 0,
      transition: n.transitions?.create?.('fill', {
        duration: (n.vars ?? n).transitions?.duration?.shorter,
      }),
      variants: [
        { props: (r) => !r.hasSvgAsChild, style: { fill: 'currentColor' } },
        { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
        {
          props: { fontSize: 'small' },
          style: { fontSize: n.typography?.pxToRem?.(20) || '1.25rem' },
        },
        {
          props: { fontSize: 'medium' },
          style: { fontSize: n.typography?.pxToRem?.(24) || '1.5rem' },
        },
        {
          props: { fontSize: 'large' },
          style: { fontSize: n.typography?.pxToRem?.(35) || '2.1875rem' },
        },
        ...Object.entries((n.vars ?? n).palette)
          .filter(([, r]) => r && r.main)
          .map(([r]) => ({
            props: { color: r },
            style: { color: (n.vars ?? n).palette?.[r]?.main },
          })),
        { props: { color: 'action' }, style: { color: (n.vars ?? n).palette?.action?.active } },
        { props: { color: 'disabled' }, style: { color: (n.vars ?? n).palette?.action?.disabled } },
        { props: { color: 'inherit' }, style: { color: void 0 } },
      ],
    })),
  ),
  xf = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiSvgIcon' }),
      {
        children: c,
        className: f,
        color: d = 'inherit',
        component: p = 'svg',
        fontSize: g = 'medium',
        htmlColor: h,
        inheritViewBox: b = !1,
        titleAccess: S,
        viewBox: A = '0 0 24 24',
        ...z
      } = i,
      T = x.isValidElement(c) && c.type === 'svg',
      C = {
        ...i,
        color: d,
        component: p,
        fontSize: g,
        instanceFontSize: r.fontSize,
        inheritViewBox: b,
        viewBox: A,
        hasSvgAsChild: T,
      },
      N = {};
    b || (N.viewBox = A);
    const k = O2(C);
    return H.jsxs(z2, {
      as: p,
      className: St(k.root, f),
      focusable: 'false',
      color: h,
      'aria-hidden': S ? void 0 : !0,
      role: S ? 'img' : void 0,
      ref: o,
      ...N,
      ...z,
      ...(T && c.props),
      ownerState: C,
      children: [T ? c.props.children : c, S ? H.jsx('title', { children: S }) : null],
    });
  });
xf.muiName = 'SvgIcon';
function $a(n, r) {
  function o(i, c) {
    return H.jsx(xf, { 'data-testid': void 0, ref: c, ...i, children: n });
  }
  return ((o.muiName = xf.muiName), x.memo(x.forwardRef(o)));
}
function l0(n, r = 166) {
  let o;
  function i(...c) {
    const f = () => {
      n.apply(this, c);
    };
    (clearTimeout(o), (o = setTimeout(f, r)));
  }
  return (
    (i.clear = () => {
      clearTimeout(o);
    }),
    i
  );
}
function On(n) {
  return (n && n.ownerDocument) || document;
}
function ca(n) {
  return On(n).defaultView || window;
}
function Yg(n, r) {
  typeof n == 'function' ? n(r) : n && (n.current = r);
}
function Vg(n) {
  const { controlled: r, default: o, name: i, state: c = 'value' } = n,
    { current: f } = x.useRef(r !== void 0),
    [d, p] = x.useState(o),
    g = f ? r : d,
    h = x.useCallback((b) => {
      f || p(b);
    }, []);
  return [g, h];
}
function dl(n) {
  const r = x.useRef(n);
  return (
    ua(() => {
      r.current = n;
    }),
    x.useRef((...o) => (0, r.current)(...o)).current
  );
}
function We(...n) {
  const r = x.useRef(void 0),
    o = x.useCallback((i) => {
      const c = n.map((f) => {
        if (f == null) return null;
        if (typeof f == 'function') {
          const d = f,
            p = d(i);
          return typeof p == 'function'
            ? p
            : () => {
                d(null);
              };
        }
        return (
          (f.current = i),
          () => {
            f.current = null;
          }
        );
      });
      return () => {
        c.forEach((f) => f?.());
      };
    }, n);
  return x.useMemo(
    () =>
      n.every((i) => i == null)
        ? null
        : (i) => {
            (r.current && (r.current(), (r.current = void 0)), i != null && (r.current = o(i)));
          },
    n,
  );
}
function w2(n, r) {
  const o = n.charCodeAt(2);
  return n[0] === 'o' && n[1] === 'n' && o >= 65 && o <= 90 && typeof r == 'function';
}
function N2(n, r) {
  if (!n) return r;
  function o(d, p) {
    const g = {};
    return (
      Object.keys(p).forEach((h) => {
        w2(h, p[h]) &&
          typeof d[h] == 'function' &&
          (g[h] = (...b) => {
            (d[h](...b), p[h](...b));
          });
      }),
      g
    );
  }
  if (typeof n == 'function' || typeof r == 'function')
    return (d) => {
      const p = typeof r == 'function' ? r(d) : r,
        g = typeof n == 'function' ? n({ ...d, ...p }) : n,
        h = St(d?.className, p?.className, g?.className),
        b = o(g, p);
      return {
        ...p,
        ...g,
        ...b,
        ...(!!h && { className: h }),
        ...(p?.style && g?.style && { style: { ...p.style, ...g.style } }),
        ...(p?.sx &&
          g?.sx && {
            sx: [
              ...(Array.isArray(p.sx) ? p.sx : [p.sx]),
              ...(Array.isArray(g.sx) ? g.sx : [g.sx]),
            ],
          }),
      };
    };
  const i = r,
    c = o(n, i),
    f = St(i?.className, n?.className);
  return {
    ...r,
    ...n,
    ...c,
    ...(!!f && { className: f }),
    ...(i?.style && n?.style && { style: { ...i.style, ...n.style } }),
    ...(i?.sx &&
      n?.sx && {
        sx: [...(Array.isArray(i.sx) ? i.sx : [i.sx]), ...(Array.isArray(n.sx) ? n.sx : [n.sx])],
      }),
  };
}
function r0(n, r) {
  if (n == null) return {};
  var o = {};
  for (var i in n)
    if ({}.hasOwnProperty.call(n, i)) {
      if (r.indexOf(i) !== -1) continue;
      o[i] = n[i];
    }
  return o;
}
function Cf(n, r) {
  return (
    (Cf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, i) {
          return ((o.__proto__ = i), o);
        }),
    Cf(n, r)
  );
}
function o0(n, r) {
  ((n.prototype = Object.create(r.prototype)), (n.prototype.constructor = n), Cf(n, r));
}
var i0 = yy();
const Zi = wf(i0),
  Pg = { disabled: !1 },
  ss = Mn.createContext(null);
var _2 = function (r) {
    return r.scrollTop;
  },
  vo = 'unmounted',
  sl = 'exited',
  ul = 'entering',
  lr = 'entered',
  Tf = 'exiting',
  Gn = (function (n) {
    o0(r, n);
    function r(i, c) {
      var f;
      f = n.call(this, i, c) || this;
      var d = c,
        p = d && !d.isMounting ? i.enter : i.appear,
        g;
      return (
        (f.appearStatus = null),
        i.in
          ? p
            ? ((g = sl), (f.appearStatus = ul))
            : (g = lr)
          : i.unmountOnExit || i.mountOnEnter
            ? (g = vo)
            : (g = sl),
        (f.state = { status: g }),
        (f.nextCallback = null),
        f
      );
    }
    r.getDerivedStateFromProps = function (c, f) {
      var d = c.in;
      return d && f.status === vo ? { status: sl } : null;
    };
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (c) {
        var f = null;
        if (c !== this.props) {
          var d = this.state.status;
          this.props.in ? d !== ul && d !== lr && (f = ul) : (d === ul || d === lr) && (f = Tf);
        }
        this.updateStatus(!1, f);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var c = this.props.timeout,
          f,
          d,
          p;
        return (
          (f = d = p = c),
          c != null &&
            typeof c != 'number' &&
            ((f = c.exit), (d = c.enter), (p = c.appear !== void 0 ? c.appear : d)),
          { exit: f, enter: d, appear: p }
        );
      }),
      (o.updateStatus = function (c, f) {
        if ((c === void 0 && (c = !1), f !== null))
          if ((this.cancelNextCallback(), f === ul)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var d = this.props.nodeRef ? this.props.nodeRef.current : Zi.findDOMNode(this);
              d && _2(d);
            }
            this.performEnter(c);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === sl && this.setState({ status: vo });
      }),
      (o.performEnter = function (c) {
        var f = this,
          d = this.props.enter,
          p = this.context ? this.context.isMounting : c,
          g = this.props.nodeRef ? [p] : [Zi.findDOMNode(this), p],
          h = g[0],
          b = g[1],
          S = this.getTimeouts(),
          A = p ? S.appear : S.enter;
        if ((!c && !d) || Pg.disabled) {
          this.safeSetState({ status: lr }, function () {
            f.props.onEntered(h);
          });
          return;
        }
        (this.props.onEnter(h, b),
          this.safeSetState({ status: ul }, function () {
            (f.props.onEntering(h, b),
              f.onTransitionEnd(A, function () {
                f.safeSetState({ status: lr }, function () {
                  f.props.onEntered(h, b);
                });
              }));
          }));
      }),
      (o.performExit = function () {
        var c = this,
          f = this.props.exit,
          d = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : Zi.findDOMNode(this);
        if (!f || Pg.disabled) {
          this.safeSetState({ status: sl }, function () {
            c.props.onExited(p);
          });
          return;
        }
        (this.props.onExit(p),
          this.safeSetState({ status: Tf }, function () {
            (c.props.onExiting(p),
              c.onTransitionEnd(d.exit, function () {
                c.safeSetState({ status: sl }, function () {
                  c.props.onExited(p);
                });
              }));
          }));
      }),
      (o.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (c, f) {
        ((f = this.setNextCallback(f)), this.setState(c, f));
      }),
      (o.setNextCallback = function (c) {
        var f = this,
          d = !0;
        return (
          (this.nextCallback = function (p) {
            d && ((d = !1), (f.nextCallback = null), c(p));
          }),
          (this.nextCallback.cancel = function () {
            d = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (c, f) {
        this.setNextCallback(f);
        var d = this.props.nodeRef ? this.props.nodeRef.current : Zi.findDOMNode(this),
          p = c == null && !this.props.addEndListener;
        if (!d || p) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var g = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback],
            h = g[0],
            b = g[1];
          this.props.addEndListener(h, b);
        }
        c != null && setTimeout(this.nextCallback, c);
      }),
      (o.render = function () {
        var c = this.state.status;
        if (c === vo) return null;
        var f = this.props,
          d = f.children;
        (f.in,
          f.mountOnEnter,
          f.unmountOnExit,
          f.appear,
          f.enter,
          f.exit,
          f.timeout,
          f.addEndListener,
          f.onEnter,
          f.onEntering,
          f.onEntered,
          f.onExit,
          f.onExiting,
          f.onExited,
          f.nodeRef);
        var p = r0(f, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return Mn.createElement(
          ss.Provider,
          { value: null },
          typeof d == 'function' ? d(c, p) : Mn.cloneElement(Mn.Children.only(d), p),
        );
      }),
      r
    );
  })(Mn.Component);
Gn.contextType = ss;
Gn.propTypes = {};
function ar() {}
Gn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ar,
  onEntering: ar,
  onEntered: ar,
  onExit: ar,
  onExiting: ar,
  onExited: ar,
};
Gn.UNMOUNTED = vo;
Gn.EXITED = sl;
Gn.ENTERING = ul;
Gn.ENTERED = lr;
Gn.EXITING = Tf;
function B2(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Jf(n, r) {
  var o = function (f) {
      return r && x.isValidElement(f) ? r(f) : f;
    },
    i = Object.create(null);
  return (
    n &&
      x.Children.map(n, function (c) {
        return c;
      }).forEach(function (c) {
        i[c.key] = o(c);
      }),
    i
  );
}
function D2(n, r) {
  ((n = n || {}), (r = r || {}));
  function o(b) {
    return b in r ? r[b] : n[b];
  }
  var i = Object.create(null),
    c = [];
  for (var f in n) f in r ? c.length && ((i[f] = c), (c = [])) : c.push(f);
  var d,
    p = {};
  for (var g in r) {
    if (i[g])
      for (d = 0; d < i[g].length; d++) {
        var h = i[g][d];
        p[i[g][d]] = o(h);
      }
    p[g] = o(g);
  }
  for (d = 0; d < c.length; d++) p[c[d]] = o(c[d]);
  return p;
}
function fl(n, r, o) {
  return o[r] != null ? o[r] : n.props[r];
}
function U2(n, r) {
  return Jf(n.children, function (o) {
    return x.cloneElement(o, {
      onExited: r.bind(null, o),
      in: !0,
      appear: fl(o, 'appear', n),
      enter: fl(o, 'enter', n),
      exit: fl(o, 'exit', n),
    });
  });
}
function k2(n, r, o) {
  var i = Jf(n.children),
    c = D2(r, i);
  return (
    Object.keys(c).forEach(function (f) {
      var d = c[f];
      if (x.isValidElement(d)) {
        var p = f in r,
          g = f in i,
          h = r[f],
          b = x.isValidElement(h) && !h.props.in;
        g && (!p || b)
          ? (c[f] = x.cloneElement(d, {
              onExited: o.bind(null, d),
              in: !0,
              exit: fl(d, 'exit', n),
              enter: fl(d, 'enter', n),
            }))
          : !g && p && !b
            ? (c[f] = x.cloneElement(d, { in: !1 }))
            : g &&
              p &&
              x.isValidElement(h) &&
              (c[f] = x.cloneElement(d, {
                onExited: o.bind(null, d),
                in: h.props.in,
                exit: fl(d, 'exit', n),
                enter: fl(d, 'enter', n),
              }));
      }
    }),
    c
  );
}
var j2 =
    Object.values ||
    function (n) {
      return Object.keys(n).map(function (r) {
        return n[r];
      });
    },
  L2 = {
    component: 'div',
    childFactory: function (r) {
      return r;
    },
  },
  td = (function (n) {
    o0(r, n);
    function r(i, c) {
      var f;
      f = n.call(this, i, c) || this;
      var d = f.handleExited.bind(B2(f));
      return (
        (f.state = { contextValue: { isMounting: !0 }, handleExited: d, firstRender: !0 }),
        f
      );
    }
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (o.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (c, f) {
        var d = f.children,
          p = f.handleExited,
          g = f.firstRender;
        return { children: g ? U2(c, p) : k2(c, d, p), firstRender: !1 };
      }),
      (o.handleExited = function (c, f) {
        var d = Jf(this.props.children);
        c.key in d ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (p) {
              var g = ls({}, p.children);
              return (delete g[c.key], { children: g });
            }));
      }),
      (o.render = function () {
        var c = this.props,
          f = c.component,
          d = c.childFactory,
          p = r0(c, ['component', 'childFactory']),
          g = this.state.contextValue,
          h = j2(this.state.children).map(d);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          f === null
            ? Mn.createElement(ss.Provider, { value: g }, h)
            : Mn.createElement(ss.Provider, { value: g }, Mn.createElement(f, p, h))
        );
      }),
      r
    );
  })(Mn.Component);
td.propTypes = {};
td.defaultProps = L2;
const Xg = {};
function s0(n, r) {
  const o = x.useRef(Xg);
  return (o.current === Xg && (o.current = n(r)), o);
}
const H2 = [];
function $2(n) {
  x.useEffect(n, H2);
}
class ed {
  static create() {
    return new ed();
  }
  currentId = null;
  start(r, o) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = null), o());
      }, r)));
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
  };
  disposeEffect = () => this.clear;
}
function u0() {
  const n = s0(ed.create).current;
  return ($2(n.disposeEffect), n);
}
const c0 = (n) => n.scrollTop;
function us(n, r) {
  const { timeout: o, easing: i, style: c = {} } = n;
  return {
    duration: c.transitionDuration ?? (typeof o == 'number' ? o : o[r.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof i == 'object' ? i[r.mode] : i),
    delay: c.transitionDelay,
  };
}
function q2(n) {
  return te('MuiPaper', n);
}
ee('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const G2 = (n) => {
    const { square: r, elevation: o, variant: i, classes: c } = n,
      f = { root: ['root', i, !r && 'rounded', i === 'elevation' && `elevation${o}`] };
    return ne(f, q2, c);
  },
  Y2 = ft('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        r[o.variant],
        !o.square && r.rounded,
        o.variant === 'elevation' && r[`elevation${o.elevation}`],
      ];
    },
  })(
    ie(({ theme: n }) => ({
      backgroundColor: (n.vars || n).palette.background.paper,
      color: (n.vars || n).palette.text.primary,
      transition: n.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: r }) => !r.square, style: { borderRadius: n.shape.borderRadius } },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(n.vars || n).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' },
        },
      ],
    })),
  ),
  ws = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiPaper' }),
      c = Ff(),
      {
        className: f,
        component: d = 'div',
        elevation: p = 1,
        square: g = !1,
        variant: h = 'elevation',
        ...b
      } = i,
      S = { ...i, component: d, elevation: p, square: g, variant: h },
      A = G2(S);
    return H.jsx(Y2, {
      as: d,
      ownerState: S,
      className: St(A.root, f),
      ref: o,
      ...b,
      style: {
        ...(h === 'elevation' && {
          '--Paper-shadow': (c.vars || c).shadows[p],
          ...(c.vars && { '--Paper-overlay': c.vars.overlays?.[p] }),
          ...(!c.vars &&
            c.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${is('#fff', Sf(p))}, ${is('#fff', Sf(p))})`,
            }),
        }),
        ...b.style,
      },
    });
  });
function cs(n) {
  return typeof n == 'string';
}
function f0(n, r, o) {
  return n === void 0 || cs(n) ? r : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function d0(n, r, o) {
  return typeof n == 'function' ? n(r, o) : n;
}
function p0(n, r = []) {
  if (n === void 0) return {};
  const o = {};
  return (
    Object.keys(n)
      .filter((i) => i.match(/^on[A-Z]/) && typeof n[i] == 'function' && !r.includes(i))
      .forEach((i) => {
        o[i] = n[i];
      }),
    o
  );
}
function Kg(n) {
  if (n === void 0) return {};
  const r = {};
  return (
    Object.keys(n)
      .filter((o) => !(o.match(/^on[A-Z]/) && typeof n[o] == 'function'))
      .forEach((o) => {
        r[o] = n[o];
      }),
    r
  );
}
function m0(n) {
  const {
    getSlotProps: r,
    additionalProps: o,
    externalSlotProps: i,
    externalForwardedProps: c,
    className: f,
  } = n;
  if (!r) {
    const z = St(o?.className, f, c?.className, i?.className),
      T = { ...o?.style, ...c?.style, ...i?.style },
      C = { ...o, ...c, ...i };
    return (
      z.length > 0 && (C.className = z),
      Object.keys(T).length > 0 && (C.style = T),
      { props: C, internalRef: void 0 }
    );
  }
  const d = p0({ ...c, ...i }),
    p = Kg(i),
    g = Kg(c),
    h = r(d),
    b = St(h?.className, o?.className, f, c?.className, i?.className),
    S = { ...h?.style, ...o?.style, ...c?.style, ...i?.style },
    A = { ...h, ...o, ...g, ...p };
  return (
    b.length > 0 && (A.className = b),
    Object.keys(S).length > 0 && (A.style = S),
    { props: A, internalRef: h.ref }
  );
}
function xe(n, r) {
  const {
      className: o,
      elementType: i,
      ownerState: c,
      externalForwardedProps: f,
      internalForwardedProps: d,
      shouldForwardComponentProp: p = !1,
      ...g
    } = r,
    { component: h, slots: b = { [n]: void 0 }, slotProps: S = { [n]: void 0 }, ...A } = f,
    z = b[n] || i,
    T = d0(S[n], c),
    {
      props: { component: C, ...N },
      internalRef: k,
    } = m0({
      className: o,
      ...g,
      externalForwardedProps: n === 'root' ? A : void 0,
      externalSlotProps: T,
    }),
    G = We(k, T?.ref, r.ref),
    B = n === 'root' ? C || h : C,
    w = f0(
      z,
      {
        ...(n === 'root' && !h && !b[n] && d),
        ...(n !== 'root' && !b[n] && d),
        ...N,
        ...(B && !p && { as: B }),
        ...(B && p && { component: B }),
        ref: G,
      },
      c,
    );
  return [z, w];
}
function Qg(n) {
  try {
    return n.matches(':focus-visible');
  } catch {}
  return !1;
}
class fs {
  static create() {
    return new fs();
  }
  static use() {
    const r = s0(fs.create).current,
      [o, i] = x.useState(!1);
    return ((r.shouldMount = o), (r.setShouldMount = i), x.useEffect(r.mountEffect, [o]), r);
  }
  constructor() {
    ((this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null));
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = P2()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  mountEffect = () => {
    this.shouldMount &&
      !this.didMount &&
      this.ref.current !== null &&
      ((this.didMount = !0), this.mounted.resolve());
  };
  start(...r) {
    this.mount().then(() => this.ref.current?.start(...r));
  }
  stop(...r) {
    this.mount().then(() => this.ref.current?.stop(...r));
  }
  pulsate(...r) {
    this.mount().then(() => this.ref.current?.pulsate(...r));
  }
}
function V2() {
  return fs.use();
}
function P2() {
  let n, r;
  const o = new Promise((i, c) => {
    ((n = i), (r = c));
  });
  return ((o.resolve = n), (o.reject = r), o);
}
function X2(n) {
  const {
      className: r,
      classes: o,
      pulsate: i = !1,
      rippleX: c,
      rippleY: f,
      rippleSize: d,
      in: p,
      onExited: g,
      timeout: h,
    } = n,
    [b, S] = x.useState(!1),
    A = St(r, o.ripple, o.rippleVisible, i && o.ripplePulsate),
    z = { width: d, height: d, top: -(d / 2) + f, left: -(d / 2) + c },
    T = St(o.child, b && o.childLeaving, i && o.childPulsate);
  return (
    !p && !b && S(!0),
    x.useEffect(() => {
      if (!p && g != null) {
        const C = setTimeout(g, h);
        return () => {
          clearTimeout(C);
        };
      }
    }, [g, p, h]),
    H.jsx('span', { className: A, style: z, children: H.jsx('span', { className: T }) })
  );
}
const Sn = ee('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Ef = 550,
  K2 = 80,
  Q2 = wo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Z2 = wo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  I2 = wo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  F2 = ft('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  W2 = ft(X2, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${Sn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Q2};
    animation-duration: ${Ef}ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
  }

  &.${Sn.ripplePulsate} {
    animation-duration: ${({ theme: n }) => n.transitions.duration.shorter}ms;
  }

  & .${Sn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Sn.childLeaving} {
    opacity: 0;
    animation-name: ${Z2};
    animation-duration: ${Ef}ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
  }

  & .${Sn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${I2};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  J2 = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiTouchRipple' }),
      { center: c = !1, classes: f = {}, className: d, ...p } = i,
      [g, h] = x.useState([]),
      b = x.useRef(0),
      S = x.useRef(null);
    x.useEffect(() => {
      S.current && (S.current(), (S.current = null));
    }, [g]);
    const A = x.useRef(!1),
      z = u0(),
      T = x.useRef(null),
      C = x.useRef(null),
      N = x.useCallback(
        (w) => {
          const { pulsate: O, rippleX: D, rippleY: P, rippleSize: Q, cb: J } = w;
          (h((et) => [
            ...et,
            H.jsx(
              W2,
              {
                classes: {
                  ripple: St(f.ripple, Sn.ripple),
                  rippleVisible: St(f.rippleVisible, Sn.rippleVisible),
                  ripplePulsate: St(f.ripplePulsate, Sn.ripplePulsate),
                  child: St(f.child, Sn.child),
                  childLeaving: St(f.childLeaving, Sn.childLeaving),
                  childPulsate: St(f.childPulsate, Sn.childPulsate),
                },
                timeout: Ef,
                pulsate: O,
                rippleX: D,
                rippleY: P,
                rippleSize: Q,
              },
              b.current,
            ),
          ]),
            (b.current += 1),
            (S.current = J));
        },
        [f],
      ),
      k = x.useCallback(
        (w = {}, O = {}, D = () => {}) => {
          const { pulsate: P = !1, center: Q = c || O.pulsate, fakeElement: J = !1 } = O;
          if (w?.type === 'mousedown' && A.current) {
            A.current = !1;
            return;
          }
          w?.type === 'touchstart' && (A.current = !0);
          const et = J ? null : C.current,
            at = et ? et.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let v, F, Y;
          if (
            Q ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            ((v = Math.round(at.width / 2)), (F = Math.round(at.height / 2)));
          else {
            const { clientX: V, clientY: M } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
            ((v = Math.round(V - at.left)), (F = Math.round(M - at.top)));
          }
          if (Q)
            ((Y = Math.sqrt((2 * at.width ** 2 + at.height ** 2) / 3)), Y % 2 === 0 && (Y += 1));
          else {
            const V = Math.max(Math.abs((et ? et.clientWidth : 0) - v), v) * 2 + 2,
              M = Math.max(Math.abs((et ? et.clientHeight : 0) - F), F) * 2 + 2;
            Y = Math.sqrt(V ** 2 + M ** 2);
          }
          w?.touches
            ? T.current === null &&
              ((T.current = () => {
                N({ pulsate: P, rippleX: v, rippleY: F, rippleSize: Y, cb: D });
              }),
              z.start(K2, () => {
                T.current && (T.current(), (T.current = null));
              }))
            : N({ pulsate: P, rippleX: v, rippleY: F, rippleSize: Y, cb: D });
        },
        [c, N, z],
      ),
      G = x.useCallback(() => {
        k({}, { pulsate: !0 });
      }, [k]),
      B = x.useCallback(
        (w, O) => {
          if ((z.clear(), w?.type === 'touchend' && T.current)) {
            (T.current(),
              (T.current = null),
              z.start(0, () => {
                B(w, O);
              }));
            return;
          }
          ((T.current = null), h((D) => (D.length > 0 ? D.slice(1) : D)), (S.current = O));
        },
        [z],
      );
    return (
      x.useImperativeHandle(o, () => ({ pulsate: G, start: k, stop: B }), [G, k, B]),
      H.jsx(F2, {
        className: St(Sn.root, f.root, d),
        ref: C,
        ...p,
        children: H.jsx(td, { component: null, exit: !0, children: g }),
      })
    );
  });
function tC(n) {
  return te('MuiButtonBase', n);
}
const eC = ee('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  nC = (n) => {
    const { disabled: r, focusVisible: o, focusVisibleClassName: i, classes: c } = n,
      d = ne({ root: ['root', r && 'disabled', o && 'focusVisible'] }, tC, c);
    return (o && i && (d.root += ` ${i}`), d);
  },
  aC = ft('button', { name: 'MuiButtonBase', slot: 'Root' })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${eC.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  h0 = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiButtonBase' }),
      {
        action: c,
        centerRipple: f = !1,
        children: d,
        className: p,
        component: g = 'button',
        disabled: h = !1,
        disableRipple: b = !1,
        disableTouchRipple: S = !1,
        focusRipple: A = !1,
        focusVisibleClassName: z,
        LinkComponent: T = 'a',
        onBlur: C,
        onClick: N,
        onContextMenu: k,
        onDragLeave: G,
        onFocus: B,
        onFocusVisible: w,
        onKeyDown: O,
        onKeyUp: D,
        onMouseDown: P,
        onMouseLeave: Q,
        onMouseUp: J,
        onTouchEnd: et,
        onTouchMove: at,
        onTouchStart: v,
        tabIndex: F = 0,
        TouchRippleProps: Y,
        touchRippleRef: V,
        type: M,
        ...K
      } = i,
      ot = x.useRef(null),
      nt = V2(),
      E = We(nt.ref, V),
      [X, rt] = x.useState(!1);
    (h && X && rt(!1),
      x.useImperativeHandle(
        c,
        () => ({
          focusVisible: () => {
            (rt(!0), ot.current.focus());
          },
        }),
        [],
      ));
    const lt = nt.shouldMount && !b && !h;
    x.useEffect(() => {
      X && A && !b && nt.pulsate();
    }, [b, A, X, nt]);
    const it = oa(nt, 'start', P, S),
      ct = oa(nt, 'stop', k, S),
      ut = oa(nt, 'stop', G, S),
      At = oa(nt, 'stop', J, S),
      xt = oa(
        nt,
        'stop',
        (dt) => {
          (X && dt.preventDefault(), Q && Q(dt));
        },
        S,
      ),
      Nt = oa(nt, 'start', v, S),
      bt = oa(nt, 'stop', et, S),
      Mt = oa(nt, 'stop', at, S),
      _t = oa(
        nt,
        'stop',
        (dt) => {
          (Qg(dt.target) || rt(!1), C && C(dt));
        },
        !1,
      ),
      he = dl((dt) => {
        (ot.current || (ot.current = dt.currentTarget),
          Qg(dt.target) && (rt(!0), w && w(dt)),
          B && B(dt));
      }),
      Ct = () => {
        const dt = ot.current;
        return g && g !== 'button' && !(dt.tagName === 'A' && dt.href);
      },
      qt = dl((dt) => {
        (A &&
          !dt.repeat &&
          X &&
          dt.key === ' ' &&
          nt.stop(dt, () => {
            nt.start(dt);
          }),
          dt.target === dt.currentTarget && Ct() && dt.key === ' ' && dt.preventDefault(),
          O && O(dt),
          dt.target === dt.currentTarget &&
            Ct() &&
            dt.key === 'Enter' &&
            !h &&
            (dt.preventDefault(), N && N(dt)));
      }),
      De = dl((dt) => {
        (A &&
          dt.key === ' ' &&
          X &&
          !dt.defaultPrevented &&
          nt.stop(dt, () => {
            nt.pulsate(dt);
          }),
          D && D(dt),
          N &&
            dt.target === dt.currentTarget &&
            Ct() &&
            dt.key === ' ' &&
            !dt.defaultPrevented &&
            N(dt));
      });
    let Gt = g;
    Gt === 'button' && (K.href || K.to) && (Gt = T);
    const se = {};
    Gt === 'button'
      ? ((se.type = M === void 0 ? 'button' : M), (se.disabled = h))
      : (!K.href && !K.to && (se.role = 'button'), h && (se['aria-disabled'] = h));
    const oe = We(o, ot),
      de = {
        ...i,
        centerRipple: f,
        component: g,
        disabled: h,
        disableRipple: b,
        disableTouchRipple: S,
        focusRipple: A,
        tabIndex: F,
        focusVisible: X,
      },
      Kt = nC(de);
    return H.jsxs(aC, {
      as: Gt,
      className: St(Kt.root, p),
      ownerState: de,
      onBlur: _t,
      onClick: N,
      onContextMenu: ct,
      onFocus: he,
      onKeyDown: qt,
      onKeyUp: De,
      onMouseDown: it,
      onMouseLeave: xt,
      onMouseUp: At,
      onDragLeave: ut,
      onTouchEnd: bt,
      onTouchMove: Mt,
      onTouchStart: Nt,
      ref: oe,
      tabIndex: h ? -1 : F,
      type: M,
      ...se,
      ...K,
      children: [d, lt ? H.jsx(J2, { ref: E, center: f, ...Y }) : null],
    });
  });
function oa(n, r, o, i = !1) {
  return dl((c) => (o && o(c), i || n[r](c), !0));
}
function lC(n) {
  return typeof n.main == 'string';
}
function rC(n, r = []) {
  if (!lC(n)) return !1;
  for (const o of r) if (!n.hasOwnProperty(o) || typeof n[o] != 'string') return !1;
  return !0;
}
function cn(n = []) {
  return ([, r]) => r && rC(r, n);
}
function oC(n) {
  return te('MuiAlert', n);
}
const Zg = ee('MuiAlert', [
  'root',
  'action',
  'icon',
  'message',
  'filled',
  'colorSuccess',
  'colorInfo',
  'colorWarning',
  'colorError',
  'filledSuccess',
  'filledInfo',
  'filledWarning',
  'filledError',
  'outlined',
  'outlinedSuccess',
  'outlinedInfo',
  'outlinedWarning',
  'outlinedError',
  'standard',
  'standardSuccess',
  'standardInfo',
  'standardWarning',
  'standardError',
]);
function iC(n) {
  return te('MuiCircularProgress', n);
}
ee('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const ka = 44,
  Rf = wo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Af = wo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  sC =
    typeof Rf != 'string'
      ? Hf`
        animation: ${Rf} 1.4s linear infinite;
      `
      : null,
  uC =
    typeof Af != 'string'
      ? Hf`
        animation: ${Af} 1.4s ease-in-out infinite;
      `
      : null,
  cC = (n) => {
    const { classes: r, variant: o, color: i, disableShrink: c } = n,
      f = {
        root: ['root', o, `color${ht(i)}`],
        svg: ['svg'],
        circle: ['circle', `circle${ht(o)}`, c && 'circleDisableShrink'],
      };
    return ne(f, iC, r);
  },
  fC = ft('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[o.variant], r[`color${ht(o.color)}`]];
    },
  })(
    ie(({ theme: n }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: n.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: sC || { animation: `${Rf} 1.4s linear infinite` },
        },
        ...Object.entries(n.palette)
          .filter(cn())
          .map(([r]) => ({ props: { color: r }, style: { color: (n.vars || n).palette[r].main } })),
      ],
    })),
  ),
  dC = ft('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  pC = ft('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.circle, r[`circle${ht(o.variant)}`], o.disableShrink && r.circleDisableShrink];
    },
  })(
    ie(({ theme: n }) => ({
      stroke: 'currentColor',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: n.transitions.create('stroke-dashoffset') },
        },
        {
          props: { variant: 'indeterminate' },
          style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: r }) => r.variant === 'indeterminate' && !r.disableShrink,
          style: uC || { animation: `${Af} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  g0 = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiCircularProgress' }),
      {
        className: c,
        color: f = 'primary',
        disableShrink: d = !1,
        size: p = 40,
        style: g,
        thickness: h = 3.6,
        value: b = 0,
        variant: S = 'indeterminate',
        ...A
      } = i,
      z = { ...i, color: f, disableShrink: d, size: p, thickness: h, value: b, variant: S },
      T = cC(z),
      C = {},
      N = {},
      k = {};
    if (S === 'determinate') {
      const G = 2 * Math.PI * ((ka - h) / 2);
      ((C.strokeDasharray = G.toFixed(3)),
        (k['aria-valuenow'] = Math.round(b)),
        (C.strokeDashoffset = `${(((100 - b) / 100) * G).toFixed(3)}px`),
        (N.transform = 'rotate(-90deg)'));
    }
    return H.jsx(fC, {
      className: St(T.root, c),
      style: { width: p, height: p, ...N, ...g },
      ownerState: z,
      ref: o,
      role: 'progressbar',
      ...k,
      ...A,
      children: H.jsx(dC, {
        className: T.svg,
        ownerState: z,
        viewBox: `${ka / 2} ${ka / 2} ${ka} ${ka}`,
        children: H.jsx(pC, {
          className: T.circle,
          style: C,
          ownerState: z,
          cx: ka,
          cy: ka,
          r: (ka - h) / 2,
          fill: 'none',
          strokeWidth: h,
        }),
      }),
    });
  });
function mC(n) {
  return te('MuiIconButton', n);
}
const Ig = ee('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper',
  ]),
  hC = (n) => {
    const { classes: r, disabled: o, color: i, edge: c, size: f, loading: d } = n,
      p = {
        root: [
          'root',
          d && 'loading',
          o && 'disabled',
          i !== 'default' && `color${ht(i)}`,
          c && `edge${ht(c)}`,
          `size${ht(f)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return ne(p, mC, r);
  },
  gC = ft(h0, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.loading && r.loading,
        o.color !== 'default' && r[`color${ht(o.color)}`],
        o.edge && r[`edge${ht(o.edge)}`],
        r[`size${ht(o.size)}`],
      ];
    },
  })(
    ie(({ theme: n }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: n.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (n.vars || n).palette.action.active,
      transition: n.transitions.create('background-color', {
        duration: n.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (r) => !r.disableRipple,
          style: {
            '--IconButton-hoverBg': n.alpha(
              (n.vars || n).palette.action.active,
              (n.vars || n).palette.action.hoverOpacity,
            ),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      ],
    })),
    ie(({ theme: n }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(n.palette)
          .filter(cn())
          .map(([r]) => ({ props: { color: r }, style: { color: (n.vars || n).palette[r].main } })),
        ...Object.entries(n.palette)
          .filter(cn())
          .map(([r]) => ({
            props: { color: r },
            style: {
              '--IconButton-hoverBg': n.alpha(
                (n.vars || n).palette[r].main,
                (n.vars || n).palette.action.hoverOpacity,
              ),
            },
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: n.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: n.typography.pxToRem(28) } },
      ],
      [`&.${Ig.disabled}`]: {
        backgroundColor: 'transparent',
        color: (n.vars || n).palette.action.disabled,
      },
      [`&.${Ig.loading}`]: { color: 'transparent' },
    })),
  ),
  yC = ft('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: n }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (n.vars || n).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  vC = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiIconButton' }),
      {
        edge: c = !1,
        children: f,
        className: d,
        color: p = 'default',
        disabled: g = !1,
        disableFocusRipple: h = !1,
        size: b = 'medium',
        id: S,
        loading: A = null,
        loadingIndicator: z,
        ...T
      } = i,
      C = Do(S),
      N = z ?? H.jsx(g0, { 'aria-labelledby': C, color: 'inherit', size: 16 }),
      k = {
        ...i,
        edge: c,
        color: p,
        disabled: g,
        disableFocusRipple: h,
        loading: A,
        loadingIndicator: N,
        size: b,
      },
      G = hC(k);
    return H.jsxs(gC, {
      id: A ? C : S,
      className: St(G.root, d),
      centerRipple: !0,
      focusRipple: !h,
      disabled: g || A,
      ref: o,
      ...T,
      ownerState: k,
      children: [
        typeof A == 'boolean' &&
          H.jsx('span', {
            className: G.loadingWrapper,
            style: { display: 'contents' },
            children: H.jsx(yC, { className: G.loadingIndicator, ownerState: k, children: A && N }),
          }),
        f,
      ],
    });
  }),
  bC = $a(
    H.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
  ),
  SC = $a(
    H.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
  ),
  xC = $a(
    H.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
  ),
  CC = $a(
    H.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
  ),
  TC = $a(
    H.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
  ),
  EC = (n) => {
    const { variant: r, color: o, severity: i, classes: c } = n,
      f = {
        root: ['root', `color${ht(o || i)}`, `${r}${ht(o || i)}`, `${r}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return ne(f, oC, c);
  },
  RC = ft(ws, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[o.variant], r[`${o.variant}${ht(o.color || o.severity)}`]];
    },
  })(
    ie(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? n.darken : n.lighten,
        o = n.palette.mode === 'light' ? n.lighten : n.darken;
      return {
        ...n.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
          ...Object.entries(n.palette)
            .filter(cn(['light']))
            .map(([i]) => ({
              props: { colorSeverity: i, variant: 'standard' },
              style: {
                color: n.vars ? n.vars.palette.Alert[`${i}Color`] : r(n.palette[i].light, 0.6),
                backgroundColor: n.vars
                  ? n.vars.palette.Alert[`${i}StandardBg`]
                  : o(n.palette[i].light, 0.9),
                [`& .${Zg.icon}`]: n.vars
                  ? { color: n.vars.palette.Alert[`${i}IconColor`] }
                  : { color: n.palette[i].main },
              },
            })),
          ...Object.entries(n.palette)
            .filter(cn(['light']))
            .map(([i]) => ({
              props: { colorSeverity: i, variant: 'outlined' },
              style: {
                color: n.vars ? n.vars.palette.Alert[`${i}Color`] : r(n.palette[i].light, 0.6),
                border: `1px solid ${(n.vars || n).palette[i].light}`,
                [`& .${Zg.icon}`]: n.vars
                  ? { color: n.vars.palette.Alert[`${i}IconColor`] }
                  : { color: n.palette[i].main },
              },
            })),
          ...Object.entries(n.palette)
            .filter(cn(['dark']))
            .map(([i]) => ({
              props: { colorSeverity: i, variant: 'filled' },
              style: {
                fontWeight: n.typography.fontWeightMedium,
                ...(n.vars
                  ? {
                      color: n.vars.palette.Alert[`${i}FilledColor`],
                      backgroundColor: n.vars.palette.Alert[`${i}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        n.palette.mode === 'dark' ? n.palette[i].dark : n.palette[i].main,
                      color: n.palette.getContrastText(n.palette[i].main),
                    }),
              },
            })),
        ],
      };
    }),
  ),
  AC = ft('div', { name: 'MuiAlert', slot: 'Icon' })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  MC = ft('div', { name: 'MuiAlert', slot: 'Message' })({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto',
  }),
  OC = ft('div', { name: 'MuiAlert', slot: 'Action' })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  Fg = {
    success: H.jsx(bC, { fontSize: 'inherit' }),
    warning: H.jsx(SC, { fontSize: 'inherit' }),
    error: H.jsx(xC, { fontSize: 'inherit' }),
    info: H.jsx(CC, { fontSize: 'inherit' }),
  },
  zC = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiAlert' }),
      {
        action: c,
        children: f,
        className: d,
        closeText: p = 'Close',
        color: g,
        components: h = {},
        componentsProps: b = {},
        icon: S,
        iconMapping: A = Fg,
        onClose: z,
        role: T = 'alert',
        severity: C = 'success',
        slotProps: N = {},
        slots: k = {},
        variant: G = 'standard',
        ...B
      } = i,
      w = { ...i, color: g, severity: C, variant: G, colorSeverity: g || C },
      O = EC(w),
      D = {
        slots: { closeButton: h.CloseButton, closeIcon: h.CloseIcon, ...k },
        slotProps: { ...b, ...N },
      },
      [P, Q] = xe('root', {
        ref: o,
        shouldForwardComponentProp: !0,
        className: St(O.root, d),
        elementType: RC,
        externalForwardedProps: { ...D, ...B },
        ownerState: w,
        additionalProps: { role: T, elevation: 0 },
      }),
      [J, et] = xe('icon', {
        className: O.icon,
        elementType: AC,
        externalForwardedProps: D,
        ownerState: w,
      }),
      [at, v] = xe('message', {
        className: O.message,
        elementType: MC,
        externalForwardedProps: D,
        ownerState: w,
      }),
      [F, Y] = xe('action', {
        className: O.action,
        elementType: OC,
        externalForwardedProps: D,
        ownerState: w,
      }),
      [V, M] = xe('closeButton', { elementType: vC, externalForwardedProps: D, ownerState: w }),
      [K, ot] = xe('closeIcon', { elementType: TC, externalForwardedProps: D, ownerState: w });
    return H.jsxs(P, {
      ...Q,
      children: [
        S !== !1 ? H.jsx(J, { ...et, children: S || A[C] || Fg[C] }) : null,
        H.jsx(at, { ...v, children: f }),
        c != null ? H.jsx(F, { ...Y, children: c }) : null,
        c == null && z
          ? H.jsx(F, {
              ...Y,
              children: H.jsx(V, {
                size: 'small',
                'aria-label': p,
                title: p,
                color: 'inherit',
                onClick: z,
                ...M,
                children: H.jsx(K, { fontSize: 'small', ...ot }),
              }),
            })
          : null,
      ],
    });
  });
function wC(n) {
  return te('MuiTypography', n);
}
ee('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const NC = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  _C = A2(),
  BC = (n) => {
    const { align: r, gutterBottom: o, noWrap: i, paragraph: c, variant: f, classes: d } = n,
      p = {
        root: [
          'root',
          f,
          n.align !== 'inherit' && `align${ht(r)}`,
          o && 'gutterBottom',
          i && 'noWrap',
          c && 'paragraph',
        ],
      };
    return ne(p, wC, d);
  },
  DC = ft('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.variant && r[o.variant],
        o.align !== 'inherit' && r[`align${ht(o.align)}`],
        o.noWrap && r.noWrap,
        o.gutterBottom && r.gutterBottom,
        o.paragraph && r.paragraph,
      ];
    },
  })(
    ie(({ theme: n }) => ({
      margin: 0,
      variants: [
        {
          props: { variant: 'inherit' },
          style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' },
        },
        ...Object.entries(n.typography)
          .filter(([r, o]) => r !== 'inherit' && o && typeof o == 'object')
          .map(([r, o]) => ({ props: { variant: r }, style: o })),
        ...Object.entries(n.palette)
          .filter(cn())
          .map(([r]) => ({ props: { color: r }, style: { color: (n.vars || n).palette[r].main } })),
        ...Object.entries(n.palette?.text || {})
          .filter(([, r]) => typeof r == 'string')
          .map(([r]) => ({
            props: { color: `text${ht(r)}` },
            style: { color: (n.vars || n).palette.text[r] },
          })),
        {
          props: ({ ownerState: r }) => r.align !== 'inherit',
          style: { textAlign: 'var(--Typography-textAlign)' },
        },
        {
          props: ({ ownerState: r }) => r.noWrap,
          style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
        },
        { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: '0.35em' } },
        { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } },
      ],
    })),
  ),
  Wg = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  ds = x.forwardRef(function (r, o) {
    const { color: i, ...c } = ae({ props: r, name: 'MuiTypography' }),
      f = !NC[i],
      d = _C({ ...c, ...(f && { color: i }) }),
      {
        align: p = 'inherit',
        className: g,
        component: h,
        gutterBottom: b = !1,
        noWrap: S = !1,
        paragraph: A = !1,
        variant: z = 'body1',
        variantMapping: T = Wg,
        ...C
      } = d,
      N = {
        ...d,
        align: p,
        color: i,
        className: g,
        component: h,
        gutterBottom: b,
        noWrap: S,
        paragraph: A,
        variant: z,
        variantMapping: T,
      },
      k = h || (A ? 'p' : T[z] || Wg[z]) || 'span',
      G = BC(N);
    return H.jsx(DC, {
      as: k,
      ref: o,
      className: St(G.root, g),
      ...C,
      ownerState: N,
      style: { ...(p !== 'inherit' && { '--Typography-textAlign': p }), ...C.style },
    });
  });
function UC(n) {
  return te('MuiAppBar', n);
}
ee('MuiAppBar', [
  'root',
  'positionFixed',
  'positionAbsolute',
  'positionSticky',
  'positionStatic',
  'positionRelative',
  'colorDefault',
  'colorPrimary',
  'colorSecondary',
  'colorInherit',
  'colorTransparent',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
]);
const kC = (n) => {
    const { color: r, position: o, classes: i } = n,
      c = { root: ['root', `color${ht(r)}`, `position${ht(o)}`] };
    return ne(c, UC, i);
  },
  Jg = (n, r) => (n ? `${n?.replace(')', '')}, ${r})` : r),
  jC = ft(ws, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[`position${ht(o.position)}`], r[`color${ht(o.color)}`]];
    },
  })(
    ie(({ theme: n }) => ({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      flexShrink: 0,
      variants: [
        {
          props: { position: 'fixed' },
          style: {
            position: 'fixed',
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
            '@media print': { position: 'absolute' },
          },
        },
        {
          props: { position: 'absolute' },
          style: {
            position: 'absolute',
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
          },
        },
        {
          props: { position: 'sticky' },
          style: {
            position: 'sticky',
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
          },
        },
        { props: { position: 'static' }, style: { position: 'static' } },
        { props: { position: 'relative' }, style: { position: 'relative' } },
        { props: { color: 'inherit' }, style: { '--AppBar-color': 'inherit' } },
        {
          props: { color: 'default' },
          style: {
            '--AppBar-background': n.vars ? n.vars.palette.AppBar.defaultBg : n.palette.grey[100],
            '--AppBar-color': n.vars
              ? n.vars.palette.text.primary
              : n.palette.getContrastText(n.palette.grey[100]),
            ...n.applyStyles('dark', {
              '--AppBar-background': n.vars ? n.vars.palette.AppBar.defaultBg : n.palette.grey[900],
              '--AppBar-color': n.vars
                ? n.vars.palette.text.primary
                : n.palette.getContrastText(n.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(n.palette)
          .filter(cn(['contrastText']))
          .map(([r]) => ({
            props: { color: r },
            style: {
              '--AppBar-background': (n.vars ?? n).palette[r].main,
              '--AppBar-color': (n.vars ?? n).palette[r].contrastText,
            },
          })),
        {
          props: (r) => r.enableColorOnDark === !0 && !['inherit', 'transparent'].includes(r.color),
          style: { backgroundColor: 'var(--AppBar-background)', color: 'var(--AppBar-color)' },
        },
        {
          props: (r) => r.enableColorOnDark === !1 && !['inherit', 'transparent'].includes(r.color),
          style: {
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...n.applyStyles('dark', {
              backgroundColor: n.vars
                ? Jg(n.vars.palette.AppBar.darkBg, 'var(--AppBar-background)')
                : null,
              color: n.vars ? Jg(n.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
            }),
          },
        },
        {
          props: { color: 'transparent' },
          style: {
            '--AppBar-background': 'transparent',
            '--AppBar-color': 'inherit',
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...n.applyStyles('dark', { backgroundImage: 'none' }),
          },
        },
      ],
    })),
  ),
  LC = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiAppBar' }),
      {
        className: c,
        color: f = 'primary',
        enableColorOnDark: d = !1,
        position: p = 'fixed',
        ...g
      } = i,
      h = { ...i, color: f, position: p, enableColorOnDark: d },
      b = kC(h);
    return H.jsx(jC, {
      square: !0,
      component: 'header',
      ownerState: h,
      elevation: 4,
      className: St(b.root, c, p === 'fixed' && 'mui-fixed'),
      ref: o,
      ...g,
    });
  });
function HC(n) {
  const {
      elementType: r,
      externalSlotProps: o,
      ownerState: i,
      skipResolvingSlotProps: c = !1,
      ...f
    } = n,
    d = c ? {} : d0(o, i),
    { props: p, internalRef: g } = m0({ ...f, externalSlotProps: d }),
    h = We(g, d?.ref, n.additionalProps?.ref);
  return f0(r, { ...p, ref: h }, i);
}
function Uo(n) {
  return parseInt(x.version, 10) >= 19 ? n?.props?.ref || null : n?.ref || null;
}
function $C(n) {
  return typeof n == 'function' ? n() : n;
}
const qC = x.forwardRef(function (r, o) {
  const { children: i, container: c, disablePortal: f = !1 } = r,
    [d, p] = x.useState(null),
    g = We(x.isValidElement(i) ? Uo(i) : null, o);
  if (
    (ua(() => {
      f || p($C(c) || document.body);
    }, [c, f]),
    ua(() => {
      if (d && !f)
        return (
          Yg(o, d),
          () => {
            Yg(o, null);
          }
        );
    }, [o, d, f]),
    f)
  ) {
    if (x.isValidElement(i)) {
      const h = { ref: g };
      return x.cloneElement(i, h);
    }
    return i;
  }
  return d && i0.createPortal(i, d);
});
function Ii(n) {
  return parseInt(n, 10) || 0;
}
const GC = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function YC(n) {
  for (const r in n) return !1;
  return !0;
}
function ty(n) {
  return YC(n) || (n.outerHeightStyle === 0 && !n.overflowing);
}
const VC = x.forwardRef(function (r, o) {
  const { onChange: i, maxRows: c, minRows: f = 1, style: d, value: p, ...g } = r,
    { current: h } = x.useRef(p != null),
    b = x.useRef(null),
    S = We(o, b),
    A = x.useRef(null),
    z = x.useRef(null),
    T = x.useCallback(() => {
      const B = b.current,
        w = z.current;
      if (!B || !w) return;
      const D = ca(B).getComputedStyle(B);
      if (D.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      ((w.style.width = D.width),
        (w.value = B.value || r.placeholder || 'x'),
        w.value.slice(-1) ===
          `
` && (w.value += ' '));
      const P = D.boxSizing,
        Q = Ii(D.paddingBottom) + Ii(D.paddingTop),
        J = Ii(D.borderBottomWidth) + Ii(D.borderTopWidth),
        et = w.scrollHeight;
      w.value = 'x';
      const at = w.scrollHeight;
      let v = et;
      (f && (v = Math.max(Number(f) * at, v)),
        c && (v = Math.min(Number(c) * at, v)),
        (v = Math.max(v, at)));
      const F = v + (P === 'border-box' ? Q + J : 0),
        Y = Math.abs(v - et) <= 1;
      return { outerHeightStyle: F, overflowing: Y };
    }, [c, f, r.placeholder]),
    C = dl(() => {
      const B = b.current,
        w = T();
      if (!B || !w || ty(w)) return !1;
      const O = w.outerHeightStyle;
      return A.current != null && A.current !== O;
    }),
    N = x.useCallback(() => {
      const B = b.current,
        w = T();
      if (!B || !w || ty(w)) return;
      const O = w.outerHeightStyle;
      (A.current !== O && ((A.current = O), (B.style.height = `${O}px`)),
        (B.style.overflow = w.overflowing ? 'hidden' : ''));
    }, [T]),
    k = x.useRef(-1);
  (ua(() => {
    const B = l0(N),
      w = b?.current;
    if (!w) return;
    const O = ca(w);
    O.addEventListener('resize', B);
    let D;
    return (
      typeof ResizeObserver < 'u' &&
        ((D = new ResizeObserver(() => {
          C() &&
            (D.unobserve(w),
            cancelAnimationFrame(k.current),
            N(),
            (k.current = requestAnimationFrame(() => {
              D.observe(w);
            })));
        })),
        D.observe(w)),
      () => {
        (B.clear(),
          cancelAnimationFrame(k.current),
          O.removeEventListener('resize', B),
          D && D.disconnect());
      }
    );
  }, [T, N, C]),
    ua(() => {
      N();
    }));
  const G = (B) => {
    h || N();
    const w = B.target,
      O = w.value.length,
      D = w.value.endsWith(`
`),
      P = w.selectionStart === O;
    (D && P && w.setSelectionRange(O, O), i && i(B));
  };
  return H.jsxs(x.Fragment, {
    children: [
      H.jsx('textarea', { value: p, onChange: G, ref: S, rows: f, style: d, ...g }),
      H.jsx('textarea', {
        'aria-hidden': !0,
        className: r.className,
        readOnly: !0,
        ref: z,
        tabIndex: -1,
        style: { ...GC.shadow, ...d, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function cr({ props: n, states: r, muiFormControl: o }) {
  return r.reduce((i, c) => ((i[c] = n[c]), o && typeof n[c] > 'u' && (i[c] = o[c]), i), {});
}
const nd = x.createContext(void 0);
function fr() {
  return x.useContext(nd);
}
function ey(n) {
  return n != null && !(Array.isArray(n) && n.length === 0);
}
function ps(n, r = !1) {
  return (
    n && ((ey(n.value) && n.value !== '') || (r && ey(n.defaultValue) && n.defaultValue !== ''))
  );
}
function PC(n) {
  return n.startAdornment;
}
function XC(n) {
  return te('MuiInputBase', n);
}
const sr = ee('MuiInputBase', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'adornedStart',
  'adornedEnd',
  'error',
  'sizeSmall',
  'multiline',
  'colorSecondary',
  'fullWidth',
  'hiddenLabel',
  'readOnly',
  'input',
  'inputSizeSmall',
  'inputMultiline',
  'inputTypeSearch',
  'inputAdornedStart',
  'inputAdornedEnd',
  'inputHiddenLabel',
]);
var ny;
const Ns = (n, r) => {
    const { ownerState: o } = n;
    return [
      r.root,
      o.formControl && r.formControl,
      o.startAdornment && r.adornedStart,
      o.endAdornment && r.adornedEnd,
      o.error && r.error,
      o.size === 'small' && r.sizeSmall,
      o.multiline && r.multiline,
      o.color && r[`color${ht(o.color)}`],
      o.fullWidth && r.fullWidth,
      o.hiddenLabel && r.hiddenLabel,
    ];
  },
  _s = (n, r) => {
    const { ownerState: o } = n;
    return [
      r.input,
      o.size === 'small' && r.inputSizeSmall,
      o.multiline && r.inputMultiline,
      o.type === 'search' && r.inputTypeSearch,
      o.startAdornment && r.inputAdornedStart,
      o.endAdornment && r.inputAdornedEnd,
      o.hiddenLabel && r.inputHiddenLabel,
    ];
  },
  KC = (n) => {
    const {
        classes: r,
        color: o,
        disabled: i,
        error: c,
        endAdornment: f,
        focused: d,
        formControl: p,
        fullWidth: g,
        hiddenLabel: h,
        multiline: b,
        readOnly: S,
        size: A,
        startAdornment: z,
        type: T,
      } = n,
      C = {
        root: [
          'root',
          `color${ht(o)}`,
          i && 'disabled',
          c && 'error',
          g && 'fullWidth',
          d && 'focused',
          p && 'formControl',
          A && A !== 'medium' && `size${ht(A)}`,
          b && 'multiline',
          z && 'adornedStart',
          f && 'adornedEnd',
          h && 'hiddenLabel',
          S && 'readOnly',
        ],
        input: [
          'input',
          i && 'disabled',
          T === 'search' && 'inputTypeSearch',
          b && 'inputMultiline',
          A === 'small' && 'inputSizeSmall',
          h && 'inputHiddenLabel',
          z && 'inputAdornedStart',
          f && 'inputAdornedEnd',
          S && 'readOnly',
        ],
      };
    return ne(C, XC, r);
  },
  Bs = ft('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: Ns })(
    ie(({ theme: n }) => ({
      ...n.typography.body1,
      color: (n.vars || n).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${sr.disabled}`]: { color: (n.vars || n).palette.text.disabled, cursor: 'default' },
      variants: [
        { props: ({ ownerState: r }) => r.multiline, style: { padding: '4px 0 5px' } },
        {
          props: ({ ownerState: r, size: o }) => r.multiline && o === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: r }) => r.fullWidth, style: { width: '100%' } },
      ],
    })),
  ),
  Ds = ft('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: _s })(
    ie(({ theme: n }) => {
      const r = n.palette.mode === 'light',
        o = {
          color: 'currentColor',
          ...(n.vars ? { opacity: n.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 }),
          transition: n.transitions.create('opacity', { duration: n.transitions.duration.shorter }),
        },
        i = { opacity: '0 !important' },
        c = n.vars ? { opacity: n.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 };
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': o,
        '&::-moz-placeholder': o,
        '&::-ms-input-placeholder': o,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${sr.formControl} &`]: {
          '&::-webkit-input-placeholder': i,
          '&::-moz-placeholder': i,
          '&::-ms-input-placeholder': i,
          '&:focus::-webkit-input-placeholder': c,
          '&:focus::-moz-placeholder': c,
          '&:focus::-ms-input-placeholder': c,
        },
        [`&.${sr.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (n.vars || n).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: f }) => !f.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: f }) => f.multiline,
            style: { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      };
    }),
  ),
  ay = Wf({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  ad = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiInputBase' }),
      {
        'aria-describedby': c,
        autoComplete: f,
        autoFocus: d,
        className: p,
        color: g,
        components: h = {},
        componentsProps: b = {},
        defaultValue: S,
        disabled: A,
        disableInjectingGlobalStyles: z,
        endAdornment: T,
        error: C,
        fullWidth: N = !1,
        id: k,
        inputComponent: G = 'input',
        inputProps: B = {},
        inputRef: w,
        margin: O,
        maxRows: D,
        minRows: P,
        multiline: Q = !1,
        name: J,
        onBlur: et,
        onChange: at,
        onClick: v,
        onFocus: F,
        onKeyDown: Y,
        onKeyUp: V,
        placeholder: M,
        readOnly: K,
        renderSuffix: ot,
        rows: nt,
        size: E,
        slotProps: X = {},
        slots: rt = {},
        startAdornment: lt,
        type: it = 'text',
        value: ct,
        ...ut
      } = i,
      At = B.value != null ? B.value : ct,
      { current: xt } = x.useRef(At != null),
      Nt = x.useRef(),
      bt = x.useCallback((Zt) => {}, []),
      Mt = We(Nt, w, B.ref, bt),
      [_t, he] = x.useState(!1),
      Ct = fr(),
      qt = cr({
        props: i,
        muiFormControl: Ct,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    ((qt.focused = Ct ? Ct.focused : _t),
      x.useEffect(() => {
        !Ct && A && _t && (he(!1), et && et());
      }, [Ct, A, _t, et]));
    const De = Ct && Ct.onFilled,
      Gt = Ct && Ct.onEmpty,
      se = x.useCallback(
        (Zt) => {
          ps(Zt) ? De && De() : Gt && Gt();
        },
        [De, Gt],
      );
    ua(() => {
      xt && se({ value: At });
    }, [At, se, xt]);
    const oe = (Zt) => {
        (F && F(Zt), B.onFocus && B.onFocus(Zt), Ct && Ct.onFocus ? Ct.onFocus(Zt) : he(!0));
      },
      de = (Zt) => {
        (et && et(Zt), B.onBlur && B.onBlur(Zt), Ct && Ct.onBlur ? Ct.onBlur(Zt) : he(!1));
      },
      Kt = (Zt, ...fa) => {
        if (!xt) {
          const Yn = Zt.target || Nt.current;
          if (Yn == null) throw new Error(ia(1));
          se({ value: Yn.value });
        }
        (B.onChange && B.onChange(Zt, ...fa), at && at(Zt, ...fa));
      };
    x.useEffect(() => {
      se(Nt.current);
    }, []);
    const dt = (Zt) => {
      (Nt.current && Zt.currentTarget === Zt.target && Nt.current.focus(), v && v(Zt));
    };
    let Je = G,
      ge = B;
    Q &&
      Je === 'input' &&
      (nt
        ? (ge = { type: void 0, minRows: nt, maxRows: nt, ...ge })
        : (ge = { type: void 0, maxRows: D, minRows: P, ...ge }),
      (Je = VC));
    const Tn = (Zt) => {
      se(Zt.animationName === 'mui-auto-fill-cancel' ? Nt.current : { value: 'x' });
    };
    x.useEffect(() => {
      Ct && Ct.setAdornedStart(!!lt);
    }, [Ct, lt]);
    const ue = {
        ...i,
        color: qt.color || 'primary',
        disabled: qt.disabled,
        endAdornment: T,
        error: qt.error,
        focused: qt.focused,
        formControl: Ct,
        fullWidth: N,
        hiddenLabel: qt.hiddenLabel,
        multiline: Q,
        size: qt.size,
        startAdornment: lt,
        type: it,
      },
      Tt = KC(ue),
      Qt = rt.root || h.Root || Bs,
      Ut = X.root || b.root || {},
      Ve = rt.input || h.Input || Ds;
    return (
      (ge = { ...ge, ...(X.input ?? b.input) }),
      H.jsxs(x.Fragment, {
        children: [
          !z && typeof ay == 'function' && (ny || (ny = H.jsx(ay, {}))),
          H.jsxs(Qt, {
            ...Ut,
            ref: o,
            onClick: dt,
            ...ut,
            ...(!cs(Qt) && { ownerState: { ...ue, ...Ut.ownerState } }),
            className: St(Tt.root, Ut.className, p, K && 'MuiInputBase-readOnly'),
            children: [
              lt,
              H.jsx(nd.Provider, {
                value: null,
                children: H.jsx(Ve, {
                  'aria-invalid': qt.error,
                  'aria-describedby': c,
                  autoComplete: f,
                  autoFocus: d,
                  defaultValue: S,
                  disabled: qt.disabled,
                  id: k,
                  onAnimationStart: Tn,
                  name: J,
                  placeholder: M,
                  readOnly: K,
                  required: qt.required,
                  rows: nt,
                  value: At,
                  onKeyDown: Y,
                  onKeyUp: V,
                  type: it,
                  ...ge,
                  ...(!cs(Ve) && { as: Je, ownerState: { ...ue, ...ge.ownerState } }),
                  ref: Mt,
                  className: St(Tt.input, ge.className, K && 'MuiInputBase-readOnly'),
                  onBlur: de,
                  onChange: Kt,
                  onFocus: oe,
                }),
              }),
              T,
              ot ? ot({ ...qt, startAdornment: lt }) : null,
            ],
          }),
        ],
      })
    );
  });
function QC(n) {
  return te('MuiInput', n);
}
const po = { ...sr, ...ee('MuiInput', ['root', 'underline', 'input']) };
function ZC(n) {
  return te('MuiOutlinedInput', n);
}
const kn = { ...sr, ...ee('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) };
function IC(n) {
  return te('MuiFilledInput', n);
}
const ol = {
    ...sr,
    ...ee('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel',
    ]),
  },
  FC = $a(H.jsx('path', { d: 'M7 10l5 5 5-5z' })),
  WC = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  JC = x.forwardRef(function (r, o) {
    const i = Ff(),
      c = {
        enter: i.transitions.duration.enteringScreen,
        exit: i.transitions.duration.leavingScreen,
      },
      {
        addEndListener: f,
        appear: d = !0,
        children: p,
        easing: g,
        in: h,
        onEnter: b,
        onEntered: S,
        onEntering: A,
        onExit: z,
        onExited: T,
        onExiting: C,
        style: N,
        timeout: k = c,
        TransitionComponent: G = Gn,
        ...B
      } = r,
      w = x.useRef(null),
      O = We(w, Uo(p), o),
      D = (Y) => (V) => {
        if (Y) {
          const M = w.current;
          V === void 0 ? Y(M) : Y(M, V);
        }
      },
      P = D(A),
      Q = D((Y, V) => {
        c0(Y);
        const M = us({ style: N, timeout: k, easing: g }, { mode: 'enter' });
        ((Y.style.webkitTransition = i.transitions.create('opacity', M)),
          (Y.style.transition = i.transitions.create('opacity', M)),
          b && b(Y, V));
      }),
      J = D(S),
      et = D(C),
      at = D((Y) => {
        const V = us({ style: N, timeout: k, easing: g }, { mode: 'exit' });
        ((Y.style.webkitTransition = i.transitions.create('opacity', V)),
          (Y.style.transition = i.transitions.create('opacity', V)),
          z && z(Y));
      }),
      v = D(T),
      F = (Y) => {
        f && f(w.current, Y);
      };
    return H.jsx(G, {
      appear: d,
      in: h,
      nodeRef: w,
      onEnter: Q,
      onEntered: J,
      onEntering: P,
      onExit: at,
      onExited: v,
      onExiting: et,
      addEndListener: F,
      timeout: k,
      ...B,
      children: (Y, { ownerState: V, ...M }) =>
        x.cloneElement(p, {
          style: {
            opacity: 0,
            visibility: Y === 'exited' && !h ? 'hidden' : void 0,
            ...WC[Y],
            ...N,
            ...p.props.style,
          },
          ref: O,
          ...M,
        }),
    });
  });
function tT(n) {
  return te('MuiBackdrop', n);
}
ee('MuiBackdrop', ['root', 'invisible']);
const eT = (n) => {
    const { classes: r, invisible: o } = n;
    return ne({ root: ['root', o && 'invisible'] }, tT, r);
  },
  nT = ft('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, o.invisible && r.invisible];
    },
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [{ props: { invisible: !0 }, style: { backgroundColor: 'transparent' } }],
  }),
  aT = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiBackdrop' }),
      {
        children: c,
        className: f,
        component: d = 'div',
        invisible: p = !1,
        open: g,
        components: h = {},
        componentsProps: b = {},
        slotProps: S = {},
        slots: A = {},
        TransitionComponent: z,
        transitionDuration: T,
        ...C
      } = i,
      N = { ...i, component: d, invisible: p },
      k = eT(N),
      G = { transition: z, root: h.Root, ...A },
      B = { ...b, ...S },
      w = { component: d, slots: G, slotProps: B },
      [O, D] = xe('root', {
        elementType: nT,
        externalForwardedProps: w,
        className: St(k.root, f),
        ownerState: N,
      }),
      [P, Q] = xe('transition', { elementType: JC, externalForwardedProps: w, ownerState: N });
    return H.jsx(P, {
      in: g,
      timeout: T,
      ...C,
      ...Q,
      children: H.jsx(O, { 'aria-hidden': !0, ...D, classes: k, ref: o, children: c }),
    });
  }),
  lT = ee('MuiBox', ['root']),
  rT = zs(),
  y0 = ZS({
    themeId: $n,
    defaultTheme: rT,
    defaultClassName: lT.root,
    generateClassName: Hy.generate,
  });
function oT(n) {
  return te('MuiButton', n);
}
const il = ee('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd',
  ]),
  iT = x.createContext({}),
  sT = x.createContext(void 0),
  uT = (n) => {
    const {
        color: r,
        disableElevation: o,
        fullWidth: i,
        size: c,
        variant: f,
        loading: d,
        loadingPosition: p,
        classes: g,
      } = n,
      h = {
        root: [
          'root',
          d && 'loading',
          f,
          `${f}${ht(r)}`,
          `size${ht(c)}`,
          `${f}Size${ht(c)}`,
          `color${ht(r)}`,
          o && 'disableElevation',
          i && 'fullWidth',
          d && `loadingPosition${ht(p)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${ht(c)}`],
        endIcon: ['icon', 'endIcon', `iconSize${ht(c)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      b = ne(h, oT, g);
    return { ...g, ...b };
  },
  v0 = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  cT = ft(h0, {
    shouldForwardProp: (n) => zn(n) || n === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        r[o.variant],
        r[`${o.variant}${ht(o.color)}`],
        r[`size${ht(o.size)}`],
        r[`${o.variant}Size${ht(o.size)}`],
        o.color === 'inherit' && r.colorInherit,
        o.disableElevation && r.disableElevation,
        o.fullWidth && r.fullWidth,
        o.loading && r.loading,
      ];
    },
  })(
    ie(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? n.palette.grey[300] : n.palette.grey[800],
        o = n.palette.mode === 'light' ? n.palette.grey.A100 : n.palette.grey[700];
      return {
        ...n.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: n.transitions.duration.short },
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${il.disabled}`]: { color: (n.vars || n).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (n.vars || n).shadows[2],
              '&:hover': {
                boxShadow: (n.vars || n).shadows[4],
                '@media (hover: none)': { boxShadow: (n.vars || n).shadows[2] },
              },
              '&:active': { boxShadow: (n.vars || n).shadows[8] },
              [`&.${il.focusVisible}`]: { boxShadow: (n.vars || n).shadows[6] },
              [`&.${il.disabled}`]: {
                color: (n.vars || n).palette.action.disabled,
                boxShadow: (n.vars || n).shadows[0],
                backgroundColor: (n.vars || n).palette.action.disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${il.disabled}`]: {
                border: `1px solid ${(n.vars || n).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              padding: '6px 8px',
              color: 'var(--variant-textColor)',
              backgroundColor: 'var(--variant-textBg)',
            },
          },
          ...Object.entries(n.palette)
            .filter(cn())
            .map(([i]) => ({
              props: { color: i },
              style: {
                '--variant-textColor': (n.vars || n).palette[i].main,
                '--variant-outlinedColor': (n.vars || n).palette[i].main,
                '--variant-outlinedBorder': n.alpha((n.vars || n).palette[i].main, 0.5),
                '--variant-containedColor': (n.vars || n).palette[i].contrastText,
                '--variant-containedBg': (n.vars || n).palette[i].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (n.vars || n).palette[i].dark,
                    '--variant-textBg': n.alpha(
                      (n.vars || n).palette[i].main,
                      (n.vars || n).palette.action.hoverOpacity,
                    ),
                    '--variant-outlinedBorder': (n.vars || n).palette[i].main,
                    '--variant-outlinedBg': n.alpha(
                      (n.vars || n).palette[i].main,
                      (n.vars || n).palette.action.hoverOpacity,
                    ),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': n.vars ? n.vars.palette.Button.inheritContainedBg : r,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': n.vars
                    ? n.vars.palette.Button.inheritContainedHoverBg
                    : o,
                  '--variant-textBg': n.alpha(
                    (n.vars || n).palette.text.primary,
                    (n.vars || n).palette.action.hoverOpacity,
                  ),
                  '--variant-outlinedBg': n.alpha(
                    (n.vars || n).palette.text.primary,
                    (n.vars || n).palette.action.hoverOpacity,
                  ),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${il.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${il.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: n.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: n.transitions.duration.short,
              }),
              [`&.${il.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    }),
  ),
  fT = ft('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.startIcon, o.loading && r.startIconLoadingStart, r[`iconSize${ht(o.size)}`]];
    },
  })(({ theme: n }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: 'small' }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: 'start', loading: !0 },
        style: {
          transition: n.transitions.create(['opacity'], { duration: n.transitions.duration.short }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: 'start', loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...v0,
    ],
  })),
  dT = ft('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.endIcon, o.loading && r.endIconLoadingEnd, r[`iconSize${ht(o.size)}`]];
    },
  })(({ theme: n }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: 'small' }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: 'end', loading: !0 },
        style: {
          transition: n.transitions.create(['opacity'], { duration: n.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: 'end', loading: !0, fullWidth: !0 }, style: { marginLeft: -8 } },
      ...v0,
    ],
  })),
  pT = ft('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: n }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    variants: [
      { props: { loading: !0 }, style: { display: 'flex' } },
      { props: { loadingPosition: 'start' }, style: { left: 14 } },
      { props: { loadingPosition: 'start', size: 'small' }, style: { left: 10 } },
      { props: { variant: 'text', loadingPosition: 'start' }, style: { left: 6 } },
      {
        props: { loadingPosition: 'center' },
        style: {
          left: '50%',
          transform: 'translate(-50%)',
          color: (n.vars || n).palette.action.disabled,
        },
      },
      { props: { loadingPosition: 'end' }, style: { right: 14 } },
      { props: { loadingPosition: 'end', size: 'small' }, style: { right: 10 } },
      { props: { variant: 'text', loadingPosition: 'end' }, style: { right: 6 } },
      {
        props: { loadingPosition: 'start', fullWidth: !0 },
        style: { position: 'relative', left: -10 },
      },
      {
        props: { loadingPosition: 'end', fullWidth: !0 },
        style: { position: 'relative', right: -10 },
      },
    ],
  })),
  ly = ft('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  mT = x.forwardRef(function (r, o) {
    const i = x.useContext(iT),
      c = x.useContext(sT),
      f = Ro(i, r),
      d = ae({ props: f, name: 'MuiButton' }),
      {
        children: p,
        color: g = 'primary',
        component: h = 'button',
        className: b,
        disabled: S = !1,
        disableElevation: A = !1,
        disableFocusRipple: z = !1,
        endIcon: T,
        focusVisibleClassName: C,
        fullWidth: N = !1,
        id: k,
        loading: G = null,
        loadingIndicator: B,
        loadingPosition: w = 'center',
        size: O = 'medium',
        startIcon: D,
        type: P,
        variant: Q = 'text',
        ...J
      } = d,
      et = Do(k),
      at = B ?? H.jsx(g0, { 'aria-labelledby': et, color: 'inherit', size: 16 }),
      v = {
        ...d,
        color: g,
        component: h,
        disabled: S,
        disableElevation: A,
        disableFocusRipple: z,
        fullWidth: N,
        loading: G,
        loadingIndicator: at,
        loadingPosition: w,
        size: O,
        type: P,
        variant: Q,
      },
      F = uT(v),
      Y =
        (D || (G && w === 'start')) &&
        H.jsx(fT, {
          className: F.startIcon,
          ownerState: v,
          children: D || H.jsx(ly, { className: F.loadingIconPlaceholder, ownerState: v }),
        }),
      V =
        (T || (G && w === 'end')) &&
        H.jsx(dT, {
          className: F.endIcon,
          ownerState: v,
          children: T || H.jsx(ly, { className: F.loadingIconPlaceholder, ownerState: v }),
        }),
      M = c || '',
      K =
        typeof G == 'boolean'
          ? H.jsx('span', {
              className: F.loadingWrapper,
              style: { display: 'contents' },
              children:
                G && H.jsx(pT, { className: F.loadingIndicator, ownerState: v, children: at }),
            })
          : null;
    return H.jsxs(cT, {
      ownerState: v,
      className: St(i.className, F.root, b, M),
      component: h,
      disabled: S || G,
      focusRipple: !z,
      focusVisibleClassName: St(F.focusVisible, C),
      ref: o,
      type: P,
      id: G ? et : k,
      ...J,
      classes: F,
      children: [Y, w !== 'end' && K, p, w === 'end' && K, V],
    });
  }),
  hT = Gx({
    createStyledComponent: ft('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (n, r) => {
        const { ownerState: o } = n;
        return [
          r.root,
          r[`maxWidth${ht(String(o.maxWidth))}`],
          o.fixed && r.fixed,
          o.disableGutters && r.disableGutters,
        ];
      },
    }),
    useThemeProps: (n) => ae({ props: n, name: 'MuiContainer' }),
  }),
  Mf = typeof Wf({}) == 'function',
  gT = (n, r) => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    WebkitTextSizeAdjust: '100%',
    ...(r && !n.vars && { colorScheme: n.palette.mode }),
  }),
  yT = (n) => ({
    color: (n.vars || n).palette.text.primary,
    ...n.typography.body1,
    backgroundColor: (n.vars || n).palette.background.default,
    '@media print': { backgroundColor: (n.vars || n).palette.common.white },
  }),
  b0 = (n, r = !1) => {
    const o = {};
    r &&
      n.colorSchemes &&
      typeof n.getColorSchemeSelector == 'function' &&
      Object.entries(n.colorSchemes).forEach(([f, d]) => {
        const p = n.getColorSchemeSelector(f);
        p.startsWith('@')
          ? (o[p] = { ':root': { colorScheme: d.palette?.mode } })
          : (o[p.replace(/\s*&/, '')] = { colorScheme: d.palette?.mode });
      });
    let i = {
      html: gT(n, r),
      '*, *::before, *::after': { boxSizing: 'inherit' },
      'strong, b': { fontWeight: n.typography.fontWeightBold },
      body: {
        margin: 0,
        ...yT(n),
        '&::backdrop': { backgroundColor: (n.vars || n).palette.background.default },
      },
      ...o,
    };
    const c = n.components?.MuiCssBaseline?.styleOverrides;
    return (c && (i = [i, c]), i);
  },
  as = 'mui-ecs',
  vT = (n) => {
    const r = b0(n, !1),
      o = Array.isArray(r) ? r[0] : r;
    return (
      !n.vars && o && (o.html[`:root:has(${as})`] = { colorScheme: n.palette.mode }),
      n.colorSchemes &&
        Object.entries(n.colorSchemes).forEach(([i, c]) => {
          const f = n.getColorSchemeSelector(i);
          f.startsWith('@')
            ? (o[f] = { [`:root:not(:has(.${as}))`]: { colorScheme: c.palette?.mode } })
            : (o[f.replace(/\s*&/, '')] = {
                [`&:not(:has(.${as}))`]: { colorScheme: c.palette?.mode },
              });
        }),
      r
    );
  },
  bT = Wf(Mf ? ({ theme: n, enableColorScheme: r }) => b0(n, r) : ({ theme: n }) => vT(n));
function ST(n) {
  const r = ae({ props: n, name: 'MuiCssBaseline' }),
    { children: o, enableColorScheme: i = !1 } = r;
  return H.jsxs(x.Fragment, {
    children: [
      Mf && H.jsx(bT, { enableColorScheme: i }),
      !Mf && !i && H.jsx('span', { className: as, style: { display: 'none' } }),
      o,
    ],
  });
}
function S0(n = window) {
  const r = n.document.documentElement.clientWidth;
  return n.innerWidth - r;
}
function xT(n) {
  const r = On(n);
  return r.body === n
    ? ca(n).innerWidth > r.documentElement.clientWidth
    : n.scrollHeight > n.clientHeight;
}
function So(n, r) {
  r ? n.setAttribute('aria-hidden', 'true') : n.removeAttribute('aria-hidden');
}
function ry(n) {
  return parseInt(ca(n).getComputedStyle(n).paddingRight, 10) || 0;
}
function CT(n) {
  const o = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK',
    ].includes(n.tagName),
    i = n.tagName === 'INPUT' && n.getAttribute('type') === 'hidden';
  return o || i;
}
function oy(n, r, o, i, c) {
  const f = [r, o, ...i];
  [].forEach.call(n.children, (d) => {
    const p = !f.includes(d),
      g = !CT(d);
    p && g && So(d, c);
  });
}
function uf(n, r) {
  let o = -1;
  return (n.some((i, c) => (r(i) ? ((o = c), !0) : !1)), o);
}
function TT(n, r) {
  const o = [],
    i = n.container;
  if (!r.disableScrollLock) {
    if (xT(i)) {
      const d = S0(ca(i));
      (o.push({ value: i.style.paddingRight, property: 'padding-right', el: i }),
        (i.style.paddingRight = `${ry(i) + d}px`));
      const p = On(i).querySelectorAll('.mui-fixed');
      [].forEach.call(p, (g) => {
        (o.push({ value: g.style.paddingRight, property: 'padding-right', el: g }),
          (g.style.paddingRight = `${ry(g) + d}px`));
      });
    }
    let f;
    if (i.parentNode instanceof DocumentFragment) f = On(i).body;
    else {
      const d = i.parentElement,
        p = ca(i);
      f = d?.nodeName === 'HTML' && p.getComputedStyle(d).overflowY === 'scroll' ? d : i;
    }
    (o.push(
      { value: f.style.overflow, property: 'overflow', el: f },
      { value: f.style.overflowX, property: 'overflow-x', el: f },
      { value: f.style.overflowY, property: 'overflow-y', el: f },
    ),
      (f.style.overflow = 'hidden'));
  }
  return () => {
    o.forEach(({ value: f, el: d, property: p }) => {
      f ? d.style.setProperty(p, f) : d.style.removeProperty(p);
    });
  };
}
function ET(n) {
  const r = [];
  return (
    [].forEach.call(n.children, (o) => {
      o.getAttribute('aria-hidden') === 'true' && r.push(o);
    }),
    r
  );
}
class RT {
  constructor() {
    ((this.modals = []), (this.containers = []));
  }
  add(r, o) {
    let i = this.modals.indexOf(r);
    if (i !== -1) return i;
    ((i = this.modals.length), this.modals.push(r), r.modalRef && So(r.modalRef, !1));
    const c = ET(o);
    oy(o, r.mount, r.modalRef, c, !0);
    const f = uf(this.containers, (d) => d.container === o);
    return f !== -1
      ? (this.containers[f].modals.push(r), i)
      : (this.containers.push({ modals: [r], container: o, restore: null, hiddenSiblings: c }), i);
  }
  mount(r, o) {
    const i = uf(this.containers, (f) => f.modals.includes(r)),
      c = this.containers[i];
    c.restore || (c.restore = TT(c, o));
  }
  remove(r, o = !0) {
    const i = this.modals.indexOf(r);
    if (i === -1) return i;
    const c = uf(this.containers, (d) => d.modals.includes(r)),
      f = this.containers[c];
    if ((f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(i, 1), f.modals.length === 0))
      (f.restore && f.restore(),
        r.modalRef && So(r.modalRef, o),
        oy(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1),
        this.containers.splice(c, 1));
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && So(d.modalRef, !1);
    }
    return i;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const AT = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function MT(n) {
  const r = parseInt(n.getAttribute('tabindex') || '', 10);
  return Number.isNaN(r)
    ? n.contentEditable === 'true' ||
      ((n.nodeName === 'AUDIO' || n.nodeName === 'VIDEO' || n.nodeName === 'DETAILS') &&
        n.getAttribute('tabindex') === null)
      ? 0
      : n.tabIndex
    : r;
}
function OT(n) {
  if (n.tagName !== 'INPUT' || n.type !== 'radio' || !n.name) return !1;
  const r = (i) => n.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let o = r(`[name="${n.name}"]:checked`);
  return (o || (o = r(`[name="${n.name}"]`)), o !== n);
}
function zT(n) {
  return !(n.disabled || (n.tagName === 'INPUT' && n.type === 'hidden') || OT(n));
}
function wT(n) {
  const r = [],
    o = [];
  return (
    Array.from(n.querySelectorAll(AT)).forEach((i, c) => {
      const f = MT(i);
      f === -1 ||
        !zT(i) ||
        (f === 0 ? r.push(i) : o.push({ documentOrder: c, tabIndex: f, node: i }));
    }),
    o
      .sort((i, c) =>
        i.tabIndex === c.tabIndex ? i.documentOrder - c.documentOrder : i.tabIndex - c.tabIndex,
      )
      .map((i) => i.node)
      .concat(r)
  );
}
function NT() {
  return !0;
}
function _T(n) {
  const {
      children: r,
      disableAutoFocus: o = !1,
      disableEnforceFocus: i = !1,
      disableRestoreFocus: c = !1,
      getTabbable: f = wT,
      isEnabled: d = NT,
      open: p,
    } = n,
    g = x.useRef(!1),
    h = x.useRef(null),
    b = x.useRef(null),
    S = x.useRef(null),
    A = x.useRef(null),
    z = x.useRef(!1),
    T = x.useRef(null),
    C = We(Uo(r), T),
    N = x.useRef(null);
  (x.useEffect(() => {
    !p || !T.current || (z.current = !o);
  }, [o, p]),
    x.useEffect(() => {
      if (!p || !T.current) return;
      const B = On(T.current);
      return (
        T.current.contains(B.activeElement) ||
          (T.current.hasAttribute('tabIndex') || T.current.setAttribute('tabIndex', '-1'),
          z.current && T.current.focus()),
        () => {
          c ||
            (S.current && S.current.focus && ((g.current = !0), S.current.focus()),
            (S.current = null));
        }
      );
    }, [p]),
    x.useEffect(() => {
      if (!p || !T.current) return;
      const B = On(T.current),
        w = (P) => {
          ((N.current = P),
            !(i || !d() || P.key !== 'Tab') &&
              B.activeElement === T.current &&
              P.shiftKey &&
              ((g.current = !0), b.current && b.current.focus()));
        },
        O = () => {
          const P = T.current;
          if (P === null) return;
          if (!B.hasFocus() || !d() || g.current) {
            g.current = !1;
            return;
          }
          if (
            P.contains(B.activeElement) ||
            (i && B.activeElement !== h.current && B.activeElement !== b.current)
          )
            return;
          if (B.activeElement !== A.current) A.current = null;
          else if (A.current !== null) return;
          if (!z.current) return;
          let Q = [];
          if (
            ((B.activeElement === h.current || B.activeElement === b.current) && (Q = f(T.current)),
            Q.length > 0)
          ) {
            const J = !!(N.current?.shiftKey && N.current?.key === 'Tab'),
              et = Q[0],
              at = Q[Q.length - 1];
            typeof et != 'string' && typeof at != 'string' && (J ? at.focus() : et.focus());
          } else P.focus();
        };
      (B.addEventListener('focusin', O), B.addEventListener('keydown', w, !0));
      const D = setInterval(() => {
        B.activeElement && B.activeElement.tagName === 'BODY' && O();
      }, 50);
      return () => {
        (clearInterval(D),
          B.removeEventListener('focusin', O),
          B.removeEventListener('keydown', w, !0));
      };
    }, [o, i, c, d, p, f]));
  const k = (B) => {
      (S.current === null && (S.current = B.relatedTarget),
        (z.current = !0),
        (A.current = B.target));
      const w = r.props.onFocus;
      w && w(B);
    },
    G = (B) => {
      (S.current === null && (S.current = B.relatedTarget), (z.current = !0));
    };
  return H.jsxs(x.Fragment, {
    children: [
      H.jsx('div', { tabIndex: p ? 0 : -1, onFocus: G, ref: h, 'data-testid': 'sentinelStart' }),
      x.cloneElement(r, { ref: C, onFocus: k }),
      H.jsx('div', { tabIndex: p ? 0 : -1, onFocus: G, ref: b, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function BT(n) {
  return typeof n == 'function' ? n() : n;
}
function DT(n) {
  return n ? n.props.hasOwnProperty('in') : !1;
}
const iy = () => {},
  Fi = new RT();
function UT(n) {
  const {
      container: r,
      disableEscapeKeyDown: o = !1,
      disableScrollLock: i = !1,
      closeAfterTransition: c = !1,
      onTransitionEnter: f,
      onTransitionExited: d,
      children: p,
      onClose: g,
      open: h,
      rootRef: b,
    } = n,
    S = x.useRef({}),
    A = x.useRef(null),
    z = x.useRef(null),
    T = We(z, b),
    [C, N] = x.useState(!h),
    k = DT(p);
  let G = !0;
  (n['aria-hidden'] === 'false' || n['aria-hidden'] === !1) && (G = !1);
  const B = () => On(A.current),
    w = () => ((S.current.modalRef = z.current), (S.current.mount = A.current), S.current),
    O = () => {
      (Fi.mount(w(), { disableScrollLock: i }), z.current && (z.current.scrollTop = 0));
    },
    D = dl(() => {
      const V = BT(r) || B().body;
      (Fi.add(w(), V), z.current && O());
    }),
    P = () => Fi.isTopModal(w()),
    Q = dl((V) => {
      ((A.current = V), V && (h && P() ? O() : z.current && So(z.current, G)));
    }),
    J = x.useCallback(() => {
      Fi.remove(w(), G);
    }, [G]);
  (x.useEffect(
    () => () => {
      J();
    },
    [J],
  ),
    x.useEffect(() => {
      h ? D() : (!k || !c) && J();
    }, [h, J, k, c, D]));
  const et = (V) => (M) => {
      (V.onKeyDown?.(M),
        !(M.key !== 'Escape' || M.which === 229 || !P()) &&
          (o || (M.stopPropagation(), g && g(M, 'escapeKeyDown'))));
    },
    at = (V) => (M) => {
      (V.onClick?.(M), M.target === M.currentTarget && g && g(M, 'backdropClick'));
    };
  return {
    getRootProps: (V = {}) => {
      const M = p0(n);
      (delete M.onTransitionEnter, delete M.onTransitionExited);
      const K = { ...M, ...V };
      return { role: 'presentation', ...K, onKeyDown: et(K), ref: T };
    },
    getBackdropProps: (V = {}) => {
      const M = V;
      return { 'aria-hidden': !0, ...M, onClick: at(M), open: h };
    },
    getTransitionProps: () => {
      const V = () => {
          (N(!1), f && f());
        },
        M = () => {
          (N(!0), d && d(), c && J());
        };
      return { onEnter: Gg(V, p?.props.onEnter ?? iy), onExited: Gg(M, p?.props.onExited ?? iy) };
    },
    rootRef: T,
    portalRef: Q,
    isTopModal: P,
    exited: C,
    hasTransition: k,
  };
}
function kT(n) {
  return te('MuiModal', n);
}
ee('MuiModal', ['root', 'hidden', 'backdrop']);
const jT = (n) => {
    const { open: r, exited: o, classes: i } = n;
    return ne({ root: ['root', !r && o && 'hidden'], backdrop: ['backdrop'] }, kT, i);
  },
  LT = ft('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, !o.open && o.exited && r.hidden];
    },
  })(
    ie(({ theme: n }) => ({
      position: 'fixed',
      zIndex: (n.vars || n).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        { props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: 'hidden' } },
      ],
    })),
  ),
  HT = ft(aT, { name: 'MuiModal', slot: 'Backdrop' })({ zIndex: -1 }),
  $T = x.forwardRef(function (r, o) {
    const i = ae({ name: 'MuiModal', props: r }),
      {
        BackdropComponent: c = HT,
        BackdropProps: f,
        classes: d,
        className: p,
        closeAfterTransition: g = !1,
        children: h,
        container: b,
        component: S,
        components: A = {},
        componentsProps: z = {},
        disableAutoFocus: T = !1,
        disableEnforceFocus: C = !1,
        disableEscapeKeyDown: N = !1,
        disablePortal: k = !1,
        disableRestoreFocus: G = !1,
        disableScrollLock: B = !1,
        hideBackdrop: w = !1,
        keepMounted: O = !1,
        onClose: D,
        onTransitionEnter: P,
        onTransitionExited: Q,
        open: J,
        slotProps: et = {},
        slots: at = {},
        theme: v,
        ...F
      } = i,
      Y = {
        ...i,
        closeAfterTransition: g,
        disableAutoFocus: T,
        disableEnforceFocus: C,
        disableEscapeKeyDown: N,
        disablePortal: k,
        disableRestoreFocus: G,
        disableScrollLock: B,
        hideBackdrop: w,
        keepMounted: O,
      },
      {
        getRootProps: V,
        getBackdropProps: M,
        getTransitionProps: K,
        portalRef: ot,
        isTopModal: nt,
        exited: E,
        hasTransition: X,
      } = UT({ ...Y, rootRef: o }),
      rt = { ...Y, exited: E },
      lt = jT(rt),
      it = {};
    if ((h.props.tabIndex === void 0 && (it.tabIndex = '-1'), X)) {
      const { onEnter: bt, onExited: Mt } = K();
      ((it.onEnter = bt), (it.onExited = Mt));
    }
    const ct = { slots: { root: A.Root, backdrop: A.Backdrop, ...at }, slotProps: { ...z, ...et } },
      [ut, At] = xe('root', {
        ref: o,
        elementType: LT,
        externalForwardedProps: { ...ct, ...F, component: S },
        getSlotProps: V,
        ownerState: rt,
        className: St(p, lt?.root, !rt.open && rt.exited && lt?.hidden),
      }),
      [xt, Nt] = xe('backdrop', {
        ref: f?.ref,
        elementType: c,
        externalForwardedProps: ct,
        shouldForwardComponentProp: !0,
        additionalProps: f,
        getSlotProps: (bt) =>
          M({
            ...bt,
            onClick: (Mt) => {
              bt?.onClick && bt.onClick(Mt);
            },
          }),
        className: St(f?.className, lt?.backdrop),
        ownerState: rt,
      });
    return !O && !J && (!X || E)
      ? null
      : H.jsx(qC, {
          ref: ot,
          container: b,
          disablePortal: k,
          children: H.jsxs(ut, {
            ...At,
            children: [
              !w && c ? H.jsx(xt, { ...Nt }) : null,
              H.jsx(_T, {
                disableEnforceFocus: C,
                disableAutoFocus: T,
                disableRestoreFocus: G,
                isEnabled: nt,
                open: J,
                children: x.cloneElement(h, it),
              }),
            ],
          }),
        });
  }),
  qT = (n) => {
    const {
        classes: r,
        disableUnderline: o,
        startAdornment: i,
        endAdornment: c,
        size: f,
        hiddenLabel: d,
        multiline: p,
      } = n,
      g = {
        root: [
          'root',
          !o && 'underline',
          i && 'adornedStart',
          c && 'adornedEnd',
          f === 'small' && `size${ht(f)}`,
          d && 'hiddenLabel',
          p && 'multiline',
        ],
        input: ['input'],
      },
      h = ne(g, IC, r);
    return { ...r, ...h };
  },
  GT = ft(Bs, {
    shouldForwardProp: (n) => zn(n) || n === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [...Ns(n, r), !o.disableUnderline && r.underline];
    },
  })(
    ie(({ theme: n }) => {
      const r = n.palette.mode === 'light',
        o = r ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        i = r ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        c = r ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        f = r ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      return {
        position: 'relative',
        backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (n.vars || n).shape.borderRadius,
        borderTopRightRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create('background-color', {
          duration: n.transitions.duration.shorter,
          easing: n.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.hoverBg : c,
          '@media (hover: none)': { backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i },
        },
        [`&.${ol.focused}`]: { backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i },
        [`&.${ol.disabled}`]: {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.disabledBg : f,
        },
        variants: [
          {
            props: ({ ownerState: d }) => !d.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: n.transitions.create('transform', {
                  duration: n.transitions.duration.shorter,
                  easing: n.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${ol.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${ol.error}`]: {
                '&::before, &::after': { borderBottomColor: (n.vars || n).palette.error.main },
              },
              '&::before': {
                borderBottom: `1px solid ${n.vars ? n.alpha(n.vars.palette.common.onBackground, n.vars.opacity.inputUnderline) : o}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: n.transitions.create('border-bottom-color', {
                  duration: n.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${ol.disabled}, .${ol.error}):before`]: {
                borderBottom: `1px solid ${(n.vars || n).palette.text.primary}`,
              },
              [`&.${ol.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(n.palette)
            .filter(cn())
            .map(([d]) => ({
              props: { disableUnderline: !1, color: d },
              style: {
                '&::after': { borderBottom: `2px solid ${(n.vars || n).palette[d]?.main}` },
              },
            })),
          { props: ({ ownerState: d }) => d.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: d }) => d.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: d }) => d.multiline, style: { padding: '25px 12px 8px' } },
          {
            props: ({ ownerState: d, size: p }) => d.multiline && p === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: d }) => d.multiline && d.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: d }) => d.multiline && d.hiddenLabel && d.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  YT = ft(Ds, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: _s })(
    ie(({ theme: n }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!n.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: n.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: n.palette.mode === 'light' ? null : '#fff',
          caretColor: n.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(n.vars && {
        '&:-webkit-autofill': { borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' },
        [n.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { paddingTop: 21, paddingBottom: 4 } },
        {
          props: ({ ownerState: r }) => r.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: r }) => r.hiddenLabel && r.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: r }) => r.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
        },
      ],
    })),
  ),
  ld = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiFilledInput' }),
      {
        disableUnderline: c = !1,
        components: f = {},
        componentsProps: d,
        fullWidth: p = !1,
        hiddenLabel: g,
        inputComponent: h = 'input',
        multiline: b = !1,
        slotProps: S,
        slots: A = {},
        type: z = 'text',
        ...T
      } = i,
      C = { ...i, disableUnderline: c, fullWidth: p, inputComponent: h, multiline: b, type: z },
      N = qT(i),
      k = { root: { ownerState: C }, input: { ownerState: C } },
      G = (S ?? d) ? Ye(k, S ?? d) : k,
      B = A.root ?? f.Root ?? GT,
      w = A.input ?? f.Input ?? YT;
    return H.jsx(ad, {
      slots: { root: B, input: w },
      slotProps: G,
      fullWidth: p,
      inputComponent: h,
      multiline: b,
      ref: o,
      type: z,
      ...T,
      classes: N,
    });
  });
ld.muiName = 'Input';
function VT(n) {
  return te('MuiFormControl', n);
}
ee('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const PT = (n) => {
    const { classes: r, margin: o, fullWidth: i } = n,
      c = { root: ['root', o !== 'none' && `margin${ht(o)}`, i && 'fullWidth'] };
    return ne(c, VT, r);
  },
  XT = ft('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[`margin${ht(o.margin)}`], o.fullWidth && r.fullWidth];
    },
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      { props: { margin: 'normal' }, style: { marginTop: 16, marginBottom: 8 } },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } },
    ],
  }),
  KT = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiFormControl' }),
      {
        children: c,
        className: f,
        color: d = 'primary',
        component: p = 'div',
        disabled: g = !1,
        error: h = !1,
        focused: b,
        fullWidth: S = !1,
        hiddenLabel: A = !1,
        margin: z = 'none',
        required: T = !1,
        size: C = 'medium',
        variant: N = 'outlined',
        ...k
      } = i,
      G = {
        ...i,
        color: d,
        component: p,
        disabled: g,
        error: h,
        fullWidth: S,
        hiddenLabel: A,
        margin: z,
        required: T,
        size: C,
        variant: N,
      },
      B = PT(G),
      [w, O] = x.useState(() => {
        let V = !1;
        return (
          c &&
            x.Children.forEach(c, (M) => {
              if (!of(M, ['Input', 'Select'])) return;
              const K = of(M, ['Select']) ? M.props.input : M;
              K && PC(K.props) && (V = !0);
            }),
          V
        );
      }),
      [D, P] = x.useState(() => {
        let V = !1;
        return (
          c &&
            x.Children.forEach(c, (M) => {
              of(M, ['Input', 'Select']) &&
                (ps(M.props, !0) || ps(M.props.inputProps, !0)) &&
                (V = !0);
            }),
          V
        );
      }),
      [Q, J] = x.useState(!1);
    g && Q && J(!1);
    const et = b !== void 0 && !g ? b : Q;
    let at;
    x.useRef(!1);
    const v = x.useCallback(() => {
        P(!0);
      }, []),
      F = x.useCallback(() => {
        P(!1);
      }, []),
      Y = x.useMemo(
        () => ({
          adornedStart: w,
          setAdornedStart: O,
          color: d,
          disabled: g,
          error: h,
          filled: D,
          focused: et,
          fullWidth: S,
          hiddenLabel: A,
          size: C,
          onBlur: () => {
            J(!1);
          },
          onFocus: () => {
            J(!0);
          },
          onEmpty: F,
          onFilled: v,
          registerEffect: at,
          required: T,
          variant: N,
        }),
        [w, d, g, h, D, et, S, A, at, F, v, T, C, N],
      );
    return H.jsx(nd.Provider, {
      value: Y,
      children: H.jsx(XT, {
        as: p,
        ownerState: G,
        className: St(B.root, f),
        ref: o,
        ...k,
        children: c,
      }),
    });
  });
function QT(n) {
  return te('MuiFormHelperText', n);
}
const sy = ee('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required',
]);
var uy;
const ZT = (n) => {
    const {
        classes: r,
        contained: o,
        size: i,
        disabled: c,
        error: f,
        filled: d,
        focused: p,
        required: g,
      } = n,
      h = {
        root: [
          'root',
          c && 'disabled',
          f && 'error',
          i && `size${ht(i)}`,
          o && 'contained',
          p && 'focused',
          d && 'filled',
          g && 'required',
        ],
      };
    return ne(h, QT, r);
  },
  IT = ft('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.size && r[`size${ht(o.size)}`],
        o.contained && r.contained,
        o.filled && r.filled,
      ];
    },
  })(
    ie(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${sy.disabled}`]: { color: (n.vars || n).palette.text.disabled },
      [`&.${sy.error}`]: { color: (n.vars || n).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: r }) => r.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    })),
  ),
  FT = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiFormHelperText' }),
      {
        children: c,
        className: f,
        component: d = 'p',
        disabled: p,
        error: g,
        filled: h,
        focused: b,
        margin: S,
        required: A,
        variant: z,
        ...T
      } = i,
      C = fr(),
      N = cr({
        props: i,
        muiFormControl: C,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required'],
      }),
      k = {
        ...i,
        component: d,
        contained: N.variant === 'filled' || N.variant === 'outlined',
        variant: N.variant,
        size: N.size,
        disabled: N.disabled,
        error: N.error,
        filled: N.filled,
        focused: N.focused,
        required: N.required,
      };
    delete k.ownerState;
    const G = ZT(k);
    return H.jsx(IT, {
      as: d,
      className: St(G.root, f),
      ref: o,
      ...T,
      ownerState: k,
      children:
        c === ' '
          ? uy ||
            (uy = H.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
          : c,
    });
  });
function WT(n) {
  return te('MuiFormLabel', n);
}
const xo = ee('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  JT = (n) => {
    const { classes: r, color: o, focused: i, disabled: c, error: f, filled: d, required: p } = n,
      g = {
        root: [
          'root',
          `color${ht(o)}`,
          c && 'disabled',
          f && 'error',
          d && 'filled',
          i && 'focused',
          p && 'required',
        ],
        asterisk: ['asterisk', f && 'error'],
      };
    return ne(g, WT, r);
  },
  tE = ft('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, o.color === 'secondary' && r.colorSecondary, o.filled && r.filled];
    },
  })(
    ie(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(n.palette)
          .filter(cn())
          .map(([r]) => ({
            props: { color: r },
            style: { [`&.${xo.focused}`]: { color: (n.vars || n).palette[r].main } },
          })),
        {
          props: {},
          style: {
            [`&.${xo.disabled}`]: { color: (n.vars || n).palette.text.disabled },
            [`&.${xo.error}`]: { color: (n.vars || n).palette.error.main },
          },
        },
      ],
    })),
  ),
  eE = ft('span', { name: 'MuiFormLabel', slot: 'Asterisk' })(
    ie(({ theme: n }) => ({ [`&.${xo.error}`]: { color: (n.vars || n).palette.error.main } })),
  ),
  nE = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiFormLabel' }),
      {
        children: c,
        className: f,
        color: d,
        component: p = 'label',
        disabled: g,
        error: h,
        filled: b,
        focused: S,
        required: A,
        ...z
      } = i,
      T = fr(),
      C = cr({
        props: i,
        muiFormControl: T,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      N = {
        ...i,
        color: C.color || 'primary',
        component: p,
        disabled: C.disabled,
        error: C.error,
        filled: C.filled,
        focused: C.focused,
        required: C.required,
      },
      k = JT(N);
    return H.jsxs(tE, {
      as: p,
      ownerState: N,
      className: St(k.root, f),
      ref: o,
      ...z,
      children: [
        c,
        C.required &&
          H.jsxs(eE, {
            ownerState: N,
            'aria-hidden': !0,
            className: k.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  });
function Of(n) {
  return `scale(${n}, ${n ** 2})`;
}
const aE = {
    entering: { opacity: 1, transform: Of(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  cf =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  zf = x.forwardRef(function (r, o) {
    const {
        addEndListener: i,
        appear: c = !0,
        children: f,
        easing: d,
        in: p,
        onEnter: g,
        onEntered: h,
        onEntering: b,
        onExit: S,
        onExited: A,
        onExiting: z,
        style: T,
        timeout: C = 'auto',
        TransitionComponent: N = Gn,
        ...k
      } = r,
      G = u0(),
      B = x.useRef(),
      w = Ff(),
      O = x.useRef(null),
      D = We(O, Uo(f), o),
      P = (V) => (M) => {
        if (V) {
          const K = O.current;
          M === void 0 ? V(K) : V(K, M);
        }
      },
      Q = P(b),
      J = P((V, M) => {
        c0(V);
        const {
          duration: K,
          delay: ot,
          easing: nt,
        } = us({ style: T, timeout: C, easing: d }, { mode: 'enter' });
        let E;
        (C === 'auto'
          ? ((E = w.transitions.getAutoHeightDuration(V.clientHeight)), (B.current = E))
          : (E = K),
          (V.style.transition = [
            w.transitions.create('opacity', { duration: E, delay: ot }),
            w.transitions.create('transform', {
              duration: cf ? E : E * 0.666,
              delay: ot,
              easing: nt,
            }),
          ].join(',')),
          g && g(V, M));
      }),
      et = P(h),
      at = P(z),
      v = P((V) => {
        const {
          duration: M,
          delay: K,
          easing: ot,
        } = us({ style: T, timeout: C, easing: d }, { mode: 'exit' });
        let nt;
        (C === 'auto'
          ? ((nt = w.transitions.getAutoHeightDuration(V.clientHeight)), (B.current = nt))
          : (nt = M),
          (V.style.transition = [
            w.transitions.create('opacity', { duration: nt, delay: K }),
            w.transitions.create('transform', {
              duration: cf ? nt : nt * 0.666,
              delay: cf ? K : K || nt * 0.333,
              easing: ot,
            }),
          ].join(',')),
          (V.style.opacity = 0),
          (V.style.transform = Of(0.75)),
          S && S(V));
      }),
      F = P(A),
      Y = (V) => {
        (C === 'auto' && G.start(B.current || 0, V), i && i(O.current, V));
      };
    return H.jsx(N, {
      appear: c,
      in: p,
      nodeRef: O,
      onEnter: J,
      onEntered: et,
      onEntering: Q,
      onExit: v,
      onExited: F,
      onExiting: at,
      addEndListener: Y,
      timeout: C === 'auto' ? null : C,
      ...k,
      children: (V, { ownerState: M, ...K }) =>
        x.cloneElement(f, {
          style: {
            opacity: 0,
            transform: Of(0.75),
            visibility: V === 'exited' && !p ? 'hidden' : void 0,
            ...aE[V],
            ...T,
            ...f.props.style,
          },
          ref: D,
          ...K,
        }),
    });
  });
zf && (zf.muiSupportAuto = !0);
const lE = (n) => {
    const { classes: r, disableUnderline: o } = n,
      c = ne({ root: ['root', !o && 'underline'], input: ['input'] }, QC, r);
    return { ...r, ...c };
  },
  rE = ft(Bs, {
    shouldForwardProp: (n) => zn(n) || n === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [...Ns(n, r), !o.disableUnderline && r.underline];
    },
  })(
    ie(({ theme: n }) => {
      let o = n.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      return (
        n.vars && (o = n.alpha(n.vars.palette.common.onBackground, n.vars.opacity.inputUnderline)),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: i }) => i.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: i }) => !i.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: n.transitions.create('transform', {
                    duration: n.transitions.duration.shorter,
                    easing: n.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${po.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${po.error}`]: {
                  '&::before, &::after': { borderBottomColor: (n.vars || n).palette.error.main },
                },
                '&::before': {
                  borderBottom: `1px solid ${o}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: n.transitions.create('border-bottom-color', {
                    duration: n.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${po.disabled}, .${po.error}):before`]: {
                  borderBottom: `2px solid ${(n.vars || n).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${o}` },
                },
                [`&.${po.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(n.palette)
              .filter(cn())
              .map(([i]) => ({
                props: { color: i, disableUnderline: !1 },
                style: {
                  '&::after': { borderBottom: `2px solid ${(n.vars || n).palette[i].main}` },
                },
              })),
          ],
        }
      );
    }),
  ),
  oE = ft(Ds, { name: 'MuiInput', slot: 'Input', overridesResolver: _s })({}),
  rd = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiInput' }),
      {
        disableUnderline: c = !1,
        components: f = {},
        componentsProps: d,
        fullWidth: p = !1,
        inputComponent: g = 'input',
        multiline: h = !1,
        slotProps: b,
        slots: S = {},
        type: A = 'text',
        ...z
      } = i,
      T = lE(i),
      N = { root: { ownerState: { disableUnderline: c } } },
      k = (b ?? d) ? Ye(b ?? d, N) : N,
      G = S.root ?? f.Root ?? rE,
      B = S.input ?? f.Input ?? oE;
    return H.jsx(ad, {
      slots: { root: G, input: B },
      slotProps: k,
      fullWidth: p,
      inputComponent: g,
      multiline: h,
      ref: o,
      type: A,
      ...z,
      classes: T,
    });
  });
rd.muiName = 'Input';
function iE(n) {
  return te('MuiInputLabel', n);
}
ee('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
]);
const sE = (n) => {
    const {
        classes: r,
        formControl: o,
        size: i,
        shrink: c,
        disableAnimation: f,
        variant: d,
        required: p,
      } = n,
      g = {
        root: [
          'root',
          o && 'formControl',
          !f && 'animated',
          c && 'shrink',
          i && i !== 'medium' && `size${ht(i)}`,
          d,
        ],
        asterisk: [p && 'asterisk'],
      },
      h = ne(g, iE, r);
    return { ...r, ...h };
  },
  uE = ft(nE, {
    shouldForwardProp: (n) => zn(n) || n === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        { [`& .${xo.asterisk}`]: r.asterisk },
        r.root,
        o.formControl && r.formControl,
        o.size === 'small' && r.sizeSmall,
        o.shrink && r.shrink,
        !o.disableAnimation && r.animated,
        o.focused && r.focused,
        r[o.variant],
      ];
    },
  })(
    ie(({ theme: n }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        { props: { size: 'small' }, style: { transform: 'translate(0, 17px) scale(1)' } },
        {
          props: ({ ownerState: r }) => r.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: r }) => !r.disableAnimation,
          style: {
            transition: n.transitions.create(['color', 'transform', 'max-width'], {
              duration: n.transitions.duration.shorter,
              easing: n.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'filled', size: 'small' },
          style: { transform: 'translate(12px, 13px) scale(1)' },
        },
        {
          props: ({ variant: r, ownerState: o }) => r === 'filled' && o.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: r, ownerState: o, size: i }) =>
            r === 'filled' && o.shrink && i === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' },
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: { transform: 'translate(14px, 9px) scale(1)' },
        },
        {
          props: ({ variant: r, ownerState: o }) => r === 'outlined' && o.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      ],
    })),
  ),
  cE = x.forwardRef(function (r, o) {
    const i = ae({ name: 'MuiInputLabel', props: r }),
      { disableAnimation: c = !1, margin: f, shrink: d, variant: p, className: g, ...h } = i,
      b = fr();
    let S = d;
    typeof S > 'u' && b && (S = b.filled || b.focused || b.adornedStart);
    const A = cr({
        props: i,
        muiFormControl: b,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      z = {
        ...i,
        disableAnimation: c,
        formControl: b,
        shrink: S,
        size: A.size,
        variant: A.variant,
        required: A.required,
        focused: A.focused,
      },
      T = sE(z);
    return H.jsx(uE, {
      'data-shrink': S,
      ref: o,
      className: St(T.root, g),
      ...h,
      ownerState: z,
      classes: T,
    });
  }),
  fE = x.createContext({});
function dE(n) {
  return te('MuiList', n);
}
ee('MuiList', ['root', 'padding', 'dense', 'subheader']);
const pE = (n) => {
    const { classes: r, disablePadding: o, dense: i, subheader: c } = n;
    return ne({ root: ['root', !o && 'padding', i && 'dense', c && 'subheader'] }, dE, r);
  },
  mE = ft('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        !o.disablePadding && r.padding,
        o.dense && r.dense,
        o.subheader && r.subheader,
      ];
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: n }) => !n.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: n }) => n.subheader, style: { paddingTop: 0 } },
    ],
  }),
  hE = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiList' }),
      {
        children: c,
        className: f,
        component: d = 'ul',
        dense: p = !1,
        disablePadding: g = !1,
        subheader: h,
        ...b
      } = i,
      S = x.useMemo(() => ({ dense: p }), [p]),
      A = { ...i, component: d, dense: p, disablePadding: g },
      z = pE(A);
    return H.jsx(fE.Provider, {
      value: S,
      children: H.jsxs(mE, {
        as: d,
        className: St(z.root, f),
        ref: o,
        ownerState: A,
        ...b,
        children: [h, c],
      }),
    });
  });
function ff(n, r, o) {
  return n === r
    ? n.firstChild
    : r && r.nextElementSibling
      ? r.nextElementSibling
      : o
        ? null
        : n.firstChild;
}
function cy(n, r, o) {
  return n === r
    ? o
      ? n.firstChild
      : n.lastChild
    : r && r.previousElementSibling
      ? r.previousElementSibling
      : o
        ? null
        : n.lastChild;
}
function x0(n, r) {
  if (r === void 0) return !0;
  let o = n.innerText;
  return (
    o === void 0 && (o = n.textContent),
    (o = o.trim().toLowerCase()),
    o.length === 0 ? !1 : r.repeating ? o[0] === r.keys[0] : o.startsWith(r.keys.join(''))
  );
}
function mo(n, r, o, i, c, f) {
  let d = !1,
    p = c(n, r, r ? o : !1);
  for (; p; ) {
    if (p === n.firstChild) {
      if (d) return !1;
      d = !0;
    }
    const g = i ? !1 : p.disabled || p.getAttribute('aria-disabled') === 'true';
    if (!p.hasAttribute('tabindex') || !x0(p, f) || g) p = c(n, p, o);
    else return (p.focus(), !0);
  }
  return !1;
}
const gE = x.forwardRef(function (r, o) {
  const {
      actions: i,
      autoFocus: c = !1,
      autoFocusItem: f = !1,
      children: d,
      className: p,
      disabledItemsFocusable: g = !1,
      disableListWrap: h = !1,
      onKeyDown: b,
      variant: S = 'selectedMenu',
      ...A
    } = r,
    z = x.useRef(null),
    T = x.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
  (ua(() => {
    c && z.current.focus();
  }, [c]),
    x.useImperativeHandle(
      i,
      () => ({
        adjustStyleForScrollbar: (B, { direction: w }) => {
          const O = !z.current.style.width;
          if (B.clientHeight < z.current.clientHeight && O) {
            const D = `${S0(ca(B))}px`;
            ((z.current.style[w === 'rtl' ? 'paddingLeft' : 'paddingRight'] = D),
              (z.current.style.width = `calc(100% + ${D})`));
          }
          return z.current;
        },
      }),
      [],
    ));
  const C = (B) => {
      const w = z.current,
        O = B.key;
      if (B.ctrlKey || B.metaKey || B.altKey) {
        b && b(B);
        return;
      }
      const P = On(w).activeElement;
      if (O === 'ArrowDown') (B.preventDefault(), mo(w, P, h, g, ff));
      else if (O === 'ArrowUp') (B.preventDefault(), mo(w, P, h, g, cy));
      else if (O === 'Home') (B.preventDefault(), mo(w, null, h, g, ff));
      else if (O === 'End') (B.preventDefault(), mo(w, null, h, g, cy));
      else if (O.length === 1) {
        const Q = T.current,
          J = O.toLowerCase(),
          et = performance.now();
        (Q.keys.length > 0 &&
          (et - Q.lastTime > 500
            ? ((Q.keys = []), (Q.repeating = !0), (Q.previousKeyMatched = !0))
            : Q.repeating && J !== Q.keys[0] && (Q.repeating = !1)),
          (Q.lastTime = et),
          Q.keys.push(J));
        const at = P && !Q.repeating && x0(P, Q);
        Q.previousKeyMatched && (at || mo(w, P, !1, g, ff, Q))
          ? B.preventDefault()
          : (Q.previousKeyMatched = !1);
      }
      b && b(B);
    },
    N = We(z, o);
  let k = -1;
  x.Children.forEach(d, (B, w) => {
    if (!x.isValidElement(B)) {
      k === w && ((k += 1), k >= d.length && (k = -1));
      return;
    }
    (B.props.disabled || (((S === 'selectedMenu' && B.props.selected) || k === -1) && (k = w)),
      k === w &&
        (B.props.disabled || B.props.muiSkipListHighlight || B.type.muiSkipListHighlight) &&
        ((k += 1), k >= d.length && (k = -1)));
  });
  const G = x.Children.map(d, (B, w) => {
    if (w === k) {
      const O = {};
      return (
        f && (O.autoFocus = !0),
        B.props.tabIndex === void 0 && S === 'selectedMenu' && (O.tabIndex = 0),
        x.cloneElement(B, O)
      );
    }
    return B;
  });
  return H.jsx(hE, {
    role: 'menu',
    ref: N,
    className: p,
    onKeyDown: C,
    tabIndex: c ? 0 : -1,
    ...A,
    children: G,
  });
});
function yE(n) {
  return te('MuiPopover', n);
}
ee('MuiPopover', ['root', 'paper']);
function fy(n, r) {
  let o = 0;
  return (
    typeof r == 'number'
      ? (o = r)
      : r === 'center'
        ? (o = n.height / 2)
        : r === 'bottom' && (o = n.height),
    o
  );
}
function dy(n, r) {
  let o = 0;
  return (
    typeof r == 'number'
      ? (o = r)
      : r === 'center'
        ? (o = n.width / 2)
        : r === 'right' && (o = n.width),
    o
  );
}
function py(n) {
  return [n.horizontal, n.vertical].map((r) => (typeof r == 'number' ? `${r}px` : r)).join(' ');
}
function Wi(n) {
  return typeof n == 'function' ? n() : n;
}
const vE = (n) => {
    const { classes: r } = n;
    return ne({ root: ['root'], paper: ['paper'] }, yE, r);
  },
  bE = ft($T, { name: 'MuiPopover', slot: 'Root' })({}),
  C0 = ft(ws, { name: 'MuiPopover', slot: 'Paper' })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  SE = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiPopover' }),
      {
        action: c,
        anchorEl: f,
        anchorOrigin: d = { vertical: 'top', horizontal: 'left' },
        anchorPosition: p,
        anchorReference: g = 'anchorEl',
        children: h,
        className: b,
        container: S,
        elevation: A = 8,
        marginThreshold: z = 16,
        open: T,
        PaperProps: C = {},
        slots: N = {},
        slotProps: k = {},
        transformOrigin: G = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: B,
        transitionDuration: w = 'auto',
        TransitionProps: O = {},
        disableScrollLock: D = !1,
        ...P
      } = i,
      Q = x.useRef(),
      J = {
        ...i,
        anchorOrigin: d,
        anchorReference: g,
        elevation: A,
        marginThreshold: z,
        transformOrigin: G,
        TransitionComponent: B,
        transitionDuration: w,
        TransitionProps: O,
      },
      et = vE(J),
      at = x.useCallback(() => {
        if (g === 'anchorPosition') return p;
        const bt = Wi(f),
          _t = (bt && bt.nodeType === 1 ? bt : On(Q.current).body).getBoundingClientRect();
        return { top: _t.top + fy(_t, d.vertical), left: _t.left + dy(_t, d.horizontal) };
      }, [f, d.horizontal, d.vertical, p, g]),
      v = x.useCallback(
        (bt) => ({ vertical: fy(bt, G.vertical), horizontal: dy(bt, G.horizontal) }),
        [G.horizontal, G.vertical],
      ),
      F = x.useCallback(
        (bt) => {
          const Mt = { width: bt.offsetWidth, height: bt.offsetHeight },
            _t = v(Mt);
          if (g === 'none') return { top: null, left: null, transformOrigin: py(_t) };
          const he = at();
          let Ct = he.top - _t.vertical,
            qt = he.left - _t.horizontal;
          const De = Ct + Mt.height,
            Gt = qt + Mt.width,
            se = ca(Wi(f)),
            oe = se.innerHeight - z,
            de = se.innerWidth - z;
          if (z !== null && Ct < z) {
            const Kt = Ct - z;
            ((Ct -= Kt), (_t.vertical += Kt));
          } else if (z !== null && De > oe) {
            const Kt = De - oe;
            ((Ct -= Kt), (_t.vertical += Kt));
          }
          if (z !== null && qt < z) {
            const Kt = qt - z;
            ((qt -= Kt), (_t.horizontal += Kt));
          } else if (Gt > de) {
            const Kt = Gt - de;
            ((qt -= Kt), (_t.horizontal += Kt));
          }
          return {
            top: `${Math.round(Ct)}px`,
            left: `${Math.round(qt)}px`,
            transformOrigin: py(_t),
          };
        },
        [f, g, at, v, z],
      ),
      [Y, V] = x.useState(T),
      M = x.useCallback(() => {
        const bt = Q.current;
        if (!bt) return;
        const Mt = F(bt);
        (Mt.top !== null && bt.style.setProperty('top', Mt.top),
          Mt.left !== null && (bt.style.left = Mt.left),
          (bt.style.transformOrigin = Mt.transformOrigin),
          V(!0));
      }, [F]);
    x.useEffect(
      () => (
        D && window.addEventListener('scroll', M),
        () => window.removeEventListener('scroll', M)
      ),
      [f, D, M],
    );
    const K = () => {
        M();
      },
      ot = () => {
        V(!1);
      };
    (x.useEffect(() => {
      T && M();
    }),
      x.useImperativeHandle(
        c,
        () =>
          T
            ? {
                updatePosition: () => {
                  M();
                },
              }
            : null,
        [T, M],
      ),
      x.useEffect(() => {
        if (!T) return;
        const bt = l0(() => {
            M();
          }),
          Mt = ca(Wi(f));
        return (
          Mt.addEventListener('resize', bt),
          () => {
            (bt.clear(), Mt.removeEventListener('resize', bt));
          }
        );
      }, [f, T, M]));
    let nt = w;
    const E = { slots: { transition: B, ...N }, slotProps: { transition: O, paper: C, ...k } },
      [X, rt] = xe('transition', {
        elementType: zf,
        externalForwardedProps: E,
        ownerState: J,
        getSlotProps: (bt) => ({
          ...bt,
          onEntering: (Mt, _t) => {
            (bt.onEntering?.(Mt, _t), K());
          },
          onExited: (Mt) => {
            (bt.onExited?.(Mt), ot());
          },
        }),
        additionalProps: { appear: !0, in: T },
      });
    w === 'auto' && !X.muiSupportAuto && (nt = void 0);
    const lt = S || (f ? On(Wi(f)).body : void 0),
      [it, { slots: ct, slotProps: ut, ...At }] = xe('root', {
        ref: o,
        elementType: bE,
        externalForwardedProps: { ...E, ...P },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: N.backdrop },
          slotProps: {
            backdrop: N2(typeof k.backdrop == 'function' ? k.backdrop(J) : k.backdrop, {
              invisible: !0,
            }),
          },
          container: lt,
          open: T,
        },
        ownerState: J,
        className: St(et.root, b),
      }),
      [xt, Nt] = xe('paper', {
        ref: Q,
        className: et.paper,
        elementType: C0,
        externalForwardedProps: E,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: A, style: Y ? void 0 : { opacity: 0 } },
        ownerState: J,
      });
    return H.jsx(it, {
      ...At,
      ...(!cs(it) && { slots: ct, slotProps: ut, disableScrollLock: D }),
      children: H.jsx(X, { ...rt, timeout: nt, children: H.jsx(xt, { ...Nt, children: h }) }),
    });
  });
function xE(n) {
  return te('MuiMenu', n);
}
ee('MuiMenu', ['root', 'paper', 'list']);
const CE = { vertical: 'top', horizontal: 'right' },
  TE = { vertical: 'top', horizontal: 'left' },
  EE = (n) => {
    const { classes: r } = n;
    return ne({ root: ['root'], paper: ['paper'], list: ['list'] }, xE, r);
  },
  RE = ft(SE, {
    shouldForwardProp: (n) => zn(n) || n === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
  })({}),
  AE = ft(C0, { name: 'MuiMenu', slot: 'Paper' })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch',
  }),
  ME = ft(gE, { name: 'MuiMenu', slot: 'List' })({ outline: 0 }),
  OE = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiMenu' }),
      {
        autoFocus: c = !0,
        children: f,
        className: d,
        disableAutoFocusItem: p = !1,
        MenuListProps: g = {},
        onClose: h,
        open: b,
        PaperProps: S = {},
        PopoverClasses: A,
        transitionDuration: z = 'auto',
        TransitionProps: { onEntering: T, ...C } = {},
        variant: N = 'selectedMenu',
        slots: k = {},
        slotProps: G = {},
        ...B
      } = i,
      w = yx(),
      O = {
        ...i,
        autoFocus: c,
        disableAutoFocusItem: p,
        MenuListProps: g,
        onEntering: T,
        PaperProps: S,
        transitionDuration: z,
        TransitionProps: C,
        variant: N,
      },
      D = EE(O),
      P = c && !p && b,
      Q = x.useRef(null),
      J = (nt, E) => {
        (Q.current && Q.current.adjustStyleForScrollbar(nt, { direction: w ? 'rtl' : 'ltr' }),
          T && T(nt, E));
      },
      et = (nt) => {
        nt.key === 'Tab' && (nt.preventDefault(), h && h(nt, 'tabKeyDown'));
      };
    let at = -1;
    x.Children.map(f, (nt, E) => {
      x.isValidElement(nt) &&
        (nt.props.disabled ||
          (((N === 'selectedMenu' && nt.props.selected) || at === -1) && (at = E)));
    });
    const v = { slots: k, slotProps: { list: g, transition: C, paper: S, ...G } },
      F = HC({
        elementType: k.root,
        externalSlotProps: G.root,
        ownerState: O,
        className: [D.root, d],
      }),
      [Y, V] = xe('paper', {
        className: D.paper,
        elementType: AE,
        externalForwardedProps: v,
        shouldForwardComponentProp: !0,
        ownerState: O,
      }),
      [M, K] = xe('list', {
        className: St(D.list, g.className),
        elementType: ME,
        shouldForwardComponentProp: !0,
        externalForwardedProps: v,
        getSlotProps: (nt) => ({
          ...nt,
          onKeyDown: (E) => {
            (et(E), nt.onKeyDown?.(E));
          },
        }),
        ownerState: O,
      }),
      ot =
        typeof v.slotProps.transition == 'function'
          ? v.slotProps.transition(O)
          : v.slotProps.transition;
    return H.jsx(RE, {
      onClose: h,
      anchorOrigin: { vertical: 'bottom', horizontal: w ? 'right' : 'left' },
      transformOrigin: w ? CE : TE,
      slots: {
        root: k.root,
        paper: Y,
        backdrop: k.backdrop,
        ...(k.transition && { transition: k.transition }),
      },
      slotProps: {
        root: F,
        paper: V,
        backdrop: typeof G.backdrop == 'function' ? G.backdrop(O) : G.backdrop,
        transition: {
          ...ot,
          onEntering: (...nt) => {
            (J(...nt), ot?.onEntering?.(...nt));
          },
        },
      },
      open: b,
      ref: o,
      transitionDuration: z,
      ownerState: O,
      ...B,
      classes: A,
      children: H.jsx(M, {
        actions: Q,
        autoFocus: c && (at === -1 || p),
        autoFocusItem: P,
        variant: N,
        ...K,
        children: f,
      }),
    });
  });
function zE(n) {
  return te('MuiNativeSelect', n);
}
const od = ee('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  wE = (n) => {
    const { classes: r, variant: o, disabled: i, multiple: c, open: f, error: d } = n,
      p = {
        select: ['select', o, i && 'disabled', c && 'multiple', d && 'error'],
        icon: ['icon', `icon${ht(o)}`, f && 'iconOpen', i && 'disabled'],
      };
    return ne(p, zE, r);
  },
  T0 = ft('select', { name: 'MuiNativeSelect' })(({ theme: n }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${od.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (n.vars || n).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: r }) => r.variant !== 'filled' && r.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (n.vars || n).shape.borderRadius,
          '&:focus': { borderRadius: (n.vars || n).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  NE = ft(T0, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: zn,
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.select, r[o.variant], o.error && r.error, { [`&.${od.multiple}`]: r.multiple }];
    },
  })({}),
  E0 = ft('svg', { name: 'MuiNativeSelect' })(({ theme: n }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (n.vars || n).palette.action.active,
    [`&.${od.disabled}`]: { color: (n.vars || n).palette.action.disabled },
    variants: [
      { props: ({ ownerState: r }) => r.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  _E = ft(E0, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.icon, o.variant && r[`icon${ht(o.variant)}`], o.open && r.iconOpen];
    },
  })({}),
  BE = x.forwardRef(function (r, o) {
    const {
        className: i,
        disabled: c,
        error: f,
        IconComponent: d,
        inputRef: p,
        variant: g = 'standard',
        ...h
      } = r,
      b = { ...r, disabled: c, variant: g, error: f },
      S = wE(b);
    return H.jsxs(x.Fragment, {
      children: [
        H.jsx(NE, { ownerState: b, className: St(S.select, i), disabled: c, ref: p || o, ...h }),
        r.multiple ? null : H.jsx(_E, { as: d, ownerState: b, className: S.icon }),
      ],
    });
  });
var my;
const DE = ft('fieldset', { name: 'MuiNotchedOutlined', shouldForwardProp: zn })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
  }),
  UE = ft('legend', { name: 'MuiNotchedOutlined', shouldForwardProp: zn })(
    ie(({ theme: n }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: r }) => !r.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: n.transitions.create('width', {
              duration: 150,
              easing: n.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: n.transitions.create('max-width', {
              duration: 50,
              easing: n.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel && r.notched,
          style: {
            maxWidth: '100%',
            transition: n.transitions.create('max-width', {
              duration: 100,
              easing: n.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function kE(n) {
  const { children: r, classes: o, className: i, label: c, notched: f, ...d } = n,
    p = c != null && c !== '',
    g = { ...n, notched: f, withLabel: p };
  return H.jsx(DE, {
    'aria-hidden': !0,
    className: i,
    ownerState: g,
    ...d,
    children: H.jsx(UE, {
      ownerState: g,
      children: p
        ? H.jsx('span', { children: c })
        : my ||
          (my = H.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' })),
    }),
  });
}
const jE = (n) => {
    const { classes: r } = n,
      i = ne({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, ZC, r);
    return { ...r, ...i };
  },
  LE = ft(Bs, {
    shouldForwardProp: (n) => zn(n) || n === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: Ns,
  })(
    ie(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (n.vars || n).shape.borderRadius,
        [`&:hover .${kn.notchedOutline}`]: { borderColor: (n.vars || n).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${kn.notchedOutline}`]: {
            borderColor: n.vars ? n.alpha(n.vars.palette.common.onBackground, 0.23) : r,
          },
        },
        [`&.${kn.focused} .${kn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(n.palette)
            .filter(cn())
            .map(([o]) => ({
              props: { color: o },
              style: {
                [`&.${kn.focused} .${kn.notchedOutline}`]: {
                  borderColor: (n.vars || n).palette[o].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${kn.error} .${kn.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.error.main,
              },
              [`&.${kn.disabled} .${kn.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.action.disabled,
              },
            },
          },
          { props: ({ ownerState: o }) => o.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: o }) => o.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: o }) => o.multiline, style: { padding: '16.5px 14px' } },
          {
            props: ({ ownerState: o, size: i }) => o.multiline && i === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      };
    }),
  ),
  HE = ft(kE, { name: 'MuiOutlinedInput', slot: 'NotchedOutline' })(
    ie(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return { borderColor: n.vars ? n.alpha(n.vars.palette.common.onBackground, 0.23) : r };
    }),
  ),
  $E = ft(Ds, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: _s })(
    ie(({ theme: n }) => ({
      padding: '16.5px 14px',
      ...(!n.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: n.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: n.palette.mode === 'light' ? null : '#fff',
          caretColor: n.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(n.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [n.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } },
        { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } },
      ],
    })),
  ),
  id = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiOutlinedInput' }),
      {
        components: c = {},
        fullWidth: f = !1,
        inputComponent: d = 'input',
        label: p,
        multiline: g = !1,
        notched: h,
        slots: b = {},
        slotProps: S = {},
        type: A = 'text',
        ...z
      } = i,
      T = jE(i),
      C = fr(),
      N = cr({
        props: i,
        muiFormControl: C,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required'],
      }),
      k = {
        ...i,
        color: N.color || 'primary',
        disabled: N.disabled,
        error: N.error,
        focused: N.focused,
        formControl: C,
        fullWidth: f,
        hiddenLabel: N.hiddenLabel,
        multiline: g,
        size: N.size,
        type: A,
      },
      G = b.root ?? c.Root ?? LE,
      B = b.input ?? c.Input ?? $E,
      [w, O] = xe('notchedOutline', {
        elementType: HE,
        className: T.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: k,
        externalForwardedProps: { slots: b, slotProps: S },
        additionalProps: {
          label:
            p != null && p !== '' && N.required
              ? H.jsxs(x.Fragment, { children: [p, ' ', '*'] })
              : p,
        },
      });
    return H.jsx(ad, {
      slots: { root: G, input: B },
      slotProps: S,
      renderSuffix: (D) =>
        H.jsx(w, {
          ...O,
          notched: typeof h < 'u' ? h : !!(D.startAdornment || D.filled || D.focused),
        }),
      fullWidth: f,
      inputComponent: d,
      multiline: g,
      ref: o,
      type: A,
      ...z,
      classes: { ...T, notchedOutline: null },
    });
  });
id.muiName = 'Input';
function R0(n) {
  return te('MuiSelect', n);
}
const ho = ee('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
]);
var hy;
const qE = ft(T0, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        { [`&.${ho.select}`]: r.select },
        { [`&.${ho.select}`]: r[o.variant] },
        { [`&.${ho.error}`]: r.error },
        { [`&.${ho.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${ho.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  GE = ft(E0, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.icon, o.variant && r[`icon${ht(o.variant)}`], o.open && r.iconOpen];
    },
  })({}),
  YE = ft('input', {
    shouldForwardProp: (n) => a0(n) && n !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });
function gy(n, r) {
  return typeof r == 'object' && r !== null ? n === r : String(n) === String(r);
}
function VE(n) {
  return n == null || (typeof n == 'string' && !n.trim());
}
const PE = (n) => {
    const { classes: r, variant: o, disabled: i, multiple: c, open: f, error: d } = n,
      p = {
        select: ['select', o, i && 'disabled', c && 'multiple', d && 'error'],
        icon: ['icon', `icon${ht(o)}`, f && 'iconOpen', i && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return ne(p, R0, r);
  },
  XE = x.forwardRef(function (r, o) {
    const {
        'aria-describedby': i,
        'aria-label': c,
        autoFocus: f,
        autoWidth: d,
        children: p,
        className: g,
        defaultOpen: h,
        defaultValue: b,
        disabled: S,
        displayEmpty: A,
        error: z = !1,
        IconComponent: T,
        inputRef: C,
        labelId: N,
        MenuProps: k = {},
        multiple: G,
        name: B,
        onBlur: w,
        onChange: O,
        onClose: D,
        onFocus: P,
        onOpen: Q,
        open: J,
        readOnly: et,
        renderValue: at,
        required: v,
        SelectDisplayProps: F = {},
        tabIndex: Y,
        type: V,
        value: M,
        variant: K = 'standard',
        ...ot
      } = r,
      [nt, E] = Vg({ controlled: M, default: b, name: 'Select' }),
      [X, rt] = Vg({ controlled: J, default: h, name: 'Select' }),
      lt = x.useRef(null),
      it = x.useRef(null),
      [ct, ut] = x.useState(null),
      { current: At } = x.useRef(J != null),
      [xt, Nt] = x.useState(),
      bt = We(o, C),
      Mt = x.useCallback((mt) => {
        ((it.current = mt), mt && ut(mt));
      }, []),
      _t = ct?.parentNode;
    (x.useImperativeHandle(
      bt,
      () => ({
        focus: () => {
          it.current.focus();
        },
        node: lt.current,
        value: nt,
      }),
      [nt],
    ),
      x.useEffect(() => {
        h && X && ct && !At && (Nt(d ? null : _t.clientWidth), it.current.focus());
      }, [ct, d]),
      x.useEffect(() => {
        f && it.current.focus();
      }, [f]),
      x.useEffect(() => {
        if (!N) return;
        const mt = On(it.current).getElementById(N);
        if (mt) {
          const Ht = () => {
            getSelection().isCollapsed && it.current.focus();
          };
          return (
            mt.addEventListener('click', Ht),
            () => {
              mt.removeEventListener('click', Ht);
            }
          );
        }
      }, [N]));
    const he = (mt, Ht) => {
        (mt ? Q && Q(Ht) : D && D(Ht), At || (Nt(d ? null : _t.clientWidth), rt(mt)));
      },
      Ct = (mt) => {
        mt.button === 0 && (mt.preventDefault(), it.current.focus(), he(!0, mt));
      },
      qt = (mt) => {
        he(!1, mt);
      },
      De = x.Children.toArray(p),
      Gt = (mt) => {
        const Ht = De.find((pe) => pe.props.value === mt.target.value);
        Ht !== void 0 && (E(Ht.props.value), O && O(mt, Ht));
      },
      se = (mt) => (Ht) => {
        let pe;
        if (Ht.currentTarget.hasAttribute('tabindex')) {
          if (G) {
            pe = Array.isArray(nt) ? nt.slice() : [];
            const da = nt.indexOf(mt.props.value);
            da === -1 ? pe.push(mt.props.value) : pe.splice(da, 1);
          } else pe = mt.props.value;
          if ((mt.props.onClick && mt.props.onClick(Ht), nt !== pe && (E(pe), O))) {
            const da = Ht.nativeEvent || Ht,
              dr = new da.constructor(da.type, da);
            (Object.defineProperty(dr, 'target', { writable: !0, value: { value: pe, name: B } }),
              O(dr, mt));
          }
          G || he(!1, Ht);
        }
      },
      oe = (mt) => {
        et ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(mt.key) &&
            (mt.preventDefault(), he(!0, mt)));
      },
      de = ct !== null && X,
      Kt = (mt) => {
        !de &&
          w &&
          (Object.defineProperty(mt, 'target', { writable: !0, value: { value: nt, name: B } }),
          w(mt));
      };
    delete ot['aria-invalid'];
    let dt, Je;
    const ge = [];
    let Tn = !1;
    (ps({ value: nt }) || A) && (at ? (dt = at(nt)) : (Tn = !0));
    const ue = De.map((mt) => {
      if (!x.isValidElement(mt)) return null;
      let Ht;
      if (G) {
        if (!Array.isArray(nt)) throw new Error(ia(2));
        ((Ht = nt.some((pe) => gy(pe, mt.props.value))), Ht && Tn && ge.push(mt.props.children));
      } else ((Ht = gy(nt, mt.props.value)), Ht && Tn && (Je = mt.props.children));
      return x.cloneElement(mt, {
        'aria-selected': Ht ? 'true' : 'false',
        onClick: se(mt),
        onKeyUp: (pe) => {
          (pe.key === ' ' && pe.preventDefault(), mt.props.onKeyUp && mt.props.onKeyUp(pe));
        },
        role: 'option',
        selected: Ht,
        value: void 0,
        'data-value': mt.props.value,
      });
    });
    Tn &&
      (G
        ? ge.length === 0
          ? (dt = null)
          : (dt = ge.reduce(
              (mt, Ht, pe) => (mt.push(Ht), pe < ge.length - 1 && mt.push(', '), mt),
              [],
            ))
        : (dt = Je));
    let Tt = xt;
    !d && At && ct && (Tt = _t.clientWidth);
    let Qt;
    typeof Y < 'u' ? (Qt = Y) : (Qt = S ? null : 0);
    const Ut = F.id || (B ? `mui-component-select-${B}` : void 0),
      Ve = { ...r, variant: K, value: nt, open: de, error: z },
      Zt = PE(Ve),
      fa = {
        ...k.PaperProps,
        ...(typeof k.slotProps?.paper == 'function' ? k.slotProps.paper(Ve) : k.slotProps?.paper),
      },
      Yn = {
        ...k.MenuListProps,
        ...(typeof k.slotProps?.list == 'function' ? k.slotProps.list(Ve) : k.slotProps?.list),
      },
      qa = Do();
    return H.jsxs(x.Fragment, {
      children: [
        H.jsx(qE, {
          as: 'div',
          ref: Mt,
          tabIndex: Qt,
          role: 'combobox',
          'aria-controls': de ? qa : void 0,
          'aria-disabled': S ? 'true' : void 0,
          'aria-expanded': de ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': c,
          'aria-labelledby': [N, Ut].filter(Boolean).join(' ') || void 0,
          'aria-describedby': i,
          'aria-required': v ? 'true' : void 0,
          'aria-invalid': z ? 'true' : void 0,
          onKeyDown: oe,
          onMouseDown: S || et ? null : Ct,
          onBlur: Kt,
          onFocus: P,
          ...F,
          ownerState: Ve,
          className: St(F.className, Zt.select, g),
          id: Ut,
          children: VE(dt)
            ? hy ||
              (hy = H.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
            : dt,
        }),
        H.jsx(YE, {
          'aria-invalid': z,
          value: Array.isArray(nt) ? nt.join(',') : nt,
          name: B,
          ref: lt,
          'aria-hidden': !0,
          onChange: Gt,
          tabIndex: -1,
          disabled: S,
          className: Zt.nativeInput,
          autoFocus: f,
          required: v,
          ...ot,
          ownerState: Ve,
        }),
        H.jsx(GE, { as: T, className: Zt.icon, ownerState: Ve }),
        H.jsx(OE, {
          id: `menu-${B || ''}`,
          anchorEl: _t,
          open: de,
          onClose: qt,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...k,
          slotProps: {
            ...k.slotProps,
            list: {
              'aria-labelledby': N,
              role: 'listbox',
              'aria-multiselectable': G ? 'true' : void 0,
              disableListWrap: !0,
              id: qa,
              ...Yn,
            },
            paper: { ...fa, style: { minWidth: Tt, ...(fa != null ? fa.style : null) } },
          },
          children: ue,
        }),
      ],
    });
  }),
  KE = (n) => {
    const { classes: r } = n,
      i = ne({ root: ['root'] }, R0, r);
    return { ...r, ...i };
  },
  sd = { name: 'MuiSelect', slot: 'Root', shouldForwardProp: (n) => zn(n) && n !== 'variant' },
  QE = ft(rd, sd)(''),
  ZE = ft(id, sd)(''),
  IE = ft(ld, sd)(''),
  A0 = x.forwardRef(function (r, o) {
    const i = ae({ name: 'MuiSelect', props: r }),
      {
        autoWidth: c = !1,
        children: f,
        classes: d = {},
        className: p,
        defaultOpen: g = !1,
        displayEmpty: h = !1,
        IconComponent: b = FC,
        id: S,
        input: A,
        inputProps: z,
        label: T,
        labelId: C,
        MenuProps: N,
        multiple: k = !1,
        native: G = !1,
        onClose: B,
        onOpen: w,
        open: O,
        renderValue: D,
        SelectDisplayProps: P,
        variant: Q = 'outlined',
        ...J
      } = i,
      et = G ? BE : XE,
      at = fr(),
      v = cr({ props: i, muiFormControl: at, states: ['variant', 'error'] }),
      F = v.variant || Q,
      Y = { ...i, variant: F, classes: d },
      V = KE(Y),
      { root: M, ...K } = V,
      ot =
        A ||
        {
          standard: H.jsx(QE, { ownerState: Y }),
          outlined: H.jsx(ZE, { label: T, ownerState: Y }),
          filled: H.jsx(IE, { ownerState: Y }),
        }[F],
      nt = We(o, Uo(ot));
    return H.jsx(x.Fragment, {
      children: x.cloneElement(ot, {
        inputComponent: et,
        inputProps: {
          children: f,
          error: v.error,
          IconComponent: b,
          variant: F,
          type: void 0,
          multiple: k,
          ...(G
            ? { id: S }
            : {
                autoWidth: c,
                defaultOpen: g,
                displayEmpty: h,
                labelId: C,
                MenuProps: N,
                onClose: B,
                onOpen: w,
                open: O,
                renderValue: D,
                SelectDisplayProps: { id: S, ...P },
              }),
          ...z,
          classes: z ? Ye(K, z.classes) : K,
          ...(A ? A.props.inputProps : {}),
        },
        ...(((k && G) || h) && F === 'outlined' ? { notched: !0 } : {}),
        ref: nt,
        className: St(ot.props.className, p, V.root),
        ...(!A && { variant: F }),
        ...J,
      }),
    });
  });
A0.muiName = 'Select';
function FE(n) {
  return te('MuiToolbar', n);
}
ee('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const WE = (n) => {
    const { classes: r, disableGutters: o, variant: i } = n;
    return ne({ root: ['root', !o && 'gutters', i] }, FE, r);
  },
  JE = ft('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, !o.disableGutters && r.gutters, r[o.variant]];
    },
  })(
    ie(({ theme: n }) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableGutters,
          style: {
            paddingLeft: n.spacing(2),
            paddingRight: n.spacing(2),
            [n.breakpoints.up('sm')]: { paddingLeft: n.spacing(3), paddingRight: n.spacing(3) },
          },
        },
        { props: { variant: 'dense' }, style: { minHeight: 48 } },
        { props: { variant: 'regular' }, style: n.mixins.toolbar },
      ],
    })),
  ),
  tR = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiToolbar' }),
      {
        className: c,
        component: f = 'div',
        disableGutters: d = !1,
        variant: p = 'regular',
        ...g
      } = i,
      h = { ...i, component: f, disableGutters: d, variant: p },
      b = WE(h);
    return H.jsx(JE, { as: f, className: St(b.root, c), ref: o, ownerState: h, ...g });
  });
function eR(n) {
  return te('MuiTextField', n);
}
ee('MuiTextField', ['root']);
const nR = { standard: rd, filled: ld, outlined: id },
  aR = (n) => {
    const { classes: r } = n;
    return ne({ root: ['root'] }, eR, r);
  },
  lR = ft(KT, { name: 'MuiTextField', slot: 'Root' })({}),
  rR = x.forwardRef(function (r, o) {
    const i = ae({ props: r, name: 'MuiTextField' }),
      {
        autoComplete: c,
        autoFocus: f = !1,
        children: d,
        className: p,
        color: g = 'primary',
        defaultValue: h,
        disabled: b = !1,
        error: S = !1,
        FormHelperTextProps: A,
        fullWidth: z = !1,
        helperText: T,
        id: C,
        InputLabelProps: N,
        inputProps: k,
        InputProps: G,
        inputRef: B,
        label: w,
        maxRows: O,
        minRows: D,
        multiline: P = !1,
        name: Q,
        onBlur: J,
        onChange: et,
        onFocus: at,
        placeholder: v,
        required: F = !1,
        rows: Y,
        select: V = !1,
        SelectProps: M,
        slots: K = {},
        slotProps: ot = {},
        type: nt,
        value: E,
        variant: X = 'outlined',
        ...rt
      } = i,
      lt = {
        ...i,
        autoFocus: f,
        color: g,
        disabled: b,
        error: S,
        fullWidth: z,
        multiline: P,
        required: F,
        select: V,
        variant: X,
      },
      it = aR(lt),
      ct = Do(C),
      ut = T && ct ? `${ct}-helper-text` : void 0,
      At = w && ct ? `${ct}-label` : void 0,
      xt = nR[X],
      Nt = {
        slots: K,
        slotProps: { input: G, inputLabel: N, htmlInput: k, formHelperText: A, select: M, ...ot },
      },
      bt = {},
      Mt = Nt.slotProps.inputLabel;
    (X === 'outlined' && (Mt && typeof Mt.shrink < 'u' && (bt.notched = Mt.shrink), (bt.label = w)),
      V && ((!M || !M.native) && (bt.id = void 0), (bt['aria-describedby'] = void 0)));
    const [_t, he] = xe('root', {
        elementType: lR,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...Nt, ...rt },
        ownerState: lt,
        className: St(it.root, p),
        ref: o,
        additionalProps: { disabled: b, error: S, fullWidth: z, required: F, color: g, variant: X },
      }),
      [Ct, qt] = xe('input', {
        elementType: xt,
        externalForwardedProps: Nt,
        additionalProps: bt,
        ownerState: lt,
      }),
      [De, Gt] = xe('inputLabel', { elementType: cE, externalForwardedProps: Nt, ownerState: lt }),
      [se, oe] = xe('htmlInput', {
        elementType: 'input',
        externalForwardedProps: Nt,
        ownerState: lt,
      }),
      [de, Kt] = xe('formHelperText', {
        elementType: FT,
        externalForwardedProps: Nt,
        ownerState: lt,
      }),
      [dt, Je] = xe('select', { elementType: A0, externalForwardedProps: Nt, ownerState: lt }),
      ge = H.jsx(Ct, {
        'aria-describedby': ut,
        autoComplete: c,
        autoFocus: f,
        defaultValue: h,
        fullWidth: z,
        multiline: P,
        name: Q,
        rows: Y,
        maxRows: O,
        minRows: D,
        type: nt,
        value: E,
        id: ct,
        inputRef: B,
        onBlur: J,
        onChange: et,
        onFocus: at,
        placeholder: v,
        inputProps: oe,
        slots: { input: K.htmlInput ? se : void 0 },
        ...qt,
      });
    return H.jsxs(_t, {
      ...he,
      children: [
        w != null && w !== '' && H.jsx(De, { htmlFor: ct, id: At, ...Gt, children: w }),
        V
          ? H.jsx(dt, {
              'aria-describedby': ut,
              id: ct,
              labelId: At,
              value: E,
              input: ge,
              ...Je,
              children: d,
            })
          : ge,
        T && H.jsx(de, { id: ut, ...Kt, children: T }),
      ],
    });
  }),
  oR = $a(
    H.jsx('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z',
    }),
  ),
  iR = $a(H.jsx('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }));
function sR() {
  return H.jsx(LC, {
    position: 'static',
    elevation: 1,
    children: H.jsxs(tR, {
      children: [
        H.jsx(oR, { sx: { mr: 2 } }),
        H.jsx(ds, {
          variant: 'h6',
          component: 'h1',
          sx: { flexGrow: 1 },
          children: 'Markdown Publisher Toolkit',
        }),
        H.jsx(ds, {
          variant: 'body2',
          sx: { opacity: 0.8 },
          children: 'Convert dev.to to Coder Legion',
        }),
      ],
    }),
  });
}
function uR() {
  const [n, r] = x.useState(''),
    [o, i] = x.useState(!1),
    [c, f] = x.useState(''),
    d = async (g) => {
      (g.preventDefault(),
        i(!0),
        f(''),
        setTimeout(() => {
          (i(!1), f('Conversion engine not yet implemented'));
        }, 1e3));
    },
    p = (g) => {
      try {
        return new URL(g).hostname === 'dev.to';
      } catch {
        return !1;
      }
    };
  return H.jsxs(ws, {
    elevation: 2,
    sx: { p: 4, maxWidth: 800, mx: 'auto' },
    children: [
      H.jsx(ds, {
        variant: 'h4',
        component: 'h2',
        gutterBottom: !0,
        children: 'Convert dev.to Article',
      }),
      H.jsx(ds, {
        variant: 'body1',
        color: 'text.secondary',
        sx: { mb: 3 },
        children: 'Enter a dev.to article URL to convert it to Coder Legion compatible HTML',
      }),
      H.jsxs(y0, {
        component: 'form',
        onSubmit: d,
        children: [
          H.jsx(rR, {
            fullWidth: !0,
            label: 'dev.to Article URL',
            placeholder: 'https://dev.to/username/article-title',
            value: n,
            onChange: (g) => r(g.target.value),
            error: n.length > 0 && !p(n),
            helperText:
              n.length > 0 && !p(n)
                ? 'Please enter a valid dev.to URL'
                : 'Paste the full URL of the dev.to article you want to convert',
            sx: { mb: 3 },
          }),
          H.jsx(mT, {
            type: 'submit',
            variant: 'contained',
            size: 'large',
            disabled: !p(n) || o,
            startIcon: H.jsx(iR, {}),
            sx: { mb: 2 },
            children: o ? 'Converting...' : 'Convert Article',
          }),
          c && H.jsx(zC, { severity: 'info', sx: { mt: 2 }, children: c }),
        ],
      }),
    ],
  });
}
const cR = zs({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#fafafa' },
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
});
function fR() {
  return H.jsxs(E2, {
    theme: cR,
    children: [
      H.jsx(ST, {}),
      H.jsxs(y0, {
        sx: { minHeight: '100vh', bgcolor: 'background.default' },
        children: [
          H.jsx(sR, {}),
          H.jsx(hT, { maxWidth: 'lg', sx: { py: 4 }, children: H.jsx(uR, {}) }),
        ],
      }),
    ],
  });
}
Zb.createRoot(document.getElementById('root')).render(
  H.jsx(Mn.StrictMode, { children: H.jsx(fR, {}) }),
);
