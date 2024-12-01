import { Button, Container } from "react-bootstrap"


const NavBar = ({ activePage,setActivePage }) => {
    const LinkMap = ["Landing Page", "Counter Page"]
    return (
        <Container>
            {
                LinkMap.map((link) => {
                    return (
                        <Button className="m-3" active={link === activePage} onClick={() => setActivePage(link)}>{link}</Button>
                    );
                })
            }

        </Container>
    )
}

export default NavBar