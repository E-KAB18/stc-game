import {
	Box,
	Button,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Show,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import logo from "../../assets/stc.webp";
import LoginForm from "../../pages/Login/Login";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";

interface Props {
	onSearch?: (searchText: string) => void;
}
const Header = ({ onSearch }: Props) => {
	const [searchSelected, setSearchSelected] = useState(false);
	const ref = useRef<HTMLInputElement>(null);

	return (
		<Box
			px={{ base: "5%", md: "20%", lg: "20%" }}
			display="flex"
			flexDirection="row"
			bg="#ffff"
			height="20%"
			w="100%"
			justifyContent="space-between"
			alignItems="center"
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Link to="/">
					<img
						src={logo}
						style={{ width: "60px", height: "45px", marginRight: "10px" }}
					/>
				</Link>
				<Show above="md">
					<h1
						style={{
							color: "#71469b",
							fontSize: "1.7vw",
							marginTop: "4px",
							fontWeight: "700",
						}}
					>
						Game Store
					</h1>
				</Show>
			</div>
			<div
				style={{
					// width:'60%',
					display: "flex",
					flexDirection: "row",
					// justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{searchSelected ? (
					<form
						onSubmit={(event) => {
							event.preventDefault();
							if (ref.current) {
								console.log(ref.current.value);

								onSearch!(ref.current.value);
							}
						}}
					>
						<InputGroup size="md">
							<Input
								ref={ref}
								borderRadius={20}
								placeholder="Search games..."
								_placeholder={{ hideBelow: "md" }}
								size="sm"
								focusBorderColor="purple.600"
								// width={"20vw"}
								width={{ base: "55vw", md: "30vw", lg: "30vw" }}
							/>
							<InputRightElement>
								<Button
									h="1.75rem"
									size="sm"
									bg={"none"}
									onClick={() => setSearchSelected(false)}
									mb={2}
									mr={-5}
									variant="unstyled"
									color="brand.200"
								>
									<SlClose />
								</Button>
							</InputRightElement>
						</InputGroup>
					</form>
				) : (
					<BsSearch
						color="#71469b"
						style={{ marginRight: "10px" }}
						onClick={() => setSearchSelected(true)}
					/>
				)}

				<Menu closeOnSelect={false}>
					{({ onClose }) => (
						<>
							<MenuButton
								as={IconButton}
								aria-label="Options"
								icon={<FiMoreVertical color="#71469b" />}
								variant="ghost"
								_hover={{
									bg: "white",
								}}
								_active={{
									bg: "white",
								}}
							/>
							<MenuList>
								<MenuItem
									bg={"white"}
									_hover={{
										bg: "white",
									}}
									_active={{
										bg: "white",
									}}
								>
									<LoginForm onClose={onClose} />
								</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
			</div>
		</Box>
	);
};

export default Header;
