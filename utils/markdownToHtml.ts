import { readFileSync } from 'fs';
import remark from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

export const markdownToHtml = (path: string) => {
    const file = readFileSync(`${process.cwd()}/${path}`);
    return remark()
        .use(gfm).use(html)
        .processSync(file)
        .toString()
    ;
}
