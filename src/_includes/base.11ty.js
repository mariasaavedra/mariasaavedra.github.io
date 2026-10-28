export default function (data) {
	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>${data.title ?? "Maria Saavedra"}</title>
</head>
<body>
${data.content}
</body>
</html>
`;
}
