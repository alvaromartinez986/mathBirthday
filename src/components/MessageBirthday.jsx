import React from "react";
import { Typography, Stack } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import CakeIcon from "@mui/icons-material/Cake";

const MessageBirthday = () => {
	const { mathBirthday, dateNextBirthday } =
		useAppContext();

	return (
		<Stack
			direction="row"
			sx={{
				width: "100%",
				justifyContent: "space-evenly",
				mt: 5,
				color: "main",
			}}
		>
			<CakeIcon
				className="cake"
				sx={{ fontSize: "34px" }}
			/>
			<Typography textAlign="center">
				Your next math birthday is your{" "}
				<Typography
					sx={{ fontWeight: "bold", mr: "3px" }}
					component="span"
				>
					{Math.pow(10, mathBirthday)}-day-old
				</Typography>
				birthday on{" "}
				<Typography
					sx={{ fontWeight: "bold" }}
					component="span"
				>
					{dateNextBirthday}
				</Typography>
			</Typography>
			<CakeIcon
				className="cake"
				sx={{ fontSize: "34px" }}
			/>
		</Stack>
	);
};

export default MessageBirthday;
