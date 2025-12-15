import React, { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, PieChart, Pie, Legend, LineChart, Line, CartesianGrid } from "recharts";

type Country = "global" | "us";

const MerchantActivationDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("2025-11");
  const [selectedCountry, setSelectedCountry] = useState<Country>("global");
  const [drilldownStage, setDrilldownStage] = useState(null);
  const [errorCodeView, setErrorCodeView] = useState(null);
  const [failureReasonView, setFailureReasonView] = useState(null);
  const [loginPageUrlView, setLoginPageUrlView] = useState(null);
  const [showTrendView, setShowTrendView] = useState(false);
  const [selectedTrendMetrics, setSelectedTrendMetrics] = useState<string[]>([
    "gross_signups",
    "net_signups",
    "frauds",
    "kyc_completed",
    "activated",
    "attempted_receive",
    "platform_interaction",
  ]);

  const countryOptions = [
    { value: "global" as Country, label: "Global", flag: "🌍" },
    { value: "us" as Country, label: "United States", flag: "🇺🇸" },
  ];

  // Error codes data organized by month and country
  const errorCodesByMonth = useMemo(
    () => ({
      "2025-11": {
        global: {
          ec: [
            { counts: 9790, code: "#" },
            { counts: 2270, code: "CANNOT_PAY_SELF" },
            { counts: 873, code: "TRANSACTION_REFUSED" },
            { counts: 754, code: "Bad Request" },
            { counts: 638, code: "UNPROCESSABLE_CONTENT" },
            { counts: 528, code: "ADD_PAYMENT_CARD" },
            { counts: 495, code: "invalid_user" },
            { counts: 457, code: "invalid_grant" },
            { counts: 348, code: "0" },
            { counts: 338, code: "INVALID_RESOURCE_ID" },
            { counts: 316, code: "400" },
            { counts: 304, code: "1" },
            { counts: 291, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 267, code: "OK" },
            { counts: 255, code: "Unauthorized" },
            { counts: 152, code: "stepup_required" },
            { counts: 149, code: "PAYER_CANNOT_PAY" },
            { counts: 148, code: "COMPLIANCE_VIOLATION" },
            { counts: 136, code: "failed_to_load_script" },
            { counts: 116, code: "NO_SELECTED_OPTION" },
            { counts: 99, code: "UNPROCESSABLE_ENTITY" },
            { counts: 89, code: "risk_decline" },
            { counts: 87, code: "auth_error" },
            { counts: 81, code: "401" },
            { counts: 80, code: "2fa_required" },
            { counts: 60, code: "failed_to_load_link" },
            { counts: 58, code: "UNSUPPORTED_PAYEE_CURRENCY" },
            { counts: 52, code: "422" },
            { counts: 50, code: "INTERNAL_SERVER_ERROR" },
            { counts: 47, code: "UPDATE_PAYMENT_CARD" },
            { counts: 45, code: "PAYEE_ACCOUNT_NOT_VERIFIED" },
            { counts: 38, code: "PAYMENT_DENIED" },
            { counts: 36, code: "PAYEE_ACCOUNT_LOCKED_OR_CLOSED" },
            { counts: 31, code: "9107" },
            { counts: 30, code: "ISSUER_DECLINE" },
            { counts: 29, code: "NEED_CREDIT_CARD" },
            { counts: 26, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 24, code: "3197" },
            { counts: 23, code: "ORDER_NOT_APPROVED" },
            { counts: 23, code: "invalid_public_credential" },
            { counts: 22, code: "max_attempts_exceeded" },
            { counts: 21, code: "R_ERROR" },
            { counts: 19, code: "FI_CONFIRMATION_CONTINGENCY" },
            { counts: 14, code: "Error" },
            { counts: 13, code: "validation_failed" },
            { counts: 13, code: "RISK_DECLINED" },
            { counts: 13, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 12, code: "3DS Contingency" },
            { counts: 12, code: "UNAUTH_CC_RISK" },
            { counts: 10, code: "VALIDATION_ERROR" },
            { counts: 10, code: "GUEST_CARD_COUNTRY_MISMATCH" },
            { counts: 9, code: "EXTERNAL_DECLINE" },
            { counts: 9, code: "unconfirmed_phone" },
            { counts: 8, code: "DECLINED_INSTRUMENT" },
            { counts: 7, code: "N" },
            { counts: 7, code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR" },
            { counts: 7, code: "LOGIN" },
            { counts: 6, code: "PAYMENT_ALREADY_DONE" },
            { counts: 6, code: "GQLError" },
            { counts: 6, code: "missing_email" },
            { counts: 5, code: "NO_VALID_FUNDING_INSTRUMENT" },
            { counts: 5, code: "14990" },
            { counts: 5, code: "-1" },
            { counts: 4, code: "UNAUTHORIZED" },
            { counts: 4, code: "4003" },
            { counts: 4, code: "RECEIVER_RESTRICTED" },
            { counts: 4, code: "INVALID_PLAN" },
            { counts: 4, code: "14716" },
            { counts: 4, code: "PAYEE_NOT_ENABLED_FOR_CARD_PROCESSING" },
            { counts: 4, code: "INSUFFICIENT_FUNDS" },
            { counts: 4, code: "safe_required" },
            { counts: 4, code: "failed_to_fetch_next_action" },
            { counts: 4, code: "INVALID_ACCOUNT" },
            { counts: 3, code: "stepupRequired" },
            { counts: 3, code: "3015" },
            { counts: 3, code: "PAYEE_NOT_CONSENTED" },
            { counts: 3, code: "PAYER_ACCOUNT_RESTRICTED" },
            { counts: 3, code: "TypeError" },
            { counts: 3, code: "locked_user" },
            { counts: 3, code: "SHIPPING_ADDRESS_INVALID" },
            { counts: 2, code: "SELLER_RESTRICTION" },
            { counts: 2, code: "InitiationContingencyType:ADD_INSTRUMENT" },
            { counts: 2, code: "INSTRUMENT_DECLINED" },
            { counts: 2, code: "UNEXPECTED_400_FROM_paymentprocessorchserv_CONFLICT" },
            { counts: 2, code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY" },
            { counts: 2, code: "internal_error" },
            { counts: 2, code: "PAYER_ACCOUNT_LOCKED_OR_CLOSED" },
            { counts: 2, code: "RISK_DENIED" },
            { counts: 2, code: "RISK_DISALLOWED" },
            { counts: 2, code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null" },
            { counts: 2, code: "DEPENDENT_SERVICE_ERROR" },
            { counts: 2, code: "HIGH_FRAUD" },
            { counts: 1, code: "VERIFY_USER_IDENTITY" },
            { counts: 1, code: "500" },
            { counts: 1, code: "missing_password" },
            { counts: 1, code: "DECLINED_PAYMENT_DENIED" },
            { counts: 1, code: "PAYER_ACTION_REQUIRED" },
            { counts: 1, code: "INSTANT_PAYMENT_IN_PENDING_STATE" },
            { counts: 1, code: "ACTION_DOES_NOT_MATCH_INTENT" },
            { counts: 1, code: "INVALID_REQUEST" },
            { counts: 1, code: "CC_AUTHORIZATION_DECLINED" },
            { counts: 1, code: "GENERIC_DECLINE" },
            { counts: 1, code: "invalid_nonce" },
            { counts: 1, code: "remember_me_expired" },
            { counts: 1, code: "1006" },
            { counts: 1, code: "1005" },
            { counts: 1, code: "2003" },
            { counts: 1, code: "no_retry_failed_to_fetch_next_resource" },
            { counts: 1, code: "99998" },
            { counts: 1, code: "no_retry_failed_to_fetch_next_rsc" },
            { counts: 1, code: "invalid_email_format" },
            { counts: 1, code: "NEED_CREDIT_CARD_OR_BANK_ACCOUNT" },
            { counts: 1, code: "SENDING_LIMIT_EXCEEDED" },
            { counts: 1, code: "BUYER_RESTRICTION" },
            { counts: 1, code: "SUSPECTED_FRAUD" },
            { counts: 1, code: "HIGH_NSF_RISK" },
            { counts: 1, code: "NEED_BUSINESS_TAX_INFO_TO_PAY" },
            { counts: 1, code: "INTERNAL_ERROR" },
            { counts: 1, code: "invalid_request" },
            { counts: 1, code: "NO_ERROR_MESSAGE_AVAILABLE" },
            { counts: 1, code: "PHONE_CONFIRMATION_NOT_INITIATED" },
            { counts: 1, code: "CC_LINKED_TO_FULL_ACCOUNT" },
            { counts: 1, code: "OAS_ERROR_OAS_GENERIC_ERROR" },
            { counts: 1, code: "CREDIT_CARD_AUTH_FAILED" },
            { counts: 1, code: "EXPIRED_CREDIT_CARD" },
            { counts: 1, code: "INVALID_FUNDING_OPTION" },
            {
              counts: 1,
              code: "This resolver requires an auth state of either: LOGGEDIN, REMEMBERED, IDENTIFIED. The current auth state is: ANONYMOUS.",
            },
            { counts: 1, code: "11812" },
            { counts: 1, code: "PAYMENT_SOURCE_CANNOT_BE_USED" },
            { counts: 1, code: "BAD_REQUEST" },
          ],
          invoice: [
            { counts: 665, code: "#" },
            { counts: 161, code: "TRANSACTION_REFUSED" },
            { counts: 133, code: "UNPROCESSABLE_CONTENT" },
            { counts: 114, code: "CANNOT_PAY_SELF" },
            { counts: 101, code: "ADD_PAYMENT_CARD" },
            { counts: 62, code: "0" },
            { counts: 37, code: "Bad Request" },
            { counts: 34, code: "invalid_grant" },
            { counts: 31, code: "1" },
            { counts: 25, code: "Unauthorized" },
            { counts: 21, code: "OK" },
            { counts: 21, code: "invalid_user" },
            { counts: 20, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 17, code: "NO_SELECTED_OPTION" },
            { counts: 15, code: "INVALID_RESOURCE_ID" },
            { counts: 15, code: "NEED_CREDIT_CARD" },
            { counts: 14, code: "401" },
            { counts: 14, code: "failed_to_load_script" },
            { counts: 13, code: "PAYER_CANNOT_PAY" },
            { counts: 13, code: "COMPLIANCE_VIOLATION" },
            { counts: 12, code: "UNPROCESSABLE_ENTITY" },
            { counts: 11, code: "stepup_required" },
            { counts: 11, code: "400" },
            { counts: 9, code: "auth_error" },
            { counts: 7, code: "ISSUER_DECLINE" },
            { counts: 6, code: "RECEIVER_RESTRICTED" },
            { counts: 6, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 6, code: "INTERNAL_SERVER_ERROR" },
            { counts: 6, code: "RISK_DECLINED" },
            { counts: 5, code: "max_attempts_exceeded" },
            { counts: 5, code: "UNSUPPORTED_PAYEE_CURRENCY" },
            { counts: 4, code: "risk_decline" },
            { counts: 4, code: "INSUFFICIENT_FUNDS" },
            { counts: 4, code: "UNAUTH_CC_RISK" },
            { counts: 3, code: "failed_to_load_link" },
            { counts: 3, code: "invalid_public_credential" },
            { counts: 3, code: "UPDATE_PAYMENT_CARD" },
            { counts: 2, code: "ORDER_NOT_APPROVED" },
            { counts: 2, code: "PAYMENT_DENIED" },
            { counts: 2, code: "VALIDATION_ERROR" },
            { counts: 2, code: "UNAUTHORIZED" },
            { counts: 2, code: "R_ERROR" },
            { counts: 2, code: "422" },
            { counts: 1, code: "NO_VALID_FUNDING_INSTRUMENT" },
            { counts: 1, code: "stepupRequired" },
            { counts: 1, code: "EXTERNAL_DECLINE" },
            { counts: 1, code: "1006" },
            { counts: 1, code: "Error" },
            { counts: 1, code: "SUSPECTED_FRAUD" },
            { counts: 1, code: "INVALID_AMOUNT" },
            { counts: 1, code: "LOST_OR_STOLEN" },
            { counts: 1, code: "INVALID_MERCHANT" },
            { counts: 1, code: "GENERIC_DECLINE" },
            { counts: 1, code: "PICKUP_CARD_SPECIAL_CONDITIONS" },
            { counts: 1, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 1, code: "unconfirmed_phone" },
            { counts: 1, code: "missing_email" },
            { counts: 1, code: "BUYER_RESTRICTION" },
            { counts: 1, code: "NEED_DOMESTIC_SHIPPING_ADDRESS_TO_PAY" },
            { counts: 1, code: "OAS_ERROR_undefined" },
            { counts: 1, code: "N" },
            { counts: 1, code: "PHONE_CONFIRMATION_REQUIRED" },
            { counts: 1, code: "LOGIN" },
            { counts: 1, code: "CREDIT_CARD_AUTH_FAILED" },
            { counts: 1, code: "GUEST_CARD_COUNTRY_MISMATCH" },
            { counts: 1, code: "2fa_required" },
            { counts: 1, code: "BUYER_NOT_SET" },
            { counts: 1, code: "HIGH_FRAUD" },
            { counts: 1, code: "MERCHANDISE_RISK" },
          ],
        },
        us: {
          ec: [
            { counts: 1368, code: "#" },
            { counts: 498, code: "UNPROCESSABLE_CONTENT" },
            { counts: 205, code: "Bad Request" },
            { counts: 163, code: "TRANSACTION_REFUSED" },
            { counts: 125, code: "CANNOT_PAY_SELF" },
            { counts: 101, code: "ADD_PAYMENT_CARD" },
            { counts: 83, code: "failed_to_load_script" },
            { counts: 73, code: "auth_error" },
            { counts: 72, code: "Unauthorized" },
            { counts: 49, code: "0" },
            { counts: 47, code: "401" },
            { counts: 36, code: "invalid_user" },
            { counts: 33, code: "1" },
            { counts: 31, code: "INVALID_RESOURCE_ID" },
            { counts: 29, code: "OK" },
            { counts: 26, code: "invalid_grant" },
            { counts: 26, code: "failed_to_load_link" },
            { counts: 26, code: "9107" },
            { counts: 26, code: "PAYEE_ACCOUNT_NOT_VERIFIED" },
            { counts: 25, code: "INTERNAL_SERVER_ERROR" },
            { counts: 24, code: "risk_decline" },
            { counts: 18, code: "3197" },
            { counts: 17, code: "422" },
            { counts: 14, code: "stepup_required" },
            { counts: 12, code: "400" },
            { counts: 11, code: "2fa_required" },
            { counts: 10, code: "UNAUTH_CC_RISK" },
            { counts: 9, code: "Error" },
            { counts: 9, code: "UNPROCESSABLE_ENTITY" },
            { counts: 8, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 8, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 8, code: "ISSUER_DECLINE" },
            { counts: 8, code: "NEED_CREDIT_CARD" },
            { counts: 7, code: "ORDER_NOT_APPROVED" },
            { counts: 6, code: "missing_email" },
            { counts: 6, code: "unconfirmed_phone" },
            { counts: 6, code: "PAYER_CANNOT_PAY" },
            { counts: 5, code: "DECLINED_INSTRUMENT" },
            { counts: 5, code: "RISK_DECLINED" },
            { counts: 5, code: "3DS Contingency" },
            { counts: 5, code: "INSUFFICIENT_FUNDS" },
            { counts: 5, code: "NO_SELECTED_OPTION" },
            { counts: 4, code: "UNAUTHORIZED" },
            { counts: 4, code: "R_ERROR" },
            { counts: 4, code: "INVALID_ACCOUNT" },
            { counts: 3, code: "PAYEE_NOT_CONSENTED" },
            { counts: 3, code: "VALIDATION_ERROR" },
            { counts: 3, code: "TypeError" },
            { counts: 3, code: "UPDATE_PAYMENT_CARD" },
            { counts: 3, code: "-1" },
            { counts: 2, code: "SELLER_RESTRICTION" },
            { counts: 2, code: "N" },
            { counts: 2, code: "PAYER_ACCOUNT_RESTRICTED" },
            { counts: 2, code: "PAYER_ACCOUNT_LOCKED_OR_CLOSED" },
            { counts: 2, code: "max_attempts_exceeded" },
            { counts: 2, code: "invalid_public_credential" },
            { counts: 2, code: "LOGIN" },
            { counts: 2, code: "HIGH_FRAUD" },
            { counts: 1, code: "NO_VALID_FUNDING_INSTRUMENT" },
            { counts: 1, code: "no_retry_failed_to_fetch_next_resource" },
            { counts: 1, code: "PAYMENT_ALREADY_DONE" },
            { counts: 1, code: "INSTANT_PAYMENT_IN_PENDING_STATE" },
            { counts: 1, code: "PAYEE_NOT_ENABLED_FOR_CARD_PROCESSING" },
            { counts: 1, code: "14716" },
            { counts: 1, code: "INVALID_OR_RESTRICTED_CARD" },
            { counts: 1, code: "GENERIC_DECLINE" },
            { counts: 1, code: "1005" },
            { counts: 1, code: "2003" },
            { counts: 1, code: "failed_to_fetch_next_action" },
            { counts: 1, code: "99998" },
            { counts: 1, code: "no_retry_failed_to_fetch_next_rsc" },
            { counts: 1, code: "locked_user" },
            { counts: 1, code: "SUSPECTED_FRAUD" },
            { counts: 1, code: "ACH_FRAUD_RISK" },
            { counts: 1, code: "BUYER_RESTRICTION" },
            { counts: 1, code: "HIGH_NSF_RISK" },
            { counts: 1, code: "EXTERNAL_DECLINE" },
            { counts: 1, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 1, code: "GUEST_CARD_COUNTRY_MISMATCH" },
            { counts: 1, code: "BAD_REQUEST" },
          ],
          invoice: [
            { counts: 367, code: "#" },
            { counts: 133, code: "UNPROCESSABLE_CONTENT" },
            { counts: 85, code: "TRANSACTION_REFUSED" },
            { counts: 49, code: "ADD_PAYMENT_CARD" },
            { counts: 26, code: "0" },
            { counts: 22, code: "Bad Request" },
            { counts: 21, code: "CANNOT_PAY_SELF" },
            { counts: 16, code: "failed_to_load_script" },
            { counts: 14, code: "401" },
            { counts: 14, code: "Unauthorized" },
            { counts: 11, code: "1" },
            { counts: 9, code: "auth_error" },
            { counts: 8, code: "invalid_user" },
            { counts: 6, code: "INTERNAL_SERVER_ERROR" },
            { counts: 6, code: "RISK_DECLINED" },
            { counts: 6, code: "NEED_CREDIT_CARD" },
            { counts: 5, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 5, code: "UNPROCESSABLE_ENTITY" },
            { counts: 5, code: "OK" },
            { counts: 4, code: "INSUFFICIENT_FUNDS" },
            { counts: 3, code: "ISSUER_DECLINE" },
            { counts: 3, code: "stepup_required" },
            { counts: 3, code: "UNAUTH_CC_RISK" },
            { counts: 2, code: "ORDER_NOT_APPROVED" },
            { counts: 2, code: "INVALID_RESOURCE_ID" },
            { counts: 2, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 2, code: "UNAUTHORIZED" },
            { counts: 2, code: "failed_to_load_link" },
            { counts: 1, code: "RECEIVER_RESTRICTED" },
            { counts: 1, code: "GENERIC_DECLINE" },
            { counts: 1, code: "Error" },
            { counts: 1, code: "PICKUP_CARD_SPECIAL_CONDITIONS" },
            { counts: 1, code: "INVALID_MERCHANT" },
            { counts: 1, code: "VALIDATION_ERROR" },
            { counts: 1, code: "SUSPECTED_FRAUD" },
            { counts: 1, code: "INVALID_AMOUNT" },
            { counts: 1, code: "LOST_OR_STOLEN" },
            { counts: 1, code: "missing_email" },
            { counts: 1, code: "unconfirmed_phone" },
            { counts: 1, code: "max_attempts_exceeded" },
            { counts: 1, code: "risk_decline" },
            { counts: 1, code: "BUYER_RESTRICTION" },
            { counts: 1, code: "invalid_grant" },
            { counts: 1, code: "UPDATE_PAYMENT_CARD" },
            { counts: 1, code: "PAYER_CANNOT_PAY" },
            { counts: 1, code: "GUEST_CARD_COUNTRY_MISMATCH" },
            { counts: 1, code: "LOGIN" },
            { counts: 1, code: "CREDIT_CARD_AUTH_FAILED" },
            { counts: 1, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 1, code: "BUYER_NOT_SET" },
            { counts: 1, code: "NO_SELECTED_OPTION" },
            { counts: 1, code: "422" },
            { counts: 1, code: "HIGH_FRAUD" },
            { counts: 1, code: "MERCHANDISE_RISK" },
          ],
        },
      },
      "2025-10": {
        global: {
          ec: [
            { counts: 9553, code: "#" },
            { counts: 2363, code: "CANNOT_PAY_SELF" },
            { counts: 828, code: "TRANSACTION_REFUSED" },
            { counts: 819, code: "Bad Request" },
            { counts: 534, code: "invalid_user" },
            { counts: 510, code: "invalid_grant" },
            { counts: 501, code: "UNPROCESSABLE_CONTENT" },
            { counts: 463, code: "ADD_PAYMENT_CARD" },
            { counts: 362, code: "0" },
            { counts: 360, code: "1" },
            { counts: 343, code: "400" },
            { counts: 303, code: "INVALID_RESOURCE_ID" },
            { counts: 274, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 177, code: "OK" },
            { counts: 160, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 147, code: "stepup_required" },
            { counts: 139, code: "COMPLIANCE_VIOLATION" },
            { counts: 123, code: "PAYER_CANNOT_PAY" },
            { counts: 122, code: "UNPROCESSABLE_ENTITY" },
            { counts: 115, code: "failed_to_load_script" },
            { counts: 111, code: "Unauthorized" },
            { counts: 108, code: "NO_SELECTED_OPTION" },
            { counts: 99, code: "risk_decline" },
            { counts: 90, code: "UNSUPPORTED_PAYEE_CURRENCY" },
            { counts: 80, code: "401" },
            { counts: 69, code: "auth_error" },
            { counts: 64, code: "2fa_required" },
            { counts: 64, code: "PAYEE_ACCOUNT_NOT_VERIFIED" },
            { counts: 47, code: "422" },
            { counts: 44, code: "PAYMENT_DENIED" },
            { counts: 41, code: "failed_to_load_link" },
            { counts: 39, code: "INTERNAL_SERVER_ERROR" },
            { counts: 31, code: "9107" },
            { counts: 31, code: "max_attempts_exceeded" },
            { counts: 30, code: "PAYEE_ACCOUNT_LOCKED_OR_CLOSED" },
            { counts: 29, code: "NEED_CREDIT_CARD" },
            { counts: 27, code: "UPDATE_PAYMENT_CARD" },
            { counts: 23, code: "3197" },
            { counts: 22, code: "RECEIVER_RESTRICTED" },
            { counts: 21, code: "ISSUER_DECLINE" },
            { counts: 19, code: "R_ERROR" },
            { counts: 18, code: "invalid_public_credential" },
            { counts: 18, code: "UNAUTH_CC_RISK" },
            { counts: 16, code: "VALIDATION_ERROR" },
            {
              counts: 16,
              code: "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
            },
            { counts: 15, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 14, code: "SELLER_RESTRICTION" },
            { counts: 14, code: "ORDER_NOT_APPROVED" },
            { counts: 13, code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR" },
            { counts: 11, code: "RISK_DECLINED" },
            { counts: 10, code: "GQLError" },
            { counts: 10, code: "-1" },
            { counts: 8, code: "missing_email" },
            { counts: 7, code: "NO_VALID_FUNDING_INSTRUMENT" },
            { counts: 7, code: "DECLINED_INSTRUMENT" },
            { counts: 7, code: "unconfirmed_phone" },
            { counts: 7, code: "N" },
            { counts: 6, code: "VERIFY_USER_IDENTITY" },
            { counts: 6, code: "500" },
            { counts: 6, code: "TypeError" },
            { counts: 6, code: "internal_error" },
            { counts: 6, code: "validation_failed" },
            { counts: 5, code: "3DS Contingency" },
            { counts: 5, code: "14990" },
            { counts: 5, code: "safe_required" },
            { counts: 5, code: "RISK_DISALLOWED" },
            { counts: 4, code: "stepupRequired" },
            { counts: 4, code: "Error" },
            { counts: 4, code: "PAYMENT_ALREADY_DONE" },
            { counts: 4, code: "FI_CONFIRMATION_CONTINGENCY" },
            { counts: 4, code: "HIGH_NSF_RISK" },
            { counts: 4, code: "SHIPPING_ADDRESS_INVALID" },
            { counts: 4, code: "OAS_ERROR_OAS_GENERIC_ERROR" },
            { counts: 3, code: "INVALID_PLAN" },
            { counts: 3, code: "3015" },
            { counts: 3, code: "PAYEE_NOT_ENABLED_FOR_CARD_PROCESSING" },
            { counts: 3, code: "CC_AUTHORIZATION_DECLINED" },
            { counts: 3, code: "failed_to_fetch_next_action" },
            { counts: 3, code: "failed_to_load_iframe" },
            { counts: 3, code: "UNKNOWN" },
            { counts: 3, code: "missing_password" },
            { counts: 3, code: "GUEST_CARD_COUNTRY_MISMATCH" },
            { counts: 3, code: "VALIDATION_FAILED" },
            { counts: 3, code: "UNAUTHORIZED" },
            { counts: 2, code: "4003" },
            { counts: 2, code: "INSTANT_PAYMENT_IN_PENDING_STATE" },
            { counts: 2, code: "INSUFFICIENT_FUNDS" },
            { counts: 2, code: "11812" },
            { counts: 2, code: "failed_to_load_img" },
            { counts: 2, code: "locked_user" },
            { counts: 2, code: "NEED_CREDIT_CARD_OR_BANK_ACCOUNT" },
            { counts: 2, code: "SENDING_LIMIT_EXCEEDED" },
            { counts: 2, code: "PAYER_INVALID_FOR_PAYMENT" },
            { counts: 2, code: "DEPENDENT_SERVICE_ERROR" },
            { counts: 1, code: "4002" },
            { counts: 1, code: "PAYEE_NOT_CONSENTED" },
            { counts: 1, code: "3506" },
            { counts: 1, code: "ACH_FRAUD_RISK" },
            { counts: 1, code: "ACCOUNT_CLOSED" },
            { counts: 1, code: "EXTERNAL_DECLINE" },
            { counts: 1, code: "INSTRUMENT_DEBIT_FAILED" },
            { counts: 1, code: "VALIDATION_ERROR_GENERIC" },
            { counts: 1, code: "invalid_nonce" },
            { counts: 1, code: "1006" },
            { counts: 1, code: "1008" },
            { counts: 1, code: "UNKNOWN_ERROR" },
            { counts: 1, code: "1005" },
            { counts: 1, code: "closed_user" },
            {
              counts: 1,
              code: "Converting circular structure to JSON --&gt; starting at object with constructor 'TLSSocket' ",
            },
            { counts: 1, code: "invalid_request" },
            { counts: 1, code: "no_retry_failed_to_fetch_next_resource" },
            { counts: 1, code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY" },
            { counts: 1, code: "99998" },
            { counts: 1, code: "TRANSACTION_RECEIVING_LIMIT_EXCEEDED" },
            { counts: 1, code: "INVALID_FUNDING_OPTION" },
            { counts: 1, code: "NEED_DOMESTIC_SHIPPING_ADDRESS_TO_PAY" },
            { counts: 1, code: "risk_challenge_validation_fail" },
            { counts: 1, code: "CC_LINKED_TO_FULL_ACCOUNT" },
            { counts: 1, code: "INITIATE_OTP_CONTINGENCY" },
            { counts: 1, code: "OAS_ERROR_" },
            {
              counts: 1,
              code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_com.paypal.platform.payments.core.provider.impl.UserDataLoadOrchestratorImpl_validateBuyer_430 null",
            },
            { counts: 1, code: "The requested resource ID was not found" },
            { counts: 1, code: "Y" },
            { counts: 1, code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null" },
            { counts: 1, code: "SUSPECTED_FRAUD" },
            { counts: 1, code: "CRYPTOGRAPHIC_FAILURE" },
            { counts: 1, code: "INVALID_ACCOUNT" },
            { counts: 1, code: "missing_email_or_phone" },
            { counts: 1, code: "invalid_email_format" },
            { counts: 1, code: "INTERNAL_ERROR" },
            { counts: 1, code: "RISK_DENIED" },
            { counts: 1, code: "EXPERIMENTATION_ERROR" },
            { counts: 1, code: "MERCHANDISE_RISK" },
            { counts: 1, code: "Internal Server Error" },
            {
              counts: 1,
              code: "INTERNAL_SERVICE_ERROR_com.paypal.checkout.seller.core.bridge.impl.BaseBridge_logAndthrowException_82 INTERNAL_SERVICE_ERROR",
            },
            { counts: 1, code: "failed_to_load_source" },
          ],
          invoice: [
            { counts: 622, code: "#" },
            { counts: 170, code: "TRANSACTION_REFUSED" },
            { counts: 121, code: "UNPROCESSABLE_CONTENT" },
            { counts: 108, code: "CANNOT_PAY_SELF" },
            { counts: 66, code: "ADD_PAYMENT_CARD" },
            { counts: 45, code: "0" },
            { counts: 43, code: "invalid_grant" },
            { counts: 36, code: "1" },
            { counts: 30, code: "Bad Request" },
            { counts: 28, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 24, code: "RECEIVER_RESTRICTED" },
            { counts: 21, code: "INVALID_RESOURCE_ID" },
            { counts: 19, code: "invalid_user" },
            { counts: 19, code: "NO_SELECTED_OPTION" },
            { counts: 18, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 18, code: "failed_to_load_script" },
            { counts: 16, code: "PAYER_CANNOT_PAY" },
            { counts: 14, code: "COMPLIANCE_VIOLATION" },
            { counts: 10, code: "UNPROCESSABLE_ENTITY" },
            { counts: 9, code: "401" },
            { counts: 8, code: "400" },
            { counts: 8, code: "auth_error" },
            { counts: 8, code: "OK" },
            { counts: 7, code: "NEED_CREDIT_CARD" },
            { counts: 6, code: "stepup_required" },
            { counts: 6, code: "UNSUPPORTED_PAYEE_CURRENCY" },
            { counts: 6, code: "R_ERROR" },
            { counts: 6, code: "Unauthorized" },
            { counts: 5, code: "ISSUER_DECLINE" },
            { counts: 5, code: "RISK_DECLINED" },
            { counts: 4, code: "risk_decline" },
            { counts: 4, code: "INTERNAL_SERVER_ERROR" },
            { counts: 3, code: "SELLER_RESTRICTION" },
            { counts: 3, code: "ORDER_NOT_APPROVED" },
            { counts: 2, code: "VALIDATION_ERROR" },
            { counts: 2, code: "PAYMENT_DENIED" },
            { counts: 2, code: "INSUFFICIENT_FUNDS" },
            { counts: 2, code: "max_attempts_exceeded" },
            { counts: 2, code: "UNAUTH_CC_RISK" },
            { counts: 2, code: "UPDATE_PAYMENT_CARD" },
            { counts: 2, code: "GUEST_CARD_COUNTRY_MISMATCH" },
            { counts: 2, code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR" },
            { counts: 2, code: "ACCOUNT_TAKE_OVER" },
            { counts: 1, code: "VERIFY_USER_IDENTITY" },
            { counts: 1, code: "PAYER_ACCOUNT_LOCKED_OR_CLOSED" },
            { counts: 1, code: "INVALID_MERCHANT" },
            { counts: 1, code: "invalid_nonce" },
            { counts: 1, code: "OTP_CONTEXT_ERROR" },
            { counts: 1, code: "invalid_public_credential" },
            { counts: 1, code: "N" },
            { counts: 1, code: "RISK_DISALLOWED" },
            { counts: 1, code: "OAS_ERROR_OAS_GENERIC_ERROR" },
            { counts: 1, code: "INVALID_OR_RESTRICTED_CARD" },
            { counts: 1, code: "GENERIC_DECLINE" },
            { counts: 1, code: "2fa_required" },
            { counts: 1, code: "failed_to_load_link" },
            { counts: 1, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 1, code: "UNKNOWN" },
            { counts: 1, code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null" },
          ],
        },
        us: {
          ec: [
            { counts: 1385, code: "#" },
            { counts: 421, code: "UNPROCESSABLE_CONTENT" },
            { counts: 208, code: "Bad Request" },
            { counts: 160, code: "TRANSACTION_REFUSED" },
            { counts: 151, code: "CANNOT_PAY_SELF" },
            { counts: 84, code: "ADD_PAYMENT_CARD" },
            { counts: 71, code: "failed_to_load_script" },
            { counts: 65, code: "auth_error" },
            { counts: 55, code: "401" },
            { counts: 54, code: "0" },
            { counts: 44, code: "PAYEE_ACCOUNT_NOT_VERIFIED" },
            { counts: 44, code: "1" },
            { counts: 39, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 35, code: "INVALID_RESOURCE_ID" },
            { counts: 34, code: "invalid_user" },
            { counts: 31, code: "risk_decline" },
            { counts: 28, code: "Unauthorized" },
            { counts: 27, code: "9107" },
            { counts: 25, code: "OK" },
            { counts: 25, code: "invalid_grant" },
            { counts: 23, code: "failed_to_load_link" },
            { counts: 21, code: "3197" },
            { counts: 20, code: "INTERNAL_SERVER_ERROR" },
            { counts: 19, code: "400" },
            { counts: 17, code: "stepup_required" },
            { counts: 14, code: "UNAUTH_CC_RISK" },
            { counts: 10, code: "SELLER_RESTRICTION" },
            { counts: 10, code: "422" },
            { counts: 10, code: "UNPROCESSABLE_ENTITY" },
            { counts: 9, code: "2fa_required" },
            { counts: 8, code: "-1" },
            { counts: 7, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 7, code: "ORDER_NOT_APPROVED" },
            { counts: 7, code: "DECLINED_INSTRUMENT" },
            { counts: 6, code: "TypeError" },
            { counts: 6, code: "PAYER_CANNOT_PAY" },
            { counts: 6, code: "missing_email" },
            { counts: 5, code: "RECEIVER_RESTRICTED" },
            { counts: 5, code: "unconfirmed_phone" },
            { counts: 5, code: "NEED_CREDIT_CARD" },
            { counts: 3, code: "PAYMENT_ALREADY_DONE" },
            { counts: 3, code: "Error" },
            { counts: 3, code: "failed_to_load_iframe" },
            { counts: 3, code: "RISK_DECLINED" },
            { counts: 3, code: "R_ERROR" },
            { counts: 3, code: "UNAUTHORIZED" },
            { counts: 2, code: "14990" },
            { counts: 2, code: "INSUFFICIENT_FUNDS" },
            { counts: 2, code: "ISSUER_DECLINE" },
            { counts: 2, code: "VALIDATION_ERROR" },
            {
              counts: 2,
              code: "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
            },
            { counts: 2, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 2, code: "invalid_public_credential" },
            { counts: 2, code: "max_attempts_exceeded" },
            { counts: 2, code: "NO_SELECTED_OPTION" },
            { counts: 1, code: "VERIFY_USER_IDENTITY" },
            { counts: 1, code: "INSTANT_PAYMENT_IN_PENDING_STATE" },
            { counts: 1, code: "4003" },
            { counts: 1, code: "3506" },
            { counts: 1, code: "3DS Contingency" },
            { counts: 1, code: "ACH_FRAUD_RISK" },
            { counts: 1, code: "CC_AUTHORIZATION_DECLINED" },
            { counts: 1, code: "1005" },
            { counts: 1, code: "1008" },
            { counts: 1, code: "UNKNOWN_ERROR" },
            { counts: 1, code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY" },
            { counts: 1, code: "failed_to_load_img" },
            { counts: 1, code: "99998" },
            { counts: 1, code: "no_retry_failed_to_fetch_next_resource" },
            { counts: 1, code: "locked_user" },
            { counts: 1, code: "missing_password" },
            { counts: 1, code: "HIGH_NSF_RISK" },
            { counts: 1, code: "UPDATE_PAYMENT_CARD" },
            { counts: 1, code: "SUSPECTED_FRAUD" },
            { counts: 1, code: "CRYPTOGRAPHIC_FAILURE" },
            { counts: 1, code: "INVALID_ACCOUNT" },
            { counts: 1, code: "missing_email_or_phone" },
            { counts: 1, code: "500" },
            { counts: 1, code: "invalid_email_format" },
            { counts: 1, code: "MERCHANDISE_RISK" },
            { counts: 1, code: "failed_to_load_source" },
          ],
          invoice: [
            { counts: 295, code: "#" },
            { counts: 121, code: "UNPROCESSABLE_CONTENT" },
            { counts: 97, code: "TRANSACTION_REFUSED" },
            { counts: 30, code: "ADD_PAYMENT_CARD" },
            { counts: 26, code: "Bad Request" },
            { counts: 18, code: "failed_to_load_script" },
            { counts: 17, code: "RECEIVER_RESTRICTED" },
            { counts: 15, code: "PAYEE_ACCOUNT_RESTRICTED" },
            { counts: 14, code: "0" },
            { counts: 12, code: "CANNOT_PAY_SELF" },
            { counts: 11, code: "1" },
            { counts: 9, code: "401" },
            { counts: 8, code: "auth_error" },
            { counts: 7, code: "invalid_user" },
            { counts: 6, code: "INVALID_RESOURCE_ID" },
            { counts: 5, code: "RISK_DECLINED" },
            { counts: 5, code: "PAYER_CANNOT_PAY" },
            { counts: 4, code: "stepup_required" },
            { counts: 4, code: "INTERNAL_SERVER_ERROR" },
            { counts: 3, code: "SELLER_RESTRICTION" },
            { counts: 3, code: "invalid_grant" },
            { counts: 3, code: "R_ERROR" },
            { counts: 3, code: "Unauthorized" },
            { counts: 2, code: "ORDER_NOT_APPROVED" },
            { counts: 2, code: "UNPROCESSABLE_ENTITY" },
            { counts: 2, code: "INSUFFICIENT_FUNDS" },
            { counts: 2, code: "400" },
            { counts: 2, code: "risk_decline" },
            { counts: 2, code: "UNAUTH_CC_RISK" },
            { counts: 2, code: "ACCOUNT_TAKE_OVER" },
            { counts: 1, code: "ISSUER_DECLINE" },
            { counts: 1, code: "VALIDATION_ERROR" },
            { counts: 1, code: "INVALID_MERCHANT" },
            { counts: 1, code: "invalid_nonce" },
            { counts: 1, code: "NEED_CREDIT_CARD" },
            { counts: 1, code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR" },
            { counts: 1, code: "OAS_ERROR_OAS_GENERIC_ERROR" },
            { counts: 1, code: "GENERIC_DECLINE" },
            { counts: 1, code: "INVALID_OR_RESTRICTED_CARD" },
            { counts: 1, code: "STEP_UP_AUTH_NEEDED" },
            { counts: 1, code: "failed_to_load_link" },
            { counts: 1, code: "ACCOUNT_ALREADY_EXISTS" },
            { counts: 1, code: "UNKNOWN" },
            { counts: 1, code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null" },
            { counts: 1, code: "OK" },
          ],
        },
      },
    }),
    [],
  );

  // Failure reasons data organized by month, country, and transaction type
  const failureReasonsByMonth = useMemo(
    () => ({
      "2025-11": {
        global: {
          ec: [
            {
              mth: "2025-11-01",
              cnt: 7126,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 3441, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 1881,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 860,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 619, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 561,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 360,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 314,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 277,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 270,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 224,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 220,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 218,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 205,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 203,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 200, last_intrnl_err_code: "#", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 186,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 169,
              last_intrnl_err_code: "#",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 165,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 163,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 147, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 144, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 138,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 130,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 128,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 127,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 103,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 101,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-11-01",
              cnt: 98,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 92,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 87,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 84,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 80,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 76,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 76,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 74,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 73,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 68,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 67,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 66,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 62,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 62,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 60,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 55,
              last_intrnl_err_code: "OK",
              failure_reason: "Post Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 51, last_intrnl_err_code: "OK", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 51,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 48,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 45,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 45,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 43,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 42, last_intrnl_err_code: "STEP_UP_AUTH_NEEDED", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 41,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Pimp Declined",
            },
            { mth: "2025-11-01", cnt: 40, last_intrnl_err_code: "#", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 39,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 38,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 36,
              last_intrnl_err_code: "PAYEE_ACCOUNT_LOCKED_OR_CLOSED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 36,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 35,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 32,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 32,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 32,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 31, last_intrnl_err_code: "9107", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 31, last_intrnl_err_code: "1", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 31,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 30,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 29,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 29, last_intrnl_err_code: "422", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 29,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 28,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 28,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 28,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 28,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 27, last_intrnl_err_code: "1", failure_reason: "Other Planning Errors" },
            { mth: "2025-11-01", cnt: 27, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 26, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 26,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            { mth: "2025-11-01", cnt: 25, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 25,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 24, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 24,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 24,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 23, last_intrnl_err_code: "#", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 23,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 23,
              last_intrnl_err_code: "0",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 23,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 23, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 22,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 22,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 21,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 21, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 21,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 21,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 20,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 20,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 20, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 20,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 19,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Post Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 19, last_intrnl_err_code: "400", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 19, last_intrnl_err_code: "3197", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 19,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-11-01", cnt: 18, last_intrnl_err_code: "0", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 18, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 18,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 18,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 18,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 18,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 17,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout with error",
            },
            { mth: "2025-11-01", cnt: 16, last_intrnl_err_code: "2fa_required", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 16, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 16, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 16,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 15, last_intrnl_err_code: "INVALID_RESOURCE_ID", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 15,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 15,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Process review fallout with error",
            },
            { mth: "2025-11-01", cnt: 15, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 15, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 14, last_intrnl_err_code: "#", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 14, last_intrnl_err_code: "invalid_user", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "400",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "400",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 13, last_intrnl_err_code: "Unauthorized", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 13, last_intrnl_err_code: "400", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 12,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 12,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-11-01", cnt: 11, last_intrnl_err_code: "422", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 10, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            { mth: "2025-11-01", cnt: 10, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            { mth: "2025-11-01", cnt: 10, last_intrnl_err_code: "400", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "3DS Contingency",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 9, last_intrnl_err_code: "1", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 8, last_intrnl_err_code: "#", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 8, last_intrnl_err_code: "DECLINED_INSTRUMENT", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "Error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 8, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 8, last_intrnl_err_code: "422", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "#",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "401", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "UNPROCESSABLE_ENTITY", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "ISSUER_DECLINE",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "LOGIN",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "OK",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "auth_error", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "PAYMENT_ALREADY_DONE", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "3DS Contingency", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "0", failure_reason: "Funding page dropoffs" },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "1",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "OK",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "0",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "1",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_PLAN",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "EXTERNAL_DECLINE",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "0", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "PAYEE_NOT_ENABLED_FOR_CARD_PROCESSING",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "0", failure_reason: "DoEC fallout without error" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "stepup_required", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "Bad Request", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "risk_decline", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "EXTERNAL_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_fetch_next_action",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "Bad Request", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "422",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "400", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "1", failure_reason: "Unknown" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "#", failure_reason: "Unknown" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepupRequired",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "OK", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "Unauthorized", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "Bad Request", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "401", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "4003", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "3015", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_NOT_CONSENTED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "400", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "401", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "auth_error", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "SHIPPING_ADDRESS_INVALID",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "N",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "GQLError",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "N",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_ACCOUNT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Risk Pimp Declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "422",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "OK",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "0",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "2fa_required", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "422", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "400", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "3197", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "GQLError", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "INSTRUMENT_DECLINED", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "14990", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "NO_SELECTED_OPTION", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "failed_to_load_script", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNEXPECTED_400_FROM_paymentprocessorchserv_CONFLICT",
              failure_reason: "Dones",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "UPDATE_PAYMENT_CARD", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "3197", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "UNAUTH_CC_RISK", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_ACCOUNT_RESTRICTED",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding page dropoffs",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "14990", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "CANNOT_PAY_SELF", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "safe_required",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_ACCOUNT_LOCKED_OR_CLOSED",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "safe_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "locked_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "14716", failure_reason: "NON risk payment decline" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "400",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "DEPENDENT_SERVICE_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "-1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "HIGH_FRAUD",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Risk Pimp Declined" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "auth_error", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "400", failure_reason: "Unknown" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "400",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "VERIFY_USER_IDENTITY",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "500",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "stepup_required", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "missing_password",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "invalid_user", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "9107", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "invalid_user", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "UNAUTHORIZED", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Unauthorized", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "DECLINED_PAYMENT_DENIED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_ACTION_REQUIRED",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "14716", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INSTANT_PAYMENT_IN_PENDING_STATE",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "14990", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYMENT_ALREADY_DONE",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "InitiationContingencyType:ADD_INSTRUMENT",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACTION_DOES_NOT_MATCH_INTENT",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "failed_to_load_link", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "COMPLIANCE_VIOLATION", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INTERNAL_SERVER_ERROR", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "max_attempts_exceeded", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "-1", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "RISK_DECLINED", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INVALID_REQUEST", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "14716", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "validation_failed", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "N", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "OK", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Funding page dropoffs",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "Funding page dropoffs",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CC_AUTHORIZATION_DECLINED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Unauthorized", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "risk_decline", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "invalid_user", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "GENERIC_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_nonce",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "remember_me_expired",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "1006",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "1005",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2003",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "internal_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "no_retry_failed_to_fetch_next_resource",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "99998",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "no_retry_failed_to_fetch_next_rsc",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "missing_password",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_email_format",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "3197", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD_OR_BANK_ACCOUNT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DENIED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_LOCKED_OR_CLOSED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DISALLOWED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "InitiationContingencyType:ADD_INSTRUMENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "SENDING_LIMIT_EXCEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "R_ERROR", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "BUYER_RESTRICTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "SUSPECTED_FRAUD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "HIGH_NSF_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "#", failure_reason: "NON risk payment decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "NON risk payment decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "NON risk payment decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "EXTERNAL_DECLINE",
              failure_reason: "NON risk payment decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_BUSINESS_TAX_INFO_TO_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_ACCOUNT_RESTRICTED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "locked_user", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "GQLError",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_ERROR",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DENIED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_ERROR_MESSAGE_AVAILABLE",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PHONE_CONFIRMATION_NOT_INITIATED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CC_LINKED_TO_FULL_ACCOUNT",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DISALLOWED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "OAS_ERROR_OAS_GENERIC_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CREDIT_CARD_AUTH_FAILED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "OK",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "EXPIRED_CREDIT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_FUNDING_OPTION",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code:
                "This resolver requires an auth state of either: LOGGEDIN, REMEMBERED, IDENTIFIED. The current auth state is: ANONYMOUS.",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "internal_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "11812",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "4003", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "LOGIN", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_ACCOUNT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYMENT_SOURCE_CANNOT_BE_USED",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "BAD_REQUEST", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "-1", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Unknown" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "-1",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "XO session fallout without error",
            },
          ],
          invoice: [
            {
              mth: "2025-11-01",
              cnt: 372,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 220, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 156,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 93,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 89,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 82,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 72,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 68, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 66, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 31,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 27,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 22,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 20,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            { mth: "2025-11-01", cnt: 18, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 17,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 15, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 14, last_intrnl_err_code: "#", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 13, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 12,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 9, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 8, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "#", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "CANNOT_PAY_SELF", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "400", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Other Planning Errors" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "422", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepupRequired",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "EXTERNAL_DECLINE", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "stepup_required", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Unauthorized", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "1006", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "SUSPECTED_FRAUD", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INVALID_AMOUNT", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "LOST_OR_STOLEN", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INVALID_MERCHANT", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "GENERIC_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PICKUP_CARD_SPECIAL_CONDITIONS",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "BUYER_RESTRICTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_DOMESTIC_SHIPPING_ADDRESS_TO_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "OK",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "OAS_ERROR_undefined",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "N",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PHONE_CONFIRMATION_REQUIRED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "LOGIN",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CREDIT_CARD_AUTH_FAILED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_DOMESTIC_SHIPPING_ADDRESS_TO_PAY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "BUYER_NOT_SET",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "HIGH_FRAUD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "MERCHANDISE_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "XO session fallout without error",
            },
          ],
        },
        us: {
          ec: [
            {
              mth: "2025-11-01",
              cnt: 865,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 434, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 275,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 163,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 143, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 133,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 132,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 80,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 78,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 78,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 76,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 55,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 46,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 42, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 38,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 37,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 30,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 27,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 26, last_intrnl_err_code: "9107", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 26, last_intrnl_err_code: "#", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 25,
              last_intrnl_err_code: "#",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 24,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 24, last_intrnl_err_code: "#", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 24,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 24,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 23,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 22,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 21,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 21,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 18,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 18,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 16,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 16,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 16, last_intrnl_err_code: "3197", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 15, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 14, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 13, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 12,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 12,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 12,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 11,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 10,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 9, last_intrnl_err_code: "422", failure_reason: "Other Planning Errors" },
            { mth: "2025-11-01", cnt: 9, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 9,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 7,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 7, last_intrnl_err_code: "Bad Request", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-11-01", cnt: 6, last_intrnl_err_code: "#", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 6, last_intrnl_err_code: "#", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 6, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "OK",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "auth_error", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "DECLINED_INSTRUMENT", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "422", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "#", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_NOT_CONSENTED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_ACCOUNT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "422", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "3DS Contingency",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout with error" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "invalid_user", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "UNAUTH_CC_RISK", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "3DS Contingency", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "3197", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_ACCOUNT_RESTRICTED",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_ACCOUNT_LOCKED_OR_CLOSED",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "0",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "LOGIN",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "-1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "HIGH_FRAUD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "auth_error", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "#", failure_reason: "Unknown" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "OK",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "2fa_required", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Agreement Created" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "OK", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "Agreement Created" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "UNAUTHORIZED", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "no_retry_failed_to_fetch_next_resource",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Unauthorized", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYMENT_ALREADY_DONE",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INSTANT_PAYMENT_IN_PENDING_STATE",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_NOT_ENABLED_FOR_CARD_PROCESSING",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "RISK_DECLINED", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "stepup_required", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "failed_to_load_link", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "N", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "14716", failure_reason: "Dones" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INVALID_OR_RESTRICTED_CARD", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "GENERIC_DECLINE", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "1005",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2003",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_fetch_next_action",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "99998",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "no_retry_failed_to_fetch_next_rsc",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "locked_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "SUSPECTED_FRAUD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "NON Model Rules Declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACH_FRAUD_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "BUYER_RESTRICTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "HIGH_NSF_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "EXTERNAL_DECLINE",
              failure_reason: "NON risk payment decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "NON risk payment decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ISSUER_DECLINE",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "N",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_ACCOUNT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "BAD_REQUEST", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "-1",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "XO session fallout without error",
            },
          ],
          invoice: [
            {
              mth: "2025-11-01",
              cnt: 172,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-11-01", cnt: 126, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-11-01",
              cnt: 83,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 83,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-11-01",
              cnt: 50,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 47, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 45, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 42,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 32,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 21,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 14,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 13,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-11-01", cnt: 12, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            { mth: "2025-11-01", cnt: 9, last_intrnl_err_code: "#", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 8,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 8, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 6,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-11-01", cnt: 5, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 4, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "#", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 3, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 3,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Auth Flow declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "failed_to_load_script", failure_reason: "Dones" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "GENERIC_DECLINE", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PICKUP_CARD_SPECIAL_CONDITIONS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INVALID_MERCHANT", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "SUSPECTED_FRAUD", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "CANNOT_PAY_SELF", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "INVALID_AMOUNT", failure_reason: "Issuer declined" },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "LOST_OR_STOLEN", failure_reason: "Issuer declined" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "BUYER_RESTRICTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "LOGIN",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "CREDIT_CARD_AUTH_FAILED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "BUYER_NOT_SET",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-11-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "HIGH_FRAUD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "MERCHANDISE_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-11-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Top of funnel dropoff",
            },
          ],
        },
      },
      "2025-10": {
        global: {
          ec: [
            {
              mth: "2025-10-01",
              cnt: 6878,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 3395, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 1978,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 815,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 635,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 610, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 359,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 275,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 259,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 256,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 231,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 226,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 212,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 212,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 201,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 188,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 174,
              last_intrnl_err_code: "#",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 153,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 146,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 137,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 135,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 128, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 122,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 121,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 111,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 108, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 104,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 99,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 98,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 96, last_intrnl_err_code: "#", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 91,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 80,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 75,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 75,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 74,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 72,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 70,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 66,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 64,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 62,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 60,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 58,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 58,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 55, last_intrnl_err_code: "#", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 49,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 48,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 48,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 46,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 45,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 43,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 41,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 39,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 38,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 38,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 36,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 35,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 33, last_intrnl_err_code: "1", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 32,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 32,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 32,
              last_intrnl_err_code: "OK",
              failure_reason: "Post Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 32, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-10-01", cnt: 31, last_intrnl_err_code: "9107", failure_reason: "DoEC fallout with error" },
            { mth: "2025-10-01", cnt: 31, last_intrnl_err_code: "422", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 30,
              last_intrnl_err_code: "PAYEE_ACCOUNT_LOCKED_OR_CLOSED",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 30, last_intrnl_err_code: "STEP_UP_AUTH_NEEDED", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 29,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 28, last_intrnl_err_code: "1", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 28,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 28,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 28,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 28,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 28,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 27, last_intrnl_err_code: "#", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 27,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 26,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 25,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 24,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 23, last_intrnl_err_code: "#", failure_reason: "Agreement Created" },
            { mth: "2025-10-01", cnt: 23, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 23,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 23, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            { mth: "2025-10-01", cnt: 23, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 22,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 22,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 22,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 22,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 21, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            { mth: "2025-10-01", cnt: 21, last_intrnl_err_code: "400", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 21,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 21, last_intrnl_err_code: "3197", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-10-01", cnt: 20, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 20, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 20,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 19,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 19,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 18, last_intrnl_err_code: "INVALID_RESOURCE_ID", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 18, last_intrnl_err_code: "OK", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 18,
              last_intrnl_err_code: "0",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 18,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 17,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 16, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 15, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 15, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 15, last_intrnl_err_code: "1", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "400",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 12, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 12, last_intrnl_err_code: "0", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "400",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "XO session fallout without error",
            },
            { mth: "2025-10-01", cnt: 11, last_intrnl_err_code: "#", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 11, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "#",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout with error",
            },
            { mth: "2025-10-01", cnt: 10, last_intrnl_err_code: "400", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 10, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 9, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "DECLINED_INSTRUMENT", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "400", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "N",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "422", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "422", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-10-01", cnt: 6, last_intrnl_err_code: "invalid_user", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 6, last_intrnl_err_code: "invalid_user", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 6, last_intrnl_err_code: "1", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "0",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 6, last_intrnl_err_code: "Bad Request", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "400", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "CANNOT_PAY_SELF", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "1",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "401",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "RISK_DISALLOWED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "#", failure_reason: "Unknown" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "VERIFY_USER_IDENTITY",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "401", failure_reason: "Agreement Created" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "PAYMENT_ALREADY_DONE",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "400", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "stepup_required", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "2fa_required", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "401", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "HIGH_NSF_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "SHIPPING_ADDRESS_INVALID",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "-1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "3DS Contingency",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "-1",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "stepupRequired",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_PLAN",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "3015", failure_reason: "DoEC fallout with error" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_NOT_ENABLED_FOR_CARD_PROCESSING",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "GQLError", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "risk_decline", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "Bad Request", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "Funding page dropoffs",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "CC_AUTHORIZATION_DECLINED",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_fetch_next_action",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "internal_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "missing_password",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "OK", failure_reason: "NON Model Rules Declined" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "14990", failure_reason: "NON risk payment decline" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "auth_error", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "GQLError",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "OAS_ERROR_OAS_GENERIC_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "GQLError",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "500",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "VERIFY_USER_IDENTITY",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "400", failure_reason: "Auth Flow declined" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "4003", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INSTANT_PAYMENT_IN_PENDING_STATE",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "failed_to_load_script", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding page dropoffs",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Funding page dropoffs" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "invalid_grant", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "safe_required",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "safe_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "locked_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "NO_VALID_FUNDING_INSTRUMENT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ISSUER_DECLINE",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "400",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "DEPENDENT_SERVICE_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "VALIDATION_FAILED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "OK",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "400",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "400", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "500", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Unknown" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Unknown" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "Unknown" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "OK",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OK",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "422",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "2fa_required", failure_reason: "Agreement Created" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Agreement Created",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Error", failure_reason: "Agreement Created" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Unauthorized", failure_reason: "Agreement Created" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Agreement Created" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "GQLError", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "4002", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_NOT_CONSENTED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ISSUER_DECLINE",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "-1", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "UNPROCESSABLE_ENTITY", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "INTERNAL_SERVER_ERROR", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "UNPROCESSABLE_CONTENT", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3506", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3197", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "ACH_FRAUD_RISK", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3DS Contingency", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "14990", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "PAYMENT_DENIED", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "invalid_user", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "ACCOUNT_CLOSED", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "EXTERNAL_DECLINE", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "14990", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSTRUMENT_DEBIT_FAILED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "PAYER_CANNOT_PAY", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR_GENERIC",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "internal_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_nonce",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1006",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1008",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNKNOWN_ERROR",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1005",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "-1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "11812",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "closed_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "Converting circular structure to JSON --&gt; starting at object with constructor 'TLSSocket' ",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_request",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "no_retry_failed_to_fetch_next_resource",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "99998",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_img",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_iframe",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNKNOWN",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "internal_error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD_OR_BANK_ACCOUNT",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_RECEIVING_LIMIT_EXCEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_FUNDING_OPTION",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3197", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_PLAN",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SENDING_LIMIT_EXCEEDED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "NON risk payment decline",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "#", failure_reason: "NON risk payment decline" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_INVALID_FOR_PAYMENT",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "safe_required",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_DOMESTIC_SHIPPING_ADDRESS_TO_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "500",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_challenge_validation_fail",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CC_LINKED_TO_FULL_ACCOUNT",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD_OR_BANK_ACCOUNT",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INITIATE_OTP_CONTINGENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OAS_ERROR_",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "422",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_com.paypal.platform.payments.core.provider.impl.UserDataLoadOrchestratorImpl_validateBuyer_430 null",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "The requested resource ID was not found",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "FI_CONFIRMATION_CONTINGENCY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "422",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Y",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SUSPECTED_FRAUD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CRYPTOGRAPHIC_FAILURE",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_ACCOUNT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_INVALID_FOR_PAYMENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "internal_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "11812",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "validation_failed",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "missing_email_or_phone",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_email_format",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "500", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_iframe",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "-1", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DENIED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNKNOWN",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepupRequired",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "EXPERIMENTATION_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OAS_ERROR_OAS_GENERIC_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_FAILED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "MERCHANDISE_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SENDING_LIMIT_EXCEEDED",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "Risk Pimp Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Pimp Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "invalid_grant", failure_reason: "Risk Pimp Declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Risk Pimp Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "Risk Pimp Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Risk Pimp Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Internal Server Error",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_img",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "-1", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.seller.core.bridge.impl.BaseBridge_logAndthrowException_82 INTERNAL_SERVICE_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "UNKNOWN", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_source",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_iframe",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "XO session fallout without error",
            },
          ],
          invoice: [
            {
              mth: "2025-10-01",
              cnt: 382,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 206, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 168,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 87,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 85,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 77,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 56, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            { mth: "2025-10-01", cnt: 55, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 54,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 34,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 26,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 24,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 16,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 13, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 9, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Pimp Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 8, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 6, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "400", failure_reason: "Other Planning Errors" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ACCOUNT_TAKE_OVER",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VERIFY_USER_IDENTITY",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_ACCOUNT_LOCKED_OR_CLOSED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "invalid_grant", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "INVALID_MERCHANT", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_nonce",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OTP_CONTEXT_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "OK", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "N",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DISALLOWED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYMENT_DENIED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OAS_ERROR_OAS_GENERIC_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNSUPPORTED_PAYEE_CURRENCY",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_OR_RESTRICTED_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "GENERIC_DECLINE",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "COMPLIANCE_VIOLATION",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "GUEST_CARD_COUNTRY_MISMATCH",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNKNOWN",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Unknown" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OK",
              failure_reason: "XO session fallout without error",
            },
          ],
        },
        us: {
          ec: [
            {
              mth: "2025-10-01",
              cnt: 884,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 418, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 237,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 155,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 136,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 136, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 133,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 90,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 65,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 59,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 49,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 46,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 46,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 42,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 39,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 38,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 29, last_intrnl_err_code: "#", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 29, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 28,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 27, last_intrnl_err_code: "9107", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 27,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 27,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            { mth: "2025-10-01", cnt: 25, last_intrnl_err_code: "#", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 25,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 23,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 21,
              last_intrnl_err_code: "#",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 20,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout with error",
            },
            { mth: "2025-10-01", cnt: 20, last_intrnl_err_code: "3197", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-10-01", cnt: 19, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 18,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 17,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 17,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 15,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 14,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 13,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 12,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "XO session fallout without error",
            },
            { mth: "2025-10-01", cnt: 11, last_intrnl_err_code: "#", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 10, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 10,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 10, last_intrnl_err_code: "OK", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "DECLINED_INSTRUMENT", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "missing_email",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 6, last_intrnl_err_code: "Bad Request", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "OK", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "0", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "0",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "422", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "OK",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "-1",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 4, last_intrnl_err_code: "422", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_ACCOUNT_NOT_VERIFIED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "PAYMENT_ALREADY_DONE",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "1", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "0",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "401",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "-1",
              failure_reason: "XO session fallout without error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "#", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "Bad Request", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "failed_to_load_script", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "OK", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_public_credential",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "max_attempts_exceeded",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "400",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Agreement Created" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "#", failure_reason: "Agreement Created" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Unauthorized", failure_reason: "Agreement Created" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Agreement Created",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VERIFY_USER_IDENTITY",
              failure_reason: "Auth Flow declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Auth Flow declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSTANT_PAYMENT_IN_PENDING_STATE",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "4003", failure_reason: "DoEC fallout with error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "DoEC fallout with error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "-1", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "DoEC fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "DoEC fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "DoEC fallout without error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "UNPROCESSABLE_CONTENT", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3197", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "stepup_required", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "2fa_required", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "risk_decline", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3506", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "3DS Contingency", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "ACH_FRAUD_RISK", failure_reason: "Dones" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "14990", failure_reason: "Dones" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Funding Instrument Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "ADD_PAYMENT_CARD", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "PAYER_CANNOT_PAY", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CC_AUTHORIZATION_DECLINED",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1005",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1008",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNKNOWN_ERROR",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_SHIPPING_OPTIONS_CONTINGENCY",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_img",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_iframe",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "99998",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "no_retry_failed_to_fetch_next_resource",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "locked_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "missing_password",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "HIGH_NSF_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "NON Model Rules Declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "NON Model Rules Declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "#", failure_reason: "NON risk payment decline" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "14990", failure_reason: "NON risk payment decline" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UPDATE_PAYMENT_CARD",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SUSPECTED_FRAUD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CRYPTOGRAPHIC_FAILURE",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_ACCOUNT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Error",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "missing_email_or_phone",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_iframe",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "unconfirmed_phone",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TypeError",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "2fa_required",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "500", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_email_format",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "MERCHANDISE_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "422", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Risk Payment Level Decline",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "401", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NO_SELECTED_OPTION",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "VALIDATION_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNAUTHORIZED",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code:
                "INTERNAL_SERVICE_ERROR_com.paypal.checkout.clients.SessionStoreException_com.paypal.checkout.seller.client.sessionstore.CartSessionStoreClientImpl_getSession_124 null",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_iframe",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "auth_error", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_source",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Unknown" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Unknown" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "XO session fallout without error",
            },
          ],
          invoice: [
            {
              mth: "2025-10-01",
              cnt: 150,
              last_intrnl_err_code: "#",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 109, last_intrnl_err_code: "#", failure_reason: "Top of funnel dropoff" },
            {
              mth: "2025-10-01",
              cnt: 96,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 77,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 50,
              last_intrnl_err_code: "#",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 34, last_intrnl_err_code: "#", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 32, last_intrnl_err_code: "#", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 27,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 26,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 17,
              last_intrnl_err_code: "RECEIVER_RESTRICTED",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 11,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 9,
              last_intrnl_err_code: "#",
              failure_reason: "XO session fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 8,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login page seen fallout without error",
            },
            { mth: "2025-10-01", cnt: 7, last_intrnl_err_code: "#", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 7,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 6,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "#", failure_reason: "Risk Payment Level Decline" },
            { mth: "2025-10-01", cnt: 5, last_intrnl_err_code: "0", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 5,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Top of funnel dropoff",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "401",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 4,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "SELLER_RESTRICTION",
              failure_reason: "DoEC fallout with error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "#", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "R_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "1",
              failure_reason: "Process review fallout without error",
            },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "401", failure_reason: "Review fallout without error" },
            { mth: "2025-10-01", cnt: 3, last_intrnl_err_code: "0", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 3,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ORDER_NOT_APPROVED",
              failure_reason: "DoEC fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "0", failure_reason: "Funding Instrument Errors" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_ENTITY",
              failure_reason: "Issuer declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "1",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNAUTH_CC_RISK",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "RISK_DECLINED",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "NON Model Rules Declined",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "401", failure_reason: "NON Model Rules Declined" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "0",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 2, last_intrnl_err_code: "1", failure_reason: "Risk Payment Level Decline" },
            {
              mth: "2025-10-01",
              cnt: 2,
              last_intrnl_err_code: "ACCOUNT_TAKE_OVER",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "AddPayerInfo Fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNPROCESSABLE_CONTENT",
              failure_reason: "Auth Flow declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "DoEC fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Funding Instrument Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "ISSUER_DECLINE", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Issuer declined",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "VALIDATION_ERROR", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Issuer declined" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "INVALID_MERCHANT", failure_reason: "Issuer declined" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "auth_error",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_nonce",
              failure_reason: "Login page seen fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "0",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "400",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Login page seen fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "stepup_required",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "#",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Login success fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "NEED_CREDIT_CARD",
              failure_reason: "NON Model Rules Declined",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Other Planning Errors",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Other Planning Errors" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "0", failure_reason: "Other Planning Errors" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Other Planning Errors",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Bad Request",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "1",
              failure_reason: "Post Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CREATE_CARD_ACCOUNT_CANDIDATE_VALIDATION_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OAS_ERROR_OAS_GENERIC_ERROR",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYER_CANNOT_PAY",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "CANNOT_PAY_SELF",
              failure_reason: "Process review fallout with error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INSUFFICIENT_FUNDS",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "GENERIC_DECLINE",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_OR_RESTRICTED_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "401",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "TRANSACTION_REFUSED",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Process review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "PAYEE_ACCOUNT_RESTRICTED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "STEP_UP_AUTH_NEEDED",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "risk_decline",
              failure_reason: "Review fallout without error",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "400", failure_reason: "Review fallout without error" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Review fallout without error" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_user",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_link",
              failure_reason: "Review fallout without error",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ACCOUNT_ALREADY_EXISTS",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "Unauthorized",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INVALID_RESOURCE_ID",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "invalid_grant",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "UNKNOWN",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "failed_to_load_script",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVER_ERROR",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "ADD_PAYMENT_CARD",
              failure_reason: "Risk Payment Level Decline",
            },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "INTERNAL_SERVICE_ERROR_java.lang.NullPointerException_NO_STACK_TRACE null",
              failure_reason: "Top of funnel dropoff",
            },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "Bad Request", failure_reason: "Top of funnel dropoff" },
            { mth: "2025-10-01", cnt: 1, last_intrnl_err_code: "1", failure_reason: "Unknown" },
            {
              mth: "2025-10-01",
              cnt: 1,
              last_intrnl_err_code: "OK",
              failure_reason: "XO session fallout without error",
            },
          ],
        },
      },
    }),
    [],
  );

  // Login page URLs data organized by month, country, and login category
  const loginPageUrlsByMonth = useMemo(
    () => ({
      "2025-11": {
        global: {
          "2_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 17050 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 5050,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 4336 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 3861 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSJdfQ==",
              cnt: 3861,
            },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 3596 },
            { pu_grouped: "cshelp_pages", cnt: 3384 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 3270 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountPreferences", cnt: 3045 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 2650 },
          ],
          "3_4_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 10222 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 3643 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 3238,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 3047 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSJdfQ==",
              cnt: 3035,
            },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 2975 },
            { pu_grouped: "cshelp_pages", cnt: 2821 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 2571 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 2275 },
            { pu_grouped: "https://www.paypal.com/", cnt: 2131 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountPreferences", cnt: 2126 },
            { pu_grouped: "https://www.paypal.com/restore/dashboard", cnt: 1986 },
          ],
          "5_10_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 4249 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 2071 },
            { pu_grouped: "cshelp_pages", cnt: 1812 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 1719 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 1602 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSJdfQ==",
              cnt: 1550,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 1355 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 1317,
            },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 1282 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountPreferences", cnt: 1163 },
            { pu_grouped: "https://www.paypal.com/restore/dashboard", cnt: 1157 },
            { pu_grouped: "https://www.paypal.com/", cnt: 1082 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/aboutBusiness", cnt: 1060 },
          ],
        },
        us: {
          "2_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 4361 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 1318,
            },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSIsImlzSW5BdXRvTGlua0JhbmsiXX0=",
              cnt: 1266,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 1246 },
            { pu_grouped: "https://www.paypal.com/unifiedsettings/unified-profile/business", cnt: 1006 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account", cnt: 900 },
            { pu_grouped: "https://www.api-m.paypal.com", cnt: 872 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 838 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 812 },
            { pu_grouped: "https://www.paypal.com/", cnt: 770 },
          ],
          "3_4_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 2849 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSIsImlzSW5BdXRvTGlua0JhbmsiXX0=",
              cnt: 1057,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 961 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 887,
            },
            { pu_grouped: "https://www.paypal.com/unifiedsettings/unified-profile/business", cnt: 772 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 738 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 704 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account", cnt: 704 },
            { pu_grouped: "cshelp_pages", cnt: 670 },
            { pu_grouped: "https://www.paypal.com/", cnt: 654 },
          ],
          "5_10_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 1061 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSIsImlzSW5BdXRvTGlua0JhbmsiXX0=",
              cnt: 494,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 455 },
            { pu_grouped: "https://www.paypal.com/unifiedsettings/unified-profile/business", cnt: 443 },
            { pu_grouped: "cshelp_pages", cnt: 397 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 392 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 391,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account", cnt: 365 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 365 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvY2hhcml0aWVzL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9jaGFyaXRpZXMvZGFzaGJvYXJkIiwidHJhZmZpY1NvdXJjZSI6ImNhdXNlbWlzc3BpZ2d5bm9kZXdlYiIsInByb2R1Y3RGbG93SWQiOiJQUENDX0NPTkZJUk1BVElPTiJ9",
              cnt: 313,
            },
          ],
        },
      },
      "2025-10": {
        global: {
          "2_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 11440 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 3779,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 3744 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 3570 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSJdfQ==",
              cnt: 2814,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 2796 },
            { pu_grouped: "cshelp_pages", cnt: 2684 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 2576 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountPreferences", cnt: 2149 },
            { pu_grouped: "https://www.paypal.com/", cnt: 2122 },
          ],
          "3_4_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 5338 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 2412 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 2221 },
            { pu_grouped: "cshelp_pages", cnt: 1965 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 1829,
            },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSJdfQ==",
              cnt: 1797,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 1758 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 1700 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 1352 },
            { pu_grouped: "https://www.paypal.com/", cnt: 1335 },
          ],
          "5_10_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 1586 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 916 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 896 },
            { pu_grouped: "cshelp_pages", cnt: 825 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 680 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 644 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSJdfQ==",
              cnt: 630,
            },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 532 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 520,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountPreferences", cnt: 518 },
          ],
        },
        us: {
          "2_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 3060 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 1145 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 1103,
            },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSIsImlzSW5BdXRvTGlua0JhbmsiXX0=",
              cnt: 1029,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 947 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account", cnt: 877 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 847 },
            { pu_grouped: "https://www.paypal.com/", cnt: 749 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 716 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 693 },
          ],
          "3_4_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 1502 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 744 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 642 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account", cnt: 628 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSIsImlzSW5BdXRvTGlua0JhbmsiXX0=",
              cnt: 603,
            },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 572,
            },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 568 },
            { pu_grouped: "cshelp_pages", cnt: 529 },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 500 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 477 },
          ],
          "5_10_login": [
            { pu_grouped: "https://www.paypal.com/mep/dashboard", cnt: 372 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account/accountAccess", cnt: 227 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/loginSecurity", cnt: 203 },
            { pu_grouped: "https://www.paypal.com/businessmanage/account", cnt: 199 },
            {
              pu_grouped:
                "https://www.paypal.com/myaccount/money/flow/banks/new?flow=eyJyZXR1cm5VcmwiOiIvbWVwL2Rhc2hib2FyZCIsImNhbmNlbFVybCI6Ii9tZXAvZGFzaGJvYXJkIiwiZmxhZ3MiOlsiaXNJbk1vbmV5V2l0aENob2ljZSIsImlzSW5BdXRvTGlua0JhbmsiXX0=",
              cnt: 184,
            },
            { pu_grouped: "cshelp_pages", cnt: 184 },
            { pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation", cnt: 173 },
            {
              pu_grouped: "https://www.paypal.com/businessmanage/profile/personalInformation/unifiedsettings/email",
              cnt: 161,
            },
            { pu_grouped: "https://www.paypal.com/mep/merchantapps/businesstools", cnt: 161 },
            { pu_grouped: "https://www.paypal.com/mep/fundsmanagement/money", cnt: 151 },
          ],
        },
      },
    }),
    [],
  );

  const dashboardData = useMemo(
    () => ({
      title: "Merchant Activation Funnel",
      months: [
        {
          month: "2025-11",
          month_label: "November",
          country: "global",
          total_signups: 754637,
          fraud_count: 321195,
          non_fraud_count: 433442,
          net_signups: 278824,
          funnel_stages: [
            { stage: "signups", label: "#Signups (Gross)", count: 754637, percentage: 100 },
            { stage: "fraud", label: "Fraud", count: 321195, percentage: 42.56, color: "#ef4444" },
            {
              stage: "non_fraud",
              label: "Non-Fraud (excl preliminary risk identified)",
              count: 433442,
              percentage: 57.44,
              color: "#22c55e",
            },
            {
              stage: "email_confirmation",
              label: "Email Confirmation",
              count: 293687,
              percentage: 67.8,
              color: "#3B82F6",
            },
            { stage: "profile_start", label: "Profile Start", count: 422287, percentage: 97.4, color: "#8B5CF6" },
            {
              stage: "personal_info_submit",
              label: "Personal Info Submit",
              count: 338167,
              percentage: 78.0,
              color: "#EC4899",
            },
            {
              stage: "business_info_submit",
              label: "Business Info Submit",
              count: 303101,
              percentage: 69.9,
              color: "#F97316",
            },
            {
              stage: "account_setup_complete",
              label: "Account Setup Complete",
              count: 295390,
              percentage: 68.1,
              color: "#14B8A6",
            },
            {
              stage: "non_fraud_declined",
              label: "Non fraud Declined",
              count: 4865,
              percentage: 0.62,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_pending",
              label: "Non fraud Pending",
              count: 163693,
              percentage: 21.02,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_allowed",
              label: "Non fraud Allowed",
              count: 165211,
              percentage: 21.22,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_lifted",
              label: "Non fraud Lifted",
              count: 113613,
              percentage: 14.59,
              color: "#22c55e",
            },
            { stage: "kyc_completed", label: "KYC Completed", count: 112103, percentage: 25.9, color: "#06B6D4" },
            { stage: "profile_verified", label: "Profile Verified", count: 71124, percentage: 16.41, color: "#A855F7" },
            {
              stage: "net_signups",
              label: "Net-Signups (Nonfraud = Allowed + lifted)",
              count: 278824,
              percentage: 36.94,
              color: "#4bc522",
            },
            {
              stage: "activated_within_30d",
              label: "Activated within 30D",
              count: 46029,
              percentage: 16.51,
              color: "#90EE90",
            },
            {
              stage: "activated_between_30d_90d",
              label: "Activated b/w 30D-90D",
              count: 46386,
              percentage: 16.64,
              color: "#90EE90",
            },
            {
              stage: "receive_txn_attempted_within_30d",
              label: "Receive Txn < 30D",
              count: 17731,
              percentage: 6.36,
              color: "#87CEEB",
              sub_category: [
                {
                  stage: "ec_attempted_in_30D",
                  label: "EC Txn Attempted within 30D",
                  count: 13303,
                  percentage: 4.77,
                  has_error_codes: true,
                },
                { stage: "wps_attempt_30d_1_0", label: "WPS Txn Attempted within 30D", count: 9, percentage: 0.0 },
                {
                  stage: "invoice_attempt_30d_1_0",
                  label: "Invoice Txn Attempted within 30D",
                  count: 971,
                  percentage: 0.35,
                  has_error_codes: true,
                },
                {
                  stage: "subscription_attempt_30d_1_0",
                  label: "Subscription Txn Attempted within 30D",
                  count: 410,
                  percentage: 0.15,
                },
                { stage: "p2p_attempt_30d_1_0", label: "P2P Txn Attempted within 30D", count: 438, percentage: 0.16 },
                {
                  stage: "other_attempt_30d_1_0",
                  label: "Other Txn Attempted within 30D",
                  count: 65,
                  percentage: 0.02,
                },
                {
                  stage: "p2p_attempt_30d_personal",
                  label: "P2P Txn (Personal) within 30D",
                  count: 3231,
                  percentage: 1.16,
                },
              ],
            },
            {
              stage: "successful_sent_activity",
              label: "Successful Sent Activity (No Receive)",
              count: 14007,
              percentage: 5.02,
              color: "#FFB6C1",
            },
            {
              stage: "attempted_sent_activity",
              label: "Attempted Sent Activity (No Receive)",
              count: 37072,
              percentage: 13.3,
              color: "#FFC0CB",
            },
            {
              stage: "possible_personal_account",
              label: "Possible Personal Account (Only Sent Activity)",
              count: 37583,
              percentage: 13.48,
              color: "#FFB6D8",
            },
            {
              stage: "confirmed_identity",
              label: "Confirmed Identity (No Receive or Sent)",
              count: 41591,
              percentage: 14.92,
              color: "#DDA0DD",
            },
            {
              stage: "confirmed_identity_and_attempted",
              label: "Confirmed Identity and Attempted",
              count: 8364,
              percentage: 3,
              color: "#D8BFD8",
            },
            {
              stage: "confirmed_identity_and_sent",
              label: "Confirmed Identity and Sent",
              count: 17286,
              percentage: 6.2,
              color: "#E6D5E6",
            },
            { stage: "contacted_gcs", label: "Contacted GCS", count: 4638, percentage: 1.66, color: "#F0E68C" },
            {
              stage: "login_attempted",
              label: "Login Attempted (No Receive or Sent Activity)",
              count: 84531,
              percentage: 30.15,
              color: "#D3D3D3",
              breakdown: {
                "1_login": { count: 50867, color: "#FF8C00", label: "1 Login", percentage: 18.15 },
                "2_login": { count: 18153, color: "#006400", label: "2 Login", percentage: 6.48, has_page_urls: true },
                "3_4_login": {
                  count: 10623,
                  color: "#4169E1",
                  label: "3-4 Login",
                  percentage: 3.79,
                  has_page_urls: true,
                },
                "5_10_login": {
                  count: 4376,
                  color: "#800080",
                  label: "5-10 Login",
                  percentage: 1.56,
                  has_page_urls: true,
                },
                more_than_10_logins: { count: 512, color: "#228B22", label: ">10 Logins", percentage: 0.18 },
              },
            },
          ],
          ec_error_codes: (errorCodesByMonth[selectedMonth]?.global?.ec || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          invoice_error_codes: (errorCodesByMonth[selectedMonth]?.global?.invoice || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          ec_failure_reasons: (failureReasonsByMonth[selectedMonth]?.global?.ec || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
          invoice_failure_reasons: (failureReasonsByMonth[selectedMonth]?.global?.invoice || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
        },
        {
          month: "2025-10",
          month_label: "October",
          country: "global",
          total_signups: 622627,
          fraud_count: 166684,
          non_fraud_count: 455943,
          net_signups: 280324,
          funnel_stages: [
            { stage: "signups", label: "#Signups (Gross)", count: 622627, percentage: 100 },
            { stage: "fraud", label: "Fraud", count: 166684, percentage: 26.77, color: "#ef4444" },
            {
              stage: "non_fraud",
              label: "Non-Fraud (excl preliminary risk identified)",
              count: 455943,
              percentage: 73.23,
              color: "#22c55e",
            },
            {
              stage: "email_confirmation",
              label: "Email Confirmation",
              count: 321043,
              percentage: 70.4,
              color: "#3B82F6",
            },
            { stage: "profile_start", label: "Profile Start", count: 443585, percentage: 97.3, color: "#8B5CF6" },
            {
              stage: "personal_info_submit",
              label: "Personal Info Submit",
              count: 354823,
              percentage: 77.8,
              color: "#EC4899",
            },
            {
              stage: "business_info_submit",
              label: "Business Info Submit",
              count: 320300,
              percentage: 70.3,
              color: "#F97316",
            },
            {
              stage: "account_setup_complete",
              label: "Account Setup Complete",
              count: 307964,
              percentage: 67.5,
              color: "#14B8A6",
            },
            {
              stage: "non_fraud_declined",
              label: "Non fraud Declined",
              count: 4748,
              percentage: 0.76,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_pending",
              label: "Non fraud Pending",
              count: 171096,
              percentage: 27.47,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_allowed",
              label: "Non fraud Allowed",
              count: 162732,
              percentage: 26.12,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_lifted",
              label: "Non fraud Lifted",
              count: 117592,
              percentage: 18.88,
              color: "#22c55e",
            },
            { stage: "kyc_completed", label: "KYC Completed", count: 127022, percentage: 27.9, color: "#06B6D4" },
            { stage: "profile_verified", label: "Profile Verified", count: 79621, percentage: 17.46, color: "#A855F7" },
            {
              stage: "net_signups",
              label: "Net-Signups (Nonfraud = Allowed + lifted)",
              count: 280324,
              percentage: 61.45,
              color: "#4bc522",
            },
            {
              stage: "activated_within_30d",
              label: "Activated within 30D",
              count: 41101,
              percentage: 14.66,
              color: "#90EE90",
            },
            {
              stage: "activated_between_30d_90d",
              label: "Activated b/w 30D-90D",
              count: 48111,
              percentage: 17.16,
              color: "#90EE90",
            },
            {
              stage: "receive_txn_attempted_within_30d",
              label: "Receive Txn < 30D",
              count: 17315,
              percentage: 6.18,
              color: "#87CEEB",
              sub_category: [
                {
                  stage: "ec_attempted_in_30D",
                  label: "EC Txn Attempted within 30D",
                  count: 13163,
                  percentage: 4.7,
                  has_error_codes: true,
                },
                { stage: "wps_attempt_30d_1_0", label: "WPS Txn Attempted within 30D", count: 4, percentage: 0.0 },
                {
                  stage: "invoice_attempt_30d_1_0",
                  label: "Invoice Txn Attempted within 30D",
                  count: 1020,
                  percentage: 0.36,
                  has_error_codes: true,
                },
                {
                  stage: "subscription_attempt_30d_1_0",
                  label: "Subscription Txn Attempted within 30D",
                  count: 380,
                  percentage: 0.14,
                },
                { stage: "p2p_attempt_30d_1_0", label: "P2P Txn Attempted within 30D", count: 391, percentage: 0.14 },
                {
                  stage: "other_attempt_30d_1_0",
                  label: "Other Txn Attempted within 30D",
                  count: 52,
                  percentage: 0.02,
                },
                {
                  stage: "p2p_attempt_30d_personal",
                  label: "P2P Txn (Personal) within 30D",
                  count: 2927,
                  percentage: 1.04,
                },
              ],
            },
            {
              stage: "successful_sent_activity",
              label: "Successful Sent Activity (No Receive)",
              count: 17280,
              percentage: 6.16,
              color: "#FFB6C1",
            },
            {
              stage: "attempted_sent_activity",
              label: "Attempted Sent Activity (No Receive)",
              count: 42130,
              percentage: 15.03,
              color: "#FFC0CB",
            },
            {
              stage: "possible_personal_account",
              label: "Possible Personal Account (Only Sent Activity)",
              count: 43130,
              percentage: 15.39,
              color: "#FFB6D8",
            },
            {
              stage: "confirmed_identity",
              label: "Confirmed Identity (No Receive or Sent)",
              count: 41310,
              percentage: 14.74,
              color: "#DDA0DD",
            },
            {
              stage: "confirmed_identity_and_attempted",
              label: "Confirmed Identity and Attempted",
              count: 9207,
              percentage: 3.28,
              color: "#D8BFD8",
            },
            {
              stage: "confirmed_identity_and_sent",
              label: "Confirmed Identity and Sent",
              count: 19644,
              percentage: 7.01,
              color: "#E6D5E6",
            },
            { stage: "contacted_gcs", label: "Contacted GCS", count: 4829, percentage: 1.72, color: "#F0E68C" },
            {
              stage: "login_attempted",
              label: "Login Attempted (No Receive or Sent Activity)",
              count: 61170,
              percentage: 21.82,
              color: "#D3D3D3",
              breakdown: {
                "1_login": { count: 41797, color: "#FF8C00", label: "1 Login", percentage: 14.91 },
                "2_login": { count: 12066, color: "#006400", label: "2 Login", percentage: 4.3, has_page_urls: true },
                "3_4_login": {
                  count: 5520,
                  color: "#4169E1",
                  label: "3-4 Login",
                  percentage: 1.97,
                  has_page_urls: true,
                },
                "5_10_login": {
                  count: 1626,
                  color: "#800080",
                  label: "5-10 Login",
                  percentage: 0.58,
                  has_page_urls: true,
                },
                more_than_10_logins: { count: 161, color: "#228B22", label: ">10 Logins", percentage: 0.06 },
              },
            },
          ],
          ec_error_codes: (errorCodesByMonth[selectedMonth]?.global?.ec || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          invoice_error_codes: (errorCodesByMonth[selectedMonth]?.global?.invoice || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          ec_failure_reasons: (failureReasonsByMonth[selectedMonth]?.global?.ec || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
          invoice_failure_reasons: (failureReasonsByMonth[selectedMonth]?.global?.invoice || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
        },
        {
          month: "2025-11",
          month_label: "November",
          country: "us",
          total_signups: 246521,
          fraud_count: 133010,
          non_fraud_count: 113511,
          net_signups: 69398,
          funnel_stages: [
            { stage: "signups", label: "#Signups (Gross)", count: 246521, percentage: 100 },
            { stage: "fraud", label: "Fraud", count: 133010, percentage: 53.95, color: "#ef4444" },
            {
              stage: "non_fraud",
              label: "Non-Fraud (excl preliminary risk identified)",
              count: 113511,
              percentage: 46.05,
              color: "#22c55e",
            },
            {
              stage: "email_confirmation",
              label: "Email Confirmation",
              count: 63239,
              percentage: 55.7,
              color: "#3B82F6",
            },
            { stage: "profile_start", label: "Profile Start", count: 110607, percentage: 97.4, color: "#8B5CF6" },
            {
              stage: "personal_info_submit",
              label: "Personal Info Submit",
              count: 79703,
              percentage: 70.2,
              color: "#EC4899",
            },
            {
              stage: "business_info_submit",
              label: "Business Info Submit",
              count: 77679,
              percentage: 68.4,
              color: "#F97316",
            },
            {
              stage: "account_setup_complete",
              label: "Account Setup Complete",
              count: 77561,
              percentage: 68.3,
              color: "#14B8A6",
            },
            {
              stage: "non_fraud_declined",
              label: "Non fraud Declined",
              count: 522,
              percentage: 0.46,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_pending",
              label: "Non fraud Pending",
              count: 50213,
              percentage: 44.24,
              color: "#22c55e",
            },
            { stage: "non_fraud_allowed", label: "Non fraud Allowed", count: 5146, percentage: 4.53, color: "#22c55e" },
            { stage: "non_fraud_lifted", label: "Non fraud Lifted", count: 61076, percentage: 53.8, color: "#22c55e" },
            { stage: "kyc_completed", label: "KYC Completed", count: 66613, percentage: 58.7, color: "#06B6D4" },
            { stage: "profile_verified", label: "Profile Verified", count: 24624, percentage: 21.69, color: "#A855F7" },
            {
              stage: "net_signups",
              label: "Net-Signups (Nonfraud = Allowed + lifted)",
              count: 66222,
              percentage: 58.34,
              color: "#4bc522",
            },
            {
              stage: "activated_within_30d",
              label: "Activated within 30D",
              count: 12405,
              percentage: 18.73,
              color: "#90EE90",
            },
            {
              stage: "activated_between_30d_90d",
              label: "Activated b/w 30D-90D",
              count: 12631,
              percentage: 19.07,
              color: "#90EE90",
            },
            {
              stage: "receive_txn_attempted_within_30d",
              label: "Receive Txn < 30D",
              count: 3551,
              percentage: 5.36,
              color: "#87CEEB",
              sub_category: [
                {
                  stage: "ec_attempted_in_30D",
                  label: "EC Txn Attempted within 30D",
                  count: 2185,
                  percentage: 3.3,
                  has_error_codes: true,
                },
                { stage: "wps_attempt_30d_1_0", label: "WPS Txn Attempted within 30D", count: 5, percentage: 0.01 },
                {
                  stage: "invoice_attempt_30d_1_0",
                  label: "Invoice Txn Attempted within 30D",
                  count: 500,
                  percentage: 0.76,
                  has_error_codes: true,
                },
                {
                  stage: "subscription_attempt_30d_1_0",
                  label: "Subscription Txn Attempted within 30D",
                  count: 121,
                  percentage: 0.18,
                },
                { stage: "p2p_attempt_30d_1_0", label: "P2P Txn Attempted within 30D", count: 72, percentage: 0.11 },
                {
                  stage: "other_attempt_30d_1_0",
                  label: "Other Txn Attempted within 30D",
                  count: 30,
                  percentage: 0.05,
                },
                {
                  stage: "p2p_attempt_30d_personal",
                  label: "P2P Txn (Personal) within 30D",
                  count: 796,
                  percentage: 1.2,
                },
              ],
            },
            {
              stage: "successful_sent_activity",
              label: "Successful Sent Activity (No Receive)",
              count: 4697,
              percentage: 7.09,
              color: "#FFB6C1",
            },
            {
              stage: "attempted_sent_activity",
              label: "Attempted Sent Activity (No Receive)",
              count: 10433,
              percentage: 15.75,
              color: "#FFC0CB",
            },
            {
              stage: "possible_personal_account",
              label: "Possible Personal Account (Only Sent Activity)",
              count: 10702,
              percentage: 16.16,
              color: "#FFB6D8",
            },
            {
              stage: "confirmed_identity",
              label: "Confirmed Identity (No Receive or Sent)",
              count: 15789,
              percentage: 23.84,
              color: "#DDA0DD",
            },
            {
              stage: "confirmed_identity_and_attempted",
              label: "Confirmed Identity and Attempted",
              count: 2336,
              percentage: 3.53,
              color: "#D8BFD8",
            },
            {
              stage: "confirmed_identity_and_sent",
              label: "Confirmed Identity and Sent",
              count: 7451,
              percentage: 11.25,
              color: "#E6D5E6",
            },
            { stage: "contacted_gcs", label: "Contacted GCS", count: 2365, percentage: 3.57, color: "#F0E68C" },
            {
              stage: "login_attempted",
              label: "Login Attempted (No Receive or Sent Activity)",
              count: 19992,
              percentage: 30.19,
              color: "#D3D3D3",
              breakdown: {
                "1_login": { count: 11114, color: "#FF8C00", label: "1 Login", percentage: 16.19 },
                "2_login": { count: 4680, color: "#006400", label: "2 Login", percentage: 7.07, has_page_urls: true },
                "3_4_login": { count: 2963, color: "#4169E1", label: "3-4 Login", percentage: 4.47, has_page_urls: true },
                "5_10_login": { count: 1094, color: "#800080", label: "5-10 Login", percentage: 1.65, has_page_urls: true },
                more_than_10_logins: { count: 141, color: "#228B22", label: ">10 Logins", percentage: 0.21 },
              },
            },
          ],
          ec_error_codes: (errorCodesByMonth["2025-11"]?.us?.ec || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          invoice_error_codes: (errorCodesByMonth["2025-11"]?.us?.invoice || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          ec_failure_reasons: (failureReasonsByMonth["2025-11"]?.us?.ec || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
          invoice_failure_reasons: (failureReasonsByMonth["2025-11"]?.us?.invoice || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
        },
        {
          month: "2025-10",
          month_label: "October",
          country: "us",
          total_signups: 168667,
          fraud_count: 42418,
          non_fraud_count: 126249,
          net_signups: 69398,
          funnel_stages: [
            { stage: "signups", label: "#Signups (Gross)", count: 168667, percentage: 100 },
            { stage: "fraud", label: "Fraud", count: 42418, percentage: 25.15, color: "#ef4444" },
            {
              stage: "non_fraud",
              label: "Non-Fraud (excl preliminary risk identified)",
              count: 126249,
              percentage: 74.85,
              color: "#22c55e",
            },
            {
              stage: "email_confirmation",
              label: "Email Confirmation",
              count: 68786,
              percentage: 54.5,
              color: "#3B82F6",
            },
            { stage: "profile_start", label: "Profile Start", count: 122601, percentage: 97.1, color: "#8B5CF6" },
            {
              stage: "personal_info_submit",
              label: "Personal Info Submit",
              count: 88549,
              percentage: 70.1,
              color: "#EC4899",
            },
            {
              stage: "business_info_submit",
              label: "Business Info Submit",
              count: 86007,
              percentage: 68.1,
              color: "#F97316",
            },
            {
              stage: "account_setup_complete",
              label: "Account Setup Complete",
              count: 85834,
              percentage: 68.0,
              color: "#14B8A6",
            },
            {
              stage: "non_fraud_declined",
              label: "Non fraud Declined",
              count: 935,
              percentage: 0.74,
              color: "#22c55e",
            },
            {
              stage: "non_fraud_pending",
              label: "Non fraud Pending",
              count: 55949,
              percentage: 44.32,
              color: "#22c55e",
            },
            { stage: "non_fraud_allowed", label: "Non fraud Allowed", count: 4694, percentage: 3.72, color: "#22c55e" },
            { stage: "non_fraud_lifted", label: "Non fraud Lifted", count: 64704, percentage: 51.25, color: "#22c55e" },
            { stage: "kyc_completed", label: "KYC Completed", count: 75662, percentage: 59.9, color: "#06B6D4" },
            { stage: "profile_verified", label: "Profile Verified", count: 29802, percentage: 23.61, color: "#A855F7" },
            {
              stage: "net_signups",
              label: "Net-Signups (Nonfraud = Allowed + lifted)",
              count: 69398,
              percentage: 54.97,
              color: "#4bc522",
            },
            {
              stage: "activated_within_30d",
              label: "Activated within 30D",
              count: 13642,
              percentage: 19.66,
              color: "#90EE90",
            },
            {
              stage: "activated_between_30d_90d",
              label: "Activated b/w 30D-90D",
              count: 15991,
              percentage: 23.04,
              color: "#90EE90",
            },
            {
              stage: "receive_txn_attempted_within_30d",
              label: "Receive Txn < 30D",
              count: 3501,
              percentage: 5.04,
              color: "#87CEEB",
              sub_category: [
                {
                  stage: "ec_attempted_in_30D",
                  label: "EC Txn Attempted within 30D",
                  count: 2185,
                  percentage: 3.15,
                  has_error_codes: true,
                },
                { stage: "wps_attempt_30d_1_0", label: "WPS Txn Attempted within 30D", count: 4, percentage: 0.01 },
                {
                  stage: "invoice_attempt_30d_1_0",
                  label: "Invoice Txn Attempted within 30D",
                  count: 498,
                  percentage: 0.72,
                  has_error_codes: true,
                },
                {
                  stage: "subscription_attempt_30d_1_0",
                  label: "Subscription Txn Attempted within 30D",
                  count: 80,
                  percentage: 0.12,
                },
                { stage: "p2p_attempt_30d_1_0", label: "P2P Txn Attempted within 30D", count: 72, percentage: 0.1 },
                {
                  stage: "other_attempt_30d_1_0",
                  label: "Other Txn Attempted within 30D",
                  count: 20,
                  percentage: 0.03,
                },
                {
                  stage: "p2p_attempt_30d_personal",
                  label: "P2P Txn (Personal) within 30D",
                  count: 769,
                  percentage: 1.11,
                },
              ],
            },
            {
              stage: "successful_sent_activity",
              label: "Successful Sent Activity (No Receive)",
              count: 5930,
              percentage: 8.54,
              color: "#FFB6C1",
            },
            {
              stage: "attempted_sent_activity",
              label: "Attempted Sent Activity (No Receive)",
              count: 11950,
              percentage: 17.22,
              color: "#FFC0CB",
            },
            {
              stage: "possible_personal_account",
              label: "Possible Personal Account (Only Sent Activity)",
              count: 12442,
              percentage: 17.93,
              color: "#FFB6D8",
            },
            {
              stage: "confirmed_identity",
              label: "Confirmed Identity (No Receive or Sent)",
              count: 14856,
              percentage: 21.41,
              color: "#DDA0DD",
            },
            {
              stage: "confirmed_identity_and_attempted",
              label: "Confirmed Identity and Attempted",
              count: 2576,
              percentage: 3.71,
              color: "#D8BFD8",
            },
            {
              stage: "confirmed_identity_and_sent",
              label: "Confirmed Identity and Sent",
              count: 7107,
              percentage: 10.24,
              color: "#E6D5E6",
            },
            { stage: "contacted_gcs", label: "Contacted GCS", count: 2674, percentage: 3.85, color: "#F0E68C" },
            {
              stage: "login_attempted",
              label: "Login Attempted (No Receive or Sent Activity)",
              count: 14319,
              percentage: 20.63,
              color: "#D3D3D3",
              breakdown: {
                "1_login": { count: 9156, color: "#FF8C00", label: "1 Login", percentage: 13.19 },
                "2_login": { count: 3203, color: "#006400", label: "2 Login", percentage: 4.62, has_page_urls: true },
                "3_4_login": { count: 1548, color: "#4169E1", label: "3-4 Login", percentage: 2.23, has_page_urls: true },
                "5_10_login": { count: 382, color: "#800080", label: "5-10 Login", percentage: 0.55, has_page_urls: true },
                more_than_10_logins: { count: 30, color: "#228B22", label: ">10 Logins", percentage: 0.04 },
              },
            },
          ],
          ec_error_codes: (errorCodesByMonth["2025-10"]?.us?.ec || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          invoice_error_codes: (errorCodesByMonth["2025-10"]?.us?.invoice || []).map((item) => ({
            code: item.code,
            count: item.counts,
          })),
          ec_failure_reasons: (failureReasonsByMonth["2025-10"]?.us?.ec || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
          invoice_failure_reasons: (failureReasonsByMonth["2025-10"]?.us?.invoice || []).map((item) => ({
            mth: item.mth,
            cnt: item.cnt,
            last_intrnl_err_code: item.last_intrnl_err_code,
            failure_reason: item.failure_reason,
          })),
        },
      ],
    }),
    [errorCodesByMonth, selectedMonth],
  );

  const currentMonthData = useMemo(() => {
    return dashboardData.months.find((m) => m.month === selectedMonth && m.country === selectedCountry);
  }, [selectedMonth, selectedCountry, dashboardData]);

  const uniqueMonths = useMemo(() => {
    const seen = new Set<string>();
    return dashboardData.months.filter((m) => {
      if (seen.has(m.month)) return false;
      seen.add(m.month);
      return true;
    });
  }, [dashboardData]);

  const trendMetricsConfig = useMemo(
    () => [
      { key: "gross_signups", label: "Gross Signups", color: "hsl(221, 83%, 53%)" },
      { key: "net_signups", label: "Net Signups", color: "hsl(142, 71%, 45%)" },
      { key: "frauds", label: "Frauds", color: "hsl(0, 84%, 60%)" },
      { key: "kyc_completed", label: "KYC Completed", color: "hsl(187, 85%, 43%)" },
      { key: "activated", label: "Activated", color: "hsl(142, 76%, 36%)" },
      { key: "attempted_receive", label: "Attempted to Receive", color: "hsl(199, 89%, 48%)" },
      { key: "platform_interaction", label: "Platform Interactions", color: "hsl(45, 93%, 47%)" },
    ],
    []
  );

  const trendData = useMemo(() => {
    const countryMonths = dashboardData.months
      .filter((m) => m.country === selectedCountry)
      .sort((a, b) => a.month.localeCompare(b.month));

    return countryMonths.map((m) => {
      const activated = m.funnel_stages.find((s) => s.stage === "activated_between_30d_90d")?.count || 0;
      const receive = m.funnel_stages.find((s) => s.stage === "receive_txn_attempted_within_30d")?.count || 0;
      const interaction = m.funnel_stages.find((s) => s.stage === "login_attempted")?.count || 0;
      const kycCompleted = m.funnel_stages.find((s) => s.stage === "kyc_completed")?.count || 0;

      return {
        month: m.month_label,
        gross_signups: m.total_signups,
        net_signups: m.net_signups || 0,
        frauds: m.fraud_count || 0,
        kyc_completed: kycCompleted,
        activated: activated,
        attempted_receive: receive,
        platform_interaction: interaction,
      };
    });
  }, [dashboardData, selectedCountry]);

  const toggleTrendMetric = (key: string) => {
    setSelectedTrendMetrics((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const funnelChartData = useMemo(() => {
    if (!currentMonthData) return [];

    const signupStage = currentMonthData.funnel_stages.find((s) => s.stage === "signups");
    const stages = currentMonthData.funnel_stages.filter((stage) => stage.stage !== "signups");

    const chartData = stages.map((stage) => ({
      name: stage.label,
      count: stage.count,
      percentage: stage.percentage,
      color: stage.color || "#999",
      stage: stage.stage,
      hasSubcategory: !!(stage.sub_category || stage.breakdown),
    }));

    if (signupStage) {
      chartData.unshift({
        name: signupStage.label,
        count: signupStage.count,
        percentage: 100,
        color: "#1e40af",
        stage: signupStage.stage,
        hasSubcategory: false,
      });
    }

    return chartData;
  }, [currentMonthData]);

  const getCategoryTotals = () => {
    if (!currentMonthData) return { activated: 0, receive: 0, possiblePersonal: 0, interacted: 0, netSignups: 0 };

    const activated = currentMonthData.funnel_stages.find((s) => s.stage === "activated_between_30d_90d")?.count || 0;
    const receive =
      currentMonthData.funnel_stages.find((s) => s.stage === "receive_txn_attempted_within_30d")?.count || 0;
    const possiblePersonal =
      currentMonthData.funnel_stages.find((s) => s.stage === "possible_personal_account")?.count || 0;
    const interacted = currentMonthData.funnel_stages.find((s) => s.stage === "login_attempted")?.count || 0;
    const netSignups = currentMonthData.net_signups || 0;

    return { activated, receive, possiblePersonal, interacted, netSignups };
  };

  const handleBarClick = (data) => {
    const stage = currentMonthData.funnel_stages.find((s) => s.stage === data.stage);
    if (stage && (stage.sub_category || stage.breakdown)) {
      setDrilldownStage(stage);
    }
  };

  const handleSubcategoryClick = (item) => {
    if (item.has_error_codes) {
      setErrorCodeView(item);
    } else if (item.has_page_urls) {
      const pageUrls = loginPageUrlsByMonth[selectedMonth]?.[selectedCountry]?.[item.stage] || [];
      setLoginPageUrlView({
        label: item.label,
        urls: pageUrls,
      });
    }
  };

  const getErrorCodesForStage = (stage) => {
    if (!currentMonthData) return [];
    if (stage === "ec_attempted_in_30D") return currentMonthData.ec_error_codes || [];
    if (stage === "invoice_attempt_30d_1_0") return currentMonthData.invoice_error_codes || [];
    return [];
  };

  const handleErrorCodeClick = (errorCode) => {
    if (!currentMonthData) return;

    // Determine transaction type
    const transactionType = errorCodeView.stage === "ec_attempted_in_30D" ? "ec" : "invoice";

    // Get failure reasons for this month, country, and transaction type
    const failureReasonsData = failureReasonsByMonth[selectedMonth]?.[selectedCountry]?.[transactionType] || [];

    const failureReasons = failureReasonsData
      .filter((item) => item.last_intrnl_err_code === errorCode)
      .sort((a, b) => b.cnt - a.cnt);

    setFailureReasonView({
      errorCode,
      reasons: failureReasons,
      transactionType: errorCodeView.label,
    });
  };

  const formatNumber = (num) => {
    if (num === undefined || num === null) return "0";
    return num.toLocaleString();
  };

  const totals = getCategoryTotals();

  if (showTrendView) {
    return (
      <div className="p-6 md:p-10 lg:p-12 bg-background min-h-screen">
        <div className="w-full animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <button
              onClick={() => setShowTrendView(false)}
              className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-card"
            >
              ← Back to Dashboard
            </button>
            <div className="flex rounded-lg border border-border bg-card shadow-card overflow-hidden">
              {countryOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedCountry(option.value)}
                  className={`px-4 py-2.5 flex items-center gap-2 transition-all font-medium ${
                    selectedCountry === option.value
                      ? "bg-primary text-primary-foreground"
                      : "text-card-foreground hover:bg-muted"
                  }`}
                >
                  <span className="text-lg">{option.flag}</span>
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-card p-8 border border-border mb-6">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Month-by-Month Trend Comparison</h2>

            <ResponsiveContainer width="100%" height={500}>
              <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(220, 10%, 45%)" }} />
                <YAxis
                  tick={{ fill: "hsl(220, 10%, 45%)" }}
                  tickFormatter={(value) => {
                    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                    return value;
                  }}
                />
                <Tooltip
                  formatter={(value, name) => {
                    const metric = trendMetricsConfig.find((m) => m.key === name);
                    return [formatNumber(value), metric?.label || name];
                  }}
                  contentStyle={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(220, 13%, 91%)",
                    borderRadius: "8px",
                  }}
                />
                <Legend
                  formatter={(value) => {
                    const metric = trendMetricsConfig.find((m) => m.key === value);
                    return metric?.label || value;
                  }}
                />
                {trendMetricsConfig
                  .filter((metric) => selectedTrendMetrics.includes(metric.key))
                  .map((metric) => (
                    <Line
                      key={metric.key}
                      type="monotone"
                      dataKey={metric.key}
                      stroke={metric.color}
                      strokeWidth={2}
                      dot={{ fill: metric.color, strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Select Metrics to Display</h3>
            <div className="flex flex-wrap gap-3">
              {trendMetricsConfig.map((metric) => (
                <button
                  key={metric.key}
                  onClick={() => toggleTrendMetric(metric.key)}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all border ${
                    selectedTrendMetrics.includes(metric.key)
                      ? "border-transparent text-white shadow-card"
                      : "border-border bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  style={{
                    backgroundColor: selectedTrendMetrics.includes(metric.key) ? metric.color : undefined,
                  }}
                >
                  {metric.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loginPageUrlView) {
    const totalCount = loginPageUrlView.urls.reduce((sum, r) => sum + r.cnt, 0);
    const topUrls = loginPageUrlView.urls.slice(0, 10);

    return (
      <div className="p-4 md:p-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <button
              onClick={() => setLoginPageUrlView(null)}
              className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-card"
            >
              ← Back
            </button>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground shadow-card"
            >
              {uniqueMonths.map((m) => (
                <option key={m.month} value={m.month}>
                  {m.month_label} {m.month.split("-")[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 border border-border">
            <h2 className="text-2xl font-bold text-card-foreground mb-2">
              {loginPageUrlView.label} - <span className="text-primary">Page URLs</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Total: <span className="font-semibold text-card-foreground">{formatNumber(totalCount)}</span> | Unique
              URLs: <span className="font-semibold text-card-foreground">{loginPageUrlView.urls.length}</span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Top 10 Page URLs</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topUrls} layout="vertical">
                    <XAxis type="number" tick={{ fill: "hsl(220, 10%, 45%)" }} />
                    <YAxis
                      type="category"
                      dataKey="pu_grouped"
                      width={200}
                      tick={{ fontSize: 9, fill: "hsl(220, 20%, 25%)" }}
                      tickFormatter={(value) => {
                        const url = value.replace("https://www.paypal.com", "");
                        return url.length > 30 ? url.substring(0, 30) + "..." : url;
                      }}
                    />
                    <Tooltip
                      formatter={(v) => formatNumber(v)}
                      labelFormatter={(label) => label}
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px",
                        maxWidth: "400px",
                      }}
                    />
                    <Bar dataKey="cnt" radius={[0, 4, 4, 0]}>
                      {topUrls.map((e, i) => (
                        <Cell
                          key={i}
                          fill={
                            [
                              "#4169E1",
                              "#5B78E8",
                              "#7487EF",
                              "#8E96F6",
                              "#A7A5FD",
                              "#6366f1",
                              "#818cf8",
                              "#a5b4fc",
                              "#c7d2fe",
                              "#e0e7ff",
                            ][i]
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">All Page URLs</h3>
                <div className="overflow-y-auto rounded-lg border border-border" style={{ maxHeight: "400px" }}>
                  <table className="min-w-full bg-card">
                    <thead className="bg-muted sticky top-0">
                      <tr>
                        <th className="py-3 px-4 border-b border-border text-left text-sm font-semibold text-card-foreground">
                          Page URL
                        </th>
                        <th className="py-3 px-4 border-b border-border text-right text-sm font-semibold text-card-foreground">
                          Count
                        </th>
                        <th className="py-3 px-4 border-b border-border text-right text-sm font-semibold text-card-foreground">
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loginPageUrlView.urls.map((e, i) => (
                        <tr key={i} className="hover:bg-primary/5 transition-colors">
                          <td className="py-2.5 px-4 border-b border-border text-sm text-card-foreground font-medium break-all max-w-[300px]">
                            {e.pu_grouped}
                          </td>
                          <td className="py-2.5 px-4 border-b border-border text-right text-sm font-medium text-card-foreground">
                            {formatNumber(e.cnt)}
                          </td>
                          <td className="py-2.5 px-4 border-b border-border text-right text-sm text-muted-foreground">
                            {((e.cnt / totalCount) * 100).toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (failureReasonView) {
    const totalCount = failureReasonView.reasons.reduce((sum, r) => sum + r.cnt, 0);
    const topReasons = failureReasonView.reasons.slice(0, 10);

    return (
      <div className="p-4 md:p-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <button
              onClick={() => setFailureReasonView(null)}
              className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-card"
            >
              ← Back
            </button>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground shadow-card"
            >
              {uniqueMonths.map((m) => (
                <option key={m.month} value={m.month}>
                  {m.month_label} {m.month.split("-")[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 border border-border">
            <h2 className="text-2xl font-bold text-card-foreground mb-2">
              Error Code: <span className="text-destructive">{failureReasonView.errorCode}</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-1">Transaction: {failureReasonView.transactionType}</p>
            <p className="text-muted-foreground mb-6">
              Total: <span className="font-semibold text-card-foreground">{formatNumber(totalCount)}</span> | Unique
              Reasons: <span className="font-semibold text-card-foreground">{failureReasonView.reasons.length}</span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Top 10 Failure Reasons</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topReasons} layout="vertical">
                    <XAxis type="number" tick={{ fill: "hsl(220, 10%, 45%)" }} />
                    <YAxis
                      type="category"
                      dataKey="failure_reason"
                      width={180}
                      tick={{ fontSize: 10, fill: "hsl(220, 20%, 25%)" }}
                    />
                    <Tooltip
                      formatter={(v) => formatNumber(v)}
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="cnt" radius={[0, 4, 4, 0]}>
                      {topReasons.map((e, i) => (
                        <Cell
                          key={i}
                          fill={
                            [
                              "#dc2626",
                              "#ea580c",
                              "#d97706",
                              "#ca8a04",
                              "#65a30d",
                              "#16a34a",
                              "#059669",
                              "#0d9488",
                              "#0891b2",
                              "#0284c7",
                            ][i]
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">All Failure Reasons</h3>
                <div className="overflow-y-auto rounded-lg border border-border" style={{ maxHeight: "400px" }}>
                  <table className="min-w-full bg-card">
                    <thead className="bg-muted sticky top-0">
                      <tr>
                        <th className="py-3 px-4 border-b border-border text-left text-sm font-semibold text-card-foreground">
                          Reason
                        </th>
                        <th className="py-3 px-4 border-b border-border text-right text-sm font-semibold text-card-foreground">
                          Count
                        </th>
                        <th className="py-3 px-4 border-b border-border text-right text-sm font-semibold text-card-foreground">
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {failureReasonView.reasons.map((r, i) => (
                        <tr key={i} className="hover:bg-muted/50 transition-colors">
                          <td className="py-2.5 px-4 border-b border-border text-sm text-card-foreground">
                            {r.failure_reason}
                          </td>
                          <td className="py-2.5 px-4 border-b border-border text-right text-sm font-medium text-card-foreground">
                            {formatNumber(r.cnt)}
                          </td>
                          <td className="py-2.5 px-4 border-b border-border text-right text-sm text-muted-foreground">
                            {((r.cnt / totalCount) * 100).toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (errorCodeView) {
    const errorCodes = getErrorCodesForStage(errorCodeView.stage);
    const topErrorCodes = errorCodes.slice(0, 10);
    const totalErrors = errorCodes.reduce((sum, e) => sum + e.count, 0);

    return (
      <div className="p-4 md:p-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <button
              onClick={() => setErrorCodeView(null)}
              className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-card"
            >
              ← Back
            </button>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground shadow-card"
            >
              {uniqueMonths.map((m) => (
                <option key={m.month} value={m.month}>
                  {m.month_label} {m.month.split("-")[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 border border-border">
            <h2 className="text-2xl font-bold text-card-foreground mb-2">{errorCodeView.label} - Error Codes</h2>
            <p className="text-muted-foreground mb-6">
              Total Attempts:{" "}
              <span className="font-semibold text-card-foreground">{formatNumber(errorCodeView.count)}</span> | Error
              Records: <span className="font-semibold text-card-foreground">{formatNumber(totalErrors)}</span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Top 10 Error Codes</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topErrorCodes} layout="vertical">
                    <XAxis type="number" tick={{ fill: "hsl(220, 10%, 45%)" }} />
                    <YAxis
                      type="category"
                      dataKey="code"
                      width={150}
                      tick={{ fontSize: 11, fill: "hsl(220, 20%, 25%)" }}
                    />
                    <Tooltip
                      formatter={(v) => formatNumber(v)}
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                      {topErrorCodes.map((e, i) => (
                        <Cell
                          key={i}
                          fill={
                            [
                              "#ef4444",
                              "#f97316",
                              "#f59e0b",
                              "#eab308",
                              "#84cc16",
                              "#22c55e",
                              "#10b981",
                              "#14b8a6",
                              "#06b6d4",
                              "#0ea5e9",
                            ][i]
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">All Error Codes</h3>
                <div className="overflow-y-auto rounded-lg border border-border" style={{ maxHeight: "400px" }}>
                  <table className="min-w-full bg-card">
                    <thead className="bg-muted sticky top-0">
                      <tr>
                        <th className="py-3 px-4 border-b border-border text-left text-sm font-semibold text-card-foreground">
                          Code
                        </th>
                        <th className="py-3 px-4 border-b border-border text-right text-sm font-semibold text-card-foreground">
                          Count
                        </th>
                        <th className="py-3 px-4 border-b border-border text-right text-sm font-semibold text-card-foreground">
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {errorCodes.map((e, i) => (
                        <tr
                          key={i}
                          className="hover:bg-primary/5 cursor-pointer transition-colors"
                          onClick={() => handleErrorCodeClick(e.code)}
                        >
                          <td className="py-2.5 px-4 border-b border-border text-sm text-primary hover:underline font-medium">
                            {e.code}
                          </td>
                          <td className="py-2.5 px-4 border-b border-border text-right text-sm font-medium text-card-foreground">
                            {formatNumber(e.count)}
                          </td>
                          <td className="py-2.5 px-4 border-b border-border text-right text-sm text-muted-foreground">
                            {((e.count / totalErrors) * 100).toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Click error codes to see failure reasons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (drilldownStage) {
    interface BreakdownItem {
      label: string;
      count: number;
      percentage: number;
      color: string;
      has_error_codes?: boolean;
      has_page_urls?: boolean;
      stage?: string;
    }

    const subcategoryData: BreakdownItem[] =
      drilldownStage.sub_category ||
      Object.entries(drilldownStage.breakdown || {}).map(([k, v]: [string, any]) => ({
        label: v.label,
        count: v.count,
        percentage: v.percentage,
        color: v.color,
        has_error_codes: v.has_error_codes,
        has_page_urls: v.has_page_urls,
        stage: k,
      }));

    return (
      <div className="p-4 md:p-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <button
              onClick={() => setDrilldownStage(null)}
              className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-card"
            >
              ← Back
            </button>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground shadow-card"
            >
              {uniqueMonths.map((m) => (
                <option key={m.month} value={m.month}>
                  {m.month_label} {m.month.split("-")[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 border border-border">
            <h2 className="text-2xl font-bold text-card-foreground mb-2">{drilldownStage.label} - Breakdown</h2>
            <p className="text-muted-foreground mb-6">
              Total: <span className="font-semibold text-card-foreground">{formatNumber(drilldownStage.count)}</span> (
              {drilldownStage.percentage?.toFixed(2)}%)
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={500}>
                  <PieChart>
                    <Pie
                      data={subcategoryData}
                      dataKey="count"
                      nameKey="label"
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      strokeWidth={2}
                      stroke="hsl(0, 0%, 100%)"
                    >
                      {subcategoryData.map((e, i) => (
                        <Cell key={i} fill={e.color || `hsl(${i * 45}, 70%, 60%)`} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v, n) => [formatNumber(v), n]}
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend
                      layout="horizontal"
                      align="center"
                      verticalAlign="bottom"
                      wrapperStyle={{
                        paddingTop: 20,
                        maxWidth: "100%",
                        overflowX: "auto",
                        overflowY: "hidden",
                      }}
                      formatter={(v) => {
                        const item = subcategoryData.find((d) => d.label === v);
                        return `${v} (${item?.percentage?.toFixed(2)}%)`;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Details</h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                  {subcategoryData.map((item, i) => (
                    <div
                      key={i}
                      className={`border border-border rounded-lg p-4 bg-card transition-all ${item.has_error_codes || item.has_page_urls ? "hover:shadow-card-hover cursor-pointer hover:border-primary/50" : ""}`}
                      onClick={() => (item.has_error_codes || item.has_page_urls) && handleSubcategoryClick(item)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-card-foreground">{item.label}</span>
                        <span
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: item.color || `hsl(${i * 45}, 70%, 60%)` }}
                        ></span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{formatNumber(item.count)}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage?.toFixed(2)}%</div>
                      {item.has_error_codes && (
                        <div className="text-xs text-primary mt-2 font-semibold">Click for errors →</div>
                      )}
                      {item.has_page_urls && (
                        <div className="text-xs text-primary mt-2 font-semibold">Click for page URLs →</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 lg:p-12 bg-background min-h-screen">
      <div className="w-full animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{dashboardData.title}</h1>
            <button
              onClick={() => setShowTrendView(true)}
              className="px-4 py-2.5 bg-info text-info-foreground rounded-lg hover:bg-info/90 transition-colors font-medium shadow-card flex items-center gap-2"
            >
              📈 Trend
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex rounded-lg border border-border bg-card shadow-card overflow-hidden">
              {countryOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedCountry(option.value)}
                  className={`px-4 py-2.5 flex items-center gap-2 transition-all font-medium ${
                    selectedCountry === option.value
                      ? "bg-primary text-primary-foreground"
                      : "text-card-foreground hover:bg-muted"
                  }`}
                >
                  <span className="text-lg">{option.flag}</span>
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              ))}
            </div>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground shadow-card hover:shadow-card-hover transition-shadow focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {dashboardData.months
                .filter((m) => m.country === selectedCountry)
                .map((m) => (
                  <option key={m.month} value={m.month}>
                    {m.month_label} {m.month.split("-")[0]}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-primary rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-base text-primary-foreground/80 font-medium">Total Signups</div>
            <div className="text-4xl font-bold text-primary-foreground mt-2">
              {formatNumber(currentMonthData?.total_signups)}
            </div>
          </div>
          <div className="bg-[hsl(120,60%,40%)] rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-base text-white/80 font-medium">Net Signups</div>
            <div className="text-xs text-white/60 mt-1">Passed risk checks (Allowed + Lifted)</div>
            <div className="text-4xl font-bold text-white mt-2">{formatNumber(totals.netSignups)}</div>
            <div className="text-sm text-white/70 mt-2">
              {((totals.netSignups / currentMonthData?.total_signups) * 100).toFixed(1)}% of signups
            </div>
          </div>
          <div className="bg-success rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-base text-success-foreground/80 font-medium">Activated (90D)</div>
            <div className="text-4xl font-bold text-success-foreground mt-2">{formatNumber(totals.activated)}</div>
            <div className="text-sm text-success-foreground/70 mt-2">
              {((totals.activated / totals.netSignups) * 100).toFixed(1)}% of Net Signups
            </div>
          </div>
          <div className="bg-info rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-base text-info-foreground/80 font-medium">Attempted to Receive Txn &lt;= 30D</div>
            <div className="text-4xl font-bold text-info-foreground mt-2">{formatNumber(totals.receive)}</div>
            <div className="text-sm text-info-foreground/70 mt-2">
              {((totals.receive / totals.netSignups) * 100).toFixed(1)}% of Net Signups
            </div>
          </div>
          <div className="bg-warning rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-base text-warning-foreground/80 font-medium">Platform Interaction</div>
            <div className="text-4xl font-bold text-warning-foreground mt-2">{formatNumber(totals.interacted)}</div>
            <div className="text-sm text-warning-foreground/70 mt-2">
              {((totals.interacted / totals.netSignups) * 100).toFixed(1)}% of Net Signups
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-card p-8 mb-8 border border-border">
          <h2 className="text-2xl font-semibold text-card-foreground mb-3">Merchant Activation Funnel</h2>
          <p className="text-base text-muted-foreground mb-6">Click bars with subcategories to drill down</p>

          <ResponsiveContainer width="100%" height={900}>
            <BarChart data={funnelChartData} layout="vertical" barSize={28}>
              <XAxis type="number" tick={{ fill: "hsl(220, 10%, 45%)" }} />
              <YAxis
                type="category"
                dataKey="name"
                width={280}
                tick={{ fontSize: 12, fontWeight: 600, fill: "hsl(220, 20%, 25%)" }}
              />
              <Tooltip
                formatter={(v) => formatNumber(v)}
                content={({ active, payload }) => {
                  if (active && payload?.[0]) {
                    const d = payload[0].payload;
                    return (
                      <div className="bg-card p-3 border border-border rounded-lg shadow-card-hover">
                        <p className="font-semibold text-card-foreground">{d.name}</p>
                        <p className="text-primary font-medium">Count: {formatNumber(d.count)}</p>
                        <p className="text-muted-foreground">Percentage: {d.percentage?.toFixed(2)}%</p>
                        {d.hasSubcategory && (
                          <p className="text-xs text-success mt-1 font-medium">Click to drill down →</p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="count" onClick={handleBarClick} cursor="pointer" radius={[0, 4, 4, 0]}>
                {funnelChartData.map((e, i) => (
                  <Cell key={i} fill={e.color} opacity={e.hasSubcategory ? 1 : 0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl shadow-card p-8 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Activation Status (90 Days)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-5 bg-success/10 rounded-lg border border-success/20">
                <span className="text-card-foreground font-medium text-lg">Activated within 30D</span>
                <span className="font-bold text-success text-2xl">
                  {formatNumber(currentMonthData?.funnel_stages.find((s) => s.stage === "activated_within_30d")?.count)}
                </span>
              </div>
              <div className="flex justify-between items-center p-5 bg-success/5 rounded-lg border border-success/10">
                <span className="text-card-foreground font-medium text-lg">Activated b/w 30D-90D</span>
                <span className="font-bold text-success/80 text-2xl">
                  {formatNumber(
                    currentMonthData?.funnel_stages.find((s) => s.stage === "activated_between_30d_90d")?.count,
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-card p-8 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Transaction Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-5 bg-info/10 rounded-lg border border-info/20">
                <span className="text-card-foreground font-medium text-lg">Attempted to Receive Txn &lt;= 30D</span>
                <span className="font-bold text-info text-2xl">{formatNumber(totals.receive)}</span>
              </div>
              <div className="flex justify-between items-center p-5 bg-destructive/5 rounded-lg border border-destructive/10">
                <span className="text-card-foreground font-medium text-lg">Only Sent Activity</span>
                <span className="font-bold text-destructive/70 text-2xl">{formatNumber(totals.possiblePersonal)}</span>
              </div>
              <div className="flex justify-between items-center p-5 bg-muted rounded-lg border border-border">
                <span className="text-card-foreground font-medium text-lg">Login Only</span>
                <span className="font-bold text-muted-foreground text-2xl">{formatNumber(totals.interacted)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantActivationDashboard;
