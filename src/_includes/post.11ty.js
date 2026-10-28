export const data = {
	layout: "base.11ty.js",
};

export default function (data) {
	return `<article>
<p>${data.series} · Article ${String(data.order).padStart(2, "0")} · ${data.topic}</p>
<h1>${data.title}</h1>
<p><em>${data.subtitle}</em></p>
${data.content}
</article>`;
}
