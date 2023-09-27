import React, { useMemo, useState } from "react";
import {
	addDays,
	calculateMathBirthday,
} from "../helpers/helper";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [birthday, setBirthDay] = useState();

	const mathBirthday = useMemo(
		() => calculateMathBirthday(birthday),
		[birthday]
	);

	const dateNextBirthday = useMemo(
		() =>
			addDays(
				birthday,
				Math.pow(10, mathBirthday)
			),
		[birthday, mathBirthday]
	);

	const selectedStateObj = {
		birthday,
		setBirthDay,
		dateNextBirthday,
		mathBirthday,
	};

	return (
		<AppContext.Provider value={selectedStateObj}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = React.useContext(AppContext);
	if (context === undefined) {
		throw new Error(
			"AppContext must be used within an AppContext"
		);
	}
	return context;
};

export { AppContext, AppProvider, useAppContext };
