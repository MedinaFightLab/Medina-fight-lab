export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.endsWith(".html") && url.pathname !== "/index.html") {
      const clean = url.pathname.slice(0, -5); // strip .html
      url.pathname = clean;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
