// Remove multiple whitespaces from betweend words, trim string and replace spaces with + signs
export const replaceWhitespace = (str = '') => str.replace(/\s+/g, ' ').trim().replace(' ', '+');
