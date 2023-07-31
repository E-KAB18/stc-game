// import Featured from "../../../assets/subway.png";
import { Box, Skeleton } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CoverImage from "../../components/CoverImage/CoverImage";
import DeatailsInfo from "../../components/DeatailsInfo/DeatailsInfo";
import GameCardsContainer from "../../components/GameCardsContainer/GameCardsContainer";
import Header from "../../components/Header/Header";
import colors from "../../config/colors";
import useGame, { GameDetails } from "../../hooks/useGame";

const DetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const {
		data: game,
		isLoading,
	}: { data: GameDetails | undefined; error: string; isLoading: boolean } =
		useGame(parseInt(id!));

	return (
		<>
			<Header />

			<div
				style={{
					width: "100%",
					height: "90%",
					background: colors.bgColor,
					paddingTop: "10px",
				}}
			>
				<Box
					px={{ base: "5%", md: "20%", lg: "20%" }}
					display="flex"
					flexDirection="column"
					height="92%"
					justifyContent="space-between"
					alignItems="center"
				>
					{isLoading && <Skeleton height="25vh" width="100%" />}
					{game !== undefined ? (
						<>
							<CoverImage image={game.background_image} />
							<DeatailsInfo game={game} />
						</>
					) : null}

					<GameCardsContainer name="Most recommandations" />
				</Box>
			</div>
		</>
	);
};

export default DetailsPage;
