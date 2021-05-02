export const wrapper = () => `
    max-width: 640px;
    width: 100%;
    align-self: center;
    margin-left: 1.6rem;
    margin-right: 1.6rem;
`; 

export const box = () => `
    display: flex;
    background: #fff;
    padding-left: 3vw;
    padding-right: 3vw;
    border-radius: 1.6rem;
    box-shadow: 1px 1px 4px rgb(116 128 148 / 2%), 
    0px 1px 2px rgb(116 128 148 / 4%), 
    0px 0px 4px rgb(116 128 148 / 8%), 
    0px 0px 4px rgb(116 128 148 / 8%);
`;

export const formElementsBase = () => `
    padding: 0.6rem 1.6rem;
    display: inline-block;
    font-family: inherit;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;

    &:focus {
        outline: 0;
    }

`;