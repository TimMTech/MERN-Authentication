import styled from "styled-components";
import Unauthenticated from "../AuthenticationErrors/Unauthenticated";
import NotAdmin from "../AuthenticationErrors/NotAdmin";

const AdminRules = ({ isAuthenticated, isAdmin }) => {
  return (
    <>
      {isAuthenticated ? (
        <>
          {isAdmin ? (
            <AdminRulesWrapper>
              <AdminRuleListWrapper>
                <AdminRulesTitle>
                  CONGRATULATIONS ON BECOMING AN ADMIN!
                </AdminRulesTitle>
                <AdminRulesList>
                  <Rules>
                    As an admin you now have the most highest authority in our
                    community. Please keep the message feed clean and
                    vulgar-free.
                  </Rules>
                  <Rules>
                    As an admin you now have the ability to remove posts at
                    will. If you see any offensive, vulgar etc posts, please
                    remove as soon as you can.
                  </Rules>
                  <Rules>
                    As an admin please have a look out for anhy unsolicitated
                    advertisements that are being posted on our feed. Many of
                    the links usually are cyber attacks in the making.
                  </Rules>
                  <Rules>
                    If you see a flood of post bots in the feed, please
                    immediately notify our IT team so we can return operations
                    back to normal.
                  </Rules>
                </AdminRulesList>
                <PS>Please re log back in for changes to take place.</PS>
              </AdminRuleListWrapper>
            </AdminRulesWrapper>
          ) : (
            <NotAdmin />
          )}
        </>
      ) : (
        <Unauthenticated />
      )}
    </>
  );
};

export default AdminRules;

const AdminRulesWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ChakraPetch Bold;
`;

const AdminRuleListWrapper = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border: 0.1rem solid white;
  border-radius: 1rem;
  width: 80%;
  height: 100%;
  padding: 0.5rem;
`;

const AdminRulesTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding-top: 0.5rem;
`;

const AdminRulesList = styled.ul`
  font-size: 1rem;
  padding-left: 2rem;
  padding-top: 2rem;
`;

const Rules = styled.li`
  color: rgb(255, 255, 255);
  padding: 1.2rem;
`;

const PS = styled.p`
  color: rgb(255, 255, 255);
  text-align: center;
`;
