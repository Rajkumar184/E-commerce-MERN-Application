import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const Navbar = () => {
	const { cartItems } = useContext(GlobalContext);
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="sticky" style={{ backgroundColor: "#01a3a4" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						className="title"
						noWrap
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						style={{
							color: "#4b4b4b",
							textDecoration: "none",
							fontSize: "22px",
						}}
					>
						<img
							src="images/ICON-LOGO.png"
							alt="lOGO"
							height="50px"
							style={{ borderRadius: "60%" }}
						/>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{/* {pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))} */}
							<MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
								<HomeIcon />

								<Typography variant="h6"> Home</Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/Product"
							>
								<LocalMallIcon />

								<Typography variant="h6"> Product </Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/About"
							>
								<InfoIcon />

								<Typography variant="h6"> About</Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/Contact"
							>
								<ContactPageIcon />

								<Typography variant="h6"> ContactUs </Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						className="title"
						noWrap
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						style={{
							color: "#4b4b4b",
							textDecoration: "none",
							fontSize: "22px",
						}}
					>
						<img
							src="images/ICON-LOGO.png"
							alt="lOGO"
							height="50px"
							style={{ borderRadius: "60%" }}
						/>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{/* {pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))} */}
						<Button
							variant="text"
							component={Link}
							to="/"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							Home
						</Button>
						<Button
							variant="text"
							component={Link}
							to="/Product"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							Product
						</Button>
						<Button
							variant="text"
							component={Link}
							to="/About"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							About
						</Button>
						<Button
							variant="text"
							component={Link}
							to="/Contact"
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
						>
							ContactUs
						</Button>
					</Box>
					<div className="cart" style={{ position: "absolute", right: "65px" }}>
						<IconButton
							component={Link}
							to="/cart"
							style={{ color: "#ffffff", textDecoration: "none" }}
							aria-label="Show cart items"
							color="default"
						>
							{cartItems.length > 0 && (
								<Badge badgeContent={cartItems.length} color="secondary">
									<ShoppingCartIcon style={{ fontSize: "125%" }} />
								</Badge>
							)}
						</IconButton>
					</div>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{/* {settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))} */}

							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/Account"
							>
								<Typography textAlign="center"> Account </Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/order"
							>
								<Typography textAlign="center"> My Orders</Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/SignUp"
							>
								<Typography textAlign="center"> SignUp</Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/Login"
							>
								<Typography textAlign="center"> Login </Typography>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								component={Link}
								to="/LogOut"
							>
								<Typography textAlign="center"> LogOut </Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
