export async function onRequest (context, next) {
    /*
    if not logged in, redirect
    */
    console.log(context.url.pathname)
    if(context.url.pathname.endsWith('/app/') || context.url.pathname.endsWith('/app/callback')) return next();
    console.log('need to check stuff', context.url.pathname);
    let token = await context.session.get('access_token');
    console.log('token', token);

    if(!token) return context.redirect('/app');
    context.locals.access_token = token;

    return next();
};