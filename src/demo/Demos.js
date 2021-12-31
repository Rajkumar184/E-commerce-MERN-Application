import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {
		width: "85%",
		paddingLeft: 120,
		paddingBottom: 100,
	},
});

const Demos = () => {
	const [city, setCity] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				const setHeader = {
					headers: {
						Accept: "application/json",
					},
				};
				const res = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ed250bf3fbf664a4948951003c676e2`,
					setHeader
				);
				const data = await res.json();
				setCity(data.main);
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};

		getData();
	}, [search]);
	const classes = useStyles();
	return (
		<>
			<section className=" py-2">
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center shadow-lg p-4 my-5 bg-white  mb-6">
						<div className="col-md-6 weather-logo">
							<img
								src="images/Weather_Isometric.png"
								className="img-fluid"
								alt="change_password"
							/>
						</div>
						<div className="col-md-7 col-lg-5 col-xl-5">
							<div className="card-header">
								<h2 className="mb-0" align="center">
									Live Weather App
								</h2>
							</div>
							<div className="card-body">
								<div className="box">
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

									{!city ? (
										<p
											style={{
												color: "red",
												textAlign: "center",
												fontSize: "40px",
											}}
										>
											Result Not Found!
										</p>
									) : (
										<div className="info">
											<h2 className="location">
												<i className="fas fa-street-view">
													<span style={{ color: "#3742fa" }}>{search}</span>
												</i>
											</h2>

											<h1 className="temp">{city.temp}°C</h1>

											<h3 className="Temperature_max">
												Min : {city.temp_min}°C || Max : {city.temp_max}°C
											</h3>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Demos;
