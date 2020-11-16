export { CsvFileReader };

class CsvFileReader
{
	public data: string[][] = [];
	private readonly filename: string; // readonly props can be set in constructor

	constructor(filename: string) {
		this.filename = filename;
	}

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
