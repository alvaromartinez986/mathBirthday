import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const DatePickerCustom = ({ ...props }) => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
		>
			<DatePicker
				{...props}
				openTo="year"
				className="example"
			/>
		</LocalizationProvider>
	);
};

export default DatePickerCustom;
