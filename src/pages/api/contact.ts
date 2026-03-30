import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const headers = { "Content-Type": "application/json" };

	const token = import.meta.env.TELEGRAM_BOT_TOKEN;
	const chatId = import.meta.env.TELEGRAM_CHAT_ID;

	if (!token || !chatId) {
		return new Response(
			JSON.stringify({ ok: false, error: "Server misconfigured" }),
			{ status: 500, headers },
		);
	}

	let body: { name?: string; email?: string; description?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(
			JSON.stringify({ ok: false, error: "Invalid request body" }),
			{ status: 400, headers },
		);
	}

	const { name, email, description } = body;
	if (!name || !email || !description) {
		return new Response(
			JSON.stringify({ ok: false, error: "All fields are required" }),
			{ status: 400, headers },
		);
	}

	const text = [
		`📩 *New contact form submission*`,
		``,
		`*Name:* ${escapeMarkdown(name)}`,
		`*Email:* ${escapeMarkdown(email)}`,
		``,
		`*Message:*`,
		escapeMarkdown(description),
	].join("\n");

	try {
		const tgRes = await fetch(
			`https://api.telegram.org/bot${token}/sendMessage`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					chat_id: chatId,
					text,
					parse_mode: "Markdown",
				}),
			},
		);

		if (!tgRes.ok) {
			const err = await tgRes.text();
			console.error("Telegram API error:", err);
			return new Response(
				JSON.stringify({ ok: false, error: "Failed to send message" }),
				{ status: 502, headers },
			);
		}

		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers,
		});
	} catch (err) {
		console.error("Telegram fetch error:", err);
		return new Response(
			JSON.stringify({ ok: false, error: "Failed to reach Telegram" }),
			{ status: 502, headers },
		);
	}
};

function escapeMarkdown(s: string): string {
	return s.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
