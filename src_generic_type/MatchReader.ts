import { CsvFileReader } from "./CsvFileReader.ts";
import { Utils } from "./Utils.ts";

export { MatchReader, MatchResult };


enum MatchResult
{
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D"
}

// Tuple type MatchData.
// A tuple is an array with a fixed number of elements whose types are known.
type MatchData = [Date, string, string, number, number, MatchResult, string];


class MatchReader extends CsvFileReader<MatchData>
{
	// For some reason an override of 'protected abstract' method _CAN_ be made
	// public (default), so will be callable from outside of class, but that would be wrong!
	// To protect it we must define it as 'protected' here too!
	// There seems to be no way to define it as 'static' here, incompatible with abstract!
	protected ParseData(row: string[]): MatchData
	{
		return [
			Utils.DateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResult,
			row[6]
		];
	}
	// Sidenote: in C# the method ParseData would need to have the 'override' modifier.
}
