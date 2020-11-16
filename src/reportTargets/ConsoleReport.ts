import { IOutputTarget } from "../Summary.ts";
export { ConsoleReport };


class ConsoleReport implements IOutputTarget
{
	public Generate(report: string): void
	{
		console.log(report);
	}
}
