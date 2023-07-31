import { GameDetails } from "../../hooks/useGame";
import ExpandableText from "../ExpandableText";
import PlatfromsIconList from "../PlatfromsIconList/PlatfromsIconList";
import styles from "./DeatailsInfo.module.css";
interface props {
	game: GameDetails;
}
const DeatailsInfo = ({ game }: props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.gameTitle}>{game.name}</h2>
			<PlatfromsIconList
				platforms={game.parent_platforms.map((p) => p.platform)}
			/>
			<ExpandableText>{game.description_raw}</ExpandableText>
		</div>
	);
};

export default DeatailsInfo;
