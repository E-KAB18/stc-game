import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Text,
	FormErrorMessage,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
});

interface LoginFormInputs {
	email: string;
	password: string;
}

export default function LoginForm({ onClose }: { onClose?: () => void }) {
	// const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors, isValid, isSubmitSuccessful },
	} = useForm<LoginFormInputs>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit = (values: LoginFormInputs) => {
		console.log(values);
		onClose!();
	};
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: "", password: "" });
		}
	}, [formState, reset]);

	return (
		<Flex align={"center"} justify={"center"}>
			<Box rounded={"lg"} p={8}>
				<Stack spacing={4}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl isInvalid={!!errors?.email?.message} isRequired>
							<FormLabel color={"brand.100"}>Email</FormLabel>
							<Input
								type="email"
								id="email"
								placeholder="Email"
								{...register("email")}
								focusBorderColor={"brand.50"}
								onClick={(e) => e.stopPropagation()}
							/>
							<FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={!!errors?.password?.message} isRequired>
							<FormLabel color={"brand.100"}>Password</FormLabel>
							<Input
								type="password"
								placeholder="Password"
								id="password"
								{...register("password")}
								focusBorderColor={"brand.100"}
								onClick={(e) => e.stopPropagation()}
							/>
							<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
						</FormControl>
						<Stack spacing={5} mt={3}>
							<Stack direction={{ base: "column", sm: "row" }} justify={"end"}>
								{/* <Checkbox>Remember me</Checkbox> */}
								<Text color={"brand.100"}>Forgot password?</Text>
							</Stack>
							<Button
								type="submit"
								disabled={!isValid}
								bg={"brand.500"}
								color={"white"}
								_hover={{
									bg: "brand.100",
								}}
							>
								Sign in
							</Button>
						</Stack>
					</form>
				</Stack>
			</Box>
		</Flex>
	);
}
