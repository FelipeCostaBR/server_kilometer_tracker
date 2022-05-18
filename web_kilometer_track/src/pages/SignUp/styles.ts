import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 380px;
    padding: 0 20px;

    animation: ${appearFromLeft} 1s;

    img {
        height: 7rem;

        @media (max-width: 375px) {
            height: 6rem;
        }
    }

    form {
        width: 100%;
        margin: 90px 0;
        text-align: center;

        a {
            margin-top: 24px;
        }
    }

    h1 {
        margin-bottom: 24px;
    }

    a {
        color: #f4ede8;
        display: block;

        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }

    > a {
        color: #00cb43;
        display: block;
        /* margin-bottom: 5rem; */
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#00cb43')};
        }
    }
`;
