// Locale switcher refs:
// - Paraglide docs: https://inlang.com/m/gerre34r/library-inlang-paraglideJs
// - Router example: https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#switching-locale

import { m } from "@/paraglide/messages";
import type { Locale } from "@/paraglide/runtime";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";
import "@/styles/locale-switcher.css";

export default function ParaglideLocaleSwitcher() {
  const currentLocale = getLocale();

  return (
    <div className="locale-switcher">
      <span className="locale-switcher__label">
        {m.current_locale({ locale: currentLocale })}
      </span>
      <div className="locale-switcher__controls">
        {locales.map((locale: Locale) => (
          <button
            className={
              locale === currentLocale
                ? "locale-switcher__button locale-switcher__button--active"
                : "locale-switcher__button"
            }
            key={locale}
            onClick={() => setLocale(locale)}
            type="button"
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
