import { MdDone } from "react-icons/md";
// import colors from "../../config/colors";
import { Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";

interface Props {
	genre: Genre;

	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenreCard = ({ genre, selectedGenre, onSelectGenre }: Props) => {
	return (
		<button onClick={() => onSelectGenre(genre)}>
			{selectedGenre?.id === genre.id ? (
				<Tag
					size="lg"
					borderRadius="full"
					colorScheme="brand"
					// color="purple.50"
					variant="solid"
					mx={1}
				>
					<Avatar
						src={genre.image_background}
						size="xs"
						name="Segun Adebayo"
						ml={-1}
						mr={2}
					/>
					<TagLabel color="whiteAlpha.900" mr="1">
						{genre.name}
					</TagLabel>
					<MdDone color="whiteAlpha.900" />
				</Tag>
			) : (
				<Tag
					size="lg"
					borderRadius="full"
					// colorScheme="'
					variant="outline"
					mx={1}
				>
					<Avatar
						src={genre.image_background}
						size="xs"
						name="Segun Adebayo"
						ml={-1}
						mr={2}
					/>
					<TagLabel color="blackAlpha.800">{genre.name}</TagLabel>
				</Tag>
			)}
		</button>
		// <button onClick={() => setSelectedGenre(genre.id)}>
		// 	{selectedGenre !== genre.id ? (
		// 		<div
		// 			key={genre.id}
		// 			style={{
		// 				paddingTop: "3px",
		// 				paddingBottom: "3px",
		// 				paddingLeft: "10px",
		// 				paddingRight: "10px",
		// 				marginLeft: "5px",
		// 				marginRight: "5px",
		// 				display: "flex",
		// 				flexDirection: "row",
		// 				justifyContent: "space-between",
		// 				alignItems: "center",
		// 				borderWidth: "1px",
		// 				borderColor: "lightgrey",
		// 				borderRadius: "20px",
		// 				color: "grey",
		// 			}}
		// 		>
		// 			<p style={{ fontSize: "14px", fontWeight: "500" }}>{genre.name}</p>
		// 		</div>
		// 	) : (
		// 		<div
		// 			key={genre.id}
		// 			style={{
		// 				paddingTop: "3px",
		// 				paddingBottom: "3px",
		// 				paddingLeft: "10px",
		// 				paddingRight: "10px",
		// 				marginLeft: "5px",
		// 				marginRight: "5px",
		// 				display: "flex",
		// 				flexDirection: "row",
		// 				justifyContent: "space-between",
		// 				alignItems: "center",
		// 				borderWidth: "1px",
		// 				borderColor: "lightgrey",
		// 				borderRadius: "20px",
		// 				color: "white",
		// 				background: colors.primaryColor,
		// 			}}
		// 		>
		// 			<p
		// 				style={{
		// 					fontSize: "14px",
		// 					fontWeight: "500",
		// 					color: "white",
		// 					marginRight: "5px",
		// 				}}
		// 			>
		// 				{genre.name}
		// 			</p>
		// 			<MdDone color="white" />
		// 		</div>
		// 	)}
		// </button>
	);
};

export default GenreCard;
