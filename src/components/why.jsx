import React from 'react'
import Info from './info'
export default function Why() {
    return (
        <>
            <div className='my-[3rem]'>
                <h1 className='text-center text-[1.5rem] md:text-[2.2rem] font-bold'>Why choose us?</h1>
                <section className='md:flex md:flex-wrap md:gap-x-[10rem] md:gap-y-[4rem] justify-center md:px-[7rem]'>
                    <Info
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="90" height="78" viewBox="0 0 90 78" fill="none">
                                <path d="M26.7097 26.6886C26.7097 23.8573 27.8353 21.1419 29.8389 19.1399C31.8426 17.1379 34.56 16.0131 37.3936 16.0131C40.2271 16.0131 42.9446 17.1379 44.9482 19.1399C46.9519 21.1419 48.0775 23.8573 48.0775 26.6886C48.0775 29.5199 46.9519 32.2352 44.9482 34.2372C42.9446 36.2393 40.2271 37.364 37.3936 37.364C34.56 37.364 31.8426 36.2393 29.8389 34.2372C27.8353 32.2352 26.7097 29.5199 26.7097 26.6886ZM37.3936 21.3509C35.9768 21.3509 34.6181 21.9132 33.6163 22.9142C32.6145 23.9152 32.0516 25.2729 32.0516 26.6886C32.0516 28.1042 32.6145 29.4619 33.6163 30.4629C34.6181 31.4639 35.9768 32.0263 37.3936 32.0263C38.8104 32.0263 40.1691 31.4639 41.1709 30.4629C42.1727 29.4619 42.7355 28.1042 42.7355 26.6886C42.7355 25.2729 42.1727 23.9152 41.1709 22.9142C40.1691 21.9132 38.8104 21.3509 37.3936 21.3509ZM8.01291 0C5.88776 0 3.84964 0.843546 2.34693 2.34507C0.844215 3.84659 0 5.88309 0 8.00657V45.3706C0 47.494 0.844215 49.5305 2.34693 51.0321C3.84964 52.5336 5.88776 53.3771 8.01291 53.3771H37.5111C37.6742 51.5711 38.0051 49.7842 38.4994 48.0394H21.3678V42.7017C21.3678 39.8704 20.2421 37.1551 18.2385 35.153C16.2349 33.151 13.5174 32.0263 10.6839 32.0263H5.34194V21.3509H10.6839C13.5174 21.3509 16.2349 20.2261 18.2385 18.2241C20.2421 16.2221 21.3678 13.5067 21.3678 10.6754V5.33771H53.4194V10.6754C53.4194 13.5067 54.545 16.2221 56.5487 18.2241C58.5523 20.2261 61.2698 21.3509 64.1033 21.3509H69.4452V26.806C71.2526 26.9696 73.0409 27.3002 74.7872 27.7935V8.00657C74.7872 5.88309 73.943 3.84659 72.4403 2.34507C70.9375 0.843546 68.8994 0 66.7743 0H8.01291ZM5.34194 8.00657C5.34194 7.29874 5.62335 6.61991 6.12425 6.1194C6.62516 5.6189 7.30453 5.33771 8.01291 5.33771H16.0258V10.6754C16.0258 12.0911 15.463 13.4487 14.4612 14.4498C13.4594 15.4508 12.1007 16.0131 10.6839 16.0131H5.34194V8.00657ZM58.7614 5.33771H66.7743C67.4827 5.33771 68.162 5.6189 68.6629 6.1194C69.1638 6.61991 69.4452 7.29874 69.4452 8.00657V16.0131H64.1033C62.6865 16.0131 61.3278 15.4508 60.326 14.4498C59.3242 13.4487 58.7614 12.0911 58.7614 10.6754V5.33771ZM16.0258 48.0394H8.01291C7.30453 48.0394 6.62516 47.7582 6.12425 47.2577C5.62335 46.7572 5.34194 46.0784 5.34194 45.3706V37.364H10.6839C12.1007 37.364 13.4594 37.9264 14.4612 38.9274C15.463 39.9284 16.0258 41.2861 16.0258 42.7017V48.0394ZM11.1379 58.7148H37.5111C37.6749 60.5208 38.0057 62.3076 38.4994 64.0526H18.6968C17.0391 64.0534 15.4218 63.5405 14.0681 62.5845C12.7143 61.6285 11.6905 60.2765 11.1379 58.7148ZM85.4711 18.682V33.3981C83.8231 32.0387 82.0319 30.8629 80.1291 29.8912V11.1291C81.6921 11.6813 83.0451 12.7042 84.0019 14.0569C84.9586 15.4096 85.4719 17.0256 85.4711 18.682ZM53.7666 39.7286C54.1514 41.0984 54.2582 42.5313 54.0808 43.9429C53.9034 45.3546 53.4454 46.7165 52.7337 47.9488C52.022 49.1811 51.071 50.2588 49.9366 51.1186C48.8021 51.9784 47.5071 52.6029 46.1277 52.9554L43.6597 53.5853C43.4827 55.3897 43.5006 57.2079 43.7131 59.0084L45.5828 59.4514C46.9991 59.7861 48.332 60.4064 49.4998 61.2742C50.6676 62.142 51.6457 63.2391 52.374 64.4981C53.1023 65.7571 53.5655 67.1515 53.7352 68.5958C53.9048 70.0401 53.7774 71.5038 53.3607 72.8971L52.6822 75.1497C54.0604 76.2386 55.5508 77.1673 57.1427 77.9146L58.8789 76.0784C59.8784 75.0209 61.0836 74.1787 62.4205 73.6034C63.7575 73.0281 65.198 72.7318 66.6537 72.7328C68.1094 72.7338 69.5495 73.032 70.8857 73.6092C72.2219 74.1863 73.4259 75.0302 74.4239 76.0891L76.2242 78C77.784 77.2794 79.2584 76.388 80.6152 75.3418L79.7819 72.374C79.3964 71.0039 79.2889 69.5705 79.4659 68.1582C79.6429 66.746 80.1007 65.3833 80.8125 64.1505C81.5242 62.9176 82.4755 61.8394 83.6104 60.9792C84.7453 60.1191 86.0408 59.4944 87.4209 59.1419L89.8782 58.5173C90.0568 56.7113 90.0389 54.8911 89.8247 53.0889L87.9657 52.6512C86.5488 52.3166 85.2153 51.6962 84.0471 50.828C82.8788 49.9599 81.9005 48.8623 81.1721 47.6026C80.4438 46.343 79.9807 44.9479 79.8115 43.503C79.6422 42.0581 79.7703 40.5938 80.1879 39.2002L80.861 36.953C79.4845 35.8629 77.988 34.9334 76.4004 34.1827L74.6643 36.0189C73.6652 37.0767 72.4603 37.9194 71.1235 38.4951C69.7867 39.0709 68.3463 39.3677 66.8906 39.3672C65.435 39.3667 63.9947 39.0689 62.6584 38.4922C61.322 37.9155 60.1177 37.0721 59.1193 36.0135L57.319 34.1026C55.7628 34.821 54.2918 35.7108 52.9333 36.7555L53.7666 39.7286ZM66.7689 61.389C65.3521 61.389 63.9934 60.8267 62.9916 59.8257C61.9898 58.8246 61.427 57.467 61.427 56.0513C61.427 54.6357 61.9898 53.278 62.9916 52.277C63.9934 51.276 65.3521 50.7136 66.7689 50.7136C68.1857 50.7136 69.5444 51.276 70.5462 52.277C71.5481 53.278 72.1109 54.6357 72.1109 56.0513C72.1109 57.467 71.5481 58.8246 70.5462 59.8257C69.5444 60.8267 68.1857 61.389 66.7689 61.389Z" fill="#5927E5"/>
                            </svg>}
                        title={'Best Price'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaofficia deserunt mollit anim id est laborum.'}
                    />
                    <Info
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="90" height="78" viewBox="0 0 90 78" fill="none">
                                <path d="M89.3979 26.6759L80.4461 4.90489C79.822 3.39828 78.7588 2.25996 77.4827 1.73222C76.2066 1.20448 74.8184 1.32901 73.6136 2.07929L64.9541 7.59153H58.6331L46.4295 0.597003C45.3209 -0.0655318 44.0575 -0.181122 42.8854 0.272753L24.8357 6.94303L16.3955 1.56975C15.1892 0.831436 13.8043 0.71324 12.5308 1.2399C11.2573 1.76656 10.1939 2.89725 9.56296 4.39535L0.611221 26.2127C0.286005 26.9719 0.0855575 27.8068 0.021987 28.667C-0.0415834 29.5272 0.0330424 30.3948 0.241357 31.2174C0.449671 32.04 0.78735 32.8005 1.234 33.453C1.68064 34.1055 2.22698 34.6365 2.84002 35.0138L11.6821 40.6187L31.4856 60.2126C32.0377 60.7935 32.6877 61.2056 33.3855 61.417L54.5774 68.1336C54.971 68.2636 55.3765 68.326 55.7832 68.3188C57.1391 68.3139 58.4388 67.6315 59.4004 66.4197L72.8463 49.3734H72.9924L78.5462 40.9892L87.1691 35.5233C87.7802 35.1313 88.3242 34.5897 88.7694 33.9298C89.2146 33.27 89.5524 32.5049 89.7632 31.6786C89.9679 30.8559 90.041 29.9896 89.9782 29.1306C89.9155 28.2716 89.7182 27.4371 89.3979 26.6759ZM70.9463 43.6296L56.5139 30.3353C56.1339 29.992 55.6774 29.8114 55.2108 29.8197C54.7443 29.8281 54.292 30.0249 53.9197 30.3816L49.2429 34.8285C47.5962 36.3849 45.597 37.2257 43.543 37.2257C41.489 37.2257 39.4899 36.3849 37.8432 34.8285L35.8701 32.9293C35.7776 32.8562 35.7018 32.7535 35.6505 32.6316C35.5992 32.5096 35.5741 32.3726 35.5778 32.2345C35.5691 32.105 35.5844 31.9748 35.6225 31.8542C35.6605 31.7335 35.7203 31.6258 35.797 31.5397L50.0833 13.3817C50.2302 13.2378 50.4093 13.1567 50.5948 13.1501H64.1503L74.527 38.3489L70.9463 43.6296ZM4.44768 29.5015C4.40819 29.3828 4.39093 29.2541 4.39727 29.1255C4.40361 28.9969 4.43337 28.872 4.48422 28.7604L13.4725 6.94303C13.5387 6.79747 13.6349 6.67747 13.7507 6.59587C13.8665 6.51428 13.9977 6.47416 14.1302 6.47982C14.2334 6.46148 14.3382 6.49469 14.4225 6.57246L21.5839 11.0656L11.9014 34.5506L4.81306 30.0111C4.72569 29.9668 4.6474 29.8979 4.58411 29.8096C4.52081 29.7214 4.47416 29.616 4.44768 29.5015ZM56.3312 62.4823C56.241 62.5934 56.1297 62.6731 56.0081 62.7137C55.8865 62.7542 55.7587 62.7543 55.637 62.714L34.4451 56.0437L34.1894 55.8584L15.6282 37.4688L26.0049 12.27L44.1276 5.59971C44.2978 5.5472 44.4766 5.5634 44.6392 5.64603L48.7679 8.00842C48.0969 8.34076 47.4874 8.84542 46.9776 9.49071L32.6913 27.6024C32.1674 28.2556 31.7616 29.0451 31.5018 29.9165C31.242 30.7879 31.1344 31.7204 31.1865 32.6496C31.2386 33.5788 31.4491 34.4826 31.8036 35.2987C32.158 36.1147 32.6479 36.8235 33.2394 37.3762L35.2124 39.2753C37.6251 41.5324 40.5446 42.7501 43.543 42.7501C46.5414 42.7501 49.461 41.5324 51.8736 39.2753L55.2716 36.0328L67.9502 47.7522L56.3312 62.4823ZM85.5614 29.9647C85.5373 30.0862 85.492 30.1993 85.4288 30.2955C85.3655 30.3918 85.2859 30.4687 85.196 30.5206L78.1077 35.0138L68.4252 11.5752L75.5866 7.03567C75.757 6.93786 75.9504 6.92657 76.1271 7.00412C76.3038 7.08168 76.4504 7.24217 76.5366 7.45256L85.5249 29.2699C85.5754 29.3731 85.6051 29.4904 85.6115 29.6116C85.6179 29.7327 85.6007 29.854 85.5614 29.9647ZM41.2777 75.8692C41.1576 76.4698 40.8851 77.0037 40.5022 77.3887C40.1193 77.7738 39.6472 77.9885 39.1585 78L38.6104 77.9074L27.6126 74.3869C26.8271 74.1506 26.0995 73.6734 25.4934 72.9973L17.2724 63.9183C17.0146 63.6988 16.7965 63.4124 16.6325 63.078C16.4686 62.7436 16.3626 62.3689 16.3215 61.9786C16.2804 61.5884 16.3052 61.1915 16.3942 60.8143C16.4832 60.4371 16.6344 60.0882 16.8378 59.7907C17.0412 59.4932 17.2921 59.2538 17.574 59.0885C17.8559 58.9232 18.1622 58.8357 18.4727 58.8318C18.7833 58.8279 19.0909 58.9077 19.3753 59.0658C19.6597 59.224 19.9144 59.457 20.1224 59.7494L28.3799 68.8284C28.465 68.9173 28.565 68.9807 28.6722 69.0137L39.7066 72.4878C40.2681 72.673 40.7488 73.133 41.0434 73.7669C41.3379 74.4007 41.4221 75.1567 41.2777 75.8692Z" fill="#5927E5"/>
                            </svg>}
                        title={'Trustworthy'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaofficia deserunt mollit anim id est laborum.'}
                    />
                    <Info
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="90" height="78" viewBox="0 0 90 78" fill="none">
                                <path d="M45 0L0 11.7V35.451C0 55.146 19.1812 73.515 45 78C70.8187 73.515 90 55.146 90 35.451V11.7L45 0ZM39.0375 52.806L19.125 39L27.0563 33.501L38.9813 41.769L62.8312 25.233L70.7625 30.732L39.0375 52.806Z" fill="#5927E5"/>
                            </svg>}
                        title={'Guaranty'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaofficia deserunt mollit anim id est laborum.'}
                    />
                    <Info
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="97" height="78" viewBox="0 0 97 78" fill="none">
                                <path d="M61.7273 0C71.0822 0 80.0539 4.10892 86.6689 11.4228C93.2838 18.7368 97 28.6566 97 39C97 49.3434 93.2838 59.2632 86.6689 66.5772C80.0539 73.8911 71.0822 78 61.7273 78C52.3724 78 43.4006 73.8911 36.7857 66.5772C30.1708 59.2632 26.4545 49.3434 26.4545 39C26.4545 28.6566 30.1708 18.7368 36.7857 11.4228C43.4006 4.10892 52.3724 0 61.7273 0ZM61.7273 9.75C54.7111 9.75 47.9823 12.8317 43.0211 18.3171C38.0599 23.8026 35.2727 31.2424 35.2727 39C35.2727 46.7576 38.0599 54.1974 43.0211 59.6829C47.9823 65.1683 54.7111 68.25 61.7273 68.25C68.7435 68.25 75.4723 65.1683 80.4335 59.6829C85.3947 54.1974 88.1818 46.7576 88.1818 39C88.1818 31.2424 85.3947 23.8026 80.4335 18.3171C75.4723 12.8317 68.7435 9.75 61.7273 9.75ZM57.3182 19.5H63.9318V37.9275L74.205 49.2862L69.5314 54.4538L57.3182 40.95V19.5ZM4.40909 68.25C3.23973 68.25 2.11826 67.7364 1.29139 66.8222C0.464528 65.9079 0 64.6679 0 63.375C0 62.0821 0.464528 60.8421 1.29139 59.9278C2.11826 59.0136 3.23973 58.5 4.40909 58.5H21.2959C22.6627 61.9613 24.4264 65.2275 26.4545 68.25H4.40909ZM8.81818 43.875C7.64882 43.875 6.52735 43.3614 5.70048 42.4471C4.87362 41.5329 4.40909 40.2929 4.40909 39C4.40909 37.7071 4.87362 36.4671 5.70048 35.5529C6.52735 34.6386 7.64882 34.125 8.81818 34.125H17.8568L17.6364 39L17.8568 43.875H8.81818ZM13.2273 19.5C12.0579 19.5 10.9364 18.9864 10.1096 18.0721C9.28271 17.1579 8.81818 15.9179 8.81818 14.625C8.81818 13.3321 9.28271 12.0921 10.1096 11.1779C10.9364 10.2636 12.0579 9.75 13.2273 9.75H26.4545C24.4264 12.7725 22.6627 16.0387 21.2959 19.5H13.2273Z" fill="#5927E5"/>
                            </svg>}
                        title={'Quick Process'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaofficia deserunt mollit anim id est laborum.'}
                    />
                </section>
            </div>
        </>
    )
}