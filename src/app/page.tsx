import { css } from '../../styled-system/css';
import { promises as fs } from 'fs';

type TeamId = number;

type TeamIdToName = {
  [key in TeamId]: string;
};

type Game = {
  awayTeamId: TeamId;
  homeTeamId: TeamId;
  awayScore: number;
  homeScore: number;
  weekIndex: number;
};

// Adjusted type for weekData
type WeekData = Game[];

export default async function Home() {
    const file = await fs.readFile(process.cwd() + '/data/schedules.json', 'utf8');
    const data = JSON.parse(file);

    const teamIdToName: TeamIdToName = {
        790364196: 'Vikings',
        790364172: 'Colts',
        790364194: 'Texans',
        790364181: 'Jaguars',
        790364195: 'Titans',
        790364161: 'Bears',
        790364193: 'Steelers',
        790364173: 'Commanders',
        790364162: 'Bengals',
        790364176: 'Eagles',
        790364175: 'Dolphins',
        790364163: 'Bills',
        790364191: "Saints",
        790364174: 'Cowboys',
        790364165: 'Browns',
        790364190: 'Ravens',
        790364186: 'Panthers',
        790364171: 'Chiefs',
        790364166: 'Buccaneers',
        790364164: 'Broncos',
        790364187: 'Patriots',
        790364192: 'Seahawks',
        790364182: 'Jets',
        790364160: '49ers',
        790364188: 'Raiders',
        790364170: 'Chargers',
        790364179: 'Giants',
        790364177: 'Falcons',
        790364185: 'Packers',
        790364183: 'Lions',
        790364167: 'Cardinals',
        790364189: 'Rams',
      };

      const getTeamNameById = (teamId: TeamId): string => {
        return teamIdToName[teamId] || `Unknown Team (${teamId})`;
      };

    return (
        <>
            <div
                className={css({
                    mt: "4",
                    fontSize: "xl",
                    fontWeight: "semibold",
                    bg: { base: "gray.50", _hover: "gray.200" },
                    lg: { fontSize: "2xl", },
                })}
            >
                Panda CSS is the best.
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Away Team</th>
                            <th>Home Team</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.reg.map((weekData: WeekData) => (
                            weekData && weekData.map((game: Game, j: number) => (
                                <tr key={j}>
                                    {j === 0 && <td rowSpan={weekData.length} className={css({ verticalAlign: 'top', textAlign: 'center' })}>{game.weekIndex + 1}</td>}
                                    <td>{getTeamNameById(game.awayTeamId)}</td>
                                    <td>{getTeamNameById(game.homeTeamId)}</td>
                                    <td>{`${game.awayScore} - ${game.homeScore}`}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
