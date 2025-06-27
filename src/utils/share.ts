import type { MetaHTMLAttributes } from "vue";

function detectMob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

const metaTitle_content =
  (document.querySelector('meta[property="og:title"]') as MetaHTMLAttributes).content || '';
const metaUrl_content =
  (document.querySelector('meta[property="og:url"]') as MetaHTMLAttributes).content || '';
const twitterMetaDescription_content =
  (document.querySelector('meta[name="twitter:description"]') as MetaHTMLAttributes).content || '';

// const metaDescription_content =
//   document.querySelector('meta[property="og:description"]')?.content || '';

const encodeTitle = encodeURI(metaTitle_content);
const encodeUrl = encodeURI(metaUrl_content);
const encodeTwitterDescription = encodeURI(twitterMetaDescription_content);
// const encodeDescription = encodeURI(metaDescription_content);

const shareTwitterText = `${encodeTitle}%0D%0A%0D%0A${encodeTwitterDescription}`;

export const shareURL_line = (() =>
  detectMob()
    ? `https://line.naver.jp/R/msg/text/?${encodeUrl}`
    : `https://social-plugins.line.me/lineit/share?url=${encodeUrl}`)();

export const shareURL_fb = (() =>
  `https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href=${encodeUrl}&redirect_uri=${encodeUrl}`)();

export const shareURL_twitter = (() =>
  `https://twitter.com/intent/tweet/?text=${shareTwitterText}${encodeUrl}`)();

export default {
  shareURL_fb,
  shareURL_line,
  shareURL_twitter,
};