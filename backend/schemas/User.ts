import { list } from "@keystone-next/keystone/schema/dist/keystone.cjs";
import { text, password, relationship } from "@keystone-next/fields/dist/fields.cjs";

export const User = list({
    // access:
    // ui:
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password(),
        // TODO, addroles, cart, and orders
    },
});
