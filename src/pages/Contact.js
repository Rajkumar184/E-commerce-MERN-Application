import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Contact = () => {
	return (
		<div style={{ marginTop: "20px" }}>
			<Grid>
				<Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
					<CardContent>
						<Typography gutterBottom variant="h5">
							Contact Us
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							gutterBottom
						>
							Fill up the form and our team will get back to you within 24
							hours.
						</Typography>
						<form>
							<Grid container spacing={1}>
								<Grid xs={12} item>
									<TextField
										placeholder="FullName"
										label="First Name"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										type="email"
										placeholder="Enter email"
										label="Email"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="number"
										placeholder="Enter phone number"
										label="Phone"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label="Message"
										multiline
										rows={4}
										placeholder="Type your message here"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										type="submit"
										variant="contained"
										color="primary"
										fullWidth
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
};

export default Contact;
