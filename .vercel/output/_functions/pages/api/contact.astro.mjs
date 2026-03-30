export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const headers = { "Content-Type": "application/json" };
  {
    return new Response(
      JSON.stringify({ ok: false, error: "Server misconfigured" }),
      { status: 500, headers }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
