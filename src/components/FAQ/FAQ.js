import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, faqPage} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={listData.title} headerImage={listData.image} />
    <h2>{faqPage.title}</h2>
    <p></p> {/* poprawniej byloby zmienic w scss, ale nie to jest w tym miejscu przedmiotem nauki :) */}
    <h4>{faqPage.question1}</h4>
    <p>{faqPage.answer1}</p>
    <h4>{faqPage.question2}</h4>
    <p>{faqPage.answer2}</p>
    <h4>{faqPage.question3}</h4>
    <p>{faqPage.answer3}</p>
  </Container>
);

export default Faq;
