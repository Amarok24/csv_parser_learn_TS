import { IOutputTarget } from "../Summary.ts";
export { HtmlReport };


class HtmlReport implements IOutputTarget
{
	public Generate(report: string): void
	{
		const htmlCode = `
<html>
<body>
  <article>
	<h1>Analysis output</h1>
	<div>${report}</div>
  </article>
</body>
</html>
	`;

		Deno.writeTextFileSync("report.html", htmlCode);
	}
}
