import ButtonWhatsApp from "../ButtonWhatsApp/ButtonWhatsApp";
import NavBar from "../NavBar/NavBar";
import { Container } from "./styles";

const Layout = ({ children }) => {
	return (
		<Container>
			<NavBar />
			<ButtonWhatsApp />
			{children}
		</Container>
	);
};

export default Layout;
