import { GrFormNext } from "react-icons/gr";
import colors from "../../config/colors";
import GameCard from "../GameCard/GameCard";
// import { Props } from "./GameCardsContainerTypes";
import styles from "./GameCardsContainer.module.css";
import useGames from "../../hooks/useGames";
import { GameQuery } from "../../pages/HomePage/HomePage";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

interface Props {
	name: string;
	gameQuery?: GameQuery;
}
const GameCardsContainer = ({ name, gameQuery }: Props) => {
	const { data: games, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.containerTitle}>
				<p className={styles.containerName}>{name}</p>
				<button className={styles.seeAllBtn}>
					<p
						style={{
							fontSize: "12px",
							fontWeight: "700",
							color: colors.primaryColor,
						}}
					>
						SEE ALL
					</p>
					<GrFormNext color={colors.primaryColor} />
				</button>
			</div>

			<div className={styles.gameCardsContainer}>
				{isLoading &&
					skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
				{games.map((game) => {
					return <GameCard game={game} key={game.id} />;
				})}
			</div>
		</div>
	);
};

export default GameCardsContainer;
