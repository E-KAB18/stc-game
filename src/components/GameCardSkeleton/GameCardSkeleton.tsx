import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import styles from "../GameCard/GameCard.module.css";
const GameCardSkeleton = () => {
	return (
		<div className={styles.card}>
			<Card>
				<Skeleton height="150px" width="150px" />
				<CardBody>
					<SkeletonText />
				</CardBody>
			</Card>
		</div>
	);
};

export default GameCardSkeleton;
