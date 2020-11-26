import Head from 'next/head';
import {ContWidthFull} from 'components';
import {Container} from './styled';
import Link from 'next/link';
import firebase from "firebase/app";
import "firebase/auth";
import {useState} from 'react';

const Footer = () => {

    return (
        <Container>
            <div className="cont">
                   <address>Desarrollado por Axel Dumas - Programación 3, Tecnología Multimedial 2020</address>
                </div>
        </Container>

    )
}
export default Footer;