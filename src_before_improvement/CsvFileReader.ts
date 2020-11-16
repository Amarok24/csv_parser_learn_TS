import { dateStringToDate } from "./utils.ts";
import { MatchResult } from "./MatchResult.ts";

// Tuple type MatchData
// A tuple is an array with a fixed number of elements whose types are known.
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader
{
	//data: string[][] = [];
	data: MatchData[] = []; // array of tuple 'MatchData'

	constructor(public filename: string) { }

	read(): void
	{ // Deno.readTextFileSync returns type string
		this.data = Deno
			.readTextFileSync(this.filename)
			.split("\n")
			.map((row: string): string[] => row.split(","))
			.map(this.parseData);
	}

	private parseData(row: string[]): MatchData
	{
		return [
			dateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResult,
			row[6]
		];
	}
}
