import { IAnalyzer } from "../Summary.ts";
import { MatchData } from "../MatchData.ts";
import { MatchResult } from "../MatchResult.ts";
export { WinsAnalysis };


enum CsvIndex {
	DATE = 0,
	TEAM_HOME,
	TEAM_AWAY,
	HOME_GOALS,
	AWAY_GOALS,
	RESULT,
	PLAYER
}


class WinsAnalysis implements IAnalyzer
{
	constructor(public team: string) { }

	public Run(matchesArr: MatchData[]): string
	{
		// implementation of an interface can have different parameter names!
		// here: 'matchesArr' instead of 'matches'
		let wins = 0;
		let match: MatchData;

		for (match of matchesArr)
		{ // traverse each index of MatchData[]
			if (
				(match[CsvIndex.TEAM_HOME] === this.team && match[CsvIndex.RESULT] === MatchResult.HomeWin) ||
				(match[CsvIndex.TEAM_AWAY] === this.team && match[CsvIndex.RESULT] === MatchResult.AwayWin)
			)
			{
				wins++;
			}
		}

		return `Team ${this.team} won ${wins} games.`;
	}
}
