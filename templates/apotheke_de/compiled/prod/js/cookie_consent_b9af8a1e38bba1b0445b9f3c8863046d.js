"use strict";
window.addEventListener("load", () => {
    setTimeout(() => {
        (async () => {
            const a = document.querySelector("#cookie-consent-script").getAttribute("data-uc-bundle");
            return new Promise(t => {
                var e = document.createElement("script");
                e.setAttribute("rel", "preconnect"), e.src = a, e.onload = e => {
                    t(!0)
                }, e.onerror = () => {
                    t(!1)
                }, document.body.appendChild(e)
            })
        })().then(() => {
            {
                const f = new UC_SDK.default("MujIcsgGJ"),
                    S = document.querySelector('[data-selector="consent_manager_banner"]'),
                    w = document.querySelector('[data-selector="consent_manager_modal"]'),
                    L = document.querySelector('[data-selector="accept_button"]'),
                    k = document.querySelector('[data-selector="manage_settings"]'),
                    E = document.querySelector('[data-selector="consent_manager_modal"]'),
                    q = document.querySelector('[data-selector="accept_save_button"]'),
                    $ = document.querySelector('[data-selector="consent_manager_category_modal"]'),
                    T = document.querySelector('[data-selector="consent_manager_settings_advanced"]'),
                    M = document.querySelector('[data-selector="consent_categories"]'),
                    C = document.querySelector('[data-selector="toggle_categories"]'),
                    x = document.querySelector('[data-selector="toggle_categories_label"]'),
                    H = document.querySelector('[data-selector="button_save_setting"]'),
                    I = document.querySelector('[data-selector="text_entrance"]'),
                    A = document.querySelector('[data-selector="headline_entrance"]'),
                    j = document.querySelector('[data-selector="privacy_settings_headline"]'),
                    D = document.querySelector('[data-selector="privacy_settings_description"]'),
                    U = document.querySelector('[data-selector="link_imprint"]'),
                    F = document.querySelector('[data-selector="link_privacy"]'),
                    O = document.getElementById("change_consent_view"),
                    P = document.querySelector('[data-selector="cm_advanced_sidebar"]'),
                    B = document.querySelector('[data-selector="cm_advanced_sidebar_wrapper"]'),
                    N = document.querySelector('[data-selector="cm_advanced_content"]'),
                    te = document.querySelector('[data-selector="show_sidebar"]'),
                    z = document.body,
                    ae = document.querySelector('[data-selector="open_cookie_consent"]'),
                    e = document.querySelector('[data-selector="open_UC"]');
                let v = !1;
                const ne = document.querySelectorAll('[data-button="button_close_modal"]'),
                    X = document.querySelector('[data-selector="language_switcher"]'),
                    G = document.querySelector('[data-selector="privacy_settings_body"]'),
                    K = document.querySelector('[data-selector="button_footer_categories"]'),
                    R = document.querySelector('[data-selector="button_footer_advanced"]'),
                    J = document.getElementById("consent-search-input"),
                    se = document.querySelector('[data-selector="search_advanced_consents"]'),
                    V = document.querySelector('[data-selector="consent_manager_settings_back_button"]'),
                    W = document.querySelector('[data-selector="consent_manager_settings_advanced_back_button"]'),
                    Q = document.querySelector('[data-selector="category-description"]');
                window.kias = window.kias || [];
                let h, y = [],
                    b = [],
                    _ = [];
                const Y = () => {
                        _ = h.map(e => e.services.map(e => ({
                            serviceId: e.id,
                            status: !1
                        }))).flat(1)
                    },
                    Z = () => {
                        document.dispatchEvent(new CustomEvent(ApoEvents.USERCENTRICS_CONSENT_STATUS_CHANGED, {
                            detail: {
                                services: y
                            }
                        }))
                    },
                    ee = () => {
                        var e = y.find(e => "w-cwb3XM" === e.id),
                            e = {
                                cmd: "setPageSettings",
                                pageType: window.kairion_page_type,
                                products: window.kairion_product_datasets,
                                tags: window.kairion_tags,
                                consent: e.consent.status
                            };
                        !0 === window.isMobile && Object.assign(e, {
                            mobileTagsOptions: {
                                mobile: "isMobile"
                            }
                        }), window.kias.push(e)
                    };
                e && e.addEventListener("click", () => {
                    document.getElementById("privacyConsentModal").setAttribute("style", "display:flex !important")
                }), f.init().then(() => {
                    var a = window.location.pathname;
                    "/datenschutz" === a || "/impressum" === a ? (S.style.pointerEvents = "none", S.classList.remove("background-dark")) : S.classList.add("background-dark"), f.getServicesFullInfo().then(e => {
                        e = e.find(e => "w-cwb3XM" === e.id), e = {
                            cmd: "setPageSettings",
                            pageType: window.kairion_page_type,
                            products: window.kairion_product_datasets,
                            tags: window.kairion_tags,
                            consent: e ? .consent ? .status || !1
                        };
                        !0 === window.isMobile && Object.assign(e, {
                            mobileTagsOptions: {
                                mobile: "isMobile"
                            }
                        }), window.kias.push(e), window.pageSlots && window.kias.push(window.pageSlots), window.kiasSetCartProducts && window.kias.push(window.kiasSetCartProducts), window.kiasCheckout && window.kias.push(window.kiasCheckout)
                    });
                    const c = () => f.getSettingsCore().language.selected;
                    O.checked = !1, C.checked = !1;
                    a = f.getSettingsCore().language.available;
                    h = f.getCategoriesBaseInfo();
                    const t = (e, t = !0) => {
                        var a = e && e.hasAttribute("data-selector") && "consent_manager_banner" === e.getAttribute("data-selector"),
                            n = e && e.hasAttribute("data-selector") && "consent_manager_settings_advanced" === e.getAttribute("data-selector");
                        e && (t ? (e.classList.add("show"), e.classList.contains("d-none") && e.classList.remove("d-none"), e.style.display = "flex", a || z.classList.add("overflow-hidden"), e.tabIndex = -1) : (e.classList.remove("show"), e.classList.add("d-none"), e.style.display = "none", !n && z.classList.contains("overflow-hidden") && document.body.classList.remove("overflow-hidden")))
                    };
                    if (1 < a.length) {
                        let e = document.createElement("div");
                        e.classList.add("dropdown", "hide"), e.innerHTML = `<span class="d-flex">${c()} <div data-selector="menu_toggler"></div></span>`, X.addEventListener("click", () => {
                            e.classList.toggle("hide")
                        });
                        var n = document.createElement("ul");
                        n.dataset.selector = "language_switcher_dropdown_wrapper";
                        let t = "";
                        a.forEach(e => {
                            t += `<li data-language="${e}">${e}</li>`
                        }), n.innerHTML = t;
                        a = n.querySelectorAll("li");
                        const m = e.querySelector("span");
                        a.forEach(e => e.addEventListener("click", e => {
                            const t = e.currentTarget.dataset.language;
                            f.changeLanguage(t).then(() => {
                                f.getSettingsCore(), h = f.getCategoriesBaseInfo(), i(), d(), l(), m.innerHTML = t + '<div data-selector="menu_toggler"></div>'
                            })
                        })), e.appendChild(n), X.appendChild(e)
                    }
                    f.getIsConsentRequired() ? t(S) : f.getServicesFullInfo().then(e => {
                        y = e, Z()
                    }), ne.forEach(e => {
                        e.addEventListener("click", () => {
                            t(S), t(w, !1)
                        })
                    }), L.addEventListener("click", () => f.acceptAllServices().then(() => {
                        f.getServicesFullInfo().then(e => {
                            y = e, Z(), ee()
                        }), t(S, !1), l()
                    })), k.addEventListener("click", () => {
                        t(S, !1), t(E), t($), v = !0
                    }), O.addEventListener("change", () => {
                        t(G, !O.checked), t(T, O.checked), Q.classList.toggle("d-flex"), Q.classList.toggle("d-none"), E.classList.toggle("large"), K.classList.toggle("hidden"), R.classList.toggle("hidden"), l()
                    }), H.addEventListener("click", () => {
                        document.querySelectorAll('[data-selector="categories"]:not([data-slug="essential"])').forEach(t => {
                            h.find(e => e.slug === t.dataset.slug) ? .services.forEach(e => {
                                b.push({
                                    serviceId: e.id,
                                    status: t.checked
                                })
                            })
                        }), (0 !== (b = [...new Map(b.map(e => [e.serviceId, e])).values()]).length ? f.updateServices(b) : f.updateServices(_)).then(() => {
                            w && t(w, !1)
                        }), f.getServicesFullInfo().then(e => {
                            y = e, Z(), ee(), l()
                        }), v = !1
                    }), q ? .addEventListener("click", () => {
                        w && (t(w, !1), l())
                    }), te.addEventListener("click", () => B.classList.toggle("d-none"));
                    ae ? .addEventListener("click", e => {
                        e.preventDefault(), Y(), t(w, !1), t(E, !1), t($, !1), t(T, !1), t($), t(w)
                    });
                    const o = (e, t = 10) => {
                            e = e.trim().split(" ");
                            return [e.slice(0, t).join(" ") + '<span data-selector="read_more_dots">...</span>', e.slice(t).join(" ")]
                        },
                        s = () => {
                            I.classList.add("expand");
                            var e = document.querySelector('[data-selector="consent_text"] button'),
                                t = document.querySelector('[data-selector="read_more_dots"]');
                            e && t && (t.style.display = "none", e.style.display = "none")
                        },
                        r = () => {
                            var e = document.createElement("button"),
                                t = (e.innerText = "Mehr", e.dataset.selector = "read_more", e.addEventListener("click", s), document.querySelector('[data-selector="read_more"]'));
                            t || I.children[0].parentNode.insertBefore(e, I.children[0].nextSibling)
                        },
                        i = () => {
                            var e, t, a = f.getSettingsLabels(),
                                n = f.getAriaLabels(),
                                s = f.getSettingsCore().language.selected;
                            "de" === s ? (V.innerHTML = "zurück", W.innerHTML = "zurück") : (V.innerHTML = "back", W.innerHTML = "back"), x.innerHTML = "de" === s ? "Alles auswählen" : "All categories", window.innerWidth < 576 ? (s = o(a.firstLayer.description.default, 16), (e = I.children[0]).innerHTML = s[0], r(), (t = document.createElement("span")).classList.add("d-none"), t.innerHTML = s[1], e.append(t)) : I.children[0].innerHTML = a.firstLayer.description.default, A.innerHTML = a.firstLayer.title, U.innerHTML = a.links.imprint.label, F.innerHTML = a.links.privacyPolicy.label, k.innerHTML = a.buttons.showSecondLayer, L.innerHTML = "de" === c() ? "Einverstanden" : "Agree", j.innerHTML = a.secondLayer.title, D.innerHTML = a.secondLayer.description, H.innerHTML = n.saveButton, q.innerHTML = a.buttons.save
                        },
                        d = () => f.getServicesFullInfo().then(e => {
                            C.checked = !1, y = e, h.sort((e, t) => e.label.localeCompare(t.label));
                            let n = "";
                            e = document.createElement("div");
                            h.forEach((e, t, a) => n += `
          <div>
                <div class="${t===a.length-1?"last":""} form-switch ps-spacing-0 d-flex">
                <input
                  type="checkbox"
                  id="${e.slug}"
                  data-selector="categories"
                  data-slug="${e.slug}"
                  ${"essential"===e.slug?"disabled checked":""}
                />
                <label for="${e.slug}"></label>
                <div class="d-flex flex-column">
                  <div class="d-flex justify-content-between">
                    <p data-selector="category_label">${e.label}</p>
                    <button data-selector="open_advanced" data-target="${e.slug}" data-goto="${e.slug}"></button>
                  </div>
                  <p class="footnote">${e.description}</p>
                </div>
              </div>
          </div>`), M.innerHTML = "", e.classList.add("d-flex", "flex-column", "consent-categories", "pt-spacing-24"), e.innerHTML = n, M.appendChild(e), document.querySelectorAll('[data-selector="open_advanced"]') ? .forEach(e => e.addEventListener("click", () => {
                                Q.classList.toggle("d-flex"), Q.classList.toggle("d-none"), t(G, !1), t(T), E.classList.toggle("large"), K.classList.toggle("hidden"), R.classList.remove("hidden"), l().then(() => {
                                    switch (e.getAttribute("data-target")) {
                                        case "marketing":
                                            g("#w-cwb3XM");
                                            break;
                                        case "essential":
                                            g("#H1Vl5NidjWX");
                                            break;
                                        case "functional":
                                            g("#S1krl5Eo_obm")
                                    }
                                }), O.checked = !0
                            }))
                        }).then(() => {
                            document.querySelectorAll('[data-selector="categories"]:not([data-slug="essential"])').forEach(t => t.addEventListener("change", () => {
                                v = !0, h.find(e => e.slug === t.dataset.slug) ? .services.forEach(e => {
                                    b.push({
                                        serviceId: e.id,
                                        status: t.checked
                                    })
                                }), b = [...new Map(b.map(e => [e.serviceId, e])).values()]
                            }))
                        }),
                        l = () => f.getServicesFullInfo().then(e => {
                            y = e, P.innerHTML = '<div class="h5 text-aco-blue">Marketing</div> <ul>' + e.filter(e => "marketing" === e.categorySlug).map(e => `<li><a href="#${e.id}">${e.name}</a></li>`).join("") + "</ul>", P.innerHTML += '<div class="h5 text-aco-blue">Essential</div> <ul>' + e.filter(e => "essential" === e.categorySlug).map(e => `<li><a href="#${e.id}">${e.name}</a></li>`).join("") + "</ul>", P.innerHTML += '<div class="h5 text-aco-blue">Functional</div> <ul>' + e.filter(e => "functional" === e.categorySlug).map(e => `<li><a href="#${e.id}">${e.name}</a></li>`).join("") + "</ul>", N.innerHTML = e.map(e => `<div data-hash="#${e.id}" class="mb-spacing-64 border-bottom border-aco-blue-disabled">
                  <div class="h3 text-capitalize pb-spacing-4">${e.categorySlug}</div>
                  <p>${"de"===c()?"Klicken Sie hier, um auf allen Domains des verarbeitenden Unternehmens zu widerrufen:":"Click here to revoke on all domains of the processing company:"}
                    <a href="${e.dataProtectionOfficer}"><b>${e.dataProtectionOfficer}</b></a>
                  </p>

                  <div class="form-switch advanced d-flex">
                    <input type="checkbox"
                            ${"essential"===e.categorySlug?"disabled":""}
                            ${e.consent.status?"checked":""}
                            value="${e.id}"
                            class="form-check-input"
                            name="${e.id}"
                            id="${e.id}"
                            data-selector="checkbox_service" />
                    <label for="${e.id}"></label>
                    <p data-selector="toggle_categories_label">${e.name}</p>
                  </div>
                  <p class="mb-spacing-24">${e.description}</p>
                  ${e.processingCompany.address?`<p class="mb-spacing-16"><b>${"de"===c()?"Verabeitene Unternehmen":"Processed Companies"}</b></p>
                        <p>${e.processingCompany&&e.processingCompany.name}</p>
                        <p class="mb-spacing-24">${e.processingCompany&&e.processingCompany.address}</p>`:""}
                  <p class="text-aco-light-blue mb-spacing-16">${"de"===c()?"Gespeicherte Informationen":"saved information"}</p>
                  <p class="pb-spacing-16">${e.technologiesUsed.map(e=>" "+e)}</p>
                  ${e.consent.history&&e.consent.history.map(e=>`<div class="d-flex w-100 justify-content-between mt-spacing-12">
                      ${e.status?`<div class="d-flex align-items-center"><div class="status-round-green status-round me-spacing-12"></div>
                <p class="small">${"de"===c()?"Ja":"yes"}</p></div>`:`<div class="d-flex align-items-center"><div class="status-round-red status-round me-spacing-12"></div>
                <p class="small">${"de"===c()?"Nein":"no"}</p></div>`}
                  <p class="small">${new Date(e.timestamp).toLocaleDateString("en-US")},${new Date(e.timestamp).toLocaleTimeString("de-DE")}</p></div>`).join("")}
                  </div>`).join("")
                        }).then(() => {
                            P.querySelectorAll("a").forEach(t => t.addEventListener("click", e => g(t, e))), N.querySelectorAll('input[data-selector="checkbox_service"]').forEach(e => e.addEventListener("click", () => p(e)))
                        }),
                        e = async () => f.getServicesFullInfo(),
                        u = e => {
                            e = 0 < J.value.length && e && e.filter(e => 0 <= e.name.toLowerCase().indexOf(J.value.toLowerCase()));
                            return 0 < e.length && "#" + e[0].id
                        },
                        g = (se.addEventListener("click", t => {
                            0 < J.value.length && e().then(e => {
                                u(e) && g(u(e), t)
                            })
                        }), J.addEventListener("keypress", t => {
                            "Enter" === t.key && 2 < t.target.value.length && e().then(e => {
                                u(e) && g(u(e), t)
                            })
                        }), (e, t = {}) => {
                            0 !== Object.keys(t).length && t.preventDefault();
                            t = e.hash || e, e = N.querySelector(`[data-hash="${t}"]`).offsetTop;
                            N.scrollTop = e - N.offsetTop
                        }),
                        p = t => {
                            v = !0, _ = y.map(e => ({
                                serviceId: e.id,
                                status: e.id === t.value ? !e.consent.status : e.consent.status
                            })), f.updateServices(_).then(() => {
                                f.getServicesFullInfo().then(e => {
                                    y = e
                                })
                            })
                        };
                    C.addEventListener("change", () => {
                        var e = document.querySelectorAll('[data-selector="categories"]:not([data-slug="essential"])');
                        v = !0, C.checked ? e.forEach(e => e.checked = !0) : e.forEach(e => e.checked = !1), b.length = 0, h.forEach(e => {
                            e.isEssential || e.services.forEach(e => {
                                b.push({
                                    serviceId: e.id,
                                    status: C.checked
                                })
                            })
                        })
                    }), i(), d(), Y()
                })
            }
        }).catch(() => {
            console.error("UC bundle not loaded, could not init UC SDK!")
        })
    }, 3e3)
});