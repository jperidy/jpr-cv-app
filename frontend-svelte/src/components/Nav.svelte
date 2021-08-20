<script>
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink
    } from 'sveltestrap';
    
    // import { user } from '../store';
    // import { auth } from '../utils/firebase';
    // import { goto } from '$app/navigation';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    // const handleLogout = () => {
    //     auth.signOut();
    //     user.set({...$user, isLoggedIn: false, email:''});
    //     goto('/');
    // };
</script>

<style>
    
    /* .user-email{
        margin-right: 15px;
    } */
</style>
  
<Navbar color="light" light expand="md" class='mb-3 fixed-top'>
    <NavbarBrand href="/">jprdev-demo-app</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>

            <!-- {#if $user.isLoggedIn}
                <span class="user-email">{$user.email}</span>
                <NavItem>
                    <a href="#/" on:click|preventDefault={handleLogout}>Logout</a>
                </NavItem>
            {:else} -->
                <NavItem>
                    <NavLink href="/#/others/">Others</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/auth/Login/">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/auth/Register">Signup</NavLink>
                </NavItem>
            <!-- {/if} -->
      </Nav>
    </Collapse>
</Navbar>
  