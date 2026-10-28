import { pathToFileURL } from "node:url";
import { evaluate } from "@mdx-js/mdx";
import { renderToStaticMarkup } from "react-dom/server";
import remarkGfm from "remark-gfm";
import * as runtime from "react/jsx-runtime";

export default function (eleventyConfig) {
	eleventyConfig.addTemplateFormats("mdx");

	eleventyConfig.addCollection("posts", (api) =>
		api.getFilteredByTag("posts").sort((a, b) => a.data.order - b.data.order),
	);

	eleventyConfig.addExtension("mdx", {
		outputFileExtension: "html",
		compile: async (inputContent, inputPath) => {
			const { default: Content } = await evaluate(inputContent, {
				...runtime,
				remarkPlugins: [remarkGfm],
				baseUrl: pathToFileURL(inputPath),
			});

			// Front matter and the data cascade are exposed as `props` inside MDX.
			return async (data) => renderToStaticMarkup(await Content(data));
		},
	});

	return {
		dir: { input: "src", output: "_site", includes: "_includes" },
	};
}
