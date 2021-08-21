import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

const homeUrl = "https://tdrj2716.github.io";

const NotFoundPage: React.FC = () => {
	const handleClick = () => {
		window.location.href = homeUrl;
	};
	return (
		<StyledBox display="flex" flexDirection="column" justifyContent="center">
			<Typography variant="h1" align="center" color="inherit">
				404 Error
			</Typography>
			<Typography variant="h6" align="center" color="inherit">
				Sorry, but we can't find what you are looking for.
			</Typography>
			<StyledButton onClick={handleClick}>See top page</StyledButton>
		</StyledBox>
	);
};

const StyledButton = styled.button`
	align-self: center;
	margin-top: 70px;
	border: none;
	size: 240px 100px;
	background: transparent;
	font-size: 36px;
	opacity: 0.8;
	transition: opacity 0.2s;

	:hover {
		opacity: 0.5;
		transition: opacity 0.2s;
	}
`;

const StyledBox = styled(Box)`
	width: 100%;
	height: 100vh;
	/* 生成した404 pageが参照出来るよう、ビルド時に変更されないpublicディレクトリに背景画像を退避させておく */
	background-image: url(${process.env.PUBLIC_URL + "/monochrome-beach.jpeg"});
	background-size: cover;
	background-position: center;
`;

export default NotFoundPage;
