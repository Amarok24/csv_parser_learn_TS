import { MatchResult } from "./MatchResult.ts";
export type { MatchData };

// Tuple type MatchData
// A tuple is an array with a fixed number of elements whose types are known.
type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];
