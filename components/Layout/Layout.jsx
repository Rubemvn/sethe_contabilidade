import ContentHome from "../ContentHome/ContentHome";
import NavBar from "../NavBar/NavBar";
import { Container } from "./styles";

const Layout = ({ children }) => {
	return (
		<Container>
			<NavBar />
			<ContentHome>{children}</ContentHome>
		</Container>
	);
};

export default Layout;
