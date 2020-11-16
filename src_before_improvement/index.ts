import { CsvFileReader } from "./CsvFileReader.ts";
import { MatchResult } from "./MatchResult.ts";
let manUnitedWins = 0;


const reader = new CsvFileReader("football.csv");
reader.read();


for (let match of reader.data)
{
	if (
		(match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
		(match[2] === "Man United" && match[5] === MatchResult.AwayWin)
	)
	{
		manUnitedWins++;
	}
}

console.log(`Manchester United won ${manUnitedWins} games.`); // 18

console.log(reader.data[0]);

/*

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
