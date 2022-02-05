import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'; 
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss';

export function SignInButton() {
    const { data: session }= useSession();

    const isUserLoggedIn = session;

    return isUserLoggedIn ? (
        <button 
        type="button" 
        className={ styles.signInButton }
        onClick={ () => signOut() }
        >
            <FaGithub color="#04D361"/>
            Marcio Sérgio
            <FiX color="#737380" className={ styles.closeIcon} />
        </button>
    ) : (
        <button 
        type="button" 
        className={ styles.signInButton }
        onClick={ () => signIn()}
        >
            <FaGithub color="#EBa417"/>
            Sign in with Github
        </button>
    )
}