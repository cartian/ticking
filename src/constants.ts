export type FormatType =
  | "none"
  | "numerical"
  | "numerical-decimals"
  | "percentage"
  | "percentage-decimals"
  | "currency";

export const DEFAULT_VALUES = {
  NUMBER: "8675309",
  DURATION: 400,
  LINE_HEIGHT: 1.4,
  FORMAT: "none" as FormatType,
} as const;

export const SLIDER_RANGES = {
  DURATION: {
    MIN: 200,
    MAX: 2000,
    STEP: 50,
  },
  LINE_HEIGHT: {
    MIN: 1.0,
    MAX: 2.0,
    STEP: 0.05,
  },
} as const;

export const FORMAT_OPTIONS = [
  { value: "none", label: "None (Plain Number)" },
  { value: "numerical", label: "Numerical (Commas)" },
  { value: "numerical-decimals", label: "Numerical with Decimals" },
  { value: "percentage", label: "Percentage" },
  { value: "percentage-decimals", label: "Percentage with Decimals" },
  { value: "currency", label: "Currency" },
] as const;
