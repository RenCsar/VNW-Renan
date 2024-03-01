import styled from "styled-components";

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Container = styled.div`
${flexCenter}
height: 100vh;
width: 100%;
flex-direction: column;
gap: 20px;
`