import React, { useState } from "react";
import styled from "styled-components";

const BG = () => {
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
            <h1>Bachcharaj Dharmshala</h1>
            <h3>Wardha</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://www.google.com/maps/uv?pb=!1s0x3bd47f6b6ef1e3dd:0xab38102108faaba7!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOB-MkjS3xMQiX3UJPq4kOg_ZoTa2EhL7NIEvNN%3Dw390-h262-n-k-no!5sdharamshala+in+wardha+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOB-MkjS3xMQiX3UJPq4kOg_ZoTa2EhL7NIEvNN&hl=en&sa=X&ved=2ahUKEwi_l9jd7oP-AhXPSGwGHS80BvwQ7ZgBKAB6BAgJEAI"
              alt=""
            />
          </RowTwo>
          <p>New Railway Colony, Wardha, Maharashtra 442001</p>
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
              Wardha was one of the most important cities in India ever since
              the pre-independence Bristish era. The city was founded in 1866
              and on the planning ideas of legendary Englishmen Sir Crowdock and
              Sir Bachelor. In view of the fact that most of the important
              centres of culture, trade and education in Wardha were born in the
              British era, the city administration chose to name some of them as
              a mark of gratitude and respect to the British, for their
              invaluable contributions in the evolution of the city.
            </p>
            <p>
              One of the most famous historical events to have taken place in
              this city of Wardha was the Marathi Sahitya Sammelan in 1969,
              which was an international conference on Marathi literature
              presided over by Purushottam Shivram Rege and attended by many
              eminent scholars from all parts of the world.
            </p>
            <p>
              Mahatma Gandhi’s contributions to the historical fame of Wardha
              are also noteworthy. The legendary nationalist leader turned this
              city into one of the most important centres for his movements and
              campaigns across the country. The strategic location of Wardha in
              Central India proved to be of immense use to Gandhi in this
              context.
            </p>
            <p>
              Other notable personalities who made worthy contributions to the
              cause of Wardha’s fame are Dr Govind Sadashivrao Gade, the only
              medical surgeon from Wardha during his time, and Baba Amte who was
              a well known Indian socialist.
            </p>
          </RowFive>
          {/* Place OFFERS */}
          <RowSix>
            <h2>What does this place offer?</h2>
            <Grid>
              <p>Hot Water</p>
              <p>Parking</p>
              <p>Drinking Water</p>
              <p>Food Facility</p>
            </Grid>
          </RowSix>
          <h2>Distance from:</h2>
          <p>Nagpur Airport- 80.4 km </p>
          <p> Nagpur Railway Station- 79.0 km</p>
          <p>Wardha Railway Station- 400 m</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Sewagram Aashram-8.9 km</p>
            <p>Laxminarayan Temple- 900 m </p>
            <p>Bor Tiger Reserve- 35.2 km</p>
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

export default BG;
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
