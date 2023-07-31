// import { Show } from "@chakra-ui/react";
import Featured from "../../assets/subway.png";
import styles from "./FeaturedCard.module.css";

const FeaturedCard = () => {
	return (
		<div className={styles.featuredContainer}>
			<div
				className={styles.featuredImg}
				style={{
					backgroundImage: `url(${Featured})`,
				}}
			/>
			{/* <img src={Featured} className={styles.featuredImg} /> */}
			<div className={`${styles.featuredTextContainer}`}>
				<div className={styles.gameDetailsContainer}>
					<h3 className={styles.title}>Subway Surfer</h3>
					<p>SYBO Games</p>
					<p>SURF the urban wave!</p>
					<p>DODGE the oncoming trains!</p>
				</div>
				<div className={`${styles.downloaddsAndButtonContainer}`}>
					<p className={styles.downloads}>300K Downloads</p>
					<button className={styles.moreBtn}>MORE INFO</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
