import useGenres, { Genre } from "../../hooks/useGenres";
import GenreCard from "../GenresCard/GenreCard";
import styles from "./GenreListContainer.module.css";

interface props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenreListContainer = ({ onSelectGenre, selectedGenre }: props) => {
	const { data: genres } = useGenres();
	return (
		<div className={styles.genresContainer}>
			{genres.map((genre) => {
				return (
					<GenreCard
						key={genre.id}
						genre={genre}
						selectedGenre={selectedGenre}
						onSelectGenre={onSelectGenre}
					/>
				);
			})}
		</div>
	);
};

export default GenreListContainer;
