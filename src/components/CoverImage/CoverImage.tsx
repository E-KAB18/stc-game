interface props {
	image: string;
}
const CoverImage = ({ image }: props) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				height: "25vh",
				width: "100%",
				marginTop: "3%",
				borderRadius: "5px",
			}}
		/>
	);
};

export default CoverImage;
