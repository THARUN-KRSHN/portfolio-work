export const CLOUDINARY_FOLDERS = {
    hero: 'portfolio/hero',
    editorial: 'portfolio/editorial',
    runway: 'portfolio/runway',
    commercial: 'portfolio/commercial',
    about: 'portfolio/about',
}

export const galleryImages = [
    {
        id: '1',
        publicId: 'WhatsApp_Image_2026-05-11_at_10.09.57_PM_miafp6',
        category: 'Runway',
        caption: 'Rampwalk fashion showcase.',
        year: '2025',
        alt: 'Male model walking confidently on a fashion runway in avant-garde black and red outfit',
    },

    {
        id: '2',
        publicId: 'WhatsApp_Image_2026-05-11_at_10.10.11_PM_t135v5',
        category: 'Editorial',
        caption: 'Beachside editorial photography.',
        year: '2025',
        alt: 'Fashion runway portrait featuring layered red sleeves and modern experimental styling',
    },

    {
        id: '3',
        publicId: 'WhatsApp_Image_2026-05-11_at_10.10.12_PM_inrwlz',
        category: 'Commercial',
        caption: 'Brand shootout campaign.',
        year: '2025',
        alt: 'Two male fashion models posing together on a runway during a designer showcase',
    },

    {
        id: '4',
        publicId: 'WhatsApp_Image_2026-05-11_at_10.10.08_PM_1_yxbc2a',
        category: 'Editorial',
        caption: 'Beachside editorial photography.',
        year: '2026',
        alt: 'Model standing on a beach wearing a black leather jacket and sunglasses',
    },

    {
        id: '5',
        publicId: 'WhatsApp_Image_2026-05-26_at_1.10.48_AM_coiq7x',
        category: 'Runway',
        caption: 'Rampwalk fashion showcase.',
        year: '2026',
        alt: 'Black and white runway fashion photograph with dramatic lighting and styling',
    },

    {
        id: '6',
        publicId: 'WhatsApp_Image_2026-05-26_at_1.10.48_AM_1_gof5v8',
        category: 'Runway',
        caption: 'Rampwalk fashion showcase.',
        year: '2026',
        alt: 'Fashion model walking beside a horse on a sunny beach wearing dark layered clothing',
    },

    {
        id: '7',
        publicId: 'WhatsApp_Image_2026-05-26_at_1.10.49_AM_x0hliy',
        category: 'Runway',
        caption: 'Rampwalk fashion showcase.',
        year: '2026',
        alt: 'Male model posing indoors in floral shirt with dramatic low-key lighting',
    },

    {
        id: '8',
        publicId: 'WhatsApp_Image_2026-05-11_at_10.10.13_PM_ny5qf2',
        category: 'Commercial',
        caption: 'Brand shootout campaign.',
        year: '2025',
        alt: 'Black and white high-fashion runway portrait with avant-garde styling',
    },

    {
        id: '9',
        publicId: 'WhatsApp_Image_2026-05-11_at_10.10.08_PM_xbye2v',
        category: 'Editorial',
        caption: 'Beachside editorial photography.',
        year: '2026',
        alt: 'Beachside fashion editorial with model and horse near the ocean',
    },

]

export const heroImage = {
    publicId:
        'Gemini_Generated_Image_vuztnhvuztnhvuzt_cgo3rm',
    alt: 'Ashik — hero portrait',
}

export const aboutImage = {
    publicId:
        'WhatsApp_Image_2026-05-11_at_10.10.57_PM_v9lzhw',
    alt: 'Ashik — portrait',
}

export const contactImage = {
    publicId:
        'WhatsApp_Image_2026-05-20_at_10.39.15_PM_zlaum4',
    alt: 'Ashik — contact portrait',
}

export const logoImage = {
    publicId:
        'Gemini_Generated_Image_reg2vareg2vareg2_1_laijfu',
    alt: 'Ashik — logo image',
}



export type GalleryImage = (typeof galleryImages)[0]

export type Category =
    | 'All'
    | 'Editorial'
    | 'Runway'
    | 'Commercial'