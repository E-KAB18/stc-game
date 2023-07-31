// import { Game, Genre } from "../../../DTOs/GenreType";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import GameCardsContainer from "../../components/GameCardsContainer/GameCardsContainer";
import GenreListContainer from "../../components/GenreListContainer/GenreListContainer";
import Header from "../../components/Header/Header";
import colors from "../../config/colors";
import { Genre } from "../../hooks/useGenres";
import "./HomePage.css";


export interface GameQuery {
	genre: Genre | null;
	searchText: string;
}
const HomePage = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<Header onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}/>

			<div
				style={{
					width: "100%",
					height: "80%",
					background: colors.bgColor,
					paddingTop: "10px",
				}}
			>
				<GenreListContainer
					selectedGenre={gameQuery.genre}
					onSelectGenre={(genre) => {
						setGameQuery({ ...gameQuery, genre });
					}}
				/>
				<Box
					px={{ base: "5%", md: "20%", lg: "20%" }}
					display="flex"
					flexDirection="column"
					height="92%"
					justifyContent="space-between"
					alignItems="center"

					// style={{
					// 	// paddingLeft: "20%",
					// 	// paddingRight: "20%",
					// 	flexDirection: "column",
					// 	display: "flex",
					// 	alignItems: "center",
					// 	justifyContent: "space-between",
					// 	height: "92%",
					// }}
				>
					<FeaturedCard />

					<GameCardsContainer
						name="Most recommandations"
						gameQuery={gameQuery}
					/>
					<GameCardsContainer name="Most Popular" gameQuery={gameQuery} />
				</Box>
			</div>
		</>
	);
};

export default HomePage;
