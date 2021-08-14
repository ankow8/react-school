import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, pageInfo} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} headerImage={listData.image} />
    <h2>{pageInfo.title}</h2>
    <p>{pageInfo.text}</p>
    <h3>{pageInfo.contactTitle}</h3>
    <p>{pageInfo.contactName}</p>
    <p>{pageInfo.contactMail}</p>
  </Container>
);

export default Info;
