import { MatchReader, MatchResult } from "./MatchReader.ts";

enum CsvIndex {
	DATE = 0,
	TEAM_HOME,
	TEAM_AWAY,
	HOME_GOALS,
	AWAY_GOALS,
	RESULT,
	PLAYER
}

let manUnitedWins = 0;

const reader = new MatchReader("football.csv");

/*
console.log(
  reader.ParseData(["test"])
  // this would return type 'MatchData' content which is unknown here, so lots of invalid content would be printed (undefined, NaN ...), therefore method 'parseData' should not be 'public' !
);
*/

// The following for-of-loop works because TS is quite benevolent here:
// "match" is of type 'MatchData' (type coercion) although type 'MatchData' is not available here! It works inside of the loop because 'data' is a public property and is of type 'MatchData'.
for (let match of reader.data)
{
	if (
		(match[CsvIndex.TEAM_HOME] === "Man United" && match[CsvIndex.RESULT] === MatchResult.HomeWin) ||
		(match[CsvIndex.TEAM_AWAY] === "Man United" && match[CsvIndex.RESULT] === MatchResult.AwayWin)
	)
	{
		manUnitedWins++;
	}
}

console.log(`Manchester United won ${manUnitedWins} games.`); // 18
console.log(reader.data[0]);

/* CONSOLE OUTPUT:

$ ./run.sh
Manchester United won 18 games.
[
  2018-08-09T22:00:00.000Z,
  "Man United",
  "Leicester",
  2,
  1,
  "H",
  "A Marriner"
]

*/
