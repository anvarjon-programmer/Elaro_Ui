import { getQuery,readBody } from 'h3';

export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = getQuery(event);

    //handle post
    const {age} = await readBody(event);

    return {
        message: `Hello, ${name}! You are ${age} years old.`,
    };
});
//https://api.currencyapi.com/v3/currencies