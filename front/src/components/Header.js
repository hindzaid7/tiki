import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Navbar,Nav, Container,Image, NavDropdown } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'
import {logout }from '../actions/userActions'
import { clearCart } from '../actions/cartActions'
import SearchBox from "./SearchBox";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../logo.png";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function Headers() {
  const [itemCount, setItemCount] = React.useState(1);

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  console.log('userInfo: ',userInfo )
  const logoutHandler = () => {
      dispatch(logout())
      dispatch(clearCart())
  }
  if (userInfo === undefined){
    dispatch(clearCart())
  }
  return (
      <header>
        <Navbar className="square border-bottom border-top-0" bg="bs-yellow" varient="dark" expand="lg" collapseOnSelect headershown="false">
          <Container >
            <LinkContainer to='/'>
              <Navbar.Brand >   <Image src={logo} alt="Tiki Limited" width={50} height={50}/>   </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/cart">
               <Navbar.Brand >
                <Badge color="secondary" badgeContent={itemCount}>
                  <ShoppingCartIcon />{" "}
                </Badge>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Brand > <Button >Create Design</Button> </Navbar.Brand>
            <Form className="d-flex">
              <Form.Control type="search"  placeholder="Search"  className="me-2"  aria-label="Search"    />
                    <Button variant="outline-success">Search</Button>
              </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0"   style={{ maxHeight: "100px" }}         navbarScroll >
                 {userInfo ? (
                    <NavDropdown  className="d-flex" title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                           <NavDropdown.Item > <PermIdentityIcon/>Profile </NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item> <ShoppingCartCheckoutIcon/>My Orders</NavDropdown.Item>
                       <NavDropdown.Item >
                         <LogoutIcon onClick={logoutHandler} />   Logout
                        </NavDropdown.Item>
                  </NavDropdown>

                 ) : (
                  <LinkContainer to="/login"> 
                    <div><LoginIcon /> Login</div>
                    </LinkContainer>
                 )}
                
                  
                    
                </Nav>
                </Navbar.Collapse>
          </Container>
      </Navbar>
      </header>

  )
}

export default Headers;

//        <ButtonGroup>
//   <Button
//            onClick={() => {
//              setItemCount(Math.max(itemCount - 1, 0));
//            }}
//          >
//           {" "}
//          <RemoveIcon fontSize="small" />
//      </Button>
//   <Button
//   onClick={() => {
//              setItemCount(itemCount + 1);
//            }}
//          >
//            {" "}
//            <AddIcon fontSize="small" />
//          </Button>
//        </ButtonGroup>
