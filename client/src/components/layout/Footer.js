import React from 'react'
import styled from 'styled-components'

    const FooterContainer = styled.div`
        background-color: lightgrey;
        padding: 1rem;
        text-align: center;
    `

    const LinkContainer = styled.ul`
        list-style-type: none;
        display: flex;
        justify-content: space-around;
    `

const Footer = () => {
    return (
        <FooterContainer>
            <div>This website is not produced, endorsed, supported, or affiliated with Wizards of the Coast.</div>
            <div>Made with <span role="img" aria-label="heart">❤️</span> by Kaemon Lovendahl</div>
            <LinkContainer>
                <li>
                    <a 
                        href="https://twitter.com/KaemonIsland"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Twitter</a></li>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/kaemon-lovendahl-08150564/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >LinkedIn</a></li>
                <li>
                    <a 
                        href="http://kaemon-lovendahl.surge.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >My Website</a></li>
                <li>
                    <a 
                        href="https://github.com/KaemonIsland"
                        target="_blank"
                        rel="noopener noreferrer"
                    >GitHub</a></li>
            </LinkContainer>
        </FooterContainer>
    )
}

export default Footer;