(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ja = { exports: {} },
  Ci = {},
  Pa = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  ld = Symbol.for("react.portal"),
  sd = Symbol.for("react.fragment"),
  od = Symbol.for("react.strict_mode"),
  ad = Symbol.for("react.profiler"),
  ud = Symbol.for("react.provider"),
  cd = Symbol.for("react.context"),
  dd = Symbol.for("react.forward_ref"),
  fd = Symbol.for("react.suspense"),
  pd = Symbol.for("react.memo"),
  md = Symbol.for("react.lazy"),
  po = Symbol.iterator;
function hd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (po && e[po]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var La = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ma = Object.assign,
  za = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || La);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ia() {}
Ia.prototype = wn.prototype;
function vs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || La);
}
var gs = (vs.prototype = new Ia());
gs.constructor = vs;
Ma(gs, wn.prototype);
gs.isPureReactComponent = !0;
var mo = Array.isArray,
  Oa = Object.prototype.hasOwnProperty,
  ys = { current: null },
  Da = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ra(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Oa.call(t, r) && !Da.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), d = 0; d < a; d++) o[d] = arguments[d + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: cr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: ys.current,
  };
}
function vd(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ws(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ho = /\/+/g;
function Bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gd("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case ld:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Bi(s, 0) : r),
      mo(i)
        ? ((n = ""),
          e != null && (n = e.replace(ho, "$&/") + "/"),
          Rr(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          (ws(i) &&
            (i = vd(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ho, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), mo(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Bi(l, a);
      s += Rr(l, t, n, o, i);
    }
  else if (((o = hd(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Bi(l, a++)), (s += Rr(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Rr(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function yd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  Ar = { transition: null },
  wd = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: ys,
  };
A.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ws(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = wn;
A.Fragment = sd;
A.Profiler = ad;
A.PureComponent = vs;
A.StrictMode = od;
A.Suspense = fd;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wd;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ma({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = ys.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      Oa.call(t, o) &&
        !Da.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var d = 0; d < o; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: cr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: cd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ud, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Ra;
A.createFactory = function (e) {
  var t = Ra.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: dd, render: e };
};
A.isValidElement = ws;
A.lazy = function (e) {
  return { $$typeof: md, _payload: { _status: -1, _result: e }, _init: yd };
};
A.memo = function (e, t) {
  return { $$typeof: pd, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
A.useContext = function (e) {
  return he.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
A.useId = function () {
  return he.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return he.current.useRef(e);
};
A.useState = function (e) {
  return he.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return he.current.useTransition();
};
A.version = "18.2.0";
Pa.exports = A;
var V = Pa.exports;
const ee = id(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd = V,
  Sd = Symbol.for("react.element"),
  _d = Symbol.for("react.fragment"),
  Ed = Object.prototype.hasOwnProperty,
  Cd = xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Aa(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ed.call(t, r) && !kd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Sd,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Cd.current,
  };
}
Ci.Fragment = _d;
Ci.jsx = Aa;
Ci.jsxs = Aa;
ja.exports = Ci;
var c = ja.exports,
  wl = {},
  Fa = { exports: {} },
  Ne = {},
  $a = { exports: {} },
  Va = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, I) {
    var D = M.length;
    M.push(I);
    e: for (; 0 < D; ) {
      var b = (D - 1) >>> 1,
        J = M[b];
      if (0 < i(J, I)) (M[b] = I), (M[D] = J), (D = b);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var I = M[0],
      D = M.pop();
    if (D !== I) {
      M[0] = D;
      e: for (var b = 0, J = M.length, hr = J >>> 1; b < hr; ) {
        var jt = 2 * (b + 1) - 1,
          Vi = M[jt],
          Pt = jt + 1,
          vr = M[Pt];
        if (0 > i(Vi, D))
          Pt < J && 0 > i(vr, Vi)
            ? ((M[b] = vr), (M[Pt] = D), (b = Pt))
            : ((M[b] = Vi), (M[jt] = D), (b = jt));
        else if (Pt < J && 0 > i(vr, D)) (M[b] = vr), (M[Pt] = D), (b = Pt);
        else break e;
      }
    }
    return I;
  }
  function i(M, I) {
    var D = M.sortIndex - I.sortIndex;
    return D !== 0 ? D : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    d = [],
    p = 1,
    h = null,
    v = 3,
    y = !1,
    w = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(M) {
    for (var I = n(d); I !== null; ) {
      if (I.callback === null) r(d);
      else if (I.startTime <= M)
        r(d), (I.sortIndex = I.expirationTime), t(o, I);
      else break;
      I = n(d);
    }
  }
  function g(M) {
    if (((x = !1), f(M), !w))
      if (n(o) !== null) (w = !0), Z(S);
      else {
        var I = n(d);
        I !== null && Nt(g, I.startTime - M);
      }
  }
  function S(M, I) {
    (w = !1), x && ((x = !1), m(k), (k = -1)), (y = !0);
    var D = v;
    try {
      for (
        f(I), h = n(o);
        h !== null && (!(h.expirationTime > I) || (M && !P()));

      ) {
        var b = h.callback;
        if (typeof b == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var J = b(h.expirationTime <= I);
          (I = e.unstable_now()),
            typeof J == "function" ? (h.callback = J) : h === n(o) && r(o),
            f(I);
        } else r(o);
        h = n(o);
      }
      if (h !== null) var hr = !0;
      else {
        var jt = n(d);
        jt !== null && Nt(g, jt.startTime - I), (hr = !1);
      }
      return hr;
    } finally {
      (h = null), (v = D), (y = !1);
    }
  }
  var E = !1,
    N = null,
    k = -1,
    T = 5,
    _ = -1;
  function P() {
    return !(e.unstable_now() - _ < T);
  }
  function O() {
    if (N !== null) {
      var M = e.unstable_now();
      _ = M;
      var I = !0;
      try {
        I = N(!0, M);
      } finally {
        I ? L() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var L;
  if (typeof u == "function")
    L = function () {
      u(O);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      F = R.port2;
    (R.port1.onmessage = O),
      (L = function () {
        F.postMessage(null);
      });
  } else
    L = function () {
      j(O, 0);
    };
  function Z(M) {
    (N = M), E || ((E = !0), L());
  }
  function Nt(M, I) {
    k = j(function () {
      M(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), Z(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (M) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = v;
      }
      var D = v;
      v = I;
      try {
        return M();
      } finally {
        v = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, I) {
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
      var D = v;
      v = M;
      try {
        return I();
      } finally {
        v = D;
      }
    }),
    (e.unstable_scheduleCallback = function (M, I, D) {
      var b = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? b + D : b))
          : (D = b),
        M)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = D + J),
        (M = {
          id: p++,
          callback: I,
          priorityLevel: M,
          startTime: D,
          expirationTime: J,
          sortIndex: -1,
        }),
        D > b
          ? ((M.sortIndex = D),
            t(d, M),
            n(o) === null &&
              M === n(d) &&
              (x ? (m(k), (k = -1)) : (x = !0), Nt(g, D - b)))
          : ((M.sortIndex = J), t(o, M), w || y || ((w = !0), Z(S))),
        M
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (M) {
      var I = v;
      return function () {
        var D = v;
        v = I;
        try {
          return M.apply(this, arguments);
        } finally {
          v = D;
        }
      };
    });
})(Va);
$a.exports = Va;
var Td = $a.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ba = V,
  Te = Td;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ha = new Set(),
  bn = {};
function Gt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (bn[e] = t, e = 0; e < t.length; e++) Ha.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xl = Object.prototype.hasOwnProperty,
  Nd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vo = {},
  go = {};
function jd(e) {
  return xl.call(go, e)
    ? !0
    : xl.call(vo, e)
    ? !1
    : Nd.test(e)
    ? (go[e] = !0)
    : ((vo[e] = !0), !1);
}
function Pd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ld(e, t, n, r) {
  if (t === null || typeof t > "u" || Pd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xs = /[\-:]([a-z])/g;
function Ss(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xs, Ss);
    ae[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xs, Ss);
    ae[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xs, Ss);
  ae[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _s(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ld(t, n, i, r) && (n = null),
    r || i === null
      ? jd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  bt = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  Es = Symbol.for("react.strict_mode"),
  Sl = Symbol.for("react.profiler"),
  Ga = Symbol.for("react.provider"),
  Wa = Symbol.for("react.context"),
  Cs = Symbol.for("react.forward_ref"),
  _l = Symbol.for("react.suspense"),
  El = Symbol.for("react.suspense_list"),
  ks = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Ua = Symbol.for("react.offscreen"),
  yo = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yo && e[yo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Hi;
function zn(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Gi = !1;
function Wi(e, t) {
  if (!e || Gi) return "";
  Gi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Gi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Md(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wi(e.type, !1)), e;
    case 11:
      return (e = Wi(e.type.render, !1)), e;
    case 1:
      return (e = Wi(e.type, !0)), e;
    default:
      return "";
  }
}
function Cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case bt:
      return "Portal";
    case Sl:
      return "Profiler";
    case Es:
      return "StrictMode";
    case _l:
      return "Suspense";
    case El:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wa:
        return (e.displayName || "Context") + ".Consumer";
      case Ga:
        return (e._context.displayName || "Context") + ".Provider";
      case Cs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ks:
        return (
          (t = e.displayName || null), t !== null ? t : Cl(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return Cl(e(t));
        } catch {}
    }
  return null;
}
function zd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cl(t);
    case 8:
      return t === Es ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ba(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Id(e) {
  var t = ba(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Id(e));
}
function Qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ba(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kl(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ya(e, t) {
  (t = t.checked), t != null && _s(e, "checked", t, !1);
}
function Tl(e, t) {
  Ya(e, t);
  var n = _t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Nl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Nl(e, t.type, _t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Nl(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function So(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (In(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Xa(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _o(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ka(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ka(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xr,
  Za = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xr = xr || document.createElement("div"),
          xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Od = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  Od.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function qa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ja(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = qa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Dd = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ll(e, t) {
  if (t) {
    if (Dd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ml(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zl = null;
function Ts(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Il = null,
  sn = null,
  on = null;
function Eo(e) {
  if ((e = pr(e))) {
    if (typeof Il != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Pi(t)), Il(e.stateNode, e.type, t));
  }
}
function eu(e) {
  sn ? (on ? on.push(e) : (on = [e])) : (sn = e);
}
function tu() {
  if (sn) {
    var e = sn,
      t = on;
    if (((on = sn = null), Eo(e), t)) for (e = 0; e < t.length; e++) Eo(t[e]);
  }
}
function nu(e, t) {
  return e(t);
}
function ru() {}
var Ui = !1;
function iu(e, t, n) {
  if (Ui) return e(t, n);
  Ui = !0;
  try {
    return nu(e, t, n);
  } finally {
    (Ui = !1), (sn !== null || on !== null) && (ru(), tu());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ol = !1;
if (tt)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Ol = !1;
  }
function Rd(e, t, n, r, i, l, s, a, o) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var An = !1,
  Kr = null,
  Zr = !1,
  Dl = null,
  Ad = {
    onError: function (e) {
      (An = !0), (Kr = e);
    },
  };
function Fd(e, t, n, r, i, l, s, a, o) {
  (An = !1), (Kr = null), Rd.apply(Ad, arguments);
}
function $d(e, t, n, r, i, l, s, a, o) {
  if ((Fd.apply(this, arguments), An)) {
    if (An) {
      var d = Kr;
      (An = !1), (Kr = null);
    } else throw Error(C(198));
    Zr || ((Zr = !0), (Dl = d));
  }
}
function Wt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Co(e) {
  if (Wt(e) !== e) throw Error(C(188));
}
function Vd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Co(i), e;
        if (l === r) return Co(i), t;
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function su(e) {
  return (e = Vd(e)), e !== null ? ou(e) : null;
}
function ou(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ou(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var au = Te.unstable_scheduleCallback,
  ko = Te.unstable_cancelCallback,
  Bd = Te.unstable_shouldYield,
  Hd = Te.unstable_requestPaint,
  q = Te.unstable_now,
  Gd = Te.unstable_getCurrentPriorityLevel,
  Ns = Te.unstable_ImmediatePriority,
  uu = Te.unstable_UserBlockingPriority,
  qr = Te.unstable_NormalPriority,
  Wd = Te.unstable_LowPriority,
  cu = Te.unstable_IdlePriority,
  ki = null,
  Qe = null;
function Ud(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Yd,
  bd = Math.log,
  Qd = Math.LN2;
function Yd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bd(e) / Qd) | 0)) | 0;
}
var Sr = 64,
  _r = 4194304;
function On(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = On(a)) : ((l &= s), l !== 0 && (r = On(l)));
  } else (s = n & ~i), s !== 0 ? (r = On(s)) : l !== 0 && (r = On(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Xd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Ve(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = Xd(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Rl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function du() {
  var e = Sr;
  return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function bi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function Zd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ve(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function js(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function fu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pu,
  Ps,
  mu,
  hu,
  vu,
  Al = !1,
  Er = [],
  mt = null,
  ht = null,
  vt = null,
  Xn = new Map(),
  Kn = new Map(),
  ut = [],
  qd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function To(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = pr(t)), t !== null && Ps(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Jd(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (mt = kn(mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (ht = kn(ht, e, t, n, r, i)), !0;
    case "mouseover":
      return (vt = kn(vt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Xn.set(l, kn(Xn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Kn.set(l, kn(Kn.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function gu(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lu(n)), t !== null)) {
          (e.blockedOn = t),
            vu(e.priority, function () {
              mu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zl = r), n.target.dispatchEvent(r), (zl = null);
    } else return (t = pr(n)), t !== null && Ps(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function No(e, t, n) {
  Fr(e) && n.delete(t);
}
function ef() {
  (Al = !1),
    mt !== null && Fr(mt) && (mt = null),
    ht !== null && Fr(ht) && (ht = null),
    vt !== null && Fr(vt) && (vt = null),
    Xn.forEach(No),
    Kn.forEach(No);
}
function Tn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Al ||
      ((Al = !0),
      Te.unstable_scheduleCallback(Te.unstable_NormalPriority, ef)));
}
function Zn(e) {
  function t(i) {
    return Tn(i, e);
  }
  if (0 < Er.length) {
    Tn(Er[0], e);
    for (var n = 1; n < Er.length; n++) {
      var r = Er[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Tn(mt, e),
      ht !== null && Tn(ht, e),
      vt !== null && Tn(vt, e),
      Xn.forEach(t),
      Kn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    gu(n), n.blockedOn === null && ut.shift();
}
var an = lt.ReactCurrentBatchConfig,
  ei = !0;
function tf(e, t, n, r) {
  var i = B,
    l = an.transition;
  an.transition = null;
  try {
    (B = 1), Ls(e, t, n, r);
  } finally {
    (B = i), (an.transition = l);
  }
}
function nf(e, t, n, r) {
  var i = B,
    l = an.transition;
  an.transition = null;
  try {
    (B = 4), Ls(e, t, n, r);
  } finally {
    (B = i), (an.transition = l);
  }
}
function Ls(e, t, n, r) {
  if (ei) {
    var i = Fl(e, t, n, r);
    if (i === null) nl(e, t, r, ti, n), To(e, r);
    else if (Jd(i, e, t, n, r)) r.stopPropagation();
    else if ((To(e, r), t & 4 && -1 < qd.indexOf(e))) {
      for (; i !== null; ) {
        var l = pr(i);
        if (
          (l !== null && pu(l),
          (l = Fl(e, t, n, r)),
          l === null && nl(e, t, r, ti, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else nl(e, t, r, null, n);
  }
}
var ti = null;
function Fl(e, t, n, r) {
  if (((ti = null), (e = Ts(r)), (e = zt(e)), e !== null))
    if (((t = Wt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ti = e), null;
}
function yu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gd()) {
        case Ns:
          return 1;
        case uu:
          return 4;
        case qr:
        case Wd:
          return 16;
        case cu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  Ms = null,
  $r = null;
function wu() {
  if ($r) return $r;
  var e,
    t = Ms,
    n = t.length,
    r,
    i = "value" in dt ? dt.value : dt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return ($r = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Vr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function jo() {
  return !1;
}
function je(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Cr
        : jo),
      (this.isPropagationStopped = jo),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zs = je(xn),
  fr = X({}, xn, { view: 0, detail: 0 }),
  rf = je(fr),
  Qi,
  Yi,
  Nn,
  Ti = X({}, fr, {
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
    getModifierState: Is,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((Qi = e.screenX - Nn.screenX), (Yi = e.screenY - Nn.screenY))
              : (Yi = Qi = 0),
            (Nn = e)),
          Qi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yi;
    },
  }),
  Po = je(Ti),
  lf = X({}, Ti, { dataTransfer: 0 }),
  sf = je(lf),
  of = X({}, fr, { relatedTarget: 0 }),
  Xi = je(of),
  af = X({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uf = je(af),
  cf = X({}, xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = je(cf),
  ff = X({}, xn, { data: 0 }),
  Lo = je(ff),
  pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hf[e]) ? !!t[e] : !1;
}
function Is() {
  return vf;
}
var gf = X({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = pf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Is,
    charCode: function (e) {
      return e.type === "keypress" ? Vr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yf = je(gf),
  wf = X({}, Ti, {
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
  Mo = je(wf),
  xf = X({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Is,
  }),
  Sf = je(xf),
  _f = X({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = je(_f),
  Cf = X({}, Ti, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kf = je(Cf),
  Tf = [9, 13, 27, 32],
  Os = tt && "CompositionEvent" in window,
  Fn = null;
tt && "documentMode" in document && (Fn = document.documentMode);
var Nf = tt && "TextEvent" in window && !Fn,
  xu = tt && (!Os || (Fn && 8 < Fn && 11 >= Fn)),
  zo = String.fromCharCode(32),
  Io = !1;
function Su(e, t) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _u(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function jf(e, t) {
  switch (e) {
    case "compositionend":
      return _u(t);
    case "keypress":
      return t.which !== 32 ? null : ((Io = !0), zo);
    case "textInput":
      return (e = t.data), e === zo && Io ? null : e;
    default:
      return null;
  }
}
function Pf(e, t) {
  if (Yt)
    return e === "compositionend" || (!Os && Su(e, t))
      ? ((e = wu()), ($r = Ms = dt = null), (Yt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lf[e.type] : t === "textarea";
}
function Eu(e, t, n, r) {
  eu(r),
    (t = ni(t, "onChange")),
    0 < t.length &&
      ((n = new zs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $n = null,
  qn = null;
function Mf(e) {
  Ou(e, 0);
}
function Ni(e) {
  var t = Zt(e);
  if (Qa(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var Cu = !1;
if (tt) {
  var Ki;
  if (tt) {
    var Zi = "oninput" in document;
    if (!Zi) {
      var Do = document.createElement("div");
      Do.setAttribute("oninput", "return;"),
        (Zi = typeof Do.oninput == "function");
    }
    Ki = Zi;
  } else Ki = !1;
  Cu = Ki && (!document.documentMode || 9 < document.documentMode);
}
function Ro() {
  $n && ($n.detachEvent("onpropertychange", ku), (qn = $n = null));
}
function ku(e) {
  if (e.propertyName === "value" && Ni(qn)) {
    var t = [];
    Eu(t, qn, e, Ts(e)), iu(Mf, t);
  }
}
function If(e, t, n) {
  e === "focusin"
    ? (Ro(), ($n = t), (qn = n), $n.attachEvent("onpropertychange", ku))
    : e === "focusout" && Ro();
}
function Of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ni(qn);
}
function Df(e, t) {
  if (e === "click") return Ni(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return Ni(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : Af;
function Jn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!xl.call(t, i) || !He(e[i], t[i])) return !1;
  }
  return !0;
}
function Ao(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fo(e, t) {
  var n = Ao(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ao(n);
  }
}
function Tu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nu() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ff(e) {
  var t = Nu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ds(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Fo(n, l));
        var s = Fo(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $f = tt && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  $l = null,
  Vn = null,
  Vl = !1;
function $o(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vl ||
    Xt == null ||
    Xt !== Xr(r) ||
    ((r = Xt),
    "selectionStart" in r && Ds(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vn && Jn(Vn, r)) ||
      ((Vn = r),
      (r = ni($l, "onSelect")),
      0 < r.length &&
        ((t = new zs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kt = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd"),
  },
  qi = {},
  ju = {};
tt &&
  ((ju = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  "TransitionEvent" in window || delete Kt.transitionend.transition);
function ji(e) {
  if (qi[e]) return qi[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ju) return (qi[e] = t[n]);
  return e;
}
var Pu = ji("animationend"),
  Lu = ji("animationiteration"),
  Mu = ji("animationstart"),
  zu = ji("transitionend"),
  Iu = new Map(),
  Vo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ct(e, t) {
  Iu.set(e, t), Gt(t, [e]);
}
for (var Ji = 0; Ji < Vo.length; Ji++) {
  var el = Vo[Ji],
    Vf = el.toLowerCase(),
    Bf = el[0].toUpperCase() + el.slice(1);
  Ct(Vf, "on" + Bf);
}
Ct(Pu, "onAnimationEnd");
Ct(Lu, "onAnimationIteration");
Ct(Mu, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(zu, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function Bo(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $d(r, t, void 0, e), (e.currentTarget = null);
}
function Ou(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Bo(i, a, d), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Bo(i, a, d), (l = o);
        }
    }
  }
  if (Zr) throw ((e = Dl), (Zr = !1), (Dl = null), e);
}
function G(e, t) {
  var n = t[Ul];
  n === void 0 && (n = t[Ul] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Du(t, e, 2, !1), n.add(r));
}
function tl(e, t, n) {
  var r = 0;
  t && (r |= 4), Du(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Tr]) {
    (e[Tr] = !0),
      Ha.forEach(function (n) {
        n !== "selectionchange" && (Hf.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), tl("selectionchange", !1, t));
  }
}
function Du(e, t, n, r) {
  switch (yu(t)) {
    case 1:
      var i = tf;
      break;
    case 4:
      i = nf;
      break;
    default:
      i = Ls;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function nl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = zt(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  iu(function () {
    var d = l,
      p = Ts(n),
      h = [];
    e: {
      var v = Iu.get(e);
      if (v !== void 0) {
        var y = zs,
          w = e;
        switch (e) {
          case "keypress":
            if (Vr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = yf;
            break;
          case "focusin":
            (w = "focus"), (y = Xi);
            break;
          case "focusout":
            (w = "blur"), (y = Xi);
            break;
          case "beforeblur":
          case "afterblur":
            y = Xi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Po;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Sf;
            break;
          case Pu:
          case Lu:
          case Mu:
            y = uf;
            break;
          case zu:
            y = Ef;
            break;
          case "scroll":
            y = rf;
            break;
          case "wheel":
            y = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Mo;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          m = x ? (v !== null ? v + "Capture" : null) : v;
        x = [];
        for (var u = d, f; u !== null; ) {
          f = u;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              m !== null && ((g = Yn(u, m)), g != null && x.push(tr(u, g, f)))),
            j)
          )
            break;
          u = u.return;
        }
        0 < x.length &&
          ((v = new y(v, w, null, n, p)), h.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          v &&
            n !== zl &&
            (w = n.relatedTarget || n.fromElement) &&
            (zt(w) || w[nt]))
        )
          break e;
        if (
          (y || v) &&
          ((v =
            p.window === p
              ? p
              : (v = p.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = d),
              (w = w ? zt(w) : null),
              w !== null &&
                ((j = Wt(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = d)),
          y !== w)
        ) {
          if (
            ((x = Po),
            (g = "onMouseLeave"),
            (m = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Mo),
              (g = "onPointerLeave"),
              (m = "onPointerEnter"),
              (u = "pointer")),
            (j = y == null ? v : Zt(y)),
            (f = w == null ? v : Zt(w)),
            (v = new x(g, u + "leave", y, n, p)),
            (v.target = j),
            (v.relatedTarget = f),
            (g = null),
            zt(p) === d &&
              ((x = new x(m, u + "enter", w, n, p)),
              (x.target = f),
              (x.relatedTarget = j),
              (g = x)),
            (j = g),
            y && w)
          )
            t: {
              for (x = y, m = w, u = 0, f = x; f; f = Ut(f)) u++;
              for (f = 0, g = m; g; g = Ut(g)) f++;
              for (; 0 < u - f; ) (x = Ut(x)), u--;
              for (; 0 < f - u; ) (m = Ut(m)), f--;
              for (; u--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Ut(x)), (m = Ut(m));
              }
              x = null;
            }
          else x = null;
          y !== null && Ho(h, v, y, x, !1),
            w !== null && j !== null && Ho(h, j, w, x, !0);
        }
      }
      e: {
        if (
          ((v = d ? Zt(d) : window),
          (y = v.nodeName && v.nodeName.toLowerCase()),
          y === "select" || (y === "input" && v.type === "file"))
        )
          var S = zf;
        else if (Oo(v))
          if (Cu) S = Rf;
          else {
            S = Of;
            var E = If;
          }
        else
          (y = v.nodeName) &&
            y.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (S = Df);
        if (S && (S = S(e, d))) {
          Eu(h, S, n, p);
          break e;
        }
        E && E(e, v, d),
          e === "focusout" &&
            (E = v._wrapperState) &&
            E.controlled &&
            v.type === "number" &&
            Nl(v, "number", v.value);
      }
      switch (((E = d ? Zt(d) : window), e)) {
        case "focusin":
          (Oo(E) || E.contentEditable === "true") &&
            ((Xt = E), ($l = d), (Vn = null));
          break;
        case "focusout":
          Vn = $l = Xt = null;
          break;
        case "mousedown":
          Vl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vl = !1), $o(h, n, p);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          $o(h, n, p);
      }
      var N;
      if (Os)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Yt
          ? Su(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (xu &&
          n.locale !== "ko" &&
          (Yt || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Yt && (N = wu())
            : ((dt = p),
              (Ms = "value" in dt ? dt.value : dt.textContent),
              (Yt = !0))),
        (E = ni(d, k)),
        0 < E.length &&
          ((k = new Lo(k, e, null, n, p)),
          h.push({ event: k, listeners: E }),
          N ? (k.data = N) : ((N = _u(n)), N !== null && (k.data = N)))),
        (N = Nf ? jf(e, n) : Pf(e, n)) &&
          ((d = ni(d, "onBeforeInput")),
          0 < d.length &&
            ((p = new Lo("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: d }),
            (p.data = N)));
    }
    Ou(h, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ni(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Yn(e, n)),
      l != null && r.unshift(tr(e, l, i)),
      (l = Yn(e, t)),
      l != null && r.push(tr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ho(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      d = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      i
        ? ((o = Yn(n, l)), o != null && s.unshift(tr(n, o, a)))
        : i || ((o = Yn(n, l)), o != null && s.push(tr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gf = /\r\n?/g,
  Wf = /\u0000|\uFFFD/g;
function Go(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gf,
      `
`
    )
    .replace(Wf, "");
}
function Nr(e, t, n) {
  if (((t = Go(t)), Go(e) !== t && n)) throw Error(C(425));
}
function ri() {}
var Bl = null,
  Hl = null;
function Gl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wl = typeof setTimeout == "function" ? setTimeout : void 0,
  Uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wo = typeof Promise == "function" ? Promise : void 0,
  bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wo < "u"
      ? function (e) {
          return Wo.resolve(null).then(e).catch(Qf);
        }
      : Wl;
function Qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function rl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Zn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Zn(t);
}
function gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Uo(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + Sn,
  nr = "__reactProps$" + Sn,
  nt = "__reactContainer$" + Sn,
  Ul = "__reactEvents$" + Sn,
  Yf = "__reactListeners$" + Sn,
  Xf = "__reactHandles$" + Sn;
function zt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uo(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Uo(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Ue] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Pi(e) {
  return e[nr] || null;
}
var bl = [],
  qt = -1;
function kt(e) {
  return { current: e };
}
function W(e) {
  0 > qt || ((e.current = bl[qt]), (bl[qt] = null), qt--);
}
function H(e, t) {
  qt++, (bl[qt] = e.current), (e.current = t);
}
var Et = {},
  fe = kt(Et),
  we = kt(!1),
  At = Et;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function ii() {
  W(we), W(fe);
}
function bo(e, t, n) {
  if (fe.current !== Et) throw Error(C(168));
  H(fe, t), H(we, n);
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, zd(e) || "Unknown", i));
  return X({}, n, r);
}
function li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
    (At = fe.current),
    H(fe, e),
    H(we, we.current),
    !0
  );
}
function Qo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Ru(e, t, At)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(we),
      W(fe),
      H(fe, e))
    : W(we),
    H(we, n);
}
var Ze = null,
  Li = !1,
  il = !1;
function Au(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Kf(e) {
  (Li = !0), Au(e);
}
function Tt() {
  if (!il && Ze !== null) {
    il = !0;
    var e = 0,
      t = B;
    try {
      var n = Ze;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (Li = !1);
    } catch (i) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), au(Ns, Tt), i);
    } finally {
      (B = t), (il = !1);
    }
  }
  return null;
}
var Jt = [],
  en = 0,
  si = null,
  oi = 0,
  Le = [],
  Me = 0,
  Ft = null,
  qe = 1,
  Je = "";
function Lt(e, t) {
  (Jt[en++] = oi), (Jt[en++] = si), (si = e), (oi = t);
}
function Fu(e, t, n) {
  (Le[Me++] = qe), (Le[Me++] = Je), (Le[Me++] = Ft), (Ft = e);
  var r = qe;
  e = Je;
  var i = 32 - Ve(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ve(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (qe = (1 << (32 - Ve(t) + i)) | (n << i) | r),
      (Je = l + e);
  } else (qe = (1 << l) | (n << i) | r), (Je = e);
}
function Rs(e) {
  e.return !== null && (Lt(e, 1), Fu(e, 1, 0));
}
function As(e) {
  for (; e === si; )
    (si = Jt[--en]), (Jt[en] = null), (oi = Jt[--en]), (Jt[en] = null);
  for (; e === Ft; )
    (Ft = Le[--Me]),
      (Le[Me] = null),
      (Je = Le[--Me]),
      (Le[Me] = null),
      (qe = Le[--Me]),
      (Le[Me] = null);
}
var ke = null,
  Ce = null,
  U = !1,
  $e = null;
function $u(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Ce = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: qe, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (U) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Yo(e, t)) {
        if (Ql(e)) throw Error(C(418));
        t = gt(n.nextSibling);
        var r = ke;
        t && Yo(e, t)
          ? $u(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e));
      }
    } else {
      if (Ql(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e);
    }
  }
}
function Xo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function jr(e) {
  if (e !== ke) return !1;
  if (!U) return Xo(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Ql(e)) throw (Vu(), Error(C(418)));
    for (; t; ) $u(e, t), (t = gt(t.nextSibling));
  }
  if ((Xo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = ke ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Vu() {
  for (var e = Ce; e; ) e = gt(e.nextSibling);
}
function mn() {
  (Ce = ke = null), (U = !1);
}
function Fs(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var Zf = lt.ReactCurrentBatchConfig;
function Ae(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ai = kt(null),
  ui = null,
  tn = null,
  $s = null;
function Vs() {
  $s = tn = ui = null;
}
function Bs(e) {
  var t = ai.current;
  W(ai), (e._currentValue = t);
}
function Xl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function un(e, t) {
  (ui = e),
    ($s = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if ($s !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (ui === null) throw Error(C(308));
      (tn = e), (ui.dependencies = { lanes: 0, firstContext: e });
    } else tn = tn.next = e;
  return t;
}
var It = null;
function Hs(e) {
  It === null ? (It = [e]) : It.push(e);
}
function Bu(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Hs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Gs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Hs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function Br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), js(e, n);
  }
}
function Ko(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ci(e, t, n, r) {
  var i = e.updateQueue;
  at = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      d = o.next;
    (o.next = null), s === null ? (l = d) : (s.next = d), (s = o);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== s &&
        (a === null ? (p.firstBaseUpdate = d) : (a.next = d),
        (p.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var h = i.baseState;
    (s = 0), (p = d = o = null), (a = l);
    do {
      var v = a.lane,
        y = a.eventTime;
      if ((r & v) === v) {
        p !== null &&
          (p = p.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            x = a;
          switch (((v = t), (y = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                h = w.call(y, h, v);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (v = typeof w == "function" ? w.call(y, h, v) : w),
                v == null)
              )
                break e;
              h = X({}, h, v);
              break e;
            case 2:
              at = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [a]) : v.push(a));
      } else
        (y = {
          eventTime: y,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((d = p = y), (o = h)) : (p = p.next = y),
          (s |= v);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (o = h),
      (i.baseState = o),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Vt |= s), (e.lanes = s), (e.memoizedState = h);
  }
}
function Zo(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Gu = new Ba.Component().refs;
function Kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = xt(e),
      l = et(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = yt(e, l, i)),
      t !== null && (Be(t, e, i, r), Br(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = xt(e),
      l = et(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = yt(e, l, i)),
      t !== null && (Be(t, e, i, r), Br(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = xt(e),
      i = et(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = yt(e, i, r)),
      t !== null && (Be(t, e, r, n), Br(t, e, r));
  },
};
function qo(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jn(n, r) || !Jn(i, l)
      : !0
  );
}
function Wu(e, t, n) {
  var r = !1,
    i = Et,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Oe(l))
      : ((i = xe(t) ? At : fe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? pn(e, i) : Et)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Jo(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mi.enqueueReplaceState(t, t.state, null);
}
function Zl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Gu), Gs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Oe(l))
    : ((l = xe(t) ? At : fe.current), (i.context = pn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Kl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Mi.enqueueReplaceState(i, i.state, null),
      ci(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Gu && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ea(e) {
  var t = e._init;
  return t(e._payload);
}
function Uu(e) {
  function t(m, u) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [u]), (m.flags |= 16)) : f.push(u);
    }
  }
  function n(m, u) {
    if (!e) return null;
    for (; u !== null; ) t(m, u), (u = u.sibling);
    return null;
  }
  function r(m, u) {
    for (m = new Map(); u !== null; )
      u.key !== null ? m.set(u.key, u) : m.set(u.index, u), (u = u.sibling);
    return m;
  }
  function i(m, u) {
    return (m = St(m, u)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, u, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < u ? ((m.flags |= 2), u) : f)
            : ((m.flags |= 2), u))
        : ((m.flags |= 1048576), u)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, u, f, g) {
    return u === null || u.tag !== 6
      ? ((u = dl(f, m.mode, g)), (u.return = m), u)
      : ((u = i(u, f)), (u.return = m), u);
  }
  function o(m, u, f, g) {
    var S = f.type;
    return S === Qt
      ? p(m, u, f.props.children, g, f.key)
      : u !== null &&
        (u.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === ot &&
            ea(S) === u.type))
      ? ((g = i(u, f.props)), (g.ref = jn(m, u, f)), (g.return = m), g)
      : ((g = Qr(f.type, f.key, f.props, null, m.mode, g)),
        (g.ref = jn(m, u, f)),
        (g.return = m),
        g);
  }
  function d(m, u, f, g) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== f.containerInfo ||
      u.stateNode.implementation !== f.implementation
      ? ((u = fl(f, m.mode, g)), (u.return = m), u)
      : ((u = i(u, f.children || [])), (u.return = m), u);
  }
  function p(m, u, f, g, S) {
    return u === null || u.tag !== 7
      ? ((u = Rt(f, m.mode, g, S)), (u.return = m), u)
      : ((u = i(u, f)), (u.return = m), u);
  }
  function h(m, u, f) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = dl("" + u, m.mode, f)), (u.return = m), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case yr:
          return (
            (f = Qr(u.type, u.key, u.props, null, m.mode, f)),
            (f.ref = jn(m, null, u)),
            (f.return = m),
            f
          );
        case bt:
          return (u = fl(u, m.mode, f)), (u.return = m), u;
        case ot:
          var g = u._init;
          return h(m, g(u._payload), f);
      }
      if (In(u) || En(u))
        return (u = Rt(u, m.mode, f, null)), (u.return = m), u;
      Pr(m, u);
    }
    return null;
  }
  function v(m, u, f, g) {
    var S = u !== null ? u.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return S !== null ? null : a(m, u, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case yr:
          return f.key === S ? o(m, u, f, g) : null;
        case bt:
          return f.key === S ? d(m, u, f, g) : null;
        case ot:
          return (S = f._init), v(m, u, S(f._payload), g);
      }
      if (In(f) || En(f)) return S !== null ? null : p(m, u, f, g, null);
      Pr(m, f);
    }
    return null;
  }
  function y(m, u, f, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (m = m.get(f) || null), a(u, m, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yr:
          return (m = m.get(g.key === null ? f : g.key) || null), o(u, m, g, S);
        case bt:
          return (m = m.get(g.key === null ? f : g.key) || null), d(u, m, g, S);
        case ot:
          var E = g._init;
          return y(m, u, f, E(g._payload), S);
      }
      if (In(g) || En(g)) return (m = m.get(f) || null), p(u, m, g, S, null);
      Pr(u, g);
    }
    return null;
  }
  function w(m, u, f, g) {
    for (
      var S = null, E = null, N = u, k = (u = 0), T = null;
      N !== null && k < f.length;
      k++
    ) {
      N.index > k ? ((T = N), (N = null)) : (T = N.sibling);
      var _ = v(m, N, f[k], g);
      if (_ === null) {
        N === null && (N = T);
        break;
      }
      e && N && _.alternate === null && t(m, N),
        (u = l(_, u, k)),
        E === null ? (S = _) : (E.sibling = _),
        (E = _),
        (N = T);
    }
    if (k === f.length) return n(m, N), U && Lt(m, k), S;
    if (N === null) {
      for (; k < f.length; k++)
        (N = h(m, f[k], g)),
          N !== null &&
            ((u = l(N, u, k)), E === null ? (S = N) : (E.sibling = N), (E = N));
      return U && Lt(m, k), S;
    }
    for (N = r(m, N); k < f.length; k++)
      (T = y(N, m, k, f[k], g)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? k : T.key),
          (u = l(T, u, k)),
          E === null ? (S = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        N.forEach(function (P) {
          return t(m, P);
        }),
      U && Lt(m, k),
      S
    );
  }
  function x(m, u, f, g) {
    var S = En(f);
    if (typeof S != "function") throw Error(C(150));
    if (((f = S.call(f)), f == null)) throw Error(C(151));
    for (
      var E = (S = null), N = u, k = (u = 0), T = null, _ = f.next();
      N !== null && !_.done;
      k++, _ = f.next()
    ) {
      N.index > k ? ((T = N), (N = null)) : (T = N.sibling);
      var P = v(m, N, _.value, g);
      if (P === null) {
        N === null && (N = T);
        break;
      }
      e && N && P.alternate === null && t(m, N),
        (u = l(P, u, k)),
        E === null ? (S = P) : (E.sibling = P),
        (E = P),
        (N = T);
    }
    if (_.done) return n(m, N), U && Lt(m, k), S;
    if (N === null) {
      for (; !_.done; k++, _ = f.next())
        (_ = h(m, _.value, g)),
          _ !== null &&
            ((u = l(_, u, k)), E === null ? (S = _) : (E.sibling = _), (E = _));
      return U && Lt(m, k), S;
    }
    for (N = r(m, N); !_.done; k++, _ = f.next())
      (_ = y(N, m, k, _.value, g)),
        _ !== null &&
          (e && _.alternate !== null && N.delete(_.key === null ? k : _.key),
          (u = l(_, u, k)),
          E === null ? (S = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        N.forEach(function (O) {
          return t(m, O);
        }),
      U && Lt(m, k),
      S
    );
  }
  function j(m, u, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Qt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case yr:
          e: {
            for (var S = f.key, E = u; E !== null; ) {
              if (E.key === S) {
                if (((S = f.type), S === Qt)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (u = i(E, f.props.children)),
                      (u.return = m),
                      (m = u);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === ot &&
                    ea(S) === E.type)
                ) {
                  n(m, E.sibling),
                    (u = i(E, f.props)),
                    (u.ref = jn(m, E, f)),
                    (u.return = m),
                    (m = u);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            f.type === Qt
              ? ((u = Rt(f.props.children, m.mode, g, f.key)),
                (u.return = m),
                (m = u))
              : ((g = Qr(f.type, f.key, f.props, null, m.mode, g)),
                (g.ref = jn(m, u, f)),
                (g.return = m),
                (m = g));
          }
          return s(m);
        case bt:
          e: {
            for (E = f.key; u !== null; ) {
              if (u.key === E)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === f.containerInfo &&
                  u.stateNode.implementation === f.implementation
                ) {
                  n(m, u.sibling),
                    (u = i(u, f.children || [])),
                    (u.return = m),
                    (m = u);
                  break e;
                } else {
                  n(m, u);
                  break;
                }
              else t(m, u);
              u = u.sibling;
            }
            (u = fl(f, m.mode, g)), (u.return = m), (m = u);
          }
          return s(m);
        case ot:
          return (E = f._init), j(m, u, E(f._payload), g);
      }
      if (In(f)) return w(m, u, f, g);
      if (En(f)) return x(m, u, f, g);
      Pr(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        u !== null && u.tag === 6
          ? (n(m, u.sibling), (u = i(u, f)), (u.return = m), (m = u))
          : (n(m, u), (u = dl(f, m.mode, g)), (u.return = m), (m = u)),
        s(m))
      : n(m, u);
  }
  return j;
}
var hn = Uu(!0),
  bu = Uu(!1),
  mr = {},
  Ye = kt(mr),
  rr = kt(mr),
  ir = kt(mr);
function Ot(e) {
  if (e === mr) throw Error(C(174));
  return e;
}
function Ws(e, t) {
  switch ((H(ir, t), H(rr, e), H(Ye, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pl(t, e));
  }
  W(Ye), H(Ye, t);
}
function vn() {
  W(Ye), W(rr), W(ir);
}
function Qu(e) {
  Ot(ir.current);
  var t = Ot(Ye.current),
    n = Pl(t, e.type);
  t !== n && (H(rr, e), H(Ye, n));
}
function Us(e) {
  rr.current === e && (W(Ye), W(rr));
}
var Q = kt(0);
function di(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ll = [];
function bs() {
  for (var e = 0; e < ll.length; e++)
    ll[e]._workInProgressVersionPrimary = null;
  ll.length = 0;
}
var Hr = lt.ReactCurrentDispatcher,
  sl = lt.ReactCurrentBatchConfig,
  $t = 0,
  Y = null,
  ne = null,
  ie = null,
  fi = !1,
  Bn = !1,
  lr = 0,
  qf = 0;
function ue() {
  throw Error(C(321));
}
function Qs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function Ys(e, t, n, r, i, l) {
  if (
    (($t = l),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? np : rp),
    (e = n(r, i)),
    Bn)
  ) {
    l = 0;
    do {
      if (((Bn = !1), (lr = 0), 25 <= l)) throw Error(C(301));
      (l += 1),
        (ie = ne = null),
        (t.updateQueue = null),
        (Hr.current = ip),
        (e = n(r, i));
    } while (Bn);
  }
  if (
    ((Hr.current = pi),
    (t = ne !== null && ne.next !== null),
    ($t = 0),
    (ie = ne = Y = null),
    (fi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Xs() {
  var e = lr !== 0;
  return (lr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function De() {
  if (ne === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null) (ie = t), (ne = e);
  else {
    if (e === null) throw Error(C(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ol(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      d = l;
    do {
      var p = d.lane;
      if (($t & p) === p)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        o === null ? ((a = o = h), (s = r)) : (o = o.next = h),
          (Y.lanes |= p),
          (Vt |= p);
      }
      d = d.next;
    } while (d !== null && d !== l);
    o === null ? (s = r) : (o.next = a),
      He(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (Y.lanes |= l), (Vt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function al(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    He(l, t.memoizedState) || (ye = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Yu() {}
function Xu(e, t) {
  var n = Y,
    r = De(),
    i = t(),
    l = !He(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ye = !0)),
    (r = r.queue),
    Ks(qu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, Zu.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(C(349));
    $t & 30 || Ku(n, t, i);
  }
  return i;
}
function Ku(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ju(t) && ec(e);
}
function qu(e, t, n) {
  return n(function () {
    Ju(t) && ec(e);
  });
}
function Ju(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function ec(e) {
  var t = rt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function ta(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tp.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tc() {
  return De().memoizedState;
}
function Gr(e, t, n, r) {
  var i = We();
  (Y.flags |= e),
    (i.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function zi(e, t, n, r) {
  var i = De();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (((l = s.destroy), r !== null && Qs(r, s.deps))) {
      i.memoizedState = or(t, n, l, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = or(1 | t, n, l, r));
}
function na(e, t) {
  return Gr(8390656, 8, e, t);
}
function Ks(e, t) {
  return zi(2048, 8, e, t);
}
function nc(e, t) {
  return zi(4, 2, e, t);
}
function rc(e, t) {
  return zi(4, 4, e, t);
}
function ic(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zi(4, 4, ic.bind(null, t, e), n)
  );
}
function Zs() {}
function sc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return $t & 21
    ? (He(n, t) || ((n = du()), (Y.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function Jf(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sl.transition;
  sl.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (sl.transition = r);
  }
}
function uc() {
  return De().memoizedState;
}
function ep(e, t, n) {
  var r = xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cc(e))
  )
    dc(t, n);
  else if (((n = Bu(e, t, n, r)), n !== null)) {
    var i = me();
    Be(n, e, r, i), fc(n, t, r);
  }
}
function tp(e, t, n) {
  var r = xt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cc(e)) dc(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), He(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), Hs(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bu(e, t, i, r)),
      n !== null && ((i = me()), Be(n, e, r, i), fc(n, t, r));
  }
}
function cc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function dc(e, t) {
  Bn = fi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), js(e, n);
  }
}
var pi = {
    readContext: Oe,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: na,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gr(4194308, 4, ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ep.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ta,
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = ta(!1),
        t = e[0];
      return (e = Jf.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = We();
      if (U) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(C(349));
        $t & 30 || Ku(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        na(qu.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        or(9, Zu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = le.identifierPrefix;
      if (U) {
        var n = Je,
          r = qe;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = lr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: Oe,
    useCallback: sc,
    useContext: Oe,
    useEffect: Ks,
    useImperativeHandle: lc,
    useInsertionEffect: nc,
    useLayoutEffect: rc,
    useMemo: oc,
    useReducer: ol,
    useRef: tc,
    useState: function () {
      return ol(sr);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = De();
      return ac(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ol(sr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Xu,
    useId: uc,
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Oe,
    useCallback: sc,
    useContext: Oe,
    useEffect: Ks,
    useImperativeHandle: lc,
    useInsertionEffect: nc,
    useLayoutEffect: rc,
    useMemo: oc,
    useReducer: al,
    useRef: tc,
    useState: function () {
      return al(sr);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = De();
      return ne === null ? (t.memoizedState = e) : ac(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = al(sr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Xu,
    useId: uc,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Md(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ul(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lp = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hi || ((hi = !0), (as = r)), ql(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ql(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ql(e, t),
          typeof r != "function" &&
            (wt === null ? (wt = new Set([this])) : wt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ra(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = wp.bind(null, e, t, n)), t.then(e, e));
}
function ia(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function la(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sp = lt.ReactCurrentOwner,
  ye = !1;
function pe(e, t, n, r) {
  t.child = e === null ? bu(t, null, n, r) : hn(t, e.child, n, r);
}
function sa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    un(t, i),
    (r = Ys(e, t, n, r, l, i)),
    (n = Xs()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (U && n && Rs(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function oa(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !lo(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), hc(e, t, l, r, i))
      : ((e = Qr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(s, r) && e.ref === t.ref)
    )
      return it(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = St(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Jn(l, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), it(e, t, i);
  }
  return Jl(e, t, n, r, i);
}
function vc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(rn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(rn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        H(rn, _e),
        (_e |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(rn, _e),
      (_e |= r);
  return pe(e, t, i, n), t.child;
}
function gc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jl(e, t, n, r, i) {
  var l = xe(n) ? At : fe.current;
  return (
    (l = pn(t, l)),
    un(t, i),
    (n = Ys(e, t, n, r, l, i)),
    (r = Xs()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (U && r && Rs(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function aa(e, t, n, r, i) {
  if (xe(n)) {
    var l = !0;
    li(t);
  } else l = !1;
  if ((un(t, i), t.stateNode === null))
    Wr(e, t), Wu(t, n, r), Zl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Oe(d))
      : ((d = xe(n) ? At : fe.current), (d = pn(t, d)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== d) && Jo(t, s, r, d)),
      (at = !1);
    var v = t.memoizedState;
    (s.state = v),
      ci(t, r, s, i),
      (o = t.memoizedState),
      a !== r || v !== o || we.current || at
        ? (typeof p == "function" && (Kl(t, n, p, r), (o = t.memoizedState)),
          (a = at || qo(t, n, a, r, v, o, d))
            ? (h ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = d),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Hu(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : Ae(t.type, a)),
      (s.props = d),
      (h = t.pendingProps),
      (v = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = Oe(o))
        : ((o = xe(n) ? At : fe.current), (o = pn(t, o)));
    var y = n.getDerivedStateFromProps;
    (p =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== h || v !== o) && Jo(t, s, r, o)),
      (at = !1),
      (v = t.memoizedState),
      (s.state = v),
      ci(t, r, s, i);
    var w = t.memoizedState;
    a !== h || v !== w || we.current || at
      ? (typeof y == "function" && (Kl(t, n, y, r), (w = t.memoizedState)),
        (d = at || qo(t, n, d, r, v, w, o) || !1)
          ? (p ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = o),
        (r = d))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return es(e, t, n, r, l, i);
}
function es(e, t, n, r, i, l) {
  gc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Qo(t, n, !1), it(e, t, l);
  (r = t.stateNode), (sp.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = hn(t, e.child, null, l)), (t.child = hn(t, null, a, l)))
      : pe(e, t, a, l),
    (t.memoizedState = r.state),
    i && Qo(t, n, !0),
    t.child
  );
}
function yc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bo(e, t.context, !1),
    Ws(e, t.containerInfo);
}
function ua(e, t, n, r, i) {
  return mn(), Fs(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wc(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(Q, i & 1),
    e === null)
  )
    return (
      Yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Di(s, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ns(n)),
              (t.memoizedState = ts),
              e)
            : qs(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return op(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = St(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = St(a, l)) : ((l = Rt(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ns(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ts),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = St(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qs(e, t) {
  return (
    (t = Di({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && Fs(r),
    hn(t, e.child, null, n),
    (e = qs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function op(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ul(Error(C(422)))), Lr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Di({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Rt(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && hn(t, e.child, null, s),
        (t.child.memoizedState = ns(s)),
        (t.memoizedState = ts),
        l);
  if (!(t.mode & 1)) return Lr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(C(419))), (r = ul(l, r, void 0)), Lr(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ye || a)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), rt(e, i), Be(r, e, i, -1));
    }
    return io(), (r = ul(Error(C(421)))), Lr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ce = gt(i.nextSibling)),
      (ke = t),
      (U = !0),
      ($e = null),
      e !== null &&
        ((Le[Me++] = qe),
        (Le[Me++] = Je),
        (Le[Me++] = Ft),
        (qe = e.id),
        (Je = e.overflow),
        (Ft = t)),
      (t = qs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ca(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xl(e.return, t, n);
}
function cl(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function xc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ca(e, n, t);
        else if (e.tag === 19) ca(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && di(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          cl(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && di(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        cl(t, !0, n, null, l);
        break;
      case "together":
        cl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = St(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ap(e, t, n) {
  switch (t.tag) {
    case 3:
      yc(t), mn();
      break;
    case 5:
      Qu(t);
      break;
    case 1:
      xe(t.type) && li(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      H(ai, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wc(e, t, n)
          : (H(Q, Q.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      H(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vc(e, t, n);
  }
  return it(e, t, n);
}
var Sc, rs, _c, Ec;
Sc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rs = function () {};
_c = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ot(Ye.current);
    var l = null;
    switch (n) {
      case "input":
        (i = kl(e, i)), (r = kl(e, r)), (l = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = jl(e, i)), (r = jl(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ri);
    }
    Ll(n, r);
    var s;
    n = null;
    for (d in i)
      if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var a = i[d];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (bn.hasOwnProperty(d)
              ? l || (l = [])
              : (l = l || []).push(d, null));
    for (d in r) {
      var o = r[d];
      if (
        ((a = i != null ? i[d] : void 0),
        r.hasOwnProperty(d) && o !== a && (o != null || a != null))
      )
        if (d === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(d, n)), (n = o);
        else
          d === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(d, o))
            : d === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (l = l || []).push(d, "" + o)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (bn.hasOwnProperty(d)
                ? (o != null && d === "onScroll" && G("scroll", e),
                  l || a === o || (l = []))
                : (l = l || []).push(d, o));
    }
    n && (l = l || []).push("style", n);
    var d = l;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ec = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function up(e, t, n) {
  var r = t.pendingProps;
  switch ((As(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return xe(t.type) && ii(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        W(we),
        W(fe),
        bs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (ds($e), ($e = null)))),
        rs(e, t),
        ce(t),
        null
      );
    case 5:
      Us(t);
      var i = Ot(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _c(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ce(t), null;
        }
        if (((e = Ot(Ye.current)), jr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ue] = t), (r[nr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Dn.length; i++) G(Dn[i], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              wo(r, l), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              So(r, l), G("invalid", r);
          }
          Ll(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : bn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              wr(r), xo(r, l, !0);
              break;
            case "textarea":
              wr(r), _o(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ri);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ka(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ue] = t),
            (e[nr] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ml(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Dn.length; i++) G(Dn[i], e);
                i = r;
                break;
              case "source":
                G("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (i = r);
                break;
              case "details":
                G("toggle", e), (i = r);
                break;
              case "input":
                wo(e, r), (i = kl(e, r)), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                So(e, r), (i = jl(e, r)), G("invalid", e);
                break;
              default:
                i = r;
            }
            Ll(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? Ja(e, o)
                  : l === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && Za(e, o))
                  : l === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && Qn(e, o)
                    : typeof o == "number" && Qn(e, "" + o)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (bn.hasOwnProperty(l)
                      ? o != null && l === "onScroll" && G("scroll", e)
                      : o != null && _s(e, l, o, s));
              }
            switch (n) {
              case "input":
                wr(e), xo(e, r, !1);
                break;
              case "textarea":
                wr(e), _o(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? ln(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ri);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Ot(ir.current)), Ot(Ye.current), jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (l = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (W(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Vu(), mn(), (t.flags |= 98560), (l = !1);
        else if (((l = jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(C(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(C(317));
            l[Ue] = t;
          } else
            mn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (l = !1);
        } else $e !== null && (ds($e), ($e = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? re === 0 && (re = 3) : io())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        vn(), rs(e, t), e === null && er(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return Bs(t.type._context), ce(t), null;
    case 17:
      return xe(t.type) && ii(), ce(t), null;
    case 19:
      if ((W(Q), (l = t.memoizedState), l === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Pn(l, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = di(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Pn(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            q() > yn &&
            ((t.flags |= 128), (r = !0), Pn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = di(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !U)
            )
              return ce(t), null;
          } else
            2 * q() - l.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = q()),
          (t.sibling = null),
          (n = Q.current),
          H(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        ro(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function cp(e, t) {
  switch ((As(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && ii(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        W(we),
        W(fe),
        bs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Us(t), null;
    case 13:
      if ((W(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        mn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Q), null;
    case 4:
      return vn(), null;
    case 10:
      return Bs(t.type._context), null;
    case 22:
    case 23:
      return ro(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1,
  de = !1,
  dp = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function is(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var da = !1;
function fp(e, t) {
  if (((Bl = ei), (e = Nu()), Ds(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            d = 0,
            p = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = s + i),
                h !== l || (r !== 0 && h.nodeType !== 3) || (o = s + r),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (v = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++d === i && (a = s),
                v === l && ++p === r && (o = s),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = y;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hl = { focusedElem: e, selectionRange: n }, ei = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    j = w.memoizedState,
                    m = t.stateNode,
                    u = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ae(t.type, x),
                      j
                    );
                  m.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (w = da), (da = !1), w;
}
function Hn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && is(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ii(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ls(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[nr], delete t[Ul], delete t[Yf], delete t[Xf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ri));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), (e = e.sibling);
}
function os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), (e = e.sibling);
}
var se = null,
  Fe = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) Tc(e, t, n), (n = n.sibling);
}
function Tc(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || nn(n, t);
    case 6:
      var r = se,
        i = Fe;
      (se = null),
        st(e, t, n),
        (se = r),
        (Fe = i),
        se !== null &&
          (Fe
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Fe
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? rl(e.parentNode, n)
              : e.nodeType === 1 && rl(e, n),
            Zn(e))
          : rl(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (i = Fe),
        (se = n.stateNode.containerInfo),
        (Fe = !0),
        st(e, t, n),
        (se = r),
        (Fe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && is(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          K(n, t, a);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), st(e, t, n), (de = r))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function pa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dp()),
      t.forEach(function (r) {
        var i = Sp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (se = a.stateNode), (Fe = !1);
              break e;
            case 3:
              (se = a.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (se = a.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          a = a.return;
        }
        if (se === null) throw Error(C(160));
        Tc(l, s, i), (se = null), (Fe = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (d) {
        K(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nc(t, e), (t = t.sibling);
}
function Nc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Ge(e), r & 4)) {
        try {
          Hn(3, e, e.return), Ii(3, e);
        } catch (x) {
          K(e, e.return, x);
        }
        try {
          Hn(5, e, e.return);
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 1:
      Re(t, e), Ge(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Ge(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qn(i, "");
        } catch (x) {
          K(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Ya(i, l),
              Ml(a, s);
            var d = Ml(a, l);
            for (s = 0; s < o.length; s += 2) {
              var p = o[s],
                h = o[s + 1];
              p === "style"
                ? Ja(i, h)
                : p === "dangerouslySetInnerHTML"
                ? Za(i, h)
                : p === "children"
                ? Qn(i, h)
                : _s(i, p, h, d);
            }
            switch (a) {
              case "input":
                Tl(i, l);
                break;
              case "textarea":
                Xa(i, l);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? ln(i, !!l.multiple, y, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? ln(i, !!l.multiple, l.defaultValue, !0)
                      : ln(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[nr] = l;
          } catch (x) {
            K(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (x) {
          K(e, e.return, x);
        }
      break;
    case 4:
      Re(t, e), Ge(e);
      break;
    case 13:
      Re(t, e),
        Ge(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (to = q())),
        r & 4 && pa(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (d = de) || p), Re(t, e), (de = d)) : Re(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !p && e.mode & 1)
        )
          for (z = e, p = e.child; p !== null; ) {
            for (h = z = p; z !== null; ) {
              switch (((v = z), (y = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, v, v.return);
                  break;
                case 1:
                  nn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      K(r, n, x);
                    }
                  }
                  break;
                case 5:
                  nn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ha(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = v), (z = y)) : ha(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (i = h.stateNode),
                  d
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = h.stateNode),
                      (o = h.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = qa("display", s)));
              } catch (x) {
                K(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (x) {
                K(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Ge(e), r & 4 && pa(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qn(i, ""), (r.flags &= -33));
          var l = fa(e);
          os(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = fa(e);
          ss(e, a, s);
          break;
        default:
          throw Error(C(161));
      }
    } catch (o) {
      K(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pp(e, t, n) {
  (z = e), jc(e);
}
function jc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Mr;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || de;
        a = Mr;
        var d = de;
        if (((Mr = s), (de = o) && !d))
          for (z = i; z !== null; )
            (s = z),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? va(i)
                : o !== null
                ? ((o.return = s), (z = o))
                : va(i);
        for (; l !== null; ) (z = l), jc(l), (l = l.sibling);
        (z = i), (Mr = a), (de = d);
      }
      ma(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (z = l)) : ma(e);
  }
}
function ma(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ae(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Zo(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zo(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var p = d.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Zn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        de || (t.flags & 512 && ls(t));
      } catch (v) {
        K(t, t.return, v);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function ha(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function va(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ii(4, t);
          } catch (o) {
            K(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              K(t, i, o);
            }
          }
          var l = t.return;
          try {
            ls(t);
          } catch (o) {
            K(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ls(t);
          } catch (o) {
            K(t, s, o);
          }
      }
    } catch (o) {
      K(t, t.return, o);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var mp = Math.ceil,
  mi = lt.ReactCurrentDispatcher,
  Js = lt.ReactCurrentOwner,
  Ie = lt.ReactCurrentBatchConfig,
  $ = 0,
  le = null,
  te = null,
  oe = 0,
  _e = 0,
  rn = kt(0),
  re = 0,
  ar = null,
  Vt = 0,
  Oi = 0,
  eo = 0,
  Gn = null,
  ge = null,
  to = 0,
  yn = 1 / 0,
  Ke = null,
  hi = !1,
  as = null,
  wt = null,
  zr = !1,
  ft = null,
  vi = 0,
  Wn = 0,
  us = null,
  Ur = -1,
  br = 0;
function me() {
  return $ & 6 ? q() : Ur !== -1 ? Ur : (Ur = q());
}
function xt(e) {
  return e.mode & 1
    ? $ & 2 && oe !== 0
      ? oe & -oe
      : Zf.transition !== null
      ? (br === 0 && (br = du()), br)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yu(e.type))),
        e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < Wn) throw ((Wn = 0), (us = null), Error(C(185)));
  dr(e, n, r),
    (!($ & 2) || e !== le) &&
      (e === le && (!($ & 2) && (Oi |= n), re === 4 && ct(e, oe)),
      Se(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((yn = q() + 500), Li && Tt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  Kd(e, t);
  var r = Jr(e, e === le ? oe : 0);
  if (r === 0)
    n !== null && ko(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ko(n), t === 1))
      e.tag === 0 ? Kf(ga.bind(null, e)) : Au(ga.bind(null, e)),
        bf(function () {
          !($ & 6) && Tt();
        }),
        (n = null);
    else {
      switch (fu(r)) {
        case 1:
          n = Ns;
          break;
        case 4:
          n = uu;
          break;
        case 16:
          n = qr;
          break;
        case 536870912:
          n = cu;
          break;
        default:
          n = qr;
      }
      n = Rc(n, Pc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pc(e, t) {
  if (((Ur = -1), (br = 0), $ & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Jr(e, e === le ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gi(e, r);
  else {
    t = r;
    var i = $;
    $ |= 2;
    var l = Mc();
    (le !== e || oe !== t) && ((Ke = null), (yn = q() + 500), Dt(e, t));
    do
      try {
        gp();
        break;
      } catch (a) {
        Lc(e, a);
      }
    while (1);
    Vs(),
      (mi.current = l),
      ($ = i),
      te !== null ? (t = 0) : ((le = null), (oe = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Rl(e)), i !== 0 && ((r = i), (t = cs(e, i)))), t === 1)
    )
      throw ((n = ar), Dt(e, 0), ct(e, r), Se(e, q()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !hp(i) &&
          ((t = gi(e, r)),
          t === 2 && ((l = Rl(e)), l !== 0 && ((r = l), (t = cs(e, l)))),
          t === 1))
      )
        throw ((n = ar), Dt(e, 0), ct(e, r), Se(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Mt(e, ge, Ke);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = to + 500 - q()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Wl(Mt.bind(null, e, ge, Ke), t);
            break;
          }
          Mt(e, ge, Ke);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ve(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * mp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wl(Mt.bind(null, e, ge, Ke), r);
            break;
          }
          Mt(e, ge, Ke);
          break;
        case 5:
          Mt(e, ge, Ke);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Se(e, q()), e.callbackNode === n ? Pc.bind(null, e) : null;
}
function cs(e, t) {
  var n = Gn;
  return (
    e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    (e = gi(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && ds(t)),
    e
  );
}
function ds(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function hp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!He(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ct(e, t) {
  for (
    t &= ~eo,
      t &= ~Oi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ga(e) {
  if ($ & 6) throw Error(C(327));
  cn();
  var t = Jr(e, 0);
  if (!(t & 1)) return Se(e, q()), null;
  var n = gi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rl(e);
    r !== 0 && ((t = r), (n = cs(e, r)));
  }
  if (n === 1) throw ((n = ar), Dt(e, 0), ct(e, t), Se(e, q()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mt(e, ge, Ke),
    Se(e, q()),
    null
  );
}
function no(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((yn = q() + 500), Li && Tt());
  }
}
function Bt(e) {
  ft !== null && ft.tag === 0 && !($ & 6) && cn();
  var t = $;
  $ |= 1;
  var n = Ie.transition,
    r = B;
  try {
    if (((Ie.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ie.transition = n), ($ = t), !($ & 6) && Tt();
  }
}
function ro() {
  (_e = rn.current), W(rn);
}
function Dt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uf(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((As(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ii();
          break;
        case 3:
          vn(), W(we), W(fe), bs();
          break;
        case 5:
          Us(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          W(Q);
          break;
        case 19:
          W(Q);
          break;
        case 10:
          Bs(r.type._context);
          break;
        case 22:
        case 23:
          ro();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (te = e = St(e.current, null)),
    (oe = _e = t),
    (re = 0),
    (ar = null),
    (eo = Oi = Vt = 0),
    (ge = Gn = null),
    It !== null)
  ) {
    for (t = 0; t < It.length; t++)
      if (((n = It[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    It = null;
  }
  return e;
}
function Lc(e, t) {
  do {
    var n = te;
    try {
      if ((Vs(), (Hr.current = pi), fi)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fi = !1;
      }
      if (
        (($t = 0),
        (ie = ne = Y = null),
        (Bn = !1),
        (lr = 0),
        (Js.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (ar = t), (te = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = oe),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var d = o,
            p = a,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = p.alternate;
            v
              ? ((p.updateQueue = v.updateQueue),
                (p.memoizedState = v.memoizedState),
                (p.lanes = v.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var y = ia(s);
          if (y !== null) {
            (y.flags &= -257),
              la(y, s, a, l, t),
              y.mode & 1 && ra(l, d, t),
              (t = y),
              (o = d);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(o), (t.updateQueue = x);
            } else w.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              ra(l, d, t), io();
              break e;
            }
            o = Error(C(426));
          }
        } else if (U && a.mode & 1) {
          var j = ia(s);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              la(j, s, a, l, t),
              Fs(gn(o, a));
            break e;
          }
        }
        (l = o = gn(o, a)),
          re !== 4 && (re = 2),
          Gn === null ? (Gn = [l]) : Gn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = pc(l, o, t);
              Ko(l, m);
              break e;
            case 1:
              a = o;
              var u = l.type,
                f = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (wt === null || !wt.has(f))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var g = mc(l, a, t);
                Ko(l, g);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ic(n);
    } catch (S) {
      (t = S), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Mc() {
  var e = mi.current;
  return (mi.current = pi), e === null ? pi : e;
}
function io() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    le === null || (!(Vt & 268435455) && !(Oi & 268435455)) || ct(le, oe);
}
function gi(e, t) {
  var n = $;
  $ |= 2;
  var r = Mc();
  (le !== e || oe !== t) && ((Ke = null), Dt(e, t));
  do
    try {
      vp();
      break;
    } catch (i) {
      Lc(e, i);
    }
  while (1);
  if ((Vs(), ($ = n), (mi.current = r), te !== null)) throw Error(C(261));
  return (le = null), (oe = 0), re;
}
function vp() {
  for (; te !== null; ) zc(te);
}
function gp() {
  for (; te !== null && !Bd(); ) zc(te);
}
function zc(e) {
  var t = Dc(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ic(e) : (te = t),
    (Js.current = null);
}
function Ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cp(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (te = null);
        return;
      }
    } else if (((n = up(n, t, _e)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Mt(e, t, n) {
  var r = B,
    i = Ie.transition;
  try {
    (Ie.transition = null), (B = 1), yp(e, t, n, r);
  } finally {
    (Ie.transition = i), (B = r);
  }
  return null;
}
function yp(e, t, n, r) {
  do cn();
  while (ft !== null);
  if ($ & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Zd(e, l),
    e === le && ((te = le = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Rc(qr, function () {
        return cn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ie.transition), (Ie.transition = null);
    var s = B;
    B = 1;
    var a = $;
    ($ |= 4),
      (Js.current = null),
      fp(e, n),
      Nc(n, e),
      Ff(Hl),
      (ei = !!Bl),
      (Hl = Bl = null),
      (e.current = n),
      pp(n),
      Hd(),
      ($ = a),
      (B = s),
      (Ie.transition = l);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (ft = e), (vi = i)),
    (l = e.pendingLanes),
    l === 0 && (wt = null),
    Ud(n.stateNode),
    Se(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (hi) throw ((hi = !1), (e = as), (as = null), e);
  return (
    vi & 1 && e.tag !== 0 && cn(),
    (l = e.pendingLanes),
    l & 1 ? (e === us ? Wn++ : ((Wn = 0), (us = e))) : (Wn = 0),
    Tt(),
    null
  );
}
function cn() {
  if (ft !== null) {
    var e = fu(vi),
      t = Ie.transition,
      n = B;
    try {
      if (((Ie.transition = null), (B = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (vi = 0), $ & 6)) throw Error(C(331));
        var i = $;
        for ($ |= 4, z = e.current; z !== null; ) {
          var l = z,
            s = l.child;
          if (z.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var d = a[o];
                for (z = d; z !== null; ) {
                  var p = z;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, p, l);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (z = h);
                  else
                    for (; z !== null; ) {
                      p = z;
                      var v = p.sibling,
                        y = p.return;
                      if ((Cc(p), p === d)) {
                        z = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = y), (z = v);
                        break;
                      }
                      z = y;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (z = s);
          else
            e: for (; z !== null; ) {
              if (((l = z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (z = m);
                break e;
              }
              z = l.return;
            }
        }
        var u = e.current;
        for (z = u; z !== null; ) {
          s = z;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (z = f);
          else
            e: for (s = u; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(9, a);
                  }
                } catch (S) {
                  K(a, a.return, S);
                }
              if (a === s) {
                z = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (z = g);
                break e;
              }
              z = a.return;
            }
        }
        if (
          (($ = i), Tt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ie.transition = t);
    }
  }
  return !1;
}
function ya(e, t, n) {
  (t = gn(n, t)),
    (t = pc(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = me()),
    e !== null && (dr(e, 1, t), Se(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ya(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (wt === null || !wt.has(r)))
        ) {
          (e = gn(n, e)),
            (e = mc(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = me()),
            t !== null && (dr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (oe & n) === n &&
      (re === 4 || (re === 3 && (oe & 130023424) === oe && 500 > q() - to)
        ? Dt(e, 0)
        : (eo |= n)),
    Se(e, t);
}
function Oc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _r), (_r <<= 1), !(_r & 130023424) && (_r = 4194304))
      : (t = 1));
  var n = me();
  (e = rt(e, t)), e !== null && (dr(e, t, n), Se(e, n));
}
function xp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oc(e, n);
}
function Sp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Oc(e, n);
}
var Dc;
Dc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), ap(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), U && t.flags & 1048576 && Fu(t, oi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var i = pn(t, fe.current);
      un(t, n), (i = Ys(null, t, r, e, i, n));
      var l = Xs();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((l = !0), li(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gs(t),
            (i.updater = Mi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zl(t, r, e, n),
            (t = es(null, t, r, !0, l, n)))
          : ((t.tag = 0), U && l && Rs(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ep(r)),
          (e = Ae(r, e)),
          i)
        ) {
          case 0:
            t = Jl(null, t, r, e, n);
            break e;
          case 1:
            t = aa(null, t, r, e, n);
            break e;
          case 11:
            t = sa(null, t, r, e, n);
            break e;
          case 14:
            t = oa(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Jl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        aa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((yc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Hu(e, t),
          ci(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = gn(Error(C(423)), t)), (t = ua(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = gn(Error(C(424)), t)), (t = ua(e, t, r, n, i));
            break e;
          } else
            for (
              Ce = gt(t.stateNode.containerInfo.firstChild),
                ke = t,
                U = !0,
                $e = null,
                n = bu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mn(), r === i)) {
            t = it(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qu(t),
        e === null && Yl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Gl(r, i) ? (s = null) : l !== null && Gl(r, l) && (t.flags |= 32),
        gc(e, t),
        pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return wc(e, t, n);
    case 4:
      return (
        Ws(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        sa(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          H(ai, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (He(l.value, s)) {
            if (l.children === i.children && !we.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = et(-1, n & -n)), (o.tag = 2);
                      var d = l.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var p = d.pending;
                        p === null
                          ? (o.next = o)
                          : ((o.next = p.next), (p.next = o)),
                          (d.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Xl(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(C(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Xl(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (i = Oe(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ae(r, t.pendingProps)),
        (i = Ae(r.type, i)),
        oa(e, t, r, i, n)
      );
    case 15:
      return hc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Wr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), li(t)) : (e = !1),
        un(t, n),
        Wu(t, r, i),
        Zl(t, r, i, n),
        es(null, t, r, !0, e, n)
      );
    case 19:
      return xc(e, t, n);
    case 22:
      return vc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Rc(e, t) {
  return au(e, t);
}
function _p(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new _p(e, t, n, r);
}
function lo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == "function") return lo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cs)) return 11;
    if (e === ks) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) lo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Qt:
        return Rt(n.children, i, l, t);
      case Es:
        (s = 8), (i |= 8);
        break;
      case Sl:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = Sl), (e.lanes = l), e
        );
      case _l:
        return (e = ze(13, n, t, i)), (e.elementType = _l), (e.lanes = l), e;
      case El:
        return (e = ze(19, n, t, i)), (e.elementType = El), (e.lanes = l), e;
      case Ua:
        return Di(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ga:
              s = 10;
              break e;
            case Wa:
              s = 9;
              break e;
            case Cs:
              s = 11;
              break e;
            case ks:
              s = 14;
              break e;
            case ot:
              (s = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Rt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Di(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Ua),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function dl(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function fl(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bi(0)),
    (this.expirationTimes = bi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function so(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new Cp(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ze(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gs(l),
    e
  );
}
function kp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ac(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return Ru(e, n, t);
  }
  return t;
}
function Fc(e, t, n, r, i, l, s, a, o) {
  return (
    (e = so(n, r, !0, e, i, l, s, a, o)),
    (e.context = Ac(null)),
    (n = e.current),
    (r = me()),
    (i = xt(n)),
    (l = et(r, i)),
    (l.callback = t ?? null),
    yt(n, l, i),
    (e.current.lanes = i),
    dr(e, i, r),
    Se(e, r),
    e
  );
}
function Ri(e, t, n, r) {
  var i = t.current,
    l = me(),
    s = xt(i);
  return (
    (n = Ac(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(i, t, s)),
    e !== null && (Be(e, i, s, l), Br(e, i, s)),
    s
  );
}
function yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oo(e, t) {
  wa(e, t), (e = e.alternate) && wa(e, t);
}
function Tp() {
  return null;
}
var $c =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ao(e) {
  this._internalRoot = e;
}
Ai.prototype.render = ao.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ri(e, t, null, null);
};
Ai.prototype.unmount = ao.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () {
      Ri(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function Ai(e) {
  this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && gu(e);
  }
};
function uo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xa() {}
function Np(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var d = yi(s);
        l.call(d);
      };
    }
    var s = Fc(t, r, e, 0, null, !1, !1, "", xa);
    return (
      (e._reactRootContainer = s),
      (e[nt] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var d = yi(o);
      a.call(d);
    };
  }
  var o = so(e, 0, !1, null, null, !1, !1, "", xa);
  return (
    (e._reactRootContainer = o),
    (e[nt] = o.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Ri(t, o, n, r);
    }),
    o
  );
}
function $i(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = yi(s);
        a.call(o);
      };
    }
    Ri(t, s, e, i);
  } else s = Np(n, t, e, i, r);
  return yi(s);
}
pu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = On(t.pendingLanes);
        n !== 0 &&
          (js(t, n | 1), Se(t, q()), !($ & 6) && ((yn = q() + 500), Tt()));
      }
      break;
    case 13:
      Bt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var i = me();
          Be(r, e, 1, i);
        }
      }),
        oo(e, 1);
  }
};
Ps = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = me();
      Be(t, e, 134217728, n);
    }
    oo(e, 134217728);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = rt(e, t);
    if (n !== null) {
      var r = me();
      Be(n, e, t, r);
    }
    oo(e, t);
  }
};
hu = function () {
  return B;
};
vu = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Il = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Tl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Pi(r);
            if (!i) throw Error(C(90));
            Qa(r), Tl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Xa(e, n);
      break;
    case "select":
      (t = n.value), t != null && ln(e, !!n.multiple, t, !1);
  }
};
nu = no;
ru = Bt;
var jp = { usingClientEntryPoint: !1, Events: [pr, Zt, Pi, eu, tu, no] },
  Ln = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pp = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || Tp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (ki = Ir.inject(Pp)), (Qe = Ir);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jp;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uo(t)) throw Error(C(200));
  return kp(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!uo(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = $c;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = so(e, 1, !1, null, null, n, !1, r, i)),
    (e[nt] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new ao(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = su(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Bt(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Fi(t)) throw Error(C(200));
  return $i(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!uo(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = $c;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fc(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[nt] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ai(t);
};
Ne.render = function (e, t, n) {
  if (!Fi(t)) throw Error(C(200));
  return $i(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Fi(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Bt(function () {
        $i(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = no;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fi(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return $i(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Vc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vc);
    } catch (e) {
      console.error(e);
    }
}
Vc(), (Fa.exports = Ne);
var Lp = Fa.exports,
  Sa = Lp;
(wl.createRoot = Sa.createRoot), (wl.hydrateRoot = Sa.hydrateRoot);
const Mp = () => {
  const [e, t] = V.useState(!1);
  return c.jsx("header", {
    className: "header",
    children: c.jsxs("nav", {
      className: "nav container",
      children: [
        c.jsx("a", {
          href: "index.html",
          className: "nav__logo",
          children: "Ragib",
        }),
        c.jsxs("div", {
          className: e ? "nav__menu show-menu" : "nav__menu",
          children: [
            c.jsxs("ul", {
              className: "nav__list grid",
              children: [
                c.jsx("li", {
                  className: "nav__item",
                  children: c.jsxs("a", {
                    href: "#",
                    className: "nav__link active-link",
                    children: [
                      c.jsx("i", { className: "uil uil-estate nav__icon" }),
                      "Home",
                    ],
                  }),
                }),
                c.jsx("li", {
                  className: "nav__item",
                  children: c.jsxs("a", {
                    href: "#about",
                    className: "nav__link",
                    children: [
                      c.jsx("i", { className: "uil uil-user nav__icon" }),
                      "About",
                    ],
                  }),
                }),
                c.jsx("li", {
                  className: "nav__item",
                  children: c.jsxs("a", {
                    href: "#skills",
                    className: "nav__link",
                    children: [
                      c.jsx("i", { className: "uil uil-file-alt nav__icon" }),
                      "Skills",
                    ],
                  }),
                }),
                c.jsx("li", {
                  className: "nav__item",
                  children: c.jsxs("a", {
                    href: "#services",
                    className: "nav__link",
                    children: [
                      c.jsx("i", {
                        className: "uil uil-briefcase-alt nav__icon",
                      }),
                      "Services",
                    ],
                  }),
                }),
                c.jsx("li", {
                  className: "nav__item",
                  children: c.jsxs("a", {
                    href: "#contact",
                    className: "nav__link",
                    children: [
                      c.jsx("i", { className: "uil uil-message nav__icon" }),
                      "Contact",
                    ],
                  }),
                }),
              ],
            }),
            c.jsx("i", {
              className: "uil uil-times nav__close",
              onClick: () => t(!e),
            }),
          ],
        }),
        c.jsx("div", {
          className: "nav__toggle",
          onClick: () => t(!e),
          children: c.jsx("i", { className: "uil uil-apps" }),
        }),
      ],
    }),
  });
};
const zp = () =>
    c.jsxs("div", {
      className: "home__social",
      children: [
        c.jsx("a", {
          href: "https://www.instagram.com/imm_ragib",
          className: "home__social-icon",
          target: "_blank",
          rel: "noreferrer",
          children: c.jsx("i", { className: "uil uil-instagram" }),
        }),
        c.jsx("a", {
          href: "https://www.facebook.com/R4nz5r",
          className: "home__social-icon",
          target: "_blank",
          rel: "noreferrer",
          children: c.jsx("i", { className: "uil uil-facebook" }),
        }),
        c.jsx("a", {
          href: "https://www.linkedin.com/in/ragib-shahrier/",
          className: "home__social-icon",
          target: "_blank",
          rel: "noreferrer",
          children: c.jsx("i", { className: "uil uil-linkedin" }),
        }),
        c.jsx("a", {
          href: "https://github.com/R4nz5r",
          className: "home__social-icon",
          target: "_blank",
          rel: "noreferrer",
          children: c.jsx("i", { className: "uil uil-github-alt" }),
        }),
      ],
    }),
  Ip = () =>
    c.jsxs("div", {
      className: "home__data",
      children: [
        c.jsxs("h1", {
          className: "home__title",
          children: [
            "Ragib Shahrier",
            c.jsxs("svg", {
              width: "36",
              height: "36",
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "home__hand",
              children: [
                c.jsx("path", {
                  d: "M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z",
                  fill: "#FFDD67",
                }),
                c.jsx("path", {
                  d: "M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z",
                  fill: "#EBA352",
                }),
                c.jsx("path", {
                  d: "M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z",
                  fill: "#FFDD67",
                }),
                c.jsx("path", {
                  d: "M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z",
                  fill: "#EBA352",
                }),
                c.jsx("path", {
                  d: "M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z",
                  fill: "#FFDD67",
                }),
                c.jsx("path", {
                  d: "M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z",
                  fill: "#EBA352",
                }),
                c.jsx("path", {
                  d: "M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z",
                  fill: "#FFDD67",
                }),
                c.jsx("path", {
                  d: "M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z",
                  fill: "#EBA352",
                }),
                c.jsx("path", {
                  d: "M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z",
                  fill: "#FFDD67",
                }),
                c.jsx("path", {
                  d: "M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z",
                  fill: "#EBA352",
                }),
              ],
            }),
          ],
        }),
        c.jsx("h3", { className: "home__subtitle", children: "Web Developer" }),
        c.jsx("p", {
          className: "home__description",
          children:
            "I am a web developer , and I'm very passionate and dedicated to my work.",
        }),
        c.jsxs("a", {
          href: "#contact",
          className: "button button-flex",
          children: [
            "Say Hello",
            c.jsxs("svg", {
              className: "button__icon",
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                c.jsx("path", {
                  d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                  fill: "var(--container-color)",
                }),
                c.jsx("path", {
                  d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                  fill: "var(--container-color)",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Op = () =>
    c.jsx("div", {
      className: "home__scroll",
      children: c.jsxs("a", {
        href: "#about",
        className: "home__scroll-button button--flex",
        children: [
          c.jsxs("svg", {
            width: "32px",
            height: "32px",
            className: "home__scroll-mouse",
            viewBox: "0 0 247 390",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            style: {
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            },
            children: [
              c.jsx("path", {
                className: "wheel",
                d: "M123.359,79.775l0,72.843",
                style: {
                  fill: "none",
                  stroke: "var(--title-color)",
                  strokeWidth: "20px",
                },
              }),
              c.jsx("path", {
                id: "mouse",
                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                style: {
                  fill: "none",
                  stroke: "var(--title-color)",
                  strokeWidth: "20px",
                },
              }),
            ],
          }),
          c.jsx("span", {
            className: "home__scroll-name",
            children: "Scroll Down",
          }),
          c.jsx("i", { className: "uil uil-arrow-down home__scroll-arrow" }),
        ],
      }),
    }),
  Dp = () =>
    c.jsx("section", {
      className: "home section",
      id: "home",
      children: c.jsxs("div", {
        className: "home__container container grid",
        children: [
          c.jsxs("div", {
            className: "home__content grid",
            children: [
              c.jsx(zp, {}),
              c.jsx("div", { className: "home__img" }),
              c.jsx(Ip, {}),
            ],
          }),
          c.jsx(Op, {}),
        ],
      }),
    });
const Rp = "../dist/assets/profile-9b118c30.png",
  Ap = "./assets/CV_Ragib-cca964d1.pdf",
  Fp = () =>
    c.jsxs("div", {
      className: "about__info grid",
      children: [
        c.jsxs("div", {
          className: "about__box",
          children: [
            c.jsx("i", { className: "bx bx-award about_icon" }),
            c.jsx("h3", { className: "about__title", children: "Experience" }),
            c.jsx("span", {
              className: "about__subtitle",
              children: "1 years",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "about__box",
          children: [
            c.jsx("i", { className: "bx bx-briefcase-alt about_icon" }),
            c.jsx("h3", { className: "about__title", children: "Completed" }),
            c.jsx("span", {
              className: "about__subtitle",
              children: "10+ projects ",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "about__box",
          children: [
            c.jsx("i", { className: "bx bx-support about_icon" }),
            c.jsx("h3", { className: "about__title", children: "Support" }),
            c.jsx("span", {
              className: "about__subtitle",
              children: "Online 24/7",
            }),
          ],
        }),
      ],
    }),
  $p = () =>
    c.jsxs("section", {
      className: "about section",
      id: "about",
      children: [
        c.jsx("h2", { className: "section__title", children: "About Me" }),
        c.jsx("span", {
          className: "section__subtitle",
          children: "My Introduction",
        }),
        c.jsxs("div", {
          className: "about__container container grid",
          children: [
            c.jsx("img", { src: Rp, alt: "", className: "about__img" }),
            c.jsxs("div", {
              className: "about__data",
              children: [
                c.jsx(Fp, {}),
                c.jsx("p", {
                  className: "about__description",
                  children:
                    "MERN developer, I create web applications, and web pages with UI / UX user interfaces.",
                }),
                c.jsxs("a", {
                  href: Ap,
                  download: "",
                  className: "button button--flex",
                  children: [
                    "Download CV",
                    c.jsxs("svg", {
                      className: "button__icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        c.jsx("path", {
                          d: "M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z",
                          fill: "var(--container-color)",
                        }),
                        c.jsx("path", {
                          d: "M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z",
                          fill: "var(--container-color)",
                        }),
                        c.jsx("path", {
                          d: "M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z",
                          fill: "var(--container-color)",
                        }),
                        c.jsx("path", {
                          d: "M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z",
                          fill: "var(--container-color)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
const Vp = () =>
    c.jsxs("div", {
      className: "skills__content",
      children: [
        c.jsx("h3", {
          className: "skills__title",
          children: "Frontend developer",
        }),
        c.jsxs("div", {
          className: "skills__box",
          children: [
            c.jsxs("div", {
              className: "skills__group",
              children: [
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "HTML",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "CSS",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "JavaScript",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "skills__group",
              children: [
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "Bootstrap",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "Git",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "React",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Bp = () =>
    c.jsxs("div", {
      className: "skills__content",
      children: [
        c.jsx("h3", {
          className: "skills__title",
          children: "Backend developer",
        }),
        c.jsxs("div", {
          className: "skills__box",
          children: [
            c.jsxs("div", {
              className: "skills__group",
              children: [
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "PHP",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "NodeJs",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "Python",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "skills__group",
              children: [
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "MySQL",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "MongoDB",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "skills__data",
                  children: [
                    c.jsx("i", { className: "bx bx-badge-check" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "skills__name",
                          children: "NOSQL",
                        }),
                        c.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Hp = () =>
    c.jsxs("section", {
      className: "skills section",
      id: "skills",
      children: [
        c.jsx("h2", { className: "section__title", children: "Skills" }),
        c.jsx("span", {
          className: "section__subtitle",
          children: "My technical level",
        }),
        c.jsxs("div", {
          className: "skills__container container grid",
          children: [c.jsx(Vp, {}), c.jsx(Bp, {})],
        }),
      ],
    });
const Gp = () => {
  const [e, t] = V.useState(0),
    n = (r) => {
      t(r);
    };
  return c.jsxs("section", {
    className: "services section",
    id: "services",
    children: [
      c.jsx("h2", { className: "section__title", children: "Services" }),
      c.jsx("span", {
        className: "section__subtitle",
        children: "What I offer",
      }),
      c.jsxs("div", {
        className: "services__container container grid",
        children: [
          c.jsxs("div", {
            className: "services__content",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("i", { className: "uil uil-web-grid services__icon" }),
                  c.jsxs("h3", {
                    className: "services__title",
                    children: [" Product ", c.jsx("br", {}), " Designer"],
                  }),
                ],
              }),
              c.jsxs("span", {
                className: "services__button",
                onClick: () => n(1),
                children: [
                  "View More",
                  c.jsx("i", {
                    className: "uil uil-arrow-right services__button-icon",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  e === 1 ? "services__modal active-modal" : "services__modal",
                children: c.jsxs("div", {
                  className: "services__modal-content",
                  children: [
                    c.jsx("i", {
                      onClick: () => n(0),
                      className: "uil uil-times services__modal-close",
                    }),
                    c.jsx("h3", {
                      className: "services__modal-title",
                      children: "Product Designer",
                    }),
                    c.jsx("p", {
                      className: "services_modal-description",
                      children:
                        "Service professionally and providing quality work to clients and companies.",
                    }),
                    c.jsxs("ul", {
                      className: "services__modal-services grid",
                      children: [
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I develop the user interface.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "Web page development.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I create UX element interactions.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I position your company brand.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "Design and mockup for companies.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: "services__content",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("i", { className: "uil uil-arrow services__icon" }),
                  c.jsxs("h3", {
                    className: "services__title",
                    children: ["UI / UX ", c.jsx("br", {}), " Designer"],
                  }),
                ],
              }),
              c.jsxs("span", {
                className: "services__button",
                onClick: () => n(2),
                children: [
                  "View More",
                  c.jsx("i", {
                    className: "uil uil-arrow-right services__button-icon",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  e === 2 ? "services__modal active-modal" : "services__modal",
                children: c.jsxs("div", {
                  className: "services__modal-content",
                  children: [
                    c.jsx("i", {
                      onClick: () => n(0),
                      className: "uil uil-times services__modal-close",
                    }),
                    c.jsx("h3", {
                      className: "services__modal-title",
                      children: "UI / UX Designer",
                    }),
                    c.jsx("p", {
                      className: "services_modal-description",
                      children:
                        "Service professionally and providing quality work to clients and companies.",
                    }),
                    c.jsxs("ul", {
                      className: "services__modal-services grid",
                      children: [
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I develop the user interface.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "Web page development.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I create UX element interactions.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I position your company brand.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "Design and mockup for companies.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: "services__content",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("i", { className: "uil uil-edit services__icon" }),
                  c.jsxs("h3", {
                    className: "services__title",
                    children: ["Visual ", c.jsx("br", {}), " Designer"],
                  }),
                ],
              }),
              c.jsxs("span", {
                className: "services__button",
                onClick: () => n(3),
                children: [
                  "View More",
                  c.jsx("i", {
                    className: "uil uil-arrow-right services__button-icon",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  e === 3 ? "services__modal active-modal" : "services__modal",
                children: c.jsxs("div", {
                  className: "services__modal-content",
                  children: [
                    c.jsx("i", {
                      onClick: () => n(0),
                      className: "uil uil-times services__modal-close",
                    }),
                    c.jsx("h3", {
                      className: "services__modal-title",
                      children: "Visual Designer",
                    }),
                    c.jsx("p", {
                      className: "services_modal-description",
                      children:
                        "Service professionally and providing quality work to clients and companies.",
                    }),
                    c.jsxs("ul", {
                      className: "services__modal-services grid",
                      children: [
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I develop the user interface.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "Web page development.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I create UX element interactions.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "I position your company brand.",
                            }),
                          ],
                        }),
                        c.jsxs("li", {
                          className: "services__modal-service",
                          children: [
                            c.jsx("i", {
                              className:
                                "uil uil-check-circle services__modal-icon",
                            }),
                            c.jsx("p", {
                              className: "services__modal-info",
                              children: "Design and mockup for companies.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
const Wp = "./assets/testimonial1-d3365f1c.png",
  Up = "./assets/testimonial2-3278169b.png",
  bp = "./assets/testimonial3-3134aaaf.png",
  Qp = [
    {
      id: 1,
      image: Wp,
      title: "Jhon Doe",
      description:
        "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
      id: 2,
      image: Up,
      title: "Harry Clinton",
      description:
        "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
      id: 3,
      image: bp,
      title: "Sara Cill",
      description:
        "A really good job, all aspects of the project were followed step by step and with good results.",
    },
  ];
function _a(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function co(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : _a(t[n]) &&
          _a(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          co(e[n], t[n]);
    });
}
const Bc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function _n() {
  const e = typeof document < "u" ? document : {};
  return co(e, Bc), e;
}
const Yp = {
  document: Bc,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Pe() {
  const e = typeof window < "u" ? window : {};
  return co(e, Yp), e;
}
function Xp(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Kp(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function fs(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function wi() {
  return Date.now();
}
function Zp(e) {
  const t = Pe();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function qp(e, t) {
  t === void 0 && (t = "x");
  const n = Pe();
  let r, i, l;
  const s = Zp(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Or(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Jp(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ee() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !Jp(r)) {
      const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, s = i.length; l < s; l += 1) {
        const a = i[l],
          o = Object.getOwnPropertyDescriptor(r, a);
        o !== void 0 &&
          o.enumerable &&
          (Or(e[a]) && Or(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Ee(e[a], r[a])
            : !Or(e[a]) && Or(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Ee(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function Dr(e, t, n) {
  e.style.setProperty(t, n);
}
function Hc(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Pe(),
    l = -t.translate;
  let s = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const d = n > l ? "next" : "prev",
    p = (v, y) => (d === "next" && v >= y) || (d === "prev" && v <= y),
    h = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const v = Math.max(Math.min((a - s) / o, 1), 0),
        y = 0.5 - Math.cos(v * Math.PI) / 2;
      let w = l + y * (n - l);
      if ((p(w, n) && (w = n), t.wrapperEl.scrollTo({ [r]: w }), p(w, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: w });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(h);
    };
  h();
}
function be(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function xi(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Si(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Xp(t))), n;
}
function em(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function tm(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function pt(e, t) {
  return Pe().getComputedStyle(e, null).getPropertyValue(t);
}
function _i(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Gc(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function ps(e, t, n) {
  const r = Pe();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let pl;
function nm() {
  const e = Pe(),
    t = _n();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Wc() {
  return pl || (pl = nm()), pl;
}
let ml;
function rm(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Wc(),
    r = Pe(),
    i = r.navigator.platform,
    l = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    o = r.screen.height,
    d = l.match(/(Android);?[\s\/]+([\d.]+)?/);
  let p = l.match(/(iPad).*OS\s([\d_]+)/);
  const h = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !p && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    y = i === "Win32";
  let w = i === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !p &&
      w &&
      n.touch &&
      x.indexOf(`${a}x${o}`) >= 0 &&
      ((p = l.match(/(Version)\/([\d.]+)/)),
      p || (p = [0, 1, "13_0_0"]),
      (w = !1)),
    d && !y && ((s.os = "android"), (s.android = !0)),
    (p || v || h) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function im(e) {
  return e === void 0 && (e = {}), ml || (ml = rm(e)), ml;
}
let hl;
function lm() {
  const e = Pe();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, l] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && l < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function sm() {
  return hl || (hl = lm()), hl;
}
function om(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Pe();
  let l = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((h) => {
          s = i.requestAnimationFrame(() => {
            const { width: v, height: y } = t;
            let w = v,
              x = y;
            h.forEach((j) => {
              let { contentBoxSize: m, contentRect: u, target: f } = j;
              (f && f !== t.el) ||
                ((w = u ? u.width : (m[0] || m).inlineSize),
                (x = u ? u.height : (m[0] || m).blockSize));
            }),
              (w !== v || x !== y) && a();
          });
        })),
        l.observe(t.el));
    },
    d = () => {
      s && i.cancelAnimationFrame(s),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
    },
    p = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", p);
  }),
    n("destroy", () => {
      d(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", p);
    });
}
function am(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = [],
    s = Pe(),
    a = function (p, h) {
      h === void 0 && (h = {});
      const v = s.MutationObserver || s.WebkitMutationObserver,
        y = new v((w) => {
          if (t.__preventObserver__) return;
          if (w.length === 1) {
            i("observerUpdate", w[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", w[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(x)
            : s.setTimeout(x, 0);
        });
      y.observe(p, {
        attributes: typeof h.attributes > "u" ? !0 : h.attributes,
        childList: typeof h.childList > "u" ? !0 : h.childList,
        characterData: typeof h.characterData > "u" ? !0 : h.characterData,
      }),
        l.push(y);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const p = Gc(t.hostEl);
          for (let h = 0; h < p.length; h += 1) a(p[h]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    d = () => {
      l.forEach((p) => {
        p.disconnect();
      }),
        l.splice(0, l.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", o),
    r("destroy", d);
}
var um = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
        s[a] = arguments[a];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
        : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((d) => {
            d.apply(r, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((d) => {
              d.apply(r, n);
            });
      }),
      e
    );
  },
};
function cm() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(pt(r, "padding-left") || 0, 10) -
        parseInt(pt(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(pt(r, "padding-top") || 0, 10) -
        parseInt(pt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function dm() {
  const e = this;
  function t(_, P) {
    return parseFloat(_.getPropertyValue(e.getDirectionLabel(P)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    d = o ? e.virtual.slides.length : e.slides.length,
    p = be(i, `.${e.params.slideClass}, swiper-slide`),
    h = o ? e.virtual.slides.length : p.length;
  let v = [];
  const y = [],
    w = [];
  let x = n.slidesOffsetBefore;
  typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
  let j = n.slidesOffsetAfter;
  typeof j == "function" && (j = n.slidesOffsetAfter.call(e));
  const m = e.snapGrid.length,
    u = e.slidesGrid.length;
  let f = n.spaceBetween,
    g = -x,
    S = 0,
    E = 0;
  if (typeof l > "u") return;
  typeof f == "string" && f.indexOf("%") >= 0
    ? (f = (parseFloat(f.replace("%", "")) / 100) * l)
    : typeof f == "string" && (f = parseFloat(f)),
    (e.virtualSize = -f),
    p.forEach((_) => {
      s ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
        (_.style.marginBottom = ""),
        (_.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Dr(r, "--swiper-centered-offset-before", ""),
      Dr(r, "--swiper-centered-offset-after", ""));
  const N = n.grid && n.grid.rows > 1 && e.grid;
  N ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let k;
  const T =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (_) => typeof n.breakpoints[_].slidesPerView < "u"
    ).length > 0;
  for (let _ = 0; _ < h; _ += 1) {
    k = 0;
    let P;
    if (
      (p[_] && (P = p[_]),
      N && e.grid.updateSlide(_, P, p),
      !(p[_] && pt(P, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        T && (p[_].style[e.getDirectionLabel("width")] = "");
        const O = getComputedStyle(P),
          L = P.style.transform,
          R = P.style.webkitTransform;
        if (
          (L && (P.style.transform = "none"),
          R && (P.style.webkitTransform = "none"),
          n.roundLengths)
        )
          k = e.isHorizontal() ? ps(P, "width", !0) : ps(P, "height", !0);
        else {
          const F = t(O, "width"),
            Z = t(O, "padding-left"),
            Nt = t(O, "padding-right"),
            M = t(O, "margin-left"),
            I = t(O, "margin-right"),
            D = O.getPropertyValue("box-sizing");
          if (D && D === "border-box") k = F + M + I;
          else {
            const { clientWidth: b, offsetWidth: J } = P;
            k = F + Z + Nt + M + I + (J - b);
          }
        }
        L && (P.style.transform = L),
          R && (P.style.webkitTransform = R),
          n.roundLengths && (k = Math.floor(k));
      } else
        (k = (l - (n.slidesPerView - 1) * f) / n.slidesPerView),
          n.roundLengths && (k = Math.floor(k)),
          p[_] && (p[_].style[e.getDirectionLabel("width")] = `${k}px`);
      p[_] && (p[_].swiperSlideSize = k),
        w.push(k),
        n.centeredSlides
          ? ((g = g + k / 2 + S / 2 + f),
            S === 0 && _ !== 0 && (g = g - l / 2 - f),
            _ === 0 && (g = g - l / 2 - f),
            Math.abs(g) < 1 / 1e3 && (g = 0),
            n.roundLengths && (g = Math.floor(g)),
            E % n.slidesPerGroup === 0 && v.push(g),
            y.push(g))
          : (n.roundLengths && (g = Math.floor(g)),
            (E - Math.min(e.params.slidesPerGroupSkip, E)) %
              e.params.slidesPerGroup ===
              0 && v.push(g),
            y.push(g),
            (g = g + k + f)),
        (e.virtualSize += k + f),
        (S = k),
        (E += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + j),
    s &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + f}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + f}px`),
    N && e.grid.updateWrapperSize(k, v),
    !n.centeredSlides)
  ) {
    const _ = [];
    for (let P = 0; P < v.length; P += 1) {
      let O = v[P];
      n.roundLengths && (O = Math.floor(O)),
        v[P] <= e.virtualSize - l && _.push(O);
    }
    (v = _),
      Math.floor(e.virtualSize - l) - Math.floor(v[v.length - 1]) > 1 &&
        v.push(e.virtualSize - l);
  }
  if (o && n.loop) {
    const _ = w[0] + f;
    if (n.slidesPerGroup > 1) {
      const P = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        O = _ * n.slidesPerGroup;
      for (let L = 0; L < P; L += 1) v.push(v[v.length - 1] + O);
    }
    for (let P = 0; P < e.virtual.slidesBefore + e.virtual.slidesAfter; P += 1)
      n.slidesPerGroup === 1 && v.push(v[v.length - 1] + _),
        y.push(y[y.length - 1] + _),
        (e.virtualSize += _);
  }
  if ((v.length === 0 && (v = [0]), f !== 0)) {
    const _ =
      e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((P, O) =>
      !n.cssMode || n.loop ? !0 : O !== p.length - 1
    ).forEach((P) => {
      P.style[_] = `${f}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let _ = 0;
    w.forEach((O) => {
      _ += O + (f || 0);
    }),
      (_ -= f);
    const P = _ - l;
    v = v.map((O) => (O <= 0 ? -x : O > P ? P + j : O));
  }
  if (n.centerInsufficientSlides) {
    let _ = 0;
    if (
      (w.forEach((P) => {
        _ += P + (f || 0);
      }),
      (_ -= f),
      _ < l)
    ) {
      const P = (l - _) / 2;
      v.forEach((O, L) => {
        v[L] = O - P;
      }),
        y.forEach((O, L) => {
          y[L] = O + P;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: p,
      snapGrid: v,
      slidesGrid: y,
      slidesSizesGrid: w,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Dr(r, "--swiper-centered-offset-before", `${-v[0]}px`),
      Dr(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - w[w.length - 1] / 2}px`
      );
    const _ = -e.snapGrid[0],
      P = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + _)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + P));
  }
  if (
    (h !== d && e.emit("slidesLengthChange"),
    v.length !== m &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    y.length !== u && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const _ = `${n.containerModifierClass}backface-hidden`,
      P = e.el.classList.contains(_);
    h <= n.maxBackfaceHiddenSlides
      ? P || e.el.classList.add(_)
      : P && e.el.classList.remove(_);
  }
}
function fm(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function pm() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function mm(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < r.length; o += 1) {
    const d = r[o];
    let p = d.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (p -= r[0].swiperSlideOffset);
    const h =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - p) /
        (d.swiperSlideSize + a),
      v =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - p) /
        (d.swiperSlideSize + a),
      y = -(s - p),
      w = y + t.slidesSizesGrid[o],
      x = y >= 0 && y <= t.size - t.slidesSizesGrid[o];
    ((y >= 0 && y < t.size - 1) ||
      (w > 1 && w <= t.size) ||
      (y <= 0 && w >= t.size)) &&
      (t.visibleSlides.push(d),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      x && r[o].classList.add(n.slideFullyVisibleClass),
      (d.progress = i ? -h : h),
      (d.originalProgress = i ? -v : v);
  }
}
function hm(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * p) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    d = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const p = Math.abs(e - t.minTranslate()) < 1,
      h = Math.abs(e - t.maxTranslate()) < 1;
    (l = p || i <= 0), (s = h || i >= 1), p && (i = 0), h && (i = 1);
  }
  if (n.loop) {
    const p = t.getSlideIndexByData(0),
      h = t.getSlideIndexByData(t.slides.length - 1),
      v = t.slidesGrid[p],
      y = t.slidesGrid[h],
      w = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= v ? (a = (x - v) / w) : (a = (x + w - y) / w), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !d && t.emit("reachEnd toEdge"),
    ((o && !l) || (d && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function vm() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (h) => be(r, `.${n.slideClass}${h}, swiper-slide${h}`)[0];
  t.forEach((h) => {
    h.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o, d, p;
  if (l)
    if (n.loop) {
      let h = i - e.virtual.slidesBefore;
      h < 0 && (h = e.virtual.slides.length + h),
        h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${h}"]`));
    } else o = a(`[data-swiper-slide-index="${i}"]`);
  else
    s
      ? ((o = t.filter((h) => h.column === i)[0]),
        (p = t.filter((h) => h.column === i + 1)[0]),
        (d = t.filter((h) => h.column === i - 1)[0]))
      : (o = t[i]);
  o &&
    (o.classList.add(n.slideActiveClass),
    s
      ? (p && p.classList.add(n.slideNextClass),
        d && d.classList.add(n.slidePrevClass))
      : ((p = tm(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !p && (p = t[0]),
        p && p.classList.add(n.slideNextClass),
        (d = em(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !d === 0 && (d = t[t.length - 1]),
        d && d.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses();
}
const Yr = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  vl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  ms = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((o, d) => s + r + d)),
        e.slides.forEach((o, d) => {
          a.includes(o.column) && vl(e, d);
        });
      return;
    }
    const l = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= l + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < i || a > l) && vl(e, a);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && (s > l || s < i) && vl(e, s);
  };
function gm(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function ym(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    d;
  const p = (y) => {
    let w = y - t.virtual.slidesBefore;
    return (
      w < 0 && (w = t.virtual.slides.length + w),
      w >= t.virtual.slides.length && (w -= t.virtual.slides.length),
      w
    );
  };
  if ((typeof o > "u" && (o = gm(t)), r.indexOf(n) >= 0)) d = r.indexOf(n);
  else {
    const y = Math.min(i.slidesPerGroupSkip, o);
    d = y + Math.floor((o - y) / i.slidesPerGroup);
  }
  if ((d >= r.length && (d = r.length - 1), o === l && !t.params.loop)) {
    d !== a && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  if (o === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = p(o);
    return;
  }
  const h = t.grid && i.grid && i.grid.rows > 1;
  let v;
  if (t.virtual && i.virtual.enabled && i.loop) v = p(o);
  else if (h) {
    const y = t.slides.filter((x) => x.column === o)[0];
    let w = parseInt(y.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(w) && (w = Math.max(t.slides.indexOf(y), 0)),
      (v = Math.floor(w / i.grid.rows));
  } else if (t.slides[o]) {
    const y = t.slides[o].getAttribute("data-swiper-slide-index");
    y ? (v = parseInt(y, 10)) : (v = o);
  } else v = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: d,
    previousRealIndex: s,
    realIndex: v,
    previousIndex: l,
    activeIndex: o,
  }),
    t.initialized && ms(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== v && t.emit("realIndexChange"), t.emit("slideChange"));
}
function wm(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let l = !1,
    s;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (l = !0), (s = a);
        break;
      }
  }
  if (i && l)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var xm = {
  updateSize: cm,
  updateSlides: dm,
  updateAutoHeight: fm,
  updateSlidesOffset: pm,
  updateSlidesProgress: mm,
  updateProgress: hm,
  updateSlidesClasses: vm,
  updateActiveIndex: ym,
  updateClickedSlide: wm,
};
function Sm(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = qp(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function _m(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const d = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${a}px, ${o}px, ${d}px)`));
  let p;
  const h = n.maxTranslate() - n.minTranslate();
  h === 0 ? (p = 0) : (p = (e - n.minTranslate()) / h),
    p !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Em() {
  return -this.snapGrid[0];
}
function Cm() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function km(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    d = l.maxTranslate();
  let p;
  if (
    (r && e > o ? (p = o) : r && e < d ? (p = d) : (p = e),
    l.updateProgress(p),
    s.cssMode)
  ) {
    const h = l.isHorizontal();
    if (t === 0) a[h ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!l.support.smoothScroll)
        return (
          Hc({ swiper: l, targetPosition: -p, side: h ? "left" : "top" }), !0
        );
      a.scrollTo({ [h ? "left" : "top"]: -p, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(p),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(p),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (v) {
              !l ||
                l.destroyed ||
                (v.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Tm = {
  getTranslate: Sm,
  setTranslate: _m,
  minTranslate: Em,
  maxTranslate: Cm,
  translateTo: km,
};
function Nm(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Uc(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: l, previousIndex: s } = t;
  let a = r;
  if (
    (a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && l !== s)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function jm(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Uc({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Pm(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Uc({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Lm = { setTransition: Nm, transitionStart: jm, transitionEnd: Pm };
function Mm(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: d,
    previousIndex: p,
    activeIndex: h,
    rtlTranslate: v,
    wrapperEl: y,
    enabled: w,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!w && !r && !i))
    return !1;
  const x = Math.min(l.params.slidesPerGroupSkip, s);
  let j = x + Math.floor((s - x) / l.params.slidesPerGroup);
  j >= o.length && (j = o.length - 1);
  const m = -o[j];
  if (a.normalizeSlideIndex)
    for (let f = 0; f < d.length; f += 1) {
      const g = -Math.floor(m * 100),
        S = Math.floor(d[f] * 100),
        E = Math.floor(d[f + 1] * 100);
      typeof d[f + 1] < "u"
        ? g >= S && g < E - (E - S) / 2
          ? (s = f)
          : g >= S && g < E && (s = f + 1)
        : g >= S && (s = f);
    }
  if (
    l.initialized &&
    s !== h &&
    ((!l.allowSlideNext &&
      (v
        ? m > l.translate && m > l.minTranslate()
        : m < l.translate && m < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        m > l.translate &&
        m > l.maxTranslate() &&
        (h || 0) !== s))
  )
    return !1;
  s !== (p || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(m);
  let u;
  if (
    (s > h ? (u = "next") : s < h ? (u = "prev") : (u = "reset"),
    (v && -m === l.translate) || (!v && m === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(m),
      u !== "reset" && (l.transitionStart(n, u), l.transitionEnd(n, u)),
      !1
    );
  if (a.cssMode) {
    const f = l.isHorizontal(),
      g = v ? m : -m;
    if (t === 0) {
      const S = l.virtual && l.params.virtual.enabled;
      S &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              y[f ? "scrollLeft" : "scrollTop"] = g;
            }))
          : (y[f ? "scrollLeft" : "scrollTop"] = g),
        S &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          Hc({ swiper: l, targetPosition: g, side: f ? "left" : "top" }), !0
        );
      y.scrollTo({ [f ? "left" : "top"]: g, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(m),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, u),
    t === 0
      ? l.transitionEnd(n, u)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (g) {
            !l ||
              l.destroyed ||
              (g.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, u)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function zm(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this,
    l = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
    else {
      let a;
      if (l) {
        const v = s * i.params.grid.rows;
        a = i.slides.filter(
          (y) => y.getAttribute("data-swiper-slide-index") * 1 === v
        )[0].column;
      } else a = i.getSlideIndexByData(s);
      const o = l
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: d } = i.params;
      let p = i.params.slidesPerView;
      p === "auto"
        ? (p = i.slidesPerViewDynamic())
        : ((p = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          d && p % 2 === 0 && (p = p + 1));
      let h = o - a < p;
      if ((d && (h = h || a < Math.ceil(p / 2)), h)) {
        const v = d
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? a + 1 : a - o + 1,
          slideRealIndex: v === "next" ? i.realIndex : void 0,
        });
      }
      if (l) {
        const v = s * i.params.grid.rows;
        s = i.slides.filter(
          (y) => y.getAttribute("data-swiper-slide-index") * 1 === v
        )[0].column;
      } else s = i.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(s, t, n, r);
    }),
    i
  );
}
function Im(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i) return r;
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    d = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !d && l.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function Om(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: d,
    } = r;
  if (!o) return r;
  const p = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (d && !p && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const h = a ? r.translate : -r.translate;
  function v(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const y = v(h),
    w = l.map((m) => v(m));
  let x = l[w.indexOf(y) - 1];
  if (typeof x > "u" && i.cssMode) {
    let m;
    l.forEach((u, f) => {
      y >= u && (m = f);
    }),
      typeof m < "u" && (x = l[m > 0 ? m - 1 : m]);
  }
  let j = 0;
  if (
    (typeof x < "u" &&
      ((j = s.indexOf(x)),
      j < 0 && (j = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((j = j - r.slidesPerViewDynamic("previous", !0) + 1),
        (j = Math.max(j, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const m =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(m, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(j, e, t, n);
      }),
      !0
    );
  return r.slideTo(j, e, t, n);
}
function Dm(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function Rm(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const d = i.snapGrid[a],
      p = i.snapGrid[a + 1];
    o - d > (p - d) * r && (l += i.params.slidesPerGroup);
  } else {
    const d = i.snapGrid[a - 1],
      p = i.snapGrid[a];
    o - d <= (p - d) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function Am() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              be(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
            )),
            fs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            be(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
          )),
          fs(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var Fm = {
  slideTo: Mm,
  slideToLoop: zm,
  slideNext: Im,
  slidePrev: Om,
  slideReset: Dm,
  slideToClosest: Rm,
  slideToClickedSlide: Am,
};
function $m(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      be(r, `.${n.slideClass}, swiper-slide`).forEach((h, v) => {
        h.setAttribute("data-swiper-slide-index", v);
      });
    },
    l = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (l ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    o = l && t.slides.length % n.grid.rows !== 0,
    d = (p) => {
      for (let h = 0; h < p; h += 1) {
        const v = t.isElement
          ? Si("swiper-slide", [n.slideBlankClass])
          : Si("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(v);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const p = s - (t.slides.length % s);
      d(p), t.recalcSlides(), t.updateSlides();
    } else
      xi(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const p = n.grid.rows - (t.slides.length % n.grid.rows);
      d(p), t.recalcSlides(), t.updateSlides();
    } else
      xi(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Vm(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: l,
    byController: s,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
      slides: d,
      allowSlidePrev: p,
      allowSlideNext: h,
      slidesEl: v,
      params: y,
    } = o,
    { centeredSlides: w } = y;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && y.virtual.enabled)
  ) {
    n &&
      (!y.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : y.centeredSlides && o.snapIndex < y.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 &&
          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = p),
      (o.allowSlideNext = h),
      o.emit("loopFix");
    return;
  }
  let x = y.slidesPerView;
  x === "auto"
    ? (x = o.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(y.slidesPerView, 10))),
      w && x % 2 === 0 && (x = x + 1));
  const j = y.slidesPerGroupAuto ? x : y.slidesPerGroup;
  let m = j;
  m % j !== 0 && (m += j - (m % j)),
    (m += y.loopAdditionalSlides),
    (o.loopedSlides = m);
  const u = o.grid && y.grid && y.grid.rows > 1;
  d.length < x + m
    ? xi(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : u &&
      y.grid.fill === "row" &&
      xi(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const f = [],
    g = [];
  let S = o.activeIndex;
  typeof l > "u"
    ? (l = o.getSlideIndex(
        d.filter((L) => L.classList.contains(y.slideActiveClass))[0]
      ))
    : (S = l);
  const E = r === "next" || !r,
    N = r === "prev" || !r;
  let k = 0,
    T = 0;
  const _ = u ? Math.ceil(d.length / y.grid.rows) : d.length,
    O = (u ? d[l].column : l) + (w && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (O < m) {
    k = Math.max(m - O, j);
    for (let L = 0; L < m - O; L += 1) {
      const R = L - Math.floor(L / _) * _;
      if (u) {
        const F = _ - R - 1;
        for (let Z = d.length - 1; Z >= 0; Z -= 1)
          d[Z].column === F && f.push(Z);
      } else f.push(_ - R - 1);
    }
  } else if (O + x > _ - m) {
    T = Math.max(O - (_ - m * 2), j);
    for (let L = 0; L < T; L += 1) {
      const R = L - Math.floor(L / _) * _;
      u
        ? d.forEach((F, Z) => {
            F.column === R && g.push(Z);
          })
        : g.push(R);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    N &&
      f.forEach((L) => {
        (d[L].swiperLoopMoveDOM = !0),
          v.prepend(d[L]),
          (d[L].swiperLoopMoveDOM = !1);
      }),
    E &&
      g.forEach((L) => {
        (d[L].swiperLoopMoveDOM = !0),
          v.append(d[L]),
          (d[L].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    y.slidesPerView === "auto"
      ? o.updateSlides()
      : u &&
        ((f.length > 0 && N) || (g.length > 0 && E)) &&
        o.slides.forEach((L, R) => {
          o.grid.updateSlide(R, L, o.slides);
        }),
    y.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (f.length > 0 && N) {
      if (typeof t > "u") {
        const L = o.slidesGrid[S],
          F = o.slidesGrid[S + k] - L;
        a
          ? o.setTranslate(o.translate - F)
          : (o.slideTo(S + k, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - F),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - F)));
      } else if (i) {
        const L = u ? f.length / y.grid.rows : f.length;
        o.slideTo(o.activeIndex + L, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (g.length > 0 && E)
      if (typeof t > "u") {
        const L = o.slidesGrid[S],
          F = o.slidesGrid[S - T] - L;
        a
          ? o.setTranslate(o.translate - F)
          : (o.slideTo(S - T, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - F),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - F)));
      } else {
        const L = u ? g.length / y.grid.rows : g.length;
        o.slideTo(o.activeIndex - L, 0, !1, !0);
      }
  }
  if (
    ((o.allowSlidePrev = p),
    (o.allowSlideNext = h),
    o.controller && o.controller.control && !s)
  ) {
    const L = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((R) => {
          !R.destroyed &&
            R.params.loop &&
            R.loopFix({
              ...L,
              slideTo: R.params.slidesPerView === y.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...L,
          slideTo:
            o.controller.control.params.slidesPerView === y.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function Bm() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Hm = { loopCreate: $m, loopFix: Vm, loopDestroy: Bm };
function Gm(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Wm() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Um = { setGrabCursor: Gm, unsetGrabCursor: Wm };
function bm(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === _n() || r === Pe()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Ea(e, t, n) {
  const r = Pe(),
    { params: i } = e,
    l = i.edgeSwipeDetection,
    s = i.edgeSwipeThreshold;
  return l && (n <= s || n >= r.innerWidth - s)
    ? l === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Qm(e) {
  const t = this,
    n = _n();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Ea(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: l, touches: s, enabled: a } = t;
  if (
    !a ||
    (!l.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = r.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const d = !!l.noSwipingClass && l.noSwipingClass !== "",
    p = r.composedPath ? r.composedPath() : r.path;
  d && r.target && r.target.shadowRoot && p && (o = p[0]);
  const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    v = !!(r.target && r.target.shadowRoot);
  if (l.noSwiping && (v ? bm(h, o) : o.closest(h))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !o.closest(l.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const y = s.currentX,
    w = s.currentY;
  if (!Ea(t, r, y)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = y),
    (s.startY = w),
    (i.touchStartTime = wi()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  o.matches(i.focusableElements) &&
    ((x = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur();
  const j = x && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || j) &&
    !o.isContentEditable &&
    r.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function Ym(e) {
  const t = _n(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (r.touchId !== null || o.pointerId !== r.pointerId))
  )
    return;
  let d;
  if (o.type === "touchmove") {
    if (
      ((d = [...o.changedTouches].filter((E) => E.identifier === r.touchId)[0]),
      !d || d.identifier !== r.touchId)
    )
      return;
  } else d = o;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const p = d.pageX,
    h = d.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = p), (l.startY = h);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: p, startY: h, currentX: p, currentY: h }),
        (r.touchStartTime = wi()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (h < l.startY && n.translate <= n.maxTranslate()) ||
        (h > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (p < l.startX && n.translate <= n.maxTranslate()) ||
      (p > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = p),
    (l.currentY = h);
  const v = l.currentX - l.startX,
    y = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(v ** 2 + y ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let E;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : v * v + y * y >= 25 &&
        ((E = (Math.atan2(Math.abs(y), Math.abs(v)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let w = n.isHorizontal() ? v : y,
    x = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((w = Math.abs(w) * (s ? 1 : -1)), (x = Math.abs(x) * (s ? 1 : -1))),
    (l.diff = w),
    (w *= i.touchRatio),
    s && ((w = -w), (x = -x));
  const j = n.touchesDirection;
  (n.swipeDirection = w > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const m = n.params.loop && !i.cssMode,
    u =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (m && u && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(E);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let f;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      j !== n.touchesDirection &&
      m &&
      u &&
      Math.abs(w) >= 1)
  ) {
    Object.assign(l, {
      startX: p,
      startY: h,
      currentX: p,
      currentY: h,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = w + r.startTranslate);
  let g = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    w > 0
      ? (m &&
          u &&
          !f &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((g = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + w) ** S)))
      : w < 0 &&
        (m &&
          u &&
          !f &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((g = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - w) ** S))),
    g && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(w) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Xm(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((g) => g.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: s,
    touches: a,
    rtlTranslate: o,
    slidesGrid: d,
    enabled: p,
  } = t;
  if (!p || (!s.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const h = wi(),
    v = h - n.touchStartTime;
  if (t.allowClick) {
    const g = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((g && g[0]) || r.target, g),
      t.emit("tap click", r),
      v < 300 &&
        h - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = wi()),
    fs(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let y;
  if (
    (s.followFinger
      ? (y = o ? t.translate : -t.translate)
      : (y = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: y });
    return;
  }
  let w = 0,
    x = t.slidesSizesGrid[0];
  for (
    let g = 0;
    g < d.length;
    g += g < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const S = g < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof d[g + S] < "u"
      ? y >= d[g] && y < d[g + S] && ((w = g), (x = d[g + S] - d[g]))
      : y >= d[g] && ((w = g), (x = d[d.length - 1] - d[d.length - 2]));
  }
  let j = null,
    m = null;
  s.rewind &&
    (t.isBeginning
      ? (m =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (j = 0));
  const u = (y - d[w]) / x,
    f = w < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (v > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (u >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? j : w + f)
        : t.slideTo(w)),
      t.swipeDirection === "prev" &&
        (u > 1 - s.longSwipesRatio
          ? t.slideTo(w + f)
          : m !== null && u < 0 && Math.abs(u) > s.longSwipesRatio
          ? t.slideTo(m)
          : t.slideTo(w));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(w + f)
        : t.slideTo(w)
      : (t.swipeDirection === "next" && t.slideTo(j !== null ? j : w + f),
        t.swipeDirection === "prev" && t.slideTo(m !== null ? m : w));
  }
}
function Ca() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Km(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Zm() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function qm(e) {
  const t = this;
  Yr(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Jm() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const bc = (e, t) => {
  const n = _n(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    r.cssMode && l[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[d](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Ca,
          !0
        )
      : e[d]("observerUpdate", Ca, !0),
    i[o]("load", e.onLoad, { capture: !0 });
};
function eh() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = Qm.bind(e)),
    (e.onTouchMove = Ym.bind(e)),
    (e.onTouchEnd = Xm.bind(e)),
    (e.onDocumentTouchStart = Jm.bind(e)),
    t.cssMode && (e.onScroll = Zm.bind(e)),
    (e.onClick = Km.bind(e)),
    (e.onLoad = qm.bind(e)),
    bc(e, "on");
}
function th() {
  bc(this, "off");
}
var nh = { attachEvents: eh, detachEvents: th };
const ka = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function rh() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    d = ka(e, r),
    p = ka(e, o),
    h = r.enabled;
  d && !p
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !d &&
      p &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((m) => {
      if (typeof o[m] > "u") return;
      const u = r[m] && r[m].enabled,
        f = o[m] && o[m].enabled;
      u && !f && e[m].disable(), !u && f && e[m].enable();
    });
  const v = o.direction && o.direction !== r.direction,
    y = r.loop && (o.slidesPerView !== r.slidesPerView || v),
    w = r.loop;
  v && n && e.changeDirection(), Ee(e.params, o);
  const x = e.params.enabled,
    j = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    h && !x ? e.disable() : !h && x && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    n &&
      (y
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !w && j
        ? (e.loopCreate(t), e.updateSlides())
        : w && !j && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function ih(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Pe(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: d } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${d}px)`).matches && (r = o)
      : d <= n.clientWidth && (r = o);
  }
  return r || "max";
}
var lh = { setBreakpoint: rh, getBreakpoint: ih };
function sh(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function oh() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = sh(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function ah() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var uh = { addClasses: oh, removeClasses: ah };
function ch() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var dh = { checkOverflow: ch },
  hs = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function fh(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      Ee(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in l))
    ) {
      Ee(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ee(t, r);
  };
}
const gl = {
    eventsEmitter: um,
    update: xm,
    translate: Tm,
    transition: Lm,
    slide: Fm,
    loop: Hm,
    grabCursor: Um,
    events: nh,
    breakpoints: lh,
    checkOverflow: dh,
    classes: uh,
  },
  yl = {};
let fo = class Xe {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Ee({}, n)),
      t && !n.el && (n.el = t);
    const s = _n();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const p = [];
      return (
        s.querySelectorAll(n.el).forEach((h) => {
          const v = Ee({}, n, { el: h });
          p.push(new Xe(v));
        }),
        p
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Wc()),
      (a.device = im({ userAgent: n.userAgent })),
      (a.browser = sm()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((p) => {
      p({
        params: n,
        swiper: a,
        extendParams: fh(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const d = Ee({}, hs, o);
    return (
      (a.params = Ee({}, d, yl, n)),
      (a.originalParams = Ee({}, a.params)),
      (a.passedParams = Ee({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((p) => {
          a.on(p, a.params.on[p]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = be(n, `.${r.slideClass}, swiper-slide`),
      l = _i(i[0]);
    return _i(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = be(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: d,
      } = r;
    let p = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let h = l[d] ? l[d].swiperSlideSize : 0,
        v;
      for (let y = d + 1; y < l.length; y += 1)
        l[y] &&
          !v &&
          ((h += l[y].swiperSlideSize), (p += 1), h > o && (v = !0));
      for (let y = d - 1; y >= 0; y -= 1)
        l[y] &&
          !v &&
          ((h += l[y].swiperSlideSize), (p += 1), h > o && (v = !0));
    } else if (t === "current")
      for (let h = d + 1; h < l.length; h += 1)
        (n ? s[h] + a[h] - s[d] < o : s[h] - s[d] < o) && (p += 1);
    else for (let h = d - 1; h >= 0; h -= 1) s[d] - s[h] < o && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Yr(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : be(r, i())[0])();
    return (
      !s &&
        n.params.createElements &&
        ((s = Si("div", n.params.wrapperClass)),
        r.append(s),
        be(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || pt(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || pt(r, "direction") === "rtl"),
        wrongRTL: pt(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((l) => {
        l.complete
          ? Yr(n, l)
          : l.addEventListener("load", (s) => {
              Yr(n, s.target);
            });
      }),
      ms(n),
      (n.initialized = !0),
      ms(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.el.swiper = null), Kp(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ee(yl, t);
  }
  static get extendedDefaults() {
    return yl;
  }
  static get defaults() {
    return hs;
  }
  static installModule(t) {
    Xe.prototype.__modules__ || (Xe.prototype.__modules__ = []);
    const n = Xe.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Xe.installModule(n)), Xe)
      : (Xe.installModule(t), Xe);
  }
};
Object.keys(gl).forEach((e) => {
  Object.keys(gl[e]).forEach((t) => {
    fo.prototype[t] = gl[e][t];
  });
});
fo.use([om, am]);
const Qc = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Ht(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function dn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Ht(t[r]) && Ht(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : dn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Yc(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Xc(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Kc(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Zc(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function ph(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function mh(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: l,
    prevEl: s,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const d = i.filter(
      (T) => T !== "children" && T !== "direction" && T !== "wrapperClass"
    ),
    {
      params: p,
      pagination: h,
      navigation: v,
      scrollbar: y,
      virtual: w,
      thumbs: x,
    } = t;
  let j, m, u, f, g, S, E, N;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    p.thumbs &&
    !p.thumbs.swiper &&
    (j = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      p.controller &&
      !p.controller.control &&
      (m = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || o) &&
      (p.pagination || p.pagination === !1) &&
      h &&
      !h.el &&
      (u = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (p.scrollbar || p.scrollbar === !1) &&
      y &&
      !y.el &&
      (f = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || l) &&
      (p.navigation || p.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (g = !0);
  const k = (T) => {
    t[T] &&
      (t[T].destroy(),
      T === "navigation"
        ? (t.isElement && (t[T].prevEl.remove(), t[T].nextEl.remove()),
          (p[T].prevEl = void 0),
          (p[T].nextEl = void 0),
          (t[T].prevEl = void 0),
          (t[T].nextEl = void 0))
        : (t.isElement && t[T].el.remove(),
          (p[T].el = void 0),
          (t[T].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (p.loop && !r.loop ? (S = !0) : !p.loop && r.loop ? (E = !0) : (N = !0)),
    d.forEach((T) => {
      if (Ht(p[T]) && Ht(r[T]))
        Object.assign(p[T], r[T]),
          (T === "navigation" || T === "pagination" || T === "scrollbar") &&
            "enabled" in r[T] &&
            !r[T].enabled &&
            k(T);
      else {
        const _ = r[T];
        (_ === !0 || _ === !1) &&
        (T === "navigation" || T === "pagination" || T === "scrollbar")
          ? _ === !1 && k(T)
          : (p[T] = r[T]);
      }
    }),
    d.includes("controller") &&
      !m &&
      t.controller &&
      t.controller.control &&
      p.controller &&
      p.controller.control &&
      (t.controller.control = p.controller.control),
    i.includes("children") && n && w && p.virtual.enabled
      ? ((w.slides = n), w.update(!0))
      : i.includes("virtual") &&
        w &&
        p.virtual.enabled &&
        (n && (w.slides = n), w.update(!0)),
    i.includes("children") && n && p.loop && (N = !0),
    j && x.init() && x.update(!0),
    m && (t.controller.control = p.controller.control),
    u &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (p.pagination.el = o),
      h.init(),
      h.render(),
      h.update()),
    f &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (p.scrollbar.el = a),
      y.init(),
      y.updateSize(),
      y.setTranslate()),
    g &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      l && (p.navigation.nextEl = l),
      s && (p.navigation.prevEl = s),
      v.init(),
      v.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || N) && t.loopDestroy(),
    (E || N) && t.loopCreate(),
    t.update();
}
function hh(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  dn(n, hs), (n._emitClasses = !0), (n.init = !1);
  const l = {},
    s = Qc.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? Ht(e[o])
            ? ((n[o] = {}), (i[o] = {}), dn(n[o], e[o]), dn(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function vh(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: l,
    scrollbarEl: s,
    swiper: a,
  } = e;
  Yc(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    Xc(t) &&
      l &&
      ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
    Kc(t) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function gh(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      d = n.map(i);
    o.join("") !== d.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    Qc.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Ht(e[o]) && Ht(t[o])) {
            const d = Object.keys(e[o]),
              p = Object.keys(t[o]);
            d.length !== p.length
              ? s(o)
              : (d.forEach((h) => {
                  e[o][h] !== t[o][h] && s(o);
                }),
                p.forEach((h) => {
                  e[o][h] !== t[o][h] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
const yh = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Ei() {
  return (
    (Ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ei.apply(this, arguments)
  );
}
function qc(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Jc(e) {
  const t = [];
  return (
    ee.Children.toArray(e).forEach((n) => {
      qc(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Jc(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function wh(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    ee.Children.toArray(e).forEach((r) => {
      if (qc(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Jc(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function xh(e, t, n) {
  if (!n) return null;
  const r = (p) => {
      let h = p;
      return (
        p < 0 ? (h = t.length + p) : h >= t.length && (h = h - t.length), h
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    d = [];
  for (let p = a; p < o; p += 1) p >= l && p <= s && d.push(t[r(p)]);
  return d.map((p, h) =>
    ee.cloneElement(p, { swiper: e, style: i, key: `slide-${h}` })
  );
}
function Un(e, t) {
  return typeof window > "u" ? V.useEffect(e, t) : V.useLayoutEffect(e, t);
}
const Ta = V.createContext(null),
  Sh = V.createContext(null),
  ed = V.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      o = !1;
    const [d, p] = V.useState("swiper"),
      [h, v] = V.useState(null),
      [y, w] = V.useState(!1),
      x = V.useRef(!1),
      j = V.useRef(null),
      m = V.useRef(null),
      u = V.useRef(null),
      f = V.useRef(null),
      g = V.useRef(null),
      S = V.useRef(null),
      E = V.useRef(null),
      N = V.useRef(null),
      { params: k, passedParams: T, rest: _, events: P } = hh(a),
      { slides: O, slots: L } = wh(l),
      R = () => {
        w(!y);
      };
    Object.assign(k.on, {
      _containerClasses(I, D) {
        p(D);
      },
    });
    const F = () => {
      Object.assign(k.on, P), (o = !0);
      const I = { ...k };
      if (
        (delete I.wrapperClass,
        (m.current = new fo(I)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = O;
        const D = {
          cache: !1,
          slides: O,
          renderExternal: v,
          renderExternalUpdate: !1,
        };
        dn(m.current.params.virtual, D),
          dn(m.current.originalParams.virtual, D);
      }
    };
    j.current || F(), m.current && m.current.on("_beforeBreakpoint", R);
    const Z = () => {
        o ||
          !P ||
          !m.current ||
          Object.keys(P).forEach((I) => {
            m.current.on(I, P[I]);
          });
      },
      Nt = () => {
        !P ||
          !m.current ||
          Object.keys(P).forEach((I) => {
            m.current.off(I, P[I]);
          });
      };
    V.useEffect(() => () => {
      m.current && m.current.off("_beforeBreakpoint", R);
    }),
      V.useEffect(() => {
        !x.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (x.current = !0));
      }),
      Un(() => {
        if ((t && (t.current = j.current), !!j.current))
          return (
            m.current.destroyed && F(),
            vh(
              {
                el: j.current,
                nextEl: g.current,
                prevEl: S.current,
                paginationEl: E.current,
                scrollbarEl: N.current,
                swiper: m.current,
              },
              k
            ),
            s && s(m.current),
            () => {
              m.current && !m.current.destroyed && m.current.destroy(!0, !1);
            }
          );
      }, []),
      Un(() => {
        Z();
        const I = gh(T, u.current, O, f.current, (D) => D.key);
        return (
          (u.current = T),
          (f.current = O),
          I.length &&
            m.current &&
            !m.current.destroyed &&
            mh({
              swiper: m.current,
              slides: O,
              passedParams: T,
              changedParams: I,
              nextEl: g.current,
              prevEl: S.current,
              scrollbarEl: N.current,
              paginationEl: E.current,
            }),
          () => {
            Nt();
          }
        );
      }),
      Un(() => {
        yh(m.current);
      }, [h]);
    function M() {
      return k.virtual
        ? xh(m.current, O, h)
        : O.map((I, D) =>
            ee.cloneElement(I, { swiper: m.current, swiperSlideIndex: D })
          );
    }
    return ee.createElement(
      r,
      Ei({ ref: j, className: Zc(`${d}${n ? ` ${n}` : ""}`) }, _),
      ee.createElement(
        Sh.Provider,
        { value: m.current },
        L["container-start"],
        ee.createElement(
          i,
          { className: ph(k.wrapperClass) },
          L["wrapper-start"],
          M(),
          L["wrapper-end"]
        ),
        Yc(k) &&
          ee.createElement(
            ee.Fragment,
            null,
            ee.createElement("div", {
              ref: S,
              className: "swiper-button-prev",
            }),
            ee.createElement("div", { ref: g, className: "swiper-button-next" })
          ),
        Kc(k) &&
          ee.createElement("div", { ref: N, className: "swiper-scrollbar" }),
        Xc(k) &&
          ee.createElement("div", { ref: E, className: "swiper-pagination" }),
        L["container-end"]
      )
    );
  });
ed.displayName = "Swiper";
const td = V.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: d,
    ...p
  } = e === void 0 ? {} : e;
  const h = V.useRef(null),
    [v, y] = V.useState("swiper-slide"),
    [w, x] = V.useState(!1);
  function j(g, S, E) {
    S === h.current && y(E);
  }
  Un(() => {
    if (
      (typeof d < "u" && (h.current.swiperSlideIndex = d),
      t && (t.current = h.current),
      !(!h.current || !l))
    ) {
      if (l.destroyed) {
        v !== "swiper-slide" && y("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", j),
        () => {
          l && l.off("_slideClass", j);
        }
      );
    }
  }),
    Un(() => {
      l && h.current && !l.destroyed && y(l.getSlideClasses(h.current));
    }, [l]);
  const m = {
      isActive: v.indexOf("swiper-slide-active") >= 0,
      isVisible: v.indexOf("swiper-slide-visible") >= 0,
      isPrev: v.indexOf("swiper-slide-prev") >= 0,
      isNext: v.indexOf("swiper-slide-next") >= 0,
    },
    u = () => (typeof r == "function" ? r(m) : r),
    f = () => {
      x(!0);
    };
  return ee.createElement(
    n,
    Ei(
      {
        ref: h,
        className: Zc(`${v}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: f,
      },
      p
    ),
    s &&
      ee.createElement(
        Ta.Provider,
        { value: m },
        ee.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          u(),
          a &&
            !w &&
            ee.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      ee.createElement(
        Ta.Provider,
        { value: m },
        u(),
        a &&
          !w &&
          ee.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
td.displayName = "SwiperSlide";
function _h(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let l = be(e.el, `.${r[i]}`)[0];
          l || ((l = Si("div", r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l);
        }
      }),
    n
  );
}
function Mn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Eh(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${l}-bullet`,
      bulletActiveClass: `${l}-bullet-active`,
      modifierClass: `${l}-`,
      currentClass: `${l}-current`,
      totalClass: `${l}-total`,
      hiddenClass: `${l}-hidden`,
      progressbarFillClass: `${l}-progressbar-fill`,
      progressbarOppositeClass: `${l}-progressbar-opposite`,
      clickableClass: `${l}-clickable`,
      lockClass: `${l}-lock`,
      horizontalClass: `${l}-horizontal`,
      verticalClass: `${l}-vertical`,
      paginationDisabledClass: `${l}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let s,
    a = 0;
  const o = (u) => (Array.isArray(u) ? u : [u]).filter((f) => !!f);
  function d() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function p(u, f) {
    const { bulletActiveClass: g } = t.params.pagination;
    u &&
      ((u = u[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${g}-${f}`),
        (u = u[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${g}-${f}-${f}`)));
  }
  function h(u) {
    const f = u.target.closest(Mn(t.params.pagination.bulletClass));
    if (!f) return;
    u.preventDefault();
    const g = _i(f) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === g) return;
      t.slideToLoop(g);
    } else t.slideTo(g);
  }
  function v() {
    const u = t.rtl,
      f = t.params.pagination;
    if (d()) return;
    let g = t.pagination.el;
    g = o(g);
    let S, E;
    const N =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      k = t.params.loop
        ? Math.ceil(N / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((E = t.previousRealIndex || 0),
          (S =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((S = t.snapIndex), (E = t.previousSnapIndex))
        : ((E = t.previousIndex || 0), (S = t.activeIndex || 0)),
      f.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const T = t.pagination.bullets;
      let _, P, O;
      if (
        (f.dynamicBullets &&
          ((s = ps(T[0], t.isHorizontal() ? "width" : "height", !0)),
          g.forEach((L) => {
            L.style[t.isHorizontal() ? "width" : "height"] = `${
              s * (f.dynamicMainBullets + 4)
            }px`;
          }),
          f.dynamicMainBullets > 1 &&
            E !== void 0 &&
            ((a += S - (E || 0)),
            a > f.dynamicMainBullets - 1
              ? (a = f.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (_ = Math.max(S - a, 0)),
          (P = _ + (Math.min(T.length, f.dynamicMainBullets) - 1)),
          (O = (P + _) / 2)),
        T.forEach((L) => {
          const R = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (F) => `${f.bulletActiveClass}${F}`
            ),
          ]
            .map((F) =>
              typeof F == "string" && F.includes(" ") ? F.split(" ") : F
            )
            .flat();
          L.classList.remove(...R);
        }),
        g.length > 1)
      )
        T.forEach((L) => {
          const R = _i(L);
          R === S
            ? L.classList.add(...f.bulletActiveClass.split(" "))
            : t.isElement && L.setAttribute("part", "bullet"),
            f.dynamicBullets &&
              (R >= _ &&
                R <= P &&
                L.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),
              R === _ && p(L, "prev"),
              R === P && p(L, "next"));
        });
      else {
        const L = T[S];
        if (
          (L && L.classList.add(...f.bulletActiveClass.split(" ")),
          t.isElement &&
            T.forEach((R, F) => {
              R.setAttribute("part", F === S ? "bullet-active" : "bullet");
            }),
          f.dynamicBullets)
        ) {
          const R = T[_],
            F = T[P];
          for (let Z = _; Z <= P; Z += 1)
            T[Z] &&
              T[Z].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
          p(R, "prev"), p(F, "next");
        }
      }
      if (f.dynamicBullets) {
        const L = Math.min(T.length, f.dynamicMainBullets + 4),
          R = (s * L - s) / 2 - O * s,
          F = u ? "right" : "left";
        T.forEach((Z) => {
          Z.style[t.isHorizontal() ? F : "top"] = `${R}px`;
        });
      }
    }
    g.forEach((T, _) => {
      if (
        (f.type === "fraction" &&
          (T.querySelectorAll(Mn(f.currentClass)).forEach((P) => {
            P.textContent = f.formatFractionCurrent(S + 1);
          }),
          T.querySelectorAll(Mn(f.totalClass)).forEach((P) => {
            P.textContent = f.formatFractionTotal(k);
          })),
        f.type === "progressbar")
      ) {
        let P;
        f.progressbarOpposite
          ? (P = t.isHorizontal() ? "vertical" : "horizontal")
          : (P = t.isHorizontal() ? "horizontal" : "vertical");
        const O = (S + 1) / k;
        let L = 1,
          R = 1;
        P === "horizontal" ? (L = O) : (R = O),
          T.querySelectorAll(Mn(f.progressbarFillClass)).forEach((F) => {
            (F.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${R})`),
              (F.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      f.type === "custom" && f.renderCustom
        ? ((T.innerHTML = f.renderCustom(t, S + 1, k)),
          _ === 0 && i("paginationRender", T))
        : (_ === 0 && i("paginationRender", T), i("paginationUpdate", T)),
        t.params.watchOverflow &&
          t.enabled &&
          T.classList[t.isLocked ? "add" : "remove"](f.lockClass);
    });
  }
  function y() {
    const u = t.params.pagination;
    if (d()) return;
    const f =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let g = t.pagination.el;
    g = o(g);
    let S = "";
    if (u.type === "bullets") {
      let E = t.params.loop
        ? Math.ceil(f / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && E > f && (E = f);
      for (let N = 0; N < E; N += 1)
        u.renderBullet
          ? (S += u.renderBullet.call(t, N, u.bulletClass))
          : (S += `<${u.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (S = u.renderFraction.call(t, u.currentClass, u.totalClass))
        : (S = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (S = u.renderProgressbar.call(t, u.progressbarFillClass))
          : (S = `<span class="${u.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      g.forEach((E) => {
        u.type !== "custom" && (E.innerHTML = S || ""),
          u.type === "bullets" &&
            t.pagination.bullets.push(...E.querySelectorAll(Mn(u.bulletClass)));
      }),
      u.type !== "custom" && i("paginationRender", g[0]);
  }
  function w() {
    t.params.pagination = _h(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const u = t.params.pagination;
    if (!u.el) return;
    let f;
    typeof u.el == "string" && t.isElement && (f = t.el.querySelector(u.el)),
      !f &&
        typeof u.el == "string" &&
        (f = [...document.querySelectorAll(u.el)]),
      f || (f = u.el),
      !(!f || f.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(f) &&
          f.length > 1 &&
          ((f = [...t.el.querySelectorAll(u.el)]),
          f.length > 1 &&
            (f = f.filter((g) => Gc(g, ".swiper")[0] === t.el)[0])),
        Array.isArray(f) && f.length === 1 && (f = f[0]),
        Object.assign(t.pagination, { el: f }),
        (f = o(f)),
        f.forEach((g) => {
          u.type === "bullets" &&
            u.clickable &&
            g.classList.add(...(u.clickableClass || "").split(" ")),
            g.classList.add(u.modifierClass + u.type),
            g.classList.add(
              t.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (g.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (a = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              g.classList.add(u.progressbarOppositeClass),
            u.clickable && g.addEventListener("click", h),
            t.enabled || g.classList.add(u.lockClass);
        }));
  }
  function x() {
    const u = t.params.pagination;
    if (d()) return;
    let f = t.pagination.el;
    f &&
      ((f = o(f)),
      f.forEach((g) => {
        g.classList.remove(u.hiddenClass),
          g.classList.remove(u.modifierClass + u.type),
          g.classList.remove(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass
          ),
          u.clickable &&
            (g.classList.remove(...(u.clickableClass || "").split(" ")),
            g.removeEventListener("click", h));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((g) =>
          g.classList.remove(...u.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const u = t.params.pagination;
    let { el: f } = t.pagination;
    (f = o(f)),
      f.forEach((g) => {
        g.classList.remove(u.horizontalClass, u.verticalClass),
          g.classList.add(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? m() : (w(), y(), v());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && v();
    }),
    r("snapIndexChange", () => {
      v();
    }),
    r("snapGridLengthChange", () => {
      y(), v();
    }),
    r("destroy", () => {
      x();
    }),
    r("enable disable", () => {
      let { el: u } = t.pagination;
      u &&
        ((u = o(u)),
        u.forEach((f) =>
          f.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      v();
    }),
    r("click", (u, f) => {
      const g = f.target,
        S = o(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        S &&
        S.length > 0 &&
        !g.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && g === t.navigation.nextEl) ||
            (t.navigation.prevEl && g === t.navigation.prevEl))
        )
          return;
        const E = S[0].classList.contains(t.params.pagination.hiddenClass);
        i(E === !0 ? "paginationShow" : "paginationHide"),
          S.forEach((N) => N.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const j = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = o(u)),
        u.forEach((f) =>
          f.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        w(),
        y(),
        v();
    },
    m = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = o(u)),
        u.forEach((f) =>
          f.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        x();
    };
  Object.assign(t.pagination, {
    enable: j,
    disable: m,
    render: y,
    update: v,
    init: w,
    destroy: x,
  });
}
const Ch = () =>
    c.jsxs("section", {
      className: "testimonial container section",
      children: [
        c.jsx("h2", {
          className: "section__title",
          children: "My clients say",
        }),
        c.jsx("span", {
          className: "section__subtitle",
          children: "Testimonials",
        }),
        c.jsx(ed, {
          className: "testiminial__container",
          loop: !0,
          grabCursor: !0,
          spaceBetween: 24,
          pagination: { clickable: !0 },
          breakpoints: {
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2, spaceBetween: 48 },
          },
          modules: [Eh],
          children: Qp.map(({ id: e, image: t, title: n, description: r }) =>
            c.jsxs(
              td,
              {
                className: "testimonial__card",
                children: [
                  c.jsx("img", {
                    src: t,
                    alt: "",
                    className: "testimonial__img",
                  }),
                  c.jsx("h3", { className: "testimonial__name", children: n }),
                  c.jsx("p", {
                    className: "testimonial__description",
                    children: r,
                  }),
                ],
              },
              e
            )
          ),
        }),
      ],
    }),
  ur = { _origin: "https://api.emailjs.com" },
  kh = (e, t = "https://api.emailjs.com") => {
    (ur._userID = e), (ur._origin = t);
  },
  nd = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Na {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const rd = (e, t, n = {}) =>
    new Promise((r, i) => {
      const l = new XMLHttpRequest();
      l.addEventListener("load", ({ target: s }) => {
        const a = new Na(s);
        a.status === 200 || a.text === "OK" ? r(a) : i(a);
      }),
        l.addEventListener("error", ({ target: s }) => {
          i(new Na(s));
        }),
        l.open("POST", ur._origin + e, !0),
        Object.keys(n).forEach((s) => {
          l.setRequestHeader(s, n[s]);
        }),
        l.send(t);
    }),
  Th = (e, t, n, r) => {
    const i = r || ur._userID;
    return (
      nd(i, e, t),
      rd(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.11.0",
          user_id: i,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  Nh = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  jh = (e, t, n, r) => {
    const i = r || ur._userID,
      l = Nh(n);
    nd(i, e, t);
    const s = new FormData(l);
    return (
      s.append("lib_version", "3.11.0"),
      s.append("service_id", e),
      s.append("template_id", t),
      s.append("user_id", i),
      rd("/api/v1.0/email/send-form", s)
    );
  },
  Ph = { init: kh, send: Th, sendForm: jh };
const Lh = () => {
  const e = V.useRef(),
    t = (n) => {
      n.preventDefault(),
        Ph.sendForm(
          "service_f6vl67y",
          "template_7kulo4b",
          e.current,
          "gh8Om_1u66_Ulhew_"
        ),
        n.target.reset();
    };
  return c.jsxs("section", {
    className: "contact section",
    id: "contact",
    children: [
      c.jsx("h2", { className: "section__title", children: "Get in touch" }),
      c.jsx("span", { className: "section__subtitle", children: "Contact Me" }),
      c.jsxs("div", {
        className: "contact__container container grid",
        children: [
          c.jsxs("div", {
            className: "contact__content",
            children: [
              c.jsx("h3", {
                className: "contact__title",
                children: "Talk to me",
              }),
              c.jsxs("div", {
                className: "contact__info",
                children: [
                  c.jsxs("div", {
                    className: "contact__card",
                    children: [
                      c.jsx("i", {
                        className: "bx bx-mail-send contact__card-icon",
                      }),
                      c.jsx("h3", {
                        className: "contact__card-title",
                        children: "Email",
                      }),
                      c.jsx("span", {
                        className: "contact__card-data",
                        children: "ragibshahriar43@gmail.com",
                      }),
                      c.jsxs("a", {
                        href: "mailto:ragibshahriar43@gmail.com",
                        target: "_blank",
                        className: "contact__button",
                        rel: "noreferrer",
                        children: [
                          "Write me",
                          c.jsx("i", {
                            className:
                              "bx bx-right-arrow-alt contact__button-icon",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "contact__card",
                    children: [
                      c.jsx("i", {
                        className: "bx bxl-whatsapp contact__card-icon",
                      }),
                      c.jsx("h3", {
                        className: "contact__card-title",
                        children: "Whatsapp",
                      }),
                      c.jsx("span", {
                        className: "contact__card-data",
                        children: "+880 1798204194",
                      }),
                      c.jsxs("a", {
                        href: "https://wa.me/8801798204194/?text=Hello,%20more%20information!",
                        target: "_blank",
                        className: "contact__button",
                        rel: "noreferrer",
                        children: [
                          "Write me",
                          c.jsx("i", {
                            className:
                              "bx bx-right-arrow-alt contact__button-icon",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "contact__card",
                    children: [
                      c.jsx("i", {
                        className: "bx bxl-messenger contact__card-icon",
                      }),
                      c.jsx("h3", {
                        className: "contact__card-title",
                        children: "Messenger",
                      }),
                      c.jsx("span", {
                        className: "contact__card-data",
                        children: "facebook.com/R4nz5r",
                      }),
                      c.jsxs("a", {
                        href: "https://www.facebook.com/R4nz5r",
                        target: "_blank",
                        className: "contact__button",
                        rel: "noreferrer",
                        children: [
                          "Write me",
                          c.jsx("i", {
                            className:
                              "bx bx-right-arrow-alt contact__button-icon",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "contact__content",
            children: [
              c.jsx("h3", {
                className: "contact__title",
                children: "Write me your project",
              }),
              c.jsxs("form", {
                className: "contact__form",
                ref: e,
                onSubmit: t,
                children: [
                  c.jsxs("div", {
                    className: "contact__form-div",
                    children: [
                      c.jsx("label", {
                        className: "contact__form-tag",
                        children: "Name",
                      }),
                      c.jsx("input", {
                        type: "text",
                        name: "name",
                        className: "contact__form-input",
                        placeholder: "Insert your name",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "contact__form-div",
                    children: [
                      c.jsx("label", {
                        className: "contact__form-tag",
                        children: "Mail",
                      }),
                      c.jsx("input", {
                        type: "email",
                        name: "email",
                        className: "contact__form-input",
                        placeholder: "Insert your email",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "contact__form-div contact__form-area",
                    children: [
                      c.jsx("label", {
                        className: "contact__form-tag",
                        children: "Project",
                      }),
                      c.jsx("textarea", {
                        name: "project",
                        cols: "30",
                        rows: "10",
                        className: "contact__form-input",
                        placeholder: "Write your project",
                      }),
                    ],
                  }),
                  c.jsxs("button", {
                    href: "#contact",
                    className: "button button-flex",
                    children: [
                      "Send Message",
                      c.jsxs("svg", {
                        className: "button__icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [
                          c.jsx("path", {
                            d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                            fill: "var(--container-color)",
                          }),
                          c.jsx("path", {
                            d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                            fill: "var(--container-color)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
const Mh = () =>
  c.jsx("footer", {
    className: "footer",
    children: c.jsxs("div", {
      className: "footer__container container",
      children: [
        c.jsx("h1", { className: "footer__title", children: "Ragib Shahrier" }),
        c.jsxs("ul", {
          className: "footer__list",
          children: [
            c.jsx("li", {
              children: c.jsx("a", {
                href: "#about",
                className: "footer__link",
                children: "About",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                href: "#portfolio",
                className: "footer__link",
                children: "Projects",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                href: "#testimonials",
                className: "footer__link",
                children: "Testimonials",
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className: "footer__social",
          children: [
            c.jsx("a", {
              href: "https://www.instagram.com/imm_ragib",
              className: "home__social-icon",
              target: "_blank",
              rel: "noreferrer",
              children: c.jsx("i", { className: "uil uil-instagram" }),
            }),
            c.jsx("a", {
              href: "https://www.facebook.com/R4nz5r",
              className: "home__social-icon",
              target: "_blank",
              rel: "noreferrer",
              children: c.jsx("i", { className: "uil uil-facebook" }),
            }),
            c.jsx("a", {
              href: "https://www.linkedin.com/in/ragib-shahrier/",
              className: "home__social-icon",
              target: "_blank",
              rel: "noreferrer",
              children: c.jsx("i", { className: "uil uil-linkedin" }),
            }),
            c.jsx("a", {
              href: "https://github.com/R4nz5r",
              className: "home__social-icon",
              target: "_blank",
              rel: "noreferrer",
              children: c.jsx("i", { className: "uil uil-github-alt" }),
            }),
          ],
        }),
        c.jsx("span", {
          className: "footer__copy",
          children: "© Ragib Shahrier - All rights reserved.",
        }),
      ],
    }),
  });
const zh = () => (
  window.addEventListener("scroll", function () {
    const e = document.querySelector(".scrollup");
    this.scrollY >= 560
      ? e.classList.add("show-scroll")
      : e.classList.remove("show-scroll");
  }),
  c.jsx("a", {
    href: "#",
    className: "scrollup",
    children: c.jsx("i", { className: "uil uil-arrow-up scrollup_icon" }),
  })
);
function Ih() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Mp, {}),
      c.jsxs("main", {
        className: "main",
        children: [
          c.jsx(Dp, {}),
          c.jsx($p, {}),
          c.jsx(Hp, {}),
          c.jsx(Gp, {}),
          c.jsx(Ch, {}),
          c.jsx(Lh, {}),
        ],
      }),
      c.jsx(Mh, {}),
      c.jsx(zh, {}),
    ],
  });
}
wl.createRoot(document.getElementById("root")).render(
  c.jsx(ee.StrictMode, { children: c.jsx(Ih, {}) })
);
