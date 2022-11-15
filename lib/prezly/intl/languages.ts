import type { CultureRef, NewsroomLanguageSettings, Story } from '@prezly/sdk';

function isOnlyCulture(culture: CultureRef, languages: NewsroomLanguageSettings[]): boolean {
    const numberOfLanguages = languages.filter(
        ({ locale: { language_code } }) => language_code === culture.language_code,
    ).length;

    return numberOfLanguages === 1;
}

/**
 * @returns the display name of the locale in its native language
 *
 * If there's only one culture used in a specific language,
 * we strip the culture name completely.
 *
 * Examples:
 *  - English (Global), Spanish (Spain)
 *  - -> English, Spanish
 *  - English (Global), English (UK), Spanish (Spain)
 *  - -> English (Global), English (UK), Spanish
 */
export function getLanguageDisplayName(
    language: NewsroomLanguageSettings,
    languages: NewsroomLanguageSettings[],
): string {
    const { locale } = language;

    if (isOnlyCulture(locale, languages)) {
        const cultureNameIndex = locale.native_name.indexOf('(');

        if (cultureNameIndex !== -1) {
            return locale.native_name.slice(0, cultureNameIndex - 1);
        }
    }

    return locale.native_name;
}

/**
 * @returns Language set as default in the Newsroom Settings.
 */
export function getDefaultLanguage(languages: NewsroomLanguageSettings[]) {
    return languages.find(({ is_default }) => is_default) || languages[0];
}

/**
 * @returns Only languages having at least one published story
 */
export function getUsedLanguages(languages: NewsroomLanguageSettings[]) {
    return languages.filter((language) => language.public_stories_count > 0);
}

export function getLanguageFromStory(languages: NewsroomLanguageSettings[], story: Story) {
    const { code: storyLocaleCode } = story.culture;

    return languages.find(({ code }) => code === storyLocaleCode);
}
