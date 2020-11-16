export { Utils };


class Utils
{
	public static DateStringToDate(dateString: string): Date
	{
		// dateString format: dd/mm/yyyy
		const datePartsStrArray = dateString.split("/"); // ["dd", "mm", "yyyy"]
		const StringToNumber = (s: string): number => parseInt(s);
		const datePartsNumArray = datePartsStrArray.map(StringToNumber); // [dd, mm, yyyy]

		return new
			Date(datePartsNumArray[2], datePartsNumArray[1] - 1, datePartsNumArray[0]);
	}
}
