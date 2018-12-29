import React from 'react';
import FormModal from '../Form/Form';
import { Navbar, NavbarBrand } from 'reactstrap';

const Nav = () => {
    return (
        <Navbar color="light" expand="md">
            <NavbarBrand>AlertSD</NavbarBrand> 
            <FormModal />
        </Navbar>
    );
}

export default Nav;
