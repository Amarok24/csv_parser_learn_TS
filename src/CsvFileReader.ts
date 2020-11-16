export { CsvFileReader };


class CsvFileReader
{
	// Property 'data' must be _public_ because it will be used by a new instance
	// (in this case it will be used through class MatchReader's property 'reader').
	public data: string[][] = [];

	constructor(public filename: string) { }

	// Method 'Read' must be _public_ because it will be used by a new instance
	// (in this case it will be used through class MatchReader's method 'Load').
	public Read(): boolean
	{ // Deno.readTextFileSync() returns type string
		this.data = Deno
			.readTextFileSync(this.filename)
			.split("\n")
			.map((row: string): string[] => row.split(","));

		return true; // unimportant, just to show that return type can be
		// anything if "interface DataReader" defines return type 'void' !!!
	}
}
