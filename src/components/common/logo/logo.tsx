import { classnames } from '@utils/classnames'
import { LogoProps } from './logo.type'

const logo = ({ isShrink, ...rest }: LogoProps) => {
  const letterClassName = classnames({ 'shrink-text': isShrink })
  return (
    <svg className="logo" data-shrink={isShrink} viewBox={isShrink ? '0 0 33 33' : '0 0 84 33'} fill="none" {...rest}>
      <defs>
        <linearGradient id="a" x1="3.92" y1="21.63" x2="6.37" y2="10.65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1579FF" />
          <stop offset=".16" stopColor="#1382FA" />
          <stop offset=".42" stopColor="#0E9CEB" />
          <stop offset=".75" stopColor="#06C5D3" />
          <stop offset=".99" stopColor="#00E7BF" />
        </linearGradient>
        <linearGradient id="b" x1="2532.39" y1="10031.2" x2="2252.62" y2="5256.04" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1579FF" />
          <stop offset=".16" stopColor="#1382FA" />
          <stop offset=".42" stopColor="#0E9CEB" />
          <stop offset=".75" stopColor="#06C5D3" />
          <stop offset=".99" stopColor="#00E7BF" />
        </linearGradient>
        <linearGradient id="c" x1="19820.8" y1="7203.14" x2="8525.38" y2="16933.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1579FF" />
          <stop offset=".16" stopColor="#1382FA" />
          <stop offset=".42" stopColor="#0E9CEB" />
          <stop offset=".75" stopColor="#06C5D3" />
          <stop offset=".99" stopColor="#00E7BF" />
        </linearGradient>
      </defs>
      <path d="m3.17 21.58.99-.86S5.06 9.59 9.79 6c0 0-8.65 1.13-6.62 15.58Z" fill="url(#a)" />
      <path d="m14 10.85.73.82.01 11.14s-.06 3.2 3.86 2.6c0 0-2.1 3.45-5.13-.36l-.7-13.1 1.24-1.1Z" fill="url(#b)" />
      <path
        d="M16.64 28.98a5.46 5.46 0 0 1-4.16-1.83 6.36 6.36 0 0 1-1.64-4.3V10.81h3.18v12.04c0 .8.29 1.57.82 2.16 1.8 1.98 5.16-.43 5.26-.5l.06-.05c4.51-3.06 7.06-6.14 7.57-9.16.34-2.01-.25-4.05-1.74-6.05a12.8 12.8 0 0 0-9.14-5.02c-3.07-.27-5.58.5-7.7 2.33-5.43 4.74-5.97 14.88-5.97 14.99L0 21.4c0-.12.15-2.93 1.06-6.42a27.95 27.95 0 0 1 2.08-5.61 17.16 17.16 0 0 1 3.93-5.2C9.82 1.75 13.2.71 17.13 1.06c4.57.4 8.73 2.7 11.4 6.28a12.8 12.8 0 0 1 1.98 3.74c.5 1.53.62 3.16.35 4.74-.65 3.9-3.65 7.69-8.89 11.24-.94.67-1.98 1.2-3.08 1.55-.73.23-1.48.35-2.25.36Z"
        fill="url(#c)"
      />
      <g {...letterClassName}>
        <path
          d="M40.64 5.57 37.54 15h-2.49l4.23-11.38h1.59l-.23 1.95ZM43.21 15l-3.1-9.43-.25-1.95h1.6L45.71 15h-2.5Zm-.14-4.23v1.83h-6v-1.83h6Zm8.54 2.39V3h2.27v12h-2.04l-.23-1.84Zm-5.34-2.29v-.16c0-.64.07-1.23.22-1.76.14-.53.36-.98.64-1.36a2.92 2.92 0 0 1 2.44-1.2 2.6 2.6 0 0 1 2.25 1.2c.27.38.48.83.65 1.36.16.51.27 1.08.35 1.7V11a9.03 9.03 0 0 1-.35 1.64c-.17.5-.38.95-.65 1.33a2.66 2.66 0 0 1-2.27 1.19 3 3 0 0 1-1.4-.32c-.4-.22-.75-.52-1.03-.9a4.3 4.3 0 0 1-.63-1.36 6.3 6.3 0 0 1-.22-1.7Zm2.25-.16v.16c0 .35.03.68.08.98.06.3.15.57.27.8.13.24.3.42.5.55.21.12.46.18.76.18.38 0 .7-.08.95-.26.25-.17.44-.41.57-.72a3 3 0 0 0 .24-1.06V10.3a3.69 3.69 0 0 0-.14-.88c-.08-.27-.19-.5-.33-.68a1.45 1.45 0 0 0-.53-.44c-.21-.1-.46-.15-.75-.15s-.54.06-.75.2c-.2.13-.37.3-.5.54-.13.23-.22.5-.28.81-.06.3-.09.64-.09 1Zm9.36-2.41V15h-2.25V6.55h2.11l.14 1.75Zm-.3 2.18h-.63c0-.6.07-1.13.2-1.63.15-.5.36-.93.64-1.3a2.9 2.9 0 0 1 2.47-1.16c.37 0 .72.06 1.03.17.31.11.58.29.8.53.23.23.41.54.54.92.12.37.18.82.18 1.35V15h-2.25V9.6c0-.38-.05-.67-.15-.88a.89.89 0 0 0-.45-.44 1.67 1.67 0 0 0-.68-.12c-.29 0-.54.06-.76.18-.22.12-.4.28-.53.5-.15.2-.25.45-.32.73-.07.28-.1.58-.1.9Zm5.02-.26-.8.1c0-.55.07-1.06.2-1.54.14-.47.35-.89.62-1.25s.62-.64 1.02-.83c.4-.2.88-.3 1.4-.3.41 0 .78.05 1.12.17.33.11.61.3.85.55.24.25.42.58.55.99.13.4.2.9.2 1.5V15h-2.27V9.6a2 2 0 0 0-.15-.89.82.82 0 0 0-.44-.43 1.65 1.65 0 0 0-.67-.12 1.48 1.48 0 0 0-1.22.6 2 2 0 0 0-.3.65c-.07.25-.1.52-.1.8Zm9.26-3.67V15h-2.25V6.55h2.25Zm-2.4-2.2c0-.33.12-.6.35-.82.23-.21.54-.32.92-.32s.69.1.92.32c.23.21.35.49.35.81 0 .33-.12.6-.35.82-.23.21-.54.32-.92.32s-.7-.11-.92-.32a1.06 1.06 0 0 1-.34-.82Zm6.46 4V15h-2.25V6.55h2.11l.14 1.8Zm-.32 2.13h-.61c0-.63.08-1.2.24-1.7.16-.5.39-.93.68-1.28a2.92 2.92 0 0 1 2.4-1.1c.4 0 .75.05 1.08.16.33.12.61.3.85.55.24.25.42.58.54 1 .13.4.2.9.2 1.5V15H78.7V9.6a2 2 0 0 0-.15-.87.88.88 0 0 0-.46-.44 1.8 1.8 0 0 0-.74-.13c-.3 0-.56.06-.79.18-.22.12-.4.28-.54.5-.15.2-.25.45-.33.73-.07.28-.1.58-.1.9Z"
          fill="var(--B12)"
        />
        <path
          d="M39.2 26.97V20.5h.59V28h-.55l-.04-1.03Zm-3.67-1.56v-.1c0-.41.05-.78.14-1.1.1-.34.23-.62.4-.86a1.8 1.8 0 0 1 1.5-.73c.31 0 .59.05.82.15.24.1.44.25.61.44.18.18.31.4.42.67.1.26.18.55.23.87v1.3c-.04.3-.1.58-.21.83-.1.24-.24.46-.42.65-.17.18-.38.32-.62.42a2.21 2.21 0 0 1-1.68-.05 1.85 1.85 0 0 1-.64-.55 2.7 2.7 0 0 1-.4-.85c-.1-.33-.15-.7-.15-1.09Zm.59-.1v.1c0 .31.03.6.1.86.05.27.15.5.27.69.13.2.3.35.49.46.2.11.42.16.7.16.33 0 .6-.06.84-.19.22-.13.4-.3.54-.5.14-.22.24-.46.3-.71v-1.52a3.2 3.2 0 0 0-.17-.53 1.82 1.82 0 0 0-.3-.49 1.36 1.36 0 0 0-.5-.37c-.2-.1-.43-.14-.7-.14-.28 0-.51.06-.7.17-.2.1-.37.26-.5.46-.12.2-.22.43-.28.69-.06.26-.1.55-.1.86Zm8.41 1.74v-2.72c0-.25-.05-.47-.15-.65-.1-.18-.26-.32-.46-.42a1.7 1.7 0 0 0-.75-.15c-.27 0-.52.05-.73.15-.21.1-.38.22-.5.38a.86.86 0 0 0-.18.54h-.59c0-.2.05-.4.15-.58.1-.19.23-.36.41-.5.18-.15.4-.26.64-.35.25-.09.53-.13.83-.13.37 0 .7.06 1 .19.28.13.5.32.67.57.16.25.25.57.25.96v2.55c0 .18 0 .37.03.57.03.2.07.35.13.48V28h-.62a4.7 4.7 0 0 1-.12-.95Zm.14-2.13.01.45h-1.15c-.3 0-.57.03-.8.09-.24.05-.44.13-.6.23-.16.1-.29.22-.37.37a.94.94 0 0 0-.13.48.98.98 0 0 0 .55.9c.18.09.4.14.64.14.32 0 .6-.06.85-.19.26-.12.46-.27.62-.47.17-.2.28-.4.33-.64l.26.34a1.7 1.7 0 0 1-.24.5 2.2 2.2 0 0 1-1.89.98c-.34 0-.64-.07-.9-.2a1.5 1.5 0 0 1-.6-.53 1.44 1.44 0 0 1-.2-.77 1.45 1.45 0 0 1 .64-1.23c.2-.14.46-.25.76-.33.3-.08.63-.12 1-.12h1.22Zm5.17 1.73a.92.92 0 0 0-.1-.42 1 1 0 0 0-.42-.39c-.2-.12-.5-.21-.9-.3-.28-.06-.55-.13-.78-.22a2.27 2.27 0 0 1-.57-.29 1.15 1.15 0 0 1-.36-.4 1.23 1.23 0 0 1-.12-.58c0-.2.04-.37.12-.55.1-.17.22-.33.38-.46s.35-.23.58-.3c.23-.08.5-.12.78-.12.4 0 .75.07 1.04.2.3.15.52.33.67.57.16.24.24.5.24.8h-.59a.92.92 0 0 0-.16-.51c-.1-.16-.25-.3-.46-.4a1.6 1.6 0 0 0-.74-.16c-.3 0-.55.05-.74.14-.19.09-.33.2-.41.35a.83.83 0 0 0-.13.43c0 .12.02.22.05.32.04.1.11.18.2.27.1.08.25.15.44.23.18.07.42.14.72.2.43.1.77.22 1.04.35.28.14.48.3.61.5s.2.43.2.71c0 .22-.05.42-.14.6-.1.18-.22.34-.4.47-.17.13-.37.23-.61.3-.24.07-.5.1-.8.1-.45 0-.83-.07-1.14-.21-.3-.15-.53-.35-.7-.59-.15-.24-.23-.5-.23-.77H47a1 1 0 0 0 .26.64c.15.16.34.27.56.34.23.06.45.1.67.1.3 0 .55-.05.75-.14.2-.09.35-.2.46-.34.1-.15.15-.3.15-.47Zm2.49-6.15V28h-.58v-7.5h.58Zm-.13 4.53-.26-.15c.02-.3.08-.6.19-.87.1-.28.25-.52.43-.73a1.94 1.94 0 0 1 1.48-.66c.26 0 .5.03.7.1.22.08.4.2.54.35.15.15.26.35.33.6.08.24.12.54.12.9V28h-.59v-3.44c0-.37-.05-.65-.15-.86a.9.9 0 0 0-.43-.44c-.18-.09-.4-.13-.66-.13-.28 0-.52.06-.73.18-.21.12-.39.28-.53.48a2.3 2.3 0 0 0-.44 1.24Zm5.02-4.53h.59v6.47L57.77 28h-.55v-7.5Zm4.27 4.81v.1c0 .4-.05.76-.14 1.09-.1.32-.22.61-.4.85a1.8 1.8 0 0 1-1.49.75c-.31 0-.6-.05-.84-.15-.24-.1-.45-.24-.62-.42a2.2 2.2 0 0 1-.42-.65c-.1-.25-.17-.53-.22-.83v-1.3c.05-.32.13-.61.24-.87.1-.26.24-.49.41-.67.18-.2.38-.34.62-.44.24-.1.51-.15.82-.15.33 0 .61.06.86.19.26.12.47.3.64.54.18.24.3.52.4.85.09.33.14.7.14 1.11Zm-.6.1v-.1c0-.31-.02-.6-.08-.86s-.15-.5-.28-.69c-.13-.2-.28-.35-.48-.46a1.4 1.4 0 0 0-.7-.17c-.28 0-.52.05-.72.14-.2.1-.36.22-.49.37s-.23.31-.3.5c-.08.17-.13.35-.17.52v1.52c.06.24.15.47.29.69.14.21.32.39.55.52.23.13.51.2.85.2a1.34 1.34 0 0 0 1.17-.63c.12-.2.21-.42.27-.69.06-.26.1-.55.1-.86Zm1.56.03v-.16c0-.38.06-.74.17-1.06.11-.33.27-.61.47-.85a2.28 2.28 0 0 1 1.71-.75 2.3 2.3 0 0 1 1.73.75c.2.24.36.52.48.85.1.32.16.68.16 1.06v.16c0 .39-.05.74-.16 1.07-.12.32-.27.6-.48.84a2.16 2.16 0 0 1-1.71.75 2.21 2.21 0 0 1-1.72-.75c-.2-.24-.37-.52-.48-.84a3.29 3.29 0 0 1-.17-1.07Zm.59-.16v.16c0 .3.03.57.11.83.08.25.2.48.34.69a1.61 1.61 0 0 0 1.33.63 1.61 1.61 0 0 0 1.31-.63c.15-.2.26-.44.34-.7.08-.25.12-.53.12-.82v-.16c0-.29-.04-.56-.12-.82a2.1 2.1 0 0 0-.34-.68 1.6 1.6 0 0 0-1.32-.65 1.6 1.6 0 0 0-1.32.65c-.15.2-.26.43-.34.68a2.9 2.9 0 0 0-.11.82Zm8.55 1.77v-2.72c0-.25-.05-.47-.15-.65-.1-.18-.26-.32-.46-.42a1.7 1.7 0 0 0-.75-.15c-.27 0-.52.05-.73.15-.21.1-.38.22-.5.38a.86.86 0 0 0-.19.54h-.58c0-.2.05-.4.15-.58.1-.19.23-.36.41-.5.18-.15.4-.26.64-.35.25-.09.53-.13.83-.13.37 0 .7.06 1 .19.28.13.5.32.67.57.16.25.24.57.24.96v2.55c0 .18.02.37.04.57.03.2.07.35.13.48V28h-.62a4.7 4.7 0 0 1-.12-.95Zm.14-2.13.01.45h-1.15c-.3 0-.57.03-.8.09-.24.05-.44.13-.6.23-.16.1-.29.22-.38.37a.94.94 0 0 0-.12.48.98.98 0 0 0 .55.9c.18.09.39.14.63.14.33 0 .62-.06.86-.19.25-.12.46-.27.62-.47.17-.2.28-.4.33-.64l.25.34a1.7 1.7 0 0 1-.23.5 2.2 2.2 0 0 1-1.89.98c-.34 0-.65-.07-.9-.2a1.5 1.5 0 0 1-.6-.53 1.44 1.44 0 0 1-.2-.77 1.45 1.45 0 0 1 .64-1.23c.2-.14.46-.25.76-.33.3-.08.63-.12 1-.12h1.22Zm2.59-1.33V28h-.58v-5.28h.57l.01.87Zm1.87-.91-.01.53a4.46 4.46 0 0 0-.4-.03c-.25 0-.47.05-.66.14-.2.1-.35.22-.48.39-.13.16-.23.35-.3.57-.07.22-.1.46-.12.7l-.21.09c0-.34.03-.67.1-.96.08-.3.19-.56.33-.78.15-.22.34-.4.56-.52a1.62 1.62 0 0 1 1.2-.13Zm4.25 4.3V20.5h.59V28h-.55l-.04-1.03Zm-3.67-1.57v-.1c0-.41.05-.78.15-1.1.09-.34.23-.62.4-.86a1.8 1.8 0 0 1 1.5-.73c.3 0 .58.05.82.15.23.1.44.25.6.44.18.18.32.4.42.67.1.26.19.55.24.87v1.3c-.04.3-.12.58-.22.83-.1.24-.24.46-.41.65-.18.18-.39.32-.63.42a2.21 2.21 0 0 1-1.68-.05 1.85 1.85 0 0 1-.64-.55 2.7 2.7 0 0 1-.4-.85c-.1-.33-.15-.7-.15-1.09Zm.59-.1v.1c0 .31.03.6.1.86.06.27.15.5.28.69.12.2.28.35.48.46.2.11.43.16.7.16.33 0 .61-.06.84-.19.23-.13.4-.3.54-.5.14-.22.24-.46.3-.71v-1.52c-.04-.17-.1-.35-.17-.53a1.82 1.82 0 0 0-.3-.49 1.36 1.36 0 0 0-.5-.37c-.19-.1-.43-.14-.7-.14-.28 0-.51.06-.7.17-.2.1-.36.26-.5.46-.12.2-.22.43-.28.69-.06.26-.09.55-.09.86Z"
          fill="var(--B11)"
        />
      </g>
    </svg>
  )
}

export default logo
