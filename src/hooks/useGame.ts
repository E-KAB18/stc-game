// import { GameQuery } from "../App";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";

export interface GameDetails {
	id: number;
	name: string;
	background_image: string;
	description_raw: string;
	parent_platforms: [{ platform: Platform }];
}

const useGame = (id: number) => {
	const [data, setData] = useState<GameDetails>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		apiClient
			.get(`/games/${id}`, {
				signal: controller.signal,
			})
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, [id]);

	return { data, error, isLoading };
};

export default useGame;
