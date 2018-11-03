import React, { useState } from "react";
import { addLocaleData } from "react-intl";
import antdEn from "antd/lib/locale-provider/en_US";
import antdVi from "antd/lib/locale-provider/vi_VN";
import appLocaleEn from "react-intl/locale-data/en";
import appLocaleVi from "react-intl/locale-data/vi";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import vnMessages from "../../i18n/vn.json";
import enMessages from "../../i18n/en.json";
import { DEFAULT_LOCALE } from "../../constants/app";

interface IProps {
  children: JSX.Element;
}

const messages: any = {
  "vi-VN": vnMessages,
  "en-US": enMessages
};

addLocaleData([...appLocaleVi, ...appLocaleEn]);

export const Language = React.createContext({
  locale: null,
  setLocale: null
} as {
  locale: any;
  setLocale: any;
});

const LanguageProvider = (props: IProps) => {
  const { children } = props;
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  return (
    <Language.Provider
      value={{
        locale,
        setLocale
      }}
    >
      <LocaleProvider locale={locale === DEFAULT_LOCALE ? antdVi : antdEn}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          {React.Children.only(children)}
        </IntlProvider>
      </LocaleProvider>
    </Language.Provider>
  );
};

export default LanguageProvider;
