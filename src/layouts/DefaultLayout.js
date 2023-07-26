import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Container = ({children}) => {
    return <div>{children}</div>
}

export default function DefaultLayout (props) {
    /* Props */
    const {
        className,
        children,
    } = props;

    /* Renderer */
    return <Container className={ className }>
        <Header />
        <Nav />
        { children }
        <Footer />
    </Container>
}