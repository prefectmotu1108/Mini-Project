import React, { useState } from "react";
import styled from "styled-components";

const LMD = () => {
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
            <h1>Lohia Mangal Dharamshala</h1>
            <h3>Tuljapur</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://www.google.com/maps/uv?pb=!1s0x3bc5bf8db3ff1cab%3A0x86acb6f5e7754c8!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM0QU3IvNJfaekaHEwA6aUpXWwbxcm2qzCzbAZK%3Dw325-h218-n-k-no!5sdharamshala%20in%20tuljapur%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipN4jXlQ2ximLLr6JPhhul1U5uZQbSiAOjlWs7y8&hl=en&sa=X&ved=2ahUKEwj236bmqYb-AhVrplYBHSmHBnIQ7ZgBKAB6BAgTEAI#"
              alt=""
            />{" "}
          </RowTwo>
          <p>
            Lohia Mangal Karyalay and Dharmshala, Lohia Mangal Karyalay,
            Tuljapur, Maharashtra 413601
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
              {/* <p>Parking</p> */}
              <p>Toilet</p>
              <p>Drinking Water</p>
              {/* <p>CCTV</p> */}
              <p>Food Facility</p>
            </Grid>
          </RowSix>
          <h2>Distance from:</h2>
          <p>Aurangabad Airport- 260 km </p>
          <p>Osmanabad Railway Station- 31.5 km</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Tulja Bhavani Temple-1.3 km</p>
            <p>Kallol Tirth-1.2 km </p>
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

export default LMD;
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
