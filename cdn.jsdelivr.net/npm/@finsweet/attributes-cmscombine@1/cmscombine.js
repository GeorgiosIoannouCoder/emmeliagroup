"use strict";
(() => {
  var O = Object.create;
  var d = Object.defineProperty;
  var N = Object.getOwnPropertyDescriptor;
  var D = Object.getOwnPropertyNames;
  var k = Object.getPrototypeOf,
    $ = Object.prototype.hasOwnProperty;
  var F = (e, t, r) =>
    t in e
      ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  var j = ((e) =>
    typeof require != "undefined"
      ? require
      : typeof Proxy != "undefined"
      ? new Proxy(e, {
          get: (t, r) => (typeof require != "undefined" ? require : t)[r],
        })
      : e)(function (e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var q = (e, t, r, s) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of D(t))
        !$.call(e, o) &&
          o !== r &&
          d(e, o, {
            get: () => t[o],
            enumerable: !(s = N(t, o)) || s.enumerable,
          });
    return e;
  };
  var G = (e, t, r) => (
    (r = e != null ? O(k(e)) : {}),
    q(
      t || !e || !e.__esModule
        ? d(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var R = (e, t, r) => (F(e, typeof t != "symbol" ? t + "" : t, r), r);
  var u = "fs-attributes";
  var _ = "cmsattribute",
    l = "cmscombine";
  var C = async (...e) => {
    var r;
    let t = [];
    for (let s of e) {
      let o = await ((r = window.fsAttributes[s]) == null ? void 0 : r.loading);
      t.push(o);
    }
    return t;
  };
  var m = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(t, r) {
      if ((this.alertsActivated && window.alert(t), r === "error"))
        throw new Error(t);
    }
  };
  R(m, "alertsActivated", !1);
  var E = () => {};
  function w(e, t, r) {
    var o;
    let s = window.fsAttributes[e];
    return (s.destroy = r || E), (o = s.resolve) == null || o.call(s, t), t;
  }
  var U = async () => {
    let { fsAttributes: e } = window;
    e.cmscore || (e.cmscore = {});
    let { cmscore: t } = e;
    if (t.import) return t.import;
    try {
      return (
        (t.import = import(
          "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmscore@1/cmscore.js"
        )),
        t.import.then((r) => {
          r && (t.version || (t.version = r.version));
        }),
        t.import
      );
    } catch (r) {
      m.alert(`${r}`, "error");
      return;
    }
  };
  var H = `${u}-support`,
    X =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
    g = async () => {
      let { fsAttributes: e, location: t } = window,
        { host: r, searchParams: s } = new URL(t.href);
      e.support || (e.support = {});
      let { support: o } = e;
      if (!r.includes("webflow.io") || !s.has(H)) return !1;
      if (o.import) return o.import;
      try {
        o.import = new Promise((i, n) => {
          let c = document.createElement("script");
          (c.src = X),
            (c.onload = () => i(!0)),
            (c.onerror = n),
            document.head.append(c);
        });
      } catch (i) {
        return !1;
      }
      return o.import;
    };
  var x = (e) => (t) => `${e}${t ? `-${t}` : ""}`,
    A = (e) => {
      let t = (s, o, i) => {
        let n = e[s],
          { key: c, values: b } = n,
          a;
        if (!o) return `[${c}]`;
        let f = b == null ? void 0 : b[o];
        typeof f == "string"
          ? (a = f)
          : (a = f(i && "instanceIndex" in i ? i.instanceIndex : void 0));
        let T = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
        if (!(i != null && i.operator)) return `[${c}="${a}"${T}]`;
        switch (i.operator) {
          case "prefixed":
            return `[${c}^="${a}"${T}]`;
          case "suffixed":
            return `[${c}$="${a}"${T}]`;
          case "contains":
            return `[${c}*="${a}"${T}]`;
        }
      };
      function r(s, o) {
        let i = t("element", s, o),
          n = (o == null ? void 0 : o.scope) || document;
        return o != null && o.all
          ? [...n.querySelectorAll(i)]
          : n.querySelector(i);
      }
      return [t, r];
    };
  var p = {
      preventLoad: { key: `${u}-preventload` },
      debugMode: { key: `${u}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${u}-dev` },
    },
    [y, It] = A(p);
  var B = (e) => {
    let { currentScript: t } = document,
      r = {};
    if (!t) return { attributes: r, preventsLoad: !1 };
    let o = {
      preventsLoad: typeof t.getAttribute(p.preventLoad.key) == "string",
      attributes: r,
    };
    for (let i in e) {
      let n = t.getAttribute(e[i]);
      o.attributes[i] = n;
    }
    return o;
  };
  var M = ({ scriptAttributes: e, attributeKey: t, version: r, init: s }) => {
      var c;
      Y(), (c = window.fsAttributes)[t] || (c[t] = {});
      let { preventsLoad: o, attributes: i } = B(e),
        n = window.fsAttributes[t];
      (n.version = r),
        (n.init = s),
        o ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => s(i)));
    },
    Y = () => {
      let e = z();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        v(window.fsAttributes, e);
        return;
      }
      let t = {
        cms: {},
        push(...r) {
          var s, o;
          for (let [i, n] of r)
            (o = (s = this[i]) == null ? void 0 : s.loading) == null ||
              o.then(n);
        },
        destroy() {
          var r, s;
          for (let o of e)
            (s = (r = window.fsAttributes[o]) == null ? void 0 : r.destroy) ==
              null || s.call(r);
        },
      };
      v(t, e),
        W(t),
        (window.fsAttributes = t),
        (window.FsAttributes = window.fsAttributes),
        g();
    },
    z = () => {
      let e = y("src", "finsweet", { operator: "contains" }),
        t = y("dev");
      return [...document.querySelectorAll(`script${e}, script${t}`)].reduce(
        (o, i) => {
          var c;
          let n =
            i.getAttribute(p.dev.key) ||
            ((c = i.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
          return n && !o.includes(n) && o.push(n), o;
        },
        []
      );
    },
    v = (e, t) => {
      for (let r of t) {
        if (e[r]) continue;
        e[r] = {};
        let s = e[r];
        s.loading = new Promise((o) => {
          s.resolve = (i) => {
            o(i), delete s.resolve;
          };
        });
      }
    },
    W = (e) => {
      let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      e.push(...t);
    };
  var h = "1.8.0";
  var J = `fs-${l}`,
    Z = "list",
    tt = "items-count",
    I = {
      element: {
        key: `${J}-element`,
        values: { list: x(Z), itemsCount: x(tt) },
      },
    },
    [L, P] = A(I);
  var V = (e) => {
    var r;
    let t = [];
    for (let s of e) {
      let o = s.getInstanceIndex(I.element.key),
        i =
          t[(r = o || 0)] ||
          (t[r] = { lists: [], target: s, instanceIndex: o });
      s !== i.target && i.lists.push(s);
    }
    return (t = t.filter((s) => s && s.lists.length)), t;
  };
  var S = async (e, t) => {
    let r = t.map(({ element: s }) => s);
    await e.addItems(r);
  };
  var K = async () => {
      let e = await U();
      if (!e) return [];
      await C(_);
      let t = e.createCMSListInstances([
          L("element", "list", { operator: "prefixed" }),
        ]),
        r = V(t),
        s = await Promise.all(r.map(et));
      return w(l, s, () => {
        var o;
        for (let i of t) (o = i.destroy) == null || o.call(i);
      });
    },
    et = async ({ lists: e, target: t, instanceIndex: r }) => {
      if (!t.itemsCount) {
        let s = P("itemsCount", { instanceIndex: r });
        s && t.addItemsCount(s);
      }
      for (let s of e) s.on("additems", async (o) => await S(t, o));
      return (
        await Promise.all(
          e.map(async ({ wrapper: s, items: o }) => {
            s.remove(), await S(t, o);
          })
        ),
        t
      );
    };
  M({ init: K, version: h, attributeKey: l });
})();
