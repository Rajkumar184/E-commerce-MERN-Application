import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {
		width: "85%",
		paddingLeft: 100,
		paddingBottom: 100,
	},
});

export default function SearchInput({ search, setSearch }) {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<TextField
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				fullWidth
				label="Search Something..."
				id="fullWidth"
				color="secondary"
			/>
		</Box>
	);
}
