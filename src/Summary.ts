import { MatchData } from "./MatchData.ts";
import { WinsAnalysis } from "./analyzers/WinsAnalysis.ts";
import { HtmlReport } from "./reportTargets/HtmlReport.ts";
import { ConsoleReport } from "./reportTargets/ConsoleReport.ts";

export { Summary };
export type { IAnalyzer, IOutputTarget };


interface IAnalyzer
{
	Run(matches: MatchData[]): string;
}


interface IOutputTarget
{
	Generate(report: string): void;
}


class Summary
{
	public static WinsAnalysisToHtml(teamName: string): Summary
	{
		return new Summary(
			new WinsAnalysis(teamName),
			new HtmlReport()
		);
	}

	public static WinsAnalysisToConsole(teamName: string): Summary
	{
		return new Summary(
			new WinsAnalysis(teamName),
			new ConsoleReport()
		);
	}

	constructor(
		public analyzer: IAnalyzer,
		public outputTarget: IOutputTarget
	) { }


	public OutputReport(matches: MatchData[]): void
	{
		const output = this.analyzer.Run(matches);
		this.outputTarget.Generate(output);
	}
}
