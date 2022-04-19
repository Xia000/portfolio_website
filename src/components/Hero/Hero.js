import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Willing to work in organization where i can utillize my skills and knowledge to face challanges to prove myself an asset to the organization with  opportunities of advancement to seniour level management.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;