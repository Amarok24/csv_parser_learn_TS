import { MatchReader } from "./MatchReader.ts";
import { Summary } from "./Summary.ts";


const matchReader = MatchReader.FromCsv("football.csv");
//const summary = Summary.WinsAnalysisToHtml("Man United");
const summary = Summary.WinsAnalysisToConsole("Man United");

summary.OutputReport(matchReader.matches);


/*
const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
*/


/* OUTPUT:

$ ./run.sh
Team Man United won 18 games.

*/
