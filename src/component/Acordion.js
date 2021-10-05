import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import BgImg from '../assets/space3.png';
//import {IconContext} from 'react-icons';

/* import { FiPlus, FiMinus } from 'react-icons/fi';
 */
const Section = styled.section`
 
 /*  background: #242472; */
  height: 900px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const AccordionSection = styled.div`
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 150vh;
  /* background: #fff; */
`;

const Container = styled.div`
  
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  display: flex;
  width: 100%;
  height: 100px;  
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #4080ff;
  border-top: 1px solid #4080ff;
  
  span {
    margin-right: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100hv;
`;

const Title = styled.p`
  font-size: 55px;
  color: #fff;
  font-weight: 400;
  margin-top: -5rem;
  
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    //<IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>

    
      
      <AccordionSection>
        <Section>
          <Content>
            <Title>
            Frequently Asked Questions <br /> {/* Up to 980.000 combinations! */}
            </Title>
          </Content>
        </Section> 
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
      </AccordionSection>
     /* </IconContext.Provider> */  
    
  );
};

export default Accordion;