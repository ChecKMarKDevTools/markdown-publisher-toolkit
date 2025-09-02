function HC(e, n) {
  for (var i = 0; i < n.length; i++) {
    const l = n[i];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const o in l)
        if (o !== 'default' && !(o in e)) {
          const u = Object.getOwnPropertyDescriptor(l, o);
          u && Object.defineProperty(e, o, u.get ? u : { enumerable: !0, get: () => l[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === 'childList')
        for (const c of u.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && l(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = i(o);
    fetch(o.href, u);
  }
})();
function Cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var sd = { exports: {} },
  Ya = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tb;
function qC() {
  if (tb) return Ya;
  tb = 1;
  var e = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.fragment');
  function i(l, o, u) {
    var c = null;
    if ((u !== void 0 && (c = '' + u), o.key !== void 0 && (c = '' + o.key), 'key' in o)) {
      u = {};
      for (var d in o) d !== 'key' && (u[d] = o[d]);
    } else u = o;
    return ((o = u.ref), { $$typeof: e, type: l, key: c, ref: o !== void 0 ? o : null, props: u });
  }
  return ((Ya.Fragment = n), (Ya.jsx = i), (Ya.jsxs = i), Ya);
}
var nb;
function FC() {
  return (nb || ((nb = 1), (sd.exports = qC())), sd.exports);
}
var j = FC(),
  ud = { exports: {} },
  _e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rb;
function VC() {
  if (rb) return _e;
  rb = 1;
  var e = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    y = Symbol.iterator;
  function v(S) {
    return S === null || typeof S != 'object'
      ? null
      : ((S = (y && S[y]) || S['@@iterator']), typeof S == 'function' ? S : null);
  }
  var b = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    E = {};
  function O(S, J, oe) {
    ((this.props = S), (this.context = J), (this.refs = E), (this.updater = oe || b));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (S, J) {
      if (typeof S != 'object' && typeof S != 'function' && S != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, S, J, 'setState');
    }),
    (O.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, 'forceUpdate');
    }));
  function T() {}
  T.prototype = O.prototype;
  function $(S, J, oe) {
    ((this.props = S), (this.context = J), (this.refs = E), (this.updater = oe || b));
  }
  var M = ($.prototype = new T());
  ((M.constructor = $), C(M, O.prototype), (M.isPureReactComponent = !0));
  var N = Array.isArray,
    z = { H: null, A: null, T: null, S: null, V: null },
    R = Object.prototype.hasOwnProperty;
  function H(S, J, oe, A, ce, he) {
    return (
      (oe = he.ref),
      { $$typeof: e, type: S, key: J, ref: oe !== void 0 ? oe : null, props: he }
    );
  }
  function Y(S, J) {
    return H(S.type, J, void 0, void 0, void 0, S.props);
  }
  function Q(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === e;
  }
  function B(S) {
    var J = { '=': '=0', ':': '=2' };
    return (
      '$' +
      S.replace(/[=:]/g, function (oe) {
        return J[oe];
      })
    );
  }
  var q = /\/+/g;
  function k(S, J) {
    return typeof S == 'object' && S !== null && S.key != null ? B('' + S.key) : J.toString(36);
  }
  function X() {}
  function F(S) {
    switch (S.status) {
      case 'fulfilled':
        return S.value;
      case 'rejected':
        throw S.reason;
      default:
        switch (
          (typeof S.status == 'string'
            ? S.then(X, X)
            : ((S.status = 'pending'),
              S.then(
                function (J) {
                  S.status === 'pending' && ((S.status = 'fulfilled'), (S.value = J));
                },
                function (J) {
                  S.status === 'pending' && ((S.status = 'rejected'), (S.reason = J));
                },
              )),
          S.status)
        ) {
          case 'fulfilled':
            return S.value;
          case 'rejected':
            throw S.reason;
        }
    }
    throw S;
  }
  function I(S, J, oe, A, ce) {
    var he = typeof S;
    (he === 'undefined' || he === 'boolean') && (S = null);
    var te = !1;
    if (S === null) te = !0;
    else
      switch (he) {
        case 'bigint':
        case 'string':
        case 'number':
          te = !0;
          break;
        case 'object':
          switch (S.$$typeof) {
            case e:
            case n:
              te = !0;
              break;
            case g:
              return ((te = S._init), I(te(S._payload), J, oe, A, ce));
          }
      }
    if (te)
      return (
        (ce = ce(S)),
        (te = A === '' ? '.' + k(S, 0) : A),
        N(ce)
          ? ((oe = ''),
            te != null && (oe = te.replace(q, '$&/') + '/'),
            I(ce, J, oe, '', function (Re) {
              return Re;
            }))
          : ce != null &&
            (Q(ce) &&
              (ce = Y(
                ce,
                oe +
                  (ce.key == null || (S && S.key === ce.key)
                    ? ''
                    : ('' + ce.key).replace(q, '$&/') + '/') +
                  te,
              )),
            J.push(ce)),
        1
      );
    te = 0;
    var ye = A === '' ? '.' : A + ':';
    if (N(S))
      for (var ve = 0; ve < S.length; ve++)
        ((A = S[ve]), (he = ye + k(A, ve)), (te += I(A, J, oe, he, ce)));
    else if (((ve = v(S)), typeof ve == 'function'))
      for (S = ve.call(S), ve = 0; !(A = S.next()).done; )
        ((A = A.value), (he = ye + k(A, ve++)), (te += I(A, J, oe, he, ce)));
    else if (he === 'object') {
      if (typeof S.then == 'function') return I(F(S), J, oe, A, ce);
      throw (
        (J = String(S)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (J === '[object Object]' ? 'object with keys {' + Object.keys(S).join(', ') + '}' : J) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return te;
  }
  function _(S, J, oe) {
    if (S == null) return S;
    var A = [],
      ce = 0;
    return (
      I(S, A, '', '', function (he) {
        return J.call(oe, he, ce++);
      }),
      A
    );
  }
  function K(S) {
    if (S._status === -1) {
      var J = S._result;
      ((J = J()),
        J.then(
          function (oe) {
            (S._status === 0 || S._status === -1) && ((S._status = 1), (S._result = oe));
          },
          function (oe) {
            (S._status === 0 || S._status === -1) && ((S._status = 2), (S._result = oe));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = J)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ue =
    typeof reportError == 'function'
      ? reportError
      : function (S) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var J = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == 'object' && S !== null && typeof S.message == 'string'
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(J)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', S);
            return;
          }
          console.error(S);
        };
  function re() {}
  return (
    (_e.Children = {
      map: _,
      forEach: function (S, J, oe) {
        _(
          S,
          function () {
            J.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (S) {
        var J = 0;
        return (
          _(S, function () {
            J++;
          }),
          J
        );
      },
      toArray: function (S) {
        return (
          _(S, function (J) {
            return J;
          }) || []
        );
      },
      only: function (S) {
        if (!Q(S))
          throw Error('React.Children.only expected to receive a single React element child.');
        return S;
      },
    }),
    (_e.Component = O),
    (_e.Fragment = i),
    (_e.Profiler = o),
    (_e.PureComponent = $),
    (_e.StrictMode = l),
    (_e.Suspense = h),
    (_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (_e.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return z.H.useMemoCache(S);
      },
    }),
    (_e.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (_e.cloneElement = function (S, J, oe) {
      if (S == null) throw Error('The argument must be a React element, but you passed ' + S + '.');
      var A = C({}, S.props),
        ce = S.key,
        he = void 0;
      if (J != null)
        for (te in (J.ref !== void 0 && (he = void 0), J.key !== void 0 && (ce = '' + J.key), J))
          !R.call(J, te) ||
            te === 'key' ||
            te === '__self' ||
            te === '__source' ||
            (te === 'ref' && J.ref === void 0) ||
            (A[te] = J[te]);
      var te = arguments.length - 2;
      if (te === 1) A.children = oe;
      else if (1 < te) {
        for (var ye = Array(te), ve = 0; ve < te; ve++) ye[ve] = arguments[ve + 2];
        A.children = ye;
      }
      return H(S.type, ce, void 0, void 0, he, A);
    }),
    (_e.createContext = function (S) {
      return (
        (S = {
          $$typeof: c,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: u, _context: S }),
        S
      );
    }),
    (_e.createElement = function (S, J, oe) {
      var A,
        ce = {},
        he = null;
      if (J != null)
        for (A in (J.key !== void 0 && (he = '' + J.key), J))
          R.call(J, A) && A !== 'key' && A !== '__self' && A !== '__source' && (ce[A] = J[A]);
      var te = arguments.length - 2;
      if (te === 1) ce.children = oe;
      else if (1 < te) {
        for (var ye = Array(te), ve = 0; ve < te; ve++) ye[ve] = arguments[ve + 2];
        ce.children = ye;
      }
      if (S && S.defaultProps)
        for (A in ((te = S.defaultProps), te)) ce[A] === void 0 && (ce[A] = te[A]);
      return H(S, he, void 0, void 0, null, ce);
    }),
    (_e.createRef = function () {
      return { current: null };
    }),
    (_e.forwardRef = function (S) {
      return { $$typeof: d, render: S };
    }),
    (_e.isValidElement = Q),
    (_e.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: K };
    }),
    (_e.memo = function (S, J) {
      return { $$typeof: p, type: S, compare: J === void 0 ? null : J };
    }),
    (_e.startTransition = function (S) {
      var J = z.T,
        oe = {};
      z.T = oe;
      try {
        var A = S(),
          ce = z.S;
        (ce !== null && ce(oe, A),
          typeof A == 'object' && A !== null && typeof A.then == 'function' && A.then(re, ue));
      } catch (he) {
        ue(he);
      } finally {
        z.T = J;
      }
    }),
    (_e.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (_e.use = function (S) {
      return z.H.use(S);
    }),
    (_e.useActionState = function (S, J, oe) {
      return z.H.useActionState(S, J, oe);
    }),
    (_e.useCallback = function (S, J) {
      return z.H.useCallback(S, J);
    }),
    (_e.useContext = function (S) {
      return z.H.useContext(S);
    }),
    (_e.useDebugValue = function () {}),
    (_e.useDeferredValue = function (S, J) {
      return z.H.useDeferredValue(S, J);
    }),
    (_e.useEffect = function (S, J, oe) {
      var A = z.H;
      if (typeof oe == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return A.useEffect(S, J);
    }),
    (_e.useId = function () {
      return z.H.useId();
    }),
    (_e.useImperativeHandle = function (S, J, oe) {
      return z.H.useImperativeHandle(S, J, oe);
    }),
    (_e.useInsertionEffect = function (S, J) {
      return z.H.useInsertionEffect(S, J);
    }),
    (_e.useLayoutEffect = function (S, J) {
      return z.H.useLayoutEffect(S, J);
    }),
    (_e.useMemo = function (S, J) {
      return z.H.useMemo(S, J);
    }),
    (_e.useOptimistic = function (S, J) {
      return z.H.useOptimistic(S, J);
    }),
    (_e.useReducer = function (S, J, oe) {
      return z.H.useReducer(S, J, oe);
    }),
    (_e.useRef = function (S) {
      return z.H.useRef(S);
    }),
    (_e.useState = function (S) {
      return z.H.useState(S);
    }),
    (_e.useSyncExternalStore = function (S, J, oe) {
      return z.H.useSyncExternalStore(S, J, oe);
    }),
    (_e.useTransition = function () {
      return z.H.useTransition();
    }),
    (_e.version = '19.1.1'),
    _e
  );
}
var ib;
function Sp() {
  return (ib || ((ib = 1), (ud.exports = VC())), ud.exports);
}
var D = Sp();
const Kn = Cu(D),
  Vd = HC({ __proto__: null, default: Kn }, [D]);
var cd = { exports: {} },
  Ga = {},
  fd = { exports: {} },
  dd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lb;
function YC() {
  return (
    lb ||
      ((lb = 1),
      (function (e) {
        function n(_, K) {
          var ue = _.length;
          _.push(K);
          e: for (; 0 < ue; ) {
            var re = (ue - 1) >>> 1,
              S = _[re];
            if (0 < o(S, K)) ((_[re] = K), (_[ue] = S), (ue = re));
            else break e;
          }
        }
        function i(_) {
          return _.length === 0 ? null : _[0];
        }
        function l(_) {
          if (_.length === 0) return null;
          var K = _[0],
            ue = _.pop();
          if (ue !== K) {
            _[0] = ue;
            e: for (var re = 0, S = _.length, J = S >>> 1; re < J; ) {
              var oe = 2 * (re + 1) - 1,
                A = _[oe],
                ce = oe + 1,
                he = _[ce];
              if (0 > o(A, ue))
                ce < S && 0 > o(he, A)
                  ? ((_[re] = he), (_[ce] = ue), (re = ce))
                  : ((_[re] = A), (_[oe] = ue), (re = oe));
              else if (ce < S && 0 > o(he, ue)) ((_[re] = he), (_[ce] = ue), (re = ce));
              else break e;
            }
          }
          return K;
        }
        function o(_, K) {
          var ue = _.sortIndex - K.sortIndex;
          return ue !== 0 ? ue : _.id - K.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          p = [],
          g = 1,
          y = null,
          v = 3,
          b = !1,
          C = !1,
          E = !1,
          O = !1,
          T = typeof setTimeout == 'function' ? setTimeout : null,
          $ = typeof clearTimeout == 'function' ? clearTimeout : null,
          M = typeof setImmediate < 'u' ? setImmediate : null;
        function N(_) {
          for (var K = i(p); K !== null; ) {
            if (K.callback === null) l(p);
            else if (K.startTime <= _) (l(p), (K.sortIndex = K.expirationTime), n(h, K));
            else break;
            K = i(p);
          }
        }
        function z(_) {
          if (((E = !1), N(_), !C))
            if (i(h) !== null) ((C = !0), R || ((R = !0), k()));
            else {
              var K = i(p);
              K !== null && I(z, K.startTime - _);
            }
        }
        var R = !1,
          H = -1,
          Y = 5,
          Q = -1;
        function B() {
          return O ? !0 : !(e.unstable_now() - Q < Y);
        }
        function q() {
          if (((O = !1), R)) {
            var _ = e.unstable_now();
            Q = _;
            var K = !0;
            try {
              e: {
                ((C = !1), E && ((E = !1), $(H), (H = -1)), (b = !0));
                var ue = v;
                try {
                  t: {
                    for (N(_), y = i(h); y !== null && !(y.expirationTime > _ && B()); ) {
                      var re = y.callback;
                      if (typeof re == 'function') {
                        ((y.callback = null), (v = y.priorityLevel));
                        var S = re(y.expirationTime <= _);
                        if (((_ = e.unstable_now()), typeof S == 'function')) {
                          ((y.callback = S), N(_), (K = !0));
                          break t;
                        }
                        (y === i(h) && l(h), N(_));
                      } else l(h);
                      y = i(h);
                    }
                    if (y !== null) K = !0;
                    else {
                      var J = i(p);
                      (J !== null && I(z, J.startTime - _), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((y = null), (v = ue), (b = !1));
                }
                K = void 0;
              }
            } finally {
              K ? k() : (R = !1);
            }
          }
        }
        var k;
        if (typeof M == 'function')
          k = function () {
            M(q);
          };
        else if (typeof MessageChannel < 'u') {
          var X = new MessageChannel(),
            F = X.port2;
          ((X.port1.onmessage = q),
            (k = function () {
              F.postMessage(null);
            }));
        } else
          k = function () {
            T(q, 0);
          };
        function I(_, K) {
          H = T(function () {
            _(e.unstable_now());
          }, K);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (e.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Y = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (e.unstable_next = function (_) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = v;
            }
            var ue = v;
            v = K;
            try {
              return _();
            } finally {
              v = ue;
            }
          }),
          (e.unstable_requestPaint = function () {
            O = !0;
          }),
          (e.unstable_runWithPriority = function (_, K) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var ue = v;
            v = _;
            try {
              return K();
            } finally {
              v = ue;
            }
          }),
          (e.unstable_scheduleCallback = function (_, K, ue) {
            var re = e.unstable_now();
            switch (
              (typeof ue == 'object' && ue !== null
                ? ((ue = ue.delay), (ue = typeof ue == 'number' && 0 < ue ? re + ue : re))
                : (ue = re),
              _)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = ue + S),
              (_ = {
                id: g++,
                callback: K,
                priorityLevel: _,
                startTime: ue,
                expirationTime: S,
                sortIndex: -1,
              }),
              ue > re
                ? ((_.sortIndex = ue),
                  n(p, _),
                  i(h) === null && _ === i(p) && (E ? ($(H), (H = -1)) : (E = !0), I(z, ue - re)))
                : ((_.sortIndex = S), n(h, _), C || b || ((C = !0), R || ((R = !0), k()))),
              _
            );
          }),
          (e.unstable_shouldYield = B),
          (e.unstable_wrapCallback = function (_) {
            var K = v;
            return function () {
              var ue = v;
              v = K;
              try {
                return _.apply(this, arguments);
              } finally {
                v = ue;
              }
            };
          }));
      })(dd)),
    dd
  );
}
var ab;
function GC() {
  return (ab || ((ab = 1), (fd.exports = YC())), fd.exports);
}
var pd = { exports: {} },
  nn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ob;
function XC() {
  if (ob) return nn;
  ob = 1;
  var e = Sp();
  function n(h) {
    var p = 'https://react.dev/errors/' + h;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++) p += '&args[]=' + encodeURIComponent(arguments[g]);
    }
    return (
      'Minified React error #' +
      h +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function i() {}
  var l = {
      d: {
        f: i,
        r: function () {
          throw Error(n(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function u(h, p, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: y == null ? null : '' + y,
      children: h,
      containerInfo: p,
      implementation: g,
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(h, p) {
    if (h === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (nn.createPortal = function (h, p) {
      var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(n(299));
      return u(h, p, null, g);
    }),
    (nn.flushSync = function (h) {
      var p = c.T,
        g = l.p;
      try {
        if (((c.T = null), (l.p = 2), h)) return h();
      } finally {
        ((c.T = p), (l.p = g), l.d.f());
      }
    }),
    (nn.preconnect = function (h, p) {
      typeof h == 'string' &&
        (p
          ? ((p = p.crossOrigin),
            (p = typeof p == 'string' ? (p === 'use-credentials' ? p : '') : void 0))
          : (p = null),
        l.d.C(h, p));
    }),
    (nn.prefetchDNS = function (h) {
      typeof h == 'string' && l.d.D(h);
    }),
    (nn.preinit = function (h, p) {
      if (typeof h == 'string' && p && typeof p.as == 'string') {
        var g = p.as,
          y = d(g, p.crossOrigin),
          v = typeof p.integrity == 'string' ? p.integrity : void 0,
          b = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        g === 'style'
          ? l.d.S(h, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: b,
            })
          : g === 'script' &&
            l.d.X(h, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: b,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (nn.preinitModule = function (h, p) {
      if (typeof h == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var g = d(p.as, p.crossOrigin);
            l.d.M(h, {
              crossOrigin: g,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && l.d.M(h);
    }),
    (nn.preload = function (h, p) {
      if (typeof h == 'string' && typeof p == 'object' && p !== null && typeof p.as == 'string') {
        var g = p.as,
          y = d(g, p.crossOrigin);
        l.d.L(h, g, {
          crossOrigin: y,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (nn.preloadModule = function (h, p) {
      if (typeof h == 'string')
        if (p) {
          var g = d(p.as, p.crossOrigin);
          l.d.m(h, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else l.d.m(h);
    }),
    (nn.requestFormReset = function (h) {
      l.d.r(h);
    }),
    (nn.unstable_batchedUpdates = function (h, p) {
      return h(p);
    }),
    (nn.useFormState = function (h, p, g) {
      return c.H.useFormState(h, p, g);
    }),
    (nn.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (nn.version = '19.1.1'),
    nn
  );
}
var sb;
function f1() {
  if (sb) return pd.exports;
  sb = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return (e(), (pd.exports = XC()), pd.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ub;
function KC() {
  if (ub) return Ga;
  ub = 1;
  var e = GC(),
    n = Sp(),
    i = f1();
  function l(t) {
    var r = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      r += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) r += '&args[]=' + encodeURIComponent(arguments[a]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      r +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var r = t,
      a = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do ((r = t), (r.flags & 4098) !== 0 && (a = r.return), (t = r.return));
      while (t);
    }
    return r.tag === 3 ? a : null;
  }
  function c(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if ((r === null && ((t = t.alternate), t !== null && (r = t.memoizedState)), r !== null))
        return r.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (u(t) !== t) throw Error(l(188));
  }
  function h(t) {
    var r = t.alternate;
    if (!r) {
      if (((r = u(t)), r === null)) throw Error(l(188));
      return r !== t ? null : t;
    }
    for (var a = t, s = r; ; ) {
      var f = a.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (((s = f.return), s !== null)) {
          a = s;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === a) return (d(f), t);
          if (m === s) return (d(f), r);
          m = m.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== s.return) ((a = f), (s = m));
      else {
        for (var x = !1, w = f.child; w; ) {
          if (w === a) {
            ((x = !0), (a = f), (s = m));
            break;
          }
          if (w === s) {
            ((x = !0), (s = f), (a = m));
            break;
          }
          w = w.sibling;
        }
        if (!x) {
          for (w = m.child; w; ) {
            if (w === a) {
              ((x = !0), (a = m), (s = f));
              break;
            }
            if (w === s) {
              ((x = !0), (s = m), (a = f));
              break;
            }
            w = w.sibling;
          }
          if (!x) throw Error(l(189));
        }
      }
      if (a.alternate !== s) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? t : r;
  }
  function p(t) {
    var r = t.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((r = p(t)), r !== null)) return r;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    y = Symbol.for('react.element'),
    v = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    C = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    O = Symbol.for('react.profiler'),
    T = Symbol.for('react.provider'),
    $ = Symbol.for('react.consumer'),
    M = Symbol.for('react.context'),
    N = Symbol.for('react.forward_ref'),
    z = Symbol.for('react.suspense'),
    R = Symbol.for('react.suspense_list'),
    H = Symbol.for('react.memo'),
    Y = Symbol.for('react.lazy'),
    Q = Symbol.for('react.activity'),
    B = Symbol.for('react.memo_cache_sentinel'),
    q = Symbol.iterator;
  function k(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (q && t[q]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var X = Symbol.for('react.client.reference');
  function F(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === X ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case C:
        return 'Fragment';
      case O:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case z:
        return 'Suspense';
      case R:
        return 'SuspenseList';
      case Q:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case b:
          return 'Portal';
        case M:
          return (t.displayName || 'Context') + '.Provider';
        case $:
          return (t._context.displayName || 'Context') + '.Consumer';
        case N:
          var r = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = r.displayName || r.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case H:
          return ((r = t.displayName || null), r !== null ? r : F(t.type) || 'Memo');
        case Y:
          ((r = t._payload), (t = t._init));
          try {
            return F(t(r));
          } catch {}
      }
    return null;
  }
  var I = Array.isArray,
    _ = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ue = { pending: !1, data: null, method: null, action: null },
    re = [],
    S = -1;
  function J(t) {
    return { current: t };
  }
  function oe(t) {
    0 > S || ((t.current = re[S]), (re[S] = null), S--);
  }
  function A(t, r) {
    (S++, (re[S] = t.current), (t.current = r));
  }
  var ce = J(null),
    he = J(null),
    te = J(null),
    ye = J(null);
  function ve(t, r) {
    switch ((A(te, r), A(he, t), A(ce, null), r.nodeType)) {
      case 9:
      case 11:
        t = (t = r.documentElement) && (t = t.namespaceURI) ? My(t) : 0;
        break;
      default:
        if (((t = r.tagName), (r = r.namespaceURI))) ((r = My(r)), (t = Oy(r, t)));
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
    (oe(ce), A(ce, t));
  }
  function Re() {
    (oe(ce), oe(he), oe(te));
  }
  function Ce(t) {
    t.memoizedState !== null && A(ye, t);
    var r = ce.current,
      a = Oy(r, t.type);
    r !== a && (A(he, t), A(ce, a));
  }
  function Oe(t) {
    (he.current === t && (oe(ce), oe(he)), ye.current === t && (oe(ye), (Ia._currentValue = ue)));
  }
  var je = Object.prototype.hasOwnProperty,
    Ct = e.unstable_scheduleCallback,
    De = e.unstable_cancelCallback,
    Ye = e.unstable_shouldYield,
    _t = e.unstable_requestPaint,
    Ge = e.unstable_now,
    bt = e.unstable_getCurrentPriorityLevel,
    ut = e.unstable_ImmediatePriority,
    vt = e.unstable_UserBlockingPriority,
    nt = e.unstable_NormalPriority,
    Se = e.unstable_LowPriority,
    sn = e.unstable_IdlePriority,
    kt = e.log,
    xn = e.unstable_setDisableYieldValue,
    ee = null,
    le = null;
  function pe(t) {
    if ((typeof kt == 'function' && xn(t), le && typeof le.setStrictMode == 'function'))
      try {
        le.setStrictMode(ee, t);
      } catch {}
  }
  var me = Math.clz32 ? Math.clz32 : Jt,
    Ne = Math.log,
    Le = Math.LN2;
  function Jt(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ne(t) / Le) | 0)) | 0);
  }
  var jt = 256,
    Sn = 4194304;
  function xe(t) {
    var r = t & 42;
    if (r !== 0) return r;
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
  function ze(t, r, a) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var f = 0,
      m = t.suspendedLanes,
      x = t.pingedLanes;
    t = t.warmLanes;
    var w = s & 134217727;
    return (
      w !== 0
        ? ((s = w & ~m),
          s !== 0
            ? (f = xe(s))
            : ((x &= w), x !== 0 ? (f = xe(x)) : a || ((a = w & ~t), a !== 0 && (f = xe(a)))))
        : ((w = s & ~m),
          w !== 0
            ? (f = xe(w))
            : x !== 0
              ? (f = xe(x))
              : a || ((a = s & ~t), a !== 0 && (f = xe(a)))),
      f === 0
        ? 0
        : r !== 0 &&
            r !== f &&
            (r & m) === 0 &&
            ((m = f & -f), (a = r & -r), m >= a || (m === 32 && (a & 4194048) !== 0))
          ? r
          : f
    );
  }
  function rt(t, r) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
  }
  function qt(t, r) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
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
        return r + 5e3;
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
  function Ql() {
    var t = jt;
    return ((jt <<= 1), (jt & 4194048) === 0 && (jt = 256), t);
  }
  function ph() {
    var t = Sn;
    return ((Sn <<= 1), (Sn & 62914560) === 0 && (Sn = 4194304), t);
  }
  function Qu(t) {
    for (var r = [], a = 0; 31 > a; a++) r.push(t);
    return r;
  }
  function Zl(t, r) {
    ((t.pendingLanes |= r),
      r !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Ox(t, r, a, s, f, m) {
    var x = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var w = t.entanglements,
      L = t.expirationTimes,
      G = t.hiddenUpdates;
    for (a = x & ~a; 0 < a; ) {
      var ie = 31 - me(a),
        se = 1 << ie;
      ((w[ie] = 0), (L[ie] = -1));
      var Z = G[ie];
      if (Z !== null)
        for (G[ie] = null, ie = 0; ie < Z.length; ie++) {
          var W = Z[ie];
          W !== null && (W.lane &= -536870913);
        }
      a &= ~se;
    }
    (s !== 0 && hh(t, s, 0),
      m !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= m & ~(x & ~r)));
  }
  function hh(t, r, a) {
    ((t.pendingLanes |= r), (t.suspendedLanes &= ~r));
    var s = 31 - me(r);
    ((t.entangledLanes |= r),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (a & 4194090)));
  }
  function mh(t, r) {
    var a = (t.entangledLanes |= r);
    for (t = t.entanglements; a; ) {
      var s = 31 - me(a),
        f = 1 << s;
      ((f & r) | (t[s] & r) && (t[s] |= r), (a &= ~f));
    }
  }
  function Zu(t) {
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
  function Wu(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function gh() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ky(t.type));
  }
  function zx(t, r) {
    var a = K.p;
    try {
      return ((K.p = t), r());
    } finally {
      K.p = a;
    }
  }
  var Ur = Math.random().toString(36).slice(2),
    en = '__reactFiber$' + Ur,
    fn = '__reactProps$' + Ur,
    qi = '__reactContainer$' + Ur,
    Ju = '__reactEvents$' + Ur,
    Dx = '__reactListeners$' + Ur,
    Nx = '__reactHandles$' + Ur,
    yh = '__reactResources$' + Ur,
    Wl = '__reactMarker$' + Ur;
  function ec(t) {
    (delete t[en], delete t[fn], delete t[Ju], delete t[Dx], delete t[Nx]);
  }
  function Fi(t) {
    var r = t[en];
    if (r) return r;
    for (var a = t.parentNode; a; ) {
      if ((r = a[qi] || a[en])) {
        if (((a = r.alternate), r.child !== null || (a !== null && a.child !== null)))
          for (t = _y(t); t !== null; ) {
            if ((a = t[en])) return a;
            t = _y(t);
          }
        return r;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function Vi(t) {
    if ((t = t[en] || t[qi])) {
      var r = t.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3) return t;
    }
    return null;
  }
  function Jl(t) {
    var r = t.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return t.stateNode;
    throw Error(l(33));
  }
  function Yi(t) {
    var r = t[yh];
    return (r || (r = t[yh] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), r);
  }
  function Ft(t) {
    t[Wl] = !0;
  }
  var bh = new Set(),
    vh = {};
  function hi(t, r) {
    (Gi(t, r), Gi(t + 'Capture', r));
  }
  function Gi(t, r) {
    for (vh[t] = r, t = 0; t < r.length; t++) bh.add(r[t]);
  }
  var _x = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    xh = {},
    Sh = {};
  function Bx(t) {
    return je.call(Sh, t)
      ? !0
      : je.call(xh, t)
        ? !1
        : _x.test(t)
          ? (Sh[t] = !0)
          : ((xh[t] = !0), !1);
  }
  function No(t, r, a) {
    if (Bx(r))
      if (a === null) t.removeAttribute(r);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(r);
            return;
          case 'boolean':
            var s = r.toLowerCase().slice(0, 5);
            if (s !== 'data-' && s !== 'aria-') {
              t.removeAttribute(r);
              return;
            }
        }
        t.setAttribute(r, '' + a);
      }
  }
  function _o(t, r, a) {
    if (a === null) t.removeAttribute(r);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(r);
          return;
      }
      t.setAttribute(r, '' + a);
    }
  }
  function gr(t, r, a, s) {
    if (s === null) t.removeAttribute(a);
    else {
      switch (typeof s) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(r, a, '' + s);
    }
  }
  var tc, Ch;
  function Xi(t) {
    if (tc === void 0)
      try {
        throw Error();
      } catch (a) {
        var r = a.stack.trim().match(/\n( *(at )?)/);
        ((tc = (r && r[1]) || ''),
          (Ch =
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
      tc +
      t +
      Ch
    );
  }
  var nc = !1;
  function rc(t, r) {
    if (!t || nc) return '';
    nc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var se = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(se.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(se, []);
                } catch (W) {
                  var Z = W;
                }
                Reflect.construct(t, [], se);
              } else {
                try {
                  se.call();
                } catch (W) {
                  Z = W;
                }
                t.call(se.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                Z = W;
              }
              (se = t()) && typeof se.catch == 'function' && se.catch(function () {});
            }
          } catch (W) {
            if (W && Z && typeof W.stack == 'string') return [W.stack, Z.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var f = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, 'name');
      f &&
        f.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var m = s.DetermineComponentFrameRoot(),
        x = m[0],
        w = m[1];
      if (x && w) {
        var L = x.split(`
`),
          G = w.split(`
`);
        for (f = s = 0; s < L.length && !L[s].includes('DetermineComponentFrameRoot'); ) s++;
        for (; f < G.length && !G[f].includes('DetermineComponentFrameRoot'); ) f++;
        if (s === L.length || f === G.length)
          for (s = L.length - 1, f = G.length - 1; 1 <= s && 0 <= f && L[s] !== G[f]; ) f--;
        for (; 1 <= s && 0 <= f; s--, f--)
          if (L[s] !== G[f]) {
            if (s !== 1 || f !== 1)
              do
                if ((s--, f--, 0 > f || L[s] !== G[f])) {
                  var ie =
                    `
` + L[s].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      ie.includes('<anonymous>') &&
                      (ie = ie.replace('<anonymous>', t.displayName)),
                    ie
                  );
                }
              while (1 <= s && 0 <= f);
            break;
          }
      }
    } finally {
      ((nc = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : '') ? Xi(a) : '';
  }
  function Lx(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Xi(t.type);
      case 16:
        return Xi('Lazy');
      case 13:
        return Xi('Suspense');
      case 19:
        return Xi('SuspenseList');
      case 0:
      case 15:
        return rc(t.type, !1);
      case 11:
        return rc(t.type.render, !1);
      case 1:
        return rc(t.type, !0);
      case 31:
        return Xi('Activity');
      default:
        return '';
    }
  }
  function kh(t) {
    try {
      var r = '';
      do ((r += Lx(t)), (t = t.return));
      while (t);
      return r;
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
  function Nn(t) {
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
  function wh(t) {
    var r = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (r === 'checkbox' || r === 'radio');
  }
  function $x(t) {
    var r = wh(t) ? 'checked' : 'value',
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
      s = '' + t[r];
    if (
      !t.hasOwnProperty(r) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var f = a.get,
        m = a.set;
      return (
        Object.defineProperty(t, r, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (x) {
            ((s = '' + x), m.call(this, x));
          },
        }),
        Object.defineProperty(t, r, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (x) {
            s = '' + x;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[r]);
          },
        }
      );
    }
  }
  function Bo(t) {
    t._valueTracker || (t._valueTracker = $x(t));
  }
  function Eh(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var a = r.getValue(),
      s = '';
    return (
      t && (s = wh(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = s),
      t !== a ? (r.setValue(t), !0) : !1
    );
  }
  function Lo(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ux = /[\n"\\]/g;
  function _n(t) {
    return t.replace(Ux, function (r) {
      return '\\' + r.charCodeAt(0).toString(16) + ' ';
    });
  }
  function ic(t, r, a, s, f, m, x, w) {
    ((t.name = ''),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean'
        ? (t.type = x)
        : t.removeAttribute('type'),
      r != null
        ? x === 'number'
          ? ((r === 0 && t.value === '') || t.value != r) && (t.value = '' + Nn(r))
          : t.value !== '' + Nn(r) && (t.value = '' + Nn(r))
        : (x !== 'submit' && x !== 'reset') || t.removeAttribute('value'),
      r != null
        ? lc(t, x, Nn(r))
        : a != null
          ? lc(t, x, Nn(a))
          : s != null && t.removeAttribute('value'),
      f == null && m != null && (t.defaultChecked = !!m),
      f != null && (t.checked = f && typeof f != 'function' && typeof f != 'symbol'),
      w != null && typeof w != 'function' && typeof w != 'symbol' && typeof w != 'boolean'
        ? (t.name = '' + Nn(w))
        : t.removeAttribute('name'));
  }
  function Th(t, r, a, s, f, m, x, w) {
    if (
      (m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean' &&
        (t.type = m),
      r != null || a != null)
    ) {
      if (!((m !== 'submit' && m !== 'reset') || r != null)) return;
      ((a = a != null ? '' + Nn(a) : ''),
        (r = r != null ? '' + Nn(r) : a),
        w || r === t.value || (t.value = r),
        (t.defaultValue = r));
    }
    ((s = s ?? f),
      (s = typeof s != 'function' && typeof s != 'symbol' && !!s),
      (t.checked = w ? t.checked : !!s),
      (t.defaultChecked = !!s),
      x != null &&
        typeof x != 'function' &&
        typeof x != 'symbol' &&
        typeof x != 'boolean' &&
        (t.name = x));
  }
  function lc(t, r, a) {
    (r === 'number' && Lo(t.ownerDocument) === t) ||
      t.defaultValue === '' + a ||
      (t.defaultValue = '' + a);
  }
  function Ki(t, r, a, s) {
    if (((t = t.options), r)) {
      r = {};
      for (var f = 0; f < a.length; f++) r['$' + a[f]] = !0;
      for (a = 0; a < t.length; a++)
        ((f = r.hasOwnProperty('$' + t[a].value)),
          t[a].selected !== f && (t[a].selected = f),
          f && s && (t[a].defaultSelected = !0));
    } else {
      for (a = '' + Nn(a), r = null, f = 0; f < t.length; f++) {
        if (t[f].value === a) {
          ((t[f].selected = !0), s && (t[f].defaultSelected = !0));
          return;
        }
        r !== null || t[f].disabled || (r = t[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ah(t, r, a) {
    if (r != null && ((r = '' + Nn(r)), r !== t.value && (t.value = r), a == null)) {
      t.defaultValue !== r && (t.defaultValue = r);
      return;
    }
    t.defaultValue = a != null ? '' + Nn(a) : '';
  }
  function Rh(t, r, a, s) {
    if (r == null) {
      if (s != null) {
        if (a != null) throw Error(l(92));
        if (I(s)) {
          if (1 < s.length) throw Error(l(93));
          s = s[0];
        }
        a = s;
      }
      (a == null && (a = ''), (r = a));
    }
    ((a = Nn(r)),
      (t.defaultValue = a),
      (s = t.textContent),
      s === a && s !== '' && s !== null && (t.value = s));
  }
  function Qi(t, r) {
    if (r) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var jx = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Mh(t, r, a) {
    var s = r.indexOf('--') === 0;
    a == null || typeof a == 'boolean' || a === ''
      ? s
        ? t.setProperty(r, '')
        : r === 'float'
          ? (t.cssFloat = '')
          : (t[r] = '')
      : s
        ? t.setProperty(r, a)
        : typeof a != 'number' || a === 0 || jx.has(r)
          ? r === 'float'
            ? (t.cssFloat = a)
            : (t[r] = ('' + a).trim())
          : (t[r] = a + 'px');
  }
  function Oh(t, r, a) {
    if (r != null && typeof r != 'object') throw Error(l(62));
    if (((t = t.style), a != null)) {
      for (var s in a)
        !a.hasOwnProperty(s) ||
          (r != null && r.hasOwnProperty(s)) ||
          (s.indexOf('--') === 0
            ? t.setProperty(s, '')
            : s === 'float'
              ? (t.cssFloat = '')
              : (t[s] = ''));
      for (var f in r) ((s = r[f]), r.hasOwnProperty(f) && a[f] !== s && Mh(t, f, s));
    } else for (var m in r) r.hasOwnProperty(m) && Mh(t, m, r[m]);
  }
  function ac(t) {
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
  var Px = new Map([
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
    Ix =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $o(t) {
    return Ix.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var oc = null;
  function sc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Zi = null,
    Wi = null;
  function zh(t) {
    var r = Vi(t);
    if (r && (t = r.stateNode)) {
      var a = t[fn] || null;
      e: switch (((t = r.stateNode), r.type)) {
        case 'input':
          if (
            (ic(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (r = a.name),
            a.type === 'radio' && r != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + _n('' + r) + '"][type="radio"]'), r = 0;
              r < a.length;
              r++
            ) {
              var s = a[r];
              if (s !== t && s.form === t.form) {
                var f = s[fn] || null;
                if (!f) throw Error(l(90));
                ic(
                  s,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (r = 0; r < a.length; r++) ((s = a[r]), s.form === t.form && Eh(s));
          }
          break e;
        case 'textarea':
          Ah(t, a.value, a.defaultValue);
          break e;
        case 'select':
          ((r = a.value), r != null && Ki(t, !!a.multiple, r, !1));
      }
    }
  }
  var uc = !1;
  function Dh(t, r, a) {
    if (uc) return t(r, a);
    uc = !0;
    try {
      var s = t(r);
      return s;
    } finally {
      if (
        ((uc = !1),
        (Zi !== null || Wi !== null) &&
          (Cs(), Zi && ((r = Zi), (t = Wi), (Wi = Zi = null), zh(r), t)))
      )
        for (r = 0; r < t.length; r++) zh(t[r]);
    }
  }
  function ea(t, r) {
    var a = t.stateNode;
    if (a === null) return null;
    var s = a[fn] || null;
    if (s === null) return null;
    a = s[r];
    e: switch (r) {
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
        ((s = !s.disabled) ||
          ((t = t.type),
          (s = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !s));
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != 'function') throw Error(l(231, r, typeof a));
    return a;
  }
  var yr = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    cc = !1;
  if (yr)
    try {
      var ta = {};
      (Object.defineProperty(ta, 'passive', {
        get: function () {
          cc = !0;
        },
      }),
        window.addEventListener('test', ta, ta),
        window.removeEventListener('test', ta, ta));
    } catch {
      cc = !1;
    }
  var jr = null,
    fc = null,
    Uo = null;
  function Nh() {
    if (Uo) return Uo;
    var t,
      r = fc,
      a = r.length,
      s,
      f = 'value' in jr ? jr.value : jr.textContent,
      m = f.length;
    for (t = 0; t < a && r[t] === f[t]; t++);
    var x = a - t;
    for (s = 1; s <= x && r[a - s] === f[m - s]; s++);
    return (Uo = f.slice(t, 1 < s ? 1 - s : void 0));
  }
  function jo(t) {
    var r = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && r === 13 && (t = 13)) : (t = r),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Po() {
    return !0;
  }
  function _h() {
    return !1;
  }
  function dn(t) {
    function r(a, s, f, m, x) {
      ((this._reactName = a),
        (this._targetInst = f),
        (this.type = s),
        (this.nativeEvent = m),
        (this.target = x),
        (this.currentTarget = null));
      for (var w in t) t.hasOwnProperty(w) && ((a = t[w]), (this[w] = a ? a(m) : m[w]));
      return (
        (this.isDefaultPrevented = (
          m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
        )
          ? Po
          : _h),
        (this.isPropagationStopped = _h),
        this
      );
    }
    return (
      g(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
            (this.isDefaultPrevented = Po));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
            (this.isPropagationStopped = Po));
        },
        persist: function () {},
        isPersistent: Po,
      }),
      r
    );
  }
  var mi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Io = dn(mi),
    na = g({}, mi, { view: 0, detail: 0 }),
    Hx = dn(na),
    dc,
    pc,
    ra,
    Ho = g({}, na, {
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
      getModifierState: mc,
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
          : (t !== ra &&
              (ra && t.type === 'mousemove'
                ? ((dc = t.screenX - ra.screenX), (pc = t.screenY - ra.screenY))
                : (pc = dc = 0),
              (ra = t)),
            dc);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : pc;
      },
    }),
    Bh = dn(Ho),
    qx = g({}, Ho, { dataTransfer: 0 }),
    Fx = dn(qx),
    Vx = g({}, na, { relatedTarget: 0 }),
    hc = dn(Vx),
    Yx = g({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gx = dn(Yx),
    Xx = g({}, mi, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Kx = dn(Xx),
    Qx = g({}, mi, { data: 0 }),
    Lh = dn(Qx),
    Zx = {
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
    Wx = {
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
    Jx = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function eS(t) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(t) : (t = Jx[t]) ? !!r[t] : !1;
  }
  function mc() {
    return eS;
  }
  var tS = g({}, na, {
      key: function (t) {
        if (t.key) {
          var r = Zx[t.key] || t.key;
          if (r !== 'Unidentified') return r;
        }
        return t.type === 'keypress'
          ? ((t = jo(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? Wx[t.keyCode] || 'Unidentified'
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
      getModifierState: mc,
      charCode: function (t) {
        return t.type === 'keypress' ? jo(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? jo(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0;
      },
    }),
    nS = dn(tS),
    rS = g({}, Ho, {
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
    $h = dn(rS),
    iS = g({}, na, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mc,
    }),
    lS = dn(iS),
    aS = g({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oS = dn(aS),
    sS = g({}, Ho, {
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
    uS = dn(sS),
    cS = g({}, mi, { newState: 0, oldState: 0 }),
    fS = dn(cS),
    dS = [9, 13, 27, 32],
    gc = yr && 'CompositionEvent' in window,
    ia = null;
  yr && 'documentMode' in document && (ia = document.documentMode);
  var pS = yr && 'TextEvent' in window && !ia,
    Uh = yr && (!gc || (ia && 8 < ia && 11 >= ia)),
    jh = ' ',
    Ph = !1;
  function Ih(t, r) {
    switch (t) {
      case 'keyup':
        return dS.indexOf(r.keyCode) !== -1;
      case 'keydown':
        return r.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Hh(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var Ji = !1;
  function hS(t, r) {
    switch (t) {
      case 'compositionend':
        return Hh(r);
      case 'keypress':
        return r.which !== 32 ? null : ((Ph = !0), jh);
      case 'textInput':
        return ((t = r.data), t === jh && Ph ? null : t);
      default:
        return null;
    }
  }
  function mS(t, r) {
    if (Ji)
      return t === 'compositionend' || (!gc && Ih(t, r))
        ? ((t = Nh()), (Uo = fc = jr = null), (Ji = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case 'compositionend':
        return Uh && r.locale !== 'ko' ? null : r.data;
      default:
        return null;
    }
  }
  var gS = {
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
  function qh(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === 'input' ? !!gS[t.type] : r === 'textarea';
  }
  function Fh(t, r, a, s) {
    (Zi ? (Wi ? Wi.push(s) : (Wi = [s])) : (Zi = s),
      (r = Rs(r, 'onChange')),
      0 < r.length &&
        ((a = new Io('onChange', 'change', null, a, s)), t.push({ event: a, listeners: r })));
  }
  var la = null,
    aa = null;
  function yS(t) {
    wy(t, 0);
  }
  function qo(t) {
    var r = Jl(t);
    if (Eh(r)) return t;
  }
  function Vh(t, r) {
    if (t === 'change') return r;
  }
  var Yh = !1;
  if (yr) {
    var yc;
    if (yr) {
      var bc = 'oninput' in document;
      if (!bc) {
        var Gh = document.createElement('div');
        (Gh.setAttribute('oninput', 'return;'), (bc = typeof Gh.oninput == 'function'));
      }
      yc = bc;
    } else yc = !1;
    Yh = yc && (!document.documentMode || 9 < document.documentMode);
  }
  function Xh() {
    la && (la.detachEvent('onpropertychange', Kh), (aa = la = null));
  }
  function Kh(t) {
    if (t.propertyName === 'value' && qo(aa)) {
      var r = [];
      (Fh(r, aa, t, sc(t)), Dh(yS, r));
    }
  }
  function bS(t, r, a) {
    t === 'focusin'
      ? (Xh(), (la = r), (aa = a), la.attachEvent('onpropertychange', Kh))
      : t === 'focusout' && Xh();
  }
  function vS(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return qo(aa);
  }
  function xS(t, r) {
    if (t === 'click') return qo(r);
  }
  function SS(t, r) {
    if (t === 'input' || t === 'change') return qo(r);
  }
  function CS(t, r) {
    return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
  }
  var Cn = typeof Object.is == 'function' ? Object.is : CS;
  function oa(t, r) {
    if (Cn(t, r)) return !0;
    if (typeof t != 'object' || t === null || typeof r != 'object' || r === null) return !1;
    var a = Object.keys(t),
      s = Object.keys(r);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var f = a[s];
      if (!je.call(r, f) || !Cn(t[f], r[f])) return !1;
    }
    return !0;
  }
  function Qh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Zh(t, r) {
    var a = Qh(t);
    t = 0;
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (((s = t + a.textContent.length), t <= r && s >= r)) return { node: a, offset: r - t };
        t = s;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Qh(a);
    }
  }
  function Wh(t, r) {
    return t && r
      ? t === r
        ? !0
        : t && t.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? Wh(t, r.parentNode)
            : 'contains' in t
              ? t.contains(r)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function Jh(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var r = Lo(t.document); r instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof r.contentWindow.location.href == 'string';
      } catch {
        a = !1;
      }
      if (a) t = r.contentWindow;
      else break;
      r = Lo(t.document);
    }
    return r;
  }
  function vc(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      r &&
      ((r === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        r === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var kS = yr && 'documentMode' in document && 11 >= document.documentMode,
    el = null,
    xc = null,
    sa = null,
    Sc = !1;
  function em(t, r, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sc ||
      el == null ||
      el !== Lo(s) ||
      ((s = el),
      'selectionStart' in s && vc(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (sa && oa(sa, s)) ||
        ((sa = s),
        (s = Rs(xc, 'onSelect')),
        0 < s.length &&
          ((r = new Io('onSelect', 'select', null, r, a)),
          t.push({ event: r, listeners: s }),
          (r.target = el))));
  }
  function gi(t, r) {
    var a = {};
    return (
      (a[t.toLowerCase()] = r.toLowerCase()),
      (a['Webkit' + t] = 'webkit' + r),
      (a['Moz' + t] = 'moz' + r),
      a
    );
  }
  var tl = {
      animationend: gi('Animation', 'AnimationEnd'),
      animationiteration: gi('Animation', 'AnimationIteration'),
      animationstart: gi('Animation', 'AnimationStart'),
      transitionrun: gi('Transition', 'TransitionRun'),
      transitionstart: gi('Transition', 'TransitionStart'),
      transitioncancel: gi('Transition', 'TransitionCancel'),
      transitionend: gi('Transition', 'TransitionEnd'),
    },
    Cc = {},
    tm = {};
  yr &&
    ((tm = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete tl.animationend.animation,
      delete tl.animationiteration.animation,
      delete tl.animationstart.animation),
    'TransitionEvent' in window || delete tl.transitionend.transition);
  function yi(t) {
    if (Cc[t]) return Cc[t];
    if (!tl[t]) return t;
    var r = tl[t],
      a;
    for (a in r) if (r.hasOwnProperty(a) && a in tm) return (Cc[t] = r[a]);
    return t;
  }
  var nm = yi('animationend'),
    rm = yi('animationiteration'),
    im = yi('animationstart'),
    wS = yi('transitionrun'),
    ES = yi('transitionstart'),
    TS = yi('transitioncancel'),
    lm = yi('transitionend'),
    am = new Map(),
    kc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  kc.push('scrollEnd');
  function Yn(t, r) {
    (am.set(t, r), hi(r, [t]));
  }
  var om = new WeakMap();
  function Bn(t, r) {
    if (typeof t == 'object' && t !== null) {
      var a = om.get(t);
      return a !== void 0 ? a : ((r = { value: t, source: r, stack: kh(r) }), om.set(t, r), r);
    }
    return { value: t, source: r, stack: kh(r) };
  }
  var Ln = [],
    nl = 0,
    wc = 0;
  function Fo() {
    for (var t = nl, r = (wc = nl = 0); r < t; ) {
      var a = Ln[r];
      Ln[r++] = null;
      var s = Ln[r];
      Ln[r++] = null;
      var f = Ln[r];
      Ln[r++] = null;
      var m = Ln[r];
      if (((Ln[r++] = null), s !== null && f !== null)) {
        var x = s.pending;
        (x === null ? (f.next = f) : ((f.next = x.next), (x.next = f)), (s.pending = f));
      }
      m !== 0 && sm(a, f, m);
    }
  }
  function Vo(t, r, a, s) {
    ((Ln[nl++] = t),
      (Ln[nl++] = r),
      (Ln[nl++] = a),
      (Ln[nl++] = s),
      (wc |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s));
  }
  function Ec(t, r, a, s) {
    return (Vo(t, r, a, s), Yo(t));
  }
  function rl(t, r) {
    return (Vo(t, null, null, r), Yo(t));
  }
  function sm(t, r, a) {
    t.lanes |= a;
    var s = t.alternate;
    s !== null && (s.lanes |= a);
    for (var f = !1, m = t.return; m !== null; )
      ((m.childLanes |= a),
        (s = m.alternate),
        s !== null && (s.childLanes |= a),
        m.tag === 22 && ((t = m.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = m),
        (m = m.return));
    return t.tag === 3
      ? ((m = t.stateNode),
        f &&
          r !== null &&
          ((f = 31 - me(a)),
          (t = m.hiddenUpdates),
          (s = t[f]),
          s === null ? (t[f] = [r]) : s.push(r),
          (r.lane = a | 536870912)),
        m)
      : null;
  }
  function Yo(t) {
    if (50 < Na) throw ((Na = 0), (Df = null), Error(l(185)));
    for (var r = t.return; r !== null; ) ((t = r), (r = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var il = {};
  function AS(t, r, a, s) {
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
      (this.pendingProps = r),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function kn(t, r, a, s) {
    return new AS(t, r, a, s);
  }
  function Tc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function br(t, r) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = kn(t.tag, r, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = r),
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
      (r = t.dependencies),
      (a.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function um(t, r) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = r),
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
          (r = a.dependencies),
          (t.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext })),
      t
    );
  }
  function Go(t, r, a, s, f, m) {
    var x = 0;
    if (((s = t), typeof t == 'function')) Tc(t) && (x = 1);
    else if (typeof t == 'string')
      x = MC(t, a, ce.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      e: switch (t) {
        case Q:
          return ((t = kn(31, a, r, f)), (t.elementType = Q), (t.lanes = m), t);
        case C:
          return bi(a.children, f, m, r);
        case E:
          ((x = 8), (f |= 24));
          break;
        case O:
          return ((t = kn(12, a, r, f | 2)), (t.elementType = O), (t.lanes = m), t);
        case z:
          return ((t = kn(13, a, r, f)), (t.elementType = z), (t.lanes = m), t);
        case R:
          return ((t = kn(19, a, r, f)), (t.elementType = R), (t.lanes = m), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case T:
              case M:
                x = 10;
                break e;
              case $:
                x = 9;
                break e;
              case N:
                x = 11;
                break e;
              case H:
                x = 14;
                break e;
              case Y:
                ((x = 16), (s = null));
                break e;
            }
          ((x = 29), (a = Error(l(130, t === null ? 'null' : typeof t, ''))), (s = null));
      }
    return ((r = kn(x, a, r, f)), (r.elementType = t), (r.type = s), (r.lanes = m), r);
  }
  function bi(t, r, a, s) {
    return ((t = kn(7, t, s, r)), (t.lanes = a), t);
  }
  function Ac(t, r, a) {
    return ((t = kn(6, t, null, r)), (t.lanes = a), t);
  }
  function Rc(t, r, a) {
    return (
      (r = kn(4, t.children !== null ? t.children : [], t.key, r)),
      (r.lanes = a),
      (r.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      r
    );
  }
  var ll = [],
    al = 0,
    Xo = null,
    Ko = 0,
    $n = [],
    Un = 0,
    vi = null,
    vr = 1,
    xr = '';
  function xi(t, r) {
    ((ll[al++] = Ko), (ll[al++] = Xo), (Xo = t), (Ko = r));
  }
  function cm(t, r, a) {
    (($n[Un++] = vr), ($n[Un++] = xr), ($n[Un++] = vi), (vi = t));
    var s = vr;
    t = xr;
    var f = 32 - me(s) - 1;
    ((s &= ~(1 << f)), (a += 1));
    var m = 32 - me(r) + f;
    if (30 < m) {
      var x = f - (f % 5);
      ((m = (s & ((1 << x) - 1)).toString(32)),
        (s >>= x),
        (f -= x),
        (vr = (1 << (32 - me(r) + f)) | (a << f) | s),
        (xr = m + t));
    } else ((vr = (1 << m) | (a << f) | s), (xr = t));
  }
  function Mc(t) {
    t.return !== null && (xi(t, 1), cm(t, 1, 0));
  }
  function Oc(t) {
    for (; t === Xo; ) ((Xo = ll[--al]), (ll[al] = null), (Ko = ll[--al]), (ll[al] = null));
    for (; t === vi; )
      ((vi = $n[--Un]),
        ($n[Un] = null),
        (xr = $n[--Un]),
        ($n[Un] = null),
        (vr = $n[--Un]),
        ($n[Un] = null));
  }
  var un = null,
    At = null,
    Ke = !1,
    Si = null,
    tr = !1,
    zc = Error(l(519));
  function Ci(t) {
    var r = Error(l(418, ''));
    throw (fa(Bn(r, t)), zc);
  }
  function fm(t) {
    var r = t.stateNode,
      a = t.type,
      s = t.memoizedProps;
    switch (((r[en] = t), (r[fn] = s), a)) {
      case 'dialog':
        (Ie('cancel', r), Ie('close', r));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ie('load', r);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Ba.length; a++) Ie(Ba[a], r);
        break;
      case 'source':
        Ie('error', r);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ie('error', r), Ie('load', r));
        break;
      case 'details':
        Ie('toggle', r);
        break;
      case 'input':
        (Ie('invalid', r),
          Th(r, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0),
          Bo(r));
        break;
      case 'select':
        Ie('invalid', r);
        break;
      case 'textarea':
        (Ie('invalid', r), Rh(r, s.value, s.defaultValue, s.children), Bo(r));
    }
    ((a = s.children),
      (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
      r.textContent === '' + a ||
      s.suppressHydrationWarning === !0 ||
      Ry(r.textContent, a)
        ? (s.popover != null && (Ie('beforetoggle', r), Ie('toggle', r)),
          s.onScroll != null && Ie('scroll', r),
          s.onScrollEnd != null && Ie('scrollend', r),
          s.onClick != null && (r.onclick = Ms),
          (r = !0))
        : (r = !1),
      r || Ci(t));
  }
  function dm(t) {
    for (un = t.return; un; )
      switch (un.tag) {
        case 5:
        case 13:
          tr = !1;
          return;
        case 27:
        case 3:
          tr = !0;
          return;
        default:
          un = un.return;
      }
  }
  function ua(t) {
    if (t !== un) return !1;
    if (!Ke) return (dm(t), (Ke = !0), !1);
    var r = t.tag,
      a;
    if (
      ((a = r !== 3 && r !== 27) &&
        ((a = r === 5) &&
          ((a = t.type), (a = !(a !== 'form' && a !== 'button') || Xf(t.type, t.memoizedProps))),
        (a = !a)),
      a && At && Ci(t),
      dm(t),
      r === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(l(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === '/$')) {
              if (r === 0) {
                At = Xn(t.nextSibling);
                break e;
              }
              r--;
            } else (a !== '$' && a !== '$!' && a !== '$?') || r++;
          t = t.nextSibling;
        }
        At = null;
      }
    } else
      r === 27
        ? ((r = At), ti(t.type) ? ((t = Wf), (Wf = null), (At = t)) : (At = r))
        : (At = un ? Xn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ca() {
    ((At = un = null), (Ke = !1));
  }
  function pm() {
    var t = Si;
    return (t !== null && (mn === null ? (mn = t) : mn.push.apply(mn, t), (Si = null)), t);
  }
  function fa(t) {
    Si === null ? (Si = [t]) : Si.push(t);
  }
  var Dc = J(null),
    ki = null,
    Sr = null;
  function Pr(t, r, a) {
    (A(Dc, r._currentValue), (r._currentValue = a));
  }
  function Cr(t) {
    ((t._currentValue = Dc.current), oe(Dc));
  }
  function Nc(t, r, a) {
    for (; t !== null; ) {
      var s = t.alternate;
      if (
        ((t.childLanes & r) !== r
          ? ((t.childLanes |= r), s !== null && (s.childLanes |= r))
          : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function _c(t, r, a, s) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var m = f.dependencies;
      if (m !== null) {
        var x = f.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var w = m;
          m = f;
          for (var L = 0; L < r.length; L++)
            if (w.context === r[L]) {
              ((m.lanes |= a),
                (w = m.alternate),
                w !== null && (w.lanes |= a),
                Nc(m.return, a, t),
                s || (x = null));
              break e;
            }
          m = w.next;
        }
      } else if (f.tag === 18) {
        if (((x = f.return), x === null)) throw Error(l(341));
        ((x.lanes |= a), (m = x.alternate), m !== null && (m.lanes |= a), Nc(x, a, t), (x = null));
      } else x = f.child;
      if (x !== null) x.return = f;
      else
        for (x = f; x !== null; ) {
          if (x === t) {
            x = null;
            break;
          }
          if (((f = x.sibling), f !== null)) {
            ((f.return = x.return), (x = f));
            break;
          }
          x = x.return;
        }
      f = x;
    }
  }
  function da(t, r, a, s) {
    t = null;
    for (var f = r, m = !1; f !== null; ) {
      if (!m) {
        if ((f.flags & 524288) !== 0) m = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var x = f.alternate;
        if (x === null) throw Error(l(387));
        if (((x = x.memoizedProps), x !== null)) {
          var w = f.type;
          Cn(f.pendingProps.value, x.value) || (t !== null ? t.push(w) : (t = [w]));
        }
      } else if (f === ye.current) {
        if (((x = f.alternate), x === null)) throw Error(l(387));
        x.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(Ia) : (t = [Ia]));
      }
      f = f.return;
    }
    (t !== null && _c(r, t, a, s), (r.flags |= 262144));
  }
  function Qo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Cn(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function wi(t) {
    ((ki = t), (Sr = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function tn(t) {
    return hm(ki, t);
  }
  function Zo(t, r) {
    return (ki === null && wi(t), hm(t, r));
  }
  function hm(t, r) {
    var a = r._currentValue;
    if (((r = { context: r, memoizedValue: a, next: null }), Sr === null)) {
      if (t === null) throw Error(l(308));
      ((Sr = r), (t.dependencies = { lanes: 0, firstContext: r }), (t.flags |= 524288));
    } else Sr = Sr.next = r;
    return a;
  }
  var RS =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (a, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              ((r.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    MS = e.unstable_scheduleCallback,
    OS = e.unstable_NormalPriority,
    Pt = {
      $$typeof: M,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Bc() {
    return { controller: new RS(), data: new Map(), refCount: 0 };
  }
  function pa(t) {
    (t.refCount--,
      t.refCount === 0 &&
        MS(OS, function () {
          t.controller.abort();
        }));
  }
  var ha = null,
    Lc = 0,
    ol = 0,
    sl = null;
  function zS(t, r) {
    if (ha === null) {
      var a = (ha = []);
      ((Lc = 0),
        (ol = jf()),
        (sl = {
          status: 'pending',
          value: void 0,
          then: function (s) {
            a.push(s);
          },
        }));
    }
    return (Lc++, r.then(mm, mm), r);
  }
  function mm() {
    if (--Lc === 0 && ha !== null) {
      sl !== null && (sl.status = 'fulfilled');
      var t = ha;
      ((ha = null), (ol = 0), (sl = null));
      for (var r = 0; r < t.length; r++) (0, t[r])();
    }
  }
  function DS(t, r) {
    var a = [],
      s = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (f) {
          a.push(f);
        },
      };
    return (
      t.then(
        function () {
          ((s.status = 'fulfilled'), (s.value = r));
          for (var f = 0; f < a.length; f++) (0, a[f])(r);
        },
        function (f) {
          for (s.status = 'rejected', s.reason = f, f = 0; f < a.length; f++) (0, a[f])(void 0);
        },
      ),
      s
    );
  }
  var gm = _.S;
  _.S = function (t, r) {
    (typeof r == 'object' && r !== null && typeof r.then == 'function' && zS(t, r),
      gm !== null && gm(t, r));
  };
  var Ei = J(null);
  function $c() {
    var t = Ei.current;
    return t !== null ? t : xt.pooledCache;
  }
  function Wo(t, r) {
    r === null ? A(Ei, Ei.current) : A(Ei, r.pool);
  }
  function ym() {
    var t = $c();
    return t === null ? null : { parent: Pt._currentValue, pool: t };
  }
  var ma = Error(l(460)),
    bm = Error(l(474)),
    Jo = Error(l(542)),
    Uc = { then: function () {} };
  function vm(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function es() {}
  function xm(t, r, a) {
    switch (
      ((a = t[a]), a === void 0 ? t.push(r) : a !== r && (r.then(es, es), (r = a)), r.status)
    ) {
      case 'fulfilled':
        return r.value;
      case 'rejected':
        throw ((t = r.reason), Cm(t), t);
      default:
        if (typeof r.status == 'string') r.then(es, es);
        else {
          if (((t = xt), t !== null && 100 < t.shellSuspendCounter)) throw Error(l(482));
          ((t = r),
            (t.status = 'pending'),
            t.then(
              function (s) {
                if (r.status === 'pending') {
                  var f = r;
                  ((f.status = 'fulfilled'), (f.value = s));
                }
              },
              function (s) {
                if (r.status === 'pending') {
                  var f = r;
                  ((f.status = 'rejected'), (f.reason = s));
                }
              },
            ));
        }
        switch (r.status) {
          case 'fulfilled':
            return r.value;
          case 'rejected':
            throw ((t = r.reason), Cm(t), t);
        }
        throw ((ga = r), ma);
    }
  }
  var ga = null;
  function Sm() {
    if (ga === null) throw Error(l(459));
    var t = ga;
    return ((ga = null), t);
  }
  function Cm(t) {
    if (t === ma || t === Jo) throw Error(l(483));
  }
  var Ir = !1;
  function jc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pc(t, r) {
    ((t = t.updateQueue),
      r.updateQueue === t &&
        (r.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Hr(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qr(t, r, a) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (lt & 2) !== 0)) {
      var f = s.pending;
      return (
        f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)),
        (s.pending = r),
        (r = Yo(t)),
        sm(t, null, a),
        r
      );
    }
    return (Vo(t, s, r, a), Yo(t));
  }
  function ya(t, r, a) {
    if (((r = r.updateQueue), r !== null && ((r = r.shared), (a & 4194048) !== 0))) {
      var s = r.lanes;
      ((s &= t.pendingLanes), (a |= s), (r.lanes = a), mh(t, a));
    }
  }
  function Ic(t, r) {
    var a = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), a === s)) {
      var f = null,
        m = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var x = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (m === null ? (f = m = x) : (m = m.next = x), (a = a.next));
        } while (a !== null);
        m === null ? (f = m = r) : (m = m.next = r);
      } else f = m = r;
      ((a = {
        baseState: s.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: m,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = r) : (t.next = r),
      (a.lastBaseUpdate = r));
  }
  var Hc = !1;
  function ba() {
    if (Hc) {
      var t = sl;
      if (t !== null) throw t;
    }
  }
  function va(t, r, a, s) {
    Hc = !1;
    var f = t.updateQueue;
    Ir = !1;
    var m = f.firstBaseUpdate,
      x = f.lastBaseUpdate,
      w = f.shared.pending;
    if (w !== null) {
      f.shared.pending = null;
      var L = w,
        G = L.next;
      ((L.next = null), x === null ? (m = G) : (x.next = G), (x = L));
      var ie = t.alternate;
      ie !== null &&
        ((ie = ie.updateQueue),
        (w = ie.lastBaseUpdate),
        w !== x && (w === null ? (ie.firstBaseUpdate = G) : (w.next = G), (ie.lastBaseUpdate = L)));
    }
    if (m !== null) {
      var se = f.baseState;
      ((x = 0), (ie = G = L = null), (w = m));
      do {
        var Z = w.lane & -536870913,
          W = Z !== w.lane;
        if (W ? (Fe & Z) === Z : (s & Z) === Z) {
          (Z !== 0 && Z === ol && (Hc = !0),
            ie !== null &&
              (ie = ie.next =
                { lane: 0, tag: w.tag, payload: w.payload, callback: null, next: null }));
          e: {
            var Me = t,
              Ee = w;
            Z = r;
            var dt = a;
            switch (Ee.tag) {
              case 1:
                if (((Me = Ee.payload), typeof Me == 'function')) {
                  se = Me.call(dt, se, Z);
                  break e;
                }
                se = Me;
                break e;
              case 3:
                Me.flags = (Me.flags & -65537) | 128;
              case 0:
                if (
                  ((Me = Ee.payload),
                  (Z = typeof Me == 'function' ? Me.call(dt, se, Z) : Me),
                  Z == null)
                )
                  break e;
                se = g({}, se, Z);
                break e;
              case 2:
                Ir = !0;
            }
          }
          ((Z = w.callback),
            Z !== null &&
              ((t.flags |= 64),
              W && (t.flags |= 8192),
              (W = f.callbacks),
              W === null ? (f.callbacks = [Z]) : W.push(Z)));
        } else
          ((W = { lane: Z, tag: w.tag, payload: w.payload, callback: w.callback, next: null }),
            ie === null ? ((G = ie = W), (L = se)) : (ie = ie.next = W),
            (x |= Z));
        if (((w = w.next), w === null)) {
          if (((w = f.shared.pending), w === null)) break;
          ((W = w),
            (w = W.next),
            (W.next = null),
            (f.lastBaseUpdate = W),
            (f.shared.pending = null));
        }
      } while (!0);
      (ie === null && (L = se),
        (f.baseState = L),
        (f.firstBaseUpdate = G),
        (f.lastBaseUpdate = ie),
        m === null && (f.shared.lanes = 0),
        (Zr |= x),
        (t.lanes = x),
        (t.memoizedState = se));
    }
  }
  function km(t, r) {
    if (typeof t != 'function') throw Error(l(191, t));
    t.call(r);
  }
  function wm(t, r) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) km(a[t], r);
  }
  var ul = J(null),
    ts = J(0);
  function Em(t, r) {
    ((t = Mr), A(ts, t), A(ul, r), (Mr = t | r.baseLanes));
  }
  function qc() {
    (A(ts, Mr), A(ul, ul.current));
  }
  function Fc() {
    ((Mr = ts.current), oe(ul), oe(ts));
  }
  var Fr = 0,
    $e = null,
    ct = null,
    Bt = null,
    ns = !1,
    cl = !1,
    Ti = !1,
    rs = 0,
    xa = 0,
    fl = null,
    NS = 0;
  function zt() {
    throw Error(l(321));
  }
  function Vc(t, r) {
    if (r === null) return !1;
    for (var a = 0; a < r.length && a < t.length; a++) if (!Cn(t[a], r[a])) return !1;
    return !0;
  }
  function Yc(t, r, a, s, f, m) {
    return (
      (Fr = m),
      ($e = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (_.H = t === null || t.memoizedState === null ? sg : ug),
      (Ti = !1),
      (m = a(s, f)),
      (Ti = !1),
      cl && (m = Am(r, a, s, f)),
      Tm(t),
      m
    );
  }
  function Tm(t) {
    _.H = us;
    var r = ct !== null && ct.next !== null;
    if (((Fr = 0), (Bt = ct = $e = null), (ns = !1), (xa = 0), (fl = null), r)) throw Error(l(300));
    t === null || Vt || ((t = t.dependencies), t !== null && Qo(t) && (Vt = !0));
  }
  function Am(t, r, a, s) {
    $e = t;
    var f = 0;
    do {
      if ((cl && (fl = null), (xa = 0), (cl = !1), 25 <= f)) throw Error(l(301));
      if (((f += 1), (Bt = ct = null), t.updateQueue != null)) {
        var m = t.updateQueue;
        ((m.lastEffect = null),
          (m.events = null),
          (m.stores = null),
          m.memoCache != null && (m.memoCache.index = 0));
      }
      ((_.H = PS), (m = r(a, s)));
    } while (cl);
    return m;
  }
  function _S() {
    var t = _.H,
      r = t.useState()[0];
    return (
      (r = typeof r.then == 'function' ? Sa(r) : r),
      (t = t.useState()[0]),
      (ct !== null ? ct.memoizedState : null) !== t && ($e.flags |= 1024),
      r
    );
  }
  function Gc() {
    var t = rs !== 0;
    return ((rs = 0), t);
  }
  function Xc(t, r, a) {
    ((r.updateQueue = t.updateQueue), (r.flags &= -2053), (t.lanes &= ~a));
  }
  function Kc(t) {
    if (ns) {
      for (t = t.memoizedState; t !== null; ) {
        var r = t.queue;
        (r !== null && (r.pending = null), (t = t.next));
      }
      ns = !1;
    }
    ((Fr = 0), (Bt = ct = $e = null), (cl = !1), (xa = rs = 0), (fl = null));
  }
  function pn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Bt === null ? ($e.memoizedState = Bt = t) : (Bt = Bt.next = t), Bt);
  }
  function Lt() {
    if (ct === null) {
      var t = $e.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ct.next;
    var r = Bt === null ? $e.memoizedState : Bt.next;
    if (r !== null) ((Bt = r), (ct = t));
    else {
      if (t === null) throw $e.alternate === null ? Error(l(467)) : Error(l(310));
      ((ct = t),
        (t = {
          memoizedState: ct.memoizedState,
          baseState: ct.baseState,
          baseQueue: ct.baseQueue,
          queue: ct.queue,
          next: null,
        }),
        Bt === null ? ($e.memoizedState = Bt = t) : (Bt = Bt.next = t));
    }
    return Bt;
  }
  function Qc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sa(t) {
    var r = xa;
    return (
      (xa += 1),
      fl === null && (fl = []),
      (t = xm(fl, t, r)),
      (r = $e),
      (Bt === null ? r.memoizedState : Bt.next) === null &&
        ((r = r.alternate), (_.H = r === null || r.memoizedState === null ? sg : ug)),
      t
    );
  }
  function is(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Sa(t);
      if (t.$$typeof === M) return tn(t);
    }
    throw Error(l(438, String(t)));
  }
  function Zc(t) {
    var r = null,
      a = $e.updateQueue;
    if ((a !== null && (r = a.memoCache), r == null)) {
      var s = $e.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (r = {
              data: s.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      a === null && ((a = Qc()), ($e.updateQueue = a)),
      (a.memoCache = r),
      (a = r.data[r.index]),
      a === void 0)
    )
      for (a = r.data[r.index] = Array(t), s = 0; s < t; s++) a[s] = B;
    return (r.index++, a);
  }
  function kr(t, r) {
    return typeof r == 'function' ? r(t) : r;
  }
  function ls(t) {
    var r = Lt();
    return Wc(r, ct, t);
  }
  function Wc(t, r, a) {
    var s = t.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = a;
    var f = t.baseQueue,
      m = s.pending;
    if (m !== null) {
      if (f !== null) {
        var x = f.next;
        ((f.next = m.next), (m.next = x));
      }
      ((r.baseQueue = f = m), (s.pending = null));
    }
    if (((m = t.baseState), f === null)) t.memoizedState = m;
    else {
      r = f.next;
      var w = (x = null),
        L = null,
        G = r,
        ie = !1;
      do {
        var se = G.lane & -536870913;
        if (se !== G.lane ? (Fe & se) === se : (Fr & se) === se) {
          var Z = G.revertLane;
          if (Z === 0)
            (L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: G.action,
                  hasEagerState: G.hasEagerState,
                  eagerState: G.eagerState,
                  next: null,
                }),
              se === ol && (ie = !0));
          else if ((Fr & Z) === Z) {
            ((G = G.next), Z === ol && (ie = !0));
            continue;
          } else
            ((se = {
              lane: 0,
              revertLane: G.revertLane,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null,
            }),
              L === null ? ((w = L = se), (x = m)) : (L = L.next = se),
              ($e.lanes |= Z),
              (Zr |= Z));
          ((se = G.action), Ti && a(m, se), (m = G.hasEagerState ? G.eagerState : a(m, se)));
        } else
          ((Z = {
            lane: se,
            revertLane: G.revertLane,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null,
          }),
            L === null ? ((w = L = Z), (x = m)) : (L = L.next = Z),
            ($e.lanes |= se),
            (Zr |= se));
        G = G.next;
      } while (G !== null && G !== r);
      if (
        (L === null ? (x = m) : (L.next = w),
        !Cn(m, t.memoizedState) && ((Vt = !0), ie && ((a = sl), a !== null)))
      )
        throw a;
      ((t.memoizedState = m), (t.baseState = x), (t.baseQueue = L), (s.lastRenderedState = m));
    }
    return (f === null && (s.lanes = 0), [t.memoizedState, s.dispatch]);
  }
  function Jc(t) {
    var r = Lt(),
      a = r.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = t;
    var s = a.dispatch,
      f = a.pending,
      m = r.memoizedState;
    if (f !== null) {
      a.pending = null;
      var x = (f = f.next);
      do ((m = t(m, x.action)), (x = x.next));
      while (x !== f);
      (Cn(m, r.memoizedState) || (Vt = !0),
        (r.memoizedState = m),
        r.baseQueue === null && (r.baseState = m),
        (a.lastRenderedState = m));
    }
    return [m, s];
  }
  function Rm(t, r, a) {
    var s = $e,
      f = Lt(),
      m = Ke;
    if (m) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = r();
    var x = !Cn((ct || f).memoizedState, a);
    (x && ((f.memoizedState = a), (Vt = !0)), (f = f.queue));
    var w = zm.bind(null, s, f, t);
    if (
      (Ca(2048, 8, w, [t]), f.getSnapshot !== r || x || (Bt !== null && Bt.memoizedState.tag & 1))
    ) {
      if (((s.flags |= 2048), dl(9, as(), Om.bind(null, s, f, a, r), null), xt === null))
        throw Error(l(349));
      m || (Fr & 124) !== 0 || Mm(s, r, a);
    }
    return a;
  }
  function Mm(t, r, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: r, value: a }),
      (r = $e.updateQueue),
      r === null
        ? ((r = Qc()), ($e.updateQueue = r), (r.stores = [t]))
        : ((a = r.stores), a === null ? (r.stores = [t]) : a.push(t)));
  }
  function Om(t, r, a, s) {
    ((r.value = a), (r.getSnapshot = s), Dm(r) && Nm(t));
  }
  function zm(t, r, a) {
    return a(function () {
      Dm(r) && Nm(t);
    });
  }
  function Dm(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var a = r();
      return !Cn(t, a);
    } catch {
      return !0;
    }
  }
  function Nm(t) {
    var r = rl(t, 2);
    r !== null && Rn(r, t, 2);
  }
  function ef(t) {
    var r = pn();
    if (typeof t == 'function') {
      var a = t;
      if (((t = a()), Ti)) {
        pe(!0);
        try {
          a();
        } finally {
          pe(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = t),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kr,
        lastRenderedState: t,
      }),
      r
    );
  }
  function _m(t, r, a, s) {
    return ((t.baseState = a), Wc(t, ct, typeof s == 'function' ? s : kr));
  }
  function BS(t, r, a, s, f) {
    if (ss(t)) throw Error(l(485));
    if (((t = r.action), t !== null)) {
      var m = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          m.listeners.push(x);
        },
      };
      (_.T !== null ? a(!0) : (m.isTransition = !1),
        s(m),
        (a = r.pending),
        a === null
          ? ((m.next = r.pending = m), Bm(r, m))
          : ((m.next = a.next), (r.pending = a.next = m)));
    }
  }
  function Bm(t, r) {
    var a = r.action,
      s = r.payload,
      f = t.state;
    if (r.isTransition) {
      var m = _.T,
        x = {};
      _.T = x;
      try {
        var w = a(f, s),
          L = _.S;
        (L !== null && L(x, w), Lm(t, r, w));
      } catch (G) {
        tf(t, r, G);
      } finally {
        _.T = m;
      }
    } else
      try {
        ((m = a(f, s)), Lm(t, r, m));
      } catch (G) {
        tf(t, r, G);
      }
  }
  function Lm(t, r, a) {
    a !== null && typeof a == 'object' && typeof a.then == 'function'
      ? a.then(
          function (s) {
            $m(t, r, s);
          },
          function (s) {
            return tf(t, r, s);
          },
        )
      : $m(t, r, a);
  }
  function $m(t, r, a) {
    ((r.status = 'fulfilled'),
      (r.value = a),
      Um(r),
      (t.state = a),
      (r = t.pending),
      r !== null &&
        ((a = r.next), a === r ? (t.pending = null) : ((a = a.next), (r.next = a), Bm(t, a))));
  }
  function tf(t, r, a) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do ((r.status = 'rejected'), (r.reason = a), Um(r), (r = r.next));
      while (r !== s);
    }
    t.action = null;
  }
  function Um(t) {
    t = t.listeners;
    for (var r = 0; r < t.length; r++) (0, t[r])();
  }
  function jm(t, r) {
    return r;
  }
  function Pm(t, r) {
    if (Ke) {
      var a = xt.formState;
      if (a !== null) {
        e: {
          var s = $e;
          if (Ke) {
            if (At) {
              t: {
                for (var f = At, m = tr; f.nodeType !== 8; ) {
                  if (!m) {
                    f = null;
                    break t;
                  }
                  if (((f = Xn(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                ((m = f.data), (f = m === 'F!' || m === 'F' ? f : null));
              }
              if (f) {
                ((At = Xn(f.nextSibling)), (s = f.data === 'F!'));
                break e;
              }
            }
            Ci(s);
          }
          s = !1;
        }
        s && (r = a[0]);
      }
    }
    return (
      (a = pn()),
      (a.memoizedState = a.baseState = r),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jm,
        lastRenderedState: r,
      }),
      (a.queue = s),
      (a = lg.bind(null, $e, s)),
      (s.dispatch = a),
      (s = ef(!1)),
      (m = of.bind(null, $e, !1, s.queue)),
      (s = pn()),
      (f = { state: r, dispatch: null, action: t, pending: null }),
      (s.queue = f),
      (a = BS.bind(null, $e, f, m, a)),
      (f.dispatch = a),
      (s.memoizedState = t),
      [r, a, !1]
    );
  }
  function Im(t) {
    var r = Lt();
    return Hm(r, ct, t);
  }
  function Hm(t, r, a) {
    if (
      ((r = Wc(t, r, jm)[0]),
      (t = ls(kr)[0]),
      typeof r == 'object' && r !== null && typeof r.then == 'function')
    )
      try {
        var s = Sa(r);
      } catch (x) {
        throw x === ma ? Jo : x;
      }
    else s = r;
    r = Lt();
    var f = r.queue,
      m = f.dispatch;
    return (
      a !== r.memoizedState && (($e.flags |= 2048), dl(9, as(), LS.bind(null, f, a), null)),
      [s, m, t]
    );
  }
  function LS(t, r) {
    t.action = r;
  }
  function qm(t) {
    var r = Lt(),
      a = ct;
    if (a !== null) return Hm(r, a, t);
    (Lt(), (r = r.memoizedState), (a = Lt()));
    var s = a.queue.dispatch;
    return ((a.memoizedState = t), [r, s, !1]);
  }
  function dl(t, r, a, s) {
    return (
      (t = { tag: t, create: a, deps: s, inst: r, next: null }),
      (r = $e.updateQueue),
      r === null && ((r = Qc()), ($e.updateQueue = r)),
      (a = r.lastEffect),
      a === null
        ? (r.lastEffect = t.next = t)
        : ((s = a.next), (a.next = t), (t.next = s), (r.lastEffect = t)),
      t
    );
  }
  function as() {
    return { destroy: void 0, resource: void 0 };
  }
  function Fm() {
    return Lt().memoizedState;
  }
  function os(t, r, a, s) {
    var f = pn();
    ((s = s === void 0 ? null : s), ($e.flags |= t), (f.memoizedState = dl(1 | r, as(), a, s)));
  }
  function Ca(t, r, a, s) {
    var f = Lt();
    s = s === void 0 ? null : s;
    var m = f.memoizedState.inst;
    ct !== null && s !== null && Vc(s, ct.memoizedState.deps)
      ? (f.memoizedState = dl(r, m, a, s))
      : (($e.flags |= t), (f.memoizedState = dl(1 | r, m, a, s)));
  }
  function Vm(t, r) {
    os(8390656, 8, t, r);
  }
  function Ym(t, r) {
    Ca(2048, 8, t, r);
  }
  function Gm(t, r) {
    return Ca(4, 2, t, r);
  }
  function Xm(t, r) {
    return Ca(4, 4, t, r);
  }
  function Km(t, r) {
    if (typeof r == 'function') {
      t = t();
      var a = r(t);
      return function () {
        typeof a == 'function' ? a() : r(null);
      };
    }
    if (r != null)
      return (
        (t = t()),
        (r.current = t),
        function () {
          r.current = null;
        }
      );
  }
  function Qm(t, r, a) {
    ((a = a != null ? a.concat([t]) : null), Ca(4, 4, Km.bind(null, r, t), a));
  }
  function nf() {}
  function Zm(t, r) {
    var a = Lt();
    r = r === void 0 ? null : r;
    var s = a.memoizedState;
    return r !== null && Vc(r, s[1]) ? s[0] : ((a.memoizedState = [t, r]), t);
  }
  function Wm(t, r) {
    var a = Lt();
    r = r === void 0 ? null : r;
    var s = a.memoizedState;
    if (r !== null && Vc(r, s[1])) return s[0];
    if (((s = t()), Ti)) {
      pe(!0);
      try {
        t();
      } finally {
        pe(!1);
      }
    }
    return ((a.memoizedState = [s, r]), s);
  }
  function rf(t, r, a) {
    return a === void 0 || (Fr & 1073741824) !== 0
      ? (t.memoizedState = r)
      : ((t.memoizedState = a), (t = ty()), ($e.lanes |= t), (Zr |= t), a);
  }
  function Jm(t, r, a, s) {
    return Cn(a, r)
      ? a
      : ul.current !== null
        ? ((t = rf(t, a, s)), Cn(t, r) || (Vt = !0), t)
        : (Fr & 42) === 0
          ? ((Vt = !0), (t.memoizedState = a))
          : ((t = ty()), ($e.lanes |= t), (Zr |= t), r);
  }
  function eg(t, r, a, s, f) {
    var m = K.p;
    K.p = m !== 0 && 8 > m ? m : 8;
    var x = _.T,
      w = {};
    ((_.T = w), of(t, !1, r, a));
    try {
      var L = f(),
        G = _.S;
      if (
        (G !== null && G(w, L), L !== null && typeof L == 'object' && typeof L.then == 'function')
      ) {
        var ie = DS(L, s);
        ka(t, r, ie, An(t));
      } else ka(t, r, s, An(t));
    } catch (se) {
      ka(t, r, { then: function () {}, status: 'rejected', reason: se }, An());
    } finally {
      ((K.p = m), (_.T = x));
    }
  }
  function $S() {}
  function lf(t, r, a, s) {
    if (t.tag !== 5) throw Error(l(476));
    var f = tg(t).queue;
    eg(
      t,
      f,
      r,
      ue,
      a === null
        ? $S
        : function () {
            return (ng(t), a(s));
          },
    );
  }
  function tg(t) {
    var r = t.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kr,
        lastRenderedState: ue,
      },
      next: null,
    };
    var a = {};
    return (
      (r.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: kr,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = r),
      (t = t.alternate),
      t !== null && (t.memoizedState = r),
      r
    );
  }
  function ng(t) {
    var r = tg(t).next.queue;
    ka(t, r, {}, An());
  }
  function af() {
    return tn(Ia);
  }
  function rg() {
    return Lt().memoizedState;
  }
  function ig() {
    return Lt().memoizedState;
  }
  function US(t) {
    for (var r = t.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var a = An();
          t = Hr(a);
          var s = qr(r, t, a);
          (s !== null && (Rn(s, r, a), ya(s, r, a)), (r = { cache: Bc() }), (t.payload = r));
          return;
      }
      r = r.return;
    }
  }
  function jS(t, r, a) {
    var s = An();
    ((a = { lane: s, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null }),
      ss(t) ? ag(r, a) : ((a = Ec(t, r, a, s)), a !== null && (Rn(a, t, s), og(a, r, s))));
  }
  function lg(t, r, a) {
    var s = An();
    ka(t, r, a, s);
  }
  function ka(t, r, a, s) {
    var f = { lane: s, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (ss(t)) ag(r, f);
    else {
      var m = t.alternate;
      if (
        t.lanes === 0 &&
        (m === null || m.lanes === 0) &&
        ((m = r.lastRenderedReducer), m !== null)
      )
        try {
          var x = r.lastRenderedState,
            w = m(x, a);
          if (((f.hasEagerState = !0), (f.eagerState = w), Cn(w, x)))
            return (Vo(t, r, f, 0), xt === null && Fo(), !1);
        } catch {
        } finally {
        }
      if (((a = Ec(t, r, f, s)), a !== null)) return (Rn(a, t, s), og(a, r, s), !0);
    }
    return !1;
  }
  function of(t, r, a, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: jf(),
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ss(t))
    ) {
      if (r) throw Error(l(479));
    } else ((r = Ec(t, a, s, 2)), r !== null && Rn(r, t, 2));
  }
  function ss(t) {
    var r = t.alternate;
    return t === $e || (r !== null && r === $e);
  }
  function ag(t, r) {
    cl = ns = !0;
    var a = t.pending;
    (a === null ? (r.next = r) : ((r.next = a.next), (a.next = r)), (t.pending = r));
  }
  function og(t, r, a) {
    if ((a & 4194048) !== 0) {
      var s = r.lanes;
      ((s &= t.pendingLanes), (a |= s), (r.lanes = a), mh(t, a));
    }
  }
  var us = {
      readContext: tn,
      use: is,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt,
    },
    sg = {
      readContext: tn,
      use: is,
      useCallback: function (t, r) {
        return ((pn().memoizedState = [t, r === void 0 ? null : r]), t);
      },
      useContext: tn,
      useEffect: Vm,
      useImperativeHandle: function (t, r, a) {
        ((a = a != null ? a.concat([t]) : null), os(4194308, 4, Km.bind(null, r, t), a));
      },
      useLayoutEffect: function (t, r) {
        return os(4194308, 4, t, r);
      },
      useInsertionEffect: function (t, r) {
        os(4, 2, t, r);
      },
      useMemo: function (t, r) {
        var a = pn();
        r = r === void 0 ? null : r;
        var s = t();
        if (Ti) {
          pe(!0);
          try {
            t();
          } finally {
            pe(!1);
          }
        }
        return ((a.memoizedState = [s, r]), s);
      },
      useReducer: function (t, r, a) {
        var s = pn();
        if (a !== void 0) {
          var f = a(r);
          if (Ti) {
            pe(!0);
            try {
              a(r);
            } finally {
              pe(!1);
            }
          }
        } else f = r;
        return (
          (s.memoizedState = s.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (s.queue = t),
          (t = t.dispatch = jS.bind(null, $e, t)),
          [s.memoizedState, t]
        );
      },
      useRef: function (t) {
        var r = pn();
        return ((t = { current: t }), (r.memoizedState = t));
      },
      useState: function (t) {
        t = ef(t);
        var r = t.queue,
          a = lg.bind(null, $e, r);
        return ((r.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: nf,
      useDeferredValue: function (t, r) {
        var a = pn();
        return rf(a, t, r);
      },
      useTransition: function () {
        var t = ef(!1);
        return ((t = eg.bind(null, $e, t.queue, !0, !1)), (pn().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, r, a) {
        var s = $e,
          f = pn();
        if (Ke) {
          if (a === void 0) throw Error(l(407));
          a = a();
        } else {
          if (((a = r()), xt === null)) throw Error(l(349));
          (Fe & 124) !== 0 || Mm(s, r, a);
        }
        f.memoizedState = a;
        var m = { value: a, getSnapshot: r };
        return (
          (f.queue = m),
          Vm(zm.bind(null, s, m, t), [t]),
          (s.flags |= 2048),
          dl(9, as(), Om.bind(null, s, m, a, r), null),
          a
        );
      },
      useId: function () {
        var t = pn(),
          r = xt.identifierPrefix;
        if (Ke) {
          var a = xr,
            s = vr;
          ((a = (s & ~(1 << (32 - me(s) - 1))).toString(32) + a),
            (r = '«' + r + 'R' + a),
            (a = rs++),
            0 < a && (r += 'H' + a.toString(32)),
            (r += '»'));
        } else ((a = NS++), (r = '«' + r + 'r' + a.toString(32) + '»'));
        return (t.memoizedState = r);
      },
      useHostTransitionStatus: af,
      useFormState: Pm,
      useActionState: Pm,
      useOptimistic: function (t) {
        var r = pn();
        r.memoizedState = r.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((r.queue = a), (r = of.bind(null, $e, !0, a)), (a.dispatch = r), [t, r]);
      },
      useMemoCache: Zc,
      useCacheRefresh: function () {
        return (pn().memoizedState = US.bind(null, $e));
      },
    },
    ug = {
      readContext: tn,
      use: is,
      useCallback: Zm,
      useContext: tn,
      useEffect: Ym,
      useImperativeHandle: Qm,
      useInsertionEffect: Gm,
      useLayoutEffect: Xm,
      useMemo: Wm,
      useReducer: ls,
      useRef: Fm,
      useState: function () {
        return ls(kr);
      },
      useDebugValue: nf,
      useDeferredValue: function (t, r) {
        var a = Lt();
        return Jm(a, ct.memoizedState, t, r);
      },
      useTransition: function () {
        var t = ls(kr)[0],
          r = Lt().memoizedState;
        return [typeof t == 'boolean' ? t : Sa(t), r];
      },
      useSyncExternalStore: Rm,
      useId: rg,
      useHostTransitionStatus: af,
      useFormState: Im,
      useActionState: Im,
      useOptimistic: function (t, r) {
        var a = Lt();
        return _m(a, ct, t, r);
      },
      useMemoCache: Zc,
      useCacheRefresh: ig,
    },
    PS = {
      readContext: tn,
      use: is,
      useCallback: Zm,
      useContext: tn,
      useEffect: Ym,
      useImperativeHandle: Qm,
      useInsertionEffect: Gm,
      useLayoutEffect: Xm,
      useMemo: Wm,
      useReducer: Jc,
      useRef: Fm,
      useState: function () {
        return Jc(kr);
      },
      useDebugValue: nf,
      useDeferredValue: function (t, r) {
        var a = Lt();
        return ct === null ? rf(a, t, r) : Jm(a, ct.memoizedState, t, r);
      },
      useTransition: function () {
        var t = Jc(kr)[0],
          r = Lt().memoizedState;
        return [typeof t == 'boolean' ? t : Sa(t), r];
      },
      useSyncExternalStore: Rm,
      useId: rg,
      useHostTransitionStatus: af,
      useFormState: qm,
      useActionState: qm,
      useOptimistic: function (t, r) {
        var a = Lt();
        return ct !== null ? _m(a, ct, t, r) : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: Zc,
      useCacheRefresh: ig,
    },
    pl = null,
    wa = 0;
  function cs(t) {
    var r = wa;
    return ((wa += 1), pl === null && (pl = []), xm(pl, t, r));
  }
  function Ea(t, r) {
    ((r = r.props.ref), (t.ref = r !== void 0 ? r : null));
  }
  function fs(t, r) {
    throw r.$$typeof === y
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(r)),
        Error(
          l(
            31,
            t === '[object Object]' ? 'object with keys {' + Object.keys(r).join(', ') + '}' : t,
          ),
        ));
  }
  function cg(t) {
    var r = t._init;
    return r(t._payload);
  }
  function fg(t) {
    function r(P, U) {
      if (t) {
        var V = P.deletions;
        V === null ? ((P.deletions = [U]), (P.flags |= 16)) : V.push(U);
      }
    }
    function a(P, U) {
      if (!t) return null;
      for (; U !== null; ) (r(P, U), (U = U.sibling));
      return null;
    }
    function s(P) {
      for (var U = new Map(); P !== null; )
        (P.key !== null ? U.set(P.key, P) : U.set(P.index, P), (P = P.sibling));
      return U;
    }
    function f(P, U) {
      return ((P = br(P, U)), (P.index = 0), (P.sibling = null), P);
    }
    function m(P, U, V) {
      return (
        (P.index = V),
        t
          ? ((V = P.alternate),
            V !== null
              ? ((V = V.index), V < U ? ((P.flags |= 67108866), U) : V)
              : ((P.flags |= 67108866), U))
          : ((P.flags |= 1048576), U)
      );
    }
    function x(P) {
      return (t && P.alternate === null && (P.flags |= 67108866), P);
    }
    function w(P, U, V, ae) {
      return U === null || U.tag !== 6
        ? ((U = Ac(V, P.mode, ae)), (U.return = P), U)
        : ((U = f(U, V)), (U.return = P), U);
    }
    function L(P, U, V, ae) {
      var be = V.type;
      return be === C
        ? ie(P, U, V.props.children, ae, V.key)
        : U !== null &&
            (U.elementType === be ||
              (typeof be == 'object' && be !== null && be.$$typeof === Y && cg(be) === U.type))
          ? ((U = f(U, V.props)), Ea(U, V), (U.return = P), U)
          : ((U = Go(V.type, V.key, V.props, null, P.mode, ae)), Ea(U, V), (U.return = P), U);
    }
    function G(P, U, V, ae) {
      return U === null ||
        U.tag !== 4 ||
        U.stateNode.containerInfo !== V.containerInfo ||
        U.stateNode.implementation !== V.implementation
        ? ((U = Rc(V, P.mode, ae)), (U.return = P), U)
        : ((U = f(U, V.children || [])), (U.return = P), U);
    }
    function ie(P, U, V, ae, be) {
      return U === null || U.tag !== 7
        ? ((U = bi(V, P.mode, ae, be)), (U.return = P), U)
        : ((U = f(U, V)), (U.return = P), U);
    }
    function se(P, U, V) {
      if ((typeof U == 'string' && U !== '') || typeof U == 'number' || typeof U == 'bigint')
        return ((U = Ac('' + U, P.mode, V)), (U.return = P), U);
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case v:
            return ((V = Go(U.type, U.key, U.props, null, P.mode, V)), Ea(V, U), (V.return = P), V);
          case b:
            return ((U = Rc(U, P.mode, V)), (U.return = P), U);
          case Y:
            var ae = U._init;
            return ((U = ae(U._payload)), se(P, U, V));
        }
        if (I(U) || k(U)) return ((U = bi(U, P.mode, V, null)), (U.return = P), U);
        if (typeof U.then == 'function') return se(P, cs(U), V);
        if (U.$$typeof === M) return se(P, Zo(P, U), V);
        fs(P, U);
      }
      return null;
    }
    function Z(P, U, V, ae) {
      var be = U !== null ? U.key : null;
      if ((typeof V == 'string' && V !== '') || typeof V == 'number' || typeof V == 'bigint')
        return be !== null ? null : w(P, U, '' + V, ae);
      if (typeof V == 'object' && V !== null) {
        switch (V.$$typeof) {
          case v:
            return V.key === be ? L(P, U, V, ae) : null;
          case b:
            return V.key === be ? G(P, U, V, ae) : null;
          case Y:
            return ((be = V._init), (V = be(V._payload)), Z(P, U, V, ae));
        }
        if (I(V) || k(V)) return be !== null ? null : ie(P, U, V, ae, null);
        if (typeof V.then == 'function') return Z(P, U, cs(V), ae);
        if (V.$$typeof === M) return Z(P, U, Zo(P, V), ae);
        fs(P, V);
      }
      return null;
    }
    function W(P, U, V, ae, be) {
      if ((typeof ae == 'string' && ae !== '') || typeof ae == 'number' || typeof ae == 'bigint')
        return ((P = P.get(V) || null), w(U, P, '' + ae, be));
      if (typeof ae == 'object' && ae !== null) {
        switch (ae.$$typeof) {
          case v:
            return ((P = P.get(ae.key === null ? V : ae.key) || null), L(U, P, ae, be));
          case b:
            return ((P = P.get(ae.key === null ? V : ae.key) || null), G(U, P, ae, be));
          case Y:
            var Ue = ae._init;
            return ((ae = Ue(ae._payload)), W(P, U, V, ae, be));
        }
        if (I(ae) || k(ae)) return ((P = P.get(V) || null), ie(U, P, ae, be, null));
        if (typeof ae.then == 'function') return W(P, U, V, cs(ae), be);
        if (ae.$$typeof === M) return W(P, U, V, Zo(U, ae), be);
        fs(U, ae);
      }
      return null;
    }
    function Me(P, U, V, ae) {
      for (
        var be = null, Ue = null, ke = U, Te = (U = 0), Gt = null;
        ke !== null && Te < V.length;
        Te++
      ) {
        ke.index > Te ? ((Gt = ke), (ke = null)) : (Gt = ke.sibling);
        var Xe = Z(P, ke, V[Te], ae);
        if (Xe === null) {
          ke === null && (ke = Gt);
          break;
        }
        (t && ke && Xe.alternate === null && r(P, ke),
          (U = m(Xe, U, Te)),
          Ue === null ? (be = Xe) : (Ue.sibling = Xe),
          (Ue = Xe),
          (ke = Gt));
      }
      if (Te === V.length) return (a(P, ke), Ke && xi(P, Te), be);
      if (ke === null) {
        for (; Te < V.length; Te++)
          ((ke = se(P, V[Te], ae)),
            ke !== null &&
              ((U = m(ke, U, Te)), Ue === null ? (be = ke) : (Ue.sibling = ke), (Ue = ke)));
        return (Ke && xi(P, Te), be);
      }
      for (ke = s(ke); Te < V.length; Te++)
        ((Gt = W(ke, P, Te, V[Te], ae)),
          Gt !== null &&
            (t && Gt.alternate !== null && ke.delete(Gt.key === null ? Te : Gt.key),
            (U = m(Gt, U, Te)),
            Ue === null ? (be = Gt) : (Ue.sibling = Gt),
            (Ue = Gt)));
      return (
        t &&
          ke.forEach(function (ai) {
            return r(P, ai);
          }),
        Ke && xi(P, Te),
        be
      );
    }
    function Ee(P, U, V, ae) {
      if (V == null) throw Error(l(151));
      for (
        var be = null, Ue = null, ke = U, Te = (U = 0), Gt = null, Xe = V.next();
        ke !== null && !Xe.done;
        Te++, Xe = V.next()
      ) {
        ke.index > Te ? ((Gt = ke), (ke = null)) : (Gt = ke.sibling);
        var ai = Z(P, ke, Xe.value, ae);
        if (ai === null) {
          ke === null && (ke = Gt);
          break;
        }
        (t && ke && ai.alternate === null && r(P, ke),
          (U = m(ai, U, Te)),
          Ue === null ? (be = ai) : (Ue.sibling = ai),
          (Ue = ai),
          (ke = Gt));
      }
      if (Xe.done) return (a(P, ke), Ke && xi(P, Te), be);
      if (ke === null) {
        for (; !Xe.done; Te++, Xe = V.next())
          ((Xe = se(P, Xe.value, ae)),
            Xe !== null &&
              ((U = m(Xe, U, Te)), Ue === null ? (be = Xe) : (Ue.sibling = Xe), (Ue = Xe)));
        return (Ke && xi(P, Te), be);
      }
      for (ke = s(ke); !Xe.done; Te++, Xe = V.next())
        ((Xe = W(ke, P, Te, Xe.value, ae)),
          Xe !== null &&
            (t && Xe.alternate !== null && ke.delete(Xe.key === null ? Te : Xe.key),
            (U = m(Xe, U, Te)),
            Ue === null ? (be = Xe) : (Ue.sibling = Xe),
            (Ue = Xe)));
      return (
        t &&
          ke.forEach(function (IC) {
            return r(P, IC);
          }),
        Ke && xi(P, Te),
        be
      );
    }
    function dt(P, U, V, ae) {
      if (
        (typeof V == 'object' &&
          V !== null &&
          V.type === C &&
          V.key === null &&
          (V = V.props.children),
        typeof V == 'object' && V !== null)
      ) {
        switch (V.$$typeof) {
          case v:
            e: {
              for (var be = V.key; U !== null; ) {
                if (U.key === be) {
                  if (((be = V.type), be === C)) {
                    if (U.tag === 7) {
                      (a(P, U.sibling), (ae = f(U, V.props.children)), (ae.return = P), (P = ae));
                      break e;
                    }
                  } else if (
                    U.elementType === be ||
                    (typeof be == 'object' && be !== null && be.$$typeof === Y && cg(be) === U.type)
                  ) {
                    (a(P, U.sibling), (ae = f(U, V.props)), Ea(ae, V), (ae.return = P), (P = ae));
                    break e;
                  }
                  a(P, U);
                  break;
                } else r(P, U);
                U = U.sibling;
              }
              V.type === C
                ? ((ae = bi(V.props.children, P.mode, ae, V.key)), (ae.return = P), (P = ae))
                : ((ae = Go(V.type, V.key, V.props, null, P.mode, ae)),
                  Ea(ae, V),
                  (ae.return = P),
                  (P = ae));
            }
            return x(P);
          case b:
            e: {
              for (be = V.key; U !== null; ) {
                if (U.key === be)
                  if (
                    U.tag === 4 &&
                    U.stateNode.containerInfo === V.containerInfo &&
                    U.stateNode.implementation === V.implementation
                  ) {
                    (a(P, U.sibling), (ae = f(U, V.children || [])), (ae.return = P), (P = ae));
                    break e;
                  } else {
                    a(P, U);
                    break;
                  }
                else r(P, U);
                U = U.sibling;
              }
              ((ae = Rc(V, P.mode, ae)), (ae.return = P), (P = ae));
            }
            return x(P);
          case Y:
            return ((be = V._init), (V = be(V._payload)), dt(P, U, V, ae));
        }
        if (I(V)) return Me(P, U, V, ae);
        if (k(V)) {
          if (((be = k(V)), typeof be != 'function')) throw Error(l(150));
          return ((V = be.call(V)), Ee(P, U, V, ae));
        }
        if (typeof V.then == 'function') return dt(P, U, cs(V), ae);
        if (V.$$typeof === M) return dt(P, U, Zo(P, V), ae);
        fs(P, V);
      }
      return (typeof V == 'string' && V !== '') || typeof V == 'number' || typeof V == 'bigint'
        ? ((V = '' + V),
          U !== null && U.tag === 6
            ? (a(P, U.sibling), (ae = f(U, V)), (ae.return = P), (P = ae))
            : (a(P, U), (ae = Ac(V, P.mode, ae)), (ae.return = P), (P = ae)),
          x(P))
        : a(P, U);
    }
    return function (P, U, V, ae) {
      try {
        wa = 0;
        var be = dt(P, U, V, ae);
        return ((pl = null), be);
      } catch (ke) {
        if (ke === ma || ke === Jo) throw ke;
        var Ue = kn(29, ke, null, P.mode);
        return ((Ue.lanes = ae), (Ue.return = P), Ue);
      } finally {
      }
    };
  }
  var hl = fg(!0),
    dg = fg(!1),
    jn = J(null),
    nr = null;
  function Vr(t) {
    var r = t.alternate;
    (A(It, It.current & 1),
      A(jn, t),
      nr === null && (r === null || ul.current !== null || r.memoizedState !== null) && (nr = t));
  }
  function pg(t) {
    if (t.tag === 22) {
      if ((A(It, It.current), A(jn, t), nr === null)) {
        var r = t.alternate;
        r !== null && r.memoizedState !== null && (nr = t);
      }
    } else Yr();
  }
  function Yr() {
    (A(It, It.current), A(jn, jn.current));
  }
  function wr(t) {
    (oe(jn), nr === t && (nr = null), oe(It));
  }
  var It = J(0);
  function ds(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var a = r.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || a.data === '$?' || Zf(a))) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
    return null;
  }
  function sf(t, r, a, s) {
    ((r = t.memoizedState),
      (a = a(s, r)),
      (a = a == null ? r : g({}, r, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var uf = {
    enqueueSetState: function (t, r, a) {
      t = t._reactInternals;
      var s = An(),
        f = Hr(s);
      ((f.payload = r),
        a != null && (f.callback = a),
        (r = qr(t, f, s)),
        r !== null && (Rn(r, t, s), ya(r, t, s)));
    },
    enqueueReplaceState: function (t, r, a) {
      t = t._reactInternals;
      var s = An(),
        f = Hr(s);
      ((f.tag = 1),
        (f.payload = r),
        a != null && (f.callback = a),
        (r = qr(t, f, s)),
        r !== null && (Rn(r, t, s), ya(r, t, s)));
    },
    enqueueForceUpdate: function (t, r) {
      t = t._reactInternals;
      var a = An(),
        s = Hr(a);
      ((s.tag = 2),
        r != null && (s.callback = r),
        (r = qr(t, s, a)),
        r !== null && (Rn(r, t, a), ya(r, t, a)));
    },
  };
  function hg(t, r, a, s, f, m, x) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(s, m, x)
        : r.prototype && r.prototype.isPureReactComponent
          ? !oa(a, s) || !oa(f, m)
          : !0
    );
  }
  function mg(t, r, a, s) {
    ((t = r.state),
      typeof r.componentWillReceiveProps == 'function' && r.componentWillReceiveProps(a, s),
      typeof r.UNSAFE_componentWillReceiveProps == 'function' &&
        r.UNSAFE_componentWillReceiveProps(a, s),
      r.state !== t && uf.enqueueReplaceState(r, r.state, null));
  }
  function Ai(t, r) {
    var a = r;
    if ('ref' in r) {
      a = {};
      for (var s in r) s !== 'ref' && (a[s] = r[s]);
    }
    if ((t = t.defaultProps)) {
      a === r && (a = g({}, a));
      for (var f in t) a[f] === void 0 && (a[f] = t[f]);
    }
    return a;
  }
  var ps =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var r = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == 'object' && t !== null && typeof t.message == 'string'
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(r)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', t);
            return;
          }
          console.error(t);
        };
  function gg(t) {
    ps(t);
  }
  function yg(t) {
    console.error(t);
  }
  function bg(t) {
    ps(t);
  }
  function hs(t, r) {
    try {
      var a = t.onUncaughtError;
      a(r.value, { componentStack: r.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function vg(t, r, a) {
    try {
      var s = t.onCaughtError;
      s(a.value, { componentStack: a.stack, errorBoundary: r.tag === 1 ? r.stateNode : null });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function cf(t, r, a) {
    return (
      (a = Hr(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        hs(t, r);
      }),
      a
    );
  }
  function xg(t) {
    return ((t = Hr(t)), (t.tag = 3), t);
  }
  function Sg(t, r, a, s) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == 'function') {
      var m = s.value;
      ((t.payload = function () {
        return f(m);
      }),
        (t.callback = function () {
          vg(r, a, s);
        }));
    }
    var x = a.stateNode;
    x !== null &&
      typeof x.componentDidCatch == 'function' &&
      (t.callback = function () {
        (vg(r, a, s),
          typeof f != 'function' && (Wr === null ? (Wr = new Set([this])) : Wr.add(this)));
        var w = s.stack;
        this.componentDidCatch(s.value, { componentStack: w !== null ? w : '' });
      });
  }
  function IS(t, r, a, s, f) {
    if (((a.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
      if (((r = a.alternate), r !== null && da(r, a, f, !0), (a = jn.current), a !== null)) {
        switch (a.tag) {
          case 13:
            return (
              nr === null ? _f() : a.alternate === null && Rt === 0 && (Rt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = f),
              s === Uc
                ? (a.flags |= 16384)
                : ((r = a.updateQueue),
                  r === null ? (a.updateQueue = new Set([s])) : r.add(s),
                  Lf(t, s, f)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              s === Uc
                ? (a.flags |= 16384)
                : ((r = a.updateQueue),
                  r === null
                    ? ((r = { transitions: null, markerInstances: null, retryQueue: new Set([s]) }),
                      (a.updateQueue = r))
                    : ((a = r.retryQueue), a === null ? (r.retryQueue = new Set([s])) : a.add(s)),
                  Lf(t, s, f)),
              !1
            );
        }
        throw Error(l(435, a.tag));
      }
      return (Lf(t, s, f), _f(), !1);
    }
    if (Ke)
      return (
        (r = jn.current),
        r !== null
          ? ((r.flags & 65536) === 0 && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = f),
            s !== zc && ((t = Error(l(422), { cause: s })), fa(Bn(t, a))))
          : (s !== zc && ((r = Error(l(423), { cause: s })), fa(Bn(r, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (s = Bn(s, a)),
            (f = cf(t.stateNode, s, f)),
            Ic(t, f),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var m = Error(l(520), { cause: s });
    if (((m = Bn(m, a)), Da === null ? (Da = [m]) : Da.push(m), Rt !== 4 && (Rt = 2), r === null))
      return !0;
    ((s = Bn(s, a)), (a = r));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = f & -f),
            (a.lanes |= t),
            (t = cf(a.stateNode, s, t)),
            Ic(a, t),
            !1
          );
        case 1:
          if (
            ((r = a.type),
            (m = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == 'function' ||
                (m !== null &&
                  typeof m.componentDidCatch == 'function' &&
                  (Wr === null || !Wr.has(m)))))
          )
            return (
              (a.flags |= 65536),
              (f &= -f),
              (a.lanes |= f),
              (f = xg(f)),
              Sg(f, t, a, s),
              Ic(a, f),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Cg = Error(l(461)),
    Vt = !1;
  function Xt(t, r, a, s) {
    r.child = t === null ? dg(r, null, a, s) : hl(r, t.child, a, s);
  }
  function kg(t, r, a, s, f) {
    a = a.render;
    var m = r.ref;
    if ('ref' in s) {
      var x = {};
      for (var w in s) w !== 'ref' && (x[w] = s[w]);
    } else x = s;
    return (
      wi(r),
      (s = Yc(t, r, a, x, m, f)),
      (w = Gc()),
      t !== null && !Vt
        ? (Xc(t, r, f), Er(t, r, f))
        : (Ke && w && Mc(r), (r.flags |= 1), Xt(t, r, s, f), r.child)
    );
  }
  function wg(t, r, a, s, f) {
    if (t === null) {
      var m = a.type;
      return typeof m == 'function' && !Tc(m) && m.defaultProps === void 0 && a.compare === null
        ? ((r.tag = 15), (r.type = m), Eg(t, r, m, s, f))
        : ((t = Go(a.type, null, s, r, r.mode, f)), (t.ref = r.ref), (t.return = r), (r.child = t));
    }
    if (((m = t.child), !bf(t, f))) {
      var x = m.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : oa), a(x, s) && t.ref === r.ref))
        return Er(t, r, f);
    }
    return ((r.flags |= 1), (t = br(m, s)), (t.ref = r.ref), (t.return = r), (r.child = t));
  }
  function Eg(t, r, a, s, f) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (oa(m, s) && t.ref === r.ref)
        if (((Vt = !1), (r.pendingProps = s = m), bf(t, f))) (t.flags & 131072) !== 0 && (Vt = !0);
        else return ((r.lanes = t.lanes), Er(t, r, f));
    }
    return ff(t, r, a, s, f);
  }
  function Tg(t, r, a) {
    var s = r.pendingProps,
      f = s.children,
      m = t !== null ? t.memoizedState : null;
    if (s.mode === 'hidden') {
      if ((r.flags & 128) !== 0) {
        if (((s = m !== null ? m.baseLanes | a : a), t !== null)) {
          for (f = r.child = t.child, m = 0; f !== null; )
            ((m = m | f.lanes | f.childLanes), (f = f.sibling));
          r.childLanes = m & ~s;
        } else ((r.childLanes = 0), (r.child = null));
        return Ag(t, r, s, a);
      }
      if ((a & 536870912) !== 0)
        ((r.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wo(r, m !== null ? m.cachePool : null),
          m !== null ? Em(r, m) : qc(),
          pg(r));
      else
        return (
          (r.lanes = r.childLanes = 536870912),
          Ag(t, r, m !== null ? m.baseLanes | a : a, a)
        );
    } else
      m !== null
        ? (Wo(r, m.cachePool), Em(r, m), Yr(), (r.memoizedState = null))
        : (t !== null && Wo(r, null), qc(), Yr());
    return (Xt(t, r, f, a), r.child);
  }
  function Ag(t, r, a, s) {
    var f = $c();
    return (
      (f = f === null ? null : { parent: Pt._currentValue, pool: f }),
      (r.memoizedState = { baseLanes: a, cachePool: f }),
      t !== null && Wo(r, null),
      qc(),
      pg(r),
      t !== null && da(t, r, s, !0),
      null
    );
  }
  function ms(t, r) {
    var a = r.ref;
    if (a === null) t !== null && t.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof a != 'function' && typeof a != 'object') throw Error(l(284));
      (t === null || t.ref !== a) && (r.flags |= 4194816);
    }
  }
  function ff(t, r, a, s, f) {
    return (
      wi(r),
      (a = Yc(t, r, a, s, void 0, f)),
      (s = Gc()),
      t !== null && !Vt
        ? (Xc(t, r, f), Er(t, r, f))
        : (Ke && s && Mc(r), (r.flags |= 1), Xt(t, r, a, f), r.child)
    );
  }
  function Rg(t, r, a, s, f, m) {
    return (
      wi(r),
      (r.updateQueue = null),
      (a = Am(r, s, a, f)),
      Tm(t),
      (s = Gc()),
      t !== null && !Vt
        ? (Xc(t, r, m), Er(t, r, m))
        : (Ke && s && Mc(r), (r.flags |= 1), Xt(t, r, a, m), r.child)
    );
  }
  function Mg(t, r, a, s, f) {
    if ((wi(r), r.stateNode === null)) {
      var m = il,
        x = a.contextType;
      (typeof x == 'object' && x !== null && (m = tn(x)),
        (m = new a(s, m)),
        (r.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null),
        (m.updater = uf),
        (r.stateNode = m),
        (m._reactInternals = r),
        (m = r.stateNode),
        (m.props = s),
        (m.state = r.memoizedState),
        (m.refs = {}),
        jc(r),
        (x = a.contextType),
        (m.context = typeof x == 'object' && x !== null ? tn(x) : il),
        (m.state = r.memoizedState),
        (x = a.getDerivedStateFromProps),
        typeof x == 'function' && (sf(r, a, x, s), (m.state = r.memoizedState)),
        typeof a.getDerivedStateFromProps == 'function' ||
          typeof m.getSnapshotBeforeUpdate == 'function' ||
          (typeof m.UNSAFE_componentWillMount != 'function' &&
            typeof m.componentWillMount != 'function') ||
          ((x = m.state),
          typeof m.componentWillMount == 'function' && m.componentWillMount(),
          typeof m.UNSAFE_componentWillMount == 'function' && m.UNSAFE_componentWillMount(),
          x !== m.state && uf.enqueueReplaceState(m, m.state, null),
          va(r, s, m, f),
          ba(),
          (m.state = r.memoizedState)),
        typeof m.componentDidMount == 'function' && (r.flags |= 4194308),
        (s = !0));
    } else if (t === null) {
      m = r.stateNode;
      var w = r.memoizedProps,
        L = Ai(a, w);
      m.props = L;
      var G = m.context,
        ie = a.contextType;
      ((x = il), typeof ie == 'object' && ie !== null && (x = tn(ie)));
      var se = a.getDerivedStateFromProps;
      ((ie = typeof se == 'function' || typeof m.getSnapshotBeforeUpdate == 'function'),
        (w = r.pendingProps !== w),
        ie ||
          (typeof m.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof m.componentWillReceiveProps != 'function') ||
          ((w || G !== x) && mg(r, m, s, x)),
        (Ir = !1));
      var Z = r.memoizedState;
      ((m.state = Z),
        va(r, s, m, f),
        ba(),
        (G = r.memoizedState),
        w || Z !== G || Ir
          ? (typeof se == 'function' && (sf(r, a, se, s), (G = r.memoizedState)),
            (L = Ir || hg(r, a, L, s, Z, G, x))
              ? (ie ||
                  (typeof m.UNSAFE_componentWillMount != 'function' &&
                    typeof m.componentWillMount != 'function') ||
                  (typeof m.componentWillMount == 'function' && m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == 'function' &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == 'function' && (r.flags |= 4194308))
              : (typeof m.componentDidMount == 'function' && (r.flags |= 4194308),
                (r.memoizedProps = s),
                (r.memoizedState = G)),
            (m.props = s),
            (m.state = G),
            (m.context = x),
            (s = L))
          : (typeof m.componentDidMount == 'function' && (r.flags |= 4194308), (s = !1)));
    } else {
      ((m = r.stateNode),
        Pc(t, r),
        (x = r.memoizedProps),
        (ie = Ai(a, x)),
        (m.props = ie),
        (se = r.pendingProps),
        (Z = m.context),
        (G = a.contextType),
        (L = il),
        typeof G == 'object' && G !== null && (L = tn(G)),
        (w = a.getDerivedStateFromProps),
        (G = typeof w == 'function' || typeof m.getSnapshotBeforeUpdate == 'function') ||
          (typeof m.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof m.componentWillReceiveProps != 'function') ||
          ((x !== se || Z !== L) && mg(r, m, s, L)),
        (Ir = !1),
        (Z = r.memoizedState),
        (m.state = Z),
        va(r, s, m, f),
        ba());
      var W = r.memoizedState;
      x !== se || Z !== W || Ir || (t !== null && t.dependencies !== null && Qo(t.dependencies))
        ? (typeof w == 'function' && (sf(r, a, w, s), (W = r.memoizedState)),
          (ie =
            Ir ||
            hg(r, a, ie, s, Z, W, L) ||
            (t !== null && t.dependencies !== null && Qo(t.dependencies)))
            ? (G ||
                (typeof m.UNSAFE_componentWillUpdate != 'function' &&
                  typeof m.componentWillUpdate != 'function') ||
                (typeof m.componentWillUpdate == 'function' && m.componentWillUpdate(s, W, L),
                typeof m.UNSAFE_componentWillUpdate == 'function' &&
                  m.UNSAFE_componentWillUpdate(s, W, L)),
              typeof m.componentDidUpdate == 'function' && (r.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == 'function' && (r.flags |= 1024))
            : (typeof m.componentDidUpdate != 'function' ||
                (x === t.memoizedProps && Z === t.memoizedState) ||
                (r.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != 'function' ||
                (x === t.memoizedProps && Z === t.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = s),
              (r.memoizedState = W)),
          (m.props = s),
          (m.state = W),
          (m.context = L),
          (s = ie))
        : (typeof m.componentDidUpdate != 'function' ||
            (x === t.memoizedProps && Z === t.memoizedState) ||
            (r.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != 'function' ||
            (x === t.memoizedProps && Z === t.memoizedState) ||
            (r.flags |= 1024),
          (s = !1));
    }
    return (
      (m = s),
      ms(t, r),
      (s = (r.flags & 128) !== 0),
      m || s
        ? ((m = r.stateNode),
          (a = s && typeof a.getDerivedStateFromError != 'function' ? null : m.render()),
          (r.flags |= 1),
          t !== null && s
            ? ((r.child = hl(r, t.child, null, f)), (r.child = hl(r, null, a, f)))
            : Xt(t, r, a, f),
          (r.memoizedState = m.state),
          (t = r.child))
        : (t = Er(t, r, f)),
      t
    );
  }
  function Og(t, r, a, s) {
    return (ca(), (r.flags |= 256), Xt(t, r, a, s), r.child);
  }
  var df = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function pf(t) {
    return { baseLanes: t, cachePool: ym() };
  }
  function hf(t, r, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), r && (t |= Pn), t);
  }
  function zg(t, r, a) {
    var s = r.pendingProps,
      f = !1,
      m = (r.flags & 128) !== 0,
      x;
    if (
      ((x = m) || (x = t !== null && t.memoizedState === null ? !1 : (It.current & 2) !== 0),
      x && ((f = !0), (r.flags &= -129)),
      (x = (r.flags & 32) !== 0),
      (r.flags &= -33),
      t === null)
    ) {
      if (Ke) {
        if ((f ? Vr(r) : Yr(), Ke)) {
          var w = At,
            L;
          if ((L = w)) {
            e: {
              for (L = w, w = tr; L.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (((L = Xn(L.nextSibling)), L === null)) {
                  w = null;
                  break e;
                }
              }
              w = L;
            }
            w !== null
              ? ((r.memoizedState = {
                  dehydrated: w,
                  treeContext: vi !== null ? { id: vr, overflow: xr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (L = kn(18, null, null, 0)),
                (L.stateNode = w),
                (L.return = r),
                (r.child = L),
                (un = r),
                (At = null),
                (L = !0))
              : (L = !1);
          }
          L || Ci(r);
        }
        if (((w = r.memoizedState), w !== null && ((w = w.dehydrated), w !== null)))
          return (Zf(w) ? (r.lanes = 32) : (r.lanes = 536870912), null);
        wr(r);
      }
      return (
        (w = s.children),
        (s = s.fallback),
        f
          ? (Yr(),
            (f = r.mode),
            (w = gs({ mode: 'hidden', children: w }, f)),
            (s = bi(s, f, a, null)),
            (w.return = r),
            (s.return = r),
            (w.sibling = s),
            (r.child = w),
            (f = r.child),
            (f.memoizedState = pf(a)),
            (f.childLanes = hf(t, x, a)),
            (r.memoizedState = df),
            s)
          : (Vr(r), mf(r, w))
      );
    }
    if (((L = t.memoizedState), L !== null && ((w = L.dehydrated), w !== null))) {
      if (m)
        r.flags & 256
          ? (Vr(r), (r.flags &= -257), (r = gf(t, r, a)))
          : r.memoizedState !== null
            ? (Yr(), (r.child = t.child), (r.flags |= 128), (r = null))
            : (Yr(),
              (f = s.fallback),
              (w = r.mode),
              (s = gs({ mode: 'visible', children: s.children }, w)),
              (f = bi(f, w, a, null)),
              (f.flags |= 2),
              (s.return = r),
              (f.return = r),
              (s.sibling = f),
              (r.child = s),
              hl(r, t.child, null, a),
              (s = r.child),
              (s.memoizedState = pf(a)),
              (s.childLanes = hf(t, x, a)),
              (r.memoizedState = df),
              (r = f));
      else if ((Vr(r), Zf(w))) {
        if (((x = w.nextSibling && w.nextSibling.dataset), x)) var G = x.dgst;
        ((x = G),
          (s = Error(l(419))),
          (s.stack = ''),
          (s.digest = x),
          fa({ value: s, source: null, stack: null }),
          (r = gf(t, r, a)));
      } else if ((Vt || da(t, r, a, !1), (x = (a & t.childLanes) !== 0), Vt || x)) {
        if (
          ((x = xt),
          x !== null &&
            ((s = a & -a),
            (s = (s & 42) !== 0 ? 1 : Zu(s)),
            (s = (s & (x.suspendedLanes | a)) !== 0 ? 0 : s),
            s !== 0 && s !== L.retryLane))
        )
          throw ((L.retryLane = s), rl(t, s), Rn(x, t, s), Cg);
        (w.data === '$?' || _f(), (r = gf(t, r, a)));
      } else
        w.data === '$?'
          ? ((r.flags |= 192), (r.child = t.child), (r = null))
          : ((t = L.treeContext),
            (At = Xn(w.nextSibling)),
            (un = r),
            (Ke = !0),
            (Si = null),
            (tr = !1),
            t !== null &&
              (($n[Un++] = vr),
              ($n[Un++] = xr),
              ($n[Un++] = vi),
              (vr = t.id),
              (xr = t.overflow),
              (vi = r)),
            (r = mf(r, s.children)),
            (r.flags |= 4096));
      return r;
    }
    return f
      ? (Yr(),
        (f = s.fallback),
        (w = r.mode),
        (L = t.child),
        (G = L.sibling),
        (s = br(L, { mode: 'hidden', children: s.children })),
        (s.subtreeFlags = L.subtreeFlags & 65011712),
        G !== null ? (f = br(G, f)) : ((f = bi(f, w, a, null)), (f.flags |= 2)),
        (f.return = r),
        (s.return = r),
        (s.sibling = f),
        (r.child = s),
        (s = f),
        (f = r.child),
        (w = t.child.memoizedState),
        w === null
          ? (w = pf(a))
          : ((L = w.cachePool),
            L !== null
              ? ((G = Pt._currentValue), (L = L.parent !== G ? { parent: G, pool: G } : L))
              : (L = ym()),
            (w = { baseLanes: w.baseLanes | a, cachePool: L })),
        (f.memoizedState = w),
        (f.childLanes = hf(t, x, a)),
        (r.memoizedState = df),
        s)
      : (Vr(r),
        (a = t.child),
        (t = a.sibling),
        (a = br(a, { mode: 'visible', children: s.children })),
        (a.return = r),
        (a.sibling = null),
        t !== null &&
          ((x = r.deletions), x === null ? ((r.deletions = [t]), (r.flags |= 16)) : x.push(t)),
        (r.child = a),
        (r.memoizedState = null),
        a);
  }
  function mf(t, r) {
    return ((r = gs({ mode: 'visible', children: r }, t.mode)), (r.return = t), (t.child = r));
  }
  function gs(t, r) {
    return (
      (t = kn(22, t, null, r)),
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
  function gf(t, r, a) {
    return (
      hl(r, t.child, null, a),
      (t = mf(r, r.pendingProps.children)),
      (t.flags |= 2),
      (r.memoizedState = null),
      t
    );
  }
  function Dg(t, r, a) {
    t.lanes |= r;
    var s = t.alternate;
    (s !== null && (s.lanes |= r), Nc(t.return, r, a));
  }
  function yf(t, r, a, s, f) {
    var m = t.memoizedState;
    m === null
      ? (t.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: a,
          tailMode: f,
        })
      : ((m.isBackwards = r),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = s),
        (m.tail = a),
        (m.tailMode = f));
  }
  function Ng(t, r, a) {
    var s = r.pendingProps,
      f = s.revealOrder,
      m = s.tail;
    if ((Xt(t, r, s.children, a), (s = It.current), (s & 2) !== 0))
      ((s = (s & 1) | 2), (r.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = r.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Dg(t, a, r);
          else if (t.tag === 19) Dg(t, a, r);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === r) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === r) break e;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      s &= 1;
    }
    switch ((A(It, s), f)) {
      case 'forwards':
        for (a = r.child, f = null; a !== null; )
          ((t = a.alternate), t !== null && ds(t) === null && (f = a), (a = a.sibling));
        ((a = f),
          a === null ? ((f = r.child), (r.child = null)) : ((f = a.sibling), (a.sibling = null)),
          yf(r, !1, f, a, m));
        break;
      case 'backwards':
        for (a = null, f = r.child, r.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && ds(t) === null)) {
            r.child = f;
            break;
          }
          ((t = f.sibling), (f.sibling = a), (a = f), (f = t));
        }
        yf(r, !0, a, null, m);
        break;
      case 'together':
        yf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Er(t, r, a) {
    if (
      (t !== null && (r.dependencies = t.dependencies), (Zr |= r.lanes), (a & r.childLanes) === 0)
    )
      if (t !== null) {
        if ((da(t, r, a, !1), (a & r.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && r.child !== t.child) throw Error(l(153));
    if (r.child !== null) {
      for (t = r.child, a = br(t, t.pendingProps), r.child = a, a.return = r; t.sibling !== null; )
        ((t = t.sibling), (a = a.sibling = br(t, t.pendingProps)), (a.return = r));
      a.sibling = null;
    }
    return r.child;
  }
  function bf(t, r) {
    return (t.lanes & r) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Qo(t)));
  }
  function HS(t, r, a) {
    switch (r.tag) {
      case 3:
        (ve(r, r.stateNode.containerInfo), Pr(r, Pt, t.memoizedState.cache), ca());
        break;
      case 27:
      case 5:
        Ce(r);
        break;
      case 4:
        ve(r, r.stateNode.containerInfo);
        break;
      case 10:
        Pr(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var s = r.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (Vr(r), (r.flags |= 128), null)
            : (a & r.child.childLanes) !== 0
              ? zg(t, r, a)
              : (Vr(r), (t = Er(t, r, a)), t !== null ? t.sibling : null);
        Vr(r);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((s = (a & r.childLanes) !== 0),
          s || (da(t, r, a, !1), (s = (a & r.childLanes) !== 0)),
          f)
        ) {
          if (s) return Ng(t, r, a);
          r.flags |= 128;
        }
        if (
          ((f = r.memoizedState),
          f !== null && ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          A(It, It.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((r.lanes = 0), Tg(t, r, a));
      case 24:
        Pr(r, Pt, t.memoizedState.cache);
    }
    return Er(t, r, a);
  }
  function _g(t, r, a) {
    if (t !== null)
      if (t.memoizedProps !== r.pendingProps) Vt = !0;
      else {
        if (!bf(t, a) && (r.flags & 128) === 0) return ((Vt = !1), HS(t, r, a));
        Vt = (t.flags & 131072) !== 0;
      }
    else ((Vt = !1), Ke && (r.flags & 1048576) !== 0 && cm(r, Ko, r.index));
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          t = r.pendingProps;
          var s = r.elementType,
            f = s._init;
          if (((s = f(s._payload)), (r.type = s), typeof s == 'function'))
            Tc(s)
              ? ((t = Ai(s, t)), (r.tag = 1), (r = Mg(null, r, s, t, a)))
              : ((r.tag = 0), (r = ff(null, r, s, t, a)));
          else {
            if (s != null) {
              if (((f = s.$$typeof), f === N)) {
                ((r.tag = 11), (r = kg(null, r, s, t, a)));
                break e;
              } else if (f === H) {
                ((r.tag = 14), (r = wg(null, r, s, t, a)));
                break e;
              }
            }
            throw ((r = F(s) || s), Error(l(306, r, '')));
          }
        }
        return r;
      case 0:
        return ff(t, r, r.type, r.pendingProps, a);
      case 1:
        return ((s = r.type), (f = Ai(s, r.pendingProps)), Mg(t, r, s, f, a));
      case 3:
        e: {
          if ((ve(r, r.stateNode.containerInfo), t === null)) throw Error(l(387));
          s = r.pendingProps;
          var m = r.memoizedState;
          ((f = m.element), Pc(t, r), va(r, s, null, a));
          var x = r.memoizedState;
          if (
            ((s = x.cache),
            Pr(r, Pt, s),
            s !== m.cache && _c(r, [Pt], a, !0),
            ba(),
            (s = x.element),
            m.isDehydrated)
          )
            if (
              ((m = { element: s, isDehydrated: !1, cache: x.cache }),
              (r.updateQueue.baseState = m),
              (r.memoizedState = m),
              r.flags & 256)
            ) {
              r = Og(t, r, s, a);
              break e;
            } else if (s !== f) {
              ((f = Bn(Error(l(424)), r)), fa(f), (r = Og(t, r, s, a)));
              break e;
            } else {
              switch (((t = r.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (
                At = Xn(t.firstChild),
                  un = r,
                  Ke = !0,
                  Si = null,
                  tr = !0,
                  a = dg(r, null, s, a),
                  r.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((ca(), s === f)) {
              r = Er(t, r, a);
              break e;
            }
            Xt(t, r, s, a);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          ms(t, r),
          t === null
            ? (a = Uy(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = a)
              : Ke ||
                ((a = r.type),
                (t = r.pendingProps),
                (s = Os(te.current).createElement(a)),
                (s[en] = r),
                (s[fn] = t),
                Qt(s, a, t),
                Ft(s),
                (r.stateNode = s))
            : (r.memoizedState = Uy(r.type, t.memoizedProps, r.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Ce(r),
          t === null &&
            Ke &&
            ((s = r.stateNode = By(r.type, r.pendingProps, te.current)),
            (un = r),
            (tr = !0),
            (f = At),
            ti(r.type) ? ((Wf = f), (At = Xn(s.firstChild))) : (At = f)),
          Xt(t, r, r.pendingProps.children, a),
          ms(t, r),
          t === null && (r.flags |= 4194304),
          r.child
        );
      case 5:
        return (
          t === null &&
            Ke &&
            ((f = s = At) &&
              ((s = gC(s, r.type, r.pendingProps, tr)),
              s !== null
                ? ((r.stateNode = s), (un = r), (At = Xn(s.firstChild)), (tr = !1), (f = !0))
                : (f = !1)),
            f || Ci(r)),
          Ce(r),
          (f = r.type),
          (m = r.pendingProps),
          (x = t !== null ? t.memoizedProps : null),
          (s = m.children),
          Xf(f, m) ? (s = null) : x !== null && Xf(f, x) && (r.flags |= 32),
          r.memoizedState !== null && ((f = Yc(t, r, _S, null, null, a)), (Ia._currentValue = f)),
          ms(t, r),
          Xt(t, r, s, a),
          r.child
        );
      case 6:
        return (
          t === null &&
            Ke &&
            ((t = a = At) &&
              ((a = yC(a, r.pendingProps, tr)),
              a !== null ? ((r.stateNode = a), (un = r), (At = null), (t = !0)) : (t = !1)),
            t || Ci(r)),
          null
        );
      case 13:
        return zg(t, r, a);
      case 4:
        return (
          ve(r, r.stateNode.containerInfo),
          (s = r.pendingProps),
          t === null ? (r.child = hl(r, null, s, a)) : Xt(t, r, s, a),
          r.child
        );
      case 11:
        return kg(t, r, r.type, r.pendingProps, a);
      case 7:
        return (Xt(t, r, r.pendingProps, a), r.child);
      case 8:
        return (Xt(t, r, r.pendingProps.children, a), r.child);
      case 12:
        return (Xt(t, r, r.pendingProps.children, a), r.child);
      case 10:
        return ((s = r.pendingProps), Pr(r, r.type, s.value), Xt(t, r, s.children, a), r.child);
      case 9:
        return (
          (f = r.type._context),
          (s = r.pendingProps.children),
          wi(r),
          (f = tn(f)),
          (s = s(f)),
          (r.flags |= 1),
          Xt(t, r, s, a),
          r.child
        );
      case 14:
        return wg(t, r, r.type, r.pendingProps, a);
      case 15:
        return Eg(t, r, r.type, r.pendingProps, a);
      case 19:
        return Ng(t, r, a);
      case 31:
        return (
          (s = r.pendingProps),
          (a = r.mode),
          (s = { mode: s.mode, children: s.children }),
          t === null
            ? ((a = gs(s, a)), (a.ref = r.ref), (r.child = a), (a.return = r), (r = a))
            : ((a = br(t.child, s)), (a.ref = r.ref), (r.child = a), (a.return = r), (r = a)),
          r
        );
      case 22:
        return Tg(t, r, a);
      case 24:
        return (
          wi(r),
          (s = tn(Pt)),
          t === null
            ? ((f = $c()),
              f === null &&
                ((f = xt),
                (m = Bc()),
                (f.pooledCache = m),
                m.refCount++,
                m !== null && (f.pooledCacheLanes |= a),
                (f = m)),
              (r.memoizedState = { parent: s, cache: f }),
              jc(r),
              Pr(r, Pt, f))
            : ((t.lanes & a) !== 0 && (Pc(t, r), va(r, null, null, a), ba()),
              (f = t.memoizedState),
              (m = r.memoizedState),
              f.parent !== s
                ? ((f = { parent: s, cache: s }),
                  (r.memoizedState = f),
                  r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = f),
                  Pr(r, Pt, s))
                : ((s = m.cache), Pr(r, Pt, s), s !== f.cache && _c(r, [Pt], a, !0))),
          Xt(t, r, r.pendingProps.children, a),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(l(156, r.tag));
  }
  function Tr(t) {
    t.flags |= 4;
  }
  function Bg(t, r) {
    if (r.type !== 'stylesheet' || (r.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !qy(r))) {
      if (
        ((r = jn.current),
        r !== null &&
          ((Fe & 4194048) === Fe
            ? nr !== null
            : ((Fe & 62914560) !== Fe && (Fe & 536870912) === 0) || r !== nr))
      )
        throw ((ga = Uc), bm);
      t.flags |= 8192;
    }
  }
  function ys(t, r) {
    (r !== null && (t.flags |= 4),
      t.flags & 16384 && ((r = t.tag !== 22 ? ph() : 536870912), (t.lanes |= r), (bl |= r)));
  }
  function Ta(t, r) {
    if (!Ke)
      switch (t.tailMode) {
        case 'hidden':
          r = t.tail;
          for (var a = null; r !== null; ) (r.alternate !== null && (a = r), (r = r.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case 'collapsed':
          a = t.tail;
          for (var s = null; a !== null; ) (a.alternate !== null && (s = a), (a = a.sibling));
          s === null
            ? r || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Tt(t) {
    var r = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      s = 0;
    if (r)
      for (var f = t.child; f !== null; )
        ((a |= f.lanes | f.childLanes),
          (s |= f.subtreeFlags & 65011712),
          (s |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling));
    else
      for (f = t.child; f !== null; )
        ((a |= f.lanes | f.childLanes),
          (s |= f.subtreeFlags),
          (s |= f.flags),
          (f.return = t),
          (f = f.sibling));
    return ((t.subtreeFlags |= s), (t.childLanes = a), r);
  }
  function qS(t, r, a) {
    var s = r.pendingProps;
    switch ((Oc(r), r.tag)) {
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
        return (Tt(r), null);
      case 1:
        return (Tt(r), null);
      case 3:
        return (
          (a = r.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          r.memoizedState.cache !== s && (r.flags |= 2048),
          Cr(Pt),
          Re(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (ua(r)
              ? Tr(r)
              : t === null ||
                (t.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), pm())),
          Tt(r),
          null
        );
      case 26:
        return (
          (a = r.memoizedState),
          t === null
            ? (Tr(r), a !== null ? (Tt(r), Bg(r, a)) : (Tt(r), (r.flags &= -16777217)))
            : a
              ? a !== t.memoizedState
                ? (Tr(r), Tt(r), Bg(r, a))
                : (Tt(r), (r.flags &= -16777217))
              : (t.memoizedProps !== s && Tr(r), Tt(r), (r.flags &= -16777217)),
          null
        );
      case 27:
        (Oe(r), (a = te.current));
        var f = r.type;
        if (t !== null && r.stateNode != null) t.memoizedProps !== s && Tr(r);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(l(166));
            return (Tt(r), null);
          }
          ((t = ce.current), ua(r) ? fm(r) : ((t = By(f, s, a)), (r.stateNode = t), Tr(r)));
        }
        return (Tt(r), null);
      case 5:
        if ((Oe(r), (a = r.type), t !== null && r.stateNode != null))
          t.memoizedProps !== s && Tr(r);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(l(166));
            return (Tt(r), null);
          }
          if (((t = ce.current), ua(r))) fm(r);
          else {
            switch (((f = Os(te.current)), t)) {
              case 1:
                t = f.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                t = f.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    t = f.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    t = f.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    ((t = f.createElement('div')),
                      (t.innerHTML = '<script><\/script>'),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case 'select':
                    ((t =
                      typeof s.is == 'string'
                        ? f.createElement('select', { is: s.is })
                        : f.createElement('select')),
                      s.multiple ? (t.multiple = !0) : s.size && (t.size = s.size));
                    break;
                  default:
                    t =
                      typeof s.is == 'string'
                        ? f.createElement(a, { is: s.is })
                        : f.createElement(a);
                }
            }
            ((t[en] = r), (t[fn] = s));
            e: for (f = r.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) t.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === r) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === r) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            r.stateNode = t;
            e: switch ((Qt(t, a, s), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!s.autoFocus;
                break e;
              case 'img':
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && Tr(r);
          }
        }
        return (Tt(r), (r.flags &= -16777217), null);
      case 6:
        if (t && r.stateNode != null) t.memoizedProps !== s && Tr(r);
        else {
          if (typeof s != 'string' && r.stateNode === null) throw Error(l(166));
          if (((t = te.current), ua(r))) {
            if (((t = r.stateNode), (a = r.memoizedProps), (s = null), (f = un), f !== null))
              switch (f.tag) {
                case 27:
                case 5:
                  s = f.memoizedProps;
              }
            ((t[en] = r),
              (t = !!(
                t.nodeValue === a ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                Ry(t.nodeValue, a)
              )),
              t || Ci(r));
          } else ((t = Os(t).createTextNode(s)), (t[en] = r), (r.stateNode = t));
        }
        return (Tt(r), null);
      case 13:
        if (
          ((s = r.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = ua(r)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(l(318));
              if (((f = r.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
                throw Error(l(317));
              f[en] = r;
            } else (ca(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4));
            (Tt(r), (f = !1));
          } else
            ((f = pm()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return r.flags & 256 ? (wr(r), r) : (wr(r), null);
        }
        if ((wr(r), (r.flags & 128) !== 0)) return ((r.lanes = a), r);
        if (((a = s !== null), (t = t !== null && t.memoizedState !== null), a)) {
          ((s = r.child),
            (f = null),
            s.alternate !== null &&
              s.alternate.memoizedState !== null &&
              s.alternate.memoizedState.cachePool !== null &&
              (f = s.alternate.memoizedState.cachePool.pool));
          var m = null;
          (s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (m = s.memoizedState.cachePool.pool),
            m !== f && (s.flags |= 2048));
        }
        return (a !== t && a && (r.child.flags |= 8192), ys(r, r.updateQueue), Tt(r), null);
      case 4:
        return (Re(), t === null && qf(r.stateNode.containerInfo), Tt(r), null);
      case 10:
        return (Cr(r.type), Tt(r), null);
      case 19:
        if ((oe(It), (f = r.memoizedState), f === null)) return (Tt(r), null);
        if (((s = (r.flags & 128) !== 0), (m = f.rendering), m === null))
          if (s) Ta(f, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = r.child; t !== null; ) {
                if (((m = ds(t)), m !== null)) {
                  for (
                    r.flags |= 128,
                      Ta(f, !1),
                      t = m.updateQueue,
                      r.updateQueue = t,
                      ys(r, t),
                      r.subtreeFlags = 0,
                      t = a,
                      a = r.child;
                    a !== null;

                  )
                    (um(a, t), (a = a.sibling));
                  return (A(It, (It.current & 1) | 2), r.child);
                }
                t = t.sibling;
              }
            f.tail !== null &&
              Ge() > xs &&
              ((r.flags |= 128), (s = !0), Ta(f, !1), (r.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = ds(m)), t !== null)) {
              if (
                ((r.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (r.updateQueue = t),
                ys(r, t),
                Ta(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !m.alternate && !Ke)
              )
                return (Tt(r), null);
            } else
              2 * Ge() - f.renderingStartTime > xs &&
                a !== 536870912 &&
                ((r.flags |= 128), (s = !0), Ta(f, !1), (r.lanes = 4194304));
          f.isBackwards
            ? ((m.sibling = r.child), (r.child = m))
            : ((t = f.last), t !== null ? (t.sibling = m) : (r.child = m), (f.last = m));
        }
        return f.tail !== null
          ? ((r = f.tail),
            (f.rendering = r),
            (f.tail = r.sibling),
            (f.renderingStartTime = Ge()),
            (r.sibling = null),
            (t = It.current),
            A(It, s ? (t & 1) | 2 : t & 1),
            r)
          : (Tt(r), null);
      case 22:
      case 23:
        return (
          wr(r),
          Fc(),
          (s = r.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (r.flags |= 8192)
            : s && (r.flags |= 8192),
          s
            ? (a & 536870912) !== 0 &&
              (r.flags & 128) === 0 &&
              (Tt(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Tt(r),
          (a = r.updateQueue),
          a !== null && ys(r, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (s = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (s = r.memoizedState.cachePool.pool),
          s !== a && (r.flags |= 2048),
          t !== null && oe(Ei),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          r.memoizedState.cache !== a && (r.flags |= 2048),
          Cr(Pt),
          Tt(r),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, r.tag));
  }
  function FS(t, r) {
    switch ((Oc(r), r.tag)) {
      case 1:
        return ((t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null);
      case 3:
        return (
          Cr(Pt),
          Re(),
          (t = r.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 26:
      case 27:
      case 5:
        return (Oe(r), null);
      case 13:
        if ((wr(r), (t = r.memoizedState), t !== null && t.dehydrated !== null)) {
          if (r.alternate === null) throw Error(l(340));
          ca();
        }
        return ((t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null);
      case 19:
        return (oe(It), null);
      case 4:
        return (Re(), null);
      case 10:
        return (Cr(r.type), null);
      case 22:
      case 23:
        return (
          wr(r),
          Fc(),
          t !== null && oe(Ei),
          (t = r.flags),
          t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 24:
        return (Cr(Pt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lg(t, r) {
    switch ((Oc(r), r.tag)) {
      case 3:
        (Cr(Pt), Re());
        break;
      case 26:
      case 27:
      case 5:
        Oe(r);
        break;
      case 4:
        Re();
        break;
      case 13:
        wr(r);
        break;
      case 19:
        oe(It);
        break;
      case 10:
        Cr(r.type);
        break;
      case 22:
      case 23:
        (wr(r), Fc(), t !== null && oe(Ei));
        break;
      case 24:
        Cr(Pt);
    }
  }
  function Aa(t, r) {
    try {
      var a = r.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        a = f;
        do {
          if ((a.tag & t) === t) {
            s = void 0;
            var m = a.create,
              x = a.inst;
            ((s = m()), (x.destroy = s));
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (w) {
      mt(r, r.return, w);
    }
  }
  function Gr(t, r, a) {
    try {
      var s = r.updateQueue,
        f = s !== null ? s.lastEffect : null;
      if (f !== null) {
        var m = f.next;
        s = m;
        do {
          if ((s.tag & t) === t) {
            var x = s.inst,
              w = x.destroy;
            if (w !== void 0) {
              ((x.destroy = void 0), (f = r));
              var L = a,
                G = w;
              try {
                G();
              } catch (ie) {
                mt(f, L, ie);
              }
            }
          }
          s = s.next;
        } while (s !== m);
      }
    } catch (ie) {
      mt(r, r.return, ie);
    }
  }
  function $g(t) {
    var r = t.updateQueue;
    if (r !== null) {
      var a = t.stateNode;
      try {
        wm(r, a);
      } catch (s) {
        mt(t, t.return, s);
      }
    }
  }
  function Ug(t, r, a) {
    ((a.props = Ai(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (s) {
      mt(t, r, s);
    }
  }
  function Ra(t, r) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof a == 'function' ? (t.refCleanup = a(s)) : (a.current = s);
      }
    } catch (f) {
      mt(t, r, f);
    }
  }
  function rr(t, r) {
    var a = t.ref,
      s = t.refCleanup;
    if (a !== null)
      if (typeof s == 'function')
        try {
          s();
        } catch (f) {
          mt(t, r, f);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof a == 'function')
        try {
          a(null);
        } catch (f) {
          mt(t, r, f);
        }
      else a.current = null;
  }
  function jg(t) {
    var r = t.type,
      a = t.memoizedProps,
      s = t.stateNode;
    try {
      e: switch (r) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          a.autoFocus && s.focus();
          break e;
        case 'img':
          a.src ? (s.src = a.src) : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (f) {
      mt(t, t.return, f);
    }
  }
  function vf(t, r, a) {
    try {
      var s = t.stateNode;
      (fC(s, t.type, a, r), (s[fn] = r));
    } catch (f) {
      mt(t, t.return, f);
    }
  }
  function Pg(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && ti(t.type)) || t.tag === 4
    );
  }
  function xf(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Pg(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if ((t.tag === 27 && ti(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Sf(t, r, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode),
        r
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === 'HTML'
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, r)
          : ((r = a.nodeType === 9 ? a.body : a.nodeName === 'HTML' ? a.ownerDocument.body : a),
            r.appendChild(t),
            (a = a._reactRootContainer),
            a != null || r.onclick !== null || (r.onclick = Ms)));
    else if (
      s !== 4 &&
      (s === 27 && ti(t.type) && ((a = t.stateNode), (r = null)), (t = t.child), t !== null)
    )
      for (Sf(t, r, a), t = t.sibling; t !== null; ) (Sf(t, r, a), (t = t.sibling));
  }
  function bs(t, r, a) {
    var s = t.tag;
    if (s === 5 || s === 6) ((t = t.stateNode), r ? a.insertBefore(t, r) : a.appendChild(t));
    else if (s !== 4 && (s === 27 && ti(t.type) && (a = t.stateNode), (t = t.child), t !== null))
      for (bs(t, r, a), t = t.sibling; t !== null; ) (bs(t, r, a), (t = t.sibling));
  }
  function Ig(t) {
    var r = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var s = t.type, f = r.attributes; f.length; ) r.removeAttributeNode(f[0]);
      (Qt(r, s, a), (r[en] = t), (r[fn] = a));
    } catch (m) {
      mt(t, t.return, m);
    }
  }
  var Ar = !1,
    Dt = !1,
    Cf = !1,
    Hg = typeof WeakSet == 'function' ? WeakSet : Set,
    Yt = null;
  function VS(t, r) {
    if (((t = t.containerInfo), (Yf = Ls), (t = Jh(t)), vc(t))) {
      if ('selectionStart' in t) var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var f = s.anchorOffset,
              m = s.focusNode;
            s = s.focusOffset;
            try {
              (a.nodeType, m.nodeType);
            } catch {
              a = null;
              break e;
            }
            var x = 0,
              w = -1,
              L = -1,
              G = 0,
              ie = 0,
              se = t,
              Z = null;
            t: for (;;) {
              for (
                var W;
                se !== a || (f !== 0 && se.nodeType !== 3) || (w = x + f),
                  se !== m || (s !== 0 && se.nodeType !== 3) || (L = x + s),
                  se.nodeType === 3 && (x += se.nodeValue.length),
                  (W = se.firstChild) !== null;

              )
                ((Z = se), (se = W));
              for (;;) {
                if (se === t) break t;
                if (
                  (Z === a && ++G === f && (w = x),
                  Z === m && ++ie === s && (L = x),
                  (W = se.nextSibling) !== null)
                )
                  break;
                ((se = Z), (Z = se.parentNode));
              }
              se = W;
            }
            a = w === -1 || L === -1 ? null : { start: w, end: L };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Gf = { focusedElem: t, selectionRange: a }, Ls = !1, Yt = r; Yt !== null; )
      if (((r = Yt), (t = r.child), (r.subtreeFlags & 1024) !== 0 && t !== null))
        ((t.return = r), (Yt = t));
      else
        for (; Yt !== null; ) {
          switch (((r = Yt), (m = r.alternate), (t = r.flags), r.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && m !== null) {
                ((t = void 0),
                  (a = r),
                  (f = m.memoizedProps),
                  (m = m.memoizedState),
                  (s = a.stateNode));
                try {
                  var Me = Ai(a.type, f, a.elementType === a.type);
                  ((t = s.getSnapshotBeforeUpdate(Me, m)),
                    (s.__reactInternalSnapshotBeforeUpdate = t));
                } catch (Ee) {
                  mt(a, a.return, Ee);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = r.stateNode.containerInfo), (a = t.nodeType), a === 9)) Qf(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Qf(t);
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
              if ((t & 1024) !== 0) throw Error(l(163));
          }
          if (((t = r.sibling), t !== null)) {
            ((t.return = r.return), (Yt = t));
            break;
          }
          Yt = r.return;
        }
  }
  function qg(t, r, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Xr(t, a), s & 4 && Aa(5, a));
        break;
      case 1:
        if ((Xr(t, a), s & 4))
          if (((t = a.stateNode), r === null))
            try {
              t.componentDidMount();
            } catch (x) {
              mt(a, a.return, x);
            }
          else {
            var f = Ai(a.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              t.componentDidUpdate(f, r, t.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              mt(a, a.return, x);
            }
          }
        (s & 64 && $g(a), s & 512 && Ra(a, a.return));
        break;
      case 3:
        if ((Xr(t, a), s & 64 && ((t = a.updateQueue), t !== null))) {
          if (((r = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                r = a.child.stateNode;
                break;
              case 1:
                r = a.child.stateNode;
            }
          try {
            wm(t, r);
          } catch (x) {
            mt(a, a.return, x);
          }
        }
        break;
      case 27:
        r === null && s & 4 && Ig(a);
      case 26:
      case 5:
        (Xr(t, a), r === null && s & 4 && jg(a), s & 512 && Ra(a, a.return));
        break;
      case 12:
        Xr(t, a);
        break;
      case 13:
        (Xr(t, a),
          s & 4 && Yg(t, a),
          s & 64 &&
            ((t = a.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((a = eC.bind(null, a)), bC(t, a)))));
        break;
      case 22:
        if (((s = a.memoizedState !== null || Ar), !s)) {
          ((r = (r !== null && r.memoizedState !== null) || Dt), (f = Ar));
          var m = Dt;
          ((Ar = s),
            (Dt = r) && !m ? Kr(t, a, (a.subtreeFlags & 8772) !== 0) : Xr(t, a),
            (Ar = f),
            (Dt = m));
        }
        break;
      case 30:
        break;
      default:
        Xr(t, a);
    }
  }
  function Fg(t) {
    var r = t.alternate;
    (r !== null && ((t.alternate = null), Fg(r)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((r = t.stateNode), r !== null && ec(r)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var wt = null,
    hn = !1;
  function Rr(t, r, a) {
    for (a = a.child; a !== null; ) (Vg(t, r, a), (a = a.sibling));
  }
  function Vg(t, r, a) {
    if (le && typeof le.onCommitFiberUnmount == 'function')
      try {
        le.onCommitFiberUnmount(ee, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Dt || rr(a, r),
          Rr(t, r, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Dt || rr(a, r);
        var s = wt,
          f = hn;
        (ti(a.type) && ((wt = a.stateNode), (hn = !1)),
          Rr(t, r, a),
          $a(a.stateNode),
          (wt = s),
          (hn = f));
        break;
      case 5:
        Dt || rr(a, r);
      case 6:
        if (((s = wt), (f = hn), (wt = null), Rr(t, r, a), (wt = s), (hn = f), wt !== null))
          if (hn)
            try {
              (wt.nodeType === 9
                ? wt.body
                : wt.nodeName === 'HTML'
                  ? wt.ownerDocument.body
                  : wt
              ).removeChild(a.stateNode);
            } catch (m) {
              mt(a, r, m);
            }
          else
            try {
              wt.removeChild(a.stateNode);
            } catch (m) {
              mt(a, r, m);
            }
        break;
      case 18:
        wt !== null &&
          (hn
            ? ((t = wt),
              Ny(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                a.stateNode,
              ),
              Va(t))
            : Ny(wt, a.stateNode));
        break;
      case 4:
        ((s = wt),
          (f = hn),
          (wt = a.stateNode.containerInfo),
          (hn = !0),
          Rr(t, r, a),
          (wt = s),
          (hn = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Dt || Gr(2, a, r), Dt || Gr(4, a, r), Rr(t, r, a));
        break;
      case 1:
        (Dt ||
          (rr(a, r), (s = a.stateNode), typeof s.componentWillUnmount == 'function' && Ug(a, r, s)),
          Rr(t, r, a));
        break;
      case 21:
        Rr(t, r, a);
        break;
      case 22:
        ((Dt = (s = Dt) || a.memoizedState !== null), Rr(t, r, a), (Dt = s));
        break;
      default:
        Rr(t, r, a);
    }
  }
  function Yg(t, r) {
    if (
      r.memoizedState === null &&
      ((t = r.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Va(t);
      } catch (a) {
        mt(r, r.return, a);
      }
  }
  function YS(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var r = t.stateNode;
        return (r === null && (r = t.stateNode = new Hg()), r);
      case 22:
        return (
          (t = t.stateNode),
          (r = t._retryCache),
          r === null && (r = t._retryCache = new Hg()),
          r
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function kf(t, r) {
    var a = YS(t);
    r.forEach(function (s) {
      var f = tC.bind(null, t, s);
      a.has(s) || (a.add(s), s.then(f, f));
    });
  }
  function wn(t, r) {
    var a = r.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var f = a[s],
          m = t,
          x = r,
          w = x;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (ti(w.type)) {
                ((wt = w.stateNode), (hn = !1));
                break e;
              }
              break;
            case 5:
              ((wt = w.stateNode), (hn = !1));
              break e;
            case 3:
            case 4:
              ((wt = w.stateNode.containerInfo), (hn = !0));
              break e;
          }
          w = w.return;
        }
        if (wt === null) throw Error(l(160));
        (Vg(m, x, f),
          (wt = null),
          (hn = !1),
          (m = f.alternate),
          m !== null && (m.return = null),
          (f.return = null));
      }
    if (r.subtreeFlags & 13878) for (r = r.child; r !== null; ) (Gg(r, t), (r = r.sibling));
  }
  var Gn = null;
  function Gg(t, r) {
    var a = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (wn(r, t), En(t), s & 4 && (Gr(3, t, t.return), Aa(3, t), Gr(5, t, t.return)));
        break;
      case 1:
        (wn(r, t),
          En(t),
          s & 512 && (Dt || a === null || rr(a, a.return)),
          s & 64 &&
            Ar &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? s : a.concat(s))))));
        break;
      case 26:
        var f = Gn;
        if ((wn(r, t), En(t), s & 512 && (Dt || a === null || rr(a, a.return)), s & 4)) {
          var m = a !== null ? a.memoizedState : null;
          if (((s = t.memoizedState), a === null))
            if (s === null)
              if (t.stateNode === null) {
                e: {
                  ((s = t.type), (a = t.memoizedProps), (f = f.ownerDocument || f));
                  t: switch (s) {
                    case 'title':
                      ((m = f.getElementsByTagName('title')[0]),
                        (!m ||
                          m[Wl] ||
                          m[en] ||
                          m.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          m.hasAttribute('itemprop')) &&
                          ((m = f.createElement(s)),
                          f.head.insertBefore(m, f.querySelector('head > title'))),
                        Qt(m, s, a),
                        (m[en] = t),
                        Ft(m),
                        (s = m));
                      break e;
                    case 'link':
                      var x = Iy('link', 'href', f).get(s + (a.href || ''));
                      if (x) {
                        for (var w = 0; w < x.length; w++)
                          if (
                            ((m = x[w]),
                            m.getAttribute('href') ===
                              (a.href == null || a.href === '' ? null : a.href) &&
                              m.getAttribute('rel') === (a.rel == null ? null : a.rel) &&
                              m.getAttribute('title') === (a.title == null ? null : a.title) &&
                              m.getAttribute('crossorigin') ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            x.splice(w, 1);
                            break t;
                          }
                      }
                      ((m = f.createElement(s)), Qt(m, s, a), f.head.appendChild(m));
                      break;
                    case 'meta':
                      if ((x = Iy('meta', 'content', f).get(s + (a.content || '')))) {
                        for (w = 0; w < x.length; w++)
                          if (
                            ((m = x[w]),
                            m.getAttribute('content') ===
                              (a.content == null ? null : '' + a.content) &&
                              m.getAttribute('name') === (a.name == null ? null : a.name) &&
                              m.getAttribute('property') ===
                                (a.property == null ? null : a.property) &&
                              m.getAttribute('http-equiv') ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              m.getAttribute('charset') === (a.charSet == null ? null : a.charSet))
                          ) {
                            x.splice(w, 1);
                            break t;
                          }
                      }
                      ((m = f.createElement(s)), Qt(m, s, a), f.head.appendChild(m));
                      break;
                    default:
                      throw Error(l(468, s));
                  }
                  ((m[en] = t), Ft(m), (s = m));
                }
                t.stateNode = s;
              } else Hy(f, t.type, t.stateNode);
            else t.stateNode = Py(f, s, t.memoizedProps);
          else
            m !== s
              ? (m === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : m.count--,
                s === null ? Hy(f, t.type, t.stateNode) : Py(f, s, t.memoizedProps))
              : s === null && t.stateNode !== null && vf(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (wn(r, t),
          En(t),
          s & 512 && (Dt || a === null || rr(a, a.return)),
          a !== null && s & 4 && vf(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((wn(r, t), En(t), s & 512 && (Dt || a === null || rr(a, a.return)), t.flags & 32)) {
          f = t.stateNode;
          try {
            Qi(f, '');
          } catch (W) {
            mt(t, t.return, W);
          }
        }
        (s & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), vf(t, f, a !== null ? a.memoizedProps : f)),
          s & 1024 && (Cf = !0));
        break;
      case 6:
        if ((wn(r, t), En(t), s & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          ((s = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = s;
          } catch (W) {
            mt(t, t.return, W);
          }
        }
        break;
      case 3:
        if (
          ((Ns = null),
          (f = Gn),
          (Gn = zs(r.containerInfo)),
          wn(r, t),
          (Gn = f),
          En(t),
          s & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Va(r.containerInfo);
          } catch (W) {
            mt(t, t.return, W);
          }
        Cf && ((Cf = !1), Xg(t));
        break;
      case 4:
        ((s = Gn), (Gn = zs(t.stateNode.containerInfo)), wn(r, t), En(t), (Gn = s));
        break;
      case 12:
        (wn(r, t), En(t));
        break;
      case 13:
        (wn(r, t),
          En(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (Mf = Ge()),
          s & 4 && ((s = t.updateQueue), s !== null && ((t.updateQueue = null), kf(t, s))));
        break;
      case 22:
        f = t.memoizedState !== null;
        var L = a !== null && a.memoizedState !== null,
          G = Ar,
          ie = Dt;
        if (((Ar = G || f), (Dt = ie || L), wn(r, t), (Dt = ie), (Ar = G), En(t), s & 8192))
          e: for (
            r = t.stateNode,
              r._visibility = f ? r._visibility & -2 : r._visibility | 1,
              f && (a === null || L || Ar || Dt || Ri(t)),
              a = null,
              r = t;
            ;

          ) {
            if (r.tag === 5 || r.tag === 26) {
              if (a === null) {
                L = a = r;
                try {
                  if (((m = L.stateNode), f))
                    ((x = m.style),
                      typeof x.setProperty == 'function'
                        ? x.setProperty('display', 'none', 'important')
                        : (x.display = 'none'));
                  else {
                    w = L.stateNode;
                    var se = L.memoizedProps.style,
                      Z = se != null && se.hasOwnProperty('display') ? se.display : null;
                    w.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (W) {
                  mt(L, L.return, W);
                }
              }
            } else if (r.tag === 6) {
              if (a === null) {
                L = r;
                try {
                  L.stateNode.nodeValue = f ? '' : L.memoizedProps;
                } catch (W) {
                  mt(L, L.return, W);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) || r.memoizedState === null || r === t) &&
              r.child !== null
            ) {
              ((r.child.return = r), (r = r.child));
              continue;
            }
            if (r === t) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) break e;
              (a === r && (a = null), (r = r.return));
            }
            (a === r && (a = null), (r.sibling.return = r.return), (r = r.sibling));
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null && ((a = s.retryQueue), a !== null && ((s.retryQueue = null), kf(t, a))));
        break;
      case 19:
        (wn(r, t),
          En(t),
          s & 4 && ((s = t.updateQueue), s !== null && ((t.updateQueue = null), kf(t, s))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (wn(r, t), En(t));
    }
  }
  function En(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        for (var a, s = t.return; s !== null; ) {
          if (Pg(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var f = a.stateNode,
              m = xf(t);
            bs(t, m, f);
            break;
          case 5:
            var x = a.stateNode;
            a.flags & 32 && (Qi(x, ''), (a.flags &= -33));
            var w = xf(t);
            bs(t, w, x);
            break;
          case 3:
          case 4:
            var L = a.stateNode.containerInfo,
              G = xf(t);
            Sf(t, G, L);
            break;
          default:
            throw Error(l(161));
        }
      } catch (ie) {
        mt(t, t.return, ie);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function Xg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var r = t;
        (Xg(r), r.tag === 5 && r.flags & 1024 && r.stateNode.reset(), (t = t.sibling));
      }
  }
  function Xr(t, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) (qg(t, r.alternate, r), (r = r.sibling));
  }
  function Ri(t) {
    for (t = t.child; t !== null; ) {
      var r = t;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Gr(4, r, r.return), Ri(r));
          break;
        case 1:
          rr(r, r.return);
          var a = r.stateNode;
          (typeof a.componentWillUnmount == 'function' && Ug(r, r.return, a), Ri(r));
          break;
        case 27:
          $a(r.stateNode);
        case 26:
        case 5:
          (rr(r, r.return), Ri(r));
          break;
        case 22:
          r.memoizedState === null && Ri(r);
          break;
        case 30:
          Ri(r);
          break;
        default:
          Ri(r);
      }
      t = t.sibling;
    }
  }
  function Kr(t, r, a) {
    for (a = a && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var s = r.alternate,
        f = t,
        m = r,
        x = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Kr(f, m, a), Aa(4, m));
          break;
        case 1:
          if ((Kr(f, m, a), (s = m), (f = s.stateNode), typeof f.componentDidMount == 'function'))
            try {
              f.componentDidMount();
            } catch (G) {
              mt(s, s.return, G);
            }
          if (((s = m), (f = s.updateQueue), f !== null)) {
            var w = s.stateNode;
            try {
              var L = f.shared.hiddenCallbacks;
              if (L !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < L.length; f++) km(L[f], w);
            } catch (G) {
              mt(s, s.return, G);
            }
          }
          (a && x & 64 && $g(m), Ra(m, m.return));
          break;
        case 27:
          Ig(m);
        case 26:
        case 5:
          (Kr(f, m, a), a && s === null && x & 4 && jg(m), Ra(m, m.return));
          break;
        case 12:
          Kr(f, m, a);
          break;
        case 13:
          (Kr(f, m, a), a && x & 4 && Yg(f, m));
          break;
        case 22:
          (m.memoizedState === null && Kr(f, m, a), Ra(m, m.return));
          break;
        case 30:
          break;
        default:
          Kr(f, m, a);
      }
      r = r.sibling;
    }
  }
  function wf(t, r) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (t = r.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && pa(a)));
  }
  function Ef(t, r) {
    ((t = null),
      r.alternate !== null && (t = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== t && (r.refCount++, t != null && pa(t)));
  }
  function ir(t, r, a, s) {
    if (r.subtreeFlags & 10256) for (r = r.child; r !== null; ) (Kg(t, r, a, s), (r = r.sibling));
  }
  function Kg(t, r, a, s) {
    var f = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (ir(t, r, a, s), f & 2048 && Aa(9, r));
        break;
      case 1:
        ir(t, r, a, s);
        break;
      case 3:
        (ir(t, r, a, s),
          f & 2048 &&
            ((t = null),
            r.alternate !== null && (t = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== t && (r.refCount++, t != null && pa(t))));
        break;
      case 12:
        if (f & 2048) {
          (ir(t, r, a, s), (t = r.stateNode));
          try {
            var m = r.memoizedProps,
              x = m.id,
              w = m.onPostCommit;
            typeof w == 'function' &&
              w(x, r.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (L) {
            mt(r, r.return, L);
          }
        } else ir(t, r, a, s);
        break;
      case 13:
        ir(t, r, a, s);
        break;
      case 23:
        break;
      case 22:
        ((m = r.stateNode),
          (x = r.alternate),
          r.memoizedState !== null
            ? m._visibility & 2
              ? ir(t, r, a, s)
              : Ma(t, r)
            : m._visibility & 2
              ? ir(t, r, a, s)
              : ((m._visibility |= 2), ml(t, r, a, s, (r.subtreeFlags & 10256) !== 0)),
          f & 2048 && wf(x, r));
        break;
      case 24:
        (ir(t, r, a, s), f & 2048 && Ef(r.alternate, r));
        break;
      default:
        ir(t, r, a, s);
    }
  }
  function ml(t, r, a, s, f) {
    for (f = f && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var m = t,
        x = r,
        w = a,
        L = s,
        G = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          (ml(m, x, w, L, f), Aa(8, x));
          break;
        case 23:
          break;
        case 22:
          var ie = x.stateNode;
          (x.memoizedState !== null
            ? ie._visibility & 2
              ? ml(m, x, w, L, f)
              : Ma(m, x)
            : ((ie._visibility |= 2), ml(m, x, w, L, f)),
            f && G & 2048 && wf(x.alternate, x));
          break;
        case 24:
          (ml(m, x, w, L, f), f && G & 2048 && Ef(x.alternate, x));
          break;
        default:
          ml(m, x, w, L, f);
      }
      r = r.sibling;
    }
  }
  function Ma(t, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var a = t,
          s = r,
          f = s.flags;
        switch (s.tag) {
          case 22:
            (Ma(a, s), f & 2048 && wf(s.alternate, s));
            break;
          case 24:
            (Ma(a, s), f & 2048 && Ef(s.alternate, s));
            break;
          default:
            Ma(a, s);
        }
        r = r.sibling;
      }
  }
  var Oa = 8192;
  function gl(t) {
    if (t.subtreeFlags & Oa) for (t = t.child; t !== null; ) (Qg(t), (t = t.sibling));
  }
  function Qg(t) {
    switch (t.tag) {
      case 26:
        (gl(t),
          t.flags & Oa && t.memoizedState !== null && zC(Gn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        gl(t);
        break;
      case 3:
      case 4:
        var r = Gn;
        ((Gn = zs(t.stateNode.containerInfo)), gl(t), (Gn = r));
        break;
      case 22:
        t.memoizedState === null &&
          ((r = t.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = Oa), (Oa = 16777216), gl(t), (Oa = r))
            : gl(t));
        break;
      default:
        gl(t);
    }
  }
  function Zg(t) {
    var r = t.alternate;
    if (r !== null && ((t = r.child), t !== null)) {
      r.child = null;
      do ((r = t.sibling), (t.sibling = null), (t = r));
      while (t !== null);
    }
  }
  function za(t) {
    var r = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var s = r[a];
          ((Yt = s), Jg(s, t));
        }
      Zg(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Wg(t), (t = t.sibling));
  }
  function Wg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (za(t), t.flags & 2048 && Gr(9, t, t.return));
        break;
      case 3:
        za(t);
        break;
      case 12:
        za(t);
        break;
      case 22:
        var r = t.stateNode;
        t.memoizedState !== null && r._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((r._visibility &= -3), vs(t))
          : za(t);
        break;
      default:
        za(t);
    }
  }
  function vs(t) {
    var r = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var s = r[a];
          ((Yt = s), Jg(s, t));
        }
      Zg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((r = t), r.tag)) {
        case 0:
        case 11:
        case 15:
          (Gr(8, r, r.return), vs(r));
          break;
        case 22:
          ((a = r.stateNode), a._visibility & 2 && ((a._visibility &= -3), vs(r)));
          break;
        default:
          vs(r);
      }
      t = t.sibling;
    }
  }
  function Jg(t, r) {
    for (; Yt !== null; ) {
      var a = Yt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Gr(8, a, r);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          pa(a.memoizedState.cache);
      }
      if (((s = a.child), s !== null)) ((s.return = a), (Yt = s));
      else
        e: for (a = t; Yt !== null; ) {
          s = Yt;
          var f = s.sibling,
            m = s.return;
          if ((Fg(s), s === a)) {
            Yt = null;
            break e;
          }
          if (f !== null) {
            ((f.return = m), (Yt = f));
            break e;
          }
          Yt = m;
        }
    }
  }
  var GS = {
      getCacheForType: function (t) {
        var r = tn(Pt),
          a = r.data.get(t);
        return (a === void 0 && ((a = t()), r.data.set(t, a)), a);
      },
    },
    XS = typeof WeakMap == 'function' ? WeakMap : Map,
    lt = 0,
    xt = null,
    Pe = null,
    Fe = 0,
    at = 0,
    Tn = null,
    Qr = !1,
    yl = !1,
    Tf = !1,
    Mr = 0,
    Rt = 0,
    Zr = 0,
    Mi = 0,
    Af = 0,
    Pn = 0,
    bl = 0,
    Da = null,
    mn = null,
    Rf = !1,
    Mf = 0,
    xs = 1 / 0,
    Ss = null,
    Wr = null,
    Kt = 0,
    Jr = null,
    vl = null,
    xl = 0,
    Of = 0,
    zf = null,
    ey = null,
    Na = 0,
    Df = null;
  function An() {
    if ((lt & 2) !== 0 && Fe !== 0) return Fe & -Fe;
    if (_.T !== null) {
      var t = ol;
      return t !== 0 ? t : jf();
    }
    return gh();
  }
  function ty() {
    Pn === 0 && (Pn = (Fe & 536870912) === 0 || Ke ? Ql() : 536870912);
    var t = jn.current;
    return (t !== null && (t.flags |= 32), Pn);
  }
  function Rn(t, r, a) {
    (((t === xt && (at === 2 || at === 9)) || t.cancelPendingCommit !== null) &&
      (Sl(t, 0), ei(t, Fe, Pn, !1)),
      Zl(t, a),
      ((lt & 2) === 0 || t !== xt) &&
        (t === xt && ((lt & 2) === 0 && (Mi |= a), Rt === 4 && ei(t, Fe, Pn, !1)), lr(t)));
  }
  function ny(t, r, a) {
    if ((lt & 6) !== 0) throw Error(l(327));
    var s = (!a && (r & 124) === 0 && (r & t.expiredLanes) === 0) || rt(t, r),
      f = s ? ZS(t, r) : Bf(t, r, !0),
      m = s;
    do {
      if (f === 0) {
        yl && !s && ei(t, r, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), m && !KS(a))) {
          ((f = Bf(t, r, !1)), (m = !1));
          continue;
        }
        if (f === 2) {
          if (((m = r), t.errorRecoveryDisabledLanes & m)) var x = 0;
          else
            ((x = t.pendingLanes & -536870913), (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0));
          if (x !== 0) {
            r = x;
            e: {
              var w = t;
              f = Da;
              var L = w.current.memoizedState.isDehydrated;
              if ((L && (Sl(w, x).flags |= 256), (x = Bf(w, x, !1)), x !== 2)) {
                if (Tf && !L) {
                  ((w.errorRecoveryDisabledLanes |= m), (Mi |= m), (f = 4));
                  break e;
                }
                ((m = mn), (mn = f), m !== null && (mn === null ? (mn = m) : mn.push.apply(mn, m)));
              }
              f = x;
            }
            if (((m = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (Sl(t, 0), ei(t, r, 0, !0));
          break;
        }
        e: {
          switch (((s = t), (m = f), m)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              ei(s, r, Pn, !Qr);
              break e;
            case 2:
              mn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((r & 62914560) === r && ((f = Mf + 300 - Ge()), 10 < f)) {
            if ((ei(s, r, Pn, !Qr), ze(s, 0, !0) !== 0)) break e;
            s.timeoutHandle = zy(
              ry.bind(null, s, a, mn, Ss, Rf, r, Pn, Mi, bl, Qr, m, 2, -0, 0),
              f,
            );
            break e;
          }
          ry(s, a, mn, Ss, Rf, r, Pn, Mi, bl, Qr, m, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    lr(t);
  }
  function ry(t, r, a, s, f, m, x, w, L, G, ie, se, Z, W) {
    if (
      ((t.timeoutHandle = -1),
      (se = r.subtreeFlags),
      (se & 8192 || (se & 16785408) === 16785408) &&
        ((Pa = { stylesheets: null, count: 0, unsuspend: OC }), Qg(r), (se = DC()), se !== null))
    ) {
      ((t.cancelPendingCommit = se(cy.bind(null, t, r, m, a, s, f, x, w, L, ie, 1, Z, W))),
        ei(t, m, x, !G));
      return;
    }
    cy(t, r, m, a, s, f, x, w, L);
  }
  function KS(t) {
    for (var r = t; ; ) {
      var a = r.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        r.flags & 16384 &&
        ((a = r.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var s = 0; s < a.length; s++) {
          var f = a[s],
            m = f.getSnapshot;
          f = f.value;
          try {
            if (!Cn(m(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = r.child), r.subtreeFlags & 16384 && a !== null)) ((a.return = r), (r = a));
      else {
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return !0;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    }
    return !0;
  }
  function ei(t, r, a, s) {
    ((r &= ~Af),
      (r &= ~Mi),
      (t.suspendedLanes |= r),
      (t.pingedLanes &= ~r),
      s && (t.warmLanes |= r),
      (s = t.expirationTimes));
    for (var f = r; 0 < f; ) {
      var m = 31 - me(f),
        x = 1 << m;
      ((s[m] = -1), (f &= ~x));
    }
    a !== 0 && hh(t, a, r);
  }
  function Cs() {
    return (lt & 6) === 0 ? (_a(0), !1) : !0;
  }
  function Nf() {
    if (Pe !== null) {
      if (at === 0) var t = Pe.return;
      else ((t = Pe), (Sr = ki = null), Kc(t), (pl = null), (wa = 0), (t = Pe));
      for (; t !== null; ) (Lg(t.alternate, t), (t = t.return));
      Pe = null;
    }
  }
  function Sl(t, r) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), pC(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      Nf(),
      (xt = t),
      (Pe = a = br(t.current, null)),
      (Fe = r),
      (at = 0),
      (Tn = null),
      (Qr = !1),
      (yl = rt(t, r)),
      (Tf = !1),
      (bl = Pn = Af = Mi = Zr = Rt = 0),
      (mn = Da = null),
      (Rf = !1),
      (r & 8) !== 0 && (r |= r & 32));
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= r; 0 < s; ) {
        var f = 31 - me(s),
          m = 1 << f;
        ((r |= t[f]), (s &= ~m));
      }
    return ((Mr = r), Fo(), a);
  }
  function iy(t, r) {
    (($e = null),
      (_.H = us),
      r === ma || r === Jo
        ? ((r = Sm()), (at = 3))
        : r === bm
          ? ((r = Sm()), (at = 4))
          : (at =
              r === Cg
                ? 8
                : r !== null && typeof r == 'object' && typeof r.then == 'function'
                  ? 6
                  : 1),
      (Tn = r),
      Pe === null && ((Rt = 1), hs(t, Bn(r, t.current))));
  }
  function ly() {
    var t = _.H;
    return ((_.H = us), t === null ? us : t);
  }
  function ay() {
    var t = _.A;
    return ((_.A = GS), t);
  }
  function _f() {
    ((Rt = 4),
      Qr || ((Fe & 4194048) !== Fe && jn.current !== null) || (yl = !0),
      ((Zr & 134217727) === 0 && (Mi & 134217727) === 0) || xt === null || ei(xt, Fe, Pn, !1));
  }
  function Bf(t, r, a) {
    var s = lt;
    lt |= 2;
    var f = ly(),
      m = ay();
    ((xt !== t || Fe !== r) && ((Ss = null), Sl(t, r)), (r = !1));
    var x = Rt;
    e: do
      try {
        if (at !== 0 && Pe !== null) {
          var w = Pe,
            L = Tn;
          switch (at) {
            case 8:
              (Nf(), (x = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jn.current === null && (r = !0);
              var G = at;
              if (((at = 0), (Tn = null), Cl(t, w, L, G), a && yl)) {
                x = 0;
                break e;
              }
              break;
            default:
              ((G = at), (at = 0), (Tn = null), Cl(t, w, L, G));
          }
        }
        (QS(), (x = Rt));
        break;
      } catch (ie) {
        iy(t, ie);
      }
    while (!0);
    return (
      r && t.shellSuspendCounter++,
      (Sr = ki = null),
      (lt = s),
      (_.H = f),
      (_.A = m),
      Pe === null && ((xt = null), (Fe = 0), Fo()),
      x
    );
  }
  function QS() {
    for (; Pe !== null; ) oy(Pe);
  }
  function ZS(t, r) {
    var a = lt;
    lt |= 2;
    var s = ly(),
      f = ay();
    xt !== t || Fe !== r ? ((Ss = null), (xs = Ge() + 500), Sl(t, r)) : (yl = rt(t, r));
    e: do
      try {
        if (at !== 0 && Pe !== null) {
          r = Pe;
          var m = Tn;
          t: switch (at) {
            case 1:
              ((at = 0), (Tn = null), Cl(t, r, m, 1));
              break;
            case 2:
            case 9:
              if (vm(m)) {
                ((at = 0), (Tn = null), sy(r));
                break;
              }
              ((r = function () {
                ((at !== 2 && at !== 9) || xt !== t || (at = 7), lr(t));
              }),
                m.then(r, r));
              break e;
            case 3:
              at = 7;
              break e;
            case 4:
              at = 5;
              break e;
            case 7:
              vm(m) ? ((at = 0), (Tn = null), sy(r)) : ((at = 0), (Tn = null), Cl(t, r, m, 7));
              break;
            case 5:
              var x = null;
              switch (Pe.tag) {
                case 26:
                  x = Pe.memoizedState;
                case 5:
                case 27:
                  var w = Pe;
                  if (!x || qy(x)) {
                    ((at = 0), (Tn = null));
                    var L = w.sibling;
                    if (L !== null) Pe = L;
                    else {
                      var G = w.return;
                      G !== null ? ((Pe = G), ks(G)) : (Pe = null);
                    }
                    break t;
                  }
              }
              ((at = 0), (Tn = null), Cl(t, r, m, 5));
              break;
            case 6:
              ((at = 0), (Tn = null), Cl(t, r, m, 6));
              break;
            case 8:
              (Nf(), (Rt = 6));
              break e;
            default:
              throw Error(l(462));
          }
        }
        WS();
        break;
      } catch (ie) {
        iy(t, ie);
      }
    while (!0);
    return (
      (Sr = ki = null),
      (_.H = s),
      (_.A = f),
      (lt = a),
      Pe !== null ? 0 : ((xt = null), (Fe = 0), Fo(), Rt)
    );
  }
  function WS() {
    for (; Pe !== null && !Ye(); ) oy(Pe);
  }
  function oy(t) {
    var r = _g(t.alternate, t, Mr);
    ((t.memoizedProps = t.pendingProps), r === null ? ks(t) : (Pe = r));
  }
  function sy(t) {
    var r = t,
      a = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = Rg(a, r, r.pendingProps, r.type, void 0, Fe);
        break;
      case 11:
        r = Rg(a, r, r.pendingProps, r.type.render, r.ref, Fe);
        break;
      case 5:
        Kc(r);
      default:
        (Lg(a, r), (r = Pe = um(r, Mr)), (r = _g(a, r, Mr)));
    }
    ((t.memoizedProps = t.pendingProps), r === null ? ks(t) : (Pe = r));
  }
  function Cl(t, r, a, s) {
    ((Sr = ki = null), Kc(r), (pl = null), (wa = 0));
    var f = r.return;
    try {
      if (IS(t, f, r, a, Fe)) {
        ((Rt = 1), hs(t, Bn(a, t.current)), (Pe = null));
        return;
      }
    } catch (m) {
      if (f !== null) throw ((Pe = f), m);
      ((Rt = 1), hs(t, Bn(a, t.current)), (Pe = null));
      return;
    }
    r.flags & 32768
      ? (Ke || s === 1
          ? (t = !0)
          : yl || (Fe & 536870912) !== 0
            ? (t = !1)
            : ((Qr = t = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = jn.current), s !== null && s.tag === 13 && (s.flags |= 16384))),
        uy(r, t))
      : ks(r);
  }
  function ks(t) {
    var r = t;
    do {
      if ((r.flags & 32768) !== 0) {
        uy(r, Qr);
        return;
      }
      t = r.return;
      var a = qS(r.alternate, r, Mr);
      if (a !== null) {
        Pe = a;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Pe = r;
        return;
      }
      Pe = r = t;
    } while (r !== null);
    Rt === 0 && (Rt = 5);
  }
  function uy(t, r) {
    do {
      var a = FS(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (Pe = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !r && ((t = t.sibling), t !== null))
      ) {
        Pe = t;
        return;
      }
      Pe = t = a;
    } while (t !== null);
    ((Rt = 6), (Pe = null));
  }
  function cy(t, r, a, s, f, m, x, w, L) {
    t.cancelPendingCommit = null;
    do ws();
    while (Kt !== 0);
    if ((lt & 6) !== 0) throw Error(l(327));
    if (r !== null) {
      if (r === t.current) throw Error(l(177));
      if (
        ((m = r.lanes | r.childLanes),
        (m |= wc),
        Ox(t, a, m, x, w, L),
        t === xt && ((Pe = xt = null), (Fe = 0)),
        (vl = r),
        (Jr = t),
        (xl = a),
        (Of = m),
        (zf = f),
        (ey = s),
        (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            nC(nt, function () {
              return (my(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (s = (r.flags & 13878) !== 0),
        (r.subtreeFlags & 13878) !== 0 || s)
      ) {
        ((s = _.T), (_.T = null), (f = K.p), (K.p = 2), (x = lt), (lt |= 4));
        try {
          VS(t, r, a);
        } finally {
          ((lt = x), (K.p = f), (_.T = s));
        }
      }
      ((Kt = 1), fy(), dy(), py());
    }
  }
  function fy() {
    if (Kt === 1) {
      Kt = 0;
      var t = Jr,
        r = vl,
        a = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || a) {
        ((a = _.T), (_.T = null));
        var s = K.p;
        K.p = 2;
        var f = lt;
        lt |= 4;
        try {
          Gg(r, t);
          var m = Gf,
            x = Jh(t.containerInfo),
            w = m.focusedElem,
            L = m.selectionRange;
          if (x !== w && w && w.ownerDocument && Wh(w.ownerDocument.documentElement, w)) {
            if (L !== null && vc(w)) {
              var G = L.start,
                ie = L.end;
              if ((ie === void 0 && (ie = G), 'selectionStart' in w))
                ((w.selectionStart = G), (w.selectionEnd = Math.min(ie, w.value.length)));
              else {
                var se = w.ownerDocument || document,
                  Z = (se && se.defaultView) || window;
                if (Z.getSelection) {
                  var W = Z.getSelection(),
                    Me = w.textContent.length,
                    Ee = Math.min(L.start, Me),
                    dt = L.end === void 0 ? Ee : Math.min(L.end, Me);
                  !W.extend && Ee > dt && ((x = dt), (dt = Ee), (Ee = x));
                  var P = Zh(w, Ee),
                    U = Zh(w, dt);
                  if (
                    P &&
                    U &&
                    (W.rangeCount !== 1 ||
                      W.anchorNode !== P.node ||
                      W.anchorOffset !== P.offset ||
                      W.focusNode !== U.node ||
                      W.focusOffset !== U.offset)
                  ) {
                    var V = se.createRange();
                    (V.setStart(P.node, P.offset),
                      W.removeAllRanges(),
                      Ee > dt
                        ? (W.addRange(V), W.extend(U.node, U.offset))
                        : (V.setEnd(U.node, U.offset), W.addRange(V)));
                  }
                }
              }
            }
            for (se = [], W = w; (W = W.parentNode); )
              W.nodeType === 1 && se.push({ element: W, left: W.scrollLeft, top: W.scrollTop });
            for (typeof w.focus == 'function' && w.focus(), w = 0; w < se.length; w++) {
              var ae = se[w];
              ((ae.element.scrollLeft = ae.left), (ae.element.scrollTop = ae.top));
            }
          }
          ((Ls = !!Yf), (Gf = Yf = null));
        } finally {
          ((lt = f), (K.p = s), (_.T = a));
        }
      }
      ((t.current = r), (Kt = 2));
    }
  }
  function dy() {
    if (Kt === 2) {
      Kt = 0;
      var t = Jr,
        r = vl,
        a = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || a) {
        ((a = _.T), (_.T = null));
        var s = K.p;
        K.p = 2;
        var f = lt;
        lt |= 4;
        try {
          qg(t, r.alternate, r);
        } finally {
          ((lt = f), (K.p = s), (_.T = a));
        }
      }
      Kt = 3;
    }
  }
  function py() {
    if (Kt === 4 || Kt === 3) {
      ((Kt = 0), _t());
      var t = Jr,
        r = vl,
        a = xl,
        s = ey;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
        ? (Kt = 5)
        : ((Kt = 0), (vl = Jr = null), hy(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Wr = null),
        Wu(a),
        (r = r.stateNode),
        le && typeof le.onCommitFiberRoot == 'function')
      )
        try {
          le.onCommitFiberRoot(ee, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((r = _.T), (f = K.p), (K.p = 2), (_.T = null));
        try {
          for (var m = t.onRecoverableError, x = 0; x < s.length; x++) {
            var w = s[x];
            m(w.value, { componentStack: w.stack });
          }
        } finally {
          ((_.T = r), (K.p = f));
        }
      }
      ((xl & 3) !== 0 && ws(),
        lr(t),
        (f = t.pendingLanes),
        (a & 4194090) !== 0 && (f & 42) !== 0 ? (t === Df ? Na++ : ((Na = 0), (Df = t))) : (Na = 0),
        _a(0));
    }
  }
  function hy(t, r) {
    (t.pooledCacheLanes &= r) === 0 &&
      ((r = t.pooledCache), r != null && ((t.pooledCache = null), pa(r)));
  }
  function ws(t) {
    return (fy(), dy(), py(), my());
  }
  function my() {
    if (Kt !== 5) return !1;
    var t = Jr,
      r = Of;
    Of = 0;
    var a = Wu(xl),
      s = _.T,
      f = K.p;
    try {
      ((K.p = 32 > a ? 32 : a), (_.T = null), (a = zf), (zf = null));
      var m = Jr,
        x = xl;
      if (((Kt = 0), (vl = Jr = null), (xl = 0), (lt & 6) !== 0)) throw Error(l(331));
      var w = lt;
      if (
        ((lt |= 4),
        Wg(m.current),
        Kg(m, m.current, x, a),
        (lt = w),
        _a(0, !1),
        le && typeof le.onPostCommitFiberRoot == 'function')
      )
        try {
          le.onPostCommitFiberRoot(ee, m);
        } catch {}
      return !0;
    } finally {
      ((K.p = f), (_.T = s), hy(t, r));
    }
  }
  function gy(t, r, a) {
    ((r = Bn(a, r)),
      (r = cf(t.stateNode, r, 2)),
      (t = qr(t, r, 2)),
      t !== null && (Zl(t, 2), lr(t)));
  }
  function mt(t, r, a) {
    if (t.tag === 3) gy(t, t, a);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          gy(r, t, a);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == 'function' ||
            (typeof s.componentDidCatch == 'function' && (Wr === null || !Wr.has(s)))
          ) {
            ((t = Bn(a, t)),
              (a = xg(2)),
              (s = qr(r, a, 2)),
              s !== null && (Sg(a, s, r, t), Zl(s, 2), lr(s)));
            break;
          }
        }
        r = r.return;
      }
  }
  function Lf(t, r, a) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new XS();
      var f = new Set();
      s.set(r, f);
    } else ((f = s.get(r)), f === void 0 && ((f = new Set()), s.set(r, f)));
    f.has(a) || ((Tf = !0), f.add(a), (t = JS.bind(null, t, r, a)), r.then(t, t));
  }
  function JS(t, r, a) {
    var s = t.pingCache;
    (s !== null && s.delete(r),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      xt === t &&
        (Fe & a) === a &&
        (Rt === 4 || (Rt === 3 && (Fe & 62914560) === Fe && 300 > Ge() - Mf)
          ? (lt & 2) === 0 && Sl(t, 0)
          : (Af |= a),
        bl === Fe && (bl = 0)),
      lr(t));
  }
  function yy(t, r) {
    (r === 0 && (r = ph()), (t = rl(t, r)), t !== null && (Zl(t, r), lr(t)));
  }
  function eC(t) {
    var r = t.memoizedState,
      a = 0;
    (r !== null && (a = r.retryLane), yy(t, a));
  }
  function tC(t, r) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode,
          f = t.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    (s !== null && s.delete(r), yy(t, a));
  }
  function nC(t, r) {
    return Ct(t, r);
  }
  var Es = null,
    kl = null,
    $f = !1,
    Ts = !1,
    Uf = !1,
    Oi = 0;
  function lr(t) {
    (t !== kl && t.next === null && (kl === null ? (Es = kl = t) : (kl = kl.next = t)),
      (Ts = !0),
      $f || (($f = !0), iC()));
  }
  function _a(t, r) {
    if (!Uf && Ts) {
      Uf = !0;
      do
        for (var a = !1, s = Es; s !== null; ) {
          if (t !== 0) {
            var f = s.pendingLanes;
            if (f === 0) var m = 0;
            else {
              var x = s.suspendedLanes,
                w = s.pingedLanes;
              ((m = (1 << (31 - me(42 | t) + 1)) - 1),
                (m &= f & ~(x & ~w)),
                (m = m & 201326741 ? (m & 201326741) | 1 : m ? m | 2 : 0));
            }
            m !== 0 && ((a = !0), Sy(s, m));
          } else
            ((m = Fe),
              (m = ze(
                s,
                s === xt ? m : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (m & 3) === 0 || rt(s, m) || ((a = !0), Sy(s, m)));
          s = s.next;
        }
      while (a);
      Uf = !1;
    }
  }
  function rC() {
    by();
  }
  function by() {
    Ts = $f = !1;
    var t = 0;
    Oi !== 0 && (dC() && (t = Oi), (Oi = 0));
    for (var r = Ge(), a = null, s = Es; s !== null; ) {
      var f = s.next,
        m = vy(s, r);
      (m === 0
        ? ((s.next = null), a === null ? (Es = f) : (a.next = f), f === null && (kl = a))
        : ((a = s), (t !== 0 || (m & 3) !== 0) && (Ts = !0)),
        (s = f));
    }
    _a(t);
  }
  function vy(t, r) {
    for (
      var a = t.suspendedLanes,
        s = t.pingedLanes,
        f = t.expirationTimes,
        m = t.pendingLanes & -62914561;
      0 < m;

    ) {
      var x = 31 - me(m),
        w = 1 << x,
        L = f[x];
      (L === -1
        ? ((w & a) === 0 || (w & s) !== 0) && (f[x] = qt(w, r))
        : L <= r && (t.expiredLanes |= w),
        (m &= ~w));
    }
    if (
      ((r = xt),
      (a = Fe),
      (a = ze(t, t === r ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (s = t.callbackNode),
      a === 0 || (t === r && (at === 2 || at === 9)) || t.cancelPendingCommit !== null)
    )
      return (s !== null && s !== null && De(s), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((a & 3) === 0 || rt(t, a)) {
      if (((r = a & -a), r === t.callbackPriority)) return r;
      switch ((s !== null && De(s), Wu(a))) {
        case 2:
        case 8:
          a = vt;
          break;
        case 32:
          a = nt;
          break;
        case 268435456:
          a = sn;
          break;
        default:
          a = nt;
      }
      return (
        (s = xy.bind(null, t)),
        (a = Ct(a, s)),
        (t.callbackPriority = r),
        (t.callbackNode = a),
        r
      );
    }
    return (
      s !== null && s !== null && De(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function xy(t, r) {
    if (Kt !== 0 && Kt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (ws() && t.callbackNode !== a) return null;
    var s = Fe;
    return (
      (s = ze(t, t === xt ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      s === 0
        ? null
        : (ny(t, s, r),
          vy(t, Ge()),
          t.callbackNode != null && t.callbackNode === a ? xy.bind(null, t) : null)
    );
  }
  function Sy(t, r) {
    if (ws()) return null;
    ny(t, r, !0);
  }
  function iC() {
    hC(function () {
      (lt & 6) !== 0 ? Ct(ut, rC) : by();
    });
  }
  function jf() {
    return (Oi === 0 && (Oi = Ql()), Oi);
  }
  function Cy(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : $o('' + t);
  }
  function ky(t, r) {
    var a = r.ownerDocument.createElement('input');
    return (
      (a.name = r.name),
      (a.value = r.value),
      t.id && a.setAttribute('form', t.id),
      r.parentNode.insertBefore(a, r),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function lC(t, r, a, s, f) {
    if (r === 'submit' && a && a.stateNode === f) {
      var m = Cy((f[fn] || null).action),
        x = s.submitter;
      x &&
        ((r = (r = x[fn] || null) ? Cy(r.formAction) : x.getAttribute('formAction')),
        r !== null && ((m = r), (x = null)));
      var w = new Io('action', 'action', null, s, f);
      t.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (Oi !== 0) {
                  var L = x ? ky(f, x) : new FormData(f);
                  lf(a, { pending: !0, data: L, method: f.method, action: m }, null, L);
                }
              } else
                typeof m == 'function' &&
                  (w.preventDefault(),
                  (L = x ? ky(f, x) : new FormData(f)),
                  lf(a, { pending: !0, data: L, method: f.method, action: m }, m, L));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Pf = 0; Pf < kc.length; Pf++) {
    var If = kc[Pf],
      aC = If.toLowerCase(),
      oC = If[0].toUpperCase() + If.slice(1);
    Yn(aC, 'on' + oC);
  }
  (Yn(nm, 'onAnimationEnd'),
    Yn(rm, 'onAnimationIteration'),
    Yn(im, 'onAnimationStart'),
    Yn('dblclick', 'onDoubleClick'),
    Yn('focusin', 'onFocus'),
    Yn('focusout', 'onBlur'),
    Yn(wS, 'onTransitionRun'),
    Yn(ES, 'onTransitionStart'),
    Yn(TS, 'onTransitionCancel'),
    Yn(lm, 'onTransitionEnd'),
    Gi('onMouseEnter', ['mouseout', 'mouseover']),
    Gi('onMouseLeave', ['mouseout', 'mouseover']),
    Gi('onPointerEnter', ['pointerout', 'pointerover']),
    Gi('onPointerLeave', ['pointerout', 'pointerover']),
    hi('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    hi(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    hi('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    hi('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    hi(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    hi(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Ba =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    sC = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ba),
    );
  function wy(t, r) {
    r = (r & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var s = t[a],
        f = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var x = s.length - 1; 0 <= x; x--) {
            var w = s[x],
              L = w.instance,
              G = w.currentTarget;
            if (((w = w.listener), L !== m && f.isPropagationStopped())) break e;
            ((m = w), (f.currentTarget = G));
            try {
              m(f);
            } catch (ie) {
              ps(ie);
            }
            ((f.currentTarget = null), (m = L));
          }
        else
          for (x = 0; x < s.length; x++) {
            if (
              ((w = s[x]),
              (L = w.instance),
              (G = w.currentTarget),
              (w = w.listener),
              L !== m && f.isPropagationStopped())
            )
              break e;
            ((m = w), (f.currentTarget = G));
            try {
              m(f);
            } catch (ie) {
              ps(ie);
            }
            ((f.currentTarget = null), (m = L));
          }
      }
    }
  }
  function Ie(t, r) {
    var a = r[Ju];
    a === void 0 && (a = r[Ju] = new Set());
    var s = t + '__bubble';
    a.has(s) || (Ey(r, t, 2, !1), a.add(s));
  }
  function Hf(t, r, a) {
    var s = 0;
    (r && (s |= 4), Ey(a, t, s, r));
  }
  var As = '_reactListening' + Math.random().toString(36).slice(2);
  function qf(t) {
    if (!t[As]) {
      ((t[As] = !0),
        bh.forEach(function (a) {
          a !== 'selectionchange' && (sC.has(a) || Hf(a, !1, t), Hf(a, !0, t));
        }));
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[As] || ((r[As] = !0), Hf('selectionchange', !1, r));
    }
  }
  function Ey(t, r, a, s) {
    switch (Ky(r)) {
      case 2:
        var f = BC;
        break;
      case 8:
        f = LC;
        break;
      default:
        f = rd;
    }
    ((a = f.bind(null, r, a, t)),
      (f = void 0),
      !cc || (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') || (f = !0),
      s
        ? f !== void 0
          ? t.addEventListener(r, a, { capture: !0, passive: f })
          : t.addEventListener(r, a, !0)
        : f !== void 0
          ? t.addEventListener(r, a, { passive: f })
          : t.addEventListener(r, a, !1));
  }
  function Ff(t, r, a, s, f) {
    var m = s;
    if ((r & 1) === 0 && (r & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var x = s.tag;
        if (x === 3 || x === 4) {
          var w = s.stateNode.containerInfo;
          if (w === f) break;
          if (x === 4)
            for (x = s.return; x !== null; ) {
              var L = x.tag;
              if ((L === 3 || L === 4) && x.stateNode.containerInfo === f) return;
              x = x.return;
            }
          for (; w !== null; ) {
            if (((x = Fi(w)), x === null)) return;
            if (((L = x.tag), L === 5 || L === 6 || L === 26 || L === 27)) {
              s = m = x;
              continue e;
            }
            w = w.parentNode;
          }
        }
        s = s.return;
      }
    Dh(function () {
      var G = m,
        ie = sc(a),
        se = [];
      e: {
        var Z = am.get(t);
        if (Z !== void 0) {
          var W = Io,
            Me = t;
          switch (t) {
            case 'keypress':
              if (jo(a) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = nS;
              break;
            case 'focusin':
              ((Me = 'focus'), (W = hc));
              break;
            case 'focusout':
              ((Me = 'blur'), (W = hc));
              break;
            case 'beforeblur':
            case 'afterblur':
              W = hc;
              break;
            case 'click':
              if (a.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              W = Bh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = Fx;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = lS;
              break;
            case nm:
            case rm:
            case im:
              W = Gx;
              break;
            case lm:
              W = oS;
              break;
            case 'scroll':
            case 'scrollend':
              W = Hx;
              break;
            case 'wheel':
              W = uS;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = Kx;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = $h;
              break;
            case 'toggle':
            case 'beforetoggle':
              W = fS;
          }
          var Ee = (r & 4) !== 0,
            dt = !Ee && (t === 'scroll' || t === 'scrollend'),
            P = Ee ? (Z !== null ? Z + 'Capture' : null) : Z;
          Ee = [];
          for (var U = G, V; U !== null; ) {
            var ae = U;
            if (
              ((V = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                V === null ||
                P === null ||
                ((ae = ea(U, P)), ae != null && Ee.push(La(U, ae, V))),
              dt)
            )
              break;
            U = U.return;
          }
          0 < Ee.length && ((Z = new W(Z, Me, null, a, ie)), se.push({ event: Z, listeners: Ee }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((Z = t === 'mouseover' || t === 'pointerover'),
            (W = t === 'mouseout' || t === 'pointerout'),
            Z && a !== oc && (Me = a.relatedTarget || a.fromElement) && (Fi(Me) || Me[qi]))
          )
            break e;
          if (
            (W || Z) &&
            ((Z =
              ie.window === ie
                ? ie
                : (Z = ie.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            W
              ? ((Me = a.relatedTarget || a.toElement),
                (W = G),
                (Me = Me ? Fi(Me) : null),
                Me !== null &&
                  ((dt = u(Me)), (Ee = Me.tag), Me !== dt || (Ee !== 5 && Ee !== 27 && Ee !== 6)) &&
                  (Me = null))
              : ((W = null), (Me = G)),
            W !== Me)
          ) {
            if (
              ((Ee = Bh),
              (ae = 'onMouseLeave'),
              (P = 'onMouseEnter'),
              (U = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((Ee = $h), (ae = 'onPointerLeave'), (P = 'onPointerEnter'), (U = 'pointer')),
              (dt = W == null ? Z : Jl(W)),
              (V = Me == null ? Z : Jl(Me)),
              (Z = new Ee(ae, U + 'leave', W, a, ie)),
              (Z.target = dt),
              (Z.relatedTarget = V),
              (ae = null),
              Fi(ie) === G &&
                ((Ee = new Ee(P, U + 'enter', Me, a, ie)),
                (Ee.target = V),
                (Ee.relatedTarget = dt),
                (ae = Ee)),
              (dt = ae),
              W && Me)
            )
              t: {
                for (Ee = W, P = Me, U = 0, V = Ee; V; V = wl(V)) U++;
                for (V = 0, ae = P; ae; ae = wl(ae)) V++;
                for (; 0 < U - V; ) ((Ee = wl(Ee)), U--);
                for (; 0 < V - U; ) ((P = wl(P)), V--);
                for (; U--; ) {
                  if (Ee === P || (P !== null && Ee === P.alternate)) break t;
                  ((Ee = wl(Ee)), (P = wl(P)));
                }
                Ee = null;
              }
            else Ee = null;
            (W !== null && Ty(se, Z, W, Ee, !1),
              Me !== null && dt !== null && Ty(se, dt, Me, Ee, !0));
          }
        }
        e: {
          if (
            ((Z = G ? Jl(G) : window),
            (W = Z.nodeName && Z.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && Z.type === 'file'))
          )
            var be = Vh;
          else if (qh(Z))
            if (Yh) be = SS;
            else {
              be = vS;
              var Ue = bS;
            }
          else
            ((W = Z.nodeName),
              !W || W.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? G && ac(G.elementType) && (be = Vh)
                : (be = xS));
          if (be && (be = be(t, G))) {
            Fh(se, be, a, ie);
            break e;
          }
          (Ue && Ue(t, Z, G),
            t === 'focusout' &&
              G &&
              Z.type === 'number' &&
              G.memoizedProps.value != null &&
              lc(Z, 'number', Z.value));
        }
        switch (((Ue = G ? Jl(G) : window), t)) {
          case 'focusin':
            (qh(Ue) || Ue.contentEditable === 'true') && ((el = Ue), (xc = G), (sa = null));
            break;
          case 'focusout':
            sa = xc = el = null;
            break;
          case 'mousedown':
            Sc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Sc = !1), em(se, a, ie));
            break;
          case 'selectionchange':
            if (kS) break;
          case 'keydown':
          case 'keyup':
            em(se, a, ie);
        }
        var ke;
        if (gc)
          e: {
            switch (t) {
              case 'compositionstart':
                var Te = 'onCompositionStart';
                break e;
              case 'compositionend':
                Te = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Te = 'onCompositionUpdate';
                break e;
            }
            Te = void 0;
          }
        else
          Ji
            ? Ih(t, a) && (Te = 'onCompositionEnd')
            : t === 'keydown' && a.keyCode === 229 && (Te = 'onCompositionStart');
        (Te &&
          (Uh &&
            a.locale !== 'ko' &&
            (Ji || Te !== 'onCompositionStart'
              ? Te === 'onCompositionEnd' && Ji && (ke = Nh())
              : ((jr = ie), (fc = 'value' in jr ? jr.value : jr.textContent), (Ji = !0))),
          (Ue = Rs(G, Te)),
          0 < Ue.length &&
            ((Te = new Lh(Te, t, null, a, ie)),
            se.push({ event: Te, listeners: Ue }),
            ke ? (Te.data = ke) : ((ke = Hh(a)), ke !== null && (Te.data = ke)))),
          (ke = pS ? hS(t, a) : mS(t, a)) &&
            ((Te = Rs(G, 'onBeforeInput')),
            0 < Te.length &&
              ((Ue = new Lh('onBeforeInput', 'beforeinput', null, a, ie)),
              se.push({ event: Ue, listeners: Te }),
              (Ue.data = ke))),
          lC(se, t, G, a, ie));
      }
      wy(se, r);
    });
  }
  function La(t, r, a) {
    return { instance: t, listener: r, currentTarget: a };
  }
  function Rs(t, r) {
    for (var a = r + 'Capture', s = []; t !== null; ) {
      var f = t,
        m = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          m === null ||
          ((f = ea(t, a)),
          f != null && s.unshift(La(t, f, m)),
          (f = ea(t, r)),
          f != null && s.push(La(t, f, m))),
        t.tag === 3)
      )
        return s;
      t = t.return;
    }
    return [];
  }
  function wl(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ty(t, r, a, s, f) {
    for (var m = r._reactName, x = []; a !== null && a !== s; ) {
      var w = a,
        L = w.alternate,
        G = w.stateNode;
      if (((w = w.tag), L !== null && L === s)) break;
      ((w !== 5 && w !== 26 && w !== 27) ||
        G === null ||
        ((L = G),
        f
          ? ((G = ea(a, m)), G != null && x.unshift(La(a, G, L)))
          : f || ((G = ea(a, m)), G != null && x.push(La(a, G, L)))),
        (a = a.return));
    }
    x.length !== 0 && t.push({ event: r, listeners: x });
  }
  var uC = /\r\n?/g,
    cC = /\u0000|\uFFFD/g;
  function Ay(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        uC,
        `
`,
      )
      .replace(cC, '');
  }
  function Ry(t, r) {
    return ((r = Ay(r)), Ay(t) === r);
  }
  function Ms() {}
  function ft(t, r, a, s, f, m) {
    switch (a) {
      case 'children':
        typeof s == 'string'
          ? r === 'body' || (r === 'textarea' && s === '') || Qi(t, s)
          : (typeof s == 'number' || typeof s == 'bigint') && r !== 'body' && Qi(t, '' + s);
        break;
      case 'className':
        _o(t, 'class', s);
        break;
      case 'tabIndex':
        _o(t, 'tabindex', s);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        _o(t, a, s);
        break;
      case 'style':
        Oh(t, s, m);
        break;
      case 'data':
        if (r !== 'object') {
          _o(t, 'data', s);
          break;
        }
      case 'src':
      case 'href':
        if (s === '' && (r !== 'a' || a !== 'href')) {
          t.removeAttribute(a);
          break;
        }
        if (s == null || typeof s == 'function' || typeof s == 'symbol' || typeof s == 'boolean') {
          t.removeAttribute(a);
          break;
        }
        ((s = $o('' + s)), t.setAttribute(a, s));
        break;
      case 'action':
      case 'formAction':
        if (typeof s == 'function') {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof m == 'function' &&
            (a === 'formAction'
              ? (r !== 'input' && ft(t, r, 'name', f.name, f, null),
                ft(t, r, 'formEncType', f.formEncType, f, null),
                ft(t, r, 'formMethod', f.formMethod, f, null),
                ft(t, r, 'formTarget', f.formTarget, f, null))
              : (ft(t, r, 'encType', f.encType, f, null),
                ft(t, r, 'method', f.method, f, null),
                ft(t, r, 'target', f.target, f, null)));
        if (s == null || typeof s == 'symbol' || typeof s == 'boolean') {
          t.removeAttribute(a);
          break;
        }
        ((s = $o('' + s)), t.setAttribute(a, s));
        break;
      case 'onClick':
        s != null && (t.onclick = Ms);
        break;
      case 'onScroll':
        s != null && Ie('scroll', t);
        break;
      case 'onScrollEnd':
        s != null && Ie('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (s != null) {
          if (typeof s != 'object' || !('__html' in s)) throw Error(l(61));
          if (((a = s.__html), a != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = a;
          }
        }
        break;
      case 'multiple':
        t.multiple = s && typeof s != 'function' && typeof s != 'symbol';
        break;
      case 'muted':
        t.muted = s && typeof s != 'function' && typeof s != 'symbol';
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
        if (s == null || typeof s == 'function' || typeof s == 'boolean' || typeof s == 'symbol') {
          t.removeAttribute('xlink:href');
          break;
        }
        ((a = $o('' + s)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        s != null && typeof s != 'function' && typeof s != 'symbol'
          ? t.setAttribute(a, '' + s)
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
        s && typeof s != 'function' && typeof s != 'symbol'
          ? t.setAttribute(a, '')
          : t.removeAttribute(a);
        break;
      case 'capture':
      case 'download':
        s === !0
          ? t.setAttribute(a, '')
          : s !== !1 && s != null && typeof s != 'function' && typeof s != 'symbol'
            ? t.setAttribute(a, s)
            : t.removeAttribute(a);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        s != null && typeof s != 'function' && typeof s != 'symbol' && !isNaN(s) && 1 <= s
          ? t.setAttribute(a, s)
          : t.removeAttribute(a);
        break;
      case 'rowSpan':
      case 'start':
        s == null || typeof s == 'function' || typeof s == 'symbol' || isNaN(s)
          ? t.removeAttribute(a)
          : t.setAttribute(a, s);
        break;
      case 'popover':
        (Ie('beforetoggle', t), Ie('toggle', t), No(t, 'popover', s));
        break;
      case 'xlinkActuate':
        gr(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', s);
        break;
      case 'xlinkArcrole':
        gr(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', s);
        break;
      case 'xlinkRole':
        gr(t, 'http://www.w3.org/1999/xlink', 'xlink:role', s);
        break;
      case 'xlinkShow':
        gr(t, 'http://www.w3.org/1999/xlink', 'xlink:show', s);
        break;
      case 'xlinkTitle':
        gr(t, 'http://www.w3.org/1999/xlink', 'xlink:title', s);
        break;
      case 'xlinkType':
        gr(t, 'http://www.w3.org/1999/xlink', 'xlink:type', s);
        break;
      case 'xmlBase':
        gr(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', s);
        break;
      case 'xmlLang':
        gr(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', s);
        break;
      case 'xmlSpace':
        gr(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', s);
        break;
      case 'is':
        No(t, 'is', s);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < a.length) || (a[0] !== 'o' && a[0] !== 'O') || (a[1] !== 'n' && a[1] !== 'N')) &&
          ((a = Px.get(a) || a), No(t, a, s));
    }
  }
  function Vf(t, r, a, s, f, m) {
    switch (a) {
      case 'style':
        Oh(t, s, m);
        break;
      case 'dangerouslySetInnerHTML':
        if (s != null) {
          if (typeof s != 'object' || !('__html' in s)) throw Error(l(61));
          if (((a = s.__html), a != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = a;
          }
        }
        break;
      case 'children':
        typeof s == 'string'
          ? Qi(t, s)
          : (typeof s == 'number' || typeof s == 'bigint') && Qi(t, '' + s);
        break;
      case 'onScroll':
        s != null && Ie('scroll', t);
        break;
      case 'onScrollEnd':
        s != null && Ie('scrollend', t);
        break;
      case 'onClick':
        s != null && (t.onclick = Ms);
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
        if (!vh.hasOwnProperty(a))
          e: {
            if (
              a[0] === 'o' &&
              a[1] === 'n' &&
              ((f = a.endsWith('Capture')),
              (r = a.slice(2, f ? a.length - 7 : void 0)),
              (m = t[fn] || null),
              (m = m != null ? m[a] : null),
              typeof m == 'function' && t.removeEventListener(r, m, f),
              typeof s == 'function')
            ) {
              (typeof m != 'function' &&
                m !== null &&
                (a in t ? (t[a] = null) : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(r, s, f));
              break e;
            }
            a in t ? (t[a] = s) : s === !0 ? t.setAttribute(a, '') : No(t, a, s);
          }
    }
  }
  function Qt(t, r, a) {
    switch (r) {
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
        (Ie('error', t), Ie('load', t));
        var s = !1,
          f = !1,
          m;
        for (m in a)
          if (a.hasOwnProperty(m)) {
            var x = a[m];
            if (x != null)
              switch (m) {
                case 'src':
                  s = !0;
                  break;
                case 'srcSet':
                  f = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(l(137, r));
                default:
                  ft(t, r, m, x, a, null);
              }
          }
        (f && ft(t, r, 'srcSet', a.srcSet, a, null), s && ft(t, r, 'src', a.src, a, null));
        return;
      case 'input':
        Ie('invalid', t);
        var w = (m = x = f = null),
          L = null,
          G = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var ie = a[s];
            if (ie != null)
              switch (s) {
                case 'name':
                  f = ie;
                  break;
                case 'type':
                  x = ie;
                  break;
                case 'checked':
                  L = ie;
                  break;
                case 'defaultChecked':
                  G = ie;
                  break;
                case 'value':
                  m = ie;
                  break;
                case 'defaultValue':
                  w = ie;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (ie != null) throw Error(l(137, r));
                  break;
                default:
                  ft(t, r, s, ie, a, null);
              }
          }
        (Th(t, m, w, L, G, x, f, !1), Bo(t));
        return;
      case 'select':
        (Ie('invalid', t), (s = x = m = null));
        for (f in a)
          if (a.hasOwnProperty(f) && ((w = a[f]), w != null))
            switch (f) {
              case 'value':
                m = w;
                break;
              case 'defaultValue':
                x = w;
                break;
              case 'multiple':
                s = w;
              default:
                ft(t, r, f, w, a, null);
            }
        ((r = m),
          (a = x),
          (t.multiple = !!s),
          r != null ? Ki(t, !!s, r, !1) : a != null && Ki(t, !!s, a, !0));
        return;
      case 'textarea':
        (Ie('invalid', t), (m = f = s = null));
        for (x in a)
          if (a.hasOwnProperty(x) && ((w = a[x]), w != null))
            switch (x) {
              case 'value':
                s = w;
                break;
              case 'defaultValue':
                f = w;
                break;
              case 'children':
                m = w;
                break;
              case 'dangerouslySetInnerHTML':
                if (w != null) throw Error(l(91));
                break;
              default:
                ft(t, r, x, w, a, null);
            }
        (Rh(t, s, f, m), Bo(t));
        return;
      case 'option':
        for (L in a)
          if (a.hasOwnProperty(L) && ((s = a[L]), s != null))
            switch (L) {
              case 'selected':
                t.selected = s && typeof s != 'function' && typeof s != 'symbol';
                break;
              default:
                ft(t, r, L, s, a, null);
            }
        return;
      case 'dialog':
        (Ie('beforetoggle', t), Ie('toggle', t), Ie('cancel', t), Ie('close', t));
        break;
      case 'iframe':
      case 'object':
        Ie('load', t);
        break;
      case 'video':
      case 'audio':
        for (s = 0; s < Ba.length; s++) Ie(Ba[s], t);
        break;
      case 'image':
        (Ie('error', t), Ie('load', t));
        break;
      case 'details':
        Ie('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ie('error', t), Ie('load', t));
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
        for (G in a)
          if (a.hasOwnProperty(G) && ((s = a[G]), s != null))
            switch (G) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(l(137, r));
              default:
                ft(t, r, G, s, a, null);
            }
        return;
      default:
        if (ac(r)) {
          for (ie in a)
            a.hasOwnProperty(ie) && ((s = a[ie]), s !== void 0 && Vf(t, r, ie, s, a, void 0));
          return;
        }
    }
    for (w in a) a.hasOwnProperty(w) && ((s = a[w]), s != null && ft(t, r, w, s, a, null));
  }
  function fC(t, r, a, s) {
    switch (r) {
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
        var f = null,
          m = null,
          x = null,
          w = null,
          L = null,
          G = null,
          ie = null;
        for (W in a) {
          var se = a[W];
          if (a.hasOwnProperty(W) && se != null)
            switch (W) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                L = se;
              default:
                s.hasOwnProperty(W) || ft(t, r, W, null, s, se);
            }
        }
        for (var Z in s) {
          var W = s[Z];
          if (((se = a[Z]), s.hasOwnProperty(Z) && (W != null || se != null)))
            switch (Z) {
              case 'type':
                m = W;
                break;
              case 'name':
                f = W;
                break;
              case 'checked':
                G = W;
                break;
              case 'defaultChecked':
                ie = W;
                break;
              case 'value':
                x = W;
                break;
              case 'defaultValue':
                w = W;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (W != null) throw Error(l(137, r));
                break;
              default:
                W !== se && ft(t, r, Z, W, s, se);
            }
        }
        ic(t, x, w, L, G, ie, m, f);
        return;
      case 'select':
        W = x = w = Z = null;
        for (m in a)
          if (((L = a[m]), a.hasOwnProperty(m) && L != null))
            switch (m) {
              case 'value':
                break;
              case 'multiple':
                W = L;
              default:
                s.hasOwnProperty(m) || ft(t, r, m, null, s, L);
            }
        for (f in s)
          if (((m = s[f]), (L = a[f]), s.hasOwnProperty(f) && (m != null || L != null)))
            switch (f) {
              case 'value':
                Z = m;
                break;
              case 'defaultValue':
                w = m;
                break;
              case 'multiple':
                x = m;
              default:
                m !== L && ft(t, r, f, m, s, L);
            }
        ((r = w),
          (a = x),
          (s = W),
          Z != null
            ? Ki(t, !!a, Z, !1)
            : !!s != !!a && (r != null ? Ki(t, !!a, r, !0) : Ki(t, !!a, a ? [] : '', !1)));
        return;
      case 'textarea':
        W = Z = null;
        for (w in a)
          if (((f = a[w]), a.hasOwnProperty(w) && f != null && !s.hasOwnProperty(w)))
            switch (w) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ft(t, r, w, null, s, f);
            }
        for (x in s)
          if (((f = s[x]), (m = a[x]), s.hasOwnProperty(x) && (f != null || m != null)))
            switch (x) {
              case 'value':
                Z = f;
                break;
              case 'defaultValue':
                W = f;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== m && ft(t, r, x, f, s, m);
            }
        Ah(t, Z, W);
        return;
      case 'option':
        for (var Me in a)
          if (((Z = a[Me]), a.hasOwnProperty(Me) && Z != null && !s.hasOwnProperty(Me)))
            switch (Me) {
              case 'selected':
                t.selected = !1;
                break;
              default:
                ft(t, r, Me, null, s, Z);
            }
        for (L in s)
          if (((Z = s[L]), (W = a[L]), s.hasOwnProperty(L) && Z !== W && (Z != null || W != null)))
            switch (L) {
              case 'selected':
                t.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                ft(t, r, L, Z, s, W);
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
        for (var Ee in a)
          ((Z = a[Ee]),
            a.hasOwnProperty(Ee) && Z != null && !s.hasOwnProperty(Ee) && ft(t, r, Ee, null, s, Z));
        for (G in s)
          if (((Z = s[G]), (W = a[G]), s.hasOwnProperty(G) && Z !== W && (Z != null || W != null)))
            switch (G) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(l(137, r));
                break;
              default:
                ft(t, r, G, Z, s, W);
            }
        return;
      default:
        if (ac(r)) {
          for (var dt in a)
            ((Z = a[dt]),
              a.hasOwnProperty(dt) &&
                Z !== void 0 &&
                !s.hasOwnProperty(dt) &&
                Vf(t, r, dt, void 0, s, Z));
          for (ie in s)
            ((Z = s[ie]),
              (W = a[ie]),
              !s.hasOwnProperty(ie) ||
                Z === W ||
                (Z === void 0 && W === void 0) ||
                Vf(t, r, ie, Z, s, W));
          return;
        }
    }
    for (var P in a)
      ((Z = a[P]),
        a.hasOwnProperty(P) && Z != null && !s.hasOwnProperty(P) && ft(t, r, P, null, s, Z));
    for (se in s)
      ((Z = s[se]),
        (W = a[se]),
        !s.hasOwnProperty(se) || Z === W || (Z == null && W == null) || ft(t, r, se, Z, s, W));
  }
  var Yf = null,
    Gf = null;
  function Os(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function My(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Oy(t, r) {
    if (t === 0)
      switch (r) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && r === 'foreignObject' ? 0 : t;
  }
  function Xf(t, r) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof r.children == 'string' ||
      typeof r.children == 'number' ||
      typeof r.children == 'bigint' ||
      (typeof r.dangerouslySetInnerHTML == 'object' &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Kf = null;
  function dC() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === Kf ? !1 : ((Kf = t), !0)) : ((Kf = null), !1);
  }
  var zy = typeof setTimeout == 'function' ? setTimeout : void 0,
    pC = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Dy = typeof Promise == 'function' ? Promise : void 0,
    hC =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Dy < 'u'
          ? function (t) {
              return Dy.resolve(null).then(t).catch(mC);
            }
          : zy;
  function mC(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ti(t) {
    return t === 'head';
  }
  function Ny(t, r) {
    var a = r,
      s = 0,
      f = 0;
    do {
      var m = a.nextSibling;
      if ((t.removeChild(a), m && m.nodeType === 8))
        if (((a = m.data), a === '/$')) {
          if (0 < s && 8 > s) {
            a = s;
            var x = t.ownerDocument;
            if ((a & 1 && $a(x.documentElement), a & 2 && $a(x.body), a & 4))
              for (a = x.head, $a(a), x = a.firstChild; x; ) {
                var w = x.nextSibling,
                  L = x.nodeName;
                (x[Wl] ||
                  L === 'SCRIPT' ||
                  L === 'STYLE' ||
                  (L === 'LINK' && x.rel.toLowerCase() === 'stylesheet') ||
                  a.removeChild(x),
                  (x = w));
              }
          }
          if (f === 0) {
            (t.removeChild(m), Va(r));
            return;
          }
          f--;
        } else a === '$' || a === '$?' || a === '$!' ? f++ : (s = a.charCodeAt(0) - 48);
      else s = 0;
      a = m;
    } while (a);
    Va(r);
  }
  function Qf(t) {
    var r = t.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var a = r;
      switch (((r = r.nextSibling), a.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Qf(a), ec(a));
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
  function gC(t, r, a, s) {
    for (; t.nodeType === 1; ) {
      var f = a;
      if (t.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!s && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (s) {
        if (!t[Wl])
          switch (r) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((m = t.getAttribute('rel')),
                m === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                m !== f.rel ||
                t.getAttribute('href') !== (f.href == null || f.href === '' ? null : f.href) ||
                t.getAttribute('crossorigin') !== (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute('title') !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((m = t.getAttribute('src')),
                (m !== (f.src == null ? null : f.src) ||
                  t.getAttribute('type') !== (f.type == null ? null : f.type) ||
                  t.getAttribute('crossorigin') !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  m &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (r === 'input' && t.type === 'hidden') {
        var m = f.name == null ? null : '' + f.name;
        if (f.type === 'hidden' && t.getAttribute('name') === m) return t;
      } else return t;
      if (((t = Xn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function yC(t, r, a) {
    if (r === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !a) ||
        ((t = Xn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Zf(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState === 'complete');
  }
  function bC(t, r) {
    var a = t.ownerDocument;
    if (t.data !== '$?' || a.readyState === 'complete') r();
    else {
      var s = function () {
        (r(), a.removeEventListener('DOMContentLoaded', s));
      };
      (a.addEventListener('DOMContentLoaded', s), (t._reactRetry = s));
    }
  }
  function Xn(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = t.data), r === '$' || r === '$!' || r === '$?' || r === 'F!' || r === 'F')) break;
        if (r === '/$') return null;
      }
    }
    return t;
  }
  var Wf = null;
  function _y(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === '$' || a === '$!' || a === '$?') {
          if (r === 0) return t;
          r--;
        } else a === '/$' && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function By(t, r, a) {
    switch (((r = Os(a)), t)) {
      case 'html':
        if (((t = r.documentElement), !t)) throw Error(l(452));
        return t;
      case 'head':
        if (((t = r.head), !t)) throw Error(l(453));
        return t;
      case 'body':
        if (((t = r.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  function $a(t) {
    for (var r = t.attributes; r.length; ) t.removeAttributeNode(r[0]);
    ec(t);
  }
  var In = new Map(),
    Ly = new Set();
  function zs(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Or = K.d;
  K.d = { f: vC, r: xC, D: SC, C: CC, L: kC, m: wC, X: TC, S: EC, M: AC };
  function vC() {
    var t = Or.f(),
      r = Cs();
    return t || r;
  }
  function xC(t) {
    var r = Vi(t);
    r !== null && r.tag === 5 && r.type === 'form' ? ng(r) : Or.r(t);
  }
  var El = typeof document > 'u' ? null : document;
  function $y(t, r, a) {
    var s = El;
    if (s && typeof r == 'string' && r) {
      var f = _n(r);
      ((f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof a == 'string' && (f += '[crossorigin="' + a + '"]'),
        Ly.has(f) ||
          (Ly.add(f),
          (t = { rel: t, crossOrigin: a, href: r }),
          s.querySelector(f) === null &&
            ((r = s.createElement('link')), Qt(r, 'link', t), Ft(r), s.head.appendChild(r))));
    }
  }
  function SC(t) {
    (Or.D(t), $y('dns-prefetch', t, null));
  }
  function CC(t, r) {
    (Or.C(t, r), $y('preconnect', t, r));
  }
  function kC(t, r, a) {
    Or.L(t, r, a);
    var s = El;
    if (s && t && r) {
      var f = 'link[rel="preload"][as="' + _n(r) + '"]';
      r === 'image' && a && a.imageSrcSet
        ? ((f += '[imagesrcset="' + _n(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == 'string' && (f += '[imagesizes="' + _n(a.imageSizes) + '"]'))
        : (f += '[href="' + _n(t) + '"]');
      var m = f;
      switch (r) {
        case 'style':
          m = Tl(t);
          break;
        case 'script':
          m = Al(t);
      }
      In.has(m) ||
        ((t = g(
          { rel: 'preload', href: r === 'image' && a && a.imageSrcSet ? void 0 : t, as: r },
          a,
        )),
        In.set(m, t),
        s.querySelector(f) !== null ||
          (r === 'style' && s.querySelector(Ua(m))) ||
          (r === 'script' && s.querySelector(ja(m))) ||
          ((r = s.createElement('link')), Qt(r, 'link', t), Ft(r), s.head.appendChild(r)));
    }
  }
  function wC(t, r) {
    Or.m(t, r);
    var a = El;
    if (a && t) {
      var s = r && typeof r.as == 'string' ? r.as : 'script',
        f = 'link[rel="modulepreload"][as="' + _n(s) + '"][href="' + _n(t) + '"]',
        m = f;
      switch (s) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          m = Al(t);
      }
      if (
        !In.has(m) &&
        ((t = g({ rel: 'modulepreload', href: t }, r)), In.set(m, t), a.querySelector(f) === null)
      ) {
        switch (s) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (a.querySelector(ja(m))) return;
        }
        ((s = a.createElement('link')), Qt(s, 'link', t), Ft(s), a.head.appendChild(s));
      }
    }
  }
  function EC(t, r, a) {
    Or.S(t, r, a);
    var s = El;
    if (s && t) {
      var f = Yi(s).hoistableStyles,
        m = Tl(t);
      r = r || 'default';
      var x = f.get(m);
      if (!x) {
        var w = { loading: 0, preload: null };
        if ((x = s.querySelector(Ua(m)))) w.loading = 5;
        else {
          ((t = g({ rel: 'stylesheet', href: t, 'data-precedence': r }, a)),
            (a = In.get(m)) && Jf(t, a));
          var L = (x = s.createElement('link'));
          (Ft(L),
            Qt(L, 'link', t),
            (L._p = new Promise(function (G, ie) {
              ((L.onload = G), (L.onerror = ie));
            })),
            L.addEventListener('load', function () {
              w.loading |= 1;
            }),
            L.addEventListener('error', function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            Ds(x, r, s));
        }
        ((x = { type: 'stylesheet', instance: x, count: 1, state: w }), f.set(m, x));
      }
    }
  }
  function TC(t, r) {
    Or.X(t, r);
    var a = El;
    if (a && t) {
      var s = Yi(a).hoistableScripts,
        f = Al(t),
        m = s.get(f);
      m ||
        ((m = a.querySelector(ja(f))),
        m ||
          ((t = g({ src: t, async: !0 }, r)),
          (r = In.get(f)) && ed(t, r),
          (m = a.createElement('script')),
          Ft(m),
          Qt(m, 'link', t),
          a.head.appendChild(m)),
        (m = { type: 'script', instance: m, count: 1, state: null }),
        s.set(f, m));
    }
  }
  function AC(t, r) {
    Or.M(t, r);
    var a = El;
    if (a && t) {
      var s = Yi(a).hoistableScripts,
        f = Al(t),
        m = s.get(f);
      m ||
        ((m = a.querySelector(ja(f))),
        m ||
          ((t = g({ src: t, async: !0, type: 'module' }, r)),
          (r = In.get(f)) && ed(t, r),
          (m = a.createElement('script')),
          Ft(m),
          Qt(m, 'link', t),
          a.head.appendChild(m)),
        (m = { type: 'script', instance: m, count: 1, state: null }),
        s.set(f, m));
    }
  }
  function Uy(t, r, a, s) {
    var f = (f = te.current) ? zs(f) : null;
    if (!f) throw Error(l(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof a.precedence == 'string' && typeof a.href == 'string'
          ? ((r = Tl(a.href)),
            (a = Yi(f).hoistableStyles),
            (s = a.get(r)),
            s || ((s = { type: 'style', instance: null, count: 0, state: null }), a.set(r, s)),
            s)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          a.rel === 'stylesheet' &&
          typeof a.href == 'string' &&
          typeof a.precedence == 'string'
        ) {
          t = Tl(a.href);
          var m = Yi(f).hoistableStyles,
            x = m.get(t);
          if (
            (x ||
              ((f = f.ownerDocument || f),
              (x = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              m.set(t, x),
              (m = f.querySelector(Ua(t))) && !m._p && ((x.instance = m), (x.state.loading = 5)),
              In.has(t) ||
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
                In.set(t, a),
                m || RC(f, t, a, x.state))),
            r && s === null)
          )
            throw Error(l(528, ''));
          return x;
        }
        if (r && s !== null) throw Error(l(529, ''));
        return null;
      case 'script':
        return (
          (r = a.async),
          (a = a.src),
          typeof a == 'string' && r && typeof r != 'function' && typeof r != 'symbol'
            ? ((r = Al(a)),
              (a = Yi(f).hoistableScripts),
              (s = a.get(r)),
              s || ((s = { type: 'script', instance: null, count: 0, state: null }), a.set(r, s)),
              s)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function Tl(t) {
    return 'href="' + _n(t) + '"';
  }
  function Ua(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function jy(t) {
    return g({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function RC(t, r, a, s) {
    t.querySelector('link[rel="preload"][as="style"][' + r + ']')
      ? (s.loading = 1)
      : ((r = t.createElement('link')),
        (s.preload = r),
        r.addEventListener('load', function () {
          return (s.loading |= 1);
        }),
        r.addEventListener('error', function () {
          return (s.loading |= 2);
        }),
        Qt(r, 'link', a),
        Ft(r),
        t.head.appendChild(r));
  }
  function Al(t) {
    return '[src="' + _n(t) + '"]';
  }
  function ja(t) {
    return 'script[async]' + t;
  }
  function Py(t, r, a) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case 'style':
          var s = t.querySelector('style[data-href~="' + _n(a.href) + '"]');
          if (s) return ((r.instance = s), Ft(s), s);
          var f = g({}, a, {
            'data-href': a.href,
            'data-precedence': a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement('style')),
            Ft(s),
            Qt(s, 'style', f),
            Ds(s, a.precedence, t),
            (r.instance = s)
          );
        case 'stylesheet':
          f = Tl(a.href);
          var m = t.querySelector(Ua(f));
          if (m) return ((r.state.loading |= 4), (r.instance = m), Ft(m), m);
          ((s = jy(a)),
            (f = In.get(f)) && Jf(s, f),
            (m = (t.ownerDocument || t).createElement('link')),
            Ft(m));
          var x = m;
          return (
            (x._p = new Promise(function (w, L) {
              ((x.onload = w), (x.onerror = L));
            })),
            Qt(m, 'link', s),
            (r.state.loading |= 4),
            Ds(m, a.precedence, t),
            (r.instance = m)
          );
        case 'script':
          return (
            (m = Al(a.src)),
            (f = t.querySelector(ja(m)))
              ? ((r.instance = f), Ft(f), f)
              : ((s = a),
                (f = In.get(m)) && ((s = g({}, a)), ed(s, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement('script')),
                Ft(f),
                Qt(f, 'link', s),
                t.head.appendChild(f),
                (r.instance = f))
          );
        case 'void':
          return null;
        default:
          throw Error(l(443, r.type));
      }
    else
      r.type === 'stylesheet' &&
        (r.state.loading & 4) === 0 &&
        ((s = r.instance), (r.state.loading |= 4), Ds(s, a.precedence, t));
    return r.instance;
  }
  function Ds(t, r, a) {
    for (
      var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        f = s.length ? s[s.length - 1] : null,
        m = f,
        x = 0;
      x < s.length;
      x++
    ) {
      var w = s[x];
      if (w.dataset.precedence === r) m = w;
      else if (m !== f) break;
    }
    m
      ? m.parentNode.insertBefore(t, m.nextSibling)
      : ((r = a.nodeType === 9 ? a.head : a), r.insertBefore(t, r.firstChild));
  }
  function Jf(t, r) {
    (t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
      t.title == null && (t.title = r.title));
  }
  function ed(t, r) {
    (t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
      t.integrity == null && (t.integrity = r.integrity));
  }
  var Ns = null;
  function Iy(t, r, a) {
    if (Ns === null) {
      var s = new Map(),
        f = (Ns = new Map());
      f.set(a, s);
    } else ((f = Ns), (s = f.get(a)), s || ((s = new Map()), f.set(a, s)));
    if (s.has(t)) return s;
    for (s.set(t, null), a = a.getElementsByTagName(t), f = 0; f < a.length; f++) {
      var m = a[f];
      if (
        !(m[Wl] || m[en] || (t === 'link' && m.getAttribute('rel') === 'stylesheet')) &&
        m.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var x = m.getAttribute(r) || '';
        x = t + x;
        var w = s.get(x);
        w ? w.push(m) : s.set(x, [m]);
      }
    }
    return s;
  }
  function Hy(t, r, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(a, r === 'title' ? t.querySelector('head > title') : null));
  }
  function MC(t, r, a) {
    if (a === 1 || r.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof r.precedence != 'string' || typeof r.href != 'string' || r.href === '') break;
        return !0;
      case 'link':
        if (
          typeof r.rel != 'string' ||
          typeof r.href != 'string' ||
          r.href === '' ||
          r.onLoad ||
          r.onError
        )
          break;
        switch (r.rel) {
          case 'stylesheet':
            return ((t = r.disabled), typeof r.precedence == 'string' && t == null);
          default:
            return !0;
        }
      case 'script':
        if (
          r.async &&
          typeof r.async != 'function' &&
          typeof r.async != 'symbol' &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function qy(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  var Pa = null;
  function OC() {}
  function zC(t, r, a) {
    if (Pa === null) throw Error(l(475));
    var s = Pa;
    if (
      r.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var f = Tl(a.href),
          m = t.querySelector(Ua(f));
        if (m) {
          ((t = m._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (s.count++, (s = _s.bind(s)), t.then(s, s)),
            (r.state.loading |= 4),
            (r.instance = m),
            Ft(m));
          return;
        }
        ((m = t.ownerDocument || t),
          (a = jy(a)),
          (f = In.get(f)) && Jf(a, f),
          (m = m.createElement('link')),
          Ft(m));
        var x = m;
        ((x._p = new Promise(function (w, L) {
          ((x.onload = w), (x.onerror = L));
        })),
          Qt(m, 'link', a),
          (r.instance = m));
      }
      (s.stylesheets === null && (s.stylesheets = new Map()),
        s.stylesheets.set(r, t),
        (t = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (s.count++,
          (r = _s.bind(s)),
          t.addEventListener('load', r),
          t.addEventListener('error', r)));
    }
  }
  function DC() {
    if (Pa === null) throw Error(l(475));
    var t = Pa;
    return (
      t.stylesheets && t.count === 0 && td(t, t.stylesheets),
      0 < t.count
        ? function (r) {
            var a = setTimeout(function () {
              if ((t.stylesheets && td(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                ((t.unsuspend = null), s());
              }
            }, 6e4);
            return (
              (t.unsuspend = r),
              function () {
                ((t.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function _s() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) td(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Bs = null;
  function td(t, r) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Bs = new Map()), r.forEach(NC, t), (Bs = null), _s.call(t)));
  }
  function NC(t, r) {
    if (!(r.state.loading & 4)) {
      var a = Bs.get(t);
      if (a) var s = a.get(null);
      else {
        ((a = new Map()), Bs.set(t, a));
        for (
          var f = t.querySelectorAll('link[data-precedence],style[data-precedence]'), m = 0;
          m < f.length;
          m++
        ) {
          var x = f[m];
          (x.nodeName === 'LINK' || x.getAttribute('media') !== 'not all') &&
            (a.set(x.dataset.precedence, x), (s = x));
        }
        s && a.set(null, s);
      }
      ((f = r.instance),
        (x = f.getAttribute('data-precedence')),
        (m = a.get(x) || s),
        m === s && a.set(null, f),
        a.set(x, f),
        this.count++,
        (s = _s.bind(this)),
        f.addEventListener('load', s),
        f.addEventListener('error', s),
        m
          ? m.parentNode.insertBefore(f, m.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(f, t.firstChild)),
        (r.state.loading |= 4));
    }
  }
  var Ia = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0,
  };
  function _C(t, r, a, s, f, m, x, w) {
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
      (this.expirationTimes = Qu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qu(0)),
      (this.hiddenUpdates = Qu(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = f),
      (this.onCaughtError = m),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function Fy(t, r, a, s, f, m, x, w, L, G, ie, se) {
    return (
      (t = new _C(t, r, a, x, w, L, G, se)),
      (r = 1),
      m === !0 && (r |= 24),
      (m = kn(3, null, null, r)),
      (t.current = m),
      (m.stateNode = t),
      (r = Bc()),
      r.refCount++,
      (t.pooledCache = r),
      r.refCount++,
      (m.memoizedState = { element: s, isDehydrated: a, cache: r }),
      jc(m),
      t
    );
  }
  function Vy(t) {
    return t ? ((t = il), t) : il;
  }
  function Yy(t, r, a, s, f, m) {
    ((f = Vy(f)),
      s.context === null ? (s.context = f) : (s.pendingContext = f),
      (s = Hr(r)),
      (s.payload = { element: a }),
      (m = m === void 0 ? null : m),
      m !== null && (s.callback = m),
      (a = qr(t, s, r)),
      a !== null && (Rn(a, t, r), ya(a, t, r)));
  }
  function Gy(t, r) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < r ? a : r;
    }
  }
  function nd(t, r) {
    (Gy(t, r), (t = t.alternate) && Gy(t, r));
  }
  function Xy(t) {
    if (t.tag === 13) {
      var r = rl(t, 67108864);
      (r !== null && Rn(r, t, 67108864), nd(t, 67108864));
    }
  }
  var Ls = !0;
  function BC(t, r, a, s) {
    var f = _.T;
    _.T = null;
    var m = K.p;
    try {
      ((K.p = 2), rd(t, r, a, s));
    } finally {
      ((K.p = m), (_.T = f));
    }
  }
  function LC(t, r, a, s) {
    var f = _.T;
    _.T = null;
    var m = K.p;
    try {
      ((K.p = 8), rd(t, r, a, s));
    } finally {
      ((K.p = m), (_.T = f));
    }
  }
  function rd(t, r, a, s) {
    if (Ls) {
      var f = id(s);
      if (f === null) (Ff(t, r, s, $s, a), Qy(t, s));
      else if (UC(f, t, r, a, s)) s.stopPropagation();
      else if ((Qy(t, s), r & 4 && -1 < $C.indexOf(t))) {
        for (; f !== null; ) {
          var m = Vi(f);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (((m = m.stateNode), m.current.memoizedState.isDehydrated)) {
                  var x = xe(m.pendingLanes);
                  if (x !== 0) {
                    var w = m;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; x; ) {
                      var L = 1 << (31 - me(x));
                      ((w.entanglements[1] |= L), (x &= ~L));
                    }
                    (lr(m), (lt & 6) === 0 && ((xs = Ge() + 500), _a(0)));
                  }
                }
                break;
              case 13:
                ((w = rl(m, 2)), w !== null && Rn(w, m, 2), Cs(), nd(m, 2));
            }
          if (((m = id(s)), m === null && Ff(t, r, s, $s, a), m === f)) break;
          f = m;
        }
        f !== null && s.stopPropagation();
      } else Ff(t, r, s, null, a);
    }
  }
  function id(t) {
    return ((t = sc(t)), ld(t));
  }
  var $s = null;
  function ld(t) {
    if ((($s = null), (t = Fi(t)), t !== null)) {
      var r = u(t);
      if (r === null) t = null;
      else {
        var a = r.tag;
        if (a === 13) {
          if (((t = c(r)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          t = null;
        } else r !== t && (t = null);
      }
    }
    return (($s = t), null);
  }
  function Ky(t) {
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
        switch (bt()) {
          case ut:
            return 2;
          case vt:
            return 8;
          case nt:
          case Se:
            return 32;
          case sn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ad = !1,
    ni = null,
    ri = null,
    ii = null,
    Ha = new Map(),
    qa = new Map(),
    li = [],
    $C =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Qy(t, r) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        ni = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ri = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ii = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ha.delete(r.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        qa.delete(r.pointerId);
    }
  }
  function Fa(t, r, a, s, f, m) {
    return t === null || t.nativeEvent !== m
      ? ((t = {
          blockedOn: r,
          domEventName: a,
          eventSystemFlags: s,
          nativeEvent: m,
          targetContainers: [f],
        }),
        r !== null && ((r = Vi(r)), r !== null && Xy(r)),
        t)
      : ((t.eventSystemFlags |= s),
        (r = t.targetContainers),
        f !== null && r.indexOf(f) === -1 && r.push(f),
        t);
  }
  function UC(t, r, a, s, f) {
    switch (r) {
      case 'focusin':
        return ((ni = Fa(ni, t, r, a, s, f)), !0);
      case 'dragenter':
        return ((ri = Fa(ri, t, r, a, s, f)), !0);
      case 'mouseover':
        return ((ii = Fa(ii, t, r, a, s, f)), !0);
      case 'pointerover':
        var m = f.pointerId;
        return (Ha.set(m, Fa(Ha.get(m) || null, t, r, a, s, f)), !0);
      case 'gotpointercapture':
        return ((m = f.pointerId), qa.set(m, Fa(qa.get(m) || null, t, r, a, s, f)), !0);
    }
    return !1;
  }
  function Zy(t) {
    var r = Fi(t.target);
    if (r !== null) {
      var a = u(r);
      if (a !== null) {
        if (((r = a.tag), r === 13)) {
          if (((r = c(a)), r !== null)) {
            ((t.blockedOn = r),
              zx(t.priority, function () {
                if (a.tag === 13) {
                  var s = An();
                  s = Zu(s);
                  var f = rl(a, s);
                  (f !== null && Rn(f, a, s), nd(a, s));
                }
              }));
            return;
          }
        } else if (r === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Us(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var a = id(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var s = new a.constructor(a.type, a);
        ((oc = s), a.target.dispatchEvent(s), (oc = null));
      } else return ((r = Vi(a)), r !== null && Xy(r), (t.blockedOn = a), !1);
      r.shift();
    }
    return !0;
  }
  function Wy(t, r, a) {
    Us(t) && a.delete(r);
  }
  function jC() {
    ((ad = !1),
      ni !== null && Us(ni) && (ni = null),
      ri !== null && Us(ri) && (ri = null),
      ii !== null && Us(ii) && (ii = null),
      Ha.forEach(Wy),
      qa.forEach(Wy));
  }
  function js(t, r) {
    t.blockedOn === r &&
      ((t.blockedOn = null),
      ad || ((ad = !0), e.unstable_scheduleCallback(e.unstable_NormalPriority, jC)));
  }
  var Ps = null;
  function Jy(t) {
    Ps !== t &&
      ((Ps = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Ps === t && (Ps = null);
        for (var r = 0; r < t.length; r += 3) {
          var a = t[r],
            s = t[r + 1],
            f = t[r + 2];
          if (typeof s != 'function') {
            if (ld(s || a) === null) continue;
            break;
          }
          var m = Vi(a);
          m !== null &&
            (t.splice(r, 3),
            (r -= 3),
            lf(m, { pending: !0, data: f, method: a.method, action: s }, s, f));
        }
      }));
  }
  function Va(t) {
    function r(L) {
      return js(L, t);
    }
    (ni !== null && js(ni, t),
      ri !== null && js(ri, t),
      ii !== null && js(ii, t),
      Ha.forEach(r),
      qa.forEach(r));
    for (var a = 0; a < li.length; a++) {
      var s = li[a];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < li.length && ((a = li[0]), a.blockedOn === null); )
      (Zy(a), a.blockedOn === null && li.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (s = 0; s < a.length; s += 3) {
        var f = a[s],
          m = a[s + 1],
          x = f[fn] || null;
        if (typeof m == 'function') x || Jy(a);
        else if (x) {
          var w = null;
          if (m && m.hasAttribute('formAction')) {
            if (((f = m), (x = m[fn] || null))) w = x.formAction;
            else if (ld(f) !== null) continue;
          } else w = x.action;
          (typeof w == 'function' ? (a[s + 1] = w) : (a.splice(s, 3), (s -= 3)), Jy(a));
        }
      }
  }
  function od(t) {
    this._internalRoot = t;
  }
  ((Is.prototype.render = od.prototype.render =
    function (t) {
      var r = this._internalRoot;
      if (r === null) throw Error(l(409));
      var a = r.current,
        s = An();
      Yy(a, s, t, r, null, null);
    }),
    (Is.prototype.unmount = od.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var r = t.containerInfo;
          (Yy(t.current, 2, null, t, null, null), Cs(), (r[qi] = null));
        }
      }));
  function Is(t) {
    this._internalRoot = t;
  }
  Is.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var r = gh();
      t = { blockedOn: null, target: t, priority: r };
      for (var a = 0; a < li.length && r !== 0 && r < li[a].priority; a++);
      (li.splice(a, 0, t), a === 0 && Zy(t));
    }
  };
  var eb = n.version;
  if (eb !== '19.1.1') throw Error(l(527, eb, '19.1.1'));
  K.findDOMNode = function (t) {
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == 'function'
        ? Error(l(188))
        : ((t = Object.keys(t).join(',')), Error(l(268, t)));
    return ((t = h(r)), (t = t !== null ? p(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var PC = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: _,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hs.isDisabled && Hs.supportsFiber)
      try {
        ((ee = Hs.inject(PC)), (le = Hs));
      } catch {}
  }
  return (
    (Ga.createRoot = function (t, r) {
      if (!o(t)) throw Error(l(299));
      var a = !1,
        s = '',
        f = gg,
        m = yg,
        x = bg,
        w = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (s = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (m = r.onCaughtError),
          r.onRecoverableError !== void 0 && (x = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 && (w = r.unstable_transitionCallbacks)),
        (r = Fy(t, 1, !1, null, null, a, s, f, m, x, w, null)),
        (t[qi] = r.current),
        qf(t),
        new od(r)
      );
    }),
    (Ga.hydrateRoot = function (t, r, a) {
      if (!o(t)) throw Error(l(299));
      var s = !1,
        f = '',
        m = gg,
        x = yg,
        w = bg,
        L = null,
        G = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (f = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (m = a.onUncaughtError),
          a.onCaughtError !== void 0 && (x = a.onCaughtError),
          a.onRecoverableError !== void 0 && (w = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (L = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (G = a.formState)),
        (r = Fy(t, 1, !0, r, a ?? null, s, f, m, x, w, L, G)),
        (r.context = Vy(null)),
        (a = r.current),
        (s = An()),
        (s = Zu(s)),
        (f = Hr(s)),
        (f.callback = null),
        qr(a, f, s),
        (a = s),
        (r.current.lanes = a),
        Zl(r, a),
        lr(r),
        (t[qi] = r.current),
        qf(t),
        new Is(r)
      );
    }),
    (Ga.version = '19.1.1'),
    Ga
  );
}
var cb;
function QC() {
  if (cb) return cd.exports;
  cb = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return (e(), (cd.exports = KC()), cd.exports);
}
var ZC = QC();
const WC = Cu(ZC);
function Nr(e, ...n) {
  const i = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    n.forEach((l) => i.searchParams.append('args[]', l)),
    `Minified MUI error #${e}; visit ${i} for the full message.`
  );
}
const pr = '$$material';
function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var l in i) ({}).hasOwnProperty.call(i, l) && (e[l] = i[l]);
          }
          return e;
        }),
    su.apply(null, arguments)
  );
}
function JC(e) {
  if (e.sheet) return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e) return document.styleSheets[n];
}
function e2(e) {
  var n = document.createElement('style');
  return (
    n.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && n.setAttribute('nonce', e.nonce),
    n.appendChild(document.createTextNode('')),
    n.setAttribute('data-s', ''),
    n
  );
}
var t2 = (function () {
    function e(i) {
      var l = this;
      ((this._insertTag = function (o) {
        var u;
        (l.tags.length === 0
          ? l.insertionPoint
            ? (u = l.insertionPoint.nextSibling)
            : l.prepend
              ? (u = l.container.firstChild)
              : (u = l.before)
          : (u = l.tags[l.tags.length - 1].nextSibling),
          l.container.insertBefore(o, u),
          l.tags.push(o));
      }),
        (this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = i.nonce),
        (this.key = i.key),
        (this.container = i.container),
        (this.prepend = i.prepend),
        (this.insertionPoint = i.insertionPoint),
        (this.before = null));
    }
    var n = e.prototype;
    return (
      (n.hydrate = function (l) {
        l.forEach(this._insertTag);
      }),
      (n.insert = function (l) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(e2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = JC(o);
          try {
            u.insertRule(l, u.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(l));
        this.ctr++;
      }),
      (n.flush = function () {
        (this.tags.forEach(function (l) {
          var o;
          return (o = l.parentNode) == null ? void 0 : o.removeChild(l);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  rn = '-ms-',
  uu = '-moz-',
  Qe = '-webkit-',
  d1 = 'comm',
  Cp = 'rule',
  kp = 'decl',
  n2 = '@import',
  p1 = '@keyframes',
  r2 = '@layer',
  i2 = Math.abs,
  ku = String.fromCharCode,
  l2 = Object.assign;
function a2(e, n) {
  return Zt(e, 0) ^ 45
    ? (((((((n << 2) ^ Zt(e, 0)) << 2) ^ Zt(e, 1)) << 2) ^ Zt(e, 2)) << 2) ^ Zt(e, 3)
    : 0;
}
function h1(e) {
  return e.trim();
}
function o2(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function Ze(e, n, i) {
  return e.replace(n, i);
}
function Yd(e, n) {
  return e.indexOf(n);
}
function Zt(e, n) {
  return e.charCodeAt(n) | 0;
}
function po(e, n, i) {
  return e.slice(n, i);
}
function cr(e) {
  return e.length;
}
function wp(e) {
  return e.length;
}
function qs(e, n) {
  return (n.push(e), e);
}
function s2(e, n) {
  return e.map(n).join('');
}
var wu = 1,
  Il = 1,
  m1 = 0,
  yn = 0,
  Ut = 0,
  Vl = '';
function Eu(e, n, i, l, o, u, c) {
  return {
    value: e,
    root: n,
    parent: i,
    type: l,
    props: o,
    children: u,
    line: wu,
    column: Il,
    length: c,
    return: '',
  };
}
function Xa(e, n) {
  return l2(Eu('', null, null, '', null, null, 0), e, { length: -e.length }, n);
}
function u2() {
  return Ut;
}
function c2() {
  return ((Ut = yn > 0 ? Zt(Vl, --yn) : 0), Il--, Ut === 10 && ((Il = 1), wu--), Ut);
}
function zn() {
  return ((Ut = yn < m1 ? Zt(Vl, yn++) : 0), Il++, Ut === 10 && ((Il = 1), wu++), Ut);
}
function hr() {
  return Zt(Vl, yn);
}
function nu() {
  return yn;
}
function xo(e, n) {
  return po(Vl, e, n);
}
function ho(e) {
  switch (e) {
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
function g1(e) {
  return ((wu = Il = 1), (m1 = cr((Vl = e))), (yn = 0), []);
}
function y1(e) {
  return ((Vl = ''), e);
}
function ru(e) {
  return h1(xo(yn - 1, Gd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function f2(e) {
  for (; (Ut = hr()) && Ut < 33; ) zn();
  return ho(e) > 2 || ho(Ut) > 3 ? '' : ' ';
}
function d2(e, n) {
  for (; --n && zn() && !(Ut < 48 || Ut > 102 || (Ut > 57 && Ut < 65) || (Ut > 70 && Ut < 97)); );
  return xo(e, nu() + (n < 6 && hr() == 32 && zn() == 32));
}
function Gd(e) {
  for (; zn(); )
    switch (Ut) {
      case e:
        return yn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gd(Ut);
        break;
      case 40:
        e === 41 && Gd(e);
        break;
      case 92:
        zn();
        break;
    }
  return yn;
}
function p2(e, n) {
  for (; zn() && e + Ut !== 57; ) if (e + Ut === 84 && hr() === 47) break;
  return '/*' + xo(n, yn - 1) + '*' + ku(e === 47 ? e : zn());
}
function h2(e) {
  for (; !ho(hr()); ) zn();
  return xo(e, yn);
}
function m2(e) {
  return y1(iu('', null, null, null, [''], (e = g1(e)), 0, [0], e));
}
function iu(e, n, i, l, o, u, c, d, h) {
  for (
    var p = 0,
      g = 0,
      y = c,
      v = 0,
      b = 0,
      C = 0,
      E = 1,
      O = 1,
      T = 1,
      $ = 0,
      M = '',
      N = o,
      z = u,
      R = l,
      H = M;
    O;

  )
    switch (((C = $), ($ = zn()))) {
      case 40:
        if (C != 108 && Zt(H, y - 1) == 58) {
          Yd((H += Ze(ru($), '&', '&\f')), '&\f') != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        H += ru($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        H += f2(C);
        break;
      case 92:
        H += d2(nu() - 1, 7);
        continue;
      case 47:
        switch (hr()) {
          case 42:
          case 47:
            qs(g2(p2(zn(), nu()), n, i), h);
            break;
          default:
            H += '/';
        }
        break;
      case 123 * E:
        d[p++] = cr(H) * T;
      case 125 * E:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            O = 0;
          case 59 + g:
            (T == -1 && (H = Ze(H, /\f/g, '')),
              b > 0 &&
                cr(H) - y &&
                qs(b > 32 ? db(H + ';', l, i, y - 1) : db(Ze(H, ' ', '') + ';', l, i, y - 2), h));
            break;
          case 59:
            H += ';';
          default:
            if ((qs((R = fb(H, n, i, p, g, o, d, M, (N = []), (z = []), y)), u), $ === 123))
              if (g === 0) iu(H, n, R, R, N, u, y, d, z);
              else
                switch (v === 99 && Zt(H, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    iu(
                      e,
                      R,
                      R,
                      l && qs(fb(e, R, R, 0, 0, o, d, M, o, (N = []), y), z),
                      o,
                      z,
                      y,
                      d,
                      l ? N : z,
                    );
                    break;
                  default:
                    iu(H, R, R, R, [''], z, 0, d, z);
                }
        }
        ((p = g = b = 0), (E = T = 1), (M = H = ''), (y = c));
        break;
      case 58:
        ((y = 1 + cr(H)), (b = C));
      default:
        if (E < 1) {
          if ($ == 123) --E;
          else if ($ == 125 && E++ == 0 && c2() == 125) continue;
        }
        switch (((H += ku($)), $ * E)) {
          case 38:
            T = g > 0 ? 1 : ((H += '\f'), -1);
            break;
          case 44:
            ((d[p++] = (cr(H) - 1) * T), (T = 1));
            break;
          case 64:
            (hr() === 45 && (H += ru(zn())), (v = hr()), (g = y = cr((M = H += h2(nu())))), $++);
            break;
          case 45:
            C === 45 && cr(H) == 2 && (E = 0);
        }
    }
  return u;
}
function fb(e, n, i, l, o, u, c, d, h, p, g) {
  for (var y = o - 1, v = o === 0 ? u : [''], b = wp(v), C = 0, E = 0, O = 0; C < l; ++C)
    for (var T = 0, $ = po(e, y + 1, (y = i2((E = c[C])))), M = e; T < b; ++T)
      (M = h1(E > 0 ? v[T] + ' ' + $ : Ze($, /&\f/g, v[T]))) && (h[O++] = M);
  return Eu(e, n, i, o === 0 ? Cp : d, h, p, g);
}
function g2(e, n, i) {
  return Eu(e, n, i, d1, ku(u2()), po(e, 2, -2), 0);
}
function db(e, n, i, l) {
  return Eu(e, n, i, kp, po(e, 0, l), po(e, l + 1, -1), l);
}
function $l(e, n) {
  for (var i = '', l = wp(e), o = 0; o < l; o++) i += n(e[o], o, e, n) || '';
  return i;
}
function y2(e, n, i, l) {
  switch (e.type) {
    case r2:
      if (e.children.length) break;
    case n2:
    case kp:
      return (e.return = e.return || e.value);
    case d1:
      return '';
    case p1:
      return (e.return = e.value + '{' + $l(e.children, l) + '}');
    case Cp:
      e.value = e.props.join(',');
  }
  return cr((i = $l(e.children, l))) ? (e.return = e.value + '{' + i + '}') : '';
}
function b2(e) {
  var n = wp(e);
  return function (i, l, o, u) {
    for (var c = '', d = 0; d < n; d++) c += e[d](i, l, o, u) || '';
    return c;
  };
}
function v2(e) {
  return function (n) {
    n.root || ((n = n.return) && e(n));
  };
}
function b1(e) {
  var n = Object.create(null);
  return function (i) {
    return (n[i] === void 0 && (n[i] = e(i)), n[i]);
  };
}
var x2 = function (n, i, l) {
    for (var o = 0, u = 0; (o = u), (u = hr()), o === 38 && u === 12 && (i[l] = 1), !ho(u); ) zn();
    return xo(n, yn);
  },
  S2 = function (n, i) {
    var l = -1,
      o = 44;
    do
      switch (ho(o)) {
        case 0:
          (o === 38 && hr() === 12 && (i[l] = 1), (n[l] += x2(yn - 1, i, l)));
          break;
        case 2:
          n[l] += ru(o);
          break;
        case 4:
          if (o === 44) {
            ((n[++l] = hr() === 58 ? '&\f' : ''), (i[l] = n[l].length));
            break;
          }
        default:
          n[l] += ku(o);
      }
    while ((o = zn()));
    return n;
  },
  C2 = function (n, i) {
    return y1(S2(g1(n), i));
  },
  pb = new WeakMap(),
  k2 = function (n) {
    if (!(n.type !== 'rule' || !n.parent || n.length < 1)) {
      for (
        var i = n.value, l = n.parent, o = n.column === l.column && n.line === l.line;
        l.type !== 'rule';

      )
        if (((l = l.parent), !l)) return;
      if (!(n.props.length === 1 && i.charCodeAt(0) !== 58 && !pb.get(l)) && !o) {
        pb.set(n, !0);
        for (var u = [], c = C2(i, u), d = l.props, h = 0, p = 0; h < c.length; h++)
          for (var g = 0; g < d.length; g++, p++)
            n.props[p] = u[h] ? c[h].replace(/&\f/g, d[g]) : d[g] + ' ' + c[h];
      }
    }
  },
  w2 = function (n) {
    if (n.type === 'decl') {
      var i = n.value;
      i.charCodeAt(0) === 108 && i.charCodeAt(2) === 98 && ((n.return = ''), (n.value = ''));
    }
  };
function v1(e, n) {
  switch (a2(e, n)) {
    case 5103:
      return Qe + 'print-' + e + e;
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
      return Qe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Qe + e + uu + e + rn + e + e;
    case 6828:
    case 4268:
      return Qe + e + rn + e + e;
    case 6165:
      return Qe + e + rn + 'flex-' + e + e;
    case 5187:
      return Qe + e + Ze(e, /(\w+).+(:[^]+)/, Qe + 'box-$1$2' + rn + 'flex-$1$2') + e;
    case 5443:
      return Qe + e + rn + 'flex-item-' + Ze(e, /flex-|-self/, '') + e;
    case 4675:
      return Qe + e + rn + 'flex-line-pack' + Ze(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return Qe + e + rn + Ze(e, 'shrink', 'negative') + e;
    case 5292:
      return Qe + e + rn + Ze(e, 'basis', 'preferred-size') + e;
    case 6060:
      return Qe + 'box-' + Ze(e, '-grow', '') + Qe + e + rn + Ze(e, 'grow', 'positive') + e;
    case 4554:
      return Qe + Ze(e, /([^-])(transform)/g, '$1' + Qe + '$2') + e;
    case 6187:
      return Ze(Ze(Ze(e, /(zoom-|grab)/, Qe + '$1'), /(image-set)/, Qe + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return Ze(e, /(image-set\([^]*)/, Qe + '$1$`$1');
    case 4968:
      return (
        Ze(
          Ze(e, /(.+:)(flex-)?(.*)/, Qe + 'box-pack:$3' + rn + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        Qe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ze(e, /(.+)-inline(.+)/, Qe + '$1$2') + e;
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
      if (cr(e) - 1 - n > 6)
        switch (Zt(e, n + 1)) {
          case 109:
            if (Zt(e, n + 4) !== 45) break;
          case 102:
            return (
              Ze(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + Qe + '$2-$3$1' + uu + (Zt(e, n + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Yd(e, 'stretch') ? v1(Ze(e, 'stretch', 'fill-available'), n) + e : e;
        }
      break;
    case 4949:
      if (Zt(e, n + 1) !== 115) break;
    case 6444:
      switch (Zt(e, cr(e) - 3 - (~Yd(e, '!important') && 10))) {
        case 107:
          return Ze(e, ':', ':' + Qe) + e;
        case 101:
          return (
            Ze(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Qe +
                (Zt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Qe +
                '$2$3$1' +
                rn +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (Zt(e, n + 11)) {
        case 114:
          return Qe + e + rn + Ze(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Qe + e + rn + Ze(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Qe + e + rn + Ze(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Qe + e + rn + e + e;
  }
  return e;
}
var E2 = function (n, i, l, o) {
    if (n.length > -1 && !n.return)
      switch (n.type) {
        case kp:
          n.return = v1(n.value, n.length);
          break;
        case p1:
          return $l([Xa(n, { value: Ze(n.value, '@', '@' + Qe) })], o);
        case Cp:
          if (n.length)
            return s2(n.props, function (u) {
              switch (o2(u, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return $l([Xa(n, { props: [Ze(u, /:(read-\w+)/, ':' + uu + '$1')] })], o);
                case '::placeholder':
                  return $l(
                    [
                      Xa(n, { props: [Ze(u, /:(plac\w+)/, ':' + Qe + 'input-$1')] }),
                      Xa(n, { props: [Ze(u, /:(plac\w+)/, ':' + uu + '$1')] }),
                      Xa(n, { props: [Ze(u, /:(plac\w+)/, rn + 'input-$1')] }),
                    ],
                    o,
                  );
              }
              return '';
            });
      }
  },
  T2 = [E2],
  A2 = function (n) {
    var i = n.key;
    if (i === 'css') {
      var l = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(l, function (E) {
        var O = E.getAttribute('data-emotion');
        O.indexOf(' ') !== -1 && (document.head.appendChild(E), E.setAttribute('data-s', ''));
      });
    }
    var o = n.stylisPlugins || T2,
      u = {},
      c,
      d = [];
    ((c = n.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
        function (E) {
          for (var O = E.getAttribute('data-emotion').split(' '), T = 1; T < O.length; T++)
            u[O[T]] = !0;
          d.push(E);
        },
      ));
    var h,
      p = [k2, w2];
    {
      var g,
        y = [
          y2,
          v2(function (E) {
            g.insert(E);
          }),
        ],
        v = b2(p.concat(o, y)),
        b = function (O) {
          return $l(m2(O), v);
        };
      h = function (O, T, $, M) {
        ((g = $), b(O ? O + '{' + T.styles + '}' : T.styles), M && (C.inserted[T.name] = !0));
      };
    }
    var C = {
      key: i,
      sheet: new t2({
        key: i,
        container: c,
        nonce: n.nonce,
        speedy: n.speedy,
        prepend: n.prepend,
        insertionPoint: n.insertionPoint,
      }),
      nonce: n.nonce,
      inserted: u,
      registered: {},
      insert: h,
    };
    return (C.sheet.hydrate(d), C);
  },
  hd = { exports: {} },
  it = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hb;
function R2() {
  if (hb) return it;
  hb = 1;
  var e = typeof Symbol == 'function' && Symbol.for,
    n = e ? Symbol.for('react.element') : 60103,
    i = e ? Symbol.for('react.portal') : 60106,
    l = e ? Symbol.for('react.fragment') : 60107,
    o = e ? Symbol.for('react.strict_mode') : 60108,
    u = e ? Symbol.for('react.profiler') : 60114,
    c = e ? Symbol.for('react.provider') : 60109,
    d = e ? Symbol.for('react.context') : 60110,
    h = e ? Symbol.for('react.async_mode') : 60111,
    p = e ? Symbol.for('react.concurrent_mode') : 60111,
    g = e ? Symbol.for('react.forward_ref') : 60112,
    y = e ? Symbol.for('react.suspense') : 60113,
    v = e ? Symbol.for('react.suspense_list') : 60120,
    b = e ? Symbol.for('react.memo') : 60115,
    C = e ? Symbol.for('react.lazy') : 60116,
    E = e ? Symbol.for('react.block') : 60121,
    O = e ? Symbol.for('react.fundamental') : 60117,
    T = e ? Symbol.for('react.responder') : 60118,
    $ = e ? Symbol.for('react.scope') : 60119;
  function M(z) {
    if (typeof z == 'object' && z !== null) {
      var R = z.$$typeof;
      switch (R) {
        case n:
          switch (((z = z.type), z)) {
            case h:
            case p:
            case l:
            case u:
            case o:
            case y:
              return z;
            default:
              switch (((z = z && z.$$typeof), z)) {
                case d:
                case g:
                case C:
                case b:
                case c:
                  return z;
                default:
                  return R;
              }
          }
        case i:
          return R;
      }
    }
  }
  function N(z) {
    return M(z) === p;
  }
  return (
    (it.AsyncMode = h),
    (it.ConcurrentMode = p),
    (it.ContextConsumer = d),
    (it.ContextProvider = c),
    (it.Element = n),
    (it.ForwardRef = g),
    (it.Fragment = l),
    (it.Lazy = C),
    (it.Memo = b),
    (it.Portal = i),
    (it.Profiler = u),
    (it.StrictMode = o),
    (it.Suspense = y),
    (it.isAsyncMode = function (z) {
      return N(z) || M(z) === h;
    }),
    (it.isConcurrentMode = N),
    (it.isContextConsumer = function (z) {
      return M(z) === d;
    }),
    (it.isContextProvider = function (z) {
      return M(z) === c;
    }),
    (it.isElement = function (z) {
      return typeof z == 'object' && z !== null && z.$$typeof === n;
    }),
    (it.isForwardRef = function (z) {
      return M(z) === g;
    }),
    (it.isFragment = function (z) {
      return M(z) === l;
    }),
    (it.isLazy = function (z) {
      return M(z) === C;
    }),
    (it.isMemo = function (z) {
      return M(z) === b;
    }),
    (it.isPortal = function (z) {
      return M(z) === i;
    }),
    (it.isProfiler = function (z) {
      return M(z) === u;
    }),
    (it.isStrictMode = function (z) {
      return M(z) === o;
    }),
    (it.isSuspense = function (z) {
      return M(z) === y;
    }),
    (it.isValidElementType = function (z) {
      return (
        typeof z == 'string' ||
        typeof z == 'function' ||
        z === l ||
        z === p ||
        z === u ||
        z === o ||
        z === y ||
        z === v ||
        (typeof z == 'object' &&
          z !== null &&
          (z.$$typeof === C ||
            z.$$typeof === b ||
            z.$$typeof === c ||
            z.$$typeof === d ||
            z.$$typeof === g ||
            z.$$typeof === O ||
            z.$$typeof === T ||
            z.$$typeof === $ ||
            z.$$typeof === E))
      );
    }),
    (it.typeOf = M),
    it
  );
}
var mb;
function M2() {
  return (mb || ((mb = 1), (hd.exports = R2())), hd.exports);
}
var md, gb;
function O2() {
  if (gb) return md;
  gb = 1;
  var e = M2(),
    n = {
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
    i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    u = {};
  ((u[e.ForwardRef] = l), (u[e.Memo] = o));
  function c(C) {
    return e.isMemo(C) ? o : u[C.$$typeof] || n;
  }
  var d = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    g = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    v = Object.prototype;
  function b(C, E, O) {
    if (typeof E != 'string') {
      if (v) {
        var T = y(E);
        T && T !== v && b(C, T, O);
      }
      var $ = h(E);
      p && ($ = $.concat(p(E)));
      for (var M = c(C), N = c(E), z = 0; z < $.length; ++z) {
        var R = $[z];
        if (!i[R] && !(O && O[R]) && !(N && N[R]) && !(M && M[R])) {
          var H = g(E, R);
          try {
            d(C, R, H);
          } catch {}
        }
      }
    }
    return C;
  }
  return ((md = b), md);
}
O2();
var z2 = !0;
function x1(e, n, i) {
  var l = '';
  return (
    i.split(' ').forEach(function (o) {
      e[o] !== void 0 ? n.push(e[o] + ';') : o && (l += o + ' ');
    }),
    l
  );
}
var Ep = function (n, i, l) {
    var o = n.key + '-' + i.name;
    (l === !1 || z2 === !1) && n.registered[o] === void 0 && (n.registered[o] = i.styles);
  },
  Tp = function (n, i, l) {
    Ep(n, i, l);
    var o = n.key + '-' + i.name;
    if (n.inserted[i.name] === void 0) {
      var u = i;
      do (n.insert(i === u ? '.' + o : '', u, n.sheet, !0), (u = u.next));
      while (u !== void 0);
    }
  };
function D2(e) {
  for (var n = 0, i, l = 0, o = e.length; o >= 4; ++l, o -= 4)
    ((i =
      (e.charCodeAt(l) & 255) |
      ((e.charCodeAt(++l) & 255) << 8) |
      ((e.charCodeAt(++l) & 255) << 16) |
      ((e.charCodeAt(++l) & 255) << 24)),
      (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
      (i ^= i >>> 24),
      (n =
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)) ^
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16))));
  switch (o) {
    case 3:
      n ^= (e.charCodeAt(l + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(l + 1) & 255) << 8;
    case 1:
      ((n ^= e.charCodeAt(l) & 255), (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)));
  }
  return (
    (n ^= n >>> 13),
    (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
    ((n ^ (n >>> 15)) >>> 0).toString(36)
  );
}
var N2 = {
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
  _2 = /[A-Z]|^ms/g,
  B2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  S1 = function (n) {
    return n.charCodeAt(1) === 45;
  },
  yb = function (n) {
    return n != null && typeof n != 'boolean';
  },
  gd = b1(function (e) {
    return S1(e) ? e : e.replace(_2, '-$&').toLowerCase();
  }),
  bb = function (n, i) {
    switch (n) {
      case 'animation':
      case 'animationName':
        if (typeof i == 'string')
          return i.replace(B2, function (l, o, u) {
            return ((fr = { name: o, styles: u, next: fr }), o);
          });
    }
    return N2[n] !== 1 && !S1(n) && typeof i == 'number' && i !== 0 ? i + 'px' : i;
  };
function mo(e, n, i) {
  if (i == null) return '';
  var l = i;
  if (l.__emotion_styles !== void 0) return l;
  switch (typeof i) {
    case 'boolean':
      return '';
    case 'object': {
      var o = i;
      if (o.anim === 1) return ((fr = { name: o.name, styles: o.styles, next: fr }), o.name);
      var u = i;
      if (u.styles !== void 0) {
        var c = u.next;
        if (c !== void 0)
          for (; c !== void 0; )
            ((fr = { name: c.name, styles: c.styles, next: fr }), (c = c.next));
        var d = u.styles + ';';
        return d;
      }
      return L2(e, n, i);
    }
    case 'function': {
      if (e !== void 0) {
        var h = fr,
          p = i(e);
        return ((fr = h), mo(e, n, p));
      }
      break;
    }
  }
  var g = i;
  if (n == null) return g;
  var y = n[g];
  return y !== void 0 ? y : g;
}
function L2(e, n, i) {
  var l = '';
  if (Array.isArray(i)) for (var o = 0; o < i.length; o++) l += mo(e, n, i[o]) + ';';
  else
    for (var u in i) {
      var c = i[u];
      if (typeof c != 'object') {
        var d = c;
        n != null && n[d] !== void 0
          ? (l += u + '{' + n[d] + '}')
          : yb(d) && (l += gd(u) + ':' + bb(u, d) + ';');
      } else if (Array.isArray(c) && typeof c[0] == 'string' && (n == null || n[c[0]] === void 0))
        for (var h = 0; h < c.length; h++) yb(c[h]) && (l += gd(u) + ':' + bb(u, c[h]) + ';');
      else {
        var p = mo(e, n, c);
        switch (u) {
          case 'animation':
          case 'animationName': {
            l += gd(u) + ':' + p + ';';
            break;
          }
          default:
            l += u + '{' + p + '}';
        }
      }
    }
  return l;
}
var vb = /label:\s*([^\s;{]+)\s*(;|$)/g,
  fr;
function So(e, n, i) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var l = !0,
    o = '';
  fr = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0) ((l = !1), (o += mo(i, n, u)));
  else {
    var c = u;
    o += c[0];
  }
  for (var d = 1; d < e.length; d++)
    if (((o += mo(i, n, e[d])), l)) {
      var h = u;
      o += h[d];
    }
  vb.lastIndex = 0;
  for (var p = '', g; (g = vb.exec(o)) !== null; ) p += '-' + g[1];
  var y = D2(o) + p;
  return { name: y, styles: o, next: fr };
}
var $2 = function (n) {
    return n();
  },
  C1 = Vd.useInsertionEffect ? Vd.useInsertionEffect : !1,
  k1 = C1 || $2,
  xb = C1 || D.useLayoutEffect,
  w1 = D.createContext(typeof HTMLElement < 'u' ? A2({ key: 'css' }) : null);
w1.Provider;
var Ap = function (n) {
    return D.forwardRef(function (i, l) {
      var o = D.useContext(w1);
      return n(i, o, l);
    });
  },
  Co = D.createContext({}),
  Rp = {}.hasOwnProperty,
  Xd = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  U2 = function (n, i) {
    var l = {};
    for (var o in i) Rp.call(i, o) && (l[o] = i[o]);
    return ((l[Xd] = n), l);
  },
  j2 = function (n) {
    var i = n.cache,
      l = n.serialized,
      o = n.isStringTag;
    return (
      Ep(i, l, o),
      k1(function () {
        return Tp(i, l, o);
      }),
      null
    );
  },
  P2 = Ap(function (e, n, i) {
    var l = e.css;
    typeof l == 'string' && n.registered[l] !== void 0 && (l = n.registered[l]);
    var o = e[Xd],
      u = [l],
      c = '';
    typeof e.className == 'string'
      ? (c = x1(n.registered, u, e.className))
      : e.className != null && (c = e.className + ' ');
    var d = So(u, void 0, D.useContext(Co));
    c += n.key + '-' + d.name;
    var h = {};
    for (var p in e) Rp.call(e, p) && p !== 'css' && p !== Xd && (h[p] = e[p]);
    return (
      (h.className = c),
      i && (h.ref = i),
      D.createElement(
        D.Fragment,
        null,
        D.createElement(j2, { cache: n, serialized: d, isStringTag: typeof o == 'string' }),
        D.createElement(o, h),
      )
    );
  }),
  I2 = P2,
  Sb = function (n, i) {
    var l = arguments;
    if (i == null || !Rp.call(i, 'css')) return D.createElement.apply(void 0, l);
    var o = l.length,
      u = new Array(o);
    ((u[0] = I2), (u[1] = U2(n, i)));
    for (var c = 2; c < o; c++) u[c] = l[c];
    return D.createElement.apply(null, u);
  };
(function (e) {
  var n;
  n || (n = e.JSX || (e.JSX = {}));
})(Sb || (Sb = {}));
var H2 = Ap(function (e, n) {
  var i = e.styles,
    l = So([i], void 0, D.useContext(Co)),
    o = D.useRef();
  return (
    xb(
      function () {
        var u = n.key + '-global',
          c = new n.sheet.constructor({
            key: u,
            nonce: n.sheet.nonce,
            container: n.sheet.container,
            speedy: n.sheet.isSpeedy,
          }),
          d = !1,
          h = document.querySelector('style[data-emotion="' + u + ' ' + l.name + '"]');
        return (
          n.sheet.tags.length && (c.before = n.sheet.tags[0]),
          h !== null && ((d = !0), h.setAttribute('data-emotion', u), c.hydrate([h])),
          (o.current = [c, d]),
          function () {
            c.flush();
          }
        );
      },
      [n],
    ),
    xb(
      function () {
        var u = o.current,
          c = u[0],
          d = u[1];
        if (d) {
          u[1] = !1;
          return;
        }
        if ((l.next !== void 0 && Tp(n, l.next, !0), c.tags.length)) {
          var h = c.tags[c.tags.length - 1].nextElementSibling;
          ((c.before = h), c.flush());
        }
        n.insert('', l, c, !1);
      },
      [n, l.name],
    ),
    null
  );
});
function Mp() {
  for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
  return So(n);
}
function ko() {
  var e = Mp.apply(void 0, arguments),
    n = 'animation-' + e.name;
  return {
    name: n,
    styles: '@keyframes ' + n + '{' + e.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var q2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  F2 = b1(function (e) {
    return (
      q2.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  V2 = F2,
  Y2 = function (n) {
    return n !== 'theme';
  },
  Cb = function (n) {
    return typeof n == 'string' && n.charCodeAt(0) > 96 ? V2 : Y2;
  },
  kb = function (n, i, l) {
    var o;
    if (i) {
      var u = i.shouldForwardProp;
      o =
        n.__emotion_forwardProp && u
          ? function (c) {
              return n.__emotion_forwardProp(c) && u(c);
            }
          : u;
    }
    return (typeof o != 'function' && l && (o = n.__emotion_forwardProp), o);
  },
  G2 = function (n) {
    var i = n.cache,
      l = n.serialized,
      o = n.isStringTag;
    return (
      Ep(i, l, o),
      k1(function () {
        return Tp(i, l, o);
      }),
      null
    );
  },
  X2 = function e(n, i) {
    var l = n.__emotion_real === n,
      o = (l && n.__emotion_base) || n,
      u,
      c;
    i !== void 0 && ((u = i.label), (c = i.target));
    var d = kb(n, i, l),
      h = d || Cb(o),
      p = !h('as');
    return function () {
      var g = arguments,
        y = l && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
      if ((u !== void 0 && y.push('label:' + u + ';'), g[0] == null || g[0].raw === void 0))
        y.push.apply(y, g);
      else {
        var v = g[0];
        y.push(v[0]);
        for (var b = g.length, C = 1; C < b; C++) y.push(g[C], v[C]);
      }
      var E = Ap(function (O, T, $) {
        var M = (p && O.as) || o,
          N = '',
          z = [],
          R = O;
        if (O.theme == null) {
          R = {};
          for (var H in O) R[H] = O[H];
          R.theme = D.useContext(Co);
        }
        typeof O.className == 'string'
          ? (N = x1(T.registered, z, O.className))
          : O.className != null && (N = O.className + ' ');
        var Y = So(y.concat(z), T.registered, R);
        ((N += T.key + '-' + Y.name), c !== void 0 && (N += ' ' + c));
        var Q = p && d === void 0 ? Cb(M) : h,
          B = {};
        for (var q in O) (p && q === 'as') || (Q(q) && (B[q] = O[q]));
        return (
          (B.className = N),
          $ && (B.ref = $),
          D.createElement(
            D.Fragment,
            null,
            D.createElement(G2, { cache: T, serialized: Y, isStringTag: typeof M == 'string' }),
            D.createElement(M, B),
          )
        );
      });
      return (
        (E.displayName =
          u !== void 0
            ? u
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (E.defaultProps = n.defaultProps),
        (E.__emotion_real = E),
        (E.__emotion_base = o),
        (E.__emotion_styles = y),
        (E.__emotion_forwardProp = d),
        Object.defineProperty(E, 'toString', {
          value: function () {
            return '.' + c;
          },
        }),
        (E.withComponent = function (O, T) {
          var $ = e(O, su({}, i, T, { shouldForwardProp: kb(E, T, !0) }));
          return $.apply(void 0, y);
        }),
        E
      );
    };
  },
  K2 = [
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
  Kd = X2.bind(null);
K2.forEach(function (e) {
  Kd[e] = Kd(e);
});
function Q2(e) {
  return e == null || Object.keys(e).length === 0;
}
function E1(e) {
  const { styles: n, defaultTheme: i = {} } = e,
    l = typeof n == 'function' ? (o) => n(Q2(o) ? i : o) : n;
  return j.jsx(H2, { styles: l });
}
function T1(e, n) {
  return Kd(e, n);
}
function Z2(e, n) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = n(e.__emotion_styles));
}
const wb = [];
function ci(e) {
  return ((wb[0] = e), So(wb));
}
var yd = { exports: {} },
  pt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eb;
function W2() {
  if (Eb) return pt;
  Eb = 1;
  var e = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    p = Symbol.for('react.suspense_list'),
    g = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    v = Symbol.for('react.view_transition'),
    b = Symbol.for('react.client.reference');
  function C(E) {
    if (typeof E == 'object' && E !== null) {
      var O = E.$$typeof;
      switch (O) {
        case e:
          switch (((E = E.type), E)) {
            case i:
            case o:
            case l:
            case h:
            case p:
            case v:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case c:
                case d:
                case y:
                case g:
                  return E;
                case u:
                  return E;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  return (
    (pt.ContextConsumer = u),
    (pt.ContextProvider = c),
    (pt.Element = e),
    (pt.ForwardRef = d),
    (pt.Fragment = i),
    (pt.Lazy = y),
    (pt.Memo = g),
    (pt.Portal = n),
    (pt.Profiler = o),
    (pt.StrictMode = l),
    (pt.Suspense = h),
    (pt.SuspenseList = p),
    (pt.isContextConsumer = function (E) {
      return C(E) === u;
    }),
    (pt.isContextProvider = function (E) {
      return C(E) === c;
    }),
    (pt.isElement = function (E) {
      return typeof E == 'object' && E !== null && E.$$typeof === e;
    }),
    (pt.isForwardRef = function (E) {
      return C(E) === d;
    }),
    (pt.isFragment = function (E) {
      return C(E) === i;
    }),
    (pt.isLazy = function (E) {
      return C(E) === y;
    }),
    (pt.isMemo = function (E) {
      return C(E) === g;
    }),
    (pt.isPortal = function (E) {
      return C(E) === n;
    }),
    (pt.isProfiler = function (E) {
      return C(E) === o;
    }),
    (pt.isStrictMode = function (E) {
      return C(E) === l;
    }),
    (pt.isSuspense = function (E) {
      return C(E) === h;
    }),
    (pt.isSuspenseList = function (E) {
      return C(E) === p;
    }),
    (pt.isValidElementType = function (E) {
      return (
        typeof E == 'string' ||
        typeof E == 'function' ||
        E === i ||
        E === o ||
        E === l ||
        E === h ||
        E === p ||
        (typeof E == 'object' &&
          E !== null &&
          (E.$$typeof === y ||
            E.$$typeof === g ||
            E.$$typeof === c ||
            E.$$typeof === u ||
            E.$$typeof === d ||
            E.$$typeof === b ||
            E.getModuleId !== void 0))
      );
    }),
    (pt.typeOf = C),
    pt
  );
}
var Tb;
function J2() {
  return (Tb || ((Tb = 1), (yd.exports = W2())), yd.exports);
}
var A1 = J2();
function dr(e) {
  if (typeof e != 'object' || e === null) return !1;
  const n = Object.getPrototypeOf(e);
  return (
    (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function R1(e) {
  if (D.isValidElement(e) || A1.isValidElementType(e) || !dr(e)) return e;
  const n = {};
  return (
    Object.keys(e).forEach((i) => {
      n[i] = R1(e[i]);
    }),
    n
  );
}
function an(e, n, i = { clone: !0 }) {
  const l = i.clone ? { ...e } : e;
  return (
    dr(e) &&
      dr(n) &&
      Object.keys(n).forEach((o) => {
        D.isValidElement(n[o]) || A1.isValidElementType(n[o])
          ? (l[o] = n[o])
          : dr(n[o]) && Object.prototype.hasOwnProperty.call(e, o) && dr(e[o])
            ? (l[o] = an(e[o], n[o], i))
            : i.clone
              ? (l[o] = dr(n[o]) ? R1(n[o]) : n[o])
              : (l[o] = n[o]);
      }),
    l
  );
}
const ek = (e) => {
  const n = Object.keys(e).map((i) => ({ key: i, val: e[i] })) || [];
  return (n.sort((i, l) => i.val - l.val), n.reduce((i, l) => ({ ...i, [l.key]: l.val }), {}));
};
function tk(e) {
  const {
      values: n = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: i = 'px',
      step: l = 5,
      ...o
    } = e,
    u = ek(n),
    c = Object.keys(u);
  function d(v) {
    return `@media (min-width:${typeof n[v] == 'number' ? n[v] : v}${i})`;
  }
  function h(v) {
    return `@media (max-width:${(typeof n[v] == 'number' ? n[v] : v) - l / 100}${i})`;
  }
  function p(v, b) {
    const C = c.indexOf(b);
    return `@media (min-width:${typeof n[v] == 'number' ? n[v] : v}${i}) and (max-width:${(C !== -1 && typeof n[c[C]] == 'number' ? n[c[C]] : b) - l / 100}${i})`;
  }
  function g(v) {
    return c.indexOf(v) + 1 < c.length ? p(v, c[c.indexOf(v) + 1]) : d(v);
  }
  function y(v) {
    const b = c.indexOf(v);
    return b === 0
      ? d(c[1])
      : b === c.length - 1
        ? h(c[b])
        : p(v, c[c.indexOf(v) + 1]).replace('@media', '@media not all and');
  }
  return { keys: c, values: u, up: d, down: h, between: p, only: g, not: y, unit: i, ...o };
}
function Ab(e, n) {
  if (!e.containerQueries) return n;
  const i = Object.keys(n)
    .filter((l) => l.startsWith('@container'))
    .sort((l, o) => {
      const u = /min-width:\s*([0-9.]+)/;
      return +(l.match(u)?.[1] || 0) - +(o.match(u)?.[1] || 0);
    });
  return i.length
    ? i.reduce(
        (l, o) => {
          const u = n[o];
          return (delete l[o], (l[o] = u), l);
        },
        { ...n },
      )
    : n;
}
function nk(e, n) {
  return (
    n === '@' || (n.startsWith('@') && (e.some((i) => n.startsWith(`@${i}`)) || !!n.match(/^@\d/)))
  );
}
function rk(e, n) {
  const i = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i) return null;
  const [, l, o] = i,
    u = Number.isNaN(+l) ? l || 0 : +l;
  return e.containerQueries(o).up(u);
}
function ik(e) {
  const n = (u, c) => u.replace('@media', c ? `@container ${c}` : '@container');
  function i(u, c) {
    ((u.up = (...d) => n(e.breakpoints.up(...d), c)),
      (u.down = (...d) => n(e.breakpoints.down(...d), c)),
      (u.between = (...d) => n(e.breakpoints.between(...d), c)),
      (u.only = (...d) => n(e.breakpoints.only(...d), c)),
      (u.not = (...d) => {
        const h = n(e.breakpoints.not(...d), c);
        return h.includes('not all and')
          ? h
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : h;
      }));
  }
  const l = {},
    o = (u) => (i(l, u), l);
  return (i(o), { ...e, containerQueries: o });
}
const lk = { borderRadius: 4 };
function lo(e, n) {
  return n ? an(e, n, { clone: !1 }) : e;
}
const Tu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Rb = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${Tu[e]}px)` },
  ak = {
    containerQueries: (e) => ({
      up: (n) => {
        let i = typeof n == 'number' ? n : Tu[n] || n;
        return (
          typeof i == 'number' && (i = `${i}px`),
          e ? `@container ${e} (min-width:${i})` : `@container (min-width:${i})`
        );
      },
    }),
  };
function _r(e, n, i) {
  const l = e.theme || {};
  if (Array.isArray(n)) {
    const u = l.breakpoints || Rb;
    return n.reduce((c, d, h) => ((c[u.up(u.keys[h])] = i(n[h])), c), {});
  }
  if (typeof n == 'object') {
    const u = l.breakpoints || Rb;
    return Object.keys(n).reduce((c, d) => {
      if (nk(u.keys, d)) {
        const h = rk(l.containerQueries ? l : ak, d);
        h && (c[h] = i(n[d], d));
      } else if (Object.keys(u.values || Tu).includes(d)) {
        const h = u.up(d);
        c[h] = i(n[d], d);
      } else {
        const h = d;
        c[h] = n[h];
      }
      return c;
    }, {});
  }
  return i(n);
}
function ok(e = {}) {
  return (
    e.keys?.reduce((i, l) => {
      const o = e.up(l);
      return ((i[o] = {}), i);
    }, {}) || {}
  );
}
function Mb(e, n) {
  return e.reduce((i, l) => {
    const o = i[l];
    return ((!o || Object.keys(o).length === 0) && delete i[l], i);
  }, n);
}
function de(e) {
  if (typeof e != 'string') throw new Error(Nr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Au(e, n, i = !0) {
  if (!n || typeof n != 'string') return null;
  if (e && e.vars && i) {
    const l = `vars.${n}`.split('.').reduce((o, u) => (o && o[u] ? o[u] : null), e);
    if (l != null) return l;
  }
  return n.split('.').reduce((l, o) => (l && l[o] != null ? l[o] : null), e);
}
function cu(e, n, i, l = i) {
  let o;
  return (
    typeof e == 'function' ? (o = e(i)) : Array.isArray(e) ? (o = e[i] || l) : (o = Au(e, i) || l),
    n && (o = n(o, l, e)),
    o
  );
}
function Nt(e) {
  const { prop: n, cssProperty: i = e.prop, themeKey: l, transform: o } = e,
    u = (c) => {
      if (c[n] == null) return null;
      const d = c[n],
        h = c.theme,
        p = Au(h, l) || {};
      return _r(c, d, (y) => {
        let v = cu(p, o, y);
        return (
          y === v &&
            typeof y == 'string' &&
            (v = cu(p, o, `${n}${y === 'default' ? '' : de(y)}`, y)),
          i === !1 ? v : { [i]: v }
        );
      });
    };
  return ((u.propTypes = {}), (u.filterProps = [n]), u);
}
function sk(e) {
  const n = {};
  return (i) => (n[i] === void 0 && (n[i] = e(i)), n[i]);
}
const uk = { m: 'margin', p: 'padding' },
  ck = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  Ob = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  fk = sk((e) => {
    if (e.length > 2)
      if (Ob[e]) e = Ob[e];
      else return [e];
    const [n, i] = e.split(''),
      l = uk[n],
      o = ck[i] || '';
    return Array.isArray(o) ? o.map((u) => l + u) : [l + o];
  }),
  Op = [
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
  zp = [
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
[...Op, ...zp];
function wo(e, n, i, l) {
  const o = Au(e, n, !0) ?? i;
  return typeof o == 'number' || typeof o == 'string'
    ? (u) =>
        typeof u == 'string'
          ? u
          : typeof o == 'string'
            ? o.startsWith('var(') && u === 0
              ? 0
              : o.startsWith('var(') && u === 1
                ? o
                : `calc(${u} * ${o})`
            : o * u
    : Array.isArray(o)
      ? (u) => {
          if (typeof u == 'string') return u;
          const c = Math.abs(u),
            d = o[c];
          return u >= 0
            ? d
            : typeof d == 'number'
              ? -d
              : typeof d == 'string' && d.startsWith('var(')
                ? `calc(-1 * ${d})`
                : `-${d}`;
        }
      : typeof o == 'function'
        ? o
        : () => {};
}
function Dp(e) {
  return wo(e, 'spacing', 8);
}
function Eo(e, n) {
  return typeof n == 'string' || n == null ? n : e(n);
}
function dk(e, n) {
  return (i) => e.reduce((l, o) => ((l[o] = Eo(n, i)), l), {});
}
function pk(e, n, i, l) {
  if (!n.includes(i)) return null;
  const o = fk(i),
    u = dk(o, l),
    c = e[i];
  return _r(e, c, u);
}
function M1(e, n) {
  const i = Dp(e.theme);
  return Object.keys(e)
    .map((l) => pk(e, n, l, i))
    .reduce(lo, {});
}
function Mt(e) {
  return M1(e, Op);
}
Mt.propTypes = {};
Mt.filterProps = Op;
function Ot(e) {
  return M1(e, zp);
}
Ot.propTypes = {};
Ot.filterProps = zp;
function O1(e = 8, n = Dp({ spacing: e })) {
  if (e.mui) return e;
  const i = (...l) =>
    (l.length === 0 ? [1] : l)
      .map((u) => {
        const c = n(u);
        return typeof c == 'number' ? `${c}px` : c;
      })
      .join(' ');
  return ((i.mui = !0), i);
}
function Ru(...e) {
  const n = e.reduce(
      (l, o) => (
        o.filterProps.forEach((u) => {
          l[u] = o;
        }),
        l
      ),
      {},
    ),
    i = (l) => Object.keys(l).reduce((o, u) => (n[u] ? lo(o, n[u](l)) : o), {});
  return ((i.propTypes = {}), (i.filterProps = e.reduce((l, o) => l.concat(o.filterProps), [])), i);
}
function qn(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function Vn(e, n) {
  return Nt({ prop: e, themeKey: 'borders', transform: n });
}
const hk = Vn('border', qn),
  mk = Vn('borderTop', qn),
  gk = Vn('borderRight', qn),
  yk = Vn('borderBottom', qn),
  bk = Vn('borderLeft', qn),
  vk = Vn('borderColor'),
  xk = Vn('borderTopColor'),
  Sk = Vn('borderRightColor'),
  Ck = Vn('borderBottomColor'),
  kk = Vn('borderLeftColor'),
  wk = Vn('outline', qn),
  Ek = Vn('outlineColor'),
  Mu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const n = wo(e.theme, 'shape.borderRadius', 4),
        i = (l) => ({ borderRadius: Eo(n, l) });
      return _r(e, e.borderRadius, i);
    }
    return null;
  };
Mu.propTypes = {};
Mu.filterProps = ['borderRadius'];
Ru(hk, mk, gk, yk, bk, vk, xk, Sk, Ck, kk, Mu, wk, Ek);
const Ou = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = wo(e.theme, 'spacing', 8),
      i = (l) => ({ gap: Eo(n, l) });
    return _r(e, e.gap, i);
  }
  return null;
};
Ou.propTypes = {};
Ou.filterProps = ['gap'];
const zu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = wo(e.theme, 'spacing', 8),
      i = (l) => ({ columnGap: Eo(n, l) });
    return _r(e, e.columnGap, i);
  }
  return null;
};
zu.propTypes = {};
zu.filterProps = ['columnGap'];
const Du = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = wo(e.theme, 'spacing', 8),
      i = (l) => ({ rowGap: Eo(n, l) });
    return _r(e, e.rowGap, i);
  }
  return null;
};
Du.propTypes = {};
Du.filterProps = ['rowGap'];
const Tk = Nt({ prop: 'gridColumn' }),
  Ak = Nt({ prop: 'gridRow' }),
  Rk = Nt({ prop: 'gridAutoFlow' }),
  Mk = Nt({ prop: 'gridAutoColumns' }),
  Ok = Nt({ prop: 'gridAutoRows' }),
  zk = Nt({ prop: 'gridTemplateColumns' }),
  Dk = Nt({ prop: 'gridTemplateRows' }),
  Nk = Nt({ prop: 'gridTemplateAreas' }),
  _k = Nt({ prop: 'gridArea' });
Ru(Ou, zu, Du, Tk, Ak, Rk, Mk, Ok, zk, Dk, Nk, _k);
function Ul(e, n) {
  return n === 'grey' ? n : e;
}
const Bk = Nt({ prop: 'color', themeKey: 'palette', transform: Ul }),
  Lk = Nt({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: Ul }),
  $k = Nt({ prop: 'backgroundColor', themeKey: 'palette', transform: Ul });
Ru(Bk, Lk, $k);
function On(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Uk = Nt({ prop: 'width', transform: On }),
  Np = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const n = (i) => {
        const l = e.theme?.breakpoints?.values?.[i] || Tu[i];
        return l
          ? e.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${l}${e.theme.breakpoints.unit}` }
            : { maxWidth: l }
          : { maxWidth: On(i) };
      };
      return _r(e, e.maxWidth, n);
    }
    return null;
  };
Np.filterProps = ['maxWidth'];
const jk = Nt({ prop: 'minWidth', transform: On }),
  Pk = Nt({ prop: 'height', transform: On }),
  Ik = Nt({ prop: 'maxHeight', transform: On }),
  Hk = Nt({ prop: 'minHeight', transform: On });
Nt({ prop: 'size', cssProperty: 'width', transform: On });
Nt({ prop: 'size', cssProperty: 'height', transform: On });
const qk = Nt({ prop: 'boxSizing' });
Ru(Uk, Np, jk, Pk, Ik, Hk, qk);
const To = {
  border: { themeKey: 'borders', transform: qn },
  borderTop: { themeKey: 'borders', transform: qn },
  borderRight: { themeKey: 'borders', transform: qn },
  borderBottom: { themeKey: 'borders', transform: qn },
  borderLeft: { themeKey: 'borders', transform: qn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: qn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Mu },
  color: { themeKey: 'palette', transform: Ul },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: Ul },
  backgroundColor: { themeKey: 'palette', transform: Ul },
  p: { style: Ot },
  pt: { style: Ot },
  pr: { style: Ot },
  pb: { style: Ot },
  pl: { style: Ot },
  px: { style: Ot },
  py: { style: Ot },
  padding: { style: Ot },
  paddingTop: { style: Ot },
  paddingRight: { style: Ot },
  paddingBottom: { style: Ot },
  paddingLeft: { style: Ot },
  paddingX: { style: Ot },
  paddingY: { style: Ot },
  paddingInline: { style: Ot },
  paddingInlineStart: { style: Ot },
  paddingInlineEnd: { style: Ot },
  paddingBlock: { style: Ot },
  paddingBlockStart: { style: Ot },
  paddingBlockEnd: { style: Ot },
  m: { style: Mt },
  mt: { style: Mt },
  mr: { style: Mt },
  mb: { style: Mt },
  ml: { style: Mt },
  mx: { style: Mt },
  my: { style: Mt },
  margin: { style: Mt },
  marginTop: { style: Mt },
  marginRight: { style: Mt },
  marginBottom: { style: Mt },
  marginLeft: { style: Mt },
  marginX: { style: Mt },
  marginY: { style: Mt },
  marginInline: { style: Mt },
  marginInlineStart: { style: Mt },
  marginInlineEnd: { style: Mt },
  marginBlock: { style: Mt },
  marginBlockStart: { style: Mt },
  marginBlockEnd: { style: Mt },
  displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
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
  gap: { style: Ou },
  rowGap: { style: Du },
  columnGap: { style: zu },
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
  width: { transform: On },
  maxWidth: { style: Np },
  minWidth: { transform: On },
  height: { transform: On },
  maxHeight: { transform: On },
  minHeight: { transform: On },
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
function Fk(...e) {
  const n = e.reduce((l, o) => l.concat(Object.keys(o)), []),
    i = new Set(n);
  return e.every((l) => i.size === Object.keys(l).length);
}
function Vk(e, n) {
  return typeof e == 'function' ? e(n) : e;
}
function Yk() {
  function e(i, l, o, u) {
    const c = { [i]: l, theme: o },
      d = u[i];
    if (!d) return { [i]: l };
    const { cssProperty: h = i, themeKey: p, transform: g, style: y } = d;
    if (l == null) return null;
    if (p === 'typography' && l === 'inherit') return { [i]: l };
    const v = Au(o, p) || {};
    return y
      ? y(c)
      : _r(c, l, (C) => {
          let E = cu(v, g, C);
          return (
            C === E &&
              typeof C == 'string' &&
              (E = cu(v, g, `${i}${C === 'default' ? '' : de(C)}`, C)),
            h === !1 ? E : { [h]: E }
          );
        });
  }
  function n(i) {
    const { sx: l, theme: o = {}, nested: u } = i || {};
    if (!l) return null;
    const c = o.unstable_sxConfig ?? To;
    function d(h) {
      let p = h;
      if (typeof h == 'function') p = h(o);
      else if (typeof h != 'object') return h;
      if (!p) return null;
      const g = ok(o.breakpoints),
        y = Object.keys(g);
      let v = g;
      return (
        Object.keys(p).forEach((b) => {
          const C = Vk(p[b], o);
          if (C != null)
            if (typeof C == 'object')
              if (c[b]) v = lo(v, e(b, C, o, c));
              else {
                const E = _r({ theme: o }, C, (O) => ({ [b]: O }));
                Fk(E, C) ? (v[b] = n({ sx: C, theme: o, nested: !0 })) : (v = lo(v, E));
              }
            else v = lo(v, e(b, C, o, c));
        }),
        !u && o.modularCssLayers ? { '@layer sx': Ab(o, Mb(y, v)) } : Ab(o, Mb(y, v))
      );
    }
    return Array.isArray(l) ? l.map(d) : d(l);
  }
  return n;
}
const fi = Yk();
fi.filterProps = ['sx'];
function Gk(e, n) {
  const i = this;
  if (i.vars) {
    if (!i.colorSchemes?.[e] || typeof i.getColorSchemeSelector != 'function') return {};
    let l = i.getColorSchemeSelector(e);
    return l === '&'
      ? n
      : ((l.includes('data-') || l.includes('.')) && (l = `*:where(${l.replace(/\s*&$/, '')}) &`),
        { [l]: n });
  }
  return i.palette.mode === e ? n : {};
}
function Nu(e = {}, ...n) {
  const { breakpoints: i = {}, palette: l = {}, spacing: o, shape: u = {}, ...c } = e,
    d = tk(i),
    h = O1(o);
  let p = an(
    {
      breakpoints: d,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...l },
      spacing: h,
      shape: { ...lk, ...u },
    },
    c,
  );
  return (
    (p = ik(p)),
    (p.applyStyles = Gk),
    (p = n.reduce((g, y) => an(g, y), p)),
    (p.unstable_sxConfig = { ...To, ...c?.unstable_sxConfig }),
    (p.unstable_sx = function (y) {
      return fi({ sx: y, theme: this });
    }),
    p
  );
}
function Xk(e) {
  return Object.keys(e).length === 0;
}
function _p(e = null) {
  const n = D.useContext(Co);
  return !n || Xk(n) ? e : n;
}
const Kk = Nu();
function _u(e = Kk) {
  return _p(e);
}
function bd(e) {
  const n = ci(e);
  return e !== n && n.styles
    ? (n.styles.match(/^@layer\s+[^{]*$/) || (n.styles = `@layer global{${n.styles}}`), n)
    : e;
}
function z1({ styles: e, themeId: n, defaultTheme: i = {} }) {
  const l = _u(i),
    o = (n && l[n]) || l;
  let u = typeof e == 'function' ? e(o) : e;
  return (
    o.modularCssLayers &&
      (Array.isArray(u) ? (u = u.map((c) => bd(typeof c == 'function' ? c(o) : c))) : (u = bd(u))),
    j.jsx(E1, { styles: u })
  );
}
const Qk = (e) => {
  const n = { systemProps: {}, otherProps: {} },
    i = e?.theme?.unstable_sxConfig ?? To;
  return (
    Object.keys(e).forEach((l) => {
      i[l] ? (n.systemProps[l] = e[l]) : (n.otherProps[l] = e[l]);
    }),
    n
  );
};
function D1(e) {
  const { sx: n, ...i } = e,
    { systemProps: l, otherProps: o } = Qk(i);
  let u;
  return (
    Array.isArray(n)
      ? (u = [l, ...n])
      : typeof n == 'function'
        ? (u = (...c) => {
            const d = n(...c);
            return dr(d) ? { ...l, ...d } : l;
          })
        : (u = { ...l, ...n }),
    { ...o, sx: u }
  );
}
const zb = (e) => e,
  Zk = () => {
    let e = zb;
    return {
      configure(n) {
        e = n;
      },
      generate(n) {
        return e(n);
      },
      reset() {
        e = zb;
      },
    };
  },
  N1 = Zk();
function _1(e) {
  var n,
    i,
    l = '';
  if (typeof e == 'string' || typeof e == 'number') l += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (n = 0; n < o; n++) e[n] && (i = _1(e[n])) && (l && (l += ' '), (l += i));
    } else for (i in e) e[i] && (l && (l += ' '), (l += i));
  return l;
}
function Ae() {
  for (var e, n, i = 0, l = '', o = arguments.length; i < o; i++)
    (e = arguments[i]) && (n = _1(e)) && (l && (l += ' '), (l += n));
  return l;
}
function Wk(e = {}) {
  const {
      themeId: n,
      defaultTheme: i,
      defaultClassName: l = 'MuiBox-root',
      generateClassName: o,
    } = e,
    u = T1('div', { shouldForwardProp: (d) => d !== 'theme' && d !== 'sx' && d !== 'as' })(fi);
  return D.forwardRef(function (h, p) {
    const g = _u(i),
      { className: y, component: v = 'div', ...b } = D1(h);
    return j.jsx(u, {
      as: v,
      ref: p,
      className: Ae(y, o ? o(l) : l),
      theme: (n && g[n]) || g,
      ...b,
    });
  });
}
const Jk = {
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
function We(e, n, i = 'Mui') {
  const l = Jk[n];
  return l ? `${i}-${l}` : `${N1.generate(e)}-${n}`;
}
function Je(e, n, i = 'Mui') {
  const l = {};
  return (
    n.forEach((o) => {
      l[o] = We(e, o, i);
    }),
    l
  );
}
function B1(e) {
  const { variants: n, ...i } = e,
    l = { variants: n, style: ci(i), isProcessed: !0 };
  return (
    l.style === i ||
      (n &&
        n.forEach((o) => {
          typeof o.style != 'function' && (o.style = ci(o.style));
        })),
    l
  );
}
const ew = Nu();
function vd(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
function Ui(e, n) {
  return (
    n &&
      e &&
      typeof e == 'object' &&
      e.styles &&
      !e.styles.startsWith('@layer') &&
      (e.styles = `@layer ${n}{${String(e.styles)}}`),
    e
  );
}
function tw(e) {
  return e ? (n, i) => i[e] : null;
}
function nw(e, n, i) {
  e.theme = iw(e.theme) ? i : e.theme[n] || e.theme;
}
function lu(e, n, i) {
  const l = typeof n == 'function' ? n(e) : n;
  if (Array.isArray(l)) return l.flatMap((o) => lu(e, o, i));
  if (Array.isArray(l?.variants)) {
    let o;
    if (l.isProcessed) o = i ? Ui(l.style, i) : l.style;
    else {
      const { variants: u, ...c } = l;
      o = i ? Ui(ci(c), i) : c;
    }
    return L1(e, l.variants, [o], i);
  }
  return l?.isProcessed ? (i ? Ui(ci(l.style), i) : l.style) : i ? Ui(ci(l), i) : l;
}
function L1(e, n, i = [], l = void 0) {
  let o;
  e: for (let u = 0; u < n.length; u += 1) {
    const c = n[u];
    if (typeof c.props == 'function') {
      if (((o ??= { ...e, ...e.ownerState, ownerState: e.ownerState }), !c.props(o))) continue;
    } else
      for (const d in c.props)
        if (e[d] !== c.props[d] && e.ownerState?.[d] !== c.props[d]) continue e;
    typeof c.style == 'function'
      ? ((o ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
        i.push(l ? Ui(ci(c.style(o)), l) : c.style(o)))
      : i.push(l ? Ui(ci(c.style), l) : c.style);
  }
  return i;
}
function $1(e = {}) {
  const {
    themeId: n,
    defaultTheme: i = ew,
    rootShouldForwardProp: l = vd,
    slotShouldForwardProp: o = vd,
  } = e;
  function u(d) {
    nw(d, n, i);
  }
  return (d, h = {}) => {
    Z2(d, (R) => R.filter((H) => H !== fi));
    const {
        name: p,
        slot: g,
        skipVariantsResolver: y,
        skipSx: v,
        overridesResolver: b = tw(aw(g)),
        ...C
      } = h,
      E = (p && p.startsWith('Mui')) || g ? 'components' : 'custom',
      O = y !== void 0 ? y : (g && g !== 'Root' && g !== 'root') || !1,
      T = v || !1;
    let $ = vd;
    g === 'Root' || g === 'root' ? ($ = l) : g ? ($ = o) : lw(d) && ($ = void 0);
    const M = T1(d, { shouldForwardProp: $, label: rw(), ...C }),
      N = (R) => {
        if (R.__emotion_real === R) return R;
        if (typeof R == 'function')
          return function (Y) {
            return lu(Y, R, Y.theme.modularCssLayers ? E : void 0);
          };
        if (dr(R)) {
          const H = B1(R);
          return function (Q) {
            return H.variants
              ? lu(Q, H, Q.theme.modularCssLayers ? E : void 0)
              : Q.theme.modularCssLayers
                ? Ui(H.style, E)
                : H.style;
          };
        }
        return R;
      },
      z = (...R) => {
        const H = [],
          Y = R.map(N),
          Q = [];
        if (
          (H.push(u),
          p &&
            b &&
            Q.push(function (X) {
              const I = X.theme.components?.[p]?.styleOverrides;
              if (!I) return null;
              const _ = {};
              for (const K in I) _[K] = lu(X, I[K], X.theme.modularCssLayers ? 'theme' : void 0);
              return b(X, _);
            }),
          p &&
            !O &&
            Q.push(function (X) {
              const I = X.theme?.components?.[p]?.variants;
              return I ? L1(X, I, [], X.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          T || Q.push(fi),
          Array.isArray(Y[0]))
        ) {
          const k = Y.shift(),
            X = new Array(H.length).fill(''),
            F = new Array(Q.length).fill('');
          let I;
          ((I = [...X, ...k, ...F]), (I.raw = [...X, ...k.raw, ...F]), H.unshift(I));
        }
        const B = [...H, ...Y, ...Q],
          q = M(...B);
        return (d.muiName && (q.muiName = d.muiName), q);
      };
    return (M.withConfig && (z.withConfig = M.withConfig), z);
  };
}
function rw(e, n) {
  return void 0;
}
function iw(e) {
  for (const n in e) return !1;
  return !0;
}
function lw(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function aw(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ow = $1();
function go(e, n, i = !1) {
  const l = { ...n };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const u = o;
      if (u === 'components' || u === 'slots') l[u] = { ...e[u], ...l[u] };
      else if (u === 'componentsProps' || u === 'slotProps') {
        const c = e[u],
          d = n[u];
        if (!d) l[u] = c || {};
        else if (!c) l[u] = d;
        else {
          l[u] = { ...d };
          for (const h in c)
            if (Object.prototype.hasOwnProperty.call(c, h)) {
              const p = h;
              l[u][p] = go(c[p], d[p], i);
            }
        }
      } else
        u === 'className' && i && n.className
          ? (l.className = Ae(e?.className, n?.className))
          : u === 'style' && i && n.style
            ? (l.style = { ...e?.style, ...n?.style })
            : l[u] === void 0 && (l[u] = e[u]);
    }
  return l;
}
function sw(e) {
  const { theme: n, name: i, props: l } = e;
  return !n || !n.components || !n.components[i] || !n.components[i].defaultProps
    ? l
    : go(n.components[i].defaultProps, l);
}
function uw({ props: e, name: n, defaultTheme: i, themeId: l }) {
  let o = _u(i);
  return (l && (o = o[l] || o), sw({ theme: o, name: n, props: e }));
}
const Br = typeof window < 'u' ? D.useLayoutEffect : D.useEffect;
function cw(e, n = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, i));
}
function Bp(e, n = 0, i = 1) {
  return cw(e, n, i);
}
function fw(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let i = e.match(n);
  return (
    i && i[0].length === 1 && (i = i.map((l) => l + l)),
    i
      ? `rgb${i.length === 4 ? 'a' : ''}(${i.map((l, o) => (o < 3 ? parseInt(l, 16) : Math.round((parseInt(l, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function di(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return di(fw(e));
  const n = e.indexOf('('),
    i = e.substring(0, n);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(i)) throw new Error(Nr(9, e));
  let l = e.substring(n + 1, e.length - 1),
    o;
  if (i === 'color') {
    if (
      ((l = l.split(' ')),
      (o = l.shift()),
      l.length === 4 && l[3].charAt(0) === '/' && (l[3] = l[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(o))
    )
      throw new Error(Nr(10, o));
  } else l = l.split(',');
  return ((l = l.map((u) => parseFloat(u))), { type: i, values: l, colorSpace: o });
}
const dw = (e) => {
    const n = di(e);
    return n.values
      .slice(0, 3)
      .map((i, l) => (n.type.includes('hsl') && l !== 0 ? `${i}%` : i))
      .join(' ');
  },
  to = (e, n) => {
    try {
      return dw(e);
    } catch {
      return e;
    }
  };
function Bu(e) {
  const { type: n, colorSpace: i } = e;
  let { values: l } = e;
  return (
    n.includes('rgb')
      ? (l = l.map((o, u) => (u < 3 ? parseInt(o, 10) : o)))
      : n.includes('hsl') && ((l[1] = `${l[1]}%`), (l[2] = `${l[2]}%`)),
    n.includes('color') ? (l = `${i} ${l.join(' ')}`) : (l = `${l.join(', ')}`),
    `${n}(${l})`
  );
}
function U1(e) {
  e = di(e);
  const { values: n } = e,
    i = n[0],
    l = n[1] / 100,
    o = n[2] / 100,
    u = l * Math.min(o, 1 - o),
    c = (p, g = (p + i / 30) % 12) => o - u * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let d = 'rgb';
  const h = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return (e.type === 'hsla' && ((d += 'a'), h.push(n[3])), Bu({ type: d, values: h }));
}
function Qd(e) {
  e = di(e);
  let n = e.type === 'hsl' || e.type === 'hsla' ? di(U1(e)).values : e.values;
  return (
    (n = n.map(
      (i) => (
        e.type !== 'color' && (i /= 255),
        i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3))
  );
}
function pw(e, n) {
  const i = Qd(e),
    l = Qd(n);
  return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
}
function fu(e, n) {
  return (
    (e = di(e)),
    (n = Bp(n)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${n}`) : (e.values[3] = n),
    Bu(e)
  );
}
function zi(e, n, i) {
  try {
    return fu(e, n);
  } catch {
    return e;
  }
}
function Lu(e, n) {
  if (((e = di(e)), (n = Bp(n)), e.type.includes('hsl'))) e.values[2] *= 1 - n;
  else if (e.type.includes('rgb') || e.type.includes('color'))
    for (let i = 0; i < 3; i += 1) e.values[i] *= 1 - n;
  return Bu(e);
}
function ot(e, n, i) {
  try {
    return Lu(e, n);
  } catch {
    return e;
  }
}
function $u(e, n) {
  if (((e = di(e)), (n = Bp(n)), e.type.includes('hsl'))) e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes('rgb'))
    for (let i = 0; i < 3; i += 1) e.values[i] += (255 - e.values[i]) * n;
  else if (e.type.includes('color'))
    for (let i = 0; i < 3; i += 1) e.values[i] += (1 - e.values[i]) * n;
  return Bu(e);
}
function st(e, n, i) {
  try {
    return $u(e, n);
  } catch {
    return e;
  }
}
function hw(e, n = 0.15) {
  return Qd(e) > 0.5 ? Lu(e, n) : $u(e, n);
}
function Fs(e, n, i) {
  try {
    return hw(e, n);
  } catch {
    return e;
  }
}
const j1 = D.createContext(null);
function Lp() {
  return D.useContext(j1);
}
const mw = typeof Symbol == 'function' && Symbol.for,
  gw = mw ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function yw(e, n) {
  return typeof n == 'function' ? n(e) : { ...e, ...n };
}
function bw(e) {
  const { children: n, theme: i } = e,
    l = Lp(),
    o = D.useMemo(() => {
      const u = l === null ? { ...i } : yw(l, i);
      return (u != null && (u[gw] = l !== null), u);
    }, [i, l]);
  return j.jsx(j1.Provider, { value: o, children: n });
}
const P1 = D.createContext();
function vw({ value: e, ...n }) {
  return j.jsx(P1.Provider, { value: e ?? !0, ...n });
}
const xw = () => D.useContext(P1) ?? !1,
  I1 = D.createContext(void 0);
function Sw({ value: e, children: n }) {
  return j.jsx(I1.Provider, { value: e, children: n });
}
function Cw(e) {
  const { theme: n, name: i, props: l } = e;
  if (!n || !n.components || !n.components[i]) return l;
  const o = n.components[i];
  return o.defaultProps
    ? go(o.defaultProps, l, n.components.mergeClassNameAndStyle)
    : !o.styleOverrides && !o.variants
      ? go(o, l, n.components.mergeClassNameAndStyle)
      : l;
}
function kw({ props: e, name: n }) {
  const i = D.useContext(I1);
  return Cw({ props: e, name: n, theme: { components: i } });
}
let Db = 0;
function ww(e) {
  const [n, i] = D.useState(e),
    l = e || n;
  return (
    D.useEffect(() => {
      n == null && ((Db += 1), i(`mui-${Db}`));
    }, [n]),
    l
  );
}
const Ew = { ...Vd },
  Nb = Ew.useId;
function Ao(e) {
  if (Nb !== void 0) {
    const n = Nb();
    return e ?? n;
  }
  return ww(e);
}
function Tw(e) {
  const n = _p(),
    i = Ao() || '',
    { modularCssLayers: l } = e;
  let o = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx';
  return (
    !l || n !== null
      ? (o = '')
      : typeof l == 'string'
        ? (o = l.replace(/mui(?!\.)/g, o))
        : (o = `@layer ${o};`),
    Br(() => {
      const u = document.querySelector('head');
      if (!u) return;
      const c = u.firstChild;
      if (o) {
        if (
          c &&
          c.hasAttribute?.('data-mui-layer-order') &&
          c.getAttribute('data-mui-layer-order') === i
        )
          return;
        const d = document.createElement('style');
        (d.setAttribute('data-mui-layer-order', i), (d.textContent = o), u.prepend(d));
      } else u.querySelector(`style[data-mui-layer-order="${i}"]`)?.remove();
    }, [o, i]),
    o ? j.jsx(z1, { styles: o }) : null
  );
}
const _b = {};
function Bb(e, n, i, l = !1) {
  return D.useMemo(() => {
    const o = (e && n[e]) || n;
    if (typeof i == 'function') {
      const u = i(o),
        c = e ? { ...n, [e]: u } : u;
      return l ? () => c : c;
    }
    return e ? { ...n, [e]: i } : { ...n, ...i };
  }, [e, n, i, l]);
}
function H1(e) {
  const { children: n, theme: i, themeId: l } = e,
    o = _p(_b),
    u = Lp() || _b,
    c = Bb(l, o, i),
    d = Bb(l, u, i, !0),
    h = (l ? c[l] : c).direction === 'rtl',
    p = Tw(c);
  return j.jsx(bw, {
    theme: d,
    children: j.jsx(Co.Provider, {
      value: c,
      children: j.jsx(vw, {
        value: h,
        children: j.jsxs(Sw, { value: l ? c[l].components : c.components, children: [p, n] }),
      }),
    }),
  });
}
const Lb = { theme: void 0 };
function Aw(e) {
  let n, i;
  return function (o) {
    let u = n;
    return (
      (u === void 0 || o.theme !== i) &&
        ((Lb.theme = o.theme), (u = B1(e(Lb))), (n = u), (i = o.theme)),
      u
    );
  };
}
const $p = 'mode',
  Up = 'color-scheme',
  Rw = 'data-color-scheme';
function Mw(e) {
  const {
    defaultMode: n = 'system',
    defaultLightColorScheme: i = 'light',
    defaultDarkColorScheme: l = 'dark',
    modeStorageKey: o = $p,
    colorSchemeStorageKey: u = Up,
    attribute: c = Rw,
    colorSchemeNode: d = 'document.documentElement',
    nonce: h,
  } = e || {};
  let p = '',
    g = c;
  if ((c === 'class' && (g = '.%s'), c === 'data' && (g = '[data-%s]'), g.startsWith('.'))) {
    const v = g.substring(1);
    p += `${d}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${d}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const y = g.match(/\[([^[\]]+)\]/);
  if (y) {
    const [v, b] = y[1].split('=');
    (b ||
      (p += `${d}.removeAttribute('${v}'.replace('%s', light));
      ${d}.removeAttribute('${v}'.replace('%s', dark));`),
      (p += `
      ${d}.setAttribute('${v}'.replace('%s', colorScheme), ${b ? `${b}.replace('%s', colorScheme)` : '""'});`));
  } else p += `${d}.setAttribute('${g}', colorScheme);`;
  return j.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > 'u' ? h : '',
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${n}';
  const dark = localStorage.getItem('${u}-dark') || '${l}';
  const light = localStorage.getItem('${u}-light') || '${i}';
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
    ${p}
  }
} catch(e){}})();`,
      },
    },
    'mui-color-scheme-init',
  );
}
function Ow() {}
const zw = ({ key: e, storageWindow: n }) => (
  !n && typeof window < 'u' && (n = window),
  {
    get(i) {
      if (typeof window > 'u') return;
      if (!n) return i;
      let l;
      try {
        l = n.localStorage.getItem(e);
      } catch {}
      return l || i;
    },
    set: (i) => {
      if (n)
        try {
          n.localStorage.setItem(e, i);
        } catch {}
    },
    subscribe: (i) => {
      if (!n) return Ow;
      const l = (o) => {
        const u = o.newValue;
        o.key === e && i(u);
      };
      return (
        n.addEventListener('storage', l),
        () => {
          n.removeEventListener('storage', l);
        }
      );
    },
  }
);
function xd() {}
function $b(e) {
  if (typeof window < 'u' && typeof window.matchMedia == 'function' && e === 'system')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function q1(e, n) {
  if (e.mode === 'light' || (e.mode === 'system' && e.systemMode === 'light')) return n('light');
  if (e.mode === 'dark' || (e.mode === 'system' && e.systemMode === 'dark')) return n('dark');
}
function Dw(e) {
  return q1(e, (n) => {
    if (n === 'light') return e.lightColorScheme;
    if (n === 'dark') return e.darkColorScheme;
  });
}
function Nw(e) {
  const {
      defaultMode: n = 'light',
      defaultLightColorScheme: i,
      defaultDarkColorScheme: l,
      supportedColorSchemes: o = [],
      modeStorageKey: u = $p,
      colorSchemeStorageKey: c = Up,
      storageWindow: d = typeof window > 'u' ? void 0 : window,
      storageManager: h = zw,
      noSsr: p = !1,
    } = e,
    g = o.join(','),
    y = o.length > 1,
    v = D.useMemo(() => h?.({ key: u, storageWindow: d }), [h, u, d]),
    b = D.useMemo(() => h?.({ key: `${c}-light`, storageWindow: d }), [h, c, d]),
    C = D.useMemo(() => h?.({ key: `${c}-dark`, storageWindow: d }), [h, c, d]),
    [E, O] = D.useState(() => {
      const Y = v?.get(n) || n,
        Q = b?.get(i) || i,
        B = C?.get(l) || l;
      return { mode: Y, systemMode: $b(Y), lightColorScheme: Q, darkColorScheme: B };
    }),
    [T, $] = D.useState(p || !y);
  D.useEffect(() => {
    $(!0);
  }, []);
  const M = Dw(E),
    N = D.useCallback(
      (Y) => {
        O((Q) => {
          if (Y === Q.mode) return Q;
          const B = Y ?? n;
          return (v?.set(B), { ...Q, mode: B, systemMode: $b(B) });
        });
      },
      [v, n],
    ),
    z = D.useCallback(
      (Y) => {
        Y
          ? typeof Y == 'string'
            ? Y && !g.includes(Y)
              ? console.error(`\`${Y}\` does not exist in \`theme.colorSchemes\`.`)
              : O((Q) => {
                  const B = { ...Q };
                  return (
                    q1(Q, (q) => {
                      (q === 'light' && (b?.set(Y), (B.lightColorScheme = Y)),
                        q === 'dark' && (C?.set(Y), (B.darkColorScheme = Y)));
                    }),
                    B
                  );
                })
            : O((Q) => {
                const B = { ...Q },
                  q = Y.light === null ? i : Y.light,
                  k = Y.dark === null ? l : Y.dark;
                return (
                  q &&
                    (g.includes(q)
                      ? ((B.lightColorScheme = q), b?.set(q))
                      : console.error(`\`${q}\` does not exist in \`theme.colorSchemes\`.`)),
                  k &&
                    (g.includes(k)
                      ? ((B.darkColorScheme = k), C?.set(k))
                      : console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`)),
                  B
                );
              })
          : O((Q) => (b?.set(i), C?.set(l), { ...Q, lightColorScheme: i, darkColorScheme: l }));
      },
      [g, b, C, i, l],
    ),
    R = D.useCallback(
      (Y) => {
        E.mode === 'system' &&
          O((Q) => {
            const B = Y?.matches ? 'dark' : 'light';
            return Q.systemMode === B ? Q : { ...Q, systemMode: B };
          });
      },
      [E.mode],
    ),
    H = D.useRef(R);
  return (
    (H.current = R),
    D.useEffect(() => {
      if (typeof window.matchMedia != 'function' || !y) return;
      const Y = (...B) => H.current(...B),
        Q = window.matchMedia('(prefers-color-scheme: dark)');
      return (
        Q.addListener(Y),
        Y(Q),
        () => {
          Q.removeListener(Y);
        }
      );
    }, [y]),
    D.useEffect(() => {
      if (y) {
        const Y =
            v?.subscribe((q) => {
              (!q || ['light', 'dark', 'system'].includes(q)) && N(q || n);
            }) || xd,
          Q =
            b?.subscribe((q) => {
              (!q || g.match(q)) && z({ light: q });
            }) || xd,
          B =
            C?.subscribe((q) => {
              (!q || g.match(q)) && z({ dark: q });
            }) || xd;
        return () => {
          (Y(), Q(), B());
        };
      }
    }, [z, N, g, n, d, y, v, b, C]),
    {
      ...E,
      mode: T ? E.mode : void 0,
      systemMode: T ? E.systemMode : void 0,
      colorScheme: T ? M : void 0,
      setMode: N,
      setColorScheme: z,
    }
  );
}
const _w =
  '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function Bw(e) {
  const {
      themeId: n,
      theme: i = {},
      modeStorageKey: l = $p,
      colorSchemeStorageKey: o = Up,
      disableTransitionOnChange: u = !1,
      defaultColorScheme: c,
      resolveTheme: d,
    } = e,
    h = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    p = D.createContext(void 0),
    g = () => D.useContext(p) || h,
    y = {},
    v = {};
  function b(T) {
    const {
        children: $,
        theme: M,
        modeStorageKey: N = l,
        colorSchemeStorageKey: z = o,
        disableTransitionOnChange: R = u,
        storageManager: H,
        storageWindow: Y = typeof window > 'u' ? void 0 : window,
        documentNode: Q = typeof document > 'u' ? void 0 : document,
        colorSchemeNode: B = typeof document > 'u' ? void 0 : document.documentElement,
        disableNestedContext: q = !1,
        disableStyleSheetGeneration: k = !1,
        defaultMode: X = 'system',
        forceThemeRerender: F = !1,
        noSsr: I,
      } = T,
      _ = D.useRef(!1),
      K = Lp(),
      ue = D.useContext(p),
      re = !!ue && !q,
      S = D.useMemo(() => M || (typeof i == 'function' ? i() : i), [M]),
      J = S[n],
      oe = J || S,
      { colorSchemes: A = y, components: ce = v, cssVarPrefix: he } = oe,
      te = Object.keys(A)
        .filter((ee) => !!A[ee])
        .join(','),
      ye = D.useMemo(() => te.split(','), [te]),
      ve = typeof c == 'string' ? c : c.light,
      Re = typeof c == 'string' ? c : c.dark,
      Ce = A[ve] && A[Re] ? X : A[oe.defaultColorScheme]?.palette?.mode || oe.palette?.mode,
      {
        mode: Oe,
        setMode: je,
        systemMode: Ct,
        lightColorScheme: De,
        darkColorScheme: Ye,
        colorScheme: _t,
        setColorScheme: Ge,
      } = Nw({
        supportedColorSchemes: ye,
        defaultLightColorScheme: ve,
        defaultDarkColorScheme: Re,
        modeStorageKey: N,
        colorSchemeStorageKey: z,
        defaultMode: Ce,
        storageManager: H,
        storageWindow: Y,
        noSsr: I,
      });
    let bt = Oe,
      ut = _t;
    re && ((bt = ue.mode), (ut = ue.colorScheme));
    let vt = ut || oe.defaultColorScheme;
    oe.vars && !F && (vt = oe.defaultColorScheme);
    const nt = D.useMemo(() => {
        const ee = oe.generateThemeVars?.() || oe.vars,
          le = { ...oe, components: ce, colorSchemes: A, cssVarPrefix: he, vars: ee };
        if ((typeof le.generateSpacing == 'function' && (le.spacing = le.generateSpacing()), vt)) {
          const pe = A[vt];
          pe &&
            typeof pe == 'object' &&
            Object.keys(pe).forEach((me) => {
              pe[me] && typeof pe[me] == 'object'
                ? (le[me] = { ...le[me], ...pe[me] })
                : (le[me] = pe[me]);
            });
        }
        return d ? d(le) : le;
      }, [oe, vt, ce, A, he]),
      Se = oe.colorSchemeSelector;
    (Br(() => {
      if (ut && B && Se && Se !== 'media') {
        const ee = Se;
        let le = Se;
        if (
          (ee === 'class' && (le = '.%s'),
          ee === 'data' && (le = '[data-%s]'),
          ee?.startsWith('data-') && !ee.includes('%s') && (le = `[${ee}="%s"]`),
          le.startsWith('.'))
        )
          (B.classList.remove(...ye.map((pe) => le.substring(1).replace('%s', pe))),
            B.classList.add(le.substring(1).replace('%s', ut)));
        else {
          const pe = le.replace('%s', ut).match(/\[([^\]]+)\]/);
          if (pe) {
            const [me, Ne] = pe[1].split('=');
            (Ne ||
              ye.forEach((Le) => {
                B.removeAttribute(me.replace(ut, Le));
              }),
              B.setAttribute(me, Ne ? Ne.replace(/"|'/g, '') : ''));
          } else B.setAttribute(le, ut);
        }
      }
    }, [ut, Se, B, ye]),
      D.useEffect(() => {
        let ee;
        if (R && _.current && Q) {
          const le = Q.createElement('style');
          (le.appendChild(Q.createTextNode(_w)),
            Q.head.appendChild(le),
            window.getComputedStyle(Q.body),
            (ee = setTimeout(() => {
              Q.head.removeChild(le);
            }, 1)));
        }
        return () => {
          clearTimeout(ee);
        };
      }, [ut, R, Q]),
      D.useEffect(
        () => (
          (_.current = !0),
          () => {
            _.current = !1;
          }
        ),
        [],
      ));
    const sn = D.useMemo(
      () => ({
        allColorSchemes: ye,
        colorScheme: ut,
        darkColorScheme: Ye,
        lightColorScheme: De,
        mode: bt,
        setColorScheme: Ge,
        setMode: je,
        systemMode: Ct,
      }),
      [ye, ut, Ye, De, bt, Ge, je, Ct, nt.colorSchemeSelector],
    );
    let kt = !0;
    (k || oe.cssVariables === !1 || (re && K?.cssVarPrefix === he)) && (kt = !1);
    const xn = j.jsxs(D.Fragment, {
      children: [
        j.jsx(H1, { themeId: J ? n : void 0, theme: nt, children: $ }),
        kt && j.jsx(E1, { styles: nt.generateStyleSheets?.() || [] }),
      ],
    });
    return re ? xn : j.jsx(p.Provider, { value: sn, children: xn });
  }
  const C = typeof c == 'string' ? c : c.light,
    E = typeof c == 'string' ? c : c.dark;
  return {
    CssVarsProvider: b,
    useColorScheme: g,
    getInitColorSchemeScript: (T) =>
      Mw({
        colorSchemeStorageKey: o,
        defaultLightColorScheme: C,
        defaultDarkColorScheme: E,
        modeStorageKey: l,
        ...T,
      }),
  };
}
function Lw(e = '') {
  function n(...l) {
    if (!l.length) return '';
    const o = l[0];
    return typeof o == 'string' &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ''}${o}${n(...l.slice(1))})`
      : `, ${o}`;
  }
  return (l, ...o) => `var(--${e ? `${e}-` : ''}${l}${n(...o)})`;
}
const Ub = (e, n, i, l = []) => {
    let o = e;
    n.forEach((u, c) => {
      c === n.length - 1
        ? Array.isArray(o)
          ? (o[Number(u)] = i)
          : o && typeof o == 'object' && (o[u] = i)
        : o && typeof o == 'object' && (o[u] || (o[u] = l.includes(u) ? [] : {}), (o = o[u]));
    });
  },
  $w = (e, n, i) => {
    function l(o, u = [], c = []) {
      Object.entries(o).forEach(([d, h]) => {
        (!i || (i && !i([...u, d]))) &&
          h != null &&
          (typeof h == 'object' && Object.keys(h).length > 0
            ? l(h, [...u, d], Array.isArray(h) ? [...c, d] : c)
            : n([...u, d], h, c));
      });
    }
    l(e);
  },
  Uw = (e, n) =>
    typeof n == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((l) => e.includes(l)) ||
        e[e.length - 1].toLowerCase().includes('opacity')
        ? n
        : `${n}px`
      : n;
function Sd(e, n) {
  const { prefix: i, shouldSkipGeneratingVar: l } = n || {},
    o = {},
    u = {},
    c = {};
  return (
    $w(
      e,
      (d, h, p) => {
        if ((typeof h == 'string' || typeof h == 'number') && (!l || !l(d, h))) {
          const g = `--${i ? `${i}-` : ''}${d.join('-')}`,
            y = Uw(d, h);
          (Object.assign(o, { [g]: y }), Ub(u, d, `var(${g})`, p), Ub(c, d, `var(${g}, ${y})`, p));
        }
      },
      (d) => d[0] === 'vars',
    ),
    { css: o, vars: u, varsWithDefaults: c }
  );
}
function jw(e, n = {}) {
  const {
      getSelector: i = T,
      disableCssColorScheme: l,
      colorSchemeSelector: o,
      enableContrastVars: u,
    } = n,
    { colorSchemes: c = {}, components: d, defaultColorScheme: h = 'light', ...p } = e,
    { vars: g, css: y, varsWithDefaults: v } = Sd(p, n);
  let b = v;
  const C = {},
    { [h]: E, ...O } = c;
  if (
    (Object.entries(O || {}).forEach(([N, z]) => {
      const { vars: R, css: H, varsWithDefaults: Y } = Sd(z, n);
      ((b = an(b, Y)), (C[N] = { css: H, vars: R }));
    }),
    E)
  ) {
    const { css: N, vars: z, varsWithDefaults: R } = Sd(E, n);
    ((b = an(b, R)), (C[h] = { css: N, vars: z }));
  }
  function T(N, z) {
    let R = o;
    if (
      (o === 'class' && (R = '.%s'),
      o === 'data' && (R = '[data-%s]'),
      o?.startsWith('data-') && !o.includes('%s') && (R = `[${o}="%s"]`),
      N)
    ) {
      if (R === 'media')
        return e.defaultColorScheme === N
          ? ':root'
          : { [`@media (prefers-color-scheme: ${c[N]?.palette?.mode || N})`]: { ':root': z } };
      if (R)
        return e.defaultColorScheme === N
          ? `:root, ${R.replace('%s', String(N))}`
          : R.replace('%s', String(N));
    }
    return ':root';
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let N = { ...g };
      return (
        Object.entries(C).forEach(([, { vars: z }]) => {
          N = an(N, z);
        }),
        N
      );
    },
    generateStyleSheets: () => {
      const N = [],
        z = e.defaultColorScheme || 'light';
      function R(Q, B) {
        Object.keys(B).length && N.push(typeof Q == 'string' ? { [Q]: { ...B } } : Q);
      }
      R(i(void 0, { ...y }), y);
      const { [z]: H, ...Y } = C;
      if (H) {
        const { css: Q } = H,
          B = c[z]?.palette?.mode,
          q = !l && B ? { colorScheme: B, ...Q } : { ...Q };
        R(i(z, { ...q }), q);
      }
      return (
        Object.entries(Y).forEach(([Q, { css: B }]) => {
          const q = c[Q]?.palette?.mode,
            k = !l && q ? { colorScheme: q, ...B } : { ...B };
          R(i(Q, { ...k }), k);
        }),
        u &&
          N.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        N
      );
    },
  };
}
function Pw(e) {
  return function (i) {
    return e === 'media'
      ? `@media (prefers-color-scheme: ${i})`
      : e
        ? e.startsWith('data-') && !e.includes('%s')
          ? `[${e}="${i}"] &`
          : e === 'class'
            ? `.${i} &`
            : e === 'data'
              ? `[data-${i}] &`
              : `${e.replace('%s', i)} &`
        : '&';
  };
}
function et(e, n, i = void 0) {
  const l = {};
  for (const o in e) {
    const u = e[o];
    let c = '',
      d = !0;
    for (let h = 0; h < u.length; h += 1) {
      const p = u[h];
      p && ((c += (d === !0 ? '' : ' ') + n(p)), (d = !1), i && i[p] && (c += ' ' + i[p]));
    }
    l[o] = c;
  }
  return l;
}
const Iw = Nu(),
  Hw = ow('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        n[`maxWidth${de(String(i.maxWidth))}`],
        i.fixed && n.fixed,
        i.disableGutters && n.disableGutters,
      ];
    },
  }),
  qw = (e) => uw({ props: e, name: 'MuiContainer', defaultTheme: Iw }),
  Fw = (e, n) => {
    const i = (h) => We(n, h),
      { classes: l, fixed: o, disableGutters: u, maxWidth: c } = e,
      d = { root: ['root', c && `maxWidth${de(String(c))}`, o && 'fixed', u && 'disableGutters'] };
    return et(d, i, l);
  };
function Vw(e = {}) {
  const {
      createStyledComponent: n = Hw,
      useThemeProps: i = qw,
      componentName: l = 'MuiContainer',
    } = e,
    o = n(
      ({ theme: c, ownerState: d }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!d.disableGutters && {
          paddingLeft: c.spacing(2),
          paddingRight: c.spacing(2),
          [c.breakpoints.up('sm')]: { paddingLeft: c.spacing(3), paddingRight: c.spacing(3) },
        }),
      }),
      ({ theme: c, ownerState: d }) =>
        d.fixed &&
        Object.keys(c.breakpoints.values).reduce((h, p) => {
          const g = p,
            y = c.breakpoints.values[g];
          return (
            y !== 0 && (h[c.breakpoints.up(g)] = { maxWidth: `${y}${c.breakpoints.unit}` }),
            h
          );
        }, {}),
      ({ theme: c, ownerState: d }) => ({
        ...(d.maxWidth === 'xs' && {
          [c.breakpoints.up('xs')]: { maxWidth: Math.max(c.breakpoints.values.xs, 444) },
        }),
        ...(d.maxWidth &&
          d.maxWidth !== 'xs' && {
            [c.breakpoints.up(d.maxWidth)]: {
              maxWidth: `${c.breakpoints.values[d.maxWidth]}${c.breakpoints.unit}`,
            },
          }),
      }),
    );
  return D.forwardRef(function (d, h) {
    const p = i(d),
      {
        className: g,
        component: y = 'div',
        disableGutters: v = !1,
        fixed: b = !1,
        maxWidth: C = 'lg',
        classes: E,
        ...O
      } = p,
      T = { ...p, component: y, disableGutters: v, fixed: b, maxWidth: C },
      $ = Fw(T, l);
    return j.jsx(o, { as: y, ownerState: T, className: Ae($.root, g), ref: h, ...O });
  });
}
function Cd(e, n) {
  return (
    D.isValidElement(e) && n.indexOf(e.type.muiName ?? e.type?._payload?.value?.muiName) !== -1
  );
}
const yo = { black: '#000', white: '#fff' },
  Yw = {
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
  Rl = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  Ml = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  Ka = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  Ol = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  zl = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  Dl = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  };
function F1() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: yo.white, default: yo.white },
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
const V1 = F1();
function Y1() {
  return {
    text: {
      primary: yo.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: yo.white,
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
const Zd = Y1();
function jb(e, n, i, l) {
  const o = l.light || l,
    u = l.dark || l * 1.5;
  e[n] ||
    (e.hasOwnProperty(i)
      ? (e[n] = e[i])
      : n === 'light'
        ? (e.light = $u(e.main, o))
        : n === 'dark' && (e.dark = Lu(e.main, u)));
}
function Pb(e, n, i, l, o) {
  const u = o.light || o,
    c = o.dark || o * 1.5;
  n[i] ||
    (n.hasOwnProperty(l)
      ? (n[i] = n[l])
      : i === 'light'
        ? (n.light = `color-mix(in ${e}, ${n.main}, #fff ${(u * 100).toFixed(0)}%)`)
        : i === 'dark' &&
          (n.dark = `color-mix(in ${e}, ${n.main}, #000 ${(c * 100).toFixed(0)}%)`));
}
function Gw(e = 'light') {
  return e === 'dark'
    ? { main: Ol[200], light: Ol[50], dark: Ol[400] }
    : { main: Ol[700], light: Ol[400], dark: Ol[800] };
}
function Xw(e = 'light') {
  return e === 'dark'
    ? { main: Rl[200], light: Rl[50], dark: Rl[400] }
    : { main: Rl[500], light: Rl[300], dark: Rl[700] };
}
function Kw(e = 'light') {
  return e === 'dark'
    ? { main: Ml[500], light: Ml[300], dark: Ml[700] }
    : { main: Ml[700], light: Ml[400], dark: Ml[800] };
}
function Qw(e = 'light') {
  return e === 'dark'
    ? { main: zl[400], light: zl[300], dark: zl[700] }
    : { main: zl[700], light: zl[500], dark: zl[900] };
}
function Zw(e = 'light') {
  return e === 'dark'
    ? { main: Dl[400], light: Dl[300], dark: Dl[700] }
    : { main: Dl[800], light: Dl[500], dark: Dl[900] };
}
function Ww(e = 'light') {
  return e === 'dark'
    ? { main: Ka[400], light: Ka[300], dark: Ka[700] }
    : { main: '#ed6c02', light: Ka[500], dark: Ka[900] };
}
function Jw(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function jp(e) {
  const {
      mode: n = 'light',
      contrastThreshold: i = 3,
      tonalOffset: l = 0.2,
      colorSpace: o,
      ...u
    } = e,
    c = e.primary || Gw(n),
    d = e.secondary || Xw(n),
    h = e.error || Kw(n),
    p = e.info || Qw(n),
    g = e.success || Zw(n),
    y = e.warning || Ww(n);
  function v(O) {
    return o ? Jw(O) : pw(O, Zd.text.primary) >= i ? Zd.text.primary : V1.text.primary;
  }
  const b = ({
    color: O,
    name: T,
    mainShade: $ = 500,
    lightShade: M = 300,
    darkShade: N = 700,
  }) => {
    if (((O = { ...O }), !O.main && O[$] && (O.main = O[$]), !O.hasOwnProperty('main')))
      throw new Error(Nr(11, T ? ` (${T})` : '', $));
    if (typeof O.main != 'string')
      throw new Error(Nr(12, T ? ` (${T})` : '', JSON.stringify(O.main)));
    return (
      o
        ? (Pb(o, O, 'light', M, l), Pb(o, O, 'dark', N, l))
        : (jb(O, 'light', M, l), jb(O, 'dark', N, l)),
      O.contrastText || (O.contrastText = v(O.main)),
      O
    );
  };
  let C;
  return (
    n === 'light' ? (C = F1()) : n === 'dark' && (C = Y1()),
    an(
      {
        common: { ...yo },
        mode: n,
        primary: b({ color: c, name: 'primary' }),
        secondary: b({
          color: d,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: b({ color: h, name: 'error' }),
        warning: b({ color: y, name: 'warning' }),
        info: b({ color: p, name: 'info' }),
        success: b({ color: g, name: 'success' }),
        grey: Yw,
        contrastThreshold: i,
        getContrastText: v,
        augmentColor: b,
        tonalOffset: l,
        ...C,
      },
      u,
    )
  );
}
function eE(e) {
  const n = {};
  return (
    Object.entries(e).forEach((l) => {
      const [o, u] = l;
      typeof u == 'object' &&
        (n[o] =
          `${u.fontStyle ? `${u.fontStyle} ` : ''}${u.fontVariant ? `${u.fontVariant} ` : ''}${u.fontWeight ? `${u.fontWeight} ` : ''}${u.fontStretch ? `${u.fontStretch} ` : ''}${u.fontSize || ''}${u.lineHeight ? `/${u.lineHeight} ` : ''}${u.fontFamily || ''}`);
    }),
    n
  );
}
function tE(e, n) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [e.up('sm')]: { minHeight: 64 },
    },
    ...n,
  };
}
function nE(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ib = { textTransform: 'uppercase' },
  Hb = '"Roboto", "Helvetica", "Arial", sans-serif';
function G1(e, n) {
  const {
      fontFamily: i = Hb,
      fontSize: l = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: c = 500,
      fontWeightBold: d = 700,
      htmlFontSize: h = 16,
      allVariants: p,
      pxToRem: g,
      ...y
    } = typeof n == 'function' ? n(e) : n,
    v = l / 14,
    b = g || ((O) => `${(O / h) * v}rem`),
    C = (O, T, $, M, N) => ({
      fontFamily: i,
      fontWeight: O,
      fontSize: b(T),
      lineHeight: $,
      ...(i === Hb ? { letterSpacing: `${nE(M / T)}em` } : {}),
      ...N,
      ...p,
    }),
    E = {
      h1: C(o, 96, 1.167, -1.5),
      h2: C(o, 60, 1.2, -0.5),
      h3: C(u, 48, 1.167, 0),
      h4: C(u, 34, 1.235, 0.25),
      h5: C(u, 24, 1.334, 0),
      h6: C(c, 20, 1.6, 0.15),
      subtitle1: C(u, 16, 1.75, 0.15),
      subtitle2: C(c, 14, 1.57, 0.1),
      body1: C(u, 16, 1.5, 0.15),
      body2: C(u, 14, 1.43, 0.15),
      button: C(c, 14, 1.75, 0.4, Ib),
      caption: C(u, 12, 1.66, 0.4),
      overline: C(u, 12, 2.66, 1, Ib),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return an(
    {
      htmlFontSize: h,
      pxToRem: b,
      fontFamily: i,
      fontSize: l,
      fontWeightLight: o,
      fontWeightRegular: u,
      fontWeightMedium: c,
      fontWeightBold: d,
      ...E,
    },
    y,
    { clone: !1 },
  );
}
const rE = 0.2,
  iE = 0.14,
  lE = 0.12;
function Et(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rE})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${iE})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lE})`,
  ].join(',');
}
const aE = [
    'none',
    Et(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Et(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Et(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Et(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Et(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Et(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Et(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Et(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Et(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Et(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Et(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Et(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Et(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Et(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Et(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Et(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Et(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Et(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Et(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Et(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Et(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Et(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Et(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Et(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  oE = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  X1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function qb(e) {
  return `${Math.round(e)}ms`;
}
function sE(e) {
  if (!e) return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function uE(e) {
  const n = { ...oE, ...e.easing },
    i = { ...X1, ...e.duration };
  return {
    getAutoHeightDuration: sE,
    create: (o = ['all'], u = {}) => {
      const { duration: c = i.standard, easing: d = n.easeInOut, delay: h = 0, ...p } = u;
      return (Array.isArray(o) ? o : [o])
        .map(
          (g) =>
            `${g} ${typeof c == 'string' ? c : qb(c)} ${d} ${typeof h == 'string' ? h : qb(h)}`,
        )
        .join(',');
    },
    ...e,
    easing: n,
    duration: i,
  };
}
const cE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function fE(e) {
  return (
    dr(e) ||
    typeof e > 'u' ||
    typeof e == 'string' ||
    typeof e == 'boolean' ||
    typeof e == 'number' ||
    Array.isArray(e)
  );
}
function K1(e = {}) {
  const n = { ...e };
  function i(l) {
    const o = Object.entries(l);
    for (let u = 0; u < o.length; u++) {
      const [c, d] = o[u];
      !fE(d) || c.startsWith('unstable_') ? delete l[c] : dr(d) && ((l[c] = { ...d }), i(l[c]));
    }
  }
  return (
    i(n),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Fb(e) {
  return typeof e == 'number' ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const dE = (e) => {
  if (!Number.isNaN(+e)) return +e;
  const n = e.match(/\d*\.?\d+/g);
  if (!n) return 0;
  let i = 0;
  for (let l = 0; l < n.length; l += 1) i += +n[l];
  return i;
};
function pE(e) {
  Object.assign(e, {
    alpha(n, i) {
      const l = this || e;
      return l.colorSpace
        ? `oklch(from ${n} l c h / ${typeof i == 'string' ? `calc(${i})` : i})`
        : l.vars
          ? `rgba(${n.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof i == 'string' ? `calc(${i})` : i})`
          : fu(n, dE(i));
    },
    lighten(n, i) {
      const l = this || e;
      return l.colorSpace ? `color-mix(in ${l.colorSpace}, ${n}, #fff ${Fb(i)})` : $u(n, i);
    },
    darken(n, i) {
      const l = this || e;
      return l.colorSpace ? `color-mix(in ${l.colorSpace}, ${n}, #000 ${Fb(i)})` : Lu(n, i);
    },
  });
}
function Wd(e = {}, ...n) {
  const {
    breakpoints: i,
    mixins: l = {},
    spacing: o,
    palette: u = {},
    transitions: c = {},
    typography: d = {},
    shape: h,
    colorSpace: p,
    ...g
  } = e;
  if (e.vars && e.generateThemeVars === void 0) throw new Error(Nr(20));
  const y = jp({ ...u, colorSpace: p }),
    v = Nu(e);
  let b = an(v, {
    mixins: tE(v.breakpoints, l),
    palette: y,
    shadows: aE.slice(),
    typography: G1(y, d),
    transitions: uE(c),
    zIndex: { ...cE },
  });
  return (
    (b = an(b, g)),
    (b = n.reduce((C, E) => an(C, E), b)),
    (b.unstable_sxConfig = { ...To, ...g?.unstable_sxConfig }),
    (b.unstable_sx = function (E) {
      return fi({ sx: E, theme: this });
    }),
    (b.toRuntimeSource = K1),
    pE(b),
    b
  );
}
function Jd(e) {
  let n;
  return (
    e < 1 ? (n = 5.11916 * e ** 2) : (n = 4.5 * Math.log(e + 1) + 2),
    Math.round(n * 10) / 1e3
  );
}
const hE = [...Array(25)].map((e, n) => {
  if (n === 0) return 'none';
  const i = Jd(n);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Q1(e) {
  return {
    inputPlaceholder: e === 'dark' ? 0.5 : 0.42,
    inputUnderline: e === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: e === 'dark' ? 0.2 : 0.12,
    switchTrack: e === 'dark' ? 0.3 : 0.38,
  };
}
function Z1(e) {
  return e === 'dark' ? hE : [];
}
function mE(e) {
  const { palette: n = { mode: 'light' }, opacity: i, overlays: l, colorSpace: o, ...u } = e,
    c = jp({ ...n, colorSpace: o });
  return { palette: c, opacity: { ...Q1(c.mode), ...i }, overlays: l || Z1(c.mode), ...u };
}
function gE(e) {
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const yE = (e) => [
    ...[...Array(25)].map((n, i) => `--${e ? `${e}-` : ''}overlays-${i}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`,
  ],
  bE = (e) => (n, i) => {
    const l = e.rootSelector || ':root',
      o = e.colorSchemeSelector;
    let u = o;
    if (
      (o === 'class' && (u = '.%s'),
      o === 'data' && (u = '[data-%s]'),
      o?.startsWith('data-') && !o.includes('%s') && (u = `[${o}="%s"]`),
      e.defaultColorScheme === n)
    ) {
      if (n === 'dark') {
        const c = {};
        return (
          yE(e.cssVarPrefix).forEach((d) => {
            ((c[d] = i[d]), delete i[d]);
          }),
          u === 'media'
            ? { [l]: i, '@media (prefers-color-scheme: dark)': { [l]: c } }
            : u
              ? { [u.replace('%s', n)]: c, [`${l}, ${u.replace('%s', n)}`]: i }
              : { [l]: { ...i, ...c } }
        );
      }
      if (u && u !== 'media') return `${l}, ${u.replace('%s', String(n))}`;
    } else if (n) {
      if (u === 'media') return { [`@media (prefers-color-scheme: ${String(n)})`]: { [l]: i } };
      if (u) return u.replace('%s', String(n));
    }
    return l;
  };
function vE(e, n) {
  n.forEach((i) => {
    e[i] || (e[i] = {});
  });
}
function ne(e, n, i) {
  !e[n] && i && (e[n] = i);
}
function no(e) {
  return typeof e != 'string' || !e.startsWith('hsl') ? e : U1(e);
}
function zr(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = to(no(e[n])));
}
function xE(e) {
  return typeof e == 'number'
    ? `${e}px`
    : typeof e == 'string' || typeof e == 'function' || Array.isArray(e)
      ? e
      : '8px';
}
const ar = (e) => {
    try {
      return e();
    } catch {}
  },
  SE = (e = 'mui') => Lw(e);
function kd(e, n, i, l, o) {
  if (!i) return;
  i = i === !0 ? {} : i;
  const u = o === 'dark' ? 'dark' : 'light';
  if (!l) {
    n[o] = mE({ ...i, palette: { mode: u, ...i?.palette }, colorSpace: e });
    return;
  }
  const { palette: c, ...d } = Wd({ ...l, palette: { mode: u, ...i?.palette }, colorSpace: e });
  return (
    (n[o] = {
      ...i,
      palette: c,
      opacity: { ...Q1(u), ...i?.opacity },
      overlays: i?.overlays || Z1(u),
    }),
    d
  );
}
function CE(e = {}, ...n) {
  const {
      colorSchemes: i = { light: !0 },
      defaultColorScheme: l,
      disableCssColorScheme: o = !1,
      cssVarPrefix: u = 'mui',
      nativeColor: c = !1,
      shouldSkipGeneratingVar: d = gE,
      colorSchemeSelector: h = i.light && i.dark ? 'media' : void 0,
      rootSelector: p = ':root',
      ...g
    } = e,
    y = Object.keys(i)[0],
    v = l || (i.light && y !== 'light' ? 'light' : y),
    b = SE(u),
    { [v]: C, light: E, dark: O, ...T } = i,
    $ = { ...T };
  let M = C;
  if ((((v === 'dark' && !('dark' in i)) || (v === 'light' && !('light' in i))) && (M = !0), !M))
    throw new Error(Nr(21, v));
  let N;
  c && (N = 'oklch');
  const z = kd(N, $, M, g, v);
  (E && !$.light && kd(N, $, E, void 0, 'light'), O && !$.dark && kd(N, $, O, void 0, 'dark'));
  let R = {
    defaultColorScheme: v,
    ...z,
    cssVarPrefix: u,
    colorSchemeSelector: h,
    rootSelector: p,
    getCssVar: b,
    colorSchemes: $,
    font: { ...eE(z.typography), ...z.font },
    spacing: xE(g.spacing),
  };
  (Object.keys(R.colorSchemes).forEach((q) => {
    const k = R.colorSchemes[q].palette,
      X = (I) => {
        const _ = I.split('-'),
          K = _[1],
          ue = _[2];
        return b(I, k[K][ue]);
      };
    (k.mode === 'light' &&
      (ne(k.common, 'background', '#fff'), ne(k.common, 'onBackground', '#000')),
      k.mode === 'dark' &&
        (ne(k.common, 'background', '#000'), ne(k.common, 'onBackground', '#fff')));
    function F(I, _, K) {
      if (N) {
        let ue;
        return (
          I === zi && (ue = `transparent ${((1 - K) * 100).toFixed(0)}%`),
          I === ot && (ue = `#000 ${(K * 100).toFixed(0)}%`),
          I === st && (ue = `#fff ${(K * 100).toFixed(0)}%`),
          `color-mix(in ${N}, ${_}, ${ue})`
        );
      }
      return I(_, K);
    }
    if (
      (vE(k, [
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
      k.mode === 'light')
    ) {
      (ne(k.Alert, 'errorColor', F(ot, k.error.light, 0.6)),
        ne(k.Alert, 'infoColor', F(ot, k.info.light, 0.6)),
        ne(k.Alert, 'successColor', F(ot, k.success.light, 0.6)),
        ne(k.Alert, 'warningColor', F(ot, k.warning.light, 0.6)),
        ne(k.Alert, 'errorFilledBg', X('palette-error-main')),
        ne(k.Alert, 'infoFilledBg', X('palette-info-main')),
        ne(k.Alert, 'successFilledBg', X('palette-success-main')),
        ne(k.Alert, 'warningFilledBg', X('palette-warning-main')),
        ne(
          k.Alert,
          'errorFilledColor',
          ar(() => k.getContrastText(k.error.main)),
        ),
        ne(
          k.Alert,
          'infoFilledColor',
          ar(() => k.getContrastText(k.info.main)),
        ),
        ne(
          k.Alert,
          'successFilledColor',
          ar(() => k.getContrastText(k.success.main)),
        ),
        ne(
          k.Alert,
          'warningFilledColor',
          ar(() => k.getContrastText(k.warning.main)),
        ),
        ne(k.Alert, 'errorStandardBg', F(st, k.error.light, 0.9)),
        ne(k.Alert, 'infoStandardBg', F(st, k.info.light, 0.9)),
        ne(k.Alert, 'successStandardBg', F(st, k.success.light, 0.9)),
        ne(k.Alert, 'warningStandardBg', F(st, k.warning.light, 0.9)),
        ne(k.Alert, 'errorIconColor', X('palette-error-main')),
        ne(k.Alert, 'infoIconColor', X('palette-info-main')),
        ne(k.Alert, 'successIconColor', X('palette-success-main')),
        ne(k.Alert, 'warningIconColor', X('palette-warning-main')),
        ne(k.AppBar, 'defaultBg', X('palette-grey-100')),
        ne(k.Avatar, 'defaultBg', X('palette-grey-400')),
        ne(k.Button, 'inheritContainedBg', X('palette-grey-300')),
        ne(k.Button, 'inheritContainedHoverBg', X('palette-grey-A100')),
        ne(k.Chip, 'defaultBorder', X('palette-grey-400')),
        ne(k.Chip, 'defaultAvatarColor', X('palette-grey-700')),
        ne(k.Chip, 'defaultIconColor', X('palette-grey-700')),
        ne(k.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        ne(k.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        ne(k.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        ne(k.LinearProgress, 'primaryBg', F(st, k.primary.main, 0.62)),
        ne(k.LinearProgress, 'secondaryBg', F(st, k.secondary.main, 0.62)),
        ne(k.LinearProgress, 'errorBg', F(st, k.error.main, 0.62)),
        ne(k.LinearProgress, 'infoBg', F(st, k.info.main, 0.62)),
        ne(k.LinearProgress, 'successBg', F(st, k.success.main, 0.62)),
        ne(k.LinearProgress, 'warningBg', F(st, k.warning.main, 0.62)),
        ne(
          k.Skeleton,
          'bg',
          N ? F(zi, k.text.primary, 0.11) : `rgba(${X('palette-text-primaryChannel')} / 0.11)`,
        ),
        ne(k.Slider, 'primaryTrack', F(st, k.primary.main, 0.62)),
        ne(k.Slider, 'secondaryTrack', F(st, k.secondary.main, 0.62)),
        ne(k.Slider, 'errorTrack', F(st, k.error.main, 0.62)),
        ne(k.Slider, 'infoTrack', F(st, k.info.main, 0.62)),
        ne(k.Slider, 'successTrack', F(st, k.success.main, 0.62)),
        ne(k.Slider, 'warningTrack', F(st, k.warning.main, 0.62)));
      const I = N ? F(ot, k.background.default, 0.6825) : Fs(k.background.default, 0.8);
      (ne(k.SnackbarContent, 'bg', I),
        ne(
          k.SnackbarContent,
          'color',
          ar(() => (N ? Zd.text.primary : k.getContrastText(I))),
        ),
        ne(k.SpeedDialAction, 'fabHoverBg', Fs(k.background.paper, 0.15)),
        ne(k.StepConnector, 'border', X('palette-grey-400')),
        ne(k.StepContent, 'border', X('palette-grey-400')),
        ne(k.Switch, 'defaultColor', X('palette-common-white')),
        ne(k.Switch, 'defaultDisabledColor', X('palette-grey-100')),
        ne(k.Switch, 'primaryDisabledColor', F(st, k.primary.main, 0.62)),
        ne(k.Switch, 'secondaryDisabledColor', F(st, k.secondary.main, 0.62)),
        ne(k.Switch, 'errorDisabledColor', F(st, k.error.main, 0.62)),
        ne(k.Switch, 'infoDisabledColor', F(st, k.info.main, 0.62)),
        ne(k.Switch, 'successDisabledColor', F(st, k.success.main, 0.62)),
        ne(k.Switch, 'warningDisabledColor', F(st, k.warning.main, 0.62)),
        ne(k.TableCell, 'border', F(st, F(zi, k.divider, 1), 0.88)),
        ne(k.Tooltip, 'bg', F(zi, k.grey[700], 0.92)));
    }
    if (k.mode === 'dark') {
      (ne(k.Alert, 'errorColor', F(st, k.error.light, 0.6)),
        ne(k.Alert, 'infoColor', F(st, k.info.light, 0.6)),
        ne(k.Alert, 'successColor', F(st, k.success.light, 0.6)),
        ne(k.Alert, 'warningColor', F(st, k.warning.light, 0.6)),
        ne(k.Alert, 'errorFilledBg', X('palette-error-dark')),
        ne(k.Alert, 'infoFilledBg', X('palette-info-dark')),
        ne(k.Alert, 'successFilledBg', X('palette-success-dark')),
        ne(k.Alert, 'warningFilledBg', X('palette-warning-dark')),
        ne(
          k.Alert,
          'errorFilledColor',
          ar(() => k.getContrastText(k.error.dark)),
        ),
        ne(
          k.Alert,
          'infoFilledColor',
          ar(() => k.getContrastText(k.info.dark)),
        ),
        ne(
          k.Alert,
          'successFilledColor',
          ar(() => k.getContrastText(k.success.dark)),
        ),
        ne(
          k.Alert,
          'warningFilledColor',
          ar(() => k.getContrastText(k.warning.dark)),
        ),
        ne(k.Alert, 'errorStandardBg', F(ot, k.error.light, 0.9)),
        ne(k.Alert, 'infoStandardBg', F(ot, k.info.light, 0.9)),
        ne(k.Alert, 'successStandardBg', F(ot, k.success.light, 0.9)),
        ne(k.Alert, 'warningStandardBg', F(ot, k.warning.light, 0.9)),
        ne(k.Alert, 'errorIconColor', X('palette-error-main')),
        ne(k.Alert, 'infoIconColor', X('palette-info-main')),
        ne(k.Alert, 'successIconColor', X('palette-success-main')),
        ne(k.Alert, 'warningIconColor', X('palette-warning-main')),
        ne(k.AppBar, 'defaultBg', X('palette-grey-900')),
        ne(k.AppBar, 'darkBg', X('palette-background-paper')),
        ne(k.AppBar, 'darkColor', X('palette-text-primary')),
        ne(k.Avatar, 'defaultBg', X('palette-grey-600')),
        ne(k.Button, 'inheritContainedBg', X('palette-grey-800')),
        ne(k.Button, 'inheritContainedHoverBg', X('palette-grey-700')),
        ne(k.Chip, 'defaultBorder', X('palette-grey-700')),
        ne(k.Chip, 'defaultAvatarColor', X('palette-grey-300')),
        ne(k.Chip, 'defaultIconColor', X('palette-grey-300')),
        ne(k.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        ne(k.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        ne(k.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        ne(k.LinearProgress, 'primaryBg', F(ot, k.primary.main, 0.5)),
        ne(k.LinearProgress, 'secondaryBg', F(ot, k.secondary.main, 0.5)),
        ne(k.LinearProgress, 'errorBg', F(ot, k.error.main, 0.5)),
        ne(k.LinearProgress, 'infoBg', F(ot, k.info.main, 0.5)),
        ne(k.LinearProgress, 'successBg', F(ot, k.success.main, 0.5)),
        ne(k.LinearProgress, 'warningBg', F(ot, k.warning.main, 0.5)),
        ne(
          k.Skeleton,
          'bg',
          N ? F(zi, k.text.primary, 0.13) : `rgba(${X('palette-text-primaryChannel')} / 0.13)`,
        ),
        ne(k.Slider, 'primaryTrack', F(ot, k.primary.main, 0.5)),
        ne(k.Slider, 'secondaryTrack', F(ot, k.secondary.main, 0.5)),
        ne(k.Slider, 'errorTrack', F(ot, k.error.main, 0.5)),
        ne(k.Slider, 'infoTrack', F(ot, k.info.main, 0.5)),
        ne(k.Slider, 'successTrack', F(ot, k.success.main, 0.5)),
        ne(k.Slider, 'warningTrack', F(ot, k.warning.main, 0.5)));
      const I = N ? F(st, k.background.default, 0.985) : Fs(k.background.default, 0.98);
      (ne(k.SnackbarContent, 'bg', I),
        ne(
          k.SnackbarContent,
          'color',
          ar(() => (N ? V1.text.primary : k.getContrastText(I))),
        ),
        ne(k.SpeedDialAction, 'fabHoverBg', Fs(k.background.paper, 0.15)),
        ne(k.StepConnector, 'border', X('palette-grey-600')),
        ne(k.StepContent, 'border', X('palette-grey-600')),
        ne(k.Switch, 'defaultColor', X('palette-grey-300')),
        ne(k.Switch, 'defaultDisabledColor', X('palette-grey-600')),
        ne(k.Switch, 'primaryDisabledColor', F(ot, k.primary.main, 0.55)),
        ne(k.Switch, 'secondaryDisabledColor', F(ot, k.secondary.main, 0.55)),
        ne(k.Switch, 'errorDisabledColor', F(ot, k.error.main, 0.55)),
        ne(k.Switch, 'infoDisabledColor', F(ot, k.info.main, 0.55)),
        ne(k.Switch, 'successDisabledColor', F(ot, k.success.main, 0.55)),
        ne(k.Switch, 'warningDisabledColor', F(ot, k.warning.main, 0.55)),
        ne(k.TableCell, 'border', F(ot, F(zi, k.divider, 1), 0.68)),
        ne(k.Tooltip, 'bg', F(zi, k.grey[700], 0.92)));
    }
    (zr(k.background, 'default'),
      zr(k.background, 'paper'),
      zr(k.common, 'background'),
      zr(k.common, 'onBackground'),
      zr(k, 'divider'),
      Object.keys(k).forEach((I) => {
        const _ = k[I];
        I !== 'tonalOffset' &&
          _ &&
          typeof _ == 'object' &&
          (_.main && ne(k[I], 'mainChannel', to(no(_.main))),
          _.light && ne(k[I], 'lightChannel', to(no(_.light))),
          _.dark && ne(k[I], 'darkChannel', to(no(_.dark))),
          _.contrastText && ne(k[I], 'contrastTextChannel', to(no(_.contrastText))),
          I === 'text' && (zr(k[I], 'primary'), zr(k[I], 'secondary')),
          I === 'action' && (_.active && zr(k[I], 'active'), _.selected && zr(k[I], 'selected')));
      }));
  }),
    (R = n.reduce((q, k) => an(q, k), R)));
  const H = {
      prefix: u,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: d,
      getSelector: bE(R),
      enableContrastVars: c,
    },
    { vars: Y, generateThemeVars: Q, generateStyleSheets: B } = jw(R, H);
  return (
    (R.vars = Y),
    Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([q, k]) => {
      R[q] = k;
    }),
    (R.generateThemeVars = Q),
    (R.generateStyleSheets = B),
    (R.generateSpacing = function () {
      return O1(g.spacing, Dp(this));
    }),
    (R.getColorSchemeSelector = Pw(h)),
    (R.spacing = R.generateSpacing()),
    (R.shouldSkipGeneratingVar = d),
    (R.unstable_sxConfig = { ...To, ...g?.unstable_sxConfig }),
    (R.unstable_sx = function (k) {
      return fi({ sx: k, theme: this });
    }),
    (R.toRuntimeSource = K1),
    R
  );
}
function Vb(e, n, i) {
  e.colorSchemes &&
    i &&
    (e.colorSchemes[n] = {
      ...(i !== !0 && i),
      palette: jp({ ...(i === !0 ? {} : i.palette), mode: n }),
    });
}
function Uu(e = {}, ...n) {
  const {
      palette: i,
      cssVariables: l = !1,
      colorSchemes: o = i ? void 0 : { light: !0 },
      defaultColorScheme: u = i?.mode,
      ...c
    } = e,
    d = u || 'light',
    h = o?.[d],
    p = { ...o, ...(i ? { [d]: { ...(typeof h != 'boolean' && h), palette: i } } : void 0) };
  if (l === !1) {
    if (!('colorSchemes' in e)) return Wd(e, ...n);
    let g = i;
    'palette' in e ||
      (p[d] && (p[d] !== !0 ? (g = p[d].palette) : d === 'dark' && (g = { mode: 'dark' })));
    const y = Wd({ ...e, palette: g }, ...n);
    return (
      (y.defaultColorScheme = d),
      (y.colorSchemes = p),
      y.palette.mode === 'light' &&
        ((y.colorSchemes.light = { ...(p.light !== !0 && p.light), palette: y.palette }),
        Vb(y, 'dark', p.dark)),
      y.palette.mode === 'dark' &&
        ((y.colorSchemes.dark = { ...(p.dark !== !0 && p.dark), palette: y.palette }),
        Vb(y, 'light', p.light)),
      y
    );
  }
  return (
    !i && !('light' in p) && d === 'light' && (p.light = !0),
    CE({ ...c, colorSchemes: p, defaultColorScheme: d, ...(typeof l != 'boolean' && l) }, ...n)
  );
}
const Pp = Uu();
function ju() {
  const e = _u(Pp);
  return e[pr] || e;
}
function W1(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const Wn = (e) => W1(e) && e !== 'classes',
  ge = $1({ themeId: pr, defaultTheme: Pp, rootShouldForwardProp: Wn });
function kE({ theme: e, ...n }) {
  const i = pr in e ? e[pr] : void 0;
  return j.jsx(H1, { ...n, themeId: i ? pr : void 0, theme: i || e });
}
const Vs = {
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode',
  },
  { CssVarsProvider: wE } = Bw({
    themeId: pr,
    theme: () => Uu({ cssVariables: !0 }),
    colorSchemeStorageKey: Vs.colorSchemeStorageKey,
    modeStorageKey: Vs.modeStorageKey,
    defaultColorScheme: { light: Vs.defaultLightColorScheme, dark: Vs.defaultDarkColorScheme },
    resolveTheme: (e) => {
      const n = { ...e, typography: G1(e.palette, e.typography) };
      return (
        (n.unstable_sx = function (l) {
          return fi({ sx: l, theme: this });
        }),
        n
      );
    },
  }),
  EE = wE;
function TE({ theme: e, ...n }) {
  const i = D.useMemo(() => {
    if (typeof e == 'function') return e;
    const l = pr in e ? e[pr] : e;
    return 'colorSchemes' in l ? null : 'vars' in l ? e : { ...e, vars: null };
  }, [e]);
  return i ? j.jsx(kE, { theme: i, ...n }) : j.jsx(EE, { theme: e, ...n });
}
function Yb(...e) {
  return e.reduce(
    (n, i) =>
      i == null
        ? n
        : function (...o) {
            (n.apply(this, o), i.apply(this, o));
          },
    () => {},
  );
}
function AE(e) {
  return j.jsx(z1, { ...e, defaultTheme: Pp, themeId: pr });
}
function Ip(e) {
  return function (i) {
    return j.jsx(AE, { styles: typeof e == 'function' ? (l) => e({ theme: l, ...i }) : e });
  };
}
function RE() {
  return D1;
}
const ht = Aw;
function tt(e) {
  return kw(e);
}
function ME(e) {
  return We('MuiSvgIcon', e);
}
Je('MuiSvgIcon', [
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
const OE = (e) => {
    const { color: n, fontSize: i, classes: l } = e,
      o = { root: ['root', n !== 'inherit' && `color${de(n)}`, `fontSize${de(i)}`] };
    return et(o, ME, l);
  },
  zE = ge('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        i.color !== 'inherit' && n[`color${de(i.color)}`],
        n[`fontSize${de(i.fontSize)}`],
      ];
    },
  })(
    ht(({ theme: e }) => ({
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      flexShrink: 0,
      transition: e.transitions?.create?.('fill', {
        duration: (e.vars ?? e).transitions?.duration?.shorter,
      }),
      variants: [
        { props: (n) => !n.hasSvgAsChild, style: { fill: 'currentColor' } },
        { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
        {
          props: { fontSize: 'small' },
          style: { fontSize: e.typography?.pxToRem?.(20) || '1.25rem' },
        },
        {
          props: { fontSize: 'medium' },
          style: { fontSize: e.typography?.pxToRem?.(24) || '1.5rem' },
        },
        {
          props: { fontSize: 'large' },
          style: { fontSize: e.typography?.pxToRem?.(35) || '2.1875rem' },
        },
        ...Object.entries((e.vars ?? e).palette)
          .filter(([, n]) => n && n.main)
          .map(([n]) => ({
            props: { color: n },
            style: { color: (e.vars ?? e).palette?.[n]?.main },
          })),
        { props: { color: 'action' }, style: { color: (e.vars ?? e).palette?.action?.active } },
        { props: { color: 'disabled' }, style: { color: (e.vars ?? e).palette?.action?.disabled } },
        { props: { color: 'inherit' }, style: { color: void 0 } },
      ],
    })),
  ),
  ep = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: u,
        color: c = 'inherit',
        component: d = 'svg',
        fontSize: h = 'medium',
        htmlColor: p,
        inheritViewBox: g = !1,
        titleAccess: y,
        viewBox: v = '0 0 24 24',
        ...b
      } = l,
      C = D.isValidElement(o) && o.type === 'svg',
      E = {
        ...l,
        color: c,
        component: d,
        fontSize: h,
        instanceFontSize: n.fontSize,
        inheritViewBox: g,
        viewBox: v,
        hasSvgAsChild: C,
      },
      O = {};
    g || (O.viewBox = v);
    const T = OE(E);
    return j.jsxs(zE, {
      as: d,
      className: Ae(T.root, u),
      focusable: 'false',
      color: p,
      'aria-hidden': y ? void 0 : !0,
      role: y ? 'img' : void 0,
      ref: i,
      ...O,
      ...b,
      ...(C && o.props),
      ownerState: E,
      children: [C ? o.props.children : o, y ? j.jsx('title', { children: y }) : null],
    });
  });
ep.muiName = 'SvgIcon';
function Jn(e, n) {
  function i(l, o) {
    return j.jsx(ep, { 'data-testid': void 0, ref: o, ...l, children: e });
  }
  return ((i.muiName = ep.muiName), D.memo(D.forwardRef(i)));
}
function J1(e, n = 166) {
  let i;
  function l(...o) {
    const u = () => {
      e.apply(this, o);
    };
    (clearTimeout(i), (i = setTimeout(u, n)));
  }
  return (
    (l.clear = () => {
      clearTimeout(i);
    }),
    l
  );
}
function Zn(e) {
  return (e && e.ownerDocument) || document;
}
function Lr(e) {
  return Zn(e).defaultView || window;
}
function Gb(e, n) {
  typeof e == 'function' ? e(n) : e && (e.current = n);
}
function Xb(e) {
  const { controlled: n, default: i, name: l, state: o = 'value' } = e,
    { current: u } = D.useRef(n !== void 0),
    [c, d] = D.useState(i),
    h = u ? n : c,
    p = D.useCallback((g) => {
      u || d(g);
    }, []);
  return [h, p];
}
function Pi(e) {
  const n = D.useRef(e);
  return (
    Br(() => {
      n.current = e;
    }),
    D.useRef((...i) => (0, n.current)(...i)).current
  );
}
function on(...e) {
  const n = D.useRef(void 0),
    i = D.useCallback((l) => {
      const o = e.map((u) => {
        if (u == null) return null;
        if (typeof u == 'function') {
          const c = u,
            d = c(l);
          return typeof d == 'function'
            ? d
            : () => {
                c(null);
              };
        }
        return (
          (u.current = l),
          () => {
            u.current = null;
          }
        );
      });
      return () => {
        o.forEach((u) => u?.());
      };
    }, e);
  return D.useMemo(
    () =>
      e.every((l) => l == null)
        ? null
        : (l) => {
            (n.current && (n.current(), (n.current = void 0)), l != null && (n.current = i(l)));
          },
    e,
  );
}
function DE(e, n) {
  const i = e.charCodeAt(2);
  return e[0] === 'o' && e[1] === 'n' && i >= 65 && i <= 90 && typeof n == 'function';
}
function NE(e, n) {
  if (!e) return n;
  function i(c, d) {
    const h = {};
    return (
      Object.keys(d).forEach((p) => {
        DE(p, d[p]) &&
          typeof c[p] == 'function' &&
          (h[p] = (...g) => {
            (c[p](...g), d[p](...g));
          });
      }),
      h
    );
  }
  if (typeof e == 'function' || typeof n == 'function')
    return (c) => {
      const d = typeof n == 'function' ? n(c) : n,
        h = typeof e == 'function' ? e({ ...c, ...d }) : e,
        p = Ae(c?.className, d?.className, h?.className),
        g = i(h, d);
      return {
        ...d,
        ...h,
        ...g,
        ...(!!p && { className: p }),
        ...(d?.style && h?.style && { style: { ...d.style, ...h.style } }),
        ...(d?.sx &&
          h?.sx && {
            sx: [
              ...(Array.isArray(d.sx) ? d.sx : [d.sx]),
              ...(Array.isArray(h.sx) ? h.sx : [h.sx]),
            ],
          }),
      };
    };
  const l = n,
    o = i(e, l),
    u = Ae(l?.className, e?.className);
  return {
    ...n,
    ...e,
    ...o,
    ...(!!u && { className: u }),
    ...(l?.style && e?.style && { style: { ...l.style, ...e.style } }),
    ...(l?.sx &&
      e?.sx && {
        sx: [...(Array.isArray(l.sx) ? l.sx : [l.sx]), ...(Array.isArray(e.sx) ? e.sx : [e.sx])],
      }),
  };
}
function ev(e, n) {
  if (e == null) return {};
  var i = {};
  for (var l in e)
    if ({}.hasOwnProperty.call(e, l)) {
      if (n.indexOf(l) !== -1) continue;
      i[l] = e[l];
    }
  return i;
}
function tp(e, n) {
  return (
    (tp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, l) {
          return ((i.__proto__ = l), i);
        }),
    tp(e, n)
  );
}
function tv(e, n) {
  ((e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), tp(e, n));
}
var nv = f1();
const Ys = Cu(nv),
  Kb = { disabled: !1 },
  du = Kn.createContext(null);
var _E = function (n) {
    return n.scrollTop;
  },
  ro = 'unmounted',
  Li = 'exited',
  $i = 'entering',
  Bl = 'entered',
  np = 'exiting',
  er = (function (e) {
    tv(n, e);
    function n(l, o) {
      var u;
      u = e.call(this, l, o) || this;
      var c = o,
        d = c && !c.isMounting ? l.enter : l.appear,
        h;
      return (
        (u.appearStatus = null),
        l.in
          ? d
            ? ((h = Li), (u.appearStatus = $i))
            : (h = Bl)
          : l.unmountOnExit || l.mountOnEnter
            ? (h = ro)
            : (h = Li),
        (u.state = { status: h }),
        (u.nextCallback = null),
        u
      );
    }
    n.getDerivedStateFromProps = function (o, u) {
      var c = o.in;
      return c && u.status === ro ? { status: Li } : null;
    };
    var i = n.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (o) {
        var u = null;
        if (o !== this.props) {
          var c = this.state.status;
          this.props.in ? c !== $i && c !== Bl && (u = $i) : (c === $i || c === Bl) && (u = np);
        }
        this.updateStatus(!1, u);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var o = this.props.timeout,
          u,
          c,
          d;
        return (
          (u = c = d = o),
          o != null &&
            typeof o != 'number' &&
            ((u = o.exit), (c = o.enter), (d = o.appear !== void 0 ? o.appear : c)),
          { exit: u, enter: c, appear: d }
        );
      }),
      (i.updateStatus = function (o, u) {
        if ((o === void 0 && (o = !1), u !== null))
          if ((this.cancelNextCallback(), u === $i)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var c = this.props.nodeRef ? this.props.nodeRef.current : Ys.findDOMNode(this);
              c && _E(c);
            }
            this.performEnter(o);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === Li && this.setState({ status: ro });
      }),
      (i.performEnter = function (o) {
        var u = this,
          c = this.props.enter,
          d = this.context ? this.context.isMounting : o,
          h = this.props.nodeRef ? [d] : [Ys.findDOMNode(this), d],
          p = h[0],
          g = h[1],
          y = this.getTimeouts(),
          v = d ? y.appear : y.enter;
        if ((!o && !c) || Kb.disabled) {
          this.safeSetState({ status: Bl }, function () {
            u.props.onEntered(p);
          });
          return;
        }
        (this.props.onEnter(p, g),
          this.safeSetState({ status: $i }, function () {
            (u.props.onEntering(p, g),
              u.onTransitionEnd(v, function () {
                u.safeSetState({ status: Bl }, function () {
                  u.props.onEntered(p, g);
                });
              }));
          }));
      }),
      (i.performExit = function () {
        var o = this,
          u = this.props.exit,
          c = this.getTimeouts(),
          d = this.props.nodeRef ? void 0 : Ys.findDOMNode(this);
        if (!u || Kb.disabled) {
          this.safeSetState({ status: Li }, function () {
            o.props.onExited(d);
          });
          return;
        }
        (this.props.onExit(d),
          this.safeSetState({ status: np }, function () {
            (o.props.onExiting(d),
              o.onTransitionEnd(c.exit, function () {
                o.safeSetState({ status: Li }, function () {
                  o.props.onExited(d);
                });
              }));
          }));
      }),
      (i.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (o, u) {
        ((u = this.setNextCallback(u)), this.setState(o, u));
      }),
      (i.setNextCallback = function (o) {
        var u = this,
          c = !0;
        return (
          (this.nextCallback = function (d) {
            c && ((c = !1), (u.nextCallback = null), o(d));
          }),
          (this.nextCallback.cancel = function () {
            c = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (o, u) {
        this.setNextCallback(u);
        var c = this.props.nodeRef ? this.props.nodeRef.current : Ys.findDOMNode(this),
          d = o == null && !this.props.addEndListener;
        if (!c || d) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var h = this.props.nodeRef ? [this.nextCallback] : [c, this.nextCallback],
            p = h[0],
            g = h[1];
          this.props.addEndListener(p, g);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (i.render = function () {
        var o = this.state.status;
        if (o === ro) return null;
        var u = this.props,
          c = u.children;
        (u.in,
          u.mountOnEnter,
          u.unmountOnExit,
          u.appear,
          u.enter,
          u.exit,
          u.timeout,
          u.addEndListener,
          u.onEnter,
          u.onEntering,
          u.onEntered,
          u.onExit,
          u.onExiting,
          u.onExited,
          u.nodeRef);
        var d = ev(u, [
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
        return Kn.createElement(
          du.Provider,
          { value: null },
          typeof c == 'function' ? c(o, d) : Kn.cloneElement(Kn.Children.only(c), d),
        );
      }),
      n
    );
  })(Kn.Component);
er.contextType = du;
er.propTypes = {};
function Nl() {}
er.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nl,
  onEntering: Nl,
  onEntered: Nl,
  onExit: Nl,
  onExiting: Nl,
  onExited: Nl,
};
er.UNMOUNTED = ro;
er.EXITED = Li;
er.ENTERING = $i;
er.ENTERED = Bl;
er.EXITING = np;
function BE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hp(e, n) {
  var i = function (u) {
      return n && D.isValidElement(u) ? n(u) : u;
    },
    l = Object.create(null);
  return (
    e &&
      D.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        l[o.key] = i(o);
      }),
    l
  );
}
function LE(e, n) {
  ((e = e || {}), (n = n || {}));
  function i(g) {
    return g in n ? n[g] : e[g];
  }
  var l = Object.create(null),
    o = [];
  for (var u in e) u in n ? o.length && ((l[u] = o), (o = [])) : o.push(u);
  var c,
    d = {};
  for (var h in n) {
    if (l[h])
      for (c = 0; c < l[h].length; c++) {
        var p = l[h][c];
        d[l[h][c]] = i(p);
      }
    d[h] = i(h);
  }
  for (c = 0; c < o.length; c++) d[o[c]] = i(o[c]);
  return d;
}
function ji(e, n, i) {
  return i[n] != null ? i[n] : e.props[n];
}
function $E(e, n) {
  return Hp(e.children, function (i) {
    return D.cloneElement(i, {
      onExited: n.bind(null, i),
      in: !0,
      appear: ji(i, 'appear', e),
      enter: ji(i, 'enter', e),
      exit: ji(i, 'exit', e),
    });
  });
}
function UE(e, n, i) {
  var l = Hp(e.children),
    o = LE(n, l);
  return (
    Object.keys(o).forEach(function (u) {
      var c = o[u];
      if (D.isValidElement(c)) {
        var d = u in n,
          h = u in l,
          p = n[u],
          g = D.isValidElement(p) && !p.props.in;
        h && (!d || g)
          ? (o[u] = D.cloneElement(c, {
              onExited: i.bind(null, c),
              in: !0,
              exit: ji(c, 'exit', e),
              enter: ji(c, 'enter', e),
            }))
          : !h && d && !g
            ? (o[u] = D.cloneElement(c, { in: !1 }))
            : h &&
              d &&
              D.isValidElement(p) &&
              (o[u] = D.cloneElement(c, {
                onExited: i.bind(null, c),
                in: p.props.in,
                exit: ji(c, 'exit', e),
                enter: ji(c, 'enter', e),
              }));
      }
    }),
    o
  );
}
var jE =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (n) {
        return e[n];
      });
    },
  PE = {
    component: 'div',
    childFactory: function (n) {
      return n;
    },
  },
  qp = (function (e) {
    tv(n, e);
    function n(l, o) {
      var u;
      u = e.call(this, l, o) || this;
      var c = u.handleExited.bind(BE(u));
      return (
        (u.state = { contextValue: { isMounting: !0 }, handleExited: c, firstRender: !0 }),
        u
      );
    }
    var i = n.prototype;
    return (
      (i.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (i.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (n.getDerivedStateFromProps = function (o, u) {
        var c = u.children,
          d = u.handleExited,
          h = u.firstRender;
        return { children: h ? $E(o, d) : UE(o, c, d), firstRender: !1 };
      }),
      (i.handleExited = function (o, u) {
        var c = Hp(this.props.children);
        o.key in c ||
          (o.props.onExited && o.props.onExited(u),
          this.mounted &&
            this.setState(function (d) {
              var h = su({}, d.children);
              return (delete h[o.key], { children: h });
            }));
      }),
      (i.render = function () {
        var o = this.props,
          u = o.component,
          c = o.childFactory,
          d = ev(o, ['component', 'childFactory']),
          h = this.state.contextValue,
          p = jE(this.state.children).map(c);
        return (
          delete d.appear,
          delete d.enter,
          delete d.exit,
          u === null
            ? Kn.createElement(du.Provider, { value: h }, p)
            : Kn.createElement(du.Provider, { value: h }, Kn.createElement(u, d, p))
        );
      }),
      n
    );
  })(Kn.Component);
qp.propTypes = {};
qp.defaultProps = PE;
const Qb = {};
function rv(e, n) {
  const i = D.useRef(Qb);
  return (i.current === Qb && (i.current = e(n)), i);
}
const IE = [];
function HE(e) {
  D.useEffect(e, IE);
}
class Fp {
  static create() {
    return new Fp();
  }
  currentId = null;
  start(n, i) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = null), i());
      }, n)));
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
  };
  disposeEffect = () => this.clear;
}
function Vp() {
  const e = rv(Fp.create).current;
  return (HE(e.disposeEffect), e);
}
const iv = (e) => e.scrollTop;
function Hl(e, n) {
  const { timeout: i, easing: l, style: o = {} } = e;
  return {
    duration: o.transitionDuration ?? (typeof i == 'number' ? i : i[n.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof l == 'object' ? l[n.mode] : l),
    delay: o.transitionDelay,
  };
}
function qE(e) {
  return We('MuiCollapse', e);
}
Je('MuiCollapse', [
  'root',
  'horizontal',
  'vertical',
  'entered',
  'hidden',
  'wrapper',
  'wrapperInner',
]);
const FE = (e) => {
    const { orientation: n, classes: i } = e,
      l = {
        root: ['root', `${n}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${n}`],
        wrapperInner: ['wrapperInner', `${n}`],
      };
    return et(l, qE, i);
  },
  VE = ge('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        n[i.orientation],
        i.state === 'entered' && n.entered,
        i.state === 'exited' && !i.in && i.collapsedSize === '0px' && n.hidden,
      ];
    },
  })(
    ht(({ theme: e }) => ({
      height: 0,
      overflow: 'hidden',
      transition: e.transitions.create('height'),
      variants: [
        {
          props: { orientation: 'horizontal' },
          style: { height: 'auto', width: 0, transition: e.transitions.create('width') },
        },
        { props: { state: 'entered' }, style: { height: 'auto', overflow: 'visible' } },
        { props: { state: 'entered', orientation: 'horizontal' }, style: { width: 'auto' } },
        {
          props: ({ ownerState: n }) => n.state === 'exited' && !n.in && n.collapsedSize === '0px',
          style: { visibility: 'hidden' },
        },
      ],
    })),
  ),
  YE = ge('div', { name: 'MuiCollapse', slot: 'Wrapper' })({
    display: 'flex',
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  GE = ge('div', { name: 'MuiCollapse', slot: 'WrapperInner' })({
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  ao = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiCollapse' }),
      {
        addEndListener: o,
        children: u,
        className: c,
        collapsedSize: d = '0px',
        component: h,
        easing: p,
        in: g,
        onEnter: y,
        onEntered: v,
        onEntering: b,
        onExit: C,
        onExited: E,
        onExiting: O,
        orientation: T = 'vertical',
        style: $,
        timeout: M = X1.standard,
        TransitionComponent: N = er,
        ...z
      } = l,
      R = { ...l, orientation: T, collapsedSize: d },
      H = FE(R),
      Y = ju(),
      Q = Vp(),
      B = D.useRef(null),
      q = D.useRef(),
      k = typeof d == 'number' ? `${d}px` : d,
      X = T === 'horizontal',
      F = X ? 'width' : 'height',
      I = D.useRef(null),
      _ = on(i, I),
      K = (te) => (ye) => {
        if (te) {
          const ve = I.current;
          ye === void 0 ? te(ve) : te(ve, ye);
        }
      },
      ue = () => (B.current ? B.current[X ? 'clientWidth' : 'clientHeight'] : 0),
      re = K((te, ye) => {
        (B.current && X && (B.current.style.position = 'absolute'),
          (te.style[F] = k),
          y && y(te, ye));
      }),
      S = K((te, ye) => {
        const ve = ue();
        B.current && X && (B.current.style.position = '');
        const { duration: Re, easing: Ce } = Hl(
          { style: $, timeout: M, easing: p },
          { mode: 'enter' },
        );
        if (M === 'auto') {
          const Oe = Y.transitions.getAutoHeightDuration(ve);
          ((te.style.transitionDuration = `${Oe}ms`), (q.current = Oe));
        } else te.style.transitionDuration = typeof Re == 'string' ? Re : `${Re}ms`;
        ((te.style[F] = `${ve}px`), (te.style.transitionTimingFunction = Ce), b && b(te, ye));
      }),
      J = K((te, ye) => {
        ((te.style[F] = 'auto'), v && v(te, ye));
      }),
      oe = K((te) => {
        ((te.style[F] = `${ue()}px`), C && C(te));
      }),
      A = K(E),
      ce = K((te) => {
        const ye = ue(),
          { duration: ve, easing: Re } = Hl({ style: $, timeout: M, easing: p }, { mode: 'exit' });
        if (M === 'auto') {
          const Ce = Y.transitions.getAutoHeightDuration(ye);
          ((te.style.transitionDuration = `${Ce}ms`), (q.current = Ce));
        } else te.style.transitionDuration = typeof ve == 'string' ? ve : `${ve}ms`;
        ((te.style[F] = k), (te.style.transitionTimingFunction = Re), O && O(te));
      }),
      he = (te) => {
        (M === 'auto' && Q.start(q.current || 0, te), o && o(I.current, te));
      };
    return j.jsx(N, {
      in: g,
      onEnter: re,
      onEntered: J,
      onEntering: S,
      onExit: oe,
      onExited: A,
      onExiting: ce,
      addEndListener: he,
      nodeRef: I,
      timeout: M === 'auto' ? null : M,
      ...z,
      children: (te, { ownerState: ye, ...ve }) =>
        j.jsx(VE, {
          as: h,
          className: Ae(
            H.root,
            c,
            { entered: H.entered, exited: !g && k === '0px' && H.hidden }[te],
          ),
          style: { [X ? 'minWidth' : 'minHeight']: k, ...$ },
          ref: _,
          ownerState: { ...R, state: te },
          ...ve,
          children: j.jsx(YE, {
            ownerState: { ...R, state: te },
            className: H.wrapper,
            ref: B,
            children: j.jsx(GE, {
              ownerState: { ...R, state: te },
              className: H.wrapperInner,
              children: u,
            }),
          }),
        }),
    });
  });
ao && (ao.muiSupportAuto = !0);
function XE(e) {
  return We('MuiPaper', e);
}
Je('MuiPaper', [
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
const KE = (e) => {
    const { square: n, elevation: i, variant: l, classes: o } = e,
      u = { root: ['root', l, !n && 'rounded', l === 'elevation' && `elevation${i}`] };
    return et(u, XE, o);
  },
  QE = ge('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        n[i.variant],
        !i.square && n.rounded,
        i.variant === 'elevation' && n[`elevation${i.elevation}`],
      ];
    },
  })(
    ht(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: n }) => !n.square, style: { borderRadius: e.shape.borderRadius } },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' },
        },
      ],
    })),
  ),
  Pu = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiPaper' }),
      o = ju(),
      {
        className: u,
        component: c = 'div',
        elevation: d = 1,
        square: h = !1,
        variant: p = 'elevation',
        ...g
      } = l,
      y = { ...l, component: c, elevation: d, square: h, variant: p },
      v = KE(y);
    return j.jsx(QE, {
      as: c,
      ownerState: y,
      className: Ae(v.root, u),
      ref: i,
      ...g,
      style: {
        ...(p === 'elevation' && {
          '--Paper-shadow': (o.vars || o).shadows[d],
          ...(o.vars && { '--Paper-overlay': o.vars.overlays?.[d] }),
          ...(!o.vars &&
            o.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${fu('#fff', Jd(d))}, ${fu('#fff', Jd(d))})`,
            }),
        }),
        ...g.style,
      },
    });
  });
function pu(e) {
  return typeof e == 'string';
}
function lv(e, n, i) {
  return e === void 0 || pu(e) ? n : { ...n, ownerState: { ...n.ownerState, ...i } };
}
function av(e, n, i) {
  return typeof e == 'function' ? e(n, i) : e;
}
function ov(e, n = []) {
  if (e === void 0) return {};
  const i = {};
  return (
    Object.keys(e)
      .filter((l) => l.match(/^on[A-Z]/) && typeof e[l] == 'function' && !n.includes(l))
      .forEach((l) => {
        i[l] = e[l];
      }),
    i
  );
}
function Zb(e) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter((i) => !(i.match(/^on[A-Z]/) && typeof e[i] == 'function'))
      .forEach((i) => {
        n[i] = e[i];
      }),
    n
  );
}
function sv(e) {
  const {
    getSlotProps: n,
    additionalProps: i,
    externalSlotProps: l,
    externalForwardedProps: o,
    className: u,
  } = e;
  if (!n) {
    const b = Ae(i?.className, u, o?.className, l?.className),
      C = { ...i?.style, ...o?.style, ...l?.style },
      E = { ...i, ...o, ...l };
    return (
      b.length > 0 && (E.className = b),
      Object.keys(C).length > 0 && (E.style = C),
      { props: E, internalRef: void 0 }
    );
  }
  const c = ov({ ...o, ...l }),
    d = Zb(l),
    h = Zb(o),
    p = n(c),
    g = Ae(p?.className, i?.className, u, o?.className, l?.className),
    y = { ...p?.style, ...i?.style, ...o?.style, ...l?.style },
    v = { ...p, ...i, ...h, ...d };
  return (
    g.length > 0 && (v.className = g),
    Object.keys(y).length > 0 && (v.style = y),
    { props: v, internalRef: p.ref }
  );
}
function gt(e, n) {
  const {
      className: i,
      elementType: l,
      ownerState: o,
      externalForwardedProps: u,
      internalForwardedProps: c,
      shouldForwardComponentProp: d = !1,
      ...h
    } = n,
    { component: p, slots: g = { [e]: void 0 }, slotProps: y = { [e]: void 0 }, ...v } = u,
    b = g[e] || l,
    C = av(y[e], o),
    {
      props: { component: E, ...O },
      internalRef: T,
    } = sv({
      className: i,
      ...h,
      externalForwardedProps: e === 'root' ? v : void 0,
      externalSlotProps: C,
    }),
    $ = on(T, C?.ref, n.ref),
    M = e === 'root' ? E || p : E,
    N = lv(
      b,
      {
        ...(e === 'root' && !p && !g[e] && c),
        ...(e !== 'root' && !g[e] && c),
        ...O,
        ...(M && !d && { as: M }),
        ...(M && d && { component: M }),
        ref: $,
      },
      o,
    );
  return [b, N];
}
function Wb(e) {
  try {
    return e.matches(':focus-visible');
  } catch {}
  return !1;
}
class hu {
  static create() {
    return new hu();
  }
  static use() {
    const n = rv(hu.create).current,
      [i, l] = D.useState(!1);
    return ((n.shouldMount = i), (n.setShouldMount = l), D.useEffect(n.mountEffect, [i]), n);
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
        ((this.mounted = WE()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  mountEffect = () => {
    this.shouldMount &&
      !this.didMount &&
      this.ref.current !== null &&
      ((this.didMount = !0), this.mounted.resolve());
  };
  start(...n) {
    this.mount().then(() => this.ref.current?.start(...n));
  }
  stop(...n) {
    this.mount().then(() => this.ref.current?.stop(...n));
  }
  pulsate(...n) {
    this.mount().then(() => this.ref.current?.pulsate(...n));
  }
}
function ZE() {
  return hu.use();
}
function WE() {
  let e, n;
  const i = new Promise((l, o) => {
    ((e = l), (n = o));
  });
  return ((i.resolve = e), (i.reject = n), i);
}
function JE(e) {
  const {
      className: n,
      classes: i,
      pulsate: l = !1,
      rippleX: o,
      rippleY: u,
      rippleSize: c,
      in: d,
      onExited: h,
      timeout: p,
    } = e,
    [g, y] = D.useState(!1),
    v = Ae(n, i.ripple, i.rippleVisible, l && i.ripplePulsate),
    b = { width: c, height: c, top: -(c / 2) + u, left: -(c / 2) + o },
    C = Ae(i.child, g && i.childLeaving, l && i.childPulsate);
  return (
    !d && !g && y(!0),
    D.useEffect(() => {
      if (!d && h != null) {
        const E = setTimeout(h, p);
        return () => {
          clearTimeout(E);
        };
      }
    }, [h, d, p]),
    j.jsx('span', { className: v, style: b, children: j.jsx('span', { className: C }) })
  );
}
const Hn = Je('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  rp = 550,
  eT = 80,
  tT = ko`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  nT = ko`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  rT = ko`
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
  iT = ge('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  lT = ge(JE, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${Hn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${tT};
    animation-duration: ${rp}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${Hn.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Hn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Hn.childLeaving} {
    opacity: 0;
    animation-name: ${nT};
    animation-duration: ${rp}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${Hn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${rT};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  aT = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: u = {}, className: c, ...d } = l,
      [h, p] = D.useState([]),
      g = D.useRef(0),
      y = D.useRef(null);
    D.useEffect(() => {
      y.current && (y.current(), (y.current = null));
    }, [h]);
    const v = D.useRef(!1),
      b = Vp(),
      C = D.useRef(null),
      E = D.useRef(null),
      O = D.useCallback(
        (N) => {
          const { pulsate: z, rippleX: R, rippleY: H, rippleSize: Y, cb: Q } = N;
          (p((B) => [
            ...B,
            j.jsx(
              lT,
              {
                classes: {
                  ripple: Ae(u.ripple, Hn.ripple),
                  rippleVisible: Ae(u.rippleVisible, Hn.rippleVisible),
                  ripplePulsate: Ae(u.ripplePulsate, Hn.ripplePulsate),
                  child: Ae(u.child, Hn.child),
                  childLeaving: Ae(u.childLeaving, Hn.childLeaving),
                  childPulsate: Ae(u.childPulsate, Hn.childPulsate),
                },
                timeout: rp,
                pulsate: z,
                rippleX: R,
                rippleY: H,
                rippleSize: Y,
              },
              g.current,
            ),
          ]),
            (g.current += 1),
            (y.current = Q));
        },
        [u],
      ),
      T = D.useCallback(
        (N = {}, z = {}, R = () => {}) => {
          const { pulsate: H = !1, center: Y = o || z.pulsate, fakeElement: Q = !1 } = z;
          if (N?.type === 'mousedown' && v.current) {
            v.current = !1;
            return;
          }
          N?.type === 'touchstart' && (v.current = !0);
          const B = Q ? null : E.current,
            q = B ? B.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let k, X, F;
          if (
            Y ||
            N === void 0 ||
            (N.clientX === 0 && N.clientY === 0) ||
            (!N.clientX && !N.touches)
          )
            ((k = Math.round(q.width / 2)), (X = Math.round(q.height / 2)));
          else {
            const { clientX: I, clientY: _ } = N.touches && N.touches.length > 0 ? N.touches[0] : N;
            ((k = Math.round(I - q.left)), (X = Math.round(_ - q.top)));
          }
          if (Y) ((F = Math.sqrt((2 * q.width ** 2 + q.height ** 2) / 3)), F % 2 === 0 && (F += 1));
          else {
            const I = Math.max(Math.abs((B ? B.clientWidth : 0) - k), k) * 2 + 2,
              _ = Math.max(Math.abs((B ? B.clientHeight : 0) - X), X) * 2 + 2;
            F = Math.sqrt(I ** 2 + _ ** 2);
          }
          N?.touches
            ? C.current === null &&
              ((C.current = () => {
                O({ pulsate: H, rippleX: k, rippleY: X, rippleSize: F, cb: R });
              }),
              b.start(eT, () => {
                C.current && (C.current(), (C.current = null));
              }))
            : O({ pulsate: H, rippleX: k, rippleY: X, rippleSize: F, cb: R });
        },
        [o, O, b],
      ),
      $ = D.useCallback(() => {
        T({}, { pulsate: !0 });
      }, [T]),
      M = D.useCallback(
        (N, z) => {
          if ((b.clear(), N?.type === 'touchend' && C.current)) {
            (C.current(),
              (C.current = null),
              b.start(0, () => {
                M(N, z);
              }));
            return;
          }
          ((C.current = null), p((R) => (R.length > 0 ? R.slice(1) : R)), (y.current = z));
        },
        [b],
      );
    return (
      D.useImperativeHandle(i, () => ({ pulsate: $, start: T, stop: M }), [$, T, M]),
      j.jsx(iT, {
        className: Ae(Hn.root, u.root, c),
        ref: E,
        ...d,
        children: j.jsx(qp, { component: null, exit: !0, children: h }),
      })
    );
  });
function oT(e) {
  return We('MuiButtonBase', e);
}
const sT = Je('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  uT = (e) => {
    const { disabled: n, focusVisible: i, focusVisibleClassName: l, classes: o } = e,
      c = et({ root: ['root', n && 'disabled', i && 'focusVisible'] }, oT, o);
    return (i && l && (c.root += ` ${l}`), c);
  },
  cT = ge('button', { name: 'MuiButtonBase', slot: 'Root' })({
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
    [`&.${sT.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  mu = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: u = !1,
        children: c,
        className: d,
        component: h = 'button',
        disabled: p = !1,
        disableRipple: g = !1,
        disableTouchRipple: y = !1,
        focusRipple: v = !1,
        focusVisibleClassName: b,
        LinkComponent: C = 'a',
        onBlur: E,
        onClick: O,
        onContextMenu: T,
        onDragLeave: $,
        onFocus: M,
        onFocusVisible: N,
        onKeyDown: z,
        onKeyUp: R,
        onMouseDown: H,
        onMouseLeave: Y,
        onMouseUp: Q,
        onTouchEnd: B,
        onTouchMove: q,
        onTouchStart: k,
        tabIndex: X = 0,
        TouchRippleProps: F,
        touchRippleRef: I,
        type: _,
        ...K
      } = l,
      ue = D.useRef(null),
      re = ZE(),
      S = on(re.ref, I),
      [J, oe] = D.useState(!1);
    (p && J && oe(!1),
      D.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            (oe(!0), ue.current.focus());
          },
        }),
        [],
      ));
    const A = re.shouldMount && !g && !p;
    D.useEffect(() => {
      J && v && !g && re.pulsate();
    }, [g, v, J, re]);
    const ce = Dr(re, 'start', H, y),
      he = Dr(re, 'stop', T, y),
      te = Dr(re, 'stop', $, y),
      ye = Dr(re, 'stop', Q, y),
      ve = Dr(
        re,
        'stop',
        (Se) => {
          (J && Se.preventDefault(), Y && Y(Se));
        },
        y,
      ),
      Re = Dr(re, 'start', k, y),
      Ce = Dr(re, 'stop', B, y),
      Oe = Dr(re, 'stop', q, y),
      je = Dr(
        re,
        'stop',
        (Se) => {
          (Wb(Se.target) || oe(!1), E && E(Se));
        },
        !1,
      ),
      Ct = Pi((Se) => {
        (ue.current || (ue.current = Se.currentTarget),
          Wb(Se.target) && (oe(!0), N && N(Se)),
          M && M(Se));
      }),
      De = () => {
        const Se = ue.current;
        return h && h !== 'button' && !(Se.tagName === 'A' && Se.href);
      },
      Ye = Pi((Se) => {
        (v &&
          !Se.repeat &&
          J &&
          Se.key === ' ' &&
          re.stop(Se, () => {
            re.start(Se);
          }),
          Se.target === Se.currentTarget && De() && Se.key === ' ' && Se.preventDefault(),
          z && z(Se),
          Se.target === Se.currentTarget &&
            De() &&
            Se.key === 'Enter' &&
            !p &&
            (Se.preventDefault(), O && O(Se)));
      }),
      _t = Pi((Se) => {
        (v &&
          Se.key === ' ' &&
          J &&
          !Se.defaultPrevented &&
          re.stop(Se, () => {
            re.pulsate(Se);
          }),
          R && R(Se),
          O &&
            Se.target === Se.currentTarget &&
            De() &&
            Se.key === ' ' &&
            !Se.defaultPrevented &&
            O(Se));
      });
    let Ge = h;
    Ge === 'button' && (K.href || K.to) && (Ge = C);
    const bt = {};
    Ge === 'button'
      ? ((bt.type = _ === void 0 ? 'button' : _), (bt.disabled = p))
      : (!K.href && !K.to && (bt.role = 'button'), p && (bt['aria-disabled'] = p));
    const ut = on(i, ue),
      vt = {
        ...l,
        centerRipple: u,
        component: h,
        disabled: p,
        disableRipple: g,
        disableTouchRipple: y,
        focusRipple: v,
        tabIndex: X,
        focusVisible: J,
      },
      nt = uT(vt);
    return j.jsxs(cT, {
      as: Ge,
      className: Ae(nt.root, d),
      ownerState: vt,
      onBlur: je,
      onClick: O,
      onContextMenu: he,
      onFocus: Ct,
      onKeyDown: Ye,
      onKeyUp: _t,
      onMouseDown: ce,
      onMouseLeave: ve,
      onMouseUp: ye,
      onDragLeave: te,
      onTouchEnd: Ce,
      onTouchMove: Oe,
      onTouchStart: Re,
      ref: ut,
      tabIndex: p ? -1 : X,
      type: _,
      ...bt,
      ...K,
      children: [c, A ? j.jsx(aT, { ref: S, center: u, ...F }) : null],
    });
  });
function Dr(e, n, i, l = !1) {
  return Pi((o) => (i && i(o), l || e[n](o), !0));
}
function fT(e) {
  return typeof e.main == 'string';
}
function dT(e, n = []) {
  if (!fT(e)) return !1;
  for (const i of n) if (!e.hasOwnProperty(i) || typeof e[i] != 'string') return !1;
  return !0;
}
function Wt(e = []) {
  return ([, n]) => n && dT(n, e);
}
function pT(e) {
  return We('MuiAlert', e);
}
const Jb = Je('MuiAlert', [
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
function hT(e) {
  return We('MuiCircularProgress', e);
}
Je('MuiCircularProgress', [
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
const oi = 44,
  ip = ko`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  lp = ko`
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
  mT =
    typeof ip != 'string'
      ? Mp`
        animation: ${ip} 1.4s linear infinite;
      `
      : null,
  gT =
    typeof lp != 'string'
      ? Mp`
        animation: ${lp} 1.4s ease-in-out infinite;
      `
      : null,
  yT = (e) => {
    const { classes: n, variant: i, color: l, disableShrink: o } = e,
      u = {
        root: ['root', i, `color${de(l)}`],
        svg: ['svg'],
        circle: ['circle', `circle${de(i)}`, o && 'circleDisableShrink'],
      };
    return et(u, hT, n);
  },
  bT = ge('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, n[i.variant], n[`color${de(i.color)}`]];
    },
  })(
    ht(({ theme: e }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: mT || { animation: `${ip} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(Wt())
          .map(([n]) => ({ props: { color: n }, style: { color: (e.vars || e).palette[n].main } })),
      ],
    })),
  ),
  vT = ge('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  xT = ge('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.circle, n[`circle${de(i.variant)}`], i.disableShrink && n.circleDisableShrink];
    },
  })(
    ht(({ theme: e }) => ({
      stroke: 'currentColor',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('stroke-dashoffset') },
        },
        {
          props: { variant: 'indeterminate' },
          style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: n }) => n.variant === 'indeterminate' && !n.disableShrink,
          style: gT || { animation: `${lp} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  uv = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiCircularProgress' }),
      {
        className: o,
        color: u = 'primary',
        disableShrink: c = !1,
        size: d = 40,
        style: h,
        thickness: p = 3.6,
        value: g = 0,
        variant: y = 'indeterminate',
        ...v
      } = l,
      b = { ...l, color: u, disableShrink: c, size: d, thickness: p, value: g, variant: y },
      C = yT(b),
      E = {},
      O = {},
      T = {};
    if (y === 'determinate') {
      const $ = 2 * Math.PI * ((oi - p) / 2);
      ((E.strokeDasharray = $.toFixed(3)),
        (T['aria-valuenow'] = Math.round(g)),
        (E.strokeDashoffset = `${(((100 - g) / 100) * $).toFixed(3)}px`),
        (O.transform = 'rotate(-90deg)'));
    }
    return j.jsx(bT, {
      className: Ae(C.root, o),
      style: { width: d, height: d, ...O, ...h },
      ownerState: b,
      ref: i,
      role: 'progressbar',
      ...T,
      ...v,
      children: j.jsx(vT, {
        className: C.svg,
        ownerState: b,
        viewBox: `${oi / 2} ${oi / 2} ${oi} ${oi}`,
        children: j.jsx(xT, {
          className: C.circle,
          style: E,
          ownerState: b,
          cx: oi,
          cy: oi,
          r: (oi - p) / 2,
          fill: 'none',
          strokeWidth: p,
        }),
      }),
    });
  });
function ST(e) {
  return We('MuiIconButton', e);
}
const e0 = Je('MuiIconButton', [
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
  CT = (e) => {
    const { classes: n, disabled: i, color: l, edge: o, size: u, loading: c } = e,
      d = {
        root: [
          'root',
          c && 'loading',
          i && 'disabled',
          l !== 'default' && `color${de(l)}`,
          o && `edge${de(o)}`,
          `size${de(u)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return et(d, ST, n);
  },
  kT = ge(mu, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        i.loading && n.loading,
        i.color !== 'default' && n[`color${de(i.color)}`],
        i.edge && n[`edge${de(i.edge)}`],
        n[`size${de(i.size)}`],
      ];
    },
  })(
    ht(({ theme: e }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create('background-color', {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (n) => !n.disableRipple,
          style: {
            '--IconButton-hoverBg': e.alpha(
              (e.vars || e).palette.action.active,
              (e.vars || e).palette.action.hoverOpacity,
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
    ht(({ theme: e }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(e.palette)
          .filter(Wt())
          .map(([n]) => ({ props: { color: n }, style: { color: (e.vars || e).palette[n].main } })),
        ...Object.entries(e.palette)
          .filter(Wt())
          .map(([n]) => ({
            props: { color: n },
            style: {
              '--IconButton-hoverBg': e.alpha(
                (e.vars || e).palette[n].main,
                (e.vars || e).palette.action.hoverOpacity,
              ),
            },
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: e.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: e.typography.pxToRem(28) } },
      ],
      [`&.${e0.disabled}`]: {
        backgroundColor: 'transparent',
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${e0.loading}`]: { color: 'transparent' },
    })),
  ),
  wT = ge('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (e.vars || e).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  ET = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiIconButton' }),
      {
        edge: o = !1,
        children: u,
        className: c,
        color: d = 'default',
        disabled: h = !1,
        disableFocusRipple: p = !1,
        size: g = 'medium',
        id: y,
        loading: v = null,
        loadingIndicator: b,
        ...C
      } = l,
      E = Ao(y),
      O = b ?? j.jsx(uv, { 'aria-labelledby': E, color: 'inherit', size: 16 }),
      T = {
        ...l,
        edge: o,
        color: d,
        disabled: h,
        disableFocusRipple: p,
        loading: v,
        loadingIndicator: O,
        size: g,
      },
      $ = CT(T);
    return j.jsxs(kT, {
      id: v ? E : y,
      className: Ae($.root, c),
      centerRipple: !0,
      focusRipple: !p,
      disabled: h || v,
      ref: i,
      ...C,
      ownerState: T,
      children: [
        typeof v == 'boolean' &&
          j.jsx('span', {
            className: $.loadingWrapper,
            style: { display: 'contents' },
            children: j.jsx(wT, { className: $.loadingIndicator, ownerState: T, children: v && O }),
          }),
        u,
      ],
    });
  }),
  TT = Jn(
    j.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
  ),
  AT = Jn(
    j.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
  ),
  RT = Jn(
    j.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
  ),
  MT = Jn(
    j.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
  ),
  OT = Jn(
    j.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
  ),
  zT = (e) => {
    const { variant: n, color: i, severity: l, classes: o } = e,
      u = {
        root: ['root', `color${de(i || l)}`, `${n}${de(i || l)}`, `${n}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return et(u, pT, o);
  },
  DT = ge(Pu, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, n[i.variant], n[`${i.variant}${de(i.color || i.severity)}`]];
    },
  })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light' ? e.darken : e.lighten,
        i = e.palette.mode === 'light' ? e.lighten : e.darken;
      return {
        ...e.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
          ...Object.entries(e.palette)
            .filter(Wt(['light']))
            .map(([l]) => ({
              props: { colorSeverity: l, variant: 'standard' },
              style: {
                color: e.vars ? e.vars.palette.Alert[`${l}Color`] : n(e.palette[l].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${l}StandardBg`]
                  : i(e.palette[l].light, 0.9),
                [`& .${Jb.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${l}IconColor`] }
                  : { color: e.palette[l].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(Wt(['light']))
            .map(([l]) => ({
              props: { colorSeverity: l, variant: 'outlined' },
              style: {
                color: e.vars ? e.vars.palette.Alert[`${l}Color`] : n(e.palette[l].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[l].light}`,
                [`& .${Jb.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${l}IconColor`] }
                  : { color: e.palette[l].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(Wt(['dark']))
            .map(([l]) => ({
              props: { colorSeverity: l, variant: 'filled' },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${l}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${l}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === 'dark' ? e.palette[l].dark : e.palette[l].main,
                      color: e.palette.getContrastText(e.palette[l].main),
                    }),
              },
            })),
        ],
      };
    }),
  ),
  NT = ge('div', { name: 'MuiAlert', slot: 'Icon' })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  _T = ge('div', { name: 'MuiAlert', slot: 'Message' })({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto',
  }),
  BT = ge('div', { name: 'MuiAlert', slot: 'Action' })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  t0 = {
    success: j.jsx(TT, { fontSize: 'inherit' }),
    warning: j.jsx(AT, { fontSize: 'inherit' }),
    error: j.jsx(RT, { fontSize: 'inherit' }),
    info: j.jsx(MT, { fontSize: 'inherit' }),
  },
  wd = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiAlert' }),
      {
        action: o,
        children: u,
        className: c,
        closeText: d = 'Close',
        color: h,
        components: p = {},
        componentsProps: g = {},
        icon: y,
        iconMapping: v = t0,
        onClose: b,
        role: C = 'alert',
        severity: E = 'success',
        slotProps: O = {},
        slots: T = {},
        variant: $ = 'standard',
        ...M
      } = l,
      N = { ...l, color: h, severity: E, variant: $, colorSeverity: h || E },
      z = zT(N),
      R = {
        slots: { closeButton: p.CloseButton, closeIcon: p.CloseIcon, ...T },
        slotProps: { ...g, ...O },
      },
      [H, Y] = gt('root', {
        ref: i,
        shouldForwardComponentProp: !0,
        className: Ae(z.root, c),
        elementType: DT,
        externalForwardedProps: { ...R, ...M },
        ownerState: N,
        additionalProps: { role: C, elevation: 0 },
      }),
      [Q, B] = gt('icon', {
        className: z.icon,
        elementType: NT,
        externalForwardedProps: R,
        ownerState: N,
      }),
      [q, k] = gt('message', {
        className: z.message,
        elementType: _T,
        externalForwardedProps: R,
        ownerState: N,
      }),
      [X, F] = gt('action', {
        className: z.action,
        elementType: BT,
        externalForwardedProps: R,
        ownerState: N,
      }),
      [I, _] = gt('closeButton', { elementType: ET, externalForwardedProps: R, ownerState: N }),
      [K, ue] = gt('closeIcon', { elementType: OT, externalForwardedProps: R, ownerState: N });
    return j.jsxs(H, {
      ...Y,
      children: [
        y !== !1 ? j.jsx(Q, { ...B, children: y || v[E] || t0[E] }) : null,
        j.jsx(q, { ...k, children: u }),
        o != null ? j.jsx(X, { ...F, children: o }) : null,
        o == null && b
          ? j.jsx(X, {
              ...F,
              children: j.jsx(I, {
                size: 'small',
                'aria-label': d,
                title: d,
                color: 'inherit',
                onClick: b,
                ..._,
                children: j.jsx(K, { fontSize: 'small', ...ue }),
              }),
            })
          : null,
      ],
    });
  });
function LT(e) {
  return We('MuiTypography', e);
}
Je('MuiTypography', [
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
const $T = {
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
  UT = RE(),
  jT = (e) => {
    const { align: n, gutterBottom: i, noWrap: l, paragraph: o, variant: u, classes: c } = e,
      d = {
        root: [
          'root',
          u,
          e.align !== 'inherit' && `align${de(n)}`,
          i && 'gutterBottom',
          l && 'noWrap',
          o && 'paragraph',
        ],
      };
    return et(d, LT, c);
  },
  PT = ge('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        i.variant && n[i.variant],
        i.align !== 'inherit' && n[`align${de(i.align)}`],
        i.noWrap && n.noWrap,
        i.gutterBottom && n.gutterBottom,
        i.paragraph && n.paragraph,
      ];
    },
  })(
    ht(({ theme: e }) => ({
      margin: 0,
      variants: [
        {
          props: { variant: 'inherit' },
          style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' },
        },
        ...Object.entries(e.typography)
          .filter(([n, i]) => n !== 'inherit' && i && typeof i == 'object')
          .map(([n, i]) => ({ props: { variant: n }, style: i })),
        ...Object.entries(e.palette)
          .filter(Wt())
          .map(([n]) => ({ props: { color: n }, style: { color: (e.vars || e).palette[n].main } })),
        ...Object.entries(e.palette?.text || {})
          .filter(([, n]) => typeof n == 'string')
          .map(([n]) => ({
            props: { color: `text${de(n)}` },
            style: { color: (e.vars || e).palette.text[n] },
          })),
        {
          props: ({ ownerState: n }) => n.align !== 'inherit',
          style: { textAlign: 'var(--Typography-textAlign)' },
        },
        {
          props: ({ ownerState: n }) => n.noWrap,
          style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
        },
        { props: ({ ownerState: n }) => n.gutterBottom, style: { marginBottom: '0.35em' } },
        { props: ({ ownerState: n }) => n.paragraph, style: { marginBottom: 16 } },
      ],
    })),
  ),
  n0 = {
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
  sr = D.forwardRef(function (n, i) {
    const { color: l, ...o } = tt({ props: n, name: 'MuiTypography' }),
      u = !$T[l],
      c = UT({ ...o, ...(u && { color: l }) }),
      {
        align: d = 'inherit',
        className: h,
        component: p,
        gutterBottom: g = !1,
        noWrap: y = !1,
        paragraph: v = !1,
        variant: b = 'body1',
        variantMapping: C = n0,
        ...E
      } = c,
      O = {
        ...c,
        align: d,
        color: l,
        className: h,
        component: p,
        gutterBottom: g,
        noWrap: y,
        paragraph: v,
        variant: b,
        variantMapping: C,
      },
      T = p || (v ? 'p' : C[b] || n0[b]) || 'span',
      $ = jT(O);
    return j.jsx(PT, {
      as: T,
      ref: i,
      className: Ae($.root, h),
      ...E,
      ownerState: O,
      style: { ...(d !== 'inherit' && { '--Typography-textAlign': d }), ...E.style },
    });
  });
function IT(e) {
  return We('MuiAppBar', e);
}
Je('MuiAppBar', [
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
const HT = (e) => {
    const { color: n, position: i, classes: l } = e,
      o = { root: ['root', `color${de(n)}`, `position${de(i)}`] };
    return et(o, IT, l);
  },
  r0 = (e, n) => (e ? `${e?.replace(')', '')}, ${n})` : n),
  qT = ge(Pu, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, n[`position${de(i.position)}`], n[`color${de(i.color)}`]];
    },
  })(
    ht(({ theme: e }) => ({
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
            zIndex: (e.vars || e).zIndex.appBar,
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
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
          },
        },
        {
          props: { position: 'sticky' },
          style: {
            position: 'sticky',
            zIndex: (e.vars || e).zIndex.appBar,
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
            '--AppBar-background': e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100],
            '--AppBar-color': e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles('dark', {
              '--AppBar-background': e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900],
              '--AppBar-color': e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(Wt(['contrastText']))
          .map(([n]) => ({
            props: { color: n },
            style: {
              '--AppBar-background': (e.vars ?? e).palette[n].main,
              '--AppBar-color': (e.vars ?? e).palette[n].contrastText,
            },
          })),
        {
          props: (n) => n.enableColorOnDark === !0 && !['inherit', 'transparent'].includes(n.color),
          style: { backgroundColor: 'var(--AppBar-background)', color: 'var(--AppBar-color)' },
        },
        {
          props: (n) => n.enableColorOnDark === !1 && !['inherit', 'transparent'].includes(n.color),
          style: {
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...e.applyStyles('dark', {
              backgroundColor: e.vars
                ? r0(e.vars.palette.AppBar.darkBg, 'var(--AppBar-background)')
                : null,
              color: e.vars ? r0(e.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
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
            ...e.applyStyles('dark', { backgroundImage: 'none' }),
          },
        },
      ],
    })),
  ),
  FT = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiAppBar' }),
      {
        className: o,
        color: u = 'primary',
        enableColorOnDark: c = !1,
        position: d = 'fixed',
        ...h
      } = l,
      p = { ...l, color: u, position: d, enableColorOnDark: c },
      g = HT(p);
    return j.jsx(qT, {
      square: !0,
      component: 'header',
      ownerState: p,
      elevation: 4,
      className: Ae(g.root, o, d === 'fixed' && 'mui-fixed'),
      ref: i,
      ...h,
    });
  });
function VT(e) {
  const {
      elementType: n,
      externalSlotProps: i,
      ownerState: l,
      skipResolvingSlotProps: o = !1,
      ...u
    } = e,
    c = o ? {} : av(i, l),
    { props: d, internalRef: h } = sv({ ...u, externalSlotProps: c }),
    p = on(h, c?.ref, e.additionalProps?.ref);
  return lv(n, { ...d, ref: p }, l);
}
function Ro(e) {
  return parseInt(D.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function YT(e) {
  return typeof e == 'function' ? e() : e;
}
const GT = D.forwardRef(function (n, i) {
    const { children: l, container: o, disablePortal: u = !1 } = n,
      [c, d] = D.useState(null),
      h = on(D.isValidElement(l) ? Ro(l) : null, i);
    if (
      (Br(() => {
        u || d(YT(o) || document.body);
      }, [o, u]),
      Br(() => {
        if (c && !u)
          return (
            Gb(i, c),
            () => {
              Gb(i, null);
            }
          );
      }, [i, c, u]),
      u)
    ) {
      if (D.isValidElement(l)) {
        const p = { ref: h };
        return D.cloneElement(l, p);
      }
      return l;
    }
    return c && nv.createPortal(l, c);
  }),
  XT = Jn(
    j.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    }),
  );
function KT(e) {
  return We('MuiChip', e);
}
const He = Je('MuiChip', [
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
  QT = (e) => {
    const {
        classes: n,
        disabled: i,
        size: l,
        color: o,
        iconColor: u,
        onDelete: c,
        clickable: d,
        variant: h,
      } = e,
      p = {
        root: [
          'root',
          h,
          i && 'disabled',
          `size${de(l)}`,
          `color${de(o)}`,
          d && 'clickable',
          d && `clickableColor${de(o)}`,
          c && 'deletable',
          c && `deletableColor${de(o)}`,
          `${h}${de(o)}`,
        ],
        label: ['label', `label${de(l)}`],
        avatar: ['avatar', `avatar${de(l)}`, `avatarColor${de(o)}`],
        icon: ['icon', `icon${de(l)}`, `iconColor${de(u)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${de(l)}`,
          `deleteIconColor${de(o)}`,
          `deleteIcon${de(h)}Color${de(o)}`,
        ],
      };
    return et(p, KT, n);
  },
  ZT = ge('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e,
        { color: l, iconColor: o, clickable: u, onDelete: c, size: d, variant: h } = i;
      return [
        { [`& .${He.avatar}`]: n.avatar },
        { [`& .${He.avatar}`]: n[`avatar${de(d)}`] },
        { [`& .${He.avatar}`]: n[`avatarColor${de(l)}`] },
        { [`& .${He.icon}`]: n.icon },
        { [`& .${He.icon}`]: n[`icon${de(d)}`] },
        { [`& .${He.icon}`]: n[`iconColor${de(o)}`] },
        { [`& .${He.deleteIcon}`]: n.deleteIcon },
        { [`& .${He.deleteIcon}`]: n[`deleteIcon${de(d)}`] },
        { [`& .${He.deleteIcon}`]: n[`deleteIconColor${de(l)}`] },
        { [`& .${He.deleteIcon}`]: n[`deleteIcon${de(h)}Color${de(l)}`] },
        n.root,
        n[`size${de(d)}`],
        n[`color${de(l)}`],
        u && n.clickable,
        u && l !== 'default' && n[`clickableColor${de(l)})`],
        c && n.deletable,
        c && l !== 'default' && n[`deletableColor${de(l)}`],
        n[h],
        n[`${h}${de(l)}`],
      ];
    },
  })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light' ? e.palette.grey[700] : e.palette.grey[300];
      return {
        maxWidth: '100%',
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        lineHeight: 1.5,
        color: (e.vars || e).palette.text.primary,
        backgroundColor: (e.vars || e).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: e.transitions.create(['background-color', 'box-shadow']),
        cursor: 'unset',
        outline: 0,
        textDecoration: 'none',
        border: 0,
        padding: 0,
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        [`&.${He.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
          pointerEvents: 'none',
        },
        [`& .${He.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
          fontSize: e.typography.pxToRem(12),
        },
        [`& .${He.avatarColorPrimary}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark,
        },
        [`& .${He.avatarColorSecondary}`]: {
          color: (e.vars || e).palette.secondary.contrastText,
          backgroundColor: (e.vars || e).palette.secondary.dark,
        },
        [`& .${He.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10),
        },
        [`& .${He.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${He.deleteIcon}`]: {
          WebkitTapHighlightColor: 'transparent',
          color: e.alpha((e.vars || e).palette.text.primary, 0.26),
          fontSize: 22,
          cursor: 'pointer',
          margin: '0 5px 0 -6px',
          '&:hover': { color: e.alpha((e.vars || e).palette.text.primary, 0.4) },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              height: 24,
              [`& .${He.icon}`]: { fontSize: 18, marginLeft: 4, marginRight: -4 },
              [`& .${He.deleteIcon}`]: { fontSize: 16, marginRight: 4, marginLeft: -4 },
            },
          },
          ...Object.entries(e.palette)
            .filter(Wt(['contrastText']))
            .map(([i]) => ({
              props: { color: i },
              style: {
                backgroundColor: (e.vars || e).palette[i].main,
                color: (e.vars || e).palette[i].contrastText,
                [`& .${He.deleteIcon}`]: {
                  color: e.alpha((e.vars || e).palette[i].contrastText, 0.7),
                  '&:hover, &:active': { color: (e.vars || e).palette[i].contrastText },
                },
              },
            })),
          {
            props: (i) => i.iconColor === i.color,
            style: {
              [`& .${He.icon}`]: { color: e.vars ? e.vars.palette.Chip.defaultIconColor : n },
            },
          },
          {
            props: (i) => i.iconColor === i.color && i.color !== 'default',
            style: { [`& .${He.icon}`]: { color: 'inherit' } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${He.focusVisible}`]: {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.selected,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
                ),
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(Wt(['dark']))
            .map(([i]) => ({
              props: { color: i, onDelete: !0 },
              style: { [`&.${He.focusVisible}`]: { background: (e.vars || e).palette[i].dark } },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.selected,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
                ),
              },
              [`&.${He.focusVisible}`]: {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.selected,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
                ),
              },
              '&:active': { boxShadow: (e.vars || e).shadows[1] },
            },
          },
          ...Object.entries(e.palette)
            .filter(Wt(['dark']))
            .map(([i]) => ({
              props: { color: i, clickable: !0 },
              style: {
                [`&:hover, &.${He.focusVisible}`]: {
                  backgroundColor: (e.vars || e).palette[i].dark,
                },
              },
            })),
          {
            props: { variant: 'outlined' },
            style: {
              backgroundColor: 'transparent',
              border: e.vars
                ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                : `1px solid ${e.palette.mode === 'light' ? e.palette.grey[400] : e.palette.grey[700]}`,
              [`&.${He.clickable}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
              [`&.${He.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
              [`& .${He.avatar}`]: { marginLeft: 4 },
              [`& .${He.avatarSmall}`]: { marginLeft: 2 },
              [`& .${He.icon}`]: { marginLeft: 4 },
              [`& .${He.iconSmall}`]: { marginLeft: 2 },
              [`& .${He.deleteIcon}`]: { marginRight: 5 },
              [`& .${He.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(e.palette)
            .filter(Wt())
            .map(([i]) => ({
              props: { variant: 'outlined', color: i },
              style: {
                color: (e.vars || e).palette[i].main,
                border: `1px solid ${e.alpha((e.vars || e).palette[i].main, 0.7)}`,
                [`&.${He.clickable}:hover`]: {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette[i].main,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                },
                [`&.${He.focusVisible}`]: {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette[i].main,
                    (e.vars || e).palette.action.focusOpacity,
                  ),
                },
                [`& .${He.deleteIcon}`]: {
                  color: e.alpha((e.vars || e).palette[i].main, 0.7),
                  '&:hover, &:active': { color: (e.vars || e).palette[i].main },
                },
              },
            })),
        ],
      };
    }),
  ),
  WT = ge('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e,
        { size: l } = i;
      return [n.label, n[`label${de(l)}`]];
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
function i0(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const JT = D.forwardRef(function (n, i) {
  const l = tt({ props: n, name: 'MuiChip' }),
    {
      avatar: o,
      className: u,
      clickable: c,
      color: d = 'default',
      component: h,
      deleteIcon: p,
      disabled: g = !1,
      icon: y,
      label: v,
      onClick: b,
      onDelete: C,
      onKeyDown: E,
      onKeyUp: O,
      size: T = 'medium',
      variant: $ = 'filled',
      tabIndex: M,
      skipFocusWhenDisabled: N = !1,
      slots: z = {},
      slotProps: R = {},
      ...H
    } = l,
    Y = D.useRef(null),
    Q = on(Y, i),
    B = (te) => {
      (te.stopPropagation(), C && C(te));
    },
    q = (te) => {
      (te.currentTarget === te.target && i0(te) && te.preventDefault(), E && E(te));
    },
    k = (te) => {
      (te.currentTarget === te.target && C && i0(te) && C(te), O && O(te));
    },
    X = c !== !1 && b ? !0 : c,
    F = X || C ? mu : h || 'div',
    I = {
      ...l,
      component: F,
      disabled: g,
      size: T,
      color: d,
      iconColor: (D.isValidElement(y) && y.props.color) || d,
      onDelete: !!C,
      clickable: X,
      variant: $,
    },
    _ = QT(I),
    K =
      F === mu
        ? {
            component: h || 'div',
            focusVisibleClassName: _.focusVisible,
            ...(C && { disableRipple: !0 }),
          }
        : {};
  let ue = null;
  C &&
    (ue =
      p && D.isValidElement(p)
        ? D.cloneElement(p, { className: Ae(p.props.className, _.deleteIcon), onClick: B })
        : j.jsx(XT, { className: _.deleteIcon, onClick: B }));
  let re = null;
  o &&
    D.isValidElement(o) &&
    (re = D.cloneElement(o, { className: Ae(_.avatar, o.props.className) }));
  let S = null;
  y && D.isValidElement(y) && (S = D.cloneElement(y, { className: Ae(_.icon, y.props.className) }));
  const J = { slots: z, slotProps: R },
    [oe, A] = gt('root', {
      elementType: ZT,
      externalForwardedProps: { ...J, ...H },
      ownerState: I,
      shouldForwardComponentProp: !0,
      ref: Q,
      className: Ae(_.root, u),
      additionalProps: { disabled: X && g ? !0 : void 0, tabIndex: N && g ? -1 : M, ...K },
      getSlotProps: (te) => ({
        ...te,
        onClick: (ye) => {
          (te.onClick?.(ye), b?.(ye));
        },
        onKeyDown: (ye) => {
          (te.onKeyDown?.(ye), q(ye));
        },
        onKeyUp: (ye) => {
          (te.onKeyUp?.(ye), k(ye));
        },
      }),
    }),
    [ce, he] = gt('label', {
      elementType: WT,
      externalForwardedProps: J,
      ownerState: I,
      className: _.label,
    });
  return j.jsxs(oe, { as: F, ...A, children: [re || S, j.jsx(ce, { ...he, children: v }), ue] });
});
function Gs(e) {
  return parseInt(e, 10) || 0;
}
const eA = {
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
function tA(e) {
  for (const n in e) return !1;
  return !0;
}
function l0(e) {
  return tA(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const nA = D.forwardRef(function (n, i) {
  const { onChange: l, maxRows: o, minRows: u = 1, style: c, value: d, ...h } = n,
    { current: p } = D.useRef(d != null),
    g = D.useRef(null),
    y = on(i, g),
    v = D.useRef(null),
    b = D.useRef(null),
    C = D.useCallback(() => {
      const M = g.current,
        N = b.current;
      if (!M || !N) return;
      const R = Lr(M).getComputedStyle(M);
      if (R.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      ((N.style.width = R.width),
        (N.value = M.value || n.placeholder || 'x'),
        N.value.slice(-1) ===
          `
` && (N.value += ' '));
      const H = R.boxSizing,
        Y = Gs(R.paddingBottom) + Gs(R.paddingTop),
        Q = Gs(R.borderBottomWidth) + Gs(R.borderTopWidth),
        B = N.scrollHeight;
      N.value = 'x';
      const q = N.scrollHeight;
      let k = B;
      (u && (k = Math.max(Number(u) * q, k)),
        o && (k = Math.min(Number(o) * q, k)),
        (k = Math.max(k, q)));
      const X = k + (H === 'border-box' ? Y + Q : 0),
        F = Math.abs(k - B) <= 1;
      return { outerHeightStyle: X, overflowing: F };
    }, [o, u, n.placeholder]),
    E = Pi(() => {
      const M = g.current,
        N = C();
      if (!M || !N || l0(N)) return !1;
      const z = N.outerHeightStyle;
      return v.current != null && v.current !== z;
    }),
    O = D.useCallback(() => {
      const M = g.current,
        N = C();
      if (!M || !N || l0(N)) return;
      const z = N.outerHeightStyle;
      (v.current !== z && ((v.current = z), (M.style.height = `${z}px`)),
        (M.style.overflow = N.overflowing ? 'hidden' : ''));
    }, [C]),
    T = D.useRef(-1);
  (Br(() => {
    const M = J1(O),
      N = g?.current;
    if (!N) return;
    const z = Lr(N);
    z.addEventListener('resize', M);
    let R;
    return (
      typeof ResizeObserver < 'u' &&
        ((R = new ResizeObserver(() => {
          E() &&
            (R.unobserve(N),
            cancelAnimationFrame(T.current),
            O(),
            (T.current = requestAnimationFrame(() => {
              R.observe(N);
            })));
        })),
        R.observe(N)),
      () => {
        (M.clear(),
          cancelAnimationFrame(T.current),
          z.removeEventListener('resize', M),
          R && R.disconnect());
      }
    );
  }, [C, O, E]),
    Br(() => {
      O();
    }));
  const $ = (M) => {
    p || O();
    const N = M.target,
      z = N.value.length,
      R = N.value.endsWith(`
`),
      H = N.selectionStart === z;
    (R && H && N.setSelectionRange(z, z), l && l(M));
  };
  return j.jsxs(D.Fragment, {
    children: [
      j.jsx('textarea', { value: d, onChange: $, ref: y, rows: u, style: c, ...h }),
      j.jsx('textarea', {
        'aria-hidden': !0,
        className: n.className,
        readOnly: !0,
        ref: b,
        tabIndex: -1,
        style: { ...eA.shadow, ...c, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Yl({ props: e, states: n, muiFormControl: i }) {
  return n.reduce((l, o) => ((l[o] = e[o]), i && typeof e[o] > 'u' && (l[o] = i[o]), l), {});
}
const Yp = D.createContext(void 0);
function Gl() {
  return D.useContext(Yp);
}
function a0(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function gu(e, n = !1) {
  return (
    e && ((a0(e.value) && e.value !== '') || (n && a0(e.defaultValue) && e.defaultValue !== ''))
  );
}
function rA(e) {
  return e.startAdornment;
}
function iA(e) {
  return We('MuiInputBase', e);
}
const ql = Je('MuiInputBase', [
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
var o0;
const Iu = (e, n) => {
    const { ownerState: i } = e;
    return [
      n.root,
      i.formControl && n.formControl,
      i.startAdornment && n.adornedStart,
      i.endAdornment && n.adornedEnd,
      i.error && n.error,
      i.size === 'small' && n.sizeSmall,
      i.multiline && n.multiline,
      i.color && n[`color${de(i.color)}`],
      i.fullWidth && n.fullWidth,
      i.hiddenLabel && n.hiddenLabel,
    ];
  },
  Hu = (e, n) => {
    const { ownerState: i } = e;
    return [
      n.input,
      i.size === 'small' && n.inputSizeSmall,
      i.multiline && n.inputMultiline,
      i.type === 'search' && n.inputTypeSearch,
      i.startAdornment && n.inputAdornedStart,
      i.endAdornment && n.inputAdornedEnd,
      i.hiddenLabel && n.inputHiddenLabel,
    ];
  },
  lA = (e) => {
    const {
        classes: n,
        color: i,
        disabled: l,
        error: o,
        endAdornment: u,
        focused: c,
        formControl: d,
        fullWidth: h,
        hiddenLabel: p,
        multiline: g,
        readOnly: y,
        size: v,
        startAdornment: b,
        type: C,
      } = e,
      E = {
        root: [
          'root',
          `color${de(i)}`,
          l && 'disabled',
          o && 'error',
          h && 'fullWidth',
          c && 'focused',
          d && 'formControl',
          v && v !== 'medium' && `size${de(v)}`,
          g && 'multiline',
          b && 'adornedStart',
          u && 'adornedEnd',
          p && 'hiddenLabel',
          y && 'readOnly',
        ],
        input: [
          'input',
          l && 'disabled',
          C === 'search' && 'inputTypeSearch',
          g && 'inputMultiline',
          v === 'small' && 'inputSizeSmall',
          p && 'inputHiddenLabel',
          b && 'inputAdornedStart',
          u && 'inputAdornedEnd',
          y && 'readOnly',
        ],
      };
    return et(E, iA, n);
  },
  qu = ge('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: Iu })(
    ht(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${ql.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: 'default' },
      variants: [
        { props: ({ ownerState: n }) => n.multiline, style: { padding: '4px 0 5px' } },
        {
          props: ({ ownerState: n, size: i }) => n.multiline && i === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: n }) => n.fullWidth, style: { width: '100%' } },
      ],
    })),
  ),
  Fu = ge('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: Hu })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light',
        i = {
          color: 'currentColor',
          ...(e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 }),
          transition: e.transitions.create('opacity', { duration: e.transitions.duration.shorter }),
        },
        l = { opacity: '0 !important' },
        o = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 };
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
        '&::-webkit-input-placeholder': i,
        '&::-moz-placeholder': i,
        '&::-ms-input-placeholder': i,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${ql.formControl} &`]: {
          '&::-webkit-input-placeholder': l,
          '&::-moz-placeholder': l,
          '&::-ms-input-placeholder': l,
          '&:focus::-webkit-input-placeholder': o,
          '&:focus::-moz-placeholder': o,
          '&:focus::-ms-input-placeholder': o,
        },
        [`&.${ql.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: u }) => !u.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: u }) => u.multiline,
            style: { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      };
    }),
  ),
  s0 = Ip({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  Gp = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiInputBase' }),
      {
        'aria-describedby': o,
        autoComplete: u,
        autoFocus: c,
        className: d,
        color: h,
        components: p = {},
        componentsProps: g = {},
        defaultValue: y,
        disabled: v,
        disableInjectingGlobalStyles: b,
        endAdornment: C,
        error: E,
        fullWidth: O = !1,
        id: T,
        inputComponent: $ = 'input',
        inputProps: M = {},
        inputRef: N,
        margin: z,
        maxRows: R,
        minRows: H,
        multiline: Y = !1,
        name: Q,
        onBlur: B,
        onChange: q,
        onClick: k,
        onFocus: X,
        onKeyDown: F,
        onKeyUp: I,
        placeholder: _,
        readOnly: K,
        renderSuffix: ue,
        rows: re,
        size: S,
        slotProps: J = {},
        slots: oe = {},
        startAdornment: A,
        type: ce = 'text',
        value: he,
        ...te
      } = l,
      ye = M.value != null ? M.value : he,
      { current: ve } = D.useRef(ye != null),
      Re = D.useRef(),
      Ce = D.useCallback((Le) => {}, []),
      Oe = on(Re, N, M.ref, Ce),
      [je, Ct] = D.useState(!1),
      De = Gl(),
      Ye = Yl({
        props: l,
        muiFormControl: De,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    ((Ye.focused = De ? De.focused : je),
      D.useEffect(() => {
        !De && v && je && (Ct(!1), B && B());
      }, [De, v, je, B]));
    const _t = De && De.onFilled,
      Ge = De && De.onEmpty,
      bt = D.useCallback(
        (Le) => {
          gu(Le) ? _t && _t() : Ge && Ge();
        },
        [_t, Ge],
      );
    Br(() => {
      ve && bt({ value: ye });
    }, [ye, bt, ve]);
    const ut = (Le) => {
        (X && X(Le), M.onFocus && M.onFocus(Le), De && De.onFocus ? De.onFocus(Le) : Ct(!0));
      },
      vt = (Le) => {
        (B && B(Le), M.onBlur && M.onBlur(Le), De && De.onBlur ? De.onBlur(Le) : Ct(!1));
      },
      nt = (Le, ...Jt) => {
        if (!ve) {
          const jt = Le.target || Re.current;
          if (jt == null) throw new Error(Nr(1));
          bt({ value: jt.value });
        }
        (M.onChange && M.onChange(Le, ...Jt), q && q(Le, ...Jt));
      };
    D.useEffect(() => {
      bt(Re.current);
    }, []);
    const Se = (Le) => {
      (Re.current && Le.currentTarget === Le.target && Re.current.focus(), k && k(Le));
    };
    let sn = $,
      kt = M;
    Y &&
      sn === 'input' &&
      (re
        ? (kt = { type: void 0, minRows: re, maxRows: re, ...kt })
        : (kt = { type: void 0, maxRows: R, minRows: H, ...kt }),
      (sn = nA));
    const xn = (Le) => {
      bt(Le.animationName === 'mui-auto-fill-cancel' ? Re.current : { value: 'x' });
    };
    D.useEffect(() => {
      De && De.setAdornedStart(!!A);
    }, [De, A]);
    const ee = {
        ...l,
        color: Ye.color || 'primary',
        disabled: Ye.disabled,
        endAdornment: C,
        error: Ye.error,
        focused: Ye.focused,
        formControl: De,
        fullWidth: O,
        hiddenLabel: Ye.hiddenLabel,
        multiline: Y,
        size: Ye.size,
        startAdornment: A,
        type: ce,
      },
      le = lA(ee),
      pe = oe.root || p.Root || qu,
      me = J.root || g.root || {},
      Ne = oe.input || p.Input || Fu;
    return (
      (kt = { ...kt, ...(J.input ?? g.input) }),
      j.jsxs(D.Fragment, {
        children: [
          !b && typeof s0 == 'function' && (o0 || (o0 = j.jsx(s0, {}))),
          j.jsxs(pe, {
            ...me,
            ref: i,
            onClick: Se,
            ...te,
            ...(!pu(pe) && { ownerState: { ...ee, ...me.ownerState } }),
            className: Ae(le.root, me.className, d, K && 'MuiInputBase-readOnly'),
            children: [
              A,
              j.jsx(Yp.Provider, {
                value: null,
                children: j.jsx(Ne, {
                  'aria-invalid': Ye.error,
                  'aria-describedby': o,
                  autoComplete: u,
                  autoFocus: c,
                  defaultValue: y,
                  disabled: Ye.disabled,
                  id: T,
                  onAnimationStart: xn,
                  name: Q,
                  placeholder: _,
                  readOnly: K,
                  required: Ye.required,
                  rows: re,
                  value: ye,
                  onKeyDown: F,
                  onKeyUp: I,
                  type: ce,
                  ...kt,
                  ...(!pu(Ne) && { as: sn, ownerState: { ...ee, ...kt.ownerState } }),
                  ref: Oe,
                  className: Ae(le.input, kt.className, K && 'MuiInputBase-readOnly'),
                  onBlur: vt,
                  onChange: nt,
                  onFocus: ut,
                }),
              }),
              C,
              ue ? ue({ ...Ye, startAdornment: A }) : null,
            ],
          }),
        ],
      })
    );
  });
function aA(e) {
  return We('MuiInput', e);
}
const Qa = { ...ql, ...Je('MuiInput', ['root', 'underline', 'input']) };
function oA(e) {
  return We('MuiOutlinedInput', e);
}
const or = { ...ql, ...Je('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) };
function sA(e) {
  return We('MuiFilledInput', e);
}
const Di = {
    ...ql,
    ...Je('MuiFilledInput', [
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
  uA = Jn(j.jsx('path', { d: 'M7 10l5 5 5-5z' })),
  cA = Jn(
    j.jsx('path', {
      d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    }),
  );
function fA(e) {
  return We('MuiAvatar', e);
}
Je('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
const dA = (e) => {
    const { classes: n, variant: i, colorDefault: l } = e;
    return et(
      { root: ['root', i, l && 'colorDefault'], img: ['img'], fallback: ['fallback'] },
      fA,
      n,
    );
  },
  pA = ge('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, n[i.variant], i.colorDefault && n.colorDefault];
    },
  })(
    ht(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none',
      variants: [
        {
          props: { variant: 'rounded' },
          style: { borderRadius: (e.vars || e).shape.borderRadius },
        },
        { props: { variant: 'square' }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (e.vars || e).palette.background.default,
            ...(e.vars
              ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: e.palette.grey[400],
                  ...e.applyStyles('dark', { backgroundColor: e.palette.grey[600] }),
                }),
          },
        },
      ],
    })),
  ),
  hA = ge('img', { name: 'MuiAvatar', slot: 'Img' })({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent',
    textIndent: 1e4,
  }),
  mA = ge(cA, { name: 'MuiAvatar', slot: 'Fallback' })({ width: '75%', height: '75%' });
function gA({ crossOrigin: e, referrerPolicy: n, src: i, srcSet: l }) {
  const [o, u] = D.useState(!1);
  return (
    D.useEffect(() => {
      if (!i && !l) return;
      u(!1);
      let c = !0;
      const d = new Image();
      return (
        (d.onload = () => {
          c && u('loaded');
        }),
        (d.onerror = () => {
          c && u('error');
        }),
        (d.crossOrigin = e),
        (d.referrerPolicy = n),
        (d.src = i),
        l && (d.srcset = l),
        () => {
          c = !1;
        }
      );
    }, [e, n, i, l]),
    o
  );
}
const yA = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiAvatar' }),
      {
        alt: o,
        children: u,
        className: c,
        component: d = 'div',
        slots: h = {},
        slotProps: p = {},
        imgProps: g,
        sizes: y,
        src: v,
        srcSet: b,
        variant: C = 'circular',
        ...E
      } = l;
    let O = null;
    const T = { ...l, component: d, variant: C },
      $ = gA({ ...g, ...(typeof p.img == 'function' ? p.img(T) : p.img), src: v, srcSet: b }),
      M = v || b,
      N = M && $ !== 'error';
    ((T.colorDefault = !N), delete T.ownerState);
    const z = dA(T),
      [R, H] = gt('root', {
        ref: i,
        className: Ae(z.root, c),
        elementType: pA,
        externalForwardedProps: { slots: h, slotProps: p, component: d, ...E },
        ownerState: T,
      }),
      [Y, Q] = gt('img', {
        className: z.img,
        elementType: hA,
        externalForwardedProps: { slots: h, slotProps: { img: { ...g, ...p.img } } },
        additionalProps: { alt: o, src: v, srcSet: b, sizes: y },
        ownerState: T,
      }),
      [B, q] = gt('fallback', {
        className: z.fallback,
        elementType: mA,
        externalForwardedProps: { slots: h, slotProps: p },
        shouldForwardComponentProp: !0,
        ownerState: T,
      });
    return (
      N
        ? (O = j.jsx(Y, { ...Q }))
        : u || u === 0
          ? (O = u)
          : M && o
            ? (O = o[0])
            : (O = j.jsx(B, { ...q })),
      j.jsx(R, { ...H, children: O })
    );
  }),
  bA = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  vA = D.forwardRef(function (n, i) {
    const l = ju(),
      o = {
        enter: l.transitions.duration.enteringScreen,
        exit: l.transitions.duration.leavingScreen,
      },
      {
        addEndListener: u,
        appear: c = !0,
        children: d,
        easing: h,
        in: p,
        onEnter: g,
        onEntered: y,
        onEntering: v,
        onExit: b,
        onExited: C,
        onExiting: E,
        style: O,
        timeout: T = o,
        TransitionComponent: $ = er,
        ...M
      } = n,
      N = D.useRef(null),
      z = on(N, Ro(d), i),
      R = (F) => (I) => {
        if (F) {
          const _ = N.current;
          I === void 0 ? F(_) : F(_, I);
        }
      },
      H = R(v),
      Y = R((F, I) => {
        iv(F);
        const _ = Hl({ style: O, timeout: T, easing: h }, { mode: 'enter' });
        ((F.style.webkitTransition = l.transitions.create('opacity', _)),
          (F.style.transition = l.transitions.create('opacity', _)),
          g && g(F, I));
      }),
      Q = R(y),
      B = R(E),
      q = R((F) => {
        const I = Hl({ style: O, timeout: T, easing: h }, { mode: 'exit' });
        ((F.style.webkitTransition = l.transitions.create('opacity', I)),
          (F.style.transition = l.transitions.create('opacity', I)),
          b && b(F));
      }),
      k = R(C),
      X = (F) => {
        u && u(N.current, F);
      };
    return j.jsx($, {
      appear: c,
      in: p,
      nodeRef: N,
      onEnter: Y,
      onEntered: Q,
      onEntering: H,
      onExit: q,
      onExited: k,
      onExiting: B,
      addEndListener: X,
      timeout: T,
      ...M,
      children: (F, { ownerState: I, ..._ }) =>
        D.cloneElement(d, {
          style: {
            opacity: 0,
            visibility: F === 'exited' && !p ? 'hidden' : void 0,
            ...bA[F],
            ...O,
            ...d.props.style,
          },
          ref: z,
          ..._,
        }),
    });
  });
function xA(e) {
  return We('MuiBackdrop', e);
}
Je('MuiBackdrop', ['root', 'invisible']);
const SA = (e) => {
    const { classes: n, invisible: i } = e;
    return et({ root: ['root', i && 'invisible'] }, xA, n);
  },
  CA = ge('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, i.invisible && n.invisible];
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
  kA = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiBackdrop' }),
      {
        children: o,
        className: u,
        component: c = 'div',
        invisible: d = !1,
        open: h,
        components: p = {},
        componentsProps: g = {},
        slotProps: y = {},
        slots: v = {},
        TransitionComponent: b,
        transitionDuration: C,
        ...E
      } = l,
      O = { ...l, component: c, invisible: d },
      T = SA(O),
      $ = { transition: b, root: p.Root, ...v },
      M = { ...g, ...y },
      N = { component: c, slots: $, slotProps: M },
      [z, R] = gt('root', {
        elementType: CA,
        externalForwardedProps: N,
        className: Ae(T.root, u),
        ownerState: O,
      }),
      [H, Y] = gt('transition', { elementType: vA, externalForwardedProps: N, ownerState: O });
    return j.jsx(H, {
      in: h,
      timeout: C,
      ...E,
      ...Y,
      children: j.jsx(z, { 'aria-hidden': !0, ...R, classes: T, ref: i, children: o }),
    });
  }),
  wA = Je('MuiBox', ['root']),
  EA = Uu(),
  io = Wk({
    themeId: pr,
    defaultTheme: EA,
    defaultClassName: wA.root,
    generateClassName: N1.generate,
  });
function TA(e) {
  return We('MuiButton', e);
}
const Ni = Je('MuiButton', [
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
  AA = D.createContext({}),
  RA = D.createContext(void 0),
  MA = (e) => {
    const {
        color: n,
        disableElevation: i,
        fullWidth: l,
        size: o,
        variant: u,
        loading: c,
        loadingPosition: d,
        classes: h,
      } = e,
      p = {
        root: [
          'root',
          c && 'loading',
          u,
          `${u}${de(n)}`,
          `size${de(o)}`,
          `${u}Size${de(o)}`,
          `color${de(n)}`,
          i && 'disableElevation',
          l && 'fullWidth',
          c && `loadingPosition${de(d)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${de(o)}`],
        endIcon: ['icon', 'endIcon', `iconSize${de(o)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      g = et(p, TA, h);
    return { ...h, ...g };
  },
  cv = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  OA = ge(mu, {
    shouldForwardProp: (e) => Wn(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        n[i.variant],
        n[`${i.variant}${de(i.color)}`],
        n[`size${de(i.size)}`],
        n[`${i.variant}Size${de(i.size)}`],
        i.color === 'inherit' && n.colorInherit,
        i.disableElevation && n.disableElevation,
        i.fullWidth && n.fullWidth,
        i.loading && n.loading,
      ];
    },
  })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light' ? e.palette.grey[300] : e.palette.grey[800],
        i = e.palette.mode === 'light' ? e.palette.grey.A100 : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: e.transitions.duration.short },
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${Ni.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (e.vars || e).shadows[2],
              '&:hover': {
                boxShadow: (e.vars || e).shadows[4],
                '@media (hover: none)': { boxShadow: (e.vars || e).shadows[2] },
              },
              '&:active': { boxShadow: (e.vars || e).shadows[8] },
              [`&.${Ni.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Ni.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action.disabledBackground,
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
              [`&.${Ni.disabled}`]: {
                border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
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
          ...Object.entries(e.palette)
            .filter(Wt())
            .map(([l]) => ({
              props: { color: l },
              style: {
                '--variant-textColor': (e.vars || e).palette[l].main,
                '--variant-outlinedColor': (e.vars || e).palette[l].main,
                '--variant-outlinedBorder': e.alpha((e.vars || e).palette[l].main, 0.5),
                '--variant-containedColor': (e.vars || e).palette[l].contrastText,
                '--variant-containedBg': (e.vars || e).palette[l].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (e.vars || e).palette[l].dark,
                    '--variant-textBg': e.alpha(
                      (e.vars || e).palette[l].main,
                      (e.vars || e).palette.action.hoverOpacity,
                    ),
                    '--variant-outlinedBorder': (e.vars || e).palette[l].main,
                    '--variant-outlinedBg': e.alpha(
                      (e.vars || e).palette[l].main,
                      (e.vars || e).palette.action.hoverOpacity,
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
              '--variant-containedBg': e.vars ? e.vars.palette.Button.inheritContainedBg : n,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : i,
                  '--variant-textBg': e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                  '--variant-outlinedBg': e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${Ni.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${Ni.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: e.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: e.transitions.duration.short,
              }),
              [`&.${Ni.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    }),
  ),
  zA = ge('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.startIcon, i.loading && n.startIconLoadingStart, n[`iconSize${de(i.size)}`]];
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: 'small' }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: 'start', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], { duration: e.transitions.duration.short }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: 'start', loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...cv,
    ],
  })),
  DA = ge('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.endIcon, i.loading && n.endIconLoadingEnd, n[`iconSize${de(i.size)}`]];
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: 'small' }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: 'end', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], { duration: e.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: 'end', loading: !0, fullWidth: !0 }, style: { marginLeft: -8 } },
      ...cv,
    ],
  })),
  NA = ge('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: e }) => ({
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
          color: (e.vars || e).palette.action.disabled,
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
  u0 = ge('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  _A = D.forwardRef(function (n, i) {
    const l = D.useContext(AA),
      o = D.useContext(RA),
      u = go(l, n),
      c = tt({ props: u, name: 'MuiButton' }),
      {
        children: d,
        color: h = 'primary',
        component: p = 'button',
        className: g,
        disabled: y = !1,
        disableElevation: v = !1,
        disableFocusRipple: b = !1,
        endIcon: C,
        focusVisibleClassName: E,
        fullWidth: O = !1,
        id: T,
        loading: $ = null,
        loadingIndicator: M,
        loadingPosition: N = 'center',
        size: z = 'medium',
        startIcon: R,
        type: H,
        variant: Y = 'text',
        ...Q
      } = c,
      B = Ao(T),
      q = M ?? j.jsx(uv, { 'aria-labelledby': B, color: 'inherit', size: 16 }),
      k = {
        ...c,
        color: h,
        component: p,
        disabled: y,
        disableElevation: v,
        disableFocusRipple: b,
        fullWidth: O,
        loading: $,
        loadingIndicator: q,
        loadingPosition: N,
        size: z,
        type: H,
        variant: Y,
      },
      X = MA(k),
      F =
        (R || ($ && N === 'start')) &&
        j.jsx(zA, {
          className: X.startIcon,
          ownerState: k,
          children: R || j.jsx(u0, { className: X.loadingIconPlaceholder, ownerState: k }),
        }),
      I =
        (C || ($ && N === 'end')) &&
        j.jsx(DA, {
          className: X.endIcon,
          ownerState: k,
          children: C || j.jsx(u0, { className: X.loadingIconPlaceholder, ownerState: k }),
        }),
      _ = o || '',
      K =
        typeof $ == 'boolean'
          ? j.jsx('span', {
              className: X.loadingWrapper,
              style: { display: 'contents' },
              children:
                $ && j.jsx(NA, { className: X.loadingIndicator, ownerState: k, children: q }),
            })
          : null;
    return j.jsxs(OA, {
      ownerState: k,
      className: Ae(l.className, X.root, g, _),
      component: p,
      disabled: y || $,
      focusRipple: !b,
      focusVisibleClassName: Ae(X.focusVisible, E),
      ref: i,
      type: H,
      id: $ ? B : T,
      ...Q,
      classes: X,
      children: [F, N !== 'end' && K, d, N === 'end' && K, I],
    });
  }),
  BA = Vw({
    createStyledComponent: ge('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, n) => {
        const { ownerState: i } = e;
        return [
          n.root,
          n[`maxWidth${de(String(i.maxWidth))}`],
          i.fixed && n.fixed,
          i.disableGutters && n.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => tt({ props: e, name: 'MuiContainer' }),
  }),
  ap = typeof Ip({}) == 'function',
  LA = (e, n) => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    WebkitTextSizeAdjust: '100%',
    ...(n && !e.vars && { colorScheme: e.palette.mode }),
  }),
  $A = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    '@media print': { backgroundColor: (e.vars || e).palette.common.white },
  }),
  fv = (e, n = !1) => {
    const i = {};
    n &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == 'function' &&
      Object.entries(e.colorSchemes).forEach(([u, c]) => {
        const d = e.getColorSchemeSelector(u);
        d.startsWith('@')
          ? (i[d] = { ':root': { colorScheme: c.palette?.mode } })
          : (i[d.replace(/\s*&/, '')] = { colorScheme: c.palette?.mode });
      });
    let l = {
      html: LA(e, n),
      '*, *::before, *::after': { boxSizing: 'inherit' },
      'strong, b': { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...$A(e),
        '&::backdrop': { backgroundColor: (e.vars || e).palette.background.default },
      },
      ...i,
    };
    const o = e.components?.MuiCssBaseline?.styleOverrides;
    return (o && (l = [l, o]), l);
  },
  au = 'mui-ecs',
  UA = (e) => {
    const n = fv(e, !1),
      i = Array.isArray(n) ? n[0] : n;
    return (
      !e.vars && i && (i.html[`:root:has(${au})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([l, o]) => {
          const u = e.getColorSchemeSelector(l);
          u.startsWith('@')
            ? (i[u] = { [`:root:not(:has(.${au}))`]: { colorScheme: o.palette?.mode } })
            : (i[u.replace(/\s*&/, '')] = {
                [`&:not(:has(.${au}))`]: { colorScheme: o.palette?.mode },
              });
        }),
      n
    );
  },
  jA = Ip(ap ? ({ theme: e, enableColorScheme: n }) => fv(e, n) : ({ theme: e }) => UA(e));
function PA(e) {
  const n = tt({ props: e, name: 'MuiCssBaseline' }),
    { children: i, enableColorScheme: l = !1 } = n;
  return j.jsxs(D.Fragment, {
    children: [
      ap && j.jsx(jA, { enableColorScheme: l }),
      !ap && !l && j.jsx('span', { className: au, style: { display: 'none' } }),
      i,
    ],
  });
}
function dv(e = window) {
  const n = e.document.documentElement.clientWidth;
  return e.innerWidth - n;
}
function IA(e) {
  const n = Zn(e);
  return n.body === e
    ? Lr(e).innerWidth > n.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function oo(e, n) {
  n ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function c0(e) {
  return parseInt(Lr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function HA(e) {
  const i = [
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
    ].includes(e.tagName),
    l = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return i || l;
}
function f0(e, n, i, l, o) {
  const u = [n, i, ...l];
  [].forEach.call(e.children, (c) => {
    const d = !u.includes(c),
      h = !HA(c);
    d && h && oo(c, o);
  });
}
function Ed(e, n) {
  let i = -1;
  return (e.some((l, o) => (n(l) ? ((i = o), !0) : !1)), i);
}
function qA(e, n) {
  const i = [],
    l = e.container;
  if (!n.disableScrollLock) {
    if (IA(l)) {
      const c = dv(Lr(l));
      (i.push({ value: l.style.paddingRight, property: 'padding-right', el: l }),
        (l.style.paddingRight = `${c0(l) + c}px`));
      const d = Zn(l).querySelectorAll('.mui-fixed');
      [].forEach.call(d, (h) => {
        (i.push({ value: h.style.paddingRight, property: 'padding-right', el: h }),
          (h.style.paddingRight = `${c0(h) + c}px`));
      });
    }
    let u;
    if (l.parentNode instanceof DocumentFragment) u = Zn(l).body;
    else {
      const c = l.parentElement,
        d = Lr(l);
      u = c?.nodeName === 'HTML' && d.getComputedStyle(c).overflowY === 'scroll' ? c : l;
    }
    (i.push(
      { value: u.style.overflow, property: 'overflow', el: u },
      { value: u.style.overflowX, property: 'overflow-x', el: u },
      { value: u.style.overflowY, property: 'overflow-y', el: u },
    ),
      (u.style.overflow = 'hidden'));
  }
  return () => {
    i.forEach(({ value: u, el: c, property: d }) => {
      u ? c.style.setProperty(d, u) : c.style.removeProperty(d);
    });
  };
}
function FA(e) {
  const n = [];
  return (
    [].forEach.call(e.children, (i) => {
      i.getAttribute('aria-hidden') === 'true' && n.push(i);
    }),
    n
  );
}
class VA {
  constructor() {
    ((this.modals = []), (this.containers = []));
  }
  add(n, i) {
    let l = this.modals.indexOf(n);
    if (l !== -1) return l;
    ((l = this.modals.length), this.modals.push(n), n.modalRef && oo(n.modalRef, !1));
    const o = FA(i);
    f0(i, n.mount, n.modalRef, o, !0);
    const u = Ed(this.containers, (c) => c.container === i);
    return u !== -1
      ? (this.containers[u].modals.push(n), l)
      : (this.containers.push({ modals: [n], container: i, restore: null, hiddenSiblings: o }), l);
  }
  mount(n, i) {
    const l = Ed(this.containers, (u) => u.modals.includes(n)),
      o = this.containers[l];
    o.restore || (o.restore = qA(o, i));
  }
  remove(n, i = !0) {
    const l = this.modals.indexOf(n);
    if (l === -1) return l;
    const o = Ed(this.containers, (c) => c.modals.includes(n)),
      u = this.containers[o];
    if ((u.modals.splice(u.modals.indexOf(n), 1), this.modals.splice(l, 1), u.modals.length === 0))
      (u.restore && u.restore(),
        n.modalRef && oo(n.modalRef, i),
        f0(u.container, n.mount, n.modalRef, u.hiddenSiblings, !1),
        this.containers.splice(o, 1));
    else {
      const c = u.modals[u.modals.length - 1];
      c.modalRef && oo(c.modalRef, !1);
    }
    return l;
  }
  isTopModal(n) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === n;
  }
}
const YA = [
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
function GA(e) {
  const n = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(n)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' || e.nodeName === 'VIDEO' || e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : n;
}
function XA(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const n = (l) => e.ownerDocument.querySelector(`input[type="radio"]${l}`);
  let i = n(`[name="${e.name}"]:checked`);
  return (i || (i = n(`[name="${e.name}"]`)), i !== e);
}
function KA(e) {
  return !(e.disabled || (e.tagName === 'INPUT' && e.type === 'hidden') || XA(e));
}
function QA(e) {
  const n = [],
    i = [];
  return (
    Array.from(e.querySelectorAll(YA)).forEach((l, o) => {
      const u = GA(l);
      u === -1 ||
        !KA(l) ||
        (u === 0 ? n.push(l) : i.push({ documentOrder: o, tabIndex: u, node: l }));
    }),
    i
      .sort((l, o) =>
        l.tabIndex === o.tabIndex ? l.documentOrder - o.documentOrder : l.tabIndex - o.tabIndex,
      )
      .map((l) => l.node)
      .concat(n)
  );
}
function ZA() {
  return !0;
}
function WA(e) {
  const {
      children: n,
      disableAutoFocus: i = !1,
      disableEnforceFocus: l = !1,
      disableRestoreFocus: o = !1,
      getTabbable: u = QA,
      isEnabled: c = ZA,
      open: d,
    } = e,
    h = D.useRef(!1),
    p = D.useRef(null),
    g = D.useRef(null),
    y = D.useRef(null),
    v = D.useRef(null),
    b = D.useRef(!1),
    C = D.useRef(null),
    E = on(Ro(n), C),
    O = D.useRef(null);
  (D.useEffect(() => {
    !d || !C.current || (b.current = !i);
  }, [i, d]),
    D.useEffect(() => {
      if (!d || !C.current) return;
      const M = Zn(C.current);
      return (
        C.current.contains(M.activeElement) ||
          (C.current.hasAttribute('tabIndex') || C.current.setAttribute('tabIndex', '-1'),
          b.current && C.current.focus()),
        () => {
          o ||
            (y.current && y.current.focus && ((h.current = !0), y.current.focus()),
            (y.current = null));
        }
      );
    }, [d]),
    D.useEffect(() => {
      if (!d || !C.current) return;
      const M = Zn(C.current),
        N = (H) => {
          ((O.current = H),
            !(l || !c() || H.key !== 'Tab') &&
              M.activeElement === C.current &&
              H.shiftKey &&
              ((h.current = !0), g.current && g.current.focus()));
        },
        z = () => {
          const H = C.current;
          if (H === null) return;
          if (!M.hasFocus() || !c() || h.current) {
            h.current = !1;
            return;
          }
          if (
            H.contains(M.activeElement) ||
            (l && M.activeElement !== p.current && M.activeElement !== g.current)
          )
            return;
          if (M.activeElement !== v.current) v.current = null;
          else if (v.current !== null) return;
          if (!b.current) return;
          let Y = [];
          if (
            ((M.activeElement === p.current || M.activeElement === g.current) && (Y = u(C.current)),
            Y.length > 0)
          ) {
            const Q = !!(O.current?.shiftKey && O.current?.key === 'Tab'),
              B = Y[0],
              q = Y[Y.length - 1];
            typeof B != 'string' && typeof q != 'string' && (Q ? q.focus() : B.focus());
          } else H.focus();
        };
      (M.addEventListener('focusin', z), M.addEventListener('keydown', N, !0));
      const R = setInterval(() => {
        M.activeElement && M.activeElement.tagName === 'BODY' && z();
      }, 50);
      return () => {
        (clearInterval(R),
          M.removeEventListener('focusin', z),
          M.removeEventListener('keydown', N, !0));
      };
    }, [i, l, o, c, d, u]));
  const T = (M) => {
      (y.current === null && (y.current = M.relatedTarget),
        (b.current = !0),
        (v.current = M.target));
      const N = n.props.onFocus;
      N && N(M);
    },
    $ = (M) => {
      (y.current === null && (y.current = M.relatedTarget), (b.current = !0));
    };
  return j.jsxs(D.Fragment, {
    children: [
      j.jsx('div', { tabIndex: d ? 0 : -1, onFocus: $, ref: p, 'data-testid': 'sentinelStart' }),
      D.cloneElement(n, { ref: E, onFocus: T }),
      j.jsx('div', { tabIndex: d ? 0 : -1, onFocus: $, ref: g, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function JA(e) {
  return typeof e == 'function' ? e() : e;
}
function eR(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const d0 = () => {},
  Xs = new VA();
function tR(e) {
  const {
      container: n,
      disableEscapeKeyDown: i = !1,
      disableScrollLock: l = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: u,
      onTransitionExited: c,
      children: d,
      onClose: h,
      open: p,
      rootRef: g,
    } = e,
    y = D.useRef({}),
    v = D.useRef(null),
    b = D.useRef(null),
    C = on(b, g),
    [E, O] = D.useState(!p),
    T = eR(d);
  let $ = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && ($ = !1);
  const M = () => Zn(v.current),
    N = () => ((y.current.modalRef = b.current), (y.current.mount = v.current), y.current),
    z = () => {
      (Xs.mount(N(), { disableScrollLock: l }), b.current && (b.current.scrollTop = 0));
    },
    R = Pi(() => {
      const I = JA(n) || M().body;
      (Xs.add(N(), I), b.current && z());
    }),
    H = () => Xs.isTopModal(N()),
    Y = Pi((I) => {
      ((v.current = I), I && (p && H() ? z() : b.current && oo(b.current, $)));
    }),
    Q = D.useCallback(() => {
      Xs.remove(N(), $);
    }, [$]);
  (D.useEffect(
    () => () => {
      Q();
    },
    [Q],
  ),
    D.useEffect(() => {
      p ? R() : (!T || !o) && Q();
    }, [p, Q, T, o, R]));
  const B = (I) => (_) => {
      (I.onKeyDown?.(_),
        !(_.key !== 'Escape' || _.which === 229 || !H()) &&
          (i || (_.stopPropagation(), h && h(_, 'escapeKeyDown'))));
    },
    q = (I) => (_) => {
      (I.onClick?.(_), _.target === _.currentTarget && h && h(_, 'backdropClick'));
    };
  return {
    getRootProps: (I = {}) => {
      const _ = ov(e);
      (delete _.onTransitionEnter, delete _.onTransitionExited);
      const K = { ..._, ...I };
      return { role: 'presentation', ...K, onKeyDown: B(K), ref: C };
    },
    getBackdropProps: (I = {}) => {
      const _ = I;
      return { 'aria-hidden': !0, ..._, onClick: q(_), open: p };
    },
    getTransitionProps: () => {
      const I = () => {
          (O(!1), u && u());
        },
        _ = () => {
          (O(!0), c && c(), o && Q());
        };
      return { onEnter: Yb(I, d?.props.onEnter ?? d0), onExited: Yb(_, d?.props.onExited ?? d0) };
    },
    rootRef: C,
    portalRef: Y,
    isTopModal: H,
    exited: E,
    hasTransition: T,
  };
}
function nR(e) {
  return We('MuiModal', e);
}
Je('MuiModal', ['root', 'hidden', 'backdrop']);
const rR = (e) => {
    const { open: n, exited: i, classes: l } = e;
    return et({ root: ['root', !n && i && 'hidden'], backdrop: ['backdrop'] }, nR, l);
  },
  iR = ge('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, !i.open && i.exited && n.hidden];
    },
  })(
    ht(({ theme: e }) => ({
      position: 'fixed',
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        { props: ({ ownerState: n }) => !n.open && n.exited, style: { visibility: 'hidden' } },
      ],
    })),
  ),
  lR = ge(kA, { name: 'MuiModal', slot: 'Backdrop' })({ zIndex: -1 }),
  aR = D.forwardRef(function (n, i) {
    const l = tt({ name: 'MuiModal', props: n }),
      {
        BackdropComponent: o = lR,
        BackdropProps: u,
        classes: c,
        className: d,
        closeAfterTransition: h = !1,
        children: p,
        container: g,
        component: y,
        components: v = {},
        componentsProps: b = {},
        disableAutoFocus: C = !1,
        disableEnforceFocus: E = !1,
        disableEscapeKeyDown: O = !1,
        disablePortal: T = !1,
        disableRestoreFocus: $ = !1,
        disableScrollLock: M = !1,
        hideBackdrop: N = !1,
        keepMounted: z = !1,
        onClose: R,
        onTransitionEnter: H,
        onTransitionExited: Y,
        open: Q,
        slotProps: B = {},
        slots: q = {},
        theme: k,
        ...X
      } = l,
      F = {
        ...l,
        closeAfterTransition: h,
        disableAutoFocus: C,
        disableEnforceFocus: E,
        disableEscapeKeyDown: O,
        disablePortal: T,
        disableRestoreFocus: $,
        disableScrollLock: M,
        hideBackdrop: N,
        keepMounted: z,
      },
      {
        getRootProps: I,
        getBackdropProps: _,
        getTransitionProps: K,
        portalRef: ue,
        isTopModal: re,
        exited: S,
        hasTransition: J,
      } = tR({ ...F, rootRef: i }),
      oe = { ...F, exited: S },
      A = rR(oe),
      ce = {};
    if ((p.props.tabIndex === void 0 && (ce.tabIndex = '-1'), J)) {
      const { onEnter: Ce, onExited: Oe } = K();
      ((ce.onEnter = Ce), (ce.onExited = Oe));
    }
    const he = { slots: { root: v.Root, backdrop: v.Backdrop, ...q }, slotProps: { ...b, ...B } },
      [te, ye] = gt('root', {
        ref: i,
        elementType: iR,
        externalForwardedProps: { ...he, ...X, component: y },
        getSlotProps: I,
        ownerState: oe,
        className: Ae(d, A?.root, !oe.open && oe.exited && A?.hidden),
      }),
      [ve, Re] = gt('backdrop', {
        ref: u?.ref,
        elementType: o,
        externalForwardedProps: he,
        shouldForwardComponentProp: !0,
        additionalProps: u,
        getSlotProps: (Ce) =>
          _({
            ...Ce,
            onClick: (Oe) => {
              Ce?.onClick && Ce.onClick(Oe);
            },
          }),
        className: Ae(u?.className, A?.backdrop),
        ownerState: oe,
      });
    return !z && !Q && (!J || S)
      ? null
      : j.jsx(GT, {
          ref: ue,
          container: g,
          disablePortal: T,
          children: j.jsxs(te, {
            ...ye,
            children: [
              !N && o ? j.jsx(ve, { ...Re }) : null,
              j.jsx(WA, {
                disableEnforceFocus: E,
                disableAutoFocus: C,
                disableRestoreFocus: $,
                isEnabled: re,
                open: Q,
                children: D.cloneElement(p, ce),
              }),
            ],
          }),
        });
  }),
  oR = (e) => {
    const {
        classes: n,
        disableUnderline: i,
        startAdornment: l,
        endAdornment: o,
        size: u,
        hiddenLabel: c,
        multiline: d,
      } = e,
      h = {
        root: [
          'root',
          !i && 'underline',
          l && 'adornedStart',
          o && 'adornedEnd',
          u === 'small' && `size${de(u)}`,
          c && 'hiddenLabel',
          d && 'multiline',
        ],
        input: ['input'],
      },
      p = et(h, sA, n);
    return { ...n, ...p };
  },
  sR = ge(qu, {
    shouldForwardProp: (e) => Wn(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [...Iu(e, n), !i.disableUnderline && n.underline];
    },
  })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light',
        i = n ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        l = n ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        o = n ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        u = n ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      return {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : l,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          '@media (hover: none)': { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : l },
        },
        [`&.${Di.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : l },
        [`&.${Di.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : u,
        },
        variants: [
          {
            props: ({ ownerState: c }) => !c.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${Di.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${Di.error}`]: {
                '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
              },
              '&::before': {
                borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : i}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: e.transitions.create('border-bottom-color', {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${Di.disabled}, .${Di.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Di.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(e.palette)
            .filter(Wt())
            .map(([c]) => ({
              props: { disableUnderline: !1, color: c },
              style: {
                '&::after': { borderBottom: `2px solid ${(e.vars || e).palette[c]?.main}` },
              },
            })),
          { props: ({ ownerState: c }) => c.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: c }) => c.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: c }) => c.multiline, style: { padding: '25px 12px 8px' } },
          {
            props: ({ ownerState: c, size: d }) => c.multiline && d === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: c }) => c.multiline && c.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: c }) => c.multiline && c.hiddenLabel && c.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  uR = ge(Fu, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: Hu })(
    ht(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
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
          props: ({ ownerState: n }) => n.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        { props: ({ ownerState: n }) => n.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: n }) => n.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: n }) => n.hiddenLabel && n.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: n }) => n.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
        },
      ],
    })),
  ),
  Xp = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiFilledInput' }),
      {
        disableUnderline: o = !1,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        hiddenLabel: h,
        inputComponent: p = 'input',
        multiline: g = !1,
        slotProps: y,
        slots: v = {},
        type: b = 'text',
        ...C
      } = l,
      E = { ...l, disableUnderline: o, fullWidth: d, inputComponent: p, multiline: g, type: b },
      O = oR(l),
      T = { root: { ownerState: E }, input: { ownerState: E } },
      $ = (y ?? c) ? an(T, y ?? c) : T,
      M = v.root ?? u.Root ?? sR,
      N = v.input ?? u.Input ?? uR;
    return j.jsx(Gp, {
      slots: { root: M, input: N },
      slotProps: $,
      fullWidth: d,
      inputComponent: p,
      multiline: g,
      ref: i,
      type: b,
      ...C,
      classes: O,
    });
  });
Xp.muiName = 'Input';
function cR(e) {
  return We('MuiFormControl', e);
}
Je('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const fR = (e) => {
    const { classes: n, margin: i, fullWidth: l } = e,
      o = { root: ['root', i !== 'none' && `margin${de(i)}`, l && 'fullWidth'] };
    return et(o, cR, n);
  },
  dR = ge('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, n[`margin${de(i.margin)}`], i.fullWidth && n.fullWidth];
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
  pR = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiFormControl' }),
      {
        children: o,
        className: u,
        color: c = 'primary',
        component: d = 'div',
        disabled: h = !1,
        error: p = !1,
        focused: g,
        fullWidth: y = !1,
        hiddenLabel: v = !1,
        margin: b = 'none',
        required: C = !1,
        size: E = 'medium',
        variant: O = 'outlined',
        ...T
      } = l,
      $ = {
        ...l,
        color: c,
        component: d,
        disabled: h,
        error: p,
        fullWidth: y,
        hiddenLabel: v,
        margin: b,
        required: C,
        size: E,
        variant: O,
      },
      M = fR($),
      [N, z] = D.useState(() => {
        let I = !1;
        return (
          o &&
            D.Children.forEach(o, (_) => {
              if (!Cd(_, ['Input', 'Select'])) return;
              const K = Cd(_, ['Select']) ? _.props.input : _;
              K && rA(K.props) && (I = !0);
            }),
          I
        );
      }),
      [R, H] = D.useState(() => {
        let I = !1;
        return (
          o &&
            D.Children.forEach(o, (_) => {
              Cd(_, ['Input', 'Select']) &&
                (gu(_.props, !0) || gu(_.props.inputProps, !0)) &&
                (I = !0);
            }),
          I
        );
      }),
      [Y, Q] = D.useState(!1);
    h && Y && Q(!1);
    const B = g !== void 0 && !h ? g : Y;
    let q;
    D.useRef(!1);
    const k = D.useCallback(() => {
        H(!0);
      }, []),
      X = D.useCallback(() => {
        H(!1);
      }, []),
      F = D.useMemo(
        () => ({
          adornedStart: N,
          setAdornedStart: z,
          color: c,
          disabled: h,
          error: p,
          filled: R,
          focused: B,
          fullWidth: y,
          hiddenLabel: v,
          size: E,
          onBlur: () => {
            Q(!1);
          },
          onFocus: () => {
            Q(!0);
          },
          onEmpty: X,
          onFilled: k,
          registerEffect: q,
          required: C,
          variant: O,
        }),
        [N, c, h, p, R, B, y, v, q, X, k, C, E, O],
      );
    return j.jsx(Yp.Provider, {
      value: F,
      children: j.jsx(dR, {
        as: d,
        ownerState: $,
        className: Ae(M.root, u),
        ref: i,
        ...T,
        children: o,
      }),
    });
  });
function hR(e) {
  return We('MuiFormHelperText', e);
}
const p0 = Je('MuiFormHelperText', [
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
var h0;
const mR = (e) => {
    const {
        classes: n,
        contained: i,
        size: l,
        disabled: o,
        error: u,
        filled: c,
        focused: d,
        required: h,
      } = e,
      p = {
        root: [
          'root',
          o && 'disabled',
          u && 'error',
          l && `size${de(l)}`,
          i && 'contained',
          d && 'focused',
          c && 'filled',
          h && 'required',
        ],
      };
    return et(p, hR, n);
  },
  gR = ge('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        i.size && n[`size${de(i.size)}`],
        i.contained && n.contained,
        i.filled && n.filled,
      ];
    },
  })(
    ht(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${p0.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${p0.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: n }) => n.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    })),
  ),
  yR = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiFormHelperText' }),
      {
        children: o,
        className: u,
        component: c = 'p',
        disabled: d,
        error: h,
        filled: p,
        focused: g,
        margin: y,
        required: v,
        variant: b,
        ...C
      } = l,
      E = Gl(),
      O = Yl({
        props: l,
        muiFormControl: E,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required'],
      }),
      T = {
        ...l,
        component: c,
        contained: O.variant === 'filled' || O.variant === 'outlined',
        variant: O.variant,
        size: O.size,
        disabled: O.disabled,
        error: O.error,
        filled: O.filled,
        focused: O.focused,
        required: O.required,
      };
    delete T.ownerState;
    const $ = mR(T);
    return j.jsx(gR, {
      as: c,
      className: Ae($.root, u),
      ref: i,
      ...C,
      ownerState: T,
      children:
        o === ' '
          ? h0 ||
            (h0 = j.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
          : o,
    });
  });
function bR(e) {
  return We('MuiFormLabel', e);
}
const so = Je('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  vR = (e) => {
    const { classes: n, color: i, focused: l, disabled: o, error: u, filled: c, required: d } = e,
      h = {
        root: [
          'root',
          `color${de(i)}`,
          o && 'disabled',
          u && 'error',
          c && 'filled',
          l && 'focused',
          d && 'required',
        ],
        asterisk: ['asterisk', u && 'error'],
      };
    return et(h, bR, n);
  },
  xR = ge('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, i.color === 'secondary' && n.colorSecondary, i.filled && n.filled];
    },
  })(
    ht(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(e.palette)
          .filter(Wt())
          .map(([n]) => ({
            props: { color: n },
            style: { [`&.${so.focused}`]: { color: (e.vars || e).palette[n].main } },
          })),
        {
          props: {},
          style: {
            [`&.${so.disabled}`]: { color: (e.vars || e).palette.text.disabled },
            [`&.${so.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  SR = ge('span', { name: 'MuiFormLabel', slot: 'Asterisk' })(
    ht(({ theme: e }) => ({ [`&.${so.error}`]: { color: (e.vars || e).palette.error.main } })),
  ),
  CR = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiFormLabel' }),
      {
        children: o,
        className: u,
        color: c,
        component: d = 'label',
        disabled: h,
        error: p,
        filled: g,
        focused: y,
        required: v,
        ...b
      } = l,
      C = Gl(),
      E = Yl({
        props: l,
        muiFormControl: C,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      O = {
        ...l,
        color: E.color || 'primary',
        component: d,
        disabled: E.disabled,
        error: E.error,
        filled: E.filled,
        focused: E.focused,
        required: E.required,
      },
      T = vR(O);
    return j.jsxs(xR, {
      as: d,
      ownerState: O,
      className: Ae(T.root, u),
      ref: i,
      ...b,
      children: [
        o,
        E.required &&
          j.jsxs(SR, {
            ownerState: O,
            'aria-hidden': !0,
            className: T.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  });
function op(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kR = {
    entering: { opacity: 1, transform: op(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  Td =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  sp = D.forwardRef(function (n, i) {
    const {
        addEndListener: l,
        appear: o = !0,
        children: u,
        easing: c,
        in: d,
        onEnter: h,
        onEntered: p,
        onEntering: g,
        onExit: y,
        onExited: v,
        onExiting: b,
        style: C,
        timeout: E = 'auto',
        TransitionComponent: O = er,
        ...T
      } = n,
      $ = Vp(),
      M = D.useRef(),
      N = ju(),
      z = D.useRef(null),
      R = on(z, Ro(u), i),
      H = (I) => (_) => {
        if (I) {
          const K = z.current;
          _ === void 0 ? I(K) : I(K, _);
        }
      },
      Y = H(g),
      Q = H((I, _) => {
        iv(I);
        const {
          duration: K,
          delay: ue,
          easing: re,
        } = Hl({ style: C, timeout: E, easing: c }, { mode: 'enter' });
        let S;
        (E === 'auto'
          ? ((S = N.transitions.getAutoHeightDuration(I.clientHeight)), (M.current = S))
          : (S = K),
          (I.style.transition = [
            N.transitions.create('opacity', { duration: S, delay: ue }),
            N.transitions.create('transform', {
              duration: Td ? S : S * 0.666,
              delay: ue,
              easing: re,
            }),
          ].join(',')),
          h && h(I, _));
      }),
      B = H(p),
      q = H(b),
      k = H((I) => {
        const {
          duration: _,
          delay: K,
          easing: ue,
        } = Hl({ style: C, timeout: E, easing: c }, { mode: 'exit' });
        let re;
        (E === 'auto'
          ? ((re = N.transitions.getAutoHeightDuration(I.clientHeight)), (M.current = re))
          : (re = _),
          (I.style.transition = [
            N.transitions.create('opacity', { duration: re, delay: K }),
            N.transitions.create('transform', {
              duration: Td ? re : re * 0.666,
              delay: Td ? K : K || re * 0.333,
              easing: ue,
            }),
          ].join(',')),
          (I.style.opacity = 0),
          (I.style.transform = op(0.75)),
          y && y(I));
      }),
      X = H(v),
      F = (I) => {
        (E === 'auto' && $.start(M.current || 0, I), l && l(z.current, I));
      };
    return j.jsx(O, {
      appear: o,
      in: d,
      nodeRef: z,
      onEnter: Q,
      onEntered: B,
      onEntering: Y,
      onExit: k,
      onExited: X,
      onExiting: q,
      addEndListener: F,
      timeout: E === 'auto' ? null : E,
      ...T,
      children: (I, { ownerState: _, ...K }) =>
        D.cloneElement(u, {
          style: {
            opacity: 0,
            transform: op(0.75),
            visibility: I === 'exited' && !d ? 'hidden' : void 0,
            ...kR[I],
            ...C,
            ...u.props.style,
          },
          ref: R,
          ...K,
        }),
    });
  });
sp && (sp.muiSupportAuto = !0);
const wR = (e) => {
    const { classes: n, disableUnderline: i } = e,
      o = et({ root: ['root', !i && 'underline'], input: ['input'] }, aA, n);
    return { ...n, ...o };
  },
  ER = ge(qu, {
    shouldForwardProp: (e) => Wn(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [...Iu(e, n), !i.disableUnderline && n.underline];
    },
  })(
    ht(({ theme: e }) => {
      let i = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      return (
        e.vars && (i = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: l }) => l.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: l }) => !l.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${Qa.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${Qa.error}`]: {
                  '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
                },
                '&::before': {
                  borderBottom: `1px solid ${i}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: e.transitions.create('border-bottom-color', {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${Qa.disabled}, .${Qa.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${i}` },
                },
                [`&.${Qa.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(e.palette)
              .filter(Wt())
              .map(([l]) => ({
                props: { color: l, disableUnderline: !1 },
                style: {
                  '&::after': { borderBottom: `2px solid ${(e.vars || e).palette[l].main}` },
                },
              })),
          ],
        }
      );
    }),
  ),
  TR = ge(Fu, { name: 'MuiInput', slot: 'Input', overridesResolver: Hu })({}),
  Kp = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiInput' }),
      {
        disableUnderline: o = !1,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: h = 'input',
        multiline: p = !1,
        slotProps: g,
        slots: y = {},
        type: v = 'text',
        ...b
      } = l,
      C = wR(l),
      O = { root: { ownerState: { disableUnderline: o } } },
      T = (g ?? c) ? an(g ?? c, O) : O,
      $ = y.root ?? u.Root ?? ER,
      M = y.input ?? u.Input ?? TR;
    return j.jsx(Gp, {
      slots: { root: $, input: M },
      slotProps: T,
      fullWidth: d,
      inputComponent: h,
      multiline: p,
      ref: i,
      type: v,
      ...b,
      classes: C,
    });
  });
Kp.muiName = 'Input';
function AR(e) {
  return We('MuiInputLabel', e);
}
Je('MuiInputLabel', [
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
const RR = (e) => {
    const {
        classes: n,
        formControl: i,
        size: l,
        shrink: o,
        disableAnimation: u,
        variant: c,
        required: d,
      } = e,
      h = {
        root: [
          'root',
          i && 'formControl',
          !u && 'animated',
          o && 'shrink',
          l && l !== 'medium' && `size${de(l)}`,
          c,
        ],
        asterisk: [d && 'asterisk'],
      },
      p = et(h, AR, n);
    return { ...n, ...p };
  },
  MR = ge(CR, {
    shouldForwardProp: (e) => Wn(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        { [`& .${so.asterisk}`]: n.asterisk },
        n.root,
        i.formControl && n.formControl,
        i.size === 'small' && n.sizeSmall,
        i.shrink && n.shrink,
        !i.disableAnimation && n.animated,
        i.focused && n.focused,
        n[i.variant],
      ];
    },
  })(
    ht(({ theme: e }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: n }) => n.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        { props: { size: 'small' }, style: { transform: 'translate(0, 17px) scale(1)' } },
        {
          props: ({ ownerState: n }) => n.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: n }) => !n.disableAnimation,
          style: {
            transition: e.transitions.create(['color', 'transform', 'max-width'], {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
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
          props: ({ variant: n, ownerState: i }) => n === 'filled' && i.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: n, ownerState: i, size: l }) =>
            n === 'filled' && i.shrink && l === 'small',
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
          props: ({ variant: n, ownerState: i }) => n === 'outlined' && i.shrink,
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
  OR = D.forwardRef(function (n, i) {
    const l = tt({ name: 'MuiInputLabel', props: n }),
      { disableAnimation: o = !1, margin: u, shrink: c, variant: d, className: h, ...p } = l,
      g = Gl();
    let y = c;
    typeof y > 'u' && g && (y = g.filled || g.focused || g.adornedStart);
    const v = Yl({
        props: l,
        muiFormControl: g,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      b = {
        ...l,
        disableAnimation: o,
        formControl: g,
        shrink: y,
        size: v.size,
        variant: v.variant,
        required: v.required,
        focused: v.focused,
      },
      C = RR(b);
    return j.jsx(MR, {
      'data-shrink': y,
      ref: i,
      className: Ae(C.root, h),
      ...p,
      ownerState: b,
      classes: C,
    });
  }),
  zR = D.createContext({});
function DR(e) {
  return We('MuiList', e);
}
Je('MuiList', ['root', 'padding', 'dense', 'subheader']);
const NR = (e) => {
    const { classes: n, disablePadding: i, dense: l, subheader: o } = e;
    return et({ root: ['root', !i && 'padding', l && 'dense', o && 'subheader'] }, DR, n);
  },
  _R = ge('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        n.root,
        !i.disablePadding && n.padding,
        i.dense && n.dense,
        i.subheader && n.subheader,
      ];
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  BR = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiList' }),
      {
        children: o,
        className: u,
        component: c = 'ul',
        dense: d = !1,
        disablePadding: h = !1,
        subheader: p,
        ...g
      } = l,
      y = D.useMemo(() => ({ dense: d }), [d]),
      v = { ...l, component: c, dense: d, disablePadding: h },
      b = NR(v);
    return j.jsx(zR.Provider, {
      value: y,
      children: j.jsxs(_R, {
        as: c,
        className: Ae(b.root, u),
        ref: i,
        ownerState: v,
        ...g,
        children: [p, o],
      }),
    });
  });
function Ad(e, n, i) {
  return e === n
    ? e.firstChild
    : n && n.nextElementSibling
      ? n.nextElementSibling
      : i
        ? null
        : e.firstChild;
}
function m0(e, n, i) {
  return e === n
    ? i
      ? e.firstChild
      : e.lastChild
    : n && n.previousElementSibling
      ? n.previousElementSibling
      : i
        ? null
        : e.lastChild;
}
function pv(e, n) {
  if (n === void 0) return !0;
  let i = e.innerText;
  return (
    i === void 0 && (i = e.textContent),
    (i = i.trim().toLowerCase()),
    i.length === 0 ? !1 : n.repeating ? i[0] === n.keys[0] : i.startsWith(n.keys.join(''))
  );
}
function Za(e, n, i, l, o, u) {
  let c = !1,
    d = o(e, n, n ? i : !1);
  for (; d; ) {
    if (d === e.firstChild) {
      if (c) return !1;
      c = !0;
    }
    const h = l ? !1 : d.disabled || d.getAttribute('aria-disabled') === 'true';
    if (!d.hasAttribute('tabindex') || !pv(d, u) || h) d = o(e, d, i);
    else return (d.focus(), !0);
  }
  return !1;
}
const LR = D.forwardRef(function (n, i) {
  const {
      actions: l,
      autoFocus: o = !1,
      autoFocusItem: u = !1,
      children: c,
      className: d,
      disabledItemsFocusable: h = !1,
      disableListWrap: p = !1,
      onKeyDown: g,
      variant: y = 'selectedMenu',
      ...v
    } = n,
    b = D.useRef(null),
    C = D.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
  (Br(() => {
    o && b.current.focus();
  }, [o]),
    D.useImperativeHandle(
      l,
      () => ({
        adjustStyleForScrollbar: (M, { direction: N }) => {
          const z = !b.current.style.width;
          if (M.clientHeight < b.current.clientHeight && z) {
            const R = `${dv(Lr(M))}px`;
            ((b.current.style[N === 'rtl' ? 'paddingLeft' : 'paddingRight'] = R),
              (b.current.style.width = `calc(100% + ${R})`));
          }
          return b.current;
        },
      }),
      [],
    ));
  const E = (M) => {
      const N = b.current,
        z = M.key;
      if (M.ctrlKey || M.metaKey || M.altKey) {
        g && g(M);
        return;
      }
      const H = Zn(N).activeElement;
      if (z === 'ArrowDown') (M.preventDefault(), Za(N, H, p, h, Ad));
      else if (z === 'ArrowUp') (M.preventDefault(), Za(N, H, p, h, m0));
      else if (z === 'Home') (M.preventDefault(), Za(N, null, p, h, Ad));
      else if (z === 'End') (M.preventDefault(), Za(N, null, p, h, m0));
      else if (z.length === 1) {
        const Y = C.current,
          Q = z.toLowerCase(),
          B = performance.now();
        (Y.keys.length > 0 &&
          (B - Y.lastTime > 500
            ? ((Y.keys = []), (Y.repeating = !0), (Y.previousKeyMatched = !0))
            : Y.repeating && Q !== Y.keys[0] && (Y.repeating = !1)),
          (Y.lastTime = B),
          Y.keys.push(Q));
        const q = H && !Y.repeating && pv(H, Y);
        Y.previousKeyMatched && (q || Za(N, H, !1, h, Ad, Y))
          ? M.preventDefault()
          : (Y.previousKeyMatched = !1);
      }
      g && g(M);
    },
    O = on(b, i);
  let T = -1;
  D.Children.forEach(c, (M, N) => {
    if (!D.isValidElement(M)) {
      T === N && ((T += 1), T >= c.length && (T = -1));
      return;
    }
    (M.props.disabled || (((y === 'selectedMenu' && M.props.selected) || T === -1) && (T = N)),
      T === N &&
        (M.props.disabled || M.props.muiSkipListHighlight || M.type.muiSkipListHighlight) &&
        ((T += 1), T >= c.length && (T = -1)));
  });
  const $ = D.Children.map(c, (M, N) => {
    if (N === T) {
      const z = {};
      return (
        u && (z.autoFocus = !0),
        M.props.tabIndex === void 0 && y === 'selectedMenu' && (z.tabIndex = 0),
        D.cloneElement(M, z)
      );
    }
    return M;
  });
  return j.jsx(BR, {
    role: 'menu',
    ref: O,
    className: d,
    onKeyDown: E,
    tabIndex: o ? 0 : -1,
    ...v,
    children: $,
  });
});
function $R(e) {
  return We('MuiPopover', e);
}
Je('MuiPopover', ['root', 'paper']);
function g0(e, n) {
  let i = 0;
  return (
    typeof n == 'number'
      ? (i = n)
      : n === 'center'
        ? (i = e.height / 2)
        : n === 'bottom' && (i = e.height),
    i
  );
}
function y0(e, n) {
  let i = 0;
  return (
    typeof n == 'number'
      ? (i = n)
      : n === 'center'
        ? (i = e.width / 2)
        : n === 'right' && (i = e.width),
    i
  );
}
function b0(e) {
  return [e.horizontal, e.vertical].map((n) => (typeof n == 'number' ? `${n}px` : n)).join(' ');
}
function Ks(e) {
  return typeof e == 'function' ? e() : e;
}
const UR = (e) => {
    const { classes: n } = e;
    return et({ root: ['root'], paper: ['paper'] }, $R, n);
  },
  jR = ge(aR, { name: 'MuiPopover', slot: 'Root' })({}),
  hv = ge(Pu, { name: 'MuiPopover', slot: 'Paper' })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  PR = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiPopover' }),
      {
        action: o,
        anchorEl: u,
        anchorOrigin: c = { vertical: 'top', horizontal: 'left' },
        anchorPosition: d,
        anchorReference: h = 'anchorEl',
        children: p,
        className: g,
        container: y,
        elevation: v = 8,
        marginThreshold: b = 16,
        open: C,
        PaperProps: E = {},
        slots: O = {},
        slotProps: T = {},
        transformOrigin: $ = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: M,
        transitionDuration: N = 'auto',
        TransitionProps: z = {},
        disableScrollLock: R = !1,
        ...H
      } = l,
      Y = D.useRef(),
      Q = {
        ...l,
        anchorOrigin: c,
        anchorReference: h,
        elevation: v,
        marginThreshold: b,
        transformOrigin: $,
        TransitionComponent: M,
        transitionDuration: N,
        TransitionProps: z,
      },
      B = UR(Q),
      q = D.useCallback(() => {
        if (h === 'anchorPosition') return d;
        const Ce = Ks(u),
          je = (Ce && Ce.nodeType === 1 ? Ce : Zn(Y.current).body).getBoundingClientRect();
        return { top: je.top + g0(je, c.vertical), left: je.left + y0(je, c.horizontal) };
      }, [u, c.horizontal, c.vertical, d, h]),
      k = D.useCallback(
        (Ce) => ({ vertical: g0(Ce, $.vertical), horizontal: y0(Ce, $.horizontal) }),
        [$.horizontal, $.vertical],
      ),
      X = D.useCallback(
        (Ce) => {
          const Oe = { width: Ce.offsetWidth, height: Ce.offsetHeight },
            je = k(Oe);
          if (h === 'none') return { top: null, left: null, transformOrigin: b0(je) };
          const Ct = q();
          let De = Ct.top - je.vertical,
            Ye = Ct.left - je.horizontal;
          const _t = De + Oe.height,
            Ge = Ye + Oe.width,
            bt = Lr(Ks(u)),
            ut = bt.innerHeight - b,
            vt = bt.innerWidth - b;
          if (b !== null && De < b) {
            const nt = De - b;
            ((De -= nt), (je.vertical += nt));
          } else if (b !== null && _t > ut) {
            const nt = _t - ut;
            ((De -= nt), (je.vertical += nt));
          }
          if (b !== null && Ye < b) {
            const nt = Ye - b;
            ((Ye -= nt), (je.horizontal += nt));
          } else if (Ge > vt) {
            const nt = Ge - vt;
            ((Ye -= nt), (je.horizontal += nt));
          }
          return {
            top: `${Math.round(De)}px`,
            left: `${Math.round(Ye)}px`,
            transformOrigin: b0(je),
          };
        },
        [u, h, q, k, b],
      ),
      [F, I] = D.useState(C),
      _ = D.useCallback(() => {
        const Ce = Y.current;
        if (!Ce) return;
        const Oe = X(Ce);
        (Oe.top !== null && Ce.style.setProperty('top', Oe.top),
          Oe.left !== null && (Ce.style.left = Oe.left),
          (Ce.style.transformOrigin = Oe.transformOrigin),
          I(!0));
      }, [X]);
    D.useEffect(
      () => (
        R && window.addEventListener('scroll', _),
        () => window.removeEventListener('scroll', _)
      ),
      [u, R, _],
    );
    const K = () => {
        _();
      },
      ue = () => {
        I(!1);
      };
    (D.useEffect(() => {
      C && _();
    }),
      D.useImperativeHandle(
        o,
        () =>
          C
            ? {
                updatePosition: () => {
                  _();
                },
              }
            : null,
        [C, _],
      ),
      D.useEffect(() => {
        if (!C) return;
        const Ce = J1(() => {
            _();
          }),
          Oe = Lr(Ks(u));
        return (
          Oe.addEventListener('resize', Ce),
          () => {
            (Ce.clear(), Oe.removeEventListener('resize', Ce));
          }
        );
      }, [u, C, _]));
    let re = N;
    const S = { slots: { transition: M, ...O }, slotProps: { transition: z, paper: E, ...T } },
      [J, oe] = gt('transition', {
        elementType: sp,
        externalForwardedProps: S,
        ownerState: Q,
        getSlotProps: (Ce) => ({
          ...Ce,
          onEntering: (Oe, je) => {
            (Ce.onEntering?.(Oe, je), K());
          },
          onExited: (Oe) => {
            (Ce.onExited?.(Oe), ue());
          },
        }),
        additionalProps: { appear: !0, in: C },
      });
    N === 'auto' && !J.muiSupportAuto && (re = void 0);
    const A = y || (u ? Zn(Ks(u)).body : void 0),
      [ce, { slots: he, slotProps: te, ...ye }] = gt('root', {
        ref: i,
        elementType: jR,
        externalForwardedProps: { ...S, ...H },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: O.backdrop },
          slotProps: {
            backdrop: NE(typeof T.backdrop == 'function' ? T.backdrop(Q) : T.backdrop, {
              invisible: !0,
            }),
          },
          container: A,
          open: C,
        },
        ownerState: Q,
        className: Ae(B.root, g),
      }),
      [ve, Re] = gt('paper', {
        ref: Y,
        className: B.paper,
        elementType: hv,
        externalForwardedProps: S,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: v, style: F ? void 0 : { opacity: 0 } },
        ownerState: Q,
      });
    return j.jsx(ce, {
      ...ye,
      ...(!pu(ce) && { slots: he, slotProps: te, disableScrollLock: R }),
      children: j.jsx(J, { ...oe, timeout: re, children: j.jsx(ve, { ...Re, children: p }) }),
    });
  });
function IR(e) {
  return We('MuiMenu', e);
}
Je('MuiMenu', ['root', 'paper', 'list']);
const HR = { vertical: 'top', horizontal: 'right' },
  qR = { vertical: 'top', horizontal: 'left' },
  FR = (e) => {
    const { classes: n } = e;
    return et({ root: ['root'], paper: ['paper'], list: ['list'] }, IR, n);
  },
  VR = ge(PR, {
    shouldForwardProp: (e) => Wn(e) || e === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
  })({}),
  YR = ge(hv, { name: 'MuiMenu', slot: 'Paper' })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch',
  }),
  GR = ge(LR, { name: 'MuiMenu', slot: 'List' })({ outline: 0 }),
  XR = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiMenu' }),
      {
        autoFocus: o = !0,
        children: u,
        className: c,
        disableAutoFocusItem: d = !1,
        MenuListProps: h = {},
        onClose: p,
        open: g,
        PaperProps: y = {},
        PopoverClasses: v,
        transitionDuration: b = 'auto',
        TransitionProps: { onEntering: C, ...E } = {},
        variant: O = 'selectedMenu',
        slots: T = {},
        slotProps: $ = {},
        ...M
      } = l,
      N = xw(),
      z = {
        ...l,
        autoFocus: o,
        disableAutoFocusItem: d,
        MenuListProps: h,
        onEntering: C,
        PaperProps: y,
        transitionDuration: b,
        TransitionProps: E,
        variant: O,
      },
      R = FR(z),
      H = o && !d && g,
      Y = D.useRef(null),
      Q = (re, S) => {
        (Y.current && Y.current.adjustStyleForScrollbar(re, { direction: N ? 'rtl' : 'ltr' }),
          C && C(re, S));
      },
      B = (re) => {
        re.key === 'Tab' && (re.preventDefault(), p && p(re, 'tabKeyDown'));
      };
    let q = -1;
    D.Children.map(u, (re, S) => {
      D.isValidElement(re) &&
        (re.props.disabled ||
          (((O === 'selectedMenu' && re.props.selected) || q === -1) && (q = S)));
    });
    const k = { slots: T, slotProps: { list: h, transition: E, paper: y, ...$ } },
      X = VT({
        elementType: T.root,
        externalSlotProps: $.root,
        ownerState: z,
        className: [R.root, c],
      }),
      [F, I] = gt('paper', {
        className: R.paper,
        elementType: YR,
        externalForwardedProps: k,
        shouldForwardComponentProp: !0,
        ownerState: z,
      }),
      [_, K] = gt('list', {
        className: Ae(R.list, h.className),
        elementType: GR,
        shouldForwardComponentProp: !0,
        externalForwardedProps: k,
        getSlotProps: (re) => ({
          ...re,
          onKeyDown: (S) => {
            (B(S), re.onKeyDown?.(S));
          },
        }),
        ownerState: z,
      }),
      ue =
        typeof k.slotProps.transition == 'function'
          ? k.slotProps.transition(z)
          : k.slotProps.transition;
    return j.jsx(VR, {
      onClose: p,
      anchorOrigin: { vertical: 'bottom', horizontal: N ? 'right' : 'left' },
      transformOrigin: N ? HR : qR,
      slots: {
        root: T.root,
        paper: F,
        backdrop: T.backdrop,
        ...(T.transition && { transition: T.transition }),
      },
      slotProps: {
        root: X,
        paper: I,
        backdrop: typeof $.backdrop == 'function' ? $.backdrop(z) : $.backdrop,
        transition: {
          ...ue,
          onEntering: (...re) => {
            (Q(...re), ue?.onEntering?.(...re));
          },
        },
      },
      open: g,
      ref: i,
      transitionDuration: b,
      ownerState: z,
      ...M,
      classes: v,
      children: j.jsx(_, {
        actions: Y,
        autoFocus: o && (q === -1 || d),
        autoFocusItem: H,
        variant: O,
        ...K,
        children: u,
      }),
    });
  });
function KR(e) {
  return We('MuiNativeSelect', e);
}
const Qp = Je('MuiNativeSelect', [
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
  QR = (e) => {
    const { classes: n, variant: i, disabled: l, multiple: o, open: u, error: c } = e,
      d = {
        select: ['select', i, l && 'disabled', o && 'multiple', c && 'error'],
        icon: ['icon', `icon${de(i)}`, u && 'iconOpen', l && 'disabled'],
      };
    return et(d, KR, n);
  },
  mv = ge('select', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${Qp.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: n }) => n.variant !== 'filled' && n.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          '&:focus': { borderRadius: (e.vars || e).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  ZR = ge(mv, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: Wn,
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.select, n[i.variant], i.error && n.error, { [`&.${Qp.multiple}`]: n.multiple }];
    },
  })({}),
  gv = ge('svg', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (e.vars || e).palette.action.active,
    [`&.${Qp.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      { props: ({ ownerState: n }) => n.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  WR = ge(gv, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.icon, i.variant && n[`icon${de(i.variant)}`], i.open && n.iconOpen];
    },
  })({}),
  JR = D.forwardRef(function (n, i) {
    const {
        className: l,
        disabled: o,
        error: u,
        IconComponent: c,
        inputRef: d,
        variant: h = 'standard',
        ...p
      } = n,
      g = { ...n, disabled: o, variant: h, error: u },
      y = QR(g);
    return j.jsxs(D.Fragment, {
      children: [
        j.jsx(ZR, { ownerState: g, className: Ae(y.select, l), disabled: o, ref: d || i, ...p }),
        n.multiple ? null : j.jsx(WR, { as: c, ownerState: g, className: y.icon }),
      ],
    });
  });
var v0;
const eM = ge('fieldset', { name: 'MuiNotchedOutlined', shouldForwardProp: Wn })({
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
  tM = ge('legend', { name: 'MuiNotchedOutlined', shouldForwardProp: Wn })(
    ht(({ theme: e }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: n }) => !n.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: e.transitions.create('width', {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: n }) => n.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: e.transitions.create('max-width', {
              duration: 50,
              easing: e.transitions.easing.easeOut,
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
          props: ({ ownerState: n }) => n.withLabel && n.notched,
          style: {
            maxWidth: '100%',
            transition: e.transitions.create('max-width', {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function nM(e) {
  const { children: n, classes: i, className: l, label: o, notched: u, ...c } = e,
    d = o != null && o !== '',
    h = { ...e, notched: u, withLabel: d };
  return j.jsx(eM, {
    'aria-hidden': !0,
    className: l,
    ownerState: h,
    ...c,
    children: j.jsx(tM, {
      ownerState: h,
      children: d
        ? j.jsx('span', { children: o })
        : v0 ||
          (v0 = j.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' })),
    }),
  });
}
const rM = (e) => {
    const { classes: n } = e,
      l = et({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, oA, n);
    return { ...n, ...l };
  },
  iM = ge(qu, {
    shouldForwardProp: (e) => Wn(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: Iu,
  })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${or.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${or.notchedOutline}`]: {
            borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : n,
          },
        },
        [`&.${or.focused} .${or.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(Wt())
            .map(([i]) => ({
              props: { color: i },
              style: {
                [`&.${or.focused} .${or.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[i].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${or.error} .${or.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${or.disabled} .${or.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          { props: ({ ownerState: i }) => i.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: i }) => i.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: i }) => i.multiline, style: { padding: '16.5px 14px' } },
          {
            props: ({ ownerState: i, size: l }) => i.multiline && l === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      };
    }),
  ),
  lM = ge(nM, { name: 'MuiOutlinedInput', slot: 'NotchedOutline' })(
    ht(({ theme: e }) => {
      const n = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : n };
    }),
  ),
  aM = ge(Fu, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: Hu })(
    ht(({ theme: e }) => ({
      padding: '16.5px 14px',
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: n }) => n.multiline, style: { padding: 0 } },
        { props: ({ ownerState: n }) => n.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: n }) => n.endAdornment, style: { paddingRight: 0 } },
      ],
    })),
  ),
  Zp = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiOutlinedInput' }),
      {
        components: o = {},
        fullWidth: u = !1,
        inputComponent: c = 'input',
        label: d,
        multiline: h = !1,
        notched: p,
        slots: g = {},
        slotProps: y = {},
        type: v = 'text',
        ...b
      } = l,
      C = rM(l),
      E = Gl(),
      O = Yl({
        props: l,
        muiFormControl: E,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required'],
      }),
      T = {
        ...l,
        color: O.color || 'primary',
        disabled: O.disabled,
        error: O.error,
        focused: O.focused,
        formControl: E,
        fullWidth: u,
        hiddenLabel: O.hiddenLabel,
        multiline: h,
        size: O.size,
        type: v,
      },
      $ = g.root ?? o.Root ?? iM,
      M = g.input ?? o.Input ?? aM,
      [N, z] = gt('notchedOutline', {
        elementType: lM,
        className: C.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: T,
        externalForwardedProps: { slots: g, slotProps: y },
        additionalProps: {
          label:
            d != null && d !== '' && O.required
              ? j.jsxs(D.Fragment, { children: [d, ' ', '*'] })
              : d,
        },
      });
    return j.jsx(Gp, {
      slots: { root: $, input: M },
      slotProps: y,
      renderSuffix: (R) =>
        j.jsx(N, {
          ...z,
          notched: typeof p < 'u' ? p : !!(R.startAdornment || R.filled || R.focused),
        }),
      fullWidth: u,
      inputComponent: c,
      multiline: h,
      ref: i,
      type: v,
      ...b,
      classes: { ...C, notchedOutline: null },
    });
  });
Zp.muiName = 'Input';
function yv(e) {
  return We('MuiSelect', e);
}
const Wa = Je('MuiSelect', [
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
var x0;
const oM = ge(mv, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [
        { [`&.${Wa.select}`]: n.select },
        { [`&.${Wa.select}`]: n[i.variant] },
        { [`&.${Wa.error}`]: n.error },
        { [`&.${Wa.multiple}`]: n.multiple },
      ];
    },
  })({
    [`&.${Wa.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  sM = ge(gv, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.icon, i.variant && n[`icon${de(i.variant)}`], i.open && n.iconOpen];
    },
  })({}),
  uM = ge('input', {
    shouldForwardProp: (e) => W1(e) && e !== 'classes',
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
function S0(e, n) {
  return typeof n == 'object' && n !== null ? e === n : String(e) === String(n);
}
function cM(e) {
  return e == null || (typeof e == 'string' && !e.trim());
}
const fM = (e) => {
    const { classes: n, variant: i, disabled: l, multiple: o, open: u, error: c } = e,
      d = {
        select: ['select', i, l && 'disabled', o && 'multiple', c && 'error'],
        icon: ['icon', `icon${de(i)}`, u && 'iconOpen', l && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return et(d, yv, n);
  },
  dM = D.forwardRef(function (n, i) {
    const {
        'aria-describedby': l,
        'aria-label': o,
        autoFocus: u,
        autoWidth: c,
        children: d,
        className: h,
        defaultOpen: p,
        defaultValue: g,
        disabled: y,
        displayEmpty: v,
        error: b = !1,
        IconComponent: C,
        inputRef: E,
        labelId: O,
        MenuProps: T = {},
        multiple: $,
        name: M,
        onBlur: N,
        onChange: z,
        onClose: R,
        onFocus: H,
        onOpen: Y,
        open: Q,
        readOnly: B,
        renderValue: q,
        required: k,
        SelectDisplayProps: X = {},
        tabIndex: F,
        type: I,
        value: _,
        variant: K = 'standard',
        ...ue
      } = n,
      [re, S] = Xb({ controlled: _, default: g, name: 'Select' }),
      [J, oe] = Xb({ controlled: Q, default: p, name: 'Select' }),
      A = D.useRef(null),
      ce = D.useRef(null),
      [he, te] = D.useState(null),
      { current: ye } = D.useRef(Q != null),
      [ve, Re] = D.useState(),
      Ce = on(i, E),
      Oe = D.useCallback((xe) => {
        ((ce.current = xe), xe && te(xe));
      }, []),
      je = he?.parentNode;
    (D.useImperativeHandle(
      Ce,
      () => ({
        focus: () => {
          ce.current.focus();
        },
        node: A.current,
        value: re,
      }),
      [re],
    ),
      D.useEffect(() => {
        p && J && he && !ye && (Re(c ? null : je.clientWidth), ce.current.focus());
      }, [he, c]),
      D.useEffect(() => {
        u && ce.current.focus();
      }, [u]),
      D.useEffect(() => {
        if (!O) return;
        const xe = Zn(ce.current).getElementById(O);
        if (xe) {
          const ze = () => {
            getSelection().isCollapsed && ce.current.focus();
          };
          return (
            xe.addEventListener('click', ze),
            () => {
              xe.removeEventListener('click', ze);
            }
          );
        }
      }, [O]));
    const Ct = (xe, ze) => {
        (xe ? Y && Y(ze) : R && R(ze), ye || (Re(c ? null : je.clientWidth), oe(xe)));
      },
      De = (xe) => {
        xe.button === 0 && (xe.preventDefault(), ce.current.focus(), Ct(!0, xe));
      },
      Ye = (xe) => {
        Ct(!1, xe);
      },
      _t = D.Children.toArray(d),
      Ge = (xe) => {
        const ze = _t.find((rt) => rt.props.value === xe.target.value);
        ze !== void 0 && (S(ze.props.value), z && z(xe, ze));
      },
      bt = (xe) => (ze) => {
        let rt;
        if (ze.currentTarget.hasAttribute('tabindex')) {
          if ($) {
            rt = Array.isArray(re) ? re.slice() : [];
            const qt = re.indexOf(xe.props.value);
            qt === -1 ? rt.push(xe.props.value) : rt.splice(qt, 1);
          } else rt = xe.props.value;
          if ((xe.props.onClick && xe.props.onClick(ze), re !== rt && (S(rt), z))) {
            const qt = ze.nativeEvent || ze,
              Ql = new qt.constructor(qt.type, qt);
            (Object.defineProperty(Ql, 'target', { writable: !0, value: { value: rt, name: M } }),
              z(Ql, xe));
          }
          $ || Ct(!1, ze);
        }
      },
      ut = (xe) => {
        B ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(xe.key) &&
            (xe.preventDefault(), Ct(!0, xe)));
      },
      vt = he !== null && J,
      nt = (xe) => {
        !vt &&
          N &&
          (Object.defineProperty(xe, 'target', { writable: !0, value: { value: re, name: M } }),
          N(xe));
      };
    delete ue['aria-invalid'];
    let Se, sn;
    const kt = [];
    let xn = !1;
    (gu({ value: re }) || v) && (q ? (Se = q(re)) : (xn = !0));
    const ee = _t.map((xe) => {
      if (!D.isValidElement(xe)) return null;
      let ze;
      if ($) {
        if (!Array.isArray(re)) throw new Error(Nr(2));
        ((ze = re.some((rt) => S0(rt, xe.props.value))), ze && xn && kt.push(xe.props.children));
      } else ((ze = S0(re, xe.props.value)), ze && xn && (sn = xe.props.children));
      return D.cloneElement(xe, {
        'aria-selected': ze ? 'true' : 'false',
        onClick: bt(xe),
        onKeyUp: (rt) => {
          (rt.key === ' ' && rt.preventDefault(), xe.props.onKeyUp && xe.props.onKeyUp(rt));
        },
        role: 'option',
        selected: ze,
        value: void 0,
        'data-value': xe.props.value,
      });
    });
    xn &&
      ($
        ? kt.length === 0
          ? (Se = null)
          : (Se = kt.reduce(
              (xe, ze, rt) => (xe.push(ze), rt < kt.length - 1 && xe.push(', '), xe),
              [],
            ))
        : (Se = sn));
    let le = ve;
    !c && ye && he && (le = je.clientWidth);
    let pe;
    typeof F < 'u' ? (pe = F) : (pe = y ? null : 0);
    const me = X.id || (M ? `mui-component-select-${M}` : void 0),
      Ne = { ...n, variant: K, value: re, open: vt, error: b },
      Le = fM(Ne),
      Jt = {
        ...T.PaperProps,
        ...(typeof T.slotProps?.paper == 'function' ? T.slotProps.paper(Ne) : T.slotProps?.paper),
      },
      jt = {
        ...T.MenuListProps,
        ...(typeof T.slotProps?.list == 'function' ? T.slotProps.list(Ne) : T.slotProps?.list),
      },
      Sn = Ao();
    return j.jsxs(D.Fragment, {
      children: [
        j.jsx(oM, {
          as: 'div',
          ref: Oe,
          tabIndex: pe,
          role: 'combobox',
          'aria-controls': vt ? Sn : void 0,
          'aria-disabled': y ? 'true' : void 0,
          'aria-expanded': vt ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': o,
          'aria-labelledby': [O, me].filter(Boolean).join(' ') || void 0,
          'aria-describedby': l,
          'aria-required': k ? 'true' : void 0,
          'aria-invalid': b ? 'true' : void 0,
          onKeyDown: ut,
          onMouseDown: y || B ? null : De,
          onBlur: nt,
          onFocus: H,
          ...X,
          ownerState: Ne,
          className: Ae(X.className, Le.select, h),
          id: me,
          children: cM(Se)
            ? x0 ||
              (x0 = j.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
            : Se,
        }),
        j.jsx(uM, {
          'aria-invalid': b,
          value: Array.isArray(re) ? re.join(',') : re,
          name: M,
          ref: A,
          'aria-hidden': !0,
          onChange: Ge,
          tabIndex: -1,
          disabled: y,
          className: Le.nativeInput,
          autoFocus: u,
          required: k,
          ...ue,
          ownerState: Ne,
        }),
        j.jsx(sM, { as: C, className: Le.icon, ownerState: Ne }),
        j.jsx(XR, {
          id: `menu-${M || ''}`,
          anchorEl: je,
          open: vt,
          onClose: Ye,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...T,
          slotProps: {
            ...T.slotProps,
            list: {
              'aria-labelledby': O,
              role: 'listbox',
              'aria-multiselectable': $ ? 'true' : void 0,
              disableListWrap: !0,
              id: Sn,
              ...jt,
            },
            paper: { ...Jt, style: { minWidth: le, ...(Jt != null ? Jt.style : null) } },
          },
          children: ee,
        }),
      ],
    });
  }),
  pM = (e) => {
    const { classes: n } = e,
      l = et({ root: ['root'] }, yv, n);
    return { ...n, ...l };
  },
  Wp = { name: 'MuiSelect', slot: 'Root', shouldForwardProp: (e) => Wn(e) && e !== 'variant' },
  hM = ge(Kp, Wp)(''),
  mM = ge(Zp, Wp)(''),
  gM = ge(Xp, Wp)(''),
  bv = D.forwardRef(function (n, i) {
    const l = tt({ name: 'MuiSelect', props: n }),
      {
        autoWidth: o = !1,
        children: u,
        classes: c = {},
        className: d,
        defaultOpen: h = !1,
        displayEmpty: p = !1,
        IconComponent: g = uA,
        id: y,
        input: v,
        inputProps: b,
        label: C,
        labelId: E,
        MenuProps: O,
        multiple: T = !1,
        native: $ = !1,
        onClose: M,
        onOpen: N,
        open: z,
        renderValue: R,
        SelectDisplayProps: H,
        variant: Y = 'outlined',
        ...Q
      } = l,
      B = $ ? JR : dM,
      q = Gl(),
      k = Yl({ props: l, muiFormControl: q, states: ['variant', 'error'] }),
      X = k.variant || Y,
      F = { ...l, variant: X, classes: c },
      I = pM(F),
      { root: _, ...K } = I,
      ue =
        v ||
        {
          standard: j.jsx(hM, { ownerState: F }),
          outlined: j.jsx(mM, { label: C, ownerState: F }),
          filled: j.jsx(gM, { ownerState: F }),
        }[X],
      re = on(i, Ro(ue));
    return j.jsx(D.Fragment, {
      children: D.cloneElement(ue, {
        inputComponent: B,
        inputProps: {
          children: u,
          error: k.error,
          IconComponent: g,
          variant: X,
          type: void 0,
          multiple: T,
          ...($
            ? { id: y }
            : {
                autoWidth: o,
                defaultOpen: h,
                displayEmpty: p,
                labelId: E,
                MenuProps: O,
                onClose: M,
                onOpen: N,
                open: z,
                renderValue: R,
                SelectDisplayProps: { id: y, ...H },
              }),
          ...b,
          classes: b ? an(K, b.classes) : K,
          ...(v ? v.props.inputProps : {}),
        },
        ...(((T && $) || p) && X === 'outlined' ? { notched: !0 } : {}),
        ref: re,
        className: Ae(ue.props.className, d, I.root),
        ...(!v && { variant: X }),
        ...Q,
      }),
    });
  });
bv.muiName = 'Select';
function yM(e) {
  return We('MuiToolbar', e);
}
Je('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const bM = (e) => {
    const { classes: n, disableGutters: i, variant: l } = e;
    return et({ root: ['root', !i && 'gutters', l] }, yM, n);
  },
  vM = ge('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: i } = e;
      return [n.root, !i.disableGutters && n.gutters, n[i.variant]];
    },
  })(
    ht(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      variants: [
        {
          props: ({ ownerState: n }) => !n.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up('sm')]: { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) },
          },
        },
        { props: { variant: 'dense' }, style: { minHeight: 48 } },
        { props: { variant: 'regular' }, style: e.mixins.toolbar },
      ],
    })),
  ),
  xM = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiToolbar' }),
      {
        className: o,
        component: u = 'div',
        disableGutters: c = !1,
        variant: d = 'regular',
        ...h
      } = l,
      p = { ...l, component: u, disableGutters: c, variant: d },
      g = bM(p);
    return j.jsx(vM, { as: u, className: Ae(g.root, o), ref: i, ownerState: p, ...h });
  });
function SM(e) {
  return We('MuiTextField', e);
}
Je('MuiTextField', ['root']);
const CM = { standard: Kp, filled: Xp, outlined: Zp },
  kM = (e) => {
    const { classes: n } = e;
    return et({ root: ['root'] }, SM, n);
  },
  wM = ge(pR, { name: 'MuiTextField', slot: 'Root' })({}),
  EM = D.forwardRef(function (n, i) {
    const l = tt({ props: n, name: 'MuiTextField' }),
      {
        autoComplete: o,
        autoFocus: u = !1,
        children: c,
        className: d,
        color: h = 'primary',
        defaultValue: p,
        disabled: g = !1,
        error: y = !1,
        FormHelperTextProps: v,
        fullWidth: b = !1,
        helperText: C,
        id: E,
        InputLabelProps: O,
        inputProps: T,
        InputProps: $,
        inputRef: M,
        label: N,
        maxRows: z,
        minRows: R,
        multiline: H = !1,
        name: Y,
        onBlur: Q,
        onChange: B,
        onFocus: q,
        placeholder: k,
        required: X = !1,
        rows: F,
        select: I = !1,
        SelectProps: _,
        slots: K = {},
        slotProps: ue = {},
        type: re,
        value: S,
        variant: J = 'outlined',
        ...oe
      } = l,
      A = {
        ...l,
        autoFocus: u,
        color: h,
        disabled: g,
        error: y,
        fullWidth: b,
        multiline: H,
        required: X,
        select: I,
        variant: J,
      },
      ce = kM(A),
      he = Ao(E),
      te = C && he ? `${he}-helper-text` : void 0,
      ye = N && he ? `${he}-label` : void 0,
      ve = CM[J],
      Re = {
        slots: K,
        slotProps: { input: $, inputLabel: O, htmlInput: T, formHelperText: v, select: _, ...ue },
      },
      Ce = {},
      Oe = Re.slotProps.inputLabel;
    (J === 'outlined' && (Oe && typeof Oe.shrink < 'u' && (Ce.notched = Oe.shrink), (Ce.label = N)),
      I && ((!_ || !_.native) && (Ce.id = void 0), (Ce['aria-describedby'] = void 0)));
    const [je, Ct] = gt('root', {
        elementType: wM,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...Re, ...oe },
        ownerState: A,
        className: Ae(ce.root, d),
        ref: i,
        additionalProps: { disabled: g, error: y, fullWidth: b, required: X, color: h, variant: J },
      }),
      [De, Ye] = gt('input', {
        elementType: ve,
        externalForwardedProps: Re,
        additionalProps: Ce,
        ownerState: A,
      }),
      [_t, Ge] = gt('inputLabel', { elementType: OR, externalForwardedProps: Re, ownerState: A }),
      [bt, ut] = gt('htmlInput', {
        elementType: 'input',
        externalForwardedProps: Re,
        ownerState: A,
      }),
      [vt, nt] = gt('formHelperText', {
        elementType: yR,
        externalForwardedProps: Re,
        ownerState: A,
      }),
      [Se, sn] = gt('select', { elementType: bv, externalForwardedProps: Re, ownerState: A }),
      kt = j.jsx(De, {
        'aria-describedby': te,
        autoComplete: o,
        autoFocus: u,
        defaultValue: p,
        fullWidth: b,
        multiline: H,
        name: Y,
        rows: F,
        maxRows: z,
        minRows: R,
        type: re,
        value: S,
        id: he,
        inputRef: M,
        onBlur: Q,
        onChange: B,
        onFocus: q,
        placeholder: k,
        inputProps: ut,
        slots: { input: K.htmlInput ? bt : void 0 },
        ...Ye,
      });
    return j.jsxs(je, {
      ...Ct,
      children: [
        N != null && N !== '' && j.jsx(_t, { htmlFor: he, id: ye, ...Ge, children: N }),
        I
          ? j.jsx(Se, {
              'aria-describedby': te,
              id: he,
              labelId: ye,
              value: S,
              input: kt,
              ...sn,
              children: c,
            })
          : kt,
        C && j.jsx(vt, { id: te, ...nt, children: C }),
      ],
    });
  }),
  TM = Jn(
    j.jsx('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z',
    }),
  ),
  AM = Jn(
    j.jsx('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
    }),
  ),
  RM = Jn(j.jsx('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }));
function MM() {
  return j.jsx(FT, {
    position: 'static',
    elevation: 1,
    children: j.jsxs(xM, {
      children: [
        j.jsx(TM, { sx: { mr: 2 } }),
        j.jsx(sr, {
          variant: 'h6',
          component: 'h1',
          sx: { flexGrow: 1 },
          children: 'Markdown Publisher Toolkit',
        }),
        j.jsx(sr, {
          variant: 'body2',
          sx: { opacity: 0.8 },
          children: 'Convert dev.to to Coder Legion',
        }),
      ],
    }),
  });
}
class yu {
  static BASE_URL = 'https://dev.to/api';
  extractArticleId(n) {
    try {
      const i = new URL(n);
      if (i.hostname !== 'dev.to') return null;
      const l = i.pathname.slice(1).split('/');
      if (l.length < 2) return null;
      const u = l[1].match(/-(\d+)$/);
      return u ? parseInt(u[1], 10) : null;
    } catch {
      return null;
    }
  }
  isValidDevToUrl(n) {
    return this.extractArticleId(n) !== null;
  }
  async fetchArticle(n) {
    const i = this.extractArticleId(n);
    if (!i) throw new Error('Invalid dev.to URL format');
    try {
      const l = await fetch(`${yu.BASE_URL}/articles/${i}`);
      if (!l.ok) {
        const u = {
          error: `Failed to fetch article: ${l.status} ${l.statusText}`,
          status: l.status,
        };
        throw new Error(u.error);
      }
      return await l.json();
    } catch (l) {
      throw l instanceof Error ? l : new Error('Unknown error occurred while fetching article');
    }
  }
  async testConnection() {
    try {
      return (await fetch(`${yu.BASE_URL}/articles?per_page=1`)).ok;
    } catch {
      return !1;
    }
  }
}
const C0 = new yu();
function k0(e) {
  if (e) throw e;
}
var Rd, w0;
function OM() {
  if (w0) return Rd;
  w0 = 1;
  var e = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    i = Object.defineProperty,
    l = Object.getOwnPropertyDescriptor,
    o = function (p) {
      return typeof Array.isArray == 'function' ? Array.isArray(p) : n.call(p) === '[object Array]';
    },
    u = function (p) {
      if (!p || n.call(p) !== '[object Object]') return !1;
      var g = e.call(p, 'constructor'),
        y =
          p.constructor &&
          p.constructor.prototype &&
          e.call(p.constructor.prototype, 'isPrototypeOf');
      if (p.constructor && !g && !y) return !1;
      var v;
      for (v in p);
      return typeof v > 'u' || e.call(p, v);
    },
    c = function (p, g) {
      i && g.name === '__proto__'
        ? i(p, g.name, { enumerable: !0, configurable: !0, value: g.newValue, writable: !0 })
        : (p[g.name] = g.newValue);
    },
    d = function (p, g) {
      if (g === '__proto__')
        if (e.call(p, g)) {
          if (l) return l(p, g).value;
        } else return;
      return p[g];
    };
  return (
    (Rd = function h() {
      var p,
        g,
        y,
        v,
        b,
        C,
        E = arguments[0],
        O = 1,
        T = arguments.length,
        $ = !1;
      for (
        typeof E == 'boolean' && (($ = E), (E = arguments[1] || {}), (O = 2)),
          (E == null || (typeof E != 'object' && typeof E != 'function')) && (E = {});
        O < T;
        ++O
      )
        if (((p = arguments[O]), p != null))
          for (g in p)
            ((y = d(E, g)),
              (v = d(p, g)),
              E !== v &&
                ($ && v && (u(v) || (b = o(v)))
                  ? (b ? ((b = !1), (C = y && o(y) ? y : [])) : (C = y && u(y) ? y : {}),
                    c(E, { name: g, newValue: h($, C, v) }))
                  : typeof v < 'u' && c(E, { name: g, newValue: v })));
      return E;
    }),
    Rd
  );
}
var zM = OM();
const Md = Cu(zM);
function up(e) {
  if (typeof e != 'object' || e === null) return !1;
  const n = Object.getPrototypeOf(e);
  return (
    (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function DM() {
  const e = [],
    n = { run: i, use: l };
  return n;
  function i(...o) {
    let u = -1;
    const c = o.pop();
    if (typeof c != 'function') throw new TypeError('Expected function as last argument, not ' + c);
    d(null, ...o);
    function d(h, ...p) {
      const g = e[++u];
      let y = -1;
      if (h) {
        c(h);
        return;
      }
      for (; ++y < o.length; ) (p[y] === null || p[y] === void 0) && (p[y] = o[y]);
      ((o = p), g ? NM(g, d)(...p) : c(null, ...p));
    }
  }
  function l(o) {
    if (typeof o != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + o);
    return (e.push(o), n);
  }
}
function NM(e, n) {
  let i;
  return l;
  function l(...c) {
    const d = e.length > c.length;
    let h;
    d && c.push(o);
    try {
      h = e.apply(this, c);
    } catch (p) {
      const g = p;
      if (d && i) throw g;
      return o(g);
    }
    d ||
      (h && h.then && typeof h.then == 'function'
        ? h.then(u, o)
        : h instanceof Error
          ? o(h)
          : u(h));
  }
  function o(c, ...d) {
    i || ((i = !0), n(c, ...d));
  }
  function u(c) {
    o(null, c);
  }
}
function uo(e) {
  return !e || typeof e != 'object'
    ? ''
    : 'position' in e || 'type' in e
      ? E0(e.position)
      : 'start' in e || 'end' in e
        ? E0(e)
        : 'line' in e || 'column' in e
          ? cp(e)
          : '';
}
function cp(e) {
  return T0(e && e.line) + ':' + T0(e && e.column);
}
function E0(e) {
  return cp(e && e.start) + '-' + cp(e && e.end);
}
function T0(e) {
  return e && typeof e == 'number' ? e : 1;
}
class bn extends Error {
  constructor(n, i, l) {
    (super(), typeof i == 'string' && ((l = i), (i = void 0)));
    let o = '',
      u = {},
      c = !1;
    if (
      (i &&
        ('line' in i && 'column' in i
          ? (u = { place: i })
          : 'start' in i && 'end' in i
            ? (u = { place: i })
            : 'type' in i
              ? (u = { ancestors: [i], place: i.position })
              : (u = { ...i })),
      typeof n == 'string' ? (o = n) : !u.cause && n && ((c = !0), (o = n.message), (u.cause = n)),
      !u.ruleId && !u.source && typeof l == 'string')
    ) {
      const h = l.indexOf(':');
      h === -1 ? (u.ruleId = l) : ((u.source = l.slice(0, h)), (u.ruleId = l.slice(h + 1)));
    }
    if (!u.place && u.ancestors && u.ancestors) {
      const h = u.ancestors[u.ancestors.length - 1];
      h && (u.place = h.position);
    }
    const d = u.place && 'start' in u.place ? u.place.start : u.place;
    ((this.ancestors = u.ancestors || void 0),
      (this.cause = u.cause || void 0),
      (this.column = d ? d.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = o),
      (this.line = d ? d.line : void 0),
      (this.name = uo(u.place) || '1:1'),
      (this.place = u.place || void 0),
      (this.reason = this.message),
      (this.ruleId = u.ruleId || void 0),
      (this.source = u.source || void 0),
      (this.stack = c && u.cause && typeof u.cause.stack == 'string' ? u.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
bn.prototype.file = '';
bn.prototype.name = '';
bn.prototype.reason = '';
bn.prototype.message = '';
bn.prototype.stack = '';
bn.prototype.column = void 0;
bn.prototype.line = void 0;
bn.prototype.ancestors = void 0;
bn.prototype.cause = void 0;
bn.prototype.fatal = void 0;
bn.prototype.place = void 0;
bn.prototype.ruleId = void 0;
bn.prototype.source = void 0;
const ur = { basename: _M, dirname: BM, extname: LM, join: $M, sep: '/' };
function _M(e, n) {
  if (n !== void 0 && typeof n != 'string') throw new TypeError('"ext" argument must be a string');
  Mo(e);
  let i = 0,
    l = -1,
    o = e.length,
    u;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (u) {
          i = o + 1;
          break;
        }
      } else l < 0 && ((u = !0), (l = o + 1));
    return l < 0 ? '' : e.slice(i, l);
  }
  if (n === e) return '';
  let c = -1,
    d = n.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (u) {
        i = o + 1;
        break;
      }
    } else
      (c < 0 && ((u = !0), (c = o + 1)),
        d > -1 &&
          (e.codePointAt(o) === n.codePointAt(d--) ? d < 0 && (l = o) : ((d = -1), (l = c))));
  return (i === l ? (l = c) : l < 0 && (l = e.length), e.slice(i, l));
}
function BM(e) {
  if ((Mo(e), e.length === 0)) return '.';
  let n = -1,
    i = e.length,
    l;
  for (; --i; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        n = i;
        break;
      }
    } else l || (l = !0);
  return n < 0
    ? e.codePointAt(0) === 47
      ? '/'
      : '.'
    : n === 1 && e.codePointAt(0) === 47
      ? '//'
      : e.slice(0, n);
}
function LM(e) {
  Mo(e);
  let n = e.length,
    i = -1,
    l = 0,
    o = -1,
    u = 0,
    c;
  for (; n--; ) {
    const d = e.codePointAt(n);
    if (d === 47) {
      if (c) {
        l = n + 1;
        break;
      }
      continue;
    }
    (i < 0 && ((c = !0), (i = n + 1)),
      d === 46 ? (o < 0 ? (o = n) : u !== 1 && (u = 1)) : o > -1 && (u = -1));
  }
  return o < 0 || i < 0 || u === 0 || (u === 1 && o === i - 1 && o === l + 1) ? '' : e.slice(o, i);
}
function $M(...e) {
  let n = -1,
    i;
  for (; ++n < e.length; ) (Mo(e[n]), e[n] && (i = i === void 0 ? e[n] : i + '/' + e[n]));
  return i === void 0 ? '.' : UM(i);
}
function UM(e) {
  Mo(e);
  const n = e.codePointAt(0) === 47;
  let i = jM(e, !n);
  return (
    i.length === 0 && !n && (i = '.'),
    i.length > 0 && e.codePointAt(e.length - 1) === 47 && (i += '/'),
    n ? '/' + i : i
  );
}
function jM(e, n) {
  let i = '',
    l = 0,
    o = -1,
    u = 0,
    c = -1,
    d,
    h;
  for (; ++c <= e.length; ) {
    if (c < e.length) d = e.codePointAt(c);
    else {
      if (d === 47) break;
      d = 47;
    }
    if (d === 47) {
      if (!(o === c - 1 || u === 1))
        if (o !== c - 1 && u === 2) {
          if (
            i.length < 2 ||
            l !== 2 ||
            i.codePointAt(i.length - 1) !== 46 ||
            i.codePointAt(i.length - 2) !== 46
          ) {
            if (i.length > 2) {
              if (((h = i.lastIndexOf('/')), h !== i.length - 1)) {
                (h < 0
                  ? ((i = ''), (l = 0))
                  : ((i = i.slice(0, h)), (l = i.length - 1 - i.lastIndexOf('/'))),
                  (o = c),
                  (u = 0));
                continue;
              }
            } else if (i.length > 0) {
              ((i = ''), (l = 0), (o = c), (u = 0));
              continue;
            }
          }
          n && ((i = i.length > 0 ? i + '/..' : '..'), (l = 2));
        } else
          (i.length > 0 ? (i += '/' + e.slice(o + 1, c)) : (i = e.slice(o + 1, c)),
            (l = c - o - 1));
      ((o = c), (u = 0));
    } else d === 46 && u > -1 ? u++ : (u = -1);
  }
  return i;
}
function Mo(e) {
  if (typeof e != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
const PM = { cwd: IM };
function IM() {
  return '/';
}
function fp(e) {
  return !!(
    e !== null &&
    typeof e == 'object' &&
    'href' in e &&
    e.href &&
    'protocol' in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function HM(e) {
  if (typeof e == 'string') e = new URL(e);
  else if (!fp(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + '`',
    );
    throw ((n.code = 'ERR_INVALID_ARG_TYPE'), n);
  }
  if (e.protocol !== 'file:') {
    const n = new TypeError('The URL must be of scheme file');
    throw ((n.code = 'ERR_INVALID_URL_SCHEME'), n);
  }
  return qM(e);
}
function qM(e) {
  if (e.hostname !== '') {
    const l = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((l.code = 'ERR_INVALID_FILE_URL_HOST'), l);
  }
  const n = e.pathname;
  let i = -1;
  for (; ++i < n.length; )
    if (n.codePointAt(i) === 37 && n.codePointAt(i + 1) === 50) {
      const l = n.codePointAt(i + 2);
      if (l === 70 || l === 102) {
        const o = new TypeError('File URL path must not include encoded / characters');
        throw ((o.code = 'ERR_INVALID_FILE_URL_PATH'), o);
      }
    }
  return decodeURIComponent(n);
}
const Od = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class FM {
  constructor(n) {
    let i;
    (n
      ? fp(n)
        ? (i = { path: n })
        : typeof n == 'string' || VM(n)
          ? (i = { value: n })
          : (i = n)
      : (i = {}),
      (this.cwd = 'cwd' in i ? '' : PM.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let l = -1;
    for (; ++l < Od.length; ) {
      const u = Od[l];
      u in i && i[u] !== void 0 && i[u] !== null && (this[u] = u === 'history' ? [...i[u]] : i[u]);
    }
    let o;
    for (o in i) Od.includes(o) || (this[o] = i[o]);
  }
  get basename() {
    return typeof this.path == 'string' ? ur.basename(this.path) : void 0;
  }
  set basename(n) {
    (Dd(n, 'basename'), zd(n, 'basename'), (this.path = ur.join(this.dirname || '', n)));
  }
  get dirname() {
    return typeof this.path == 'string' ? ur.dirname(this.path) : void 0;
  }
  set dirname(n) {
    (A0(this.basename, 'dirname'), (this.path = ur.join(n || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? ur.extname(this.path) : void 0;
  }
  set extname(n) {
    if ((zd(n, 'extname'), A0(this.dirname, 'extname'), n)) {
      if (n.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (n.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = ur.join(this.dirname, this.stem + (n || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(n) {
    (fp(n) && (n = HM(n)), Dd(n, 'path'), this.path !== n && this.history.push(n));
  }
  get stem() {
    return typeof this.path == 'string' ? ur.basename(this.path, this.extname) : void 0;
  }
  set stem(n) {
    (Dd(n, 'stem'),
      zd(n, 'stem'),
      (this.path = ur.join(this.dirname || '', n + (this.extname || ''))));
  }
  fail(n, i, l) {
    const o = this.message(n, i, l);
    throw ((o.fatal = !0), o);
  }
  info(n, i, l) {
    const o = this.message(n, i, l);
    return ((o.fatal = void 0), o);
  }
  message(n, i, l) {
    const o = new bn(n, i, l);
    return (
      this.path && ((o.name = this.path + ':' + o.name), (o.file = this.path)),
      (o.fatal = !1),
      this.messages.push(o),
      o
    );
  }
  toString(n) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(n || void 0).decode(this.value);
  }
}
function zd(e, n) {
  if (e && e.includes(ur.sep))
    throw new Error('`' + n + '` cannot be a path: did not expect `' + ur.sep + '`');
}
function Dd(e, n) {
  if (!e) throw new Error('`' + n + '` cannot be empty');
}
function A0(e, n) {
  if (!e) throw new Error('Setting `' + n + '` requires `path` to be set too');
}
function VM(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
const YM = function (e) {
    const l = this.constructor.prototype,
      o = l[e],
      u = function () {
        return o.apply(u, arguments);
      };
    return (Object.setPrototypeOf(u, l), u);
  },
  GM = {}.hasOwnProperty;
class Jp extends YM {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = DM()));
  }
  copy() {
    const n = new Jp();
    let i = -1;
    for (; ++i < this.attachers.length; ) {
      const l = this.attachers[i];
      n.use(...l);
    }
    return (n.data(Md(!0, {}, this.namespace)), n);
  }
  data(n, i) {
    return typeof n == 'string'
      ? arguments.length === 2
        ? (Bd('data', this.frozen), (this.namespace[n] = i), this)
        : (GM.call(this.namespace, n) && this.namespace[n]) || void 0
      : n
        ? (Bd('data', this.frozen), (this.namespace = n), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const n = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [i, ...l] = this.attachers[this.freezeIndex];
      if (l[0] === !1) continue;
      l[0] === !0 && (l[0] = void 0);
      const o = i.call(n, ...l);
      typeof o == 'function' && this.transformers.use(o);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(n) {
    this.freeze();
    const i = Qs(n),
      l = this.parser || this.Parser;
    return (Nd('parse', l), l(String(i), i));
  }
  process(n, i) {
    const l = this;
    return (
      this.freeze(),
      Nd('process', this.parser || this.Parser),
      _d('process', this.compiler || this.Compiler),
      i ? o(void 0, i) : new Promise(o)
    );
    function o(u, c) {
      const d = Qs(n),
        h = l.parse(d);
      l.run(h, d, function (g, y, v) {
        if (g || !y || !v) return p(g);
        const b = y,
          C = l.stringify(b, v);
        (QM(C) ? (v.value = C) : (v.result = C), p(g, v));
      });
      function p(g, y) {
        g || !y ? c(g) : u ? u(y) : i(void 0, y);
      }
    }
  }
  processSync(n) {
    let i = !1,
      l;
    return (
      this.freeze(),
      Nd('processSync', this.parser || this.Parser),
      _d('processSync', this.compiler || this.Compiler),
      this.process(n, o),
      M0('processSync', 'process', i),
      l
    );
    function o(u, c) {
      ((i = !0), k0(u), (l = c));
    }
  }
  run(n, i, l) {
    (R0(n), this.freeze());
    const o = this.transformers;
    return (
      !l && typeof i == 'function' && ((l = i), (i = void 0)),
      l ? u(void 0, l) : new Promise(u)
    );
    function u(c, d) {
      const h = Qs(i);
      o.run(n, h, p);
      function p(g, y, v) {
        const b = y || n;
        g ? d(g) : c ? c(b) : l(void 0, b, v);
      }
    }
  }
  runSync(n, i) {
    let l = !1,
      o;
    return (this.run(n, i, u), M0('runSync', 'run', l), o);
    function u(c, d) {
      (k0(c), (o = d), (l = !0));
    }
  }
  stringify(n, i) {
    this.freeze();
    const l = Qs(i),
      o = this.compiler || this.Compiler;
    return (_d('stringify', o), R0(n), o(n, l));
  }
  use(n, ...i) {
    const l = this.attachers,
      o = this.namespace;
    if ((Bd('use', this.frozen), n != null))
      if (typeof n == 'function') h(n, i);
      else if (typeof n == 'object') Array.isArray(n) ? d(n) : c(n);
      else throw new TypeError('Expected usable value, not `' + n + '`');
    return this;
    function u(p) {
      if (typeof p == 'function') h(p, []);
      else if (typeof p == 'object')
        if (Array.isArray(p)) {
          const [g, ...y] = p;
          h(g, y);
        } else c(p);
      else throw new TypeError('Expected usable value, not `' + p + '`');
    }
    function c(p) {
      if (!('plugins' in p) && !('settings' in p))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
        );
      (d(p.plugins), p.settings && (o.settings = Md(!0, o.settings, p.settings)));
    }
    function d(p) {
      let g = -1;
      if (p != null)
        if (Array.isArray(p))
          for (; ++g < p.length; ) {
            const y = p[g];
            u(y);
          }
        else throw new TypeError('Expected a list of plugins, not `' + p + '`');
    }
    function h(p, g) {
      let y = -1,
        v = -1;
      for (; ++y < l.length; )
        if (l[y][0] === p) {
          v = y;
          break;
        }
      if (v === -1) l.push([p, ...g]);
      else if (g.length > 0) {
        let [b, ...C] = g;
        const E = l[v][1];
        (up(E) && up(b) && (b = Md(!0, E, b)), (l[v] = [p, b, ...C]));
      }
    }
  }
}
const XM = new Jp().freeze();
function Nd(e, n) {
  if (typeof n != 'function') throw new TypeError('Cannot `' + e + '` without `parser`');
}
function _d(e, n) {
  if (typeof n != 'function') throw new TypeError('Cannot `' + e + '` without `compiler`');
}
function Bd(e, n) {
  if (n)
    throw new Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
    );
}
function R0(e) {
  if (!up(e) || typeof e.type != 'string') throw new TypeError('Expected node, got `' + e + '`');
}
function M0(e, n, i) {
  if (!i) throw new Error('`' + e + '` finished async. Use `' + n + '` instead');
}
function Qs(e) {
  return KM(e) ? e : new FM(e);
}
function KM(e) {
  return !!(e && typeof e == 'object' && 'message' in e && 'messages' in e);
}
function QM(e) {
  return typeof e == 'string' || ZM(e);
}
function ZM(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
const WM = {};
function eh(e, n) {
  const i = WM,
    l = typeof i.includeImageAlt == 'boolean' ? i.includeImageAlt : !0,
    o = typeof i.includeHtml == 'boolean' ? i.includeHtml : !0;
  return vv(e, l, o);
}
function vv(e, n, i) {
  if (JM(e)) {
    if ('value' in e) return e.type === 'html' && !i ? '' : e.value;
    if (n && 'alt' in e && e.alt) return e.alt;
    if ('children' in e) return O0(e.children, n, i);
  }
  return Array.isArray(e) ? O0(e, n, i) : '';
}
function O0(e, n, i) {
  const l = [];
  let o = -1;
  for (; ++o < e.length; ) l[o] = vv(e[o], n, i);
  return l.join('');
}
function JM(e) {
  return !!(e && typeof e == 'object');
}
const z0 = document.createElement('i');
function th(e) {
  const n = '&' + e + ';';
  z0.innerHTML = n;
  const i = z0.textContent;
  return (i.charCodeAt(i.length - 1) === 59 && e !== 'semi') || i === n ? !1 : i;
}
function Dn(e, n, i, l) {
  const o = e.length;
  let u = 0,
    c;
  if ((n < 0 ? (n = -n > o ? 0 : o + n) : (n = n > o ? o : n), (i = i > 0 ? i : 0), l.length < 1e4))
    ((c = Array.from(l)), c.unshift(n, i), e.splice(...c));
  else
    for (i && e.splice(n, i); u < l.length; )
      ((c = l.slice(u, u + 1e4)), c.unshift(n, 0), e.splice(...c), (u += 1e4), (n += 1e4));
}
function Fn(e, n) {
  return e.length > 0 ? (Dn(e, e.length, 0, n), e) : n;
}
const D0 = {}.hasOwnProperty;
function xv(e) {
  const n = {};
  let i = -1;
  for (; ++i < e.length; ) e4(n, e[i]);
  return n;
}
function e4(e, n) {
  let i;
  for (i in n) {
    const o = (D0.call(e, i) ? e[i] : void 0) || (e[i] = {}),
      u = n[i];
    let c;
    if (u)
      for (c in u) {
        D0.call(o, c) || (o[c] = []);
        const d = u[c];
        t4(o[c], Array.isArray(d) ? d : d ? [d] : []);
      }
  }
}
function t4(e, n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) (n[i].add === 'after' ? e : l).push(n[i]);
  Dn(e, 0, 0, l);
}
function Sv(e, n) {
  const i = Number.parseInt(e, n);
  return i < 9 ||
    i === 11 ||
    (i > 13 && i < 32) ||
    (i > 126 && i < 160) ||
    (i > 55295 && i < 57344) ||
    (i > 64975 && i < 65008) ||
    (i & 65535) === 65535 ||
    (i & 65535) === 65534 ||
    i > 1114111
    ? '�'
    : String.fromCodePoint(i);
}
function Qn(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const cn = pi(/[A-Za-z]/),
  ln = pi(/[\dA-Za-z]/),
  n4 = pi(/[#-'*+\--9=?A-Z^-~]/);
function bu(e) {
  return e !== null && (e < 32 || e === 127);
}
const dp = pi(/\d/),
  r4 = pi(/[\dA-Fa-f]/),
  i4 = pi(/[!-/:-@[-`{-~]/);
function we(e) {
  return e !== null && e < -2;
}
function yt(e) {
  return e !== null && (e < 0 || e === 32);
}
function qe(e) {
  return e === -2 || e === -1 || e === 32;
}
const Vu = pi(new RegExp('\\p{P}|\\p{S}', 'u')),
  Ii = pi(/\s/);
function pi(e) {
  return n;
  function n(i) {
    return i !== null && i > -1 && e.test(String.fromCharCode(i));
  }
}
function Xl(e) {
  const n = [];
  let i = -1,
    l = 0,
    o = 0;
  for (; ++i < e.length; ) {
    const u = e.charCodeAt(i);
    let c = '';
    if (u === 37 && ln(e.charCodeAt(i + 1)) && ln(e.charCodeAt(i + 2))) o = 2;
    else if (u < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (c = String.fromCharCode(u));
    else if (u > 55295 && u < 57344) {
      const d = e.charCodeAt(i + 1);
      u < 56320 && d > 56319 && d < 57344 ? ((c = String.fromCharCode(u, d)), (o = 1)) : (c = '�');
    } else c = String.fromCharCode(u);
    (c && (n.push(e.slice(l, i), encodeURIComponent(c)), (l = i + o + 1), (c = '')),
      o && ((i += o), (o = 0)));
  }
  return n.join('') + e.slice(l);
}
function Ve(e, n, i, l) {
  const o = l ? l - 1 : Number.POSITIVE_INFINITY;
  let u = 0;
  return c;
  function c(h) {
    return qe(h) ? (e.enter(i), d(h)) : n(h);
  }
  function d(h) {
    return qe(h) && u++ < o ? (e.consume(h), d) : (e.exit(i), n(h));
  }
}
const l4 = { tokenize: a4 };
function a4(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, l, o);
  let i;
  return n;
  function l(d) {
    if (d === null) {
      e.consume(d);
      return;
    }
    return (e.enter('lineEnding'), e.consume(d), e.exit('lineEnding'), Ve(e, n, 'linePrefix'));
  }
  function o(d) {
    return (e.enter('paragraph'), u(d));
  }
  function u(d) {
    const h = e.enter('chunkText', { contentType: 'text', previous: i });
    return (i && (i.next = h), (i = h), c(d));
  }
  function c(d) {
    if (d === null) {
      (e.exit('chunkText'), e.exit('paragraph'), e.consume(d));
      return;
    }
    return we(d) ? (e.consume(d), e.exit('chunkText'), u) : (e.consume(d), c);
  }
}
const o4 = { tokenize: s4 },
  N0 = { tokenize: u4 };
function s4(e) {
  const n = this,
    i = [];
  let l = 0,
    o,
    u,
    c;
  return d;
  function d(M) {
    if (l < i.length) {
      const N = i[l];
      return ((n.containerState = N[1]), e.attempt(N[0].continuation, h, p)(M));
    }
    return p(M);
  }
  function h(M) {
    if ((l++, n.containerState._closeFlow)) {
      ((n.containerState._closeFlow = void 0), o && $());
      const N = n.events.length;
      let z = N,
        R;
      for (; z--; )
        if (n.events[z][0] === 'exit' && n.events[z][1].type === 'chunkFlow') {
          R = n.events[z][1].end;
          break;
        }
      T(l);
      let H = N;
      for (; H < n.events.length; ) ((n.events[H][1].end = { ...R }), H++);
      return (Dn(n.events, z + 1, 0, n.events.slice(N)), (n.events.length = H), p(M));
    }
    return d(M);
  }
  function p(M) {
    if (l === i.length) {
      if (!o) return v(M);
      if (o.currentConstruct && o.currentConstruct.concrete) return C(M);
      n.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return ((n.containerState = {}), e.check(N0, g, y)(M));
  }
  function g(M) {
    return (o && $(), T(l), v(M));
  }
  function y(M) {
    return ((n.parser.lazy[n.now().line] = l !== i.length), (c = n.now().offset), C(M));
  }
  function v(M) {
    return ((n.containerState = {}), e.attempt(N0, b, C)(M));
  }
  function b(M) {
    return (l++, i.push([n.currentConstruct, n.containerState]), v(M));
  }
  function C(M) {
    if (M === null) {
      (o && $(), T(0), e.consume(M));
      return;
    }
    return (
      (o = o || n.parser.flow(n.now())),
      e.enter('chunkFlow', { _tokenizer: o, contentType: 'flow', previous: u }),
      E(M)
    );
  }
  function E(M) {
    if (M === null) {
      (O(e.exit('chunkFlow'), !0), T(0), e.consume(M));
      return;
    }
    return we(M)
      ? (e.consume(M), O(e.exit('chunkFlow')), (l = 0), (n.interrupt = void 0), d)
      : (e.consume(M), E);
  }
  function O(M, N) {
    const z = n.sliceStream(M);
    if (
      (N && z.push(null),
      (M.previous = u),
      u && (u.next = M),
      (u = M),
      o.defineSkip(M.start),
      o.write(z),
      n.parser.lazy[M.start.line])
    ) {
      let R = o.events.length;
      for (; R--; )
        if (
          o.events[R][1].start.offset < c &&
          (!o.events[R][1].end || o.events[R][1].end.offset > c)
        )
          return;
      const H = n.events.length;
      let Y = H,
        Q,
        B;
      for (; Y--; )
        if (n.events[Y][0] === 'exit' && n.events[Y][1].type === 'chunkFlow') {
          if (Q) {
            B = n.events[Y][1].end;
            break;
          }
          Q = !0;
        }
      for (T(l), R = H; R < n.events.length; ) ((n.events[R][1].end = { ...B }), R++);
      (Dn(n.events, Y + 1, 0, n.events.slice(H)), (n.events.length = R));
    }
  }
  function T(M) {
    let N = i.length;
    for (; N-- > M; ) {
      const z = i[N];
      ((n.containerState = z[1]), z[0].exit.call(n, e));
    }
    i.length = M;
  }
  function $() {
    (o.write([null]), (u = void 0), (o = void 0), (n.containerState._closeFlow = void 0));
  }
}
function u4(e, n, i) {
  return Ve(
    e,
    e.attempt(this.parser.constructs.document, n, i),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
  );
}
function Fl(e) {
  if (e === null || yt(e) || Ii(e)) return 1;
  if (Vu(e)) return 2;
}
function Yu(e, n, i) {
  const l = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const u = e[o].resolveAll;
    u && !l.includes(u) && ((n = u(n, i)), l.push(u));
  }
  return n;
}
const pp = { name: 'attention', resolveAll: c4, tokenize: f4 };
function c4(e, n) {
  let i = -1,
    l,
    o,
    u,
    c,
    d,
    h,
    p,
    g;
  for (; ++i < e.length; )
    if (e[i][0] === 'enter' && e[i][1].type === 'attentionSequence' && e[i][1]._close) {
      for (l = i; l--; )
        if (
          e[l][0] === 'exit' &&
          e[l][1].type === 'attentionSequence' &&
          e[l][1]._open &&
          n.sliceSerialize(e[l][1]).charCodeAt(0) === n.sliceSerialize(e[i][1]).charCodeAt(0)
        ) {
          if (
            (e[l][1]._close || e[i][1]._open) &&
            (e[i][1].end.offset - e[i][1].start.offset) % 3 &&
            !(
              (e[l][1].end.offset -
                e[l][1].start.offset +
                e[i][1].end.offset -
                e[i][1].start.offset) %
              3
            )
          )
            continue;
          h =
            e[l][1].end.offset - e[l][1].start.offset > 1 &&
            e[i][1].end.offset - e[i][1].start.offset > 1
              ? 2
              : 1;
          const y = { ...e[l][1].end },
            v = { ...e[i][1].start };
          (_0(y, -h),
            _0(v, h),
            (c = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: y,
              end: { ...e[l][1].end },
            }),
            (d = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...e[i][1].start },
              end: v,
            }),
            (u = {
              type: h > 1 ? 'strongText' : 'emphasisText',
              start: { ...e[l][1].end },
              end: { ...e[i][1].start },
            }),
            (o = { type: h > 1 ? 'strong' : 'emphasis', start: { ...c.start }, end: { ...d.end } }),
            (e[l][1].end = { ...c.start }),
            (e[i][1].start = { ...d.end }),
            (p = []),
            e[l][1].end.offset - e[l][1].start.offset &&
              (p = Fn(p, [
                ['enter', e[l][1], n],
                ['exit', e[l][1], n],
              ])),
            (p = Fn(p, [
              ['enter', o, n],
              ['enter', c, n],
              ['exit', c, n],
              ['enter', u, n],
            ])),
            (p = Fn(p, Yu(n.parser.constructs.insideSpan.null, e.slice(l + 1, i), n))),
            (p = Fn(p, [
              ['exit', u, n],
              ['enter', d, n],
              ['exit', d, n],
              ['exit', o, n],
            ])),
            e[i][1].end.offset - e[i][1].start.offset
              ? ((g = 2),
                (p = Fn(p, [
                  ['enter', e[i][1], n],
                  ['exit', e[i][1], n],
                ])))
              : (g = 0),
            Dn(e, l - 1, i - l + 3, p),
            (i = l + p.length - g - 2));
          break;
        }
    }
  for (i = -1; ++i < e.length; ) e[i][1].type === 'attentionSequence' && (e[i][1].type = 'data');
  return e;
}
function f4(e, n) {
  const i = this.parser.constructs.attentionMarkers.null,
    l = this.previous,
    o = Fl(l);
  let u;
  return c;
  function c(h) {
    return ((u = h), e.enter('attentionSequence'), d(h));
  }
  function d(h) {
    if (h === u) return (e.consume(h), d);
    const p = e.exit('attentionSequence'),
      g = Fl(h),
      y = !g || (g === 2 && o) || i.includes(h),
      v = !o || (o === 2 && g) || i.includes(l);
    return (
      (p._open = !!(u === 42 ? y : y && (o || !v))),
      (p._close = !!(u === 42 ? v : v && (g || !y))),
      n(h)
    );
  }
}
function _0(e, n) {
  ((e.column += n), (e.offset += n), (e._bufferIndex += n));
}
const d4 = { name: 'autolink', tokenize: p4 };
function p4(e, n, i) {
  let l = 0;
  return o;
  function o(b) {
    return (
      e.enter('autolink'),
      e.enter('autolinkMarker'),
      e.consume(b),
      e.exit('autolinkMarker'),
      e.enter('autolinkProtocol'),
      u
    );
  }
  function u(b) {
    return cn(b) ? (e.consume(b), c) : b === 64 ? i(b) : p(b);
  }
  function c(b) {
    return b === 43 || b === 45 || b === 46 || ln(b) ? ((l = 1), d(b)) : p(b);
  }
  function d(b) {
    return b === 58
      ? (e.consume(b), (l = 0), h)
      : (b === 43 || b === 45 || b === 46 || ln(b)) && l++ < 32
        ? (e.consume(b), d)
        : ((l = 0), p(b));
  }
  function h(b) {
    return b === 62
      ? (e.exit('autolinkProtocol'),
        e.enter('autolinkMarker'),
        e.consume(b),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        n)
      : b === null || b === 32 || b === 60 || bu(b)
        ? i(b)
        : (e.consume(b), h);
  }
  function p(b) {
    return b === 64 ? (e.consume(b), g) : n4(b) ? (e.consume(b), p) : i(b);
  }
  function g(b) {
    return ln(b) ? y(b) : i(b);
  }
  function y(b) {
    return b === 46
      ? (e.consume(b), (l = 0), g)
      : b === 62
        ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
          e.enter('autolinkMarker'),
          e.consume(b),
          e.exit('autolinkMarker'),
          e.exit('autolink'),
          n)
        : v(b);
  }
  function v(b) {
    if ((b === 45 || ln(b)) && l++ < 63) {
      const C = b === 45 ? v : y;
      return (e.consume(b), C);
    }
    return i(b);
  }
}
const Oo = { partial: !0, tokenize: h4 };
function h4(e, n, i) {
  return l;
  function l(u) {
    return qe(u) ? Ve(e, o, 'linePrefix')(u) : o(u);
  }
  function o(u) {
    return u === null || we(u) ? n(u) : i(u);
  }
}
const Cv = { continuation: { tokenize: g4 }, exit: y4, name: 'blockQuote', tokenize: m4 };
function m4(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    if (c === 62) {
      const d = l.containerState;
      return (
        d.open || (e.enter('blockQuote', { _container: !0 }), (d.open = !0)),
        e.enter('blockQuotePrefix'),
        e.enter('blockQuoteMarker'),
        e.consume(c),
        e.exit('blockQuoteMarker'),
        u
      );
    }
    return i(c);
  }
  function u(c) {
    return qe(c)
      ? (e.enter('blockQuotePrefixWhitespace'),
        e.consume(c),
        e.exit('blockQuotePrefixWhitespace'),
        e.exit('blockQuotePrefix'),
        n)
      : (e.exit('blockQuotePrefix'), n(c));
  }
}
function g4(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return qe(c)
      ? Ve(
          e,
          u,
          'linePrefix',
          l.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
        )(c)
      : u(c);
  }
  function u(c) {
    return e.attempt(Cv, n, i)(c);
  }
}
function y4(e) {
  e.exit('blockQuote');
}
const kv = { name: 'characterEscape', tokenize: b4 };
function b4(e, n, i) {
  return l;
  function l(u) {
    return (
      e.enter('characterEscape'),
      e.enter('escapeMarker'),
      e.consume(u),
      e.exit('escapeMarker'),
      o
    );
  }
  function o(u) {
    return i4(u)
      ? (e.enter('characterEscapeValue'),
        e.consume(u),
        e.exit('characterEscapeValue'),
        e.exit('characterEscape'),
        n)
      : i(u);
  }
}
const wv = { name: 'characterReference', tokenize: v4 };
function v4(e, n, i) {
  const l = this;
  let o = 0,
    u,
    c;
  return d;
  function d(y) {
    return (
      e.enter('characterReference'),
      e.enter('characterReferenceMarker'),
      e.consume(y),
      e.exit('characterReferenceMarker'),
      h
    );
  }
  function h(y) {
    return y === 35
      ? (e.enter('characterReferenceMarkerNumeric'),
        e.consume(y),
        e.exit('characterReferenceMarkerNumeric'),
        p)
      : (e.enter('characterReferenceValue'), (u = 31), (c = ln), g(y));
  }
  function p(y) {
    return y === 88 || y === 120
      ? (e.enter('characterReferenceMarkerHexadecimal'),
        e.consume(y),
        e.exit('characterReferenceMarkerHexadecimal'),
        e.enter('characterReferenceValue'),
        (u = 6),
        (c = r4),
        g)
      : (e.enter('characterReferenceValue'), (u = 7), (c = dp), g(y));
  }
  function g(y) {
    if (y === 59 && o) {
      const v = e.exit('characterReferenceValue');
      return c === ln && !th(l.sliceSerialize(v))
        ? i(y)
        : (e.enter('characterReferenceMarker'),
          e.consume(y),
          e.exit('characterReferenceMarker'),
          e.exit('characterReference'),
          n);
    }
    return c(y) && o++ < u ? (e.consume(y), g) : i(y);
  }
}
const B0 = { partial: !0, tokenize: S4 },
  L0 = { concrete: !0, name: 'codeFenced', tokenize: x4 };
function x4(e, n, i) {
  const l = this,
    o = { partial: !0, tokenize: z };
  let u = 0,
    c = 0,
    d;
  return h;
  function h(R) {
    return p(R);
  }
  function p(R) {
    const H = l.events[l.events.length - 1];
    return (
      (u = H && H[1].type === 'linePrefix' ? H[2].sliceSerialize(H[1], !0).length : 0),
      (d = R),
      e.enter('codeFenced'),
      e.enter('codeFencedFence'),
      e.enter('codeFencedFenceSequence'),
      g(R)
    );
  }
  function g(R) {
    return R === d
      ? (c++, e.consume(R), g)
      : c < 3
        ? i(R)
        : (e.exit('codeFencedFenceSequence'), qe(R) ? Ve(e, y, 'whitespace')(R) : y(R));
  }
  function y(R) {
    return R === null || we(R)
      ? (e.exit('codeFencedFence'), l.interrupt ? n(R) : e.check(B0, E, N)(R))
      : (e.enter('codeFencedFenceInfo'), e.enter('chunkString', { contentType: 'string' }), v(R));
  }
  function v(R) {
    return R === null || we(R)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), y(R))
      : qe(R)
        ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), Ve(e, b, 'whitespace')(R))
        : R === 96 && R === d
          ? i(R)
          : (e.consume(R), v);
  }
  function b(R) {
    return R === null || we(R)
      ? y(R)
      : (e.enter('codeFencedFenceMeta'), e.enter('chunkString', { contentType: 'string' }), C(R));
  }
  function C(R) {
    return R === null || we(R)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), y(R))
      : R === 96 && R === d
        ? i(R)
        : (e.consume(R), C);
  }
  function E(R) {
    return e.attempt(o, N, O)(R);
  }
  function O(R) {
    return (e.enter('lineEnding'), e.consume(R), e.exit('lineEnding'), T);
  }
  function T(R) {
    return u > 0 && qe(R) ? Ve(e, $, 'linePrefix', u + 1)(R) : $(R);
  }
  function $(R) {
    return R === null || we(R) ? e.check(B0, E, N)(R) : (e.enter('codeFlowValue'), M(R));
  }
  function M(R) {
    return R === null || we(R) ? (e.exit('codeFlowValue'), $(R)) : (e.consume(R), M);
  }
  function N(R) {
    return (e.exit('codeFenced'), n(R));
  }
  function z(R, H, Y) {
    let Q = 0;
    return B;
    function B(I) {
      return (R.enter('lineEnding'), R.consume(I), R.exit('lineEnding'), q);
    }
    function q(I) {
      return (
        R.enter('codeFencedFence'),
        qe(I)
          ? Ve(
              R,
              k,
              'linePrefix',
              l.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
            )(I)
          : k(I)
      );
    }
    function k(I) {
      return I === d ? (R.enter('codeFencedFenceSequence'), X(I)) : Y(I);
    }
    function X(I) {
      return I === d
        ? (Q++, R.consume(I), X)
        : Q >= c
          ? (R.exit('codeFencedFenceSequence'), qe(I) ? Ve(R, F, 'whitespace')(I) : F(I))
          : Y(I);
    }
    function F(I) {
      return I === null || we(I) ? (R.exit('codeFencedFence'), H(I)) : Y(I);
    }
  }
}
function S4(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return c === null ? i(c) : (e.enter('lineEnding'), e.consume(c), e.exit('lineEnding'), u);
  }
  function u(c) {
    return l.parser.lazy[l.now().line] ? i(c) : n(c);
  }
}
const Ld = { name: 'codeIndented', tokenize: k4 },
  C4 = { partial: !0, tokenize: w4 };
function k4(e, n, i) {
  const l = this;
  return o;
  function o(p) {
    return (e.enter('codeIndented'), Ve(e, u, 'linePrefix', 5)(p));
  }
  function u(p) {
    const g = l.events[l.events.length - 1];
    return g && g[1].type === 'linePrefix' && g[2].sliceSerialize(g[1], !0).length >= 4
      ? c(p)
      : i(p);
  }
  function c(p) {
    return p === null ? h(p) : we(p) ? e.attempt(C4, c, h)(p) : (e.enter('codeFlowValue'), d(p));
  }
  function d(p) {
    return p === null || we(p) ? (e.exit('codeFlowValue'), c(p)) : (e.consume(p), d);
  }
  function h(p) {
    return (e.exit('codeIndented'), n(p));
  }
}
function w4(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return l.parser.lazy[l.now().line]
      ? i(c)
      : we(c)
        ? (e.enter('lineEnding'), e.consume(c), e.exit('lineEnding'), o)
        : Ve(e, u, 'linePrefix', 5)(c);
  }
  function u(c) {
    const d = l.events[l.events.length - 1];
    return d && d[1].type === 'linePrefix' && d[2].sliceSerialize(d[1], !0).length >= 4
      ? n(c)
      : we(c)
        ? o(c)
        : i(c);
  }
}
const E4 = { name: 'codeText', previous: A4, resolve: T4, tokenize: R4 };
function T4(e) {
  let n = e.length - 4,
    i = 3,
    l,
    o;
  if (
    (e[i][1].type === 'lineEnding' || e[i][1].type === 'space') &&
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space')
  ) {
    for (l = i; ++l < n; )
      if (e[l][1].type === 'codeTextData') {
        ((e[i][1].type = 'codeTextPadding'),
          (e[n][1].type = 'codeTextPadding'),
          (i += 2),
          (n -= 2));
        break;
      }
  }
  for (l = i - 1, n++; ++l <= n; )
    o === void 0
      ? l !== n && e[l][1].type !== 'lineEnding' && (o = l)
      : (l === n || e[l][1].type === 'lineEnding') &&
        ((e[o][1].type = 'codeTextData'),
        l !== o + 2 &&
          ((e[o][1].end = e[l - 1][1].end),
          e.splice(o + 2, l - o - 2),
          (n -= l - o - 2),
          (l = o + 2)),
        (o = void 0));
  return e;
}
function A4(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function R4(e, n, i) {
  let l = 0,
    o,
    u;
  return c;
  function c(y) {
    return (e.enter('codeText'), e.enter('codeTextSequence'), d(y));
  }
  function d(y) {
    return y === 96 ? (e.consume(y), l++, d) : (e.exit('codeTextSequence'), h(y));
  }
  function h(y) {
    return y === null
      ? i(y)
      : y === 32
        ? (e.enter('space'), e.consume(y), e.exit('space'), h)
        : y === 96
          ? ((u = e.enter('codeTextSequence')), (o = 0), g(y))
          : we(y)
            ? (e.enter('lineEnding'), e.consume(y), e.exit('lineEnding'), h)
            : (e.enter('codeTextData'), p(y));
  }
  function p(y) {
    return y === null || y === 32 || y === 96 || we(y)
      ? (e.exit('codeTextData'), h(y))
      : (e.consume(y), p);
  }
  function g(y) {
    return y === 96
      ? (e.consume(y), o++, g)
      : o === l
        ? (e.exit('codeTextSequence'), e.exit('codeText'), n(y))
        : ((u.type = 'codeTextData'), p(y));
  }
}
class M4 {
  constructor(n) {
    ((this.left = n ? [...n] : []), (this.right = []));
  }
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          n +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`',
      );
    return n < this.left.length
      ? this.left[n]
      : this.right[this.right.length - n + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(n, i) {
    const l = i ?? Number.POSITIVE_INFINITY;
    return l < this.left.length
      ? this.left.slice(n, l)
      : n > this.left.length
        ? this.right
            .slice(
              this.right.length - l + this.left.length,
              this.right.length - n + this.left.length,
            )
            .reverse()
        : this.left
            .slice(n)
            .concat(this.right.slice(this.right.length - l + this.left.length).reverse());
  }
  splice(n, i, l) {
    const o = i || 0;
    this.setCursor(Math.trunc(n));
    const u = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return (l && Ja(this.left, l), u.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(n) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n));
  }
  pushMany(n) {
    (this.setCursor(Number.POSITIVE_INFINITY), Ja(this.left, n));
  }
  unshift(n) {
    (this.setCursor(0), this.right.push(n));
  }
  unshiftMany(n) {
    (this.setCursor(0), Ja(this.right, n.reverse()));
  }
  setCursor(n) {
    if (
      !(
        n === this.left.length ||
        (n > this.left.length && this.right.length === 0) ||
        (n < 0 && this.left.length === 0)
      )
    )
      if (n < this.left.length) {
        const i = this.left.splice(n, Number.POSITIVE_INFINITY);
        Ja(this.right, i.reverse());
      } else {
        const i = this.right.splice(
          this.left.length + this.right.length - n,
          Number.POSITIVE_INFINITY,
        );
        Ja(this.left, i.reverse());
      }
  }
}
function Ja(e, n) {
  let i = 0;
  if (n.length < 1e4) e.push(...n);
  else for (; i < n.length; ) (e.push(...n.slice(i, i + 1e4)), (i += 1e4));
}
function Ev(e) {
  const n = {};
  let i = -1,
    l,
    o,
    u,
    c,
    d,
    h,
    p;
  const g = new M4(e);
  for (; ++i < g.length; ) {
    for (; i in n; ) i = n[i];
    if (
      ((l = g.get(i)),
      i &&
        l[1].type === 'chunkFlow' &&
        g.get(i - 1)[1].type === 'listItemPrefix' &&
        ((h = l[1]._tokenizer.events),
        (u = 0),
        u < h.length && h[u][1].type === 'lineEndingBlank' && (u += 2),
        u < h.length && h[u][1].type === 'content'))
    )
      for (; ++u < h.length && h[u][1].type !== 'content'; )
        h[u][1].type === 'chunkText' && ((h[u][1]._isInFirstContentOfListItem = !0), u++);
    if (l[0] === 'enter') l[1].contentType && (Object.assign(n, O4(g, i)), (i = n[i]), (p = !0));
    else if (l[1]._container) {
      for (u = i, o = void 0; u--; )
        if (((c = g.get(u)), c[1].type === 'lineEnding' || c[1].type === 'lineEndingBlank'))
          c[0] === 'enter' &&
            (o && (g.get(o)[1].type = 'lineEndingBlank'), (c[1].type = 'lineEnding'), (o = u));
        else if (!(c[1].type === 'linePrefix' || c[1].type === 'listItemIndent')) break;
      o &&
        ((l[1].end = { ...g.get(o)[1].start }),
        (d = g.slice(o, i)),
        d.unshift(l),
        g.splice(o, i - o + 1, d));
    }
  }
  return (Dn(e, 0, Number.POSITIVE_INFINITY, g.slice(0)), !p);
}
function O4(e, n) {
  const i = e.get(n)[1],
    l = e.get(n)[2];
  let o = n - 1;
  const u = [];
  let c = i._tokenizer;
  c ||
    ((c = l.parser[i.contentType](i.start)),
    i._contentTypeTextTrailing && (c._contentTypeTextTrailing = !0));
  const d = c.events,
    h = [],
    p = {};
  let g,
    y,
    v = -1,
    b = i,
    C = 0,
    E = 0;
  const O = [E];
  for (; b; ) {
    for (; e.get(++o)[1] !== b; );
    (u.push(o),
      b._tokenizer ||
        ((g = l.sliceStream(b)),
        b.next || g.push(null),
        y && c.defineSkip(b.start),
        b._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0),
        c.write(g),
        b._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)),
      (y = b),
      (b = b.next));
  }
  for (b = i; ++v < d.length; )
    d[v][0] === 'exit' &&
      d[v - 1][0] === 'enter' &&
      d[v][1].type === d[v - 1][1].type &&
      d[v][1].start.line !== d[v][1].end.line &&
      ((E = v + 1), O.push(E), (b._tokenizer = void 0), (b.previous = void 0), (b = b.next));
  for (
    c.events = [], b ? ((b._tokenizer = void 0), (b.previous = void 0)) : O.pop(), v = O.length;
    v--;

  ) {
    const T = d.slice(O[v], O[v + 1]),
      $ = u.pop();
    (h.push([$, $ + T.length - 1]), e.splice($, 2, T));
  }
  for (h.reverse(), v = -1; ++v < h.length; )
    ((p[C + h[v][0]] = C + h[v][1]), (C += h[v][1] - h[v][0] - 1));
  return p;
}
const z4 = { resolve: N4, tokenize: _4 },
  D4 = { partial: !0, tokenize: B4 };
function N4(e) {
  return (Ev(e), e);
}
function _4(e, n) {
  let i;
  return l;
  function l(d) {
    return (e.enter('content'), (i = e.enter('chunkContent', { contentType: 'content' })), o(d));
  }
  function o(d) {
    return d === null ? u(d) : we(d) ? e.check(D4, c, u)(d) : (e.consume(d), o);
  }
  function u(d) {
    return (e.exit('chunkContent'), e.exit('content'), n(d));
  }
  function c(d) {
    return (
      e.consume(d),
      e.exit('chunkContent'),
      (i.next = e.enter('chunkContent', { contentType: 'content', previous: i })),
      (i = i.next),
      o
    );
  }
}
function B4(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return (
      e.exit('chunkContent'),
      e.enter('lineEnding'),
      e.consume(c),
      e.exit('lineEnding'),
      Ve(e, u, 'linePrefix')
    );
  }
  function u(c) {
    if (c === null || we(c)) return i(c);
    const d = l.events[l.events.length - 1];
    return !l.parser.constructs.disable.null.includes('codeIndented') &&
      d &&
      d[1].type === 'linePrefix' &&
      d[2].sliceSerialize(d[1], !0).length >= 4
      ? n(c)
      : e.interrupt(l.parser.constructs.flow, i, n)(c);
  }
}
function Tv(e, n, i, l, o, u, c, d, h) {
  const p = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return y;
  function y(T) {
    return T === 60
      ? (e.enter(l), e.enter(o), e.enter(u), e.consume(T), e.exit(u), v)
      : T === null || T === 32 || T === 41 || bu(T)
        ? i(T)
        : (e.enter(l),
          e.enter(c),
          e.enter(d),
          e.enter('chunkString', { contentType: 'string' }),
          E(T));
  }
  function v(T) {
    return T === 62
      ? (e.enter(u), e.consume(T), e.exit(u), e.exit(o), e.exit(l), n)
      : (e.enter(d), e.enter('chunkString', { contentType: 'string' }), b(T));
  }
  function b(T) {
    return T === 62
      ? (e.exit('chunkString'), e.exit(d), v(T))
      : T === null || T === 60 || we(T)
        ? i(T)
        : (e.consume(T), T === 92 ? C : b);
  }
  function C(T) {
    return T === 60 || T === 62 || T === 92 ? (e.consume(T), b) : b(T);
  }
  function E(T) {
    return !g && (T === null || T === 41 || yt(T))
      ? (e.exit('chunkString'), e.exit(d), e.exit(c), e.exit(l), n(T))
      : g < p && T === 40
        ? (e.consume(T), g++, E)
        : T === 41
          ? (e.consume(T), g--, E)
          : T === null || T === 32 || T === 40 || bu(T)
            ? i(T)
            : (e.consume(T), T === 92 ? O : E);
  }
  function O(T) {
    return T === 40 || T === 41 || T === 92 ? (e.consume(T), E) : E(T);
  }
}
function Av(e, n, i, l, o, u) {
  const c = this;
  let d = 0,
    h;
  return p;
  function p(b) {
    return (e.enter(l), e.enter(o), e.consume(b), e.exit(o), e.enter(u), g);
  }
  function g(b) {
    return d > 999 ||
      b === null ||
      b === 91 ||
      (b === 93 && !h) ||
      (b === 94 && !d && '_hiddenFootnoteSupport' in c.parser.constructs)
      ? i(b)
      : b === 93
        ? (e.exit(u), e.enter(o), e.consume(b), e.exit(o), e.exit(l), n)
        : we(b)
          ? (e.enter('lineEnding'), e.consume(b), e.exit('lineEnding'), g)
          : (e.enter('chunkString', { contentType: 'string' }), y(b));
  }
  function y(b) {
    return b === null || b === 91 || b === 93 || we(b) || d++ > 999
      ? (e.exit('chunkString'), g(b))
      : (e.consume(b), h || (h = !qe(b)), b === 92 ? v : y);
  }
  function v(b) {
    return b === 91 || b === 92 || b === 93 ? (e.consume(b), d++, y) : y(b);
  }
}
function Rv(e, n, i, l, o, u) {
  let c;
  return d;
  function d(v) {
    return v === 34 || v === 39 || v === 40
      ? (e.enter(l), e.enter(o), e.consume(v), e.exit(o), (c = v === 40 ? 41 : v), h)
      : i(v);
  }
  function h(v) {
    return v === c ? (e.enter(o), e.consume(v), e.exit(o), e.exit(l), n) : (e.enter(u), p(v));
  }
  function p(v) {
    return v === c
      ? (e.exit(u), h(c))
      : v === null
        ? i(v)
        : we(v)
          ? (e.enter('lineEnding'), e.consume(v), e.exit('lineEnding'), Ve(e, p, 'linePrefix'))
          : (e.enter('chunkString', { contentType: 'string' }), g(v));
  }
  function g(v) {
    return v === c || v === null || we(v)
      ? (e.exit('chunkString'), p(v))
      : (e.consume(v), v === 92 ? y : g);
  }
  function y(v) {
    return v === c || v === 92 ? (e.consume(v), g) : g(v);
  }
}
function co(e, n) {
  let i;
  return l;
  function l(o) {
    return we(o)
      ? (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), (i = !0), l)
      : qe(o)
        ? Ve(e, l, i ? 'linePrefix' : 'lineSuffix')(o)
        : n(o);
  }
}
const L4 = { name: 'definition', tokenize: U4 },
  $4 = { partial: !0, tokenize: j4 };
function U4(e, n, i) {
  const l = this;
  let o;
  return u;
  function u(b) {
    return (e.enter('definition'), c(b));
  }
  function c(b) {
    return Av.call(
      l,
      e,
      d,
      i,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString',
    )(b);
  }
  function d(b) {
    return (
      (o = Qn(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))),
      b === 58 ? (e.enter('definitionMarker'), e.consume(b), e.exit('definitionMarker'), h) : i(b)
    );
  }
  function h(b) {
    return yt(b) ? co(e, p)(b) : p(b);
  }
  function p(b) {
    return Tv(
      e,
      g,
      i,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString',
    )(b);
  }
  function g(b) {
    return e.attempt($4, y, y)(b);
  }
  function y(b) {
    return qe(b) ? Ve(e, v, 'whitespace')(b) : v(b);
  }
  function v(b) {
    return b === null || we(b) ? (e.exit('definition'), l.parser.defined.push(o), n(b)) : i(b);
  }
}
function j4(e, n, i) {
  return l;
  function l(d) {
    return yt(d) ? co(e, o)(d) : i(d);
  }
  function o(d) {
    return Rv(e, u, i, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(d);
  }
  function u(d) {
    return qe(d) ? Ve(e, c, 'whitespace')(d) : c(d);
  }
  function c(d) {
    return d === null || we(d) ? n(d) : i(d);
  }
}
const P4 = { name: 'hardBreakEscape', tokenize: I4 };
function I4(e, n, i) {
  return l;
  function l(u) {
    return (e.enter('hardBreakEscape'), e.consume(u), o);
  }
  function o(u) {
    return we(u) ? (e.exit('hardBreakEscape'), n(u)) : i(u);
  }
}
const H4 = { name: 'headingAtx', resolve: q4, tokenize: F4 };
function q4(e, n) {
  let i = e.length - 2,
    l = 3,
    o,
    u;
  return (
    e[l][1].type === 'whitespace' && (l += 2),
    i - 2 > l && e[i][1].type === 'whitespace' && (i -= 2),
    e[i][1].type === 'atxHeadingSequence' &&
      (l === i - 1 || (i - 4 > l && e[i - 2][1].type === 'whitespace')) &&
      (i -= l + 1 === i ? 2 : 4),
    i > l &&
      ((o = { type: 'atxHeadingText', start: e[l][1].start, end: e[i][1].end }),
      (u = { type: 'chunkText', start: e[l][1].start, end: e[i][1].end, contentType: 'text' }),
      Dn(e, l, i - l + 1, [
        ['enter', o, n],
        ['enter', u, n],
        ['exit', u, n],
        ['exit', o, n],
      ])),
    e
  );
}
function F4(e, n, i) {
  let l = 0;
  return o;
  function o(g) {
    return (e.enter('atxHeading'), u(g));
  }
  function u(g) {
    return (e.enter('atxHeadingSequence'), c(g));
  }
  function c(g) {
    return g === 35 && l++ < 6
      ? (e.consume(g), c)
      : g === null || yt(g)
        ? (e.exit('atxHeadingSequence'), d(g))
        : i(g);
  }
  function d(g) {
    return g === 35
      ? (e.enter('atxHeadingSequence'), h(g))
      : g === null || we(g)
        ? (e.exit('atxHeading'), n(g))
        : qe(g)
          ? Ve(e, d, 'whitespace')(g)
          : (e.enter('atxHeadingText'), p(g));
  }
  function h(g) {
    return g === 35 ? (e.consume(g), h) : (e.exit('atxHeadingSequence'), d(g));
  }
  function p(g) {
    return g === null || g === 35 || yt(g) ? (e.exit('atxHeadingText'), d(g)) : (e.consume(g), p);
  }
}
const V4 = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  $0 = ['pre', 'script', 'style', 'textarea'],
  Y4 = { concrete: !0, name: 'htmlFlow', resolveTo: K4, tokenize: Q4 },
  G4 = { partial: !0, tokenize: W4 },
  X4 = { partial: !0, tokenize: Z4 };
function K4(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === 'enter' && e[n][1].type === 'htmlFlow'); );
  return (
    n > 1 &&
      e[n - 2][1].type === 'linePrefix' &&
      ((e[n][1].start = e[n - 2][1].start),
      (e[n + 1][1].start = e[n - 2][1].start),
      e.splice(n - 2, 2)),
    e
  );
}
function Q4(e, n, i) {
  const l = this;
  let o, u, c, d, h;
  return p;
  function p(A) {
    return g(A);
  }
  function g(A) {
    return (e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(A), y);
  }
  function y(A) {
    return A === 33
      ? (e.consume(A), v)
      : A === 47
        ? (e.consume(A), (u = !0), E)
        : A === 63
          ? (e.consume(A), (o = 3), l.interrupt ? n : S)
          : cn(A)
            ? (e.consume(A), (c = String.fromCharCode(A)), O)
            : i(A);
  }
  function v(A) {
    return A === 45
      ? (e.consume(A), (o = 2), b)
      : A === 91
        ? (e.consume(A), (o = 5), (d = 0), C)
        : cn(A)
          ? (e.consume(A), (o = 4), l.interrupt ? n : S)
          : i(A);
  }
  function b(A) {
    return A === 45 ? (e.consume(A), l.interrupt ? n : S) : i(A);
  }
  function C(A) {
    const ce = 'CDATA[';
    return A === ce.charCodeAt(d++)
      ? (e.consume(A), d === ce.length ? (l.interrupt ? n : k) : C)
      : i(A);
  }
  function E(A) {
    return cn(A) ? (e.consume(A), (c = String.fromCharCode(A)), O) : i(A);
  }
  function O(A) {
    if (A === null || A === 47 || A === 62 || yt(A)) {
      const ce = A === 47,
        he = c.toLowerCase();
      return !ce && !u && $0.includes(he)
        ? ((o = 1), l.interrupt ? n(A) : k(A))
        : V4.includes(c.toLowerCase())
          ? ((o = 6), ce ? (e.consume(A), T) : l.interrupt ? n(A) : k(A))
          : ((o = 7), l.interrupt && !l.parser.lazy[l.now().line] ? i(A) : u ? $(A) : M(A));
    }
    return A === 45 || ln(A) ? (e.consume(A), (c += String.fromCharCode(A)), O) : i(A);
  }
  function T(A) {
    return A === 62 ? (e.consume(A), l.interrupt ? n : k) : i(A);
  }
  function $(A) {
    return qe(A) ? (e.consume(A), $) : B(A);
  }
  function M(A) {
    return A === 47
      ? (e.consume(A), B)
      : A === 58 || A === 95 || cn(A)
        ? (e.consume(A), N)
        : qe(A)
          ? (e.consume(A), M)
          : B(A);
  }
  function N(A) {
    return A === 45 || A === 46 || A === 58 || A === 95 || ln(A) ? (e.consume(A), N) : z(A);
  }
  function z(A) {
    return A === 61 ? (e.consume(A), R) : qe(A) ? (e.consume(A), z) : M(A);
  }
  function R(A) {
    return A === null || A === 60 || A === 61 || A === 62 || A === 96
      ? i(A)
      : A === 34 || A === 39
        ? (e.consume(A), (h = A), H)
        : qe(A)
          ? (e.consume(A), R)
          : Y(A);
  }
  function H(A) {
    return A === h ? (e.consume(A), (h = null), Q) : A === null || we(A) ? i(A) : (e.consume(A), H);
  }
  function Y(A) {
    return A === null ||
      A === 34 ||
      A === 39 ||
      A === 47 ||
      A === 60 ||
      A === 61 ||
      A === 62 ||
      A === 96 ||
      yt(A)
      ? z(A)
      : (e.consume(A), Y);
  }
  function Q(A) {
    return A === 47 || A === 62 || qe(A) ? M(A) : i(A);
  }
  function B(A) {
    return A === 62 ? (e.consume(A), q) : i(A);
  }
  function q(A) {
    return A === null || we(A) ? k(A) : qe(A) ? (e.consume(A), q) : i(A);
  }
  function k(A) {
    return A === 45 && o === 2
      ? (e.consume(A), _)
      : A === 60 && o === 1
        ? (e.consume(A), K)
        : A === 62 && o === 4
          ? (e.consume(A), J)
          : A === 63 && o === 3
            ? (e.consume(A), S)
            : A === 93 && o === 5
              ? (e.consume(A), re)
              : we(A) && (o === 6 || o === 7)
                ? (e.exit('htmlFlowData'), e.check(G4, oe, X)(A))
                : A === null || we(A)
                  ? (e.exit('htmlFlowData'), X(A))
                  : (e.consume(A), k);
  }
  function X(A) {
    return e.check(X4, F, oe)(A);
  }
  function F(A) {
    return (e.enter('lineEnding'), e.consume(A), e.exit('lineEnding'), I);
  }
  function I(A) {
    return A === null || we(A) ? X(A) : (e.enter('htmlFlowData'), k(A));
  }
  function _(A) {
    return A === 45 ? (e.consume(A), S) : k(A);
  }
  function K(A) {
    return A === 47 ? (e.consume(A), (c = ''), ue) : k(A);
  }
  function ue(A) {
    if (A === 62) {
      const ce = c.toLowerCase();
      return $0.includes(ce) ? (e.consume(A), J) : k(A);
    }
    return cn(A) && c.length < 8 ? (e.consume(A), (c += String.fromCharCode(A)), ue) : k(A);
  }
  function re(A) {
    return A === 93 ? (e.consume(A), S) : k(A);
  }
  function S(A) {
    return A === 62 ? (e.consume(A), J) : A === 45 && o === 2 ? (e.consume(A), S) : k(A);
  }
  function J(A) {
    return A === null || we(A) ? (e.exit('htmlFlowData'), oe(A)) : (e.consume(A), J);
  }
  function oe(A) {
    return (e.exit('htmlFlow'), n(A));
  }
}
function Z4(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return we(c) ? (e.enter('lineEnding'), e.consume(c), e.exit('lineEnding'), u) : i(c);
  }
  function u(c) {
    return l.parser.lazy[l.now().line] ? i(c) : n(c);
  }
}
function W4(e, n, i) {
  return l;
  function l(o) {
    return (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), e.attempt(Oo, n, i));
  }
}
const J4 = { name: 'htmlText', tokenize: eO };
function eO(e, n, i) {
  const l = this;
  let o, u, c;
  return d;
  function d(S) {
    return (e.enter('htmlText'), e.enter('htmlTextData'), e.consume(S), h);
  }
  function h(S) {
    return S === 33
      ? (e.consume(S), p)
      : S === 47
        ? (e.consume(S), z)
        : S === 63
          ? (e.consume(S), M)
          : cn(S)
            ? (e.consume(S), Y)
            : i(S);
  }
  function p(S) {
    return S === 45
      ? (e.consume(S), g)
      : S === 91
        ? (e.consume(S), (u = 0), C)
        : cn(S)
          ? (e.consume(S), $)
          : i(S);
  }
  function g(S) {
    return S === 45 ? (e.consume(S), b) : i(S);
  }
  function y(S) {
    return S === null
      ? i(S)
      : S === 45
        ? (e.consume(S), v)
        : we(S)
          ? ((c = y), K(S))
          : (e.consume(S), y);
  }
  function v(S) {
    return S === 45 ? (e.consume(S), b) : y(S);
  }
  function b(S) {
    return S === 62 ? _(S) : S === 45 ? v(S) : y(S);
  }
  function C(S) {
    const J = 'CDATA[';
    return S === J.charCodeAt(u++) ? (e.consume(S), u === J.length ? E : C) : i(S);
  }
  function E(S) {
    return S === null
      ? i(S)
      : S === 93
        ? (e.consume(S), O)
        : we(S)
          ? ((c = E), K(S))
          : (e.consume(S), E);
  }
  function O(S) {
    return S === 93 ? (e.consume(S), T) : E(S);
  }
  function T(S) {
    return S === 62 ? _(S) : S === 93 ? (e.consume(S), T) : E(S);
  }
  function $(S) {
    return S === null || S === 62 ? _(S) : we(S) ? ((c = $), K(S)) : (e.consume(S), $);
  }
  function M(S) {
    return S === null
      ? i(S)
      : S === 63
        ? (e.consume(S), N)
        : we(S)
          ? ((c = M), K(S))
          : (e.consume(S), M);
  }
  function N(S) {
    return S === 62 ? _(S) : M(S);
  }
  function z(S) {
    return cn(S) ? (e.consume(S), R) : i(S);
  }
  function R(S) {
    return S === 45 || ln(S) ? (e.consume(S), R) : H(S);
  }
  function H(S) {
    return we(S) ? ((c = H), K(S)) : qe(S) ? (e.consume(S), H) : _(S);
  }
  function Y(S) {
    return S === 45 || ln(S) ? (e.consume(S), Y) : S === 47 || S === 62 || yt(S) ? Q(S) : i(S);
  }
  function Q(S) {
    return S === 47
      ? (e.consume(S), _)
      : S === 58 || S === 95 || cn(S)
        ? (e.consume(S), B)
        : we(S)
          ? ((c = Q), K(S))
          : qe(S)
            ? (e.consume(S), Q)
            : _(S);
  }
  function B(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || ln(S) ? (e.consume(S), B) : q(S);
  }
  function q(S) {
    return S === 61
      ? (e.consume(S), k)
      : we(S)
        ? ((c = q), K(S))
        : qe(S)
          ? (e.consume(S), q)
          : Q(S);
  }
  function k(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96
      ? i(S)
      : S === 34 || S === 39
        ? (e.consume(S), (o = S), X)
        : we(S)
          ? ((c = k), K(S))
          : qe(S)
            ? (e.consume(S), k)
            : (e.consume(S), F);
  }
  function X(S) {
    return S === o
      ? (e.consume(S), (o = void 0), I)
      : S === null
        ? i(S)
        : we(S)
          ? ((c = X), K(S))
          : (e.consume(S), X);
  }
  function F(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96
      ? i(S)
      : S === 47 || S === 62 || yt(S)
        ? Q(S)
        : (e.consume(S), F);
  }
  function I(S) {
    return S === 47 || S === 62 || yt(S) ? Q(S) : i(S);
  }
  function _(S) {
    return S === 62 ? (e.consume(S), e.exit('htmlTextData'), e.exit('htmlText'), n) : i(S);
  }
  function K(S) {
    return (e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(S), e.exit('lineEnding'), ue);
  }
  function ue(S) {
    return qe(S)
      ? Ve(
          e,
          re,
          'linePrefix',
          l.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
        )(S)
      : re(S);
  }
  function re(S) {
    return (e.enter('htmlTextData'), c(S));
  }
}
const nh = { name: 'labelEnd', resolveAll: iO, resolveTo: lO, tokenize: aO },
  tO = { tokenize: oO },
  nO = { tokenize: sO },
  rO = { tokenize: uO };
function iO(e) {
  let n = -1;
  const i = [];
  for (; ++n < e.length; ) {
    const l = e[n][1];
    if (
      (i.push(e[n]), l.type === 'labelImage' || l.type === 'labelLink' || l.type === 'labelEnd')
    ) {
      const o = l.type === 'labelImage' ? 4 : 2;
      ((l.type = 'data'), (n += o));
    }
  }
  return (e.length !== i.length && Dn(e, 0, e.length, i), e);
}
function lO(e, n) {
  let i = e.length,
    l = 0,
    o,
    u,
    c,
    d;
  for (; i--; )
    if (((o = e[i][1]), u)) {
      if (o.type === 'link' || (o.type === 'labelLink' && o._inactive)) break;
      e[i][0] === 'enter' && o.type === 'labelLink' && (o._inactive = !0);
    } else if (c) {
      if (
        e[i][0] === 'enter' &&
        (o.type === 'labelImage' || o.type === 'labelLink') &&
        !o._balanced &&
        ((u = i), o.type !== 'labelLink')
      ) {
        l = 2;
        break;
      }
    } else o.type === 'labelEnd' && (c = i);
  const h = {
      type: e[u][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...e[u][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    p = { type: 'label', start: { ...e[u][1].start }, end: { ...e[c][1].end } },
    g = { type: 'labelText', start: { ...e[u + l + 2][1].end }, end: { ...e[c - 2][1].start } };
  return (
    (d = [
      ['enter', h, n],
      ['enter', p, n],
    ]),
    (d = Fn(d, e.slice(u + 1, u + l + 3))),
    (d = Fn(d, [['enter', g, n]])),
    (d = Fn(d, Yu(n.parser.constructs.insideSpan.null, e.slice(u + l + 4, c - 3), n))),
    (d = Fn(d, [['exit', g, n], e[c - 2], e[c - 1], ['exit', p, n]])),
    (d = Fn(d, e.slice(c + 1))),
    (d = Fn(d, [['exit', h, n]])),
    Dn(e, u, e.length, d),
    e
  );
}
function aO(e, n, i) {
  const l = this;
  let o = l.events.length,
    u,
    c;
  for (; o--; )
    if (
      (l.events[o][1].type === 'labelImage' || l.events[o][1].type === 'labelLink') &&
      !l.events[o][1]._balanced
    ) {
      u = l.events[o][1];
      break;
    }
  return d;
  function d(v) {
    return u
      ? u._inactive
        ? y(v)
        : ((c = l.parser.defined.includes(Qn(l.sliceSerialize({ start: u.end, end: l.now() })))),
          e.enter('labelEnd'),
          e.enter('labelMarker'),
          e.consume(v),
          e.exit('labelMarker'),
          e.exit('labelEnd'),
          h)
      : i(v);
  }
  function h(v) {
    return v === 40
      ? e.attempt(tO, g, c ? g : y)(v)
      : v === 91
        ? e.attempt(nO, g, c ? p : y)(v)
        : c
          ? g(v)
          : y(v);
  }
  function p(v) {
    return e.attempt(rO, g, y)(v);
  }
  function g(v) {
    return n(v);
  }
  function y(v) {
    return ((u._balanced = !0), i(v));
  }
}
function oO(e, n, i) {
  return l;
  function l(y) {
    return (
      e.enter('resource'),
      e.enter('resourceMarker'),
      e.consume(y),
      e.exit('resourceMarker'),
      o
    );
  }
  function o(y) {
    return yt(y) ? co(e, u)(y) : u(y);
  }
  function u(y) {
    return y === 41
      ? g(y)
      : Tv(
          e,
          c,
          d,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32,
        )(y);
  }
  function c(y) {
    return yt(y) ? co(e, h)(y) : g(y);
  }
  function d(y) {
    return i(y);
  }
  function h(y) {
    return y === 34 || y === 39 || y === 40
      ? Rv(e, p, i, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(y)
      : g(y);
  }
  function p(y) {
    return yt(y) ? co(e, g)(y) : g(y);
  }
  function g(y) {
    return y === 41
      ? (e.enter('resourceMarker'), e.consume(y), e.exit('resourceMarker'), e.exit('resource'), n)
      : i(y);
  }
}
function sO(e, n, i) {
  const l = this;
  return o;
  function o(d) {
    return Av.call(l, e, u, c, 'reference', 'referenceMarker', 'referenceString')(d);
  }
  function u(d) {
    return l.parser.defined.includes(
      Qn(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)),
    )
      ? n(d)
      : i(d);
  }
  function c(d) {
    return i(d);
  }
}
function uO(e, n, i) {
  return l;
  function l(u) {
    return (
      e.enter('reference'),
      e.enter('referenceMarker'),
      e.consume(u),
      e.exit('referenceMarker'),
      o
    );
  }
  function o(u) {
    return u === 93
      ? (e.enter('referenceMarker'),
        e.consume(u),
        e.exit('referenceMarker'),
        e.exit('reference'),
        n)
      : i(u);
  }
}
const cO = { name: 'labelStartImage', resolveAll: nh.resolveAll, tokenize: fO };
function fO(e, n, i) {
  const l = this;
  return o;
  function o(d) {
    return (
      e.enter('labelImage'),
      e.enter('labelImageMarker'),
      e.consume(d),
      e.exit('labelImageMarker'),
      u
    );
  }
  function u(d) {
    return d === 91
      ? (e.enter('labelMarker'), e.consume(d), e.exit('labelMarker'), e.exit('labelImage'), c)
      : i(d);
  }
  function c(d) {
    return d === 94 && '_hiddenFootnoteSupport' in l.parser.constructs ? i(d) : n(d);
  }
}
const dO = { name: 'labelStartLink', resolveAll: nh.resolveAll, tokenize: pO };
function pO(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return (
      e.enter('labelLink'),
      e.enter('labelMarker'),
      e.consume(c),
      e.exit('labelMarker'),
      e.exit('labelLink'),
      u
    );
  }
  function u(c) {
    return c === 94 && '_hiddenFootnoteSupport' in l.parser.constructs ? i(c) : n(c);
  }
}
const $d = { name: 'lineEnding', tokenize: hO };
function hO(e, n) {
  return i;
  function i(l) {
    return (e.enter('lineEnding'), e.consume(l), e.exit('lineEnding'), Ve(e, n, 'linePrefix'));
  }
}
const ou = { name: 'thematicBreak', tokenize: mO };
function mO(e, n, i) {
  let l = 0,
    o;
  return u;
  function u(p) {
    return (e.enter('thematicBreak'), c(p));
  }
  function c(p) {
    return ((o = p), d(p));
  }
  function d(p) {
    return p === o
      ? (e.enter('thematicBreakSequence'), h(p))
      : l >= 3 && (p === null || we(p))
        ? (e.exit('thematicBreak'), n(p))
        : i(p);
  }
  function h(p) {
    return p === o
      ? (e.consume(p), l++, h)
      : (e.exit('thematicBreakSequence'), qe(p) ? Ve(e, d, 'whitespace')(p) : d(p));
  }
}
const gn = { continuation: { tokenize: vO }, exit: SO, name: 'list', tokenize: bO },
  gO = { partial: !0, tokenize: CO },
  yO = { partial: !0, tokenize: xO };
function bO(e, n, i) {
  const l = this,
    o = l.events[l.events.length - 1];
  let u = o && o[1].type === 'linePrefix' ? o[2].sliceSerialize(o[1], !0).length : 0,
    c = 0;
  return d;
  function d(b) {
    const C =
      l.containerState.type || (b === 42 || b === 43 || b === 45 ? 'listUnordered' : 'listOrdered');
    if (C === 'listUnordered' ? !l.containerState.marker || b === l.containerState.marker : dp(b)) {
      if (
        (l.containerState.type || ((l.containerState.type = C), e.enter(C, { _container: !0 })),
        C === 'listUnordered')
      )
        return (e.enter('listItemPrefix'), b === 42 || b === 45 ? e.check(ou, i, p)(b) : p(b));
      if (!l.interrupt || b === 49)
        return (e.enter('listItemPrefix'), e.enter('listItemValue'), h(b));
    }
    return i(b);
  }
  function h(b) {
    return dp(b) && ++c < 10
      ? (e.consume(b), h)
      : (!l.interrupt || c < 2) &&
          (l.containerState.marker ? b === l.containerState.marker : b === 41 || b === 46)
        ? (e.exit('listItemValue'), p(b))
        : i(b);
  }
  function p(b) {
    return (
      e.enter('listItemMarker'),
      e.consume(b),
      e.exit('listItemMarker'),
      (l.containerState.marker = l.containerState.marker || b),
      e.check(Oo, l.interrupt ? i : g, e.attempt(gO, v, y))
    );
  }
  function g(b) {
    return ((l.containerState.initialBlankLine = !0), u++, v(b));
  }
  function y(b) {
    return qe(b)
      ? (e.enter('listItemPrefixWhitespace'), e.consume(b), e.exit('listItemPrefixWhitespace'), v)
      : i(b);
  }
  function v(b) {
    return (
      (l.containerState.size = u + l.sliceSerialize(e.exit('listItemPrefix'), !0).length),
      n(b)
    );
  }
}
function vO(e, n, i) {
  const l = this;
  return ((l.containerState._closeFlow = void 0), e.check(Oo, o, u));
  function o(d) {
    return (
      (l.containerState.furtherBlankLines =
        l.containerState.furtherBlankLines || l.containerState.initialBlankLine),
      Ve(e, n, 'listItemIndent', l.containerState.size + 1)(d)
    );
  }
  function u(d) {
    return l.containerState.furtherBlankLines || !qe(d)
      ? ((l.containerState.furtherBlankLines = void 0),
        (l.containerState.initialBlankLine = void 0),
        c(d))
      : ((l.containerState.furtherBlankLines = void 0),
        (l.containerState.initialBlankLine = void 0),
        e.attempt(yO, n, c)(d));
  }
  function c(d) {
    return (
      (l.containerState._closeFlow = !0),
      (l.interrupt = void 0),
      Ve(
        e,
        e.attempt(gn, n, i),
        'linePrefix',
        l.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
      )(d)
    );
  }
}
function xO(e, n, i) {
  const l = this;
  return Ve(e, o, 'listItemIndent', l.containerState.size + 1);
  function o(u) {
    const c = l.events[l.events.length - 1];
    return c &&
      c[1].type === 'listItemIndent' &&
      c[2].sliceSerialize(c[1], !0).length === l.containerState.size
      ? n(u)
      : i(u);
  }
}
function SO(e) {
  e.exit(this.containerState.type);
}
function CO(e, n, i) {
  const l = this;
  return Ve(
    e,
    o,
    'listItemPrefixWhitespace',
    l.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
  );
  function o(u) {
    const c = l.events[l.events.length - 1];
    return !qe(u) && c && c[1].type === 'listItemPrefixWhitespace' ? n(u) : i(u);
  }
}
const U0 = { name: 'setextUnderline', resolveTo: kO, tokenize: wO };
function kO(e, n) {
  let i = e.length,
    l,
    o,
    u;
  for (; i--; )
    if (e[i][0] === 'enter') {
      if (e[i][1].type === 'content') {
        l = i;
        break;
      }
      e[i][1].type === 'paragraph' && (o = i);
    } else
      (e[i][1].type === 'content' && e.splice(i, 1),
        !u && e[i][1].type === 'definition' && (u = i));
  const c = {
    type: 'setextHeading',
    start: { ...e[l][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[o][1].type = 'setextHeadingText'),
    u
      ? (e.splice(o, 0, ['enter', c, n]),
        e.splice(u + 1, 0, ['exit', e[l][1], n]),
        (e[l][1].end = { ...e[u][1].end }))
      : (e[l][1] = c),
    e.push(['exit', c, n]),
    e
  );
}
function wO(e, n, i) {
  const l = this;
  let o;
  return u;
  function u(p) {
    let g = l.events.length,
      y;
    for (; g--; )
      if (
        l.events[g][1].type !== 'lineEnding' &&
        l.events[g][1].type !== 'linePrefix' &&
        l.events[g][1].type !== 'content'
      ) {
        y = l.events[g][1].type === 'paragraph';
        break;
      }
    return !l.parser.lazy[l.now().line] && (l.interrupt || y)
      ? (e.enter('setextHeadingLine'), (o = p), c(p))
      : i(p);
  }
  function c(p) {
    return (e.enter('setextHeadingLineSequence'), d(p));
  }
  function d(p) {
    return p === o
      ? (e.consume(p), d)
      : (e.exit('setextHeadingLineSequence'), qe(p) ? Ve(e, h, 'lineSuffix')(p) : h(p));
  }
  function h(p) {
    return p === null || we(p) ? (e.exit('setextHeadingLine'), n(p)) : i(p);
  }
}
const EO = { tokenize: TO };
function TO(e) {
  const n = this,
    i = e.attempt(
      Oo,
      l,
      e.attempt(
        this.parser.constructs.flowInitial,
        o,
        Ve(e, e.attempt(this.parser.constructs.flow, o, e.attempt(z4, o)), 'linePrefix'),
      ),
    );
  return i;
  function l(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    return (
      e.enter('lineEndingBlank'),
      e.consume(u),
      e.exit('lineEndingBlank'),
      (n.currentConstruct = void 0),
      i
    );
  }
  function o(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    return (
      e.enter('lineEnding'),
      e.consume(u),
      e.exit('lineEnding'),
      (n.currentConstruct = void 0),
      i
    );
  }
}
const AO = { resolveAll: Ov() },
  RO = Mv('string'),
  MO = Mv('text');
function Mv(e) {
  return { resolveAll: Ov(e === 'text' ? OO : void 0), tokenize: n };
  function n(i) {
    const l = this,
      o = this.parser.constructs[e],
      u = i.attempt(o, c, d);
    return c;
    function c(g) {
      return p(g) ? u(g) : d(g);
    }
    function d(g) {
      if (g === null) {
        i.consume(g);
        return;
      }
      return (i.enter('data'), i.consume(g), h);
    }
    function h(g) {
      return p(g) ? (i.exit('data'), u(g)) : (i.consume(g), h);
    }
    function p(g) {
      if (g === null) return !0;
      const y = o[g];
      let v = -1;
      if (y)
        for (; ++v < y.length; ) {
          const b = y[v];
          if (!b.previous || b.previous.call(l, l.previous)) return !0;
        }
      return !1;
    }
  }
}
function Ov(e) {
  return n;
  function n(i, l) {
    let o = -1,
      u;
    for (; ++o <= i.length; )
      u === void 0
        ? i[o] && i[o][1].type === 'data' && ((u = o), o++)
        : (!i[o] || i[o][1].type !== 'data') &&
          (o !== u + 2 &&
            ((i[u][1].end = i[o - 1][1].end), i.splice(u + 2, o - u - 2), (o = u + 2)),
          (u = void 0));
    return e ? e(i, l) : i;
  }
}
function OO(e, n) {
  let i = 0;
  for (; ++i <= e.length; )
    if ((i === e.length || e[i][1].type === 'lineEnding') && e[i - 1][1].type === 'data') {
      const l = e[i - 1][1],
        o = n.sliceStream(l);
      let u = o.length,
        c = -1,
        d = 0,
        h;
      for (; u--; ) {
        const p = o[u];
        if (typeof p == 'string') {
          for (c = p.length; p.charCodeAt(c - 1) === 32; ) (d++, c--);
          if (c) break;
          c = -1;
        } else if (p === -2) ((h = !0), d++);
        else if (p !== -1) {
          u++;
          break;
        }
      }
      if ((n._contentTypeTextTrailing && i === e.length && (d = 0), d)) {
        const p = {
          type: i === e.length || h || d < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: u ? c : l.start._bufferIndex + c,
            _index: l.start._index + u,
            line: l.end.line,
            column: l.end.column - d,
            offset: l.end.offset - d,
          },
          end: { ...l.end },
        };
        ((l.end = { ...p.start }),
          l.start.offset === l.end.offset
            ? Object.assign(l, p)
            : (e.splice(i, 0, ['enter', p, n], ['exit', p, n]), (i += 2)));
      }
      i++;
    }
  return e;
}
const zO = {
    42: gn,
    43: gn,
    45: gn,
    48: gn,
    49: gn,
    50: gn,
    51: gn,
    52: gn,
    53: gn,
    54: gn,
    55: gn,
    56: gn,
    57: gn,
    62: Cv,
  },
  DO = { 91: L4 },
  NO = { [-2]: Ld, [-1]: Ld, 32: Ld },
  _O = { 35: H4, 42: ou, 45: [U0, ou], 60: Y4, 61: U0, 95: ou, 96: L0, 126: L0 },
  BO = { 38: wv, 92: kv },
  LO = {
    [-5]: $d,
    [-4]: $d,
    [-3]: $d,
    33: cO,
    38: wv,
    42: pp,
    60: [d4, J4],
    91: dO,
    92: [P4, kv],
    93: nh,
    95: pp,
    96: E4,
  },
  $O = { null: [pp, AO] },
  UO = { null: [42, 95] },
  jO = { null: [] },
  PO = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: UO,
        contentInitial: DO,
        disable: jO,
        document: zO,
        flow: _O,
        flowInitial: NO,
        insideSpan: $O,
        string: BO,
        text: LO,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function IO(e, n, i) {
  let l = {
    _bufferIndex: -1,
    _index: 0,
    line: (i && i.line) || 1,
    column: (i && i.column) || 1,
    offset: (i && i.offset) || 0,
  };
  const o = {},
    u = [];
  let c = [],
    d = [];
  const h = {
      attempt: H(z),
      check: H(R),
      consume: $,
      enter: M,
      exit: N,
      interrupt: H(R, { interrupt: !0 }),
    },
    p = {
      code: null,
      containerState: {},
      defineSkip: E,
      events: [],
      now: C,
      parser: e,
      previous: null,
      sliceSerialize: v,
      sliceStream: b,
      write: y,
    };
  let g = n.tokenize.call(p, h);
  return (n.resolveAll && u.push(n), p);
  function y(q) {
    return (
      (c = Fn(c, q)),
      O(),
      c[c.length - 1] !== null ? [] : (Y(n, 0), (p.events = Yu(u, p.events, p)), p.events)
    );
  }
  function v(q, k) {
    return qO(b(q), k);
  }
  function b(q) {
    return HO(c, q);
  }
  function C() {
    const { _bufferIndex: q, _index: k, line: X, column: F, offset: I } = l;
    return { _bufferIndex: q, _index: k, line: X, column: F, offset: I };
  }
  function E(q) {
    ((o[q.line] = q.column), B());
  }
  function O() {
    let q;
    for (; l._index < c.length; ) {
      const k = c[l._index];
      if (typeof k == 'string')
        for (
          q = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0);
          l._index === q && l._bufferIndex < k.length;

        )
          T(k.charCodeAt(l._bufferIndex));
      else T(k);
    }
  }
  function T(q) {
    g = g(q);
  }
  function $(q) {
    (we(q)
      ? (l.line++, (l.column = 1), (l.offset += q === -3 ? 2 : 1), B())
      : q !== -1 && (l.column++, l.offset++),
      l._bufferIndex < 0
        ? l._index++
        : (l._bufferIndex++,
          l._bufferIndex === c[l._index].length && ((l._bufferIndex = -1), l._index++)),
      (p.previous = q));
  }
  function M(q, k) {
    const X = k || {};
    return ((X.type = q), (X.start = C()), p.events.push(['enter', X, p]), d.push(X), X);
  }
  function N(q) {
    const k = d.pop();
    return ((k.end = C()), p.events.push(['exit', k, p]), k);
  }
  function z(q, k) {
    Y(q, k.from);
  }
  function R(q, k) {
    k.restore();
  }
  function H(q, k) {
    return X;
    function X(F, I, _) {
      let K, ue, re, S;
      return Array.isArray(F) ? oe(F) : 'tokenize' in F ? oe([F]) : J(F);
      function J(te) {
        return ye;
        function ye(ve) {
          const Re = ve !== null && te[ve],
            Ce = ve !== null && te.null,
            Oe = [
              ...(Array.isArray(Re) ? Re : Re ? [Re] : []),
              ...(Array.isArray(Ce) ? Ce : Ce ? [Ce] : []),
            ];
          return oe(Oe)(ve);
        }
      }
      function oe(te) {
        return ((K = te), (ue = 0), te.length === 0 ? _ : A(te[ue]));
      }
      function A(te) {
        return ye;
        function ye(ve) {
          return (
            (S = Q()),
            (re = te),
            te.partial || (p.currentConstruct = te),
            te.name && p.parser.constructs.disable.null.includes(te.name)
              ? he()
              : te.tokenize.call(k ? Object.assign(Object.create(p), k) : p, h, ce, he)(ve)
          );
        }
      }
      function ce(te) {
        return (q(re, S), I);
      }
      function he(te) {
        return (S.restore(), ++ue < K.length ? A(K[ue]) : _);
      }
    }
  }
  function Y(q, k) {
    (q.resolveAll && !u.includes(q) && u.push(q),
      q.resolve && Dn(p.events, k, p.events.length - k, q.resolve(p.events.slice(k), p)),
      q.resolveTo && (p.events = q.resolveTo(p.events, p)));
  }
  function Q() {
    const q = C(),
      k = p.previous,
      X = p.currentConstruct,
      F = p.events.length,
      I = Array.from(d);
    return { from: F, restore: _ };
    function _() {
      ((l = q), (p.previous = k), (p.currentConstruct = X), (p.events.length = F), (d = I), B());
    }
  }
  function B() {
    l.line in o && l.column < 2 && ((l.column = o[l.line]), (l.offset += o[l.line] - 1));
  }
}
function HO(e, n) {
  const i = n.start._index,
    l = n.start._bufferIndex,
    o = n.end._index,
    u = n.end._bufferIndex;
  let c;
  if (i === o) c = [e[i].slice(l, u)];
  else {
    if (((c = e.slice(i, o)), l > -1)) {
      const d = c[0];
      typeof d == 'string' ? (c[0] = d.slice(l)) : c.shift();
    }
    u > 0 && c.push(e[o].slice(0, u));
  }
  return c;
}
function qO(e, n) {
  let i = -1;
  const l = [];
  let o;
  for (; ++i < e.length; ) {
    const u = e[i];
    let c;
    if (typeof u == 'string') c = u;
    else
      switch (u) {
        case -5: {
          c = '\r';
          break;
        }
        case -4: {
          c = `
`;
          break;
        }
        case -3: {
          c = `\r
`;
          break;
        }
        case -2: {
          c = n ? ' ' : '	';
          break;
        }
        case -1: {
          if (!n && o) continue;
          c = ' ';
          break;
        }
        default:
          c = String.fromCharCode(u);
      }
    ((o = u === -2), l.push(c));
  }
  return l.join('');
}
function FO(e) {
  const l = {
    constructs: xv([PO, ...((e || {}).extensions || [])]),
    content: o(l4),
    defined: [],
    document: o(o4),
    flow: o(EO),
    lazy: {},
    string: o(RO),
    text: o(MO),
  };
  return l;
  function o(u) {
    return c;
    function c(d) {
      return IO(l, u, d);
    }
  }
}
function VO(e) {
  for (; !Ev(e); );
  return e;
}
const j0 = /[\0\t\n\r]/g;
function YO() {
  let e = 1,
    n = '',
    i = !0,
    l;
  return o;
  function o(u, c, d) {
    const h = [];
    let p, g, y, v, b;
    for (
      u = n + (typeof u == 'string' ? u.toString() : new TextDecoder(c || void 0).decode(u)),
        y = 0,
        n = '',
        i && (u.charCodeAt(0) === 65279 && y++, (i = void 0));
      y < u.length;

    ) {
      if (
        ((j0.lastIndex = y),
        (p = j0.exec(u)),
        (v = p && p.index !== void 0 ? p.index : u.length),
        (b = u.charCodeAt(v)),
        !p)
      ) {
        n = u.slice(y);
        break;
      }
      if (b === 10 && y === v && l) (h.push(-3), (l = void 0));
      else
        switch (
          (l && (h.push(-5), (l = void 0)), y < v && (h.push(u.slice(y, v)), (e += v - y)), b)
        ) {
          case 0: {
            (h.push(65533), e++);
            break;
          }
          case 9: {
            for (g = Math.ceil(e / 4) * 4, h.push(-2); e++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            (h.push(-4), (e = 1));
            break;
          }
          default:
            ((l = !0), (e = 1));
        }
      y = v + 1;
    }
    return (d && (l && h.push(-5), n && h.push(n), h.push(null)), h);
  }
}
const GO = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function XO(e) {
  return e.replace(GO, KO);
}
function KO(e, n, i) {
  if (n) return n;
  if (i.charCodeAt(0) === 35) {
    const o = i.charCodeAt(1),
      u = o === 120 || o === 88;
    return Sv(i.slice(u ? 2 : 1), u ? 16 : 10);
  }
  return th(i) || e;
}
const zv = {}.hasOwnProperty;
function QO(e, n, i) {
  return (
    typeof n != 'string' && ((i = n), (n = void 0)),
    ZO(i)(
      VO(
        FO(i)
          .document()
          .write(YO()(e, n, !0)),
      ),
    )
  );
}
function ZO(e) {
  const n = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: u(ut),
      autolinkProtocol: Q,
      autolinkEmail: Q,
      atxHeading: u(Ye),
      blockQuote: u(Ce),
      characterEscape: Q,
      characterReference: Q,
      codeFenced: u(Oe),
      codeFencedFenceInfo: c,
      codeFencedFenceMeta: c,
      codeIndented: u(Oe, c),
      codeText: u(je, c),
      codeTextData: Q,
      data: Q,
      codeFlowValue: Q,
      definition: u(Ct),
      definitionDestinationString: c,
      definitionLabelString: c,
      definitionTitleString: c,
      emphasis: u(De),
      hardBreakEscape: u(_t),
      hardBreakTrailing: u(_t),
      htmlFlow: u(Ge, c),
      htmlFlowData: Q,
      htmlText: u(Ge, c),
      htmlTextData: Q,
      image: u(bt),
      label: c,
      link: u(ut),
      listItem: u(nt),
      listItemValue: v,
      listOrdered: u(vt, y),
      listUnordered: u(vt),
      paragraph: u(Se),
      reference: A,
      referenceString: c,
      resourceDestinationString: c,
      resourceTitleString: c,
      setextHeading: u(Ye),
      strong: u(sn),
      thematicBreak: u(xn),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: z,
      autolink: h(),
      autolinkEmail: Re,
      autolinkProtocol: ve,
      blockQuote: h(),
      characterEscapeValue: B,
      characterReferenceMarkerHexadecimal: he,
      characterReferenceMarkerNumeric: he,
      characterReferenceValue: te,
      characterReference: ye,
      codeFenced: h(O),
      codeFencedFence: E,
      codeFencedFenceInfo: b,
      codeFencedFenceMeta: C,
      codeFlowValue: B,
      codeIndented: h(T),
      codeText: h(I),
      codeTextData: B,
      data: B,
      definition: h(),
      definitionDestinationString: N,
      definitionLabelString: $,
      definitionTitleString: M,
      emphasis: h(),
      hardBreakEscape: h(k),
      hardBreakTrailing: h(k),
      htmlFlow: h(X),
      htmlFlowData: B,
      htmlText: h(F),
      htmlTextData: B,
      image: h(K),
      label: re,
      labelText: ue,
      lineEnding: q,
      link: h(_),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: ce,
      resourceDestinationString: S,
      resourceTitleString: J,
      resource: oe,
      setextHeading: h(Y),
      setextHeadingLineSequence: H,
      setextHeadingText: R,
      strong: h(),
      thematicBreak: h(),
    },
  };
  Dv(n, (e || {}).mdastExtensions || []);
  const i = {};
  return l;
  function l(ee) {
    let le = { type: 'root', children: [] };
    const pe = {
        stack: [le],
        tokenStack: [],
        config: n,
        enter: d,
        exit: p,
        buffer: c,
        resume: g,
        data: i,
      },
      me = [];
    let Ne = -1;
    for (; ++Ne < ee.length; )
      if (ee[Ne][1].type === 'listOrdered' || ee[Ne][1].type === 'listUnordered')
        if (ee[Ne][0] === 'enter') me.push(Ne);
        else {
          const Le = me.pop();
          Ne = o(ee, Le, Ne);
        }
    for (Ne = -1; ++Ne < ee.length; ) {
      const Le = n[ee[Ne][0]];
      zv.call(Le, ee[Ne][1].type) &&
        Le[ee[Ne][1].type].call(
          Object.assign({ sliceSerialize: ee[Ne][2].sliceSerialize }, pe),
          ee[Ne][1],
        );
    }
    if (pe.tokenStack.length > 0) {
      const Le = pe.tokenStack[pe.tokenStack.length - 1];
      (Le[1] || P0).call(pe, void 0, Le[0]);
    }
    for (
      le.position = {
        start: si(ee.length > 0 ? ee[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: si(ee.length > 0 ? ee[ee.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        Ne = -1;
      ++Ne < n.transforms.length;

    )
      le = n.transforms[Ne](le) || le;
    return le;
  }
  function o(ee, le, pe) {
    let me = le - 1,
      Ne = -1,
      Le = !1,
      Jt,
      jt,
      Sn,
      xe;
    for (; ++me <= pe; ) {
      const ze = ee[me];
      switch (ze[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (ze[0] === 'enter' ? Ne++ : Ne--, (xe = void 0));
          break;
        }
        case 'lineEndingBlank': {
          ze[0] === 'enter' && (Jt && !xe && !Ne && !Sn && (Sn = me), (xe = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          xe = void 0;
      }
      if (
        (!Ne && ze[0] === 'enter' && ze[1].type === 'listItemPrefix') ||
        (Ne === -1 &&
          ze[0] === 'exit' &&
          (ze[1].type === 'listUnordered' || ze[1].type === 'listOrdered'))
      ) {
        if (Jt) {
          let rt = me;
          for (jt = void 0; rt--; ) {
            const qt = ee[rt];
            if (qt[1].type === 'lineEnding' || qt[1].type === 'lineEndingBlank') {
              if (qt[0] === 'exit') continue;
              (jt && ((ee[jt][1].type = 'lineEndingBlank'), (Le = !0)),
                (qt[1].type = 'lineEnding'),
                (jt = rt));
            } else if (
              !(
                qt[1].type === 'linePrefix' ||
                qt[1].type === 'blockQuotePrefix' ||
                qt[1].type === 'blockQuotePrefixWhitespace' ||
                qt[1].type === 'blockQuoteMarker' ||
                qt[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (Sn && (!jt || Sn < jt) && (Jt._spread = !0),
            (Jt.end = Object.assign({}, jt ? ee[jt][1].start : ze[1].end)),
            ee.splice(jt || me, 0, ['exit', Jt, ze[2]]),
            me++,
            pe++);
        }
        if (ze[1].type === 'listItemPrefix') {
          const rt = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, ze[1].start),
            end: void 0,
          };
          ((Jt = rt), ee.splice(me, 0, ['enter', rt, ze[2]]), me++, pe++, (Sn = void 0), (xe = !0));
        }
      }
    }
    return ((ee[le][1]._spread = Le), pe);
  }
  function u(ee, le) {
    return pe;
    function pe(me) {
      (d.call(this, ee(me), me), le && le.call(this, me));
    }
  }
  function c() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function d(ee, le, pe) {
    (this.stack[this.stack.length - 1].children.push(ee),
      this.stack.push(ee),
      this.tokenStack.push([le, pe || void 0]),
      (ee.position = { start: si(le.start), end: void 0 }));
  }
  function h(ee) {
    return le;
    function le(pe) {
      (ee && ee.call(this, pe), p.call(this, pe));
    }
  }
  function p(ee, le) {
    const pe = this.stack.pop(),
      me = this.tokenStack.pop();
    if (me)
      me[0].type !== ee.type &&
        (le ? le.call(this, ee, me[0]) : (me[1] || P0).call(this, ee, me[0]));
    else
      throw new Error(
        'Cannot close `' +
          ee.type +
          '` (' +
          uo({ start: ee.start, end: ee.end }) +
          '): it’s not open',
      );
    pe.position.end = si(ee.end);
  }
  function g() {
    return eh(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(ee) {
    if (this.data.expectingFirstListItemValue) {
      const le = this.stack[this.stack.length - 2];
      ((le.start = Number.parseInt(this.sliceSerialize(ee), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function b() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.lang = ee;
  }
  function C() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.meta = ee;
  }
  function E() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function O() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    ((le.value = ee.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function T() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.value = ee.replace(/(\r?\n|\r)$/g, '');
  }
  function $(ee) {
    const le = this.resume(),
      pe = this.stack[this.stack.length - 1];
    ((pe.label = le), (pe.identifier = Qn(this.sliceSerialize(ee)).toLowerCase()));
  }
  function M() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.title = ee;
  }
  function N() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.url = ee;
  }
  function z(ee) {
    const le = this.stack[this.stack.length - 1];
    if (!le.depth) {
      const pe = this.sliceSerialize(ee).length;
      le.depth = pe;
    }
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function H(ee) {
    const le = this.stack[this.stack.length - 1];
    le.depth = this.sliceSerialize(ee).codePointAt(0) === 61 ? 1 : 2;
  }
  function Y() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Q(ee) {
    const pe = this.stack[this.stack.length - 1].children;
    let me = pe[pe.length - 1];
    ((!me || me.type !== 'text') &&
      ((me = kt()), (me.position = { start: si(ee.start), end: void 0 }), pe.push(me)),
      this.stack.push(me));
  }
  function B(ee) {
    const le = this.stack.pop();
    ((le.value += this.sliceSerialize(ee)), (le.position.end = si(ee.end)));
  }
  function q(ee) {
    const le = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const pe = le.children[le.children.length - 1];
      ((pe.position.end = si(ee.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      n.canContainEols.includes(le.type) &&
      (Q.call(this, ee), B.call(this, ee));
  }
  function k() {
    this.data.atHardBreak = !0;
  }
  function X() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.value = ee;
  }
  function F() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.value = ee;
  }
  function I() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.value = ee;
  }
  function _() {
    const ee = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const le = this.data.referenceType || 'shortcut';
      ((ee.type += 'Reference'), (ee.referenceType = le), delete ee.url, delete ee.title);
    } else (delete ee.identifier, delete ee.label);
    this.data.referenceType = void 0;
  }
  function K() {
    const ee = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const le = this.data.referenceType || 'shortcut';
      ((ee.type += 'Reference'), (ee.referenceType = le), delete ee.url, delete ee.title);
    } else (delete ee.identifier, delete ee.label);
    this.data.referenceType = void 0;
  }
  function ue(ee) {
    const le = this.sliceSerialize(ee),
      pe = this.stack[this.stack.length - 2];
    ((pe.label = XO(le)), (pe.identifier = Qn(le).toLowerCase()));
  }
  function re() {
    const ee = this.stack[this.stack.length - 1],
      le = this.resume(),
      pe = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), pe.type === 'link')) {
      const me = ee.children;
      pe.children = me;
    } else pe.alt = le;
  }
  function S() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.url = ee;
  }
  function J() {
    const ee = this.resume(),
      le = this.stack[this.stack.length - 1];
    le.title = ee;
  }
  function oe() {
    this.data.inReference = void 0;
  }
  function A() {
    this.data.referenceType = 'collapsed';
  }
  function ce(ee) {
    const le = this.resume(),
      pe = this.stack[this.stack.length - 1];
    ((pe.label = le),
      (pe.identifier = Qn(this.sliceSerialize(ee)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function he(ee) {
    this.data.characterReferenceType = ee.type;
  }
  function te(ee) {
    const le = this.sliceSerialize(ee),
      pe = this.data.characterReferenceType;
    let me;
    pe
      ? ((me = Sv(le, pe === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (me = th(le));
    const Ne = this.stack[this.stack.length - 1];
    Ne.value += me;
  }
  function ye(ee) {
    const le = this.stack.pop();
    le.position.end = si(ee.end);
  }
  function ve(ee) {
    B.call(this, ee);
    const le = this.stack[this.stack.length - 1];
    le.url = this.sliceSerialize(ee);
  }
  function Re(ee) {
    B.call(this, ee);
    const le = this.stack[this.stack.length - 1];
    le.url = 'mailto:' + this.sliceSerialize(ee);
  }
  function Ce() {
    return { type: 'blockquote', children: [] };
  }
  function Oe() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function je() {
    return { type: 'inlineCode', value: '' };
  }
  function Ct() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function De() {
    return { type: 'emphasis', children: [] };
  }
  function Ye() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function _t() {
    return { type: 'break' };
  }
  function Ge() {
    return { type: 'html', value: '' };
  }
  function bt() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function ut() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function vt(ee) {
    return {
      type: 'list',
      ordered: ee.type === 'listOrdered',
      start: null,
      spread: ee._spread,
      children: [],
    };
  }
  function nt(ee) {
    return { type: 'listItem', spread: ee._spread, checked: null, children: [] };
  }
  function Se() {
    return { type: 'paragraph', children: [] };
  }
  function sn() {
    return { type: 'strong', children: [] };
  }
  function kt() {
    return { type: 'text', value: '' };
  }
  function xn() {
    return { type: 'thematicBreak' };
  }
}
function si(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function Dv(e, n) {
  let i = -1;
  for (; ++i < n.length; ) {
    const l = n[i];
    Array.isArray(l) ? Dv(e, l) : WO(e, l);
  }
}
function WO(e, n) {
  let i;
  for (i in n)
    if (zv.call(n, i))
      switch (i) {
        case 'canContainEols': {
          const l = n[i];
          l && e[i].push(...l);
          break;
        }
        case 'transforms': {
          const l = n[i];
          l && e[i].push(...l);
          break;
        }
        case 'enter':
        case 'exit': {
          const l = n[i];
          l && Object.assign(e[i], l);
          break;
        }
      }
}
function P0(e, n) {
  throw e
    ? new Error(
        'Cannot close `' +
          e.type +
          '` (' +
          uo({ start: e.start, end: e.end }) +
          '): a different token (`' +
          n.type +
          '`, ' +
          uo({ start: n.start, end: n.end }) +
          ') is open',
      )
    : new Error(
        'Cannot close document, a token (`' +
          n.type +
          '`, ' +
          uo({ start: n.start, end: n.end }) +
          ') is still open',
      );
}
function JO(e) {
  const n = this;
  n.parser = i;
  function i(l) {
    return QO(l, {
      ...n.data('settings'),
      ...e,
      extensions: n.data('micromarkExtensions') || [],
      mdastExtensions: n.data('fromMarkdownExtensions') || [],
    });
  }
}
function vu(e, n) {
  const i = String(e);
  if (typeof n != 'string') throw new TypeError('Expected character');
  let l = 0,
    o = i.indexOf(n);
  for (; o !== -1; ) (l++, (o = i.indexOf(n, o + n.length)));
  return l;
}
function ez(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
const Gu = function (e) {
  if (e == null) return iz;
  if (typeof e == 'function') return Xu(e);
  if (typeof e == 'object') return Array.isArray(e) ? tz(e) : nz(e);
  if (typeof e == 'string') return rz(e);
  throw new Error('Expected function, string, or object as test');
};
function tz(e) {
  const n = [];
  let i = -1;
  for (; ++i < e.length; ) n[i] = Gu(e[i]);
  return Xu(l);
  function l(...o) {
    let u = -1;
    for (; ++u < n.length; ) if (n[u].apply(this, o)) return !0;
    return !1;
  }
}
function nz(e) {
  const n = e;
  return Xu(i);
  function i(l) {
    const o = l;
    let u;
    for (u in e) if (o[u] !== n[u]) return !1;
    return !0;
  }
}
function rz(e) {
  return Xu(n);
  function n(i) {
    return i && i.type === e;
  }
}
function Xu(e) {
  return n;
  function n(i, l, o) {
    return !!(lz(i) && e.call(this, i, typeof l == 'number' ? l : void 0, o || void 0));
  }
}
function iz() {
  return !0;
}
function lz(e) {
  return e !== null && typeof e == 'object' && 'type' in e;
}
const Nv = [],
  az = !0,
  hp = !1,
  oz = 'skip';
function _v(e, n, i, l) {
  let o;
  typeof n == 'function' && typeof i != 'function' ? ((l = i), (i = n)) : (o = n);
  const u = Gu(o),
    c = l ? -1 : 1;
  d(e, void 0, [])();
  function d(h, p, g) {
    const y = h && typeof h == 'object' ? h : {};
    if (typeof y.type == 'string') {
      const b =
        typeof y.tagName == 'string' ? y.tagName : typeof y.name == 'string' ? y.name : void 0;
      Object.defineProperty(v, 'name', {
        value: 'node (' + (h.type + (b ? '<' + b + '>' : '')) + ')',
      });
    }
    return v;
    function v() {
      let b = Nv,
        C,
        E,
        O;
      if ((!n || u(h, p, g[g.length - 1] || void 0)) && ((b = sz(i(h, g))), b[0] === hp)) return b;
      if ('children' in h && h.children) {
        const T = h;
        if (T.children && b[0] !== oz)
          for (
            E = (l ? T.children.length : -1) + c, O = g.concat(T);
            E > -1 && E < T.children.length;

          ) {
            const $ = T.children[E];
            if (((C = d($, E, O)()), C[0] === hp)) return C;
            E = typeof C[1] == 'number' ? C[1] : E + c;
          }
      }
      return b;
    }
  }
}
function sz(e) {
  return Array.isArray(e) ? e : typeof e == 'number' ? [az, e] : e == null ? Nv : [e];
}
function uz(e, n, i) {
  const o = Gu((i || {}).ignore || []),
    u = cz(n);
  let c = -1;
  for (; ++c < u.length; ) _v(e, 'text', d);
  function d(p, g) {
    let y = -1,
      v;
    for (; ++y < g.length; ) {
      const b = g[y],
        C = v ? v.children : void 0;
      if (o(b, C ? C.indexOf(b) : void 0, v)) return;
      v = b;
    }
    if (v) return h(p, g);
  }
  function h(p, g) {
    const y = g[g.length - 1],
      v = u[c][0],
      b = u[c][1];
    let C = 0;
    const O = y.children.indexOf(p);
    let T = !1,
      $ = [];
    v.lastIndex = 0;
    let M = v.exec(p.value);
    for (; M; ) {
      const N = M.index,
        z = { index: M.index, input: M.input, stack: [...g, p] };
      let R = b(...M, z);
      if (
        (typeof R == 'string' && (R = R.length > 0 ? { type: 'text', value: R } : void 0),
        R === !1
          ? (v.lastIndex = N + 1)
          : (C !== N && $.push({ type: 'text', value: p.value.slice(C, N) }),
            Array.isArray(R) ? $.push(...R) : R && $.push(R),
            (C = N + M[0].length),
            (T = !0)),
        !v.global)
      )
        break;
      M = v.exec(p.value);
    }
    return (
      T
        ? (C < p.value.length && $.push({ type: 'text', value: p.value.slice(C) }),
          y.children.splice(O, 1, ...$))
        : ($ = [p]),
      O + $.length
    );
  }
}
function cz(e) {
  const n = [];
  if (!Array.isArray(e)) throw new TypeError('Expected find and replace tuple or list of tuples');
  const i = !e[0] || Array.isArray(e[0]) ? e : [e];
  let l = -1;
  for (; ++l < i.length; ) {
    const o = i[l];
    n.push([fz(o[0]), dz(o[1])]);
  }
  return n;
}
function fz(e) {
  return typeof e == 'string' ? new RegExp(ez(e), 'g') : e;
}
function dz(e) {
  return typeof e == 'function'
    ? e
    : function () {
        return e;
      };
}
const Ud = 'phrasing',
  jd = ['autolink', 'link', 'image', 'label'];
function pz() {
  return {
    transforms: [xz],
    enter: {
      literalAutolink: mz,
      literalAutolinkEmail: Pd,
      literalAutolinkHttp: Pd,
      literalAutolinkWww: Pd,
    },
    exit: {
      literalAutolink: vz,
      literalAutolinkEmail: bz,
      literalAutolinkHttp: gz,
      literalAutolinkWww: yz,
    },
  };
}
function hz() {
  return {
    unsafe: [
      {
        character: '@',
        before: '[+\\-.\\w]',
        after: '[\\-.\\w]',
        inConstruct: Ud,
        notInConstruct: jd,
      },
      { character: '.', before: '[Ww]', after: '[\\-.\\w]', inConstruct: Ud, notInConstruct: jd },
      { character: ':', before: '[ps]', after: '\\/', inConstruct: Ud, notInConstruct: jd },
    ],
  };
}
function mz(e) {
  this.enter({ type: 'link', title: null, url: '', children: [] }, e);
}
function Pd(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function gz(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function yz(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  (n.type, (n.url = 'http://' + this.sliceSerialize(e)));
}
function bz(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function vz(e) {
  this.exit(e);
}
function xz(e) {
  uz(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Sz],
      [new RegExp('(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)', 'gu'), Cz],
    ],
    { ignore: ['link', 'linkReference'] },
  );
}
function Sz(e, n, i, l, o) {
  let u = '';
  if (!Bv(o) || (/^w/i.test(n) && ((i = n + i), (n = ''), (u = 'http://')), !kz(i))) return !1;
  const c = wz(i + l);
  if (!c[0]) return !1;
  const d = {
    type: 'link',
    title: null,
    url: u + n + c[0],
    children: [{ type: 'text', value: n + c[0] }],
  };
  return c[1] ? [d, { type: 'text', value: c[1] }] : d;
}
function Cz(e, n, i, l) {
  return !Bv(l, !0) || /[-\d_]$/.test(i)
    ? !1
    : {
        type: 'link',
        title: null,
        url: 'mailto:' + n + '@' + i,
        children: [{ type: 'text', value: n + '@' + i }],
      };
}
function kz(e) {
  const n = e.split('.');
  return !(
    n.length < 2 ||
    (n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1]))) ||
    (n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])))
  );
}
function wz(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n) return [e, void 0];
  e = e.slice(0, n.index);
  let i = n[0],
    l = i.indexOf(')');
  const o = vu(e, '(');
  let u = vu(e, ')');
  for (; l !== -1 && o > u; )
    ((e += i.slice(0, l + 1)), (i = i.slice(l + 1)), (l = i.indexOf(')')), u++);
  return [e, i];
}
function Bv(e, n) {
  const i = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ii(i) || Vu(i)) && (!n || i !== 47);
}
Lv.peek = Nz;
function Ez() {
  this.buffer();
}
function Tz(e) {
  this.enter({ type: 'footnoteReference', identifier: '', label: '' }, e);
}
function Az() {
  this.buffer();
}
function Rz(e) {
  this.enter({ type: 'footnoteDefinition', identifier: '', label: '', children: [] }, e);
}
function Mz(e) {
  const n = this.resume(),
    i = this.stack[this.stack.length - 1];
  (i.type, (i.identifier = Qn(this.sliceSerialize(e)).toLowerCase()), (i.label = n));
}
function Oz(e) {
  this.exit(e);
}
function zz(e) {
  const n = this.resume(),
    i = this.stack[this.stack.length - 1];
  (i.type, (i.identifier = Qn(this.sliceSerialize(e)).toLowerCase()), (i.label = n));
}
function Dz(e) {
  this.exit(e);
}
function Nz() {
  return '[';
}
function Lv(e, n, i, l) {
  const o = i.createTracker(l);
  let u = o.move('[^');
  const c = i.enter('footnoteReference'),
    d = i.enter('reference');
  return (
    (u += o.move(i.safe(i.associationId(e), { after: ']', before: u }))),
    d(),
    c(),
    (u += o.move(']')),
    u
  );
}
function _z() {
  return {
    enter: {
      gfmFootnoteCallString: Ez,
      gfmFootnoteCall: Tz,
      gfmFootnoteDefinitionLabelString: Az,
      gfmFootnoteDefinition: Rz,
    },
    exit: {
      gfmFootnoteCallString: Mz,
      gfmFootnoteCall: Oz,
      gfmFootnoteDefinitionLabelString: zz,
      gfmFootnoteDefinition: Dz,
    },
  };
}
function Bz(e) {
  let n = !1;
  return (
    e && e.firstLineBlank && (n = !0),
    {
      handlers: { footnoteDefinition: i, footnoteReference: Lv },
      unsafe: [{ character: '[', inConstruct: ['label', 'phrasing', 'reference'] }],
    }
  );
  function i(l, o, u, c) {
    const d = u.createTracker(c);
    let h = d.move('[^');
    const p = u.enter('footnoteDefinition'),
      g = u.enter('label');
    return (
      (h += d.move(u.safe(u.associationId(l), { before: h, after: ']' }))),
      g(),
      (h += d.move(']:')),
      l.children &&
        l.children.length > 0 &&
        (d.shift(4),
        (h += d.move(
          (n
            ? `
`
            : ' ') + u.indentLines(u.containerFlow(l, d.current()), n ? $v : Lz),
        ))),
      p(),
      h
    );
  }
}
function Lz(e, n, i) {
  return n === 0 ? e : $v(e, n, i);
}
function $v(e, n, i) {
  return (i ? '' : '    ') + e;
}
const $z = [
  'autolink',
  'destinationLiteral',
  'destinationRaw',
  'reference',
  'titleQuote',
  'titleApostrophe',
];
Uv.peek = Hz;
function Uz() {
  return { canContainEols: ['delete'], enter: { strikethrough: Pz }, exit: { strikethrough: Iz } };
}
function jz() {
  return {
    unsafe: [{ character: '~', inConstruct: 'phrasing', notInConstruct: $z }],
    handlers: { delete: Uv },
  };
}
function Pz(e) {
  this.enter({ type: 'delete', children: [] }, e);
}
function Iz(e) {
  this.exit(e);
}
function Uv(e, n, i, l) {
  const o = i.createTracker(l),
    u = i.enter('strikethrough');
  let c = o.move('~~');
  return (
    (c += i.containerPhrasing(e, { ...o.current(), before: c, after: '~' })),
    (c += o.move('~~')),
    u(),
    c
  );
}
function Hz() {
  return '~';
}
function qz(e) {
  return e.length;
}
function Fz(e, n) {
  const i = n || {},
    l = (i.align || []).concat(),
    o = i.stringLength || qz,
    u = [],
    c = [],
    d = [],
    h = [];
  let p = 0,
    g = -1;
  for (; ++g < e.length; ) {
    const E = [],
      O = [];
    let T = -1;
    for (e[g].length > p && (p = e[g].length); ++T < e[g].length; ) {
      const $ = Vz(e[g][T]);
      if (i.alignDelimiters !== !1) {
        const M = o($);
        ((O[T] = M), (h[T] === void 0 || M > h[T]) && (h[T] = M));
      }
      E.push($);
    }
    ((c[g] = E), (d[g] = O));
  }
  let y = -1;
  if (typeof l == 'object' && 'length' in l) for (; ++y < p; ) u[y] = I0(l[y]);
  else {
    const E = I0(l);
    for (; ++y < p; ) u[y] = E;
  }
  y = -1;
  const v = [],
    b = [];
  for (; ++y < p; ) {
    const E = u[y];
    let O = '',
      T = '';
    E === 99 ? ((O = ':'), (T = ':')) : E === 108 ? (O = ':') : E === 114 && (T = ':');
    let $ = i.alignDelimiters === !1 ? 1 : Math.max(1, h[y] - O.length - T.length);
    const M = O + '-'.repeat($) + T;
    (i.alignDelimiters !== !1 &&
      (($ = O.length + $ + T.length), $ > h[y] && (h[y] = $), (b[y] = $)),
      (v[y] = M));
  }
  (c.splice(1, 0, v), d.splice(1, 0, b), (g = -1));
  const C = [];
  for (; ++g < c.length; ) {
    const E = c[g],
      O = d[g];
    y = -1;
    const T = [];
    for (; ++y < p; ) {
      const $ = E[y] || '';
      let M = '',
        N = '';
      if (i.alignDelimiters !== !1) {
        const z = h[y] - (O[y] || 0),
          R = u[y];
        R === 114
          ? (M = ' '.repeat(z))
          : R === 99
            ? z % 2
              ? ((M = ' '.repeat(z / 2 + 0.5)), (N = ' '.repeat(z / 2 - 0.5)))
              : ((M = ' '.repeat(z / 2)), (N = M))
            : (N = ' '.repeat(z));
      }
      (i.delimiterStart !== !1 && !y && T.push('|'),
        i.padding !== !1 &&
          !(i.alignDelimiters === !1 && $ === '') &&
          (i.delimiterStart !== !1 || y) &&
          T.push(' '),
        i.alignDelimiters !== !1 && T.push(M),
        T.push($),
        i.alignDelimiters !== !1 && T.push(N),
        i.padding !== !1 && T.push(' '),
        (i.delimiterEnd !== !1 || y !== p - 1) && T.push('|'));
    }
    C.push(i.delimiterEnd === !1 ? T.join('').replace(/ +$/, '') : T.join(''));
  }
  return C.join(`
`);
}
function Vz(e) {
  return e == null ? '' : String(e);
}
function I0(e) {
  const n = typeof e == 'string' ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
const H0 = {}.hasOwnProperty;
function Yz(e, n) {
  const i = n || {};
  function l(o, ...u) {
    let c = l.invalid;
    const d = l.handlers;
    if (o && H0.call(o, e)) {
      const h = String(o[e]);
      c = H0.call(d, h) ? d[h] : l.unknown;
    }
    if (c) return c.call(this, o, ...u);
  }
  return ((l.handlers = i.handlers || {}), (l.invalid = i.invalid), (l.unknown = i.unknown), l);
}
function Gz(e, n, i, l) {
  const o = i.enter('blockquote'),
    u = i.createTracker(l);
  (u.move('> '), u.shift(2));
  const c = i.indentLines(i.containerFlow(e, u.current()), Xz);
  return (o(), c);
}
function Xz(e, n, i) {
  return '>' + (i ? '' : ' ') + e;
}
function Kz(e, n) {
  return q0(e, n.inConstruct, !0) && !q0(e, n.notInConstruct, !1);
}
function q0(e, n, i) {
  if ((typeof n == 'string' && (n = [n]), !n || n.length === 0)) return i;
  let l = -1;
  for (; ++l < n.length; ) if (e.includes(n[l])) return !0;
  return !1;
}
function F0(e, n, i, l) {
  let o = -1;
  for (; ++o < i.unsafe.length; )
    if (
      i.unsafe[o].character ===
        `
` &&
      Kz(i.stack, i.unsafe[o])
    )
      return /[ \t]/.test(l.before) ? '' : ' ';
  return `\\
`;
}
function Qz(e, n) {
  const i = String(e);
  let l = i.indexOf(n),
    o = l,
    u = 0,
    c = 0;
  if (typeof n != 'string') throw new TypeError('Expected substring');
  for (; l !== -1; )
    (l === o ? ++u > c && (c = u) : (u = 1), (o = l + n.length), (l = i.indexOf(n, o)));
  return c;
}
function Zz(e, n) {
  return !!(
    n.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function Wz(e) {
  const n = e.options.fence || '`';
  if (n !== '`' && n !== '~')
    throw new Error(
      'Cannot serialize code with `' + n + '` for `options.fence`, expected `` ` `` or `~`',
    );
  return n;
}
function Jz(e, n, i, l) {
  const o = Wz(i),
    u = e.value || '',
    c = o === '`' ? 'GraveAccent' : 'Tilde';
  if (Zz(e, i)) {
    const y = i.enter('codeIndented'),
      v = i.indentLines(u, e5);
    return (y(), v);
  }
  const d = i.createTracker(l),
    h = o.repeat(Math.max(Qz(u, o) + 1, 3)),
    p = i.enter('codeFenced');
  let g = d.move(h);
  if (e.lang) {
    const y = i.enter(`codeFencedLang${c}`);
    ((g += d.move(i.safe(e.lang, { before: g, after: ' ', encode: ['`'], ...d.current() }))), y());
  }
  if (e.lang && e.meta) {
    const y = i.enter(`codeFencedMeta${c}`);
    ((g += d.move(' ')),
      (g += d.move(
        i.safe(e.meta, {
          before: g,
          after: `
`,
          encode: ['`'],
          ...d.current(),
        }),
      )),
      y());
  }
  return (
    (g += d.move(`
`)),
    u &&
      (g += d.move(
        u +
          `
`,
      )),
    (g += d.move(h)),
    p(),
    g
  );
}
function e5(e, n, i) {
  return (i ? '' : '    ') + e;
}
function rh(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      'Cannot serialize title with `' + n + '` for `options.quote`, expected `"`, or `\'`',
    );
  return n;
}
function t5(e, n, i, l) {
  const o = rh(i),
    u = o === '"' ? 'Quote' : 'Apostrophe',
    c = i.enter('definition');
  let d = i.enter('label');
  const h = i.createTracker(l);
  let p = h.move('[');
  return (
    (p += h.move(i.safe(i.associationId(e), { before: p, after: ']', ...h.current() }))),
    (p += h.move(']: ')),
    d(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((d = i.enter('destinationLiteral')),
        (p += h.move('<')),
        (p += h.move(i.safe(e.url, { before: p, after: '>', ...h.current() }))),
        (p += h.move('>')))
      : ((d = i.enter('destinationRaw')),
        (p += h.move(
          i.safe(e.url, {
            before: p,
            after: e.title
              ? ' '
              : `
`,
            ...h.current(),
          }),
        ))),
    d(),
    e.title &&
      ((d = i.enter(`title${u}`)),
      (p += h.move(' ' + o)),
      (p += h.move(i.safe(e.title, { before: p, after: o, ...h.current() }))),
      (p += h.move(o)),
      d()),
    c(),
    p
  );
}
function n5(e) {
  const n = e.options.emphasis || '*';
  if (n !== '*' && n !== '_')
    throw new Error(
      'Cannot serialize emphasis with `' + n + '` for `options.emphasis`, expected `*`, or `_`',
    );
  return n;
}
function bo(e) {
  return '&#x' + e.toString(16).toUpperCase() + ';';
}
function xu(e, n, i) {
  const l = Fl(e),
    o = Fl(n);
  return l === void 0
    ? o === void 0
      ? i === '_'
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : o === 1
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : l === 1
      ? o === void 0
        ? { inside: !1, outside: !1 }
        : o === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : o === void 0
        ? { inside: !1, outside: !1 }
        : o === 1
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
}
jv.peek = r5;
function jv(e, n, i, l) {
  const o = n5(i),
    u = i.enter('emphasis'),
    c = i.createTracker(l),
    d = c.move(o);
  let h = c.move(i.containerPhrasing(e, { after: o, before: d, ...c.current() }));
  const p = h.charCodeAt(0),
    g = xu(l.before.charCodeAt(l.before.length - 1), p, o);
  g.inside && (h = bo(p) + h.slice(1));
  const y = h.charCodeAt(h.length - 1),
    v = xu(l.after.charCodeAt(0), y, o);
  v.inside && (h = h.slice(0, -1) + bo(y));
  const b = c.move(o);
  return (
    u(),
    (i.attentionEncodeSurroundingInfo = { after: v.outside, before: g.outside }),
    d + h + b
  );
}
function r5(e, n, i) {
  return i.options.emphasis || '*';
}
function Pv(e, n, i, l) {
  let o, u, c;
  (typeof n == 'function' && typeof i != 'function'
    ? ((u = void 0), (c = n), (o = i))
    : ((u = n), (c = i), (o = l)),
    _v(e, u, d, o));
  function d(h, p) {
    const g = p[p.length - 1],
      y = g ? g.children.indexOf(h) : void 0;
    return c(h, y, g);
  }
}
function i5(e, n) {
  let i = !1;
  return (
    Pv(e, function (l) {
      if (('value' in l && /\r?\n|\r/.test(l.value)) || l.type === 'break') return ((i = !0), hp);
    }),
    !!((!e.depth || e.depth < 3) && eh(e) && (n.options.setext || i))
  );
}
function l5(e, n, i, l) {
  const o = Math.max(Math.min(6, e.depth || 1), 1),
    u = i.createTracker(l);
  if (i5(e, i)) {
    const g = i.enter('headingSetext'),
      y = i.enter('phrasing'),
      v = i.containerPhrasing(e, {
        ...u.current(),
        before: `
`,
        after: `
`,
      });
    return (
      y(),
      g(),
      v +
        `
` +
        (o === 1 ? '=' : '-').repeat(
          v.length -
            (Math.max(
              v.lastIndexOf('\r'),
              v.lastIndexOf(`
`),
            ) +
              1),
        )
    );
  }
  const c = '#'.repeat(o),
    d = i.enter('headingAtx'),
    h = i.enter('phrasing');
  u.move(c + ' ');
  let p = i.containerPhrasing(e, {
    before: '# ',
    after: `
`,
    ...u.current(),
  });
  return (
    /^[\t ]/.test(p) && (p = bo(p.charCodeAt(0)) + p.slice(1)),
    (p = p ? c + ' ' + p : c),
    i.options.closeAtx && (p += ' ' + c),
    h(),
    d(),
    p
  );
}
Iv.peek = a5;
function Iv(e) {
  return e.value || '';
}
function a5() {
  return '<';
}
Hv.peek = o5;
function Hv(e, n, i, l) {
  const o = rh(i),
    u = o === '"' ? 'Quote' : 'Apostrophe',
    c = i.enter('image');
  let d = i.enter('label');
  const h = i.createTracker(l);
  let p = h.move('![');
  return (
    (p += h.move(i.safe(e.alt, { before: p, after: ']', ...h.current() }))),
    (p += h.move('](')),
    d(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((d = i.enter('destinationLiteral')),
        (p += h.move('<')),
        (p += h.move(i.safe(e.url, { before: p, after: '>', ...h.current() }))),
        (p += h.move('>')))
      : ((d = i.enter('destinationRaw')),
        (p += h.move(i.safe(e.url, { before: p, after: e.title ? ' ' : ')', ...h.current() })))),
    d(),
    e.title &&
      ((d = i.enter(`title${u}`)),
      (p += h.move(' ' + o)),
      (p += h.move(i.safe(e.title, { before: p, after: o, ...h.current() }))),
      (p += h.move(o)),
      d()),
    (p += h.move(')')),
    c(),
    p
  );
}
function o5() {
  return '!';
}
qv.peek = s5;
function qv(e, n, i, l) {
  const o = e.referenceType,
    u = i.enter('imageReference');
  let c = i.enter('label');
  const d = i.createTracker(l);
  let h = d.move('![');
  const p = i.safe(e.alt, { before: h, after: ']', ...d.current() });
  ((h += d.move(p + '][')), c());
  const g = i.stack;
  ((i.stack = []), (c = i.enter('reference')));
  const y = i.safe(i.associationId(e), { before: h, after: ']', ...d.current() });
  return (
    c(),
    (i.stack = g),
    u(),
    o === 'full' || !p || p !== y
      ? (h += d.move(y + ']'))
      : o === 'shortcut'
        ? (h = h.slice(0, -1))
        : (h += d.move(']')),
    h
  );
}
function s5() {
  return '!';
}
Fv.peek = u5;
function Fv(e, n, i) {
  let l = e.value || '',
    o = '`',
    u = -1;
  for (; new RegExp('(^|[^`])' + o + '([^`]|$)').test(l); ) o += '`';
  for (
    /[^ \r\n]/.test(l) &&
    ((/^[ \r\n]/.test(l) && /[ \r\n]$/.test(l)) || /^`|`$/.test(l)) &&
    (l = ' ' + l + ' ');
    ++u < i.unsafe.length;

  ) {
    const c = i.unsafe[u],
      d = i.compilePattern(c);
    let h;
    if (c.atBreak)
      for (; (h = d.exec(l)); ) {
        let p = h.index;
        (l.charCodeAt(p) === 10 && l.charCodeAt(p - 1) === 13 && p--,
          (l = l.slice(0, p) + ' ' + l.slice(h.index + 1)));
      }
  }
  return o + l + o;
}
function u5() {
  return '`';
}
function Vv(e, n) {
  const i = eh(e);
  return !!(
    !n.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === 'text' &&
    (i === e.url || 'mailto:' + i === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
Yv.peek = c5;
function Yv(e, n, i, l) {
  const o = rh(i),
    u = o === '"' ? 'Quote' : 'Apostrophe',
    c = i.createTracker(l);
  let d, h;
  if (Vv(e, i)) {
    const g = i.stack;
    ((i.stack = []), (d = i.enter('autolink')));
    let y = c.move('<');
    return (
      (y += c.move(i.containerPhrasing(e, { before: y, after: '>', ...c.current() }))),
      (y += c.move('>')),
      d(),
      (i.stack = g),
      y
    );
  }
  ((d = i.enter('link')), (h = i.enter('label')));
  let p = c.move('[');
  return (
    (p += c.move(i.containerPhrasing(e, { before: p, after: '](', ...c.current() }))),
    (p += c.move('](')),
    h(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((h = i.enter('destinationLiteral')),
        (p += c.move('<')),
        (p += c.move(i.safe(e.url, { before: p, after: '>', ...c.current() }))),
        (p += c.move('>')))
      : ((h = i.enter('destinationRaw')),
        (p += c.move(i.safe(e.url, { before: p, after: e.title ? ' ' : ')', ...c.current() })))),
    h(),
    e.title &&
      ((h = i.enter(`title${u}`)),
      (p += c.move(' ' + o)),
      (p += c.move(i.safe(e.title, { before: p, after: o, ...c.current() }))),
      (p += c.move(o)),
      h()),
    (p += c.move(')')),
    d(),
    p
  );
}
function c5(e, n, i) {
  return Vv(e, i) ? '<' : '[';
}
Gv.peek = f5;
function Gv(e, n, i, l) {
  const o = e.referenceType,
    u = i.enter('linkReference');
  let c = i.enter('label');
  const d = i.createTracker(l);
  let h = d.move('[');
  const p = i.containerPhrasing(e, { before: h, after: ']', ...d.current() });
  ((h += d.move(p + '][')), c());
  const g = i.stack;
  ((i.stack = []), (c = i.enter('reference')));
  const y = i.safe(i.associationId(e), { before: h, after: ']', ...d.current() });
  return (
    c(),
    (i.stack = g),
    u(),
    o === 'full' || !p || p !== y
      ? (h += d.move(y + ']'))
      : o === 'shortcut'
        ? (h = h.slice(0, -1))
        : (h += d.move(']')),
    h
  );
}
function f5() {
  return '[';
}
function ih(e) {
  const n = e.options.bullet || '*';
  if (n !== '*' && n !== '+' && n !== '-')
    throw new Error(
      'Cannot serialize items with `' + n + '` for `options.bullet`, expected `*`, `+`, or `-`',
    );
  return n;
}
function d5(e) {
  const n = ih(e),
    i = e.options.bulletOther;
  if (!i) return n === '*' ? '-' : '*';
  if (i !== '*' && i !== '+' && i !== '-')
    throw new Error(
      'Cannot serialize items with `' +
        i +
        '` for `options.bulletOther`, expected `*`, `+`, or `-`',
    );
  if (i === n)
    throw new Error(
      'Expected `bullet` (`' + n + '`) and `bulletOther` (`' + i + '`) to be different',
    );
  return i;
}
function p5(e) {
  const n = e.options.bulletOrdered || '.';
  if (n !== '.' && n !== ')')
    throw new Error(
      'Cannot serialize items with `' + n + '` for `options.bulletOrdered`, expected `.` or `)`',
    );
  return n;
}
function Xv(e) {
  const n = e.options.rule || '*';
  if (n !== '*' && n !== '-' && n !== '_')
    throw new Error(
      'Cannot serialize rules with `' + n + '` for `options.rule`, expected `*`, `-`, or `_`',
    );
  return n;
}
function h5(e, n, i, l) {
  const o = i.enter('list'),
    u = i.bulletCurrent;
  let c = e.ordered ? p5(i) : ih(i);
  const d = e.ordered ? (c === '.' ? ')' : '.') : d5(i);
  let h = n && i.bulletLastUsed ? c === i.bulletLastUsed : !1;
  if (!e.ordered) {
    const g = e.children ? e.children[0] : void 0;
    if (
      ((c === '*' || c === '-') &&
        g &&
        (!g.children || !g.children[0]) &&
        i.stack[i.stack.length - 1] === 'list' &&
        i.stack[i.stack.length - 2] === 'listItem' &&
        i.stack[i.stack.length - 3] === 'list' &&
        i.stack[i.stack.length - 4] === 'listItem' &&
        i.indexStack[i.indexStack.length - 1] === 0 &&
        i.indexStack[i.indexStack.length - 2] === 0 &&
        i.indexStack[i.indexStack.length - 3] === 0 &&
        (h = !0),
      Xv(i) === c && g)
    ) {
      let y = -1;
      for (; ++y < e.children.length; ) {
        const v = e.children[y];
        if (
          v &&
          v.type === 'listItem' &&
          v.children &&
          v.children[0] &&
          v.children[0].type === 'thematicBreak'
        ) {
          h = !0;
          break;
        }
      }
    }
  }
  (h && (c = d), (i.bulletCurrent = c));
  const p = i.containerFlow(e, l);
  return ((i.bulletLastUsed = c), (i.bulletCurrent = u), o(), p);
}
function m5(e) {
  const n = e.options.listItemIndent || 'one';
  if (n !== 'tab' && n !== 'one' && n !== 'mixed')
    throw new Error(
      'Cannot serialize items with `' +
        n +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`',
    );
  return n;
}
function g5(e, n, i, l) {
  const o = m5(i);
  let u = i.bulletCurrent || ih(i);
  n &&
    n.type === 'list' &&
    n.ordered &&
    (u =
      (typeof n.start == 'number' && n.start > -1 ? n.start : 1) +
      (i.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) +
      u);
  let c = u.length + 1;
  (o === 'tab' || (o === 'mixed' && ((n && n.type === 'list' && n.spread) || e.spread))) &&
    (c = Math.ceil(c / 4) * 4);
  const d = i.createTracker(l);
  (d.move(u + ' '.repeat(c - u.length)), d.shift(c));
  const h = i.enter('listItem'),
    p = i.indentLines(i.containerFlow(e, d.current()), g);
  return (h(), p);
  function g(y, v, b) {
    return v ? (b ? '' : ' '.repeat(c)) + y : (b ? u : u + ' '.repeat(c - u.length)) + y;
  }
}
function y5(e, n, i, l) {
  const o = i.enter('paragraph'),
    u = i.enter('phrasing'),
    c = i.containerPhrasing(e, l);
  return (u(), o(), c);
}
const b5 = Gu([
  'break',
  'delete',
  'emphasis',
  'footnote',
  'footnoteReference',
  'image',
  'imageReference',
  'inlineCode',
  'inlineMath',
  'link',
  'linkReference',
  'mdxJsxTextElement',
  'mdxTextExpression',
  'strong',
  'text',
  'textDirective',
]);
function v5(e, n, i, l) {
  return (
    e.children.some(function (c) {
      return b5(c);
    })
      ? i.containerPhrasing
      : i.containerFlow
  ).call(i, e, l);
}
function x5(e) {
  const n = e.options.strong || '*';
  if (n !== '*' && n !== '_')
    throw new Error(
      'Cannot serialize strong with `' + n + '` for `options.strong`, expected `*`, or `_`',
    );
  return n;
}
Kv.peek = S5;
function Kv(e, n, i, l) {
  const o = x5(i),
    u = i.enter('strong'),
    c = i.createTracker(l),
    d = c.move(o + o);
  let h = c.move(i.containerPhrasing(e, { after: o, before: d, ...c.current() }));
  const p = h.charCodeAt(0),
    g = xu(l.before.charCodeAt(l.before.length - 1), p, o);
  g.inside && (h = bo(p) + h.slice(1));
  const y = h.charCodeAt(h.length - 1),
    v = xu(l.after.charCodeAt(0), y, o);
  v.inside && (h = h.slice(0, -1) + bo(y));
  const b = c.move(o + o);
  return (
    u(),
    (i.attentionEncodeSurroundingInfo = { after: v.outside, before: g.outside }),
    d + h + b
  );
}
function S5(e, n, i) {
  return i.options.strong || '*';
}
function C5(e, n, i, l) {
  return i.safe(e.value, l);
}
function k5(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      'Cannot serialize rules with repetition `' +
        n +
        '` for `options.ruleRepetition`, expected `3` or more',
    );
  return n;
}
function w5(e, n, i) {
  const l = (Xv(i) + (i.options.ruleSpaces ? ' ' : '')).repeat(k5(i));
  return i.options.ruleSpaces ? l.slice(0, -1) : l;
}
const Qv = {
  blockquote: Gz,
  break: F0,
  code: Jz,
  definition: t5,
  emphasis: jv,
  hardBreak: F0,
  heading: l5,
  html: Iv,
  image: Hv,
  imageReference: qv,
  inlineCode: Fv,
  link: Yv,
  linkReference: Gv,
  list: h5,
  listItem: g5,
  paragraph: y5,
  root: v5,
  strong: Kv,
  text: C5,
  thematicBreak: w5,
};
function E5() {
  return {
    enter: { table: T5, tableData: V0, tableHeader: V0, tableRow: R5 },
    exit: { codeText: M5, table: A5, tableData: Id, tableHeader: Id, tableRow: Id },
  };
}
function T5(e) {
  const n = e._align;
  (this.enter(
    {
      type: 'table',
      align: n.map(function (i) {
        return i === 'none' ? null : i;
      }),
      children: [],
    },
    e,
  ),
    (this.data.inTable = !0));
}
function A5(e) {
  (this.exit(e), (this.data.inTable = void 0));
}
function R5(e) {
  this.enter({ type: 'tableRow', children: [] }, e);
}
function Id(e) {
  this.exit(e);
}
function V0(e) {
  this.enter({ type: 'tableCell', children: [] }, e);
}
function M5(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, O5));
  const i = this.stack[this.stack.length - 1];
  (i.type, (i.value = n), this.exit(e));
}
function O5(e, n) {
  return n === '|' ? n : e;
}
function z5(e) {
  const n = e || {},
    i = n.tableCellPadding,
    l = n.tablePipeAlign,
    o = n.stringLength,
    u = i ? ' ' : '|';
  return {
    unsafe: [
      { character: '\r', inConstruct: 'tableCell' },
      {
        character: `
`,
        inConstruct: 'tableCell',
      },
      { atBreak: !0, character: '|', after: '[	 :-]' },
      { character: '|', inConstruct: 'tableCell' },
      { atBreak: !0, character: ':', after: '-' },
      { atBreak: !0, character: '-', after: '[:|-]' },
    ],
    handlers: { inlineCode: v, table: c, tableCell: h, tableRow: d },
  };
  function c(b, C, E, O) {
    return p(g(b, E, O), b.align);
  }
  function d(b, C, E, O) {
    const T = y(b, E, O),
      $ = p([T]);
    return $.slice(
      0,
      $.indexOf(`
`),
    );
  }
  function h(b, C, E, O) {
    const T = E.enter('tableCell'),
      $ = E.enter('phrasing'),
      M = E.containerPhrasing(b, { ...O, before: u, after: u });
    return ($(), T(), M);
  }
  function p(b, C) {
    return Fz(b, { align: C, alignDelimiters: l, padding: i, stringLength: o });
  }
  function g(b, C, E) {
    const O = b.children;
    let T = -1;
    const $ = [],
      M = C.enter('table');
    for (; ++T < O.length; ) $[T] = y(O[T], C, E);
    return (M(), $);
  }
  function y(b, C, E) {
    const O = b.children;
    let T = -1;
    const $ = [],
      M = C.enter('tableRow');
    for (; ++T < O.length; ) $[T] = h(O[T], b, C, E);
    return (M(), $);
  }
  function v(b, C, E) {
    let O = Qv.inlineCode(b, C, E);
    return (E.stack.includes('tableCell') && (O = O.replace(/\|/g, '\\$&')), O);
  }
}
function D5() {
  return {
    exit: { taskListCheckValueChecked: Y0, taskListCheckValueUnchecked: Y0, paragraph: _5 },
  };
}
function N5() {
  return { unsafe: [{ atBreak: !0, character: '-', after: '[:|-]' }], handlers: { listItem: B5 } };
}
function Y0(e) {
  const n = this.stack[this.stack.length - 2];
  (n.type, (n.checked = e.type === 'taskListCheckValueChecked'));
}
function _5(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === 'listItem' && typeof n.checked == 'boolean') {
    const i = this.stack[this.stack.length - 1];
    i.type;
    const l = i.children[0];
    if (l && l.type === 'text') {
      const o = n.children;
      let u = -1,
        c;
      for (; ++u < o.length; ) {
        const d = o[u];
        if (d.type === 'paragraph') {
          c = d;
          break;
        }
      }
      c === i &&
        ((l.value = l.value.slice(1)),
        l.value.length === 0
          ? i.children.shift()
          : i.position &&
            l.position &&
            typeof l.position.start.offset == 'number' &&
            (l.position.start.column++,
            l.position.start.offset++,
            (i.position.start = Object.assign({}, l.position.start))));
    }
  }
  this.exit(e);
}
function B5(e, n, i, l) {
  const o = e.children[0],
    u = typeof e.checked == 'boolean' && o && o.type === 'paragraph',
    c = '[' + (e.checked ? 'x' : ' ') + '] ',
    d = i.createTracker(l);
  u && d.move(c);
  let h = Qv.listItem(e, n, i, { ...l, ...d.current() });
  return (u && (h = h.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, p)), h);
  function p(g) {
    return g + c;
  }
}
function L5() {
  return [pz(), _z(), Uz(), E5(), D5()];
}
function $5(e) {
  return { extensions: [hz(), Bz(e), jz(), z5(e), N5()] };
}
const U5 = { tokenize: F5, partial: !0 },
  Zv = { tokenize: V5, partial: !0 },
  Wv = { tokenize: Y5, partial: !0 },
  Jv = { tokenize: G5, partial: !0 },
  j5 = { tokenize: X5, partial: !0 },
  ex = { name: 'wwwAutolink', tokenize: H5, previous: nx },
  tx = { name: 'protocolAutolink', tokenize: q5, previous: rx },
  $r = { name: 'emailAutolink', tokenize: I5, previous: ix },
  mr = {};
function P5() {
  return { text: mr };
}
let _i = 48;
for (; _i < 123; ) ((mr[_i] = $r), _i++, _i === 58 ? (_i = 65) : _i === 91 && (_i = 97));
mr[43] = $r;
mr[45] = $r;
mr[46] = $r;
mr[95] = $r;
mr[72] = [$r, tx];
mr[104] = [$r, tx];
mr[87] = [$r, ex];
mr[119] = [$r, ex];
function I5(e, n, i) {
  const l = this;
  let o, u;
  return c;
  function c(y) {
    return !mp(y) || !ix.call(l, l.previous) || lh(l.events)
      ? i(y)
      : (e.enter('literalAutolink'), e.enter('literalAutolinkEmail'), d(y));
  }
  function d(y) {
    return mp(y) ? (e.consume(y), d) : y === 64 ? (e.consume(y), h) : i(y);
  }
  function h(y) {
    return y === 46
      ? e.check(j5, g, p)(y)
      : y === 45 || y === 95 || ln(y)
        ? ((u = !0), e.consume(y), h)
        : g(y);
  }
  function p(y) {
    return (e.consume(y), (o = !0), h);
  }
  function g(y) {
    return u && o && cn(l.previous)
      ? (e.exit('literalAutolinkEmail'), e.exit('literalAutolink'), n(y))
      : i(y);
  }
}
function H5(e, n, i) {
  const l = this;
  return o;
  function o(c) {
    return (c !== 87 && c !== 119) || !nx.call(l, l.previous) || lh(l.events)
      ? i(c)
      : (e.enter('literalAutolink'),
        e.enter('literalAutolinkWww'),
        e.check(U5, e.attempt(Zv, e.attempt(Wv, u), i), i)(c));
  }
  function u(c) {
    return (e.exit('literalAutolinkWww'), e.exit('literalAutolink'), n(c));
  }
}
function q5(e, n, i) {
  const l = this;
  let o = '',
    u = !1;
  return c;
  function c(y) {
    return (y === 72 || y === 104) && rx.call(l, l.previous) && !lh(l.events)
      ? (e.enter('literalAutolink'),
        e.enter('literalAutolinkHttp'),
        (o += String.fromCodePoint(y)),
        e.consume(y),
        d)
      : i(y);
  }
  function d(y) {
    if (cn(y) && o.length < 5) return ((o += String.fromCodePoint(y)), e.consume(y), d);
    if (y === 58) {
      const v = o.toLowerCase();
      if (v === 'http' || v === 'https') return (e.consume(y), h);
    }
    return i(y);
  }
  function h(y) {
    return y === 47 ? (e.consume(y), u ? p : ((u = !0), h)) : i(y);
  }
  function p(y) {
    return y === null || bu(y) || yt(y) || Ii(y) || Vu(y)
      ? i(y)
      : e.attempt(Zv, e.attempt(Wv, g), i)(y);
  }
  function g(y) {
    return (e.exit('literalAutolinkHttp'), e.exit('literalAutolink'), n(y));
  }
}
function F5(e, n, i) {
  let l = 0;
  return o;
  function o(c) {
    return (c === 87 || c === 119) && l < 3
      ? (l++, e.consume(c), o)
      : c === 46 && l === 3
        ? (e.consume(c), u)
        : i(c);
  }
  function u(c) {
    return c === null ? i(c) : n(c);
  }
}
function V5(e, n, i) {
  let l, o, u;
  return c;
  function c(p) {
    return p === 46 || p === 95
      ? e.check(Jv, h, d)(p)
      : p === null || yt(p) || Ii(p) || (p !== 45 && Vu(p))
        ? h(p)
        : ((u = !0), e.consume(p), c);
  }
  function d(p) {
    return (p === 95 ? (l = !0) : ((o = l), (l = void 0)), e.consume(p), c);
  }
  function h(p) {
    return o || l || !u ? i(p) : n(p);
  }
}
function Y5(e, n) {
  let i = 0,
    l = 0;
  return o;
  function o(c) {
    return c === 40
      ? (i++, e.consume(c), o)
      : c === 41 && l < i
        ? u(c)
        : c === 33 ||
            c === 34 ||
            c === 38 ||
            c === 39 ||
            c === 41 ||
            c === 42 ||
            c === 44 ||
            c === 46 ||
            c === 58 ||
            c === 59 ||
            c === 60 ||
            c === 63 ||
            c === 93 ||
            c === 95 ||
            c === 126
          ? e.check(Jv, n, u)(c)
          : c === null || yt(c) || Ii(c)
            ? n(c)
            : (e.consume(c), o);
  }
  function u(c) {
    return (c === 41 && l++, e.consume(c), o);
  }
}
function G5(e, n, i) {
  return l;
  function l(d) {
    return d === 33 ||
      d === 34 ||
      d === 39 ||
      d === 41 ||
      d === 42 ||
      d === 44 ||
      d === 46 ||
      d === 58 ||
      d === 59 ||
      d === 63 ||
      d === 95 ||
      d === 126
      ? (e.consume(d), l)
      : d === 38
        ? (e.consume(d), u)
        : d === 93
          ? (e.consume(d), o)
          : d === 60 || d === null || yt(d) || Ii(d)
            ? n(d)
            : i(d);
  }
  function o(d) {
    return d === null || d === 40 || d === 91 || yt(d) || Ii(d) ? n(d) : l(d);
  }
  function u(d) {
    return cn(d) ? c(d) : i(d);
  }
  function c(d) {
    return d === 59 ? (e.consume(d), l) : cn(d) ? (e.consume(d), c) : i(d);
  }
}
function X5(e, n, i) {
  return l;
  function l(u) {
    return (e.consume(u), o);
  }
  function o(u) {
    return ln(u) ? i(u) : n(u);
  }
}
function nx(e) {
  return (
    e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || yt(e)
  );
}
function rx(e) {
  return !cn(e);
}
function ix(e) {
  return !(e === 47 || mp(e));
}
function mp(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ln(e);
}
function lh(e) {
  let n = e.length,
    i = !1;
  for (; n--; ) {
    const l = e[n][1];
    if ((l.type === 'labelLink' || l.type === 'labelImage') && !l._balanced) {
      i = !0;
      break;
    }
    if (l._gfmAutolinkLiteralWalkedInto) {
      i = !1;
      break;
    }
  }
  return (e.length > 0 && !i && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), i);
}
const K5 = { tokenize: r3, partial: !0 };
function Q5() {
  return {
    document: {
      91: { name: 'gfmFootnoteDefinition', tokenize: e3, continuation: { tokenize: t3 }, exit: n3 },
    },
    text: {
      91: { name: 'gfmFootnoteCall', tokenize: J5 },
      93: { name: 'gfmPotentialFootnoteCall', add: 'after', tokenize: Z5, resolveTo: W5 },
    },
  };
}
function Z5(e, n, i) {
  const l = this;
  let o = l.events.length;
  const u = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []);
  let c;
  for (; o--; ) {
    const h = l.events[o][1];
    if (h.type === 'labelImage') {
      c = h;
      break;
    }
    if (
      h.type === 'gfmFootnoteCall' ||
      h.type === 'labelLink' ||
      h.type === 'label' ||
      h.type === 'image' ||
      h.type === 'link'
    )
      break;
  }
  return d;
  function d(h) {
    if (!c || !c._balanced) return i(h);
    const p = Qn(l.sliceSerialize({ start: c.end, end: l.now() }));
    return p.codePointAt(0) !== 94 || !u.includes(p.slice(1))
      ? i(h)
      : (e.enter('gfmFootnoteCallLabelMarker'),
        e.consume(h),
        e.exit('gfmFootnoteCallLabelMarker'),
        n(h));
  }
}
function W5(e, n) {
  let i = e.length;
  for (; i--; )
    if (e[i][1].type === 'labelImage' && e[i][0] === 'enter') {
      e[i][1];
      break;
    }
  ((e[i + 1][1].type = 'data'), (e[i + 3][1].type = 'gfmFootnoteCallLabelMarker'));
  const l = {
      type: 'gfmFootnoteCall',
      start: Object.assign({}, e[i + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    o = {
      type: 'gfmFootnoteCallMarker',
      start: Object.assign({}, e[i + 3][1].end),
      end: Object.assign({}, e[i + 3][1].end),
    };
  (o.end.column++, o.end.offset++, o.end._bufferIndex++);
  const u = {
      type: 'gfmFootnoteCallString',
      start: Object.assign({}, o.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    c = {
      type: 'chunkString',
      contentType: 'string',
      start: Object.assign({}, u.start),
      end: Object.assign({}, u.end),
    },
    d = [
      e[i + 1],
      e[i + 2],
      ['enter', l, n],
      e[i + 3],
      e[i + 4],
      ['enter', o, n],
      ['exit', o, n],
      ['enter', u, n],
      ['enter', c, n],
      ['exit', c, n],
      ['exit', u, n],
      e[e.length - 2],
      e[e.length - 1],
      ['exit', l, n],
    ];
  return (e.splice(i, e.length - i + 1, ...d), e);
}
function J5(e, n, i) {
  const l = this,
    o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []);
  let u = 0,
    c;
  return d;
  function d(y) {
    return (
      e.enter('gfmFootnoteCall'),
      e.enter('gfmFootnoteCallLabelMarker'),
      e.consume(y),
      e.exit('gfmFootnoteCallLabelMarker'),
      h
    );
  }
  function h(y) {
    return y !== 94
      ? i(y)
      : (e.enter('gfmFootnoteCallMarker'),
        e.consume(y),
        e.exit('gfmFootnoteCallMarker'),
        e.enter('gfmFootnoteCallString'),
        (e.enter('chunkString').contentType = 'string'),
        p);
  }
  function p(y) {
    if (u > 999 || (y === 93 && !c) || y === null || y === 91 || yt(y)) return i(y);
    if (y === 93) {
      e.exit('chunkString');
      const v = e.exit('gfmFootnoteCallString');
      return o.includes(Qn(l.sliceSerialize(v)))
        ? (e.enter('gfmFootnoteCallLabelMarker'),
          e.consume(y),
          e.exit('gfmFootnoteCallLabelMarker'),
          e.exit('gfmFootnoteCall'),
          n)
        : i(y);
    }
    return (yt(y) || (c = !0), u++, e.consume(y), y === 92 ? g : p);
  }
  function g(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), u++, p) : p(y);
  }
}
function e3(e, n, i) {
  const l = this,
    o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []);
  let u,
    c = 0,
    d;
  return h;
  function h(C) {
    return (
      (e.enter('gfmFootnoteDefinition')._container = !0),
      e.enter('gfmFootnoteDefinitionLabel'),
      e.enter('gfmFootnoteDefinitionLabelMarker'),
      e.consume(C),
      e.exit('gfmFootnoteDefinitionLabelMarker'),
      p
    );
  }
  function p(C) {
    return C === 94
      ? (e.enter('gfmFootnoteDefinitionMarker'),
        e.consume(C),
        e.exit('gfmFootnoteDefinitionMarker'),
        e.enter('gfmFootnoteDefinitionLabelString'),
        (e.enter('chunkString').contentType = 'string'),
        g)
      : i(C);
  }
  function g(C) {
    if (c > 999 || (C === 93 && !d) || C === null || C === 91 || yt(C)) return i(C);
    if (C === 93) {
      e.exit('chunkString');
      const E = e.exit('gfmFootnoteDefinitionLabelString');
      return (
        (u = Qn(l.sliceSerialize(E))),
        e.enter('gfmFootnoteDefinitionLabelMarker'),
        e.consume(C),
        e.exit('gfmFootnoteDefinitionLabelMarker'),
        e.exit('gfmFootnoteDefinitionLabel'),
        v
      );
    }
    return (yt(C) || (d = !0), c++, e.consume(C), C === 92 ? y : g);
  }
  function y(C) {
    return C === 91 || C === 92 || C === 93 ? (e.consume(C), c++, g) : g(C);
  }
  function v(C) {
    return C === 58
      ? (e.enter('definitionMarker'),
        e.consume(C),
        e.exit('definitionMarker'),
        o.includes(u) || o.push(u),
        Ve(e, b, 'gfmFootnoteDefinitionWhitespace'))
      : i(C);
  }
  function b(C) {
    return n(C);
  }
}
function t3(e, n, i) {
  return e.check(Oo, n, e.attempt(K5, n, i));
}
function n3(e) {
  e.exit('gfmFootnoteDefinition');
}
function r3(e, n, i) {
  const l = this;
  return Ve(e, o, 'gfmFootnoteDefinitionIndent', 5);
  function o(u) {
    const c = l.events[l.events.length - 1];
    return c &&
      c[1].type === 'gfmFootnoteDefinitionIndent' &&
      c[2].sliceSerialize(c[1], !0).length === 4
      ? n(u)
      : i(u);
  }
}
function i3(e) {
  let i = (e || {}).singleTilde;
  const l = { name: 'strikethrough', tokenize: u, resolveAll: o };
  return (
    i == null && (i = !0),
    { text: { 126: l }, insideSpan: { null: [l] }, attentionMarkers: { null: [126] } }
  );
  function o(c, d) {
    let h = -1;
    for (; ++h < c.length; )
      if (
        c[h][0] === 'enter' &&
        c[h][1].type === 'strikethroughSequenceTemporary' &&
        c[h][1]._close
      ) {
        let p = h;
        for (; p--; )
          if (
            c[p][0] === 'exit' &&
            c[p][1].type === 'strikethroughSequenceTemporary' &&
            c[p][1]._open &&
            c[h][1].end.offset - c[h][1].start.offset === c[p][1].end.offset - c[p][1].start.offset
          ) {
            ((c[h][1].type = 'strikethroughSequence'), (c[p][1].type = 'strikethroughSequence'));
            const g = {
                type: 'strikethrough',
                start: Object.assign({}, c[p][1].start),
                end: Object.assign({}, c[h][1].end),
              },
              y = {
                type: 'strikethroughText',
                start: Object.assign({}, c[p][1].end),
                end: Object.assign({}, c[h][1].start),
              },
              v = [
                ['enter', g, d],
                ['enter', c[p][1], d],
                ['exit', c[p][1], d],
                ['enter', y, d],
              ],
              b = d.parser.constructs.insideSpan.null;
            (b && Dn(v, v.length, 0, Yu(b, c.slice(p + 1, h), d)),
              Dn(v, v.length, 0, [
                ['exit', y, d],
                ['enter', c[h][1], d],
                ['exit', c[h][1], d],
                ['exit', g, d],
              ]),
              Dn(c, p - 1, h - p + 3, v),
              (h = p + v.length - 2));
            break;
          }
      }
    for (h = -1; ++h < c.length; )
      c[h][1].type === 'strikethroughSequenceTemporary' && (c[h][1].type = 'data');
    return c;
  }
  function u(c, d, h) {
    const p = this.previous,
      g = this.events;
    let y = 0;
    return v;
    function v(C) {
      return p === 126 && g[g.length - 1][1].type !== 'characterEscape'
        ? h(C)
        : (c.enter('strikethroughSequenceTemporary'), b(C));
    }
    function b(C) {
      const E = Fl(p);
      if (C === 126) return y > 1 ? h(C) : (c.consume(C), y++, b);
      if (y < 2 && !i) return h(C);
      const O = c.exit('strikethroughSequenceTemporary'),
        T = Fl(C);
      return ((O._open = !T || (T === 2 && !!E)), (O._close = !E || (E === 2 && !!T)), d(C));
    }
  }
}
class l3 {
  constructor() {
    this.map = [];
  }
  add(n, i, l) {
    a3(this, n, i, l);
  }
  consume(n) {
    if (
      (this.map.sort(function (u, c) {
        return u[0] - c[0];
      }),
      this.map.length === 0)
    )
      return;
    let i = this.map.length;
    const l = [];
    for (; i > 0; )
      ((i -= 1),
        l.push(n.slice(this.map[i][0] + this.map[i][1]), this.map[i][2]),
        (n.length = this.map[i][0]));
    (l.push(n.slice()), (n.length = 0));
    let o = l.pop();
    for (; o; ) {
      for (const u of o) n.push(u);
      o = l.pop();
    }
    this.map.length = 0;
  }
}
function a3(e, n, i, l) {
  let o = 0;
  if (!(i === 0 && l.length === 0)) {
    for (; o < e.map.length; ) {
      if (e.map[o][0] === n) {
        ((e.map[o][1] += i), e.map[o][2].push(...l));
        return;
      }
      o += 1;
    }
    e.map.push([n, i, l]);
  }
}
function o3(e, n) {
  let i = !1;
  const l = [];
  for (; n < e.length; ) {
    const o = e[n];
    if (i) {
      if (o[0] === 'enter')
        o[1].type === 'tableContent' &&
          l.push(e[n + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none');
      else if (o[1].type === 'tableContent') {
        if (e[n - 1][1].type === 'tableDelimiterMarker') {
          const u = l.length - 1;
          l[u] = l[u] === 'left' ? 'center' : 'right';
        }
      } else if (o[1].type === 'tableDelimiterRow') break;
    } else o[0] === 'enter' && o[1].type === 'tableDelimiterRow' && (i = !0);
    n += 1;
  }
  return l;
}
function s3() {
  return { flow: { null: { name: 'table', tokenize: u3, resolveAll: c3 } } };
}
function u3(e, n, i) {
  const l = this;
  let o = 0,
    u = 0,
    c;
  return d;
  function d(B) {
    let q = l.events.length - 1;
    for (; q > -1; ) {
      const F = l.events[q][1].type;
      if (F === 'lineEnding' || F === 'linePrefix') q--;
      else break;
    }
    const k = q > -1 ? l.events[q][1].type : null,
      X = k === 'tableHead' || k === 'tableRow' ? R : h;
    return X === R && l.parser.lazy[l.now().line] ? i(B) : X(B);
  }
  function h(B) {
    return (e.enter('tableHead'), e.enter('tableRow'), p(B));
  }
  function p(B) {
    return (B === 124 || ((c = !0), (u += 1)), g(B));
  }
  function g(B) {
    return B === null
      ? i(B)
      : we(B)
        ? u > 1
          ? ((u = 0),
            (l.interrupt = !0),
            e.exit('tableRow'),
            e.enter('lineEnding'),
            e.consume(B),
            e.exit('lineEnding'),
            b)
          : i(B)
        : qe(B)
          ? Ve(e, g, 'whitespace')(B)
          : ((u += 1),
            c && ((c = !1), (o += 1)),
            B === 124
              ? (e.enter('tableCellDivider'), e.consume(B), e.exit('tableCellDivider'), (c = !0), g)
              : (e.enter('data'), y(B)));
  }
  function y(B) {
    return B === null || B === 124 || yt(B)
      ? (e.exit('data'), g(B))
      : (e.consume(B), B === 92 ? v : y);
  }
  function v(B) {
    return B === 92 || B === 124 ? (e.consume(B), y) : y(B);
  }
  function b(B) {
    return (
      (l.interrupt = !1),
      l.parser.lazy[l.now().line]
        ? i(B)
        : (e.enter('tableDelimiterRow'),
          (c = !1),
          qe(B)
            ? Ve(
                e,
                C,
                'linePrefix',
                l.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
              )(B)
            : C(B))
    );
  }
  function C(B) {
    return B === 45 || B === 58
      ? O(B)
      : B === 124
        ? ((c = !0), e.enter('tableCellDivider'), e.consume(B), e.exit('tableCellDivider'), E)
        : z(B);
  }
  function E(B) {
    return qe(B) ? Ve(e, O, 'whitespace')(B) : O(B);
  }
  function O(B) {
    return B === 58
      ? ((u += 1),
        (c = !0),
        e.enter('tableDelimiterMarker'),
        e.consume(B),
        e.exit('tableDelimiterMarker'),
        T)
      : B === 45
        ? ((u += 1), T(B))
        : B === null || we(B)
          ? N(B)
          : z(B);
  }
  function T(B) {
    return B === 45 ? (e.enter('tableDelimiterFiller'), $(B)) : z(B);
  }
  function $(B) {
    return B === 45
      ? (e.consume(B), $)
      : B === 58
        ? ((c = !0),
          e.exit('tableDelimiterFiller'),
          e.enter('tableDelimiterMarker'),
          e.consume(B),
          e.exit('tableDelimiterMarker'),
          M)
        : (e.exit('tableDelimiterFiller'), M(B));
  }
  function M(B) {
    return qe(B) ? Ve(e, N, 'whitespace')(B) : N(B);
  }
  function N(B) {
    return B === 124
      ? C(B)
      : B === null || we(B)
        ? !c || o !== u
          ? z(B)
          : (e.exit('tableDelimiterRow'), e.exit('tableHead'), n(B))
        : z(B);
  }
  function z(B) {
    return i(B);
  }
  function R(B) {
    return (e.enter('tableRow'), H(B));
  }
  function H(B) {
    return B === 124
      ? (e.enter('tableCellDivider'), e.consume(B), e.exit('tableCellDivider'), H)
      : B === null || we(B)
        ? (e.exit('tableRow'), n(B))
        : qe(B)
          ? Ve(e, H, 'whitespace')(B)
          : (e.enter('data'), Y(B));
  }
  function Y(B) {
    return B === null || B === 124 || yt(B)
      ? (e.exit('data'), H(B))
      : (e.consume(B), B === 92 ? Q : Y);
  }
  function Q(B) {
    return B === 92 || B === 124 ? (e.consume(B), Y) : Y(B);
  }
}
function c3(e, n) {
  let i = -1,
    l = !0,
    o = 0,
    u = [0, 0, 0, 0],
    c = [0, 0, 0, 0],
    d = !1,
    h = 0,
    p,
    g,
    y;
  const v = new l3();
  for (; ++i < e.length; ) {
    const b = e[i],
      C = b[1];
    b[0] === 'enter'
      ? C.type === 'tableHead'
        ? ((d = !1),
          h !== 0 && (G0(v, n, h, p, g), (g = void 0), (h = 0)),
          (p = { type: 'table', start: Object.assign({}, C.start), end: Object.assign({}, C.end) }),
          v.add(i, 0, [['enter', p, n]]))
        : C.type === 'tableRow' || C.type === 'tableDelimiterRow'
          ? ((l = !0),
            (y = void 0),
            (u = [0, 0, 0, 0]),
            (c = [0, i + 1, 0, 0]),
            d &&
              ((d = !1),
              (g = {
                type: 'tableBody',
                start: Object.assign({}, C.start),
                end: Object.assign({}, C.end),
              }),
              v.add(i, 0, [['enter', g, n]])),
            (o = C.type === 'tableDelimiterRow' ? 2 : g ? 3 : 1))
          : o &&
              (C.type === 'data' ||
                C.type === 'tableDelimiterMarker' ||
                C.type === 'tableDelimiterFiller')
            ? ((l = !1),
              c[2] === 0 &&
                (u[1] !== 0 && ((c[0] = c[1]), (y = Zs(v, n, u, o, void 0, y)), (u = [0, 0, 0, 0])),
                (c[2] = i)))
            : C.type === 'tableCellDivider' &&
              (l
                ? (l = !1)
                : (u[1] !== 0 && ((c[0] = c[1]), (y = Zs(v, n, u, o, void 0, y))),
                  (u = c),
                  (c = [u[1], i, 0, 0])))
      : C.type === 'tableHead'
        ? ((d = !0), (h = i))
        : C.type === 'tableRow' || C.type === 'tableDelimiterRow'
          ? ((h = i),
            u[1] !== 0
              ? ((c[0] = c[1]), (y = Zs(v, n, u, o, i, y)))
              : c[1] !== 0 && (y = Zs(v, n, c, o, i, y)),
            (o = 0))
          : o &&
            (C.type === 'data' ||
              C.type === 'tableDelimiterMarker' ||
              C.type === 'tableDelimiterFiller') &&
            (c[3] = i);
  }
  for (h !== 0 && G0(v, n, h, p, g), v.consume(n.events), i = -1; ++i < n.events.length; ) {
    const b = n.events[i];
    b[0] === 'enter' && b[1].type === 'table' && (b[1]._align = o3(n.events, i));
  }
  return e;
}
function Zs(e, n, i, l, o, u) {
  const c = l === 1 ? 'tableHeader' : l === 2 ? 'tableDelimiter' : 'tableData',
    d = 'tableContent';
  i[0] !== 0 && ((u.end = Object.assign({}, Ll(n.events, i[0]))), e.add(i[0], 0, [['exit', u, n]]));
  const h = Ll(n.events, i[1]);
  if (
    ((u = { type: c, start: Object.assign({}, h), end: Object.assign({}, h) }),
    e.add(i[1], 0, [['enter', u, n]]),
    i[2] !== 0)
  ) {
    const p = Ll(n.events, i[2]),
      g = Ll(n.events, i[3]),
      y = { type: d, start: Object.assign({}, p), end: Object.assign({}, g) };
    if ((e.add(i[2], 0, [['enter', y, n]]), l !== 2)) {
      const v = n.events[i[2]],
        b = n.events[i[3]];
      if (
        ((v[1].end = Object.assign({}, b[1].end)),
        (v[1].type = 'chunkText'),
        (v[1].contentType = 'text'),
        i[3] > i[2] + 1)
      ) {
        const C = i[2] + 1,
          E = i[3] - i[2] - 1;
        e.add(C, E, []);
      }
    }
    e.add(i[3] + 1, 0, [['exit', y, n]]);
  }
  return (
    o !== void 0 &&
      ((u.end = Object.assign({}, Ll(n.events, o))), e.add(o, 0, [['exit', u, n]]), (u = void 0)),
    u
  );
}
function G0(e, n, i, l, o) {
  const u = [],
    c = Ll(n.events, i);
  (o && ((o.end = Object.assign({}, c)), u.push(['exit', o, n])),
    (l.end = Object.assign({}, c)),
    u.push(['exit', l, n]),
    e.add(i + 1, 0, u));
}
function Ll(e, n) {
  const i = e[n],
    l = i[0] === 'enter' ? 'start' : 'end';
  return i[1][l];
}
const f3 = { name: 'tasklistCheck', tokenize: p3 };
function d3() {
  return { text: { 91: f3 } };
}
function p3(e, n, i) {
  const l = this;
  return o;
  function o(h) {
    return l.previous !== null || !l._gfmTasklistFirstContentOfListItem
      ? i(h)
      : (e.enter('taskListCheck'),
        e.enter('taskListCheckMarker'),
        e.consume(h),
        e.exit('taskListCheckMarker'),
        u);
  }
  function u(h) {
    return yt(h)
      ? (e.enter('taskListCheckValueUnchecked'),
        e.consume(h),
        e.exit('taskListCheckValueUnchecked'),
        c)
      : h === 88 || h === 120
        ? (e.enter('taskListCheckValueChecked'),
          e.consume(h),
          e.exit('taskListCheckValueChecked'),
          c)
        : i(h);
  }
  function c(h) {
    return h === 93
      ? (e.enter('taskListCheckMarker'),
        e.consume(h),
        e.exit('taskListCheckMarker'),
        e.exit('taskListCheck'),
        d)
      : i(h);
  }
  function d(h) {
    return we(h) ? n(h) : qe(h) ? e.check({ tokenize: h3 }, n, i)(h) : i(h);
  }
}
function h3(e, n, i) {
  return Ve(e, l, 'whitespace');
  function l(o) {
    return o === null ? i(o) : n(o);
  }
}
function m3(e) {
  return xv([P5(), Q5(), i3(e), s3(), d3()]);
}
const g3 = {};
function y3(e) {
  const n = this,
    i = e || g3,
    l = n.data(),
    o = l.micromarkExtensions || (l.micromarkExtensions = []),
    u = l.fromMarkdownExtensions || (l.fromMarkdownExtensions = []),
    c = l.toMarkdownExtensions || (l.toMarkdownExtensions = []);
  (o.push(m3(i)), u.push(L5()), c.push($5(i)));
}
function b3(e, n) {
  const i = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: e.wrap(e.all(n), !0),
  };
  return (e.patch(n, i), e.applyData(n, i));
}
function v3(e, n) {
  const i = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    e.patch(n, i),
    [
      e.applyData(n, i),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function x3(e, n) {
  const i = n.value
      ? n.value +
        `
`
      : '',
    l = {};
  n.lang && (l.className = ['language-' + n.lang]);
  let o = {
    type: 'element',
    tagName: 'code',
    properties: l,
    children: [{ type: 'text', value: i }],
  };
  return (
    n.meta && (o.data = { meta: n.meta }),
    e.patch(n, o),
    (o = e.applyData(n, o)),
    (o = { type: 'element', tagName: 'pre', properties: {}, children: [o] }),
    e.patch(n, o),
    o
  );
}
function S3(e, n) {
  const i = { type: 'element', tagName: 'del', properties: {}, children: e.all(n) };
  return (e.patch(n, i), e.applyData(n, i));
}
function C3(e, n) {
  const i = { type: 'element', tagName: 'em', properties: {}, children: e.all(n) };
  return (e.patch(n, i), e.applyData(n, i));
}
function k3(e, n) {
  const i = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    l = String(n.identifier).toUpperCase(),
    o = Xl(l.toLowerCase()),
    u = e.footnoteOrder.indexOf(l);
  let c,
    d = e.footnoteCounts.get(l);
  (d === void 0 ? ((d = 0), e.footnoteOrder.push(l), (c = e.footnoteOrder.length)) : (c = u + 1),
    (d += 1),
    e.footnoteCounts.set(l, d));
  const h = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + i + 'fn-' + o,
      id: i + 'fnref-' + o + (d > 1 ? '-' + d : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(c) }],
  };
  e.patch(n, h);
  const p = { type: 'element', tagName: 'sup', properties: {}, children: [h] };
  return (e.patch(n, p), e.applyData(n, p));
}
function w3(e, n) {
  const i = { type: 'element', tagName: 'h' + n.depth, properties: {}, children: e.all(n) };
  return (e.patch(n, i), e.applyData(n, i));
}
function E3(e, n) {
  if (e.options.allowDangerousHtml) {
    const i = { type: 'raw', value: n.value };
    return (e.patch(n, i), e.applyData(n, i));
  }
}
function lx(e, n) {
  const i = n.referenceType;
  let l = ']';
  if (
    (i === 'collapsed' ? (l += '[]') : i === 'full' && (l += '[' + (n.label || n.identifier) + ']'),
    n.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + n.alt + l }];
  const o = e.all(n),
    u = o[0];
  u && u.type === 'text' ? (u.value = '[' + u.value) : o.unshift({ type: 'text', value: '[' });
  const c = o[o.length - 1];
  return (c && c.type === 'text' ? (c.value += l) : o.push({ type: 'text', value: l }), o);
}
function T3(e, n) {
  const i = String(n.identifier).toUpperCase(),
    l = e.definitionById.get(i);
  if (!l) return lx(e, n);
  const o = { src: Xl(l.url || ''), alt: n.alt };
  l.title !== null && l.title !== void 0 && (o.title = l.title);
  const u = { type: 'element', tagName: 'img', properties: o, children: [] };
  return (e.patch(n, u), e.applyData(n, u));
}
function A3(e, n) {
  const i = { src: Xl(n.url) };
  (n.alt !== null && n.alt !== void 0 && (i.alt = n.alt),
    n.title !== null && n.title !== void 0 && (i.title = n.title));
  const l = { type: 'element', tagName: 'img', properties: i, children: [] };
  return (e.patch(n, l), e.applyData(n, l));
}
function R3(e, n) {
  const i = { type: 'text', value: n.value.replace(/\r?\n|\r/g, ' ') };
  e.patch(n, i);
  const l = { type: 'element', tagName: 'code', properties: {}, children: [i] };
  return (e.patch(n, l), e.applyData(n, l));
}
function M3(e, n) {
  const i = String(n.identifier).toUpperCase(),
    l = e.definitionById.get(i);
  if (!l) return lx(e, n);
  const o = { href: Xl(l.url || '') };
  l.title !== null && l.title !== void 0 && (o.title = l.title);
  const u = { type: 'element', tagName: 'a', properties: o, children: e.all(n) };
  return (e.patch(n, u), e.applyData(n, u));
}
function O3(e, n) {
  const i = { href: Xl(n.url) };
  n.title !== null && n.title !== void 0 && (i.title = n.title);
  const l = { type: 'element', tagName: 'a', properties: i, children: e.all(n) };
  return (e.patch(n, l), e.applyData(n, l));
}
function z3(e, n, i) {
  const l = e.all(n),
    o = i ? D3(i) : ax(n),
    u = {},
    c = [];
  if (typeof n.checked == 'boolean') {
    const g = l[0];
    let y;
    (g && g.type === 'element' && g.tagName === 'p'
      ? (y = g)
      : ((y = { type: 'element', tagName: 'p', properties: {}, children: [] }), l.unshift(y)),
      y.children.length > 0 && y.children.unshift({ type: 'text', value: ' ' }),
      y.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: n.checked, disabled: !0 },
        children: [],
      }),
      (u.className = ['task-list-item']));
  }
  let d = -1;
  for (; ++d < l.length; ) {
    const g = l[d];
    ((o || d !== 0 || g.type !== 'element' || g.tagName !== 'p') &&
      c.push({
        type: 'text',
        value: `
`,
      }),
      g.type === 'element' && g.tagName === 'p' && !o ? c.push(...g.children) : c.push(g));
  }
  const h = l[l.length - 1];
  h &&
    (o || h.type !== 'element' || h.tagName !== 'p') &&
    c.push({
      type: 'text',
      value: `
`,
    });
  const p = { type: 'element', tagName: 'li', properties: u, children: c };
  return (e.patch(n, p), e.applyData(n, p));
}
function D3(e) {
  let n = !1;
  if (e.type === 'list') {
    n = e.spread || !1;
    const i = e.children;
    let l = -1;
    for (; !n && ++l < i.length; ) n = ax(i[l]);
  }
  return n;
}
function ax(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function N3(e, n) {
  const i = {},
    l = e.all(n);
  let o = -1;
  for (typeof n.start == 'number' && n.start !== 1 && (i.start = n.start); ++o < l.length; ) {
    const c = l[o];
    if (
      c.type === 'element' &&
      c.tagName === 'li' &&
      c.properties &&
      Array.isArray(c.properties.className) &&
      c.properties.className.includes('task-list-item')
    ) {
      i.className = ['contains-task-list'];
      break;
    }
  }
  const u = {
    type: 'element',
    tagName: n.ordered ? 'ol' : 'ul',
    properties: i,
    children: e.wrap(l, !0),
  };
  return (e.patch(n, u), e.applyData(n, u));
}
function _3(e, n) {
  const i = { type: 'element', tagName: 'p', properties: {}, children: e.all(n) };
  return (e.patch(n, i), e.applyData(n, i));
}
function B3(e, n) {
  const i = { type: 'root', children: e.wrap(e.all(n)) };
  return (e.patch(n, i), e.applyData(n, i));
}
function L3(e, n) {
  const i = { type: 'element', tagName: 'strong', properties: {}, children: e.all(n) };
  return (e.patch(n, i), e.applyData(n, i));
}
const ox = ux('end'),
  sx = ux('start');
function ux(e) {
  return n;
  function n(i) {
    const l = (i && i.position && i.position[e]) || {};
    if (typeof l.line == 'number' && l.line > 0 && typeof l.column == 'number' && l.column > 0)
      return {
        line: l.line,
        column: l.column,
        offset: typeof l.offset == 'number' && l.offset > -1 ? l.offset : void 0,
      };
  }
}
function cx(e) {
  const n = sx(e),
    i = ox(e);
  if (n && i) return { start: n, end: i };
}
function $3(e, n) {
  const i = e.all(n),
    l = i.shift(),
    o = [];
  if (l) {
    const c = { type: 'element', tagName: 'thead', properties: {}, children: e.wrap([l], !0) };
    (e.patch(n.children[0], c), o.push(c));
  }
  if (i.length > 0) {
    const c = { type: 'element', tagName: 'tbody', properties: {}, children: e.wrap(i, !0) },
      d = sx(n.children[1]),
      h = ox(n.children[n.children.length - 1]);
    (d && h && (c.position = { start: d, end: h }), o.push(c));
  }
  const u = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(o, !0) };
  return (e.patch(n, u), e.applyData(n, u));
}
function U3(e, n, i) {
  const l = i ? i.children : void 0,
    u = (l ? l.indexOf(n) : 1) === 0 ? 'th' : 'td',
    c = i && i.type === 'table' ? i.align : void 0,
    d = c ? c.length : n.children.length;
  let h = -1;
  const p = [];
  for (; ++h < d; ) {
    const y = n.children[h],
      v = {},
      b = c ? c[h] : void 0;
    b && (v.align = b);
    let C = { type: 'element', tagName: u, properties: v, children: [] };
    (y && ((C.children = e.all(y)), e.patch(y, C), (C = e.applyData(y, C))), p.push(C));
  }
  const g = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(p, !0) };
  return (e.patch(n, g), e.applyData(n, g));
}
function j3(e, n) {
  const i = { type: 'element', tagName: 'td', properties: {}, children: e.all(n) };
  return (e.patch(n, i), e.applyData(n, i));
}
const X0 = 9,
  K0 = 32;
function P3(e) {
  const n = String(e),
    i = /\r?\n|\r/g;
  let l = i.exec(n),
    o = 0;
  const u = [];
  for (; l; )
    (u.push(Q0(n.slice(o, l.index), o > 0, !0), l[0]),
      (o = l.index + l[0].length),
      (l = i.exec(n)));
  return (u.push(Q0(n.slice(o), o > 0, !1)), u.join(''));
}
function Q0(e, n, i) {
  let l = 0,
    o = e.length;
  if (n) {
    let u = e.codePointAt(l);
    for (; u === X0 || u === K0; ) (l++, (u = e.codePointAt(l)));
  }
  if (i) {
    let u = e.codePointAt(o - 1);
    for (; u === X0 || u === K0; ) (o--, (u = e.codePointAt(o - 1)));
  }
  return o > l ? e.slice(l, o) : '';
}
function I3(e, n) {
  const i = { type: 'text', value: P3(String(n.value)) };
  return (e.patch(n, i), e.applyData(n, i));
}
function H3(e, n) {
  const i = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (e.patch(n, i), e.applyData(n, i));
}
const q3 = {
  blockquote: b3,
  break: v3,
  code: x3,
  delete: S3,
  emphasis: C3,
  footnoteReference: k3,
  heading: w3,
  html: E3,
  imageReference: T3,
  image: A3,
  inlineCode: R3,
  linkReference: M3,
  link: O3,
  listItem: z3,
  list: N3,
  paragraph: _3,
  root: B3,
  strong: L3,
  table: $3,
  tableCell: j3,
  tableRow: U3,
  text: I3,
  thematicBreak: H3,
  toml: Ws,
  yaml: Ws,
  definition: Ws,
  footnoteDefinition: Ws,
};
function Ws() {}
const fx = -1,
  Ku = 0,
  fo = 1,
  Su = 2,
  ah = 3,
  oh = 4,
  sh = 5,
  uh = 6,
  dx = 7,
  px = 8,
  Z0 = typeof self == 'object' ? self : globalThis,
  F3 = (e, n) => {
    const i = (o, u) => (e.set(u, o), o),
      l = (o) => {
        if (e.has(o)) return e.get(o);
        const [u, c] = n[o];
        switch (u) {
          case Ku:
          case fx:
            return i(c, o);
          case fo: {
            const d = i([], o);
            for (const h of c) d.push(l(h));
            return d;
          }
          case Su: {
            const d = i({}, o);
            for (const [h, p] of c) d[l(h)] = l(p);
            return d;
          }
          case ah:
            return i(new Date(c), o);
          case oh: {
            const { source: d, flags: h } = c;
            return i(new RegExp(d, h), o);
          }
          case sh: {
            const d = i(new Map(), o);
            for (const [h, p] of c) d.set(l(h), l(p));
            return d;
          }
          case uh: {
            const d = i(new Set(), o);
            for (const h of c) d.add(l(h));
            return d;
          }
          case dx: {
            const { name: d, message: h } = c;
            return i(new Z0[d](h), o);
          }
          case px:
            return i(BigInt(c), o);
          case 'BigInt':
            return i(Object(BigInt(c)), o);
          case 'ArrayBuffer':
            return i(new Uint8Array(c).buffer, c);
          case 'DataView': {
            const { buffer: d } = new Uint8Array(c);
            return i(new DataView(d), c);
          }
        }
        return i(new Z0[u](c), o);
      };
    return l;
  },
  W0 = (e) => F3(new Map(), e)(0),
  _l = '',
  { toString: V3 } = {},
  { keys: Y3 } = Object,
  eo = (e) => {
    const n = typeof e;
    if (n !== 'object' || !e) return [Ku, n];
    const i = V3.call(e).slice(8, -1);
    switch (i) {
      case 'Array':
        return [fo, _l];
      case 'Object':
        return [Su, _l];
      case 'Date':
        return [ah, _l];
      case 'RegExp':
        return [oh, _l];
      case 'Map':
        return [sh, _l];
      case 'Set':
        return [uh, _l];
      case 'DataView':
        return [fo, i];
    }
    return i.includes('Array') ? [fo, i] : i.includes('Error') ? [dx, i] : [Su, i];
  },
  Js = ([e, n]) => e === Ku && (n === 'function' || n === 'symbol'),
  G3 = (e, n, i, l) => {
    const o = (c, d) => {
        const h = l.push(c) - 1;
        return (i.set(d, h), h);
      },
      u = (c) => {
        if (i.has(c)) return i.get(c);
        let [d, h] = eo(c);
        switch (d) {
          case Ku: {
            let g = c;
            switch (h) {
              case 'bigint':
                ((d = px), (g = c.toString()));
                break;
              case 'function':
              case 'symbol':
                if (e) throw new TypeError('unable to serialize ' + h);
                g = null;
                break;
              case 'undefined':
                return o([fx], c);
            }
            return o([d, g], c);
          }
          case fo: {
            if (h) {
              let v = c;
              return (
                h === 'DataView'
                  ? (v = new Uint8Array(c.buffer))
                  : h === 'ArrayBuffer' && (v = new Uint8Array(c)),
                o([h, [...v]], c)
              );
            }
            const g = [],
              y = o([d, g], c);
            for (const v of c) g.push(u(v));
            return y;
          }
          case Su: {
            if (h)
              switch (h) {
                case 'BigInt':
                  return o([h, c.toString()], c);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return o([h, c.valueOf()], c);
              }
            if (n && 'toJSON' in c) return u(c.toJSON());
            const g = [],
              y = o([d, g], c);
            for (const v of Y3(c)) (e || !Js(eo(c[v]))) && g.push([u(v), u(c[v])]);
            return y;
          }
          case ah:
            return o([d, c.toISOString()], c);
          case oh: {
            const { source: g, flags: y } = c;
            return o([d, { source: g, flags: y }], c);
          }
          case sh: {
            const g = [],
              y = o([d, g], c);
            for (const [v, b] of c) (e || !(Js(eo(v)) || Js(eo(b)))) && g.push([u(v), u(b)]);
            return y;
          }
          case uh: {
            const g = [],
              y = o([d, g], c);
            for (const v of c) (e || !Js(eo(v))) && g.push(u(v));
            return y;
          }
        }
        const { message: p } = c;
        return o([d, { name: h, message: p }], c);
      };
    return u;
  },
  J0 = (e, { json: n, lossy: i } = {}) => {
    const l = [];
    return (G3(!(n || i), !!n, new Map(), l)(e), l);
  },
  vo =
    typeof structuredClone == 'function'
      ? (e, n) => (n && ('json' in n || 'lossy' in n) ? W0(J0(e, n)) : structuredClone(e))
      : (e, n) => W0(J0(e, n));
function X3(e, n) {
  const i = [{ type: 'text', value: '↩' }];
  return (
    n > 1 &&
      i.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(n) }],
      }),
    i
  );
}
function K3(e, n) {
  return 'Back to reference ' + (e + 1) + (n > 1 ? '-' + n : '');
}
function Q3(e) {
  const n = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    i = e.options.footnoteBackContent || X3,
    l = e.options.footnoteBackLabel || K3,
    o = e.options.footnoteLabel || 'Footnotes',
    u = e.options.footnoteLabelTagName || 'h2',
    c = e.options.footnoteLabelProperties || { className: ['sr-only'] },
    d = [];
  let h = -1;
  for (; ++h < e.footnoteOrder.length; ) {
    const p = e.footnoteById.get(e.footnoteOrder[h]);
    if (!p) continue;
    const g = e.all(p),
      y = String(p.identifier).toUpperCase(),
      v = Xl(y.toLowerCase());
    let b = 0;
    const C = [],
      E = e.footnoteCounts.get(y);
    for (; E !== void 0 && ++b <= E; ) {
      C.length > 0 && C.push({ type: 'text', value: ' ' });
      let $ = typeof i == 'string' ? i : i(h, b);
      (typeof $ == 'string' && ($ = { type: 'text', value: $ }),
        C.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + n + 'fnref-' + v + (b > 1 ? '-' + b : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof l == 'string' ? l : l(h, b),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray($) ? $ : [$],
        }));
    }
    const O = g[g.length - 1];
    if (O && O.type === 'element' && O.tagName === 'p') {
      const $ = O.children[O.children.length - 1];
      ($ && $.type === 'text' ? ($.value += ' ') : O.children.push({ type: 'text', value: ' ' }),
        O.children.push(...C));
    } else g.push(...C);
    const T = {
      type: 'element',
      tagName: 'li',
      properties: { id: n + 'fn-' + v },
      children: e.wrap(g, !0),
    };
    (e.patch(p, T), d.push(T));
  }
  if (d.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: u,
          properties: { ...vo(c), id: 'footnote-label' },
          children: [{ type: 'text', value: o }],
        },
        {
          type: 'text',
          value: `
`,
        },
        { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(d, !0) },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const gp = {}.hasOwnProperty,
  Z3 = {};
function W3(e, n) {
  const i = n || Z3,
    l = new Map(),
    o = new Map(),
    u = new Map(),
    c = { ...q3, ...i.handlers },
    d = {
      all: p,
      applyData: eD,
      definitionById: l,
      footnoteById: o,
      footnoteCounts: u,
      footnoteOrder: [],
      handlers: c,
      one: h,
      options: i,
      patch: J3,
      wrap: nD,
    };
  return (
    Pv(e, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const y = g.type === 'definition' ? l : o,
          v = String(g.identifier).toUpperCase();
        y.has(v) || y.set(v, g);
      }
    }),
    d
  );
  function h(g, y) {
    const v = g.type,
      b = d.handlers[v];
    if (gp.call(d.handlers, v) && b) return b(d, g, y);
    if (d.options.passThrough && d.options.passThrough.includes(v)) {
      if ('children' in g) {
        const { children: E, ...O } = g,
          T = vo(O);
        return ((T.children = d.all(g)), T);
      }
      return vo(g);
    }
    return (d.options.unknownHandler || tD)(d, g, y);
  }
  function p(g) {
    const y = [];
    if ('children' in g) {
      const v = g.children;
      let b = -1;
      for (; ++b < v.length; ) {
        const C = d.one(v[b], g);
        if (C) {
          if (
            b &&
            v[b - 1].type === 'break' &&
            (!Array.isArray(C) && C.type === 'text' && (C.value = e1(C.value)),
            !Array.isArray(C) && C.type === 'element')
          ) {
            const E = C.children[0];
            E && E.type === 'text' && (E.value = e1(E.value));
          }
          Array.isArray(C) ? y.push(...C) : y.push(C);
        }
      }
    }
    return y;
  }
}
function J3(e, n) {
  e.position && (n.position = cx(e));
}
function eD(e, n) {
  let i = n;
  if (e && e.data) {
    const l = e.data.hName,
      o = e.data.hChildren,
      u = e.data.hProperties;
    if (typeof l == 'string')
      if (i.type === 'element') i.tagName = l;
      else {
        const c = 'children' in i ? i.children : [i];
        i = { type: 'element', tagName: l, properties: {}, children: c };
      }
    (i.type === 'element' && u && Object.assign(i.properties, vo(u)),
      'children' in i && i.children && o !== null && o !== void 0 && (i.children = o));
  }
  return i;
}
function tD(e, n) {
  const i = n.data || {},
    l =
      'value' in n && !(gp.call(i, 'hProperties') || gp.call(i, 'hChildren'))
        ? { type: 'text', value: n.value }
        : { type: 'element', tagName: 'div', properties: {}, children: e.all(n) };
  return (e.patch(n, l), e.applyData(n, l));
}
function nD(e, n) {
  const i = [];
  let l = -1;
  for (
    n &&
    i.push({
      type: 'text',
      value: `
`,
    });
    ++l < e.length;

  )
    (l &&
      i.push({
        type: 'text',
        value: `
`,
      }),
      i.push(e[l]));
  return (
    n &&
      e.length > 0 &&
      i.push({
        type: 'text',
        value: `
`,
      }),
    i
  );
}
function e1(e) {
  let n = 0,
    i = e.charCodeAt(n);
  for (; i === 9 || i === 32; ) (n++, (i = e.charCodeAt(n)));
  return e.slice(n);
}
function t1(e, n) {
  const i = W3(e, n),
    l = i.one(e, void 0),
    o = Q3(i),
    u = Array.isArray(l) ? { type: 'root', children: l } : l || { type: 'root', children: [] };
  return (
    o &&
      u.children.push(
        {
          type: 'text',
          value: `
`,
        },
        o,
      ),
    u
  );
}
function rD(e, n) {
  return e && 'run' in e
    ? async function (i, l) {
        const o = t1(i, { file: l, ...n });
        await e.run(o, l);
      }
    : function (i, l) {
        return t1(i, { file: l, ...(e || n) });
      };
}
const Bi = ['ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy'],
  n1 = {
    ancestors: {
      tbody: ['table'],
      td: ['table'],
      th: ['table'],
      thead: ['table'],
      tfoot: ['table'],
      tr: ['table'],
    },
    attributes: {
      a: [
        ...Bi,
        'dataFootnoteBackref',
        'dataFootnoteRef',
        ['className', 'data-footnote-backref'],
        'href',
      ],
      blockquote: ['cite'],
      code: [['className', /^language-./]],
      del: ['cite'],
      div: ['itemScope', 'itemType'],
      dl: [...Bi],
      h2: [['className', 'sr-only']],
      img: [...Bi, 'longDesc', 'src'],
      input: [
        ['disabled', !0],
        ['type', 'checkbox'],
      ],
      ins: ['cite'],
      li: [['className', 'task-list-item']],
      ol: [...Bi, ['className', 'contains-task-list']],
      q: ['cite'],
      section: ['dataFootnotes', ['className', 'footnotes']],
      source: ['srcSet'],
      summary: [...Bi],
      table: [...Bi],
      ul: [...Bi, ['className', 'contains-task-list']],
      '*': [
        'abbr',
        'accept',
        'acceptCharset',
        'accessKey',
        'action',
        'align',
        'alt',
        'axis',
        'border',
        'cellPadding',
        'cellSpacing',
        'char',
        'charOff',
        'charSet',
        'checked',
        'clear',
        'colSpan',
        'color',
        'cols',
        'compact',
        'coords',
        'dateTime',
        'dir',
        'encType',
        'frame',
        'hSpace',
        'headers',
        'height',
        'hrefLang',
        'htmlFor',
        'id',
        'isMap',
        'itemProp',
        'label',
        'lang',
        'maxLength',
        'media',
        'method',
        'multiple',
        'name',
        'noHref',
        'noShade',
        'noWrap',
        'open',
        'prompt',
        'readOnly',
        'rev',
        'rowSpan',
        'rows',
        'rules',
        'scope',
        'selected',
        'shape',
        'size',
        'span',
        'start',
        'summary',
        'tabIndex',
        'title',
        'useMap',
        'vAlign',
        'value',
        'width',
      ],
    },
    clobber: ['ariaDescribedBy', 'ariaLabelledBy', 'id', 'name'],
    clobberPrefix: 'user-content-',
    protocols: {
      cite: ['http', 'https'],
      href: ['http', 'https', 'irc', 'ircs', 'mailto', 'xmpp'],
      longDesc: ['http', 'https'],
      src: ['http', 'https'],
    },
    required: { input: { disabled: !0, type: 'checkbox' } },
    strip: ['script'],
    tagNames: [
      'a',
      'b',
      'blockquote',
      'br',
      'code',
      'dd',
      'del',
      'details',
      'div',
      'dl',
      'dt',
      'em',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hr',
      'i',
      'img',
      'input',
      'ins',
      'kbd',
      'li',
      'ol',
      'p',
      'picture',
      'pre',
      'q',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'section',
      'source',
      'span',
      'strike',
      'strong',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'tr',
      'tt',
      'ul',
      'var',
    ],
  },
  ui = {}.hasOwnProperty;
function iD(e, n) {
  let i = { type: 'root', children: [] };
  const l = { schema: n ? { ...n1, ...n } : n1, stack: [] },
    o = hx(l, e);
  return (o && (Array.isArray(o) ? (o.length === 1 ? (i = o[0]) : (i.children = o)) : (i = o)), i);
}
function hx(e, n) {
  if (n && typeof n == 'object') {
    const i = n;
    switch (typeof i.type == 'string' ? i.type : '') {
      case 'comment':
        return lD(e, i);
      case 'doctype':
        return aD(e, i);
      case 'element':
        return oD(e, i);
      case 'root':
        return sD(e, i);
      case 'text':
        return uD(e, i);
    }
  }
}
function lD(e, n) {
  if (e.schema.allowComments) {
    const i = typeof n.value == 'string' ? n.value : '',
      l = i.indexOf('-->'),
      u = { type: 'comment', value: l < 0 ? i : i.slice(0, l) };
    return (zo(u, n), u);
  }
}
function aD(e, n) {
  if (e.schema.allowDoctypes) {
    const i = { type: 'doctype' };
    return (zo(i, n), i);
  }
}
function oD(e, n) {
  const i = typeof n.tagName == 'string' ? n.tagName : '';
  e.stack.push(i);
  const l = mx(e, n.children),
    o = cD(e, n.properties);
  e.stack.pop();
  let u = !1;
  if (
    i &&
    i !== '*' &&
    (!e.schema.tagNames || e.schema.tagNames.includes(i)) &&
    ((u = !0), e.schema.ancestors && ui.call(e.schema.ancestors, i))
  ) {
    const d = e.schema.ancestors[i];
    let h = -1;
    for (u = !1; ++h < d.length; ) e.stack.includes(d[h]) && (u = !0);
  }
  if (!u) return e.schema.strip && !e.schema.strip.includes(i) ? l : void 0;
  const c = { type: 'element', tagName: i, properties: o, children: l };
  return (zo(c, n), c);
}
function sD(e, n) {
  const l = { type: 'root', children: mx(e, n.children) };
  return (zo(l, n), l);
}
function uD(e, n) {
  const l = { type: 'text', value: typeof n.value == 'string' ? n.value : '' };
  return (zo(l, n), l);
}
function mx(e, n) {
  const i = [];
  if (Array.isArray(n)) {
    const l = n;
    let o = -1;
    for (; ++o < l.length; ) {
      const u = hx(e, l[o]);
      u && (Array.isArray(u) ? i.push(...u) : i.push(u));
    }
  }
  return i;
}
function cD(e, n) {
  const i = e.stack[e.stack.length - 1],
    l = e.schema.attributes,
    o = e.schema.required,
    u = l && ui.call(l, i) ? l[i] : void 0,
    c = l && ui.call(l, '*') ? l['*'] : void 0,
    d = n && typeof n == 'object' ? n : {},
    h = {};
  let p;
  for (p in d)
    if (ui.call(d, p)) {
      const g = d[p];
      let y = r1(e, i1(u, p), p, g);
      (y == null && (y = r1(e, i1(c, p), p, g)), y != null && (h[p] = y));
    }
  if (o && ui.call(o, i)) {
    const g = o[i];
    for (p in g) ui.call(g, p) && !ui.call(h, p) && (h[p] = g[p]);
  }
  return h;
}
function r1(e, n, i, l) {
  return n ? (Array.isArray(l) ? fD(e, n, i, l) : gx(e, n, i, l)) : void 0;
}
function fD(e, n, i, l) {
  let o = -1;
  const u = [];
  for (; ++o < l.length; ) {
    const c = gx(e, n, i, l[o]);
    (typeof c == 'number' || typeof c == 'string') && u.push(c);
  }
  return u;
}
function gx(e, n, i, l) {
  if (!(typeof l != 'boolean' && typeof l != 'number' && typeof l != 'string') && dD(e, i, l)) {
    if (typeof n == 'object' && n.length > 1) {
      let o = !1,
        u = 0;
      for (; ++u < n.length; ) {
        const c = n[u];
        if (c && typeof c == 'object' && 'flags' in c) {
          if (c.test(String(l))) {
            o = !0;
            break;
          }
        } else if (c === l) {
          o = !0;
          break;
        }
      }
      if (!o) return;
    }
    return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(i)
      ? e.schema.clobberPrefix + l
      : l;
  }
}
function dD(e, n, i) {
  const l = e.schema.protocols && ui.call(e.schema.protocols, n) ? e.schema.protocols[n] : void 0;
  if (!l || l.length === 0) return !0;
  const o = String(i),
    u = o.indexOf(':'),
    c = o.indexOf('?'),
    d = o.indexOf('#'),
    h = o.indexOf('/');
  if (u < 0 || (h > -1 && u > h) || (c > -1 && u > c) || (d > -1 && u > d)) return !0;
  let p = -1;
  for (; ++p < l.length; ) {
    const g = l[p];
    if (u === g.length && o.slice(0, g.length) === g) return !0;
  }
  return !1;
}
function zo(e, n) {
  const i = cx(n);
  (n.data && (e.data = vo(n.data)), i && (e.position = i));
}
function i1(e, n) {
  let i,
    l = -1;
  if (e)
    for (; ++l < e.length; ) {
      const o = e[l],
        u = typeof o == 'string' ? o : o[0];
      if (u === n) return o;
      u === 'data*' && (i = o);
    }
  if (n.length > 4 && n.slice(0, 4).toLowerCase() === 'data') return i;
}
function pD(e) {
  return function (n) {
    return iD(n, e);
  };
}
const hD = [
  'area',
  'base',
  'basefont',
  'bgsound',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'image',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];
class Do {
  constructor(n, i, l) {
    ((this.normal = i), (this.property = n), l && (this.space = l));
  }
}
Do.prototype.normal = {};
Do.prototype.property = {};
Do.prototype.space = void 0;
function yx(e, n) {
  const i = {},
    l = {};
  for (const o of e) (Object.assign(i, o.property), Object.assign(l, o.normal));
  return new Do(i, l, n);
}
function yp(e) {
  return e.toLowerCase();
}
class vn {
  constructor(n, i) {
    ((this.attribute = i), (this.property = n));
  }
}
vn.prototype.attribute = '';
vn.prototype.booleanish = !1;
vn.prototype.boolean = !1;
vn.prototype.commaOrSpaceSeparated = !1;
vn.prototype.commaSeparated = !1;
vn.prototype.defined = !1;
vn.prototype.mustUseProperty = !1;
vn.prototype.number = !1;
vn.prototype.overloadedBoolean = !1;
vn.prototype.property = '';
vn.prototype.spaceSeparated = !1;
vn.prototype.space = void 0;
let mD = 0;
const Be = Hi(),
  $t = Hi(),
  bp = Hi(),
  fe = Hi(),
  St = Hi(),
  jl = Hi(),
  Mn = Hi();
function Hi() {
  return 2 ** ++mD;
}
const vp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Be,
        booleanish: $t,
        commaOrSpaceSeparated: Mn,
        commaSeparated: jl,
        number: fe,
        overloadedBoolean: bp,
        spaceSeparated: St,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Hd = Object.keys(vp);
class ch extends vn {
  constructor(n, i, l, o) {
    let u = -1;
    if ((super(n, i), l1(this, 'space', o), typeof l == 'number'))
      for (; ++u < Hd.length; ) {
        const c = Hd[u];
        l1(this, Hd[u], (l & vp[c]) === vp[c]);
      }
  }
}
ch.prototype.defined = !0;
function l1(e, n, i) {
  i && (e[n] = i);
}
function Kl(e) {
  const n = {},
    i = {};
  for (const [l, o] of Object.entries(e.properties)) {
    const u = new ch(l, e.transform(e.attributes || {}, l), o, e.space);
    (e.mustUseProperty && e.mustUseProperty.includes(l) && (u.mustUseProperty = !0),
      (n[l] = u),
      (i[yp(l)] = l),
      (i[yp(u.attribute)] = l));
  }
  return new Do(n, i, e.space);
}
const bx = Kl({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: $t,
    ariaAutoComplete: null,
    ariaBusy: $t,
    ariaChecked: $t,
    ariaColCount: fe,
    ariaColIndex: fe,
    ariaColSpan: fe,
    ariaControls: St,
    ariaCurrent: null,
    ariaDescribedBy: St,
    ariaDetails: null,
    ariaDisabled: $t,
    ariaDropEffect: St,
    ariaErrorMessage: null,
    ariaExpanded: $t,
    ariaFlowTo: St,
    ariaGrabbed: $t,
    ariaHasPopup: null,
    ariaHidden: $t,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: St,
    ariaLevel: fe,
    ariaLive: null,
    ariaModal: $t,
    ariaMultiLine: $t,
    ariaMultiSelectable: $t,
    ariaOrientation: null,
    ariaOwns: St,
    ariaPlaceholder: null,
    ariaPosInSet: fe,
    ariaPressed: $t,
    ariaReadOnly: $t,
    ariaRelevant: null,
    ariaRequired: $t,
    ariaRoleDescription: St,
    ariaRowCount: fe,
    ariaRowIndex: fe,
    ariaRowSpan: fe,
    ariaSelected: $t,
    ariaSetSize: fe,
    ariaSort: null,
    ariaValueMax: fe,
    ariaValueMin: fe,
    ariaValueNow: fe,
    ariaValueText: null,
    role: null,
  },
  transform(e, n) {
    return n === 'role' ? n : 'aria-' + n.slice(4).toLowerCase();
  },
});
function vx(e, n) {
  return n in e ? e[n] : n;
}
function xx(e, n) {
  return vx(e, n.toLowerCase());
}
const gD = Kl({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: jl,
      acceptCharset: St,
      accessKey: St,
      action: null,
      allow: null,
      allowFullScreen: Be,
      allowPaymentRequest: Be,
      allowUserMedia: Be,
      alt: null,
      as: null,
      async: Be,
      autoCapitalize: null,
      autoComplete: St,
      autoFocus: Be,
      autoPlay: Be,
      blocking: St,
      capture: null,
      charSet: null,
      checked: Be,
      cite: null,
      className: St,
      cols: fe,
      colSpan: null,
      content: null,
      contentEditable: $t,
      controls: Be,
      controlsList: St,
      coords: fe | jl,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Be,
      defer: Be,
      dir: null,
      dirName: null,
      disabled: Be,
      download: bp,
      draggable: $t,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Be,
      formTarget: null,
      headers: St,
      height: fe,
      hidden: bp,
      high: fe,
      href: null,
      hrefLang: null,
      htmlFor: St,
      httpEquiv: St,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Be,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Be,
      itemId: null,
      itemProp: St,
      itemRef: St,
      itemScope: Be,
      itemType: St,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Be,
      low: fe,
      manifest: null,
      max: null,
      maxLength: fe,
      media: null,
      method: null,
      min: null,
      minLength: fe,
      multiple: Be,
      muted: Be,
      name: null,
      nonce: null,
      noModule: Be,
      noValidate: Be,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Be,
      optimum: fe,
      pattern: null,
      ping: St,
      placeholder: null,
      playsInline: Be,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Be,
      referrerPolicy: null,
      rel: St,
      required: Be,
      reversed: Be,
      rows: fe,
      rowSpan: fe,
      sandbox: St,
      scope: null,
      scoped: Be,
      seamless: Be,
      selected: Be,
      shadowRootClonable: Be,
      shadowRootDelegatesFocus: Be,
      shadowRootMode: null,
      shape: null,
      size: fe,
      sizes: null,
      slot: null,
      span: fe,
      spellCheck: $t,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: fe,
      step: null,
      style: null,
      tabIndex: fe,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Be,
      useMap: null,
      value: $t,
      width: fe,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: St,
      axis: null,
      background: null,
      bgColor: null,
      border: fe,
      borderColor: null,
      bottomMargin: fe,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Be,
      declare: Be,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: fe,
      leftMargin: fe,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: fe,
      marginWidth: fe,
      noResize: Be,
      noHref: Be,
      noShade: Be,
      noWrap: Be,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: fe,
      rules: null,
      scheme: null,
      scrolling: $t,
      standby: null,
      summary: null,
      text: null,
      topMargin: fe,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: fe,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Be,
      disableRemotePlayback: Be,
      prefix: null,
      property: null,
      results: fe,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: xx,
  }),
  yD = Kl({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: Mn,
      accentHeight: fe,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: fe,
      amplitude: fe,
      arabicForm: null,
      ascent: fe,
      attributeName: null,
      attributeType: null,
      azimuth: fe,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: fe,
      by: null,
      calcMode: null,
      capHeight: fe,
      className: St,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: fe,
      diffuseConstant: fe,
      direction: null,
      display: null,
      dur: null,
      divisor: fe,
      dominantBaseline: null,
      download: Be,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: fe,
      enableBackground: null,
      end: null,
      event: null,
      exponent: fe,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: fe,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: jl,
      g2: jl,
      glyphName: jl,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: fe,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: fe,
      horizOriginX: fe,
      horizOriginY: fe,
      id: null,
      ideographic: fe,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: fe,
      k: fe,
      k1: fe,
      k2: fe,
      k3: fe,
      k4: fe,
      kernelMatrix: Mn,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: fe,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: fe,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: fe,
      overlineThickness: fe,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: fe,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: St,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: fe,
      pointsAtY: fe,
      pointsAtZ: fe,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Mn,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Mn,
      rev: Mn,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Mn,
      requiredFeatures: Mn,
      requiredFonts: Mn,
      requiredFormats: Mn,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: fe,
      specularExponent: fe,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: fe,
      strikethroughThickness: fe,
      string: null,
      stroke: null,
      strokeDashArray: Mn,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: fe,
      strokeOpacity: fe,
      strokeWidth: null,
      style: null,
      surfaceScale: fe,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Mn,
      tabIndex: fe,
      tableValues: null,
      target: null,
      targetX: fe,
      targetY: fe,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Mn,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: fe,
      underlineThickness: fe,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: fe,
      values: null,
      vAlphabetic: fe,
      vMathematical: fe,
      vectorEffect: null,
      vHanging: fe,
      vIdeographic: fe,
      version: null,
      vertAdvY: fe,
      vertOriginX: fe,
      vertOriginY: fe,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: fe,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: vx,
  }),
  Sx = Kl({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(e, n) {
      return 'xlink:' + n.slice(5).toLowerCase();
    },
  }),
  Cx = Kl({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: xx,
  }),
  kx = Kl({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(e, n) {
      return 'xml:' + n.slice(3).toLowerCase();
    },
  }),
  bD = /[A-Z]/g,
  a1 = /-[a-z]/g,
  vD = /^data[-\w.:]+$/i;
function xD(e, n) {
  const i = yp(n);
  let l = n,
    o = vn;
  if (i in e.normal) return e.property[e.normal[i]];
  if (i.length > 4 && i.slice(0, 4) === 'data' && vD.test(n)) {
    if (n.charAt(4) === '-') {
      const u = n.slice(5).replace(a1, CD);
      l = 'data' + u.charAt(0).toUpperCase() + u.slice(1);
    } else {
      const u = n.slice(4);
      if (!a1.test(u)) {
        let c = u.replace(bD, SD);
        (c.charAt(0) !== '-' && (c = '-' + c), (n = 'data' + c));
      }
    }
    o = ch;
  }
  return new o(l, n);
}
function SD(e) {
  return '-' + e.toLowerCase();
}
function CD(e) {
  return e.charAt(1).toUpperCase();
}
const kD = yx([bx, gD, Sx, Cx, kx], 'html'),
  wx = yx([bx, yD, Sx, Cx, kx], 'svg'),
  wD = /["&'<>`]/g,
  ED = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  TD = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  AD = /[|\\{}()[\]^$+*?.]/g,
  o1 = new WeakMap();
function RD(e, n) {
  if (((e = e.replace(n.subset ? MD(n.subset) : wD, l)), n.subset || n.escapeOnly)) return e;
  return e.replace(ED, i).replace(TD, l);
  function i(o, u, c) {
    return n.format(
      (o.charCodeAt(0) - 55296) * 1024 + o.charCodeAt(1) - 56320 + 65536,
      c.charCodeAt(u + 2),
      n,
    );
  }
  function l(o, u, c) {
    return n.format(o.charCodeAt(0), c.charCodeAt(u + 1), n);
  }
}
function MD(e) {
  let n = o1.get(e);
  return (n || ((n = OD(e)), o1.set(e, n)), n);
}
function OD(e) {
  const n = [];
  let i = -1;
  for (; ++i < e.length; ) n.push(e[i].replace(AD, '\\$&'));
  return new RegExp('(?:' + n.join('|') + ')', 'g');
}
const zD = /[\dA-Fa-f]/;
function DD(e, n, i) {
  const l = '&#x' + e.toString(16).toUpperCase();
  return i && n && !zD.test(String.fromCharCode(n)) ? l : l + ';';
}
const ND = /\d/;
function _D(e, n, i) {
  const l = '&#' + String(e);
  return i && n && !ND.test(String.fromCharCode(n)) ? l : l + ';';
}
const BD = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml',
  ],
  qd = {
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    fnof: 'ƒ',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    bull: '•',
    hellip: '…',
    prime: '′',
    Prime: '″',
    oline: '‾',
    frasl: '⁄',
    weierp: '℘',
    image: 'ℑ',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
    quot: '"',
    amp: '&',
    lt: '<',
    gt: '>',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    circ: 'ˆ',
    tilde: '˜',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    permil: '‰',
    lsaquo: '‹',
    rsaquo: '›',
    euro: '€',
  },
  LD = ['cent', 'copy', 'divide', 'gt', 'lt', 'not', 'para', 'times'],
  Ex = {}.hasOwnProperty,
  xp = {};
let eu;
for (eu in qd) Ex.call(qd, eu) && (xp[qd[eu]] = eu);
const $D = /[^\dA-Za-z]/;
function UD(e, n, i, l) {
  const o = String.fromCharCode(e);
  if (Ex.call(xp, o)) {
    const u = xp[o],
      c = '&' + u;
    return i &&
      BD.includes(u) &&
      !LD.includes(u) &&
      (!l || (n && n !== 61 && $D.test(String.fromCharCode(n))))
      ? c
      : c + ';';
  }
  return '';
}
function jD(e, n, i) {
  let l = DD(e, n, i.omitOptionalSemicolons),
    o;
  if (
    ((i.useNamedReferences || i.useShortestReferences) &&
      (o = UD(e, n, i.omitOptionalSemicolons, i.attribute)),
    (i.useShortestReferences || !o) && i.useShortestReferences)
  ) {
    const u = _D(e, n, i.omitOptionalSemicolons);
    u.length < l.length && (l = u);
  }
  return o && (!i.useShortestReferences || o.length < l.length) ? o : l;
}
function Pl(e, n) {
  return RD(e, Object.assign({ format: jD }, n));
}
const PD = /^>|^->|<!--|-->|--!>|<!-$/g,
  ID = ['>'],
  HD = ['<', '>'];
function qD(e, n, i, l) {
  return l.settings.bogusComments
    ? '<?' + Pl(e.value, Object.assign({}, l.settings.characterReferences, { subset: ID })) + '>'
    : '<!--' + e.value.replace(PD, o) + '-->';
  function o(u) {
    return Pl(u, Object.assign({}, l.settings.characterReferences, { subset: HD }));
  }
}
function FD(e, n, i, l) {
  return (
    '<!' +
    (l.settings.upperDoctype ? 'DOCTYPE' : 'doctype') +
    (l.settings.tightDoctype ? '' : ' ') +
    'html>'
  );
}
function VD(e, n) {
  const i = n || {};
  return (e[e.length - 1] === '' ? [...e, ''] : e)
    .join((i.padRight ? ' ' : '') + ',' + (i.padLeft === !1 ? '' : ' '))
    .trim();
}
function YD(e) {
  return e.join(' ').trim();
}
const GD = /[ \t\n\f\r]/g;
function fh(e) {
  return typeof e == 'object' ? (e.type === 'text' ? s1(e.value) : !1) : s1(e);
}
function s1(e) {
  return e.replace(GD, '') === '';
}
const Ht = Ax(1),
  Tx = Ax(-1),
  XD = [];
function Ax(e) {
  return n;
  function n(i, l, o) {
    const u = i ? i.children : XD;
    let c = (l || 0) + e,
      d = u[c];
    if (!o) for (; d && fh(d); ) ((c += e), (d = u[c]));
    return d;
  }
}
const KD = {}.hasOwnProperty;
function Rx(e) {
  return n;
  function n(i, l, o) {
    return KD.call(e, i.tagName) && e[i.tagName](i, l, o);
  }
}
const dh = Rx({
  body: ZD,
  caption: Fd,
  colgroup: Fd,
  dd: t6,
  dt: e6,
  head: Fd,
  html: QD,
  li: JD,
  optgroup: n6,
  option: r6,
  p: WD,
  rp: u1,
  rt: u1,
  tbody: l6,
  td: c1,
  tfoot: a6,
  th: c1,
  thead: i6,
  tr: o6,
});
function Fd(e, n, i) {
  const l = Ht(i, n, !0);
  return !l || (l.type !== 'comment' && !(l.type === 'text' && fh(l.value.charAt(0))));
}
function QD(e, n, i) {
  const l = Ht(i, n);
  return !l || l.type !== 'comment';
}
function ZD(e, n, i) {
  const l = Ht(i, n);
  return !l || l.type !== 'comment';
}
function WD(e, n, i) {
  const l = Ht(i, n);
  return l
    ? l.type === 'element' &&
        (l.tagName === 'address' ||
          l.tagName === 'article' ||
          l.tagName === 'aside' ||
          l.tagName === 'blockquote' ||
          l.tagName === 'details' ||
          l.tagName === 'div' ||
          l.tagName === 'dl' ||
          l.tagName === 'fieldset' ||
          l.tagName === 'figcaption' ||
          l.tagName === 'figure' ||
          l.tagName === 'footer' ||
          l.tagName === 'form' ||
          l.tagName === 'h1' ||
          l.tagName === 'h2' ||
          l.tagName === 'h3' ||
          l.tagName === 'h4' ||
          l.tagName === 'h5' ||
          l.tagName === 'h6' ||
          l.tagName === 'header' ||
          l.tagName === 'hgroup' ||
          l.tagName === 'hr' ||
          l.tagName === 'main' ||
          l.tagName === 'menu' ||
          l.tagName === 'nav' ||
          l.tagName === 'ol' ||
          l.tagName === 'p' ||
          l.tagName === 'pre' ||
          l.tagName === 'section' ||
          l.tagName === 'table' ||
          l.tagName === 'ul')
    : !i ||
        !(
          i.type === 'element' &&
          (i.tagName === 'a' ||
            i.tagName === 'audio' ||
            i.tagName === 'del' ||
            i.tagName === 'ins' ||
            i.tagName === 'map' ||
            i.tagName === 'noscript' ||
            i.tagName === 'video')
        );
}
function JD(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && l.tagName === 'li');
}
function e6(e, n, i) {
  const l = Ht(i, n);
  return !!(l && l.type === 'element' && (l.tagName === 'dt' || l.tagName === 'dd'));
}
function t6(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && (l.tagName === 'dt' || l.tagName === 'dd'));
}
function u1(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && (l.tagName === 'rp' || l.tagName === 'rt'));
}
function n6(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && l.tagName === 'optgroup');
}
function r6(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && (l.tagName === 'option' || l.tagName === 'optgroup'));
}
function i6(e, n, i) {
  const l = Ht(i, n);
  return !!(l && l.type === 'element' && (l.tagName === 'tbody' || l.tagName === 'tfoot'));
}
function l6(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && (l.tagName === 'tbody' || l.tagName === 'tfoot'));
}
function a6(e, n, i) {
  return !Ht(i, n);
}
function o6(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && l.tagName === 'tr');
}
function c1(e, n, i) {
  const l = Ht(i, n);
  return !l || (l.type === 'element' && (l.tagName === 'td' || l.tagName === 'th'));
}
const s6 = Rx({ body: f6, colgroup: d6, head: c6, html: u6, tbody: p6 });
function u6(e) {
  const n = Ht(e, -1);
  return !n || n.type !== 'comment';
}
function c6(e) {
  const n = new Set();
  for (const l of e.children)
    if (l.type === 'element' && (l.tagName === 'base' || l.tagName === 'title')) {
      if (n.has(l.tagName)) return !1;
      n.add(l.tagName);
    }
  const i = e.children[0];
  return !i || i.type === 'element';
}
function f6(e) {
  const n = Ht(e, -1, !0);
  return (
    !n ||
    (n.type !== 'comment' &&
      !(n.type === 'text' && fh(n.value.charAt(0))) &&
      !(
        n.type === 'element' &&
        (n.tagName === 'meta' ||
          n.tagName === 'link' ||
          n.tagName === 'script' ||
          n.tagName === 'style' ||
          n.tagName === 'template')
      ))
  );
}
function d6(e, n, i) {
  const l = Tx(i, n),
    o = Ht(e, -1, !0);
  return i &&
    l &&
    l.type === 'element' &&
    l.tagName === 'colgroup' &&
    dh(l, i.children.indexOf(l), i)
    ? !1
    : !!(o && o.type === 'element' && o.tagName === 'col');
}
function p6(e, n, i) {
  const l = Tx(i, n),
    o = Ht(e, -1);
  return i &&
    l &&
    l.type === 'element' &&
    (l.tagName === 'thead' || l.tagName === 'tbody') &&
    dh(l, i.children.indexOf(l), i)
    ? !1
    : !!(o && o.type === 'element' && o.tagName === 'tr');
}
const tu = {
  name: [
    [
      `	
\f\r &/=>`.split(''),
      `	
\f\r "&'/=>\``.split(''),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(''),
      `\0	
\f\r "&'/<=>\``.split(''),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(''),
      `\0	
\f\r "&'<=>\``.split(''),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(''),
      `\0	
\f\r "&'<=>\``.split(''),
    ],
  ],
  single: [
    ["&'".split(''), '"&\'`'.split('')],
    ["\0&'".split(''), '\0"&\'`'.split('')],
  ],
  double: [
    ['"&'.split(''), '"&\'`'.split('')],
    ['\0"&'.split(''), '\0"&\'`'.split('')],
  ],
};
function h6(e, n, i, l) {
  const o = l.schema,
    u = o.space === 'svg' ? !1 : l.settings.omitOptionalTags;
  let c =
    o.space === 'svg'
      ? l.settings.closeEmptyElements
      : l.settings.voids.includes(e.tagName.toLowerCase());
  const d = [];
  let h;
  o.space === 'html' && e.tagName === 'svg' && (l.schema = wx);
  const p = m6(l, e.properties),
    g = l.all(o.space === 'html' && e.tagName === 'template' ? e.content : e);
  return (
    (l.schema = o),
    g && (c = !1),
    (p || !u || !s6(e, n, i)) &&
      (d.push('<', e.tagName, p ? ' ' + p : ''),
      c &&
        (o.space === 'svg' || l.settings.closeSelfClosing) &&
        ((h = p.charAt(p.length - 1)),
        (!l.settings.tightSelfClosing || h === '/' || (h && h !== '"' && h !== "'")) && d.push(' '),
        d.push('/')),
      d.push('>')),
    d.push(g),
    !c && (!u || !dh(e, n, i)) && d.push('</' + e.tagName + '>'),
    d.join('')
  );
}
function m6(e, n) {
  const i = [];
  let l = -1,
    o;
  if (n) {
    for (o in n)
      if (n[o] !== null && n[o] !== void 0) {
        const u = g6(e, o, n[o]);
        u && i.push(u);
      }
  }
  for (; ++l < i.length; ) {
    const u = e.settings.tightAttributes ? i[l].charAt(i[l].length - 1) : void 0;
    l !== i.length - 1 && u !== '"' && u !== "'" && (i[l] += ' ');
  }
  return i.join('');
}
function g6(e, n, i) {
  const l = xD(e.schema, n),
    o = e.settings.allowParseErrors && e.schema.space === 'html' ? 0 : 1,
    u = e.settings.allowDangerousCharacters ? 0 : 1;
  let c = e.quote,
    d;
  if (
    (l.overloadedBoolean && (i === l.attribute || i === '')
      ? (i = !0)
      : (l.boolean || l.overloadedBoolean) &&
        (typeof i != 'string' || i === l.attribute || i === '') &&
        (i = !!i),
    i == null || i === !1 || (typeof i == 'number' && Number.isNaN(i)))
  )
    return '';
  const h = Pl(
    l.attribute,
    Object.assign({}, e.settings.characterReferences, { subset: tu.name[o][u] }),
  );
  return i === !0 ||
    ((i = Array.isArray(i)
      ? (l.commaSeparated ? VD : YD)(i, { padLeft: !e.settings.tightCommaSeparatedLists })
      : String(i)),
    e.settings.collapseEmptyAttributes && !i)
    ? h
    : (e.settings.preferUnquoted &&
        (d = Pl(
          i,
          Object.assign({}, e.settings.characterReferences, {
            attribute: !0,
            subset: tu.unquoted[o][u],
          }),
        )),
      d !== i &&
        (e.settings.quoteSmart && vu(i, c) > vu(i, e.alternative) && (c = e.alternative),
        (d =
          c +
          Pl(
            i,
            Object.assign({}, e.settings.characterReferences, {
              subset: (c === "'" ? tu.single : tu.double)[o][u],
              attribute: !0,
            }),
          ) +
          c)),
      h + (d && '=' + d));
}
const y6 = ['<', '&'];
function Mx(e, n, i, l) {
  return i && i.type === 'element' && (i.tagName === 'script' || i.tagName === 'style')
    ? e.value
    : Pl(e.value, Object.assign({}, l.settings.characterReferences, { subset: y6 }));
}
function b6(e, n, i, l) {
  return l.settings.allowDangerousHtml ? e.value : Mx(e, n, i, l);
}
function v6(e, n, i, l) {
  return l.all(e);
}
const x6 = Yz('type', {
  invalid: S6,
  unknown: C6,
  handlers: { comment: qD, doctype: FD, element: h6, raw: b6, root: v6, text: Mx },
});
function S6(e) {
  throw new Error('Expected node, not `' + e + '`');
}
function C6(e) {
  const n = e;
  throw new Error('Cannot compile unknown node `' + n.type + '`');
}
const k6 = {},
  w6 = {},
  E6 = [];
function T6(e, n) {
  const i = n || k6,
    l = i.quote || '"',
    o = l === '"' ? "'" : '"';
  if (l !== '"' && l !== "'") throw new Error('Invalid quote `' + l + '`, expected `\'` or `"`');
  return {
    one: A6,
    all: R6,
    settings: {
      omitOptionalTags: i.omitOptionalTags || !1,
      allowParseErrors: i.allowParseErrors || !1,
      allowDangerousCharacters: i.allowDangerousCharacters || !1,
      quoteSmart: i.quoteSmart || !1,
      preferUnquoted: i.preferUnquoted || !1,
      tightAttributes: i.tightAttributes || !1,
      upperDoctype: i.upperDoctype || !1,
      tightDoctype: i.tightDoctype || !1,
      bogusComments: i.bogusComments || !1,
      tightCommaSeparatedLists: i.tightCommaSeparatedLists || !1,
      tightSelfClosing: i.tightSelfClosing || !1,
      collapseEmptyAttributes: i.collapseEmptyAttributes || !1,
      allowDangerousHtml: i.allowDangerousHtml || !1,
      voids: i.voids || hD,
      characterReferences: i.characterReferences || w6,
      closeSelfClosing: i.closeSelfClosing || !1,
      closeEmptyElements: i.closeEmptyElements || !1,
    },
    schema: i.space === 'svg' ? wx : kD,
    quote: l,
    alternative: o,
  }.one(Array.isArray(e) ? { type: 'root', children: e } : e, void 0, void 0);
}
function A6(e, n, i) {
  return x6(e, n, i, this);
}
function R6(e) {
  const n = [],
    i = (e && e.children) || E6;
  let l = -1;
  for (; ++l < i.length; ) n[l] = this.one(i[l], l, e);
  return n.join('');
}
function M6(e) {
  const n = this,
    i = { ...n.data('settings'), ...e };
  n.compiler = l;
  function l(o) {
    return T6(o, i);
  }
}
class O6 {
  generateHtml(n, i, l) {
    const o = l.coverImage ? this.addVersionParam(l.coverImage) : '';
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.escapeHtml(n)}</title>
    <meta name="description" content="${this.escapeHtml(l.description)}">
    <link rel="canonical" href="${l.canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${this.escapeHtml(n)}">
    <meta property="og:description" content="${this.escapeHtml(l.description)}">
    <meta property="og:url" content="${l.canonicalUrl}">
    ${o ? `<meta property="og:image" content="${o}">` : ''}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${this.escapeHtml(n)}">
    <meta property="twitter:description" content="${this.escapeHtml(l.description)}">
    ${o ? `<meta property="twitter:image" content="${o}">` : ''}
    
    <!-- Article metadata -->
    <meta name="author" content="${this.escapeHtml(l.author)}">
    <meta name="article:published_time" content="${l.publishedAt}">
    ${l.tags.map((u) => `<meta name="article:tag" content="${this.escapeHtml(u)}">`).join(`
    `)}
    
    <style>
        /* Inline CSS for Coder Legion compatibility */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .article-header {
            margin-bottom: 2rem;
        }
        
        .article-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        
        .article-meta {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .article-cover {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 2rem;
        }
        
        .article-content h1, .article-content h2, .article-content h3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        
        .article-content blockquote {
            border-left: 4px solid #e1e8ed;
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
        }
        
        .article-content pre {
            background-color: #f6f8fa;
            border-radius: 6px;
            padding: 1rem;
            overflow-x: auto;
        }
        
        .article-content code {
            background-color: #f6f8fa;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-size: 0.9em;
        }
        
        .article-content pre code {
            background: none;
            padding: 0;
        }
        
        .article-tags {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e1e8ed;
        }
        
        .tag {
            display: inline-block;
            background-color: #f1f3f4;
            color: #5f6368;
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            font-size: 0.8rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .article-footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 2px solid #e1e8ed;
            text-align: center;
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <article>
        <header class="article-header">
            <h1 class="article-title">${this.escapeHtml(n)}</h1>
            <div class="article-meta">
                By <strong>${this.escapeHtml(l.author)}</strong> • 
                Published on ${new Date(l.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            ${o ? `<img src="${o}" alt="${this.escapeHtml(n)}" class="article-cover">` : ''}
        </header>
        
        <div class="article-content">
            ${i}
        </div>
        
        ${
          l.tags.length > 0
            ? `
        <div class="article-tags">
            ${l.tags.map((u) => `<span class="tag">#${this.escapeHtml(u)}</span>`).join('')}
        </div>
        `
            : ''
        }
        
        <footer class="article-footer">
            <p>Originally published at <a href="${l.canonicalUrl}" target="_blank" rel="noopener">${l.canonicalUrl}</a></p>
            <p><em>Converted by Verdent Deck</em> • <a href="mailto:verdent@codeck.ai">verdent@codeck.ai</a></p>
        </footer>
    </article>
</body>
</html>`;
  }
  addVersionParam(n) {
    try {
      const i = new URL(n);
      return (i.searchParams.set('v', '2'), i.toString());
    } catch {
      return n;
    }
  }
  escapeHtml(n) {
    const i = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return n.replace(/[&<>"']/g, (l) => i[l]);
  }
}
const z6 = new O6();
class D6 {
  processor = XM().use(JO).use(y3).use(rD).use(pD).use(M6);
  async convertArticle(n, i) {
    try {
      const l = await this.processor.process(n.body_markdown),
        o = String(l),
        u = {
          title: n.title,
          description: n.description,
          canonicalUrl: i,
          coverImage: n.cover_image,
          author: n.user.name,
          publishedAt: n.published_at,
          tags: n.tag_list,
        };
      return { success: !0, html: z6.generateHtml(n.title, o, u), metadata: u };
    } catch (l) {
      return {
        success: !1,
        error:
          l instanceof Error
            ? `Markdown processing failed: ${l.message}`
            : 'Unknown error during markdown processing',
      };
    }
  }
  async testProcessor() {
    try {
      const i = await this.processor.process(`# Test

This is a **test** markdown.`);
      return String(i).includes('<h1>Test</h1>');
    } catch {
      return !1;
    }
  }
}
const N6 = new D6();
function _6() {
  const [e, n] = D.useState({ loading: !1, error: null, article: null, result: null }),
    i = D.useCallback((u) => C0.isValidDevToUrl(u), []),
    l = D.useCallback(async (u) => {
      n((c) => ({ ...c, loading: !0, error: null, article: null, result: null }));
      try {
        const c = await C0.fetchArticle(u);
        n((p) => ({ ...p, article: c }));
        const d = c.canonical_url || c.url,
          h = await N6.convertArticle(c, d);
        n((p) => ({ ...p, loading: !1, result: h }));
      } catch (c) {
        n((d) => ({
          ...d,
          loading: !1,
          error: c instanceof Error ? c.message : 'Unknown error occurred',
        }));
      }
    }, []),
    o = D.useCallback(() => {
      n({ loading: !1, error: null, article: null, result: null });
    }, []);
  return { ...e, validateUrl: i, convertArticle: l, reset: o };
}
function B6() {
  const [e, n] = D.useState(''),
    {
      loading: i,
      error: l,
      article: o,
      result: u,
      validateUrl: c,
      convertArticle: d,
      reset: h,
    } = _6(),
    p = async (y) => {
      (y.preventDefault(), c(e) && (await d(e)));
    },
    g = (y) => {
      (n(y.target.value), (o || u || l) && h());
    };
  return j.jsxs(Pu, {
    elevation: 2,
    sx: { p: 4, maxWidth: 800, mx: 'auto' },
    children: [
      j.jsx(sr, {
        variant: 'h4',
        component: 'h2',
        gutterBottom: !0,
        children: 'Convert dev.to Article',
      }),
      j.jsx(sr, {
        variant: 'body1',
        color: 'text.secondary',
        sx: { mb: 3 },
        children: 'Enter a dev.to article URL to convert it to Coder Legion compatible HTML',
      }),
      j.jsxs(io, {
        component: 'form',
        onSubmit: p,
        children: [
          j.jsx(EM, {
            fullWidth: !0,
            label: 'dev.to Article URL',
            placeholder: 'https://dev.to/username/article-title-123',
            value: e,
            onChange: g,
            error: e.length > 0 && !c(e),
            helperText:
              e.length > 0 && !c(e)
                ? 'Please enter a valid dev.to URL with article ID'
                : 'Paste the full URL of the dev.to article you want to convert',
            sx: { mb: 3 },
          }),
          j.jsx(_A, {
            type: 'submit',
            variant: 'contained',
            size: 'large',
            disabled: !c(e) || i,
            startIcon: j.jsx(RM, {}),
            sx: { mb: 2 },
            children: i ? 'Converting...' : 'Convert Article',
          }),
          j.jsx(ao, {
            in: !!o && !l,
            children: j.jsxs(wd, {
              severity: 'success',
              icon: j.jsx(AM, {}),
              sx: { mt: 2, mb: 2 },
              children: [
                j.jsx(sr, {
                  variant: 'h6',
                  gutterBottom: !0,
                  children: 'Article fetched successfully!',
                }),
                o &&
                  j.jsxs(io, {
                    children: [
                      j.jsxs(io, {
                        sx: { display: 'flex', alignItems: 'center', mb: 1 },
                        children: [
                          j.jsx(yA, {
                            src: o.user.profile_image_90,
                            alt: o.user.name,
                            sx: { width: 24, height: 24, mr: 1 },
                          }),
                          j.jsxs(sr, {
                            variant: 'body2',
                            children: ['by ', o.user.name, ' (@', o.user.username, ')'],
                          }),
                        ],
                      }),
                      j.jsx(sr, {
                        variant: 'subtitle1',
                        sx: { fontWeight: 'bold' },
                        children: o.title,
                      }),
                      j.jsx(sr, {
                        variant: 'body2',
                        color: 'text.secondary',
                        sx: { mb: 1 },
                        children: o.description,
                      }),
                      j.jsx(io, {
                        sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                        children: o.tag_list.map((y) =>
                          j.jsx(JT, { label: y, size: 'small', variant: 'outlined' }, y),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          }),
          j.jsx(ao, {
            in: !!u,
            children: j.jsx(wd, {
              severity: u?.success ? 'success' : 'warning',
              sx: { mt: 2 },
              children: u?.success
                ? j.jsx(sr, { children: 'Conversion completed successfully!' })
                : j.jsx(sr, { children: u?.error || 'Conversion failed' }),
            }),
          }),
          j.jsx(ao, {
            in: !!l,
            children: j.jsx(wd, { severity: 'error', sx: { mt: 2 }, children: l }),
          }),
        ],
      }),
    ],
  });
}
const L6 = Uu({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#fafafa' },
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
});
function $6() {
  return j.jsxs(TE, {
    theme: L6,
    children: [
      j.jsx(PA, {}),
      j.jsxs(io, {
        sx: { minHeight: '100vh', bgcolor: 'background.default' },
        children: [
          j.jsx(MM, {}),
          j.jsx(BA, { maxWidth: 'lg', sx: { py: 4 }, children: j.jsx(B6, {}) }),
        ],
      }),
    ],
  });
}
WC.createRoot(document.getElementById('root')).render(
  j.jsx(Kn.StrictMode, { children: j.jsx($6, {}) }),
);
