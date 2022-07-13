import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <nav>
            <Link href="/" >
                <a className={`${pathname === '/' && 'active-link'} link-item`}>Home</a>
            </Link>
            <Link href="/show-todo">
                <a className={`${pathname === '/show-todo' && 'active-link'} link-item`}>Todos</a>
            </Link>
            <Link href="/add-todo">
                <a className={`${pathname === '/add-todo' && 'active-link'} link-item`}>Add Todo</a>
            </Link>
        </nav>
    );
};

export default Navbar;