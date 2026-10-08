import en from "./en.json";
import fr from "./fr.json";
import pt_BR from "./pt-BR.json";

export const LOCALES = {
  en,
  fr,
  "pt-BR": pt_BR,
} as const;

export type LocaleName = keyof typeof LOCALES;

export const LOCALE_LABELS: Record<LocaleName, string> = {
  en: "English",
  fr: "Français",
  "pt-BR": "Português Brasileiro",
};
