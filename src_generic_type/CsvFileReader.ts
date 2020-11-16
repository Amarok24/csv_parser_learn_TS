export { CsvFileReader };


// Prepending a generic type with T is a convention, especially in C#
abstract class CsvFileReader<TData>
{
	// In an abstract class all modifiers (public, protected, private) refer
	// to the CHILD class, because an abstract class is not completely defined.

	public data: TData[] = [];
	private readonly filename: string; // readonly props can be set in constructor

	constructor(filename: string)
	{ // constructor in an abstract class will only be called by child implementation
		this.filename = filename;
		this.Read();
	}

	// In TypeScript defining a 'protected abstract' method means that a child class
	// _CAN_ adhere to the 'protected' definition here, but _CAN_ also decide
	// to make the method 'public'!
	// However a 'public abstract' method must always stay 'public' in implementations!
	// A 'private abstract' method is invalid.
	protected abstract ParseData(row: string[]): TData;

	private Read(): void
	{ // Deno.readTextFileSync() returns type string
		this.data = Deno
			.readTextFileSync(this.filename)
			.split("\n")
			.map((row: string): string[] => row.split(","))
			.map(this.ParseData);
			// 'this.' is always connected to an _instance_ of a class.
	}
}
