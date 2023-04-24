import React, { useState } from "react";
import styled from "styled-components";

const SVN = () => {
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
            <h1>Seth Morarji Gokul Das Dharamshala</h1>
            <h3>Pune</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffastly.4sqi.net%2Fimg%2Fgeneral%2F558x200%2FVXIbvC96OX518WJ75YSeerMnZxEA3j4rp6sp4D5_5-Y.jpg&tbnid=1MwySzGw1fUDwM&vet=12ahUKEwjE36L0w4X-AhVf93MBHWHMBiIQMygCegQIARAl..i&imgrefurl=https%3A%2F%2Ffoursquare.com%2Fv%2Fshri-morarji-gokuldas-dharmashala%2F50230a04e4b02790d72d9974&docid=y6RMVuDoo9HFyM&w=558&h=200&q=Seth%20Morarji%20Gokuldas%20Dharamshala&ved=2ahUKEwjE36L0w4X-AhVf93MBHWHMBiIQMygCegQIARAl"
              alt=""
            />{" "}
          </RowTwo>
          <p>
            Sasoon Road, 18, HH Prince Aga Khan Rd, Opposite Pune Railway
            Station, Agarkar Nagar, Pune, Maharashtra 411001
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
              Pune is the city that is considered the cultural capital of
              Maharashtra. This is where the arts have flourished under the rule
              of the Marathas. The Peshwas have built numerous temples and wadas
              in the city. Shaniwar Wada is the most well known of the wadas
            </p>
            <p>
              Pune is also an educational and IT hub. It is home to many
              prestigious institutes and research centers. Pune is also a major
              center for the business outsourcing industry with countless BPOs
              and call centres functioning from here.
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
              {/* <p>Food Facility</p> */}
            </Grid>
          </RowSix>
          <h2>Distance from:</h2>
          <p>Pune Airport- 7.7 km </p>
          <p> Pune Railway Station- 170 m</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Dagdu Seth Halwai Ganpati Temple-4 km</p>
            <p>Singhard Fort-33 km </p>
            <p>Pataleshwar Temple- 4.3 km</p>
            <p>Shaniwar Wada- 33 km</p>
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

export default SMGDD;
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
