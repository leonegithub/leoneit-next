import { match } from "formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { " accept-language": "enUS,en,q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "it-IT", "it", "es-ES", "es"];
let defaultLocale = "it-IT";

match(languages, locales, defaultLocale); // -> 'it-IT'
