import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer
				className="page-footer font-small "
				style={{ backgroundColor: "#222f3e" }}
			>
				<div style={{ backgroundColor: "#6351ce" }}>
					<div className="container">
						<div className="row py-4 d-flex align-items-center text-white">
							<div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
								<h6 className="mb-0">
									Get connected with us on social networks!
								</h6>
							</div>

							<div className="col-md-6 col-lg-7 text-center text-md-right">
								<ul className="nav  flex-wrap justify-content-center align-items-center list-unstyled d-flex">
									<li className="ms-3">
										<Link
											to="https://www.facebook.com/"
											className="btn btn-primary btn-md"
											title="Facebook"
											target="_blank"
										>
											<i className="fab fa-facebook-square"></i>
										</Link>
									</li>
									<li className="ms-3">
										<Link
											to="/"
											className="btn btn-info btn-md ml-3"
											title="Twitter"
										>
											<i className="fab fa-twitter"></i>
										</Link>
									</li>

									<li className="ms-3">
										<Link
											to="/"
											className="btn btn-danger btn-md ml-3"
											title="Instagram"
										>
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
									<li className="ms-3">
										<Link
											to="/"
											className="btn btn-danger btn-md ml-3 "
											title="Linkdin"
										>
											<i className="fab fa-google"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="container text-center text-md-left mt-5 text-white">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
							<h6 className="text-uppercase font-weight-bold">Company</h6>
							<hr
								className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Shops Online
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Mens
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Womens
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Kids
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Classics
								</a>
							</p>
						</div>

						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
							<h6 className="text-uppercase font-weight-bold">Products</h6>
							<hr
								className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p>
								<a className="text-decoration-none text-white" href="#!">
									Flash Unlimited Shipping
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Gifts Card
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Site Map
								</a>
							</p>
							<p className="text-white">
								<a className="text-decoration-none text-white" href="#!">
									Special Offers
								</a>
							</p>
							<p>
								<a className="text-decoration-none text-white" href="#!">
									Reward Bazzaar
								</a>
							</p>
						</div>

						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
							<h6 className="text-uppercase font-weight-bold">My Account</h6>
							<hr
								className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p>
								<a className="text-decoration-none text-white" href="#!">
									Your Account
								</a>
							</p>
							<p>
								<a className="text-decoration-none text-white" href="#!">
									Become an Affiliate
								</a>
							</p>
							<p>
								<a className="text-decoration-none text-white" href="#!">
									Order Status
								</a>
							</p>
							<p>
								<a className="text-decoration-none text-white" href="#!">
									Shipping Rates
								</a>
							</p>

							<p>
								<a className="text-decoration-none text-white" href="#!">
									Privacy
								</a>
							</p>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase font-weight-bold">Contact</h6>
							<hr
								className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<div className="py-2">
								<span>
									<i className="fas fa-map-marker-alt"></i>
								</span>
								42 Ecommerce House, Ecommerce street, 7131 Ecommerce ville, USA
							</div>
							<div>
								<span>
									<i className="far fa-envelope"></i>
								</span>
								company@gmail.com
							</div>
							<div>
								<span>
									<i className="fas fa-phone"></i>
								</span>
								456-456-4512
							</div>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3 text-white">
					© 2020 Copyright:
				</div>
			</footer>
		</>
	);
};

export default Footer;
