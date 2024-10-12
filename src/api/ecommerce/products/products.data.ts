import type { ProductCore } from './products.type'

export const PRODUCT_CORE = new Map<number, ProductCore>()
PRODUCT_CORE.set(1, {
  heroImage: ['nike1.webp'],
  title: 'Nike Air Max 270',
  price: {
    price: 210,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Nike's first lifestyle Air Max shoe is everything you imagined with the Nike Air Max 270. What we love most (for obvious reasons): the BIG, bold wraparound 270 Air unit to showcase our greatest technology everywhere you go.`,
})
PRODUCT_CORE.set(2, {
  heroImage: ['nike2.webp'],
  title: 'Nike Waffle Debut',
  price: {
    price: 75,
  },
  rating: 4,
  color: 'white',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Retro gets modernized with these sleek sneaks inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colors, and the updated wedge midsole gives you an extra lift. Style, comfort, iconic Waffle outsole—this is a perfect new addition to your daily rotation.`,
})
PRODUCT_CORE.set(3, {
  heroImage: ['nike3.webp'],
  title: "Nike Blazer Mid'77 Vintage",
  price: { price: 123 },
  rating: 3,
  color: 'green',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Styled for the ‘70s. Loved in the ‘80s. Classic in the ‘90s. Ready for the future. The Nike Blazer Mid ’77 Vintage delivers a timeless design that’s easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like you’ve just pulled them from the history books. Go ahead, perfect your outfit.`,
})

PRODUCT_CORE.set(4, {
  heroImage: ['nike4.webp'],
  title: 'Air Jordan 1 Mid',
  price: { price: 123 },
  rating: 4,
  color: 'white',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. Fresh color trims the clean, classic materials, imbuing modernity into a classic design.`,
})
PRODUCT_CORE.set(5, {
  heroImage: ['nike5.webp'],
  title: "Nike Air Force 1 '07",
  price: {
    price: 110,
    discount: 14,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: crisp leather, clean colorways and the perfect amount of flash to make you shine. This clean, pure white finish adds the gum sole contrast for a fresh, versatile look with just the right amount of pop.    `,
})

PRODUCT_CORE.set(6, {
  heroImage: ['nike6.webp'],
  title: 'Nike Quest 4',
  price: {
    price: 75,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `The pursuit of speed continues with the Nike Quest 4. Take on the streets with higher foam heights and cushioned comfort that combine with a lightweight upper to offer secure support. Intuitive details make it a staple for the everyday runner.`,
})
PRODUCT_CORE.set(7, {
  heroImage: ['nike7.webp'],
  title: 'Nike Zoom Mercurial Superfly 9 Elite KM FG',
  price: {
    price: 295,
  },
  rating: 4,
  color: 'white',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Kylian Mbappé's explosiveness, plus his twitchy change of direction, puts him firmly in the world class of finishers. With nods to his heritage, this cleat is made to help you play just like KM—with blinding pace and purpose. We added a Zoom Air unit, made specifically for soccer, and grippy texture up top for exceptional touch, so you can dominate in the waning minutes of a match—when it matters most.`,
})

PRODUCT_CORE.set(8, {
  heroImage: ['nike8.webp'],
  title: 'Nike Court Vision Low',
  price: {
    price: 70,
    discount: 27,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `So you're in love with the classic look of '80s basketball, but you've got a thing for the fast-paced culture of today's game. Meet the new Nike Court Vision Low. Its crisp upper and stitched overlays are inspired by the hook shot of old-school basketball while its super plush, low-cut collar adds a sleek look that's comfortable day in and day out.`,
})
PRODUCT_CORE.set(9, {
  heroImage: ['nike9.webp'],
  title: 'Nike Flex Control 4',
  price: {
    price: 65,
    discount: 15,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Emphasizing lightweight comfort and stability, the Nike Flex Control 4 is tailored to explosive workouts. Its lightweight, flexible upper has a midfoot strap for stability, while the sole has deep flex grooves to let your foot move naturally.`,
})
PRODUCT_CORE.set(10, {
  heroImage: ['nike10.webp'],
  title: 'Air Jordan 7 Retro',
  price: { price: 200 },
  rating: 5,
  color: 'black',

  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Inspired by the shoe originally worn by MJ during the '92 season and summer of basketball, the Air Jordan 7 Retro revives its championship legacy for a new generation of sneakerheads.`,
})
PRODUCT_CORE.set(11, {
  heroImage: ['nike11.webp'],
  title: "Nike Air Force 1 '07",
  price: { price: 200 },
  rating: 5,
  color: 'black',

  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.`,
})
PRODUCT_CORE.set(12, {
  heroImage: ['nike12.webp'],
  title: 'Air Jordan 12 Retro',
  price: { price: 200 },
  rating: 5,
  color: 'black',

  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `No need to call for a ride—MJ's game-winning look from '96 will get you where you need to go. This AJ12 is the return of Tinker Hatfield's celebrated design, the first to bring Zoom Air cushioning to Jordan's signature line. Premium materials give it a seasonal refresh, while the sunrise-inspired stitch lines on the upper hook back to the original. This is buzzer-beater style, perfected.`,
})
PRODUCT_CORE.set(13, {
  heroImage: ['nike13.webp'],
  title: 'Nike Dunk High Retro',
  price: {
    price: 125,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `No need to call for a ride—MJ's game-winning look from '96 will get you where you need to go. This AJ12 is the return of Tinker Hatfield's celebrated design, the first to bring Zoom Air cushioning to Jordan's signature line. Premium materials give it a seasonal refresh, while the sunrise-inspired stitch lines on the upper hook back to the original. This is buzzer-beater style, perfected.`,
})
PRODUCT_CORE.set(14, {
  heroImage: ['nike14.webp'],
  title: 'Nike Dunk High Retro',
  price: {
    price: 120.97,
    discount: 13,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `The radiance lives on with the Nike Air Force 1 ’07 Premium. Crossing hardwood comfort with off-court flair, this hoops original puts a fresh spin on what you know best: durable stitched overlays, clean finishes and the perfect amount of flash to make you shine.`,
})
PRODUCT_CORE.set(15, {
  heroImage: ['nike15.webp'],
  title: 'Nike Dunk High Retro',
  price: {
    price: 130,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.`,
})
PRODUCT_CORE.set(16, {
  heroImage: ['nike16.webp'],
  title: 'Air Jordan 1 Mid SE',
  price: {
    price: 135,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Stand out with timeless hoops style. Premium leather gets polished, shined and textured to deliver a fresh take on the shoe that started it all. Air cushioning and a classic design keep everything you love best from the original.`,
})
PRODUCT_CORE.set(17, {
  heroImage: ['nike17.webp'],
  title: 'Nike Air Force 1 Shadow',
  price: {
    price: 130,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold, new look.`,
})
PRODUCT_CORE.set(18, {
  heroImage: ['nike18.jfif'],
  title: `LeBron XX "Purple and Gold"`,
  price: {
    price: 200,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Serving up electrifying colors that pulse like a California sunset, the LeBron 20 takes you courtside with a look that pays tribute to the team you love. Purple Pulse and Violet Frost deliver a vibrant backdrop for game-winning Metallic Gold accents while graphics on the midsole let you settle into the LA vibe—powerful, royal and ahead of its time. Taking you into the future, the light, low-to-the-ground and ultra-cushioned design sets you up to stay on top of today’s frenzied style of play and make your mark on the next era of hoops.`,
})
PRODUCT_CORE.set(19, {
  heroImage: ['nike19.webp'],
  title: `Nike Air Force 1 '07 LV8`,
  price: {
    price: 130,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Celebrating 40 years of pushing sport and fashion boundaries, this commemorative AF1 mixes elements from beloved launches to highlight the timeless design’s place in sneaker history. Gold accents, a debossed *40* on the heel and an honorary tongue label are just a few of the embellishments inviting you to the party. Completing the look, crisp leather in bold colors delivers a grand finale. Happy anniversary!`,
})
PRODUCT_CORE.set(20, {
  heroImage: ['nike20.webp'],
  title: `Nike Air Force 1 '07 LV8`,
  price: {
    price: 120,
    discount: 19,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Just when you thought you'd seen it all, Nike wows with an all-new way to quickly and easily get into your shoes. Great for people with limited mobility seeking ease of entry, or anyone wanting a quicker way to get in and go! The entire heel (including the sole) of the Nike Go FlyEase pivots open for a totally hands-free entry.`,
})
PRODUCT_CORE.set(21, {
  heroImage: ['nike21.webp'],
  title: `Air Jordan 1 Low`,
  price: {
    price: 110,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.`,
})
PRODUCT_CORE.set(22, {
  heroImage: ['nike22.webp'],
  title: `Nike Air Force 1 '07 Premium Vintage`,
  price: {
    discount: 19,
    price: 150,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `Sophisticated and retro-inspired. Ring in the new age of AF1 vintage with era-echoing ‘80s construction and the ultimate in soft comfort. The woven tongue label and jeweled Swoosh brings the original hoops look to life, while a Coconut Milk outsole adds heritage appeal and durable traction.`,
})
PRODUCT_CORE.set(23, {
  heroImage: ['nike23.webp'],
  title: `Air Jordan XXXVII`,
  price: {
    price: 185,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about takeoffs and landings, with multiple Air units to get you off the ground and our signature Formula 23 foam to cushion your impact. Up top, you'll find layers of tough, reinforced leno-weave fabric that'll keep you contained—and leave your game uncompromised.`,
})
PRODUCT_CORE.set(24, {
  heroImage: ['nike24.webp'],
  title: `Nike Air VaporMax Plus`,
  price: {
    price: 210,
  },
  rating: 5,
  color: 'black',
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  description: `The Nike Air VaporMax Plus looks to the past to propel you into the future. Nodding to the ’98 original with its floating cage and padded upper, it adds VaporMax Air technology to ramp up the comfort and create a modern look.`,
})
