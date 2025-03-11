(() => {
  var FE = Object.create;
  var xr = Object.defineProperty;
  var ME = Object.getOwnPropertyDescriptor;
  var qE = Object.getOwnPropertyNames;
  var XE = Object.getPrototypeOf,
    GE = Object.prototype.hasOwnProperty;
  var fe = (e, t) => () => (e && (t = e((e = 0))), t);
  var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Oe = (e, t) => {
      for (var r in t) xr(e, r, { get: t[r], enumerable: !0 });
    },
    aa = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of qE(t))
          !GE.call(e, i) &&
            i !== r &&
            xr(e, i, {
              get: () => t[i],
              enumerable: !(n = ME(t, i)) || n.enumerable,
            });
      return e;
    };
  var ie = (e, t, r) => (
      (r = e != null ? FE(XE(e)) : {}),
      aa(
        t || !e || !e.__esModule
          ? xr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    ze = (e) => aa(xr({}, "__esModule", { value: !0 }), e);
  var Un = f(() => {
    "use strict";
    window.tram = (function (e) {
      function t(c, m) {
        var S = new E.Bare();
        return S.init(c, m);
      }
      function r(c) {
        return c.replace(/[A-Z]/g, function (m) {
          return "-" + m.toLowerCase();
        });
      }
      function n(c) {
        var m = parseInt(c.slice(1), 16),
          S = (m >> 16) & 255,
          O = (m >> 8) & 255,
          T = 255 & m;
        return [S, O, T];
      }
      function i(c, m, S) {
        return (
          "#" + ((1 << 24) | (c << 16) | (m << 8) | S).toString(16).slice(1)
        );
      }
      function o() {}
      function a(c, m) {
        l("Type warning: Expected: [" + c + "] Got: [" + typeof m + "] " + m);
      }
      function s(c, m, S) {
        l("Units do not match [" + c + "]: " + m + ", " + S);
      }
      function u(c, m, S) {
        if ((m !== void 0 && (S = m), c === void 0)) return S;
        var O = S;
        return (
          tt.test(c) || !Tt.test(c)
            ? (O = parseInt(c, 10))
            : Tt.test(c) && (O = 1e3 * parseFloat(c)),
          0 > O && (O = 0),
          O === O ? O : S
        );
      }
      function l(c) {
        ae.debug && window && window.console.warn(c);
      }
      function y(c) {
        for (var m = -1, S = c ? c.length : 0, O = []; ++m < S; ) {
          var T = c[m];
          T && O.push(T);
        }
        return O;
      }
      var h = (function (c, m, S) {
          function O(ee) {
            return typeof ee == "object";
          }
          function T(ee) {
            return typeof ee == "function";
          }
          function R() {}
          function K(ee, ce) {
            function X() {
              var Te = new te();
              return T(Te.init) && Te.init.apply(Te, arguments), Te;
            }
            function te() {}
            ce === S && ((ce = ee), (ee = Object)), (X.Bare = te);
            var re,
              ge = (R[c] = ee[c]),
              He = (te[c] = X[c] = new R());
            return (
              (He.constructor = X),
              (X.mixin = function (Te) {
                return (te[c] = X[c] = K(X, Te)[c]), X;
              }),
              (X.open = function (Te) {
                if (
                  ((re = {}),
                  T(Te) ? (re = Te.call(X, He, ge, X, ee)) : O(Te) && (re = Te),
                  O(re))
                )
                  for (var Zt in re) m.call(re, Zt) && (He[Zt] = re[Zt]);
                return T(He.init) || (He.init = ee), X;
              }),
              X.open(ce)
            );
          }
          return K;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (c, m, S, O) {
              var T = (c /= O) * c,
                R = T * c;
              return (
                m +
                S * (-2.75 * R * T + 11 * T * T + -15.5 * R + 8 * T + 0.25 * c)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, m, S, O) {
              var T = (c /= O) * c,
                R = T * c;
              return m + S * (-1 * R * T + 3 * T * T + -3 * R + 2 * T);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, m, S, O) {
              var T = (c /= O) * c,
                R = T * c;
              return (
                m +
                S * (0.3 * R * T + -1.6 * T * T + 2.2 * R + -1.8 * T + 1.9 * c)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, m, S, O) {
              var T = (c /= O) * c,
                R = T * c;
              return m + S * (2 * R * T + -5 * T * T + 2 * R + 2 * T);
            },
          ],
          linear: [
            "linear",
            function (c, m, S, O) {
              return (S * c) / O + m;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, m, S, O) {
              return S * (c /= O) * c + m;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, m, S, O) {
              return -S * (c /= O) * (c - 2) + m;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, m, S, O) {
              return (c /= O / 2) < 1
                ? (S / 2) * c * c + m
                : (-S / 2) * (--c * (c - 2) - 1) + m;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, m, S, O) {
              return S * (c /= O) * c * c + m;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, m, S, O) {
              return S * ((c = c / O - 1) * c * c + 1) + m;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, m, S, O) {
              return (c /= O / 2) < 1
                ? (S / 2) * c * c * c + m
                : (S / 2) * ((c -= 2) * c * c + 2) + m;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, m, S, O) {
              return S * (c /= O) * c * c * c + m;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, m, S, O) {
              return -S * ((c = c / O - 1) * c * c * c - 1) + m;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, m, S, O) {
              return (c /= O / 2) < 1
                ? (S / 2) * c * c * c * c + m
                : (-S / 2) * ((c -= 2) * c * c * c - 2) + m;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, m, S, O) {
              return S * (c /= O) * c * c * c * c + m;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, m, S, O) {
              return S * ((c = c / O - 1) * c * c * c * c + 1) + m;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, m, S, O) {
              return (c /= O / 2) < 1
                ? (S / 2) * c * c * c * c * c + m
                : (S / 2) * ((c -= 2) * c * c * c * c + 2) + m;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, m, S, O) {
              return -S * Math.cos((c / O) * (Math.PI / 2)) + S + m;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, m, S, O) {
              return S * Math.sin((c / O) * (Math.PI / 2)) + m;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, m, S, O) {
              return (-S / 2) * (Math.cos((Math.PI * c) / O) - 1) + m;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, m, S, O) {
              return c === 0 ? m : S * Math.pow(2, 10 * (c / O - 1)) + m;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, m, S, O) {
              return c === O
                ? m + S
                : S * (-Math.pow(2, (-10 * c) / O) + 1) + m;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, m, S, O) {
              return c === 0
                ? m
                : c === O
                ? m + S
                : (c /= O / 2) < 1
                ? (S / 2) * Math.pow(2, 10 * (c - 1)) + m
                : (S / 2) * (-Math.pow(2, -10 * --c) + 2) + m;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, m, S, O) {
              return -S * (Math.sqrt(1 - (c /= O) * c) - 1) + m;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, m, S, O) {
              return S * Math.sqrt(1 - (c = c / O - 1) * c) + m;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, m, S, O) {
              return (c /= O / 2) < 1
                ? (-S / 2) * (Math.sqrt(1 - c * c) - 1) + m
                : (S / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + m;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, m, S, O, T) {
              return (
                T === void 0 && (T = 1.70158),
                S * (c /= O) * c * ((T + 1) * c - T) + m
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, m, S, O, T) {
              return (
                T === void 0 && (T = 1.70158),
                S * ((c = c / O - 1) * c * ((T + 1) * c + T) + 1) + m
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, m, S, O, T) {
              return (
                T === void 0 && (T = 1.70158),
                (c /= O / 2) < 1
                  ? (S / 2) * c * c * (((T *= 1.525) + 1) * c - T) + m
                  : (S / 2) *
                      ((c -= 2) * c * (((T *= 1.525) + 1) * c + T) + 2) +
                    m
              );
            },
          ],
        },
        _ = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        A = document,
        I = window,
        x = "bkwld-tram",
        b = /[\-\.0-9]/g,
        L = /[A-Z]/,
        C = "number",
        D = /^(rgb|#)/,
        N = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        k = /(deg|rad|turn)$/,
        B = "unitless",
        H = /(all|none) 0s ease 0s/,
        Y = /^(width|height)$/,
        Q = " ",
        q = A.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        V = function (c) {
          if (c in q.style) return { dom: c, css: c };
          var m,
            S,
            O = "",
            T = c.split("-");
          for (m = 0; m < T.length; m++)
            O += T[m].charAt(0).toUpperCase() + T[m].slice(1);
          for (m = 0; m < w.length; m++)
            if (((S = w[m] + O), S in q.style))
              return { dom: S, css: F[m] + c };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: V("transform"),
          transition: V("transition"),
          backface: V("backface-visibility"),
          timing: V("transition-timing-function"),
        });
      if (G.transition) {
        var Z = G.timing.dom;
        if (((q.style[Z] = p["ease-in-back"][0]), !q.style[Z]))
          for (var J in _) p[J][0] = _[J];
      }
      var M = (t.frame = (function () {
          var c =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return c && G.bind
            ? c.bind(I)
            : function (m) {
                I.setTimeout(m, 16);
              };
        })()),
        W = (t.now = (function () {
          var c = I.performance,
            m = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return m && G.bind
            ? m.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = h(function (c) {
          function m($, ne) {
            var pe = y(("" + $).split(Q)),
              se = pe[0];
            ne = ne || {};
            var be = We[se];
            if (!be) return l("Unsupported property: " + se);
            if (!ne.weak || !this.props[se]) {
              var Me = be[0],
                we = this.props[se];
              return (
                we || (we = this.props[se] = new Me.Bare()),
                we.init(this.$el, pe, be, ne),
                we
              );
            }
          }
          function S($, ne, pe) {
            if ($) {
              var se = typeof $;
              if (
                (ne ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                se == "number" && ne)
              )
                return (
                  (this.timer = new oe({
                    duration: $,
                    context: this,
                    complete: R,
                  })),
                  void (this.active = !0)
                );
              if (se == "string" && ne) {
                switch ($) {
                  case "hide":
                    X.call(this);
                    break;
                  case "stop":
                    K.call(this);
                    break;
                  case "redraw":
                    te.call(this);
                    break;
                  default:
                    m.call(this, $, pe && pe[1]);
                }
                return R.call(this);
              }
              if (se == "function") return void $.call(this, this);
              if (se == "object") {
                var be = 0;
                He.call(
                  this,
                  $,
                  function (Ee, DE) {
                    Ee.span > be && (be = Ee.span), Ee.stop(), Ee.animate(DE);
                  },
                  function (Ee) {
                    "wait" in Ee && (be = u(Ee.wait, 0));
                  }
                ),
                  ge.call(this),
                  be > 0 &&
                    ((this.timer = new oe({ duration: be, context: this })),
                    (this.active = !0),
                    ne && (this.timer.complete = R));
                var Me = this,
                  we = !1,
                  Or = {};
                M(function () {
                  He.call(Me, $, function (Ee) {
                    Ee.active && ((we = !0), (Or[Ee.name] = Ee.nextStyle));
                  }),
                    we && Me.$el.css(Or);
                });
              }
            }
          }
          function O($) {
            ($ = u($, 0)),
              this.active
                ? this.queue.push({ options: $ })
                : ((this.timer = new oe({
                    duration: $,
                    context: this,
                    complete: R,
                  })),
                  (this.active = !0));
          }
          function T($) {
            return this.active
              ? (this.queue.push({ options: $, args: arguments }),
                void (this.timer.complete = R))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function R() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var $ = this.queue.shift();
              S.call(this, $.options, !0, $.args);
            }
          }
          function K($) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ne;
            typeof $ == "string"
              ? ((ne = {}), (ne[$] = 1))
              : (ne = typeof $ == "object" && $ != null ? $ : this.props),
              He.call(this, ne, Te),
              ge.call(this);
          }
          function ee($) {
            K.call(this, $), He.call(this, $, Zt, PE);
          }
          function ce($) {
            typeof $ != "string" && ($ = "block"), (this.el.style.display = $);
          }
          function X() {
            K.call(this), (this.el.style.display = "none");
          }
          function te() {
            this.el.offsetHeight;
          }
          function re() {
            K.call(this), e.removeData(this.el, x), (this.$el = this.el = null);
          }
          function ge() {
            var $,
              ne,
              pe = [];
            this.upstream && pe.push(this.upstream);
            for ($ in this.props)
              (ne = this.props[$]), ne.active && pe.push(ne.string);
            (pe = pe.join(",")),
              this.style !== pe &&
                ((this.style = pe), (this.el.style[G.transition.dom] = pe));
          }
          function He($, ne, pe) {
            var se,
              be,
              Me,
              we,
              Or = ne !== Te,
              Ee = {};
            for (se in $)
              (Me = $[se]),
                se in Ie
                  ? (Ee.transform || (Ee.transform = {}),
                    (Ee.transform[se] = Me))
                  : (L.test(se) && (se = r(se)),
                    se in We
                      ? (Ee[se] = Me)
                      : (we || (we = {}), (we[se] = Me)));
            for (se in Ee) {
              if (((Me = Ee[se]), (be = this.props[se]), !be)) {
                if (!Or) continue;
                be = m.call(this, se);
              }
              ne.call(this, be, Me);
            }
            pe && we && pe.call(this, we);
          }
          function Te($) {
            $.stop();
          }
          function Zt($, ne) {
            $.set(ne);
          }
          function PE($) {
            this.$el.css($);
          }
          function Fe($, ne) {
            c[$] = function () {
              return this.children
                ? NE.call(this, ne, arguments)
                : (this.el && ne.apply(this, arguments), this);
            };
          }
          function NE($, ne) {
            var pe,
              se = this.children.length;
            for (pe = 0; se > pe; pe++) $.apply(this.children[pe], ne);
            return this;
          }
          (c.init = function ($) {
            if (
              ((this.$el = e($)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ae.keepInherited && !ae.fallback)
            ) {
              var ne = Pe(this.el, "transition");
              ne && !H.test(ne) && (this.upstream = ne);
            }
            G.backface &&
              ae.hideBackface &&
              de(this.el, G.backface.css, "hidden");
          }),
            Fe("add", m),
            Fe("start", S),
            Fe("wait", O),
            Fe("then", T),
            Fe("next", R),
            Fe("stop", K),
            Fe("set", ee),
            Fe("show", ce),
            Fe("hide", X),
            Fe("redraw", te),
            Fe("destroy", re);
        }),
        E = h(d, function (c) {
          function m(S, O) {
            var T = e.data(S, x) || e.data(S, x, new d.Bare());
            return T.el || T.init(S), O ? T.start(O) : T;
          }
          c.init = function (S, O) {
            var T = e(S);
            if (!T.length) return this;
            if (T.length === 1) return m(T[0], O);
            var R = [];
            return (
              T.each(function (K, ee) {
                R.push(m(ee, O));
              }),
              (this.children = R),
              this
            );
          };
        }),
        v = h(function (c) {
          function m() {
            var R = this.get();
            this.update("auto");
            var K = this.get();
            return this.update(R), K;
          }
          function S(R, K, ee) {
            return K !== void 0 && (ee = K), R in p ? R : ee;
          }
          function O(R) {
            var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
            return (K ? i(K[1], K[2], K[3]) : R).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var T = { duration: 500, ease: "ease", delay: 0 };
          (c.init = function (R, K, ee, ce) {
            (this.$el = R), (this.el = R[0]);
            var X = K[0];
            ee[2] && (X = ee[2]),
              Ne[X] && (X = Ne[X]),
              (this.name = X),
              (this.type = ee[1]),
              (this.duration = u(K[1], this.duration, T.duration)),
              (this.ease = S(K[2], this.ease, T.ease)),
              (this.delay = u(K[3], this.delay, T.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Y.test(this.name)),
              (this.unit = ce.unit || this.unit || ae.defaultUnit),
              (this.angle = ce.angle || this.angle || ae.defaultAngle),
              ae.fallback || ce.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    Q +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? Q + p[this.ease][0] : "") +
                    (this.delay ? Q + this.delay + "ms" : "")));
          }),
            (c.set = function (R) {
              (R = this.convert(R, this.type)), this.update(R), this.redraw();
            }),
            (c.transition = function (R) {
              (this.active = !0),
                (R = this.convert(R, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  R == "auto" && (R = m.call(this))),
                (this.nextStyle = R);
            }),
            (c.fallback = function (R) {
              var K =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (R = this.convert(R, this.type)),
                this.auto &&
                  (K == "auto" && (K = this.convert(this.get(), this.type)),
                  R == "auto" && (R = m.call(this))),
                (this.tween = new j({
                  from: K,
                  to: R,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return Pe(this.el, this.name);
            }),
            (c.update = function (R) {
              de(this.el, this.name, R);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                de(this.el, this.name, this.get()));
              var R = this.tween;
              R && R.context && R.destroy();
            }),
            (c.convert = function (R, K) {
              if (R == "auto" && this.auto) return R;
              var ee,
                ce = typeof R == "number",
                X = typeof R == "string";
              switch (K) {
                case C:
                  if (ce) return R;
                  if (X && R.replace(b, "") === "") return +R;
                  ee = "number(unitless)";
                  break;
                case D:
                  if (X) {
                    if (R === "" && this.original) return this.original;
                    if (K.test(R))
                      return R.charAt(0) == "#" && R.length == 7 ? R : O(R);
                  }
                  ee = "hex or rgb string";
                  break;
                case N:
                  if (ce) return R + this.unit;
                  if (X && K.test(R)) return R;
                  ee = "number(px) or string(unit)";
                  break;
                case P:
                  if (ce) return R + this.unit;
                  if (X && K.test(R)) return R;
                  ee = "number(px) or string(unit or %)";
                  break;
                case k:
                  if (ce) return R + this.angle;
                  if (X && K.test(R)) return R;
                  ee = "number(deg) or string(angle)";
                  break;
                case B:
                  if (ce || (X && P.test(R))) return R;
                  ee = "number(unitless) or string(unit or %)";
              }
              return a(ee, R), R;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        g = h(v, function (c, m) {
          c.init = function () {
            m.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), D));
          };
        }),
        U = h(v, function (c, m) {
          (c.init = function () {
            m.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (S) {
              this.$el[this.name](S);
            });
        }),
        z = h(v, function (c, m) {
          function S(O, T) {
            var R, K, ee, ce, X;
            for (R in O)
              (ce = Ie[R]),
                (ee = ce[0]),
                (K = ce[1] || R),
                (X = this.convert(O[R], ee)),
                T.call(this, K, X, ee);
          }
          (c.init = function () {
            m.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Ie.perspective &&
                  ae.perspective &&
                  ((this.current.perspective = ae.perspective),
                  de(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (O) {
              S.call(this, O, function (T, R) {
                this.current[T] = R;
              }),
                de(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (O) {
              var T = this.values(O);
              this.tween = new ve({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var R,
                K = {};
              for (R in this.current) K[R] = R in T ? T[R] : this.current[R];
              (this.active = !0), (this.nextStyle = this.style(K));
            }),
            (c.fallback = function (O) {
              var T = this.values(O);
              this.tween = new ve({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              de(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (O) {
              var T,
                R = "";
              for (T in O) R += T + "(" + O[T] + ") ";
              return R;
            }),
            (c.values = function (O) {
              var T,
                R = {};
              return (
                S.call(this, O, function (K, ee, ce) {
                  (R[K] = ee),
                    this.current[K] === void 0 &&
                      ((T = 0),
                      ~K.indexOf("scale") && (T = 1),
                      (this.current[K] = this.convert(T, ce)));
                }),
                R
              );
            });
        }),
        j = h(function (c) {
          function m(X) {
            ee.push(X) === 1 && M(S);
          }
          function S() {
            var X,
              te,
              re,
              ge = ee.length;
            if (ge)
              for (M(S), te = W(), X = ge; X--; )
                (re = ee[X]), re && re.render(te);
          }
          function O(X) {
            var te,
              re = e.inArray(X, ee);
            re >= 0 &&
              ((te = ee.slice(re + 1)),
              (ee.length = re),
              te.length && (ee = ee.concat(te)));
          }
          function T(X) {
            return Math.round(X * ce) / ce;
          }
          function R(X, te, re) {
            return i(
              X[0] + re * (te[0] - X[0]),
              X[1] + re * (te[1] - X[1]),
              X[2] + re * (te[2] - X[2])
            );
          }
          var K = { ease: p.ease[1], from: 0, to: 1 };
          (c.init = function (X) {
            (this.duration = X.duration || 0), (this.delay = X.delay || 0);
            var te = X.ease || K.ease;
            p[te] && (te = p[te][1]),
              typeof te != "function" && (te = K.ease),
              (this.ease = te),
              (this.update = X.update || o),
              (this.complete = X.complete || o),
              (this.context = X.context || this),
              (this.name = X.name);
            var re = X.from,
              ge = X.to;
            re === void 0 && (re = K.from),
              ge === void 0 && (ge = K.to),
              (this.unit = X.unit || ""),
              typeof re == "number" && typeof ge == "number"
                ? ((this.begin = re), (this.change = ge - re))
                : this.format(ge, re),
              (this.value = this.begin + this.unit),
              (this.start = W()),
              X.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active ||
                (this.start || (this.start = W()), (this.active = !0), m(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), O(this));
            }),
            (c.render = function (X) {
              var te,
                re = X - this.start;
              if (this.delay) {
                if (re <= this.delay) return;
                re -= this.delay;
              }
              if (re < this.duration) {
                var ge = this.ease(re, 0, 1, this.duration);
                return (
                  (te = this.startRGB
                    ? R(this.startRGB, this.endRGB, ge)
                    : T(this.begin + ge * this.change)),
                  (this.value = te + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (te = this.endHex || this.begin + this.change),
                (this.value = te + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (X, te) {
              if (((te += ""), (X += ""), X.charAt(0) == "#"))
                return (
                  (this.startRGB = n(te)),
                  (this.endRGB = n(X)),
                  (this.endHex = X),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var re = te.replace(b, ""),
                  ge = X.replace(b, "");
                re !== ge && s("tween", te, X), (this.unit = re);
              }
              (te = parseFloat(te)),
                (X = parseFloat(X)),
                (this.begin = this.value = te),
                (this.change = X - te);
            }),
            (c.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ee = [],
            ce = 1e3;
        }),
        oe = h(j, function (c) {
          (c.init = function (m) {
            (this.duration = m.duration || 0),
              (this.complete = m.complete || o),
              (this.context = m.context),
              this.play();
          }),
            (c.render = function (m) {
              var S = m - this.start;
              S < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ve = h(j, function (c, m) {
          (c.init = function (S) {
            (this.context = S.context),
              (this.update = S.update),
              (this.tweens = []),
              (this.current = S.current);
            var O, T;
            for (O in S.values)
              (T = S.values[O]),
                this.current[O] !== T &&
                  this.tweens.push(
                    new j({
                      name: O,
                      from: this.current[O],
                      to: T,
                      duration: S.duration,
                      delay: S.delay,
                      ease: S.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (S) {
              var O,
                T,
                R = this.tweens.length,
                K = !1;
              for (O = R; O--; )
                (T = this.tweens[O]),
                  T.context &&
                    (T.render(S), (this.current[T.name] = T.value), (K = !0));
              return K
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (c.destroy = function () {
              if ((m.destroy.call(this), this.tweens)) {
                var S,
                  O = this.tweens.length;
                for (S = O; S--; ) this.tweens[S].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!G.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + c + ")");
        var m = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = m.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new j(c);
        }),
        (t.delay = function (c, m, S) {
          return new oe({ complete: m, duration: c, context: S });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var de = e.style,
        Pe = e.css,
        Ne = { transform: G.transform && G.transform.css },
        We = {
          color: [g, D],
          background: [g, D, "background-color"],
          "outline-color": [g, D],
          "border-color": [g, D],
          "border-top-color": [g, D],
          "border-right-color": [g, D],
          "border-bottom-color": [g, D],
          "border-left-color": [g, D],
          "border-width": [v, N],
          "border-top-width": [v, N],
          "border-right-width": [v, N],
          "border-bottom-width": [v, N],
          "border-left-width": [v, N],
          "border-spacing": [v, N],
          "letter-spacing": [v, N],
          margin: [v, N],
          "margin-top": [v, N],
          "margin-right": [v, N],
          "margin-bottom": [v, N],
          "margin-left": [v, N],
          padding: [v, N],
          "padding-top": [v, N],
          "padding-right": [v, N],
          "padding-bottom": [v, N],
          "padding-left": [v, N],
          "outline-width": [v, N],
          opacity: [v, C],
          top: [v, P],
          right: [v, P],
          bottom: [v, P],
          left: [v, P],
          "font-size": [v, P],
          "text-indent": [v, P],
          "word-spacing": [v, P],
          width: [v, P],
          "min-width": [v, P],
          "max-width": [v, P],
          height: [v, P],
          "min-height": [v, P],
          "max-height": [v, P],
          "line-height": [v, B],
          "scroll-top": [U, C, "scrollTop"],
          "scroll-left": [U, C, "scrollLeft"],
        },
        Ie = {};
      G.transform &&
        ((We.transform = [z]),
        (Ie = {
          x: [P, "translateX"],
          y: [P, "translateY"],
          rotate: [k],
          rotateX: [k],
          rotateY: [k],
          scale: [C],
          scaleX: [C],
          scaleY: [C],
          skew: [k],
          skewX: [k],
          skewY: [k],
        })),
        G.transform &&
          G.backface &&
          ((Ie.z = [P, "translateZ"]),
          (Ie.rotateZ = [k]),
          (Ie.scaleZ = [C]),
          (Ie.perspective = [N]));
      var tt = /ms/,
        Tt = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ua = f((sM, sa) => {
    "use strict";
    var kE = window.$,
      VE = Un() && kE.tram;
    sa.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        l = n.hasOwnProperty,
        y = r.forEach,
        h = r.map,
        p = r.reduce,
        _ = r.reduceRight,
        A = r.filter,
        I = r.every,
        x = r.some,
        b = r.indexOf,
        L = r.lastIndexOf,
        C = Array.isArray,
        D = Object.keys,
        N = i.bind,
        P =
          (e.each =
          e.forEach =
            function (w, F, V) {
              if (w == null) return w;
              if (y && w.forEach === y) w.forEach(F, V);
              else if (w.length === +w.length) {
                for (var G = 0, Z = w.length; G < Z; G++)
                  if (F.call(V, w[G], G, w) === t) return;
              } else
                for (var J = e.keys(w), G = 0, Z = J.length; G < Z; G++)
                  if (F.call(V, w[J[G]], J[G], w) === t) return;
              return w;
            });
      (e.map = e.collect =
        function (w, F, V) {
          var G = [];
          return w == null
            ? G
            : h && w.map === h
            ? w.map(F, V)
            : (P(w, function (Z, J, M) {
                G.push(F.call(V, Z, J, M));
              }),
              G);
        }),
        (e.find = e.detect =
          function (w, F, V) {
            var G;
            return (
              k(w, function (Z, J, M) {
                if (F.call(V, Z, J, M)) return (G = Z), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (w, F, V) {
            var G = [];
            return w == null
              ? G
              : A && w.filter === A
              ? w.filter(F, V)
              : (P(w, function (Z, J, M) {
                  F.call(V, Z, J, M) && G.push(Z);
                }),
                G);
          });
      var k =
        (e.some =
        e.any =
          function (w, F, V) {
            F || (F = e.identity);
            var G = !1;
            return w == null
              ? G
              : x && w.some === x
              ? w.some(F, V)
              : (P(w, function (Z, J, M) {
                  if (G || (G = F.call(V, Z, J, M))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (w, F) {
          return w == null
            ? !1
            : b && w.indexOf === b
            ? w.indexOf(F) != -1
            : k(w, function (V) {
                return V === F;
              });
        }),
        (e.delay = function (w, F) {
          var V = a.call(arguments, 2);
          return setTimeout(function () {
            return w.apply(null, V);
          }, F);
        }),
        (e.defer = function (w) {
          return e.delay.apply(e, [w, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (w) {
          var F, V, G;
          return function () {
            F ||
              ((F = !0),
              (V = arguments),
              (G = this),
              VE.frame(function () {
                (F = !1), w.apply(G, V);
              }));
          };
        }),
        (e.debounce = function (w, F, V) {
          var G,
            Z,
            J,
            M,
            W,
            d = function () {
              var E = e.now() - M;
              E < F
                ? (G = setTimeout(d, F - E))
                : ((G = null), V || ((W = w.apply(J, Z)), (J = Z = null)));
            };
          return function () {
            (J = this), (Z = arguments), (M = e.now());
            var E = V && !G;
            return (
              G || (G = setTimeout(d, F)),
              E && ((W = w.apply(J, Z)), (J = Z = null)),
              W
            );
          };
        }),
        (e.defaults = function (w) {
          if (!e.isObject(w)) return w;
          for (var F = 1, V = arguments.length; F < V; F++) {
            var G = arguments[F];
            for (var Z in G) w[Z] === void 0 && (w[Z] = G[Z]);
          }
          return w;
        }),
        (e.keys = function (w) {
          if (!e.isObject(w)) return [];
          if (D) return D(w);
          var F = [];
          for (var V in w) e.has(w, V) && F.push(V);
          return F;
        }),
        (e.has = function (w, F) {
          return l.call(w, F);
        }),
        (e.isObject = function (w) {
          return w === Object(w);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var B = /(.)^/,
        H = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Y = /\\|'|\r|\n|\u2028|\u2029/g,
        Q = function (w) {
          return "\\" + H[w];
        },
        q = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (w, F, V) {
          !F && V && (F = V), (F = e.defaults({}, F, e.templateSettings));
          var G = RegExp(
              [
                (F.escape || B).source,
                (F.interpolate || B).source,
                (F.evaluate || B).source,
              ].join("|") + "|$",
              "g"
            ),
            Z = 0,
            J = "__p+='";
          w.replace(G, function (E, v, g, U, z) {
            return (
              (J += w.slice(Z, z).replace(Y, Q)),
              (Z = z + E.length),
              v
                ? (J +=
                    `'+
((__t=(` +
                    v +
                    `))==null?'':_.escape(__t))+
'`)
                : g
                ? (J +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':__t)+
'`)
                : U &&
                  (J +=
                    `';
` +
                    U +
                    `
__p+='`),
              E
            );
          }),
            (J += `';
`);
          var M = F.variable;
          if (M) {
            if (!q.test(M))
              throw new Error("variable is not a bare identifier: " + M);
          } else
            (J =
              `with(obj||{}){
` +
              J +
              `}
`),
              (M = "obj");
          J =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            J +
            `return __p;
`;
          var W;
          try {
            W = new Function(F.variable || "obj", "_", J);
          } catch (E) {
            throw ((E.source = J), E);
          }
          var d = function (E) {
            return W.call(this, E, e);
          };
          return (
            (d.source =
              "function(" +
              M +
              `){
` +
              J +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var Ge = f((uM, Ea) => {
    "use strict";
    var ue = {},
      bt = {},
      At = [],
      Wn = window.Webflow || [],
      st = window.jQuery,
      Xe = st(window),
      UE = st(document),
      Ke = st.isFunction,
      qe = (ue._ = ua()),
      la = (ue.tram = Un() && st.tram),
      Cr = !1,
      Hn = !1;
    la.config.hideBackface = !1;
    la.config.keepInherited = !0;
    ue.define = function (e, t, r) {
      bt[e] && da(bt[e]);
      var n = (bt[e] = t(st, qe, r) || {});
      return fa(n), n;
    };
    ue.require = function (e) {
      return bt[e];
    };
    function fa(e) {
      ue.env() &&
        (Ke(e.design) && Xe.on("__wf_design", e.design),
        Ke(e.preview) && Xe.on("__wf_preview", e.preview)),
        Ke(e.destroy) && Xe.on("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && BE(e);
    }
    function BE(e) {
      if (Cr) {
        e.ready();
        return;
      }
      qe.contains(At, e.ready) || At.push(e.ready);
    }
    function da(e) {
      Ke(e.design) && Xe.off("__wf_design", e.design),
        Ke(e.preview) && Xe.off("__wf_preview", e.preview),
        Ke(e.destroy) && Xe.off("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && WE(e);
    }
    function WE(e) {
      At = qe.filter(At, function (t) {
        return t !== e.ready;
      });
    }
    ue.push = function (e) {
      if (Cr) {
        Ke(e) && e();
        return;
      }
      Wn.push(e);
    };
    ue.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Rr = navigator.userAgent.toLowerCase(),
      pa = (ue.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      HE = (ue.env.chrome =
        /chrome/.test(Rr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Rr.match(/chrome\/(\d+)\./)[1], 10)),
      zE = (ue.env.ios = /(ipod|iphone|ipad)/.test(Rr));
    ue.env.safari = /safari/.test(Rr) && !HE && !zE;
    var Bn;
    pa &&
      UE.on("touchstart mousedown", function (e) {
        Bn = e.target;
      });
    ue.validClick = pa
      ? function (e) {
          return e === Bn || st.contains(e, Bn);
        }
      : function () {
          return !0;
        };
    var ha = "resize.webflow orientationchange.webflow load.webflow",
      KE = "scroll.webflow " + ha;
    ue.resize = zn(Xe, ha);
    ue.scroll = zn(Xe, KE);
    ue.redraw = zn();
    function zn(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = qe.throttle(function (i) {
          qe.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (qe.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = qe.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ue.location = function (e) {
      window.location = e;
    };
    ue.env() && (ue.location = function () {});
    ue.ready = function () {
      (Cr = !0), Hn ? jE() : qe.each(At, ca), qe.each(Wn, ca), ue.resize.up();
    };
    function ca(e) {
      Ke(e) && e();
    }
    function jE() {
      (Hn = !1), qe.each(bt, fa);
    }
    var ht;
    ue.load = function (e) {
      ht.then(e);
    };
    function ga() {
      ht && (ht.reject(), Xe.off("load", ht.resolve)),
        (ht = new st.Deferred()),
        Xe.on("load", ht.resolve);
    }
    ue.destroy = function (e) {
      (e = e || {}),
        (Hn = !0),
        Xe.triggerHandler("__wf_destroy"),
        e.domready != null && (Cr = e.domready),
        qe.each(bt, da),
        ue.resize.off(),
        ue.scroll.off(),
        ue.redraw.off(),
        (At = []),
        (Wn = []),
        ht.state() === "pending" && ga();
    };
    st(ue.ready);
    ga();
    Ea.exports = window.Webflow = ue;
  });
  var ma = f((cM, va) => {
    "use strict";
    var ya = Ge();
    ya.define(
      "brand",
      (va.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var _ = n.attr("data-wf-status"),
            A = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(A) && a.hostname !== A && (_ = !0),
            _ &&
              !s &&
              ((l = l || h()),
              p(),
              setTimeout(p, 500),
              e(r).off(u, y).on(u, y));
        };
        function y() {
          var _ =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(l).attr("style", _ ? "display: none !important;" : "");
        }
        function h() {
          var _ = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            A = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return _.append(A, I), _[0];
        }
        function p() {
          var _ = i.children(o),
            A = _.length && _.get(0) === l,
            I = ya.env("editor");
          if (A) {
            I && _.remove();
            return;
          }
          _.length && _.remove(), I || i.append(l);
        }
        return t;
      })
    );
  });
  var Ia = f((lM, _a) => {
    "use strict";
    var Kn = Ge();
    Kn.define(
      "edit",
      (_a.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Kn.env("test") || Kn.env("frame")) && !r.fixture && !YE())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          l = r.load || p,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(s, h).triggerHandler(s);
        function h() {
          u || (/\?edit/.test(a.hash) && l());
        }
        function p() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, h),
            L(function (D) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: _(D),
              });
            });
        }
        function _(D) {
          return function (N) {
            if (!N) {
              console.error("Could not load editor data");
              return;
            }
            (N.thirdPartyCookiesSupported = D),
              A(x(N.scriptPath), function () {
                window.WebflowEditor(N);
              });
          };
        }
        function A(D, N) {
          e.ajax({ type: "GET", url: D, dataType: "script", cache: !0 }).then(
            N,
            I
          );
        }
        function I(D, N, P) {
          throw (console.error("Could not load editor script: " + N), P);
        }
        function x(D) {
          return D.indexOf("//") >= 0
            ? D
            : b("https://editor-api.webflow.com" + D);
        }
        function b(D) {
          return D.replace(/([^:])\/\//g, "$1/");
        }
        function L(D) {
          var N = window.document.createElement("iframe");
          (N.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (N.style.display = "none"),
            (N.sandbox = "allow-scripts allow-same-origin");
          var P = function (k) {
            k.data === "WF_third_party_cookies_unsupported"
              ? (C(N, P), D(!1))
              : k.data === "WF_third_party_cookies_supported" &&
                (C(N, P), D(!0));
          };
          (N.onerror = function () {
            C(N, P), D(!1);
          }),
            window.addEventListener("message", P, !1),
            window.document.body.appendChild(N);
        }
        function C(D, N) {
          window.removeEventListener("message", N, !1), D.remove();
        }
        return n;
      })
    );
    function YE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var ba = f((fM, Ta) => {
    "use strict";
    var $E = Ge();
    $E.define(
      "focus-visible",
      (Ta.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function u(C) {
            var D = C.type,
              N = C.tagName;
            return !!(
              (N === "INPUT" && a[D] && !C.readOnly) ||
              (N === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function l(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function y(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function h(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (s(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function p() {
            n = !1;
          }
          function _(C) {
            s(C.target) && (n || u(C.target)) && l(C.target);
          }
          function A(C) {
            s(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              y(C.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), x());
          }
          function x() {
            document.addEventListener("mousemove", L),
              document.addEventListener("mousedown", L),
              document.addEventListener("mouseup", L),
              document.addEventListener("pointermove", L),
              document.addEventListener("pointerdown", L),
              document.addEventListener("pointerup", L),
              document.addEventListener("touchmove", L),
              document.addEventListener("touchstart", L),
              document.addEventListener("touchend", L);
          }
          function b() {
            document.removeEventListener("mousemove", L),
              document.removeEventListener("mousedown", L),
              document.removeEventListener("mouseup", L),
              document.removeEventListener("pointermove", L),
              document.removeEventListener("pointerdown", L),
              document.removeEventListener("pointerup", L),
              document.removeEventListener("touchmove", L),
              document.removeEventListener("touchstart", L),
              document.removeEventListener("touchend", L);
          }
          function L(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", I, !0),
            x(),
            r.addEventListener("focus", _, !0),
            r.addEventListener("blur", A, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var wa = f((dM, Sa) => {
    "use strict";
    var Aa = Ge();
    Aa.define(
      "focus",
      (Sa.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Aa.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ra = f((pM, xa) => {
    "use strict";
    var jn = window.jQuery,
      je = {},
      Lr = [],
      Oa = ".w-ix",
      Pr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), jn(t).triggerHandler(je.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), jn(t).triggerHandler(je.types.OUTRO));
        },
      };
    je.triggers = {};
    je.types = { INTRO: "w-ix-intro" + Oa, OUTRO: "w-ix-outro" + Oa };
    je.init = function () {
      for (var e = Lr.length, t = 0; t < e; t++) {
        var r = Lr[t];
        r[0](0, r[1]);
      }
      (Lr = []), jn.extend(je.triggers, Pr);
    };
    je.async = function () {
      for (var e in Pr) {
        var t = Pr[e];
        Pr.hasOwnProperty(e) &&
          (je.triggers[e] = function (r, n) {
            Lr.push([t, n]);
          });
      }
    };
    je.async();
    xa.exports = je;
  });
  var $n = f((hM, Pa) => {
    "use strict";
    var Yn = Ra();
    function Ca(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var QE = window.jQuery,
      Nr = {},
      La = ".w-ix",
      ZE = {
        reset: function (e, t) {
          Yn.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Yn.triggers.intro(e, t), Ca(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Yn.triggers.outro(e, t), Ca(t, "COMPONENT_INACTIVE");
        },
      };
    Nr.triggers = {};
    Nr.types = { INTRO: "w-ix-intro" + La, OUTRO: "w-ix-outro" + La };
    QE.extend(Nr.triggers, ZE);
    Pa.exports = Nr;
  });
  var Qn = f((gM, Na) => {
    var JE =
      typeof global == "object" && global && global.Object === Object && global;
    Na.exports = JE;
  });
  var ke = f((EM, Da) => {
    var ey = Qn(),
      ty = typeof self == "object" && self && self.Object === Object && self,
      ry = ey || ty || Function("return this")();
    Da.exports = ry;
  });
  var St = f((yM, Fa) => {
    var ny = ke(),
      iy = ny.Symbol;
    Fa.exports = iy;
  });
  var Ga = f((vM, Xa) => {
    var Ma = St(),
      qa = Object.prototype,
      oy = qa.hasOwnProperty,
      ay = qa.toString,
      Jt = Ma ? Ma.toStringTag : void 0;
    function sy(e) {
      var t = oy.call(e, Jt),
        r = e[Jt];
      try {
        e[Jt] = void 0;
        var n = !0;
      } catch {}
      var i = ay.call(e);
      return n && (t ? (e[Jt] = r) : delete e[Jt]), i;
    }
    Xa.exports = sy;
  });
  var Va = f((mM, ka) => {
    var uy = Object.prototype,
      cy = uy.toString;
    function ly(e) {
      return cy.call(e);
    }
    ka.exports = ly;
  });
  var ut = f((_M, Wa) => {
    var Ua = St(),
      fy = Ga(),
      dy = Va(),
      py = "[object Null]",
      hy = "[object Undefined]",
      Ba = Ua ? Ua.toStringTag : void 0;
    function gy(e) {
      return e == null
        ? e === void 0
          ? hy
          : py
        : Ba && Ba in Object(e)
        ? fy(e)
        : dy(e);
    }
    Wa.exports = gy;
  });
  var Zn = f((IM, Ha) => {
    function Ey(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Ha.exports = Ey;
  });
  var Jn = f((TM, za) => {
    var yy = Zn(),
      vy = yy(Object.getPrototypeOf, Object);
    za.exports = vy;
  });
  var rt = f((bM, Ka) => {
    function my(e) {
      return e != null && typeof e == "object";
    }
    Ka.exports = my;
  });
  var ei = f((AM, Ya) => {
    var _y = ut(),
      Iy = Jn(),
      Ty = rt(),
      by = "[object Object]",
      Ay = Function.prototype,
      Sy = Object.prototype,
      ja = Ay.toString,
      wy = Sy.hasOwnProperty,
      Oy = ja.call(Object);
    function xy(e) {
      if (!Ty(e) || _y(e) != by) return !1;
      var t = Iy(e);
      if (t === null) return !0;
      var r = wy.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ja.call(r) == Oy;
    }
    Ya.exports = xy;
  });
  var $a = f((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    ti.default = Ry;
    function Ry(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Qa = f((ni, ri) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    var Cy = $a(),
      Ly = Py(Cy);
    function Py(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var wt;
    typeof self < "u"
      ? (wt = self)
      : typeof window < "u"
      ? (wt = window)
      : typeof global < "u"
      ? (wt = global)
      : typeof ri < "u"
      ? (wt = ri)
      : (wt = Function("return this")());
    var Ny = (0, Ly.default)(wt);
    ni.default = Ny;
  });
  var ii = f((er) => {
    "use strict";
    er.__esModule = !0;
    er.ActionTypes = void 0;
    er.default = ts;
    var Dy = ei(),
      Fy = es(Dy),
      My = Qa(),
      Za = es(My);
    function es(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ja = (er.ActionTypes = { INIT: "@@redux/INIT" });
    function ts(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ts)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function y() {
        return o;
      }
      function h(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var x = !0;
        return (
          l(),
          s.push(I),
          function () {
            if (x) {
              (x = !1), l();
              var L = s.indexOf(I);
              s.splice(L, 1);
            }
          }
        );
      }
      function p(I) {
        if (!(0, Fy.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, I));
        } finally {
          u = !1;
        }
        for (var x = (a = s), b = 0; b < x.length; b++) x[b]();
        return I;
      }
      function _(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), p({ type: Ja.INIT });
      }
      function A() {
        var I,
          x = h;
        return (
          (I = {
            subscribe: function (L) {
              if (typeof L != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                L.next && L.next(y());
              }
              C();
              var D = x(C);
              return { unsubscribe: D };
            },
          }),
          (I[Za.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        p({ type: Ja.INIT }),
        (n = { dispatch: p, subscribe: h, getState: y, replaceReducer: _ }),
        (n[Za.default] = A),
        n
      );
    }
  });
  var ai = f((oi) => {
    "use strict";
    oi.__esModule = !0;
    oi.default = qy;
    function qy(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var is = f((si) => {
    "use strict";
    si.__esModule = !0;
    si.default = Uy;
    var rs = ii(),
      Xy = ei(),
      xM = ns(Xy),
      Gy = ai(),
      RM = ns(Gy);
    function ns(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ky(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Vy(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: rs.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                rs.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Uy(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        Vy(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (s) throw s;
        if (!1) var h;
        for (var p = !1, _ = {}, A = 0; A < o.length; A++) {
          var I = o[A],
            x = r[I],
            b = l[I],
            L = x(b, y);
          if (typeof L > "u") {
            var C = ky(I, y);
            throw new Error(C);
          }
          (_[I] = L), (p = p || L !== b);
        }
        return p ? _ : l;
      };
    }
  });
  var as = f((ui) => {
    "use strict";
    ui.__esModule = !0;
    ui.default = By;
    function os(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function By(e, t) {
      if (typeof e == "function") return os(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = os(a, t));
      }
      return n;
    }
  });
  var li = f((ci) => {
    "use strict";
    ci.__esModule = !0;
    ci.default = Wy;
    function Wy() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var ss = f((fi) => {
    "use strict";
    fi.__esModule = !0;
    var Hy =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    fi.default = Yy;
    var zy = li(),
      Ky = jy(zy);
    function jy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Yy() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            l = [],
            y = {
              getState: s.getState,
              dispatch: function (p) {
                return u(p);
              },
            };
          return (
            (l = t.map(function (h) {
              return h(y);
            })),
            (u = Ky.default.apply(void 0, l)(s.dispatch)),
            Hy({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var di = f((De) => {
    "use strict";
    De.__esModule = !0;
    De.compose =
      De.applyMiddleware =
      De.bindActionCreators =
      De.combineReducers =
      De.createStore =
        void 0;
    var $y = ii(),
      Qy = Ot($y),
      Zy = is(),
      Jy = Ot(Zy),
      ev = as(),
      tv = Ot(ev),
      rv = ss(),
      nv = Ot(rv),
      iv = li(),
      ov = Ot(iv),
      av = ai(),
      DM = Ot(av);
    function Ot(e) {
      return e && e.__esModule ? e : { default: e };
    }
    De.createStore = Qy.default;
    De.combineReducers = Jy.default;
    De.bindActionCreators = tv.default;
    De.applyMiddleware = nv.default;
    De.compose = ov.default;
  });
  var Ve,
    pi,
    Ye,
    sv,
    uv,
    Dr,
    cv,
    hi = fe(() => {
      "use strict";
      (Ve = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (pi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ye = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (sv = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (uv = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Dr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (cv = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var xe,
    lv,
    Fr = fe(() => {
      "use strict";
      (xe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (lv = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var fv,
    us = fe(() => {
      "use strict";
      fv = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var dv,
    pv,
    hv,
    gv,
    Ev,
    yv,
    vv,
    gi,
    cs = fe(() => {
      "use strict";
      Fr();
      ({
        TRANSFORM_MOVE: dv,
        TRANSFORM_SCALE: pv,
        TRANSFORM_ROTATE: hv,
        TRANSFORM_SKEW: gv,
        STYLE_SIZE: Ev,
        STYLE_FILTER: yv,
        STYLE_FONT_VARIATION: vv,
      } = xe),
        (gi = {
          [dv]: !0,
          [pv]: !0,
          [hv]: !0,
          [gv]: !0,
          [Ev]: !0,
          [yv]: !0,
          [vv]: !0,
        });
    });
  var ye = {};
  Oe(ye, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Fv,
    IX2_ANIMATION_FRAME_CHANGED: () => Rv,
    IX2_CLEAR_REQUESTED: () => wv,
    IX2_ELEMENT_STATE_CHANGED: () => Dv,
    IX2_EVENT_LISTENER_ADDED: () => Ov,
    IX2_EVENT_STATE_CHANGED: () => xv,
    IX2_INSTANCE_ADDED: () => Lv,
    IX2_INSTANCE_REMOVED: () => Nv,
    IX2_INSTANCE_STARTED: () => Pv,
    IX2_MEDIA_QUERIES_DEFINED: () => qv,
    IX2_PARAMETER_CHANGED: () => Cv,
    IX2_PLAYBACK_REQUESTED: () => Av,
    IX2_PREVIEW_REQUESTED: () => bv,
    IX2_RAW_DATA_IMPORTED: () => mv,
    IX2_SESSION_INITIALIZED: () => _v,
    IX2_SESSION_STARTED: () => Iv,
    IX2_SESSION_STOPPED: () => Tv,
    IX2_STOP_REQUESTED: () => Sv,
    IX2_TEST_FRAME_RENDERED: () => Xv,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Mv,
  });
  var mv,
    _v,
    Iv,
    Tv,
    bv,
    Av,
    Sv,
    wv,
    Ov,
    xv,
    Rv,
    Cv,
    Lv,
    Pv,
    Nv,
    Dv,
    Fv,
    Mv,
    qv,
    Xv,
    ls = fe(() => {
      "use strict";
      (mv = "IX2_RAW_DATA_IMPORTED"),
        (_v = "IX2_SESSION_INITIALIZED"),
        (Iv = "IX2_SESSION_STARTED"),
        (Tv = "IX2_SESSION_STOPPED"),
        (bv = "IX2_PREVIEW_REQUESTED"),
        (Av = "IX2_PLAYBACK_REQUESTED"),
        (Sv = "IX2_STOP_REQUESTED"),
        (wv = "IX2_CLEAR_REQUESTED"),
        (Ov = "IX2_EVENT_LISTENER_ADDED"),
        (xv = "IX2_EVENT_STATE_CHANGED"),
        (Rv = "IX2_ANIMATION_FRAME_CHANGED"),
        (Cv = "IX2_PARAMETER_CHANGED"),
        (Lv = "IX2_INSTANCE_ADDED"),
        (Pv = "IX2_INSTANCE_STARTED"),
        (Nv = "IX2_INSTANCE_REMOVED"),
        (Dv = "IX2_ELEMENT_STATE_CHANGED"),
        (Fv = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (Mv = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (qv = "IX2_MEDIA_QUERIES_DEFINED"),
        (Xv = "IX2_TEST_FRAME_RENDERED");
    });
  var _e = {};
  Oe(_e, {
    ABSTRACT_NODE: () => Mm,
    AUTO: () => Sm,
    BACKGROUND: () => mm,
    BACKGROUND_COLOR: () => vm,
    BAR_DELIMITER: () => xm,
    BORDER_COLOR: () => _m,
    BOUNDARY_SELECTOR: () => Bv,
    CHILDREN: () => Rm,
    COLON_DELIMITER: () => Om,
    COLOR: () => Im,
    COMMA_DELIMITER: () => wm,
    CONFIG_UNIT: () => Qv,
    CONFIG_VALUE: () => Kv,
    CONFIG_X_UNIT: () => jv,
    CONFIG_X_VALUE: () => Wv,
    CONFIG_Y_UNIT: () => Yv,
    CONFIG_Y_VALUE: () => Hv,
    CONFIG_Z_UNIT: () => $v,
    CONFIG_Z_VALUE: () => zv,
    DISPLAY: () => Tm,
    FILTER: () => hm,
    FLEX: () => bm,
    FONT_VARIATION_SETTINGS: () => gm,
    HEIGHT: () => ym,
    HTML_ELEMENT: () => Dm,
    IMMEDIATE_CHILDREN: () => Cm,
    IX2_ID_DELIMITER: () => Gv,
    OPACITY: () => pm,
    PARENT: () => Pm,
    PLAIN_OBJECT: () => Fm,
    PRESERVE_3D: () => Nm,
    RENDER_GENERAL: () => Xm,
    RENDER_PLUGIN: () => km,
    RENDER_STYLE: () => Gm,
    RENDER_TRANSFORM: () => qm,
    ROTATE_X: () => sm,
    ROTATE_Y: () => um,
    ROTATE_Z: () => cm,
    SCALE_3D: () => am,
    SCALE_X: () => nm,
    SCALE_Y: () => im,
    SCALE_Z: () => om,
    SIBLINGS: () => Lm,
    SKEW: () => lm,
    SKEW_X: () => fm,
    SKEW_Y: () => dm,
    TRANSFORM: () => Zv,
    TRANSLATE_3D: () => rm,
    TRANSLATE_X: () => Jv,
    TRANSLATE_Y: () => em,
    TRANSLATE_Z: () => tm,
    WF_PAGE: () => kv,
    WIDTH: () => Em,
    WILL_CHANGE: () => Am,
    W_MOD_IX: () => Uv,
    W_MOD_JS: () => Vv,
  });
  var Gv,
    kv,
    Vv,
    Uv,
    Bv,
    Wv,
    Hv,
    zv,
    Kv,
    jv,
    Yv,
    $v,
    Qv,
    Zv,
    Jv,
    em,
    tm,
    rm,
    nm,
    im,
    om,
    am,
    sm,
    um,
    cm,
    lm,
    fm,
    dm,
    pm,
    hm,
    gm,
    Em,
    ym,
    vm,
    mm,
    _m,
    Im,
    Tm,
    bm,
    Am,
    Sm,
    wm,
    Om,
    xm,
    Rm,
    Cm,
    Lm,
    Pm,
    Nm,
    Dm,
    Fm,
    Mm,
    qm,
    Xm,
    Gm,
    km,
    fs = fe(() => {
      "use strict";
      (Gv = "|"),
        (kv = "data-wf-page"),
        (Vv = "w-mod-js"),
        (Uv = "w-mod-ix"),
        (Bv = ".w-dyn-item"),
        (Wv = "xValue"),
        (Hv = "yValue"),
        (zv = "zValue"),
        (Kv = "value"),
        (jv = "xUnit"),
        (Yv = "yUnit"),
        ($v = "zUnit"),
        (Qv = "unit"),
        (Zv = "transform"),
        (Jv = "translateX"),
        (em = "translateY"),
        (tm = "translateZ"),
        (rm = "translate3d"),
        (nm = "scaleX"),
        (im = "scaleY"),
        (om = "scaleZ"),
        (am = "scale3d"),
        (sm = "rotateX"),
        (um = "rotateY"),
        (cm = "rotateZ"),
        (lm = "skew"),
        (fm = "skewX"),
        (dm = "skewY"),
        (pm = "opacity"),
        (hm = "filter"),
        (gm = "font-variation-settings"),
        (Em = "width"),
        (ym = "height"),
        (vm = "backgroundColor"),
        (mm = "background"),
        (_m = "borderColor"),
        (Im = "color"),
        (Tm = "display"),
        (bm = "flex"),
        (Am = "willChange"),
        (Sm = "AUTO"),
        (wm = ","),
        (Om = ":"),
        (xm = "|"),
        (Rm = "CHILDREN"),
        (Cm = "IMMEDIATE_CHILDREN"),
        (Lm = "SIBLINGS"),
        (Pm = "PARENT"),
        (Nm = "preserve-3d"),
        (Dm = "HTML_ELEMENT"),
        (Fm = "PLAIN_OBJECT"),
        (Mm = "ABSTRACT_NODE"),
        (qm = "RENDER_TRANSFORM"),
        (Xm = "RENDER_GENERAL"),
        (Gm = "RENDER_STYLE"),
        (km = "RENDER_PLUGIN");
    });
  var ds = {};
  Oe(ds, {
    ActionAppliesTo: () => lv,
    ActionTypeConsts: () => xe,
    EventAppliesTo: () => pi,
    EventBasedOn: () => Ye,
    EventContinuousMouseAxes: () => sv,
    EventLimitAffectedElements: () => uv,
    EventTypeConsts: () => Ve,
    IX2EngineActionTypes: () => ye,
    IX2EngineConstants: () => _e,
    InteractionTypeConsts: () => fv,
    QuickEffectDirectionConsts: () => cv,
    QuickEffectIds: () => Dr,
    ReducedMotionTypes: () => gi,
  });
  var Re = fe(() => {
    "use strict";
    hi();
    Fr();
    us();
    cs();
    ls();
    fs();
    Fr();
    hi();
  });
  var Vm,
    ps,
    hs = fe(() => {
      "use strict";
      Re();
      ({ IX2_RAW_DATA_IMPORTED: Vm } = ye),
        (ps = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Vm:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var xt = f((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var Um =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = qr;
    he.addLast = ys;
    he.addFirst = vs;
    he.removeLast = ms;
    he.removeFirst = _s;
    he.insert = Is;
    he.removeAt = Ts;
    he.replaceAt = bs;
    he.getIn = Xr;
    he.set = Gr;
    he.setIn = kr;
    he.update = Ss;
    he.updateIn = ws;
    he.merge = Os;
    he.mergeDeep = xs;
    he.mergeIn = Rs;
    he.omit = Cs;
    he.addDefaults = Ls;
    var gs = "INVALID_ARGS";
    function Es(e) {
      throw new Error(e);
    }
    function Ei(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Bm = {}.hasOwnProperty;
    function qr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ei(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ce(e, t, r) {
      var n = r;
      n == null && Es(gs);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var y = Ei(l);
          if (y.length)
            for (var h = 0; h <= y.length; h++) {
              var p = y[h];
              if (!(e && n[p] !== void 0)) {
                var _ = l[p];
                t && Mr(n[p]) && Mr(_) && (_ = Ce(e, t, n[p], _)),
                  !(_ === void 0 || _ === n[p]) &&
                    (i || ((i = !0), (n = qr(n))), (n[p] = _));
              }
            }
        }
      }
      return n;
    }
    function Mr(e) {
      var t = typeof e > "u" ? "undefined" : Um(e);
      return e != null && (t === "object" || t === "function");
    }
    function ys(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function vs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ms(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function _s(e) {
      return e.length ? e.slice(1) : e;
    }
    function Is(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ts(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function bs(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Xr(e, t) {
      if ((!Array.isArray(t) && Es(gs), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Gr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = qr(i);
      return (o[t] = r), o;
    }
    function As(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Mr(e) && Mr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = As(a, t, r, n + 1);
      }
      return Gr(e, o, i);
    }
    function kr(e, t, r) {
      return t.length ? As(e, t, r, 0) : r;
    }
    function Ss(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Gr(e, t, i);
    }
    function ws(e, t, r) {
      var n = Xr(e, t),
        i = r(n);
      return kr(e, t, i);
    }
    function Os(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ce.call.apply(Ce, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ce(!1, !1, e, t, r, n, i, o);
    }
    function xs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ce.call.apply(Ce, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ce(!1, !0, e, t, r, n, i, o);
    }
    function Rs(e, t, r, n, i, o, a) {
      var s = Xr(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          y = Array(l > 7 ? l - 7 : 0),
          h = 7;
        h < l;
        h++
      )
        y[h - 7] = arguments[h];
      return (
        y.length
          ? (u = Ce.call.apply(Ce, [null, !1, !1, s, r, n, i, o, a].concat(y)))
          : (u = Ce(!1, !1, s, r, n, i, o, a)),
        kr(e, t, u)
      );
    }
    function Cs(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Bm.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Ei(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Ls(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ce.call.apply(Ce, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ce(!0, !1, e, t, r, n, i, o);
    }
    var Wm = {
      clone: qr,
      addLast: ys,
      addFirst: vs,
      removeLast: ms,
      removeFirst: _s,
      insert: Is,
      removeAt: Ts,
      replaceAt: bs,
      getIn: Xr,
      set: Gr,
      setIn: kr,
      update: Ss,
      updateIn: ws,
      merge: Os,
      mergeDeep: xs,
      mergeIn: Rs,
      omit: Cs,
      addDefaults: Ls,
    };
    he.default = Wm;
  });
  var Ns,
    Hm,
    zm,
    Km,
    jm,
    Ym,
    Ps,
    Ds,
    Fs = fe(() => {
      "use strict";
      Re();
      (Ns = ie(xt())),
        ({
          IX2_PREVIEW_REQUESTED: Hm,
          IX2_PLAYBACK_REQUESTED: zm,
          IX2_STOP_REQUESTED: Km,
          IX2_CLEAR_REQUESTED: jm,
        } = ye),
        (Ym = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Ps = Object.create(null, {
          [Hm]: { value: "preview" },
          [zm]: { value: "playback" },
          [Km]: { value: "stop" },
          [jm]: { value: "clear" },
        })),
        (Ds = (e = Ym, t) => {
          if (t.type in Ps) {
            let r = [Ps[t.type]];
            return (0, Ns.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ae,
    $m,
    Qm,
    Zm,
    Jm,
    e_,
    t_,
    r_,
    n_,
    i_,
    o_,
    Ms,
    a_,
    qs,
    Xs = fe(() => {
      "use strict";
      Re();
      (Ae = ie(xt())),
        ({
          IX2_SESSION_INITIALIZED: $m,
          IX2_SESSION_STARTED: Qm,
          IX2_TEST_FRAME_RENDERED: Zm,
          IX2_SESSION_STOPPED: Jm,
          IX2_EVENT_LISTENER_ADDED: e_,
          IX2_EVENT_STATE_CHANGED: t_,
          IX2_ANIMATION_FRAME_CHANGED: r_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: n_,
          IX2_VIEWPORT_WIDTH_CHANGED: i_,
          IX2_MEDIA_QUERIES_DEFINED: o_,
        } = ye),
        (Ms = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (a_ = 20),
        (qs = (e = Ms, t) => {
          switch (t.type) {
            case $m: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ae.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Qm:
              return (0, Ae.set)(e, "active", !0);
            case Zm: {
              let {
                payload: { step: r = a_ },
              } = t;
              return (0, Ae.set)(e, "tick", e.tick + r);
            }
            case Jm:
              return Ms;
            case r_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ae.set)(e, "tick", r);
            }
            case e_: {
              let r = (0, Ae.addLast)(e.eventListeners, t.payload);
              return (0, Ae.set)(e, "eventListeners", r);
            }
            case t_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ae.setIn)(e, ["eventState", r], n);
            }
            case n_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ae.setIn)(e, ["playbackState", r], n);
            }
            case i_: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = n[a];
                if (r >= u && r <= l) {
                  o = s;
                  break;
                }
              }
              return (0, Ae.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case o_:
              return (0, Ae.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var ks = f((e1, Gs) => {
    function s_() {
      (this.__data__ = []), (this.size = 0);
    }
    Gs.exports = s_;
  });
  var Vr = f((t1, Vs) => {
    function u_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Vs.exports = u_;
  });
  var tr = f((r1, Us) => {
    var c_ = Vr();
    function l_(e, t) {
      for (var r = e.length; r--; ) if (c_(e[r][0], t)) return r;
      return -1;
    }
    Us.exports = l_;
  });
  var Ws = f((n1, Bs) => {
    var f_ = tr(),
      d_ = Array.prototype,
      p_ = d_.splice;
    function h_(e) {
      var t = this.__data__,
        r = f_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : p_.call(t, r, 1), --this.size, !0;
    }
    Bs.exports = h_;
  });
  var zs = f((i1, Hs) => {
    var g_ = tr();
    function E_(e) {
      var t = this.__data__,
        r = g_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Hs.exports = E_;
  });
  var js = f((o1, Ks) => {
    var y_ = tr();
    function v_(e) {
      return y_(this.__data__, e) > -1;
    }
    Ks.exports = v_;
  });
  var $s = f((a1, Ys) => {
    var m_ = tr();
    function __(e, t) {
      var r = this.__data__,
        n = m_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Ys.exports = __;
  });
  var rr = f((s1, Qs) => {
    var I_ = ks(),
      T_ = Ws(),
      b_ = zs(),
      A_ = js(),
      S_ = $s();
    function Rt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Rt.prototype.clear = I_;
    Rt.prototype.delete = T_;
    Rt.prototype.get = b_;
    Rt.prototype.has = A_;
    Rt.prototype.set = S_;
    Qs.exports = Rt;
  });
  var Js = f((u1, Zs) => {
    var w_ = rr();
    function O_() {
      (this.__data__ = new w_()), (this.size = 0);
    }
    Zs.exports = O_;
  });
  var tu = f((c1, eu) => {
    function x_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    eu.exports = x_;
  });
  var nu = f((l1, ru) => {
    function R_(e) {
      return this.__data__.get(e);
    }
    ru.exports = R_;
  });
  var ou = f((f1, iu) => {
    function C_(e) {
      return this.__data__.has(e);
    }
    iu.exports = C_;
  });
  var $e = f((d1, au) => {
    function L_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    au.exports = L_;
  });
  var yi = f((p1, su) => {
    var P_ = ut(),
      N_ = $e(),
      D_ = "[object AsyncFunction]",
      F_ = "[object Function]",
      M_ = "[object GeneratorFunction]",
      q_ = "[object Proxy]";
    function X_(e) {
      if (!N_(e)) return !1;
      var t = P_(e);
      return t == F_ || t == M_ || t == D_ || t == q_;
    }
    su.exports = X_;
  });
  var cu = f((h1, uu) => {
    var G_ = ke(),
      k_ = G_["__core-js_shared__"];
    uu.exports = k_;
  });
  var du = f((g1, fu) => {
    var vi = cu(),
      lu = (function () {
        var e = /[^.]+$/.exec((vi && vi.keys && vi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function V_(e) {
      return !!lu && lu in e;
    }
    fu.exports = V_;
  });
  var mi = f((E1, pu) => {
    var U_ = Function.prototype,
      B_ = U_.toString;
    function W_(e) {
      if (e != null) {
        try {
          return B_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    pu.exports = W_;
  });
  var gu = f((y1, hu) => {
    var H_ = yi(),
      z_ = du(),
      K_ = $e(),
      j_ = mi(),
      Y_ = /[\\^$.*+?()[\]{}|]/g,
      $_ = /^\[object .+?Constructor\]$/,
      Q_ = Function.prototype,
      Z_ = Object.prototype,
      J_ = Q_.toString,
      eI = Z_.hasOwnProperty,
      tI = RegExp(
        "^" +
          J_.call(eI)
            .replace(Y_, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function rI(e) {
      if (!K_(e) || z_(e)) return !1;
      var t = H_(e) ? tI : $_;
      return t.test(j_(e));
    }
    hu.exports = rI;
  });
  var yu = f((v1, Eu) => {
    function nI(e, t) {
      return e?.[t];
    }
    Eu.exports = nI;
  });
  var ct = f((m1, vu) => {
    var iI = gu(),
      oI = yu();
    function aI(e, t) {
      var r = oI(e, t);
      return iI(r) ? r : void 0;
    }
    vu.exports = aI;
  });
  var Ur = f((_1, mu) => {
    var sI = ct(),
      uI = ke(),
      cI = sI(uI, "Map");
    mu.exports = cI;
  });
  var nr = f((I1, _u) => {
    var lI = ct(),
      fI = lI(Object, "create");
    _u.exports = fI;
  });
  var bu = f((T1, Tu) => {
    var Iu = nr();
    function dI() {
      (this.__data__ = Iu ? Iu(null) : {}), (this.size = 0);
    }
    Tu.exports = dI;
  });
  var Su = f((b1, Au) => {
    function pI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Au.exports = pI;
  });
  var Ou = f((A1, wu) => {
    var hI = nr(),
      gI = "__lodash_hash_undefined__",
      EI = Object.prototype,
      yI = EI.hasOwnProperty;
    function vI(e) {
      var t = this.__data__;
      if (hI) {
        var r = t[e];
        return r === gI ? void 0 : r;
      }
      return yI.call(t, e) ? t[e] : void 0;
    }
    wu.exports = vI;
  });
  var Ru = f((S1, xu) => {
    var mI = nr(),
      _I = Object.prototype,
      II = _I.hasOwnProperty;
    function TI(e) {
      var t = this.__data__;
      return mI ? t[e] !== void 0 : II.call(t, e);
    }
    xu.exports = TI;
  });
  var Lu = f((w1, Cu) => {
    var bI = nr(),
      AI = "__lodash_hash_undefined__";
    function SI(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = bI && t === void 0 ? AI : t),
        this
      );
    }
    Cu.exports = SI;
  });
  var Nu = f((O1, Pu) => {
    var wI = bu(),
      OI = Su(),
      xI = Ou(),
      RI = Ru(),
      CI = Lu();
    function Ct(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ct.prototype.clear = wI;
    Ct.prototype.delete = OI;
    Ct.prototype.get = xI;
    Ct.prototype.has = RI;
    Ct.prototype.set = CI;
    Pu.exports = Ct;
  });
  var Mu = f((x1, Fu) => {
    var Du = Nu(),
      LI = rr(),
      PI = Ur();
    function NI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Du(),
          map: new (PI || LI)(),
          string: new Du(),
        });
    }
    Fu.exports = NI;
  });
  var Xu = f((R1, qu) => {
    function DI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    qu.exports = DI;
  });
  var ir = f((C1, Gu) => {
    var FI = Xu();
    function MI(e, t) {
      var r = e.__data__;
      return FI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Gu.exports = MI;
  });
  var Vu = f((L1, ku) => {
    var qI = ir();
    function XI(e) {
      var t = qI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ku.exports = XI;
  });
  var Bu = f((P1, Uu) => {
    var GI = ir();
    function kI(e) {
      return GI(this, e).get(e);
    }
    Uu.exports = kI;
  });
  var Hu = f((N1, Wu) => {
    var VI = ir();
    function UI(e) {
      return VI(this, e).has(e);
    }
    Wu.exports = UI;
  });
  var Ku = f((D1, zu) => {
    var BI = ir();
    function WI(e, t) {
      var r = BI(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    zu.exports = WI;
  });
  var Br = f((F1, ju) => {
    var HI = Mu(),
      zI = Vu(),
      KI = Bu(),
      jI = Hu(),
      YI = Ku();
    function Lt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Lt.prototype.clear = HI;
    Lt.prototype.delete = zI;
    Lt.prototype.get = KI;
    Lt.prototype.has = jI;
    Lt.prototype.set = YI;
    ju.exports = Lt;
  });
  var $u = f((M1, Yu) => {
    var $I = rr(),
      QI = Ur(),
      ZI = Br(),
      JI = 200;
    function eT(e, t) {
      var r = this.__data__;
      if (r instanceof $I) {
        var n = r.__data__;
        if (!QI || n.length < JI - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new ZI(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Yu.exports = eT;
  });
  var _i = f((q1, Qu) => {
    var tT = rr(),
      rT = Js(),
      nT = tu(),
      iT = nu(),
      oT = ou(),
      aT = $u();
    function Pt(e) {
      var t = (this.__data__ = new tT(e));
      this.size = t.size;
    }
    Pt.prototype.clear = rT;
    Pt.prototype.delete = nT;
    Pt.prototype.get = iT;
    Pt.prototype.has = oT;
    Pt.prototype.set = aT;
    Qu.exports = Pt;
  });
  var Ju = f((X1, Zu) => {
    var sT = "__lodash_hash_undefined__";
    function uT(e) {
      return this.__data__.set(e, sT), this;
    }
    Zu.exports = uT;
  });
  var tc = f((G1, ec) => {
    function cT(e) {
      return this.__data__.has(e);
    }
    ec.exports = cT;
  });
  var nc = f((k1, rc) => {
    var lT = Br(),
      fT = Ju(),
      dT = tc();
    function Wr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new lT(); ++t < r; ) this.add(e[t]);
    }
    Wr.prototype.add = Wr.prototype.push = fT;
    Wr.prototype.has = dT;
    rc.exports = Wr;
  });
  var oc = f((V1, ic) => {
    function pT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    ic.exports = pT;
  });
  var sc = f((U1, ac) => {
    function hT(e, t) {
      return e.has(t);
    }
    ac.exports = hT;
  });
  var Ii = f((B1, uc) => {
    var gT = nc(),
      ET = oc(),
      yT = sc(),
      vT = 1,
      mT = 2;
    function _T(e, t, r, n, i, o) {
      var a = r & vT,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        y = o.get(t);
      if (l && y) return l == t && y == e;
      var h = -1,
        p = !0,
        _ = r & mT ? new gT() : void 0;
      for (o.set(e, t), o.set(t, e); ++h < s; ) {
        var A = e[h],
          I = t[h];
        if (n) var x = a ? n(I, A, h, t, e, o) : n(A, I, h, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          p = !1;
          break;
        }
        if (_) {
          if (
            !ET(t, function (b, L) {
              if (!yT(_, L) && (A === b || i(A, b, r, n, o))) return _.push(L);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(A === I || i(A, I, r, n, o))) {
          p = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), p;
    }
    uc.exports = _T;
  });
  var lc = f((W1, cc) => {
    var IT = ke(),
      TT = IT.Uint8Array;
    cc.exports = TT;
  });
  var dc = f((H1, fc) => {
    function bT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    fc.exports = bT;
  });
  var hc = f((z1, pc) => {
    function AT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    pc.exports = AT;
  });
  var mc = f((K1, vc) => {
    var gc = St(),
      Ec = lc(),
      ST = Vr(),
      wT = Ii(),
      OT = dc(),
      xT = hc(),
      RT = 1,
      CT = 2,
      LT = "[object Boolean]",
      PT = "[object Date]",
      NT = "[object Error]",
      DT = "[object Map]",
      FT = "[object Number]",
      MT = "[object RegExp]",
      qT = "[object Set]",
      XT = "[object String]",
      GT = "[object Symbol]",
      kT = "[object ArrayBuffer]",
      VT = "[object DataView]",
      yc = gc ? gc.prototype : void 0,
      Ti = yc ? yc.valueOf : void 0;
    function UT(e, t, r, n, i, o, a) {
      switch (r) {
        case VT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case kT:
          return !(e.byteLength != t.byteLength || !o(new Ec(e), new Ec(t)));
        case LT:
        case PT:
        case FT:
          return ST(+e, +t);
        case NT:
          return e.name == t.name && e.message == t.message;
        case MT:
        case XT:
          return e == t + "";
        case DT:
          var s = OT;
        case qT:
          var u = n & RT;
          if ((s || (s = xT), e.size != t.size && !u)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (n |= CT), a.set(e, t);
          var y = wT(s(e), s(t), n, i, o, a);
          return a.delete(e), y;
        case GT:
          if (Ti) return Ti.call(e) == Ti.call(t);
      }
      return !1;
    }
    vc.exports = UT;
  });
  var Hr = f((j1, _c) => {
    function BT(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    _c.exports = BT;
  });
  var me = f((Y1, Ic) => {
    var WT = Array.isArray;
    Ic.exports = WT;
  });
  var bi = f(($1, Tc) => {
    var HT = Hr(),
      zT = me();
    function KT(e, t, r) {
      var n = t(e);
      return zT(e) ? n : HT(n, r(e));
    }
    Tc.exports = KT;
  });
  var Ac = f((Q1, bc) => {
    function jT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    bc.exports = jT;
  });
  var Ai = f((Z1, Sc) => {
    function YT() {
      return [];
    }
    Sc.exports = YT;
  });
  var Si = f((J1, Oc) => {
    var $T = Ac(),
      QT = Ai(),
      ZT = Object.prototype,
      JT = ZT.propertyIsEnumerable,
      wc = Object.getOwnPropertySymbols,
      eb = wc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                $T(wc(e), function (t) {
                  return JT.call(e, t);
                }));
          }
        : QT;
    Oc.exports = eb;
  });
  var Rc = f((e2, xc) => {
    function tb(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    xc.exports = tb;
  });
  var Lc = f((t2, Cc) => {
    var rb = ut(),
      nb = rt(),
      ib = "[object Arguments]";
    function ob(e) {
      return nb(e) && rb(e) == ib;
    }
    Cc.exports = ob;
  });
  var or = f((r2, Dc) => {
    var Pc = Lc(),
      ab = rt(),
      Nc = Object.prototype,
      sb = Nc.hasOwnProperty,
      ub = Nc.propertyIsEnumerable,
      cb = Pc(
        (function () {
          return arguments;
        })()
      )
        ? Pc
        : function (e) {
            return ab(e) && sb.call(e, "callee") && !ub.call(e, "callee");
          };
    Dc.exports = cb;
  });
  var Mc = f((n2, Fc) => {
    function lb() {
      return !1;
    }
    Fc.exports = lb;
  });
  var zr = f((ar, Nt) => {
    var fb = ke(),
      db = Mc(),
      Gc = typeof ar == "object" && ar && !ar.nodeType && ar,
      qc = Gc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
      pb = qc && qc.exports === Gc,
      Xc = pb ? fb.Buffer : void 0,
      hb = Xc ? Xc.isBuffer : void 0,
      gb = hb || db;
    Nt.exports = gb;
  });
  var Kr = f((i2, kc) => {
    var Eb = 9007199254740991,
      yb = /^(?:0|[1-9]\d*)$/;
    function vb(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Eb),
        !!t &&
          (r == "number" || (r != "symbol" && yb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    kc.exports = vb;
  });
  var jr = f((o2, Vc) => {
    var mb = 9007199254740991;
    function _b(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mb;
    }
    Vc.exports = _b;
  });
  var Bc = f((a2, Uc) => {
    var Ib = ut(),
      Tb = jr(),
      bb = rt(),
      Ab = "[object Arguments]",
      Sb = "[object Array]",
      wb = "[object Boolean]",
      Ob = "[object Date]",
      xb = "[object Error]",
      Rb = "[object Function]",
      Cb = "[object Map]",
      Lb = "[object Number]",
      Pb = "[object Object]",
      Nb = "[object RegExp]",
      Db = "[object Set]",
      Fb = "[object String]",
      Mb = "[object WeakMap]",
      qb = "[object ArrayBuffer]",
      Xb = "[object DataView]",
      Gb = "[object Float32Array]",
      kb = "[object Float64Array]",
      Vb = "[object Int8Array]",
      Ub = "[object Int16Array]",
      Bb = "[object Int32Array]",
      Wb = "[object Uint8Array]",
      Hb = "[object Uint8ClampedArray]",
      zb = "[object Uint16Array]",
      Kb = "[object Uint32Array]",
      le = {};
    le[Gb] =
      le[kb] =
      le[Vb] =
      le[Ub] =
      le[Bb] =
      le[Wb] =
      le[Hb] =
      le[zb] =
      le[Kb] =
        !0;
    le[Ab] =
      le[Sb] =
      le[qb] =
      le[wb] =
      le[Xb] =
      le[Ob] =
      le[xb] =
      le[Rb] =
      le[Cb] =
      le[Lb] =
      le[Pb] =
      le[Nb] =
      le[Db] =
      le[Fb] =
      le[Mb] =
        !1;
    function jb(e) {
      return bb(e) && Tb(e.length) && !!le[Ib(e)];
    }
    Uc.exports = jb;
  });
  var Hc = f((s2, Wc) => {
    function Yb(e) {
      return function (t) {
        return e(t);
      };
    }
    Wc.exports = Yb;
  });
  var Kc = f((sr, Dt) => {
    var $b = Qn(),
      zc = typeof sr == "object" && sr && !sr.nodeType && sr,
      ur = zc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
      Qb = ur && ur.exports === zc,
      wi = Qb && $b.process,
      Zb = (function () {
        try {
          var e = ur && ur.require && ur.require("util").types;
          return e || (wi && wi.binding && wi.binding("util"));
        } catch {}
      })();
    Dt.exports = Zb;
  });
  var Yr = f((u2, $c) => {
    var Jb = Bc(),
      eA = Hc(),
      jc = Kc(),
      Yc = jc && jc.isTypedArray,
      tA = Yc ? eA(Yc) : Jb;
    $c.exports = tA;
  });
  var Oi = f((c2, Qc) => {
    var rA = Rc(),
      nA = or(),
      iA = me(),
      oA = zr(),
      aA = Kr(),
      sA = Yr(),
      uA = Object.prototype,
      cA = uA.hasOwnProperty;
    function lA(e, t) {
      var r = iA(e),
        n = !r && nA(e),
        i = !r && !n && oA(e),
        o = !r && !n && !i && sA(e),
        a = r || n || i || o,
        s = a ? rA(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || cA.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              aA(l, u))
          ) &&
          s.push(l);
      return s;
    }
    Qc.exports = lA;
  });
  var $r = f((l2, Zc) => {
    var fA = Object.prototype;
    function dA(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || fA;
      return e === r;
    }
    Zc.exports = dA;
  });
  var el = f((f2, Jc) => {
    var pA = Zn(),
      hA = pA(Object.keys, Object);
    Jc.exports = hA;
  });
  var Qr = f((d2, tl) => {
    var gA = $r(),
      EA = el(),
      yA = Object.prototype,
      vA = yA.hasOwnProperty;
    function mA(e) {
      if (!gA(e)) return EA(e);
      var t = [];
      for (var r in Object(e)) vA.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    tl.exports = mA;
  });
  var gt = f((p2, rl) => {
    var _A = yi(),
      IA = jr();
    function TA(e) {
      return e != null && IA(e.length) && !_A(e);
    }
    rl.exports = TA;
  });
  var cr = f((h2, nl) => {
    var bA = Oi(),
      AA = Qr(),
      SA = gt();
    function wA(e) {
      return SA(e) ? bA(e) : AA(e);
    }
    nl.exports = wA;
  });
  var ol = f((g2, il) => {
    var OA = bi(),
      xA = Si(),
      RA = cr();
    function CA(e) {
      return OA(e, RA, xA);
    }
    il.exports = CA;
  });
  var ul = f((E2, sl) => {
    var al = ol(),
      LA = 1,
      PA = Object.prototype,
      NA = PA.hasOwnProperty;
    function DA(e, t, r, n, i, o) {
      var a = r & LA,
        s = al(e),
        u = s.length,
        l = al(t),
        y = l.length;
      if (u != y && !a) return !1;
      for (var h = u; h--; ) {
        var p = s[h];
        if (!(a ? p in t : NA.call(t, p))) return !1;
      }
      var _ = o.get(e),
        A = o.get(t);
      if (_ && A) return _ == t && A == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var x = a; ++h < u; ) {
        p = s[h];
        var b = e[p],
          L = t[p];
        if (n) var C = a ? n(L, b, p, t, e, o) : n(b, L, p, e, t, o);
        if (!(C === void 0 ? b === L || i(b, L, r, n, o) : C)) {
          I = !1;
          break;
        }
        x || (x = p == "constructor");
      }
      if (I && !x) {
        var D = e.constructor,
          N = t.constructor;
        D != N &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof D == "function" &&
            D instanceof D &&
            typeof N == "function" &&
            N instanceof N
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    sl.exports = DA;
  });
  var ll = f((y2, cl) => {
    var FA = ct(),
      MA = ke(),
      qA = FA(MA, "DataView");
    cl.exports = qA;
  });
  var dl = f((v2, fl) => {
    var XA = ct(),
      GA = ke(),
      kA = XA(GA, "Promise");
    fl.exports = kA;
  });
  var hl = f((m2, pl) => {
    var VA = ct(),
      UA = ke(),
      BA = VA(UA, "Set");
    pl.exports = BA;
  });
  var xi = f((_2, gl) => {
    var WA = ct(),
      HA = ke(),
      zA = WA(HA, "WeakMap");
    gl.exports = zA;
  });
  var Zr = f((I2, Tl) => {
    var Ri = ll(),
      Ci = Ur(),
      Li = dl(),
      Pi = hl(),
      Ni = xi(),
      Il = ut(),
      Ft = mi(),
      El = "[object Map]",
      KA = "[object Object]",
      yl = "[object Promise]",
      vl = "[object Set]",
      ml = "[object WeakMap]",
      _l = "[object DataView]",
      jA = Ft(Ri),
      YA = Ft(Ci),
      $A = Ft(Li),
      QA = Ft(Pi),
      ZA = Ft(Ni),
      Et = Il;
    ((Ri && Et(new Ri(new ArrayBuffer(1))) != _l) ||
      (Ci && Et(new Ci()) != El) ||
      (Li && Et(Li.resolve()) != yl) ||
      (Pi && Et(new Pi()) != vl) ||
      (Ni && Et(new Ni()) != ml)) &&
      (Et = function (e) {
        var t = Il(e),
          r = t == KA ? e.constructor : void 0,
          n = r ? Ft(r) : "";
        if (n)
          switch (n) {
            case jA:
              return _l;
            case YA:
              return El;
            case $A:
              return yl;
            case QA:
              return vl;
            case ZA:
              return ml;
          }
        return t;
      });
    Tl.exports = Et;
  });
  var Cl = f((T2, Rl) => {
    var Di = _i(),
      JA = Ii(),
      e0 = mc(),
      t0 = ul(),
      bl = Zr(),
      Al = me(),
      Sl = zr(),
      r0 = Yr(),
      n0 = 1,
      wl = "[object Arguments]",
      Ol = "[object Array]",
      Jr = "[object Object]",
      i0 = Object.prototype,
      xl = i0.hasOwnProperty;
    function o0(e, t, r, n, i, o) {
      var a = Al(e),
        s = Al(t),
        u = a ? Ol : bl(e),
        l = s ? Ol : bl(t);
      (u = u == wl ? Jr : u), (l = l == wl ? Jr : l);
      var y = u == Jr,
        h = l == Jr,
        p = u == l;
      if (p && Sl(e)) {
        if (!Sl(t)) return !1;
        (a = !0), (y = !1);
      }
      if (p && !y)
        return (
          o || (o = new Di()),
          a || r0(e) ? JA(e, t, r, n, i, o) : e0(e, t, u, r, n, i, o)
        );
      if (!(r & n0)) {
        var _ = y && xl.call(e, "__wrapped__"),
          A = h && xl.call(t, "__wrapped__");
        if (_ || A) {
          var I = _ ? e.value() : e,
            x = A ? t.value() : t;
          return o || (o = new Di()), i(I, x, r, n, o);
        }
      }
      return p ? (o || (o = new Di()), t0(e, t, r, n, i, o)) : !1;
    }
    Rl.exports = o0;
  });
  var Fi = f((b2, Nl) => {
    var a0 = Cl(),
      Ll = rt();
    function Pl(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Ll(e) && !Ll(t))
        ? e !== e && t !== t
        : a0(e, t, r, n, Pl, i);
    }
    Nl.exports = Pl;
  });
  var Fl = f((A2, Dl) => {
    var s0 = _i(),
      u0 = Fi(),
      c0 = 1,
      l0 = 2;
    function f0(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          l = e[u],
          y = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var h = new s0();
          if (n) var p = n(l, y, u, e, t, h);
          if (!(p === void 0 ? u0(y, l, c0 | l0, n, h) : p)) return !1;
        }
      }
      return !0;
    }
    Dl.exports = f0;
  });
  var Mi = f((S2, Ml) => {
    var d0 = $e();
    function p0(e) {
      return e === e && !d0(e);
    }
    Ml.exports = p0;
  });
  var Xl = f((w2, ql) => {
    var h0 = Mi(),
      g0 = cr();
    function E0(e) {
      for (var t = g0(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, h0(i)];
      }
      return t;
    }
    ql.exports = E0;
  });
  var qi = f((O2, Gl) => {
    function y0(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Gl.exports = y0;
  });
  var Vl = f((x2, kl) => {
    var v0 = Fl(),
      m0 = Xl(),
      _0 = qi();
    function I0(e) {
      var t = m0(e);
      return t.length == 1 && t[0][2]
        ? _0(t[0][0], t[0][1])
        : function (r) {
            return r === e || v0(r, e, t);
          };
    }
    kl.exports = I0;
  });
  var lr = f((R2, Ul) => {
    var T0 = ut(),
      b0 = rt(),
      A0 = "[object Symbol]";
    function S0(e) {
      return typeof e == "symbol" || (b0(e) && T0(e) == A0);
    }
    Ul.exports = S0;
  });
  var en = f((C2, Bl) => {
    var w0 = me(),
      O0 = lr(),
      x0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      R0 = /^\w*$/;
    function C0(e, t) {
      if (w0(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        O0(e)
        ? !0
        : R0.test(e) || !x0.test(e) || (t != null && e in Object(t));
    }
    Bl.exports = C0;
  });
  var zl = f((L2, Hl) => {
    var Wl = Br(),
      L0 = "Expected a function";
    function Xi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(L0);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Xi.Cache || Wl)()), r;
    }
    Xi.Cache = Wl;
    Hl.exports = Xi;
  });
  var jl = f((P2, Kl) => {
    var P0 = zl(),
      N0 = 500;
    function D0(e) {
      var t = P0(e, function (n) {
          return r.size === N0 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Kl.exports = D0;
  });
  var $l = f((N2, Yl) => {
    var F0 = jl(),
      M0 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      q0 = /\\(\\)?/g,
      X0 = F0(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(M0, function (r, n, i, o) {
            t.push(i ? o.replace(q0, "$1") : n || r);
          }),
          t
        );
      });
    Yl.exports = X0;
  });
  var Gi = f((D2, Ql) => {
    function G0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Ql.exports = G0;
  });
  var nf = f((F2, rf) => {
    var Zl = St(),
      k0 = Gi(),
      V0 = me(),
      U0 = lr(),
      B0 = 1 / 0,
      Jl = Zl ? Zl.prototype : void 0,
      ef = Jl ? Jl.toString : void 0;
    function tf(e) {
      if (typeof e == "string") return e;
      if (V0(e)) return k0(e, tf) + "";
      if (U0(e)) return ef ? ef.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -B0 ? "-0" : t;
    }
    rf.exports = tf;
  });
  var af = f((M2, of) => {
    var W0 = nf();
    function H0(e) {
      return e == null ? "" : W0(e);
    }
    of.exports = H0;
  });
  var fr = f((q2, sf) => {
    var z0 = me(),
      K0 = en(),
      j0 = $l(),
      Y0 = af();
    function $0(e, t) {
      return z0(e) ? e : K0(e, t) ? [e] : j0(Y0(e));
    }
    sf.exports = $0;
  });
  var Mt = f((X2, uf) => {
    var Q0 = lr(),
      Z0 = 1 / 0;
    function J0(e) {
      if (typeof e == "string" || Q0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Z0 ? "-0" : t;
    }
    uf.exports = J0;
  });
  var tn = f((G2, cf) => {
    var eS = fr(),
      tS = Mt();
    function rS(e, t) {
      t = eS(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[tS(t[r++])];
      return r && r == n ? e : void 0;
    }
    cf.exports = rS;
  });
  var rn = f((k2, lf) => {
    var nS = tn();
    function iS(e, t, r) {
      var n = e == null ? void 0 : nS(e, t);
      return n === void 0 ? r : n;
    }
    lf.exports = iS;
  });
  var df = f((V2, ff) => {
    function oS(e, t) {
      return e != null && t in Object(e);
    }
    ff.exports = oS;
  });
  var hf = f((U2, pf) => {
    var aS = fr(),
      sS = or(),
      uS = me(),
      cS = Kr(),
      lS = jr(),
      fS = Mt();
    function dS(e, t, r) {
      t = aS(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = fS(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && lS(i) && cS(a, i) && (uS(e) || sS(e)));
    }
    pf.exports = dS;
  });
  var Ef = f((B2, gf) => {
    var pS = df(),
      hS = hf();
    function gS(e, t) {
      return e != null && hS(e, t, pS);
    }
    gf.exports = gS;
  });
  var vf = f((W2, yf) => {
    var ES = Fi(),
      yS = rn(),
      vS = Ef(),
      mS = en(),
      _S = Mi(),
      IS = qi(),
      TS = Mt(),
      bS = 1,
      AS = 2;
    function SS(e, t) {
      return mS(e) && _S(t)
        ? IS(TS(e), t)
        : function (r) {
            var n = yS(r, e);
            return n === void 0 && n === t ? vS(r, e) : ES(t, n, bS | AS);
          };
    }
    yf.exports = SS;
  });
  var nn = f((H2, mf) => {
    function wS(e) {
      return e;
    }
    mf.exports = wS;
  });
  var ki = f((z2, _f) => {
    function OS(e) {
      return function (t) {
        return t?.[e];
      };
    }
    _f.exports = OS;
  });
  var Tf = f((K2, If) => {
    var xS = tn();
    function RS(e) {
      return function (t) {
        return xS(t, e);
      };
    }
    If.exports = RS;
  });
  var Af = f((j2, bf) => {
    var CS = ki(),
      LS = Tf(),
      PS = en(),
      NS = Mt();
    function DS(e) {
      return PS(e) ? CS(NS(e)) : LS(e);
    }
    bf.exports = DS;
  });
  var lt = f((Y2, Sf) => {
    var FS = Vl(),
      MS = vf(),
      qS = nn(),
      XS = me(),
      GS = Af();
    function kS(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? qS
        : typeof e == "object"
        ? XS(e)
          ? MS(e[0], e[1])
          : FS(e)
        : GS(e);
    }
    Sf.exports = kS;
  });
  var Vi = f(($2, wf) => {
    var VS = lt(),
      US = gt(),
      BS = cr();
    function WS(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!US(t)) {
          var o = VS(r, 3);
          (t = BS(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    wf.exports = WS;
  });
  var Ui = f((Q2, Of) => {
    function HS(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Of.exports = HS;
  });
  var Rf = f((Z2, xf) => {
    var zS = /\s/;
    function KS(e) {
      for (var t = e.length; t-- && zS.test(e.charAt(t)); );
      return t;
    }
    xf.exports = KS;
  });
  var Lf = f((J2, Cf) => {
    var jS = Rf(),
      YS = /^\s+/;
    function $S(e) {
      return e && e.slice(0, jS(e) + 1).replace(YS, "");
    }
    Cf.exports = $S;
  });
  var on = f((eq, Df) => {
    var QS = Lf(),
      Pf = $e(),
      ZS = lr(),
      Nf = 0 / 0,
      JS = /^[-+]0x[0-9a-f]+$/i,
      ew = /^0b[01]+$/i,
      tw = /^0o[0-7]+$/i,
      rw = parseInt;
    function nw(e) {
      if (typeof e == "number") return e;
      if (ZS(e)) return Nf;
      if (Pf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Pf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = QS(e);
      var r = ew.test(e);
      return r || tw.test(e) ? rw(e.slice(2), r ? 2 : 8) : JS.test(e) ? Nf : +e;
    }
    Df.exports = nw;
  });
  var qf = f((tq, Mf) => {
    var iw = on(),
      Ff = 1 / 0,
      ow = 17976931348623157e292;
    function aw(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = iw(e)), e === Ff || e === -Ff)) {
        var t = e < 0 ? -1 : 1;
        return t * ow;
      }
      return e === e ? e : 0;
    }
    Mf.exports = aw;
  });
  var Bi = f((rq, Xf) => {
    var sw = qf();
    function uw(e) {
      var t = sw(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Xf.exports = uw;
  });
  var kf = f((nq, Gf) => {
    var cw = Ui(),
      lw = lt(),
      fw = Bi(),
      dw = Math.max;
    function pw(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : fw(r);
      return i < 0 && (i = dw(n + i, 0)), cw(e, lw(t, 3), i);
    }
    Gf.exports = pw;
  });
  var Wi = f((iq, Vf) => {
    var hw = Vi(),
      gw = kf(),
      Ew = hw(gw);
    Vf.exports = Ew;
  });
  var Wf = {};
  Oe(Wf, {
    ELEMENT_MATCHES: () => yw,
    FLEX_PREFIXED: () => Hi,
    IS_BROWSER_ENV: () => Ue,
    TRANSFORM_PREFIXED: () => ft,
    TRANSFORM_STYLE_PREFIXED: () => sn,
    withBrowser: () => an,
  });
  var Bf,
    Ue,
    an,
    yw,
    Hi,
    ft,
    Uf,
    sn,
    un = fe(() => {
      "use strict";
      (Bf = ie(Wi())),
        (Ue = typeof window < "u"),
        (an = (e, t) => (Ue ? e() : t)),
        (yw = an(() =>
          (0, Bf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Hi = an(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (ft = an(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Uf = ft.split("transform")[0]),
        (sn = Uf ? Uf + "TransformStyle" : "transformStyle");
    });
  var zi = f((oq, Yf) => {
    var vw = 4,
      mw = 0.001,
      _w = 1e-7,
      Iw = 10,
      dr = 11,
      cn = 1 / (dr - 1),
      Tw = typeof Float32Array == "function";
    function Hf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function zf(e, t) {
      return 3 * t - 6 * e;
    }
    function Kf(e) {
      return 3 * e;
    }
    function ln(e, t, r) {
      return ((Hf(t, r) * e + zf(t, r)) * e + Kf(t)) * e;
    }
    function jf(e, t, r) {
      return 3 * Hf(t, r) * e * e + 2 * zf(t, r) * e + Kf(t);
    }
    function bw(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ln(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > _w && ++s < Iw);
      return a;
    }
    function Aw(e, t, r, n) {
      for (var i = 0; i < vw; ++i) {
        var o = jf(t, r, n);
        if (o === 0) return t;
        var a = ln(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    Yf.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = Tw ? new Float32Array(dr) : new Array(dr);
      if (t !== r || n !== i)
        for (var a = 0; a < dr; ++a) o[a] = ln(a * cn, t, n);
      function s(u) {
        for (var l = 0, y = 1, h = dr - 1; y !== h && o[y] <= u; ++y) l += cn;
        --y;
        var p = (u - o[y]) / (o[y + 1] - o[y]),
          _ = l + p * cn,
          A = jf(_, t, n);
        return A >= mw ? Aw(u, _, t, n) : A === 0 ? _ : bw(u, l, l + cn, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : ln(s(l), r, i);
      };
    };
  });
  var hr = {};
  Oe(hr, {
    bounce: () => aO,
    bouncePast: () => sO,
    ease: () => Sw,
    easeIn: () => ww,
    easeInOut: () => xw,
    easeOut: () => Ow,
    inBack: () => Qw,
    inCirc: () => Kw,
    inCubic: () => Pw,
    inElastic: () => eO,
    inExpo: () => Ww,
    inOutBack: () => Jw,
    inOutCirc: () => Yw,
    inOutCubic: () => Dw,
    inOutElastic: () => rO,
    inOutExpo: () => zw,
    inOutQuad: () => Lw,
    inOutQuart: () => qw,
    inOutQuint: () => kw,
    inOutSine: () => Bw,
    inQuad: () => Rw,
    inQuart: () => Fw,
    inQuint: () => Xw,
    inSine: () => Vw,
    outBack: () => Zw,
    outBounce: () => $w,
    outCirc: () => jw,
    outCubic: () => Nw,
    outElastic: () => tO,
    outExpo: () => Hw,
    outQuad: () => Cw,
    outQuart: () => Mw,
    outQuint: () => Gw,
    outSine: () => Uw,
    swingFrom: () => iO,
    swingFromTo: () => nO,
    swingTo: () => oO,
  });
  function Rw(e) {
    return Math.pow(e, 2);
  }
  function Cw(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Lw(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Pw(e) {
    return Math.pow(e, 3);
  }
  function Nw(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Dw(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Fw(e) {
    return Math.pow(e, 4);
  }
  function Mw(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function qw(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Xw(e) {
    return Math.pow(e, 5);
  }
  function Gw(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function kw(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Vw(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Uw(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Bw(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Ww(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Hw(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function zw(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Kw(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function jw(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Yw(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function $w(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Qw(e) {
    let t = nt;
    return e * e * ((t + 1) * e - t);
  }
  function Zw(e) {
    let t = nt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Jw(e) {
    let t = nt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function eO(e) {
    let t = nt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function tO(e) {
    let t = nt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function rO(e) {
    let t = nt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function nO(e) {
    let t = nt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function iO(e) {
    let t = nt;
    return e * e * ((t + 1) * e - t);
  }
  function oO(e) {
    let t = nt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function aO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function sO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var pr,
    nt,
    Sw,
    ww,
    Ow,
    xw,
    Ki = fe(() => {
      "use strict";
      (pr = ie(zi())),
        (nt = 1.70158),
        (Sw = (0, pr.default)(0.25, 0.1, 0.25, 1)),
        (ww = (0, pr.default)(0.42, 0, 1, 1)),
        (Ow = (0, pr.default)(0, 0, 0.58, 1)),
        (xw = (0, pr.default)(0.42, 0, 0.58, 1));
    });
  var Qf = {};
  Oe(Qf, {
    applyEasing: () => cO,
    createBezierEasing: () => uO,
    optimizeFloat: () => gr,
  });
  function gr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function uO(e) {
    return (0, $f.default)(...e);
  }
  function cO(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : gr(r ? (t > 0 ? r(t) : t) : t > 0 && e && hr[e] ? hr[e](t) : t);
  }
  var $f,
    ji = fe(() => {
      "use strict";
      Ki();
      $f = ie(zi());
    });
  var ed = {};
  Oe(ed, {
    createElementState: () => Jf,
    ixElements: () => bO,
    mergeActionState: () => Yi,
  });
  function Jf(e, t, r, n, i) {
    let o =
      r === lO ? (0, qt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, qt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Yi(e, t, r, n, i) {
    let o = SO(i);
    return (0, qt.mergeIn)(e, [t, TO, r], n, o);
  }
  function SO(e) {
    let { config: t } = e;
    return AO.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var qt,
    sq,
    lO,
    uq,
    fO,
    dO,
    pO,
    hO,
    gO,
    EO,
    yO,
    vO,
    mO,
    _O,
    IO,
    Zf,
    TO,
    bO,
    AO,
    td = fe(() => {
      "use strict";
      qt = ie(xt());
      Re();
      ({
        HTML_ELEMENT: sq,
        PLAIN_OBJECT: lO,
        ABSTRACT_NODE: uq,
        CONFIG_X_VALUE: fO,
        CONFIG_Y_VALUE: dO,
        CONFIG_Z_VALUE: pO,
        CONFIG_VALUE: hO,
        CONFIG_X_UNIT: gO,
        CONFIG_Y_UNIT: EO,
        CONFIG_Z_UNIT: yO,
        CONFIG_UNIT: vO,
      } = _e),
        ({
          IX2_SESSION_STOPPED: mO,
          IX2_INSTANCE_ADDED: _O,
          IX2_ELEMENT_STATE_CHANGED: IO,
        } = ye),
        (Zf = {}),
        (TO = "refState"),
        (bO = (e = Zf, t = {}) => {
          switch (t.type) {
            case mO:
              return Zf;
            case _O: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, qt.getIn)(u, [r, n]) !== n && (u = Jf(u, n, a, r, o)),
                Yi(u, r, s, i, o)
              );
            }
            case IO: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Yi(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      AO = [
        [fO, gO],
        [dO, EO],
        [pO, yO],
        [hO, vO],
      ];
    });
  var rd = f(($i) => {
    "use strict";
    Object.defineProperty($i, "__esModule", { value: !0 });
    function wO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    wO($i, {
      clearPlugin: function () {
        return NO;
      },
      createPluginInstance: function () {
        return LO;
      },
      getPluginConfig: function () {
        return OO;
      },
      getPluginDestination: function () {
        return CO;
      },
      getPluginDuration: function () {
        return xO;
      },
      getPluginOrigin: function () {
        return RO;
      },
      renderPlugin: function () {
        return PO;
      },
    });
    var OO = (e) => e.value,
      xO = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      RO = (e) => e || { value: 0 },
      CO = (e) => ({ value: e.value }),
      LO = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      PO = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      NO = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var id = f((Qi) => {
    "use strict";
    Object.defineProperty(Qi, "__esModule", { value: !0 });
    function DO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    DO(Qi, {
      clearPlugin: function () {
        return WO;
      },
      createPluginInstance: function () {
        return UO;
      },
      getPluginConfig: function () {
        return XO;
      },
      getPluginDestination: function () {
        return VO;
      },
      getPluginDuration: function () {
        return GO;
      },
      getPluginOrigin: function () {
        return kO;
      },
      renderPlugin: function () {
        return BO;
      },
    });
    var FO = (e) => document.querySelector(`[data-w-id="${e}"]`),
      MO = () => window.Webflow.require("spline"),
      qO = (e, t) => e.filter((r) => !t.includes(r)),
      XO = (e, t) => e.value[t],
      GO = () => null,
      nd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      kO = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = qO(n, o);
          return a.length ? a.reduce((u, l) => ((u[l] = nd[l]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = nd[a]), o), {});
      },
      VO = (e) => e.value,
      UO = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? FO(r) : null;
      },
      BO = (e, t, r) => {
        let n = MO(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          a = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : n.setLoadHandler(e, a);
      },
      WO = () => null;
  });
  var Ji = f((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    Object.defineProperty(Zi, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return HO;
      },
    });
    var od = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function HO(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof od[o] == "string" ? od[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          h = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let p = (1 - Math.abs(2 * h - 1)) * y,
          _ = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          A = h - p / 2,
          I,
          x,
          b;
        l >= 0 && l < 60
          ? ((I = p), (x = _), (b = 0))
          : l >= 60 && l < 120
          ? ((I = _), (x = p), (b = 0))
          : l >= 120 && l < 180
          ? ((I = 0), (x = p), (b = _))
          : l >= 180 && l < 240
          ? ((I = 0), (x = _), (b = p))
          : l >= 240 && l < 300
          ? ((I = _), (x = 0), (b = p))
          : ((I = p), (x = 0), (b = _)),
          (t = Math.round((I + A) * 255)),
          (r = Math.round((x + A) * 255)),
          (n = Math.round((b + A) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          h = parseFloat(u[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * h - 1)) * y,
          _ = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          A = h - p / 2,
          I,
          x,
          b;
        l >= 0 && l < 60
          ? ((I = p), (x = _), (b = 0))
          : l >= 60 && l < 120
          ? ((I = _), (x = p), (b = 0))
          : l >= 120 && l < 180
          ? ((I = 0), (x = p), (b = _))
          : l >= 180 && l < 240
          ? ((I = 0), (x = _), (b = p))
          : l >= 240 && l < 300
          ? ((I = _), (x = 0), (b = p))
          : ((I = p), (x = 0), (b = _)),
          (t = Math.round((I + A) * 255)),
          (r = Math.round((x + A) * 255)),
          (n = Math.round((b + A) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var ad = f((eo) => {
    "use strict";
    Object.defineProperty(eo, "__esModule", { value: !0 });
    function zO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    zO(eo, {
      clearPlugin: function () {
        return ex;
      },
      createPluginInstance: function () {
        return ZO;
      },
      getPluginConfig: function () {
        return jO;
      },
      getPluginDestination: function () {
        return QO;
      },
      getPluginDuration: function () {
        return YO;
      },
      getPluginOrigin: function () {
        return $O;
      },
      renderPlugin: function () {
        return JO;
      },
    });
    var KO = Ji(),
      jO = (e, t) => e.value[t],
      YO = () => null,
      $O = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, KO.normalizeColor)(i);
      },
      QO = (e) => e.value,
      ZO = () => null,
      JO = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: s, green: u, blue: l, alpha: y } = o,
          h;
        a != null && (h = a + i),
          s != null &&
            l != null &&
            u != null &&
            y != null &&
            (h = `rgba(${s}, ${u}, ${l}, ${y})`),
          h != null && document.documentElement.style.setProperty(n, h);
      },
      ex = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var ud = f((no) => {
    "use strict";
    Object.defineProperty(no, "__esModule", { value: !0 });
    Object.defineProperty(no, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return ix;
      },
    });
    var to = (Re(), ze(ds)),
      tx = ro(rd()),
      rx = ro(id()),
      nx = ro(ad());
    function sd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (sd = function (n) {
        return n ? r : t;
      })(e);
    }
    function ro(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = sd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var ix = new Map([
      [to.ActionTypeConsts.PLUGIN_LOTTIE, { ...tx }],
      [to.ActionTypeConsts.PLUGIN_SPLINE, { ...rx }],
      [to.ActionTypeConsts.PLUGIN_VARIABLE, { ...nx }],
    ]);
  });
  var cd = {};
  Oe(cd, {
    clearPlugin: () => co,
    createPluginInstance: () => ax,
    getPluginConfig: () => oo,
    getPluginDestination: () => so,
    getPluginDuration: () => ox,
    getPluginOrigin: () => ao,
    isPluginType: () => yt,
    renderPlugin: () => uo,
  });
  function yt(e) {
    return io.pluginMethodMap.has(e);
  }
  var io,
    vt,
    oo,
    ao,
    ox,
    so,
    ax,
    uo,
    co,
    lo = fe(() => {
      "use strict";
      un();
      io = ie(ud());
      (vt = (e) => (t) => {
        if (!Ue) return () => null;
        let r = io.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (oo = vt("getPluginConfig")),
        (ao = vt("getPluginOrigin")),
        (ox = vt("getPluginDuration")),
        (so = vt("getPluginDestination")),
        (ax = vt("createPluginInstance")),
        (uo = vt("renderPlugin")),
        (co = vt("clearPlugin"));
    });
  var fd = f((gq, ld) => {
    function sx(e, t) {
      return e == null || e !== e ? t : e;
    }
    ld.exports = sx;
  });
  var pd = f((Eq, dd) => {
    function ux(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    dd.exports = ux;
  });
  var gd = f((yq, hd) => {
    function cx(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    hd.exports = cx;
  });
  var yd = f((vq, Ed) => {
    var lx = gd(),
      fx = lx();
    Ed.exports = fx;
  });
  var fo = f((mq, vd) => {
    var dx = yd(),
      px = cr();
    function hx(e, t) {
      return e && dx(e, t, px);
    }
    vd.exports = hx;
  });
  var _d = f((_q, md) => {
    var gx = gt();
    function Ex(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!gx(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    md.exports = Ex;
  });
  var po = f((Iq, Id) => {
    var yx = fo(),
      vx = _d(),
      mx = vx(yx);
    Id.exports = mx;
  });
  var bd = f((Tq, Td) => {
    function _x(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Td.exports = _x;
  });
  var Sd = f((bq, Ad) => {
    var Ix = pd(),
      Tx = po(),
      bx = lt(),
      Ax = bd(),
      Sx = me();
    function wx(e, t, r) {
      var n = Sx(e) ? Ix : Ax,
        i = arguments.length < 3;
      return n(e, bx(t, 4), r, i, Tx);
    }
    Ad.exports = wx;
  });
  var Od = f((Aq, wd) => {
    var Ox = Ui(),
      xx = lt(),
      Rx = Bi(),
      Cx = Math.max,
      Lx = Math.min;
    function Px(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = Rx(r)), (i = r < 0 ? Cx(n + i, 0) : Lx(i, n - 1))),
        Ox(e, xx(t, 3), i, !0)
      );
    }
    wd.exports = Px;
  });
  var Rd = f((Sq, xd) => {
    var Nx = Vi(),
      Dx = Od(),
      Fx = Nx(Dx);
    xd.exports = Fx;
  });
  function Cd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function Mx(e, t) {
    if (Cd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Cd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var ho,
    Ld = fe(() => {
      "use strict";
      ho = Mx;
    });
  var Yd = {};
  Oe(Yd, {
    cleanupHTMLElement: () => NR,
    clearAllStyles: () => PR,
    clearObjectCache: () => Jx,
    getActionListProgress: () => FR,
    getAffectedElements: () => mo,
    getComputedStyle: () => sR,
    getDestinationValues: () => hR,
    getElementId: () => nR,
    getInstanceId: () => tR,
    getInstanceOrigin: () => lR,
    getItemConfigByKey: () => pR,
    getMaxDurationItemIndex: () => jd,
    getNamespacedParameterId: () => XR,
    getRenderType: () => Hd,
    getStyleProp: () => gR,
    mediaQueriesEqual: () => kR,
    observeStore: () => aR,
    reduceListToGroup: () => MR,
    reifyState: () => iR,
    renderHTMLElement: () => ER,
    shallowEqual: () => ho,
    shouldAllowMediaQuery: () => GR,
    shouldNamespaceEventParameter: () => qR,
    stringifyTarget: () => VR,
  });
  function Jx() {
    fn.clear();
  }
  function tR() {
    return "i" + eR++;
  }
  function nR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + rR++;
  }
  function iR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, gn.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function aR({ store: e, select: t, onChange: r, comparator: n = oR }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, s) || ((s = l), r(s, e));
    }
    return a;
  }
  function Dd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function mo({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (q, w) =>
          q.concat(
            mo({
              config: { target: w },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: y,
        matchSelector: h,
        elementContains: p,
        isSiblingNode: _,
      } = i,
      { target: A } = e;
    if (!A) return [];
    let {
      id: I,
      objectId: x,
      selector: b,
      selectorGuids: L,
      appliesTo: C,
      useEventTarget: D,
    } = Dd(A);
    if (x) return [fn.has(x) ? fn.get(x) : fn.set(x, {}).get(x)];
    if (C === pi.PAGE) {
      let q = a(I);
      return q ? [q] : [];
    }
    let P = (t?.action?.config?.affectedElements ?? {})[I || b] || {},
      k = !!(P.id || P.selector),
      B,
      H,
      Y,
      Q = t && s(Dd(t.target));
    if (
      (k
        ? ((B = P.limitAffectedElements), (H = Q), (Y = s(P)))
        : (H = Y = s({ id: I, selector: b, selectorGuids: L })),
      t && D)
    ) {
      let q = r && (Y || D === !0) ? [r] : u(Q);
      if (Y) {
        if (D === $x) return u(Y).filter((w) => q.some((F) => p(w, F)));
        if (D === Pd) return u(Y).filter((w) => q.some((F) => p(F, w)));
        if (D === Nd) return u(Y).filter((w) => q.some((F) => _(F, w)));
      }
      return q;
    }
    return H == null || Y == null
      ? []
      : Ue && n
      ? u(Y).filter((q) => n.contains(q))
      : B === Pd
      ? u(H, Y)
      : B === Yx
      ? l(u(H)).filter(h(Y))
      : B === Nd
      ? y(u(H)).filter(h(Y))
      : u(Y);
  }
  function sR({ element: e, actionItem: t }) {
    if (!Ue) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Ut:
      case Bt:
      case Wt:
      case Ht:
      case yn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function lR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (yt(a)) return ao(a)(t[a], n);
    switch (n.actionTypeId) {
      case Gt:
      case kt:
      case Vt:
      case mr:
        return t[n.actionTypeId] || _o[n.actionTypeId];
      case _r:
        return uR(t[n.actionTypeId], n.config.filters);
      case Ir:
        return cR(t[n.actionTypeId], n.config.fontVariations);
      case Ud:
        return { value: (0, it.default)(parseFloat(o(e, pn)), 1) };
      case Ut: {
        let s = o(e, Qe),
          u = o(e, Ze),
          l,
          y;
        return (
          n.config.widthUnit === dt
            ? (l = Fd.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (l = (0, it.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === dt
            ? (y = Fd.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (y = (0, it.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: l, heightValue: y }
        );
      }
      case Bt:
      case Wt:
      case Ht:
        return RR({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case yn:
        return { value: (0, it.default)(o(e, hn), r.display) };
      case Zx:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function hR({ element: e, actionItem: t, elementApi: r }) {
    if (yt(t.actionTypeId)) return so(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Gt:
      case kt:
      case Vt:
      case mr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Ut: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!Ue) return { widthValue: u, heightValue: l };
        if (a === dt) {
          let y = n(e, Qe);
          i(e, Qe, ""), (u = o(e, "offsetWidth")), i(e, Qe, y);
        }
        if (s === dt) {
          let y = n(e, Ze);
          i(e, Ze, ""), (l = o(e, "offsetHeight")), i(e, Ze, y);
        }
        return { widthValue: u, heightValue: l };
      }
      case Bt:
      case Wt:
      case Ht: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            l = u(e, s),
            y = (0, Xd.normalizeColor)(l);
          return {
            rValue: y.red,
            gValue: y.green,
            bValue: y.blue,
            aValue: y.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case _r:
        return t.config.filters.reduce(fR, {});
      case Ir:
        return t.config.fontVariations.reduce(dR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Hd(e) {
    if (/^TRANSFORM_/.test(e)) return kd;
    if (/^STYLE_/.test(e)) return yo;
    if (/^GENERAL_/.test(e)) return Eo;
    if (/^PLUGIN_/.test(e)) return Vd;
  }
  function gR(e, t) {
    return e === yo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function ER(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case kd:
        return IR(e, t, r, i, a);
      case yo:
        return CR(e, t, r, i, o, a);
      case Eo:
        return LR(e, i, a);
      case Vd: {
        let { actionTypeId: l } = i;
        if (yt(l)) return uo(l)(u, t, i);
      }
    }
  }
  function IR(e, t, r, n, i) {
    let o = _R
        .map((s) => {
          let u = _o[s],
            {
              xValue: l = u.xValue,
              yValue: y = u.yValue,
              zValue: h = u.zValue,
              xUnit: p = "",
              yUnit: _ = "",
              zUnit: A = "",
            } = t[s] || {};
          switch (s) {
            case Gt:
              return `${Gx}(${l}${p}, ${y}${_}, ${h}${A})`;
            case kt:
              return `${kx}(${l}${p}, ${y}${_}, ${h}${A})`;
            case Vt:
              return `${Vx}(${l}${p}) ${Ux}(${y}${_}) ${Bx}(${h}${A})`;
            case mr:
              return `${Wx}(${l}${p}, ${y}${_})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    mt(e, ft, i), a(e, ft, o), AR(n, r) && a(e, sn, Hx);
  }
  function TR(e, t, r, n) {
    let i = (0, gn.default)(t, (a, s, u) => `${a} ${u}(${s}${mR(u, r)})`, ""),
      { setStyle: o } = n;
    mt(e, Er, n), o(e, Er, i);
  }
  function bR(e, t, r, n) {
    let i = (0, gn.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    mt(e, yr, n), o(e, yr, i);
  }
  function AR({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Gt && n !== void 0) ||
      (e === kt && n !== void 0) ||
      (e === Vt && (t !== void 0 || r !== void 0))
    );
  }
  function xR(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function RR({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = vo[t],
      o = n(e, i),
      a = wR.test(o) ? o : r[i],
      s = xR(OR, a).split(vr);
    return {
      rValue: (0, it.default)(parseInt(s[0], 10), 255),
      gValue: (0, it.default)(parseInt(s[1], 10), 255),
      bValue: (0, it.default)(parseInt(s[2], 10), 255),
      aValue: (0, it.default)(parseFloat(s[3]), 1),
    };
  }
  function CR(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Ut: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: l, heightValue: y } = r;
        l !== void 0 && (s === dt && (s = "px"), mt(e, Qe, o), a(e, Qe, l + s)),
          y !== void 0 &&
            (u === dt && (u = "px"), mt(e, Ze, o), a(e, Ze, y + u));
        break;
      }
      case _r: {
        TR(e, r, n.config, o);
        break;
      }
      case Ir: {
        bR(e, r, n.config, o);
        break;
      }
      case Bt:
      case Wt:
      case Ht: {
        let s = vo[n.actionTypeId],
          u = Math.round(r.rValue),
          l = Math.round(r.gValue),
          y = Math.round(r.bValue),
          h = r.aValue;
        mt(e, s, o),
          a(e, s, h >= 1 ? `rgb(${u},${l},${y})` : `rgba(${u},${l},${y},${h})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        mt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function LR(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case yn: {
        let { value: i } = t.config;
        i === zx && Ue ? n(e, hn, Hi) : n(e, hn, i);
        return;
      }
    }
  }
  function mt(e, t, r) {
    if (!Ue) return;
    let n = Wd[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Xt);
    if (!a) {
      o(e, Xt, n);
      return;
    }
    let s = a.split(vr).map(Bd);
    s.indexOf(n) === -1 && o(e, Xt, s.concat(n).join(vr));
  }
  function zd(e, t, r) {
    if (!Ue) return;
    let n = Wd[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Xt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Xt,
        a
          .split(vr)
          .map(Bd)
          .filter((s) => s !== n)
          .join(vr)
      );
  }
  function PR({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        l = i[u];
      l && Md({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Md({ actionList: i[o], elementApi: t });
      });
  }
  function Md({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        qd({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            qd({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function qd({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      yt(o)
        ? (s = (u) => co(o)(u, i))
        : (s = Kd({ effect: DR, actionTypeId: o, elementApi: r })),
        mo({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function NR(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Ut) {
      let { config: a } = t;
      a.widthUnit === dt && n(e, Qe, ""), a.heightUnit === dt && n(e, Ze, "");
    }
    i(e, Xt) && Kd({ effect: zd, actionTypeId: o, elementApi: r })(e);
  }
  function DR(e, t, r) {
    let { setStyle: n } = r;
    zd(e, t, r), n(e, t, ""), t === ft && n(e, sn, "");
  }
  function jd(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function FR(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, l) => {
        if (n && l === 0) return;
        let { actionItems: y } = u,
          h = y[jd(y)],
          { config: p, actionTypeId: _ } = h;
        i.id === h.id && (s = a + o);
        let A = Hd(_) === Eo ? 0 : p.duration;
        a += p.delay + A;
      }),
      a > 0 ? gr(s / a) : 0
    );
  }
  function MR({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, En.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: l }) => l.some(a));
        }),
      (0, En.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function qR(e, { basedOn: t }) {
    return (
      (e === Ve.SCROLLING_IN_VIEW && (t === Ye.ELEMENT || t == null)) ||
      (e === Ve.MOUSE_MOVE && t === Ye.ELEMENT)
    );
  }
  function XR(e, t) {
    return e + Qx + t;
  }
  function GR(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function kR(e, t) {
    return ho(e && e.sort(), t && t.sort());
  }
  function VR(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + go + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + go + r + go + n;
  }
  var it,
    gn,
    dn,
    En,
    Xd,
    qx,
    Xx,
    Gx,
    kx,
    Vx,
    Ux,
    Bx,
    Wx,
    Hx,
    zx,
    pn,
    Er,
    yr,
    Qe,
    Ze,
    Gd,
    Kx,
    jx,
    Pd,
    Yx,
    Nd,
    $x,
    hn,
    Xt,
    dt,
    vr,
    Qx,
    go,
    kd,
    Eo,
    yo,
    Vd,
    Gt,
    kt,
    Vt,
    mr,
    Ud,
    _r,
    Ir,
    Ut,
    Bt,
    Wt,
    Ht,
    yn,
    Zx,
    Bd,
    vo,
    Wd,
    fn,
    eR,
    rR,
    oR,
    Fd,
    uR,
    cR,
    fR,
    dR,
    pR,
    _o,
    yR,
    vR,
    mR,
    _R,
    SR,
    wR,
    OR,
    Kd,
    $d = fe(() => {
      "use strict";
      (it = ie(fd())), (gn = ie(Sd())), (dn = ie(Rd())), (En = ie(xt()));
      Re();
      Ld();
      ji();
      Xd = ie(Ji());
      lo();
      un();
      ({
        BACKGROUND: qx,
        TRANSFORM: Xx,
        TRANSLATE_3D: Gx,
        SCALE_3D: kx,
        ROTATE_X: Vx,
        ROTATE_Y: Ux,
        ROTATE_Z: Bx,
        SKEW: Wx,
        PRESERVE_3D: Hx,
        FLEX: zx,
        OPACITY: pn,
        FILTER: Er,
        FONT_VARIATION_SETTINGS: yr,
        WIDTH: Qe,
        HEIGHT: Ze,
        BACKGROUND_COLOR: Gd,
        BORDER_COLOR: Kx,
        COLOR: jx,
        CHILDREN: Pd,
        IMMEDIATE_CHILDREN: Yx,
        SIBLINGS: Nd,
        PARENT: $x,
        DISPLAY: hn,
        WILL_CHANGE: Xt,
        AUTO: dt,
        COMMA_DELIMITER: vr,
        COLON_DELIMITER: Qx,
        BAR_DELIMITER: go,
        RENDER_TRANSFORM: kd,
        RENDER_GENERAL: Eo,
        RENDER_STYLE: yo,
        RENDER_PLUGIN: Vd,
      } = _e),
        ({
          TRANSFORM_MOVE: Gt,
          TRANSFORM_SCALE: kt,
          TRANSFORM_ROTATE: Vt,
          TRANSFORM_SKEW: mr,
          STYLE_OPACITY: Ud,
          STYLE_FILTER: _r,
          STYLE_FONT_VARIATION: Ir,
          STYLE_SIZE: Ut,
          STYLE_BACKGROUND_COLOR: Bt,
          STYLE_BORDER: Wt,
          STYLE_TEXT_COLOR: Ht,
          GENERAL_DISPLAY: yn,
          OBJECT_VALUE: Zx,
        } = xe),
        (Bd = (e) => e.trim()),
        (vo = Object.freeze({ [Bt]: Gd, [Wt]: Kx, [Ht]: jx })),
        (Wd = Object.freeze({
          [ft]: Xx,
          [Gd]: qx,
          [pn]: pn,
          [Er]: Er,
          [Qe]: Qe,
          [Ze]: Ze,
          [yr]: yr,
        })),
        (fn = new Map());
      eR = 1;
      rR = 1;
      oR = (e, t) => e === t;
      (Fd = /px/),
        (uR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = yR[n.type]), r),
            e || {}
          )),
        (cR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = vR[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (fR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (dR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (pR = (e, t, r) => {
          if (yt(e)) return oo(e)(r, t);
          switch (e) {
            case _r: {
              let n = (0, dn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Ir: {
              let n = (0, dn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (_o = {
        [Gt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [kt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Vt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [mr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (yR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (vR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (mR = (e, t) => {
          let r = (0, dn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (_R = Object.keys(_o));
      (SR = "\\(([^)]+)\\)"), (wR = /^rgb/), (OR = RegExp(`rgba?${SR}`));
      Kd =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Gt:
            case kt:
            case Vt:
            case mr:
              e(n, ft, r);
              break;
            case _r:
              e(n, Er, r);
              break;
            case Ir:
              e(n, yr, r);
              break;
            case Ud:
              e(n, pn, r);
              break;
            case Ut:
              e(n, Qe, r), e(n, Ze, r);
              break;
            case Bt:
            case Wt:
            case Ht:
              e(n, vo[t], r);
              break;
            case yn:
              e(n, hn, r);
              break;
          }
        };
    });
  var _t = f((Io) => {
    "use strict";
    Object.defineProperty(Io, "__esModule", { value: !0 });
    function UR(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    UR(Io, {
      IX2BrowserSupport: function () {
        return BR;
      },
      IX2EasingUtils: function () {
        return HR;
      },
      IX2Easings: function () {
        return WR;
      },
      IX2ElementsReducer: function () {
        return zR;
      },
      IX2VanillaPlugins: function () {
        return KR;
      },
      IX2VanillaUtils: function () {
        return jR;
      },
    });
    var BR = zt((un(), ze(Wf))),
      WR = zt((Ki(), ze(hr))),
      HR = zt((ji(), ze(Qf))),
      zR = zt((td(), ze(ed))),
      KR = zt((lo(), ze(cd))),
      jR = zt(($d(), ze(Yd)));
    function Qd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Qd = function (n) {
        return n ? r : t;
      })(e);
    }
    function zt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = Qd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var mn,
    ot,
    YR,
    $R,
    QR,
    ZR,
    JR,
    eC,
    vn,
    Zd,
    tC,
    rC,
    To,
    nC,
    iC,
    oC,
    aC,
    Jd,
    ep = fe(() => {
      "use strict";
      Re();
      (mn = ie(_t())),
        (ot = ie(xt())),
        ({
          IX2_RAW_DATA_IMPORTED: YR,
          IX2_SESSION_STOPPED: $R,
          IX2_INSTANCE_ADDED: QR,
          IX2_INSTANCE_STARTED: ZR,
          IX2_INSTANCE_REMOVED: JR,
          IX2_ANIMATION_FRAME_CHANGED: eC,
        } = ye),
        ({
          optimizeFloat: vn,
          applyEasing: Zd,
          createBezierEasing: tC,
        } = mn.IX2EasingUtils),
        ({ RENDER_GENERAL: rC } = _e),
        ({
          getItemConfigByKey: To,
          getRenderType: nC,
          getStyleProp: iC,
        } = mn.IX2VanillaUtils),
        (oC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: y,
              skipToValue: h,
            } = e,
            { parameters: p } = t.payload,
            _ = Math.max(1 - a, 0.01),
            A = p[n];
          A == null && ((_ = 1), (A = s));
          let I = Math.max(A, 0) || 0,
            x = vn(I - r),
            b = y ? h : vn(r + x * _),
            L = b * 100;
          if (b === r && e.current) return e;
          let C, D, N, P;
          for (let B = 0, { length: H } = i; B < H; B++) {
            let { keyframe: Y, actionItems: Q } = i[B];
            if ((B === 0 && (C = Q[0]), L >= Y)) {
              C = Q[0];
              let q = i[B + 1],
                w = q && L !== Y;
              (D = w ? q.actionItems[0] : null),
                w && ((N = Y / 100), (P = (q.keyframe - Y) / 100));
            }
          }
          let k = {};
          if (C && !D)
            for (let B = 0, { length: H } = o; B < H; B++) {
              let Y = o[B];
              k[Y] = To(u, Y, C.config);
            }
          else if (C && D && N !== void 0 && P !== void 0) {
            let B = (b - N) / P,
              H = C.config.easing,
              Y = Zd(H, B, l);
            for (let Q = 0, { length: q } = o; Q < q; Q++) {
              let w = o[Q],
                F = To(u, w, C.config),
                Z = (To(u, w, D.config) - F) * Y + F;
              k[w] = Z;
            }
          }
          return (0, ot.merge)(e, { position: b, current: k });
        }),
        (aC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: y,
              pluginDuration: h,
              instanceDelay: p,
              customEasingFn: _,
              skipMotion: A,
            } = e,
            I = u.config.easing,
            { duration: x, delay: b } = u.config;
          h != null && (x = h),
            (b = p ?? b),
            a === rC ? (x = 0) : (o || A) && (x = b = 0);
          let { now: L } = t.payload;
          if (r && n) {
            let C = L - (i + b);
            if (s) {
              let B = L - i,
                H = x + b,
                Y = vn(Math.min(Math.max(0, B / H), 1));
              e = (0, ot.set)(e, "verboseTimeElapsed", H * Y);
            }
            if (C < 0) return e;
            let D = vn(Math.min(Math.max(0, C / x), 1)),
              N = Zd(I, D, _),
              P = {},
              k = null;
            return (
              y.length &&
                (k = y.reduce((B, H) => {
                  let Y = l[H],
                    Q = parseFloat(n[H]) || 0,
                    w = (parseFloat(Y) - Q) * N + Q;
                  return (B[H] = w), B;
                }, {})),
              (P.current = k),
              (P.position = D),
              D === 1 && ((P.active = !1), (P.complete = !0)),
              (0, ot.merge)(e, P)
            );
          }
          return e;
        }),
        (Jd = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case YR:
              return t.payload.ixInstances || Object.freeze({});
            case $R:
              return Object.freeze({});
            case QR: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: y,
                  origin: h,
                  destination: p,
                  immediate: _,
                  verbose: A,
                  continuous: I,
                  parameterId: x,
                  actionGroups: b,
                  smoothing: L,
                  restingValue: C,
                  pluginInstance: D,
                  pluginDuration: N,
                  instanceDelay: P,
                  skipMotion: k,
                  skipToValue: B,
                } = t.payload,
                { actionTypeId: H } = i,
                Y = nC(H),
                Q = iC(Y, H),
                q = Object.keys(p).filter(
                  (F) => p[F] != null && typeof p[F] != "string"
                ),
                { easing: w } = i.config;
              return (0, ot.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: h,
                destination: p,
                destinationKeys: q,
                immediate: _,
                verbose: A,
                current: null,
                actionItem: i,
                actionTypeId: H,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: Y,
                isCarrier: y,
                styleProp: Q,
                continuous: I,
                parameterId: x,
                actionGroups: b,
                smoothing: L,
                restingValue: C,
                pluginInstance: D,
                pluginDuration: N,
                instanceDelay: P,
                skipMotion: k,
                skipToValue: B,
                customEasingFn:
                  Array.isArray(w) && w.length === 4 ? tC(w) : void 0,
              });
            }
            case ZR: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ot.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case JR: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case eC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? oC : aC;
                r = (0, ot.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var sC,
    uC,
    cC,
    tp,
    rp = fe(() => {
      "use strict";
      Re();
      ({
        IX2_RAW_DATA_IMPORTED: sC,
        IX2_SESSION_STOPPED: uC,
        IX2_PARAMETER_CHANGED: cC,
      } = ye),
        (tp = (e = {}, t) => {
          switch (t.type) {
            case sC:
              return t.payload.ixParameters || {};
            case uC:
              return {};
            case cC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var op = {};
  Oe(op, { default: () => fC });
  var np,
    ip,
    lC,
    fC,
    ap = fe(() => {
      "use strict";
      np = ie(di());
      hs();
      Fs();
      Xs();
      ip = ie(_t());
      ep();
      rp();
      ({ ixElements: lC } = ip.IX2ElementsReducer),
        (fC = (0, np.combineReducers)({
          ixData: ps,
          ixRequest: Ds,
          ixSession: qs,
          ixElements: lC,
          ixInstances: Jd,
          ixParameters: tp,
        }));
    });
  var up = f((Bq, sp) => {
    var dC = ut(),
      pC = me(),
      hC = rt(),
      gC = "[object String]";
    function EC(e) {
      return typeof e == "string" || (!pC(e) && hC(e) && dC(e) == gC);
    }
    sp.exports = EC;
  });
  var lp = f((Wq, cp) => {
    var yC = ki(),
      vC = yC("length");
    cp.exports = vC;
  });
  var dp = f((Hq, fp) => {
    var mC = "\\ud800-\\udfff",
      _C = "\\u0300-\\u036f",
      IC = "\\ufe20-\\ufe2f",
      TC = "\\u20d0-\\u20ff",
      bC = _C + IC + TC,
      AC = "\\ufe0e\\ufe0f",
      SC = "\\u200d",
      wC = RegExp("[" + SC + mC + bC + AC + "]");
    function OC(e) {
      return wC.test(e);
    }
    fp.exports = OC;
  });
  var Ip = f((zq, _p) => {
    var hp = "\\ud800-\\udfff",
      xC = "\\u0300-\\u036f",
      RC = "\\ufe20-\\ufe2f",
      CC = "\\u20d0-\\u20ff",
      LC = xC + RC + CC,
      PC = "\\ufe0e\\ufe0f",
      NC = "[" + hp + "]",
      bo = "[" + LC + "]",
      Ao = "\\ud83c[\\udffb-\\udfff]",
      DC = "(?:" + bo + "|" + Ao + ")",
      gp = "[^" + hp + "]",
      Ep = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      yp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      FC = "\\u200d",
      vp = DC + "?",
      mp = "[" + PC + "]?",
      MC = "(?:" + FC + "(?:" + [gp, Ep, yp].join("|") + ")" + mp + vp + ")*",
      qC = mp + vp + MC,
      XC = "(?:" + [gp + bo + "?", bo, Ep, yp, NC].join("|") + ")",
      pp = RegExp(Ao + "(?=" + Ao + ")|" + XC + qC, "g");
    function GC(e) {
      for (var t = (pp.lastIndex = 0); pp.test(e); ) ++t;
      return t;
    }
    _p.exports = GC;
  });
  var bp = f((Kq, Tp) => {
    var kC = lp(),
      VC = dp(),
      UC = Ip();
    function BC(e) {
      return VC(e) ? UC(e) : kC(e);
    }
    Tp.exports = BC;
  });
  var Sp = f((jq, Ap) => {
    var WC = Qr(),
      HC = Zr(),
      zC = gt(),
      KC = up(),
      jC = bp(),
      YC = "[object Map]",
      $C = "[object Set]";
    function QC(e) {
      if (e == null) return 0;
      if (zC(e)) return KC(e) ? jC(e) : e.length;
      var t = HC(e);
      return t == YC || t == $C ? e.size : WC(e).length;
    }
    Ap.exports = QC;
  });
  var Op = f((Yq, wp) => {
    var ZC = "Expected a function";
    function JC(e) {
      if (typeof e != "function") throw new TypeError(ZC);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    wp.exports = JC;
  });
  var So = f(($q, xp) => {
    var eL = ct(),
      tL = (function () {
        try {
          var e = eL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    xp.exports = tL;
  });
  var wo = f((Qq, Cp) => {
    var Rp = So();
    function rL(e, t, r) {
      t == "__proto__" && Rp
        ? Rp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Cp.exports = rL;
  });
  var Pp = f((Zq, Lp) => {
    var nL = wo(),
      iL = Vr(),
      oL = Object.prototype,
      aL = oL.hasOwnProperty;
    function sL(e, t, r) {
      var n = e[t];
      (!(aL.call(e, t) && iL(n, r)) || (r === void 0 && !(t in e))) &&
        nL(e, t, r);
    }
    Lp.exports = sL;
  });
  var Fp = f((Jq, Dp) => {
    var uL = Pp(),
      cL = fr(),
      lL = Kr(),
      Np = $e(),
      fL = Mt();
    function dL(e, t, r, n) {
      if (!Np(e)) return e;
      t = cL(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = fL(t[i]),
          l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var y = s[u];
          (l = n ? n(y, u, s) : void 0),
            l === void 0 && (l = Np(y) ? y : lL(t[i + 1]) ? [] : {});
        }
        uL(s, u, l), (s = s[u]);
      }
      return e;
    }
    Dp.exports = dL;
  });
  var qp = f((eX, Mp) => {
    var pL = tn(),
      hL = Fp(),
      gL = fr();
    function EL(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = pL(e, a);
        r(s, a) && hL(o, gL(a, e), s);
      }
      return o;
    }
    Mp.exports = EL;
  });
  var Gp = f((tX, Xp) => {
    var yL = Hr(),
      vL = Jn(),
      mL = Si(),
      _L = Ai(),
      IL = Object.getOwnPropertySymbols,
      TL = IL
        ? function (e) {
            for (var t = []; e; ) yL(t, mL(e)), (e = vL(e));
            return t;
          }
        : _L;
    Xp.exports = TL;
  });
  var Vp = f((rX, kp) => {
    function bL(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    kp.exports = bL;
  });
  var Bp = f((nX, Up) => {
    var AL = $e(),
      SL = $r(),
      wL = Vp(),
      OL = Object.prototype,
      xL = OL.hasOwnProperty;
    function RL(e) {
      if (!AL(e)) return wL(e);
      var t = SL(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !xL.call(e, n))) || r.push(n);
      return r;
    }
    Up.exports = RL;
  });
  var Hp = f((iX, Wp) => {
    var CL = Oi(),
      LL = Bp(),
      PL = gt();
    function NL(e) {
      return PL(e) ? CL(e, !0) : LL(e);
    }
    Wp.exports = NL;
  });
  var Kp = f((oX, zp) => {
    var DL = bi(),
      FL = Gp(),
      ML = Hp();
    function qL(e) {
      return DL(e, ML, FL);
    }
    zp.exports = qL;
  });
  var Yp = f((aX, jp) => {
    var XL = Gi(),
      GL = lt(),
      kL = qp(),
      VL = Kp();
    function UL(e, t) {
      if (e == null) return {};
      var r = XL(VL(e), function (n) {
        return [n];
      });
      return (
        (t = GL(t)),
        kL(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    jp.exports = UL;
  });
  var Qp = f((sX, $p) => {
    var BL = lt(),
      WL = Op(),
      HL = Yp();
    function zL(e, t) {
      return HL(e, WL(BL(t)));
    }
    $p.exports = zL;
  });
  var Jp = f((uX, Zp) => {
    var KL = Qr(),
      jL = Zr(),
      YL = or(),
      $L = me(),
      QL = gt(),
      ZL = zr(),
      JL = $r(),
      eP = Yr(),
      tP = "[object Map]",
      rP = "[object Set]",
      nP = Object.prototype,
      iP = nP.hasOwnProperty;
    function oP(e) {
      if (e == null) return !0;
      if (
        QL(e) &&
        ($L(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          ZL(e) ||
          eP(e) ||
          YL(e))
      )
        return !e.length;
      var t = jL(e);
      if (t == tP || t == rP) return !e.size;
      if (JL(e)) return !KL(e).length;
      for (var r in e) if (iP.call(e, r)) return !1;
      return !0;
    }
    Zp.exports = oP;
  });
  var th = f((cX, eh) => {
    var aP = wo(),
      sP = fo(),
      uP = lt();
    function cP(e, t) {
      var r = {};
      return (
        (t = uP(t, 3)),
        sP(e, function (n, i, o) {
          aP(r, i, t(n, i, o));
        }),
        r
      );
    }
    eh.exports = cP;
  });
  var nh = f((lX, rh) => {
    function lP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    rh.exports = lP;
  });
  var oh = f((fX, ih) => {
    var fP = nn();
    function dP(e) {
      return typeof e == "function" ? e : fP;
    }
    ih.exports = dP;
  });
  var sh = f((dX, ah) => {
    var pP = nh(),
      hP = po(),
      gP = oh(),
      EP = me();
    function yP(e, t) {
      var r = EP(e) ? pP : hP;
      return r(e, gP(t));
    }
    ah.exports = yP;
  });
  var ch = f((pX, uh) => {
    var vP = ke(),
      mP = function () {
        return vP.Date.now();
      };
    uh.exports = mP;
  });
  var dh = f((hX, fh) => {
    var _P = $e(),
      Oo = ch(),
      lh = on(),
      IP = "Expected a function",
      TP = Math.max,
      bP = Math.min;
    function AP(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        y = !1,
        h = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(IP);
      (t = lh(t) || 0),
        _P(r) &&
          ((y = !!r.leading),
          (h = "maxWait" in r),
          (o = h ? TP(lh(r.maxWait) || 0, t) : o),
          (p = "trailing" in r ? !!r.trailing : p));
      function _(P) {
        var k = n,
          B = i;
        return (n = i = void 0), (l = P), (a = e.apply(B, k)), a;
      }
      function A(P) {
        return (l = P), (s = setTimeout(b, t)), y ? _(P) : a;
      }
      function I(P) {
        var k = P - u,
          B = P - l,
          H = t - k;
        return h ? bP(H, o - B) : H;
      }
      function x(P) {
        var k = P - u,
          B = P - l;
        return u === void 0 || k >= t || k < 0 || (h && B >= o);
      }
      function b() {
        var P = Oo();
        if (x(P)) return L(P);
        s = setTimeout(b, I(P));
      }
      function L(P) {
        return (s = void 0), p && n ? _(P) : ((n = i = void 0), a);
      }
      function C() {
        s !== void 0 && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
      }
      function D() {
        return s === void 0 ? a : L(Oo());
      }
      function N() {
        var P = Oo(),
          k = x(P);
        if (((n = arguments), (i = this), (u = P), k)) {
          if (s === void 0) return A(u);
          if (h) return clearTimeout(s), (s = setTimeout(b, t)), _(u);
        }
        return s === void 0 && (s = setTimeout(b, t)), a;
      }
      return (N.cancel = C), (N.flush = D), N;
    }
    fh.exports = AP;
  });
  var hh = f((gX, ph) => {
    var SP = dh(),
      wP = $e(),
      OP = "Expected a function";
    function xP(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(OP);
      return (
        wP(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        SP(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    ph.exports = xP;
  });
  var Eh = {};
  Oe(Eh, {
    actionListPlaybackChanged: () => jt,
    animationFrameChanged: () => In,
    clearRequested: () => JP,
    elementStateChanged: () => Fo,
    eventListenerAdded: () => _n,
    eventStateChanged: () => Po,
    instanceAdded: () => No,
    instanceRemoved: () => Do,
    instanceStarted: () => Tn,
    mediaQueriesDefined: () => qo,
    parameterChanged: () => Kt,
    playbackRequested: () => QP,
    previewRequested: () => $P,
    rawDataImported: () => xo,
    sessionInitialized: () => Ro,
    sessionStarted: () => Co,
    sessionStopped: () => Lo,
    stopRequested: () => ZP,
    testFrameRendered: () => eN,
    viewportWidthChanged: () => Mo,
  });
  var gh,
    RP,
    CP,
    LP,
    PP,
    NP,
    DP,
    FP,
    MP,
    qP,
    XP,
    GP,
    kP,
    VP,
    UP,
    BP,
    WP,
    HP,
    zP,
    KP,
    jP,
    YP,
    xo,
    Ro,
    Co,
    Lo,
    $P,
    QP,
    ZP,
    JP,
    _n,
    eN,
    Po,
    In,
    Kt,
    No,
    Tn,
    Do,
    Fo,
    jt,
    Mo,
    qo,
    bn = fe(() => {
      "use strict";
      Re();
      (gh = ie(_t())),
        ({
          IX2_RAW_DATA_IMPORTED: RP,
          IX2_SESSION_INITIALIZED: CP,
          IX2_SESSION_STARTED: LP,
          IX2_SESSION_STOPPED: PP,
          IX2_PREVIEW_REQUESTED: NP,
          IX2_PLAYBACK_REQUESTED: DP,
          IX2_STOP_REQUESTED: FP,
          IX2_CLEAR_REQUESTED: MP,
          IX2_EVENT_LISTENER_ADDED: qP,
          IX2_TEST_FRAME_RENDERED: XP,
          IX2_EVENT_STATE_CHANGED: GP,
          IX2_ANIMATION_FRAME_CHANGED: kP,
          IX2_PARAMETER_CHANGED: VP,
          IX2_INSTANCE_ADDED: UP,
          IX2_INSTANCE_STARTED: BP,
          IX2_INSTANCE_REMOVED: WP,
          IX2_ELEMENT_STATE_CHANGED: HP,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: zP,
          IX2_VIEWPORT_WIDTH_CHANGED: KP,
          IX2_MEDIA_QUERIES_DEFINED: jP,
        } = ye),
        ({ reifyState: YP } = gh.IX2VanillaUtils),
        (xo = (e) => ({ type: RP, payload: { ...YP(e) } })),
        (Ro = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: CP,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Co = () => ({ type: LP })),
        (Lo = () => ({ type: PP })),
        ($P = ({ rawData: e, defer: t }) => ({
          type: NP,
          payload: { defer: t, rawData: e },
        })),
        (QP = ({
          actionTypeId: e = xe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: DP,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (ZP = (e) => ({ type: FP, payload: { actionListId: e } })),
        (JP = () => ({ type: MP })),
        (_n = (e, t) => ({
          type: qP,
          payload: { target: e, listenerParams: t },
        })),
        (eN = (e = 1) => ({ type: XP, payload: { step: e } })),
        (Po = (e, t) => ({ type: GP, payload: { stateKey: e, newState: t } })),
        (In = (e, t) => ({ type: kP, payload: { now: e, parameters: t } })),
        (Kt = (e, t) => ({ type: VP, payload: { key: e, value: t } })),
        (No = (e) => ({ type: UP, payload: { ...e } })),
        (Tn = (e, t) => ({ type: BP, payload: { instanceId: e, time: t } })),
        (Do = (e) => ({ type: WP, payload: { instanceId: e } })),
        (Fo = (e, t, r, n) => ({
          type: HP,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (jt = ({ actionListId: e, isPlaying: t }) => ({
          type: zP,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Mo = ({ width: e, mediaQueries: t }) => ({
          type: KP,
          payload: { width: e, mediaQueries: t },
        })),
        (qo = () => ({ type: jP }));
    });
  var Se = {};
  Oe(Se, {
    elementContains: () => ko,
    getChildElements: () => lN,
    getClosestElement: () => Tr,
    getProperty: () => oN,
    getQuerySelector: () => Go,
    getRefType: () => Vo,
    getSiblingElements: () => fN,
    getStyle: () => iN,
    getValidDocument: () => sN,
    isSiblingNode: () => cN,
    matchSelector: () => aN,
    queryDocument: () => uN,
    setStyle: () => nN,
  });
  function nN(e, t, r) {
    e.style[t] = r;
  }
  function iN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function oN(e, t) {
    return e[t];
  }
  function aN(e) {
    return (t) => t[Xo](e);
  }
  function Go({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(yh) !== -1) {
        let n = e.split(yh),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(mh)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function sN(e) {
    return e == null || e === document.documentElement.getAttribute(mh)
      ? document
      : null;
  }
  function uN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ko(e, t) {
    return e.contains(t);
  }
  function cN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function lN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function fN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Vo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? tN
        : rN
      : null;
  }
  var vh,
    Xo,
    yh,
    tN,
    rN,
    mh,
    Tr,
    _h = fe(() => {
      "use strict";
      vh = ie(_t());
      Re();
      ({ ELEMENT_MATCHES: Xo } = vh.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: yh,
          HTML_ELEMENT: tN,
          PLAIN_OBJECT: rN,
          WF_PAGE: mh,
        } = _e);
      Tr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[Xo] && r[Xo](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var Uo = f((vX, Th) => {
    var dN = $e(),
      Ih = Object.create,
      pN = (function () {
        function e() {}
        return function (t) {
          if (!dN(t)) return {};
          if (Ih) return Ih(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Th.exports = pN;
  });
  var An = f((mX, bh) => {
    function hN() {}
    bh.exports = hN;
  });
  var wn = f((_X, Ah) => {
    var gN = Uo(),
      EN = An();
    function Sn(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Sn.prototype = gN(EN.prototype);
    Sn.prototype.constructor = Sn;
    Ah.exports = Sn;
  });
  var xh = f((IX, Oh) => {
    var Sh = St(),
      yN = or(),
      vN = me(),
      wh = Sh ? Sh.isConcatSpreadable : void 0;
    function mN(e) {
      return vN(e) || yN(e) || !!(wh && e && e[wh]);
    }
    Oh.exports = mN;
  });
  var Lh = f((TX, Ch) => {
    var _N = Hr(),
      IN = xh();
    function Rh(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = IN), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Rh(s, t - 1, r, n, i)
            : _N(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Ch.exports = Rh;
  });
  var Nh = f((bX, Ph) => {
    var TN = Lh();
    function bN(e) {
      var t = e == null ? 0 : e.length;
      return t ? TN(e, 1) : [];
    }
    Ph.exports = bN;
  });
  var Fh = f((AX, Dh) => {
    function AN(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Dh.exports = AN;
  });
  var Xh = f((SX, qh) => {
    var SN = Fh(),
      Mh = Math.max;
    function wN(e, t, r) {
      return (
        (t = Mh(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Mh(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), SN(e, this, s);
        }
      );
    }
    qh.exports = wN;
  });
  var kh = f((wX, Gh) => {
    function ON(e) {
      return function () {
        return e;
      };
    }
    Gh.exports = ON;
  });
  var Bh = f((OX, Uh) => {
    var xN = kh(),
      Vh = So(),
      RN = nn(),
      CN = Vh
        ? function (e, t) {
            return Vh(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: xN(t),
              writable: !0,
            });
          }
        : RN;
    Uh.exports = CN;
  });
  var Hh = f((xX, Wh) => {
    var LN = 800,
      PN = 16,
      NN = Date.now;
    function DN(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = NN(),
          i = PN - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= LN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Wh.exports = DN;
  });
  var Kh = f((RX, zh) => {
    var FN = Bh(),
      MN = Hh(),
      qN = MN(FN);
    zh.exports = qN;
  });
  var Yh = f((CX, jh) => {
    var XN = Nh(),
      GN = Xh(),
      kN = Kh();
    function VN(e) {
      return kN(GN(e, void 0, XN), e + "");
    }
    jh.exports = VN;
  });
  var Zh = f((LX, Qh) => {
    var $h = xi(),
      UN = $h && new $h();
    Qh.exports = UN;
  });
  var eg = f((PX, Jh) => {
    function BN() {}
    Jh.exports = BN;
  });
  var Bo = f((NX, rg) => {
    var tg = Zh(),
      WN = eg(),
      HN = tg
        ? function (e) {
            return tg.get(e);
          }
        : WN;
    rg.exports = HN;
  });
  var ig = f((DX, ng) => {
    var zN = {};
    ng.exports = zN;
  });
  var Wo = f((FX, ag) => {
    var og = ig(),
      KN = Object.prototype,
      jN = KN.hasOwnProperty;
    function YN(e) {
      for (
        var t = e.name + "", r = og[t], n = jN.call(og, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    ag.exports = YN;
  });
  var xn = f((MX, sg) => {
    var $N = Uo(),
      QN = An(),
      ZN = 4294967295;
    function On(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = ZN),
        (this.__views__ = []);
    }
    On.prototype = $N(QN.prototype);
    On.prototype.constructor = On;
    sg.exports = On;
  });
  var cg = f((qX, ug) => {
    function JN(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    ug.exports = JN;
  });
  var fg = f((XX, lg) => {
    var eD = xn(),
      tD = wn(),
      rD = cg();
    function nD(e) {
      if (e instanceof eD) return e.clone();
      var t = new tD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = rD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    lg.exports = nD;
  });
  var hg = f((GX, pg) => {
    var iD = xn(),
      dg = wn(),
      oD = An(),
      aD = me(),
      sD = rt(),
      uD = fg(),
      cD = Object.prototype,
      lD = cD.hasOwnProperty;
    function Rn(e) {
      if (sD(e) && !aD(e) && !(e instanceof iD)) {
        if (e instanceof dg) return e;
        if (lD.call(e, "__wrapped__")) return uD(e);
      }
      return new dg(e);
    }
    Rn.prototype = oD.prototype;
    Rn.prototype.constructor = Rn;
    pg.exports = Rn;
  });
  var Eg = f((kX, gg) => {
    var fD = xn(),
      dD = Bo(),
      pD = Wo(),
      hD = hg();
    function gD(e) {
      var t = pD(e),
        r = hD[t];
      if (typeof r != "function" || !(t in fD.prototype)) return !1;
      if (e === r) return !0;
      var n = dD(r);
      return !!n && e === n[0];
    }
    gg.exports = gD;
  });
  var _g = f((VX, mg) => {
    var yg = wn(),
      ED = Yh(),
      yD = Bo(),
      Ho = Wo(),
      vD = me(),
      vg = Eg(),
      mD = "Expected a function",
      _D = 8,
      ID = 32,
      TD = 128,
      bD = 256;
    function AD(e) {
      return ED(function (t) {
        var r = t.length,
          n = r,
          i = yg.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(mD);
          if (i && !a && Ho(o) == "wrapper") var a = new yg([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = Ho(o),
            u = s == "wrapper" ? yD(o) : void 0;
          u &&
          vg(u[0]) &&
          u[1] == (TD | _D | ID | bD) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[Ho(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && vg(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            y = l[0];
          if (a && l.length == 1 && vD(y)) return a.plant(y).value();
          for (var h = 0, p = r ? t[h].apply(this, l) : y; ++h < r; )
            p = t[h].call(this, p);
          return p;
        };
      });
    }
    mg.exports = AD;
  });
  var Tg = f((UX, Ig) => {
    var SD = _g(),
      wD = SD();
    Ig.exports = wD;
  });
  var Ag = f((BX, bg) => {
    function OD(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    bg.exports = OD;
  });
  var wg = f((WX, Sg) => {
    var xD = Ag(),
      zo = on();
    function RD(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = zo(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = zo(t)), (t = t === t ? t : 0)),
        xD(zo(e), t, r)
      );
    }
    Sg.exports = RD;
  });
  var Fg,
    Mg,
    qg,
    Xg,
    CD,
    LD,
    PD,
    ND,
    DD,
    FD,
    MD,
    qD,
    XD,
    GD,
    kD,
    VD,
    UD,
    BD,
    WD,
    Gg,
    kg,
    HD,
    zD,
    KD,
    Vg,
    jD,
    YD,
    Ug,
    $D,
    Ko,
    Bg,
    Og,
    xg,
    Wg,
    Ar,
    QD,
    Je,
    Hg,
    ZD,
    Le,
    Be,
    Sr,
    zg,
    jo,
    Rg,
    Yo,
    JD,
    br,
    eF,
    tF,
    rF,
    Kg,
    Cg,
    nF,
    Lg,
    iF,
    oF,
    aF,
    Pg,
    Cn,
    Ln,
    Ng,
    Dg,
    jg,
    Yg = fe(() => {
      "use strict";
      (Fg = ie(Tg())), (Mg = ie(rn())), (qg = ie(wg()));
      Re();
      $o();
      bn();
      (Xg = ie(_t())),
        ({
          MOUSE_CLICK: CD,
          MOUSE_SECOND_CLICK: LD,
          MOUSE_DOWN: PD,
          MOUSE_UP: ND,
          MOUSE_OVER: DD,
          MOUSE_OUT: FD,
          DROPDOWN_CLOSE: MD,
          DROPDOWN_OPEN: qD,
          SLIDER_ACTIVE: XD,
          SLIDER_INACTIVE: GD,
          TAB_ACTIVE: kD,
          TAB_INACTIVE: VD,
          NAVBAR_CLOSE: UD,
          NAVBAR_OPEN: BD,
          MOUSE_MOVE: WD,
          PAGE_SCROLL_DOWN: Gg,
          SCROLL_INTO_VIEW: kg,
          SCROLL_OUT_OF_VIEW: HD,
          PAGE_SCROLL_UP: zD,
          SCROLLING_IN_VIEW: KD,
          PAGE_FINISH: Vg,
          ECOMMERCE_CART_CLOSE: jD,
          ECOMMERCE_CART_OPEN: YD,
          PAGE_START: Ug,
          PAGE_SCROLL: $D,
        } = Ve),
        (Ko = "COMPONENT_ACTIVE"),
        (Bg = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Og } = _e),
        ({ getNamespacedParameterId: xg } = Xg.IX2VanillaUtils),
        (Wg = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Ar = Wg(({ element: e, nativeEvent: t }) => e === t.target)),
        (QD = Wg(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (Je = (0, Fg.default)([Ar, QD])),
        (Hg = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !JD[i.eventTypeId]) return i;
          }
          return null;
        }),
        (ZD = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Hg(e, n);
        }),
        (Le = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = Hg(e, u);
          return (
            l &&
              Yt({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Og + n.split(Og)[1],
                actionListId: (0, Mg.default)(l, "action.config.actionListId"),
              }),
            Yt({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            wr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Be = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Sr = { handler: Be(Je, Le) }),
        (zg = { ...Sr, types: [Ko, Bg].join(" ") }),
        (jo = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Rg = "mouseover mouseout"),
        (Yo = { types: jo }),
        (JD = { PAGE_START: Ug, PAGE_FINISH: Vg }),
        (br = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, qg.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (eF = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (tF = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (rF = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = br(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return eF(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (Kg = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Ko, Bg].indexOf(n) !== -1 ? n === Ko : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Cg = (e) => (t, r) => {
          let n = { elementHovered: tF(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (nF = (e) => (t, r) => {
          let n = { ...r, elementVisible: rF(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Lg =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = br(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
              y = l === "PX",
              h = i - o,
              p = Number((n / h).toFixed(2));
            if (r && r.percentTop === p) return r;
            let _ = (y ? u : (o * (u || 0)) / 100) / h,
              A,
              I,
              x = 0;
            r &&
              ((A = p > r.percentTop),
              (I = r.scrollingDown !== A),
              (x = I ? p : r.anchorTop));
            let b = s === Gg ? p >= x + _ : p <= x - _,
              L = {
                ...r,
                percentTop: p,
                inBounds: b,
                anchorTop: x,
                scrollingDown: A,
              };
            return (r && b && (I || L.inBounds !== r.inBounds) && e(t, L)) || L;
          }),
        (iF = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (oF = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (aF = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Pg =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Cn = (e = !0) => ({
          ...zg,
          handler: Be(
            e ? Je : Ar,
            Kg((t, r) => (r.isActive ? Sr.handler(t, r) : r))
          ),
        })),
        (Ln = (e = !0) => ({
          ...zg,
          handler: Be(
            e ? Je : Ar,
            Kg((t, r) => (r.isActive ? r : Sr.handler(t, r)))
          ),
        })),
        (Ng = {
          ...Yo,
          handler: nF((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === kg) === r
              ? (Le(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Dg = 0.05),
        (jg = {
          [XD]: Cn(),
          [GD]: Ln(),
          [qD]: Cn(),
          [MD]: Ln(),
          [BD]: Cn(!1),
          [UD]: Ln(!1),
          [kD]: Cn(),
          [VD]: Ln(),
          [YD]: { types: "ecommerce-cart-open", handler: Be(Je, Le) },
          [jD]: { types: "ecommerce-cart-close", handler: Be(Je, Le) },
          [CD]: {
            types: "click",
            handler: Be(
              Je,
              Pg((e, { clickCount: t }) => {
                ZD(e) ? t === 1 && Le(e) : Le(e);
              })
            ),
          },
          [LD]: {
            types: "click",
            handler: Be(
              Je,
              Pg((e, { clickCount: t }) => {
                t === 2 && Le(e);
              })
            ),
          },
          [PD]: { ...Sr, types: "mousedown" },
          [ND]: { ...Sr, types: "mouseup" },
          [DD]: {
            types: Rg,
            handler: Be(
              Je,
              Cg((e, t) => {
                t.elementHovered && Le(e);
              })
            ),
          },
          [FD]: {
            types: Rg,
            handler: Be(
              Je,
              Cg((e, t) => {
                t.elementHovered || Le(e);
              })
            ),
          },
          [WD]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: l,
                  restingState: y = 0,
                } = r,
                {
                  clientX: h = o.clientX,
                  clientY: p = o.clientY,
                  pageX: _ = o.pageX,
                  pageY: A = o.pageY,
                } = n,
                I = s === "X_AXIS",
                x = n.type === "mouseout",
                b = y / 100,
                L = u,
                C = !1;
              switch (a) {
                case Ye.VIEWPORT: {
                  b = I
                    ? Math.min(h, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ye.PAGE: {
                  let {
                    scrollLeft: D,
                    scrollTop: N,
                    scrollWidth: P,
                    scrollHeight: k,
                  } = br();
                  b = I ? Math.min(D + _, P) / P : Math.min(N + A, k) / k;
                  break;
                }
                case Ye.ELEMENT:
                default: {
                  L = xg(i, u);
                  let D = n.type.indexOf("mouse") === 0;
                  if (D && Je({ element: t, nativeEvent: n }) !== !0) break;
                  let N = t.getBoundingClientRect(),
                    { left: P, top: k, width: B, height: H } = N;
                  if (!D && !iF({ left: h, top: p }, N)) break;
                  (C = !0), (b = I ? (h - P) / B : (p - k) / H);
                  break;
                }
              }
              return (
                x && (b > 1 - Dg || b < Dg) && (b = Math.round(b)),
                (a !== Ye.ELEMENT || C || C !== o.elementHovered) &&
                  ((b = l ? 1 - b : b), e.dispatch(Kt(L, b))),
                {
                  elementHovered: C,
                  clientX: h,
                  clientY: p,
                  pageX: _,
                  pageY: A,
                }
              );
            },
          },
          [$D]: {
            types: jo,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = br(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(Kt(r, s));
            },
          },
          [KD]: {
            types: jo,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: l,
                } = br(),
                {
                  basedOn: y,
                  selectedAxis: h,
                  continuousParameterGroupId: p,
                  startsEntering: _,
                  startsExiting: A,
                  addEndOffset: I,
                  addStartOffset: x,
                  addOffsetValue: b = 0,
                  endOffsetValue: L = 0,
                } = r,
                C = h === "X_AXIS";
              if (y === Ye.VIEWPORT) {
                let D = C ? o / s : a / u;
                return (
                  D !== i.scrollPercent && t.dispatch(Kt(p, D)),
                  { scrollPercent: D }
                );
              } else {
                let D = xg(n, p),
                  N = e.getBoundingClientRect(),
                  P = (x ? b : 0) / 100,
                  k = (I ? L : 0) / 100;
                (P = _ ? P : 1 - P), (k = A ? k : 1 - k);
                let B = N.top + Math.min(N.height * P, l),
                  Y = N.top + N.height * k - B,
                  Q = Math.min(l + Y, u),
                  w = Math.min(Math.max(0, l - B), Q) / Q;
                return (
                  w !== i.scrollPercent && t.dispatch(Kt(D, w)),
                  { scrollPercent: w }
                );
              }
            },
          },
          [kg]: Ng,
          [HD]: Ng,
          [Gg]: {
            ...Yo,
            handler: Lg((e, t) => {
              t.scrollingDown && Le(e);
            }),
          },
          [zD]: {
            ...Yo,
            handler: Lg((e, t) => {
              t.scrollingDown || Le(e);
            }),
          },
          [Vg]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Be(Ar, oF(Le)),
          },
          [Ug]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Be(Ar, aF(Le)),
          },
        });
    });
  var dE = {};
  Oe(dE, {
    observeRequests: () => wF,
    startActionGroup: () => wr,
    startEngine: () => qn,
    stopActionGroup: () => Yt,
    stopAllActionGroups: () => cE,
    stopEngine: () => Xn,
  });
  function wF(e) {
    It({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: RF }),
      It({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: CF }),
      It({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: LF }),
      It({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: PF });
  }
  function OF(e) {
    It({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Xn(e),
          oE({ store: e, elementApi: Se }),
          qn({ store: e, allowEvents: !0 }),
          aE();
      },
    });
  }
  function xF(e, t) {
    let r = It({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function RF({ rawData: e, defer: t }, r) {
    let n = () => {
      qn({ store: r, rawData: e, allowEvents: !0 }), aE();
    };
    t ? setTimeout(n, 0) : n();
  }
  function aE() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function CF(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: y } = e;
    if (n && i && y && s) {
      let h = y.actionLists[n];
      h && (y = gF({ actionList: h, actionItemId: i, rawData: y }));
    }
    if (
      (qn({ store: t, rawData: y, allowEvents: a, testManual: u }),
      (n && r === xe.GENERAL_START_ACTION) || Qo(r))
    ) {
      Yt({ store: t, actionListId: n }),
        uE({ store: t, actionListId: n, eventId: o });
      let h = wr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: l,
      });
      l && h && t.dispatch(jt({ actionListId: n, isPlaying: !s }));
    }
  }
  function LF({ actionListId: e }, t) {
    e ? Yt({ store: t, actionListId: e }) : cE({ store: t }), Xn(t);
  }
  function PF(e, t) {
    Xn(t), oE({ store: t, elementApi: Se });
  }
  function qn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(xo(t)),
      i.active ||
        (e.dispatch(
          Ro({
            hasBoundaryNodes: !!document.querySelector(Nn),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (XF(e), NF(), e.getState().ixSession.hasDefinedMediaQueries && OF(e)),
        e.dispatch(Co()),
        DF(e, n));
  }
  function NF() {
    let { documentElement: e } = document;
    e.className.indexOf($g) === -1 && (e.className += ` ${$g}`);
  }
  function DF(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(In(n, o)), t ? xF(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Xn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(FF), mF(), e.dispatch(Lo());
    }
  }
  function FF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function MF({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: y } = e.getState(),
      { events: h } = l,
      p = h[n],
      { eventTypeId: _ } = p,
      A = {},
      I = {},
      x = [],
      { continuousActionGroups: b } = a,
      { id: L } = a;
    EF(_, i) && (L = yF(t, L));
    let C = y.hasBoundaryNodes && r ? Tr(r, Nn) : null;
    b.forEach((D) => {
      let { keyframe: N, actionItems: P } = D;
      P.forEach((k) => {
        let { actionTypeId: B } = k,
          { target: H } = k.config;
        if (!H) return;
        let Y = H.boundaryMode ? C : null,
          Q = _F(H) + Zo + B;
        if (((I[Q] = qF(I[Q], N, k)), !A[Q])) {
          A[Q] = !0;
          let { config: q } = k;
          Dn({
            config: q,
            event: p,
            eventTarget: r,
            elementRoot: Y,
            elementApi: Se,
          }).forEach((w) => {
            x.push({ element: w, key: Q });
          });
        }
      });
    }),
      x.forEach(({ element: D, key: N }) => {
        let P = I[N],
          k = (0, at.default)(P, "[0].actionItems[0]", {}),
          { actionTypeId: B } = k,
          H = Mn(B) ? ea(B)(D, k) : null,
          Y = Jo({ element: D, actionItem: k, elementApi: Se }, H);
        ta({
          store: e,
          element: D,
          eventId: n,
          actionListId: o,
          actionItem: k,
          destination: Y,
          continuous: !0,
          parameterId: L,
          actionGroups: P,
          smoothing: s,
          restingValue: u,
          pluginInstance: H,
        });
      });
  }
  function qF(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function XF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    sE(e),
      (0, $t.default)(r, (i, o) => {
        let a = jg[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        WF({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && kF(e);
  }
  function kF(e) {
    let t = () => {
      sE(e);
    };
    GF.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(_n(window, [r, t]));
    }),
      t();
  }
  function sE(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(Mo({ width: n, mediaQueries: i }));
    }
  }
  function WF({ logic: e, store: t, events: r }) {
    HF(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = VF(r, BF);
    if (!(0, Jg.default)(s)) return;
    (0, $t.default)(s, (h, p) => {
      let _ = r[p],
        { action: A, id: I, mediaQueries: x = o.mediaQueryKeys } = _,
        { actionListId: b } = A.config;
      IF(x, o.mediaQueryKeys) || t.dispatch(qo()),
        A.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(_.config) ? _.config : [_.config]).forEach((C) => {
            let { continuousParameterGroupId: D } = C,
              N = (0, at.default)(a, `${b}.continuousParameterGroups`, []),
              P = (0, Zg.default)(N, ({ id: H }) => H === D),
              k = (C.smoothing || 0) / 100,
              B = (C.restingState || 0) / 100;
            P &&
              h.forEach((H, Y) => {
                let Q = I + Zo + Y;
                MF({
                  store: t,
                  eventStateKey: Q,
                  eventTarget: H,
                  eventId: I,
                  eventConfig: C,
                  actionListId: b,
                  parameterGroup: P,
                  smoothing: k,
                  restingValue: B,
                });
              });
          }),
        (A.actionTypeId === xe.GENERAL_START_ACTION || Qo(A.actionTypeId)) &&
          uE({ store: t, actionListId: b, eventId: I });
    });
    let u = (h) => {
        let { ixSession: p } = t.getState();
        UF(s, (_, A, I) => {
          let x = r[A],
            b = p.eventState[I],
            { action: L, mediaQueries: C = o.mediaQueryKeys } = x;
          if (!Fn(C, p.mediaQueryKey)) return;
          let D = (N = {}) => {
            let P = i(
              {
                store: t,
                element: _,
                event: x,
                eventConfig: N,
                nativeEvent: h,
                eventStateKey: I,
              },
              b
            );
            TF(P, b) || t.dispatch(Po(I, P));
          };
          L.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(D)
            : D();
        });
      },
      l = (0, nE.default)(u, SF),
      y = ({ target: h = document, types: p, throttle: _ }) => {
        p.split(" ")
          .filter(Boolean)
          .forEach((A) => {
            let I = _ ? l : u;
            h.addEventListener(A, I), t.dispatch(_n(h, [A, I]));
          });
      };
    Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e);
  }
  function HF(e) {
    if (!AF) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Go(o);
      t[a] ||
        ((i === Ve.MOUSE_CLICK || i === Ve.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function uE({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, at.default)(u, "actionItemGroups[0].actionItems", []),
        y = (0, at.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Fn(y, i.mediaQueryKey)) return;
      l.forEach((h) => {
        let { config: p, actionTypeId: _ } = h,
          A =
            p?.target?.useEventTarget === !0 && p?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : p,
          I = Dn({ config: A, event: s, elementApi: Se }),
          x = Mn(_);
        I.forEach((b) => {
          let L = x ? ea(_)(b, h) : null;
          ta({
            destination: Jo({ element: b, actionItem: h, elementApi: Se }, L),
            immediate: !0,
            store: e,
            element: b,
            eventId: r,
            actionItem: h,
            actionListId: t,
            pluginInstance: L,
          });
        });
      });
    }
  }
  function cE({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, $t.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        ra(r, e), i && e.dispatch(jt({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function Yt({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Tr(r, Nn) : null;
    (0, $t.default)(o, (u) => {
      let l = (0, at.default)(u, "actionItem.config.target.boundaryMode"),
        y = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && y) {
        if (s && l && !ko(s, u.element)) return;
        ra(u, e),
          u.verbose && e.dispatch(jt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function wr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: y } = u,
      h = y[t] || {},
      { mediaQueries: p = u.mediaQueryKeys } = h,
      _ = (0, at.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: A, useFirstGroupAsInitialState: I } = _;
    if (!A || !A.length) return !1;
    o >= A.length && (0, at.default)(h, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let b =
        (o === 0 || (o === 1 && I)) && Qo(h.action?.actionTypeId)
          ? h.config.delay
          : void 0,
      L = (0, at.default)(A, [o, "actionItems"], []);
    if (!L.length || !Fn(p, l.mediaQueryKey)) return !1;
    let C = l.hasBoundaryNodes && r ? Tr(r, Nn) : null,
      D = dF(L),
      N = !1;
    return (
      L.forEach((P, k) => {
        let { config: B, actionTypeId: H } = P,
          Y = Mn(H),
          { target: Q } = B;
        if (!Q) return;
        let q = Q.boundaryMode ? C : null;
        Dn({
          config: B,
          event: h,
          eventTarget: r,
          elementRoot: q,
          elementApi: Se,
        }).forEach((F, V) => {
          let G = Y ? ea(H)(F, P) : null,
            Z = Y ? bF(H)(F, P) : null;
          N = !0;
          let J = D === k && V === 0,
            M = pF({ element: F, actionItem: P }),
            W = Jo({ element: F, actionItem: P, elementApi: Se }, G);
          ta({
            store: e,
            element: F,
            actionItem: P,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: J,
            computedStyle: M,
            destination: W,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: Z,
            instanceDelay: b,
          });
        });
      }),
      N
    );
  }
  function ta(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: y,
      } = n,
      h = !u,
      p = lF(),
      { ixElements: _, ixSession: A, ixData: I } = t.getState(),
      x = cF(_, i),
      { refState: b } = _[x] || {},
      L = Vo(i),
      C = A.reducedMotion && gi[o.actionTypeId],
      D;
    if (C && u)
      switch (I.events[y]?.eventTypeId) {
        case Ve.MOUSE_MOVE:
        case Ve.MOUSE_MOVE_IN_VIEWPORT:
          D = l;
          break;
        default:
          D = 0.5;
          break;
      }
    let N = hF(i, b, r, o, Se, s);
    if (
      (t.dispatch(
        No({
          instanceId: p,
          elementId: x,
          origin: N,
          refType: L,
          skipMotion: C,
          skipToValue: D,
          ...n,
        })
      ),
      lE(document.body, "ix2-animation-started", p),
      a)
    ) {
      zF(t, p);
      return;
    }
    It({ store: t, select: ({ ixInstances: P }) => P[p], onChange: fE }),
      h && t.dispatch(Tn(p, A.tick));
  }
  function ra(e, t) {
    lE(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === iE && vF(o, n, Se), t.dispatch(Do(e.id));
  }
  function lE(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function zF(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Tn(t, 0)), e.dispatch(In(performance.now(), r));
    let { ixInstances: n } = e.getState();
    fE(n[t], e);
  }
  function fE(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: y,
        eventId: h,
        eventTarget: p,
        eventStateKey: _,
        actionListId: A,
        isCarrier: I,
        styleProp: x,
        verbose: b,
        pluginInstance: L,
      } = e,
      { ixData: C, ixSession: D } = t.getState(),
      { events: N } = C,
      P = N && N[h] ? N[h] : {},
      { mediaQueries: k = C.mediaQueryKeys } = P;
    if (Fn(k, D.mediaQueryKey) && (n || r || i)) {
      if (l || (u === uF && i)) {
        t.dispatch(Fo(o, s, l, a));
        let { ixElements: B } = t.getState(),
          { ref: H, refType: Y, refState: Q } = B[o] || {},
          q = Q && Q[s];
        (Y === iE || Mn(s)) && fF(H, Q, q, h, a, x, Se, u, L);
      }
      if (i) {
        if (I) {
          let B = wr({
            store: t,
            eventId: h,
            eventTarget: p,
            eventStateKey: _,
            actionListId: A,
            groupIndex: y + 1,
            verbose: b,
          });
          b && !B && t.dispatch(jt({ actionListId: A, isPlaying: !1 }));
        }
        ra(e, t);
      }
    }
  }
  var Zg,
    at,
    Jg,
    eE,
    tE,
    rE,
    $t,
    nE,
    Pn,
    sF,
    Qo,
    Zo,
    Nn,
    iE,
    uF,
    $g,
    Dn,
    cF,
    Jo,
    It,
    lF,
    fF,
    oE,
    dF,
    pF,
    hF,
    gF,
    EF,
    yF,
    Fn,
    vF,
    mF,
    _F,
    IF,
    TF,
    Mn,
    ea,
    bF,
    Qg,
    AF,
    SF,
    GF,
    VF,
    UF,
    BF,
    $o = fe(() => {
      "use strict";
      (Zg = ie(Wi())),
        (at = ie(rn())),
        (Jg = ie(Sp())),
        (eE = ie(Qp())),
        (tE = ie(Jp())),
        (rE = ie(th())),
        ($t = ie(sh())),
        (nE = ie(hh()));
      Re();
      Pn = ie(_t());
      bn();
      _h();
      Yg();
      (sF = Object.keys(Dr)),
        (Qo = (e) => sF.includes(e)),
        ({
          COLON_DELIMITER: Zo,
          BOUNDARY_SELECTOR: Nn,
          HTML_ELEMENT: iE,
          RENDER_GENERAL: uF,
          W_MOD_IX: $g,
        } = _e),
        ({
          getAffectedElements: Dn,
          getElementId: cF,
          getDestinationValues: Jo,
          observeStore: It,
          getInstanceId: lF,
          renderHTMLElement: fF,
          clearAllStyles: oE,
          getMaxDurationItemIndex: dF,
          getComputedStyle: pF,
          getInstanceOrigin: hF,
          reduceListToGroup: gF,
          shouldNamespaceEventParameter: EF,
          getNamespacedParameterId: yF,
          shouldAllowMediaQuery: Fn,
          cleanupHTMLElement: vF,
          clearObjectCache: mF,
          stringifyTarget: _F,
          mediaQueriesEqual: IF,
          shallowEqual: TF,
        } = Pn.IX2VanillaUtils),
        ({
          isPluginType: Mn,
          createPluginInstance: ea,
          getPluginDuration: bF,
        } = Pn.IX2VanillaPlugins),
        (Qg = navigator.userAgent),
        (AF = Qg.match(/iPad/i) || Qg.match(/iPhone/)),
        (SF = 12);
      GF = ["resize", "orientationchange"];
      (VF = (e, t) => (0, eE.default)((0, rE.default)(e, t), tE.default)),
        (UF = (e, t) => {
          (0, $t.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Zo + o;
              t(i, n, a);
            });
          });
        }),
        (BF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Dn({ config: t, elementApi: Se });
        });
    });
  var gE = f((ia) => {
    "use strict";
    Object.defineProperty(ia, "__esModule", { value: !0 });
    function KF(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    KF(ia, {
      actions: function () {
        return $F;
      },
      destroy: function () {
        return hE;
      },
      init: function () {
        return eM;
      },
      setEnv: function () {
        return JF;
      },
      store: function () {
        return Gn;
      },
    });
    var jF = di(),
      YF = QF((ap(), ze(op))),
      na = ($o(), ze(dE)),
      $F = ZF((bn(), ze(Eh)));
    function QF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function pE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (pE = function (n) {
        return n ? r : t;
      })(e);
    }
    function ZF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = pE(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Gn = (0, jF.createStore)(YF.default);
    function JF(e) {
      e() && (0, na.observeRequests)(Gn);
    }
    function eM(e) {
      hE(), (0, na.startEngine)({ store: Gn, rawData: e, allowEvents: !0 });
    }
    function hE() {
      (0, na.stopEngine)(Gn);
    }
  });
  var mE = f((eG, vE) => {
    "use strict";
    var EE = Ge(),
      yE = gE();
    yE.setEnv(EE.env);
    EE.define(
      "ix2",
      (vE.exports = function () {
        return yE;
      })
    );
  });
  var IE = f((tG, _E) => {
    "use strict";
    var Qt = Ge();
    Qt.define(
      "links",
      (_E.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Qt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          y = /\/$/,
          h,
          p;
        r.ready = r.design = r.preview = _;
        function _() {
          (i = o && Qt.env("design")),
            (p = Qt.env("slug") || a.pathname || ""),
            Qt.scroll.off(I),
            (h = []);
          for (var b = document.links, L = 0; L < b.length; ++L) A(b[L]);
          h.length && (Qt.scroll.on(I), I());
        }
        function A(b) {
          if (!b.getAttribute("hreflang")) {
            var L =
              (i && b.getAttribute("href-disabled")) || b.getAttribute("href");
            if (((s.href = L), !(L.indexOf(":") >= 0))) {
              var C = e(b);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var D = e(s.hash);
                D.length && h.push({ link: C, sec: D, active: !1 });
                return;
              }
              if (!(L === "#" || L === "")) {
                var N =
                  s.href === a.href || L === p || (l.test(L) && y.test(p));
                x(C, u, N);
              }
            }
          }
        }
        function I() {
          var b = n.scrollTop(),
            L = n.height();
          t.each(h, function (C) {
            if (!C.link.attr("hreflang")) {
              var D = C.link,
                N = C.sec,
                P = N.offset().top,
                k = N.outerHeight(),
                B = L * 0.5,
                H = N.is(":visible") && P + k - B >= b && P + B <= b + L;
              C.active !== H && ((C.active = H), x(D, u, H));
            }
          });
        }
        function x(b, L, C) {
          var D = b.hasClass(L);
          (C && D) || (!C && !D) || (C ? b.addClass(L) : b.removeClass(L));
        }
        return r;
      })
    );
  });
  var bE = f((rG, TE) => {
    "use strict";
    var kn = Ge();
    kn.define(
      "scroll",
      (TE.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = A() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (q) {
              window.setTimeout(q, 15);
            },
          u = kn.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          _ = document.createElement("style");
        _.appendChild(document.createTextNode(p));
        function A() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function x(q) {
          return I.test(q.hash) && q.host + q.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function L() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function C(q, w) {
          var F;
          switch (w) {
            case "add":
              (F = q.attr("tabindex")),
                F
                  ? q.attr("data-wf-tabindex-swap", F)
                  : q.attr("tabindex", "-1");
              break;
            case "remove":
              (F = q.attr("data-wf-tabindex-swap")),
                F
                  ? (q.attr("tabindex", F),
                    q.removeAttr("data-wf-tabindex-swap"))
                  : q.removeAttr("tabindex");
              break;
          }
          q.toggleClass("wf-force-outline-none", w === "add");
        }
        function D(q) {
          var w = q.currentTarget;
          if (
            !(
              kn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(w.className))
            )
          ) {
            var F = x(w) ? w.hash : "";
            if (F !== "") {
              var V = e(F);
              V.length &&
                (q && (q.preventDefault(), q.stopPropagation()),
                N(F, q),
                window.setTimeout(
                  function () {
                    P(V, function () {
                      C(V, "add"),
                        V.get(0).focus({ preventScroll: !0 }),
                        C(V, "remove");
                    });
                  },
                  q ? 0 : 300
                ));
            }
          }
        }
        function N(q) {
          if (
            r.hash !== q &&
            n &&
            n.pushState &&
            !(kn.env.chrome && r.protocol === "file:")
          ) {
            var w = n.state && n.state.hash;
            w !== q && n.pushState({ hash: q }, "", q);
          }
        }
        function P(q, w) {
          var F = i.scrollTop(),
            V = k(q);
          if (F !== V) {
            var G = B(q, F, V),
              Z = Date.now(),
              J = function () {
                var M = Date.now() - Z;
                window.scroll(0, H(F, V, M, G)),
                  M <= G ? s(J) : typeof w == "function" && w();
              };
            s(J);
          }
        }
        function k(q) {
          var w = e(l),
            F = w.css("position") === "fixed" ? w.outerHeight() : 0,
            V = q.offset().top - F;
          if (q.data("scroll") === "mid") {
            var G = i.height() - F,
              Z = q.outerHeight();
            Z < G && (V -= Math.round((G - Z) / 2));
          }
          return V;
        }
        function B(q, w, F) {
          if (L()) return 0;
          var V = 1;
          return (
            a.add(q).each(function (G, Z) {
              var J = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(J) && J >= 0 && (V = J);
            }),
            (472.143 * Math.log(Math.abs(w - F) + 125) - 2e3) * V
          );
        }
        function H(q, w, F, V) {
          return F > V ? w : q + (w - q) * Y(F / V);
        }
        function Y(q) {
          return q < 0.5
            ? 4 * q * q * q
            : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1;
        }
        function Q() {
          var { WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: w } = t;
          o.on(w, h, D),
            o.on(q, y, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(_, document.head.firstChild);
        }
        return { ready: Q };
      })
    );
  });
  var SE = f((nG, AE) => {
    "use strict";
    var tM = Ge();
    tM.define(
      "touch",
      (AE.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            y;
          o.addEventListener("touchstart", h, !1),
            o.addEventListener("touchmove", p, !1),
            o.addEventListener("touchend", _, !1),
            o.addEventListener("touchcancel", A, !1),
            o.addEventListener("mousedown", h, !1),
            o.addEventListener("mousemove", p, !1),
            o.addEventListener("mouseup", _, !1),
            o.addEventListener("mouseout", A, !1);
          function h(x) {
            var b = x.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((s = !0), (l = b[0].clientX)) : (l = x.clientX),
              (y = l));
          }
          function p(x) {
            if (a) {
              if (s && x.type === "mousemove") {
                x.preventDefault(), x.stopPropagation();
                return;
              }
              var b = x.touches,
                L = b ? b[0].clientX : x.clientX,
                C = L - y;
              (y = L),
                Math.abs(C) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", x, { direction: C > 0 ? "right" : "left" }), A());
            }
          }
          function _(x) {
            if (a && ((a = !1), s && x.type === "mouseup")) {
              x.preventDefault(), x.stopPropagation(), (s = !1);
              return;
            }
          }
          function A() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", h, !1),
              o.removeEventListener("touchmove", p, !1),
              o.removeEventListener("touchend", _, !1),
              o.removeEventListener("touchcancel", A, !1),
              o.removeEventListener("mousedown", h, !1),
              o.removeEventListener("mousemove", p, !1),
              o.removeEventListener("mouseup", _, !1),
              o.removeEventListener("mouseout", A, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var wE = f((oa) => {
    "use strict";
    Object.defineProperty(oa, "__esModule", { value: !0 });
    Object.defineProperty(oa, "default", {
      enumerable: !0,
      get: function () {
        return rM;
      },
    });
    function rM(e, t, r, n, i, o, a, s, u, l, y, h, p) {
      return function (_) {
        e(_);
        var A = _.form,
          I = {
            name: A.attr("data-name") || A.attr("name") || "Untitled Form",
            pageId: A.attr("data-wf-page-id") || "",
            elementId: A.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              A.html()
            ),
            trackingCookies: n(),
          };
        let x = A.attr("data-wf-flow");
        x && (I.wfFlow = x), i(_);
        var b = o(A, I.fields);
        if (b) return a(b);
        if (((I.fileUploads = s(A)), u(_), !l)) {
          y(_);
          return;
        }
        h.ajax({
          url: p,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (L) {
            L && L.code === 200 && (_.success = !0), y(_);
          })
          .fail(function () {
            y(_);
          });
      };
    }
  });
  var xE = f((oG, OE) => {
    "use strict";
    var Vn = Ge();
    Vn.define(
      "forms",
      (OE.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          l = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          h = window.alert,
          p = Vn.env(),
          _,
          A,
          I,
          x = /list-manage[1-9]?.com/i,
          b = t.debounce(function () {
            h(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              L(), !p && !_ && D();
            };
        function L() {
          (u = e("html").attr("data-wf-site")),
            (A = "https://webflow.com/api/v1/form/" + u),
            a &&
              A.indexOf("https://webflow.com") >= 0 &&
              (A = A.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (I = `${A}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(C);
        }
        function C(M, W) {
          var d = e(W),
            E = e.data(W, s);
          E || (E = e.data(W, s, { form: d })), N(E);
          var v = d.closest("div.w-form");
          (E.done = v.find("> .w-form-done")),
            (E.fail = v.find("> .w-form-fail")),
            (E.fileUploads = v.find(".w-file-upload")),
            E.fileUploads.each(function (z) {
              G(z, E);
            });
          var g =
            E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
          E.done.attr("aria-label") || E.form.attr("aria-label", g),
            E.done.attr("tabindex", "-1"),
            E.done.attr("role", "region"),
            E.done.attr("aria-label") ||
              E.done.attr("aria-label", g + " success"),
            E.fail.attr("tabindex", "-1"),
            E.fail.attr("role", "region"),
            E.fail.attr("aria-label") ||
              E.fail.attr("aria-label", g + " failure");
          var U = (E.action = d.attr("action"));
          if (
            ((E.handler = null),
            (E.redirect = d.attr("data-redirect")),
            x.test(U))
          ) {
            E.handler = w;
            return;
          }
          if (!U) {
            if (u) {
              E.handler = (() => {
                let z = wE().default;
                return z(N, o, Vn, Y, V, k, h, B, P, u, F, e, A);
              })();
              return;
            }
            b();
          }
        }
        function D() {
          (_ = !0),
            n.on("submit", s + " form", function (z) {
              var j = e.data(this, s);
              j.handler && ((j.evt = z), j.handler(j));
            });
          let M = ".w-checkbox-input",
            W = ".w-radio-input",
            d = "w--redirected-checked",
            E = "w--redirected-focus",
            v = "w--redirected-focus-visible",
            g = ":focus-visible, [data-wf-focus-visible]",
            U = [
              ["checkbox", M],
              ["radio", W],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + M + ")",
            (z) => {
              e(z.target).siblings(M).toggleClass(d);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (z) => {
              e(`input[name="${z.target.name}"]:not(${M})`).map((oe, ve) =>
                e(ve).siblings(W).removeClass(d)
              );
              let j = e(z.target);
              j.hasClass("w-radio-input") || j.siblings(W).addClass(d);
            }),
            U.forEach(([z, j]) => {
              n.on(
                "focus",
                s + ` form input[type="${z}"]:not(` + j + ")",
                (oe) => {
                  e(oe.target).siblings(j).addClass(E),
                    e(oe.target).filter(g).siblings(j).addClass(v);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${z}"]:not(` + j + ")",
                  (oe) => {
                    e(oe.target).siblings(j).removeClass(`${E} ${v}`);
                  }
                );
            });
        }
        function N(M) {
          var W = (M.btn = M.form.find(':input[type="submit"]'));
          (M.wait = M.btn.attr("data-wait") || null),
            (M.success = !1),
            W.prop("disabled", !1),
            M.label && W.val(M.label);
        }
        function P(M) {
          var W = M.btn,
            d = M.wait;
          W.prop("disabled", !0), d && ((M.label = W.val()), W.val(d));
        }
        function k(M, W) {
          var d = null;
          return (
            (W = W || {}),
            M.find(':input:not([type="submit"]):not([type="file"])').each(
              function (E, v) {
                var g = e(v),
                  U = g.attr("type"),
                  z =
                    g.attr("data-name") || g.attr("name") || "Field " + (E + 1);
                z = encodeURIComponent(z);
                var j = g.val();
                if (U === "checkbox") j = g.is(":checked");
                else if (U === "radio") {
                  if (W[z] === null || typeof W[z] == "string") return;
                  j =
                    M.find(
                      'input[name="' + g.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof j == "string" && (j = e.trim(j)),
                  (W[z] = j),
                  (d = d || Q(g, U, z, j));
              }
            ),
            d
          );
        }
        function B(M) {
          var W = {};
          return (
            M.find(':input[type="file"]').each(function (d, E) {
              var v = e(E),
                g = v.attr("data-name") || v.attr("name") || "File " + (d + 1),
                U = v.attr("data-value");
              typeof U == "string" && (U = e.trim(U)), (W[g] = U);
            }),
            W
          );
        }
        let H = { _mkto_trk: "marketo" };
        function Y() {
          return document.cookie.split("; ").reduce(function (W, d) {
            let E = d.split("="),
              v = E[0];
            if (v in H) {
              let g = H[v],
                U = E.slice(1).join("=");
              W[g] = U;
            }
            return W;
          }, {});
        }
        function Q(M, W, d, E) {
          var v = null;
          return (
            W === "password"
              ? (v = "Passwords cannot be submitted.")
              : M.attr("required")
              ? E
                ? l.test(M.attr("type")) &&
                  (y.test(E) ||
                    (v = "Please enter a valid email address for: " + d))
                : (v = "Please fill out the required field: " + d)
              : d === "g-recaptcha-response" &&
                !E &&
                (v = "Please confirm you\u2019re not a robot."),
            v
          );
        }
        function q(M) {
          V(M), F(M);
        }
        function w(M) {
          N(M);
          var W = M.form,
            d = {};
          if (/^https/.test(o.href) && !/^https/.test(M.action)) {
            W.attr("method", "post");
            return;
          }
          V(M);
          var E = k(W, d);
          if (E) return h(E);
          P(M);
          var v;
          t.each(d, function (j, oe) {
            l.test(oe) && (d.EMAIL = j),
              /^((full[ _-]?)?name)$/i.test(oe) && (v = j),
              /^(first[ _-]?name)$/i.test(oe) && (d.FNAME = j),
              /^(last[ _-]?name)$/i.test(oe) && (d.LNAME = j);
          }),
            v &&
              !d.FNAME &&
              ((v = v.split(" ")),
              (d.FNAME = v[0]),
              (d.LNAME = d.LNAME || v[1]));
          var g = M.action.replace("/post?", "/post-json?") + "&c=?",
            U = g.indexOf("u=") + 2;
          U = g.substring(U, g.indexOf("&", U));
          var z = g.indexOf("id=") + 3;
          (z = g.substring(z, g.indexOf("&", z))),
            (d["b_" + U + "_" + z] = ""),
            e
              .ajax({ url: g, data: d, dataType: "jsonp" })
              .done(function (j) {
                (M.success = j.result === "success" || /already/.test(j.msg)),
                  M.success || console.info("MailChimp error: " + j.msg),
                  F(M);
              })
              .fail(function () {
                F(M);
              });
        }
        function F(M) {
          var W = M.form,
            d = M.redirect,
            E = M.success;
          if (E && d) {
            Vn.location(d);
            return;
          }
          M.done.toggle(E),
            M.fail.toggle(!E),
            E ? M.done.focus() : M.fail.focus(),
            W.toggle(!E),
            N(M);
        }
        function V(M) {
          M.evt && M.evt.preventDefault(), (M.evt = null);
        }
        function G(M, W) {
          if (!W.fileUploads || !W.fileUploads[M]) return;
          var d,
            E = e(W.fileUploads[M]),
            v = E.find("> .w-file-upload-default"),
            g = E.find("> .w-file-upload-uploading"),
            U = E.find("> .w-file-upload-success"),
            z = E.find("> .w-file-upload-error"),
            j = v.find(".w-file-upload-input"),
            oe = v.find(".w-file-upload-label"),
            ve = oe.children(),
            ae = z.find(".w-file-upload-error-msg"),
            de = U.find(".w-file-upload-file"),
            Pe = U.find(".w-file-remove-link"),
            Ne = de.find(".w-file-upload-file-name"),
            We = ae.attr("data-w-size-error"),
            Ie = ae.attr("data-w-type-error"),
            tt = ae.attr("data-w-generic-error");
          if (
            (p ||
              oe.on("click keydown", function (T) {
                (T.type === "keydown" && T.which !== 13 && T.which !== 32) ||
                  (T.preventDefault(), j.click());
              }),
            oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Pe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            p)
          )
            j.on("click", function (T) {
              T.preventDefault();
            }),
              oe.on("click", function (T) {
                T.preventDefault();
              }),
              ve.on("click", function (T) {
                T.preventDefault();
              });
          else {
            Pe.on("click keydown", function (T) {
              if (T.type === "keydown") {
                if (T.which !== 13 && T.which !== 32) return;
                T.preventDefault();
              }
              j.removeAttr("data-value"),
                j.val(""),
                Ne.html(""),
                v.toggle(!0),
                U.toggle(!1),
                oe.focus();
            }),
              j.on("change", function (T) {
                (d = T.target && T.target.files && T.target.files[0]),
                  d &&
                    (v.toggle(!1),
                    z.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    Ne.text(d.name),
                    O() || P(W),
                    (W.fileUploads[M].uploading = !0),
                    Z(d, m));
              });
            var Tt = oe.outerHeight();
            j.height(Tt), j.width(1);
          }
          function c(T) {
            var R = T.responseJSON && T.responseJSON.msg,
              K = tt;
            typeof R == "string" && R.indexOf("InvalidFileTypeError") === 0
              ? (K = Ie)
              : typeof R == "string" &&
                R.indexOf("MaxFileSizeError") === 0 &&
                (K = We),
              ae.text(K),
              j.removeAttr("data-value"),
              j.val(""),
              g.toggle(!1),
              v.toggle(!0),
              z.toggle(!0),
              z.focus(),
              (W.fileUploads[M].uploading = !1),
              O() || N(W);
          }
          function m(T, R) {
            if (T) return c(T);
            var K = R.fileName,
              ee = R.postData,
              ce = R.fileId,
              X = R.s3Url;
            j.attr("data-value", ce), J(X, ee, d, K, S);
          }
          function S(T) {
            if (T) return c(T);
            g.toggle(!1),
              U.css("display", "inline-block"),
              U.focus(),
              (W.fileUploads[M].uploading = !1),
              O() || N(W);
          }
          function O() {
            var T = (W.fileUploads && W.fileUploads.toArray()) || [];
            return T.some(function (R) {
              return R.uploading;
            });
          }
        }
        function Z(M, W) {
          var d = new URLSearchParams({ name: M.name, size: M.size });
          e.ajax({ type: "GET", url: `${I}?${d}`, crossDomain: !0 })
            .done(function (E) {
              W(null, E);
            })
            .fail(function (E) {
              W(E);
            });
        }
        function J(M, W, d, E, v) {
          var g = new FormData();
          for (var U in W) g.append(U, W[U]);
          g.append("file", d, E),
            e
              .ajax({
                type: "POST",
                url: M,
                data: g,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                v(null);
              })
              .fail(function (z) {
                v(z);
              });
        }
        return r;
      })
    );
  });
  var LE = f((aG, CE) => {
    "use strict";
    var pt = Ge(),
      nM = $n(),
      et = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      RE =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    pt.define(
      "slider",
      (CE.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = pt.env(),
          u = ".w-slider",
          l = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          h = "w-slider-force-show",
          p = nM.triggers,
          _,
          A = !1;
        (r.ready = function () {
          (a = pt.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (A = !0), I(), (A = !1);
          }),
          (r.destroy = x);
        function I() {
          (o = i.find(u)), o.length && (o.each(C), !_ && (x(), b()));
        }
        function x() {
          pt.resize.off(L), pt.redraw.off(r.redraw);
        }
        function b() {
          pt.resize.on(L), pt.redraw.on(r.redraw);
        }
        function L() {
          o.filter(":visible").each(G);
        }
        function C(d, E) {
          var v = e(E),
            g = e.data(E, u);
          g ||
            (g = e.data(E, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: v,
              config: {},
            })),
            (g.mask = v.children(".w-slider-mask")),
            (g.left = v.children(".w-slider-arrow-left")),
            (g.right = v.children(".w-slider-arrow-right")),
            (g.nav = v.children(".w-slider-nav")),
            (g.slides = g.mask.children(".w-slide")),
            g.slides.each(p.reset),
            A && (g.maskWidth = 0),
            v.attr("role") === void 0 && v.attr("role", "region"),
            v.attr("aria-label") === void 0 && v.attr("aria-label", "carousel");
          var U = g.mask.attr("id");
          if (
            (U || ((U = "w-slider-mask-" + d), g.mask.attr("id", U)),
            !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(y).appendTo(g.mask)),
            g.left.attr("role", "button"),
            g.left.attr("tabindex", "0"),
            g.left.attr("aria-controls", U),
            g.left.attr("aria-label") === void 0 &&
              g.left.attr("aria-label", "previous slide"),
            g.right.attr("role", "button"),
            g.right.attr("tabindex", "0"),
            g.right.attr("aria-controls", U),
            g.right.attr("aria-label") === void 0 &&
              g.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            g.left.hide(), g.right.hide(), g.nav.hide(), (_ = !0);
            return;
          }
          g.el.off(u),
            g.left.off(u),
            g.right.off(u),
            g.nav.off(u),
            D(g),
            a
              ? (g.el.on("setting" + u, w(g)), q(g), (g.hasTimer = !1))
              : (g.el.on("swipe" + u, w(g)),
                g.left.on("click" + u, B(g)),
                g.right.on("click" + u, H(g)),
                g.left.on("keydown" + u, k(g, B)),
                g.right.on("keydown" + u, k(g, H)),
                g.nav.on("keydown" + u, "> div", w(g)),
                g.config.autoplay &&
                  !g.hasTimer &&
                  ((g.hasTimer = !0), (g.timerCount = 1), Q(g)),
                g.el.on("mouseenter" + u, P(g, !0, "mouse")),
                g.el.on("focusin" + u, P(g, !0, "keyboard")),
                g.el.on("mouseleave" + u, P(g, !1, "mouse")),
                g.el.on("focusout" + u, P(g, !1, "keyboard"))),
            g.nav.on("click" + u, "> div", w(g)),
            s ||
              g.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var z = v.filter(":hidden");
          z.addClass(h);
          var j = v.parents(":hidden");
          j.addClass(h), A || G(d, E), z.removeClass(h), j.removeClass(h);
        }
        function D(d) {
          var E = {};
          (E.crossOver = 0),
            (E.animation = d.el.attr("data-animation") || "slide"),
            E.animation === "outin" &&
              ((E.animation = "cross"), (E.crossOver = 0.5)),
            (E.easing = d.el.attr("data-easing") || "ease");
          var v = d.el.attr("data-duration");
          if (
            ((E.duration = v != null ? parseInt(v, 10) : 500),
            N(d.el.attr("data-infinite")) && (E.infinite = !0),
            N(d.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
            N(d.el.attr("data-hide-arrows"))
              ? (E.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            N(d.el.attr("data-autoplay")))
          ) {
            (E.autoplay = !0),
              (E.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (E.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var g = "mousedown" + u + " touchstart" + u;
            a ||
              d.el.off(g).one(g, function () {
                q(d);
              });
          }
          var U = d.right.width();
          (E.edge = U ? U + 40 : 100), (d.config = E);
        }
        function N(d) {
          return d === "1" || d === "true";
        }
        function P(d, E, v) {
          return function (g) {
            if (E) d.hasFocus[v] = E;
            else if (
              e.contains(d.el.get(0), g.relatedTarget) ||
              ((d.hasFocus[v] = E),
              (d.hasFocus.mouse && v === "keyboard") ||
                (d.hasFocus.keyboard && v === "mouse"))
            )
              return;
            E
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && q(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && Q(d));
          };
        }
        function k(d, E) {
          return function (v) {
            switch (v.keyCode) {
              case et.SPACE:
              case et.ENTER:
                return E(d)(), v.preventDefault(), v.stopPropagation();
            }
          };
        }
        function B(d) {
          return function () {
            V(d, { index: d.index - 1, vector: -1 });
          };
        }
        function H(d) {
          return function () {
            V(d, { index: d.index + 1, vector: 1 });
          };
        }
        function Y(d, E) {
          var v = null;
          E === d.slides.length && (I(), Z(d)),
            t.each(d.anchors, function (g, U) {
              e(g.els).each(function (z, j) {
                e(j).index() === E && (v = U);
              });
            }),
            v != null && V(d, { index: v, immediate: !0 });
        }
        function Q(d) {
          q(d);
          var E = d.config,
            v = E.timerMax;
          (v && d.timerCount++ > v) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || (H(d)(), Q(d));
            }, E.delay));
        }
        function q(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function w(d) {
          return function (E, v) {
            v = v || {};
            var g = d.config;
            if (a && E.type === "setting") {
              if (v.select === "prev") return B(d)();
              if (v.select === "next") return H(d)();
              if ((D(d), Z(d), v.select == null)) return;
              Y(d, v.select);
              return;
            }
            if (E.type === "swipe")
              return g.disableSwipe || pt.env("editor")
                ? void 0
                : v.direction === "left"
                ? H(d)()
                : v.direction === "right"
                ? B(d)()
                : void 0;
            if (d.nav.has(E.target).length) {
              var U = e(E.target).index();
              if (
                (E.type === "click" && V(d, { index: U }), E.type === "keydown")
              )
                switch (E.keyCode) {
                  case et.ENTER:
                  case et.SPACE: {
                    V(d, { index: U }), E.preventDefault();
                    break;
                  }
                  case et.ARROW_LEFT:
                  case et.ARROW_UP: {
                    F(d.nav, Math.max(U - 1, 0)), E.preventDefault();
                    break;
                  }
                  case et.ARROW_RIGHT:
                  case et.ARROW_DOWN: {
                    F(d.nav, Math.min(U + 1, d.pages)), E.preventDefault();
                    break;
                  }
                  case et.HOME: {
                    F(d.nav, 0), E.preventDefault();
                    break;
                  }
                  case et.END: {
                    F(d.nav, d.pages), E.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function F(d, E) {
          var v = d.children().eq(E).focus();
          d.children().not(v);
        }
        function V(d, E) {
          E = E || {};
          var v = d.config,
            g = d.anchors;
          d.previous = d.index;
          var U = E.index,
            z = {};
          U < 0
            ? ((U = g.length - 1),
              v.infinite &&
                ((z.x = -d.endX), (z.from = 0), (z.to = g[0].width)))
            : U >= g.length &&
              ((U = 0),
              v.infinite &&
                ((z.x = g[g.length - 1].width),
                (z.from = -g[g.length - 1].x),
                (z.to = z.from - z.x))),
            (d.index = U);
          var j = d.nav
            .children()
            .eq(U)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(j)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            v.hideArrows &&
              (d.index === g.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var oe = d.offsetX || 0,
            ve = (d.offsetX = -g[d.index].x),
            ae = { x: ve, opacity: 1, visibility: "" },
            de = e(g[d.index].els),
            Pe = e(g[d.previous] && g[d.previous].els),
            Ne = d.slides.not(de),
            We = v.animation,
            Ie = v.easing,
            tt = Math.round(v.duration),
            Tt = E.vector || (d.index > d.previous ? 1 : -1),
            c = "opacity " + tt + "ms " + Ie,
            m = "transform " + tt + "ms " + Ie;
          if (
            (de.find(RE).removeAttr("tabindex"),
            de.removeAttr("aria-hidden"),
            de.find("*").removeAttr("aria-hidden"),
            Ne.find(RE).attr("tabindex", "-1"),
            Ne.attr("aria-hidden", "true"),
            Ne.find("*").attr("aria-hidden", "true"),
            a || (de.each(p.intro), Ne.each(p.outro)),
            E.immediate && !A)
          ) {
            n(de).set(ae), T();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${U + 1} of ${g.length}.`),
            We === "cross")
          ) {
            var S = Math.round(tt - tt * v.crossOver),
              O = Math.round(tt - S);
            (c = "opacity " + S + "ms " + Ie),
              n(Pe).set({ visibility: "" }).add(c).start({ opacity: 0 }),
              n(de)
                .set({ visibility: "", x: ve, opacity: 0, zIndex: d.depth++ })
                .add(c)
                .wait(O)
                .then({ opacity: 1 })
                .then(T);
            return;
          }
          if (We === "fade") {
            n(Pe).set({ visibility: "" }).stop(),
              n(de)
                .set({ visibility: "", x: ve, opacity: 0, zIndex: d.depth++ })
                .add(c)
                .start({ opacity: 1 })
                .then(T);
            return;
          }
          if (We === "over") {
            (ae = { x: d.endX }),
              n(Pe).set({ visibility: "" }).stop(),
              n(de)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: ve + g[d.index].width * Tt,
                })
                .add(m)
                .start({ x: ve })
                .then(T);
            return;
          }
          v.infinite && z.x
            ? (n(d.slides.not(Pe))
                .set({ visibility: "", x: z.x })
                .add(m)
                .start({ x: ve }),
              n(Pe)
                .set({ visibility: "", x: z.from })
                .add(m)
                .start({ x: z.to }),
              (d.shifted = Pe))
            : (v.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: oe }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(m).start({ x: ve }));
          function T() {
            (de = e(g[d.index].els)),
              (Ne = d.slides.not(de)),
              We !== "slide" && (ae.visibility = "hidden"),
              n(Ne).set(ae);
          }
        }
        function G(d, E) {
          var v = e.data(E, u);
          if (v) {
            if (M(v)) return Z(v);
            a && W(v) && Z(v);
          }
        }
        function Z(d) {
          var E = 1,
            v = 0,
            g = 0,
            U = 0,
            z = d.maskWidth,
            j = z - d.config.edge;
          j < 0 && (j = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (ve, ae) {
              g - v > j &&
                (E++,
                (v += z),
                (d.anchors[E - 1] = { els: [], x: g, width: 0 })),
                (U = e(ae).outerWidth(!0)),
                (g += U),
                (d.anchors[E - 1].width += U),
                d.anchors[E - 1].els.push(ae);
              var de = ve + 1 + " of " + d.slides.length;
              e(ae).attr("aria-label", de), e(ae).attr("role", "group");
            }),
            (d.endX = g),
            a && (d.pages = null),
            d.nav.length && d.pages !== E && ((d.pages = E), J(d));
          var oe = d.index;
          oe >= E && (oe = E - 1), V(d, { immediate: !0, index: oe });
        }
        function J(d) {
          var E = [],
            v,
            g = d.el.attr("data-nav-spacing");
          g && (g = parseFloat(g) + "px");
          for (var U = 0, z = d.pages; U < z; U++)
            (v = e(l)),
              v
                .attr("aria-label", "Show slide " + (U + 1) + " of " + z)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && v.text(U + 1),
              g != null && v.css({ "margin-left": g, "margin-right": g }),
              E.push(v);
          d.nav.empty().append(E);
        }
        function M(d) {
          var E = d.mask.width();
          return d.maskWidth !== E ? ((d.maskWidth = E), !0) : !1;
        }
        function W(d) {
          var E = 0;
          return (
            d.slides.each(function (v, g) {
              E += e(g).outerWidth(!0);
            }),
            d.slidesWidth !== E ? ((d.slidesWidth = E), !0) : !1
          );
        }
        return r;
      })
    );
  });
  ma();
  Ia();
  ba();
  wa();
  $n();
  mE();
  IE();
  bE();
  SE();
  xE();
  LE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af38a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af38a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688525425,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68771",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68771",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688557827,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f33f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1699688705236,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68766",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68766",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688971271,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68766",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68766",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688971271,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68769",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68769",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688980276,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68769",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68769",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688980351,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d6876b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d6876b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688990919,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d6876b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d6876b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688990919,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d6876d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d6876d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688999581,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d6876d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d6876d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699688999581,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d6876f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d6876f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689016174,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d6876f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d6876f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689016243,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68771",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68771",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689025513,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68771",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68771",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689025514,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af38f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af38f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689149860,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af38f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af38f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689149861,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af391",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af391",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689158828,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af391",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af391",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689158828,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af393",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af393",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689167579,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af393",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af393",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689167649,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af395",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af395",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689175826,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af395",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af395",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689175902,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af397",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af397",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689185411,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af397",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af397",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689185412,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689199878,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689199879,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689260899,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689260968,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689269175,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689269175,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689279574,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af3b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689279642,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68771",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68771",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689993529,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c34b7526-453e-37ce-515c-f05bc5d68771",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c34b7526-453e-37ce-515c-f05bc5d68771",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699689993530,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af389",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af389",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699690192885,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af389",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af389",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699690192885,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f33f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699690858156,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca541",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca541",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699711570104,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca541",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca541",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699711570105,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca540",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca540",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713773546,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca540",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca540",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713773547,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca542",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca542",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713807916,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca542",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4ff6a28-6f57-6967-27cd-272e2a8ca542",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713807917,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713834001,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713834001,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713834001,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713834001,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c92",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c92",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713834001,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c92",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c714f4c-660c-6a32-55fd-deac6df92c92",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713834001,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50595",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50595",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713852786,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50595",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50595",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713852786,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50596",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50596",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713852786,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50596",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50596",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713852786,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50597",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50597",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713852786,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50597",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|11d14bad-2f86-c53c-ac7c-ba200fc50597",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713852786,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853351,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853351,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853351,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853351,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853351,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|968679d0-b403-62c8-8879-995aed848cb5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853351,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853558,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853558,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f86",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f86",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853558,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f86",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f86",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853558,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853558,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|6632e711-9cf0-22fd-cebb-252790129f87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699713853558,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699714070351,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699714070352,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699733308039,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699734363693,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|f4330951-ab32-82d9-6d57-776235c08ea6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699734363762,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|24a0ca94-deff-9001-878a-faf8d600cca8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|24a0ca94-deff-9001-878a-faf8d600cca8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699735227961,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|c9fd504a-1673-4e04-d4a4-44e795745719",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|c9fd504a-1673-4e04-d4a4-44e795745719",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699822273122,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5c1c6413-c5e1-a447-6f74-31ff0739fe2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5c1c6413-c5e1-a447-6f74-31ff0739fe2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699822867515,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-143",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699916271162,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699916271163,
    },
    "e-144": {
      id: "e-144",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|414bb620-93b6-df53-894e-a7be7a00c562",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|414bb620-93b6-df53-894e-a7be7a00c562",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699916444210,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|414bb620-93b6-df53-894e-a7be7a00c562",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|414bb620-93b6-df53-894e-a7be7a00c562",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699916444211,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-147",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699916644057,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|861f7971-6763-c7ad-bfa3-6ef2511970ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699916644059,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5ef2091e-522d-6b24-3ce3-8dbb7b19e27b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5ef2091e-522d-6b24-3ce3-8dbb7b19e27b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699918792378,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|5ef2091e-522d-6b24-3ce3-8dbb7b19e27b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|5ef2091e-522d-6b24-3ce3-8dbb7b19e27b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699918792379,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|fc25dab8-5164-56fa-3926-45985b669627",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|fc25dab8-5164-56fa-3926-45985b669627",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699918803655,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|fc25dab8-5164-56fa-3926-45985b669627",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|fc25dab8-5164-56fa-3926-45985b669627",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699918803656,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-155",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|d7c0506f-d371-6a49-1fc3-d8e807ccdc36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|d7c0506f-d371-6a49-1fc3-d8e807ccdc36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699919432212,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|d7c0506f-d371-6a49-1fc3-d8e807ccdc36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|d7c0506f-d371-6a49-1fc3-d8e807ccdc36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699919432214,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-157",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699920221428,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699920221430,
    },
    "e-158": {
      id: "e-158",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699920317435,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|91510ffc-5cfb-3753-de36-5cb4eb56da9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699920317436,
    },
    "e-162": {
      id: "e-162",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-165",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-171",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921122566,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921500054,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921500056,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921518536,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921518538,
    },
    "e-184": {
      id: "e-184",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921533843,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "51a48ec3-62c1-81b8-600e-dd2b1f89ef87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699921533845,
    },
    "e-194": {
      id: "e-194",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f366",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1699922284532,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-196",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|23afa6a7-ca42-23c5-a62b-c4a3656a55e7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|23afa6a7-ca42-23c5-a62b-c4a3656a55e7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699924996025,
    },
    "e-196": {
      id: "e-196",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-195",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|23afa6a7-ca42-23c5-a62b-c4a3656a55e7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|23afa6a7-ca42-23c5-a62b-c4a3656a55e7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699924996025,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-200",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|3d97b431-00c4-932c-d02b-92458a459f99",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|3d97b431-00c4-932c-d02b-92458a459f99",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699925028491,
    },
    "e-200": {
      id: "e-200",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-199",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|3d97b431-00c4-932c-d02b-92458a459f99",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|3d97b431-00c4-932c-d02b-92458a459f99",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699925028491,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af39d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af39d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699925037584,
    },
    "e-202": {
      id: "e-202",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af39d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af39d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699925037585,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-204",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|cf715512-97d6-d34d-54d0-52b241c045a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|cf715512-97d6-d34d-54d0-52b241c045a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699925264558,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-206",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|cf715512-97d6-d34d-54d0-52b241c045a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|cf715512-97d6-d34d-54d0-52b241c045a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699925264558,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f388",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1699926018407,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-209",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af387",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699942147708,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3d30b546-e732-2a89-c6bb-bc8d1a4af387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3d30b546-e732-2a89-c6bb-bc8d1a4af387",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699942147711,
    },
    "e-214": {
      id: "e-214",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f389",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1699993295498,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|c084d4d5-3ada-f760-518f-619769c4889a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|c084d4d5-3ada-f760-518f-619769c4889a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699997011990,
    },
    "e-216": {
      id: "e-216",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-215",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|c084d4d5-3ada-f760-518f-619769c4889a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|c084d4d5-3ada-f760-518f-619769c4889a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699997011994,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699997081086,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699997081086,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699997081086,
    },
    "e-220": {
      id: "e-220",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|5c3a336a-ee8a-374d-a509-bfafc4db56c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699997081086,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f37e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1699997935130,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-268": {
      id: "e-268",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-269",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-273",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-274": {
      id: "e-274",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-277",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-276",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbcf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-278": {
      id: "e-278",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-279",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-280": {
      id: "e-280",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-284": {
      id: "e-284",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-286": {
      id: "e-286",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-288": {
      id: "e-288",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-293",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-294": {
      id: "e-294",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-295",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-296": {
      id: "e-296",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-296",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-298": {
      id: "e-298",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-299",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-299": {
      id: "e-299",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-300": {
      id: "e-300",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-301",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-300",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-302": {
      id: "e-302",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-303",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|147ec68f-4fb9-cc59-21ac-9bd5f196fbec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000402901,
    },
    "e-304": {
      id: "e-304",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-305",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|b144e63b-8cc3-418e-8797-bff5737017e4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|b144e63b-8cc3-418e-8797-bff5737017e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700000792775,
    },
    "e-306": {
      id: "e-306",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-307",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|d89a5952-92d7-265c-f139-968092efa544",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|d89a5952-92d7-265c-f139-968092efa544",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700001668326,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|d89a5952-92d7-265c-f139-968092efa544",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|d89a5952-92d7-265c-f139-968092efa544",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700001668328,
    },
    "e-308": {
      id: "e-308",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-310": {
      id: "e-310",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-311",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-312": {
      id: "e-312",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-313",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba31",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba31",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba31",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba31",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-314": {
      id: "e-314",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-315",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-316": {
      id: "e-316",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-317",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-318": {
      id: "e-318",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-319",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-320": {
      id: "e-320",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-321",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-322": {
      id: "e-322",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-323",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba38",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-322",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba38",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-324": {
      id: "e-324",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-325",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba39",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba39",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-324",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba39",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba39",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-326": {
      id: "e-326",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-327",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-326",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-328": {
      id: "e-328",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-329",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-328",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-330": {
      id: "e-330",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-331",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-332": {
      id: "e-332",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-333",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-332",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-334": {
      id: "e-334",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-335",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-334",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-336": {
      id: "e-336",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-337",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba41",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-336",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba41",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-338": {
      id: "e-338",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-339",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-338",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-340": {
      id: "e-340",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-341",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-340",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-342": {
      id: "e-342",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-343",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-342",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-344": {
      id: "e-344",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-345",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-345": {
      id: "e-345",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-344",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|fac296b6-3911-a296-d5ac-7ea9f217ba52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003141837,
    },
    "e-346": {
      id: "e-346",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f39f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1700003207230,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-348",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|bee5088f-5341-48f5-142b-1466e3187e27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|bee5088f-5341-48f5-142b-1466e3187e27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700003256745,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-350",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|2f398ba4-9617-b6a7-dfc7-4bf8ebb71b18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|2f398ba4-9617-b6a7-dfc7-4bf8ebb71b18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004209361,
    },
    "e-350": {
      id: "e-350",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-349",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|2f398ba4-9617-b6a7-dfc7-4bf8ebb71b18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|2f398ba4-9617-b6a7-dfc7-4bf8ebb71b18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004209363,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-352",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|b16a8202-efc5-6fc5-7430-beb98f61af5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|b16a8202-efc5-6fc5-7430-beb98f61af5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004552520,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-354",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|b16a8202-efc5-6fc5-7430-beb98f61af5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|b16a8202-efc5-6fc5-7430-beb98f61af5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004552520,
    },
    "e-354": {
      id: "e-354",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-353",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|b16a8202-efc5-6fc5-7430-beb98f61af5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|b16a8202-efc5-6fc5-7430-beb98f61af5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004552520,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-358",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-358": {
      id: "e-358",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-357",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-360",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-360": {
      id: "e-360",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-359",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-362",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-362": {
      id: "e-362",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-361",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-364",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-364": {
      id: "e-364",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-363",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-366",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-366": {
      id: "e-366",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-365",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-368",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-368": {
      id: "e-368",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-367",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-370",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-370": {
      id: "e-370",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-369",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-372",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-372": {
      id: "e-372",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-371",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-374",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-374": {
      id: "e-374",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-373",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-376",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-376": {
      id: "e-376",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-375",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-378",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-378": {
      id: "e-378",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-377",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-380",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-380": {
      id: "e-380",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-379",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-382",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-382": {
      id: "e-382",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-381",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-384",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-384": {
      id: "e-384",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-383",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-385": {
      id: "e-385",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-386",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-386": {
      id: "e-386",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-385",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|01d676e7-9981-6575-316e-3be698c585c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700004992467,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-390",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|93cb736e-ea5c-b086-7a0d-0d7be0975f8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|93cb736e-ea5c-b086-7a0d-0d7be0975f8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700005071452,
    },
    "e-390": {
      id: "e-390",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-389",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|93cb736e-ea5c-b086-7a0d-0d7be0975f8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|93cb736e-ea5c-b086-7a0d-0d7be0975f8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700005071452,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f39d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1700005739596,
    },
    "e-392": {
      id: "e-392",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f39e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1700006116150,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-394",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700007683334,
    },
    "e-394": {
      id: "e-394",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-393",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700007683337,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-396",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700007977991,
    },
    "e-396": {
      id: "e-396",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-395",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|cc80a8a2-6ca4-55b4-de56-56ae3d40fc85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700007977994,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6557ba3526c502b6fcc5f37f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-3-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1700066399847,
    },
    "e-404": {
      id: "e-404",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-405",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700076936456,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-404",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700076936456,
    },
    "e-406": {
      id: "e-406",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-407",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700076936456,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-406",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37f|b5c37b5c-56fc-c321-d4a9-136e74670e80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700076936456,
    },
    "e-412": {
      id: "e-412",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-413",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-414": {
      id: "e-414",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-415",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba939",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba939",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-414",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba939",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba939",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-416": {
      id: "e-416",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-417",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-416",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-418": {
      id: "e-418",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-419",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba942",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba942",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-418",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba942",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba942",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-420": {
      id: "e-420",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-421",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-420",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba93e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-422": {
      id: "e-422",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-423",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba940",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba940",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-423": {
      id: "e-423",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-422",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba940",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba940",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-424": {
      id: "e-424",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-425",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-424",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-426": {
      id: "e-426",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-427",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-426",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c99a1923-a9da-acc6-01d0-46fa4b3ba944",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700108174011,
    },
    "e-444": {
      id: "e-444",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-445",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|27104b0b-b7a6-ae86-d566-4f8fb62d1eb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|27104b0b-b7a6-ae86-d566-4f8fb62d1eb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700151576339,
    },
    "e-445": {
      id: "e-445",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-444",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|27104b0b-b7a6-ae86-d566-4f8fb62d1eb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|27104b0b-b7a6-ae86-d566-4f8fb62d1eb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700151576339,
    },
    "e-446": {
      id: "e-446",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-447",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700152340734,
    },
    "e-447": {
      id: "e-447",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-446",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700152340734,
    },
    "e-448": {
      id: "e-448",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-449",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700152340734,
    },
    "e-449": {
      id: "e-449",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-448",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700152340734,
    },
    "e-450": {
      id: "e-450",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-451",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700152340734,
    },
    "e-451": {
      id: "e-451",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-450",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|b9fecf63-7f82-036f-3d9d-9a25096a14ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700152340734,
    },
    "e-452": {
      id: "e-452",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-453",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|3f33e9ef-bb08-eec9-07a5-15c4d8605b46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|3f33e9ef-bb08-eec9-07a5-15c4d8605b46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700155747662,
    },
    "e-454": {
      id: "e-454",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-455",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|3f33e9ef-bb08-eec9-07a5-15c4d8605b46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|3f33e9ef-bb08-eec9-07a5-15c4d8605b46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700155747662,
    },
    "e-456": {
      id: "e-456",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-457",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|ae90d3bd-a2ed-3c0b-69ed-ee2e56cccb4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|ae90d3bd-a2ed-3c0b-69ed-ee2e56cccb4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700229751794,
    },
    "e-457": {
      id: "e-457",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-456",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|ae90d3bd-a2ed-3c0b-69ed-ee2e56cccb4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|ae90d3bd-a2ed-3c0b-69ed-ee2e56cccb4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700229751794,
    },
    "e-471": {
      id: "e-471",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241050401,
    },
    "e-472": {
      id: "e-472",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241105874,
    },
    "e-473": {
      id: "e-473",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241124923,
    },
    "e-474": {
      id: "e-474",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241139297,
    },
    "e-475": {
      id: "e-475",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241163713,
    },
    "e-476": {
      id: "e-476",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241182690,
    },
    "e-477": {
      id: "e-477",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241196439,
    },
    "e-478": {
      id: "e-478",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700241209562,
    },
    "e-479": {
      id: "e-479",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-480",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700249145326,
    },
    "e-481": {
      id: "e-481",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-482",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64bb10e6-4fad-21ff-b559-68c095e60b97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64bb10e6-4fad-21ff-b559-68c095e60b97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700284675142,
    },
    "e-482": {
      id: "e-482",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-481",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64bb10e6-4fad-21ff-b559-68c095e60b97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64bb10e6-4fad-21ff-b559-68c095e60b97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700284675147,
    },
    "e-483": {
      id: "e-483",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-484",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39d|15c2732d-a603-4441-be59-eeac0b9939c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39d|15c2732d-a603-4441-be59-eeac0b9939c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287017559,
    },
    "e-484": {
      id: "e-484",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-483",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39d|15c2732d-a603-4441-be59-eeac0b9939c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39d|15c2732d-a603-4441-be59-eeac0b9939c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287017559,
    },
    "e-485": {
      id: "e-485",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-486",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39d|15c2732d-a603-4441-be59-eeac0b9939c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39d|15c2732d-a603-4441-be59-eeac0b9939c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287078240,
    },
    "e-487": {
      id: "e-487",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-488",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39e|56645b3d-8843-5e2b-c1e0-ed64ff2ffada",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39e|56645b3d-8843-5e2b-c1e0-ed64ff2ffada",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287784660,
    },
    "e-488": {
      id: "e-488",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-487",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39e|56645b3d-8843-5e2b-c1e0-ed64ff2ffada",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39e|56645b3d-8843-5e2b-c1e0-ed64ff2ffada",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287784660,
    },
    "e-489": {
      id: "e-489",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-490",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39e|56645b3d-8843-5e2b-c1e0-ed64ff2ffada",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39e|56645b3d-8843-5e2b-c1e0-ed64ff2ffada",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287784660,
    },
    "e-491": {
      id: "e-491",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-492",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|f16079a0-7df4-9025-6c2f-ed68ae4ea078",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|f16079a0-7df4-9025-6c2f-ed68ae4ea078",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287970112,
    },
    "e-493": {
      id: "e-493",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-494",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|f16079a0-7df4-9025-6c2f-ed68ae4ea078",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|f16079a0-7df4-9025-6c2f-ed68ae4ea078",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287970112,
    },
    "e-494": {
      id: "e-494",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-493",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f39f|f16079a0-7df4-9025-6c2f-ed68ae4ea078",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f39f|f16079a0-7df4-9025-6c2f-ed68ae4ea078",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287970112,
    },
    "e-495": {
      id: "e-495",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-496",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|39e33017-d38f-b0b7-b32e-ecdada1533c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|39e33017-d38f-b0b7-b32e-ecdada1533c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287975064,
    },
    "e-497": {
      id: "e-497",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-498",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|39e33017-d38f-b0b7-b32e-ecdada1533c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|39e33017-d38f-b0b7-b32e-ecdada1533c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287975064,
    },
    "e-498": {
      id: "e-498",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-497",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|39e33017-d38f-b0b7-b32e-ecdada1533c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|39e33017-d38f-b0b7-b32e-ecdada1533c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287975064,
    },
    "e-499": {
      id: "e-499",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-500",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|2a2fe7be-e66a-4b4f-c9ab-c176d4599e95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|2a2fe7be-e66a-4b4f-c9ab-c176d4599e95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287980330,
    },
    "e-501": {
      id: "e-501",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-502",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|2a2fe7be-e66a-4b4f-c9ab-c176d4599e95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|2a2fe7be-e66a-4b4f-c9ab-c176d4599e95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287980330,
    },
    "e-502": {
      id: "e-502",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-501",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f389|2a2fe7be-e66a-4b4f-c9ab-c176d4599e95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f389|2a2fe7be-e66a-4b4f-c9ab-c176d4599e95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287980330,
    },
    "e-503": {
      id: "e-503",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-504",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|f6d179b7-8df7-f855-1932-02933518ad84",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|f6d179b7-8df7-f855-1932-02933518ad84",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287986235,
    },
    "e-505": {
      id: "e-505",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-506",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|f6d179b7-8df7-f855-1932-02933518ad84",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|f6d179b7-8df7-f855-1932-02933518ad84",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287986235,
    },
    "e-506": {
      id: "e-506",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-505",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f388|f6d179b7-8df7-f855-1932-02933518ad84",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f388|f6d179b7-8df7-f855-1932-02933518ad84",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287986235,
    },
    "e-507": {
      id: "e-507",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-508",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|2e3f834e-2f0e-5372-5183-b00820ba8b43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|2e3f834e-2f0e-5372-5183-b00820ba8b43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287993075,
    },
    "e-509": {
      id: "e-509",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-510",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|2e3f834e-2f0e-5372-5183-b00820ba8b43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|2e3f834e-2f0e-5372-5183-b00820ba8b43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287993075,
    },
    "e-510": {
      id: "e-510",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-509",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|2e3f834e-2f0e-5372-5183-b00820ba8b43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|2e3f834e-2f0e-5372-5183-b00820ba8b43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287993075,
    },
    "e-511": {
      id: "e-511",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-512",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|ffd08d85-44e1-7106-2d04-03b3b8ab13b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|ffd08d85-44e1-7106-2d04-03b3b8ab13b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287999857,
    },
    "e-513": {
      id: "e-513",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-514",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|ffd08d85-44e1-7106-2d04-03b3b8ab13b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|ffd08d85-44e1-7106-2d04-03b3b8ab13b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287999857,
    },
    "e-514": {
      id: "e-514",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-513",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|ffd08d85-44e1-7106-2d04-03b3b8ab13b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|ffd08d85-44e1-7106-2d04-03b3b8ab13b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700287999857,
    },
    "e-515": {
      id: "e-515",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-516",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834ed7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834ed7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700288085006,
    },
    "e-517": {
      id: "e-517",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-518",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834ed7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834ed7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700288085006,
    },
    "e-551": {
      id: "e-551",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-552",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834eff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834eff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700288085006,
    },
    "e-552": {
      id: "e-552",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-551",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834eff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f|b950ca41-dcda-669e-6bc3-21a168834eff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700288085006,
    },
    "e-553": {
      id: "e-553",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-554",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887608",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887608",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700289095608,
    },
    "e-555": {
      id: "e-555",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-556",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887608",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887608",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700289095608,
    },
    "e-557": {
      id: "e-557",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-558",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887618",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887618",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700289095608,
    },
    "e-558": {
      id: "e-558",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-557",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887618",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f37e|e26d8d51-d278-93d6-dde5-336f3c887618",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700289095608,
    },
    "e-559": {
      id: "e-559",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-560",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b968092",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b968092",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700340535366,
    },
    "e-561": {
      id: "e-561",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-562",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700340535366,
    },
    "e-563": {
      id: "e-563",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-564",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700340535366,
    },
    "e-565": {
      id: "e-565",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-566",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700340535366,
    },
    "e-567": {
      id: "e-567",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-568",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f366|defbc749-8fa3-ed0b-3bf5-02419b9680c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1700340535366,
    },
    "e-569": {
      id: "e-569",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-36", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6557ba3526c502b6fcc5f33f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6557ba3526c502b6fcc5f33f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-36-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1700341216948,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "close-menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688528810,
    },
    "a-2": {
      id: "a-2",
      title: "open-menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699688528810,
    },
    "a-3": {
      id: "a-3",
      title: "Custom cursor",
      continuousParameterGroups: [
        {
          id: "a-3-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-3-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor-2",
                      selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                    },
                    xValue: -50,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-3-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor-2",
                      selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                    },
                    xValue: 50,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-3-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-3-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor-2",
                      selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-3-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor-2",
                      selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1699688708125,
    },
    "a-4": {
      id: "a-4",
      title: "cursor becomes smaller",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".cursor-2",
                  selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                },
                widthValue: 1.25,
                heightValue: 1.25,
                widthUnit: "rem",
                heightUnit: "rem",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688861314,
    },
    "a-5": {
      id: "a-5",
      title: "cursor becomes bigger",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".cursor-2",
                  selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                },
                widthValue: 2.5,
                heightValue: 2.5,
                widthUnit: "rem",
                heightUnit: "rem",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688861314,
    },
    "a-6": {
      id: "a-6",
      title: "hamburger-animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-2",
                  selectorGuids: ["4fc4111e-65c2-a2ce-8bea-fce9eab49934"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-1",
                  selectorGuids: ["18f4ef8b-49de-9929-9452-bbeb83b7f9be"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-1",
                  selectorGuids: ["dadb5602-a25b-861b-a212-6dcc8db3736a"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-2",
                  selectorGuids: ["846ec98c-316f-50da-b391-e999fdb03150"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699689997979,
    },
    "a-7": {
      id: "a-7",
      title: "hamburger-animation out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-2",
                  selectorGuids: ["4fc4111e-65c2-a2ce-8bea-fce9eab49934"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-1",
                  selectorGuids: ["18f4ef8b-49de-9929-9452-bbeb83b7f9be"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-1",
                  selectorGuids: ["dadb5602-a25b-861b-a212-6dcc8db3736a"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-2",
                  selectorGuids: ["846ec98c-316f-50da-b391-e999fdb03150"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699689997979,
    },
    "a-9": {
      id: "a-9",
      title: "cursor show",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "51411404-5a3b-8e91-f9b7-122054579425" },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699690861312,
    },
    "a-11": {
      id: "a-11",
      title: "page load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loading",
                  selectorGuids: ["4c613602-d1a4-03cc-3fee-06b2579f46a4"],
                },
                value: "flex",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|f50fa6b1-3078-7a1e-c5c7-1d21d91ad00f",
                },
                yValue: 8.375,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|f50fa6b1-3078-7a1e-c5c7-1d21d91ad00f",
                },
                xValue: 0.6,
                yValue: 0.6,
                locked: true,
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|3bab9250-2ac6-243b-9086-f8cd1549d4ea",
                },
                yValue: 9.75,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|416ea045-f399-0e65-fe1c-e0bcedcff411",
                },
                yValue: 10.75,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|f50fa6b1-3078-7a1e-c5c7-1d21d91ad00f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|f50fa6b1-3078-7a1e-c5c7-1d21d91ad00f",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [1, 0.001, 0.614, 0.498],
                duration: 900,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|f50fa6b1-3078-7a1e-c5c7-1d21d91ad00f",
                },
                yValue: -16.4375,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [1, 0.001, 0.614, 0.498],
                duration: 900,
                target: {
                  selector: ".loading",
                  selectorGuids: ["4c613602-d1a4-03cc-3fee-06b2579f46a4"],
                },
                yValue: -62.5,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 600,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|3bab9250-2ac6-243b-9086-f8cd1549d4ea",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 600,
                target: {
                  id: "6557ba3526c502b6fcc5f33f|416ea045-f399-0e65-fe1c-e0bcedcff411",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loading",
                  selectorGuids: ["4c613602-d1a4-03cc-3fee-06b2579f46a4"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699733310794,
    },
    "a-12": {
      id: "a-12",
      title: "hover-card",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".circle-gray",
                  selectorGuids: ["d9a1fa7c-c5d1-ea3b-f37a-3237b52c8f2e"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".html-embed-5",
                  selectorGuids: ["c410648e-f721-c3d0-bff6-b7bcaaaf7021"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699734318085,
    },
    "a-13": {
      id: "a-13",
      title: "hover-card out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".circle-gray",
                  selectorGuids: ["d9a1fa7c-c5d1-ea3b-f37a-3237b52c8f2e"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".html-embed-5",
                  selectorGuids: ["c410648e-f721-c3d0-bff6-b7bcaaaf7021"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699734318085,
    },
    "a-14": {
      id: "a-14",
      title: "logo animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 5000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blue-l",
                  selectorGuids: ["b50d4002-c2a4-3197-9bc5-45c9a287ff21"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".red-l",
                  selectorGuids: ["c8463646-3f3d-505a-1479-4bd7857f57d8"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".yellow-l",
                  selectorGuids: ["366aade5-cd8a-4eac-6cac-80f67efe56c6"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blue-l",
                  selectorGuids: ["b50d4002-c2a4-3197-9bc5-45c9a287ff21"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blue-l",
                  selectorGuids: ["b50d4002-c2a4-3197-9bc5-45c9a287ff21"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".red-l",
                  selectorGuids: ["c8463646-3f3d-505a-1479-4bd7857f57d8"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".red-l",
                  selectorGuids: ["c8463646-3f3d-505a-1479-4bd7857f57d8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".yellow-l",
                  selectorGuids: ["366aade5-cd8a-4eac-6cac-80f67efe56c6"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".yellow-l",
                  selectorGuids: ["366aade5-cd8a-4eac-6cac-80f67efe56c6"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699735230632,
    },
    "a-15": {
      id: "a-15",
      title: "Change text colors",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blue-light",
                  selectorGuids: ["918b480a-caec-c566-b67d-ef9a7b516241"],
                },
                globalSwatchId: "",
                rValue: 1,
                bValue: 255,
                gValue: 135,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blue-light",
                  selectorGuids: ["918b480a-caec-c566-b67d-ef9a7b516241"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".red-light",
                  selectorGuids: ["53349d9b-6f3c-af5f-d245-5b10ede43b78"],
                },
                globalSwatchId: "",
                rValue: 240,
                bValue: 85,
                gValue: 91,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".red-light",
                  selectorGuids: ["53349d9b-6f3c-af5f-d245-5b10ede43b78"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".yellow-light",
                  selectorGuids: ["bfd8af7c-62ea-ab47-0601-e05804c4fd5a"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 78,
                gValue: 203,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".yellow-light",
                  selectorGuids: ["bfd8af7c-62ea-ab47-0601-e05804c4fd5a"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699822277680,
    },
    "a-17": {
      id: "a-17",
      title: "article-hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".circle-gray-2",
                  selectorGuids: ["e9dc5737-c157-3b6b-258c-8bf29c1b2f46"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".html-embed-5",
                  selectorGuids: ["c410648e-f721-c3d0-bff6-b7bcaaaf7021"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699920224992,
    },
    "a-18": {
      id: "a-18",
      title: "article-hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".circle-gray-2",
                  selectorGuids: ["e9dc5737-c157-3b6b-258c-8bf29c1b2f46"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".html-embed-5",
                  selectorGuids: ["c410648e-f721-c3d0-bff6-b7bcaaaf7021"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699920224992,
    },
    "a-16": {
      id: "a-16",
      title: "reveal icons",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".blue-light-span.span-wrapper.span",
                  selectorGuids: [
                    "6fb4aac2-f3d7-46b4-9c81-4e5da8da3c06",
                    "e000b51d-9224-4902-9b4f-011ae9e01a1e",
                    "397bd4a2-9e7a-1bad-aa57-457f2a3d0029",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span-element.is-1.span",
                  selectorGuids: [
                    "389b763a-613e-c388-3ce4-a4975049cb80",
                    "5f33e72a-05e9-52db-e019-2614cd6074d3",
                    "1472b6a0-8eda-2689-607c-e31a4fca4096",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".red-light-span.span-wrapper.span",
                  selectorGuids: [
                    "6b8ccd3f-d5b0-20cc-c908-52920696b211",
                    "774da7b0-a2d1-e79b-519c-65ad36656ca9",
                    "dffbf9c9-e379-f989-f1f3-ce0cbc31bc52",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".yellow-light-span.span-wrapper.span",
                  selectorGuids: [
                    "21b31172-00ba-89b1-892f-a2612049e9ec",
                    "b4a6e899-1e75-9236-4fbd-52ef94b3ca9c",
                    "1749afd1-a5ca-6428-9d24-65aa5971bcd5",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span-element.is-2.span",
                  selectorGuids: [
                    "389b763a-613e-c388-3ce4-a4975049cb80",
                    "79a862af-c03f-a662-ee38-e9cea23c444b",
                    "855567c5-f61b-2029-4167-3fdefac77cb7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span-element.is-3.span",
                  selectorGuids: [
                    "389b763a-613e-c388-3ce4-a4975049cb80",
                    "b4de0c8f-cc0e-e385-214b-a4cc5081e2f7",
                    "ef72dc73-342f-b4ae-42f5-c8b4f1b090ea",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2000,
                target: {
                  selector: ".blue-light-span.span-wrapper.span",
                  selectorGuids: [
                    "6fb4aac2-f3d7-46b4-9c81-4e5da8da3c06",
                    "e000b51d-9224-4902-9b4f-011ae9e01a1e",
                    "397bd4a2-9e7a-1bad-aa57-457f2a3d0029",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "ease",
                duration: 2000,
                target: {
                  selector: ".red-light-span.span-wrapper.span",
                  selectorGuids: [
                    "6b8ccd3f-d5b0-20cc-c908-52920696b211",
                    "774da7b0-a2d1-e79b-519c-65ad36656ca9",
                    "dffbf9c9-e379-f989-f1f3-ce0cbc31bc52",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "ease",
                duration: 2000,
                target: {
                  selector: ".yellow-light-span.span-wrapper.span",
                  selectorGuids: [
                    "21b31172-00ba-89b1-892f-a2612049e9ec",
                    "b4a6e899-1e75-9236-4fbd-52ef94b3ca9c",
                    "1749afd1-a5ca-6428-9d24-65aa5971bcd5",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699833438187,
    },
    "a-19": {
      id: "a-19",
      title: "appear box",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "6557ba3526c502b6fcc5f37e|b144e63b-8cc3-418e-8797-bff5737017e4",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1400,
                target: {
                  useEventTarget: true,
                  id: "6557ba3526c502b6fcc5f37e|b144e63b-8cc3-418e-8797-bff5737017e4",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1700000795373,
    },
    "a-20": {
      id: "a-20",
      title: "latest-news",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".latest-btn",
                  selectorGuids: ["4efd05f4-eab6-2183-c0b0-a365fea1ec7a"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".latest-btn",
                  selectorGuids: ["4efd05f4-eab6-2183-c0b0-a365fea1ec7a"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1700007686253,
    },
    "a-21": {
      id: "a-21",
      title: "latest-news out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".latest-btn",
                  selectorGuids: ["4efd05f4-eab6-2183-c0b0-a365fea1ec7a"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".latest-btn",
                  selectorGuids: ["4efd05f4-eab6-2183-c0b0-a365fea1ec7a"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1700007686253,
    },
    "a-25": {
      id: "a-25",
      title: "open-menu 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".menu",
                  selectorGuids: ["05dd0e3e-2bf3-c6e9-7fd7-977d19c74e4b"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699688528810,
    },
    "a-26": {
      id: "a-26",
      title: "cursor becomes smaller 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".cursor-2",
                  selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                },
                widthValue: 1.25,
                heightValue: 1.25,
                widthUnit: "rem",
                heightUnit: "rem",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688861314,
    },
    "a-27": {
      id: "a-27",
      title: "cursor becomes bigger 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".cursor-2",
                  selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                },
                widthValue: 2.5,
                heightValue: 2.5,
                widthUnit: "rem",
                heightUnit: "rem",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688861314,
    },
    "a-28": {
      id: "a-28",
      title: "hamburger-animation 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-2",
                  selectorGuids: ["4fc4111e-65c2-a2ce-8bea-fce9eab49934"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-1",
                  selectorGuids: ["18f4ef8b-49de-9929-9452-bbeb83b7f9be"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-1",
                  selectorGuids: ["dadb5602-a25b-861b-a212-6dcc8db3736a"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-2",
                  selectorGuids: ["846ec98c-316f-50da-b391-e999fdb03150"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699689997979,
    },
    "a-29": {
      id: "a-29",
      title: "hamburger-animation out 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-2",
                  selectorGuids: ["4fc4111e-65c2-a2ce-8bea-fce9eab49934"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-1",
                  selectorGuids: ["18f4ef8b-49de-9929-9452-bbeb83b7f9be"],
                },
                widthValue: 30,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-3-1",
                  selectorGuids: ["dadb5602-a25b-861b-a212-6dcc8db3736a"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamb-line-2-2",
                  selectorGuids: ["846ec98c-316f-50da-b391-e999fdb03150"],
                },
                widthValue: 70,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699689997979,
    },
    "a-36": {
      id: "a-36",
      title: "Navbar color change",
      continuousParameterGroups: [
        {
          id: "a-36-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-36-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".navbar",
                      selectorGuids: ["a79fa02e-627c-7cc4-7801-5686590249e5"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-5",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".logo-wrapper",
                      selectorGuids: ["64ca728d-4845-3b84-a923-85e5cc2d34ed"],
                    },
                    filters: [
                      { type: "invert", filterId: "9cb5", value: 0, unit: "%" },
                    ],
                  },
                },
                {
                  id: "a-36-n-7",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".link",
                      selectorGuids: ["646bf696-2ec1-1c8e-a7df-dd8bdc52a8c4"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-12",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-3-1",
                      selectorGuids: ["dadb5602-a25b-861b-a212-6dcc8db3736a"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-13",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-3-2",
                      selectorGuids: ["4fc4111e-65c2-a2ce-8bea-fce9eab49934"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-14",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-2-1",
                      selectorGuids: ["18f4ef8b-49de-9929-9452-bbeb83b7f9be"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-15",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-2-2",
                      selectorGuids: ["846ec98c-316f-50da-b391-e999fdb03150"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-17",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-1.div-block-2",
                      selectorGuids: [
                        "ba0c63e8-623f-2b3a-0584-6714f24ebdc6",
                        "ba80fd8a-3b34-f272-7b34-7969e2e76105",
                      ],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 8,
              actionItems: [
                {
                  id: "a-36-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".navbar",
                      selectorGuids: ["a79fa02e-627c-7cc4-7801-5686590249e5"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-4",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".logo-wrapper",
                      selectorGuids: ["64ca728d-4845-3b84-a923-85e5cc2d34ed"],
                    },
                    filters: [
                      {
                        type: "invert",
                        filterId: "9cb5",
                        value: 100,
                        unit: "%",
                      },
                    ],
                  },
                },
                {
                  id: "a-36-n-6",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".link",
                      selectorGuids: ["646bf696-2ec1-1c8e-a7df-dd8bdc52a8c4"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-8",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-3-1",
                      selectorGuids: ["dadb5602-a25b-861b-a212-6dcc8db3736a"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-9",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-3-2",
                      selectorGuids: ["4fc4111e-65c2-a2ce-8bea-fce9eab49934"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-10",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-2-1",
                      selectorGuids: ["18f4ef8b-49de-9929-9452-bbeb83b7f9be"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-11",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-2-2",
                      selectorGuids: ["846ec98c-316f-50da-b391-e999fdb03150"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-36-n-16",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hamb-line-1.div-block-2",
                      selectorGuids: [
                        "ba0c63e8-623f-2b3a-0584-6714f24ebdc6",
                        "ba80fd8a-3b34-f272-7b34-7969e2e76105",
                      ],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1700240037956,
    },
    "a-43": {
      id: "a-43",
      title: "carousel",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".logo-carousel-wrap",
                  selectorGuids: ["21890930-f309-e971-0fca-df601ed72577"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".logo-carousel-wrap",
                  selectorGuids: ["21890930-f309-e971-0fca-df601ed72577"],
                },
                xValue: -50,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".logo-carousel-wrap",
                  selectorGuids: ["21890930-f309-e971-0fca-df601ed72577"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1700249148219,
    },
    "a-45": {
      id: "a-45",
      title: "cursor becomes smaller 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".cursor-2",
                  selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                },
                widthValue: 1.25,
                heightValue: 1.25,
                widthUnit: "rem",
                heightUnit: "rem",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688861314,
    },
    "a-46": {
      id: "a-46",
      title: "cursor becomes bigger 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".cursor-2",
                  selectorGuids: ["55c52041-91b0-03dd-ea0c-63fc93896e85"],
                },
                widthValue: 2.5,
                heightValue: 2.5,
                widthUnit: "rem",
                heightUnit: "rem",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699688861314,
    },
    "a-44": {
      id: "a-44",
      title: "close-cookies",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 450,
                target: {
                  selector: ".cookie",
                  selectorGuids: ["75b67a2f-32dd-1f70-27c1-733bcecd66fd"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-44-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".cookie",
                  selectorGuids: ["75b67a2f-32dd-1f70-27c1-733bcecd66fd"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1700285375344,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
