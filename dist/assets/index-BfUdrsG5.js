function Xb(n, r) {
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
function Uf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Wc = { exports: {} },
  fo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lg;
function Kb() {
  if (lg) return fo;
  lg = 1;
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
  return ((fo.Fragment = r), (fo.jsx = o), (fo.jsxs = o), fo);
}
var rg;
function Qb() {
  return (rg || ((rg = 1), (Wc.exports = Kb())), Wc.exports);
}
var $ = Qb(),
  Jc = { exports: {} },
  Mt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var og;
function Ib() {
  if (og) return Mt;
  og = 1;
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
  function E(R) {
    return R === null || typeof R != 'object'
      ? null
      : ((R = (S && R[S]) || R['@@iterator']), typeof R == 'function' ? R : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    T = {};
  function D(R, K, ot) {
    ((this.props = R), (this.context = K), (this.refs = T), (this.updater = ot || O));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (R, K) {
      if (typeof R != 'object' && typeof R != 'function' && R != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, R, K, 'setState');
    }),
    (D.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, 'forceUpdate');
    }));
  function k() {}
  k.prototype = D.prototype;
  function H(R, K, ot) {
    ((this.props = R), (this.context = K), (this.refs = T), (this.updater = ot || O));
  }
  var N = (H.prototype = new k());
  ((N.constructor = H), C(N, D.prototype), (N.isPureReactComponent = !0));
  var w = Array.isArray,
    z = { H: null, A: null, T: null, S: null, V: null },
    B = Object.prototype.hasOwnProperty;
  function P(R, K, ot, rt, ut, dt) {
    return (
      (ot = dt.ref),
      { $$typeof: n, type: R, key: K, ref: ot !== void 0 ? ot : null, props: dt }
    );
  }
  function Q(R, K) {
    return P(R.type, K, void 0, void 0, void 0, R.props);
  }
  function F(R) {
    return typeof R == 'object' && R !== null && R.$$typeof === n;
  }
  function J(R) {
    var K = { '=': '=0', ':': '=2' };
    return (
      '$' +
      R.replace(/[=:]/g, function (ot) {
        return K[ot];
      })
    );
  }
  var et = /\/+/g;
  function v(R, K) {
    return typeof R == 'object' && R !== null && R.key != null ? J('' + R.key) : K.toString(36);
  }
  function I() {}
  function V(R) {
    switch (R.status) {
      case 'fulfilled':
        return R.value;
      case 'rejected':
        throw R.reason;
      default:
        switch (
          (typeof R.status == 'string'
            ? R.then(I, I)
            : ((R.status = 'pending'),
              R.then(
                function (K) {
                  R.status === 'pending' && ((R.status = 'fulfilled'), (R.value = K));
                },
                function (K) {
                  R.status === 'pending' && ((R.status = 'rejected'), (R.reason = K));
                },
              )),
          R.status)
        ) {
          case 'fulfilled':
            return R.value;
          case 'rejected':
            throw R.reason;
        }
    }
    throw R;
  }
  function Y(R, K, ot, rt, ut) {
    var dt = typeof R;
    (dt === 'undefined' || dt === 'boolean') && (R = null);
    var nt = !1;
    if (R === null) nt = !0;
    else
      switch (dt) {
        case 'bigint':
        case 'string':
        case 'number':
          nt = !0;
          break;
        case 'object':
          switch (R.$$typeof) {
            case n:
            case r:
              nt = !0;
              break;
            case b:
              return ((nt = R._init), Y(nt(R._payload), K, ot, rt, ut));
          }
      }
    if (nt)
      return (
        (ut = ut(R)),
        (nt = rt === '' ? '.' + v(R, 0) : rt),
        w(ut)
          ? ((ot = ''),
            nt != null && (ot = nt.replace(et, '$&/') + '/'),
            Y(ut, K, ot, '', function (Tt) {
              return Tt;
            }))
          : ut != null &&
            (F(ut) &&
              (ut = Q(
                ut,
                ot +
                  (ut.key == null || (R && R.key === ut.key)
                    ? ''
                    : ('' + ut.key).replace(et, '$&/') + '/') +
                  nt,
              )),
            K.push(ut)),
        1
      );
    nt = 0;
    var pt = rt === '' ? '.' : rt + ':';
    if (w(R))
      for (var yt = 0; yt < R.length; yt++)
        ((rt = R[yt]), (dt = pt + v(rt, yt)), (nt += Y(rt, K, ot, dt, ut)));
    else if (((yt = E(R)), typeof yt == 'function'))
      for (R = yt.call(R), yt = 0; !(rt = R.next()).done; )
        ((rt = rt.value), (dt = pt + v(rt, yt++)), (nt += Y(rt, K, ot, dt, ut)));
    else if (dt === 'object') {
      if (typeof R.then == 'function') return Y(V(R), K, ot, rt, ut);
      throw (
        (K = String(R)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (K === '[object Object]' ? 'object with keys {' + Object.keys(R).join(', ') + '}' : K) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return nt;
  }
  function A(R, K, ot) {
    if (R == null) return R;
    var rt = [],
      ut = 0;
    return (
      Y(R, rt, '', '', function (dt) {
        return K.call(ot, dt, ut++);
      }),
      rt
    );
  }
  function X(R) {
    if (R._status === -1) {
      var K = R._result;
      ((K = K()),
        K.then(
          function (ot) {
            (R._status === 0 || R._status === -1) && ((R._status = 1), (R._result = ot));
          },
          function (ot) {
            (R._status === 0 || R._status === -1) && ((R._status = 2), (R._result = ot));
          },
        ),
        R._status === -1 && ((R._status = 0), (R._result = K)));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var it =
    typeof reportError == 'function'
      ? reportError
      : function (R) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var K = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof R == 'object' && R !== null && typeof R.message == 'string'
                  ? String(R.message)
                  : String(R),
              error: R,
            });
            if (!window.dispatchEvent(K)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', R);
            return;
          }
          console.error(R);
        };
  function at() {}
  return (
    (Mt.Children = {
      map: A,
      forEach: function (R, K, ot) {
        A(
          R,
          function () {
            K.apply(this, arguments);
          },
          ot,
        );
      },
      count: function (R) {
        var K = 0;
        return (
          A(R, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (R) {
        return (
          A(R, function (K) {
            return K;
          }) || []
        );
      },
      only: function (R) {
        if (!F(R))
          throw Error('React.Children.only expected to receive a single React element child.');
        return R;
      },
    }),
    (Mt.Component = D),
    (Mt.Fragment = o),
    (Mt.Profiler = c),
    (Mt.PureComponent = H),
    (Mt.StrictMode = i),
    (Mt.Suspense = g),
    (Mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (Mt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (R) {
        return z.H.useMemoCache(R);
      },
    }),
    (Mt.cache = function (R) {
      return function () {
        return R.apply(null, arguments);
      };
    }),
    (Mt.cloneElement = function (R, K, ot) {
      if (R == null) throw Error('The argument must be a React element, but you passed ' + R + '.');
      var rt = C({}, R.props),
        ut = R.key,
        dt = void 0;
      if (K != null)
        for (nt in (K.ref !== void 0 && (dt = void 0), K.key !== void 0 && (ut = '' + K.key), K))
          !B.call(K, nt) ||
            nt === 'key' ||
            nt === '__self' ||
            nt === '__source' ||
            (nt === 'ref' && K.ref === void 0) ||
            (rt[nt] = K[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) rt.children = ot;
      else if (1 < nt) {
        for (var pt = Array(nt), yt = 0; yt < nt; yt++) pt[yt] = arguments[yt + 2];
        rt.children = pt;
      }
      return P(R.type, ut, void 0, void 0, dt, rt);
    }),
    (Mt.createContext = function (R) {
      return (
        (R = {
          $$typeof: d,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (R.Provider = R),
        (R.Consumer = { $$typeof: f, _context: R }),
        R
      );
    }),
    (Mt.createElement = function (R, K, ot) {
      var rt,
        ut = {},
        dt = null;
      if (K != null)
        for (rt in (K.key !== void 0 && (dt = '' + K.key), K))
          B.call(K, rt) && rt !== 'key' && rt !== '__self' && rt !== '__source' && (ut[rt] = K[rt]);
      var nt = arguments.length - 2;
      if (nt === 1) ut.children = ot;
      else if (1 < nt) {
        for (var pt = Array(nt), yt = 0; yt < nt; yt++) pt[yt] = arguments[yt + 2];
        ut.children = pt;
      }
      if (R && R.defaultProps)
        for (rt in ((nt = R.defaultProps), nt)) ut[rt] === void 0 && (ut[rt] = nt[rt]);
      return P(R, dt, void 0, void 0, null, ut);
    }),
    (Mt.createRef = function () {
      return { current: null };
    }),
    (Mt.forwardRef = function (R) {
      return { $$typeof: p, render: R };
    }),
    (Mt.isValidElement = F),
    (Mt.lazy = function (R) {
      return { $$typeof: b, _payload: { _status: -1, _result: R }, _init: X };
    }),
    (Mt.memo = function (R, K) {
      return { $$typeof: h, type: R, compare: K === void 0 ? null : K };
    }),
    (Mt.startTransition = function (R) {
      var K = z.T,
        ot = {};
      z.T = ot;
      try {
        var rt = R(),
          ut = z.S;
        (ut !== null && ut(ot, rt),
          typeof rt == 'object' && rt !== null && typeof rt.then == 'function' && rt.then(at, it));
      } catch (dt) {
        it(dt);
      } finally {
        z.T = K;
      }
    }),
    (Mt.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (Mt.use = function (R) {
      return z.H.use(R);
    }),
    (Mt.useActionState = function (R, K, ot) {
      return z.H.useActionState(R, K, ot);
    }),
    (Mt.useCallback = function (R, K) {
      return z.H.useCallback(R, K);
    }),
    (Mt.useContext = function (R) {
      return z.H.useContext(R);
    }),
    (Mt.useDebugValue = function () {}),
    (Mt.useDeferredValue = function (R, K) {
      return z.H.useDeferredValue(R, K);
    }),
    (Mt.useEffect = function (R, K, ot) {
      var rt = z.H;
      if (typeof ot == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return rt.useEffect(R, K);
    }),
    (Mt.useId = function () {
      return z.H.useId();
    }),
    (Mt.useImperativeHandle = function (R, K, ot) {
      return z.H.useImperativeHandle(R, K, ot);
    }),
    (Mt.useInsertionEffect = function (R, K) {
      return z.H.useInsertionEffect(R, K);
    }),
    (Mt.useLayoutEffect = function (R, K) {
      return z.H.useLayoutEffect(R, K);
    }),
    (Mt.useMemo = function (R, K) {
      return z.H.useMemo(R, K);
    }),
    (Mt.useOptimistic = function (R, K) {
      return z.H.useOptimistic(R, K);
    }),
    (Mt.useReducer = function (R, K, ot) {
      return z.H.useReducer(R, K, ot);
    }),
    (Mt.useRef = function (R) {
      return z.H.useRef(R);
    }),
    (Mt.useState = function (R) {
      return z.H.useState(R);
    }),
    (Mt.useSyncExternalStore = function (R, K, ot) {
      return z.H.useSyncExternalStore(R, K, ot);
    }),
    (Mt.useTransition = function () {
      return z.H.useTransition();
    }),
    (Mt.version = '19.1.1'),
    Mt
  );
}
var ig;
function jf() {
  return (ig || ((ig = 1), (Jc.exports = Ib())), Jc.exports);
}
var x = jf();
const On = Uf(x),
  bf = Xb({ __proto__: null, default: On }, [x]);
var tf = { exports: {} },
  po = {},
  ef = { exports: {} },
  nf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sg;
function Zb() {
  return (
    sg ||
      ((sg = 1),
      (function (n) {
        function r(A, X) {
          var it = A.length;
          A.push(X);
          t: for (; 0 < it; ) {
            var at = (it - 1) >>> 1,
              R = A[at];
            if (0 < c(R, X)) ((A[at] = X), (A[it] = R), (it = at));
            else break t;
          }
        }
        function o(A) {
          return A.length === 0 ? null : A[0];
        }
        function i(A) {
          if (A.length === 0) return null;
          var X = A[0],
            it = A.pop();
          if (it !== X) {
            A[0] = it;
            t: for (var at = 0, R = A.length, K = R >>> 1; at < K; ) {
              var ot = 2 * (at + 1) - 1,
                rt = A[ot],
                ut = ot + 1,
                dt = A[ut];
              if (0 > c(rt, it))
                ut < R && 0 > c(dt, rt)
                  ? ((A[at] = dt), (A[ut] = it), (at = ut))
                  : ((A[at] = rt), (A[ot] = it), (at = ot));
              else if (ut < R && 0 > c(dt, it)) ((A[at] = dt), (A[ut] = it), (at = ut));
              else break t;
            }
          }
          return X;
        }
        function c(A, X) {
          var it = A.sortIndex - X.sortIndex;
          return it !== 0 ? it : A.id - X.id;
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
          E = 3,
          O = !1,
          C = !1,
          T = !1,
          D = !1,
          k = typeof setTimeout == 'function' ? setTimeout : null,
          H = typeof clearTimeout == 'function' ? clearTimeout : null,
          N = typeof setImmediate < 'u' ? setImmediate : null;
        function w(A) {
          for (var X = o(h); X !== null; ) {
            if (X.callback === null) i(h);
            else if (X.startTime <= A) (i(h), (X.sortIndex = X.expirationTime), r(g, X));
            else break;
            X = o(h);
          }
        }
        function z(A) {
          if (((T = !1), w(A), !C))
            if (o(g) !== null) ((C = !0), B || ((B = !0), v()));
            else {
              var X = o(h);
              X !== null && Y(z, X.startTime - A);
            }
        }
        var B = !1,
          P = -1,
          Q = 5,
          F = -1;
        function J() {
          return D ? !0 : !(n.unstable_now() - F < Q);
        }
        function et() {
          if (((D = !1), B)) {
            var A = n.unstable_now();
            F = A;
            var X = !0;
            try {
              t: {
                ((C = !1), T && ((T = !1), H(P), (P = -1)), (O = !0));
                var it = E;
                try {
                  e: {
                    for (w(A), S = o(g); S !== null && !(S.expirationTime > A && J()); ) {
                      var at = S.callback;
                      if (typeof at == 'function') {
                        ((S.callback = null), (E = S.priorityLevel));
                        var R = at(S.expirationTime <= A);
                        if (((A = n.unstable_now()), typeof R == 'function')) {
                          ((S.callback = R), w(A), (X = !0));
                          break e;
                        }
                        (S === o(g) && i(g), w(A));
                      } else i(g);
                      S = o(g);
                    }
                    if (S !== null) X = !0;
                    else {
                      var K = o(h);
                      (K !== null && Y(z, K.startTime - A), (X = !1));
                    }
                  }
                  break t;
                } finally {
                  ((S = null), (E = it), (O = !1));
                }
                X = void 0;
              }
            } finally {
              X ? v() : (B = !1);
            }
          }
        }
        var v;
        if (typeof N == 'function')
          v = function () {
            N(et);
          };
        else if (typeof MessageChannel < 'u') {
          var I = new MessageChannel(),
            V = I.port2;
          ((I.port1.onmessage = et),
            (v = function () {
              V.postMessage(null);
            }));
        } else
          v = function () {
            k(et, 0);
          };
        function Y(A, X) {
          P = k(function () {
            A(n.unstable_now());
          }, X);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (n.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Q = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (n.unstable_next = function (A) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = E;
            }
            var it = E;
            E = X;
            try {
              return A();
            } finally {
              E = it;
            }
          }),
          (n.unstable_requestPaint = function () {
            D = !0;
          }),
          (n.unstable_runWithPriority = function (A, X) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var it = E;
            E = A;
            try {
              return X();
            } finally {
              E = it;
            }
          }),
          (n.unstable_scheduleCallback = function (A, X, it) {
            var at = n.unstable_now();
            switch (
              (typeof it == 'object' && it !== null
                ? ((it = it.delay), (it = typeof it == 'number' && 0 < it ? at + it : at))
                : (it = at),
              A)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = it + R),
              (A = {
                id: b++,
                callback: X,
                priorityLevel: A,
                startTime: it,
                expirationTime: R,
                sortIndex: -1,
              }),
              it > at
                ? ((A.sortIndex = it),
                  r(h, A),
                  o(g) === null && A === o(h) && (T ? (H(P), (P = -1)) : (T = !0), Y(z, it - at)))
                : ((A.sortIndex = R), r(g, A), C || O || ((C = !0), B || ((B = !0), v()))),
              A
            );
          }),
          (n.unstable_shouldYield = J),
          (n.unstable_wrapCallback = function (A) {
            var X = E;
            return function () {
              var it = E;
              E = X;
              try {
                return A.apply(this, arguments);
              } finally {
                E = it;
              }
            };
          }));
      })(nf)),
    nf
  );
}
var ug;
function Fb() {
  return (ug || ((ug = 1), (ef.exports = Zb())), ef.exports);
}
var af = { exports: {} },
  Ve = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cg;
function Wb() {
  if (cg) return Ve;
  cg = 1;
  var n = jf();
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
    (Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Ve.createPortal = function (g, h) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(r(299));
      return f(g, h, null, b);
    }),
    (Ve.flushSync = function (g) {
      var h = d.T,
        b = i.p;
      try {
        if (((d.T = null), (i.p = 2), g)) return g();
      } finally {
        ((d.T = h), (i.p = b), i.d.f());
      }
    }),
    (Ve.preconnect = function (g, h) {
      typeof g == 'string' &&
        (h
          ? ((h = h.crossOrigin),
            (h = typeof h == 'string' ? (h === 'use-credentials' ? h : '') : void 0))
          : (h = null),
        i.d.C(g, h));
    }),
    (Ve.prefetchDNS = function (g) {
      typeof g == 'string' && i.d.D(g);
    }),
    (Ve.preinit = function (g, h) {
      if (typeof g == 'string' && h && typeof h.as == 'string') {
        var b = h.as,
          S = p(b, h.crossOrigin),
          E = typeof h.integrity == 'string' ? h.integrity : void 0,
          O = typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0;
        b === 'style'
          ? i.d.S(g, typeof h.precedence == 'string' ? h.precedence : void 0, {
              crossOrigin: S,
              integrity: E,
              fetchPriority: O,
            })
          : b === 'script' &&
            i.d.X(g, {
              crossOrigin: S,
              integrity: E,
              fetchPriority: O,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
      }
    }),
    (Ve.preinitModule = function (g, h) {
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
    (Ve.preload = function (g, h) {
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
    (Ve.preloadModule = function (g, h) {
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
    (Ve.requestFormReset = function (g) {
      i.d.r(g);
    }),
    (Ve.unstable_batchedUpdates = function (g, h) {
      return g(h);
    }),
    (Ve.useFormState = function (g, h, b) {
      return d.H.useFormState(g, h, b);
    }),
    (Ve.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Ve.version = '19.1.1'),
    Ve
  );
}
var fg;
function Ay() {
  if (fg) return af.exports;
  fg = 1;
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
  return (n(), (af.exports = Wb()), af.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dg;
function Jb() {
  if (dg) return po;
  dg = 1;
  var n = Fb(),
    r = jf(),
    o = Ay();
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
    E = Symbol.for('react.transitional.element'),
    O = Symbol.for('react.portal'),
    C = Symbol.for('react.fragment'),
    T = Symbol.for('react.strict_mode'),
    D = Symbol.for('react.profiler'),
    k = Symbol.for('react.provider'),
    H = Symbol.for('react.consumer'),
    N = Symbol.for('react.context'),
    w = Symbol.for('react.forward_ref'),
    z = Symbol.for('react.suspense'),
    B = Symbol.for('react.suspense_list'),
    P = Symbol.for('react.memo'),
    Q = Symbol.for('react.lazy'),
    F = Symbol.for('react.activity'),
    J = Symbol.for('react.memo_cache_sentinel'),
    et = Symbol.iterator;
  function v(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (et && t[et]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var I = Symbol.for('react.client.reference');
  function V(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === I ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case C:
        return 'Fragment';
      case D:
        return 'Profiler';
      case T:
        return 'StrictMode';
      case z:
        return 'Suspense';
      case B:
        return 'SuspenseList';
      case F:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case O:
          return 'Portal';
        case N:
          return (t.displayName || 'Context') + '.Provider';
        case H:
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
          return ((e = t.displayName || null), e !== null ? e : V(t.type) || 'Memo');
        case Q:
          ((e = t._payload), (t = t._init));
          try {
            return V(t(e));
          } catch {}
      }
    return null;
  }
  var Y = Array.isArray,
    A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = { pending: !1, data: null, method: null, action: null },
    at = [],
    R = -1;
  function K(t) {
    return { current: t };
  }
  function ot(t) {
    0 > R || ((t.current = at[R]), (at[R] = null), R--);
  }
  function rt(t, e) {
    (R++, (at[R] = t.current), (t.current = e));
  }
  var ut = K(null),
    dt = K(null),
    nt = K(null),
    pt = K(null);
  function yt(t, e) {
    switch ((rt(nt, e), rt(dt, t), rt(ut, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Nh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = Nh(e)), (t = _h(e, t)));
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
    (ot(ut), rt(ut, t));
  }
  function Tt() {
    (ot(ut), ot(dt), ot(nt));
  }
  function vt(t) {
    t.memoizedState !== null && rt(pt, t);
    var e = ut.current,
      a = _h(e, t.type);
    e !== a && (rt(dt, t), rt(ut, a));
  }
  function Et(t) {
    (dt.current === t && (ot(ut), ot(dt)), pt.current === t && (ot(pt), (oo._currentValue = it)));
  }
  var _t = Object.prototype.hasOwnProperty,
    ye = n.unstable_scheduleCallback,
    Rt = n.unstable_cancelCallback,
    Xt = n.unstable_shouldYield,
    ke = n.unstable_requestPaint,
    Kt = n.unstable_now,
    ce = n.unstable_getCurrentPriorityLevel,
    ue = n.unstable_ImmediatePriority,
    me = n.unstable_UserBlockingPriority,
    Wt = n.unstable_NormalPriority,
    mt = n.unstable_LowPriority,
    en = n.unstable_IdlePriority,
    ve = n.log,
    En = n.unstable_setDisableYieldValue,
    fe = null,
    At = null;
  function Jt(t) {
    if ((typeof ve == 'function' && En(t), At && typeof At.setStrictMode == 'function'))
      try {
        At.setStrictMode(fe, t);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : ma,
    Ke = Math.log,
    te = Math.LN2;
  function ma(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ke(t) / te) | 0)) | 0);
  }
  var Xn = 256,
    Va = 4194304;
  function gt(t) {
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
  function Yt(t, e, a) {
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
            ? (s = gt(l))
            : ((m &= y), m !== 0 ? (s = gt(m)) : a || ((a = y & ~t), a !== 0 && (s = gt(a)))))
        : ((y = l & ~u),
          y !== 0
            ? (s = gt(y))
            : m !== 0
              ? (s = gt(m))
              : a || ((a = l & ~t), a !== 0 && (s = gt(a)))),
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
  function he(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ha(t, e) {
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
  function hr() {
    var t = Xn;
    return ((Xn <<= 1), (Xn & 4194048) === 0 && (Xn = 256), t);
  }
  function gd() {
    var t = Va;
    return ((Va <<= 1), (Va & 62914560) === 0 && (Va = 4194304), t);
  }
  function qs(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function gr(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function B0(t, e, a, l, s, u) {
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
      M = t.expirationTimes,
      L = t.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var W = 31 - $t(a),
        lt = 1 << W;
      ((y[W] = 0), (M[W] = -1));
      var q = L[W];
      if (q !== null)
        for (L[W] = null, W = 0; W < q.length; W++) {
          var G = q[W];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~lt;
    }
    (l !== 0 && yd(t, l, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(m & ~e)));
  }
  function yd(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - $t(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function vd(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - $t(a),
        s = 1 << l;
      ((s & e) | (t[l] & e) && (t[l] |= e), (a &= ~s));
    }
  }
  function Gs(t) {
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
  function Vs(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function bd() {
    var t = X.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Wh(t.type));
  }
  function k0(t, e) {
    var a = X.p;
    try {
      return ((X.p = t), e());
    } finally {
      X.p = a;
    }
  }
  var ga = Math.random().toString(36).slice(2),
    qe = '__reactFiber$' + ga,
    Ie = '__reactProps$' + ga,
    hl = '__reactContainer$' + ga,
    Ys = '__reactEvents$' + ga,
    $0 = '__reactListeners$' + ga,
    U0 = '__reactHandles$' + ga,
    Sd = '__reactResources$' + ga,
    yr = '__reactMarker$' + ga;
  function Ps(t) {
    (delete t[qe], delete t[Ie], delete t[Ys], delete t[$0], delete t[U0]);
  }
  function gl(t) {
    var e = t[qe];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[hl] || a[qe])) {
        if (((a = e.alternate), e.child !== null || (a !== null && a.child !== null)))
          for (t = Uh(t); t !== null; ) {
            if ((a = t[qe])) return a;
            t = Uh(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function yl(t) {
    if ((t = t[qe] || t[hl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function vr(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function vl(t) {
    var e = t[Sd];
    return (e || (e = t[Sd] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function De(t) {
    t[yr] = !0;
  }
  var xd = new Set(),
    Cd = {};
  function Ya(t, e) {
    (bl(t, e), bl(t + 'Capture', e));
  }
  function bl(t, e) {
    for (Cd[t] = e, t = 0; t < e.length; t++) xd.add(e[t]);
  }
  var j0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Td = {},
    Ed = {};
  function L0(t) {
    return _t.call(Ed, t)
      ? !0
      : _t.call(Td, t)
        ? !1
        : j0.test(t)
          ? (Ed[t] = !0)
          : ((Td[t] = !0), !1);
  }
  function qo(t, e, a) {
    if (L0(e))
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
  function Go(t, e, a) {
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
  function Kn(t, e, a, l) {
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
  var Xs, Rd;
  function Sl(t) {
    if (Xs === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ((Xs = (e && e[1]) || ''),
          (Rd =
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
      Xs +
      t +
      Rd
    );
  }
  var Ks = !1;
  function Qs(t, e) {
    if (!t || Ks) return '';
    Ks = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var lt = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(lt.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(lt, []);
                } catch (G) {
                  var q = G;
                }
                Reflect.construct(t, [], lt);
              } else {
                try {
                  lt.call();
                } catch (G) {
                  q = G;
                }
                t.call(lt.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                q = G;
              }
              (lt = t()) && typeof lt.catch == 'function' && lt.catch(function () {});
            }
          } catch (G) {
            if (G && q && typeof G.stack == 'string') return [G.stack, q.stack];
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
        var M = m.split(`
`),
          L = y.split(`
`);
        for (s = l = 0; l < M.length && !M[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; s < L.length && !L[s].includes('DetermineComponentFrameRoot'); ) s++;
        if (l === M.length || s === L.length)
          for (l = M.length - 1, s = L.length - 1; 1 <= l && 0 <= s && M[l] !== L[s]; ) s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (M[l] !== L[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || M[l] !== L[s])) {
                  var W =
                    `
` + M[l].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      W.includes('<anonymous>') &&
                      (W = W.replace('<anonymous>', t.displayName)),
                    W
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      ((Ks = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : '') ? Sl(a) : '';
  }
  function H0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Sl(t.type);
      case 16:
        return Sl('Lazy');
      case 13:
        return Sl('Suspense');
      case 19:
        return Sl('SuspenseList');
      case 0:
      case 15:
        return Qs(t.type, !1);
      case 11:
        return Qs(t.type.render, !1);
      case 1:
        return Qs(t.type, !0);
      case 31:
        return Sl('Activity');
      default:
        return '';
    }
  }
  function Ad(t) {
    try {
      var e = '';
      do ((e += H0(t)), (t = t.return));
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
  function dn(t) {
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
  function Md(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function q0(t) {
    var e = Md(t) ? 'checked' : 'value',
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
  function Vo(t) {
    t._valueTracker || (t._valueTracker = q0(t));
  }
  function Od(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = '';
    return (
      t && (l = Md(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function Yo(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var G0 = /[\n"\\]/g;
  function pn(t) {
    return t.replace(G0, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Is(t, e, a, l, s, u, m, y) {
    ((t.name = ''),
      m != null && typeof m != 'function' && typeof m != 'symbol' && typeof m != 'boolean'
        ? (t.type = m)
        : t.removeAttribute('type'),
      e != null
        ? m === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + dn(e))
          : t.value !== '' + dn(e) && (t.value = '' + dn(e))
        : (m !== 'submit' && m !== 'reset') || t.removeAttribute('value'),
      e != null
        ? Zs(t, m, dn(e))
        : a != null
          ? Zs(t, m, dn(a))
          : l != null && t.removeAttribute('value'),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null && (t.checked = s && typeof s != 'function' && typeof s != 'symbol'),
      y != null && typeof y != 'function' && typeof y != 'symbol' && typeof y != 'boolean'
        ? (t.name = '' + dn(y))
        : t.removeAttribute('name'));
  }
  function zd(t, e, a, l, s, u, m, y) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || a != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) return;
      ((a = a != null ? '' + dn(a) : ''),
        (e = e != null ? '' + dn(e) : a),
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
  function Zs(t, e, a) {
    (e === 'number' && Yo(t.ownerDocument) === t) ||
      t.defaultValue === '' + a ||
      (t.defaultValue = '' + a);
  }
  function xl(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < a.length; s++) e['$' + a[s]] = !0;
      for (a = 0; a < t.length; a++)
        ((s = e.hasOwnProperty('$' + t[a].value)),
          t[a].selected !== s && (t[a].selected = s),
          s && l && (t[a].defaultSelected = !0));
    } else {
      for (a = '' + dn(a), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === a) {
          ((t[s].selected = !0), l && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function wd(t, e, a) {
    if (e != null && ((e = '' + dn(e)), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? '' + dn(a) : '';
  }
  function Dd(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(i(92));
        if (Y(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ''), (e = a));
    }
    ((a = dn(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== '' && l !== null && (t.value = l));
  }
  function Cl(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var V0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Nd(t, e, a) {
    var l = e.indexOf('--') === 0;
    a == null || typeof a == 'boolean' || a === ''
      ? l
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : l
        ? t.setProperty(e, a)
        : typeof a != 'number' || a === 0 || V0.has(e)
          ? e === 'float'
            ? (t.cssFloat = a)
            : (t[e] = ('' + a).trim())
          : (t[e] = a + 'px');
  }
  function _d(t, e, a) {
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
      for (var s in e) ((l = e[s]), e.hasOwnProperty(s) && a[s] !== l && Nd(t, s, l));
    } else for (var u in e) e.hasOwnProperty(u) && Nd(t, u, e[u]);
  }
  function Fs(t) {
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
  var Y0 = new Map([
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
    P0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Po(t) {
    return P0.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ws = null;
  function Js(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Tl = null,
    El = null;
  function Bd(t) {
    var e = yl(t);
    if (e && (t = e.stateNode)) {
      var a = t[Ie] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Is(
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
              a = a.querySelectorAll('input[name="' + pn('' + e) + '"][type="radio"]'), e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var s = l[Ie] || null;
                if (!s) throw Error(i(90));
                Is(
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
            for (e = 0; e < a.length; e++) ((l = a[e]), l.form === t.form && Od(l));
          }
          break t;
        case 'textarea':
          wd(t, a.value, a.defaultValue);
          break t;
        case 'select':
          ((e = a.value), e != null && xl(t, !!a.multiple, e, !1));
      }
    }
  }
  var tu = !1;
  function kd(t, e, a) {
    if (tu) return t(e, a);
    tu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((tu = !1),
        (Tl !== null || El !== null) &&
          (wi(), Tl && ((e = Tl), (t = El), (El = Tl = null), Bd(e), t)))
      )
        for (e = 0; e < t.length; e++) Bd(t[e]);
    }
  }
  function br(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Ie] || null;
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
  var Qn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    eu = !1;
  if (Qn)
    try {
      var Sr = {};
      (Object.defineProperty(Sr, 'passive', {
        get: function () {
          eu = !0;
        },
      }),
        window.addEventListener('test', Sr, Sr),
        window.removeEventListener('test', Sr, Sr));
    } catch {
      eu = !1;
    }
  var ya = null,
    nu = null,
    Xo = null;
  function $d() {
    if (Xo) return Xo;
    var t,
      e = nu,
      a = e.length,
      l,
      s = 'value' in ya ? ya.value : ya.textContent,
      u = s.length;
    for (t = 0; t < a && e[t] === s[t]; t++);
    var m = a - t;
    for (l = 1; l <= m && e[a - l] === s[u - l]; l++);
    return (Xo = s.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Ko(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Qo() {
    return !0;
  }
  function Ud() {
    return !1;
  }
  function Ze(t) {
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
          ? Qo
          : Ud),
        (this.isPropagationStopped = Ud),
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
            (this.isDefaultPrevented = Qo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
            (this.isPropagationStopped = Qo));
        },
        persist: function () {},
        isPersistent: Qo,
      }),
      e
    );
  }
  var Pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Io = Ze(Pa),
    xr = b({}, Pa, { view: 0, detail: 0 }),
    X0 = Ze(xr),
    au,
    lu,
    Cr,
    Zo = b({}, xr, {
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
      getModifierState: ou,
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
          : (t !== Cr &&
              (Cr && t.type === 'mousemove'
                ? ((au = t.screenX - Cr.screenX), (lu = t.screenY - Cr.screenY))
                : (lu = au = 0),
              (Cr = t)),
            au);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : lu;
      },
    }),
    jd = Ze(Zo),
    K0 = b({}, Zo, { dataTransfer: 0 }),
    Q0 = Ze(K0),
    I0 = b({}, xr, { relatedTarget: 0 }),
    ru = Ze(I0),
    Z0 = b({}, Pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    F0 = Ze(Z0),
    W0 = b({}, Pa, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    J0 = Ze(W0),
    tv = b({}, Pa, { data: 0 }),
    Ld = Ze(tv),
    ev = {
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
    nv = {
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
    av = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function lv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = av[t]) ? !!e[t] : !1;
  }
  function ou() {
    return lv;
  }
  var rv = b({}, xr, {
      key: function (t) {
        if (t.key) {
          var e = ev[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = Ko(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? nv[t.keyCode] || 'Unidentified'
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
      getModifierState: ou,
      charCode: function (t) {
        return t.type === 'keypress' ? Ko(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? Ko(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0;
      },
    }),
    ov = Ze(rv),
    iv = b({}, Zo, {
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
    Hd = Ze(iv),
    sv = b({}, xr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ou,
    }),
    uv = Ze(sv),
    cv = b({}, Pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fv = Ze(cv),
    dv = b({}, Zo, {
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
    pv = Ze(dv),
    mv = b({}, Pa, { newState: 0, oldState: 0 }),
    hv = Ze(mv),
    gv = [9, 13, 27, 32],
    iu = Qn && 'CompositionEvent' in window,
    Tr = null;
  Qn && 'documentMode' in document && (Tr = document.documentMode);
  var yv = Qn && 'TextEvent' in window && !Tr,
    qd = Qn && (!iu || (Tr && 8 < Tr && 11 >= Tr)),
    Gd = ' ',
    Vd = !1;
  function Yd(t, e) {
    switch (t) {
      case 'keyup':
        return gv.indexOf(e.keyCode) !== -1;
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
  function Pd(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var Rl = !1;
  function vv(t, e) {
    switch (t) {
      case 'compositionend':
        return Pd(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Vd = !0), Gd);
      case 'textInput':
        return ((t = e.data), t === Gd && Vd ? null : t);
      default:
        return null;
    }
  }
  function bv(t, e) {
    if (Rl)
      return t === 'compositionend' || (!iu && Yd(t, e))
        ? ((t = $d()), (Xo = nu = ya = null), (Rl = !1), t)
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
        return qd && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var Sv = {
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
  function Xd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!Sv[t.type] : e === 'textarea';
  }
  function Kd(t, e, a, l) {
    (Tl ? (El ? El.push(l) : (El = [l])) : (Tl = l),
      (e = $i(e, 'onChange')),
      0 < e.length &&
        ((a = new Io('onChange', 'change', null, a, l)), t.push({ event: a, listeners: e })));
  }
  var Er = null,
    Rr = null;
  function xv(t) {
    Mh(t, 0);
  }
  function Fo(t) {
    var e = vr(t);
    if (Od(e)) return t;
  }
  function Qd(t, e) {
    if (t === 'change') return e;
  }
  var Id = !1;
  if (Qn) {
    var su;
    if (Qn) {
      var uu = 'oninput' in document;
      if (!uu) {
        var Zd = document.createElement('div');
        (Zd.setAttribute('oninput', 'return;'), (uu = typeof Zd.oninput == 'function'));
      }
      su = uu;
    } else su = !1;
    Id = su && (!document.documentMode || 9 < document.documentMode);
  }
  function Fd() {
    Er && (Er.detachEvent('onpropertychange', Wd), (Rr = Er = null));
  }
  function Wd(t) {
    if (t.propertyName === 'value' && Fo(Rr)) {
      var e = [];
      (Kd(e, Rr, t, Js(t)), kd(xv, e));
    }
  }
  function Cv(t, e, a) {
    t === 'focusin'
      ? (Fd(), (Er = e), (Rr = a), Er.attachEvent('onpropertychange', Wd))
      : t === 'focusout' && Fd();
  }
  function Tv(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Fo(Rr);
  }
  function Ev(t, e) {
    if (t === 'click') return Fo(e);
  }
  function Rv(t, e) {
    if (t === 'input' || t === 'change') return Fo(e);
  }
  function Av(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var nn = typeof Object.is == 'function' ? Object.is : Av;
  function Ar(t, e) {
    if (nn(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var s = a[l];
      if (!_t.call(e, s) || !nn(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Jd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function tp(t, e) {
    var a = Jd(t);
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
      a = Jd(a);
    }
  }
  function ep(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? ep(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function np(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Yo(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == 'string';
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Yo(t.document);
    }
    return e;
  }
  function cu(t) {
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
  var Mv = Qn && 'documentMode' in document && 11 >= document.documentMode,
    Al = null,
    fu = null,
    Mr = null,
    du = !1;
  function ap(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    du ||
      Al == null ||
      Al !== Yo(l) ||
      ((l = Al),
      'selectionStart' in l && cu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Mr && Ar(Mr, l)) ||
        ((Mr = l),
        (l = $i(fu, 'onSelect')),
        0 < l.length &&
          ((e = new Io('onSelect', 'select', null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = Al))));
  }
  function Xa(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a['Webkit' + t] = 'webkit' + e),
      (a['Moz' + t] = 'moz' + e),
      a
    );
  }
  var Ml = {
      animationend: Xa('Animation', 'AnimationEnd'),
      animationiteration: Xa('Animation', 'AnimationIteration'),
      animationstart: Xa('Animation', 'AnimationStart'),
      transitionrun: Xa('Transition', 'TransitionRun'),
      transitionstart: Xa('Transition', 'TransitionStart'),
      transitioncancel: Xa('Transition', 'TransitionCancel'),
      transitionend: Xa('Transition', 'TransitionEnd'),
    },
    pu = {},
    lp = {};
  Qn &&
    ((lp = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ml.animationend.animation,
      delete Ml.animationiteration.animation,
      delete Ml.animationstart.animation),
    'TransitionEvent' in window || delete Ml.transitionend.transition);
  function Ka(t) {
    if (pu[t]) return pu[t];
    if (!Ml[t]) return t;
    var e = Ml[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in lp) return (pu[t] = e[a]);
    return t;
  }
  var rp = Ka('animationend'),
    op = Ka('animationiteration'),
    ip = Ka('animationstart'),
    Ov = Ka('transitionrun'),
    zv = Ka('transitionstart'),
    wv = Ka('transitioncancel'),
    sp = Ka('transitionend'),
    up = new Map(),
    mu =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  mu.push('scrollEnd');
  function Rn(t, e) {
    (up.set(t, e), Ya(e, [t]));
  }
  var cp = new WeakMap();
  function mn(t, e) {
    if (typeof t == 'object' && t !== null) {
      var a = cp.get(t);
      return a !== void 0 ? a : ((e = { value: t, source: e, stack: Ad(e) }), cp.set(t, e), e);
    }
    return { value: t, source: e, stack: Ad(e) };
  }
  var hn = [],
    Ol = 0,
    hu = 0;
  function Wo() {
    for (var t = Ol, e = (hu = Ol = 0); e < t; ) {
      var a = hn[e];
      hn[e++] = null;
      var l = hn[e];
      hn[e++] = null;
      var s = hn[e];
      hn[e++] = null;
      var u = hn[e];
      if (((hn[e++] = null), l !== null && s !== null)) {
        var m = l.pending;
        (m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)), (l.pending = s));
      }
      u !== 0 && fp(a, s, u);
    }
  }
  function Jo(t, e, a, l) {
    ((hn[Ol++] = t),
      (hn[Ol++] = e),
      (hn[Ol++] = a),
      (hn[Ol++] = l),
      (hu |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function gu(t, e, a, l) {
    return (Jo(t, e, a, l), ti(t));
  }
  function zl(t, e) {
    return (Jo(t, null, null, e), ti(t));
  }
  function fp(t, e, a) {
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
          ((s = 31 - $t(a)),
          (t = u.hiddenUpdates),
          (l = t[s]),
          l === null ? (t[s] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        u)
      : null;
  }
  function ti(t) {
    if (50 < Wr) throw ((Wr = 0), (Cc = null), Error(i(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var wl = {};
  function Dv(t, e, a, l) {
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
  function an(t, e, a, l) {
    return new Dv(t, e, a, l);
  }
  function yu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function In(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = an(t.tag, e, t.key, t.mode)),
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
  function dp(t, e) {
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
  function ei(t, e, a, l, s, u) {
    var m = 0;
    if (((l = t), typeof t == 'function')) yu(t) && (m = 1);
    else if (typeof t == 'string')
      m = _b(t, a, ut.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case F:
          return ((t = an(31, a, e, s)), (t.elementType = F), (t.lanes = u), t);
        case C:
          return Qa(a.children, s, u, e);
        case T:
          ((m = 8), (s |= 24));
          break;
        case D:
          return ((t = an(12, a, e, s | 2)), (t.elementType = D), (t.lanes = u), t);
        case z:
          return ((t = an(13, a, e, s)), (t.elementType = z), (t.lanes = u), t);
        case B:
          return ((t = an(19, a, e, s)), (t.elementType = B), (t.lanes = u), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case k:
              case N:
                m = 10;
                break t;
              case H:
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
    return ((e = an(m, a, e, s)), (e.elementType = t), (e.type = l), (e.lanes = u), e);
  }
  function Qa(t, e, a, l) {
    return ((t = an(7, t, l, e)), (t.lanes = a), t);
  }
  function vu(t, e, a) {
    return ((t = an(6, t, null, e)), (t.lanes = a), t);
  }
  function bu(t, e, a) {
    return (
      (e = an(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Dl = [],
    Nl = 0,
    ni = null,
    ai = 0,
    gn = [],
    yn = 0,
    Ia = null,
    Zn = 1,
    Fn = '';
  function Za(t, e) {
    ((Dl[Nl++] = ai), (Dl[Nl++] = ni), (ni = t), (ai = e));
  }
  function pp(t, e, a) {
    ((gn[yn++] = Zn), (gn[yn++] = Fn), (gn[yn++] = Ia), (Ia = t));
    var l = Zn;
    t = Fn;
    var s = 32 - $t(l) - 1;
    ((l &= ~(1 << s)), (a += 1));
    var u = 32 - $t(e) + s;
    if (30 < u) {
      var m = s - (s % 5);
      ((u = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (s -= m),
        (Zn = (1 << (32 - $t(e) + s)) | (a << s) | l),
        (Fn = u + t));
    } else ((Zn = (1 << u) | (a << s) | l), (Fn = t));
  }
  function Su(t) {
    t.return !== null && (Za(t, 1), pp(t, 1, 0));
  }
  function xu(t) {
    for (; t === ni; ) ((ni = Dl[--Nl]), (Dl[Nl] = null), (ai = Dl[--Nl]), (Dl[Nl] = null));
    for (; t === Ia; )
      ((Ia = gn[--yn]),
        (gn[yn] = null),
        (Fn = gn[--yn]),
        (gn[yn] = null),
        (Zn = gn[--yn]),
        (gn[yn] = null));
  }
  var Qe = null,
    be = null,
    Ut = !1,
    Fa = null,
    _n = !1,
    Cu = Error(i(519));
  function Wa(t) {
    var e = Error(i(418, ''));
    throw (wr(mn(e, t)), Cu);
  }
  function mp(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[qe] = t), (e[Ie] = l), a)) {
      case 'dialog':
        (Dt('cancel', e), Dt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Dt('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < to.length; a++) Dt(to[a], e);
        break;
      case 'source':
        Dt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Dt('error', e), Dt('load', e));
        break;
      case 'details':
        Dt('toggle', e);
        break;
      case 'input':
        (Dt('invalid', e),
          zd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          Vo(e));
        break;
      case 'select':
        Dt('invalid', e);
        break;
      case 'textarea':
        (Dt('invalid', e), Dd(e, l.value, l.defaultValue, l.children), Vo(e));
    }
    ((a = l.children),
      (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
      e.textContent === '' + a ||
      l.suppressHydrationWarning === !0 ||
      Dh(e.textContent, a)
        ? (l.popover != null && (Dt('beforetoggle', e), Dt('toggle', e)),
          l.onScroll != null && Dt('scroll', e),
          l.onScrollEnd != null && Dt('scrollend', e),
          l.onClick != null && (e.onclick = Ui),
          (e = !0))
        : (e = !1),
      e || Wa(t));
  }
  function hp(t) {
    for (Qe = t.return; Qe; )
      switch (Qe.tag) {
        case 5:
        case 13:
          _n = !1;
          return;
        case 27:
        case 3:
          _n = !0;
          return;
        default:
          Qe = Qe.return;
      }
  }
  function Or(t) {
    if (t !== Qe) return !1;
    if (!Ut) return (hp(t), (Ut = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type), (a = !(a !== 'form' && a !== 'button') || jc(t.type, t.memoizedProps))),
        (a = !a)),
      a && be && Wa(t),
      hp(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(i(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === '/$')) {
              if (e === 0) {
                be = Mn(t.nextSibling);
                break t;
              }
              e--;
            } else (a !== '$' && a !== '$!' && a !== '$?') || e++;
          t = t.nextSibling;
        }
        be = null;
      }
    } else
      e === 27
        ? ((e = be), _a(t.type) ? ((t = Gc), (Gc = null), (be = t)) : (be = e))
        : (be = Qe ? Mn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function zr() {
    ((be = Qe = null), (Ut = !1));
  }
  function gp() {
    var t = Fa;
    return (t !== null && (Je === null ? (Je = t) : Je.push.apply(Je, t), (Fa = null)), t);
  }
  function wr(t) {
    Fa === null ? (Fa = [t]) : Fa.push(t);
  }
  var Tu = K(null),
    Ja = null,
    Wn = null;
  function va(t, e, a) {
    (rt(Tu, e._currentValue), (e._currentValue = a));
  }
  function Jn(t) {
    ((t._currentValue = Tu.current), ot(Tu));
  }
  function Eu(t, e, a) {
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
  function Ru(t, e, a, l) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var m = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var y = u;
          u = s;
          for (var M = 0; M < e.length; M++)
            if (y.context === e[M]) {
              ((u.lanes |= a),
                (y = u.alternate),
                y !== null && (y.lanes |= a),
                Eu(u.return, a, t),
                l || (m = null));
              break t;
            }
          u = y.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(i(341));
        ((m.lanes |= a), (u = m.alternate), u !== null && (u.lanes |= a), Eu(m, a, t), (m = null));
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
  function Dr(t, e, a, l) {
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
          nn(s.pendingProps.value, m.value) || (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === pt.current) {
        if (((m = s.alternate), m === null)) throw Error(i(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(oo) : (t = [oo]));
      }
      s = s.return;
    }
    (t !== null && Ru(e, t, a, l), (e.flags |= 262144));
  }
  function li(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!nn(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function tl(t) {
    ((Ja = t), (Wn = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function Ge(t) {
    return yp(Ja, t);
  }
  function ri(t, e) {
    return (Ja === null && tl(t), yp(t, e));
  }
  function yp(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Wn === null)) {
      if (t === null) throw Error(i(308));
      ((Wn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else Wn = Wn.next = e;
    return a;
  }
  var Nv =
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
    _v = n.unstable_scheduleCallback,
    Bv = n.unstable_NormalPriority,
    ze = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Au() {
    return { controller: new Nv(), data: new Map(), refCount: 0 };
  }
  function Nr(t) {
    (t.refCount--,
      t.refCount === 0 &&
        _v(Bv, function () {
          t.controller.abort();
        }));
  }
  var _r = null,
    Mu = 0,
    _l = 0,
    Bl = null;
  function kv(t, e) {
    if (_r === null) {
      var a = (_r = []);
      ((Mu = 0),
        (_l = zc()),
        (Bl = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (Mu++, e.then(vp, vp), e);
  }
  function vp() {
    if (--Mu === 0 && _r !== null) {
      Bl !== null && (Bl.status = 'fulfilled');
      var t = _r;
      ((_r = null), (_l = 0), (Bl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function $v(t, e) {
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
  var bp = A.S;
  A.S = function (t, e) {
    (typeof e == 'object' && e !== null && typeof e.then == 'function' && kv(t, e),
      bp !== null && bp(t, e));
  };
  var el = K(null);
  function Ou() {
    var t = el.current;
    return t !== null ? t : se.pooledCache;
  }
  function oi(t, e) {
    e === null ? rt(el, el.current) : rt(el, e.pool);
  }
  function Sp() {
    var t = Ou();
    return t === null ? null : { parent: ze._currentValue, pool: t };
  }
  var Br = Error(i(460)),
    xp = Error(i(474)),
    ii = Error(i(542)),
    zu = { then: function () {} };
  function Cp(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function si() {}
  function Tp(t, e, a) {
    switch (
      ((a = t[a]), a === void 0 ? t.push(e) : a !== e && (e.then(si, si), (e = a)), e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), Rp(t), t);
      default:
        if (typeof e.status == 'string') e.then(si, si);
        else {
          if (((t = se), t !== null && 100 < t.shellSuspendCounter)) throw Error(i(482));
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
            throw ((t = e.reason), Rp(t), t);
        }
        throw ((kr = e), Br);
    }
  }
  var kr = null;
  function Ep() {
    if (kr === null) throw Error(i(459));
    var t = kr;
    return ((kr = null), t);
  }
  function Rp(t) {
    if (t === Br || t === ii) throw Error(i(483));
  }
  var ba = !1;
  function wu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Du(t, e) {
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
  function Sa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xa(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Qt & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (l.pending = e),
        (e = ti(t)),
        fp(t, null, a),
        e
      );
    }
    return (Jo(t, l, e, a), ti(t));
  }
  function $r(t, e, a) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), vd(t, a));
    }
  }
  function Nu(t, e) {
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
  var _u = !1;
  function Ur() {
    if (_u) {
      var t = Bl;
      if (t !== null) throw t;
    }
  }
  function jr(t, e, a, l) {
    _u = !1;
    var s = t.updateQueue;
    ba = !1;
    var u = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var M = y,
        L = M.next;
      ((M.next = null), m === null ? (u = L) : (m.next = L), (m = M));
      var W = t.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (y = W.lastBaseUpdate),
        y !== m && (y === null ? (W.firstBaseUpdate = L) : (y.next = L), (W.lastBaseUpdate = M)));
    }
    if (u !== null) {
      var lt = s.baseState;
      ((m = 0), (W = L = M = null), (y = u));
      do {
        var q = y.lane & -536870913,
          G = q !== y.lane;
        if (G ? (Bt & q) === q : (l & q) === q) {
          (q !== 0 && q === _l && (_u = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null }));
          t: {
            var Ct = t,
              bt = y;
            q = e;
            var ae = a;
            switch (bt.tag) {
              case 1:
                if (((Ct = bt.payload), typeof Ct == 'function')) {
                  lt = Ct.call(ae, lt, q);
                  break t;
                }
                lt = Ct;
                break t;
              case 3:
                Ct.flags = (Ct.flags & -65537) | 128;
              case 0:
                if (
                  ((Ct = bt.payload),
                  (q = typeof Ct == 'function' ? Ct.call(ae, lt, q) : Ct),
                  q == null)
                )
                  break t;
                lt = b({}, lt, q);
                break t;
              case 2:
                ba = !0;
            }
          }
          ((q = y.callback),
            q !== null &&
              ((t.flags |= 64),
              G && (t.flags |= 8192),
              (G = s.callbacks),
              G === null ? (s.callbacks = [q]) : G.push(q)));
        } else
          ((G = { lane: q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            W === null ? ((L = W = G), (M = lt)) : (W = W.next = G),
            (m |= q));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((G = y),
            (y = G.next),
            (G.next = null),
            (s.lastBaseUpdate = G),
            (s.shared.pending = null));
        }
      } while (!0);
      (W === null && (M = lt),
        (s.baseState = M),
        (s.firstBaseUpdate = L),
        (s.lastBaseUpdate = W),
        u === null && (s.shared.lanes = 0),
        (za |= m),
        (t.lanes = m),
        (t.memoizedState = lt));
    }
  }
  function Ap(t, e) {
    if (typeof t != 'function') throw Error(i(191, t));
    t.call(e);
  }
  function Mp(t, e) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) Ap(a[t], e);
  }
  var kl = K(null),
    ui = K(0);
  function Op(t, e) {
    ((t = oa), rt(ui, t), rt(kl, e), (oa = t | e.baseLanes));
  }
  function Bu() {
    (rt(ui, oa), rt(kl, kl.current));
  }
  function ku() {
    ((oa = ui.current), ot(kl), ot(ui));
  }
  var Ca = 0,
    Ot = null,
    ee = null,
    Ae = null,
    ci = !1,
    $l = !1,
    nl = !1,
    fi = 0,
    Lr = 0,
    Ul = null,
    Uv = 0;
  function Te() {
    throw Error(i(321));
  }
  function $u(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++) if (!nn(t[a], e[a])) return !1;
    return !0;
  }
  function Uu(t, e, a, l, s, u) {
    return (
      (Ca = u),
      (Ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (A.H = t === null || t.memoizedState === null ? fm : dm),
      (nl = !1),
      (u = a(l, s)),
      (nl = !1),
      $l && (u = wp(e, a, l, s)),
      zp(t),
      u
    );
  }
  function zp(t) {
    A.H = yi;
    var e = ee !== null && ee.next !== null;
    if (((Ca = 0), (Ae = ee = Ot = null), (ci = !1), (Lr = 0), (Ul = null), e)) throw Error(i(300));
    t === null || Ne || ((t = t.dependencies), t !== null && li(t) && (Ne = !0));
  }
  function wp(t, e, a, l) {
    Ot = t;
    var s = 0;
    do {
      if (($l && (Ul = null), (Lr = 0), ($l = !1), 25 <= s)) throw Error(i(301));
      if (((s += 1), (Ae = ee = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((A.H = Yv), (u = e(a, l)));
    } while ($l);
    return u;
  }
  function jv() {
    var t = A.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? Hr(e) : e),
      (t = t.useState()[0]),
      (ee !== null ? ee.memoizedState : null) !== t && (Ot.flags |= 1024),
      e
    );
  }
  function ju() {
    var t = fi !== 0;
    return ((fi = 0), t);
  }
  function Lu(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Hu(t) {
    if (ci) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      ci = !1;
    }
    ((Ca = 0), (Ae = ee = Ot = null), ($l = !1), (Lr = fi = 0), (Ul = null));
  }
  function Fe() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ae === null ? (Ot.memoizedState = Ae = t) : (Ae = Ae.next = t), Ae);
  }
  function Me() {
    if (ee === null) {
      var t = Ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ee.next;
    var e = Ae === null ? Ot.memoizedState : Ae.next;
    if (e !== null) ((Ae = e), (ee = t));
    else {
      if (t === null) throw Ot.alternate === null ? Error(i(467)) : Error(i(310));
      ((ee = t),
        (t = {
          memoizedState: ee.memoizedState,
          baseState: ee.baseState,
          baseQueue: ee.baseQueue,
          queue: ee.queue,
          next: null,
        }),
        Ae === null ? (Ot.memoizedState = Ae = t) : (Ae = Ae.next = t));
    }
    return Ae;
  }
  function qu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hr(t) {
    var e = Lr;
    return (
      (Lr += 1),
      Ul === null && (Ul = []),
      (t = Tp(Ul, t, e)),
      (e = Ot),
      (Ae === null ? e.memoizedState : Ae.next) === null &&
        ((e = e.alternate), (A.H = e === null || e.memoizedState === null ? fm : dm)),
      t
    );
  }
  function di(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Hr(t);
      if (t.$$typeof === N) return Ge(t);
    }
    throw Error(i(438, String(t)));
  }
  function Gu(t) {
    var e = null,
      a = Ot.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = Ot.alternate;
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
      a === null && ((a = qu()), (Ot.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = J;
    return (e.index++, a);
  }
  function ta(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function pi(t) {
    var e = Me();
    return Vu(e, ee, t);
  }
  function Vu(t, e, a) {
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
        M = null,
        L = e,
        W = !1;
      do {
        var lt = L.lane & -536870913;
        if (lt !== L.lane ? (Bt & lt) === lt : (Ca & lt) === lt) {
          var q = L.revertLane;
          if (q === 0)
            (M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              lt === _l && (W = !0));
          else if ((Ca & q) === q) {
            ((L = L.next), q === _l && (W = !0));
            continue;
          } else
            ((lt = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              M === null ? ((y = M = lt), (m = u)) : (M = M.next = lt),
              (Ot.lanes |= q),
              (za |= q));
          ((lt = L.action), nl && a(u, lt), (u = L.hasEagerState ? L.eagerState : a(u, lt)));
        } else
          ((q = {
            lane: lt,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            M === null ? ((y = M = q), (m = u)) : (M = M.next = q),
            (Ot.lanes |= lt),
            (za |= lt));
        L = L.next;
      } while (L !== null && L !== e);
      if (
        (M === null ? (m = u) : (M.next = y),
        !nn(u, t.memoizedState) && ((Ne = !0), W && ((a = Bl), a !== null)))
      )
        throw a;
      ((t.memoizedState = u), (t.baseState = m), (t.baseQueue = M), (l.lastRenderedState = u));
    }
    return (s === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Yu(t) {
    var e = Me(),
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
      (nn(u, e.memoizedState) || (Ne = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, l];
  }
  function Dp(t, e, a) {
    var l = Ot,
      s = Me(),
      u = Ut;
    if (u) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = e();
    var m = !nn((ee || s).memoizedState, a);
    (m && ((s.memoizedState = a), (Ne = !0)), (s = s.queue));
    var y = Bp.bind(null, l, s, t);
    if (
      (qr(2048, 8, y, [t]), s.getSnapshot !== e || m || (Ae !== null && Ae.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), jl(9, mi(), _p.bind(null, l, s, a, e), null), se === null))
        throw Error(i(349));
      u || (Ca & 124) !== 0 || Np(l, e, a);
    }
    return a;
  }
  function Np(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = Ot.updateQueue),
      e === null
        ? ((e = qu()), (Ot.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function _p(t, e, a, l) {
    ((e.value = a), (e.getSnapshot = l), kp(e) && $p(t));
  }
  function Bp(t, e, a) {
    return a(function () {
      kp(e) && $p(t);
    });
  }
  function kp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !nn(t, a);
    } catch {
      return !0;
    }
  }
  function $p(t) {
    var e = zl(t, 2);
    e !== null && un(e, t, 2);
  }
  function Pu(t) {
    var e = Fe();
    if (typeof t == 'function') {
      var a = t;
      if (((t = a()), nl)) {
        Jt(!0);
        try {
          a();
        } finally {
          Jt(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Up(t, e, a, l) {
    return ((t.baseState = a), Vu(t, ee, typeof l == 'function' ? l : ta));
  }
  function Lv(t, e, a, l, s) {
    if (gi(t)) throw Error(i(485));
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
      (A.T !== null ? a(!0) : (u.isTransition = !1),
        l(u),
        (a = e.pending),
        a === null
          ? ((u.next = e.pending = u), jp(e, u))
          : ((u.next = a.next), (e.pending = a.next = u)));
    }
  }
  function jp(t, e) {
    var a = e.action,
      l = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = A.T,
        m = {};
      A.T = m;
      try {
        var y = a(s, l),
          M = A.S;
        (M !== null && M(m, y), Lp(t, e, y));
      } catch (L) {
        Xu(t, e, L);
      } finally {
        A.T = u;
      }
    } else
      try {
        ((u = a(s, l)), Lp(t, e, u));
      } catch (L) {
        Xu(t, e, L);
      }
  }
  function Lp(t, e, a) {
    a !== null && typeof a == 'object' && typeof a.then == 'function'
      ? a.then(
          function (l) {
            Hp(t, e, l);
          },
          function (l) {
            return Xu(t, e, l);
          },
        )
      : Hp(t, e, a);
  }
  function Hp(t, e, a) {
    ((e.status = 'fulfilled'),
      (e.value = a),
      qp(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next), a === e ? (t.pending = null) : ((a = a.next), (e.next = a), jp(t, a))));
  }
  function Xu(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = 'rejected'), (e.reason = a), qp(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function qp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gp(t, e) {
    return e;
  }
  function Vp(t, e) {
    if (Ut) {
      var a = se.formState;
      if (a !== null) {
        t: {
          var l = Ot;
          if (Ut) {
            if (be) {
              e: {
                for (var s = be, u = _n; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = Mn(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((u = s.data), (s = u === 'F!' || u === 'F' ? s : null));
              }
              if (s) {
                ((be = Mn(s.nextSibling)), (l = s.data === 'F!'));
                break t;
              }
            }
            Wa(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = Fe()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gp,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = sm.bind(null, Ot, l)),
      (l.dispatch = a),
      (l = Pu(!1)),
      (u = Fu.bind(null, Ot, !1, l.queue)),
      (l = Fe()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = s),
      (a = Lv.bind(null, Ot, s, u, a)),
      (s.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function Yp(t) {
    var e = Me();
    return Pp(e, ee, t);
  }
  function Pp(t, e, a) {
    if (
      ((e = Vu(t, e, Gp)[0]),
      (t = pi(ta)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var l = Hr(e);
      } catch (m) {
        throw m === Br ? ii : m;
      }
    else l = e;
    e = Me();
    var s = e.queue,
      u = s.dispatch;
    return (
      a !== e.memoizedState && ((Ot.flags |= 2048), jl(9, mi(), Hv.bind(null, s, a), null)),
      [l, u, t]
    );
  }
  function Hv(t, e) {
    t.action = e;
  }
  function Xp(t) {
    var e = Me(),
      a = ee;
    if (a !== null) return Pp(e, a, t);
    (Me(), (e = e.memoizedState), (a = Me()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = t), [e, l, !1]);
  }
  function jl(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = Ot.updateQueue),
      e === null && ((e = qu()), (Ot.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function mi() {
    return { destroy: void 0, resource: void 0 };
  }
  function Kp() {
    return Me().memoizedState;
  }
  function hi(t, e, a, l) {
    var s = Fe();
    ((l = l === void 0 ? null : l), (Ot.flags |= t), (s.memoizedState = jl(1 | e, mi(), a, l)));
  }
  function qr(t, e, a, l) {
    var s = Me();
    l = l === void 0 ? null : l;
    var u = s.memoizedState.inst;
    ee !== null && l !== null && $u(l, ee.memoizedState.deps)
      ? (s.memoizedState = jl(e, u, a, l))
      : ((Ot.flags |= t), (s.memoizedState = jl(1 | e, u, a, l)));
  }
  function Qp(t, e) {
    hi(8390656, 8, t, e);
  }
  function Ip(t, e) {
    qr(2048, 8, t, e);
  }
  function Zp(t, e) {
    return qr(4, 2, t, e);
  }
  function Fp(t, e) {
    return qr(4, 4, t, e);
  }
  function Wp(t, e) {
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
  function Jp(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), qr(4, 4, Wp.bind(null, e, t), a));
  }
  function Ku() {}
  function tm(t, e) {
    var a = Me();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && $u(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function em(t, e) {
    var a = Me();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && $u(e, l[1])) return l[0];
    if (((l = t()), nl)) {
      Jt(!0);
      try {
        t();
      } finally {
        Jt(!1);
      }
    }
    return ((a.memoizedState = [l, e]), l);
  }
  function Qu(t, e, a) {
    return a === void 0 || (Ca & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = lh()), (Ot.lanes |= t), (za |= t), a);
  }
  function nm(t, e, a, l) {
    return nn(a, e)
      ? a
      : kl.current !== null
        ? ((t = Qu(t, a, l)), nn(t, e) || (Ne = !0), t)
        : (Ca & 42) === 0
          ? ((Ne = !0), (t.memoizedState = a))
          : ((t = lh()), (Ot.lanes |= t), (za |= t), e);
  }
  function am(t, e, a, l, s) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var m = A.T,
      y = {};
    ((A.T = y), Fu(t, !1, e, a));
    try {
      var M = s(),
        L = A.S;
      if (
        (L !== null && L(y, M), M !== null && typeof M == 'object' && typeof M.then == 'function')
      ) {
        var W = $v(M, l);
        Gr(t, e, W, sn(t));
      } else Gr(t, e, l, sn(t));
    } catch (lt) {
      Gr(t, e, { then: function () {}, status: 'rejected', reason: lt }, sn());
    } finally {
      ((X.p = u), (A.T = m));
    }
  }
  function qv() {}
  function Iu(t, e, a, l) {
    if (t.tag !== 5) throw Error(i(476));
    var s = lm(t).queue;
    am(
      t,
      s,
      e,
      it,
      a === null
        ? qv
        : function () {
            return (rm(t), a(l));
          },
    );
  }
  function lm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: it,
      baseState: it,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: it,
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
          lastRenderedReducer: ta,
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
  function rm(t) {
    var e = lm(t).next.queue;
    Gr(t, e, {}, sn());
  }
  function Zu() {
    return Ge(oo);
  }
  function om() {
    return Me().memoizedState;
  }
  function im() {
    return Me().memoizedState;
  }
  function Gv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = sn();
          t = Sa(a);
          var l = xa(e, t, a);
          (l !== null && (un(l, e, a), $r(l, e, a)), (e = { cache: Au() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Vv(t, e, a) {
    var l = sn();
    ((a = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null }),
      gi(t) ? um(e, a) : ((a = gu(t, e, a, l)), a !== null && (un(a, t, l), cm(a, e, l))));
  }
  function sm(t, e, a) {
    var l = sn();
    Gr(t, e, a, l);
  }
  function Gr(t, e, a, l) {
    var s = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (gi(t)) um(e, s);
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
          if (((s.hasEagerState = !0), (s.eagerState = y), nn(y, m)))
            return (Jo(t, e, s, 0), se === null && Wo(), !1);
        } catch {
        } finally {
        }
      if (((a = gu(t, e, s, l)), a !== null)) return (un(a, t, l), cm(a, e, l), !0);
    }
    return !1;
  }
  function Fu(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: zc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gi(t))
    ) {
      if (e) throw Error(i(479));
    } else ((e = gu(t, a, l, 2)), e !== null && un(e, t, 2));
  }
  function gi(t) {
    var e = t.alternate;
    return t === Ot || (e !== null && e === Ot);
  }
  function um(t, e) {
    $l = ci = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)), (t.pending = e));
  }
  function cm(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), vd(t, a));
    }
  }
  var yi = {
      readContext: Ge,
      use: di,
      useCallback: Te,
      useContext: Te,
      useEffect: Te,
      useImperativeHandle: Te,
      useLayoutEffect: Te,
      useInsertionEffect: Te,
      useMemo: Te,
      useReducer: Te,
      useRef: Te,
      useState: Te,
      useDebugValue: Te,
      useDeferredValue: Te,
      useTransition: Te,
      useSyncExternalStore: Te,
      useId: Te,
      useHostTransitionStatus: Te,
      useFormState: Te,
      useActionState: Te,
      useOptimistic: Te,
      useMemoCache: Te,
      useCacheRefresh: Te,
    },
    fm = {
      readContext: Ge,
      use: di,
      useCallback: function (t, e) {
        return ((Fe().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Ge,
      useEffect: Qp,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null), hi(4194308, 4, Wp.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return hi(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        hi(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Fe();
        e = e === void 0 ? null : e;
        var l = t();
        if (nl) {
          Jt(!0);
          try {
            t();
          } finally {
            Jt(!1);
          }
        }
        return ((a.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, a) {
        var l = Fe();
        if (a !== void 0) {
          var s = a(e);
          if (nl) {
            Jt(!0);
            try {
              a(e);
            } finally {
              Jt(!1);
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
          (t = t.dispatch = Vv.bind(null, Ot, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Fe();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Pu(t);
        var e = t.queue,
          a = sm.bind(null, Ot, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: Ku,
      useDeferredValue: function (t, e) {
        var a = Fe();
        return Qu(a, t, e);
      },
      useTransition: function () {
        var t = Pu(!1);
        return ((t = am.bind(null, Ot, t.queue, !0, !1)), (Fe().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, a) {
        var l = Ot,
          s = Fe();
        if (Ut) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = e()), se === null)) throw Error(i(349));
          (Bt & 124) !== 0 || Np(l, e, a);
        }
        s.memoizedState = a;
        var u = { value: a, getSnapshot: e };
        return (
          (s.queue = u),
          Qp(Bp.bind(null, l, u, t), [t]),
          (l.flags |= 2048),
          jl(9, mi(), _p.bind(null, l, u, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Fe(),
          e = se.identifierPrefix;
        if (Ut) {
          var a = Fn,
            l = Zn;
          ((a = (l & ~(1 << (32 - $t(l) - 1))).toString(32) + a),
            (e = '«' + e + 'R' + a),
            (a = fi++),
            0 < a && (e += 'H' + a.toString(32)),
            (e += '»'));
        } else ((a = Uv++), (e = '«' + e + 'r' + a.toString(32) + '»'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Zu,
      useFormState: Vp,
      useActionState: Vp,
      useOptimistic: function (t) {
        var e = Fe();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((e.queue = a), (e = Fu.bind(null, Ot, !0, a)), (a.dispatch = e), [t, e]);
      },
      useMemoCache: Gu,
      useCacheRefresh: function () {
        return (Fe().memoizedState = Gv.bind(null, Ot));
      },
    },
    dm = {
      readContext: Ge,
      use: di,
      useCallback: tm,
      useContext: Ge,
      useEffect: Ip,
      useImperativeHandle: Jp,
      useInsertionEffect: Zp,
      useLayoutEffect: Fp,
      useMemo: em,
      useReducer: pi,
      useRef: Kp,
      useState: function () {
        return pi(ta);
      },
      useDebugValue: Ku,
      useDeferredValue: function (t, e) {
        var a = Me();
        return nm(a, ee.memoizedState, t, e);
      },
      useTransition: function () {
        var t = pi(ta)[0],
          e = Me().memoizedState;
        return [typeof t == 'boolean' ? t : Hr(t), e];
      },
      useSyncExternalStore: Dp,
      useId: om,
      useHostTransitionStatus: Zu,
      useFormState: Yp,
      useActionState: Yp,
      useOptimistic: function (t, e) {
        var a = Me();
        return Up(a, ee, t, e);
      },
      useMemoCache: Gu,
      useCacheRefresh: im,
    },
    Yv = {
      readContext: Ge,
      use: di,
      useCallback: tm,
      useContext: Ge,
      useEffect: Ip,
      useImperativeHandle: Jp,
      useInsertionEffect: Zp,
      useLayoutEffect: Fp,
      useMemo: em,
      useReducer: Yu,
      useRef: Kp,
      useState: function () {
        return Yu(ta);
      },
      useDebugValue: Ku,
      useDeferredValue: function (t, e) {
        var a = Me();
        return ee === null ? Qu(a, t, e) : nm(a, ee.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Yu(ta)[0],
          e = Me().memoizedState;
        return [typeof t == 'boolean' ? t : Hr(t), e];
      },
      useSyncExternalStore: Dp,
      useId: om,
      useHostTransitionStatus: Zu,
      useFormState: Xp,
      useActionState: Xp,
      useOptimistic: function (t, e) {
        var a = Me();
        return ee !== null ? Up(a, ee, t, e) : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: Gu,
      useCacheRefresh: im,
    },
    Ll = null,
    Vr = 0;
  function vi(t) {
    var e = Vr;
    return ((Vr += 1), Ll === null && (Ll = []), Tp(Ll, t, e));
  }
  function Yr(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function bi(t, e) {
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
  function pm(t) {
    var e = t._init;
    return e(t._payload);
  }
  function mm(t) {
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
      return ((U = In(U, _)), (U.index = 0), (U.sibling = null), U);
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
    function y(U, _, j, tt) {
      return _ === null || _.tag !== 6
        ? ((_ = vu(j, U.mode, tt)), (_.return = U), _)
        : ((_ = s(_, j)), (_.return = U), _);
    }
    function M(U, _, j, tt) {
      var ft = j.type;
      return ft === C
        ? W(U, _, j.props.children, tt, j.key)
        : _ !== null &&
            (_.elementType === ft ||
              (typeof ft == 'object' && ft !== null && ft.$$typeof === Q && pm(ft) === _.type))
          ? ((_ = s(_, j.props)), Yr(_, j), (_.return = U), _)
          : ((_ = ei(j.type, j.key, j.props, null, U.mode, tt)), Yr(_, j), (_.return = U), _);
    }
    function L(U, _, j, tt) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== j.containerInfo ||
        _.stateNode.implementation !== j.implementation
        ? ((_ = bu(j, U.mode, tt)), (_.return = U), _)
        : ((_ = s(_, j.children || [])), (_.return = U), _);
    }
    function W(U, _, j, tt, ft) {
      return _ === null || _.tag !== 7
        ? ((_ = Qa(j, U.mode, tt, ft)), (_.return = U), _)
        : ((_ = s(_, j)), (_.return = U), _);
    }
    function lt(U, _, j) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number' || typeof _ == 'bigint')
        return ((_ = vu('' + _, U.mode, j)), (_.return = U), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case E:
            return ((j = ei(_.type, _.key, _.props, null, U.mode, j)), Yr(j, _), (j.return = U), j);
          case O:
            return ((_ = bu(_, U.mode, j)), (_.return = U), _);
          case Q:
            var tt = _._init;
            return ((_ = tt(_._payload)), lt(U, _, j));
        }
        if (Y(_) || v(_)) return ((_ = Qa(_, U.mode, j, null)), (_.return = U), _);
        if (typeof _.then == 'function') return lt(U, vi(_), j);
        if (_.$$typeof === N) return lt(U, ri(U, _), j);
        bi(U, _);
      }
      return null;
    }
    function q(U, _, j, tt) {
      var ft = _ !== null ? _.key : null;
      if ((typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint')
        return ft !== null ? null : y(U, _, '' + j, tt);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case E:
            return j.key === ft ? M(U, _, j, tt) : null;
          case O:
            return j.key === ft ? L(U, _, j, tt) : null;
          case Q:
            return ((ft = j._init), (j = ft(j._payload)), q(U, _, j, tt));
        }
        if (Y(j) || v(j)) return ft !== null ? null : W(U, _, j, tt, null);
        if (typeof j.then == 'function') return q(U, _, vi(j), tt);
        if (j.$$typeof === N) return q(U, _, ri(U, j), tt);
        bi(U, j);
      }
      return null;
    }
    function G(U, _, j, tt, ft) {
      if ((typeof tt == 'string' && tt !== '') || typeof tt == 'number' || typeof tt == 'bigint')
        return ((U = U.get(j) || null), y(_, U, '' + tt, ft));
      if (typeof tt == 'object' && tt !== null) {
        switch (tt.$$typeof) {
          case E:
            return ((U = U.get(tt.key === null ? j : tt.key) || null), M(_, U, tt, ft));
          case O:
            return ((U = U.get(tt.key === null ? j : tt.key) || null), L(_, U, tt, ft));
          case Q:
            var zt = tt._init;
            return ((tt = zt(tt._payload)), G(U, _, j, tt, ft));
        }
        if (Y(tt) || v(tt)) return ((U = U.get(j) || null), W(_, U, tt, ft, null));
        if (typeof tt.then == 'function') return G(U, _, j, vi(tt), ft);
        if (tt.$$typeof === N) return G(U, _, j, ri(_, tt), ft);
        bi(_, tt);
      }
      return null;
    }
    function Ct(U, _, j, tt) {
      for (
        var ft = null, zt = null, ht = _, St = (_ = 0), Be = null;
        ht !== null && St < j.length;
        St++
      ) {
        ht.index > St ? ((Be = ht), (ht = null)) : (Be = ht.sibling);
        var kt = q(U, ht, j[St], tt);
        if (kt === null) {
          ht === null && (ht = Be);
          break;
        }
        (t && ht && kt.alternate === null && e(U, ht),
          (_ = u(kt, _, St)),
          zt === null ? (ft = kt) : (zt.sibling = kt),
          (zt = kt),
          (ht = Be));
      }
      if (St === j.length) return (a(U, ht), Ut && Za(U, St), ft);
      if (ht === null) {
        for (; St < j.length; St++)
          ((ht = lt(U, j[St], tt)),
            ht !== null &&
              ((_ = u(ht, _, St)), zt === null ? (ft = ht) : (zt.sibling = ht), (zt = ht)));
        return (Ut && Za(U, St), ft);
      }
      for (ht = l(ht); St < j.length; St++)
        ((Be = G(ht, U, St, j[St], tt)),
          Be !== null &&
            (t && Be.alternate !== null && ht.delete(Be.key === null ? St : Be.key),
            (_ = u(Be, _, St)),
            zt === null ? (ft = Be) : (zt.sibling = Be),
            (zt = Be)));
      return (
        t &&
          ht.forEach(function (ja) {
            return e(U, ja);
          }),
        Ut && Za(U, St),
        ft
      );
    }
    function bt(U, _, j, tt) {
      if (j == null) throw Error(i(151));
      for (
        var ft = null, zt = null, ht = _, St = (_ = 0), Be = null, kt = j.next();
        ht !== null && !kt.done;
        St++, kt = j.next()
      ) {
        ht.index > St ? ((Be = ht), (ht = null)) : (Be = ht.sibling);
        var ja = q(U, ht, kt.value, tt);
        if (ja === null) {
          ht === null && (ht = Be);
          break;
        }
        (t && ht && ja.alternate === null && e(U, ht),
          (_ = u(ja, _, St)),
          zt === null ? (ft = ja) : (zt.sibling = ja),
          (zt = ja),
          (ht = Be));
      }
      if (kt.done) return (a(U, ht), Ut && Za(U, St), ft);
      if (ht === null) {
        for (; !kt.done; St++, kt = j.next())
          ((kt = lt(U, kt.value, tt)),
            kt !== null &&
              ((_ = u(kt, _, St)), zt === null ? (ft = kt) : (zt.sibling = kt), (zt = kt)));
        return (Ut && Za(U, St), ft);
      }
      for (ht = l(ht); !kt.done; St++, kt = j.next())
        ((kt = G(ht, U, St, kt.value, tt)),
          kt !== null &&
            (t && kt.alternate !== null && ht.delete(kt.key === null ? St : kt.key),
            (_ = u(kt, _, St)),
            zt === null ? (ft = kt) : (zt.sibling = kt),
            (zt = kt)));
      return (
        t &&
          ht.forEach(function (Pb) {
            return e(U, Pb);
          }),
        Ut && Za(U, St),
        ft
      );
    }
    function ae(U, _, j, tt) {
      if (
        (typeof j == 'object' &&
          j !== null &&
          j.type === C &&
          j.key === null &&
          (j = j.props.children),
        typeof j == 'object' && j !== null)
      ) {
        switch (j.$$typeof) {
          case E:
            t: {
              for (var ft = j.key; _ !== null; ) {
                if (_.key === ft) {
                  if (((ft = j.type), ft === C)) {
                    if (_.tag === 7) {
                      (a(U, _.sibling), (tt = s(_, j.props.children)), (tt.return = U), (U = tt));
                      break t;
                    }
                  } else if (
                    _.elementType === ft ||
                    (typeof ft == 'object' && ft !== null && ft.$$typeof === Q && pm(ft) === _.type)
                  ) {
                    (a(U, _.sibling), (tt = s(_, j.props)), Yr(tt, j), (tt.return = U), (U = tt));
                    break t;
                  }
                  a(U, _);
                  break;
                } else e(U, _);
                _ = _.sibling;
              }
              j.type === C
                ? ((tt = Qa(j.props.children, U.mode, tt, j.key)), (tt.return = U), (U = tt))
                : ((tt = ei(j.type, j.key, j.props, null, U.mode, tt)),
                  Yr(tt, j),
                  (tt.return = U),
                  (U = tt));
            }
            return m(U);
          case O:
            t: {
              for (ft = j.key; _ !== null; ) {
                if (_.key === ft)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === j.containerInfo &&
                    _.stateNode.implementation === j.implementation
                  ) {
                    (a(U, _.sibling), (tt = s(_, j.children || [])), (tt.return = U), (U = tt));
                    break t;
                  } else {
                    a(U, _);
                    break;
                  }
                else e(U, _);
                _ = _.sibling;
              }
              ((tt = bu(j, U.mode, tt)), (tt.return = U), (U = tt));
            }
            return m(U);
          case Q:
            return ((ft = j._init), (j = ft(j._payload)), ae(U, _, j, tt));
        }
        if (Y(j)) return Ct(U, _, j, tt);
        if (v(j)) {
          if (((ft = v(j)), typeof ft != 'function')) throw Error(i(150));
          return ((j = ft.call(j)), bt(U, _, j, tt));
        }
        if (typeof j.then == 'function') return ae(U, _, vi(j), tt);
        if (j.$$typeof === N) return ae(U, _, ri(U, j), tt);
        bi(U, j);
      }
      return (typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint'
        ? ((j = '' + j),
          _ !== null && _.tag === 6
            ? (a(U, _.sibling), (tt = s(_, j)), (tt.return = U), (U = tt))
            : (a(U, _), (tt = vu(j, U.mode, tt)), (tt.return = U), (U = tt)),
          m(U))
        : a(U, _);
    }
    return function (U, _, j, tt) {
      try {
        Vr = 0;
        var ft = ae(U, _, j, tt);
        return ((Ll = null), ft);
      } catch (ht) {
        if (ht === Br || ht === ii) throw ht;
        var zt = an(29, ht, null, U.mode);
        return ((zt.lanes = tt), (zt.return = U), zt);
      } finally {
      }
    };
  }
  var Hl = mm(!0),
    hm = mm(!1),
    vn = K(null),
    Bn = null;
  function Ta(t) {
    var e = t.alternate;
    (rt(we, we.current & 1),
      rt(vn, t),
      Bn === null && (e === null || kl.current !== null || e.memoizedState !== null) && (Bn = t));
  }
  function gm(t) {
    if (t.tag === 22) {
      if ((rt(we, we.current), rt(vn, t), Bn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Bn = t);
      }
    } else Ea();
  }
  function Ea() {
    (rt(we, we.current), rt(vn, vn.current));
  }
  function ea(t) {
    (ot(vn), Bn === t && (Bn = null), ot(we));
  }
  var we = K(0);
  function Si(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || a.data === '$?' || qc(a))) return e;
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
  function Wu(t, e, a, l) {
    ((e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : b({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var Ju = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = sn(),
        s = Sa(l);
      ((s.payload = e),
        a != null && (s.callback = a),
        (e = xa(t, s, l)),
        e !== null && (un(e, t, l), $r(e, t, l)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = sn(),
        s = Sa(l);
      ((s.tag = 1),
        (s.payload = e),
        a != null && (s.callback = a),
        (e = xa(t, s, l)),
        e !== null && (un(e, t, l), $r(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = sn(),
        l = Sa(a);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = xa(t, l, a)),
        e !== null && (un(e, t, a), $r(e, t, a)));
    },
  };
  function ym(t, e, a, l, s, u, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, u, m)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ar(a, l) || !Ar(s, u)
          : !0
    );
  }
  function vm(t, e, a, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && Ju.enqueueReplaceState(e, e.state, null));
  }
  function al(t, e) {
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
  var xi =
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
  function bm(t) {
    xi(t);
  }
  function Sm(t) {
    console.error(t);
  }
  function xm(t) {
    xi(t);
  }
  function Ci(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Cm(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, { componentStack: a.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function tc(t, e, a) {
    return (
      (a = Sa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Ci(t, e);
      }),
      a
    );
  }
  function Tm(t) {
    return ((t = Sa(t)), (t.tag = 3), t);
  }
  function Em(t, e, a, l) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == 'function') {
      var u = l.value;
      ((t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          Cm(e, a, l);
        }));
    }
    var m = a.stateNode;
    m !== null &&
      typeof m.componentDidCatch == 'function' &&
      (t.callback = function () {
        (Cm(e, a, l),
          typeof s != 'function' && (wa === null ? (wa = new Set([this])) : wa.add(this)));
        var y = l.stack;
        this.componentDidCatch(l.value, { componentStack: y !== null ? y : '' });
      });
  }
  function Pv(t, e, a, l, s) {
    if (((a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((e = a.alternate), e !== null && Dr(e, a, s, !0), (a = vn.current), a !== null)) {
        switch (a.tag) {
          case 13:
            return (
              Bn === null ? Ec() : a.alternate === null && Se === 0 && (Se = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = s),
              l === zu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  Ac(t, l, s)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === zu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue), a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  Ac(t, l, s)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return (Ac(t, l, s), Ec(), !1);
    }
    if (Ut)
      return (
        (e = vn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            l !== Cu && ((t = Error(i(422), { cause: l })), wr(mn(t, a))))
          : (l !== Cu && ((e = Error(i(423), { cause: l })), wr(mn(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (l = mn(l, a)),
            (s = tc(t.stateNode, l, s)),
            Nu(t, s),
            Se !== 4 && (Se = 2)),
        !1
      );
    var u = Error(i(520), { cause: l });
    if (((u = mn(u, a)), Fr === null ? (Fr = [u]) : Fr.push(u), Se !== 4 && (Se = 2), e === null))
      return !0;
    ((l = mn(l, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = s & -s),
            (a.lanes |= t),
            (t = tc(a.stateNode, l, t)),
            Nu(a, t),
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
                  (wa === null || !wa.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (s &= -s),
              (a.lanes |= s),
              (s = Tm(s)),
              Em(s, t, a, l),
              Nu(a, s),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Rm = Error(i(461)),
    Ne = !1;
  function $e(t, e, a, l) {
    e.child = t === null ? hm(e, null, a, l) : Hl(e, t.child, a, l);
  }
  function Am(t, e, a, l, s) {
    a = a.render;
    var u = e.ref;
    if ('ref' in l) {
      var m = {};
      for (var y in l) y !== 'ref' && (m[y] = l[y]);
    } else m = l;
    return (
      tl(e),
      (l = Uu(t, e, a, m, u, s)),
      (y = ju()),
      t !== null && !Ne
        ? (Lu(t, e, s), na(t, e, s))
        : (Ut && y && Su(e), (e.flags |= 1), $e(t, e, l, s), e.child)
    );
  }
  function Mm(t, e, a, l, s) {
    if (t === null) {
      var u = a.type;
      return typeof u == 'function' && !yu(u) && u.defaultProps === void 0 && a.compare === null
        ? ((e.tag = 15), (e.type = u), Om(t, e, u, l, s))
        : ((t = ei(a.type, null, l, e, e.mode, s)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((u = t.child), !sc(t, s))) {
      var m = u.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Ar), a(m, l) && t.ref === e.ref))
        return na(t, e, s);
    }
    return ((e.flags |= 1), (t = In(u, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function Om(t, e, a, l, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ar(u, l) && t.ref === e.ref)
        if (((Ne = !1), (e.pendingProps = l = u), sc(t, s))) (t.flags & 131072) !== 0 && (Ne = !0);
        else return ((e.lanes = t.lanes), na(t, e, s));
    }
    return ec(t, e, a, l, s);
  }
  function zm(t, e, a) {
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
        return wm(t, e, l, a);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && oi(e, u !== null ? u.cachePool : null),
          u !== null ? Op(e, u) : Bu(),
          gm(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          wm(t, e, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (oi(e, u.cachePool), Op(e, u), Ea(), (e.memoizedState = null))
        : (t !== null && oi(e, null), Bu(), Ea());
    return ($e(t, e, s, a), e.child);
  }
  function wm(t, e, a, l) {
    var s = Ou();
    return (
      (s = s === null ? null : { parent: ze._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: a, cachePool: s }),
      t !== null && oi(e, null),
      Bu(),
      gm(e),
      t !== null && Dr(t, e, l, !0),
      null
    );
  }
  function Ti(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != 'function' && typeof a != 'object') throw Error(i(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function ec(t, e, a, l, s) {
    return (
      tl(e),
      (a = Uu(t, e, a, l, void 0, s)),
      (l = ju()),
      t !== null && !Ne
        ? (Lu(t, e, s), na(t, e, s))
        : (Ut && l && Su(e), (e.flags |= 1), $e(t, e, a, s), e.child)
    );
  }
  function Dm(t, e, a, l, s, u) {
    return (
      tl(e),
      (e.updateQueue = null),
      (a = wp(e, l, a, s)),
      zp(t),
      (l = ju()),
      t !== null && !Ne
        ? (Lu(t, e, u), na(t, e, u))
        : (Ut && l && Su(e), (e.flags |= 1), $e(t, e, a, u), e.child)
    );
  }
  function Nm(t, e, a, l, s) {
    if ((tl(e), e.stateNode === null)) {
      var u = wl,
        m = a.contextType;
      (typeof m == 'object' && m !== null && (u = Ge(m)),
        (u = new a(l, u)),
        (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ju),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = l),
        (u.state = e.memoizedState),
        (u.refs = {}),
        wu(e),
        (m = a.contextType),
        (u.context = typeof m == 'object' && m !== null ? Ge(m) : wl),
        (u.state = e.memoizedState),
        (m = a.getDerivedStateFromProps),
        typeof m == 'function' && (Wu(e, a, m, l), (u.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((m = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          m !== u.state && Ju.enqueueReplaceState(u, u.state, null),
          jr(e, l, u, s),
          Ur(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      u = e.stateNode;
      var y = e.memoizedProps,
        M = al(a, y);
      u.props = M;
      var L = u.context,
        W = a.contextType;
      ((m = wl), typeof W == 'object' && W !== null && (m = Ge(W)));
      var lt = a.getDerivedStateFromProps;
      ((W = typeof lt == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (y = e.pendingProps !== y),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((y || L !== m) && vm(e, u, l, m)),
        (ba = !1));
      var q = e.memoizedState;
      ((u.state = q),
        jr(e, l, u, s),
        Ur(),
        (L = e.memoizedState),
        y || q !== L || ba
          ? (typeof lt == 'function' && (Wu(e, a, lt, l), (L = e.memoizedState)),
            (M = ba || ym(e, a, M, l, q, L, m))
              ? (W ||
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
            (l = M))
          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308), (l = !1)));
    } else {
      ((u = e.stateNode),
        Du(t, e),
        (m = e.memoizedProps),
        (W = al(a, m)),
        (u.props = W),
        (lt = e.pendingProps),
        (q = u.context),
        (L = a.contextType),
        (M = wl),
        typeof L == 'object' && L !== null && (M = Ge(L)),
        (y = a.getDerivedStateFromProps),
        (L = typeof y == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((m !== lt || q !== M) && vm(e, u, l, M)),
        (ba = !1),
        (q = e.memoizedState),
        (u.state = q),
        jr(e, l, u, s),
        Ur());
      var G = e.memoizedState;
      m !== lt || q !== G || ba || (t !== null && t.dependencies !== null && li(t.dependencies))
        ? (typeof y == 'function' && (Wu(e, a, y, l), (G = e.memoizedState)),
          (W =
            ba ||
            ym(e, a, W, l, q, G, M) ||
            (t !== null && t.dependencies !== null && li(t.dependencies)))
            ? (L ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, G, M),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, G, M)),
              typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (m === t.memoizedProps && q === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (m === t.memoizedProps && q === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = G)),
          (u.props = l),
          (u.state = G),
          (u.context = M),
          (l = W))
        : (typeof u.componentDidUpdate != 'function' ||
            (m === t.memoizedProps && q === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (m === t.memoizedProps && q === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      Ti(t, e),
      (l = (e.flags & 128) !== 0),
      u || l
        ? ((u = e.stateNode),
          (a = l && typeof a.getDerivedStateFromError != 'function' ? null : u.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Hl(e, t.child, null, s)), (e.child = Hl(e, null, a, s)))
            : $e(t, e, a, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = na(t, e, s)),
      t
    );
  }
  function _m(t, e, a, l) {
    return (zr(), (e.flags |= 256), $e(t, e, a, l), e.child);
  }
  var nc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ac(t) {
    return { baseLanes: t, cachePool: Sp() };
  }
  function lc(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= bn), t);
  }
  function Bm(t, e, a) {
    var l = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      m;
    if (
      ((m = u) || (m = t !== null && t.memoizedState === null ? !1 : (we.current & 2) !== 0),
      m && ((s = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ut) {
        if ((s ? Ta(e) : Ea(), Ut)) {
          var y = be,
            M;
          if ((M = y)) {
            t: {
              for (M = y, y = _n; M.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (((M = Mn(M.nextSibling)), M === null)) {
                  y = null;
                  break t;
                }
              }
              y = M;
            }
            y !== null
              ? ((e.memoizedState = {
                  dehydrated: y,
                  treeContext: Ia !== null ? { id: Zn, overflow: Fn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (M = an(18, null, null, 0)),
                (M.stateNode = y),
                (M.return = e),
                (e.child = M),
                (Qe = e),
                (be = null),
                (M = !0))
              : (M = !1);
          }
          M || Wa(e);
        }
        if (((y = e.memoizedState), y !== null && ((y = y.dehydrated), y !== null)))
          return (qc(y) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        ea(e);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        s
          ? (Ea(),
            (s = e.mode),
            (y = Ei({ mode: 'hidden', children: y }, s)),
            (l = Qa(l, s, a, null)),
            (y.return = e),
            (l.return = e),
            (y.sibling = l),
            (e.child = y),
            (s = e.child),
            (s.memoizedState = ac(a)),
            (s.childLanes = lc(t, m, a)),
            (e.memoizedState = nc),
            l)
          : (Ta(e), rc(e, y))
      );
    }
    if (((M = t.memoizedState), M !== null && ((y = M.dehydrated), y !== null))) {
      if (u)
        e.flags & 256
          ? (Ta(e), (e.flags &= -257), (e = oc(t, e, a)))
          : e.memoizedState !== null
            ? (Ea(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Ea(),
              (s = l.fallback),
              (y = e.mode),
              (l = Ei({ mode: 'visible', children: l.children }, y)),
              (s = Qa(s, y, a, null)),
              (s.flags |= 2),
              (l.return = e),
              (s.return = e),
              (l.sibling = s),
              (e.child = l),
              Hl(e, t.child, null, a),
              (l = e.child),
              (l.memoizedState = ac(a)),
              (l.childLanes = lc(t, m, a)),
              (e.memoizedState = nc),
              (e = s));
      else if ((Ta(e), qc(y))) {
        if (((m = y.nextSibling && y.nextSibling.dataset), m)) var L = m.dgst;
        ((m = L),
          (l = Error(i(419))),
          (l.stack = ''),
          (l.digest = m),
          wr({ value: l, source: null, stack: null }),
          (e = oc(t, e, a)));
      } else if ((Ne || Dr(t, e, a, !1), (m = (a & t.childLanes) !== 0), Ne || m)) {
        if (
          ((m = se),
          m !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Gs(l)),
            (l = (l & (m.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== M.retryLane))
        )
          throw ((M.retryLane = l), zl(t, l), un(m, t, l), Rm);
        (y.data === '$?' || Ec(), (e = oc(t, e, a)));
      } else
        y.data === '$?'
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = M.treeContext),
            (be = Mn(y.nextSibling)),
            (Qe = e),
            (Ut = !0),
            (Fa = null),
            (_n = !1),
            t !== null &&
              ((gn[yn++] = Zn),
              (gn[yn++] = Fn),
              (gn[yn++] = Ia),
              (Zn = t.id),
              (Fn = t.overflow),
              (Ia = e)),
            (e = rc(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Ea(),
        (s = l.fallback),
        (y = e.mode),
        (M = t.child),
        (L = M.sibling),
        (l = In(M, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = M.subtreeFlags & 65011712),
        L !== null ? (s = In(L, s)) : ((s = Qa(s, y, a, null)), (s.flags |= 2)),
        (s.return = e),
        (l.return = e),
        (l.sibling = s),
        (e.child = l),
        (l = s),
        (s = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = ac(a))
          : ((M = y.cachePool),
            M !== null
              ? ((L = ze._currentValue), (M = M.parent !== L ? { parent: L, pool: L } : M))
              : (M = Sp()),
            (y = { baseLanes: y.baseLanes | a, cachePool: M })),
        (s.memoizedState = y),
        (s.childLanes = lc(t, m, a)),
        (e.memoizedState = nc),
        l)
      : (Ta(e),
        (a = t.child),
        (t = a.sibling),
        (a = In(a, { mode: 'visible', children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((m = e.deletions), m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function rc(t, e) {
    return ((e = Ei({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function Ei(t, e) {
    return (
      (t = an(22, t, null, e)),
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
  function oc(t, e, a) {
    return (
      Hl(e, t.child, null, a),
      (t = rc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function km(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), Eu(t.return, e, a));
  }
  function ic(t, e, a, l, s) {
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
  function $m(t, e, a) {
    var l = e.pendingProps,
      s = l.revealOrder,
      u = l.tail;
    if (($e(t, e, l.children, a), (l = we.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && km(t, a, e);
          else if (t.tag === 19) km(t, a, e);
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
    switch ((rt(we, l), s)) {
      case 'forwards':
        for (a = e.child, s = null; a !== null; )
          ((t = a.alternate), t !== null && Si(t) === null && (s = a), (a = a.sibling));
        ((a = s),
          a === null ? ((s = e.child), (e.child = null)) : ((s = a.sibling), (a.sibling = null)),
          ic(e, !1, s, a, u));
        break;
      case 'backwards':
        for (a = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Si(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = a), (a = s), (s = t));
        }
        ic(e, !0, a, null, u);
        break;
      case 'together':
        ic(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function na(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (za |= e.lanes), (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Dr(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (t = e.child, a = In(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        ((t = t.sibling), (a = a.sibling = In(t, t.pendingProps)), (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function sc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && li(t)));
  }
  function Xv(t, e, a) {
    switch (e.tag) {
      case 3:
        (yt(e, e.stateNode.containerInfo), va(e, ze, t.memoizedState.cache), zr());
        break;
      case 27:
      case 5:
        vt(e);
        break;
      case 4:
        yt(e, e.stateNode.containerInfo);
        break;
      case 10:
        va(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ta(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? Bm(t, e, a)
              : (Ta(e), (t = na(t, e, a)), t !== null ? t.sibling : null);
        Ta(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (Dr(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          s)
        ) {
          if (l) return $m(t, e, a);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          rt(we, we.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), zm(t, e, a));
      case 24:
        va(e, ze, t.memoizedState.cache);
    }
    return na(t, e, a);
  }
  function Um(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ne = !0;
      else {
        if (!sc(t, a) && (e.flags & 128) === 0) return ((Ne = !1), Xv(t, e, a));
        Ne = (t.flags & 131072) !== 0;
      }
    else ((Ne = !1), Ut && (e.flags & 1048576) !== 0 && pp(e, ai, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            s = l._init;
          if (((l = s(l._payload)), (e.type = l), typeof l == 'function'))
            yu(l)
              ? ((t = al(l, t)), (e.tag = 1), (e = Nm(null, e, l, t, a)))
              : ((e.tag = 0), (e = ec(null, e, l, t, a)));
          else {
            if (l != null) {
              if (((s = l.$$typeof), s === w)) {
                ((e.tag = 11), (e = Am(null, e, l, t, a)));
                break t;
              } else if (s === P) {
                ((e.tag = 14), (e = Mm(null, e, l, t, a)));
                break t;
              }
            }
            throw ((e = V(l) || l), Error(i(306, e, '')));
          }
        }
        return e;
      case 0:
        return ec(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((l = e.type), (s = al(l, e.pendingProps)), Nm(t, e, l, s, a));
      case 3:
        t: {
          if ((yt(e, e.stateNode.containerInfo), t === null)) throw Error(i(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          ((s = u.element), Du(t, e), jr(e, l, null, a));
          var m = e.memoizedState;
          if (
            ((l = m.cache),
            va(e, ze, l),
            l !== u.cache && Ru(e, [ze], a, !0),
            Ur(),
            (l = m.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = _m(t, e, l, a);
              break t;
            } else if (l !== s) {
              ((s = mn(Error(i(424)), e)), wr(s), (e = _m(t, e, l, a)));
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
                be = Mn(t.firstChild),
                  Qe = e,
                  Ut = !0,
                  Fa = null,
                  _n = !0,
                  a = hm(e, null, l, a),
                  e.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((zr(), l === s)) {
              e = na(t, e, a);
              break t;
            }
            $e(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ti(t, e),
          t === null
            ? (a = qh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : Ut ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = ji(nt.current).createElement(a)),
                (l[qe] = e),
                (l[Ie] = t),
                je(l, a, t),
                De(l),
                (e.stateNode = l))
            : (e.memoizedState = qh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          vt(e),
          t === null &&
            Ut &&
            ((l = e.stateNode = jh(e.type, e.pendingProps, nt.current)),
            (Qe = e),
            (_n = !0),
            (s = be),
            _a(e.type) ? ((Gc = s), (be = Mn(l.firstChild))) : (be = s)),
          $e(t, e, e.pendingProps.children, a),
          Ti(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ut &&
            ((s = l = be) &&
              ((l = Sb(l, e.type, e.pendingProps, _n)),
              l !== null
                ? ((e.stateNode = l), (Qe = e), (be = Mn(l.firstChild)), (_n = !1), (s = !0))
                : (s = !1)),
            s || Wa(e)),
          vt(e),
          (s = e.type),
          (u = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (l = u.children),
          jc(s, u) ? (l = null) : m !== null && jc(s, m) && (e.flags |= 32),
          e.memoizedState !== null && ((s = Uu(t, e, jv, null, null, a)), (oo._currentValue = s)),
          Ti(t, e),
          $e(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ut &&
            ((t = a = be) &&
              ((a = xb(a, e.pendingProps, _n)),
              a !== null ? ((e.stateNode = a), (Qe = e), (be = null), (t = !0)) : (t = !1)),
            t || Wa(e)),
          null
        );
      case 13:
        return Bm(t, e, a);
      case 4:
        return (
          yt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Hl(e, null, l, a)) : $e(t, e, l, a),
          e.child
        );
      case 11:
        return Am(t, e, e.type, e.pendingProps, a);
      case 7:
        return ($e(t, e, e.pendingProps, a), e.child);
      case 8:
        return ($e(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return ($e(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return ((l = e.pendingProps), va(e, e.type, l.value), $e(t, e, l.children, a), e.child);
      case 9:
        return (
          (s = e.type._context),
          (l = e.pendingProps.children),
          tl(e),
          (s = Ge(s)),
          (l = l(s)),
          (e.flags |= 1),
          $e(t, e, l, a),
          e.child
        );
      case 14:
        return Mm(t, e, e.type, e.pendingProps, a);
      case 15:
        return Om(t, e, e.type, e.pendingProps, a);
      case 19:
        return $m(t, e, a);
      case 31:
        return (
          (l = e.pendingProps),
          (a = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((a = Ei(l, a)), (a.ref = e.ref), (e.child = a), (a.return = e), (e = a))
            : ((a = In(t.child, l)), (a.ref = e.ref), (e.child = a), (a.return = e), (e = a)),
          e
        );
      case 22:
        return zm(t, e, a);
      case 24:
        return (
          tl(e),
          (l = Ge(ze)),
          t === null
            ? ((s = Ou()),
              s === null &&
                ((s = se),
                (u = Au()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= a),
                (s = u)),
              (e.memoizedState = { parent: l, cache: s }),
              wu(e),
              va(e, ze, s))
            : ((t.lanes & a) !== 0 && (Du(t, e), jr(e, null, null, a), Ur()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== l
                ? ((s = { parent: l, cache: l }),
                  (e.memoizedState = s),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
                  va(e, ze, l))
                : ((l = u.cache), va(e, ze, l), l !== s.cache && Ru(e, [ze], a, !0))),
          $e(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function aa(t) {
    t.flags |= 4;
  }
  function jm(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Xh(e))) {
      if (
        ((e = vn.current),
        e !== null &&
          ((Bt & 4194048) === Bt
            ? Bn !== null
            : ((Bt & 62914560) !== Bt && (Bt & 536870912) === 0) || e !== Bn))
      )
        throw ((kr = zu), xp);
      t.flags |= 8192;
    }
  }
  function Ri(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? gd() : 536870912), (t.lanes |= e), (Yl |= e)));
  }
  function Pr(t, e) {
    if (!Ut)
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
  function ge(t) {
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
  function Kv(t, e, a) {
    var l = e.pendingProps;
    switch ((xu(e), e.tag)) {
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
        return (ge(e), null);
      case 1:
        return (ge(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Jn(ze),
          Tt(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Or(e)
              ? aa(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), gp())),
          ge(e),
          null
        );
      case 26:
        return (
          (a = e.memoizedState),
          t === null
            ? (aa(e), a !== null ? (ge(e), jm(e, a)) : (ge(e), (e.flags &= -16777217)))
            : a
              ? a !== t.memoizedState
                ? (aa(e), ge(e), jm(e, a))
                : (ge(e), (e.flags &= -16777217))
              : (t.memoizedProps !== l && aa(e), ge(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (Et(e), (a = nt.current));
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && aa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(i(166));
            return (ge(e), null);
          }
          ((t = ut.current), Or(e) ? mp(e) : ((t = jh(s, l, a)), (e.stateNode = t), aa(e)));
        }
        return (ge(e), null);
      case 5:
        if ((Et(e), (a = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && aa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(i(166));
            return (ge(e), null);
          }
          if (((t = ut.current), Or(e))) mp(e);
          else {
            switch (((s = ji(nt.current)), t)) {
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
            ((t[qe] = e), (t[Ie] = l));
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
            t && aa(e);
          }
        }
        return (ge(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && aa(e);
        else {
          if (typeof l != 'string' && e.stateNode === null) throw Error(i(166));
          if (((t = nt.current), Or(e))) {
            if (((t = e.stateNode), (a = e.memoizedProps), (l = null), (s = Qe), s !== null))
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            ((t[qe] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Dh(t.nodeValue, a)
              )),
              t || Wa(e));
          } else ((t = ji(t).createTextNode(l)), (t[qe] = e), (e.stateNode = t));
        }
        return (ge(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Or(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(i(318));
              if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                throw Error(i(317));
              s[qe] = e;
            } else (zr(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ge(e), (s = !1));
          } else
            ((s = gp()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (ea(e), e) : (ea(e), null);
        }
        if ((ea(e), (e.flags & 128) !== 0)) return ((e.lanes = a), e);
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
        return (a !== t && a && (e.child.flags |= 8192), Ri(e, e.updateQueue), ge(e), null);
      case 4:
        return (Tt(), t === null && _c(e.stateNode.containerInfo), ge(e), null);
      case 10:
        return (Jn(e.type), ge(e), null);
      case 19:
        if ((ot(we), (s = e.memoizedState), s === null)) return (ge(e), null);
        if (((l = (e.flags & 128) !== 0), (u = s.rendering), u === null))
          if (l) Pr(s, !1);
          else {
            if (Se !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Si(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Pr(s, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ri(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;

                  )
                    (dp(a, t), (a = a.sibling));
                  return (rt(we, (we.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Kt() > Oi &&
              ((e.flags |= 128), (l = !0), Pr(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Si(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ri(e, t),
                Pr(s, !0),
                s.tail === null && s.tailMode === 'hidden' && !u.alternate && !Ut)
              )
                return (ge(e), null);
            } else
              2 * Kt() - s.renderingStartTime > Oi &&
                a !== 536870912 &&
                ((e.flags |= 128), (l = !0), Pr(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = s.last), t !== null ? (t.sibling = u) : (e.child = u), (s.last = u));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Kt()),
            (e.sibling = null),
            (t = we.current),
            rt(we, l ? (t & 1) | 2 : t & 1),
            e)
          : (ge(e), null);
      case 22:
      case 23:
        return (
          ea(e),
          ku(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (ge(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : ge(e),
          (a = e.updateQueue),
          a !== null && Ri(e, a.retryQueue),
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
          t !== null && ot(el),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Jn(ze),
          ge(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function Qv(t, e) {
    switch ((xu(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          Jn(ze),
          Tt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (Et(e), null);
      case 13:
        if ((ea(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(i(340));
          zr();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (ot(we), null);
      case 4:
        return (Tt(), null);
      case 10:
        return (Jn(e.type), null);
      case 22:
      case 23:
        return (
          ea(e),
          ku(),
          t !== null && ot(el),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Jn(ze), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lm(t, e) {
    switch ((xu(e), e.tag)) {
      case 3:
        (Jn(ze), Tt());
        break;
      case 26:
      case 27:
      case 5:
        Et(e);
        break;
      case 4:
        Tt();
        break;
      case 13:
        ea(e);
        break;
      case 19:
        ot(we);
        break;
      case 10:
        Jn(e.type);
        break;
      case 22:
      case 23:
        (ea(e), ku(), t !== null && ot(el));
        break;
      case 24:
        Jn(ze);
    }
  }
  function Xr(t, e) {
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
      oe(e, e.return, y);
    }
  }
  function Ra(t, e, a) {
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
              var M = a,
                L = y;
              try {
                L();
              } catch (W) {
                oe(s, M, W);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (W) {
      oe(e, e.return, W);
    }
  }
  function Hm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Mp(e, a);
      } catch (l) {
        oe(t, t.return, l);
      }
    }
  }
  function qm(t, e, a) {
    ((a.props = al(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      oe(t, e, l);
    }
  }
  function Kr(t, e) {
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
      oe(t, e, s);
    }
  }
  function kn(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (s) {
          oe(t, e, s);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof a == 'function')
        try {
          a(null);
        } catch (s) {
          oe(t, e, s);
        }
      else a.current = null;
  }
  function Gm(t) {
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
      oe(t, t.return, s);
    }
  }
  function uc(t, e, a) {
    try {
      var l = t.stateNode;
      (hb(l, t.type, a, e), (l[Ie] = e));
    } catch (s) {
      oe(t, t.return, s);
    }
  }
  function Vm(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && _a(t.type)) || t.tag === 4
    );
  }
  function cc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Vm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if ((t.tag === 27 && _a(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fc(t, e, a) {
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
            a != null || e.onclick !== null || (e.onclick = Ui)));
    else if (
      l !== 4 &&
      (l === 27 && _a(t.type) && ((a = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (fc(t, e, a), t = t.sibling; t !== null; ) (fc(t, e, a), (t = t.sibling));
  }
  function Ai(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (l !== 4 && (l === 27 && _a(t.type) && (a = t.stateNode), (t = t.child), t !== null))
      for (Ai(t, e, a), t = t.sibling; t !== null; ) (Ai(t, e, a), (t = t.sibling));
  }
  function Ym(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, s = e.attributes; s.length; ) e.removeAttributeNode(s[0]);
      (je(e, l, a), (e[qe] = t), (e[Ie] = a));
    } catch (u) {
      oe(t, t.return, u);
    }
  }
  var la = !1,
    Ee = !1,
    dc = !1,
    Pm = typeof WeakSet == 'function' ? WeakSet : Set,
    _e = null;
  function Iv(t, e) {
    if (((t = t.containerInfo), ($c = Yi), (t = np(t)), cu(t))) {
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
              M = -1,
              L = 0,
              W = 0,
              lt = t,
              q = null;
            e: for (;;) {
              for (
                var G;
                lt !== a || (s !== 0 && lt.nodeType !== 3) || (y = m + s),
                  lt !== u || (l !== 0 && lt.nodeType !== 3) || (M = m + l),
                  lt.nodeType === 3 && (m += lt.nodeValue.length),
                  (G = lt.firstChild) !== null;

              )
                ((q = lt), (lt = G));
              for (;;) {
                if (lt === t) break e;
                if (
                  (q === a && ++L === s && (y = m),
                  q === u && ++W === l && (M = m),
                  (G = lt.nextSibling) !== null)
                )
                  break;
                ((lt = q), (q = lt.parentNode));
              }
              lt = G;
            }
            a = y === -1 || M === -1 ? null : { start: y, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Uc = { focusedElem: t, selectionRange: a }, Yi = !1, _e = e; _e !== null; )
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
                  var Ct = al(a.type, s, a.elementType === a.type);
                  ((t = l.getSnapshotBeforeUpdate(Ct, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (bt) {
                  oe(a, a.return, bt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)) Hc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Hc(t);
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
  function Xm(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Aa(t, a), l & 4 && Xr(5, a));
        break;
      case 1:
        if ((Aa(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              oe(a, a.return, m);
            }
          else {
            var s = al(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              oe(a, a.return, m);
            }
          }
        (l & 64 && Hm(a), l & 512 && Kr(a, a.return));
        break;
      case 3:
        if ((Aa(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
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
            Mp(t, e);
          } catch (m) {
            oe(a, a.return, m);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Ym(a);
      case 26:
      case 5:
        (Aa(t, a), e === null && l & 4 && Gm(a), l & 512 && Kr(a, a.return));
        break;
      case 12:
        Aa(t, a);
        break;
      case 13:
        (Aa(t, a),
          l & 4 && Im(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((a = lb.bind(null, a)), Cb(t, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || la), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Ee), (s = la));
          var u = Ee;
          ((la = l),
            (Ee = e) && !u ? Ma(t, a, (a.subtreeFlags & 8772) !== 0) : Aa(t, a),
            (la = s),
            (Ee = u));
        }
        break;
      case 30:
        break;
      default:
        Aa(t, a);
    }
  }
  function Km(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Km(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ps(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var de = null,
    We = !1;
  function ra(t, e, a) {
    for (a = a.child; a !== null; ) (Qm(t, e, a), (a = a.sibling));
  }
  function Qm(t, e, a) {
    if (At && typeof At.onCommitFiberUnmount == 'function')
      try {
        At.onCommitFiberUnmount(fe, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ee || kn(a, e),
          ra(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ee || kn(a, e);
        var l = de,
          s = We;
        (_a(a.type) && ((de = a.stateNode), (We = !1)),
          ra(t, e, a),
          no(a.stateNode),
          (de = l),
          (We = s));
        break;
      case 5:
        Ee || kn(a, e);
      case 6:
        if (((l = de), (s = We), (de = null), ra(t, e, a), (de = l), (We = s), de !== null))
          if (We)
            try {
              (de.nodeType === 9
                ? de.body
                : de.nodeName === 'HTML'
                  ? de.ownerDocument.body
                  : de
              ).removeChild(a.stateNode);
            } catch (u) {
              oe(a, e, u);
            }
          else
            try {
              de.removeChild(a.stateNode);
            } catch (u) {
              oe(a, e, u);
            }
        break;
      case 18:
        de !== null &&
          (We
            ? ((t = de),
              $h(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                a.stateNode,
              ),
              co(t))
            : $h(de, a.stateNode));
        break;
      case 4:
        ((l = de),
          (s = We),
          (de = a.stateNode.containerInfo),
          (We = !0),
          ra(t, e, a),
          (de = l),
          (We = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ee || Ra(2, a, e), Ee || Ra(4, a, e), ra(t, e, a));
        break;
      case 1:
        (Ee ||
          (kn(a, e), (l = a.stateNode), typeof l.componentWillUnmount == 'function' && qm(a, e, l)),
          ra(t, e, a));
        break;
      case 21:
        ra(t, e, a);
        break;
      case 22:
        ((Ee = (l = Ee) || a.memoizedState !== null), ra(t, e, a), (Ee = l));
        break;
      default:
        ra(t, e, a);
    }
  }
  function Im(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        co(t);
      } catch (a) {
        oe(e, e.return, a);
      }
  }
  function Zv(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Pm()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Pm()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function pc(t, e) {
    var a = Zv(t);
    e.forEach(function (l) {
      var s = rb.bind(null, t, l);
      a.has(l) || (a.add(l), l.then(s, s));
    });
  }
  function ln(t, e) {
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
              if (_a(y.type)) {
                ((de = y.stateNode), (We = !1));
                break t;
              }
              break;
            case 5:
              ((de = y.stateNode), (We = !1));
              break t;
            case 3:
            case 4:
              ((de = y.stateNode.containerInfo), (We = !0));
              break t;
          }
          y = y.return;
        }
        if (de === null) throw Error(i(160));
        (Qm(u, m, s),
          (de = null),
          (We = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) (Zm(e, t), (e = e.sibling));
  }
  var An = null;
  function Zm(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ln(e, t), rn(t), l & 4 && (Ra(3, t, t.return), Xr(3, t), Ra(5, t, t.return)));
        break;
      case 1:
        (ln(e, t),
          rn(t),
          l & 512 && (Ee || a === null || kn(a, a.return)),
          l & 64 &&
            la &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var s = An;
        if ((ln(e, t), rn(t), l & 512 && (Ee || a === null || kn(a, a.return)), l & 4)) {
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
                          u[yr] ||
                          u[qe] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = s.createElement(l)),
                          s.head.insertBefore(u, s.querySelector('head > title'))),
                        je(u, l, a),
                        (u[qe] = t),
                        De(u),
                        (l = u));
                      break t;
                    case 'link':
                      var m = Yh('link', 'href', s).get(l + (a.href || ''));
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
                      if ((m = Yh('meta', 'content', s).get(l + (a.content || '')))) {
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
                  ((u[qe] = t), De(u), (l = u));
                }
                t.stateNode = l;
              } else Ph(s, t.type, t.stateNode);
            else t.stateNode = Vh(s, l, t.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                l === null ? Ph(s, t.type, t.stateNode) : Vh(s, l, t.memoizedProps))
              : l === null && t.stateNode !== null && uc(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ln(e, t),
          rn(t),
          l & 512 && (Ee || a === null || kn(a, a.return)),
          a !== null && l & 4 && uc(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((ln(e, t), rn(t), l & 512 && (Ee || a === null || kn(a, a.return)), t.flags & 32)) {
          s = t.stateNode;
          try {
            Cl(s, '');
          } catch (G) {
            oe(t, t.return, G);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), uc(t, s, a !== null ? a.memoizedProps : s)),
          l & 1024 && (dc = !0));
        break;
      case 6:
        if ((ln(e, t), rn(t), l & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          ((l = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = l;
          } catch (G) {
            oe(t, t.return, G);
          }
        }
        break;
      case 3:
        if (
          ((qi = null),
          (s = An),
          (An = Li(e.containerInfo)),
          ln(e, t),
          (An = s),
          rn(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            co(e.containerInfo);
          } catch (G) {
            oe(t, t.return, G);
          }
        dc && ((dc = !1), Fm(t));
        break;
      case 4:
        ((l = An), (An = Li(t.stateNode.containerInfo)), ln(e, t), rn(t), (An = l));
        break;
      case 12:
        (ln(e, t), rn(t));
        break;
      case 13:
        (ln(e, t),
          rn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (bc = Kt()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), pc(t, l))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var M = a !== null && a.memoizedState !== null,
          L = la,
          W = Ee;
        if (((la = L || s), (Ee = W || M), ln(e, t), (Ee = W), (la = L), rn(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (a === null || M || la || Ee || ll(t)),
              a = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                M = a = e;
                try {
                  if (((u = M.stateNode), s))
                    ((m = u.style),
                      typeof m.setProperty == 'function'
                        ? m.setProperty('display', 'none', 'important')
                        : (m.display = 'none'));
                  else {
                    y = M.stateNode;
                    var lt = M.memoizedProps.style,
                      q = lt != null && lt.hasOwnProperty('display') ? lt.display : null;
                    y.style.display = q == null || typeof q == 'boolean' ? '' : ('' + q).trim();
                  }
                } catch (G) {
                  oe(M, M.return, G);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                M = e;
                try {
                  M.stateNode.nodeValue = s ? '' : M.memoizedProps;
                } catch (G) {
                  oe(M, M.return, G);
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
          l !== null && ((a = l.retryQueue), a !== null && ((l.retryQueue = null), pc(t, a))));
        break;
      case 19:
        (ln(e, t),
          rn(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), pc(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ln(e, t), rn(t));
    }
  }
  function rn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Vm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode,
              u = cc(t);
            Ai(t, u, s);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (Cl(m, ''), (a.flags &= -33));
            var y = cc(t);
            Ai(t, y, m);
            break;
          case 3:
          case 4:
            var M = a.stateNode.containerInfo,
              L = cc(t);
            fc(t, L, M);
            break;
          default:
            throw Error(i(161));
        }
      } catch (W) {
        oe(t, t.return, W);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Fm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Fm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function Aa(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Xm(t, e.alternate, e), (e = e.sibling));
  }
  function ll(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ra(4, e, e.return), ll(e));
          break;
        case 1:
          kn(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == 'function' && qm(e, e.return, a), ll(e));
          break;
        case 27:
          no(e.stateNode);
        case 26:
        case 5:
          (kn(e, e.return), ll(e));
          break;
        case 22:
          e.memoizedState === null && ll(e);
          break;
        case 30:
          ll(e);
          break;
        default:
          ll(e);
      }
      t = t.sibling;
    }
  }
  function Ma(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        s = t,
        u = e,
        m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Ma(s, u, a), Xr(4, u));
          break;
        case 1:
          if ((Ma(s, u, a), (l = u), (s = l.stateNode), typeof s.componentDidMount == 'function'))
            try {
              s.componentDidMount();
            } catch (L) {
              oe(l, l.return, L);
            }
          if (((l = u), (s = l.updateQueue), s !== null)) {
            var y = l.stateNode;
            try {
              var M = s.shared.hiddenCallbacks;
              if (M !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < M.length; s++) Ap(M[s], y);
            } catch (L) {
              oe(l, l.return, L);
            }
          }
          (a && m & 64 && Hm(u), Kr(u, u.return));
          break;
        case 27:
          Ym(u);
        case 26:
        case 5:
          (Ma(s, u, a), a && l === null && m & 4 && Gm(u), Kr(u, u.return));
          break;
        case 12:
          Ma(s, u, a);
          break;
        case 13:
          (Ma(s, u, a), a && m & 4 && Im(s, u));
          break;
        case 22:
          (u.memoizedState === null && Ma(s, u, a), Kr(u, u.return));
          break;
        case 30:
          break;
        default:
          Ma(s, u, a);
      }
      e = e.sibling;
    }
  }
  function mc(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Nr(a)));
  }
  function hc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Nr(t)));
  }
  function $n(t, e, a, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Wm(t, e, a, l), (e = e.sibling));
  }
  function Wm(t, e, a, l) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($n(t, e, a, l), s & 2048 && Xr(9, e));
        break;
      case 1:
        $n(t, e, a, l);
        break;
      case 3:
        ($n(t, e, a, l),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Nr(t))));
        break;
      case 12:
        if (s & 2048) {
          ($n(t, e, a, l), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              m = u.id,
              y = u.onPostCommit;
            typeof y == 'function' &&
              y(m, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (M) {
            oe(e, e.return, M);
          }
        } else $n(t, e, a, l);
        break;
      case 13:
        $n(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? $n(t, e, a, l)
              : Qr(t, e)
            : u._visibility & 2
              ? $n(t, e, a, l)
              : ((u._visibility |= 2), ql(t, e, a, l, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && mc(m, e));
        break;
      case 24:
        ($n(t, e, a, l), s & 2048 && hc(e.alternate, e));
        break;
      default:
        $n(t, e, a, l);
    }
  }
  function ql(t, e, a, l, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        m = e,
        y = a,
        M = l,
        L = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (ql(u, m, y, M, s), Xr(8, m));
          break;
        case 23:
          break;
        case 22:
          var W = m.stateNode;
          (m.memoizedState !== null
            ? W._visibility & 2
              ? ql(u, m, y, M, s)
              : Qr(u, m)
            : ((W._visibility |= 2), ql(u, m, y, M, s)),
            s && L & 2048 && mc(m.alternate, m));
          break;
        case 24:
          (ql(u, m, y, M, s), s && L & 2048 && hc(m.alternate, m));
          break;
        default:
          ql(u, m, y, M, s);
      }
      e = e.sibling;
    }
  }
  function Qr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          s = l.flags;
        switch (l.tag) {
          case 22:
            (Qr(a, l), s & 2048 && mc(l.alternate, l));
            break;
          case 24:
            (Qr(a, l), s & 2048 && hc(l.alternate, l));
            break;
          default:
            Qr(a, l);
        }
        e = e.sibling;
      }
  }
  var Ir = 8192;
  function Gl(t) {
    if (t.subtreeFlags & Ir) for (t = t.child; t !== null; ) (Jm(t), (t = t.sibling));
  }
  function Jm(t) {
    switch (t.tag) {
      case 26:
        (Gl(t),
          t.flags & Ir && t.memoizedState !== null && kb(An, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Gl(t);
        break;
      case 3:
      case 4:
        var e = An;
        ((An = Li(t.stateNode.containerInfo)), Gl(t), (An = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Ir), (Ir = 16777216), Gl(t), (Ir = e))
            : Gl(t));
        break;
      default:
        Gl(t);
    }
  }
  function th(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Zr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((_e = l), nh(l, t));
        }
      th(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (eh(t), (t = t.sibling));
  }
  function eh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Zr(t), t.flags & 2048 && Ra(9, t, t.return));
        break;
      case 3:
        Zr(t);
        break;
      case 12:
        Zr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Mi(t))
          : Zr(t);
        break;
      default:
        Zr(t);
    }
  }
  function Mi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((_e = l), nh(l, t));
        }
      th(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ra(8, e, e.return), Mi(e));
          break;
        case 22:
          ((a = e.stateNode), a._visibility & 2 && ((a._visibility &= -3), Mi(e)));
          break;
        default:
          Mi(e);
      }
      t = t.sibling;
    }
  }
  function nh(t, e) {
    for (; _e !== null; ) {
      var a = _e;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ra(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Nr(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (_e = l));
      else
        t: for (a = t; _e !== null; ) {
          l = _e;
          var s = l.sibling,
            u = l.return;
          if ((Km(l), l === a)) {
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
  var Fv = {
      getCacheForType: function (t) {
        var e = Ge(ze),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
    },
    Wv = typeof WeakMap == 'function' ? WeakMap : Map,
    Qt = 0,
    se = null,
    wt = null,
    Bt = 0,
    It = 0,
    on = null,
    Oa = !1,
    Vl = !1,
    gc = !1,
    oa = 0,
    Se = 0,
    za = 0,
    rl = 0,
    yc = 0,
    bn = 0,
    Yl = 0,
    Fr = null,
    Je = null,
    vc = !1,
    bc = 0,
    Oi = 1 / 0,
    zi = null,
    wa = null,
    Ue = 0,
    Da = null,
    Pl = null,
    Xl = 0,
    Sc = 0,
    xc = null,
    ah = null,
    Wr = 0,
    Cc = null;
  function sn() {
    if ((Qt & 2) !== 0 && Bt !== 0) return Bt & -Bt;
    if (A.T !== null) {
      var t = _l;
      return t !== 0 ? t : zc();
    }
    return bd();
  }
  function lh() {
    bn === 0 && (bn = (Bt & 536870912) === 0 || Ut ? hr() : 536870912);
    var t = vn.current;
    return (t !== null && (t.flags |= 32), bn);
  }
  function un(t, e, a) {
    (((t === se && (It === 2 || It === 9)) || t.cancelPendingCommit !== null) &&
      (Kl(t, 0), Na(t, Bt, bn, !1)),
      gr(t, a),
      ((Qt & 2) === 0 || t !== se) &&
        (t === se && ((Qt & 2) === 0 && (rl |= a), Se === 4 && Na(t, Bt, bn, !1)), Un(t)));
  }
  function rh(t, e, a) {
    if ((Qt & 6) !== 0) throw Error(i(327));
    var l = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || he(t, e),
      s = l ? eb(t, e) : Rc(t, e, !0),
      u = l;
    do {
      if (s === 0) {
        Vl && !l && Na(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), u && !Jv(a))) {
          ((s = Rc(t, e, !1)), (u = !1));
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
              s = Fr;
              var M = y.current.memoizedState.isDehydrated;
              if ((M && (Kl(y, m).flags |= 256), (m = Rc(y, m, !1)), m !== 2)) {
                if (gc && !M) {
                  ((y.errorRecoveryDisabledLanes |= u), (rl |= u), (s = 4));
                  break t;
                }
                ((u = Je), (Je = s), u !== null && (Je === null ? (Je = u) : Je.push.apply(Je, u)));
              }
              s = m;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Kl(t, 0), Na(t, e, 0, !0));
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
              Na(l, e, bn, !Oa);
              break t;
            case 2:
              Je = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((s = bc + 300 - Kt()), 10 < s)) {
            if ((Na(l, e, bn, !Oa), Yt(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = Bh(
              oh.bind(null, l, a, Je, zi, vc, e, bn, rl, Yl, Oa, u, 2, -0, 0),
              s,
            );
            break t;
          }
          oh(l, a, Je, zi, vc, e, bn, rl, Yl, Oa, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Un(t);
  }
  function oh(t, e, a, l, s, u, m, y, M, L, W, lt, q, G) {
    if (
      ((t.timeoutHandle = -1),
      (lt = e.subtreeFlags),
      (lt & 8192 || (lt & 16785408) === 16785408) &&
        ((ro = { stylesheets: null, count: 0, unsuspend: Bb }), Jm(e), (lt = $b()), lt !== null))
    ) {
      ((t.cancelPendingCommit = lt(ph.bind(null, t, e, u, a, l, s, m, y, M, W, 1, q, G))),
        Na(t, u, m, !L));
      return;
    }
    ph(t, e, u, a, l, s, m, y, M);
  }
  function Jv(t) {
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
            if (!nn(u(), s)) return !1;
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
  function Na(t, e, a, l) {
    ((e &= ~yc),
      (e &= ~rl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var u = 31 - $t(s),
        m = 1 << u;
      ((l[u] = -1), (s &= ~m));
    }
    a !== 0 && yd(t, a, e);
  }
  function wi() {
    return (Qt & 6) === 0 ? (Jr(0), !1) : !0;
  }
  function Tc() {
    if (wt !== null) {
      if (It === 0) var t = wt.return;
      else ((t = wt), (Wn = Ja = null), Hu(t), (Ll = null), (Vr = 0), (t = wt));
      for (; t !== null; ) (Lm(t.alternate, t), (t = t.return));
      wt = null;
    }
  }
  function Kl(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), yb(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      Tc(),
      (se = t),
      (wt = a = In(t.current, null)),
      (Bt = e),
      (It = 0),
      (on = null),
      (Oa = !1),
      (Vl = he(t, e)),
      (gc = !1),
      (Yl = bn = yc = rl = za = Se = 0),
      (Je = Fr = null),
      (vc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var s = 31 - $t(l),
          u = 1 << s;
        ((e |= t[s]), (l &= ~u));
      }
    return ((oa = e), Wo(), a);
  }
  function ih(t, e) {
    ((Ot = null),
      (A.H = yi),
      e === Br || e === ii
        ? ((e = Ep()), (It = 3))
        : e === xp
          ? ((e = Ep()), (It = 4))
          : (It =
              e === Rm
                ? 8
                : e !== null && typeof e == 'object' && typeof e.then == 'function'
                  ? 6
                  : 1),
      (on = e),
      wt === null && ((Se = 1), Ci(t, mn(e, t.current))));
  }
  function sh() {
    var t = A.H;
    return ((A.H = yi), t === null ? yi : t);
  }
  function uh() {
    var t = A.A;
    return ((A.A = Fv), t);
  }
  function Ec() {
    ((Se = 4),
      Oa || ((Bt & 4194048) !== Bt && vn.current !== null) || (Vl = !0),
      ((za & 134217727) === 0 && (rl & 134217727) === 0) || se === null || Na(se, Bt, bn, !1));
  }
  function Rc(t, e, a) {
    var l = Qt;
    Qt |= 2;
    var s = sh(),
      u = uh();
    ((se !== t || Bt !== e) && ((zi = null), Kl(t, e)), (e = !1));
    var m = Se;
    t: do
      try {
        if (It !== 0 && wt !== null) {
          var y = wt,
            M = on;
          switch (It) {
            case 8:
              (Tc(), (m = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              vn.current === null && (e = !0);
              var L = It;
              if (((It = 0), (on = null), Ql(t, y, M, L), a && Vl)) {
                m = 0;
                break t;
              }
              break;
            default:
              ((L = It), (It = 0), (on = null), Ql(t, y, M, L));
          }
        }
        (tb(), (m = Se));
        break;
      } catch (W) {
        ih(t, W);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Wn = Ja = null),
      (Qt = l),
      (A.H = s),
      (A.A = u),
      wt === null && ((se = null), (Bt = 0), Wo()),
      m
    );
  }
  function tb() {
    for (; wt !== null; ) ch(wt);
  }
  function eb(t, e) {
    var a = Qt;
    Qt |= 2;
    var l = sh(),
      s = uh();
    se !== t || Bt !== e ? ((zi = null), (Oi = Kt() + 500), Kl(t, e)) : (Vl = he(t, e));
    t: do
      try {
        if (It !== 0 && wt !== null) {
          e = wt;
          var u = on;
          e: switch (It) {
            case 1:
              ((It = 0), (on = null), Ql(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (Cp(u)) {
                ((It = 0), (on = null), fh(e));
                break;
              }
              ((e = function () {
                ((It !== 2 && It !== 9) || se !== t || (It = 7), Un(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              It = 7;
              break t;
            case 4:
              It = 5;
              break t;
            case 7:
              Cp(u) ? ((It = 0), (on = null), fh(e)) : ((It = 0), (on = null), Ql(t, e, u, 7));
              break;
            case 5:
              var m = null;
              switch (wt.tag) {
                case 26:
                  m = wt.memoizedState;
                case 5:
                case 27:
                  var y = wt;
                  if (!m || Xh(m)) {
                    ((It = 0), (on = null));
                    var M = y.sibling;
                    if (M !== null) wt = M;
                    else {
                      var L = y.return;
                      L !== null ? ((wt = L), Di(L)) : (wt = null);
                    }
                    break e;
                  }
              }
              ((It = 0), (on = null), Ql(t, e, u, 5));
              break;
            case 6:
              ((It = 0), (on = null), Ql(t, e, u, 6));
              break;
            case 8:
              (Tc(), (Se = 6));
              break t;
            default:
              throw Error(i(462));
          }
        }
        nb();
        break;
      } catch (W) {
        ih(t, W);
      }
    while (!0);
    return (
      (Wn = Ja = null),
      (A.H = l),
      (A.A = s),
      (Qt = a),
      wt !== null ? 0 : ((se = null), (Bt = 0), Wo(), Se)
    );
  }
  function nb() {
    for (; wt !== null && !Xt(); ) ch(wt);
  }
  function ch(t) {
    var e = Um(t.alternate, t, oa);
    ((t.memoizedProps = t.pendingProps), e === null ? Di(t) : (wt = e));
  }
  function fh(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Dm(a, e, e.pendingProps, e.type, void 0, Bt);
        break;
      case 11:
        e = Dm(a, e, e.pendingProps, e.type.render, e.ref, Bt);
        break;
      case 5:
        Hu(e);
      default:
        (Lm(a, e), (e = wt = dp(e, oa)), (e = Um(a, e, oa)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Di(t) : (wt = e));
  }
  function Ql(t, e, a, l) {
    ((Wn = Ja = null), Hu(e), (Ll = null), (Vr = 0));
    var s = e.return;
    try {
      if (Pv(t, s, e, a, Bt)) {
        ((Se = 1), Ci(t, mn(a, t.current)), (wt = null));
        return;
      }
    } catch (u) {
      if (s !== null) throw ((wt = s), u);
      ((Se = 1), Ci(t, mn(a, t.current)), (wt = null));
      return;
    }
    e.flags & 32768
      ? (Ut || l === 1
          ? (t = !0)
          : Vl || (Bt & 536870912) !== 0
            ? (t = !1)
            : ((Oa = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = vn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        dh(e, t))
      : Di(e);
  }
  function Di(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        dh(e, Oa);
        return;
      }
      t = e.return;
      var a = Kv(e.alternate, e, oa);
      if (a !== null) {
        wt = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        wt = e;
        return;
      }
      wt = e = t;
    } while (e !== null);
    Se === 0 && (Se = 5);
  }
  function dh(t, e) {
    do {
      var a = Qv(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (wt = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        wt = t;
        return;
      }
      wt = t = a;
    } while (t !== null);
    ((Se = 6), (wt = null));
  }
  function ph(t, e, a, l, s, u, m, y, M) {
    t.cancelPendingCommit = null;
    do Ni();
    while (Ue !== 0);
    if ((Qt & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= hu),
        B0(t, a, u, m, y, M),
        t === se && ((wt = se = null), (Bt = 0)),
        (Pl = e),
        (Da = t),
        (Xl = a),
        (Sc = u),
        (xc = s),
        (ah = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            ob(Wt, function () {
              return (vh(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = A.T), (A.T = null), (s = X.p), (X.p = 2), (m = Qt), (Qt |= 4));
        try {
          Iv(t, e, a);
        } finally {
          ((Qt = m), (X.p = s), (A.T = l));
        }
      }
      ((Ue = 1), mh(), hh(), gh());
    }
  }
  function mh() {
    if (Ue === 1) {
      Ue = 0;
      var t = Da,
        e = Pl,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = A.T), (A.T = null));
        var l = X.p;
        X.p = 2;
        var s = Qt;
        Qt |= 4;
        try {
          Zm(e, t);
          var u = Uc,
            m = np(t.containerInfo),
            y = u.focusedElem,
            M = u.selectionRange;
          if (m !== y && y && y.ownerDocument && ep(y.ownerDocument.documentElement, y)) {
            if (M !== null && cu(y)) {
              var L = M.start,
                W = M.end;
              if ((W === void 0 && (W = L), 'selectionStart' in y))
                ((y.selectionStart = L), (y.selectionEnd = Math.min(W, y.value.length)));
              else {
                var lt = y.ownerDocument || document,
                  q = (lt && lt.defaultView) || window;
                if (q.getSelection) {
                  var G = q.getSelection(),
                    Ct = y.textContent.length,
                    bt = Math.min(M.start, Ct),
                    ae = M.end === void 0 ? bt : Math.min(M.end, Ct);
                  !G.extend && bt > ae && ((m = ae), (ae = bt), (bt = m));
                  var U = tp(y, bt),
                    _ = tp(y, ae);
                  if (
                    U &&
                    _ &&
                    (G.rangeCount !== 1 ||
                      G.anchorNode !== U.node ||
                      G.anchorOffset !== U.offset ||
                      G.focusNode !== _.node ||
                      G.focusOffset !== _.offset)
                  ) {
                    var j = lt.createRange();
                    (j.setStart(U.node, U.offset),
                      G.removeAllRanges(),
                      bt > ae
                        ? (G.addRange(j), G.extend(_.node, _.offset))
                        : (j.setEnd(_.node, _.offset), G.addRange(j)));
                  }
                }
              }
            }
            for (lt = [], G = y; (G = G.parentNode); )
              G.nodeType === 1 && lt.push({ element: G, left: G.scrollLeft, top: G.scrollTop });
            for (typeof y.focus == 'function' && y.focus(), y = 0; y < lt.length; y++) {
              var tt = lt[y];
              ((tt.element.scrollLeft = tt.left), (tt.element.scrollTop = tt.top));
            }
          }
          ((Yi = !!$c), (Uc = $c = null));
        } finally {
          ((Qt = s), (X.p = l), (A.T = a));
        }
      }
      ((t.current = e), (Ue = 2));
    }
  }
  function hh() {
    if (Ue === 2) {
      Ue = 0;
      var t = Da,
        e = Pl,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = A.T), (A.T = null));
        var l = X.p;
        X.p = 2;
        var s = Qt;
        Qt |= 4;
        try {
          Xm(t, e.alternate, e);
        } finally {
          ((Qt = s), (X.p = l), (A.T = a));
        }
      }
      Ue = 3;
    }
  }
  function gh() {
    if (Ue === 4 || Ue === 3) {
      ((Ue = 0), ke());
      var t = Da,
        e = Pl,
        a = Xl,
        l = ah;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ue = 5)
        : ((Ue = 0), (Pl = Da = null), yh(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (wa = null),
        Vs(a),
        (e = e.stateNode),
        At && typeof At.onCommitFiberRoot == 'function')
      )
        try {
          At.onCommitFiberRoot(fe, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = A.T), (s = X.p), (X.p = 2), (A.T = null));
        try {
          for (var u = t.onRecoverableError, m = 0; m < l.length; m++) {
            var y = l[m];
            u(y.value, { componentStack: y.stack });
          }
        } finally {
          ((A.T = e), (X.p = s));
        }
      }
      ((Xl & 3) !== 0 && Ni(),
        Un(t),
        (s = t.pendingLanes),
        (a & 4194090) !== 0 && (s & 42) !== 0 ? (t === Cc ? Wr++ : ((Wr = 0), (Cc = t))) : (Wr = 0),
        Jr(0));
    }
  }
  function yh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Nr(e)));
  }
  function Ni(t) {
    return (mh(), hh(), gh(), vh());
  }
  function vh() {
    if (Ue !== 5) return !1;
    var t = Da,
      e = Sc;
    Sc = 0;
    var a = Vs(Xl),
      l = A.T,
      s = X.p;
    try {
      ((X.p = 32 > a ? 32 : a), (A.T = null), (a = xc), (xc = null));
      var u = Da,
        m = Xl;
      if (((Ue = 0), (Pl = Da = null), (Xl = 0), (Qt & 6) !== 0)) throw Error(i(331));
      var y = Qt;
      if (
        ((Qt |= 4),
        eh(u.current),
        Wm(u, u.current, m, a),
        (Qt = y),
        Jr(0, !1),
        At && typeof At.onPostCommitFiberRoot == 'function')
      )
        try {
          At.onPostCommitFiberRoot(fe, u);
        } catch {}
      return !0;
    } finally {
      ((X.p = s), (A.T = l), yh(t, e));
    }
  }
  function bh(t, e, a) {
    ((e = mn(a, e)),
      (e = tc(t.stateNode, e, 2)),
      (t = xa(t, e, 2)),
      t !== null && (gr(t, 2), Un(t)));
  }
  function oe(t, e, a) {
    if (t.tag === 3) bh(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          bh(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (wa === null || !wa.has(l)))
          ) {
            ((t = mn(a, t)),
              (a = Tm(2)),
              (l = xa(e, a, 2)),
              l !== null && (Em(a, l, e, t), gr(l, 2), Un(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ac(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Wv();
      var s = new Set();
      l.set(e, s);
    } else ((s = l.get(e)), s === void 0 && ((s = new Set()), l.set(e, s)));
    s.has(a) || ((gc = !0), s.add(a), (t = ab.bind(null, t, e, a)), e.then(t, t));
  }
  function ab(t, e, a) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      se === t &&
        (Bt & a) === a &&
        (Se === 4 || (Se === 3 && (Bt & 62914560) === Bt && 300 > Kt() - bc)
          ? (Qt & 2) === 0 && Kl(t, 0)
          : (yc |= a),
        Yl === Bt && (Yl = 0)),
      Un(t));
  }
  function Sh(t, e) {
    (e === 0 && (e = gd()), (t = zl(t, e)), t !== null && (gr(t, e), Un(t)));
  }
  function lb(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), Sh(t, a));
  }
  function rb(t, e) {
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
    (l !== null && l.delete(e), Sh(t, a));
  }
  function ob(t, e) {
    return ye(t, e);
  }
  var _i = null,
    Il = null,
    Mc = !1,
    Bi = !1,
    Oc = !1,
    ol = 0;
  function Un(t) {
    (t !== Il && t.next === null && (Il === null ? (_i = Il = t) : (Il = Il.next = t)),
      (Bi = !0),
      Mc || ((Mc = !0), sb()));
  }
  function Jr(t, e) {
    if (!Oc && Bi) {
      Oc = !0;
      do
        for (var a = !1, l = _i; l !== null; ) {
          if (t !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var m = l.suspendedLanes,
                y = l.pingedLanes;
              ((u = (1 << (31 - $t(42 | t) + 1)) - 1),
                (u &= s & ~(m & ~y)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((a = !0), Eh(l, u));
          } else
            ((u = Bt),
              (u = Yt(
                l,
                l === se ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || he(l, u) || ((a = !0), Eh(l, u)));
          l = l.next;
        }
      while (a);
      Oc = !1;
    }
  }
  function ib() {
    xh();
  }
  function xh() {
    Bi = Mc = !1;
    var t = 0;
    ol !== 0 && (gb() && (t = ol), (ol = 0));
    for (var e = Kt(), a = null, l = _i; l !== null; ) {
      var s = l.next,
        u = Ch(l, e);
      (u === 0
        ? ((l.next = null), a === null ? (_i = s) : (a.next = s), s === null && (Il = a))
        : ((a = l), (t !== 0 || (u & 3) !== 0) && (Bi = !0)),
        (l = s));
    }
    Jr(t);
  }
  function Ch(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var m = 31 - $t(u),
        y = 1 << m,
        M = s[m];
      (M === -1
        ? ((y & a) === 0 || (y & l) !== 0) && (s[m] = ha(y, e))
        : M <= e && (t.expiredLanes |= y),
        (u &= ~y));
    }
    if (
      ((e = se),
      (a = Bt),
      (a = Yt(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      a === 0 || (t === e && (It === 2 || It === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Rt(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((a & 3) === 0 || he(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && Rt(l), Vs(a))) {
        case 2:
        case 8:
          a = me;
          break;
        case 32:
          a = Wt;
          break;
        case 268435456:
          a = en;
          break;
        default:
          a = Wt;
      }
      return (
        (l = Th.bind(null, t)),
        (a = ye(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && Rt(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Th(t, e) {
    if (Ue !== 0 && Ue !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Ni() && t.callbackNode !== a) return null;
    var l = Bt;
    return (
      (l = Yt(t, t === se ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (rh(t, l, e),
          Ch(t, Kt()),
          t.callbackNode != null && t.callbackNode === a ? Th.bind(null, t) : null)
    );
  }
  function Eh(t, e) {
    if (Ni()) return null;
    rh(t, e, !0);
  }
  function sb() {
    vb(function () {
      (Qt & 6) !== 0 ? ye(ue, ib) : xh();
    });
  }
  function zc() {
    return (ol === 0 && (ol = hr()), ol);
  }
  function Rh(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : Po('' + t);
  }
  function Ah(t, e) {
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
  function ub(t, e, a, l, s) {
    if (e === 'submit' && a && a.stateNode === s) {
      var u = Rh((s[Ie] || null).action),
        m = l.submitter;
      m &&
        ((e = (e = m[Ie] || null) ? Rh(e.formAction) : m.getAttribute('formAction')),
        e !== null && ((u = e), (m = null)));
      var y = new Io('action', 'action', null, l, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ol !== 0) {
                  var M = m ? Ah(s, m) : new FormData(s);
                  Iu(a, { pending: !0, data: M, method: s.method, action: u }, null, M);
                }
              } else
                typeof u == 'function' &&
                  (y.preventDefault(),
                  (M = m ? Ah(s, m) : new FormData(s)),
                  Iu(a, { pending: !0, data: M, method: s.method, action: u }, u, M));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var wc = 0; wc < mu.length; wc++) {
    var Dc = mu[wc],
      cb = Dc.toLowerCase(),
      fb = Dc[0].toUpperCase() + Dc.slice(1);
    Rn(cb, 'on' + fb);
  }
  (Rn(rp, 'onAnimationEnd'),
    Rn(op, 'onAnimationIteration'),
    Rn(ip, 'onAnimationStart'),
    Rn('dblclick', 'onDoubleClick'),
    Rn('focusin', 'onFocus'),
    Rn('focusout', 'onBlur'),
    Rn(Ov, 'onTransitionRun'),
    Rn(zv, 'onTransitionStart'),
    Rn(wv, 'onTransitionCancel'),
    Rn(sp, 'onTransitionEnd'),
    bl('onMouseEnter', ['mouseout', 'mouseover']),
    bl('onMouseLeave', ['mouseout', 'mouseover']),
    bl('onPointerEnter', ['pointerout', 'pointerover']),
    bl('onPointerLeave', ['pointerout', 'pointerover']),
    Ya('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ya(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ya('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ya('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ya(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ya(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var to =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    db = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(to),
    );
  function Mh(t, e) {
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
              M = y.instance,
              L = y.currentTarget;
            if (((y = y.listener), M !== u && s.isPropagationStopped())) break t;
            ((u = y), (s.currentTarget = L));
            try {
              u(s);
            } catch (W) {
              xi(W);
            }
            ((s.currentTarget = null), (u = M));
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((y = l[m]),
              (M = y.instance),
              (L = y.currentTarget),
              (y = y.listener),
              M !== u && s.isPropagationStopped())
            )
              break t;
            ((u = y), (s.currentTarget = L));
            try {
              u(s);
            } catch (W) {
              xi(W);
            }
            ((s.currentTarget = null), (u = M));
          }
      }
    }
  }
  function Dt(t, e) {
    var a = e[Ys];
    a === void 0 && (a = e[Ys] = new Set());
    var l = t + '__bubble';
    a.has(l) || (Oh(e, t, 2, !1), a.add(l));
  }
  function Nc(t, e, a) {
    var l = 0;
    (e && (l |= 4), Oh(a, t, l, e));
  }
  var ki = '_reactListening' + Math.random().toString(36).slice(2);
  function _c(t) {
    if (!t[ki]) {
      ((t[ki] = !0),
        xd.forEach(function (a) {
          a !== 'selectionchange' && (db.has(a) || Nc(a, !1, t), Nc(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ki] || ((e[ki] = !0), Nc('selectionchange', !1, e));
    }
  }
  function Oh(t, e, a, l) {
    switch (Wh(e)) {
      case 2:
        var s = Lb;
        break;
      case 8:
        s = Hb;
        break;
      default:
        s = Kc;
    }
    ((a = s.bind(null, e, a, t)),
      (s = void 0),
      !eu || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (s = !0),
      l
        ? s !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: s })
          : t.addEventListener(e, a, !0)
        : s !== void 0
          ? t.addEventListener(e, a, { passive: s })
          : t.addEventListener(e, a, !1));
  }
  function Bc(t, e, a, l, s) {
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
              var M = m.tag;
              if ((M === 3 || M === 4) && m.stateNode.containerInfo === s) return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (((m = gl(y)), m === null)) return;
            if (((M = m.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              l = u = m;
              continue t;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    kd(function () {
      var L = u,
        W = Js(a),
        lt = [];
      t: {
        var q = up.get(t);
        if (q !== void 0) {
          var G = Io,
            Ct = t;
          switch (t) {
            case 'keypress':
              if (Ko(a) === 0) break t;
            case 'keydown':
            case 'keyup':
              G = ov;
              break;
            case 'focusin':
              ((Ct = 'focus'), (G = ru));
              break;
            case 'focusout':
              ((Ct = 'blur'), (G = ru));
              break;
            case 'beforeblur':
            case 'afterblur':
              G = ru;
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
              G = jd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              G = Q0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              G = uv;
              break;
            case rp:
            case op:
            case ip:
              G = F0;
              break;
            case sp:
              G = fv;
              break;
            case 'scroll':
            case 'scrollend':
              G = X0;
              break;
            case 'wheel':
              G = pv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              G = J0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              G = Hd;
              break;
            case 'toggle':
            case 'beforetoggle':
              G = hv;
          }
          var bt = (e & 4) !== 0,
            ae = !bt && (t === 'scroll' || t === 'scrollend'),
            U = bt ? (q !== null ? q + 'Capture' : null) : q;
          bt = [];
          for (var _ = L, j; _ !== null; ) {
            var tt = _;
            if (
              ((j = tt.stateNode),
              (tt = tt.tag),
              (tt !== 5 && tt !== 26 && tt !== 27) ||
                j === null ||
                U === null ||
                ((tt = br(_, U)), tt != null && bt.push(eo(_, tt, j))),
              ae)
            )
              break;
            _ = _.return;
          }
          0 < bt.length && ((q = new G(q, Ct, null, a, W)), lt.push({ event: q, listeners: bt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((q = t === 'mouseover' || t === 'pointerover'),
            (G = t === 'mouseout' || t === 'pointerout'),
            q && a !== Ws && (Ct = a.relatedTarget || a.fromElement) && (gl(Ct) || Ct[hl]))
          )
            break t;
          if (
            (G || q) &&
            ((q =
              W.window === W
                ? W
                : (q = W.ownerDocument)
                  ? q.defaultView || q.parentWindow
                  : window),
            G
              ? ((Ct = a.relatedTarget || a.toElement),
                (G = L),
                (Ct = Ct ? gl(Ct) : null),
                Ct !== null &&
                  ((ae = f(Ct)), (bt = Ct.tag), Ct !== ae || (bt !== 5 && bt !== 27 && bt !== 6)) &&
                  (Ct = null))
              : ((G = null), (Ct = L)),
            G !== Ct)
          ) {
            if (
              ((bt = jd),
              (tt = 'onMouseLeave'),
              (U = 'onMouseEnter'),
              (_ = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((bt = Hd), (tt = 'onPointerLeave'), (U = 'onPointerEnter'), (_ = 'pointer')),
              (ae = G == null ? q : vr(G)),
              (j = Ct == null ? q : vr(Ct)),
              (q = new bt(tt, _ + 'leave', G, a, W)),
              (q.target = ae),
              (q.relatedTarget = j),
              (tt = null),
              gl(W) === L &&
                ((bt = new bt(U, _ + 'enter', Ct, a, W)),
                (bt.target = j),
                (bt.relatedTarget = ae),
                (tt = bt)),
              (ae = tt),
              G && Ct)
            )
              e: {
                for (bt = G, U = Ct, _ = 0, j = bt; j; j = Zl(j)) _++;
                for (j = 0, tt = U; tt; tt = Zl(tt)) j++;
                for (; 0 < _ - j; ) ((bt = Zl(bt)), _--);
                for (; 0 < j - _; ) ((U = Zl(U)), j--);
                for (; _--; ) {
                  if (bt === U || (U !== null && bt === U.alternate)) break e;
                  ((bt = Zl(bt)), (U = Zl(U)));
                }
                bt = null;
              }
            else bt = null;
            (G !== null && zh(lt, q, G, bt, !1),
              Ct !== null && ae !== null && zh(lt, ae, Ct, bt, !0));
          }
        }
        t: {
          if (
            ((q = L ? vr(L) : window),
            (G = q.nodeName && q.nodeName.toLowerCase()),
            G === 'select' || (G === 'input' && q.type === 'file'))
          )
            var ft = Qd;
          else if (Xd(q))
            if (Id) ft = Rv;
            else {
              ft = Tv;
              var zt = Cv;
            }
          else
            ((G = q.nodeName),
              !G || G.toLowerCase() !== 'input' || (q.type !== 'checkbox' && q.type !== 'radio')
                ? L && Fs(L.elementType) && (ft = Qd)
                : (ft = Ev));
          if (ft && (ft = ft(t, L))) {
            Kd(lt, ft, a, W);
            break t;
          }
          (zt && zt(t, q, L),
            t === 'focusout' &&
              L &&
              q.type === 'number' &&
              L.memoizedProps.value != null &&
              Zs(q, 'number', q.value));
        }
        switch (((zt = L ? vr(L) : window), t)) {
          case 'focusin':
            (Xd(zt) || zt.contentEditable === 'true') && ((Al = zt), (fu = L), (Mr = null));
            break;
          case 'focusout':
            Mr = fu = Al = null;
            break;
          case 'mousedown':
            du = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((du = !1), ap(lt, a, W));
            break;
          case 'selectionchange':
            if (Mv) break;
          case 'keydown':
          case 'keyup':
            ap(lt, a, W);
        }
        var ht;
        if (iu)
          t: {
            switch (t) {
              case 'compositionstart':
                var St = 'onCompositionStart';
                break t;
              case 'compositionend':
                St = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                St = 'onCompositionUpdate';
                break t;
            }
            St = void 0;
          }
        else
          Rl
            ? Yd(t, a) && (St = 'onCompositionEnd')
            : t === 'keydown' && a.keyCode === 229 && (St = 'onCompositionStart');
        (St &&
          (qd &&
            a.locale !== 'ko' &&
            (Rl || St !== 'onCompositionStart'
              ? St === 'onCompositionEnd' && Rl && (ht = $d())
              : ((ya = W), (nu = 'value' in ya ? ya.value : ya.textContent), (Rl = !0))),
          (zt = $i(L, St)),
          0 < zt.length &&
            ((St = new Ld(St, t, null, a, W)),
            lt.push({ event: St, listeners: zt }),
            ht ? (St.data = ht) : ((ht = Pd(a)), ht !== null && (St.data = ht)))),
          (ht = yv ? vv(t, a) : bv(t, a)) &&
            ((St = $i(L, 'onBeforeInput')),
            0 < St.length &&
              ((zt = new Ld('onBeforeInput', 'beforeinput', null, a, W)),
              lt.push({ event: zt, listeners: St }),
              (zt.data = ht))),
          ub(lt, t, L, a, W));
      }
      Mh(lt, e);
    });
  }
  function eo(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function $i(t, e) {
    for (var a = e + 'Capture', l = []; t !== null; ) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = br(t, a)),
          s != null && l.unshift(eo(t, s, u)),
          (s = br(t, e)),
          s != null && l.push(eo(t, s, u))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Zl(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function zh(t, e, a, l, s) {
    for (var u = e._reactName, m = []; a !== null && a !== l; ) {
      var y = a,
        M = y.alternate,
        L = y.stateNode;
      if (((y = y.tag), M !== null && M === l)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        L === null ||
        ((M = L),
        s
          ? ((L = br(a, u)), L != null && m.unshift(eo(a, L, M)))
          : s || ((L = br(a, u)), L != null && m.push(eo(a, L, M)))),
        (a = a.return));
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var pb = /\r\n?/g,
    mb = /\u0000|\uFFFD/g;
  function wh(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        pb,
        `
`,
      )
      .replace(mb, '');
  }
  function Dh(t, e) {
    return ((e = wh(e)), wh(t) === e);
  }
  function Ui() {}
  function ne(t, e, a, l, s, u) {
    switch (a) {
      case 'children':
        typeof l == 'string'
          ? e === 'body' || (e === 'textarea' && l === '') || Cl(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && e !== 'body' && Cl(t, '' + l);
        break;
      case 'className':
        Go(t, 'class', l);
        break;
      case 'tabIndex':
        Go(t, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Go(t, a, l);
        break;
      case 'style':
        _d(t, l, u);
        break;
      case 'data':
        if (e !== 'object') {
          Go(t, 'data', l);
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
        ((l = Po('' + l)), t.setAttribute(a, l));
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
              ? (e !== 'input' && ne(t, e, 'name', s.name, s, null),
                ne(t, e, 'formEncType', s.formEncType, s, null),
                ne(t, e, 'formMethod', s.formMethod, s, null),
                ne(t, e, 'formTarget', s.formTarget, s, null))
              : (ne(t, e, 'encType', s.encType, s, null),
                ne(t, e, 'method', s.method, s, null),
                ne(t, e, 'target', s.target, s, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          t.removeAttribute(a);
          break;
        }
        ((l = Po('' + l)), t.setAttribute(a, l));
        break;
      case 'onClick':
        l != null && (t.onclick = Ui);
        break;
      case 'onScroll':
        l != null && Dt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Dt('scrollend', t);
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
        ((a = Po('' + l)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
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
        (Dt('beforetoggle', t), Dt('toggle', t), qo(t, 'popover', l));
        break;
      case 'xlinkActuate':
        Kn(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Kn(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Kn(t, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Kn(t, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Kn(t, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Kn(t, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Kn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Kn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Kn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        qo(t, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < a.length) || (a[0] !== 'o' && a[0] !== 'O') || (a[1] !== 'n' && a[1] !== 'N')) &&
          ((a = Y0.get(a) || a), qo(t, a, l));
    }
  }
  function kc(t, e, a, l, s, u) {
    switch (a) {
      case 'style':
        _d(t, l, u);
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
          ? Cl(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Cl(t, '' + l);
        break;
      case 'onScroll':
        l != null && Dt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Dt('scrollend', t);
        break;
      case 'onClick':
        l != null && (t.onclick = Ui);
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
        if (!Cd.hasOwnProperty(a))
          t: {
            if (
              a[0] === 'o' &&
              a[1] === 'n' &&
              ((s = a.endsWith('Capture')),
              (e = a.slice(2, s ? a.length - 7 : void 0)),
              (u = t[Ie] || null),
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
            a in t ? (t[a] = l) : l === !0 ? t.setAttribute(a, '') : qo(t, a, l);
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
        (Dt('error', t), Dt('load', t));
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
                  ne(t, e, u, m, a, null);
              }
          }
        (s && ne(t, e, 'srcSet', a.srcSet, a, null), l && ne(t, e, 'src', a.src, a, null));
        return;
      case 'input':
        Dt('invalid', t);
        var y = (u = m = s = null),
          M = null,
          L = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var W = a[l];
            if (W != null)
              switch (l) {
                case 'name':
                  s = W;
                  break;
                case 'type':
                  m = W;
                  break;
                case 'checked':
                  M = W;
                  break;
                case 'defaultChecked':
                  L = W;
                  break;
                case 'value':
                  u = W;
                  break;
                case 'defaultValue':
                  y = W;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (W != null) throw Error(i(137, e));
                  break;
                default:
                  ne(t, e, l, W, a, null);
              }
          }
        (zd(t, u, y, M, L, m, s, !1), Vo(t));
        return;
      case 'select':
        (Dt('invalid', t), (l = m = u = null));
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
                ne(t, e, s, y, a, null);
            }
        ((e = u),
          (a = m),
          (t.multiple = !!l),
          e != null ? xl(t, !!l, e, !1) : a != null && xl(t, !!l, a, !0));
        return;
      case 'textarea':
        (Dt('invalid', t), (u = s = l = null));
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
                ne(t, e, m, y, a, null);
            }
        (Dd(t, l, s, u), Vo(t));
        return;
      case 'option':
        for (M in a)
          if (a.hasOwnProperty(M) && ((l = a[M]), l != null))
            switch (M) {
              case 'selected':
                t.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                ne(t, e, M, l, a, null);
            }
        return;
      case 'dialog':
        (Dt('beforetoggle', t), Dt('toggle', t), Dt('cancel', t), Dt('close', t));
        break;
      case 'iframe':
      case 'object':
        Dt('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < to.length; l++) Dt(to[l], t);
        break;
      case 'image':
        (Dt('error', t), Dt('load', t));
        break;
      case 'details':
        Dt('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Dt('error', t), Dt('load', t));
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
                ne(t, e, L, l, a, null);
            }
        return;
      default:
        if (Fs(e)) {
          for (W in a)
            a.hasOwnProperty(W) && ((l = a[W]), l !== void 0 && kc(t, e, W, l, a, void 0));
          return;
        }
    }
    for (y in a) a.hasOwnProperty(y) && ((l = a[y]), l != null && ne(t, e, y, l, a, null));
  }
  function hb(t, e, a, l) {
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
          M = null,
          L = null,
          W = null;
        for (G in a) {
          var lt = a[G];
          if (a.hasOwnProperty(G) && lt != null)
            switch (G) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                M = lt;
              default:
                l.hasOwnProperty(G) || ne(t, e, G, null, l, lt);
            }
        }
        for (var q in l) {
          var G = l[q];
          if (((lt = a[q]), l.hasOwnProperty(q) && (G != null || lt != null)))
            switch (q) {
              case 'type':
                u = G;
                break;
              case 'name':
                s = G;
                break;
              case 'checked':
                L = G;
                break;
              case 'defaultChecked':
                W = G;
                break;
              case 'value':
                m = G;
                break;
              case 'defaultValue':
                y = G;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (G != null) throw Error(i(137, e));
                break;
              default:
                G !== lt && ne(t, e, q, G, l, lt);
            }
        }
        Is(t, m, y, M, L, W, u, s);
        return;
      case 'select':
        G = m = y = q = null;
        for (u in a)
          if (((M = a[u]), a.hasOwnProperty(u) && M != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                G = M;
              default:
                l.hasOwnProperty(u) || ne(t, e, u, null, l, M);
            }
        for (s in l)
          if (((u = l[s]), (M = a[s]), l.hasOwnProperty(s) && (u != null || M != null)))
            switch (s) {
              case 'value':
                q = u;
                break;
              case 'defaultValue':
                y = u;
                break;
              case 'multiple':
                m = u;
              default:
                u !== M && ne(t, e, s, u, l, M);
            }
        ((e = y),
          (a = m),
          (l = G),
          q != null
            ? xl(t, !!a, q, !1)
            : !!l != !!a && (e != null ? xl(t, !!a, e, !0) : xl(t, !!a, a ? [] : '', !1)));
        return;
      case 'textarea':
        G = q = null;
        for (y in a)
          if (((s = a[y]), a.hasOwnProperty(y) && s != null && !l.hasOwnProperty(y)))
            switch (y) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ne(t, e, y, null, l, s);
            }
        for (m in l)
          if (((s = l[m]), (u = a[m]), l.hasOwnProperty(m) && (s != null || u != null)))
            switch (m) {
              case 'value':
                q = s;
                break;
              case 'defaultValue':
                G = s;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== u && ne(t, e, m, s, l, u);
            }
        wd(t, q, G);
        return;
      case 'option':
        for (var Ct in a)
          if (((q = a[Ct]), a.hasOwnProperty(Ct) && q != null && !l.hasOwnProperty(Ct)))
            switch (Ct) {
              case 'selected':
                t.selected = !1;
                break;
              default:
                ne(t, e, Ct, null, l, q);
            }
        for (M in l)
          if (((q = l[M]), (G = a[M]), l.hasOwnProperty(M) && q !== G && (q != null || G != null)))
            switch (M) {
              case 'selected':
                t.selected = q && typeof q != 'function' && typeof q != 'symbol';
                break;
              default:
                ne(t, e, M, q, l, G);
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
        for (var bt in a)
          ((q = a[bt]),
            a.hasOwnProperty(bt) && q != null && !l.hasOwnProperty(bt) && ne(t, e, bt, null, l, q));
        for (L in l)
          if (((q = l[L]), (G = a[L]), l.hasOwnProperty(L) && q !== G && (q != null || G != null)))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (q != null) throw Error(i(137, e));
                break;
              default:
                ne(t, e, L, q, l, G);
            }
        return;
      default:
        if (Fs(e)) {
          for (var ae in a)
            ((q = a[ae]),
              a.hasOwnProperty(ae) &&
                q !== void 0 &&
                !l.hasOwnProperty(ae) &&
                kc(t, e, ae, void 0, l, q));
          for (W in l)
            ((q = l[W]),
              (G = a[W]),
              !l.hasOwnProperty(W) ||
                q === G ||
                (q === void 0 && G === void 0) ||
                kc(t, e, W, q, l, G));
          return;
        }
    }
    for (var U in a)
      ((q = a[U]),
        a.hasOwnProperty(U) && q != null && !l.hasOwnProperty(U) && ne(t, e, U, null, l, q));
    for (lt in l)
      ((q = l[lt]),
        (G = a[lt]),
        !l.hasOwnProperty(lt) || q === G || (q == null && G == null) || ne(t, e, lt, q, l, G));
  }
  var $c = null,
    Uc = null;
  function ji(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Nh(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function _h(t, e) {
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
  function jc(t, e) {
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
  var Lc = null;
  function gb() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === Lc ? !1 : ((Lc = t), !0)) : ((Lc = null), !1);
  }
  var Bh = typeof setTimeout == 'function' ? setTimeout : void 0,
    yb = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    kh = typeof Promise == 'function' ? Promise : void 0,
    vb =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof kh < 'u'
          ? function (t) {
              return kh.resolve(null).then(t).catch(bb);
            }
          : Bh;
  function bb(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function _a(t) {
    return t === 'head';
  }
  function $h(t, e) {
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
            if ((a & 1 && no(m.documentElement), a & 2 && no(m.body), a & 4))
              for (a = m.head, no(a), m = a.firstChild; m; ) {
                var y = m.nextSibling,
                  M = m.nodeName;
                (m[yr] ||
                  M === 'SCRIPT' ||
                  M === 'STYLE' ||
                  (M === 'LINK' && m.rel.toLowerCase() === 'stylesheet') ||
                  a.removeChild(m),
                  (m = y));
              }
          }
          if (s === 0) {
            (t.removeChild(u), co(e));
            return;
          }
          s--;
        } else a === '$' || a === '$?' || a === '$!' ? s++ : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = u;
    } while (a);
    co(e);
  }
  function Hc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Hc(a), Ps(a));
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
  function Sb(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var s = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (l) {
        if (!t[yr])
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
      if (((t = Mn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function xb(t, e, a) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !a) ||
        ((t = Mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function qc(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState === 'complete');
  }
  function Cb(t, e) {
    var a = t.ownerDocument;
    if (t.data !== '$?' || a.readyState === 'complete') e();
    else {
      var l = function () {
        (e(), a.removeEventListener('DOMContentLoaded', l));
      };
      (a.addEventListener('DOMContentLoaded', l), (t._reactRetry = l));
    }
  }
  function Mn(t) {
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
  var Gc = null;
  function Uh(t) {
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
  function jh(t, e, a) {
    switch (((e = ji(a)), t)) {
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
  function no(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ps(t);
  }
  var Sn = new Map(),
    Lh = new Set();
  function Li(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var ia = X.d;
  X.d = { f: Tb, r: Eb, D: Rb, C: Ab, L: Mb, m: Ob, X: wb, S: zb, M: Db };
  function Tb() {
    var t = ia.f(),
      e = wi();
    return t || e;
  }
  function Eb(t) {
    var e = yl(t);
    e !== null && e.tag === 5 && e.type === 'form' ? rm(e) : ia.r(t);
  }
  var Fl = typeof document > 'u' ? null : document;
  function Hh(t, e, a) {
    var l = Fl;
    if (l && typeof e == 'string' && e) {
      var s = pn(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof a == 'string' && (s += '[crossorigin="' + a + '"]'),
        Lh.has(s) ||
          (Lh.add(s),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(s) === null &&
            ((e = l.createElement('link')), je(e, 'link', t), De(e), l.head.appendChild(e))));
    }
  }
  function Rb(t) {
    (ia.D(t), Hh('dns-prefetch', t, null));
  }
  function Ab(t, e) {
    (ia.C(t, e), Hh('preconnect', t, e));
  }
  function Mb(t, e, a) {
    ia.L(t, e, a);
    var l = Fl;
    if (l && t && e) {
      var s = 'link[rel="preload"][as="' + pn(e) + '"]';
      e === 'image' && a && a.imageSrcSet
        ? ((s += '[imagesrcset="' + pn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == 'string' && (s += '[imagesizes="' + pn(a.imageSizes) + '"]'))
        : (s += '[href="' + pn(t) + '"]');
      var u = s;
      switch (e) {
        case 'style':
          u = Wl(t);
          break;
        case 'script':
          u = Jl(t);
      }
      Sn.has(u) ||
        ((t = b(
          { rel: 'preload', href: e === 'image' && a && a.imageSrcSet ? void 0 : t, as: e },
          a,
        )),
        Sn.set(u, t),
        l.querySelector(s) !== null ||
          (e === 'style' && l.querySelector(ao(u))) ||
          (e === 'script' && l.querySelector(lo(u))) ||
          ((e = l.createElement('link')), je(e, 'link', t), De(e), l.head.appendChild(e)));
    }
  }
  function Ob(t, e) {
    ia.m(t, e);
    var a = Fl;
    if (a && t) {
      var l = e && typeof e.as == 'string' ? e.as : 'script',
        s = 'link[rel="modulepreload"][as="' + pn(l) + '"][href="' + pn(t) + '"]',
        u = s;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Jl(t);
      }
      if (
        !Sn.has(u) &&
        ((t = b({ rel: 'modulepreload', href: t }, e)), Sn.set(u, t), a.querySelector(s) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (a.querySelector(lo(u))) return;
        }
        ((l = a.createElement('link')), je(l, 'link', t), De(l), a.head.appendChild(l));
      }
    }
  }
  function zb(t, e, a) {
    ia.S(t, e, a);
    var l = Fl;
    if (l && t) {
      var s = vl(l).hoistableStyles,
        u = Wl(t);
      e = e || 'default';
      var m = s.get(u);
      if (!m) {
        var y = { loading: 0, preload: null };
        if ((m = l.querySelector(ao(u)))) y.loading = 5;
        else {
          ((t = b({ rel: 'stylesheet', href: t, 'data-precedence': e }, a)),
            (a = Sn.get(u)) && Vc(t, a));
          var M = (m = l.createElement('link'));
          (De(M),
            je(M, 'link', t),
            (M._p = new Promise(function (L, W) {
              ((M.onload = L), (M.onerror = W));
            })),
            M.addEventListener('load', function () {
              y.loading |= 1;
            }),
            M.addEventListener('error', function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Hi(m, e, l));
        }
        ((m = { type: 'stylesheet', instance: m, count: 1, state: y }), s.set(u, m));
      }
    }
  }
  function wb(t, e) {
    ia.X(t, e);
    var a = Fl;
    if (a && t) {
      var l = vl(a).hoistableScripts,
        s = Jl(t),
        u = l.get(s);
      u ||
        ((u = a.querySelector(lo(s))),
        u ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Sn.get(s)) && Yc(t, e),
          (u = a.createElement('script')),
          De(u),
          je(u, 'link', t),
          a.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function Db(t, e) {
    ia.M(t, e);
    var a = Fl;
    if (a && t) {
      var l = vl(a).hoistableScripts,
        s = Jl(t),
        u = l.get(s);
      u ||
        ((u = a.querySelector(lo(s))),
        u ||
          ((t = b({ src: t, async: !0, type: 'module' }, e)),
          (e = Sn.get(s)) && Yc(t, e),
          (u = a.createElement('script')),
          De(u),
          je(u, 'link', t),
          a.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function qh(t, e, a, l) {
    var s = (s = nt.current) ? Li(s) : null;
    if (!s) throw Error(i(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof a.precedence == 'string' && typeof a.href == 'string'
          ? ((e = Wl(a.href)),
            (a = vl(s).hoistableStyles),
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
          t = Wl(a.href);
          var u = vl(s).hoistableStyles,
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
              (u = s.querySelector(ao(t))) && !u._p && ((m.instance = u), (m.state.loading = 5)),
              Sn.has(t) ||
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
                Sn.set(t, a),
                u || Nb(s, t, a, m.state))),
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
            ? ((e = Jl(a)),
              (a = vl(s).hoistableScripts),
              (l = a.get(e)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), a.set(e, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Wl(t) {
    return 'href="' + pn(t) + '"';
  }
  function ao(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Gh(t) {
    return b({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Nb(t, e, a, l) {
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
        De(e),
        t.head.appendChild(e));
  }
  function Jl(t) {
    return '[src="' + pn(t) + '"]';
  }
  function lo(t) {
    return 'script[async]' + t;
  }
  function Vh(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var l = t.querySelector('style[data-href~="' + pn(a.href) + '"]');
          if (l) return ((e.instance = l), De(l), l);
          var s = b({}, a, {
            'data-href': a.href,
            'data-precedence': a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement('style')),
            De(l),
            je(l, 'style', s),
            Hi(l, a.precedence, t),
            (e.instance = l)
          );
        case 'stylesheet':
          s = Wl(a.href);
          var u = t.querySelector(ao(s));
          if (u) return ((e.state.loading |= 4), (e.instance = u), De(u), u);
          ((l = Gh(a)),
            (s = Sn.get(s)) && Vc(l, s),
            (u = (t.ownerDocument || t).createElement('link')),
            De(u));
          var m = u;
          return (
            (m._p = new Promise(function (y, M) {
              ((m.onload = y), (m.onerror = M));
            })),
            je(u, 'link', l),
            (e.state.loading |= 4),
            Hi(u, a.precedence, t),
            (e.instance = u)
          );
        case 'script':
          return (
            (u = Jl(a.src)),
            (s = t.querySelector(lo(u)))
              ? ((e.instance = s), De(s), s)
              : ((l = a),
                (s = Sn.get(u)) && ((l = b({}, a)), Yc(l, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement('script')),
                De(s),
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
        ((l = e.instance), (e.state.loading |= 4), Hi(l, a.precedence, t));
    return e.instance;
  }
  function Hi(t, e, a) {
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
  function Vc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Yc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var qi = null;
  function Yh(t, e, a) {
    if (qi === null) {
      var l = new Map(),
        s = (qi = new Map());
      s.set(a, l);
    } else ((s = qi), (l = s.get(a)), l || ((l = new Map()), s.set(a, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), s = 0; s < a.length; s++) {
      var u = a[s];
      if (
        !(u[yr] || u[qe] || (t === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function Ph(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(a, e === 'title' ? t.querySelector('head > title') : null));
  }
  function _b(t, e, a) {
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
  function Xh(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  var ro = null;
  function Bb() {}
  function kb(t, e, a) {
    if (ro === null) throw Error(i(475));
    var l = ro;
    if (
      e.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Wl(a.href),
          u = t.querySelector(ao(s));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (l.count++, (l = Gi.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            De(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Gh(a)),
          (s = Sn.get(s)) && Vc(a, s),
          (u = u.createElement('link')),
          De(u));
        var m = u;
        ((m._p = new Promise(function (y, M) {
          ((m.onload = y), (m.onerror = M));
        })),
          je(u, 'link', a),
          (e.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Gi.bind(l)),
          t.addEventListener('load', e),
          t.addEventListener('error', e)));
    }
  }
  function $b() {
    if (ro === null) throw Error(i(475));
    var t = ro;
    return (
      t.stylesheets && t.count === 0 && Pc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Pc(t, t.stylesheets), t.unsuspend)) {
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
  function Gi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Pc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Vi = null;
  function Pc(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Vi = new Map()), e.forEach(Ub, t), (Vi = null), Gi.call(t)));
  }
  function Ub(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Vi.get(t);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Vi.set(t, a));
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
        (l = Gi.bind(this)),
        s.addEventListener('load', l),
        s.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var oo = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: it,
    _currentValue2: it,
    _threadCount: 0,
  };
  function jb(t, e, a, l, s, u, m, y) {
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
      (this.expirationTimes = qs(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = qs(0)),
      (this.hiddenUpdates = qs(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function Kh(t, e, a, l, s, u, m, y, M, L, W, lt) {
    return (
      (t = new jb(t, e, a, m, y, M, L, lt)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = an(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Au()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: l, isDehydrated: a, cache: e }),
      wu(u),
      t
    );
  }
  function Qh(t) {
    return t ? ((t = wl), t) : wl;
  }
  function Ih(t, e, a, l, s, u) {
    ((s = Qh(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = Sa(e)),
      (l.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (a = xa(t, l, e)),
      a !== null && (un(a, t, e), $r(a, t, e)));
  }
  function Zh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Xc(t, e) {
    (Zh(t, e), (t = t.alternate) && Zh(t, e));
  }
  function Fh(t) {
    if (t.tag === 13) {
      var e = zl(t, 67108864);
      (e !== null && un(e, t, 67108864), Xc(t, 67108864));
    }
  }
  var Yi = !0;
  function Lb(t, e, a, l) {
    var s = A.T;
    A.T = null;
    var u = X.p;
    try {
      ((X.p = 2), Kc(t, e, a, l));
    } finally {
      ((X.p = u), (A.T = s));
    }
  }
  function Hb(t, e, a, l) {
    var s = A.T;
    A.T = null;
    var u = X.p;
    try {
      ((X.p = 8), Kc(t, e, a, l));
    } finally {
      ((X.p = u), (A.T = s));
    }
  }
  function Kc(t, e, a, l) {
    if (Yi) {
      var s = Qc(l);
      if (s === null) (Bc(t, e, l, Pi, a), Jh(t, l));
      else if (Gb(s, t, e, a, l)) l.stopPropagation();
      else if ((Jh(t, l), e & 4 && -1 < qb.indexOf(t))) {
        for (; s !== null; ) {
          var u = yl(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var m = gt(u.pendingLanes);
                  if (m !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var M = 1 << (31 - $t(m));
                      ((y.entanglements[1] |= M), (m &= ~M));
                    }
                    (Un(u), (Qt & 6) === 0 && ((Oi = Kt() + 500), Jr(0)));
                  }
                }
                break;
              case 13:
                ((y = zl(u, 2)), y !== null && un(y, u, 2), wi(), Xc(u, 2));
            }
          if (((u = Qc(l)), u === null && Bc(t, e, l, Pi, a), u === s)) break;
          s = u;
        }
        s !== null && l.stopPropagation();
      } else Bc(t, e, l, null, a);
    }
  }
  function Qc(t) {
    return ((t = Js(t)), Ic(t));
  }
  var Pi = null;
  function Ic(t) {
    if (((Pi = null), (t = gl(t)), t !== null)) {
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
    return ((Pi = t), null);
  }
  function Wh(t) {
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
        switch (ce()) {
          case ue:
            return 2;
          case me:
            return 8;
          case Wt:
          case mt:
            return 32;
          case en:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zc = !1,
    Ba = null,
    ka = null,
    $a = null,
    io = new Map(),
    so = new Map(),
    Ua = [],
    qb =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Jh(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        Ba = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ka = null;
        break;
      case 'mouseover':
      case 'mouseout':
        $a = null;
        break;
      case 'pointerover':
      case 'pointerout':
        io.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        so.delete(e.pointerId);
    }
  }
  function uo(t, e, a, l, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = yl(e)), e !== null && Fh(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Gb(t, e, a, l, s) {
    switch (e) {
      case 'focusin':
        return ((Ba = uo(Ba, t, e, a, l, s)), !0);
      case 'dragenter':
        return ((ka = uo(ka, t, e, a, l, s)), !0);
      case 'mouseover':
        return (($a = uo($a, t, e, a, l, s)), !0);
      case 'pointerover':
        var u = s.pointerId;
        return (io.set(u, uo(io.get(u) || null, t, e, a, l, s)), !0);
      case 'gotpointercapture':
        return ((u = s.pointerId), so.set(u, uo(so.get(u) || null, t, e, a, l, s)), !0);
    }
    return !1;
  }
  function tg(t) {
    var e = gl(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = d(a)), e !== null)) {
            ((t.blockedOn = e),
              k0(t.priority, function () {
                if (a.tag === 13) {
                  var l = sn();
                  l = Gs(l);
                  var s = zl(a, l);
                  (s !== null && un(s, a, l), Xc(a, l));
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
  function Xi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Qc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Ws = l), a.target.dispatchEvent(l), (Ws = null));
      } else return ((e = yl(a)), e !== null && Fh(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function eg(t, e, a) {
    Xi(t) && a.delete(e);
  }
  function Vb() {
    ((Zc = !1),
      Ba !== null && Xi(Ba) && (Ba = null),
      ka !== null && Xi(ka) && (ka = null),
      $a !== null && Xi($a) && ($a = null),
      io.forEach(eg),
      so.forEach(eg));
  }
  function Ki(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Zc || ((Zc = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, Vb)));
  }
  var Qi = null;
  function ng(t) {
    Qi !== t &&
      ((Qi = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Qi === t && (Qi = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            s = t[e + 2];
          if (typeof l != 'function') {
            if (Ic(l || a) === null) continue;
            break;
          }
          var u = yl(a);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Iu(u, { pending: !0, data: s, method: a.method, action: l }, l, s));
        }
      }));
  }
  function co(t) {
    function e(M) {
      return Ki(M, t);
    }
    (Ba !== null && Ki(Ba, t),
      ka !== null && Ki(ka, t),
      $a !== null && Ki($a, t),
      io.forEach(e),
      so.forEach(e));
    for (var a = 0; a < Ua.length; a++) {
      var l = Ua[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ua.length && ((a = Ua[0]), a.blockedOn === null); )
      (tg(a), a.blockedOn === null && Ua.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var s = a[l],
          u = a[l + 1],
          m = s[Ie] || null;
        if (typeof u == 'function') m || ng(a);
        else if (m) {
          var y = null;
          if (u && u.hasAttribute('formAction')) {
            if (((s = u), (m = u[Ie] || null))) y = m.formAction;
            else if (Ic(s) !== null) continue;
          } else y = m.action;
          (typeof y == 'function' ? (a[l + 1] = y) : (a.splice(l, 3), (l -= 3)), ng(a));
        }
      }
  }
  function Fc(t) {
    this._internalRoot = t;
  }
  ((Ii.prototype.render = Fc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var a = e.current,
        l = sn();
      Ih(a, l, t, e, null, null);
    }),
    (Ii.prototype.unmount = Fc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Ih(t.current, 2, null, t, null, null), wi(), (e[hl] = null));
        }
      }));
  function Ii(t) {
    this._internalRoot = t;
  }
  Ii.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = bd();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Ua.length && e !== 0 && e < Ua[a].priority; a++);
      (Ua.splice(a, 0, t), a === 0 && tg(t));
    }
  };
  var ag = r.version;
  if (ag !== '19.1.1') throw Error(i(527, ag, '19.1.1'));
  X.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function'
        ? Error(i(188))
        : ((t = Object.keys(t).join(',')), Error(i(268, t)));
    return ((t = g(e)), (t = t !== null ? h(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var Yb = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zi.isDisabled && Zi.supportsFiber)
      try {
        ((fe = Zi.inject(Yb)), (At = Zi));
      } catch {}
  }
  return (
    (po.createRoot = function (t, e) {
      if (!c(t)) throw Error(i(299));
      var a = !1,
        l = '',
        s = bm,
        u = Sm,
        m = xm,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (y = e.unstable_transitionCallbacks)),
        (e = Kh(t, 1, !1, null, null, a, l, s, u, m, y, null)),
        (t[hl] = e.current),
        _c(t),
        new Fc(e)
      );
    }),
    (po.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(i(299));
      var l = !1,
        s = '',
        u = bm,
        m = Sm,
        y = xm,
        M = null,
        L = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (m = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (M = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (L = a.formState)),
        (e = Kh(t, 1, !0, e, a ?? null, l, s, u, m, y, M, L)),
        (e.context = Qh(null)),
        (a = e.current),
        (l = sn()),
        (l = Gs(l)),
        (s = Sa(l)),
        (s.callback = null),
        xa(a, s, l),
        (a = l),
        (e.current.lanes = a),
        gr(e, a),
        Un(e),
        (t[hl] = e.current),
        _c(t),
        new Ii(e)
      );
    }),
    (po.version = '19.1.1'),
    po
  );
}
var pg;
function t1() {
  if (pg) return tf.exports;
  pg = 1;
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
  return (n(), (tf.exports = Jb()), tf.exports);
}
var e1 = t1();
const n1 = Uf(e1);
function ca(n, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${n}`);
  return (
    r.forEach((i) => o.searchParams.append('args[]', i)),
    `Minified MUI error #${n}; visit ${o} for the full message.`
  );
}
const Yn = '$$material';
function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var i in o) ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
          }
          return n;
        }),
    us.apply(null, arguments)
  );
}
function a1(n) {
  if (n.sheet) return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n) return document.styleSheets[r];
}
function l1(n) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', n.key),
    n.nonce !== void 0 && r.setAttribute('nonce', n.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var r1 = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(l1(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = a1(c);
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
  Ye = '-ms-',
  cs = '-moz-',
  jt = '-webkit-',
  My = 'comm',
  Lf = 'rule',
  Hf = 'decl',
  o1 = '@import',
  Oy = '@keyframes',
  i1 = '@layer',
  s1 = Math.abs,
  bs = String.fromCharCode,
  u1 = Object.assign;
function c1(n, r) {
  return Le(n, 0) ^ 45
    ? (((((((r << 2) ^ Le(n, 0)) << 2) ^ Le(n, 1)) << 2) ^ Le(n, 2)) << 2) ^ Le(n, 3)
    : 0;
}
function zy(n) {
  return n.trim();
}
function f1(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function Lt(n, r, o) {
  return n.replace(r, o);
}
function Sf(n, r) {
  return n.indexOf(r);
}
function Le(n, r) {
  return n.charCodeAt(r) | 0;
}
function Mo(n, r, o) {
  return n.slice(r, o);
}
function qn(n) {
  return n.length;
}
function qf(n) {
  return n.length;
}
function Fi(n, r) {
  return (r.push(n), n);
}
function d1(n, r) {
  return n.map(r).join('');
}
var Ss = 1,
  ur = 1,
  wy = 0,
  tn = 0,
  Oe = 0,
  dr = '';
function xs(n, r, o, i, c, f, d) {
  return {
    value: n,
    root: r,
    parent: o,
    type: i,
    props: c,
    children: f,
    line: Ss,
    column: ur,
    length: d,
    return: '',
  };
}
function mo(n, r) {
  return u1(xs('', null, null, '', null, null, 0), n, { length: -n.length }, r);
}
function p1() {
  return Oe;
}
function m1() {
  return ((Oe = tn > 0 ? Le(dr, --tn) : 0), ur--, Oe === 10 && ((ur = 1), Ss--), Oe);
}
function fn() {
  return ((Oe = tn < wy ? Le(dr, tn++) : 0), ur++, Oe === 10 && ((ur = 1), Ss++), Oe);
}
function Pn() {
  return Le(dr, tn);
}
function ls() {
  return tn;
}
function No(n, r) {
  return Mo(dr, n, r);
}
function Oo(n) {
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
function Dy(n) {
  return ((Ss = ur = 1), (wy = qn((dr = n))), (tn = 0), []);
}
function Ny(n) {
  return ((dr = ''), n);
}
function rs(n) {
  return zy(No(tn - 1, xf(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function h1(n) {
  for (; (Oe = Pn()) && Oe < 33; ) fn();
  return Oo(n) > 2 || Oo(Oe) > 3 ? '' : ' ';
}
function g1(n, r) {
  for (; --r && fn() && !(Oe < 48 || Oe > 102 || (Oe > 57 && Oe < 65) || (Oe > 70 && Oe < 97)); );
  return No(n, ls() + (r < 6 && Pn() == 32 && fn() == 32));
}
function xf(n) {
  for (; fn(); )
    switch (Oe) {
      case n:
        return tn;
      case 34:
      case 39:
        n !== 34 && n !== 39 && xf(Oe);
        break;
      case 40:
        n === 41 && xf(n);
        break;
      case 92:
        fn();
        break;
    }
  return tn;
}
function y1(n, r) {
  for (; fn() && n + Oe !== 57; ) if (n + Oe === 84 && Pn() === 47) break;
  return '/*' + No(r, tn - 1) + '*' + bs(n === 47 ? n : fn());
}
function v1(n) {
  for (; !Oo(Pn()); ) fn();
  return No(n, tn);
}
function b1(n) {
  return Ny(os('', null, null, null, [''], (n = Dy(n)), 0, [0], n));
}
function os(n, r, o, i, c, f, d, p, g) {
  for (
    var h = 0,
      b = 0,
      S = d,
      E = 0,
      O = 0,
      C = 0,
      T = 1,
      D = 1,
      k = 1,
      H = 0,
      N = '',
      w = c,
      z = f,
      B = i,
      P = N;
    D;

  )
    switch (((C = H), (H = fn()))) {
      case 40:
        if (C != 108 && Le(P, S - 1) == 58) {
          Sf((P += Lt(rs(H), '&', '&\f')), '&\f') != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += rs(H);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += h1(C);
        break;
      case 92:
        P += g1(ls() - 1, 7);
        continue;
      case 47:
        switch (Pn()) {
          case 42:
          case 47:
            Fi(S1(y1(fn(), ls()), r, o), g);
            break;
          default:
            P += '/';
        }
        break;
      case 123 * T:
        p[h++] = qn(P) * k;
      case 125 * T:
      case 59:
      case 0:
        switch (H) {
          case 0:
          case 125:
            D = 0;
          case 59 + b:
            (k == -1 && (P = Lt(P, /\f/g, '')),
              O > 0 &&
                qn(P) - S &&
                Fi(O > 32 ? hg(P + ';', i, o, S - 1) : hg(Lt(P, ' ', '') + ';', i, o, S - 2), g));
            break;
          case 59:
            P += ';';
          default:
            if ((Fi((B = mg(P, r, o, h, b, c, p, N, (w = []), (z = []), S)), f), H === 123))
              if (b === 0) os(P, r, B, B, w, f, S, p, z);
              else
                switch (E === 99 && Le(P, 3) === 110 ? 100 : E) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    os(
                      n,
                      B,
                      B,
                      i && Fi(mg(n, B, B, 0, 0, c, p, N, c, (w = []), S), z),
                      c,
                      z,
                      S,
                      p,
                      i ? w : z,
                    );
                    break;
                  default:
                    os(P, B, B, B, [''], z, 0, p, z);
                }
        }
        ((h = b = O = 0), (T = k = 1), (N = P = ''), (S = d));
        break;
      case 58:
        ((S = 1 + qn(P)), (O = C));
      default:
        if (T < 1) {
          if (H == 123) --T;
          else if (H == 125 && T++ == 0 && m1() == 125) continue;
        }
        switch (((P += bs(H)), H * T)) {
          case 38:
            k = b > 0 ? 1 : ((P += '\f'), -1);
            break;
          case 44:
            ((p[h++] = (qn(P) - 1) * k), (k = 1));
            break;
          case 64:
            (Pn() === 45 && (P += rs(fn())), (E = Pn()), (b = S = qn((N = P += v1(ls())))), H++);
            break;
          case 45:
            C === 45 && qn(P) == 2 && (T = 0);
        }
    }
  return f;
}
function mg(n, r, o, i, c, f, d, p, g, h, b) {
  for (var S = c - 1, E = c === 0 ? f : [''], O = qf(E), C = 0, T = 0, D = 0; C < i; ++C)
    for (var k = 0, H = Mo(n, S + 1, (S = s1((T = d[C])))), N = n; k < O; ++k)
      (N = zy(T > 0 ? E[k] + ' ' + H : Lt(H, /&\f/g, E[k]))) && (g[D++] = N);
  return xs(n, r, o, c === 0 ? Lf : p, g, h, b);
}
function S1(n, r, o) {
  return xs(n, r, o, My, bs(p1()), Mo(n, 2, -2), 0);
}
function hg(n, r, o, i) {
  return xs(n, r, o, Hf, Mo(n, 0, i), Mo(n, i + 1, -1), i);
}
function ir(n, r) {
  for (var o = '', i = qf(n), c = 0; c < i; c++) o += r(n[c], c, n, r) || '';
  return o;
}
function x1(n, r, o, i) {
  switch (n.type) {
    case i1:
      if (n.children.length) break;
    case o1:
    case Hf:
      return (n.return = n.return || n.value);
    case My:
      return '';
    case Oy:
      return (n.return = n.value + '{' + ir(n.children, i) + '}');
    case Lf:
      n.value = n.props.join(',');
  }
  return qn((o = ir(n.children, i))) ? (n.return = n.value + '{' + o + '}') : '';
}
function C1(n) {
  var r = qf(n);
  return function (o, i, c, f) {
    for (var d = '', p = 0; p < r; p++) d += n[p](o, i, c, f) || '';
    return d;
  };
}
function T1(n) {
  return function (r) {
    r.root || ((r = r.return) && n(r));
  };
}
function _y(n) {
  var r = Object.create(null);
  return function (o) {
    return (r[o] === void 0 && (r[o] = n(o)), r[o]);
  };
}
var E1 = function (r, o, i) {
    for (var c = 0, f = 0; (c = f), (f = Pn()), c === 38 && f === 12 && (o[i] = 1), !Oo(f); ) fn();
    return No(r, tn);
  },
  R1 = function (r, o) {
    var i = -1,
      c = 44;
    do
      switch (Oo(c)) {
        case 0:
          (c === 38 && Pn() === 12 && (o[i] = 1), (r[i] += E1(tn - 1, o, i)));
          break;
        case 2:
          r[i] += rs(c);
          break;
        case 4:
          if (c === 44) {
            ((r[++i] = Pn() === 58 ? '&\f' : ''), (o[i] = r[i].length));
            break;
          }
        default:
          r[i] += bs(c);
      }
    while ((c = fn()));
    return r;
  },
  A1 = function (r, o) {
    return Ny(R1(Dy(r), o));
  },
  gg = new WeakMap(),
  M1 = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var o = r.value, i = r.parent, c = r.column === i.column && r.line === i.line;
        i.type !== 'rule';

      )
        if (((i = i.parent), !i)) return;
      if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !gg.get(i)) && !c) {
        gg.set(r, !0);
        for (var f = [], d = A1(o, f), p = i.props, g = 0, h = 0; g < d.length; g++)
          for (var b = 0; b < p.length; b++, h++)
            r.props[h] = f[g] ? d[g].replace(/&\f/g, p[b]) : p[b] + ' ' + d[g];
      }
    }
  },
  O1 = function (r) {
    if (r.type === 'decl') {
      var o = r.value;
      o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && ((r.return = ''), (r.value = ''));
    }
  };
function By(n, r) {
  switch (c1(n, r)) {
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
      return jt + n + cs + n + Ye + n + n;
    case 6828:
    case 4268:
      return jt + n + Ye + n + n;
    case 6165:
      return jt + n + Ye + 'flex-' + n + n;
    case 5187:
      return jt + n + Lt(n, /(\w+).+(:[^]+)/, jt + 'box-$1$2' + Ye + 'flex-$1$2') + n;
    case 5443:
      return jt + n + Ye + 'flex-item-' + Lt(n, /flex-|-self/, '') + n;
    case 4675:
      return jt + n + Ye + 'flex-line-pack' + Lt(n, /align-content|flex-|-self/, '') + n;
    case 5548:
      return jt + n + Ye + Lt(n, 'shrink', 'negative') + n;
    case 5292:
      return jt + n + Ye + Lt(n, 'basis', 'preferred-size') + n;
    case 6060:
      return jt + 'box-' + Lt(n, '-grow', '') + jt + n + Ye + Lt(n, 'grow', 'positive') + n;
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
          Lt(n, /(.+:)(flex-)?(.*)/, jt + 'box-pack:$3' + Ye + 'flex-pack:$3'),
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
      if (qn(n) - 1 - r > 6)
        switch (Le(n, r + 1)) {
          case 109:
            if (Le(n, r + 4) !== 45) break;
          case 102:
            return (
              Lt(
                n,
                /(.+:)(.+)-([^]+)/,
                '$1' + jt + '$2-$3$1' + cs + (Le(n, r + 3) == 108 ? '$3' : '$2-$3'),
              ) + n
            );
          case 115:
            return ~Sf(n, 'stretch') ? By(Lt(n, 'stretch', 'fill-available'), r) + n : n;
        }
      break;
    case 4949:
      if (Le(n, r + 1) !== 115) break;
    case 6444:
      switch (Le(n, qn(n) - 3 - (~Sf(n, '!important') && 10))) {
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
                Ye +
                '$2box$3',
            ) + n
          );
      }
      break;
    case 5936:
      switch (Le(n, r + 11)) {
        case 114:
          return jt + n + Ye + Lt(n, /[svh]\w+-[tblr]{2}/, 'tb') + n;
        case 108:
          return jt + n + Ye + Lt(n, /[svh]\w+-[tblr]{2}/, 'tb-rl') + n;
        case 45:
          return jt + n + Ye + Lt(n, /[svh]\w+-[tblr]{2}/, 'lr') + n;
      }
      return jt + n + Ye + n + n;
  }
  return n;
}
var z1 = function (r, o, i, c) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case Hf:
          r.return = By(r.value, r.length);
          break;
        case Oy:
          return ir([mo(r, { value: Lt(r.value, '@', '@' + jt) })], c);
        case Lf:
          if (r.length)
            return d1(r.props, function (f) {
              switch (f1(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ir([mo(r, { props: [Lt(f, /:(read-\w+)/, ':' + cs + '$1')] })], c);
                case '::placeholder':
                  return ir(
                    [
                      mo(r, { props: [Lt(f, /:(plac\w+)/, ':' + jt + 'input-$1')] }),
                      mo(r, { props: [Lt(f, /:(plac\w+)/, ':' + cs + '$1')] }),
                      mo(r, { props: [Lt(f, /:(plac\w+)/, Ye + 'input-$1')] }),
                    ],
                    c,
                  );
              }
              return '';
            });
      }
  },
  w1 = [z1],
  D1 = function (r) {
    var o = r.key;
    if (o === 'css') {
      var i = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(i, function (T) {
        var D = T.getAttribute('data-emotion');
        D.indexOf(' ') !== -1 && (document.head.appendChild(T), T.setAttribute('data-s', ''));
      });
    }
    var c = r.stylisPlugins || w1,
      f = {},
      d,
      p = [];
    ((d = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (T) {
          for (var D = T.getAttribute('data-emotion').split(' '), k = 1; k < D.length; k++)
            f[D[k]] = !0;
          p.push(T);
        },
      ));
    var g,
      h = [M1, O1];
    {
      var b,
        S = [
          x1,
          T1(function (T) {
            b.insert(T);
          }),
        ],
        E = C1(h.concat(c, S)),
        O = function (D) {
          return ir(b1(D), E);
        };
      g = function (D, k, H, N) {
        ((b = H), O(D ? D + '{' + k.styles + '}' : k.styles), N && (C.inserted[k.name] = !0));
      };
    }
    var C = {
      key: o,
      sheet: new r1({
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
    return (C.sheet.hydrate(p), C);
  },
  lf = { exports: {} },
  Pt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yg;
function N1() {
  if (yg) return Pt;
  yg = 1;
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
    E = n ? Symbol.for('react.suspense_list') : 60120,
    O = n ? Symbol.for('react.memo') : 60115,
    C = n ? Symbol.for('react.lazy') : 60116,
    T = n ? Symbol.for('react.block') : 60121,
    D = n ? Symbol.for('react.fundamental') : 60117,
    k = n ? Symbol.for('react.responder') : 60118,
    H = n ? Symbol.for('react.scope') : 60119;
  function N(z) {
    if (typeof z == 'object' && z !== null) {
      var B = z.$$typeof;
      switch (B) {
        case r:
          switch (((z = z.type), z)) {
            case g:
            case h:
            case i:
            case f:
            case c:
            case S:
              return z;
            default:
              switch (((z = z && z.$$typeof), z)) {
                case p:
                case b:
                case C:
                case O:
                case d:
                  return z;
                default:
                  return B;
              }
          }
        case o:
          return B;
      }
    }
  }
  function w(z) {
    return N(z) === h;
  }
  return (
    (Pt.AsyncMode = g),
    (Pt.ConcurrentMode = h),
    (Pt.ContextConsumer = p),
    (Pt.ContextProvider = d),
    (Pt.Element = r),
    (Pt.ForwardRef = b),
    (Pt.Fragment = i),
    (Pt.Lazy = C),
    (Pt.Memo = O),
    (Pt.Portal = o),
    (Pt.Profiler = f),
    (Pt.StrictMode = c),
    (Pt.Suspense = S),
    (Pt.isAsyncMode = function (z) {
      return w(z) || N(z) === g;
    }),
    (Pt.isConcurrentMode = w),
    (Pt.isContextConsumer = function (z) {
      return N(z) === p;
    }),
    (Pt.isContextProvider = function (z) {
      return N(z) === d;
    }),
    (Pt.isElement = function (z) {
      return typeof z == 'object' && z !== null && z.$$typeof === r;
    }),
    (Pt.isForwardRef = function (z) {
      return N(z) === b;
    }),
    (Pt.isFragment = function (z) {
      return N(z) === i;
    }),
    (Pt.isLazy = function (z) {
      return N(z) === C;
    }),
    (Pt.isMemo = function (z) {
      return N(z) === O;
    }),
    (Pt.isPortal = function (z) {
      return N(z) === o;
    }),
    (Pt.isProfiler = function (z) {
      return N(z) === f;
    }),
    (Pt.isStrictMode = function (z) {
      return N(z) === c;
    }),
    (Pt.isSuspense = function (z) {
      return N(z) === S;
    }),
    (Pt.isValidElementType = function (z) {
      return (
        typeof z == 'string' ||
        typeof z == 'function' ||
        z === i ||
        z === h ||
        z === f ||
        z === c ||
        z === S ||
        z === E ||
        (typeof z == 'object' &&
          z !== null &&
          (z.$$typeof === C ||
            z.$$typeof === O ||
            z.$$typeof === d ||
            z.$$typeof === p ||
            z.$$typeof === b ||
            z.$$typeof === D ||
            z.$$typeof === k ||
            z.$$typeof === H ||
            z.$$typeof === T))
      );
    }),
    (Pt.typeOf = N),
    Pt
  );
}
var vg;
function _1() {
  return (vg || ((vg = 1), (lf.exports = N1())), lf.exports);
}
var rf, bg;
function B1() {
  if (bg) return rf;
  bg = 1;
  var n = _1(),
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
  function d(C) {
    return n.isMemo(C) ? c : f[C.$$typeof] || r;
  }
  var p = Object.defineProperty,
    g = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    S = Object.getPrototypeOf,
    E = Object.prototype;
  function O(C, T, D) {
    if (typeof T != 'string') {
      if (E) {
        var k = S(T);
        k && k !== E && O(C, k, D);
      }
      var H = g(T);
      h && (H = H.concat(h(T)));
      for (var N = d(C), w = d(T), z = 0; z < H.length; ++z) {
        var B = H[z];
        if (!o[B] && !(D && D[B]) && !(w && w[B]) && !(N && N[B])) {
          var P = b(T, B);
          try {
            p(C, B, P);
          } catch {}
        }
      }
    }
    return C;
  }
  return ((rf = O), rf);
}
B1();
var k1 = !0;
function ky(n, r, o) {
  var i = '';
  return (
    o.split(' ').forEach(function (c) {
      n[c] !== void 0 ? r.push(n[c] + ';') : c && (i += c + ' ');
    }),
    i
  );
}
var Gf = function (r, o, i) {
    var c = r.key + '-' + o.name;
    (i === !1 || k1 === !1) && r.registered[c] === void 0 && (r.registered[c] = o.styles);
  },
  Vf = function (r, o, i) {
    Gf(r, o, i);
    var c = r.key + '-' + o.name;
    if (r.inserted[o.name] === void 0) {
      var f = o;
      do (r.insert(o === f ? '.' + c : '', f, r.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function $1(n) {
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
var U1 = {
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
  j1 = /[A-Z]|^ms/g,
  L1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  $y = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Sg = function (r) {
    return r != null && typeof r != 'boolean';
  },
  of = _y(function (n) {
    return $y(n) ? n : n.replace(j1, '-$&').toLowerCase();
  }),
  xg = function (r, o) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof o == 'string')
          return o.replace(L1, function (i, c, f) {
            return ((Gn = { name: c, styles: f, next: Gn }), c);
          });
    }
    return U1[r] !== 1 && !$y(r) && typeof o == 'number' && o !== 0 ? o + 'px' : o;
  };
function zo(n, r, o) {
  if (o == null) return '';
  var i = o;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof o) {
    case 'boolean':
      return '';
    case 'object': {
      var c = o;
      if (c.anim === 1) return ((Gn = { name: c.name, styles: c.styles, next: Gn }), c.name);
      var f = o;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            ((Gn = { name: d.name, styles: d.styles, next: Gn }), (d = d.next));
        var p = f.styles + ';';
        return p;
      }
      return H1(n, r, o);
    }
    case 'function': {
      if (n !== void 0) {
        var g = Gn,
          h = o(n);
        return ((Gn = g), zo(n, r, h));
      }
      break;
    }
  }
  var b = o;
  if (r == null) return b;
  var S = r[b];
  return S !== void 0 ? S : b;
}
function H1(n, r, o) {
  var i = '';
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) i += zo(n, r, o[c]) + ';';
  else
    for (var f in o) {
      var d = o[f];
      if (typeof d != 'object') {
        var p = d;
        r != null && r[p] !== void 0
          ? (i += f + '{' + r[p] + '}')
          : Sg(p) && (i += of(f) + ':' + xg(f, p) + ';');
      } else if (Array.isArray(d) && typeof d[0] == 'string' && (r == null || r[d[0]] === void 0))
        for (var g = 0; g < d.length; g++) Sg(d[g]) && (i += of(f) + ':' + xg(f, d[g]) + ';');
      else {
        var h = zo(n, r, d);
        switch (f) {
          case 'animation':
          case 'animationName': {
            i += of(f) + ':' + h + ';';
            break;
          }
          default:
            i += f + '{' + h + '}';
        }
      }
    }
  return i;
}
var Cg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Gn;
function _o(n, r, o) {
  if (n.length === 1 && typeof n[0] == 'object' && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var i = !0,
    c = '';
  Gn = void 0;
  var f = n[0];
  if (f == null || f.raw === void 0) ((i = !1), (c += zo(o, r, f)));
  else {
    var d = f;
    c += d[0];
  }
  for (var p = 1; p < n.length; p++)
    if (((c += zo(o, r, n[p])), i)) {
      var g = f;
      c += g[p];
    }
  Cg.lastIndex = 0;
  for (var h = '', b; (b = Cg.exec(c)) !== null; ) h += '-' + b[1];
  var S = $1(c) + h;
  return { name: S, styles: c, next: Gn };
}
var q1 = function (r) {
    return r();
  },
  Uy = bf.useInsertionEffect ? bf.useInsertionEffect : !1,
  jy = Uy || q1,
  Tg = Uy || x.useLayoutEffect,
  Ly = x.createContext(typeof HTMLElement < 'u' ? D1({ key: 'css' }) : null);
Ly.Provider;
var Yf = function (r) {
    return x.forwardRef(function (o, i) {
      var c = x.useContext(Ly);
      return r(o, c, i);
    });
  },
  Bo = x.createContext({}),
  Pf = {}.hasOwnProperty,
  Cf = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  G1 = function (r, o) {
    var i = {};
    for (var c in o) Pf.call(o, c) && (i[c] = o[c]);
    return ((i[Cf] = r), i);
  },
  V1 = function (r) {
    var o = r.cache,
      i = r.serialized,
      c = r.isStringTag;
    return (
      Gf(o, i, c),
      jy(function () {
        return Vf(o, i, c);
      }),
      null
    );
  },
  Y1 = Yf(function (n, r, o) {
    var i = n.css;
    typeof i == 'string' && r.registered[i] !== void 0 && (i = r.registered[i]);
    var c = n[Cf],
      f = [i],
      d = '';
    typeof n.className == 'string'
      ? (d = ky(r.registered, f, n.className))
      : n.className != null && (d = n.className + ' ');
    var p = _o(f, void 0, x.useContext(Bo));
    d += r.key + '-' + p.name;
    var g = {};
    for (var h in n) Pf.call(n, h) && h !== 'css' && h !== Cf && (g[h] = n[h]);
    return (
      (g.className = d),
      o && (g.ref = o),
      x.createElement(
        x.Fragment,
        null,
        x.createElement(V1, { cache: r, serialized: p, isStringTag: typeof c == 'string' }),
        x.createElement(c, g),
      )
    );
  }),
  P1 = Y1,
  Eg = function (r, o) {
    var i = arguments;
    if (o == null || !Pf.call(o, 'css')) return x.createElement.apply(void 0, i);
    var c = i.length,
      f = new Array(c);
    ((f[0] = P1), (f[1] = G1(r, o)));
    for (var d = 2; d < c; d++) f[d] = i[d];
    return x.createElement.apply(null, f);
  };
(function (n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(Eg || (Eg = {}));
var X1 = Yf(function (n, r) {
  var o = n.styles,
    i = _o([o], void 0, x.useContext(Bo)),
    c = x.useRef();
  return (
    Tg(
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
    Tg(
      function () {
        var f = c.current,
          d = f[0],
          p = f[1];
        if (p) {
          f[1] = !1;
          return;
        }
        if ((i.next !== void 0 && Vf(r, i.next, !0), d.tags.length)) {
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
function Xf() {
  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
  return _o(r);
}
function ko() {
  var n = Xf.apply(void 0, arguments),
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
var K1 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Q1 = _y(function (n) {
    return (
      K1.test(n) || (n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91)
    );
  }),
  I1 = Q1,
  Z1 = function (r) {
    return r !== 'theme';
  },
  Rg = function (r) {
    return typeof r == 'string' && r.charCodeAt(0) > 96 ? I1 : Z1;
  },
  Ag = function (r, o, i) {
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
  F1 = function (r) {
    var o = r.cache,
      i = r.serialized,
      c = r.isStringTag;
    return (
      Gf(o, i, c),
      jy(function () {
        return Vf(o, i, c);
      }),
      null
    );
  },
  W1 = function n(r, o) {
    var i = r.__emotion_real === r,
      c = (i && r.__emotion_base) || r,
      f,
      d;
    o !== void 0 && ((f = o.label), (d = o.target));
    var p = Ag(r, o, i),
      g = p || Rg(c),
      h = !g('as');
    return function () {
      var b = arguments,
        S = i && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if ((f !== void 0 && S.push('label:' + f + ';'), b[0] == null || b[0].raw === void 0))
        S.push.apply(S, b);
      else {
        var E = b[0];
        S.push(E[0]);
        for (var O = b.length, C = 1; C < O; C++) S.push(b[C], E[C]);
      }
      var T = Yf(function (D, k, H) {
        var N = (h && D.as) || c,
          w = '',
          z = [],
          B = D;
        if (D.theme == null) {
          B = {};
          for (var P in D) B[P] = D[P];
          B.theme = x.useContext(Bo);
        }
        typeof D.className == 'string'
          ? (w = ky(k.registered, z, D.className))
          : D.className != null && (w = D.className + ' ');
        var Q = _o(S.concat(z), k.registered, B);
        ((w += k.key + '-' + Q.name), d !== void 0 && (w += ' ' + d));
        var F = h && p === void 0 ? Rg(N) : g,
          J = {};
        for (var et in D) (h && et === 'as') || (F(et) && (J[et] = D[et]));
        return (
          (J.className = w),
          H && (J.ref = H),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(F1, { cache: k, serialized: Q, isStringTag: typeof N == 'string' }),
            x.createElement(N, J),
          )
        );
      });
      return (
        (T.displayName =
          f !== void 0
            ? f
            : 'Styled(' +
              (typeof c == 'string' ? c : c.displayName || c.name || 'Component') +
              ')'),
        (T.defaultProps = r.defaultProps),
        (T.__emotion_real = T),
        (T.__emotion_base = c),
        (T.__emotion_styles = S),
        (T.__emotion_forwardProp = p),
        Object.defineProperty(T, 'toString', {
          value: function () {
            return '.' + d;
          },
        }),
        (T.withComponent = function (D, k) {
          var H = n(D, us({}, o, k, { shouldForwardProp: Ag(T, k, !0) }));
          return H.apply(void 0, S);
        }),
        T
      );
    };
  },
  J1 = [
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
  Tf = W1.bind(null);
J1.forEach(function (n) {
  Tf[n] = Tf(n);
});
function tS(n) {
  return n == null || Object.keys(n).length === 0;
}
function Hy(n) {
  const { styles: r, defaultTheme: o = {} } = n,
    i = typeof r == 'function' ? (c) => r(tS(c) ? o : c) : r;
  return $.jsx(X1, { styles: i });
}
function qy(n, r) {
  return Tf(n, r);
}
function eS(n, r) {
  Array.isArray(n.__emotion_styles) && (n.__emotion_styles = r(n.__emotion_styles));
}
const Mg = [];
function Ha(n) {
  return ((Mg[0] = n), _o(Mg));
}
var sf = { exports: {} },
  le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Og;
function nS() {
  if (Og) return le;
  Og = 1;
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
    E = Symbol.for('react.view_transition'),
    O = Symbol.for('react.client.reference');
  function C(T) {
    if (typeof T == 'object' && T !== null) {
      var D = T.$$typeof;
      switch (D) {
        case n:
          switch (((T = T.type), T)) {
            case o:
            case c:
            case i:
            case g:
            case h:
            case E:
              return T;
            default:
              switch (((T = T && T.$$typeof), T)) {
                case d:
                case p:
                case S:
                case b:
                  return T;
                case f:
                  return T;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  return (
    (le.ContextConsumer = f),
    (le.ContextProvider = d),
    (le.Element = n),
    (le.ForwardRef = p),
    (le.Fragment = o),
    (le.Lazy = S),
    (le.Memo = b),
    (le.Portal = r),
    (le.Profiler = c),
    (le.StrictMode = i),
    (le.Suspense = g),
    (le.SuspenseList = h),
    (le.isContextConsumer = function (T) {
      return C(T) === f;
    }),
    (le.isContextProvider = function (T) {
      return C(T) === d;
    }),
    (le.isElement = function (T) {
      return typeof T == 'object' && T !== null && T.$$typeof === n;
    }),
    (le.isForwardRef = function (T) {
      return C(T) === p;
    }),
    (le.isFragment = function (T) {
      return C(T) === o;
    }),
    (le.isLazy = function (T) {
      return C(T) === S;
    }),
    (le.isMemo = function (T) {
      return C(T) === b;
    }),
    (le.isPortal = function (T) {
      return C(T) === r;
    }),
    (le.isProfiler = function (T) {
      return C(T) === c;
    }),
    (le.isStrictMode = function (T) {
      return C(T) === i;
    }),
    (le.isSuspense = function (T) {
      return C(T) === g;
    }),
    (le.isSuspenseList = function (T) {
      return C(T) === h;
    }),
    (le.isValidElementType = function (T) {
      return (
        typeof T == 'string' ||
        typeof T == 'function' ||
        T === o ||
        T === c ||
        T === i ||
        T === g ||
        T === h ||
        (typeof T == 'object' &&
          T !== null &&
          (T.$$typeof === S ||
            T.$$typeof === b ||
            T.$$typeof === d ||
            T.$$typeof === f ||
            T.$$typeof === p ||
            T.$$typeof === O ||
            T.getModuleId !== void 0))
      );
    }),
    (le.typeOf = C),
    le
  );
}
var zg;
function aS() {
  return (zg || ((zg = 1), (sf.exports = nS())), sf.exports);
}
var Gy = aS();
function Vn(n) {
  if (typeof n != 'object' || n === null) return !1;
  const r = Object.getPrototypeOf(n);
  return (
    (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function Vy(n) {
  if (x.isValidElement(n) || Gy.isValidElementType(n) || !Vn(n)) return n;
  const r = {};
  return (
    Object.keys(n).forEach((o) => {
      r[o] = Vy(n[o]);
    }),
    r
  );
}
function Pe(n, r, o = { clone: !0 }) {
  const i = o.clone ? { ...n } : n;
  return (
    Vn(n) &&
      Vn(r) &&
      Object.keys(r).forEach((c) => {
        x.isValidElement(r[c]) || Gy.isValidElementType(r[c])
          ? (i[c] = r[c])
          : Vn(r[c]) && Object.prototype.hasOwnProperty.call(n, c) && Vn(n[c])
            ? (i[c] = Pe(n[c], r[c], o))
            : o.clone
              ? (i[c] = Vn(r[c]) ? Vy(r[c]) : r[c])
              : (i[c] = r[c]);
      }),
    i
  );
}
const lS = (n) => {
  const r = Object.keys(n).map((o) => ({ key: o, val: n[o] })) || [];
  return (r.sort((o, i) => o.val - i.val), r.reduce((o, i) => ({ ...o, [i.key]: i.val }), {}));
};
function rS(n) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: o = 'px',
      step: i = 5,
      ...c
    } = n,
    f = lS(r),
    d = Object.keys(f);
  function p(E) {
    return `@media (min-width:${typeof r[E] == 'number' ? r[E] : E}${o})`;
  }
  function g(E) {
    return `@media (max-width:${(typeof r[E] == 'number' ? r[E] : E) - i / 100}${o})`;
  }
  function h(E, O) {
    const C = d.indexOf(O);
    return `@media (min-width:${typeof r[E] == 'number' ? r[E] : E}${o}) and (max-width:${(C !== -1 && typeof r[d[C]] == 'number' ? r[d[C]] : O) - i / 100}${o})`;
  }
  function b(E) {
    return d.indexOf(E) + 1 < d.length ? h(E, d[d.indexOf(E) + 1]) : p(E);
  }
  function S(E) {
    const O = d.indexOf(E);
    return O === 0
      ? p(d[1])
      : O === d.length - 1
        ? g(d[O])
        : h(E, d[d.indexOf(E) + 1]).replace('@media', '@media not all and');
  }
  return { keys: d, values: f, up: p, down: g, between: h, only: b, not: S, unit: o, ...c };
}
function wg(n, r) {
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
function oS(n, r) {
  return (
    r === '@' || (r.startsWith('@') && (n.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/)))
  );
}
function iS(n, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, i, c] = o,
    f = Number.isNaN(+i) ? i || 0 : +i;
  return n.containerQueries(c).up(f);
}
function sS(n) {
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
const uS = { borderRadius: 4 };
function To(n, r) {
  return r ? Pe(n, r, { clone: !1 }) : n;
}
const Cs = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Dg = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (n) => `@media (min-width:${Cs[n]}px)` },
  cS = {
    containerQueries: (n) => ({
      up: (r) => {
        let o = typeof r == 'number' ? r : Cs[r] || r;
        return (
          typeof o == 'number' && (o = `${o}px`),
          n ? `@container ${n} (min-width:${o})` : `@container (min-width:${o})`
        );
      },
    }),
  };
function fa(n, r, o) {
  const i = n.theme || {};
  if (Array.isArray(r)) {
    const f = i.breakpoints || Dg;
    return r.reduce((d, p, g) => ((d[f.up(f.keys[g])] = o(r[g])), d), {});
  }
  if (typeof r == 'object') {
    const f = i.breakpoints || Dg;
    return Object.keys(r).reduce((d, p) => {
      if (oS(f.keys, p)) {
        const g = iS(i.containerQueries ? i : cS, p);
        g && (d[g] = o(r[p], p));
      } else if (Object.keys(f.values || Cs).includes(p)) {
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
function fS(n = {}) {
  return (
    n.keys?.reduce((o, i) => {
      const c = n.up(i);
      return ((o[c] = {}), o);
    }, {}) || {}
  );
}
function Ng(n, r) {
  return n.reduce((o, i) => {
    const c = o[i];
    return ((!c || Object.keys(c).length === 0) && delete o[i], o);
  }, r);
}
function st(n) {
  if (typeof n != 'string') throw new Error(ca(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Ts(n, r, o = !0) {
  if (!r || typeof r != 'string') return null;
  if (n && n.vars && o) {
    const i = `vars.${r}`.split('.').reduce((c, f) => (c && c[f] ? c[f] : null), n);
    if (i != null) return i;
  }
  return r.split('.').reduce((i, c) => (i && i[c] != null ? i[c] : null), n);
}
function fs(n, r, o, i = o) {
  let c;
  return (
    typeof n == 'function' ? (c = n(o)) : Array.isArray(n) ? (c = n[o] || i) : (c = Ts(n, o) || i),
    r && (c = r(c, i, n)),
    c
  );
}
function Re(n) {
  const { prop: r, cssProperty: o = n.prop, themeKey: i, transform: c } = n,
    f = (d) => {
      if (d[r] == null) return null;
      const p = d[r],
        g = d.theme,
        h = Ts(g, i) || {};
      return fa(d, p, (S) => {
        let E = fs(h, c, S);
        return (
          S === E &&
            typeof S == 'string' &&
            (E = fs(h, c, `${r}${S === 'default' ? '' : st(S)}`, S)),
          o === !1 ? E : { [o]: E }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [r]), f);
}
function dS(n) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = n(o)), r[o]);
}
const pS = { m: 'margin', p: 'padding' },
  mS = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  _g = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  hS = dS((n) => {
    if (n.length > 2)
      if (_g[n]) n = _g[n];
      else return [n];
    const [r, o] = n.split(''),
      i = pS[r],
      c = mS[o] || '';
    return Array.isArray(c) ? c.map((f) => i + f) : [i + c];
  }),
  Kf = [
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
  Qf = [
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
[...Kf, ...Qf];
function $o(n, r, o, i) {
  const c = Ts(n, r, !0) ?? o;
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
function If(n) {
  return $o(n, 'spacing', 8);
}
function Uo(n, r) {
  return typeof r == 'string' || r == null ? r : n(r);
}
function gS(n, r) {
  return (o) => n.reduce((i, c) => ((i[c] = Uo(r, o)), i), {});
}
function yS(n, r, o, i) {
  if (!r.includes(o)) return null;
  const c = hS(o),
    f = gS(c, i),
    d = n[o];
  return fa(n, d, f);
}
function Yy(n, r) {
  const o = If(n.theme);
  return Object.keys(n)
    .map((i) => yS(n, r, i, o))
    .reduce(To, {});
}
function xe(n) {
  return Yy(n, Kf);
}
xe.propTypes = {};
xe.filterProps = Kf;
function Ce(n) {
  return Yy(n, Qf);
}
Ce.propTypes = {};
Ce.filterProps = Qf;
function Py(n = 8, r = If({ spacing: n })) {
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
function Es(...n) {
  const r = n.reduce(
      (i, c) => (
        c.filterProps.forEach((f) => {
          i[f] = c;
        }),
        i
      ),
      {},
    ),
    o = (i) => Object.keys(i).reduce((c, f) => (r[f] ? To(c, r[f](i)) : c), {});
  return ((o.propTypes = {}), (o.filterProps = n.reduce((i, c) => i.concat(c.filterProps), [])), o);
}
function Cn(n) {
  return typeof n != 'number' ? n : `${n}px solid`;
}
function Tn(n, r) {
  return Re({ prop: n, themeKey: 'borders', transform: r });
}
const vS = Tn('border', Cn),
  bS = Tn('borderTop', Cn),
  SS = Tn('borderRight', Cn),
  xS = Tn('borderBottom', Cn),
  CS = Tn('borderLeft', Cn),
  TS = Tn('borderColor'),
  ES = Tn('borderTopColor'),
  RS = Tn('borderRightColor'),
  AS = Tn('borderBottomColor'),
  MS = Tn('borderLeftColor'),
  OS = Tn('outline', Cn),
  zS = Tn('outlineColor'),
  Rs = (n) => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
      const r = $o(n.theme, 'shape.borderRadius', 4),
        o = (i) => ({ borderRadius: Uo(r, i) });
      return fa(n, n.borderRadius, o);
    }
    return null;
  };
Rs.propTypes = {};
Rs.filterProps = ['borderRadius'];
Es(vS, bS, SS, xS, CS, TS, ES, RS, AS, MS, Rs, OS, zS);
const As = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const r = $o(n.theme, 'spacing', 8),
      o = (i) => ({ gap: Uo(r, i) });
    return fa(n, n.gap, o);
  }
  return null;
};
As.propTypes = {};
As.filterProps = ['gap'];
const Ms = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const r = $o(n.theme, 'spacing', 8),
      o = (i) => ({ columnGap: Uo(r, i) });
    return fa(n, n.columnGap, o);
  }
  return null;
};
Ms.propTypes = {};
Ms.filterProps = ['columnGap'];
const Os = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const r = $o(n.theme, 'spacing', 8),
      o = (i) => ({ rowGap: Uo(r, i) });
    return fa(n, n.rowGap, o);
  }
  return null;
};
Os.propTypes = {};
Os.filterProps = ['rowGap'];
const wS = Re({ prop: 'gridColumn' }),
  DS = Re({ prop: 'gridRow' }),
  NS = Re({ prop: 'gridAutoFlow' }),
  _S = Re({ prop: 'gridAutoColumns' }),
  BS = Re({ prop: 'gridAutoRows' }),
  kS = Re({ prop: 'gridTemplateColumns' }),
  $S = Re({ prop: 'gridTemplateRows' }),
  US = Re({ prop: 'gridTemplateAreas' }),
  jS = Re({ prop: 'gridArea' });
Es(As, Ms, Os, wS, DS, NS, _S, BS, kS, $S, US, jS);
function sr(n, r) {
  return r === 'grey' ? r : n;
}
const LS = Re({ prop: 'color', themeKey: 'palette', transform: sr }),
  HS = Re({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: sr }),
  qS = Re({ prop: 'backgroundColor', themeKey: 'palette', transform: sr });
Es(LS, HS, qS);
function cn(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const GS = Re({ prop: 'width', transform: cn }),
  Zf = (n) => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
      const r = (o) => {
        const i = n.theme?.breakpoints?.values?.[o] || Cs[o];
        return i
          ? n.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${i}${n.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: cn(o) };
      };
      return fa(n, n.maxWidth, r);
    }
    return null;
  };
Zf.filterProps = ['maxWidth'];
const VS = Re({ prop: 'minWidth', transform: cn }),
  YS = Re({ prop: 'height', transform: cn }),
  PS = Re({ prop: 'maxHeight', transform: cn }),
  XS = Re({ prop: 'minHeight', transform: cn });
Re({ prop: 'size', cssProperty: 'width', transform: cn });
Re({ prop: 'size', cssProperty: 'height', transform: cn });
const KS = Re({ prop: 'boxSizing' });
Es(GS, Zf, VS, YS, PS, XS, KS);
const jo = {
  border: { themeKey: 'borders', transform: Cn },
  borderTop: { themeKey: 'borders', transform: Cn },
  borderRight: { themeKey: 'borders', transform: Cn },
  borderBottom: { themeKey: 'borders', transform: Cn },
  borderLeft: { themeKey: 'borders', transform: Cn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: Cn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Rs },
  color: { themeKey: 'palette', transform: sr },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: sr },
  backgroundColor: { themeKey: 'palette', transform: sr },
  p: { style: Ce },
  pt: { style: Ce },
  pr: { style: Ce },
  pb: { style: Ce },
  pl: { style: Ce },
  px: { style: Ce },
  py: { style: Ce },
  padding: { style: Ce },
  paddingTop: { style: Ce },
  paddingRight: { style: Ce },
  paddingBottom: { style: Ce },
  paddingLeft: { style: Ce },
  paddingX: { style: Ce },
  paddingY: { style: Ce },
  paddingInline: { style: Ce },
  paddingInlineStart: { style: Ce },
  paddingInlineEnd: { style: Ce },
  paddingBlock: { style: Ce },
  paddingBlockStart: { style: Ce },
  paddingBlockEnd: { style: Ce },
  m: { style: xe },
  mt: { style: xe },
  mr: { style: xe },
  mb: { style: xe },
  ml: { style: xe },
  mx: { style: xe },
  my: { style: xe },
  margin: { style: xe },
  marginTop: { style: xe },
  marginRight: { style: xe },
  marginBottom: { style: xe },
  marginLeft: { style: xe },
  marginX: { style: xe },
  marginY: { style: xe },
  marginInline: { style: xe },
  marginInlineStart: { style: xe },
  marginInlineEnd: { style: xe },
  marginBlock: { style: xe },
  marginBlockStart: { style: xe },
  marginBlockEnd: { style: xe },
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
  gap: { style: As },
  rowGap: { style: Os },
  columnGap: { style: Ms },
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
  width: { transform: cn },
  maxWidth: { style: Zf },
  minWidth: { transform: cn },
  height: { transform: cn },
  maxHeight: { transform: cn },
  minHeight: { transform: cn },
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
function QS(...n) {
  const r = n.reduce((i, c) => i.concat(Object.keys(c)), []),
    o = new Set(r);
  return n.every((i) => o.size === Object.keys(i).length);
}
function IS(n, r) {
  return typeof n == 'function' ? n(r) : n;
}
function ZS() {
  function n(o, i, c, f) {
    const d = { [o]: i, theme: c },
      p = f[o];
    if (!p) return { [o]: i };
    const { cssProperty: g = o, themeKey: h, transform: b, style: S } = p;
    if (i == null) return null;
    if (h === 'typography' && i === 'inherit') return { [o]: i };
    const E = Ts(c, h) || {};
    return S
      ? S(d)
      : fa(d, i, (C) => {
          let T = fs(E, b, C);
          return (
            C === T &&
              typeof C == 'string' &&
              (T = fs(E, b, `${o}${C === 'default' ? '' : st(C)}`, C)),
            g === !1 ? T : { [g]: T }
          );
        });
  }
  function r(o) {
    const { sx: i, theme: c = {}, nested: f } = o || {};
    if (!i) return null;
    const d = c.unstable_sxConfig ?? jo;
    function p(g) {
      let h = g;
      if (typeof g == 'function') h = g(c);
      else if (typeof g != 'object') return g;
      if (!h) return null;
      const b = fS(c.breakpoints),
        S = Object.keys(b);
      let E = b;
      return (
        Object.keys(h).forEach((O) => {
          const C = IS(h[O], c);
          if (C != null)
            if (typeof C == 'object')
              if (d[O]) E = To(E, n(O, C, c, d));
              else {
                const T = fa({ theme: c }, C, (D) => ({ [O]: D }));
                QS(T, C) ? (E[O] = r({ sx: C, theme: c, nested: !0 })) : (E = To(E, T));
              }
            else E = To(E, n(O, C, c, d));
        }),
        !f && c.modularCssLayers ? { '@layer sx': wg(c, Ng(S, E)) } : wg(c, Ng(S, E))
      );
    }
    return Array.isArray(i) ? i.map(p) : p(i);
  }
  return r;
}
const qa = ZS();
qa.filterProps = ['sx'];
function FS(n, r) {
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
function zs(n = {}, ...r) {
  const { breakpoints: o = {}, palette: i = {}, spacing: c, shape: f = {}, ...d } = n,
    p = rS(o),
    g = Py(c);
  let h = Pe(
    {
      breakpoints: p,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...i },
      spacing: g,
      shape: { ...uS, ...f },
    },
    d,
  );
  return (
    (h = sS(h)),
    (h.applyStyles = FS),
    (h = r.reduce((b, S) => Pe(b, S), h)),
    (h.unstable_sxConfig = { ...jo, ...d?.unstable_sxConfig }),
    (h.unstable_sx = function (S) {
      return qa({ sx: S, theme: this });
    }),
    h
  );
}
function WS(n) {
  return Object.keys(n).length === 0;
}
function Ff(n = null) {
  const r = x.useContext(Bo);
  return !r || WS(r) ? n : r;
}
const JS = zs();
function ws(n = JS) {
  return Ff(n);
}
function uf(n) {
  const r = Ha(n);
  return n !== r && r.styles
    ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r)
    : n;
}
function Xy({ styles: n, themeId: r, defaultTheme: o = {} }) {
  const i = ws(o),
    c = (r && i[r]) || i;
  let f = typeof n == 'function' ? n(c) : n;
  return (
    c.modularCssLayers &&
      (Array.isArray(f) ? (f = f.map((d) => uf(typeof d == 'function' ? d(c) : d))) : (f = uf(f))),
    $.jsx(Hy, { styles: f })
  );
}
const tx = (n) => {
  const r = { systemProps: {}, otherProps: {} },
    o = n?.theme?.unstable_sxConfig ?? jo;
  return (
    Object.keys(n).forEach((i) => {
      o[i] ? (r.systemProps[i] = n[i]) : (r.otherProps[i] = n[i]);
    }),
    r
  );
};
function Ky(n) {
  const { sx: r, ...o } = n,
    { systemProps: i, otherProps: c } = tx(o);
  let f;
  return (
    Array.isArray(r)
      ? (f = [i, ...r])
      : typeof r == 'function'
        ? (f = (...d) => {
            const p = r(...d);
            return Vn(p) ? { ...i, ...p } : i;
          })
        : (f = { ...i, ...r }),
    { ...c, sx: f }
  );
}
const Bg = (n) => n,
  ex = () => {
    let n = Bg;
    return {
      configure(r) {
        n = r;
      },
      generate(r) {
        return n(r);
      },
      reset() {
        n = Bg;
      },
    };
  },
  Qy = ex();
function Iy(n) {
  var r,
    o,
    i = '';
  if (typeof n == 'string' || typeof n == 'number') i += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var c = n.length;
      for (r = 0; r < c; r++) n[r] && (o = Iy(n[r])) && (i && (i += ' '), (i += o));
    } else for (o in n) n[o] && (i && (i += ' '), (i += o));
  return i;
}
function xt() {
  for (var n, r, o = 0, i = '', c = arguments.length; o < c; o++)
    (n = arguments[o]) && (r = Iy(n)) && (i && (i += ' '), (i += r));
  return i;
}
function nx(n = {}) {
  const {
      themeId: r,
      defaultTheme: o,
      defaultClassName: i = 'MuiBox-root',
      generateClassName: c,
    } = n,
    f = qy('div', { shouldForwardProp: (p) => p !== 'theme' && p !== 'sx' && p !== 'as' })(qa);
  return x.forwardRef(function (g, h) {
    const b = ws(o),
      { className: S, component: E = 'div', ...O } = Ky(g);
    return $.jsx(f, {
      as: E,
      ref: h,
      className: xt(S, c ? c(i) : i),
      theme: (r && b[r]) || b,
      ...O,
    });
  });
}
const ax = {
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
function Ht(n, r, o = 'Mui') {
  const i = ax[r];
  return i ? `${o}-${i}` : `${Qy.generate(n)}-${r}`;
}
function qt(n, r, o = 'Mui') {
  const i = {};
  return (
    r.forEach((c) => {
      i[c] = Ht(n, c, o);
    }),
    i
  );
}
function Zy(n) {
  const { variants: r, ...o } = n,
    i = { variants: r, style: Ha(o), isProcessed: !0 };
  return (
    i.style === o ||
      (r &&
        r.forEach((c) => {
          typeof c.style != 'function' && (c.style = Ha(c.style));
        })),
    i
  );
}
const lx = zs();
function cf(n) {
  return n !== 'ownerState' && n !== 'theme' && n !== 'sx' && n !== 'as';
}
function dl(n, r) {
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
function rx(n) {
  return n ? (r, o) => o[n] : null;
}
function ox(n, r, o) {
  n.theme = sx(n.theme) ? o : n.theme[r] || n.theme;
}
function is(n, r, o) {
  const i = typeof r == 'function' ? r(n) : r;
  if (Array.isArray(i)) return i.flatMap((c) => is(n, c, o));
  if (Array.isArray(i?.variants)) {
    let c;
    if (i.isProcessed) c = o ? dl(i.style, o) : i.style;
    else {
      const { variants: f, ...d } = i;
      c = o ? dl(Ha(d), o) : d;
    }
    return Fy(n, i.variants, [c], o);
  }
  return i?.isProcessed ? (o ? dl(Ha(i.style), o) : i.style) : o ? dl(Ha(i), o) : i;
}
function Fy(n, r, o = [], i = void 0) {
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
        o.push(i ? dl(Ha(d.style(c)), i) : d.style(c)))
      : o.push(i ? dl(Ha(d.style), i) : d.style);
  }
  return o;
}
function Wy(n = {}) {
  const {
    themeId: r,
    defaultTheme: o = lx,
    rootShouldForwardProp: i = cf,
    slotShouldForwardProp: c = cf,
  } = n;
  function f(p) {
    ox(p, r, o);
  }
  return (p, g = {}) => {
    eS(p, (B) => B.filter((P) => P !== qa));
    const {
        name: h,
        slot: b,
        skipVariantsResolver: S,
        skipSx: E,
        overridesResolver: O = rx(cx(b)),
        ...C
      } = g,
      T = (h && h.startsWith('Mui')) || b ? 'components' : 'custom',
      D = S !== void 0 ? S : (b && b !== 'Root' && b !== 'root') || !1,
      k = E || !1;
    let H = cf;
    b === 'Root' || b === 'root' ? (H = i) : b ? (H = c) : ux(p) && (H = void 0);
    const N = qy(p, { shouldForwardProp: H, label: ix(), ...C }),
      w = (B) => {
        if (B.__emotion_real === B) return B;
        if (typeof B == 'function')
          return function (Q) {
            return is(Q, B, Q.theme.modularCssLayers ? T : void 0);
          };
        if (Vn(B)) {
          const P = Zy(B);
          return function (F) {
            return P.variants
              ? is(F, P, F.theme.modularCssLayers ? T : void 0)
              : F.theme.modularCssLayers
                ? dl(P.style, T)
                : P.style;
          };
        }
        return B;
      },
      z = (...B) => {
        const P = [],
          Q = B.map(w),
          F = [];
        if (
          (P.push(f),
          h &&
            O &&
            F.push(function (I) {
              const Y = I.theme.components?.[h]?.styleOverrides;
              if (!Y) return null;
              const A = {};
              for (const X in Y) A[X] = is(I, Y[X], I.theme.modularCssLayers ? 'theme' : void 0);
              return O(I, A);
            }),
          h &&
            !D &&
            F.push(function (I) {
              const Y = I.theme?.components?.[h]?.variants;
              return Y ? Fy(I, Y, [], I.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          k || F.push(qa),
          Array.isArray(Q[0]))
        ) {
          const v = Q.shift(),
            I = new Array(P.length).fill(''),
            V = new Array(F.length).fill('');
          let Y;
          ((Y = [...I, ...v, ...V]), (Y.raw = [...I, ...v.raw, ...V]), P.unshift(Y));
        }
        const J = [...P, ...Q, ...F],
          et = N(...J);
        return (p.muiName && (et.muiName = p.muiName), et);
      };
    return (N.withConfig && (z.withConfig = N.withConfig), z);
  };
}
function ix(n, r) {
  return void 0;
}
function sx(n) {
  for (const r in n) return !1;
  return !0;
}
function ux(n) {
  return typeof n == 'string' && n.charCodeAt(0) > 96;
}
function cx(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1);
}
const fx = Wy();
function wo(n, r, o = !1) {
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
              i[f][h] = wo(d[h], p[h], o);
            }
        }
      } else
        f === 'className' && o && r.className
          ? (i.className = xt(n?.className, r?.className))
          : f === 'style' && o && r.style
            ? (i.style = { ...n?.style, ...r?.style })
            : i[f] === void 0 && (i[f] = n[f]);
    }
  return i;
}
function dx(n) {
  const { theme: r, name: o, props: i } = n;
  return !r || !r.components || !r.components[o] || !r.components[o].defaultProps
    ? i
    : wo(r.components[o].defaultProps, i);
}
function px({ props: n, name: r, defaultTheme: o, themeId: i }) {
  let c = ws(o);
  return (i && (c = c[i] || c), dx({ theme: c, name: r, props: n }));
}
const da = typeof window < 'u' ? x.useLayoutEffect : x.useEffect;
function mx(n, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n, o));
}
function Wf(n, r = 0, o = 1) {
  return mx(n, r, o);
}
function hx(n) {
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
function Ga(n) {
  if (n.type) return n;
  if (n.charAt(0) === '#') return Ga(hx(n));
  const r = n.indexOf('('),
    o = n.substring(0, r);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(o)) throw new Error(ca(9, n));
  let i = n.substring(r + 1, n.length - 1),
    c;
  if (o === 'color') {
    if (
      ((i = i.split(' ')),
      (c = i.shift()),
      i.length === 4 && i[3].charAt(0) === '/' && (i[3] = i[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(c))
    )
      throw new Error(ca(10, c));
  } else i = i.split(',');
  return ((i = i.map((f) => parseFloat(f))), { type: o, values: i, colorSpace: c });
}
const gx = (n) => {
    const r = Ga(n);
    return r.values
      .slice(0, 3)
      .map((o, i) => (r.type.includes('hsl') && i !== 0 ? `${o}%` : o))
      .join(' ');
  },
  bo = (n, r) => {
    try {
      return gx(n);
    } catch {
      return n;
    }
  };
function Ds(n) {
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
function Jy(n) {
  n = Ga(n);
  const { values: r } = n,
    o = r[0],
    i = r[1] / 100,
    c = r[2] / 100,
    f = i * Math.min(c, 1 - c),
    d = (h, b = (h + o / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let p = 'rgb';
  const g = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return (n.type === 'hsla' && ((p += 'a'), g.push(r[3])), Ds({ type: p, values: g }));
}
function Ef(n) {
  n = Ga(n);
  let r = n.type === 'hsl' || n.type === 'hsla' ? Ga(Jy(n)).values : n.values;
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
function yx(n, r) {
  const o = Ef(n),
    i = Ef(r);
  return (Math.max(o, i) + 0.05) / (Math.min(o, i) + 0.05);
}
function ds(n, r) {
  return (
    (n = Ga(n)),
    (r = Wf(r)),
    (n.type === 'rgb' || n.type === 'hsl') && (n.type += 'a'),
    n.type === 'color' ? (n.values[3] = `/${r}`) : (n.values[3] = r),
    Ds(n)
  );
}
function il(n, r, o) {
  try {
    return ds(n, r);
  } catch {
    return n;
  }
}
function Ns(n, r) {
  if (((n = Ga(n)), (r = Wf(r)), n.type.includes('hsl'))) n.values[2] *= 1 - r;
  else if (n.type.includes('rgb') || n.type.includes('color'))
    for (let o = 0; o < 3; o += 1) n.values[o] *= 1 - r;
  return Ds(n);
}
function Zt(n, r, o) {
  try {
    return Ns(n, r);
  } catch {
    return n;
  }
}
function _s(n, r) {
  if (((n = Ga(n)), (r = Wf(r)), n.type.includes('hsl'))) n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes('rgb'))
    for (let o = 0; o < 3; o += 1) n.values[o] += (255 - n.values[o]) * r;
  else if (n.type.includes('color'))
    for (let o = 0; o < 3; o += 1) n.values[o] += (1 - n.values[o]) * r;
  return Ds(n);
}
function Ft(n, r, o) {
  try {
    return _s(n, r);
  } catch {
    return n;
  }
}
function vx(n, r = 0.15) {
  return Ef(n) > 0.5 ? Ns(n, r) : _s(n, r);
}
function Wi(n, r, o) {
  try {
    return vx(n, r);
  } catch {
    return n;
  }
}
const t0 = x.createContext(null);
function Jf() {
  return x.useContext(t0);
}
const bx = typeof Symbol == 'function' && Symbol.for,
  Sx = bx ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function xx(n, r) {
  return typeof r == 'function' ? r(n) : { ...n, ...r };
}
function Cx(n) {
  const { children: r, theme: o } = n,
    i = Jf(),
    c = x.useMemo(() => {
      const f = i === null ? { ...o } : xx(i, o);
      return (f != null && (f[Sx] = i !== null), f);
    }, [o, i]);
  return $.jsx(t0.Provider, { value: c, children: r });
}
const e0 = x.createContext();
function Tx({ value: n, ...r }) {
  return $.jsx(e0.Provider, { value: n ?? !0, ...r });
}
const Ex = () => x.useContext(e0) ?? !1,
  n0 = x.createContext(void 0);
function Rx({ value: n, children: r }) {
  return $.jsx(n0.Provider, { value: n, children: r });
}
function Ax(n) {
  const { theme: r, name: o, props: i } = n;
  if (!r || !r.components || !r.components[o]) return i;
  const c = r.components[o];
  return c.defaultProps
    ? wo(c.defaultProps, i, r.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? wo(c, i, r.components.mergeClassNameAndStyle)
      : i;
}
function Mx({ props: n, name: r }) {
  const o = x.useContext(n0);
  return Ax({ props: n, name: r, theme: { components: o } });
}
let kg = 0;
function Ox(n) {
  const [r, o] = x.useState(n),
    i = n || r;
  return (
    x.useEffect(() => {
      r == null && ((kg += 1), o(`mui-${kg}`));
    }, [r]),
    i
  );
}
const zx = { ...bf },
  $g = zx.useId;
function Lo(n) {
  if ($g !== void 0) {
    const r = $g();
    return n ?? r;
  }
  return Ox(n);
}
function wx(n) {
  const r = Ff(),
    o = Lo() || '',
    { modularCssLayers: i } = n;
  let c = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx';
  return (
    !i || r !== null
      ? (c = '')
      : typeof i == 'string'
        ? (c = i.replace(/mui(?!\.)/g, c))
        : (c = `@layer ${c};`),
    da(() => {
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
    c ? $.jsx(Xy, { styles: c }) : null
  );
}
const Ug = {};
function jg(n, r, o, i = !1) {
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
function a0(n) {
  const { children: r, theme: o, themeId: i } = n,
    c = Ff(Ug),
    f = Jf() || Ug,
    d = jg(i, c, o),
    p = jg(i, f, o, !0),
    g = (i ? d[i] : d).direction === 'rtl',
    h = wx(d);
  return $.jsx(Cx, {
    theme: p,
    children: $.jsx(Bo.Provider, {
      value: d,
      children: $.jsx(Tx, {
        value: g,
        children: $.jsxs(Rx, { value: i ? d[i].components : d.components, children: [h, r] }),
      }),
    }),
  });
}
const Lg = { theme: void 0 };
function Dx(n) {
  let r, o;
  return function (c) {
    let f = r;
    return (
      (f === void 0 || c.theme !== o) &&
        ((Lg.theme = c.theme), (f = Zy(n(Lg))), (r = f), (o = c.theme)),
      f
    );
  };
}
const td = 'mode',
  ed = 'color-scheme',
  Nx = 'data-color-scheme';
function _x(n) {
  const {
    defaultMode: r = 'system',
    defaultLightColorScheme: o = 'light',
    defaultDarkColorScheme: i = 'dark',
    modeStorageKey: c = td,
    colorSchemeStorageKey: f = ed,
    attribute: d = Nx,
    colorSchemeNode: p = 'document.documentElement',
    nonce: g,
  } = n || {};
  let h = '',
    b = d;
  if ((d === 'class' && (b = '.%s'), d === 'data' && (b = '[data-%s]'), b.startsWith('.'))) {
    const E = b.substring(1);
    h += `${p}.classList.remove('${E}'.replace('%s', light), '${E}'.replace('%s', dark));
      ${p}.classList.add('${E}'.replace('%s', colorScheme));`;
  }
  const S = b.match(/\[([^[\]]+)\]/);
  if (S) {
    const [E, O] = S[1].split('=');
    (O ||
      (h += `${p}.removeAttribute('${E}'.replace('%s', light));
      ${p}.removeAttribute('${E}'.replace('%s', dark));`),
      (h += `
      ${p}.setAttribute('${E}'.replace('%s', colorScheme), ${O ? `${O}.replace('%s', colorScheme)` : '""'});`));
  } else h += `${p}.setAttribute('${b}', colorScheme);`;
  return $.jsx(
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
function Bx() {}
const kx = ({ key: n, storageWindow: r }) => (
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
      if (!r) return Bx;
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
function ff() {}
function Hg(n) {
  if (typeof window < 'u' && typeof window.matchMedia == 'function' && n === 'system')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function l0(n, r) {
  if (n.mode === 'light' || (n.mode === 'system' && n.systemMode === 'light')) return r('light');
  if (n.mode === 'dark' || (n.mode === 'system' && n.systemMode === 'dark')) return r('dark');
}
function $x(n) {
  return l0(n, (r) => {
    if (r === 'light') return n.lightColorScheme;
    if (r === 'dark') return n.darkColorScheme;
  });
}
function Ux(n) {
  const {
      defaultMode: r = 'light',
      defaultLightColorScheme: o,
      defaultDarkColorScheme: i,
      supportedColorSchemes: c = [],
      modeStorageKey: f = td,
      colorSchemeStorageKey: d = ed,
      storageWindow: p = typeof window > 'u' ? void 0 : window,
      storageManager: g = kx,
      noSsr: h = !1,
    } = n,
    b = c.join(','),
    S = c.length > 1,
    E = x.useMemo(() => g?.({ key: f, storageWindow: p }), [g, f, p]),
    O = x.useMemo(() => g?.({ key: `${d}-light`, storageWindow: p }), [g, d, p]),
    C = x.useMemo(() => g?.({ key: `${d}-dark`, storageWindow: p }), [g, d, p]),
    [T, D] = x.useState(() => {
      const Q = E?.get(r) || r,
        F = O?.get(o) || o,
        J = C?.get(i) || i;
      return { mode: Q, systemMode: Hg(Q), lightColorScheme: F, darkColorScheme: J };
    }),
    [k, H] = x.useState(h || !S);
  x.useEffect(() => {
    H(!0);
  }, []);
  const N = $x(T),
    w = x.useCallback(
      (Q) => {
        D((F) => {
          if (Q === F.mode) return F;
          const J = Q ?? r;
          return (E?.set(J), { ...F, mode: J, systemMode: Hg(J) });
        });
      },
      [E, r],
    ),
    z = x.useCallback(
      (Q) => {
        Q
          ? typeof Q == 'string'
            ? Q && !b.includes(Q)
              ? console.error(`\`${Q}\` does not exist in \`theme.colorSchemes\`.`)
              : D((F) => {
                  const J = { ...F };
                  return (
                    l0(F, (et) => {
                      (et === 'light' && (O?.set(Q), (J.lightColorScheme = Q)),
                        et === 'dark' && (C?.set(Q), (J.darkColorScheme = Q)));
                    }),
                    J
                  );
                })
            : D((F) => {
                const J = { ...F },
                  et = Q.light === null ? o : Q.light,
                  v = Q.dark === null ? i : Q.dark;
                return (
                  et &&
                    (b.includes(et)
                      ? ((J.lightColorScheme = et), O?.set(et))
                      : console.error(`\`${et}\` does not exist in \`theme.colorSchemes\`.`)),
                  v &&
                    (b.includes(v)
                      ? ((J.darkColorScheme = v), C?.set(v))
                      : console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`)),
                  J
                );
              })
          : D((F) => (O?.set(o), C?.set(i), { ...F, lightColorScheme: o, darkColorScheme: i }));
      },
      [b, O, C, o, i],
    ),
    B = x.useCallback(
      (Q) => {
        T.mode === 'system' &&
          D((F) => {
            const J = Q?.matches ? 'dark' : 'light';
            return F.systemMode === J ? F : { ...F, systemMode: J };
          });
      },
      [T.mode],
    ),
    P = x.useRef(B);
  return (
    (P.current = B),
    x.useEffect(() => {
      if (typeof window.matchMedia != 'function' || !S) return;
      const Q = (...J) => P.current(...J),
        F = window.matchMedia('(prefers-color-scheme: dark)');
      return (
        F.addListener(Q),
        Q(F),
        () => {
          F.removeListener(Q);
        }
      );
    }, [S]),
    x.useEffect(() => {
      if (S) {
        const Q =
            E?.subscribe((et) => {
              (!et || ['light', 'dark', 'system'].includes(et)) && w(et || r);
            }) || ff,
          F =
            O?.subscribe((et) => {
              (!et || b.match(et)) && z({ light: et });
            }) || ff,
          J =
            C?.subscribe((et) => {
              (!et || b.match(et)) && z({ dark: et });
            }) || ff;
        return () => {
          (Q(), F(), J());
        };
      }
    }, [z, w, b, r, p, S, E, O, C]),
    {
      ...T,
      mode: k ? T.mode : void 0,
      systemMode: k ? T.systemMode : void 0,
      colorScheme: k ? N : void 0,
      setMode: w,
      setColorScheme: z,
    }
  );
}
const jx =
  '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function Lx(n) {
  const {
      themeId: r,
      theme: o = {},
      modeStorageKey: i = td,
      colorSchemeStorageKey: c = ed,
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
    E = {};
  function O(k) {
    const {
        children: H,
        theme: N,
        modeStorageKey: w = i,
        colorSchemeStorageKey: z = c,
        disableTransitionOnChange: B = f,
        storageManager: P,
        storageWindow: Q = typeof window > 'u' ? void 0 : window,
        documentNode: F = typeof document > 'u' ? void 0 : document,
        colorSchemeNode: J = typeof document > 'u' ? void 0 : document.documentElement,
        disableNestedContext: et = !1,
        disableStyleSheetGeneration: v = !1,
        defaultMode: I = 'system',
        forceThemeRerender: V = !1,
        noSsr: Y,
      } = k,
      A = x.useRef(!1),
      X = Jf(),
      it = x.useContext(h),
      at = !!it && !et,
      R = x.useMemo(() => N || (typeof o == 'function' ? o() : o), [N]),
      K = R[r],
      ot = K || R,
      { colorSchemes: rt = S, components: ut = E, cssVarPrefix: dt } = ot,
      nt = Object.keys(rt)
        .filter((fe) => !!rt[fe])
        .join(','),
      pt = x.useMemo(() => nt.split(','), [nt]),
      yt = typeof d == 'string' ? d : d.light,
      Tt = typeof d == 'string' ? d : d.dark,
      vt = rt[yt] && rt[Tt] ? I : rt[ot.defaultColorScheme]?.palette?.mode || ot.palette?.mode,
      {
        mode: Et,
        setMode: _t,
        systemMode: ye,
        lightColorScheme: Rt,
        darkColorScheme: Xt,
        colorScheme: ke,
        setColorScheme: Kt,
      } = Ux({
        supportedColorSchemes: pt,
        defaultLightColorScheme: yt,
        defaultDarkColorScheme: Tt,
        modeStorageKey: w,
        colorSchemeStorageKey: z,
        defaultMode: vt,
        storageManager: P,
        storageWindow: Q,
        noSsr: Y,
      });
    let ce = Et,
      ue = ke;
    at && ((ce = it.mode), (ue = it.colorScheme));
    let me = ue || ot.defaultColorScheme;
    ot.vars && !V && (me = ot.defaultColorScheme);
    const Wt = x.useMemo(() => {
        const fe = ot.generateThemeVars?.() || ot.vars,
          At = { ...ot, components: ut, colorSchemes: rt, cssVarPrefix: dt, vars: fe };
        if ((typeof At.generateSpacing == 'function' && (At.spacing = At.generateSpacing()), me)) {
          const Jt = rt[me];
          Jt &&
            typeof Jt == 'object' &&
            Object.keys(Jt).forEach(($t) => {
              Jt[$t] && typeof Jt[$t] == 'object'
                ? (At[$t] = { ...At[$t], ...Jt[$t] })
                : (At[$t] = Jt[$t]);
            });
        }
        return p ? p(At) : At;
      }, [ot, me, ut, rt, dt]),
      mt = ot.colorSchemeSelector;
    (da(() => {
      if (ue && J && mt && mt !== 'media') {
        const fe = mt;
        let At = mt;
        if (
          (fe === 'class' && (At = '.%s'),
          fe === 'data' && (At = '[data-%s]'),
          fe?.startsWith('data-') && !fe.includes('%s') && (At = `[${fe}="%s"]`),
          At.startsWith('.'))
        )
          (J.classList.remove(...pt.map((Jt) => At.substring(1).replace('%s', Jt))),
            J.classList.add(At.substring(1).replace('%s', ue)));
        else {
          const Jt = At.replace('%s', ue).match(/\[([^\]]+)\]/);
          if (Jt) {
            const [$t, Ke] = Jt[1].split('=');
            (Ke ||
              pt.forEach((te) => {
                J.removeAttribute($t.replace(ue, te));
              }),
              J.setAttribute($t, Ke ? Ke.replace(/"|'/g, '') : ''));
          } else J.setAttribute(At, ue);
        }
      }
    }, [ue, mt, J, pt]),
      x.useEffect(() => {
        let fe;
        if (B && A.current && F) {
          const At = F.createElement('style');
          (At.appendChild(F.createTextNode(jx)),
            F.head.appendChild(At),
            window.getComputedStyle(F.body),
            (fe = setTimeout(() => {
              F.head.removeChild(At);
            }, 1)));
        }
        return () => {
          clearTimeout(fe);
        };
      }, [ue, B, F]),
      x.useEffect(
        () => (
          (A.current = !0),
          () => {
            A.current = !1;
          }
        ),
        [],
      ));
    const en = x.useMemo(
      () => ({
        allColorSchemes: pt,
        colorScheme: ue,
        darkColorScheme: Xt,
        lightColorScheme: Rt,
        mode: ce,
        setColorScheme: Kt,
        setMode: _t,
        systemMode: ye,
      }),
      [pt, ue, Xt, Rt, ce, Kt, _t, ye, Wt.colorSchemeSelector],
    );
    let ve = !0;
    (v || ot.cssVariables === !1 || (at && X?.cssVarPrefix === dt)) && (ve = !1);
    const En = $.jsxs(x.Fragment, {
      children: [
        $.jsx(a0, { themeId: K ? r : void 0, theme: Wt, children: H }),
        ve && $.jsx(Hy, { styles: Wt.generateStyleSheets?.() || [] }),
      ],
    });
    return at ? En : $.jsx(h.Provider, { value: en, children: En });
  }
  const C = typeof d == 'string' ? d : d.light,
    T = typeof d == 'string' ? d : d.dark;
  return {
    CssVarsProvider: O,
    useColorScheme: b,
    getInitColorSchemeScript: (k) =>
      _x({
        colorSchemeStorageKey: c,
        defaultLightColorScheme: C,
        defaultDarkColorScheme: T,
        modeStorageKey: i,
        ...k,
      }),
  };
}
function Hx(n = '') {
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
const qg = (n, r, o, i = []) => {
    let c = n;
    r.forEach((f, d) => {
      d === r.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = o)
          : c && typeof c == 'object' && (c[f] = o)
        : c && typeof c == 'object' && (c[f] || (c[f] = i.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  qx = (n, r, o) => {
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
  Gx = (n, r) =>
    typeof r == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((i) => n.includes(i)) ||
        n[n.length - 1].toLowerCase().includes('opacity')
        ? r
        : `${r}px`
      : r;
function df(n, r) {
  const { prefix: o, shouldSkipGeneratingVar: i } = r || {},
    c = {},
    f = {},
    d = {};
  return (
    qx(
      n,
      (p, g, h) => {
        if ((typeof g == 'string' || typeof g == 'number') && (!i || !i(p, g))) {
          const b = `--${o ? `${o}-` : ''}${p.join('-')}`,
            S = Gx(p, g);
          (Object.assign(c, { [b]: S }), qg(f, p, `var(${b})`, h), qg(d, p, `var(${b}, ${S})`, h));
        }
      },
      (p) => p[0] === 'vars',
    ),
    { css: c, vars: f, varsWithDefaults: d }
  );
}
function Vx(n, r = {}) {
  const {
      getSelector: o = k,
      disableCssColorScheme: i,
      colorSchemeSelector: c,
      enableContrastVars: f,
    } = r,
    { colorSchemes: d = {}, components: p, defaultColorScheme: g = 'light', ...h } = n,
    { vars: b, css: S, varsWithDefaults: E } = df(h, r);
  let O = E;
  const C = {},
    { [g]: T, ...D } = d;
  if (
    (Object.entries(D || {}).forEach(([w, z]) => {
      const { vars: B, css: P, varsWithDefaults: Q } = df(z, r);
      ((O = Pe(O, Q)), (C[w] = { css: P, vars: B }));
    }),
    T)
  ) {
    const { css: w, vars: z, varsWithDefaults: B } = df(T, r);
    ((O = Pe(O, B)), (C[g] = { css: w, vars: z }));
  }
  function k(w, z) {
    let B = c;
    if (
      (c === 'class' && (B = '.%s'),
      c === 'data' && (B = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (B = `[${c}="%s"]`),
      w)
    ) {
      if (B === 'media')
        return n.defaultColorScheme === w
          ? ':root'
          : { [`@media (prefers-color-scheme: ${d[w]?.palette?.mode || w})`]: { ':root': z } };
      if (B)
        return n.defaultColorScheme === w
          ? `:root, ${B.replace('%s', String(w))}`
          : B.replace('%s', String(w));
    }
    return ':root';
  }
  return {
    vars: O,
    generateThemeVars: () => {
      let w = { ...b };
      return (
        Object.entries(C).forEach(([, { vars: z }]) => {
          w = Pe(w, z);
        }),
        w
      );
    },
    generateStyleSheets: () => {
      const w = [],
        z = n.defaultColorScheme || 'light';
      function B(F, J) {
        Object.keys(J).length && w.push(typeof F == 'string' ? { [F]: { ...J } } : F);
      }
      B(o(void 0, { ...S }), S);
      const { [z]: P, ...Q } = C;
      if (P) {
        const { css: F } = P,
          J = d[z]?.palette?.mode,
          et = !i && J ? { colorScheme: J, ...F } : { ...F };
        B(o(z, { ...et }), et);
      }
      return (
        Object.entries(Q).forEach(([F, { css: J }]) => {
          const et = d[F]?.palette?.mode,
            v = !i && et ? { colorScheme: et, ...J } : { ...J };
          B(o(F, { ...v }), v);
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
function Yx(n) {
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
function Gt(n, r, o = void 0) {
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
const Px = zs(),
  Xx = fx('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        r[`maxWidth${st(String(o.maxWidth))}`],
        o.fixed && r.fixed,
        o.disableGutters && r.disableGutters,
      ];
    },
  }),
  Kx = (n) => px({ props: n, name: 'MuiContainer', defaultTheme: Px }),
  Qx = (n, r) => {
    const o = (g) => Ht(r, g),
      { classes: i, fixed: c, disableGutters: f, maxWidth: d } = n,
      p = { root: ['root', d && `maxWidth${st(String(d))}`, c && 'fixed', f && 'disableGutters'] };
    return Gt(p, o, i);
  };
function Ix(n = {}) {
  const {
      createStyledComponent: r = Xx,
      useThemeProps: o = Kx,
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
        disableGutters: E = !1,
        fixed: O = !1,
        maxWidth: C = 'lg',
        classes: T,
        ...D
      } = h,
      k = { ...h, component: S, disableGutters: E, fixed: O, maxWidth: C },
      H = Qx(k, i);
    return $.jsx(c, { as: S, ownerState: k, className: xt(H.root, b), ref: g, ...D });
  });
}
function pf(n, r) {
  return (
    x.isValidElement(n) && r.indexOf(n.type.muiName ?? n.type?._payload?.value?.muiName) !== -1
  );
}
const Do = { black: '#000', white: '#fff' },
  Zx = {
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
  tr = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  er = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  ho = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  nr = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  ar = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  lr = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  };
function r0() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Do.white, default: Do.white },
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
const o0 = r0();
function i0() {
  return {
    text: {
      primary: Do.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Do.white,
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
const Rf = i0();
function Gg(n, r, o, i) {
  const c = i.light || i,
    f = i.dark || i * 1.5;
  n[r] ||
    (n.hasOwnProperty(o)
      ? (n[r] = n[o])
      : r === 'light'
        ? (n.light = _s(n.main, c))
        : r === 'dark' && (n.dark = Ns(n.main, f)));
}
function Vg(n, r, o, i, c) {
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
function Fx(n = 'light') {
  return n === 'dark'
    ? { main: nr[200], light: nr[50], dark: nr[400] }
    : { main: nr[700], light: nr[400], dark: nr[800] };
}
function Wx(n = 'light') {
  return n === 'dark'
    ? { main: tr[200], light: tr[50], dark: tr[400] }
    : { main: tr[500], light: tr[300], dark: tr[700] };
}
function Jx(n = 'light') {
  return n === 'dark'
    ? { main: er[500], light: er[300], dark: er[700] }
    : { main: er[700], light: er[400], dark: er[800] };
}
function t2(n = 'light') {
  return n === 'dark'
    ? { main: ar[400], light: ar[300], dark: ar[700] }
    : { main: ar[700], light: ar[500], dark: ar[900] };
}
function e2(n = 'light') {
  return n === 'dark'
    ? { main: lr[400], light: lr[300], dark: lr[700] }
    : { main: lr[800], light: lr[500], dark: lr[900] };
}
function n2(n = 'light') {
  return n === 'dark'
    ? { main: ho[400], light: ho[300], dark: ho[700] }
    : { main: '#ed6c02', light: ho[500], dark: ho[900] };
}
function a2(n) {
  return `oklch(from ${n} var(--__l) 0 h / var(--__a))`;
}
function nd(n) {
  const {
      mode: r = 'light',
      contrastThreshold: o = 3,
      tonalOffset: i = 0.2,
      colorSpace: c,
      ...f
    } = n,
    d = n.primary || Fx(r),
    p = n.secondary || Wx(r),
    g = n.error || Jx(r),
    h = n.info || t2(r),
    b = n.success || e2(r),
    S = n.warning || n2(r);
  function E(D) {
    return c ? a2(D) : yx(D, Rf.text.primary) >= o ? Rf.text.primary : o0.text.primary;
  }
  const O = ({
    color: D,
    name: k,
    mainShade: H = 500,
    lightShade: N = 300,
    darkShade: w = 700,
  }) => {
    if (((D = { ...D }), !D.main && D[H] && (D.main = D[H]), !D.hasOwnProperty('main')))
      throw new Error(ca(11, k ? ` (${k})` : '', H));
    if (typeof D.main != 'string')
      throw new Error(ca(12, k ? ` (${k})` : '', JSON.stringify(D.main)));
    return (
      c
        ? (Vg(c, D, 'light', N, i), Vg(c, D, 'dark', w, i))
        : (Gg(D, 'light', N, i), Gg(D, 'dark', w, i)),
      D.contrastText || (D.contrastText = E(D.main)),
      D
    );
  };
  let C;
  return (
    r === 'light' ? (C = r0()) : r === 'dark' && (C = i0()),
    Pe(
      {
        common: { ...Do },
        mode: r,
        primary: O({ color: d, name: 'primary' }),
        secondary: O({
          color: p,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: O({ color: g, name: 'error' }),
        warning: O({ color: S, name: 'warning' }),
        info: O({ color: h, name: 'info' }),
        success: O({ color: b, name: 'success' }),
        grey: Zx,
        contrastThreshold: o,
        getContrastText: E,
        augmentColor: O,
        tonalOffset: i,
        ...C,
      },
      f,
    )
  );
}
function l2(n) {
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
function r2(n, r) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [n.up('sm')]: { minHeight: 64 },
    },
    ...r,
  };
}
function o2(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Yg = { textTransform: 'uppercase' },
  Pg = '"Roboto", "Helvetica", "Arial", sans-serif';
function s0(n, r) {
  const {
      fontFamily: o = Pg,
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
    E = i / 14,
    O = b || ((D) => `${(D / g) * E}rem`),
    C = (D, k, H, N, w) => ({
      fontFamily: o,
      fontWeight: D,
      fontSize: O(k),
      lineHeight: H,
      ...(o === Pg ? { letterSpacing: `${o2(N / k)}em` } : {}),
      ...w,
      ...h,
    }),
    T = {
      h1: C(c, 96, 1.167, -1.5),
      h2: C(c, 60, 1.2, -0.5),
      h3: C(f, 48, 1.167, 0),
      h4: C(f, 34, 1.235, 0.25),
      h5: C(f, 24, 1.334, 0),
      h6: C(d, 20, 1.6, 0.15),
      subtitle1: C(f, 16, 1.75, 0.15),
      subtitle2: C(d, 14, 1.57, 0.1),
      body1: C(f, 16, 1.5, 0.15),
      body2: C(f, 14, 1.43, 0.15),
      button: C(d, 14, 1.75, 0.4, Yg),
      caption: C(f, 12, 1.66, 0.4),
      overline: C(f, 12, 2.66, 1, Yg),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Pe(
    {
      htmlFontSize: g,
      pxToRem: O,
      fontFamily: o,
      fontSize: i,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: d,
      fontWeightBold: p,
      ...T,
    },
    S,
    { clone: !1 },
  );
}
const i2 = 0.2,
  s2 = 0.14,
  u2 = 0.12;
function pe(...n) {
  return [
    `${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${i2})`,
    `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${s2})`,
    `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${u2})`,
  ].join(',');
}
const c2 = [
    'none',
    pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  f2 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  u0 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Xg(n) {
  return `${Math.round(n)}ms`;
}
function d2(n) {
  if (!n) return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function p2(n) {
  const r = { ...f2, ...n.easing },
    o = { ...u0, ...n.duration };
  return {
    getAutoHeightDuration: d2,
    create: (c = ['all'], f = {}) => {
      const { duration: d = o.standard, easing: p = r.easeInOut, delay: g = 0, ...h } = f;
      return (Array.isArray(c) ? c : [c])
        .map(
          (b) =>
            `${b} ${typeof d == 'string' ? d : Xg(d)} ${p} ${typeof g == 'string' ? g : Xg(g)}`,
        )
        .join(',');
    },
    ...n,
    easing: r,
    duration: o,
  };
}
const m2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function h2(n) {
  return (
    Vn(n) ||
    typeof n > 'u' ||
    typeof n == 'string' ||
    typeof n == 'boolean' ||
    typeof n == 'number' ||
    Array.isArray(n)
  );
}
function c0(n = {}) {
  const r = { ...n };
  function o(i) {
    const c = Object.entries(i);
    for (let f = 0; f < c.length; f++) {
      const [d, p] = c[f];
      !h2(p) || d.startsWith('unstable_') ? delete i[d] : Vn(p) && ((i[d] = { ...p }), o(i[d]));
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
function Kg(n) {
  return typeof n == 'number' ? `${(n * 100).toFixed(0)}%` : `calc((${n}) * 100%)`;
}
const g2 = (n) => {
  if (!Number.isNaN(+n)) return +n;
  const r = n.match(/\d*\.?\d+/g);
  if (!r) return 0;
  let o = 0;
  for (let i = 0; i < r.length; i += 1) o += +r[i];
  return o;
};
function y2(n) {
  Object.assign(n, {
    alpha(r, o) {
      const i = this || n;
      return i.colorSpace
        ? `oklch(from ${r} l c h / ${typeof o == 'string' ? `calc(${o})` : o})`
        : i.vars
          ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof o == 'string' ? `calc(${o})` : o})`
          : ds(r, g2(o));
    },
    lighten(r, o) {
      const i = this || n;
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${r}, #fff ${Kg(o)})` : _s(r, o);
    },
    darken(r, o) {
      const i = this || n;
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${r}, #000 ${Kg(o)})` : Ns(r, o);
    },
  });
}
function Af(n = {}, ...r) {
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
  if (n.vars && n.generateThemeVars === void 0) throw new Error(ca(20));
  const S = nd({ ...f, colorSpace: h }),
    E = zs(n);
  let O = Pe(E, {
    mixins: r2(E.breakpoints, i),
    palette: S,
    shadows: c2.slice(),
    typography: s0(S, p),
    transitions: p2(d),
    zIndex: { ...m2 },
  });
  return (
    (O = Pe(O, b)),
    (O = r.reduce((C, T) => Pe(C, T), O)),
    (O.unstable_sxConfig = { ...jo, ...b?.unstable_sxConfig }),
    (O.unstable_sx = function (T) {
      return qa({ sx: T, theme: this });
    }),
    (O.toRuntimeSource = c0),
    y2(O),
    O
  );
}
function Mf(n) {
  let r;
  return (
    n < 1 ? (r = 5.11916 * n ** 2) : (r = 4.5 * Math.log(n + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const v2 = [...Array(25)].map((n, r) => {
  if (r === 0) return 'none';
  const o = Mf(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function f0(n) {
  return {
    inputPlaceholder: n === 'dark' ? 0.5 : 0.42,
    inputUnderline: n === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: n === 'dark' ? 0.2 : 0.12,
    switchTrack: n === 'dark' ? 0.3 : 0.38,
  };
}
function d0(n) {
  return n === 'dark' ? v2 : [];
}
function b2(n) {
  const { palette: r = { mode: 'light' }, opacity: o, overlays: i, colorSpace: c, ...f } = n,
    d = nd({ ...r, colorSpace: c });
  return { palette: d, opacity: { ...f0(d.mode), ...o }, overlays: i || d0(d.mode), ...f };
}
function S2(n) {
  return (
    !!n[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!n[0].match(/sxConfig$/) ||
    (n[0] === 'palette' && !!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const x2 = (n) => [
    ...[...Array(25)].map((r, o) => `--${n ? `${n}-` : ''}overlays-${o}`),
    `--${n ? `${n}-` : ''}palette-AppBar-darkBg`,
    `--${n ? `${n}-` : ''}palette-AppBar-darkColor`,
  ],
  C2 = (n) => (r, o) => {
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
          x2(n.cssVarPrefix).forEach((p) => {
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
function T2(n, r) {
  r.forEach((o) => {
    n[o] || (n[o] = {});
  });
}
function Z(n, r, o) {
  !n[r] && o && (n[r] = o);
}
function So(n) {
  return typeof n != 'string' || !n.startsWith('hsl') ? n : Jy(n);
}
function sa(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = bo(So(n[r])));
}
function E2(n) {
  return typeof n == 'number'
    ? `${n}px`
    : typeof n == 'string' || typeof n == 'function' || Array.isArray(n)
      ? n
      : '8px';
}
const jn = (n) => {
    try {
      return n();
    } catch {}
  },
  R2 = (n = 'mui') => Hx(n);
function mf(n, r, o, i, c) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const f = c === 'dark' ? 'dark' : 'light';
  if (!i) {
    r[c] = b2({ ...o, palette: { mode: f, ...o?.palette }, colorSpace: n });
    return;
  }
  const { palette: d, ...p } = Af({ ...i, palette: { mode: f, ...o?.palette }, colorSpace: n });
  return (
    (r[c] = {
      ...o,
      palette: d,
      opacity: { ...f0(f), ...o?.opacity },
      overlays: o?.overlays || d0(f),
    }),
    p
  );
}
function A2(n = {}, ...r) {
  const {
      colorSchemes: o = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      nativeColor: d = !1,
      shouldSkipGeneratingVar: p = S2,
      colorSchemeSelector: g = o.light && o.dark ? 'media' : void 0,
      rootSelector: h = ':root',
      ...b
    } = n,
    S = Object.keys(o)[0],
    E = i || (o.light && S !== 'light' ? 'light' : S),
    O = R2(f),
    { [E]: C, light: T, dark: D, ...k } = o,
    H = { ...k };
  let N = C;
  if ((((E === 'dark' && !('dark' in o)) || (E === 'light' && !('light' in o))) && (N = !0), !N))
    throw new Error(ca(21, E));
  let w;
  d && (w = 'oklch');
  const z = mf(w, H, N, b, E);
  (T && !H.light && mf(w, H, T, void 0, 'light'), D && !H.dark && mf(w, H, D, void 0, 'dark'));
  let B = {
    defaultColorScheme: E,
    ...z,
    cssVarPrefix: f,
    colorSchemeSelector: g,
    rootSelector: h,
    getCssVar: O,
    colorSchemes: H,
    font: { ...l2(z.typography), ...z.font },
    spacing: E2(b.spacing),
  };
  (Object.keys(B.colorSchemes).forEach((et) => {
    const v = B.colorSchemes[et].palette,
      I = (Y) => {
        const A = Y.split('-'),
          X = A[1],
          it = A[2];
        return O(Y, v[X][it]);
      };
    (v.mode === 'light' && (Z(v.common, 'background', '#fff'), Z(v.common, 'onBackground', '#000')),
      v.mode === 'dark' &&
        (Z(v.common, 'background', '#000'), Z(v.common, 'onBackground', '#fff')));
    function V(Y, A, X) {
      if (w) {
        let it;
        return (
          Y === il && (it = `transparent ${((1 - X) * 100).toFixed(0)}%`),
          Y === Zt && (it = `#000 ${(X * 100).toFixed(0)}%`),
          Y === Ft && (it = `#fff ${(X * 100).toFixed(0)}%`),
          `color-mix(in ${w}, ${A}, ${it})`
        );
      }
      return Y(A, X);
    }
    if (
      (T2(v, [
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
      (Z(v.Alert, 'errorColor', V(Zt, v.error.light, 0.6)),
        Z(v.Alert, 'infoColor', V(Zt, v.info.light, 0.6)),
        Z(v.Alert, 'successColor', V(Zt, v.success.light, 0.6)),
        Z(v.Alert, 'warningColor', V(Zt, v.warning.light, 0.6)),
        Z(v.Alert, 'errorFilledBg', I('palette-error-main')),
        Z(v.Alert, 'infoFilledBg', I('palette-info-main')),
        Z(v.Alert, 'successFilledBg', I('palette-success-main')),
        Z(v.Alert, 'warningFilledBg', I('palette-warning-main')),
        Z(
          v.Alert,
          'errorFilledColor',
          jn(() => v.getContrastText(v.error.main)),
        ),
        Z(
          v.Alert,
          'infoFilledColor',
          jn(() => v.getContrastText(v.info.main)),
        ),
        Z(
          v.Alert,
          'successFilledColor',
          jn(() => v.getContrastText(v.success.main)),
        ),
        Z(
          v.Alert,
          'warningFilledColor',
          jn(() => v.getContrastText(v.warning.main)),
        ),
        Z(v.Alert, 'errorStandardBg', V(Ft, v.error.light, 0.9)),
        Z(v.Alert, 'infoStandardBg', V(Ft, v.info.light, 0.9)),
        Z(v.Alert, 'successStandardBg', V(Ft, v.success.light, 0.9)),
        Z(v.Alert, 'warningStandardBg', V(Ft, v.warning.light, 0.9)),
        Z(v.Alert, 'errorIconColor', I('palette-error-main')),
        Z(v.Alert, 'infoIconColor', I('palette-info-main')),
        Z(v.Alert, 'successIconColor', I('palette-success-main')),
        Z(v.Alert, 'warningIconColor', I('palette-warning-main')),
        Z(v.AppBar, 'defaultBg', I('palette-grey-100')),
        Z(v.Avatar, 'defaultBg', I('palette-grey-400')),
        Z(v.Button, 'inheritContainedBg', I('palette-grey-300')),
        Z(v.Button, 'inheritContainedHoverBg', I('palette-grey-A100')),
        Z(v.Chip, 'defaultBorder', I('palette-grey-400')),
        Z(v.Chip, 'defaultAvatarColor', I('palette-grey-700')),
        Z(v.Chip, 'defaultIconColor', I('palette-grey-700')),
        Z(v.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        Z(v.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        Z(v.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        Z(v.LinearProgress, 'primaryBg', V(Ft, v.primary.main, 0.62)),
        Z(v.LinearProgress, 'secondaryBg', V(Ft, v.secondary.main, 0.62)),
        Z(v.LinearProgress, 'errorBg', V(Ft, v.error.main, 0.62)),
        Z(v.LinearProgress, 'infoBg', V(Ft, v.info.main, 0.62)),
        Z(v.LinearProgress, 'successBg', V(Ft, v.success.main, 0.62)),
        Z(v.LinearProgress, 'warningBg', V(Ft, v.warning.main, 0.62)),
        Z(
          v.Skeleton,
          'bg',
          w ? V(il, v.text.primary, 0.11) : `rgba(${I('palette-text-primaryChannel')} / 0.11)`,
        ),
        Z(v.Slider, 'primaryTrack', V(Ft, v.primary.main, 0.62)),
        Z(v.Slider, 'secondaryTrack', V(Ft, v.secondary.main, 0.62)),
        Z(v.Slider, 'errorTrack', V(Ft, v.error.main, 0.62)),
        Z(v.Slider, 'infoTrack', V(Ft, v.info.main, 0.62)),
        Z(v.Slider, 'successTrack', V(Ft, v.success.main, 0.62)),
        Z(v.Slider, 'warningTrack', V(Ft, v.warning.main, 0.62)));
      const Y = w ? V(Zt, v.background.default, 0.6825) : Wi(v.background.default, 0.8);
      (Z(v.SnackbarContent, 'bg', Y),
        Z(
          v.SnackbarContent,
          'color',
          jn(() => (w ? Rf.text.primary : v.getContrastText(Y))),
        ),
        Z(v.SpeedDialAction, 'fabHoverBg', Wi(v.background.paper, 0.15)),
        Z(v.StepConnector, 'border', I('palette-grey-400')),
        Z(v.StepContent, 'border', I('palette-grey-400')),
        Z(v.Switch, 'defaultColor', I('palette-common-white')),
        Z(v.Switch, 'defaultDisabledColor', I('palette-grey-100')),
        Z(v.Switch, 'primaryDisabledColor', V(Ft, v.primary.main, 0.62)),
        Z(v.Switch, 'secondaryDisabledColor', V(Ft, v.secondary.main, 0.62)),
        Z(v.Switch, 'errorDisabledColor', V(Ft, v.error.main, 0.62)),
        Z(v.Switch, 'infoDisabledColor', V(Ft, v.info.main, 0.62)),
        Z(v.Switch, 'successDisabledColor', V(Ft, v.success.main, 0.62)),
        Z(v.Switch, 'warningDisabledColor', V(Ft, v.warning.main, 0.62)),
        Z(v.TableCell, 'border', V(Ft, V(il, v.divider, 1), 0.88)),
        Z(v.Tooltip, 'bg', V(il, v.grey[700], 0.92)));
    }
    if (v.mode === 'dark') {
      (Z(v.Alert, 'errorColor', V(Ft, v.error.light, 0.6)),
        Z(v.Alert, 'infoColor', V(Ft, v.info.light, 0.6)),
        Z(v.Alert, 'successColor', V(Ft, v.success.light, 0.6)),
        Z(v.Alert, 'warningColor', V(Ft, v.warning.light, 0.6)),
        Z(v.Alert, 'errorFilledBg', I('palette-error-dark')),
        Z(v.Alert, 'infoFilledBg', I('palette-info-dark')),
        Z(v.Alert, 'successFilledBg', I('palette-success-dark')),
        Z(v.Alert, 'warningFilledBg', I('palette-warning-dark')),
        Z(
          v.Alert,
          'errorFilledColor',
          jn(() => v.getContrastText(v.error.dark)),
        ),
        Z(
          v.Alert,
          'infoFilledColor',
          jn(() => v.getContrastText(v.info.dark)),
        ),
        Z(
          v.Alert,
          'successFilledColor',
          jn(() => v.getContrastText(v.success.dark)),
        ),
        Z(
          v.Alert,
          'warningFilledColor',
          jn(() => v.getContrastText(v.warning.dark)),
        ),
        Z(v.Alert, 'errorStandardBg', V(Zt, v.error.light, 0.9)),
        Z(v.Alert, 'infoStandardBg', V(Zt, v.info.light, 0.9)),
        Z(v.Alert, 'successStandardBg', V(Zt, v.success.light, 0.9)),
        Z(v.Alert, 'warningStandardBg', V(Zt, v.warning.light, 0.9)),
        Z(v.Alert, 'errorIconColor', I('palette-error-main')),
        Z(v.Alert, 'infoIconColor', I('palette-info-main')),
        Z(v.Alert, 'successIconColor', I('palette-success-main')),
        Z(v.Alert, 'warningIconColor', I('palette-warning-main')),
        Z(v.AppBar, 'defaultBg', I('palette-grey-900')),
        Z(v.AppBar, 'darkBg', I('palette-background-paper')),
        Z(v.AppBar, 'darkColor', I('palette-text-primary')),
        Z(v.Avatar, 'defaultBg', I('palette-grey-600')),
        Z(v.Button, 'inheritContainedBg', I('palette-grey-800')),
        Z(v.Button, 'inheritContainedHoverBg', I('palette-grey-700')),
        Z(v.Chip, 'defaultBorder', I('palette-grey-700')),
        Z(v.Chip, 'defaultAvatarColor', I('palette-grey-300')),
        Z(v.Chip, 'defaultIconColor', I('palette-grey-300')),
        Z(v.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        Z(v.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        Z(v.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        Z(v.LinearProgress, 'primaryBg', V(Zt, v.primary.main, 0.5)),
        Z(v.LinearProgress, 'secondaryBg', V(Zt, v.secondary.main, 0.5)),
        Z(v.LinearProgress, 'errorBg', V(Zt, v.error.main, 0.5)),
        Z(v.LinearProgress, 'infoBg', V(Zt, v.info.main, 0.5)),
        Z(v.LinearProgress, 'successBg', V(Zt, v.success.main, 0.5)),
        Z(v.LinearProgress, 'warningBg', V(Zt, v.warning.main, 0.5)),
        Z(
          v.Skeleton,
          'bg',
          w ? V(il, v.text.primary, 0.13) : `rgba(${I('palette-text-primaryChannel')} / 0.13)`,
        ),
        Z(v.Slider, 'primaryTrack', V(Zt, v.primary.main, 0.5)),
        Z(v.Slider, 'secondaryTrack', V(Zt, v.secondary.main, 0.5)),
        Z(v.Slider, 'errorTrack', V(Zt, v.error.main, 0.5)),
        Z(v.Slider, 'infoTrack', V(Zt, v.info.main, 0.5)),
        Z(v.Slider, 'successTrack', V(Zt, v.success.main, 0.5)),
        Z(v.Slider, 'warningTrack', V(Zt, v.warning.main, 0.5)));
      const Y = w ? V(Ft, v.background.default, 0.985) : Wi(v.background.default, 0.98);
      (Z(v.SnackbarContent, 'bg', Y),
        Z(
          v.SnackbarContent,
          'color',
          jn(() => (w ? o0.text.primary : v.getContrastText(Y))),
        ),
        Z(v.SpeedDialAction, 'fabHoverBg', Wi(v.background.paper, 0.15)),
        Z(v.StepConnector, 'border', I('palette-grey-600')),
        Z(v.StepContent, 'border', I('palette-grey-600')),
        Z(v.Switch, 'defaultColor', I('palette-grey-300')),
        Z(v.Switch, 'defaultDisabledColor', I('palette-grey-600')),
        Z(v.Switch, 'primaryDisabledColor', V(Zt, v.primary.main, 0.55)),
        Z(v.Switch, 'secondaryDisabledColor', V(Zt, v.secondary.main, 0.55)),
        Z(v.Switch, 'errorDisabledColor', V(Zt, v.error.main, 0.55)),
        Z(v.Switch, 'infoDisabledColor', V(Zt, v.info.main, 0.55)),
        Z(v.Switch, 'successDisabledColor', V(Zt, v.success.main, 0.55)),
        Z(v.Switch, 'warningDisabledColor', V(Zt, v.warning.main, 0.55)),
        Z(v.TableCell, 'border', V(Zt, V(il, v.divider, 1), 0.68)),
        Z(v.Tooltip, 'bg', V(il, v.grey[700], 0.92)));
    }
    (sa(v.background, 'default'),
      sa(v.background, 'paper'),
      sa(v.common, 'background'),
      sa(v.common, 'onBackground'),
      sa(v, 'divider'),
      Object.keys(v).forEach((Y) => {
        const A = v[Y];
        Y !== 'tonalOffset' &&
          A &&
          typeof A == 'object' &&
          (A.main && Z(v[Y], 'mainChannel', bo(So(A.main))),
          A.light && Z(v[Y], 'lightChannel', bo(So(A.light))),
          A.dark && Z(v[Y], 'darkChannel', bo(So(A.dark))),
          A.contrastText && Z(v[Y], 'contrastTextChannel', bo(So(A.contrastText))),
          Y === 'text' && (sa(v[Y], 'primary'), sa(v[Y], 'secondary')),
          Y === 'action' && (A.active && sa(v[Y], 'active'), A.selected && sa(v[Y], 'selected')));
      }));
  }),
    (B = r.reduce((et, v) => Pe(et, v), B)));
  const P = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: p,
      getSelector: C2(B),
      enableContrastVars: d,
    },
    { vars: Q, generateThemeVars: F, generateStyleSheets: J } = Vx(B, P);
  return (
    (B.vars = Q),
    Object.entries(B.colorSchemes[B.defaultColorScheme]).forEach(([et, v]) => {
      B[et] = v;
    }),
    (B.generateThemeVars = F),
    (B.generateStyleSheets = J),
    (B.generateSpacing = function () {
      return Py(b.spacing, If(this));
    }),
    (B.getColorSchemeSelector = Yx(g)),
    (B.spacing = B.generateSpacing()),
    (B.shouldSkipGeneratingVar = p),
    (B.unstable_sxConfig = { ...jo, ...b?.unstable_sxConfig }),
    (B.unstable_sx = function (v) {
      return qa({ sx: v, theme: this });
    }),
    (B.toRuntimeSource = c0),
    B
  );
}
function Qg(n, r, o) {
  n.colorSchemes &&
    o &&
    (n.colorSchemes[r] = {
      ...(o !== !0 && o),
      palette: nd({ ...(o === !0 ? {} : o.palette), mode: r }),
    });
}
function Bs(n = {}, ...r) {
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
    if (!('colorSchemes' in n)) return Af(n, ...r);
    let b = o;
    'palette' in n ||
      (h[p] && (h[p] !== !0 ? (b = h[p].palette) : p === 'dark' && (b = { mode: 'dark' })));
    const S = Af({ ...n, palette: b }, ...r);
    return (
      (S.defaultColorScheme = p),
      (S.colorSchemes = h),
      S.palette.mode === 'light' &&
        ((S.colorSchemes.light = { ...(h.light !== !0 && h.light), palette: S.palette }),
        Qg(S, 'dark', h.dark)),
      S.palette.mode === 'dark' &&
        ((S.colorSchemes.dark = { ...(h.dark !== !0 && h.dark), palette: S.palette }),
        Qg(S, 'light', h.light)),
      S
    );
  }
  return (
    !o && !('light' in h) && p === 'light' && (h.light = !0),
    A2({ ...d, colorSchemes: h, defaultColorScheme: p, ...(typeof i != 'boolean' && i) }, ...r)
  );
}
const ad = Bs();
function ks() {
  const n = ws(ad);
  return n[Yn] || n;
}
function p0(n) {
  return n !== 'ownerState' && n !== 'theme' && n !== 'sx' && n !== 'as';
}
const wn = (n) => p0(n) && n !== 'classes',
  ct = Wy({ themeId: Yn, defaultTheme: ad, rootShouldForwardProp: wn });
function M2({ theme: n, ...r }) {
  const o = Yn in n ? n[Yn] : void 0;
  return $.jsx(a0, { ...r, themeId: o ? Yn : void 0, theme: o || n });
}
const Ji = {
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode',
  },
  { CssVarsProvider: O2 } = Lx({
    themeId: Yn,
    theme: () => Bs({ cssVariables: !0 }),
    colorSchemeStorageKey: Ji.colorSchemeStorageKey,
    modeStorageKey: Ji.modeStorageKey,
    defaultColorScheme: { light: Ji.defaultLightColorScheme, dark: Ji.defaultDarkColorScheme },
    resolveTheme: (n) => {
      const r = { ...n, typography: s0(n.palette, n.typography) };
      return (
        (r.unstable_sx = function (i) {
          return qa({ sx: i, theme: this });
        }),
        r
      );
    },
  }),
  z2 = O2;
function w2({ theme: n, ...r }) {
  const o = x.useMemo(() => {
    if (typeof n == 'function') return n;
    const i = Yn in n ? n[Yn] : n;
    return 'colorSchemes' in i ? null : 'vars' in i ? n : { ...n, vars: null };
  }, [n]);
  return o ? $.jsx(M2, { theme: o, ...r }) : $.jsx(z2, { theme: n, ...r });
}
function Ig(...n) {
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
function D2(n) {
  return $.jsx(Xy, { ...n, defaultTheme: ad, themeId: Yn });
}
function ld(n) {
  return function (o) {
    return $.jsx(D2, { styles: typeof n == 'function' ? (i) => n({ theme: i, ...o }) : n });
  };
}
function N2() {
  return Ky;
}
const re = Dx;
function Vt(n) {
  return Mx(n);
}
function _2(n) {
  return Ht('MuiSvgIcon', n);
}
qt('MuiSvgIcon', [
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
const B2 = (n) => {
    const { color: r, fontSize: o, classes: i } = n,
      c = { root: ['root', r !== 'inherit' && `color${st(r)}`, `fontSize${st(o)}`] };
    return Gt(c, _2, i);
  },
  k2 = ct('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.color !== 'inherit' && r[`color${st(o.color)}`],
        r[`fontSize${st(o.fontSize)}`],
      ];
    },
  })(
    re(({ theme: n }) => ({
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
  Of = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiSvgIcon' }),
      {
        children: c,
        className: f,
        color: d = 'inherit',
        component: p = 'svg',
        fontSize: g = 'medium',
        htmlColor: h,
        inheritViewBox: b = !1,
        titleAccess: S,
        viewBox: E = '0 0 24 24',
        ...O
      } = i,
      C = x.isValidElement(c) && c.type === 'svg',
      T = {
        ...i,
        color: d,
        component: p,
        fontSize: g,
        instanceFontSize: r.fontSize,
        inheritViewBox: b,
        viewBox: E,
        hasSvgAsChild: C,
      },
      D = {};
    b || (D.viewBox = E);
    const k = B2(T);
    return $.jsxs(k2, {
      as: p,
      className: xt(k.root, f),
      focusable: 'false',
      color: h,
      'aria-hidden': S ? void 0 : !0,
      role: S ? 'img' : void 0,
      ref: o,
      ...D,
      ...O,
      ...(C && c.props),
      ownerState: T,
      children: [C ? c.props.children : c, S ? $.jsx('title', { children: S }) : null],
    });
  });
Of.muiName = 'SvgIcon';
function Dn(n, r) {
  function o(i, c) {
    return $.jsx(Of, { 'data-testid': void 0, ref: c, ...i, children: n });
  }
  return ((o.muiName = Of.muiName), x.memo(x.forwardRef(o)));
}
function m0(n, r = 166) {
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
function zn(n) {
  return (n && n.ownerDocument) || document;
}
function pa(n) {
  return zn(n).defaultView || window;
}
function Zg(n, r) {
  typeof n == 'function' ? n(r) : n && (n.current = r);
}
function Fg(n) {
  const { controlled: r, default: o, name: i, state: c = 'value' } = n,
    { current: f } = x.useRef(r !== void 0),
    [d, p] = x.useState(o),
    g = f ? r : d,
    h = x.useCallback((b) => {
      f || p(b);
    }, []);
  return [g, h];
}
function ml(n) {
  const r = x.useRef(n);
  return (
    da(() => {
      r.current = n;
    }),
    x.useRef((...o) => (0, r.current)(...o)).current
  );
}
function Xe(...n) {
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
function $2(n, r) {
  const o = n.charCodeAt(2);
  return n[0] === 'o' && n[1] === 'n' && o >= 65 && o <= 90 && typeof r == 'function';
}
function U2(n, r) {
  if (!n) return r;
  function o(d, p) {
    const g = {};
    return (
      Object.keys(p).forEach((h) => {
        $2(h, p[h]) &&
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
        h = xt(d?.className, p?.className, g?.className),
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
    f = xt(i?.className, n?.className);
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
function h0(n, r) {
  if (n == null) return {};
  var o = {};
  for (var i in n)
    if ({}.hasOwnProperty.call(n, i)) {
      if (r.indexOf(i) !== -1) continue;
      o[i] = n[i];
    }
  return o;
}
function zf(n, r) {
  return (
    (zf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, i) {
          return ((o.__proto__ = i), o);
        }),
    zf(n, r)
  );
}
function g0(n, r) {
  ((n.prototype = Object.create(r.prototype)), (n.prototype.constructor = n), zf(n, r));
}
var y0 = Ay();
const ts = Uf(y0),
  Wg = { disabled: !1 },
  ps = On.createContext(null);
var j2 = function (r) {
    return r.scrollTop;
  },
  xo = 'unmounted',
  cl = 'exited',
  fl = 'entering',
  or = 'entered',
  wf = 'exiting',
  Nn = (function (n) {
    g0(r, n);
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
            ? ((g = cl), (f.appearStatus = fl))
            : (g = or)
          : i.unmountOnExit || i.mountOnEnter
            ? (g = xo)
            : (g = cl),
        (f.state = { status: g }),
        (f.nextCallback = null),
        f
      );
    }
    r.getDerivedStateFromProps = function (c, f) {
      var d = c.in;
      return d && f.status === xo ? { status: cl } : null;
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
          this.props.in ? d !== fl && d !== or && (f = fl) : (d === fl || d === or) && (f = wf);
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
          if ((this.cancelNextCallback(), f === fl)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var d = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this);
              d && j2(d);
            }
            this.performEnter(c);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === cl && this.setState({ status: xo });
      }),
      (o.performEnter = function (c) {
        var f = this,
          d = this.props.enter,
          p = this.context ? this.context.isMounting : c,
          g = this.props.nodeRef ? [p] : [ts.findDOMNode(this), p],
          h = g[0],
          b = g[1],
          S = this.getTimeouts(),
          E = p ? S.appear : S.enter;
        if ((!c && !d) || Wg.disabled) {
          this.safeSetState({ status: or }, function () {
            f.props.onEntered(h);
          });
          return;
        }
        (this.props.onEnter(h, b),
          this.safeSetState({ status: fl }, function () {
            (f.props.onEntering(h, b),
              f.onTransitionEnd(E, function () {
                f.safeSetState({ status: or }, function () {
                  f.props.onEntered(h, b);
                });
              }));
          }));
      }),
      (o.performExit = function () {
        var c = this,
          f = this.props.exit,
          d = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : ts.findDOMNode(this);
        if (!f || Wg.disabled) {
          this.safeSetState({ status: cl }, function () {
            c.props.onExited(p);
          });
          return;
        }
        (this.props.onExit(p),
          this.safeSetState({ status: wf }, function () {
            (c.props.onExiting(p),
              c.onTransitionEnd(d.exit, function () {
                c.safeSetState({ status: cl }, function () {
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
        var d = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this),
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
        if (c === xo) return null;
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
        var p = h0(f, [
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
        return On.createElement(
          ps.Provider,
          { value: null },
          typeof d == 'function' ? d(c, p) : On.cloneElement(On.Children.only(d), p),
        );
      }),
      r
    );
  })(On.Component);
Nn.contextType = ps;
Nn.propTypes = {};
function rr() {}
Nn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: rr,
  onEntering: rr,
  onEntered: rr,
  onExit: rr,
  onExiting: rr,
  onExited: rr,
};
Nn.UNMOUNTED = xo;
Nn.EXITED = cl;
Nn.ENTERING = fl;
Nn.ENTERED = or;
Nn.EXITING = wf;
function L2(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function rd(n, r) {
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
function H2(n, r) {
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
function pl(n, r, o) {
  return o[r] != null ? o[r] : n.props[r];
}
function q2(n, r) {
  return rd(n.children, function (o) {
    return x.cloneElement(o, {
      onExited: r.bind(null, o),
      in: !0,
      appear: pl(o, 'appear', n),
      enter: pl(o, 'enter', n),
      exit: pl(o, 'exit', n),
    });
  });
}
function G2(n, r, o) {
  var i = rd(n.children),
    c = H2(r, i);
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
              exit: pl(d, 'exit', n),
              enter: pl(d, 'enter', n),
            }))
          : !g && p && !b
            ? (c[f] = x.cloneElement(d, { in: !1 }))
            : g &&
              p &&
              x.isValidElement(h) &&
              (c[f] = x.cloneElement(d, {
                onExited: o.bind(null, d),
                in: h.props.in,
                exit: pl(d, 'exit', n),
                enter: pl(d, 'enter', n),
              }));
      }
    }),
    c
  );
}
var V2 =
    Object.values ||
    function (n) {
      return Object.keys(n).map(function (r) {
        return n[r];
      });
    },
  Y2 = {
    component: 'div',
    childFactory: function (r) {
      return r;
    },
  },
  od = (function (n) {
    g0(r, n);
    function r(i, c) {
      var f;
      f = n.call(this, i, c) || this;
      var d = f.handleExited.bind(L2(f));
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
        return { children: g ? q2(c, p) : G2(c, d, p), firstRender: !1 };
      }),
      (o.handleExited = function (c, f) {
        var d = rd(this.props.children);
        c.key in d ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (p) {
              var g = us({}, p.children);
              return (delete g[c.key], { children: g });
            }));
      }),
      (o.render = function () {
        var c = this.props,
          f = c.component,
          d = c.childFactory,
          p = h0(c, ['component', 'childFactory']),
          g = this.state.contextValue,
          h = V2(this.state.children).map(d);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          f === null
            ? On.createElement(ps.Provider, { value: g }, h)
            : On.createElement(ps.Provider, { value: g }, On.createElement(f, p, h))
        );
      }),
      r
    );
  })(On.Component);
od.propTypes = {};
od.defaultProps = Y2;
const Jg = {};
function v0(n, r) {
  const o = x.useRef(Jg);
  return (o.current === Jg && (o.current = n(r)), o);
}
const P2 = [];
function X2(n) {
  x.useEffect(n, P2);
}
class id {
  static create() {
    return new id();
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
function sd() {
  const n = v0(id.create).current;
  return (X2(n.disposeEffect), n);
}
const b0 = (n) => n.scrollTop;
function cr(n, r) {
  const { timeout: o, easing: i, style: c = {} } = n;
  return {
    duration: c.transitionDuration ?? (typeof o == 'number' ? o : o[r.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof i == 'object' ? i[r.mode] : i),
    delay: c.transitionDelay,
  };
}
function K2(n) {
  return Ht('MuiCollapse', n);
}
qt('MuiCollapse', [
  'root',
  'horizontal',
  'vertical',
  'entered',
  'hidden',
  'wrapper',
  'wrapperInner',
]);
const Q2 = (n) => {
    const { orientation: r, classes: o } = n,
      i = {
        root: ['root', `${r}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${r}`],
        wrapperInner: ['wrapperInner', `${r}`],
      };
    return Gt(i, K2, o);
  },
  I2 = ct('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        r[o.orientation],
        o.state === 'entered' && r.entered,
        o.state === 'exited' && !o.in && o.collapsedSize === '0px' && r.hidden,
      ];
    },
  })(
    re(({ theme: n }) => ({
      height: 0,
      overflow: 'hidden',
      transition: n.transitions.create('height'),
      variants: [
        {
          props: { orientation: 'horizontal' },
          style: { height: 'auto', width: 0, transition: n.transitions.create('width') },
        },
        { props: { state: 'entered' }, style: { height: 'auto', overflow: 'visible' } },
        { props: { state: 'entered', orientation: 'horizontal' }, style: { width: 'auto' } },
        {
          props: ({ ownerState: r }) => r.state === 'exited' && !r.in && r.collapsedSize === '0px',
          style: { visibility: 'hidden' },
        },
      ],
    })),
  ),
  Z2 = ct('div', { name: 'MuiCollapse', slot: 'Wrapper' })({
    display: 'flex',
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  F2 = ct('div', { name: 'MuiCollapse', slot: 'WrapperInner' })({
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  Eo = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiCollapse' }),
      {
        addEndListener: c,
        children: f,
        className: d,
        collapsedSize: p = '0px',
        component: g,
        easing: h,
        in: b,
        onEnter: S,
        onEntered: E,
        onEntering: O,
        onExit: C,
        onExited: T,
        onExiting: D,
        orientation: k = 'vertical',
        style: H,
        timeout: N = u0.standard,
        TransitionComponent: w = Nn,
        ...z
      } = i,
      B = { ...i, orientation: k, collapsedSize: p },
      P = Q2(B),
      Q = ks(),
      F = sd(),
      J = x.useRef(null),
      et = x.useRef(),
      v = typeof p == 'number' ? `${p}px` : p,
      I = k === 'horizontal',
      V = I ? 'width' : 'height',
      Y = x.useRef(null),
      A = Xe(o, Y),
      X = (nt) => (pt) => {
        if (nt) {
          const yt = Y.current;
          pt === void 0 ? nt(yt) : nt(yt, pt);
        }
      },
      it = () => (J.current ? J.current[I ? 'clientWidth' : 'clientHeight'] : 0),
      at = X((nt, pt) => {
        (J.current && I && (J.current.style.position = 'absolute'),
          (nt.style[V] = v),
          S && S(nt, pt));
      }),
      R = X((nt, pt) => {
        const yt = it();
        J.current && I && (J.current.style.position = '');
        const { duration: Tt, easing: vt } = cr(
          { style: H, timeout: N, easing: h },
          { mode: 'enter' },
        );
        if (N === 'auto') {
          const Et = Q.transitions.getAutoHeightDuration(yt);
          ((nt.style.transitionDuration = `${Et}ms`), (et.current = Et));
        } else nt.style.transitionDuration = typeof Tt == 'string' ? Tt : `${Tt}ms`;
        ((nt.style[V] = `${yt}px`), (nt.style.transitionTimingFunction = vt), O && O(nt, pt));
      }),
      K = X((nt, pt) => {
        ((nt.style[V] = 'auto'), E && E(nt, pt));
      }),
      ot = X((nt) => {
        ((nt.style[V] = `${it()}px`), C && C(nt));
      }),
      rt = X(T),
      ut = X((nt) => {
        const pt = it(),
          { duration: yt, easing: Tt } = cr({ style: H, timeout: N, easing: h }, { mode: 'exit' });
        if (N === 'auto') {
          const vt = Q.transitions.getAutoHeightDuration(pt);
          ((nt.style.transitionDuration = `${vt}ms`), (et.current = vt));
        } else nt.style.transitionDuration = typeof yt == 'string' ? yt : `${yt}ms`;
        ((nt.style[V] = v), (nt.style.transitionTimingFunction = Tt), D && D(nt));
      }),
      dt = (nt) => {
        (N === 'auto' && F.start(et.current || 0, nt), c && c(Y.current, nt));
      };
    return $.jsx(w, {
      in: b,
      onEnter: at,
      onEntered: K,
      onEntering: R,
      onExit: ot,
      onExited: rt,
      onExiting: ut,
      addEndListener: dt,
      nodeRef: Y,
      timeout: N === 'auto' ? null : N,
      ...z,
      children: (nt, { ownerState: pt, ...yt }) =>
        $.jsx(I2, {
          as: g,
          className: xt(
            P.root,
            d,
            { entered: P.entered, exited: !b && v === '0px' && P.hidden }[nt],
          ),
          style: { [I ? 'minWidth' : 'minHeight']: v, ...H },
          ref: A,
          ownerState: { ...B, state: nt },
          ...yt,
          children: $.jsx(Z2, {
            ownerState: { ...B, state: nt },
            className: P.wrapper,
            ref: J,
            children: $.jsx(F2, {
              ownerState: { ...B, state: nt },
              className: P.wrapperInner,
              children: f,
            }),
          }),
        }),
    });
  });
Eo && (Eo.muiSupportAuto = !0);
function W2(n) {
  return Ht('MuiPaper', n);
}
qt('MuiPaper', [
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
const J2 = (n) => {
    const { square: r, elevation: o, variant: i, classes: c } = n,
      f = { root: ['root', i, !r && 'rounded', i === 'elevation' && `elevation${o}`] };
    return Gt(f, W2, c);
  },
  tC = ct('div', {
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
    re(({ theme: n }) => ({
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
  $s = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiPaper' }),
      c = ks(),
      {
        className: f,
        component: d = 'div',
        elevation: p = 1,
        square: g = !1,
        variant: h = 'elevation',
        ...b
      } = i,
      S = { ...i, component: d, elevation: p, square: g, variant: h },
      E = J2(S);
    return $.jsx(tC, {
      as: d,
      ownerState: S,
      className: xt(E.root, f),
      ref: o,
      ...b,
      style: {
        ...(h === 'elevation' && {
          '--Paper-shadow': (c.vars || c).shadows[p],
          ...(c.vars && { '--Paper-overlay': c.vars.overlays?.[p] }),
          ...(!c.vars &&
            c.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${ds('#fff', Mf(p))}, ${ds('#fff', Mf(p))})`,
            }),
        }),
        ...b.style,
      },
    });
  });
function ms(n) {
  return typeof n == 'string';
}
function S0(n, r, o) {
  return n === void 0 || ms(n) ? r : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function x0(n, r, o) {
  return typeof n == 'function' ? n(r, o) : n;
}
function C0(n, r = []) {
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
function ty(n) {
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
function T0(n) {
  const {
    getSlotProps: r,
    additionalProps: o,
    externalSlotProps: i,
    externalForwardedProps: c,
    className: f,
  } = n;
  if (!r) {
    const O = xt(o?.className, f, c?.className, i?.className),
      C = { ...o?.style, ...c?.style, ...i?.style },
      T = { ...o, ...c, ...i };
    return (
      O.length > 0 && (T.className = O),
      Object.keys(C).length > 0 && (T.style = C),
      { props: T, internalRef: void 0 }
    );
  }
  const d = C0({ ...c, ...i }),
    p = ty(i),
    g = ty(c),
    h = r(d),
    b = xt(h?.className, o?.className, f, c?.className, i?.className),
    S = { ...h?.style, ...o?.style, ...c?.style, ...i?.style },
    E = { ...h, ...o, ...g, ...p };
  return (
    b.length > 0 && (E.className = b),
    Object.keys(S).length > 0 && (E.style = S),
    { props: E, internalRef: h.ref }
  );
}
function ie(n, r) {
  const {
      className: o,
      elementType: i,
      ownerState: c,
      externalForwardedProps: f,
      internalForwardedProps: d,
      shouldForwardComponentProp: p = !1,
      ...g
    } = r,
    { component: h, slots: b = { [n]: void 0 }, slotProps: S = { [n]: void 0 }, ...E } = f,
    O = b[n] || i,
    C = x0(S[n], c),
    {
      props: { component: T, ...D },
      internalRef: k,
    } = T0({
      className: o,
      ...g,
      externalForwardedProps: n === 'root' ? E : void 0,
      externalSlotProps: C,
    }),
    H = Xe(k, C?.ref, r.ref),
    N = n === 'root' ? T || h : T,
    w = S0(
      O,
      {
        ...(n === 'root' && !h && !b[n] && d),
        ...(n !== 'root' && !b[n] && d),
        ...D,
        ...(N && !p && { as: N }),
        ...(N && p && { component: N }),
        ref: H,
      },
      c,
    );
  return [O, w];
}
function ey(n) {
  try {
    return n.matches(':focus-visible');
  } catch {}
  return !1;
}
class hs {
  static create() {
    return new hs();
  }
  static use() {
    const r = v0(hs.create).current,
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
        ((this.mounted = nC()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
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
function eC() {
  return hs.use();
}
function nC() {
  let n, r;
  const o = new Promise((i, c) => {
    ((n = i), (r = c));
  });
  return ((o.resolve = n), (o.reject = r), o);
}
function aC(n) {
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
    E = xt(r, o.ripple, o.rippleVisible, i && o.ripplePulsate),
    O = { width: d, height: d, top: -(d / 2) + f, left: -(d / 2) + c },
    C = xt(o.child, b && o.childLeaving, i && o.childPulsate);
  return (
    !p && !b && S(!0),
    x.useEffect(() => {
      if (!p && g != null) {
        const T = setTimeout(g, h);
        return () => {
          clearTimeout(T);
        };
      }
    }, [g, p, h]),
    $.jsx('span', { className: E, style: O, children: $.jsx('span', { className: C }) })
  );
}
const xn = qt('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Df = 550,
  lC = 80,
  rC = ko`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  oC = ko`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  iC = ko`
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
  sC = ct('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  uC = ct(aC, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${xn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${rC};
    animation-duration: ${Df}ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
  }

  &.${xn.ripplePulsate} {
    animation-duration: ${({ theme: n }) => n.transitions.duration.shorter}ms;
  }

  & .${xn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${xn.childLeaving} {
    opacity: 0;
    animation-name: ${oC};
    animation-duration: ${Df}ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
  }

  & .${xn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${iC};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  cC = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiTouchRipple' }),
      { center: c = !1, classes: f = {}, className: d, ...p } = i,
      [g, h] = x.useState([]),
      b = x.useRef(0),
      S = x.useRef(null);
    x.useEffect(() => {
      S.current && (S.current(), (S.current = null));
    }, [g]);
    const E = x.useRef(!1),
      O = sd(),
      C = x.useRef(null),
      T = x.useRef(null),
      D = x.useCallback(
        (w) => {
          const { pulsate: z, rippleX: B, rippleY: P, rippleSize: Q, cb: F } = w;
          (h((J) => [
            ...J,
            $.jsx(
              uC,
              {
                classes: {
                  ripple: xt(f.ripple, xn.ripple),
                  rippleVisible: xt(f.rippleVisible, xn.rippleVisible),
                  ripplePulsate: xt(f.ripplePulsate, xn.ripplePulsate),
                  child: xt(f.child, xn.child),
                  childLeaving: xt(f.childLeaving, xn.childLeaving),
                  childPulsate: xt(f.childPulsate, xn.childPulsate),
                },
                timeout: Df,
                pulsate: z,
                rippleX: B,
                rippleY: P,
                rippleSize: Q,
              },
              b.current,
            ),
          ]),
            (b.current += 1),
            (S.current = F));
        },
        [f],
      ),
      k = x.useCallback(
        (w = {}, z = {}, B = () => {}) => {
          const { pulsate: P = !1, center: Q = c || z.pulsate, fakeElement: F = !1 } = z;
          if (w?.type === 'mousedown' && E.current) {
            E.current = !1;
            return;
          }
          w?.type === 'touchstart' && (E.current = !0);
          const J = F ? null : T.current,
            et = J ? J.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let v, I, V;
          if (
            Q ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            ((v = Math.round(et.width / 2)), (I = Math.round(et.height / 2)));
          else {
            const { clientX: Y, clientY: A } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
            ((v = Math.round(Y - et.left)), (I = Math.round(A - et.top)));
          }
          if (Q)
            ((V = Math.sqrt((2 * et.width ** 2 + et.height ** 2) / 3)), V % 2 === 0 && (V += 1));
          else {
            const Y = Math.max(Math.abs((J ? J.clientWidth : 0) - v), v) * 2 + 2,
              A = Math.max(Math.abs((J ? J.clientHeight : 0) - I), I) * 2 + 2;
            V = Math.sqrt(Y ** 2 + A ** 2);
          }
          w?.touches
            ? C.current === null &&
              ((C.current = () => {
                D({ pulsate: P, rippleX: v, rippleY: I, rippleSize: V, cb: B });
              }),
              O.start(lC, () => {
                C.current && (C.current(), (C.current = null));
              }))
            : D({ pulsate: P, rippleX: v, rippleY: I, rippleSize: V, cb: B });
        },
        [c, D, O],
      ),
      H = x.useCallback(() => {
        k({}, { pulsate: !0 });
      }, [k]),
      N = x.useCallback(
        (w, z) => {
          if ((O.clear(), w?.type === 'touchend' && C.current)) {
            (C.current(),
              (C.current = null),
              O.start(0, () => {
                N(w, z);
              }));
            return;
          }
          ((C.current = null), h((B) => (B.length > 0 ? B.slice(1) : B)), (S.current = z));
        },
        [O],
      );
    return (
      x.useImperativeHandle(o, () => ({ pulsate: H, start: k, stop: N }), [H, k, N]),
      $.jsx(sC, {
        className: xt(xn.root, f.root, d),
        ref: T,
        ...p,
        children: $.jsx(od, { component: null, exit: !0, children: g }),
      })
    );
  });
function fC(n) {
  return Ht('MuiButtonBase', n);
}
const dC = qt('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  pC = (n) => {
    const { disabled: r, focusVisible: o, focusVisibleClassName: i, classes: c } = n,
      d = Gt({ root: ['root', r && 'disabled', o && 'focusVisible'] }, fC, c);
    return (o && i && (d.root += ` ${i}`), d);
  },
  mC = ct('button', { name: 'MuiButtonBase', slot: 'Root' })({
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
    [`&.${dC.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  gs = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiButtonBase' }),
      {
        action: c,
        centerRipple: f = !1,
        children: d,
        className: p,
        component: g = 'button',
        disabled: h = !1,
        disableRipple: b = !1,
        disableTouchRipple: S = !1,
        focusRipple: E = !1,
        focusVisibleClassName: O,
        LinkComponent: C = 'a',
        onBlur: T,
        onClick: D,
        onContextMenu: k,
        onDragLeave: H,
        onFocus: N,
        onFocusVisible: w,
        onKeyDown: z,
        onKeyUp: B,
        onMouseDown: P,
        onMouseLeave: Q,
        onMouseUp: F,
        onTouchEnd: J,
        onTouchMove: et,
        onTouchStart: v,
        tabIndex: I = 0,
        TouchRippleProps: V,
        touchRippleRef: Y,
        type: A,
        ...X
      } = i,
      it = x.useRef(null),
      at = eC(),
      R = Xe(at.ref, Y),
      [K, ot] = x.useState(!1);
    (h && K && ot(!1),
      x.useImperativeHandle(
        c,
        () => ({
          focusVisible: () => {
            (ot(!0), it.current.focus());
          },
        }),
        [],
      ));
    const rt = at.shouldMount && !b && !h;
    x.useEffect(() => {
      K && E && !b && at.pulsate();
    }, [b, E, K, at]);
    const ut = ua(at, 'start', P, S),
      dt = ua(at, 'stop', k, S),
      nt = ua(at, 'stop', H, S),
      pt = ua(at, 'stop', F, S),
      yt = ua(
        at,
        'stop',
        (mt) => {
          (K && mt.preventDefault(), Q && Q(mt));
        },
        S,
      ),
      Tt = ua(at, 'start', v, S),
      vt = ua(at, 'stop', J, S),
      Et = ua(at, 'stop', et, S),
      _t = ua(
        at,
        'stop',
        (mt) => {
          (ey(mt.target) || ot(!1), T && T(mt));
        },
        !1,
      ),
      ye = ml((mt) => {
        (it.current || (it.current = mt.currentTarget),
          ey(mt.target) && (ot(!0), w && w(mt)),
          N && N(mt));
      }),
      Rt = () => {
        const mt = it.current;
        return g && g !== 'button' && !(mt.tagName === 'A' && mt.href);
      },
      Xt = ml((mt) => {
        (E &&
          !mt.repeat &&
          K &&
          mt.key === ' ' &&
          at.stop(mt, () => {
            at.start(mt);
          }),
          mt.target === mt.currentTarget && Rt() && mt.key === ' ' && mt.preventDefault(),
          z && z(mt),
          mt.target === mt.currentTarget &&
            Rt() &&
            mt.key === 'Enter' &&
            !h &&
            (mt.preventDefault(), D && D(mt)));
      }),
      ke = ml((mt) => {
        (E &&
          mt.key === ' ' &&
          K &&
          !mt.defaultPrevented &&
          at.stop(mt, () => {
            at.pulsate(mt);
          }),
          B && B(mt),
          D &&
            mt.target === mt.currentTarget &&
            Rt() &&
            mt.key === ' ' &&
            !mt.defaultPrevented &&
            D(mt));
      });
    let Kt = g;
    Kt === 'button' && (X.href || X.to) && (Kt = C);
    const ce = {};
    Kt === 'button'
      ? ((ce.type = A === void 0 ? 'button' : A), (ce.disabled = h))
      : (!X.href && !X.to && (ce.role = 'button'), h && (ce['aria-disabled'] = h));
    const ue = Xe(o, it),
      me = {
        ...i,
        centerRipple: f,
        component: g,
        disabled: h,
        disableRipple: b,
        disableTouchRipple: S,
        focusRipple: E,
        tabIndex: I,
        focusVisible: K,
      },
      Wt = pC(me);
    return $.jsxs(mC, {
      as: Kt,
      className: xt(Wt.root, p),
      ownerState: me,
      onBlur: _t,
      onClick: D,
      onContextMenu: dt,
      onFocus: ye,
      onKeyDown: Xt,
      onKeyUp: ke,
      onMouseDown: ut,
      onMouseLeave: yt,
      onMouseUp: pt,
      onDragLeave: nt,
      onTouchEnd: vt,
      onTouchMove: Et,
      onTouchStart: Tt,
      ref: ue,
      tabIndex: h ? -1 : I,
      type: A,
      ...ce,
      ...X,
      children: [d, rt ? $.jsx(cC, { ref: R, center: f, ...V }) : null],
    });
  });
function ua(n, r, o, i = !1) {
  return ml((c) => (o && o(c), i || n[r](c), !0));
}
function hC(n) {
  return typeof n.main == 'string';
}
function gC(n, r = []) {
  if (!hC(n)) return !1;
  for (const o of r) if (!n.hasOwnProperty(o) || typeof n[o] != 'string') return !1;
  return !0;
}
function He(n = []) {
  return ([, r]) => r && gC(r, n);
}
function yC(n) {
  return Ht('MuiAlert', n);
}
const ny = qt('MuiAlert', [
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
function vC(n) {
  return Ht('MuiCircularProgress', n);
}
qt('MuiCircularProgress', [
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
const La = 44,
  Nf = ko`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  _f = ko`
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
  bC =
    typeof Nf != 'string'
      ? Xf`
        animation: ${Nf} 1.4s linear infinite;
      `
      : null,
  SC =
    typeof _f != 'string'
      ? Xf`
        animation: ${_f} 1.4s ease-in-out infinite;
      `
      : null,
  xC = (n) => {
    const { classes: r, variant: o, color: i, disableShrink: c } = n,
      f = {
        root: ['root', o, `color${st(i)}`],
        svg: ['svg'],
        circle: ['circle', `circle${st(o)}`, c && 'circleDisableShrink'],
      };
    return Gt(f, vC, r);
  },
  CC = ct('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[o.variant], r[`color${st(o.color)}`]];
    },
  })(
    re(({ theme: n }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: n.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: bC || { animation: `${Nf} 1.4s linear infinite` },
        },
        ...Object.entries(n.palette)
          .filter(He())
          .map(([r]) => ({ props: { color: r }, style: { color: (n.vars || n).palette[r].main } })),
      ],
    })),
  ),
  TC = ct('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  EC = ct('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.circle, r[`circle${st(o.variant)}`], o.disableShrink && r.circleDisableShrink];
    },
  })(
    re(({ theme: n }) => ({
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
          style: SC || { animation: `${_f} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  E0 = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiCircularProgress' }),
      {
        className: c,
        color: f = 'primary',
        disableShrink: d = !1,
        size: p = 40,
        style: g,
        thickness: h = 3.6,
        value: b = 0,
        variant: S = 'indeterminate',
        ...E
      } = i,
      O = { ...i, color: f, disableShrink: d, size: p, thickness: h, value: b, variant: S },
      C = xC(O),
      T = {},
      D = {},
      k = {};
    if (S === 'determinate') {
      const H = 2 * Math.PI * ((La - h) / 2);
      ((T.strokeDasharray = H.toFixed(3)),
        (k['aria-valuenow'] = Math.round(b)),
        (T.strokeDashoffset = `${(((100 - b) / 100) * H).toFixed(3)}px`),
        (D.transform = 'rotate(-90deg)'));
    }
    return $.jsx(CC, {
      className: xt(C.root, c),
      style: { width: p, height: p, ...D, ...g },
      ownerState: O,
      ref: o,
      role: 'progressbar',
      ...k,
      ...E,
      children: $.jsx(TC, {
        className: C.svg,
        ownerState: O,
        viewBox: `${La / 2} ${La / 2} ${La} ${La}`,
        children: $.jsx(EC, {
          className: C.circle,
          style: T,
          ownerState: O,
          cx: La,
          cy: La,
          r: (La - h) / 2,
          fill: 'none',
          strokeWidth: h,
        }),
      }),
    });
  });
function RC(n) {
  return Ht('MuiIconButton', n);
}
const ay = qt('MuiIconButton', [
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
  AC = (n) => {
    const { classes: r, disabled: o, color: i, edge: c, size: f, loading: d } = n,
      p = {
        root: [
          'root',
          d && 'loading',
          o && 'disabled',
          i !== 'default' && `color${st(i)}`,
          c && `edge${st(c)}`,
          `size${st(f)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return Gt(p, RC, r);
  },
  MC = ct(gs, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.loading && r.loading,
        o.color !== 'default' && r[`color${st(o.color)}`],
        o.edge && r[`edge${st(o.edge)}`],
        r[`size${st(o.size)}`],
      ];
    },
  })(
    re(({ theme: n }) => ({
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
    re(({ theme: n }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(n.palette)
          .filter(He())
          .map(([r]) => ({ props: { color: r }, style: { color: (n.vars || n).palette[r].main } })),
        ...Object.entries(n.palette)
          .filter(He())
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
      [`&.${ay.disabled}`]: {
        backgroundColor: 'transparent',
        color: (n.vars || n).palette.action.disabled,
      },
      [`&.${ay.loading}`]: { color: 'transparent' },
    })),
  ),
  OC = ct('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: n }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (n.vars || n).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  zC = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiIconButton' }),
      {
        edge: c = !1,
        children: f,
        className: d,
        color: p = 'default',
        disabled: g = !1,
        disableFocusRipple: h = !1,
        size: b = 'medium',
        id: S,
        loading: E = null,
        loadingIndicator: O,
        ...C
      } = i,
      T = Lo(S),
      D = O ?? $.jsx(E0, { 'aria-labelledby': T, color: 'inherit', size: 16 }),
      k = {
        ...i,
        edge: c,
        color: p,
        disabled: g,
        disableFocusRipple: h,
        loading: E,
        loadingIndicator: D,
        size: b,
      },
      H = AC(k);
    return $.jsxs(MC, {
      id: E ? T : S,
      className: xt(H.root, d),
      centerRipple: !0,
      focusRipple: !h,
      disabled: g || E,
      ref: o,
      ...C,
      ownerState: k,
      children: [
        typeof E == 'boolean' &&
          $.jsx('span', {
            className: H.loadingWrapper,
            style: { display: 'contents' },
            children: $.jsx(OC, { className: H.loadingIndicator, ownerState: k, children: E && D }),
          }),
        f,
      ],
    });
  }),
  wC = Dn(
    $.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
  ),
  DC = Dn(
    $.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
  ),
  NC = Dn(
    $.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
  ),
  _C = Dn(
    $.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
  ),
  BC = Dn(
    $.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
  ),
  kC = (n) => {
    const { variant: r, color: o, severity: i, classes: c } = n,
      f = {
        root: ['root', `color${st(o || i)}`, `${r}${st(o || i)}`, `${r}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return Gt(f, yC, c);
  },
  $C = ct($s, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[o.variant], r[`${o.variant}${st(o.color || o.severity)}`]];
    },
  })(
    re(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? n.darken : n.lighten,
        o = n.palette.mode === 'light' ? n.lighten : n.darken;
      return {
        ...n.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
          ...Object.entries(n.palette)
            .filter(He(['light']))
            .map(([i]) => ({
              props: { colorSeverity: i, variant: 'standard' },
              style: {
                color: n.vars ? n.vars.palette.Alert[`${i}Color`] : r(n.palette[i].light, 0.6),
                backgroundColor: n.vars
                  ? n.vars.palette.Alert[`${i}StandardBg`]
                  : o(n.palette[i].light, 0.9),
                [`& .${ny.icon}`]: n.vars
                  ? { color: n.vars.palette.Alert[`${i}IconColor`] }
                  : { color: n.palette[i].main },
              },
            })),
          ...Object.entries(n.palette)
            .filter(He(['light']))
            .map(([i]) => ({
              props: { colorSeverity: i, variant: 'outlined' },
              style: {
                color: n.vars ? n.vars.palette.Alert[`${i}Color`] : r(n.palette[i].light, 0.6),
                border: `1px solid ${(n.vars || n).palette[i].light}`,
                [`& .${ny.icon}`]: n.vars
                  ? { color: n.vars.palette.Alert[`${i}IconColor`] }
                  : { color: n.palette[i].main },
              },
            })),
          ...Object.entries(n.palette)
            .filter(He(['dark']))
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
  UC = ct('div', { name: 'MuiAlert', slot: 'Icon' })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  jC = ct('div', { name: 'MuiAlert', slot: 'Message' })({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto',
  }),
  LC = ct('div', { name: 'MuiAlert', slot: 'Action' })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  ly = {
    success: $.jsx(wC, { fontSize: 'inherit' }),
    warning: $.jsx(DC, { fontSize: 'inherit' }),
    error: $.jsx(NC, { fontSize: 'inherit' }),
    info: $.jsx(_C, { fontSize: 'inherit' }),
  },
  hf = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiAlert' }),
      {
        action: c,
        children: f,
        className: d,
        closeText: p = 'Close',
        color: g,
        components: h = {},
        componentsProps: b = {},
        icon: S,
        iconMapping: E = ly,
        onClose: O,
        role: C = 'alert',
        severity: T = 'success',
        slotProps: D = {},
        slots: k = {},
        variant: H = 'standard',
        ...N
      } = i,
      w = { ...i, color: g, severity: T, variant: H, colorSeverity: g || T },
      z = kC(w),
      B = {
        slots: { closeButton: h.CloseButton, closeIcon: h.CloseIcon, ...k },
        slotProps: { ...b, ...D },
      },
      [P, Q] = ie('root', {
        ref: o,
        shouldForwardComponentProp: !0,
        className: xt(z.root, d),
        elementType: $C,
        externalForwardedProps: { ...B, ...N },
        ownerState: w,
        additionalProps: { role: C, elevation: 0 },
      }),
      [F, J] = ie('icon', {
        className: z.icon,
        elementType: UC,
        externalForwardedProps: B,
        ownerState: w,
      }),
      [et, v] = ie('message', {
        className: z.message,
        elementType: jC,
        externalForwardedProps: B,
        ownerState: w,
      }),
      [I, V] = ie('action', {
        className: z.action,
        elementType: LC,
        externalForwardedProps: B,
        ownerState: w,
      }),
      [Y, A] = ie('closeButton', { elementType: zC, externalForwardedProps: B, ownerState: w }),
      [X, it] = ie('closeIcon', { elementType: BC, externalForwardedProps: B, ownerState: w });
    return $.jsxs(P, {
      ...Q,
      children: [
        S !== !1 ? $.jsx(F, { ...J, children: S || E[T] || ly[T] }) : null,
        $.jsx(et, { ...v, children: f }),
        c != null ? $.jsx(I, { ...V, children: c }) : null,
        c == null && O
          ? $.jsx(I, {
              ...V,
              children: $.jsx(Y, {
                size: 'small',
                'aria-label': p,
                title: p,
                color: 'inherit',
                onClick: O,
                ...A,
                children: $.jsx(X, { fontSize: 'small', ...it }),
              }),
            })
          : null,
      ],
    });
  });
function HC(n) {
  return Ht('MuiTypography', n);
}
qt('MuiTypography', [
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
const qC = {
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
  GC = N2(),
  VC = (n) => {
    const { align: r, gutterBottom: o, noWrap: i, paragraph: c, variant: f, classes: d } = n,
      p = {
        root: [
          'root',
          f,
          n.align !== 'inherit' && `align${st(r)}`,
          o && 'gutterBottom',
          i && 'noWrap',
          c && 'paragraph',
        ],
      };
    return Gt(p, HC, d);
  },
  YC = ct('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.variant && r[o.variant],
        o.align !== 'inherit' && r[`align${st(o.align)}`],
        o.noWrap && r.noWrap,
        o.gutterBottom && r.gutterBottom,
        o.paragraph && r.paragraph,
      ];
    },
  })(
    re(({ theme: n }) => ({
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
          .filter(He())
          .map(([r]) => ({ props: { color: r }, style: { color: (n.vars || n).palette[r].main } })),
        ...Object.entries(n.palette?.text || {})
          .filter(([, r]) => typeof r == 'string')
          .map(([r]) => ({
            props: { color: `text${st(r)}` },
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
  ry = {
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
  Hn = x.forwardRef(function (r, o) {
    const { color: i, ...c } = Vt({ props: r, name: 'MuiTypography' }),
      f = !qC[i],
      d = GC({ ...c, ...(f && { color: i }) }),
      {
        align: p = 'inherit',
        className: g,
        component: h,
        gutterBottom: b = !1,
        noWrap: S = !1,
        paragraph: E = !1,
        variant: O = 'body1',
        variantMapping: C = ry,
        ...T
      } = d,
      D = {
        ...d,
        align: p,
        color: i,
        className: g,
        component: h,
        gutterBottom: b,
        noWrap: S,
        paragraph: E,
        variant: O,
        variantMapping: C,
      },
      k = h || (E ? 'p' : C[O] || ry[O]) || 'span',
      H = VC(D);
    return $.jsx(YC, {
      as: k,
      ref: o,
      className: xt(H.root, g),
      ...T,
      ownerState: D,
      style: { ...(p !== 'inherit' && { '--Typography-textAlign': p }), ...T.style },
    });
  });
function PC(n) {
  return Ht('MuiAppBar', n);
}
qt('MuiAppBar', [
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
const XC = (n) => {
    const { color: r, position: o, classes: i } = n,
      c = { root: ['root', `color${st(r)}`, `position${st(o)}`] };
    return Gt(c, PC, i);
  },
  oy = (n, r) => (n ? `${n?.replace(')', '')}, ${r})` : r),
  KC = ct($s, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[`position${st(o.position)}`], r[`color${st(o.color)}`]];
    },
  })(
    re(({ theme: n }) => ({
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
          .filter(He(['contrastText']))
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
                ? oy(n.vars.palette.AppBar.darkBg, 'var(--AppBar-background)')
                : null,
              color: n.vars ? oy(n.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
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
  QC = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiAppBar' }),
      {
        className: c,
        color: f = 'primary',
        enableColorOnDark: d = !1,
        position: p = 'fixed',
        ...g
      } = i,
      h = { ...i, color: f, position: p, enableColorOnDark: d },
      b = XC(h);
    return $.jsx(KC, {
      square: !0,
      component: 'header',
      ownerState: h,
      elevation: 4,
      className: xt(b.root, c, p === 'fixed' && 'mui-fixed'),
      ref: o,
      ...g,
    });
  });
function IC(n) {
  const {
      elementType: r,
      externalSlotProps: o,
      ownerState: i,
      skipResolvingSlotProps: c = !1,
      ...f
    } = n,
    d = c ? {} : x0(o, i),
    { props: p, internalRef: g } = T0({ ...f, externalSlotProps: d }),
    h = Xe(g, d?.ref, n.additionalProps?.ref);
  return S0(r, { ...p, ref: h }, i);
}
function Ho(n) {
  return parseInt(x.version, 10) >= 19 ? n?.props?.ref || null : n?.ref || null;
}
function ZC(n) {
  return typeof n == 'function' ? n() : n;
}
const FC = x.forwardRef(function (r, o) {
    const { children: i, container: c, disablePortal: f = !1 } = r,
      [d, p] = x.useState(null),
      g = Xe(x.isValidElement(i) ? Ho(i) : null, o);
    if (
      (da(() => {
        f || p(ZC(c) || document.body);
      }, [c, f]),
      da(() => {
        if (d && !f)
          return (
            Zg(o, d),
            () => {
              Zg(o, null);
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
    return d && y0.createPortal(i, d);
  }),
  WC = Dn(
    $.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    }),
  );
function JC(n) {
  return Ht('MuiChip', n);
}
const Nt = qt('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorDefault',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible',
  ]),
  tT = (n) => {
    const {
        classes: r,
        disabled: o,
        size: i,
        color: c,
        iconColor: f,
        onDelete: d,
        clickable: p,
        variant: g,
      } = n,
      h = {
        root: [
          'root',
          g,
          o && 'disabled',
          `size${st(i)}`,
          `color${st(c)}`,
          p && 'clickable',
          p && `clickableColor${st(c)}`,
          d && 'deletable',
          d && `deletableColor${st(c)}`,
          `${g}${st(c)}`,
        ],
        label: ['label', `label${st(i)}`],
        avatar: ['avatar', `avatar${st(i)}`, `avatarColor${st(c)}`],
        icon: ['icon', `icon${st(i)}`, `iconColor${st(f)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${st(i)}`,
          `deleteIconColor${st(c)}`,
          `deleteIcon${st(g)}Color${st(c)}`,
        ],
      };
    return Gt(h, JC, r);
  },
  eT = ct('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n,
        { color: i, iconColor: c, clickable: f, onDelete: d, size: p, variant: g } = o;
      return [
        { [`& .${Nt.avatar}`]: r.avatar },
        { [`& .${Nt.avatar}`]: r[`avatar${st(p)}`] },
        { [`& .${Nt.avatar}`]: r[`avatarColor${st(i)}`] },
        { [`& .${Nt.icon}`]: r.icon },
        { [`& .${Nt.icon}`]: r[`icon${st(p)}`] },
        { [`& .${Nt.icon}`]: r[`iconColor${st(c)}`] },
        { [`& .${Nt.deleteIcon}`]: r.deleteIcon },
        { [`& .${Nt.deleteIcon}`]: r[`deleteIcon${st(p)}`] },
        { [`& .${Nt.deleteIcon}`]: r[`deleteIconColor${st(i)}`] },
        { [`& .${Nt.deleteIcon}`]: r[`deleteIcon${st(g)}Color${st(i)}`] },
        r.root,
        r[`size${st(p)}`],
        r[`color${st(i)}`],
        f && r.clickable,
        f && i !== 'default' && r[`clickableColor${st(i)})`],
        d && r.deletable,
        d && i !== 'default' && r[`deletableColor${st(i)}`],
        r[g],
        r[`${g}${st(i)}`],
      ];
    },
  })(
    re(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? n.palette.grey[700] : n.palette.grey[300];
      return {
        maxWidth: '100%',
        fontFamily: n.typography.fontFamily,
        fontSize: n.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        lineHeight: 1.5,
        color: (n.vars || n).palette.text.primary,
        backgroundColor: (n.vars || n).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: n.transitions.create(['background-color', 'box-shadow']),
        cursor: 'unset',
        outline: 0,
        textDecoration: 'none',
        border: 0,
        padding: 0,
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        [`&.${Nt.disabled}`]: {
          opacity: (n.vars || n).palette.action.disabledOpacity,
          pointerEvents: 'none',
        },
        [`& .${Nt.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: n.vars ? n.vars.palette.Chip.defaultAvatarColor : r,
          fontSize: n.typography.pxToRem(12),
        },
        [`& .${Nt.avatarColorPrimary}`]: {
          color: (n.vars || n).palette.primary.contrastText,
          backgroundColor: (n.vars || n).palette.primary.dark,
        },
        [`& .${Nt.avatarColorSecondary}`]: {
          color: (n.vars || n).palette.secondary.contrastText,
          backgroundColor: (n.vars || n).palette.secondary.dark,
        },
        [`& .${Nt.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: n.typography.pxToRem(10),
        },
        [`& .${Nt.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${Nt.deleteIcon}`]: {
          WebkitTapHighlightColor: 'transparent',
          color: n.alpha((n.vars || n).palette.text.primary, 0.26),
          fontSize: 22,
          cursor: 'pointer',
          margin: '0 5px 0 -6px',
          '&:hover': { color: n.alpha((n.vars || n).palette.text.primary, 0.4) },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              height: 24,
              [`& .${Nt.icon}`]: { fontSize: 18, marginLeft: 4, marginRight: -4 },
              [`& .${Nt.deleteIcon}`]: { fontSize: 16, marginRight: 4, marginLeft: -4 },
            },
          },
          ...Object.entries(n.palette)
            .filter(He(['contrastText']))
            .map(([o]) => ({
              props: { color: o },
              style: {
                backgroundColor: (n.vars || n).palette[o].main,
                color: (n.vars || n).palette[o].contrastText,
                [`& .${Nt.deleteIcon}`]: {
                  color: n.alpha((n.vars || n).palette[o].contrastText, 0.7),
                  '&:hover, &:active': { color: (n.vars || n).palette[o].contrastText },
                },
              },
            })),
          {
            props: (o) => o.iconColor === o.color,
            style: {
              [`& .${Nt.icon}`]: { color: n.vars ? n.vars.palette.Chip.defaultIconColor : r },
            },
          },
          {
            props: (o) => o.iconColor === o.color && o.color !== 'default',
            style: { [`& .${Nt.icon}`]: { color: 'inherit' } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${Nt.focusVisible}`]: {
                backgroundColor: n.alpha(
                  (n.vars || n).palette.action.selected,
                  `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.focusOpacity}`,
                ),
              },
            },
          },
          ...Object.entries(n.palette)
            .filter(He(['dark']))
            .map(([o]) => ({
              props: { color: o, onDelete: !0 },
              style: { [`&.${Nt.focusVisible}`]: { background: (n.vars || n).palette[o].dark } },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: n.alpha(
                  (n.vars || n).palette.action.selected,
                  `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.hoverOpacity}`,
                ),
              },
              [`&.${Nt.focusVisible}`]: {
                backgroundColor: n.alpha(
                  (n.vars || n).palette.action.selected,
                  `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.focusOpacity}`,
                ),
              },
              '&:active': { boxShadow: (n.vars || n).shadows[1] },
            },
          },
          ...Object.entries(n.palette)
            .filter(He(['dark']))
            .map(([o]) => ({
              props: { color: o, clickable: !0 },
              style: {
                [`&:hover, &.${Nt.focusVisible}`]: {
                  backgroundColor: (n.vars || n).palette[o].dark,
                },
              },
            })),
          {
            props: { variant: 'outlined' },
            style: {
              backgroundColor: 'transparent',
              border: n.vars
                ? `1px solid ${n.vars.palette.Chip.defaultBorder}`
                : `1px solid ${n.palette.mode === 'light' ? n.palette.grey[400] : n.palette.grey[700]}`,
              [`&.${Nt.clickable}:hover`]: { backgroundColor: (n.vars || n).palette.action.hover },
              [`&.${Nt.focusVisible}`]: { backgroundColor: (n.vars || n).palette.action.focus },
              [`& .${Nt.avatar}`]: { marginLeft: 4 },
              [`& .${Nt.avatarSmall}`]: { marginLeft: 2 },
              [`& .${Nt.icon}`]: { marginLeft: 4 },
              [`& .${Nt.iconSmall}`]: { marginLeft: 2 },
              [`& .${Nt.deleteIcon}`]: { marginRight: 5 },
              [`& .${Nt.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(n.palette)
            .filter(He())
            .map(([o]) => ({
              props: { variant: 'outlined', color: o },
              style: {
                color: (n.vars || n).palette[o].main,
                border: `1px solid ${n.alpha((n.vars || n).palette[o].main, 0.7)}`,
                [`&.${Nt.clickable}:hover`]: {
                  backgroundColor: n.alpha(
                    (n.vars || n).palette[o].main,
                    (n.vars || n).palette.action.hoverOpacity,
                  ),
                },
                [`&.${Nt.focusVisible}`]: {
                  backgroundColor: n.alpha(
                    (n.vars || n).palette[o].main,
                    (n.vars || n).palette.action.focusOpacity,
                  ),
                },
                [`& .${Nt.deleteIcon}`]: {
                  color: n.alpha((n.vars || n).palette[o].main, 0.7),
                  '&:hover, &:active': { color: (n.vars || n).palette[o].main },
                },
              },
            })),
        ],
      };
    }),
  ),
  nT = ct('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n,
        { size: i } = o;
      return [r.label, r[`label${st(i)}`]];
    },
  })({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    variants: [
      { props: { variant: 'outlined' }, style: { paddingLeft: 11, paddingRight: 11 } },
      { props: { size: 'small' }, style: { paddingLeft: 8, paddingRight: 8 } },
      { props: { size: 'small', variant: 'outlined' }, style: { paddingLeft: 7, paddingRight: 7 } },
    ],
  });
function iy(n) {
  return n.key === 'Backspace' || n.key === 'Delete';
}
const aT = x.forwardRef(function (r, o) {
  const i = Vt({ props: r, name: 'MuiChip' }),
    {
      avatar: c,
      className: f,
      clickable: d,
      color: p = 'default',
      component: g,
      deleteIcon: h,
      disabled: b = !1,
      icon: S,
      label: E,
      onClick: O,
      onDelete: C,
      onKeyDown: T,
      onKeyUp: D,
      size: k = 'medium',
      variant: H = 'filled',
      tabIndex: N,
      skipFocusWhenDisabled: w = !1,
      slots: z = {},
      slotProps: B = {},
      ...P
    } = i,
    Q = x.useRef(null),
    F = Xe(Q, o),
    J = (nt) => {
      (nt.stopPropagation(), C && C(nt));
    },
    et = (nt) => {
      (nt.currentTarget === nt.target && iy(nt) && nt.preventDefault(), T && T(nt));
    },
    v = (nt) => {
      (nt.currentTarget === nt.target && C && iy(nt) && C(nt), D && D(nt));
    },
    I = d !== !1 && O ? !0 : d,
    V = I || C ? gs : g || 'div',
    Y = {
      ...i,
      component: V,
      disabled: b,
      size: k,
      color: p,
      iconColor: (x.isValidElement(S) && S.props.color) || p,
      onDelete: !!C,
      clickable: I,
      variant: H,
    },
    A = tT(Y),
    X =
      V === gs
        ? {
            component: g || 'div',
            focusVisibleClassName: A.focusVisible,
            ...(C && { disableRipple: !0 }),
          }
        : {};
  let it = null;
  C &&
    (it =
      h && x.isValidElement(h)
        ? x.cloneElement(h, { className: xt(h.props.className, A.deleteIcon), onClick: J })
        : $.jsx(WC, { className: A.deleteIcon, onClick: J }));
  let at = null;
  c &&
    x.isValidElement(c) &&
    (at = x.cloneElement(c, { className: xt(A.avatar, c.props.className) }));
  let R = null;
  S && x.isValidElement(S) && (R = x.cloneElement(S, { className: xt(A.icon, S.props.className) }));
  const K = { slots: z, slotProps: B },
    [ot, rt] = ie('root', {
      elementType: eT,
      externalForwardedProps: { ...K, ...P },
      ownerState: Y,
      shouldForwardComponentProp: !0,
      ref: F,
      className: xt(A.root, f),
      additionalProps: { disabled: I && b ? !0 : void 0, tabIndex: w && b ? -1 : N, ...X },
      getSlotProps: (nt) => ({
        ...nt,
        onClick: (pt) => {
          (nt.onClick?.(pt), O?.(pt));
        },
        onKeyDown: (pt) => {
          (nt.onKeyDown?.(pt), et(pt));
        },
        onKeyUp: (pt) => {
          (nt.onKeyUp?.(pt), v(pt));
        },
      }),
    }),
    [ut, dt] = ie('label', {
      elementType: nT,
      externalForwardedProps: K,
      ownerState: Y,
      className: A.label,
    });
  return $.jsxs(ot, { as: V, ...rt, children: [at || R, $.jsx(ut, { ...dt, children: E }), it] });
});
function es(n) {
  return parseInt(n, 10) || 0;
}
const lT = {
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
function rT(n) {
  for (const r in n) return !1;
  return !0;
}
function sy(n) {
  return rT(n) || (n.outerHeightStyle === 0 && !n.overflowing);
}
const oT = x.forwardRef(function (r, o) {
  const { onChange: i, maxRows: c, minRows: f = 1, style: d, value: p, ...g } = r,
    { current: h } = x.useRef(p != null),
    b = x.useRef(null),
    S = Xe(o, b),
    E = x.useRef(null),
    O = x.useRef(null),
    C = x.useCallback(() => {
      const N = b.current,
        w = O.current;
      if (!N || !w) return;
      const B = pa(N).getComputedStyle(N);
      if (B.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      ((w.style.width = B.width),
        (w.value = N.value || r.placeholder || 'x'),
        w.value.slice(-1) ===
          `
` && (w.value += ' '));
      const P = B.boxSizing,
        Q = es(B.paddingBottom) + es(B.paddingTop),
        F = es(B.borderBottomWidth) + es(B.borderTopWidth),
        J = w.scrollHeight;
      w.value = 'x';
      const et = w.scrollHeight;
      let v = J;
      (f && (v = Math.max(Number(f) * et, v)),
        c && (v = Math.min(Number(c) * et, v)),
        (v = Math.max(v, et)));
      const I = v + (P === 'border-box' ? Q + F : 0),
        V = Math.abs(v - J) <= 1;
      return { outerHeightStyle: I, overflowing: V };
    }, [c, f, r.placeholder]),
    T = ml(() => {
      const N = b.current,
        w = C();
      if (!N || !w || sy(w)) return !1;
      const z = w.outerHeightStyle;
      return E.current != null && E.current !== z;
    }),
    D = x.useCallback(() => {
      const N = b.current,
        w = C();
      if (!N || !w || sy(w)) return;
      const z = w.outerHeightStyle;
      (E.current !== z && ((E.current = z), (N.style.height = `${z}px`)),
        (N.style.overflow = w.overflowing ? 'hidden' : ''));
    }, [C]),
    k = x.useRef(-1);
  (da(() => {
    const N = m0(D),
      w = b?.current;
    if (!w) return;
    const z = pa(w);
    z.addEventListener('resize', N);
    let B;
    return (
      typeof ResizeObserver < 'u' &&
        ((B = new ResizeObserver(() => {
          T() &&
            (B.unobserve(w),
            cancelAnimationFrame(k.current),
            D(),
            (k.current = requestAnimationFrame(() => {
              B.observe(w);
            })));
        })),
        B.observe(w)),
      () => {
        (N.clear(),
          cancelAnimationFrame(k.current),
          z.removeEventListener('resize', N),
          B && B.disconnect());
      }
    );
  }, [C, D, T]),
    da(() => {
      D();
    }));
  const H = (N) => {
    h || D();
    const w = N.target,
      z = w.value.length,
      B = w.value.endsWith(`
`),
      P = w.selectionStart === z;
    (B && P && w.setSelectionRange(z, z), i && i(N));
  };
  return $.jsxs(x.Fragment, {
    children: [
      $.jsx('textarea', { value: p, onChange: H, ref: S, rows: f, style: d, ...g }),
      $.jsx('textarea', {
        'aria-hidden': !0,
        className: r.className,
        readOnly: !0,
        ref: O,
        tabIndex: -1,
        style: { ...lT.shadow, ...d, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function pr({ props: n, states: r, muiFormControl: o }) {
  return r.reduce((i, c) => ((i[c] = n[c]), o && typeof n[c] > 'u' && (i[c] = o[c]), i), {});
}
const ud = x.createContext(void 0);
function mr() {
  return x.useContext(ud);
}
function uy(n) {
  return n != null && !(Array.isArray(n) && n.length === 0);
}
function ys(n, r = !1) {
  return (
    n && ((uy(n.value) && n.value !== '') || (r && uy(n.defaultValue) && n.defaultValue !== ''))
  );
}
function iT(n) {
  return n.startAdornment;
}
function sT(n) {
  return Ht('MuiInputBase', n);
}
const fr = qt('MuiInputBase', [
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
var cy;
const Us = (n, r) => {
    const { ownerState: o } = n;
    return [
      r.root,
      o.formControl && r.formControl,
      o.startAdornment && r.adornedStart,
      o.endAdornment && r.adornedEnd,
      o.error && r.error,
      o.size === 'small' && r.sizeSmall,
      o.multiline && r.multiline,
      o.color && r[`color${st(o.color)}`],
      o.fullWidth && r.fullWidth,
      o.hiddenLabel && r.hiddenLabel,
    ];
  },
  js = (n, r) => {
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
  uT = (n) => {
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
        size: E,
        startAdornment: O,
        type: C,
      } = n,
      T = {
        root: [
          'root',
          `color${st(o)}`,
          i && 'disabled',
          c && 'error',
          g && 'fullWidth',
          d && 'focused',
          p && 'formControl',
          E && E !== 'medium' && `size${st(E)}`,
          b && 'multiline',
          O && 'adornedStart',
          f && 'adornedEnd',
          h && 'hiddenLabel',
          S && 'readOnly',
        ],
        input: [
          'input',
          i && 'disabled',
          C === 'search' && 'inputTypeSearch',
          b && 'inputMultiline',
          E === 'small' && 'inputSizeSmall',
          h && 'inputHiddenLabel',
          O && 'inputAdornedStart',
          f && 'inputAdornedEnd',
          S && 'readOnly',
        ],
      };
    return Gt(T, sT, r);
  },
  Ls = ct('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: Us })(
    re(({ theme: n }) => ({
      ...n.typography.body1,
      color: (n.vars || n).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${fr.disabled}`]: { color: (n.vars || n).palette.text.disabled, cursor: 'default' },
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
  Hs = ct('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: js })(
    re(({ theme: n }) => {
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
        [`label[data-shrink=false] + .${fr.formControl} &`]: {
          '&::-webkit-input-placeholder': i,
          '&::-moz-placeholder': i,
          '&::-ms-input-placeholder': i,
          '&:focus::-webkit-input-placeholder': c,
          '&:focus::-moz-placeholder': c,
          '&:focus::-ms-input-placeholder': c,
        },
        [`&.${fr.disabled}`]: {
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
  fy = ld({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  cd = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiInputBase' }),
      {
        'aria-describedby': c,
        autoComplete: f,
        autoFocus: d,
        className: p,
        color: g,
        components: h = {},
        componentsProps: b = {},
        defaultValue: S,
        disabled: E,
        disableInjectingGlobalStyles: O,
        endAdornment: C,
        error: T,
        fullWidth: D = !1,
        id: k,
        inputComponent: H = 'input',
        inputProps: N = {},
        inputRef: w,
        margin: z,
        maxRows: B,
        minRows: P,
        multiline: Q = !1,
        name: F,
        onBlur: J,
        onChange: et,
        onClick: v,
        onFocus: I,
        onKeyDown: V,
        onKeyUp: Y,
        placeholder: A,
        readOnly: X,
        renderSuffix: it,
        rows: at,
        size: R,
        slotProps: K = {},
        slots: ot = {},
        startAdornment: rt,
        type: ut = 'text',
        value: dt,
        ...nt
      } = i,
      pt = N.value != null ? N.value : dt,
      { current: yt } = x.useRef(pt != null),
      Tt = x.useRef(),
      vt = x.useCallback((te) => {}, []),
      Et = Xe(Tt, w, N.ref, vt),
      [_t, ye] = x.useState(!1),
      Rt = mr(),
      Xt = pr({
        props: i,
        muiFormControl: Rt,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    ((Xt.focused = Rt ? Rt.focused : _t),
      x.useEffect(() => {
        !Rt && E && _t && (ye(!1), J && J());
      }, [Rt, E, _t, J]));
    const ke = Rt && Rt.onFilled,
      Kt = Rt && Rt.onEmpty,
      ce = x.useCallback(
        (te) => {
          ys(te) ? ke && ke() : Kt && Kt();
        },
        [ke, Kt],
      );
    da(() => {
      yt && ce({ value: pt });
    }, [pt, ce, yt]);
    const ue = (te) => {
        (I && I(te), N.onFocus && N.onFocus(te), Rt && Rt.onFocus ? Rt.onFocus(te) : ye(!0));
      },
      me = (te) => {
        (J && J(te), N.onBlur && N.onBlur(te), Rt && Rt.onBlur ? Rt.onBlur(te) : ye(!1));
      },
      Wt = (te, ...ma) => {
        if (!yt) {
          const Xn = te.target || Tt.current;
          if (Xn == null) throw new Error(ca(1));
          ce({ value: Xn.value });
        }
        (N.onChange && N.onChange(te, ...ma), et && et(te, ...ma));
      };
    x.useEffect(() => {
      ce(Tt.current);
    }, []);
    const mt = (te) => {
      (Tt.current && te.currentTarget === te.target && Tt.current.focus(), v && v(te));
    };
    let en = H,
      ve = N;
    Q &&
      en === 'input' &&
      (at
        ? (ve = { type: void 0, minRows: at, maxRows: at, ...ve })
        : (ve = { type: void 0, maxRows: B, minRows: P, ...ve }),
      (en = oT));
    const En = (te) => {
      ce(te.animationName === 'mui-auto-fill-cancel' ? Tt.current : { value: 'x' });
    };
    x.useEffect(() => {
      Rt && Rt.setAdornedStart(!!rt);
    }, [Rt, rt]);
    const fe = {
        ...i,
        color: Xt.color || 'primary',
        disabled: Xt.disabled,
        endAdornment: C,
        error: Xt.error,
        focused: Xt.focused,
        formControl: Rt,
        fullWidth: D,
        hiddenLabel: Xt.hiddenLabel,
        multiline: Q,
        size: Xt.size,
        startAdornment: rt,
        type: ut,
      },
      At = uT(fe),
      Jt = ot.root || h.Root || Ls,
      $t = K.root || b.root || {},
      Ke = ot.input || h.Input || Hs;
    return (
      (ve = { ...ve, ...(K.input ?? b.input) }),
      $.jsxs(x.Fragment, {
        children: [
          !O && typeof fy == 'function' && (cy || (cy = $.jsx(fy, {}))),
          $.jsxs(Jt, {
            ...$t,
            ref: o,
            onClick: mt,
            ...nt,
            ...(!ms(Jt) && { ownerState: { ...fe, ...$t.ownerState } }),
            className: xt(At.root, $t.className, p, X && 'MuiInputBase-readOnly'),
            children: [
              rt,
              $.jsx(ud.Provider, {
                value: null,
                children: $.jsx(Ke, {
                  'aria-invalid': Xt.error,
                  'aria-describedby': c,
                  autoComplete: f,
                  autoFocus: d,
                  defaultValue: S,
                  disabled: Xt.disabled,
                  id: k,
                  onAnimationStart: En,
                  name: F,
                  placeholder: A,
                  readOnly: X,
                  required: Xt.required,
                  rows: at,
                  value: pt,
                  onKeyDown: V,
                  onKeyUp: Y,
                  type: ut,
                  ...ve,
                  ...(!ms(Ke) && { as: en, ownerState: { ...fe, ...ve.ownerState } }),
                  ref: Et,
                  className: xt(At.input, ve.className, X && 'MuiInputBase-readOnly'),
                  onBlur: me,
                  onChange: Wt,
                  onFocus: ue,
                }),
              }),
              C,
              it ? it({ ...Xt, startAdornment: rt }) : null,
            ],
          }),
        ],
      })
    );
  });
function cT(n) {
  return Ht('MuiInput', n);
}
const go = { ...fr, ...qt('MuiInput', ['root', 'underline', 'input']) };
function fT(n) {
  return Ht('MuiOutlinedInput', n);
}
const Ln = { ...fr, ...qt('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) };
function dT(n) {
  return Ht('MuiFilledInput', n);
}
const sl = {
    ...fr,
    ...qt('MuiFilledInput', [
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
  pT = Dn($.jsx('path', { d: 'M7 10l5 5 5-5z' })),
  mT = Dn(
    $.jsx('path', {
      d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    }),
  );
function hT(n) {
  return Ht('MuiAvatar', n);
}
qt('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
const gT = (n) => {
    const { classes: r, variant: o, colorDefault: i } = n;
    return Gt(
      { root: ['root', o, i && 'colorDefault'], img: ['img'], fallback: ['fallback'] },
      hT,
      r,
    );
  },
  yT = ct('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[o.variant], o.colorDefault && r.colorDefault];
    },
  })(
    re(({ theme: n }) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: n.typography.fontFamily,
      fontSize: n.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none',
      variants: [
        {
          props: { variant: 'rounded' },
          style: { borderRadius: (n.vars || n).shape.borderRadius },
        },
        { props: { variant: 'square' }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (n.vars || n).palette.background.default,
            ...(n.vars
              ? { backgroundColor: n.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: n.palette.grey[400],
                  ...n.applyStyles('dark', { backgroundColor: n.palette.grey[600] }),
                }),
          },
        },
      ],
    })),
  ),
  vT = ct('img', { name: 'MuiAvatar', slot: 'Img' })({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent',
    textIndent: 1e4,
  }),
  bT = ct(mT, { name: 'MuiAvatar', slot: 'Fallback' })({ width: '75%', height: '75%' });
function ST({ crossOrigin: n, referrerPolicy: r, src: o, srcSet: i }) {
  const [c, f] = x.useState(!1);
  return (
    x.useEffect(() => {
      if (!o && !i) return;
      f(!1);
      let d = !0;
      const p = new Image();
      return (
        (p.onload = () => {
          d && f('loaded');
        }),
        (p.onerror = () => {
          d && f('error');
        }),
        (p.crossOrigin = n),
        (p.referrerPolicy = r),
        (p.src = o),
        i && (p.srcset = i),
        () => {
          d = !1;
        }
      );
    }, [n, r, o, i]),
    c
  );
}
const xT = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiAvatar' }),
      {
        alt: c,
        children: f,
        className: d,
        component: p = 'div',
        slots: g = {},
        slotProps: h = {},
        imgProps: b,
        sizes: S,
        src: E,
        srcSet: O,
        variant: C = 'circular',
        ...T
      } = i;
    let D = null;
    const k = { ...i, component: p, variant: C },
      H = ST({ ...b, ...(typeof h.img == 'function' ? h.img(k) : h.img), src: E, srcSet: O }),
      N = E || O,
      w = N && H !== 'error';
    ((k.colorDefault = !w), delete k.ownerState);
    const z = gT(k),
      [B, P] = ie('root', {
        ref: o,
        className: xt(z.root, d),
        elementType: yT,
        externalForwardedProps: { slots: g, slotProps: h, component: p, ...T },
        ownerState: k,
      }),
      [Q, F] = ie('img', {
        className: z.img,
        elementType: vT,
        externalForwardedProps: { slots: g, slotProps: { img: { ...b, ...h.img } } },
        additionalProps: { alt: c, src: E, srcSet: O, sizes: S },
        ownerState: k,
      }),
      [J, et] = ie('fallback', {
        className: z.fallback,
        elementType: bT,
        externalForwardedProps: { slots: g, slotProps: h },
        shouldForwardComponentProp: !0,
        ownerState: k,
      });
    return (
      w
        ? (D = $.jsx(Q, { ...F }))
        : f || f === 0
          ? (D = f)
          : N && c
            ? (D = c[0])
            : (D = $.jsx(J, { ...et })),
      $.jsx(B, { ...P, children: D })
    );
  }),
  CT = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  TT = x.forwardRef(function (r, o) {
    const i = ks(),
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
        onEntering: E,
        onExit: O,
        onExited: C,
        onExiting: T,
        style: D,
        timeout: k = c,
        TransitionComponent: H = Nn,
        ...N
      } = r,
      w = x.useRef(null),
      z = Xe(w, Ho(p), o),
      B = (V) => (Y) => {
        if (V) {
          const A = w.current;
          Y === void 0 ? V(A) : V(A, Y);
        }
      },
      P = B(E),
      Q = B((V, Y) => {
        b0(V);
        const A = cr({ style: D, timeout: k, easing: g }, { mode: 'enter' });
        ((V.style.webkitTransition = i.transitions.create('opacity', A)),
          (V.style.transition = i.transitions.create('opacity', A)),
          b && b(V, Y));
      }),
      F = B(S),
      J = B(T),
      et = B((V) => {
        const Y = cr({ style: D, timeout: k, easing: g }, { mode: 'exit' });
        ((V.style.webkitTransition = i.transitions.create('opacity', Y)),
          (V.style.transition = i.transitions.create('opacity', Y)),
          O && O(V));
      }),
      v = B(C),
      I = (V) => {
        f && f(w.current, V);
      };
    return $.jsx(H, {
      appear: d,
      in: h,
      nodeRef: w,
      onEnter: Q,
      onEntered: F,
      onEntering: P,
      onExit: et,
      onExited: v,
      onExiting: J,
      addEndListener: I,
      timeout: k,
      ...N,
      children: (V, { ownerState: Y, ...A }) =>
        x.cloneElement(p, {
          style: {
            opacity: 0,
            visibility: V === 'exited' && !h ? 'hidden' : void 0,
            ...CT[V],
            ...D,
            ...p.props.style,
          },
          ref: z,
          ...A,
        }),
    });
  });
function ET(n) {
  return Ht('MuiBackdrop', n);
}
qt('MuiBackdrop', ['root', 'invisible']);
const RT = (n) => {
    const { classes: r, invisible: o } = n;
    return Gt({ root: ['root', o && 'invisible'] }, ET, r);
  },
  AT = ct('div', {
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
  MT = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiBackdrop' }),
      {
        children: c,
        className: f,
        component: d = 'div',
        invisible: p = !1,
        open: g,
        components: h = {},
        componentsProps: b = {},
        slotProps: S = {},
        slots: E = {},
        TransitionComponent: O,
        transitionDuration: C,
        ...T
      } = i,
      D = { ...i, component: d, invisible: p },
      k = RT(D),
      H = { transition: O, root: h.Root, ...E },
      N = { ...b, ...S },
      w = { component: d, slots: H, slotProps: N },
      [z, B] = ie('root', {
        elementType: AT,
        externalForwardedProps: w,
        className: xt(k.root, f),
        ownerState: D,
      }),
      [P, Q] = ie('transition', { elementType: TT, externalForwardedProps: w, ownerState: D });
    return $.jsx(P, {
      in: g,
      timeout: C,
      ...T,
      ...Q,
      children: $.jsx(z, { 'aria-hidden': !0, ...B, classes: k, ref: o, children: c }),
    });
  }),
  OT = qt('MuiBox', ['root']),
  zT = Bs(),
  Co = nx({
    themeId: Yn,
    defaultTheme: zT,
    defaultClassName: OT.root,
    generateClassName: Qy.generate,
  });
function wT(n) {
  return Ht('MuiButton', n);
}
const ul = qt('MuiButton', [
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
  DT = x.createContext({}),
  NT = x.createContext(void 0),
  _T = (n) => {
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
          `${f}${st(r)}`,
          `size${st(c)}`,
          `${f}Size${st(c)}`,
          `color${st(r)}`,
          o && 'disableElevation',
          i && 'fullWidth',
          d && `loadingPosition${st(p)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${st(c)}`],
        endIcon: ['icon', 'endIcon', `iconSize${st(c)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      b = Gt(h, wT, g);
    return { ...g, ...b };
  },
  R0 = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  BT = ct(gs, {
    shouldForwardProp: (n) => wn(n) || n === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        r[o.variant],
        r[`${o.variant}${st(o.color)}`],
        r[`size${st(o.size)}`],
        r[`${o.variant}Size${st(o.size)}`],
        o.color === 'inherit' && r.colorInherit,
        o.disableElevation && r.disableElevation,
        o.fullWidth && r.fullWidth,
        o.loading && r.loading,
      ];
    },
  })(
    re(({ theme: n }) => {
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
        [`&.${ul.disabled}`]: { color: (n.vars || n).palette.action.disabled },
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
              [`&.${ul.focusVisible}`]: { boxShadow: (n.vars || n).shadows[6] },
              [`&.${ul.disabled}`]: {
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
              [`&.${ul.disabled}`]: {
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
            .filter(He())
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
              [`&.${ul.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${ul.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: n.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: n.transitions.duration.short,
              }),
              [`&.${ul.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    }),
  ),
  kT = ct('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.startIcon, o.loading && r.startIconLoadingStart, r[`iconSize${st(o.size)}`]];
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
      ...R0,
    ],
  })),
  $T = ct('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.endIcon, o.loading && r.endIconLoadingEnd, r[`iconSize${st(o.size)}`]];
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
      ...R0,
    ],
  })),
  UT = ct('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: n }) => ({
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
  dy = ct('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  jT = x.forwardRef(function (r, o) {
    const i = x.useContext(DT),
      c = x.useContext(NT),
      f = wo(i, r),
      d = Vt({ props: f, name: 'MuiButton' }),
      {
        children: p,
        color: g = 'primary',
        component: h = 'button',
        className: b,
        disabled: S = !1,
        disableElevation: E = !1,
        disableFocusRipple: O = !1,
        endIcon: C,
        focusVisibleClassName: T,
        fullWidth: D = !1,
        id: k,
        loading: H = null,
        loadingIndicator: N,
        loadingPosition: w = 'center',
        size: z = 'medium',
        startIcon: B,
        type: P,
        variant: Q = 'text',
        ...F
      } = d,
      J = Lo(k),
      et = N ?? $.jsx(E0, { 'aria-labelledby': J, color: 'inherit', size: 16 }),
      v = {
        ...d,
        color: g,
        component: h,
        disabled: S,
        disableElevation: E,
        disableFocusRipple: O,
        fullWidth: D,
        loading: H,
        loadingIndicator: et,
        loadingPosition: w,
        size: z,
        type: P,
        variant: Q,
      },
      I = _T(v),
      V =
        (B || (H && w === 'start')) &&
        $.jsx(kT, {
          className: I.startIcon,
          ownerState: v,
          children: B || $.jsx(dy, { className: I.loadingIconPlaceholder, ownerState: v }),
        }),
      Y =
        (C || (H && w === 'end')) &&
        $.jsx($T, {
          className: I.endIcon,
          ownerState: v,
          children: C || $.jsx(dy, { className: I.loadingIconPlaceholder, ownerState: v }),
        }),
      A = c || '',
      X =
        typeof H == 'boolean'
          ? $.jsx('span', {
              className: I.loadingWrapper,
              style: { display: 'contents' },
              children:
                H && $.jsx(UT, { className: I.loadingIndicator, ownerState: v, children: et }),
            })
          : null;
    return $.jsxs(BT, {
      ownerState: v,
      className: xt(i.className, I.root, b, A),
      component: h,
      disabled: S || H,
      focusRipple: !O,
      focusVisibleClassName: xt(I.focusVisible, T),
      ref: o,
      type: P,
      id: H ? J : k,
      ...F,
      classes: I,
      children: [V, w !== 'end' && X, p, w === 'end' && X, Y],
    });
  }),
  LT = Ix({
    createStyledComponent: ct('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (n, r) => {
        const { ownerState: o } = n;
        return [
          r.root,
          r[`maxWidth${st(String(o.maxWidth))}`],
          o.fixed && r.fixed,
          o.disableGutters && r.disableGutters,
        ];
      },
    }),
    useThemeProps: (n) => Vt({ props: n, name: 'MuiContainer' }),
  }),
  Bf = typeof ld({}) == 'function',
  HT = (n, r) => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    WebkitTextSizeAdjust: '100%',
    ...(r && !n.vars && { colorScheme: n.palette.mode }),
  }),
  qT = (n) => ({
    color: (n.vars || n).palette.text.primary,
    ...n.typography.body1,
    backgroundColor: (n.vars || n).palette.background.default,
    '@media print': { backgroundColor: (n.vars || n).palette.common.white },
  }),
  A0 = (n, r = !1) => {
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
      html: HT(n, r),
      '*, *::before, *::after': { boxSizing: 'inherit' },
      'strong, b': { fontWeight: n.typography.fontWeightBold },
      body: {
        margin: 0,
        ...qT(n),
        '&::backdrop': { backgroundColor: (n.vars || n).palette.background.default },
      },
      ...o,
    };
    const c = n.components?.MuiCssBaseline?.styleOverrides;
    return (c && (i = [i, c]), i);
  },
  ss = 'mui-ecs',
  GT = (n) => {
    const r = A0(n, !1),
      o = Array.isArray(r) ? r[0] : r;
    return (
      !n.vars && o && (o.html[`:root:has(${ss})`] = { colorScheme: n.palette.mode }),
      n.colorSchemes &&
        Object.entries(n.colorSchemes).forEach(([i, c]) => {
          const f = n.getColorSchemeSelector(i);
          f.startsWith('@')
            ? (o[f] = { [`:root:not(:has(.${ss}))`]: { colorScheme: c.palette?.mode } })
            : (o[f.replace(/\s*&/, '')] = {
                [`&:not(:has(.${ss}))`]: { colorScheme: c.palette?.mode },
              });
        }),
      r
    );
  },
  VT = ld(Bf ? ({ theme: n, enableColorScheme: r }) => A0(n, r) : ({ theme: n }) => GT(n));
function YT(n) {
  const r = Vt({ props: n, name: 'MuiCssBaseline' }),
    { children: o, enableColorScheme: i = !1 } = r;
  return $.jsxs(x.Fragment, {
    children: [
      Bf && $.jsx(VT, { enableColorScheme: i }),
      !Bf && !i && $.jsx('span', { className: ss, style: { display: 'none' } }),
      o,
    ],
  });
}
function M0(n = window) {
  const r = n.document.documentElement.clientWidth;
  return n.innerWidth - r;
}
function PT(n) {
  const r = zn(n);
  return r.body === n
    ? pa(n).innerWidth > r.documentElement.clientWidth
    : n.scrollHeight > n.clientHeight;
}
function Ro(n, r) {
  r ? n.setAttribute('aria-hidden', 'true') : n.removeAttribute('aria-hidden');
}
function py(n) {
  return parseInt(pa(n).getComputedStyle(n).paddingRight, 10) || 0;
}
function XT(n) {
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
function my(n, r, o, i, c) {
  const f = [r, o, ...i];
  [].forEach.call(n.children, (d) => {
    const p = !f.includes(d),
      g = !XT(d);
    p && g && Ro(d, c);
  });
}
function gf(n, r) {
  let o = -1;
  return (n.some((i, c) => (r(i) ? ((o = c), !0) : !1)), o);
}
function KT(n, r) {
  const o = [],
    i = n.container;
  if (!r.disableScrollLock) {
    if (PT(i)) {
      const d = M0(pa(i));
      (o.push({ value: i.style.paddingRight, property: 'padding-right', el: i }),
        (i.style.paddingRight = `${py(i) + d}px`));
      const p = zn(i).querySelectorAll('.mui-fixed');
      [].forEach.call(p, (g) => {
        (o.push({ value: g.style.paddingRight, property: 'padding-right', el: g }),
          (g.style.paddingRight = `${py(g) + d}px`));
      });
    }
    let f;
    if (i.parentNode instanceof DocumentFragment) f = zn(i).body;
    else {
      const d = i.parentElement,
        p = pa(i);
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
function QT(n) {
  const r = [];
  return (
    [].forEach.call(n.children, (o) => {
      o.getAttribute('aria-hidden') === 'true' && r.push(o);
    }),
    r
  );
}
class IT {
  constructor() {
    ((this.modals = []), (this.containers = []));
  }
  add(r, o) {
    let i = this.modals.indexOf(r);
    if (i !== -1) return i;
    ((i = this.modals.length), this.modals.push(r), r.modalRef && Ro(r.modalRef, !1));
    const c = QT(o);
    my(o, r.mount, r.modalRef, c, !0);
    const f = gf(this.containers, (d) => d.container === o);
    return f !== -1
      ? (this.containers[f].modals.push(r), i)
      : (this.containers.push({ modals: [r], container: o, restore: null, hiddenSiblings: c }), i);
  }
  mount(r, o) {
    const i = gf(this.containers, (f) => f.modals.includes(r)),
      c = this.containers[i];
    c.restore || (c.restore = KT(c, o));
  }
  remove(r, o = !0) {
    const i = this.modals.indexOf(r);
    if (i === -1) return i;
    const c = gf(this.containers, (d) => d.modals.includes(r)),
      f = this.containers[c];
    if ((f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(i, 1), f.modals.length === 0))
      (f.restore && f.restore(),
        r.modalRef && Ro(r.modalRef, o),
        my(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1),
        this.containers.splice(c, 1));
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && Ro(d.modalRef, !1);
    }
    return i;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const ZT = [
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
function FT(n) {
  const r = parseInt(n.getAttribute('tabindex') || '', 10);
  return Number.isNaN(r)
    ? n.contentEditable === 'true' ||
      ((n.nodeName === 'AUDIO' || n.nodeName === 'VIDEO' || n.nodeName === 'DETAILS') &&
        n.getAttribute('tabindex') === null)
      ? 0
      : n.tabIndex
    : r;
}
function WT(n) {
  if (n.tagName !== 'INPUT' || n.type !== 'radio' || !n.name) return !1;
  const r = (i) => n.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let o = r(`[name="${n.name}"]:checked`);
  return (o || (o = r(`[name="${n.name}"]`)), o !== n);
}
function JT(n) {
  return !(n.disabled || (n.tagName === 'INPUT' && n.type === 'hidden') || WT(n));
}
function tE(n) {
  const r = [],
    o = [];
  return (
    Array.from(n.querySelectorAll(ZT)).forEach((i, c) => {
      const f = FT(i);
      f === -1 ||
        !JT(i) ||
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
function eE() {
  return !0;
}
function nE(n) {
  const {
      children: r,
      disableAutoFocus: o = !1,
      disableEnforceFocus: i = !1,
      disableRestoreFocus: c = !1,
      getTabbable: f = tE,
      isEnabled: d = eE,
      open: p,
    } = n,
    g = x.useRef(!1),
    h = x.useRef(null),
    b = x.useRef(null),
    S = x.useRef(null),
    E = x.useRef(null),
    O = x.useRef(!1),
    C = x.useRef(null),
    T = Xe(Ho(r), C),
    D = x.useRef(null);
  (x.useEffect(() => {
    !p || !C.current || (O.current = !o);
  }, [o, p]),
    x.useEffect(() => {
      if (!p || !C.current) return;
      const N = zn(C.current);
      return (
        C.current.contains(N.activeElement) ||
          (C.current.hasAttribute('tabIndex') || C.current.setAttribute('tabIndex', '-1'),
          O.current && C.current.focus()),
        () => {
          c ||
            (S.current && S.current.focus && ((g.current = !0), S.current.focus()),
            (S.current = null));
        }
      );
    }, [p]),
    x.useEffect(() => {
      if (!p || !C.current) return;
      const N = zn(C.current),
        w = (P) => {
          ((D.current = P),
            !(i || !d() || P.key !== 'Tab') &&
              N.activeElement === C.current &&
              P.shiftKey &&
              ((g.current = !0), b.current && b.current.focus()));
        },
        z = () => {
          const P = C.current;
          if (P === null) return;
          if (!N.hasFocus() || !d() || g.current) {
            g.current = !1;
            return;
          }
          if (
            P.contains(N.activeElement) ||
            (i && N.activeElement !== h.current && N.activeElement !== b.current)
          )
            return;
          if (N.activeElement !== E.current) E.current = null;
          else if (E.current !== null) return;
          if (!O.current) return;
          let Q = [];
          if (
            ((N.activeElement === h.current || N.activeElement === b.current) && (Q = f(C.current)),
            Q.length > 0)
          ) {
            const F = !!(D.current?.shiftKey && D.current?.key === 'Tab'),
              J = Q[0],
              et = Q[Q.length - 1];
            typeof J != 'string' && typeof et != 'string' && (F ? et.focus() : J.focus());
          } else P.focus();
        };
      (N.addEventListener('focusin', z), N.addEventListener('keydown', w, !0));
      const B = setInterval(() => {
        N.activeElement && N.activeElement.tagName === 'BODY' && z();
      }, 50);
      return () => {
        (clearInterval(B),
          N.removeEventListener('focusin', z),
          N.removeEventListener('keydown', w, !0));
      };
    }, [o, i, c, d, p, f]));
  const k = (N) => {
      (S.current === null && (S.current = N.relatedTarget),
        (O.current = !0),
        (E.current = N.target));
      const w = r.props.onFocus;
      w && w(N);
    },
    H = (N) => {
      (S.current === null && (S.current = N.relatedTarget), (O.current = !0));
    };
  return $.jsxs(x.Fragment, {
    children: [
      $.jsx('div', { tabIndex: p ? 0 : -1, onFocus: H, ref: h, 'data-testid': 'sentinelStart' }),
      x.cloneElement(r, { ref: T, onFocus: k }),
      $.jsx('div', { tabIndex: p ? 0 : -1, onFocus: H, ref: b, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function aE(n) {
  return typeof n == 'function' ? n() : n;
}
function lE(n) {
  return n ? n.props.hasOwnProperty('in') : !1;
}
const hy = () => {},
  ns = new IT();
function rE(n) {
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
    E = x.useRef(null),
    O = x.useRef(null),
    C = Xe(O, b),
    [T, D] = x.useState(!h),
    k = lE(p);
  let H = !0;
  (n['aria-hidden'] === 'false' || n['aria-hidden'] === !1) && (H = !1);
  const N = () => zn(E.current),
    w = () => ((S.current.modalRef = O.current), (S.current.mount = E.current), S.current),
    z = () => {
      (ns.mount(w(), { disableScrollLock: i }), O.current && (O.current.scrollTop = 0));
    },
    B = ml(() => {
      const Y = aE(r) || N().body;
      (ns.add(w(), Y), O.current && z());
    }),
    P = () => ns.isTopModal(w()),
    Q = ml((Y) => {
      ((E.current = Y), Y && (h && P() ? z() : O.current && Ro(O.current, H)));
    }),
    F = x.useCallback(() => {
      ns.remove(w(), H);
    }, [H]);
  (x.useEffect(
    () => () => {
      F();
    },
    [F],
  ),
    x.useEffect(() => {
      h ? B() : (!k || !c) && F();
    }, [h, F, k, c, B]));
  const J = (Y) => (A) => {
      (Y.onKeyDown?.(A),
        !(A.key !== 'Escape' || A.which === 229 || !P()) &&
          (o || (A.stopPropagation(), g && g(A, 'escapeKeyDown'))));
    },
    et = (Y) => (A) => {
      (Y.onClick?.(A), A.target === A.currentTarget && g && g(A, 'backdropClick'));
    };
  return {
    getRootProps: (Y = {}) => {
      const A = C0(n);
      (delete A.onTransitionEnter, delete A.onTransitionExited);
      const X = { ...A, ...Y };
      return { role: 'presentation', ...X, onKeyDown: J(X), ref: C };
    },
    getBackdropProps: (Y = {}) => {
      const A = Y;
      return { 'aria-hidden': !0, ...A, onClick: et(A), open: h };
    },
    getTransitionProps: () => {
      const Y = () => {
          (D(!1), f && f());
        },
        A = () => {
          (D(!0), d && d(), c && F());
        };
      return { onEnter: Ig(Y, p?.props.onEnter ?? hy), onExited: Ig(A, p?.props.onExited ?? hy) };
    },
    rootRef: C,
    portalRef: Q,
    isTopModal: P,
    exited: T,
    hasTransition: k,
  };
}
function oE(n) {
  return Ht('MuiModal', n);
}
qt('MuiModal', ['root', 'hidden', 'backdrop']);
const iE = (n) => {
    const { open: r, exited: o, classes: i } = n;
    return Gt({ root: ['root', !r && o && 'hidden'], backdrop: ['backdrop'] }, oE, i);
  },
  sE = ct('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, !o.open && o.exited && r.hidden];
    },
  })(
    re(({ theme: n }) => ({
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
  uE = ct(MT, { name: 'MuiModal', slot: 'Backdrop' })({ zIndex: -1 }),
  cE = x.forwardRef(function (r, o) {
    const i = Vt({ name: 'MuiModal', props: r }),
      {
        BackdropComponent: c = uE,
        BackdropProps: f,
        classes: d,
        className: p,
        closeAfterTransition: g = !1,
        children: h,
        container: b,
        component: S,
        components: E = {},
        componentsProps: O = {},
        disableAutoFocus: C = !1,
        disableEnforceFocus: T = !1,
        disableEscapeKeyDown: D = !1,
        disablePortal: k = !1,
        disableRestoreFocus: H = !1,
        disableScrollLock: N = !1,
        hideBackdrop: w = !1,
        keepMounted: z = !1,
        onClose: B,
        onTransitionEnter: P,
        onTransitionExited: Q,
        open: F,
        slotProps: J = {},
        slots: et = {},
        theme: v,
        ...I
      } = i,
      V = {
        ...i,
        closeAfterTransition: g,
        disableAutoFocus: C,
        disableEnforceFocus: T,
        disableEscapeKeyDown: D,
        disablePortal: k,
        disableRestoreFocus: H,
        disableScrollLock: N,
        hideBackdrop: w,
        keepMounted: z,
      },
      {
        getRootProps: Y,
        getBackdropProps: A,
        getTransitionProps: X,
        portalRef: it,
        isTopModal: at,
        exited: R,
        hasTransition: K,
      } = rE({ ...V, rootRef: o }),
      ot = { ...V, exited: R },
      rt = iE(ot),
      ut = {};
    if ((h.props.tabIndex === void 0 && (ut.tabIndex = '-1'), K)) {
      const { onEnter: vt, onExited: Et } = X();
      ((ut.onEnter = vt), (ut.onExited = Et));
    }
    const dt = { slots: { root: E.Root, backdrop: E.Backdrop, ...et }, slotProps: { ...O, ...J } },
      [nt, pt] = ie('root', {
        ref: o,
        elementType: sE,
        externalForwardedProps: { ...dt, ...I, component: S },
        getSlotProps: Y,
        ownerState: ot,
        className: xt(p, rt?.root, !ot.open && ot.exited && rt?.hidden),
      }),
      [yt, Tt] = ie('backdrop', {
        ref: f?.ref,
        elementType: c,
        externalForwardedProps: dt,
        shouldForwardComponentProp: !0,
        additionalProps: f,
        getSlotProps: (vt) =>
          A({
            ...vt,
            onClick: (Et) => {
              vt?.onClick && vt.onClick(Et);
            },
          }),
        className: xt(f?.className, rt?.backdrop),
        ownerState: ot,
      });
    return !z && !F && (!K || R)
      ? null
      : $.jsx(FC, {
          ref: it,
          container: b,
          disablePortal: k,
          children: $.jsxs(nt, {
            ...pt,
            children: [
              !w && c ? $.jsx(yt, { ...Tt }) : null,
              $.jsx(nE, {
                disableEnforceFocus: T,
                disableAutoFocus: C,
                disableRestoreFocus: H,
                isEnabled: at,
                open: F,
                children: x.cloneElement(h, ut),
              }),
            ],
          }),
        });
  }),
  fE = (n) => {
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
          f === 'small' && `size${st(f)}`,
          d && 'hiddenLabel',
          p && 'multiline',
        ],
        input: ['input'],
      },
      h = Gt(g, dT, r);
    return { ...r, ...h };
  },
  dE = ct(Ls, {
    shouldForwardProp: (n) => wn(n) || n === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [...Us(n, r), !o.disableUnderline && r.underline];
    },
  })(
    re(({ theme: n }) => {
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
        [`&.${sl.focused}`]: { backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i },
        [`&.${sl.disabled}`]: {
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
              [`&.${sl.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${sl.error}`]: {
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
              [`&:hover:not(.${sl.disabled}, .${sl.error}):before`]: {
                borderBottom: `1px solid ${(n.vars || n).palette.text.primary}`,
              },
              [`&.${sl.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(n.palette)
            .filter(He())
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
  pE = ct(Hs, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: js })(
    re(({ theme: n }) => ({
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
  fd = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiFilledInput' }),
      {
        disableUnderline: c = !1,
        components: f = {},
        componentsProps: d,
        fullWidth: p = !1,
        hiddenLabel: g,
        inputComponent: h = 'input',
        multiline: b = !1,
        slotProps: S,
        slots: E = {},
        type: O = 'text',
        ...C
      } = i,
      T = { ...i, disableUnderline: c, fullWidth: p, inputComponent: h, multiline: b, type: O },
      D = fE(i),
      k = { root: { ownerState: T }, input: { ownerState: T } },
      H = (S ?? d) ? Pe(k, S ?? d) : k,
      N = E.root ?? f.Root ?? dE,
      w = E.input ?? f.Input ?? pE;
    return $.jsx(cd, {
      slots: { root: N, input: w },
      slotProps: H,
      fullWidth: p,
      inputComponent: h,
      multiline: b,
      ref: o,
      type: O,
      ...C,
      classes: D,
    });
  });
fd.muiName = 'Input';
function mE(n) {
  return Ht('MuiFormControl', n);
}
qt('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const hE = (n) => {
    const { classes: r, margin: o, fullWidth: i } = n,
      c = { root: ['root', o !== 'none' && `margin${st(o)}`, i && 'fullWidth'] };
    return Gt(c, mE, r);
  },
  gE = ct('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, r[`margin${st(o.margin)}`], o.fullWidth && r.fullWidth];
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
  yE = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiFormControl' }),
      {
        children: c,
        className: f,
        color: d = 'primary',
        component: p = 'div',
        disabled: g = !1,
        error: h = !1,
        focused: b,
        fullWidth: S = !1,
        hiddenLabel: E = !1,
        margin: O = 'none',
        required: C = !1,
        size: T = 'medium',
        variant: D = 'outlined',
        ...k
      } = i,
      H = {
        ...i,
        color: d,
        component: p,
        disabled: g,
        error: h,
        fullWidth: S,
        hiddenLabel: E,
        margin: O,
        required: C,
        size: T,
        variant: D,
      },
      N = hE(H),
      [w, z] = x.useState(() => {
        let Y = !1;
        return (
          c &&
            x.Children.forEach(c, (A) => {
              if (!pf(A, ['Input', 'Select'])) return;
              const X = pf(A, ['Select']) ? A.props.input : A;
              X && iT(X.props) && (Y = !0);
            }),
          Y
        );
      }),
      [B, P] = x.useState(() => {
        let Y = !1;
        return (
          c &&
            x.Children.forEach(c, (A) => {
              pf(A, ['Input', 'Select']) &&
                (ys(A.props, !0) || ys(A.props.inputProps, !0)) &&
                (Y = !0);
            }),
          Y
        );
      }),
      [Q, F] = x.useState(!1);
    g && Q && F(!1);
    const J = b !== void 0 && !g ? b : Q;
    let et;
    x.useRef(!1);
    const v = x.useCallback(() => {
        P(!0);
      }, []),
      I = x.useCallback(() => {
        P(!1);
      }, []),
      V = x.useMemo(
        () => ({
          adornedStart: w,
          setAdornedStart: z,
          color: d,
          disabled: g,
          error: h,
          filled: B,
          focused: J,
          fullWidth: S,
          hiddenLabel: E,
          size: T,
          onBlur: () => {
            F(!1);
          },
          onFocus: () => {
            F(!0);
          },
          onEmpty: I,
          onFilled: v,
          registerEffect: et,
          required: C,
          variant: D,
        }),
        [w, d, g, h, B, J, S, E, et, I, v, C, T, D],
      );
    return $.jsx(ud.Provider, {
      value: V,
      children: $.jsx(gE, {
        as: p,
        ownerState: H,
        className: xt(N.root, f),
        ref: o,
        ...k,
        children: c,
      }),
    });
  });
function vE(n) {
  return Ht('MuiFormHelperText', n);
}
const gy = qt('MuiFormHelperText', [
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
var yy;
const bE = (n) => {
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
          i && `size${st(i)}`,
          o && 'contained',
          p && 'focused',
          d && 'filled',
          g && 'required',
        ],
      };
    return Gt(h, vE, r);
  },
  SE = ct('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        r.root,
        o.size && r[`size${st(o.size)}`],
        o.contained && r.contained,
        o.filled && r.filled,
      ];
    },
  })(
    re(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${gy.disabled}`]: { color: (n.vars || n).palette.text.disabled },
      [`&.${gy.error}`]: { color: (n.vars || n).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: r }) => r.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    })),
  ),
  xE = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiFormHelperText' }),
      {
        children: c,
        className: f,
        component: d = 'p',
        disabled: p,
        error: g,
        filled: h,
        focused: b,
        margin: S,
        required: E,
        variant: O,
        ...C
      } = i,
      T = mr(),
      D = pr({
        props: i,
        muiFormControl: T,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required'],
      }),
      k = {
        ...i,
        component: d,
        contained: D.variant === 'filled' || D.variant === 'outlined',
        variant: D.variant,
        size: D.size,
        disabled: D.disabled,
        error: D.error,
        filled: D.filled,
        focused: D.focused,
        required: D.required,
      };
    delete k.ownerState;
    const H = bE(k);
    return $.jsx(SE, {
      as: d,
      className: xt(H.root, f),
      ref: o,
      ...C,
      ownerState: k,
      children:
        c === ' '
          ? yy ||
            (yy = $.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
          : c,
    });
  });
function CE(n) {
  return Ht('MuiFormLabel', n);
}
const Ao = qt('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  TE = (n) => {
    const { classes: r, color: o, focused: i, disabled: c, error: f, filled: d, required: p } = n,
      g = {
        root: [
          'root',
          `color${st(o)}`,
          c && 'disabled',
          f && 'error',
          d && 'filled',
          i && 'focused',
          p && 'required',
        ],
        asterisk: ['asterisk', f && 'error'],
      };
    return Gt(g, CE, r);
  },
  EE = ct('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, o.color === 'secondary' && r.colorSecondary, o.filled && r.filled];
    },
  })(
    re(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(n.palette)
          .filter(He())
          .map(([r]) => ({
            props: { color: r },
            style: { [`&.${Ao.focused}`]: { color: (n.vars || n).palette[r].main } },
          })),
        {
          props: {},
          style: {
            [`&.${Ao.disabled}`]: { color: (n.vars || n).palette.text.disabled },
            [`&.${Ao.error}`]: { color: (n.vars || n).palette.error.main },
          },
        },
      ],
    })),
  ),
  RE = ct('span', { name: 'MuiFormLabel', slot: 'Asterisk' })(
    re(({ theme: n }) => ({ [`&.${Ao.error}`]: { color: (n.vars || n).palette.error.main } })),
  ),
  AE = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiFormLabel' }),
      {
        children: c,
        className: f,
        color: d,
        component: p = 'label',
        disabled: g,
        error: h,
        filled: b,
        focused: S,
        required: E,
        ...O
      } = i,
      C = mr(),
      T = pr({
        props: i,
        muiFormControl: C,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      D = {
        ...i,
        color: T.color || 'primary',
        component: p,
        disabled: T.disabled,
        error: T.error,
        filled: T.filled,
        focused: T.focused,
        required: T.required,
      },
      k = TE(D);
    return $.jsxs(EE, {
      as: p,
      ownerState: D,
      className: xt(k.root, f),
      ref: o,
      ...O,
      children: [
        c,
        T.required &&
          $.jsxs(RE, {
            ownerState: D,
            'aria-hidden': !0,
            className: k.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  });
function kf(n) {
  return `scale(${n}, ${n ** 2})`;
}
const ME = {
    entering: { opacity: 1, transform: kf(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  yf =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  $f = x.forwardRef(function (r, o) {
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
        onExited: E,
        onExiting: O,
        style: C,
        timeout: T = 'auto',
        TransitionComponent: D = Nn,
        ...k
      } = r,
      H = sd(),
      N = x.useRef(),
      w = ks(),
      z = x.useRef(null),
      B = Xe(z, Ho(f), o),
      P = (Y) => (A) => {
        if (Y) {
          const X = z.current;
          A === void 0 ? Y(X) : Y(X, A);
        }
      },
      Q = P(b),
      F = P((Y, A) => {
        b0(Y);
        const {
          duration: X,
          delay: it,
          easing: at,
        } = cr({ style: C, timeout: T, easing: d }, { mode: 'enter' });
        let R;
        (T === 'auto'
          ? ((R = w.transitions.getAutoHeightDuration(Y.clientHeight)), (N.current = R))
          : (R = X),
          (Y.style.transition = [
            w.transitions.create('opacity', { duration: R, delay: it }),
            w.transitions.create('transform', {
              duration: yf ? R : R * 0.666,
              delay: it,
              easing: at,
            }),
          ].join(',')),
          g && g(Y, A));
      }),
      J = P(h),
      et = P(O),
      v = P((Y) => {
        const {
          duration: A,
          delay: X,
          easing: it,
        } = cr({ style: C, timeout: T, easing: d }, { mode: 'exit' });
        let at;
        (T === 'auto'
          ? ((at = w.transitions.getAutoHeightDuration(Y.clientHeight)), (N.current = at))
          : (at = A),
          (Y.style.transition = [
            w.transitions.create('opacity', { duration: at, delay: X }),
            w.transitions.create('transform', {
              duration: yf ? at : at * 0.666,
              delay: yf ? X : X || at * 0.333,
              easing: it,
            }),
          ].join(',')),
          (Y.style.opacity = 0),
          (Y.style.transform = kf(0.75)),
          S && S(Y));
      }),
      I = P(E),
      V = (Y) => {
        (T === 'auto' && H.start(N.current || 0, Y), i && i(z.current, Y));
      };
    return $.jsx(D, {
      appear: c,
      in: p,
      nodeRef: z,
      onEnter: F,
      onEntered: J,
      onEntering: Q,
      onExit: v,
      onExited: I,
      onExiting: et,
      addEndListener: V,
      timeout: T === 'auto' ? null : T,
      ...k,
      children: (Y, { ownerState: A, ...X }) =>
        x.cloneElement(f, {
          style: {
            opacity: 0,
            transform: kf(0.75),
            visibility: Y === 'exited' && !p ? 'hidden' : void 0,
            ...ME[Y],
            ...C,
            ...f.props.style,
          },
          ref: B,
          ...X,
        }),
    });
  });
$f && ($f.muiSupportAuto = !0);
const OE = (n) => {
    const { classes: r, disableUnderline: o } = n,
      c = Gt({ root: ['root', !o && 'underline'], input: ['input'] }, cT, r);
    return { ...r, ...c };
  },
  zE = ct(Ls, {
    shouldForwardProp: (n) => wn(n) || n === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [...Us(n, r), !o.disableUnderline && r.underline];
    },
  })(
    re(({ theme: n }) => {
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
                [`&.${go.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${go.error}`]: {
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
                [`&:hover:not(.${go.disabled}, .${go.error}):before`]: {
                  borderBottom: `2px solid ${(n.vars || n).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${o}` },
                },
                [`&.${go.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(n.palette)
              .filter(He())
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
  wE = ct(Hs, { name: 'MuiInput', slot: 'Input', overridesResolver: js })({}),
  dd = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiInput' }),
      {
        disableUnderline: c = !1,
        components: f = {},
        componentsProps: d,
        fullWidth: p = !1,
        inputComponent: g = 'input',
        multiline: h = !1,
        slotProps: b,
        slots: S = {},
        type: E = 'text',
        ...O
      } = i,
      C = OE(i),
      D = { root: { ownerState: { disableUnderline: c } } },
      k = (b ?? d) ? Pe(b ?? d, D) : D,
      H = S.root ?? f.Root ?? zE,
      N = S.input ?? f.Input ?? wE;
    return $.jsx(cd, {
      slots: { root: H, input: N },
      slotProps: k,
      fullWidth: p,
      inputComponent: g,
      multiline: h,
      ref: o,
      type: E,
      ...O,
      classes: C,
    });
  });
dd.muiName = 'Input';
function DE(n) {
  return Ht('MuiInputLabel', n);
}
qt('MuiInputLabel', [
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
const NE = (n) => {
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
          i && i !== 'medium' && `size${st(i)}`,
          d,
        ],
        asterisk: [p && 'asterisk'],
      },
      h = Gt(g, DE, r);
    return { ...r, ...h };
  },
  _E = ct(AE, {
    shouldForwardProp: (n) => wn(n) || n === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        { [`& .${Ao.asterisk}`]: r.asterisk },
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
    re(({ theme: n }) => ({
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
  BE = x.forwardRef(function (r, o) {
    const i = Vt({ name: 'MuiInputLabel', props: r }),
      { disableAnimation: c = !1, margin: f, shrink: d, variant: p, className: g, ...h } = i,
      b = mr();
    let S = d;
    typeof S > 'u' && b && (S = b.filled || b.focused || b.adornedStart);
    const E = pr({
        props: i,
        muiFormControl: b,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      O = {
        ...i,
        disableAnimation: c,
        formControl: b,
        shrink: S,
        size: E.size,
        variant: E.variant,
        required: E.required,
        focused: E.focused,
      },
      C = NE(O);
    return $.jsx(_E, {
      'data-shrink': S,
      ref: o,
      className: xt(C.root, g),
      ...h,
      ownerState: O,
      classes: C,
    });
  }),
  kE = x.createContext({});
function $E(n) {
  return Ht('MuiList', n);
}
qt('MuiList', ['root', 'padding', 'dense', 'subheader']);
const UE = (n) => {
    const { classes: r, disablePadding: o, dense: i, subheader: c } = n;
    return Gt({ root: ['root', !o && 'padding', i && 'dense', c && 'subheader'] }, $E, r);
  },
  jE = ct('ul', {
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
  LE = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiList' }),
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
      E = { ...i, component: d, dense: p, disablePadding: g },
      O = UE(E);
    return $.jsx(kE.Provider, {
      value: S,
      children: $.jsxs(jE, {
        as: d,
        className: xt(O.root, f),
        ref: o,
        ownerState: E,
        ...b,
        children: [h, c],
      }),
    });
  });
function vf(n, r, o) {
  return n === r
    ? n.firstChild
    : r && r.nextElementSibling
      ? r.nextElementSibling
      : o
        ? null
        : n.firstChild;
}
function vy(n, r, o) {
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
function O0(n, r) {
  if (r === void 0) return !0;
  let o = n.innerText;
  return (
    o === void 0 && (o = n.textContent),
    (o = o.trim().toLowerCase()),
    o.length === 0 ? !1 : r.repeating ? o[0] === r.keys[0] : o.startsWith(r.keys.join(''))
  );
}
function yo(n, r, o, i, c, f) {
  let d = !1,
    p = c(n, r, r ? o : !1);
  for (; p; ) {
    if (p === n.firstChild) {
      if (d) return !1;
      d = !0;
    }
    const g = i ? !1 : p.disabled || p.getAttribute('aria-disabled') === 'true';
    if (!p.hasAttribute('tabindex') || !O0(p, f) || g) p = c(n, p, o);
    else return (p.focus(), !0);
  }
  return !1;
}
const HE = x.forwardRef(function (r, o) {
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
      ...E
    } = r,
    O = x.useRef(null),
    C = x.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
  (da(() => {
    c && O.current.focus();
  }, [c]),
    x.useImperativeHandle(
      i,
      () => ({
        adjustStyleForScrollbar: (N, { direction: w }) => {
          const z = !O.current.style.width;
          if (N.clientHeight < O.current.clientHeight && z) {
            const B = `${M0(pa(N))}px`;
            ((O.current.style[w === 'rtl' ? 'paddingLeft' : 'paddingRight'] = B),
              (O.current.style.width = `calc(100% + ${B})`));
          }
          return O.current;
        },
      }),
      [],
    ));
  const T = (N) => {
      const w = O.current,
        z = N.key;
      if (N.ctrlKey || N.metaKey || N.altKey) {
        b && b(N);
        return;
      }
      const P = zn(w).activeElement;
      if (z === 'ArrowDown') (N.preventDefault(), yo(w, P, h, g, vf));
      else if (z === 'ArrowUp') (N.preventDefault(), yo(w, P, h, g, vy));
      else if (z === 'Home') (N.preventDefault(), yo(w, null, h, g, vf));
      else if (z === 'End') (N.preventDefault(), yo(w, null, h, g, vy));
      else if (z.length === 1) {
        const Q = C.current,
          F = z.toLowerCase(),
          J = performance.now();
        (Q.keys.length > 0 &&
          (J - Q.lastTime > 500
            ? ((Q.keys = []), (Q.repeating = !0), (Q.previousKeyMatched = !0))
            : Q.repeating && F !== Q.keys[0] && (Q.repeating = !1)),
          (Q.lastTime = J),
          Q.keys.push(F));
        const et = P && !Q.repeating && O0(P, Q);
        Q.previousKeyMatched && (et || yo(w, P, !1, g, vf, Q))
          ? N.preventDefault()
          : (Q.previousKeyMatched = !1);
      }
      b && b(N);
    },
    D = Xe(O, o);
  let k = -1;
  x.Children.forEach(d, (N, w) => {
    if (!x.isValidElement(N)) {
      k === w && ((k += 1), k >= d.length && (k = -1));
      return;
    }
    (N.props.disabled || (((S === 'selectedMenu' && N.props.selected) || k === -1) && (k = w)),
      k === w &&
        (N.props.disabled || N.props.muiSkipListHighlight || N.type.muiSkipListHighlight) &&
        ((k += 1), k >= d.length && (k = -1)));
  });
  const H = x.Children.map(d, (N, w) => {
    if (w === k) {
      const z = {};
      return (
        f && (z.autoFocus = !0),
        N.props.tabIndex === void 0 && S === 'selectedMenu' && (z.tabIndex = 0),
        x.cloneElement(N, z)
      );
    }
    return N;
  });
  return $.jsx(LE, {
    role: 'menu',
    ref: D,
    className: p,
    onKeyDown: T,
    tabIndex: c ? 0 : -1,
    ...E,
    children: H,
  });
});
function qE(n) {
  return Ht('MuiPopover', n);
}
qt('MuiPopover', ['root', 'paper']);
function by(n, r) {
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
function Sy(n, r) {
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
function xy(n) {
  return [n.horizontal, n.vertical].map((r) => (typeof r == 'number' ? `${r}px` : r)).join(' ');
}
function as(n) {
  return typeof n == 'function' ? n() : n;
}
const GE = (n) => {
    const { classes: r } = n;
    return Gt({ root: ['root'], paper: ['paper'] }, qE, r);
  },
  VE = ct(cE, { name: 'MuiPopover', slot: 'Root' })({}),
  z0 = ct($s, { name: 'MuiPopover', slot: 'Paper' })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  YE = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiPopover' }),
      {
        action: c,
        anchorEl: f,
        anchorOrigin: d = { vertical: 'top', horizontal: 'left' },
        anchorPosition: p,
        anchorReference: g = 'anchorEl',
        children: h,
        className: b,
        container: S,
        elevation: E = 8,
        marginThreshold: O = 16,
        open: C,
        PaperProps: T = {},
        slots: D = {},
        slotProps: k = {},
        transformOrigin: H = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: N,
        transitionDuration: w = 'auto',
        TransitionProps: z = {},
        disableScrollLock: B = !1,
        ...P
      } = i,
      Q = x.useRef(),
      F = {
        ...i,
        anchorOrigin: d,
        anchorReference: g,
        elevation: E,
        marginThreshold: O,
        transformOrigin: H,
        TransitionComponent: N,
        transitionDuration: w,
        TransitionProps: z,
      },
      J = GE(F),
      et = x.useCallback(() => {
        if (g === 'anchorPosition') return p;
        const vt = as(f),
          _t = (vt && vt.nodeType === 1 ? vt : zn(Q.current).body).getBoundingClientRect();
        return { top: _t.top + by(_t, d.vertical), left: _t.left + Sy(_t, d.horizontal) };
      }, [f, d.horizontal, d.vertical, p, g]),
      v = x.useCallback(
        (vt) => ({ vertical: by(vt, H.vertical), horizontal: Sy(vt, H.horizontal) }),
        [H.horizontal, H.vertical],
      ),
      I = x.useCallback(
        (vt) => {
          const Et = { width: vt.offsetWidth, height: vt.offsetHeight },
            _t = v(Et);
          if (g === 'none') return { top: null, left: null, transformOrigin: xy(_t) };
          const ye = et();
          let Rt = ye.top - _t.vertical,
            Xt = ye.left - _t.horizontal;
          const ke = Rt + Et.height,
            Kt = Xt + Et.width,
            ce = pa(as(f)),
            ue = ce.innerHeight - O,
            me = ce.innerWidth - O;
          if (O !== null && Rt < O) {
            const Wt = Rt - O;
            ((Rt -= Wt), (_t.vertical += Wt));
          } else if (O !== null && ke > ue) {
            const Wt = ke - ue;
            ((Rt -= Wt), (_t.vertical += Wt));
          }
          if (O !== null && Xt < O) {
            const Wt = Xt - O;
            ((Xt -= Wt), (_t.horizontal += Wt));
          } else if (Kt > me) {
            const Wt = Kt - me;
            ((Xt -= Wt), (_t.horizontal += Wt));
          }
          return {
            top: `${Math.round(Rt)}px`,
            left: `${Math.round(Xt)}px`,
            transformOrigin: xy(_t),
          };
        },
        [f, g, et, v, O],
      ),
      [V, Y] = x.useState(C),
      A = x.useCallback(() => {
        const vt = Q.current;
        if (!vt) return;
        const Et = I(vt);
        (Et.top !== null && vt.style.setProperty('top', Et.top),
          Et.left !== null && (vt.style.left = Et.left),
          (vt.style.transformOrigin = Et.transformOrigin),
          Y(!0));
      }, [I]);
    x.useEffect(
      () => (
        B && window.addEventListener('scroll', A),
        () => window.removeEventListener('scroll', A)
      ),
      [f, B, A],
    );
    const X = () => {
        A();
      },
      it = () => {
        Y(!1);
      };
    (x.useEffect(() => {
      C && A();
    }),
      x.useImperativeHandle(
        c,
        () =>
          C
            ? {
                updatePosition: () => {
                  A();
                },
              }
            : null,
        [C, A],
      ),
      x.useEffect(() => {
        if (!C) return;
        const vt = m0(() => {
            A();
          }),
          Et = pa(as(f));
        return (
          Et.addEventListener('resize', vt),
          () => {
            (vt.clear(), Et.removeEventListener('resize', vt));
          }
        );
      }, [f, C, A]));
    let at = w;
    const R = { slots: { transition: N, ...D }, slotProps: { transition: z, paper: T, ...k } },
      [K, ot] = ie('transition', {
        elementType: $f,
        externalForwardedProps: R,
        ownerState: F,
        getSlotProps: (vt) => ({
          ...vt,
          onEntering: (Et, _t) => {
            (vt.onEntering?.(Et, _t), X());
          },
          onExited: (Et) => {
            (vt.onExited?.(Et), it());
          },
        }),
        additionalProps: { appear: !0, in: C },
      });
    w === 'auto' && !K.muiSupportAuto && (at = void 0);
    const rt = S || (f ? zn(as(f)).body : void 0),
      [ut, { slots: dt, slotProps: nt, ...pt }] = ie('root', {
        ref: o,
        elementType: VE,
        externalForwardedProps: { ...R, ...P },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: D.backdrop },
          slotProps: {
            backdrop: U2(typeof k.backdrop == 'function' ? k.backdrop(F) : k.backdrop, {
              invisible: !0,
            }),
          },
          container: rt,
          open: C,
        },
        ownerState: F,
        className: xt(J.root, b),
      }),
      [yt, Tt] = ie('paper', {
        ref: Q,
        className: J.paper,
        elementType: z0,
        externalForwardedProps: R,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: E, style: V ? void 0 : { opacity: 0 } },
        ownerState: F,
      });
    return $.jsx(ut, {
      ...pt,
      ...(!ms(ut) && { slots: dt, slotProps: nt, disableScrollLock: B }),
      children: $.jsx(K, { ...ot, timeout: at, children: $.jsx(yt, { ...Tt, children: h }) }),
    });
  });
function PE(n) {
  return Ht('MuiMenu', n);
}
qt('MuiMenu', ['root', 'paper', 'list']);
const XE = { vertical: 'top', horizontal: 'right' },
  KE = { vertical: 'top', horizontal: 'left' },
  QE = (n) => {
    const { classes: r } = n;
    return Gt({ root: ['root'], paper: ['paper'], list: ['list'] }, PE, r);
  },
  IE = ct(YE, {
    shouldForwardProp: (n) => wn(n) || n === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
  })({}),
  ZE = ct(z0, { name: 'MuiMenu', slot: 'Paper' })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch',
  }),
  FE = ct(HE, { name: 'MuiMenu', slot: 'List' })({ outline: 0 }),
  WE = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiMenu' }),
      {
        autoFocus: c = !0,
        children: f,
        className: d,
        disableAutoFocusItem: p = !1,
        MenuListProps: g = {},
        onClose: h,
        open: b,
        PaperProps: S = {},
        PopoverClasses: E,
        transitionDuration: O = 'auto',
        TransitionProps: { onEntering: C, ...T } = {},
        variant: D = 'selectedMenu',
        slots: k = {},
        slotProps: H = {},
        ...N
      } = i,
      w = Ex(),
      z = {
        ...i,
        autoFocus: c,
        disableAutoFocusItem: p,
        MenuListProps: g,
        onEntering: C,
        PaperProps: S,
        transitionDuration: O,
        TransitionProps: T,
        variant: D,
      },
      B = QE(z),
      P = c && !p && b,
      Q = x.useRef(null),
      F = (at, R) => {
        (Q.current && Q.current.adjustStyleForScrollbar(at, { direction: w ? 'rtl' : 'ltr' }),
          C && C(at, R));
      },
      J = (at) => {
        at.key === 'Tab' && (at.preventDefault(), h && h(at, 'tabKeyDown'));
      };
    let et = -1;
    x.Children.map(f, (at, R) => {
      x.isValidElement(at) &&
        (at.props.disabled ||
          (((D === 'selectedMenu' && at.props.selected) || et === -1) && (et = R)));
    });
    const v = { slots: k, slotProps: { list: g, transition: T, paper: S, ...H } },
      I = IC({
        elementType: k.root,
        externalSlotProps: H.root,
        ownerState: z,
        className: [B.root, d],
      }),
      [V, Y] = ie('paper', {
        className: B.paper,
        elementType: ZE,
        externalForwardedProps: v,
        shouldForwardComponentProp: !0,
        ownerState: z,
      }),
      [A, X] = ie('list', {
        className: xt(B.list, g.className),
        elementType: FE,
        shouldForwardComponentProp: !0,
        externalForwardedProps: v,
        getSlotProps: (at) => ({
          ...at,
          onKeyDown: (R) => {
            (J(R), at.onKeyDown?.(R));
          },
        }),
        ownerState: z,
      }),
      it =
        typeof v.slotProps.transition == 'function'
          ? v.slotProps.transition(z)
          : v.slotProps.transition;
    return $.jsx(IE, {
      onClose: h,
      anchorOrigin: { vertical: 'bottom', horizontal: w ? 'right' : 'left' },
      transformOrigin: w ? XE : KE,
      slots: {
        root: k.root,
        paper: V,
        backdrop: k.backdrop,
        ...(k.transition && { transition: k.transition }),
      },
      slotProps: {
        root: I,
        paper: Y,
        backdrop: typeof H.backdrop == 'function' ? H.backdrop(z) : H.backdrop,
        transition: {
          ...it,
          onEntering: (...at) => {
            (F(...at), it?.onEntering?.(...at));
          },
        },
      },
      open: b,
      ref: o,
      transitionDuration: O,
      ownerState: z,
      ...N,
      classes: E,
      children: $.jsx(A, {
        actions: Q,
        autoFocus: c && (et === -1 || p),
        autoFocusItem: P,
        variant: D,
        ...X,
        children: f,
      }),
    });
  });
function JE(n) {
  return Ht('MuiNativeSelect', n);
}
const pd = qt('MuiNativeSelect', [
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
  tR = (n) => {
    const { classes: r, variant: o, disabled: i, multiple: c, open: f, error: d } = n,
      p = {
        select: ['select', o, i && 'disabled', c && 'multiple', d && 'error'],
        icon: ['icon', `icon${st(o)}`, f && 'iconOpen', i && 'disabled'],
      };
    return Gt(p, JE, r);
  },
  w0 = ct('select', { name: 'MuiNativeSelect' })(({ theme: n }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${pd.disabled}`]: { cursor: 'default' },
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
  eR = ct(w0, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: wn,
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.select, r[o.variant], o.error && r.error, { [`&.${pd.multiple}`]: r.multiple }];
    },
  })({}),
  D0 = ct('svg', { name: 'MuiNativeSelect' })(({ theme: n }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (n.vars || n).palette.action.active,
    [`&.${pd.disabled}`]: { color: (n.vars || n).palette.action.disabled },
    variants: [
      { props: ({ ownerState: r }) => r.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  nR = ct(D0, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.icon, o.variant && r[`icon${st(o.variant)}`], o.open && r.iconOpen];
    },
  })({}),
  aR = x.forwardRef(function (r, o) {
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
      S = tR(b);
    return $.jsxs(x.Fragment, {
      children: [
        $.jsx(eR, { ownerState: b, className: xt(S.select, i), disabled: c, ref: p || o, ...h }),
        r.multiple ? null : $.jsx(nR, { as: d, ownerState: b, className: S.icon }),
      ],
    });
  });
var Cy;
const lR = ct('fieldset', { name: 'MuiNotchedOutlined', shouldForwardProp: wn })({
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
  rR = ct('legend', { name: 'MuiNotchedOutlined', shouldForwardProp: wn })(
    re(({ theme: n }) => ({
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
function oR(n) {
  const { children: r, classes: o, className: i, label: c, notched: f, ...d } = n,
    p = c != null && c !== '',
    g = { ...n, notched: f, withLabel: p };
  return $.jsx(lR, {
    'aria-hidden': !0,
    className: i,
    ownerState: g,
    ...d,
    children: $.jsx(rR, {
      ownerState: g,
      children: p
        ? $.jsx('span', { children: c })
        : Cy ||
          (Cy = $.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' })),
    }),
  });
}
const iR = (n) => {
    const { classes: r } = n,
      i = Gt({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, fT, r);
    return { ...r, ...i };
  },
  sR = ct(Ls, {
    shouldForwardProp: (n) => wn(n) || n === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: Us,
  })(
    re(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (n.vars || n).shape.borderRadius,
        [`&:hover .${Ln.notchedOutline}`]: { borderColor: (n.vars || n).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${Ln.notchedOutline}`]: {
            borderColor: n.vars ? n.alpha(n.vars.palette.common.onBackground, 0.23) : r,
          },
        },
        [`&.${Ln.focused} .${Ln.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(n.palette)
            .filter(He())
            .map(([o]) => ({
              props: { color: o },
              style: {
                [`&.${Ln.focused} .${Ln.notchedOutline}`]: {
                  borderColor: (n.vars || n).palette[o].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Ln.error} .${Ln.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.error.main,
              },
              [`&.${Ln.disabled} .${Ln.notchedOutline}`]: {
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
  uR = ct(oR, { name: 'MuiOutlinedInput', slot: 'NotchedOutline' })(
    re(({ theme: n }) => {
      const r = n.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return { borderColor: n.vars ? n.alpha(n.vars.palette.common.onBackground, 0.23) : r };
    }),
  ),
  cR = ct(Hs, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: js })(
    re(({ theme: n }) => ({
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
  md = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiOutlinedInput' }),
      {
        components: c = {},
        fullWidth: f = !1,
        inputComponent: d = 'input',
        label: p,
        multiline: g = !1,
        notched: h,
        slots: b = {},
        slotProps: S = {},
        type: E = 'text',
        ...O
      } = i,
      C = iR(i),
      T = mr(),
      D = pr({
        props: i,
        muiFormControl: T,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required'],
      }),
      k = {
        ...i,
        color: D.color || 'primary',
        disabled: D.disabled,
        error: D.error,
        focused: D.focused,
        formControl: T,
        fullWidth: f,
        hiddenLabel: D.hiddenLabel,
        multiline: g,
        size: D.size,
        type: E,
      },
      H = b.root ?? c.Root ?? sR,
      N = b.input ?? c.Input ?? cR,
      [w, z] = ie('notchedOutline', {
        elementType: uR,
        className: C.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: k,
        externalForwardedProps: { slots: b, slotProps: S },
        additionalProps: {
          label:
            p != null && p !== '' && D.required
              ? $.jsxs(x.Fragment, { children: [p, ' ', '*'] })
              : p,
        },
      });
    return $.jsx(cd, {
      slots: { root: H, input: N },
      slotProps: S,
      renderSuffix: (B) =>
        $.jsx(w, {
          ...z,
          notched: typeof h < 'u' ? h : !!(B.startAdornment || B.filled || B.focused),
        }),
      fullWidth: f,
      inputComponent: d,
      multiline: g,
      ref: o,
      type: E,
      ...O,
      classes: { ...C, notchedOutline: null },
    });
  });
md.muiName = 'Input';
function N0(n) {
  return Ht('MuiSelect', n);
}
const vo = qt('MuiSelect', [
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
var Ty;
const fR = ct(w0, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [
        { [`&.${vo.select}`]: r.select },
        { [`&.${vo.select}`]: r[o.variant] },
        { [`&.${vo.error}`]: r.error },
        { [`&.${vo.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${vo.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  dR = ct(D0, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.icon, o.variant && r[`icon${st(o.variant)}`], o.open && r.iconOpen];
    },
  })({}),
  pR = ct('input', {
    shouldForwardProp: (n) => p0(n) && n !== 'classes',
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
function Ey(n, r) {
  return typeof r == 'object' && r !== null ? n === r : String(n) === String(r);
}
function mR(n) {
  return n == null || (typeof n == 'string' && !n.trim());
}
const hR = (n) => {
    const { classes: r, variant: o, disabled: i, multiple: c, open: f, error: d } = n,
      p = {
        select: ['select', o, i && 'disabled', c && 'multiple', d && 'error'],
        icon: ['icon', `icon${st(o)}`, f && 'iconOpen', i && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return Gt(p, N0, r);
  },
  gR = x.forwardRef(function (r, o) {
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
        displayEmpty: E,
        error: O = !1,
        IconComponent: C,
        inputRef: T,
        labelId: D,
        MenuProps: k = {},
        multiple: H,
        name: N,
        onBlur: w,
        onChange: z,
        onClose: B,
        onFocus: P,
        onOpen: Q,
        open: F,
        readOnly: J,
        renderValue: et,
        required: v,
        SelectDisplayProps: I = {},
        tabIndex: V,
        type: Y,
        value: A,
        variant: X = 'standard',
        ...it
      } = r,
      [at, R] = Fg({ controlled: A, default: b, name: 'Select' }),
      [K, ot] = Fg({ controlled: F, default: h, name: 'Select' }),
      rt = x.useRef(null),
      ut = x.useRef(null),
      [dt, nt] = x.useState(null),
      { current: pt } = x.useRef(F != null),
      [yt, Tt] = x.useState(),
      vt = Xe(o, T),
      Et = x.useCallback((gt) => {
        ((ut.current = gt), gt && nt(gt));
      }, []),
      _t = dt?.parentNode;
    (x.useImperativeHandle(
      vt,
      () => ({
        focus: () => {
          ut.current.focus();
        },
        node: rt.current,
        value: at,
      }),
      [at],
    ),
      x.useEffect(() => {
        h && K && dt && !pt && (Tt(d ? null : _t.clientWidth), ut.current.focus());
      }, [dt, d]),
      x.useEffect(() => {
        f && ut.current.focus();
      }, [f]),
      x.useEffect(() => {
        if (!D) return;
        const gt = zn(ut.current).getElementById(D);
        if (gt) {
          const Yt = () => {
            getSelection().isCollapsed && ut.current.focus();
          };
          return (
            gt.addEventListener('click', Yt),
            () => {
              gt.removeEventListener('click', Yt);
            }
          );
        }
      }, [D]));
    const ye = (gt, Yt) => {
        (gt ? Q && Q(Yt) : B && B(Yt), pt || (Tt(d ? null : _t.clientWidth), ot(gt)));
      },
      Rt = (gt) => {
        gt.button === 0 && (gt.preventDefault(), ut.current.focus(), ye(!0, gt));
      },
      Xt = (gt) => {
        ye(!1, gt);
      },
      ke = x.Children.toArray(p),
      Kt = (gt) => {
        const Yt = ke.find((he) => he.props.value === gt.target.value);
        Yt !== void 0 && (R(Yt.props.value), z && z(gt, Yt));
      },
      ce = (gt) => (Yt) => {
        let he;
        if (Yt.currentTarget.hasAttribute('tabindex')) {
          if (H) {
            he = Array.isArray(at) ? at.slice() : [];
            const ha = at.indexOf(gt.props.value);
            ha === -1 ? he.push(gt.props.value) : he.splice(ha, 1);
          } else he = gt.props.value;
          if ((gt.props.onClick && gt.props.onClick(Yt), at !== he && (R(he), z))) {
            const ha = Yt.nativeEvent || Yt,
              hr = new ha.constructor(ha.type, ha);
            (Object.defineProperty(hr, 'target', { writable: !0, value: { value: he, name: N } }),
              z(hr, gt));
          }
          H || ye(!1, Yt);
        }
      },
      ue = (gt) => {
        J ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(gt.key) &&
            (gt.preventDefault(), ye(!0, gt)));
      },
      me = dt !== null && K,
      Wt = (gt) => {
        !me &&
          w &&
          (Object.defineProperty(gt, 'target', { writable: !0, value: { value: at, name: N } }),
          w(gt));
      };
    delete it['aria-invalid'];
    let mt, en;
    const ve = [];
    let En = !1;
    (ys({ value: at }) || E) && (et ? (mt = et(at)) : (En = !0));
    const fe = ke.map((gt) => {
      if (!x.isValidElement(gt)) return null;
      let Yt;
      if (H) {
        if (!Array.isArray(at)) throw new Error(ca(2));
        ((Yt = at.some((he) => Ey(he, gt.props.value))), Yt && En && ve.push(gt.props.children));
      } else ((Yt = Ey(at, gt.props.value)), Yt && En && (en = gt.props.children));
      return x.cloneElement(gt, {
        'aria-selected': Yt ? 'true' : 'false',
        onClick: ce(gt),
        onKeyUp: (he) => {
          (he.key === ' ' && he.preventDefault(), gt.props.onKeyUp && gt.props.onKeyUp(he));
        },
        role: 'option',
        selected: Yt,
        value: void 0,
        'data-value': gt.props.value,
      });
    });
    En &&
      (H
        ? ve.length === 0
          ? (mt = null)
          : (mt = ve.reduce(
              (gt, Yt, he) => (gt.push(Yt), he < ve.length - 1 && gt.push(', '), gt),
              [],
            ))
        : (mt = en));
    let At = yt;
    !d && pt && dt && (At = _t.clientWidth);
    let Jt;
    typeof V < 'u' ? (Jt = V) : (Jt = S ? null : 0);
    const $t = I.id || (N ? `mui-component-select-${N}` : void 0),
      Ke = { ...r, variant: X, value: at, open: me, error: O },
      te = hR(Ke),
      ma = {
        ...k.PaperProps,
        ...(typeof k.slotProps?.paper == 'function' ? k.slotProps.paper(Ke) : k.slotProps?.paper),
      },
      Xn = {
        ...k.MenuListProps,
        ...(typeof k.slotProps?.list == 'function' ? k.slotProps.list(Ke) : k.slotProps?.list),
      },
      Va = Lo();
    return $.jsxs(x.Fragment, {
      children: [
        $.jsx(fR, {
          as: 'div',
          ref: Et,
          tabIndex: Jt,
          role: 'combobox',
          'aria-controls': me ? Va : void 0,
          'aria-disabled': S ? 'true' : void 0,
          'aria-expanded': me ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': c,
          'aria-labelledby': [D, $t].filter(Boolean).join(' ') || void 0,
          'aria-describedby': i,
          'aria-required': v ? 'true' : void 0,
          'aria-invalid': O ? 'true' : void 0,
          onKeyDown: ue,
          onMouseDown: S || J ? null : Rt,
          onBlur: Wt,
          onFocus: P,
          ...I,
          ownerState: Ke,
          className: xt(I.className, te.select, g),
          id: $t,
          children: mR(mt)
            ? Ty ||
              (Ty = $.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
            : mt,
        }),
        $.jsx(pR, {
          'aria-invalid': O,
          value: Array.isArray(at) ? at.join(',') : at,
          name: N,
          ref: rt,
          'aria-hidden': !0,
          onChange: Kt,
          tabIndex: -1,
          disabled: S,
          className: te.nativeInput,
          autoFocus: f,
          required: v,
          ...it,
          ownerState: Ke,
        }),
        $.jsx(dR, { as: C, className: te.icon, ownerState: Ke }),
        $.jsx(WE, {
          id: `menu-${N || ''}`,
          anchorEl: _t,
          open: me,
          onClose: Xt,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...k,
          slotProps: {
            ...k.slotProps,
            list: {
              'aria-labelledby': D,
              role: 'listbox',
              'aria-multiselectable': H ? 'true' : void 0,
              disableListWrap: !0,
              id: Va,
              ...Xn,
            },
            paper: { ...ma, style: { minWidth: At, ...(ma != null ? ma.style : null) } },
          },
          children: fe,
        }),
      ],
    });
  }),
  yR = (n) => {
    const { classes: r } = n,
      i = Gt({ root: ['root'] }, N0, r);
    return { ...r, ...i };
  },
  hd = { name: 'MuiSelect', slot: 'Root', shouldForwardProp: (n) => wn(n) && n !== 'variant' },
  vR = ct(dd, hd)(''),
  bR = ct(md, hd)(''),
  SR = ct(fd, hd)(''),
  _0 = x.forwardRef(function (r, o) {
    const i = Vt({ name: 'MuiSelect', props: r }),
      {
        autoWidth: c = !1,
        children: f,
        classes: d = {},
        className: p,
        defaultOpen: g = !1,
        displayEmpty: h = !1,
        IconComponent: b = pT,
        id: S,
        input: E,
        inputProps: O,
        label: C,
        labelId: T,
        MenuProps: D,
        multiple: k = !1,
        native: H = !1,
        onClose: N,
        onOpen: w,
        open: z,
        renderValue: B,
        SelectDisplayProps: P,
        variant: Q = 'outlined',
        ...F
      } = i,
      J = H ? aR : gR,
      et = mr(),
      v = pr({ props: i, muiFormControl: et, states: ['variant', 'error'] }),
      I = v.variant || Q,
      V = { ...i, variant: I, classes: d },
      Y = yR(V),
      { root: A, ...X } = Y,
      it =
        E ||
        {
          standard: $.jsx(vR, { ownerState: V }),
          outlined: $.jsx(bR, { label: C, ownerState: V }),
          filled: $.jsx(SR, { ownerState: V }),
        }[I],
      at = Xe(o, Ho(it));
    return $.jsx(x.Fragment, {
      children: x.cloneElement(it, {
        inputComponent: J,
        inputProps: {
          children: f,
          error: v.error,
          IconComponent: b,
          variant: I,
          type: void 0,
          multiple: k,
          ...(H
            ? { id: S }
            : {
                autoWidth: c,
                defaultOpen: g,
                displayEmpty: h,
                labelId: T,
                MenuProps: D,
                onClose: N,
                onOpen: w,
                open: z,
                renderValue: B,
                SelectDisplayProps: { id: S, ...P },
              }),
          ...O,
          classes: O ? Pe(X, O.classes) : X,
          ...(E ? E.props.inputProps : {}),
        },
        ...(((k && H) || h) && I === 'outlined' ? { notched: !0 } : {}),
        ref: at,
        className: xt(it.props.className, p, Y.root),
        ...(!E && { variant: I }),
        ...F,
      }),
    });
  });
_0.muiName = 'Select';
function xR(n) {
  return Ht('MuiToolbar', n);
}
qt('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const CR = (n) => {
    const { classes: r, disableGutters: o, variant: i } = n;
    return Gt({ root: ['root', !o && 'gutters', i] }, xR, r);
  },
  TR = ct('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: o } = n;
      return [r.root, !o.disableGutters && r.gutters, r[o.variant]];
    },
  })(
    re(({ theme: n }) => ({
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
  ER = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiToolbar' }),
      {
        className: c,
        component: f = 'div',
        disableGutters: d = !1,
        variant: p = 'regular',
        ...g
      } = i,
      h = { ...i, component: f, disableGutters: d, variant: p },
      b = CR(h);
    return $.jsx(TR, { as: f, className: xt(b.root, c), ref: o, ownerState: h, ...g });
  });
function RR(n) {
  return Ht('MuiTextField', n);
}
qt('MuiTextField', ['root']);
const AR = { standard: dd, filled: fd, outlined: md },
  MR = (n) => {
    const { classes: r } = n;
    return Gt({ root: ['root'] }, RR, r);
  },
  OR = ct(yE, { name: 'MuiTextField', slot: 'Root' })({}),
  zR = x.forwardRef(function (r, o) {
    const i = Vt({ props: r, name: 'MuiTextField' }),
      {
        autoComplete: c,
        autoFocus: f = !1,
        children: d,
        className: p,
        color: g = 'primary',
        defaultValue: h,
        disabled: b = !1,
        error: S = !1,
        FormHelperTextProps: E,
        fullWidth: O = !1,
        helperText: C,
        id: T,
        InputLabelProps: D,
        inputProps: k,
        InputProps: H,
        inputRef: N,
        label: w,
        maxRows: z,
        minRows: B,
        multiline: P = !1,
        name: Q,
        onBlur: F,
        onChange: J,
        onFocus: et,
        placeholder: v,
        required: I = !1,
        rows: V,
        select: Y = !1,
        SelectProps: A,
        slots: X = {},
        slotProps: it = {},
        type: at,
        value: R,
        variant: K = 'outlined',
        ...ot
      } = i,
      rt = {
        ...i,
        autoFocus: f,
        color: g,
        disabled: b,
        error: S,
        fullWidth: O,
        multiline: P,
        required: I,
        select: Y,
        variant: K,
      },
      ut = MR(rt),
      dt = Lo(T),
      nt = C && dt ? `${dt}-helper-text` : void 0,
      pt = w && dt ? `${dt}-label` : void 0,
      yt = AR[K],
      Tt = {
        slots: X,
        slotProps: { input: H, inputLabel: D, htmlInput: k, formHelperText: E, select: A, ...it },
      },
      vt = {},
      Et = Tt.slotProps.inputLabel;
    (K === 'outlined' && (Et && typeof Et.shrink < 'u' && (vt.notched = Et.shrink), (vt.label = w)),
      Y && ((!A || !A.native) && (vt.id = void 0), (vt['aria-describedby'] = void 0)));
    const [_t, ye] = ie('root', {
        elementType: OR,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...Tt, ...ot },
        ownerState: rt,
        className: xt(ut.root, p),
        ref: o,
        additionalProps: { disabled: b, error: S, fullWidth: O, required: I, color: g, variant: K },
      }),
      [Rt, Xt] = ie('input', {
        elementType: yt,
        externalForwardedProps: Tt,
        additionalProps: vt,
        ownerState: rt,
      }),
      [ke, Kt] = ie('inputLabel', { elementType: BE, externalForwardedProps: Tt, ownerState: rt }),
      [ce, ue] = ie('htmlInput', {
        elementType: 'input',
        externalForwardedProps: Tt,
        ownerState: rt,
      }),
      [me, Wt] = ie('formHelperText', {
        elementType: xE,
        externalForwardedProps: Tt,
        ownerState: rt,
      }),
      [mt, en] = ie('select', { elementType: _0, externalForwardedProps: Tt, ownerState: rt }),
      ve = $.jsx(Rt, {
        'aria-describedby': nt,
        autoComplete: c,
        autoFocus: f,
        defaultValue: h,
        fullWidth: O,
        multiline: P,
        name: Q,
        rows: V,
        maxRows: z,
        minRows: B,
        type: at,
        value: R,
        id: dt,
        inputRef: N,
        onBlur: F,
        onChange: J,
        onFocus: et,
        placeholder: v,
        inputProps: ue,
        slots: { input: X.htmlInput ? ce : void 0 },
        ...Xt,
      });
    return $.jsxs(_t, {
      ...ye,
      children: [
        w != null && w !== '' && $.jsx(ke, { htmlFor: dt, id: pt, ...Kt, children: w }),
        Y
          ? $.jsx(mt, {
              'aria-describedby': nt,
              id: dt,
              labelId: pt,
              value: R,
              input: ve,
              ...en,
              children: d,
            })
          : ve,
        C && $.jsx(me, { id: nt, ...Wt, children: C }),
      ],
    });
  }),
  wR = Dn(
    $.jsx('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z',
    }),
  ),
  DR = Dn(
    $.jsx('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
    }),
  ),
  NR = Dn($.jsx('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }));
function _R() {
  return $.jsx(QC, {
    position: 'static',
    elevation: 1,
    children: $.jsxs(ER, {
      children: [
        $.jsx(wR, { sx: { mr: 2 } }),
        $.jsx(Hn, {
          variant: 'h6',
          component: 'h1',
          sx: { flexGrow: 1 },
          children: 'Markdown Publisher Toolkit',
        }),
        $.jsx(Hn, {
          variant: 'body2',
          sx: { opacity: 0.8 },
          children: 'Convert dev.to to Coder Legion',
        }),
      ],
    }),
  });
}
class vs {
  static BASE_URL = 'https://dev.to/api';
  extractArticleId(r) {
    try {
      const o = new URL(r);
      if (o.hostname !== 'dev.to') return null;
      const i = o.pathname.slice(1).split('/');
      if (i.length < 2) return null;
      const f = i[1].match(/-(\d+)$/);
      return f ? parseInt(f[1], 10) : null;
    } catch {
      return null;
    }
  }
  isValidDevToUrl(r) {
    return this.extractArticleId(r) !== null;
  }
  async fetchArticle(r) {
    const o = this.extractArticleId(r);
    if (!o) throw new Error('Invalid dev.to URL format');
    try {
      const i = await fetch(`${vs.BASE_URL}/articles/${o}`);
      if (!i.ok) {
        const f = {
          error: `Failed to fetch article: ${i.status} ${i.statusText}`,
          status: i.status,
        };
        throw new Error(f.error);
      }
      return await i.json();
    } catch (i) {
      throw i instanceof Error ? i : new Error('Unknown error occurred while fetching article');
    }
  }
  async testConnection() {
    try {
      return (await fetch(`${vs.BASE_URL}/articles?per_page=1`)).ok;
    } catch {
      return !1;
    }
  }
}
const Ry = new vs();
function BR() {
  const [n, r] = x.useState({ loading: !1, error: null, article: null, result: null }),
    o = x.useCallback((f) => Ry.isValidDevToUrl(f), []),
    i = x.useCallback(async (f) => {
      r((d) => ({ ...d, loading: !0, error: null, article: null, result: null }));
      try {
        const d = await Ry.fetchArticle(f);
        r((g) => ({ ...g, article: d }));
        const p = {
          success: !1,
          error: 'Markdown conversion not yet implemented',
          metadata: {
            title: d.title,
            description: d.description,
            canonicalUrl: d.canonical_url || d.url,
            coverImage: d.cover_image,
            author: d.user.name,
            publishedAt: d.published_at,
            tags: d.tag_list,
          },
        };
        r((g) => ({ ...g, loading: !1, result: p }));
      } catch (d) {
        r((p) => ({
          ...p,
          loading: !1,
          error: d instanceof Error ? d.message : 'Unknown error occurred',
        }));
      }
    }, []),
    c = x.useCallback(() => {
      r({ loading: !1, error: null, article: null, result: null });
    }, []);
  return { ...n, validateUrl: o, convertArticle: i, reset: c };
}
function kR() {
  const [n, r] = x.useState(''),
    {
      loading: o,
      error: i,
      article: c,
      result: f,
      validateUrl: d,
      convertArticle: p,
      reset: g,
    } = BR(),
    h = async (S) => {
      (S.preventDefault(), d(n) && (await p(n)));
    },
    b = (S) => {
      (r(S.target.value), (c || f || i) && g());
    };
  return $.jsxs($s, {
    elevation: 2,
    sx: { p: 4, maxWidth: 800, mx: 'auto' },
    children: [
      $.jsx(Hn, {
        variant: 'h4',
        component: 'h2',
        gutterBottom: !0,
        children: 'Convert dev.to Article',
      }),
      $.jsx(Hn, {
        variant: 'body1',
        color: 'text.secondary',
        sx: { mb: 3 },
        children: 'Enter a dev.to article URL to convert it to Coder Legion compatible HTML',
      }),
      $.jsxs(Co, {
        component: 'form',
        onSubmit: h,
        children: [
          $.jsx(zR, {
            fullWidth: !0,
            label: 'dev.to Article URL',
            placeholder: 'https://dev.to/username/article-title-123',
            value: n,
            onChange: b,
            error: n.length > 0 && !d(n),
            helperText:
              n.length > 0 && !d(n)
                ? 'Please enter a valid dev.to URL with article ID'
                : 'Paste the full URL of the dev.to article you want to convert',
            sx: { mb: 3 },
          }),
          $.jsx(jT, {
            type: 'submit',
            variant: 'contained',
            size: 'large',
            disabled: !d(n) || o,
            startIcon: $.jsx(NR, {}),
            sx: { mb: 2 },
            children: o ? 'Converting...' : 'Convert Article',
          }),
          $.jsx(Eo, {
            in: !!c && !i,
            children: $.jsxs(hf, {
              severity: 'success',
              icon: $.jsx(DR, {}),
              sx: { mt: 2, mb: 2 },
              children: [
                $.jsx(Hn, {
                  variant: 'h6',
                  gutterBottom: !0,
                  children: 'Article fetched successfully!',
                }),
                c &&
                  $.jsxs(Co, {
                    children: [
                      $.jsxs(Co, {
                        sx: { display: 'flex', alignItems: 'center', mb: 1 },
                        children: [
                          $.jsx(xT, {
                            src: c.user.profile_image_90,
                            alt: c.user.name,
                            sx: { width: 24, height: 24, mr: 1 },
                          }),
                          $.jsxs(Hn, {
                            variant: 'body2',
                            children: ['by ', c.user.name, ' (@', c.user.username, ')'],
                          }),
                        ],
                      }),
                      $.jsx(Hn, {
                        variant: 'subtitle1',
                        sx: { fontWeight: 'bold' },
                        children: c.title,
                      }),
                      $.jsx(Hn, {
                        variant: 'body2',
                        color: 'text.secondary',
                        sx: { mb: 1 },
                        children: c.description,
                      }),
                      $.jsx(Co, {
                        sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                        children: c.tag_list.map((S) =>
                          $.jsx(aT, { label: S, size: 'small', variant: 'outlined' }, S),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          }),
          $.jsx(Eo, {
            in: !!f,
            children: $.jsx(hf, {
              severity: f?.success ? 'success' : 'warning',
              sx: { mt: 2 },
              children: f?.success
                ? $.jsx(Hn, { children: 'Conversion completed successfully!' })
                : $.jsx(Hn, { children: f?.error || 'Conversion failed' }),
            }),
          }),
          $.jsx(Eo, {
            in: !!i,
            children: $.jsx(hf, { severity: 'error', sx: { mt: 2 }, children: i }),
          }),
        ],
      }),
    ],
  });
}
const $R = Bs({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#fafafa' },
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
});
function UR() {
  return $.jsxs(w2, {
    theme: $R,
    children: [
      $.jsx(YT, {}),
      $.jsxs(Co, {
        sx: { minHeight: '100vh', bgcolor: 'background.default' },
        children: [
          $.jsx(_R, {}),
          $.jsx(LT, { maxWidth: 'lg', sx: { py: 4 }, children: $.jsx(kR, {}) }),
        ],
      }),
    ],
  });
}
n1.createRoot(document.getElementById('root')).render(
  $.jsx(On.StrictMode, { children: $.jsx(UR, {}) }),
);
