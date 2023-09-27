import React from "react";
import { Stack, Typography } from "@mui/material";
import DatePickerCustom from "../components/DatePickerCustom";
import MessageBirthday from "../components/MessageBirthday";
import dayjs from "dayjs";

import { useAppContext } from "../context/AppContext";

const yesterday = dayjs().subtract(1, "day");

const Main = () => {
	const { birthday, setBirthDay } =
		useAppContext();

	return (
		<Stack
			sx={{
				p: 5,
				height: "100%",
			}}
		>
			<Typography variant="h3" mx="auto" mt="15%">
				Math birthdays
			</Typography>
			<DatePickerCustom
				sx={{
					mt: "20px",
					width: "80%",
					mx: "auto",
				}}
				maxDate={yesterday}
				onChange={(newValue) =>
					setBirthDay(newValue)
				}
			/>
			{birthday && <MessageBirthday />}
		</Stack>
	);
};

export default Main;
