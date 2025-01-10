"use strict";

function AmazonAdvancedPayment() {
    var _ = this;

    function u(e) {
        return -1 != window.location.href.indexOf(e)
    }

    function m() {
        window.onAmazonLoginReady = function() {
            amazon.Login.logout(), document.cookie = "amazon_Login_accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        }
    }

    function p() {
        window.close(), $("#checkout_amazon_advanced_login_popup_wait_box").html('<div id="checkout_amazon_advanced_login_popup_wait_box_inner_info">  <span id="checkout_amazon_advanced_login_popup_wait_box_text"><b>Login erfolgreich!</b><br>   Sie sind jetzt mit Ihrem Amazon-Konto angemeldet. Schließen Sie dieses Fenster, um zum Shop zurückzukehren.</span></div>')
    }

    function l() {
        document.cookie = "amazon_advanced_login_redirect_information=" + _.redirect_url
    }

    function h() {
        amazon.Login.setClientId(_.client_id), amazon.Login.setUseCookie(!0), amazon.Login.setDomain("eu.account.amazon.com"), "live" != _.modus && amazon.Login.setSandboxMode(!0)
    }

    function f() {
        var e = decodeURIComponent((new RegExp("[?|&|#]access_token=([^&;]+?)(&|#|;|$)").exec(location.hash) || [, ""])[1].replace(/\+/g, "%20")) || null;
        return "string" == typeof e && e.match(/^Atza/) && (document.cookie = "amazon_Login_accessToken=" + e + ";secure"), e
    }

    function g(e) {
        $("#checkout_confirmation").append('<div id="checkout_confirmation_basket_wait_box">  <div id="checkout_confirmation_basket_wait_box_inner">    <img src="images/ajax-loader.gif" alt=""><br>Bitte warten  </div></div>'), $("#amazon_advanced_payment_error_box").html(""), $.ajax({
            type: "GET",
            url: "ajax/checkout_amazon_advanced_payment_handler.php",
            data: "shippingAddressChanged=1&amazon_id=" + e + "&cba_select_shipping=" + $("input[name=cba_select_shipping]:checked").val(),
            success: function(n) {
                n = $.parseJSON(n), $("#amazon_advanced_payment_error_box").append(n.showErrorMessage), $.ajax({
                    url: "ajax/checkout_product_basket.php",
                    type: "POST",
                    success: function(e) {
                        e = $.parseJSON(e), $("#amazon_advanced_payment_error_box").append(e.showErrorMessage), $("#checkout_confirmation_basket").html(e.showBasket), $("img[data-src]").unveil(), "" != $("#amazon_advanced_payment_error_box").html() || !1 === _.can_show_submit_button ? ($("#checkout_confirmation_submit").hide(), _.can_show_submit_button = !1) : !0 === _.can_show_submit_button ? $("#checkout_confirmation_submit").show() : "" === _.can_show_submit_button && ($("#checkout_confirmation_submit").hide(), _.can_show_submit_button = !0), $("#checkout_confirmation_basket_wait_box").remove(), 0 < $(".checkout_shipping_providers_wrapper").length && (e = {
                            post_code: n.post_code,
                            countries_iso_code_2: n.countries_iso_code_2
                        }, $.ajax({
                            url: "ajax/checkout_shipping_providers.php?call=loadShippingProvider",
                            type: "POST",
                            cache: !1,
                            data: e,
                            success: function(e) {
                                try {
                                    var n = JSON.parse(e);
                                    $(".checkout_shipping_providers_wrapper").html(n.shippingProviders)
                                } catch (e) {}
                            }
                        }))
                    }
                })
            }
        })
    }
    this.client_id = null, this.modus = "live", this.merchant_id = null, this.amazon_order_reference_id = null, this.open_window = null, this.session_payment = null, this.shop_url = null, this.redirect_url = null, this.can_show_submit_button = "", this.read_only = "false", this.run = function(e, n, o, a, t, i, c, r) {
        var s, d;
        _.client_id = e, _.modus = n, _.merchant_id = o, _.session_payment = a, _.shop_url = t, _.amazon_order_reference_id = c, _.read_only = r, u("checkout_amazon_advanced_login_popup.php") ? u("action=loginClose") ? (_.redirect_url = i, l(), p()) : u("action=loginReady") ? (f(), window.location = t + "checkout_amazon_advanced_login_popup.php?action=loginTokenIsSave") : u("action=payClose") ? (_.redirect_url = t + "checkout_amazon_advanced_payment.php", l(), e = f(), d = p, $.ajax({
            type: "GET",
            url: "ajax/checkout_amazon_advanced_payment_handler.php",
            data: "handleraction=setsession&access_token=" + e,
            success: function(e) {
                return d()
            }
        })) : u("action=login") && !u("action=loginTokenIsSave") ? window.onAmazonPaymentsReady = function() {
            h(), amazon.Login.authorize({
                scope: "profile postal_code payments:widget payments:shipping_address",
                popup: !1
            }, _.shop_url + "checkout_amazon_advanced_login_popup.php?action=loginReady")
        } : u("action=pay") ? window.onAmazonPaymentsReady = function() {
            h(), amazon.Login.authorize({
                scope: "payments:widget",
                popup: !1
            }, _.shop_url + "checkout_amazon_advanced_login_popup.php?action=payClose")
        } : u("action=addressImport") && (_.redirect_url = i, l(), window.onAmazonLoginReady = function() {
            h(), new OffAmazonPayments.Widgets.AddressBook({
                sellerId: _.merchant_id,
                onAddressSelect: function(e) {
                    $.ajax({
                        type: "GET",
                        url: "ajax/checkout_amazon_advanced_payment_handler.php",
                        data: "handleraction=setAddress&amazon_id=" + _.amazon_order_reference_id,
                        success: function(e) {}
                    })
                },
                onOrderReferenceCreate: function(e) {
                    _.amazon_order_reference_id = e.getAmazonOrderReferenceId(), $.ajax({
                        type: "GET",
                        url: "ajax/checkout_amazon_advanced_payment_handler.php",
                        data: "handleraction=setAddress&amazon_id=" + _.amazon_order_reference_id,
                        success: function(e) {}
                    })
                },
                design: {
                    designMode: "responsive"
                },
                onError: function(e) {
                    console.log(e.getErrorMessage())
                }
            }).bind("addressBookWidgetDiv")
        }) : u("logoff.php") ? m() : u("checkout_confirmation.php") && "amazon_advanced_payment" == _.session_payment && ($("#checkout_confirmation_submit").on("click", function(e) {
            return showAjaxLoader(e), OffAmazonPayments.initConfirmationFlow(_.merchant_id, _.amazon_order_reference_id, function(e) {
                var n;
                n = e, $.ajax({
                    url: "/ajax/amazon_advanced_payments_sca.php",
                    success: function() {
                        n.success()
                    },
                    error: function() {
                        n.error(), window.location.href = "/checkout_confirmation.php?return=true"
                    },
                    timeout: 5e3
                })
            }), !1
        }), s = "", 0 < $("#addressBookWidgetDiv").length && $("#checkout_confirmation_submit").hide(), window.onAmazonPaymentsReady = function() {
            h();
            var e = "Edit";
            "true" == _.read_only && (e = "Read"), (null != _.amazon_order_reference_id && "" !== _.amazon_order_reference_id ? new OffAmazonPayments.Widgets.AddressBook({
                sellerId: _.merchant_id,
                amazonOrderReferenceId: _.amazon_order_reference_id,
                displayMode: e,
                design: {
                    designMode: "responsive"
                },
                onAddressSelect: function(e) {
                    _.can_show_submit_button = "", s = "address", $("#walletWidgetDiv").show(), g(_.amazon_order_reference_id)
                },
                onError: function(e) {
                    console.log(e.getErrorMessage())
                }
            }) : new OffAmazonPayments.Widgets.AddressBook({
                sellerId: _.merchant_id,
                design: {
                    designMode: "responsive"
                },
                onOrderReferenceCreate: function(e) {
                    _.amazon_order_reference_id = e.getAmazonOrderReferenceId(), $.ajax({
                        type: "GET",
                        url: "ajax/checkout_amazon_advanced_payment_handler.php",
                        data: "handleraction=setsession&amazon_id=" + _.amazon_order_reference_id,
                        success: function(e) {}
                    })
                },
                onAddressSelect: function(e) {
                    _.can_show_submit_button = "", s = "address", $("#walletWidgetDiv").show(), g(_.amazon_order_reference_id)
                },
                onError: function(e) {
                    console.log(e.getErrorMessage())
                }
            })).bind("addressBookWidgetDiv"), new OffAmazonPayments.Widgets.Wallet({
                sellerId: _.merchant_id,
                design: {
                    designMode: "responsive"
                },
                onPaymentSelect: function(e) {
                    !0 === _.can_show_submit_button && "address" === s ? $("#checkout_confirmation_submit").show() : "" === _.can_show_submit_button && (_.can_show_submit_button = !0), "" == $("#amazon_advanced_payment_error_box").html() && !1 !== _.can_show_submit_button || $("#checkout_confirmation_submit").hide(), s = "pay"
                },
                onError: function(e) {
                    console.log(e.getErrorMessage())
                }
            }).bind("walletWidgetDiv")
        }), $('#logoff_link, a[href*="logoff.php"]').click(function() {
            m()
        }), (u("checkout_amazon_advanced_login_popup.php") || u("checkout_confirmation.php") && "amazon_advanced_payment" == _.session_payment || u("checkout_success.php")) && ("live" == _.modus ? $.getScript("https://static-eu.payments-amazon.com/OffAmazonPayments/de/lpa/js/Widgets.js") : $.getScript("https://static-eu.payments-amazon.com/OffAmazonPayments/de/sandbox/lpa/js/Widgets.js"))
    }, this.openLoginPopupWindow = function(e) {
        var n;
        document.cookie = "amazon_advanced_login_redirect_information=test; expires=Thu, 01 Jan 1970 00:00:00 GMT", _.open_window = window.open(e, "popupWindow", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=550,screenX=150,screenY=150,top=150,left=150"), n = setInterval(function() {
            var e;
            _.open_window.closed && (0 != (e = function(e) {
                var n = !1,
                    o = document.cookie;
                null != o && o.match(new RegExp(e + "=([^;]*)", "g")) && (n = RegExp.$1);
                return n
            }("amazon_advanced_login_redirect_information")) && "" != e && (window.location = decodeURIComponent(e)), clearInterval(n))
        }, 1e3)
    }
}
var amazon_advanced_payment_class = new AmazonAdvancedPayment;