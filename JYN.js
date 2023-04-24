import React, { useState } from "react";
import styled from "styled-components";

const JYN = () => {
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
            <h1>
              {" "}
              <h3>Tuljapur</h3>
            </h1>
            <h3>Tuljapur</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://www.google.com/travel/hotels/entity/CgsIlvbcg_ykx8XlARAB/lightbox/CAoSLEFGMVFpcE9uMVlmX1FTakc0Y0szaEhoSE82cnh1eWhDMnZxWkhrZzJIeDda?g2lb=2502548,2503771,2503781,4258168,4284970,4291517,4306835,4597339,4757164,4814050,4850738,4861688,4864715,4874190,4893075,4920132,4924070,4936396,4952389,4965990,4967052,4968087,4972345,4977394,4983186,4989344,4990215&hl=en-IN&gl=in&ssta=1&grf=EmQKLAgOEigSJnIkKiIKBwjnDxAEGAcSBwjnDxAEGAggADAeQMoCSgcI5w8QAxgfCjQIDBIwEi6yASsSKQonCiUweDNiYzViZmJjNDZiOTI5N2I6MHhlNThiMWQyN2MwNzczYjE2&rp=EJb23IP8pMfF5QE4AkAASAHAAQI&ictx=1&sa=X&ved=2ahUKEwi8ha2Irob-AhUamFYBHckaDlUQ7ZgBKAB6BAgOEAI"
              alt=""
            />{" "}
          </RowTwo>
          <p>234C+WQ7, Gopal nagar near bus stand Tuljapur, Dist, 413601</p>
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
              Tulja Bhavani Mata temple in Tuljapur is one of the 51 Shakti
              Peeths of India. It is one of Maharashtra’s most revered holy
              sites. Tulja Bhavani Mata is the Kuldevi of many families in
              Maharashtra, Andhra, Karnataka and Telangana.
            </p>
            <p>
              The temple was constructed in the 12th century. Tulja Bhavani Mata
              is the family deity of the Royal Bhosale family. It is believed
              Chhatrapati Shivaji had visited this temple and was blessed by
              Mata. The granite idol is about three feet high and is said to be
              self appeared
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
          <p>Aurangabad Airport- 259 km </p>
          <p>Osmanabad Railway Station- 30.8 km</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Tulja Bhavani Temple-1.2 km</p>
            <p>Kallol Tirth-1.0 km </p>
            <p>Ghat Shila Temple- 1.3 km</p>
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

export default JYn;
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
