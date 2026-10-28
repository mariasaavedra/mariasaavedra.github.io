export const data = {
	layout: "base.11ty.js",
};

export default function (data) {
	return `<article>
<p class="post-meta">${data.series} · ${data.topic}</p>
<h1>${data.title}</h1>
<p class="post-subtitle">${data.subtitle}</p>
${data.content}
</article>`;
}
