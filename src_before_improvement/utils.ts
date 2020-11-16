export function dateStringToDate(dateString: string): Date
{
	// dateString format: dd/mm/yyyy
	const dateParts = dateString.split("/"); // ["dd", "mm", "yyyy"]
	const strToNum = (s: string): number => parseInt(s);
	const datePartsNums = dateParts.map(strToNum); // [dd, mm, yyyy]

	return new Date(datePartsNums[2], datePartsNums[1] - 1, datePartsNums[0]);
}
