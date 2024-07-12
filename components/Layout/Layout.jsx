import NavBar from "../NavBar/NavBar";
import { Container } from "./styles";

const Layout = ({ children }) => {
	return (
		<Container>
			<NavBar />
			{children}
		</Container>
	);
};

export default Layout;
