async function handle({ event, resolve }) {
  const theme = event.cookies.get("theme");
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
  });
  return response;
}
export {
  handle
};
