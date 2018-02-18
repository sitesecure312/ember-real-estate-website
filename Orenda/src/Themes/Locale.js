import I18n from 'react-native-i18n';
import fr from './locales/fr';  

I18n.fallbacks = true;
I18n.defaultSeparator = "`";
en = {};
for (key in fr)
{
   en[key] = key;
}


I18n.translations = {
  en,
  fr
};

export default class Local
{
  constructor(props){
  }
	static t(scope, options){
		//I18n.locale="fr";
		translation = I18n.t(scope, options);
		//if (translation.startsWith("[missing \"en."))
		//	return scope;
		return translation;
	}
	static l(scope, value, options){
		return I18n.t(scope, value, options);
	}
	static p(count, scope, options){
		return I18n.t(count, scope, options);
	}
}