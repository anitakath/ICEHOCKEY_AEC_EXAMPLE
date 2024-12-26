import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="w-4/5 p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/impressum" className="text-blue-500 hover:underline">Impressum</Link>
                    </li>
                    <li>
                        <Link href="/datenschutz" className="text-blue-500 hover:underline">Datenschutz</Link>
                    </li>
                    <li>
                        <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                    </li>
                </ul>
            </nav>
            <p className="mt-2 text-gray-600">&copy; {new Date().getFullYear()} Dein Unternehmen. Alle Rechte vorbehalten.</p>
        </div>
    );
};

export default Footer;