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
        publicId:
            'WhatsApp_Image_2026-05-11_at_10.09.57_PM_miafp6',
        category: 'Editorial',
        title: 'Vogue Italia',
        photographer: 'Studio Name',
        year: '2024',
        alt: 'Editorial fashion shot in studio lighting',
    },

    {
        id: '2',
        publicId:
            'WhatsApp_Image_2026-05-11_at_10.10.11_PM_t135v5',
        category: 'Editorial',
        title: "Harper's Bazaar",
        photographer: 'Studio Name',
        year: '2024',
        alt: 'High fashion editorial portrait',
    },

    {
        id: '3',
        publicId:
            'WhatsApp_Image_2026-05-11_at_10.10.12_PM_inrwlz',
        category: 'Runway',
        title: 'Milan Fashion Week',
        photographer: 'Runway Studio',
        year: '2024',
        alt: 'Runway walk at Milan Fashion Week',
    },

    {
        id: '4',
        publicId:
            'WhatsApp_Image_2026-05-11_at_10.10.08_PM_1_yxbc2a',
        category: 'Runway',
        title: 'Paris FW',
        photographer: 'Runway Studio',
        year: '2024',
        alt: 'Paris Fashion Week runway appearance',
    },

    {
        id: '5',
        publicId:
            'WhatsApp_Image_2026-05-11_at_10.10.13_PM_ny5qf2',
        category: 'Commercial',
        title: 'Brand Campaign',
        photographer: 'Commercial Studio',
        year: '2024',
        alt: 'Commercial brand campaign shoot',
    },

    {
        id: '6',
        publicId:
            'WhatsApp_Image_2026-05-11_at_10.10.08_PM_xbye2v',
        category: 'Commercial',
        title: 'Product Campaign',
        photographer: 'Commercial Studio',
        year: '2024',
        alt: 'Product campaign model shoot',
    },
]

export const heroImage = {
    publicId:
        'WhatsApp_Image_2026-05-11_at_10.09.46_PMI_ztisks',
    alt: 'Ashik — hero portrait',
}

export const aboutImage = {
    publicId:
        'WhatsApp_Image_2026-05-11_at_10.10.57_PM_v9lzhw',
    alt: 'Ashik — portrait',
}

export type GalleryImage = (typeof galleryImages)[0]

export type Category =
    | 'All'
    | 'Editorial'
    | 'Runway'
    | 'Commercial'