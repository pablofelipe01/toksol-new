import type { LegalDoc } from "../types";
import { terms } from "./terms";
import { privacy } from "./privacy";
import { cookies } from "./cookies";
import { amlKyc } from "./aml-kyc";
import { riskDisclosure } from "./risk-disclosure";
import { disclaimer } from "./disclaimer";

export { terms, privacy, cookies, amlKyc, riskDisclosure, disclaimer };

export const legalDocs: Record<string, LegalDoc> = {
  terms,
  privacy,
  cookies,
  "aml-kyc": amlKyc,
  "risk-disclosure": riskDisclosure,
  disclaimer,
};
