import React from 'react';

import ENGLISH from './lang/en.json';

// Default to English
const LocaleContext = React.createContext(ENGLISH);

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
export default LocaleContext;
