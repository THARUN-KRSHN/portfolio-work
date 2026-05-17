export const CLOUDINARY_FOLDERS = {
    editorial: 'portfolio/editorial',
    runway: 'portfolio/runway',
    commercial: 'portfolio/commercial',
}

// Replace these with your actual Cloudinary public IDs after uploading
export const galleryImages = [
    {
        id: '1',
        publicId: 'portfolio/editorial/shot-01',
        category: 'Editorial',
        title: 'Vogue Italia',
        photographer: 'Studio Name',
        year: '2024',
        alt: 'Editorial fashion shot in studio lighting',
    },
    {
        id: '2',
        publicId: 'portfolio/editorial/shot-02',
        category: 'Editorial',
        title: 'Harper\'s Bazaar',
        photographer: 'Studio Name',
        year: '2024',
        alt: 'High fashion editorial portrait',
    },
    {
        id: '3',
        publicId: 'portfolio/runway/show-01',
        category: 'Runway',
        title: 'Milan Fashion Week',
        photographer: 'Runway Studio',
        year: '2024',
        alt: 'Runway walk at Milan Fashion Week',
    },
    {
        id: '4',
        publicId: 'portfolio/runway/show-02',
        category: 'Runway',
        title: 'Paris FW',
        photographer: 'Runway Studio',
        year: '2024',
        alt: 'Paris Fashion Week runway appearance',
    },
    {
        id: '5',
        publicId: 'portfolio/commercial/brand-01',
        category: 'Commercial',
        title: 'Brand Campaign',
        photographer: 'Commercial Studio',
        year: '2024',
        alt: 'Commercial brand campaign shoot',
    },
    {
        id: '6',
        publicId: 'portfolio/commercial/brand-02',
        category: 'Commercial',
        title: 'Product Campaign',
        photographer: 'Commercial Studio',
        year: '2024',
        alt: 'Product campaign model shoot',
    },
]

export type GalleryImage = typeof galleryImages[0]
export type Category = 'All' | 'Editorial' | 'Runway' | 'Commercial'