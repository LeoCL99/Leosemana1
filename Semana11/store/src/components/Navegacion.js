import { useContext, useRef } from "react";
import { AuthContext } from "../context/authContext";
import { CarritoContext } from "../context/carritoContext";
import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import'../sass/estilos.scss';
import { blue } from "@mui/material/colors";
export default function Navegacion() {
    const { user, signOut } = useContext(AuthContext);
    const { carrito } = useContext(CarritoContext);

    const refBuscar = useRef();

    const navigate = useNavigate();

    const totalCarrito = carrito.reduce((total, prod) => {
        return total + prod.cantidad;
    }, 0);

    const manejarBusqueda = () => {
        navigate(`/productosfiltros/${refBuscar.current.value}`);
    };
 
    return (
        <Navbar  expand="lg" className="cd" >
            <Container>
                <Navbar.Brand>TORTASYA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/productosfiltros">
                            Productos
                        </Link>
                        {user ? (
                            <>
                                <Link className="nav-link" to="/checkout">
                                    Checkout
                                </Link>
                            </>
                        ) : null}
                    </Nav>
                    <Nav>
                        <div className="d-flex">
                            <input
                                type="text"
                                placeholder="Buscar producto..."
                                className="form-control"
                                ref={refBuscar}
                            />
                            <button className="btn btn-outline-dark" onClick={manejarBusqueda}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <Link className="nav-link" to="/carrito">
                            <Badge badgeContent={totalCarrito} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                        {/* Login y Logout */}

                        {user ? (
                            <NavDropdown
                                title={
                                    <div className="d-inline">
                                        <img
                                            src={user.photoURL}
                                            className="me-2"
                                            alt="avatar"
                                            style={{ borderRadius: "50%", width: "30px" }}
                                        />
                                        <span>{user.displayName}</span>
                                    </div>
                                }
                            >
                                <NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link className="nav-link" to="/login">
                                Ingresar
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}