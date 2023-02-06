import 'dotenv/config';
import { relationship, text } from '@keystone-next/fields/dist/fields.cjs';
import { list } from '@keystone-next/keystone/schema/dist/keystone.cjs';
import { cloudinaryImage } from '@keystone-next/cloudinary/dist/cloudinary.cjs.js';

export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'store',
}

export const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary,
            label: 'Source'
        }),
        altText: text(),
        product: relationship({ ref: 'Product.photo'})
    },
    ui: {
        listView: {
          initialColumns: ['image', 'altText', 'product'],
        }
    }
});