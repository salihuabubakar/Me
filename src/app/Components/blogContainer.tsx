import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  .banner-image {
    width: 100%;
  }

  @media (max-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 920px) {
    width: 70%;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;


export const DeckContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 5em auto 3em;

  @media (max-width: 705px) {
    margin: 4em auto;
  }
`;

export const Card: any = styled.div`
  position: relative;
  padding: 1em;
  z-index: 5;
  border-radius: 2px;
  transition: 200ms ease-in-out;
  box-shadow: 4px 4px 20px rgba(0,0,0,.3);
  border: 1px solid #222831;

  &:hover {
    z-index: 7;
    transform: scale(1.05);
  }

  .banner-image {
    width: 100%;
  }

  ${(props: any) => {
    const index = props.index;
    if (index === 0) {
      return `
        margin-left: -3em;
        margin-right: 3em;

        @media (max-width: 705px) {
          margin-left: -1em;
          margin-right: 1em;
        }

        @media (max-width: 550px) {
          margin: 0;
        }
      `;
    } else if (index % 2 === 1) {
      return `
        margin-left: 5em;
        margin-right: -5em;
        margin-top: -6em;

        @media (max-width: 705px) {
          margin-left: 1em;
          margin-right: -1em;
          margin-top: 1em;
        }

        @media (max-width: 550px) {
          margin: 1em 0 0;
        }
      `;
    } else if (index % 2 === 0 && index !== 0) {
      return `
        margin-top: -2em;
        margin-left: -1em;
        margin-right: 1em;

        @media (max-width: 705px) {
          margin-left: -1em;
          margin-right: 1em;
          margin-top: 1em;

          &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1em;
            display: block;
            border-bottom: 5px solid rgba(192, 57, 43, 0.6);
          }
        }

        @media (max-width: 550px) {
          margin: 1em 0 0;
        }
      `;
    }
    return '';
  }}
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .cardHeader_account {
    font-size: 0.85em;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .cardHeader_date {
    margin: 10px;
    font-size: 0.85em;
    font-weight: 600;
  }
`;

export const CardBody = styled.div`
  display: flex;
  margin: 10px 0;

  .cardText {
    white-space: nowrap;
    font-weight: 400;
    line-height: 1.5;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;