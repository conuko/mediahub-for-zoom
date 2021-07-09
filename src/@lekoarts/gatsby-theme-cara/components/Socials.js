import * as React from "react";
import { useColorMode, jsx } from "theme-ui";
import styled from "styled-components";
import AppStore from "../../../images/App_Store.svg";
import PlayStore from "../../../images/Play_Store.svg";

const ContainerDownloads = styled.div`
	display: flex;
	justify-content: left;
`;

const ImageDownloads = styled.img`
	width: 200px;
	height: 60px;
	margin: 10px;

`

const Social = () => {
	return (
		<ContainerDownloads>
			<ImageDownloads src={AppStore} alt="AppStore" />
			<ImageDownloads src={PlayStore} alt="PlayStore" />
		</ContainerDownloads>
	);
};

export default Social;