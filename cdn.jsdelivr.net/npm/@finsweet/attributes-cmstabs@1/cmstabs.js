"use strict";
(() => {
  var W = Object.create;
  var w = Object.defineProperty;
  var z = Object.getOwnPropertyDescriptor;
  var Q = Object.getOwnPropertyNames;
  var J = Object.getPrototypeOf,
    Z = Object.prototype.hasOwnProperty;
  var tt = (e, t, o) =>
    t in e
      ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  var et = ((e) =>
    typeof require != "undefined"
      ? require
      : typeof Proxy != "undefined"
      ? new Proxy(e, {
          get: (t, o) => (typeof require != "undefined" ? require : t)[o],
        })
      : e)(function (e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var rt = (e, t, o, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let r of Q(t))
        !Z.call(e, r) &&
          r !== o &&
          w(e, r, {
            get: () => t[r],
            enumerable: !(n = z(t, r)) || n.enumerable,
          });
    return e;
  };
  var ot = (e, t, o) => (
    (o = e != null ? W(J(e)) : {}),
    rt(
      t || !e || !e.__esModule
        ? w(o, "default", { value: e, enumerable: !0 })
        : o,
      e
    )
  );
  var v = (e, t, o) => (tt(e, typeof t != "symbol" ? t + "" : t, o), o);
  var m = "fs-attributes";
  var U = "cmsattribute";
  var T = "cmstabs";
  var B = async (...e) => {
    var o;
    let t = [];
    for (let n of e) {
      let r = await ((o = window.fsAttributes[n]) == null ? void 0 : o.loading);
      t.push(r);
    }
    return t;
  };
  var A = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(t, o) {
      if ((this.alertsActivated && window.alert(t), o === "error"))
        throw new Error(t);
    }
  };
  v(A, "alertsActivated", !1);
  var I = () => {};
  var h = "w--current";
  var x = {
    tabs: "w-tabs",
    tabsContent: "w-tab-content",
    tabPane: "w-tab-pane",
    tabsMenu: "w-tab-menu",
    tabLink: "w-tab-link",
    activeTab: "w--tab-active",
  };
  var y = () => document.documentElement.getAttribute("data-wf-site");
  var R = async (e) => {
    var o, n, r;
    let { Webflow: t } = window;
    if (
      !(!t || !("destroy" in t) || !("ready" in t) || !("require" in t)) &&
      !(e && !e.length)
    ) {
      if ((e || (t.destroy(), t.ready()), !e || e.includes("ix2"))) {
        let s = t.require("ix2");
        if (s) {
          let { store: i, actions: a } = s,
            { eventState: c } = i.getState().ixSession,
            l = Object.entries(c);
          e || s.destroy(),
            s.init(),
            await Promise.all(
              l.map((p) => i.dispatch(a.eventStateChanged(...p)))
            );
        }
      }
      if (!e || e.includes("commerce")) {
        let s = t.require("commerce"),
          i = y();
        s &&
          i &&
          (s.destroy(),
          s.init({ siteId: i, apiUrl: "https://render.webflow.com" }));
      }
      return (
        e != null &&
          e.includes("lightbox") &&
          ((o = t.require("lightbox")) == null || o.ready()),
        e != null &&
          e.includes("slider") &&
          ((n = t.require("slider")) == null || n.redraw()),
        e != null &&
          e.includes("tabs") &&
          ((r = t.require("tabs")) == null || r.redraw()),
        new Promise((s) => t.push(() => s(void 0)))
      );
    }
  };
  function P(e, t, o) {
    var r;
    let n = window.fsAttributes[e];
    return (n.destroy = o || I), (r = n.resolve) == null || r.call(n, t), t;
  }
  var M = async () => {
    let { fsAttributes: e } = window;
    e.cmscore || (e.cmscore = {});
    let { cmscore: t } = e;
    if (t.import) return t.import;
    try {
      return (
        (t.import = import(
          "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmscore@1/cmscore.js"
        )),
        t.import.then((o) => {
          o && (t.version || (t.version = o.version));
        }),
        t.import
      );
    } catch (o) {
      A.alert(`${o}`, "error");
      return;
    }
  };
  var st = `${m}-support`,
    nt =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
    K = async () => {
      let { fsAttributes: e, location: t } = window,
        { host: o, searchParams: n } = new URL(t.href);
      e.support || (e.support = {});
      let { support: r } = e;
      if (!o.includes("webflow.io") || !n.has(st)) return !1;
      if (r.import) return r.import;
      try {
        r.import = new Promise((s, i) => {
          let a = document.createElement("script");
          (a.src = nt),
            (a.onload = () => s(!0)),
            (a.onerror = i),
            document.head.append(a);
        });
      } catch (s) {
        return !1;
      }
      return r.import;
    };
  var C = (e) => (t) => `${e}${t ? `-${t}` : ""}`,
    _ = (e) => {
      let t = (n, r, s) => {
        let i = e[n],
          { key: a, values: c } = i,
          l;
        if (!r) return `[${a}]`;
        let p = c == null ? void 0 : c[r];
        typeof p == "string"
          ? (l = p)
          : (l = p(s && "instanceIndex" in s ? s.instanceIndex : void 0));
        let u = s && "caseInsensitive" in s && s.caseInsensitive ? "i" : "";
        if (!(s != null && s.operator)) return `[${a}="${l}"${u}]`;
        switch (s.operator) {
          case "prefixed":
            return `[${a}^="${l}"${u}]`;
          case "suffixed":
            return `[${a}$="${l}"${u}]`;
          case "contains":
            return `[${a}*="${l}"${u}]`;
        }
      };
      function o(n, r) {
        let s = t("element", n, r),
          i = (r == null ? void 0 : r.scope) || document;
        return r != null && r.all
          ? [...i.querySelectorAll(s)]
          : i.querySelector(s);
      }
      return [t, o];
    };
  var S = {
      preventLoad: { key: `${m}-preventload` },
      debugMode: { key: `${m}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${m}-dev` },
    },
    [g, Qt] = _(S);
  var k = (e) => {
    let { currentScript: t } = document,
      o = {};
    if (!t) return { attributes: o, preventsLoad: !1 };
    let r = {
      preventsLoad: typeof t.getAttribute(S.preventLoad.key) == "string",
      attributes: o,
    };
    for (let s in e) {
      let i = t.getAttribute(e[s]);
      r.attributes[s] = i;
    }
    return r;
  };
  var V = ({ scriptAttributes: e, attributeKey: t, version: o, init: n }) => {
      var a;
      it(), (a = window.fsAttributes)[t] || (a[t] = {});
      let { preventsLoad: r, attributes: s } = k(e),
        i = window.fsAttributes[t];
      (i.version = o),
        (i.init = n),
        r ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => n(s)));
    },
    it = () => {
      let e = at();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        O(window.fsAttributes, e);
        return;
      }
      let t = {
        cms: {},
        push(...o) {
          var n, r;
          for (let [s, i] of o)
            (r = (n = this[s]) == null ? void 0 : n.loading) == null ||
              r.then(i);
        },
        destroy() {
          var o, n;
          for (let r of e)
            (n = (o = window.fsAttributes[r]) == null ? void 0 : o.destroy) ==
              null || n.call(o);
        },
      };
      O(t, e),
        ct(t),
        (window.fsAttributes = t),
        (window.FsAttributes = window.fsAttributes),
        K();
    },
    at = () => {
      let e = g("src", "finsweet", { operator: "contains" }),
        t = g("dev");
      return [...document.querySelectorAll(`script${e}, script${t}`)].reduce(
        (r, s) => {
          var a;
          let i =
            s.getAttribute(S.dev.key) ||
            ((a = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : a[0]);
          return i && !r.includes(i) && r.push(i), r;
        },
        []
      );
    },
    O = (e, t) => {
      for (let o of t) {
        if (e[o]) continue;
        e[o] = {};
        let n = e[o];
        n.loading = new Promise((r) => {
          n.resolve = (s) => {
            r(s), delete n.resolve;
          };
        });
      }
    },
    ct = (e) => {
      let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      e.push(...t);
    };
  var N = "1.7.0";
  var D = `fs-${T}`,
    pt = "list",
    ut = "tabs",
    mt = "tab-link",
    Tt = "resetix",
    At = { true: "true" },
    L = {
      element: {
        key: `${D}-element`,
        values: { list: C(pt), tabs: C(ut), tabLink: mt },
      },
      resetIx: { key: `${D}-${Tt}`, values: At },
    },
    [d, $] = _(L);
  var {
      element: { key: dt },
      resetIx: { key: F, values: Y },
    } = L,
    q = (e) => {
      var n;
      let t = [],
        o = !1;
      for (let r of e) {
        let s = r.getInstanceIndex(dt),
          i = document.querySelector(
            `.${x.tabs}${d("element", "tabs", { instanceIndex: s })}`
          );
        if (!i) continue;
        (
          t[(n = s || 0)] || (t[n] = { listInstances: [], tabsElement: i })
        ).listInstances.push(r),
          o || (o = i.getAttribute(F) === Y.true),
          o || (o = r.getAttribute(F) === Y.true);
      }
      return (t = t.filter((r) => r && r.listInstances.length)), [t, o];
    };
  var H = "role";
  var {
      tabsContent: bt,
      tabPane: Et,
      tabsMenu: St,
      tabLink: ft,
      activeTab: xt,
    } = x,
    X = ({ listInstances: e, tabsElement: t }) => {
      let o = t.querySelector(`.${St}`),
        n = t.querySelector(`.${bt}`),
        r = t.querySelectorAll(`.${ft}`),
        s = t.querySelectorAll(`.${Et}`);
      if (!o || !n || !r.length || !s.length) return;
      let i = r[0].classList.value,
        a = s[0].classList.value;
      for (let p of [...r, ...s]) p.remove();
      let c = 0,
        l = (p) => {
          for (let { element: u } of p) {
            u.removeAttribute(H);
            let b = document.createElement("div");
            b.setAttribute("class", i);
            let E = document.createElement("div");
            E.setAttribute("class", a);
            for (let j of [b, E]) j.dataset.wTab = `Tab ${c}`;
            c === 0 && (b.classList.add(h), E.classList.add(xt));
            let f = $("tabLink", { operator: "prefixed", scope: u });
            f ||
              ((f = document.createElement("div")),
              (f.innerHTML = `Use <strong>${d(
                "element",
                "tabLink"
              )}</strong> to define this Tab Link content.`)),
              b.appendChild(f),
              E.appendChild(u),
              o.appendChild(b),
              n.appendChild(E),
              (c += 1);
          }
        };
      for (let { wrapper: p, items: u } of e) l(u), (p.style.display = "none");
      return l;
    };
  var G = async () => {
    let e = await M();
    if (!e) return [];
    await B(U);
    let t = e.createCMSListInstances([
        d("element", "list", { operator: "prefixed" }),
      ]),
      [o, n] = q(t);
    for (let s of o) {
      let { listInstances: i } = s,
        a = X(s);
      for (let c of i)
        (c.restartTabs = !0),
          c.restartIx || (c.restartIx = n),
          (c.items = []),
          c.on("renderitems", async (l) => {
            (c.items = []), a == null || a(l);
          });
    }
    let r = ["tabs"];
    return (
      n && r.push("ix2"),
      await R(r),
      P(T, t, () => {
        var s;
        for (let i of t) (s = i.destroy) == null || s.call(i);
      })
    );
  };
  V({ init: G, version: N, attributeKey: T });
})();
