import React, { useState } from "react";
import styled from "styled-components";

const GSKD = () => {
  //   const { user, isAuthenticated, isLoading } = useAuth0();
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    const newComment = {
      id: Date.now(),
      text: "",
      editable: false,
    };
    setComments([...comments, newComment]);
  };

  const dummy = async () => {
    // await writeJsonFile("CARD_OUTER_INFO.json", { nagpur: true });
    console.log(
      'await writeJsonFile("CARD_OUTER_INFO.json", { nagpur: true });'
    );
  };

  return (
    <>
      <Container>
        <InnerContainer>
          {/* Place NAME and LOCATION */}
          <RowOne>
            <h1>Gurdwara Sri Kalgidhar Darbar</h1>
            <h3>Nagpur</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://www.google.com/maps/uv?pb=!1s0x3bd4c1295d0ba57d:0x7c73ba13fcaa7802!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipMEyZK3SljRsZGcu-hSfqPo3FJrsTV4c-GqNxFy%3Dw260-h175-n-k-no!5sfree+stay+gurudwara+in+nagpur+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipMEyZK3SljRsZGcu-hSfqPo3FJrsTV4c-GqNxFy&hl=en&sa=X&ved=2ahUKEwiXpszK6oD-AhVS4zgGHV_aCKMQ7ZgBKAB6BAgTEAI"
              alt=""
            />{" "}
          </RowTwo>
          <p>
            54F3+MF8, Kamal Chowk, Aasi Nagar Teka, Kamptee Road, Nagpur,
            Maharashtra 440002
          </p>
          <RowThree>
            <h3>2 guests · 1 bedroom · 1 bed · 1 private bathroom</h3>
          </RowThree>
          {/* Special NOTE */}
          <RowFour>
            Extra Person Not allow in Room (Child age above 5 Year is applicable
            as Adult)
          </RowFour>{" "}
          {/* Place INFORMATION */}
          <RowFive>
            <h2>Place Information</h2>
            <p>
              Nagpur is Maharashtra’s third largest city and its winter capital.
              According to some surveys Nagpur is among the better cities to
              live in India when considering public transport, greenery, health
              care and livability. Nagpur is famous for its oranges and is
              called Orange city.
            </p>
            <p>
              Nagpur’s name comes from the Nag river which flows through the
              city. The original area of Nagpur on the north bank of the river
              is known as ‘Mahal’. Nagpur is in the exact center of India.
            </p>
          </RowFive>
          {/* Place OFFERS */}
          <RowSix>
            <h2>What does this place offer?</h2>
            <Grid>
              <p>Hot Water</p>
              <p>Parking</p>
              <p>Toilet</p>
              <p>Drinking Water</p>
              <p>CCTV</p>
              <p>Food Facility</p>
            </Grid>
          </RowSix>
          <h2>Distance from:</h2>
          <p>Nagpur Airport- 12.8 km </p>
          <p> Nagpur Railway Station- 5.3 km</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Sitabuldi Fort-4.5 km</p>
            <p>Ambazari Lake-9.6 km </p>
            <p>Futala Lake- 7.5 km</p>
            <p>Japanese Rose Garden- 5.3 km</p>
          </RowSeven>
          {/* WRITE REVIEW */}
          <RowEight>
            <h2>Write your own review</h2>
          </RowEight>
          <Review>
            <div>
              {" "}
              <strong style={{ color: "orange" }}>Login</strong> to write a
              comment!
            </div>
          </Review>
        </InnerContainer>
      </Container>
    </>
  );
};

export default GSKD;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  color: #fff;
  background-color: #000;
`;
const InnerContainer = styled.div`
  padding: 4rem 2rem;
  border-radius: 20px;
  background-image: linear-gradient(
    rgba(241, 102, 5, 0.2),
    rgba(255, 105, 0, 0.19),
    rgba(243, 100, 0, 0.15),
    rgba(226, 93, 0, 0.07),
    rgba(0, 0, 0, 0)
  );
  @media screen and (max-width: 515px) {
    padding: 4rem 0.75rem;
  }
`;
const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 2;
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
    margin: 0px 0 20px 0;
  }
`;
const RowTwo = styled.div`
  @media screen and (max-width: 935px) {
    img {
      width: 100%;
    }
  }
`;
const RowThree = styled(RowOne)`
  border-bottom: 2px solid #7d7d7d;
  padding: 1.5rem 0;
  h2 {
    font-size: 1.5rem;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
  }
  h3 {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 520px) {
    h2 {
      font-size: 1.2rem;
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
    }
    h3 {
      font-size: 1rem;
      margin: 20px 0;
    }
  }
`;
const RowFour = styled(RowOne)`
  position: relative;
  padding: 2rem 0 2rem 2rem;
  border-bottom: 2px solid rgb(125, 125, 125);
  ::before {
    content: "*";
    position: absolute;
    color: red;
    transform: scale(3);
    top: 2.4rem;
    left: 10px;
  }
  @media screen and (max-width: 520px) {
    padding: 0;
    ::before {
      top: 0.4rem;
      left: -20px;
    }
  }
`;
const RowFive = styled(RowOne)`
  padding: 0.75rem 0;
  border-bottom: 2px solid rgb(125, 125, 125);
  p {
    margin: 10px 0;
  }
`;
const RowSix = styled(RowThree)`
  width: 50%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const RowSeven = styled(RowThree)``;
const RowEight = styled.div`
  padding: 0.75rem 0;
`;
const Review = styled.div``;
const WriteReview = styled.div``;
