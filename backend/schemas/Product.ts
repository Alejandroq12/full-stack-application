import { integer, select, text } from '@keystone-next/fields/dist/fields.cjs';
import { list } from "@keystone-next/keystone/schema/dist/keystone.cjs";

export const Product = list({
    // TODO
    // access:
    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea'
            },
        }),
        status: select({
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Available', value: 'AVAILABLE' },
                { label: 'Unavailable', value: 'UNAVAILABLE' },
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: { fieldMode: 'hidden' },
            },
        }),
        price: integer(),
        // TODO: Photo
    },
});