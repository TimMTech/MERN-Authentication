import styled from "styled-components";

const MemberRules = () => {
  return (
    <MemberRulesWrapper>
      <MemberRuleListWrapper>
        <MemberRulesTitle>
          CONGRATULATIONS ON BECOMING A MEMBER!
        </MemberRulesTitle>
        <MemberRulesList>
            <Rules>As a member you now have the advantage of seeing author's of different posts!  If you see anything vulgar, offensive etc, please notify a admin via email.</Rules>
            <Rules>As a member yourself, please refrain from posting any offensive content.  If this rule is violated, membership will be taken away for a determined period of time. </Rules>
            <Rules>As a member please do not post any links as advertisement as they will be immedietly taken down by an admin.</Rules>
            <Rules>No bots allowed as they flood requests which can cause a "power-out" of the website.</Rules>
        </MemberRulesList>
        <PS>Please re log back in for changes to take place.</PS>
      </MemberRuleListWrapper>
    </MemberRulesWrapper>
  );
};

export default MemberRules;

const MemberRulesWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ChakraPetch Bold;
`;

const MemberRuleListWrapper = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border: 0.1rem solid white;
  border-radius: 1rem;
  width: 80%;
  height: 100%;
`;

const MemberRulesTitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  padding-top: 0.5rem;
`;

const MemberRulesList = styled.ul`
  font-size: 1rem;
  padding-left: 2rem;
  padding-top: 2rem;
`;

const Rules = styled.li`
  color: rgb(255, 255, 255);
  padding: 1.2rem;
`;

const PS = styled.p`

color: rgb(255,255,255);
text-align: center;
`