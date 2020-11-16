import { Utils } from "./Utils.ts";
export { MatchReader, MatchResult };

// This approach is without a generic type.
// Here the class MatchReader has no inheritance at all
// and no connection to class CsvFileReader.

enum MatchResult
{
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D"
}

// Tuple type MatchData.
// A tuple is an array with a fixed number of elements whose types are known.
type MatchData = [Date, string, string, number, number, MatchResult, string];


// An interface which is like a model to the used class (will be CsvFileReader).
interface IDataReader
{
	data: string[][]; // the class will have to contain property 'data' of type string[][]
	Read(): void;  // and a method called 'read' which doesn't return anything, but in case of TS the return type 'void' means it CAN possibly return something! It's therefore
	// better to define return type other than 'void' if return type is important!!!
}


class MatchReader
{
	public matches: MatchData[] = [];

	constructor(public reader: IDataReader) {
		this.Load();
	}

	private Load(): void
	{
		this.reader.Read();
		this.matches = this.reader.data.map(MatchReader.ParseData);
	}

	// This method can/should be 'static' because it's independent of any instantiation.
	private static ParseData(row: string[]): MatchData
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
}
