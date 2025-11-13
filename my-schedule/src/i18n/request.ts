// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = requestLocale ?? 'ko';  // 기본 로케일 지정

    let messages;

    switch(locale){
        case 'en':
            messages = (await import('../../locales/en.json')).default;
            break;
        case 'jp':
            messages = (await import('../../locales/jp.json')).default;
            break;
        default:
        messages = (await import('../../locales/ko.json')).default;

    }

    return {
        locale,
        messages,
        // 필요 시 timeZone, formats 등 추가 가능
    };
});