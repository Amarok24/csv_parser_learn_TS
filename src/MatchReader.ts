import { Utils } from "./Utils.ts";
import { MatchResult } from "./MatchResult.ts";
import { MatchData } from "./MatchData.ts";
import { CsvFileReader } from "./CsvFileReader.ts";

export { MatchReader };


// An interface which is like a model to the used class (will be CsvFileReader).
interface IDataReader
{
	data: string[][]; // the class will have to contain property 'data' of type string[][]
	Read(): void; // and a method called 'Read' which doesn't return anything, but in case of TS the return type 'void' means it CAN possibly return something! It's therefore better to define return type other than 'void' if return type is important!!!
}


class MatchReader
{
	public static FromCsv(filename: string): MatchReader
	{
		// Returns a new INSTANCE of itself! This is valid.
		return new MatchReader(new CsvFileReader(filename));
	}

	private reader: IDataReader; // will be a new _instance_ of CsvFileReader here

	public matches: MatchData[] = [];

	constructor(instanceOfCustomReader: IDataReader) {
		this.reader = instanceOfCustomReader;
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
