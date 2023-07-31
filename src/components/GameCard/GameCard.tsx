import { AiFillStar } from "react-icons/ai";
import colors from "../../config/colors";
import getCropedImageUrl from "../../services/image-url";
import { useNavigate } from "react-router-dom";
import styles from "./GameCard.module.css";
import PlatfromsIconList from "../PlatfromsIconList/PlatfromsIconList";
import { Game } from "../../hooks/useGames";
interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const navigate = useNavigate();
	return (
		<div className={styles.card}>
			<div
				style={{
					backgroundImage: `url(${getCropedImageUrl(game.background_image)})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "150px",
					height: "150px",
					borderRadius: "10px",
					paddingTop: "10px",
					paddingLeft: "10px",
				}}
			>
				<div className={styles.ratingContainer}>
					<AiFillStar
						color={colors.primaryColor}
						style={{ width: "15px", height: "15px", marginRight: "2px" }}
					/>
					<p>{game.rating_top}</p>
				</div>
			</div>

			<p className={styles.gameName}>{game.name}</p>
			<PlatfromsIconList
				platforms={game.parent_platforms.slice(0, 3).map((p) => p.platform)}
			/>
			<button
				className={styles.moreInfoBtn}
				onClick={() => navigate(`/games/${game.id}`)}
			>
				MORE INFO
			</button>
			<div style={{ width: "150px" }}></div>
		</div>
	);
};

export default GameCard;
