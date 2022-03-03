import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { styled } from "reakit";
import Quote from "./Quote";
import * as style from "assets/common/Styles";
import Popup from "./Popup";
import { withRouter } from "react-router-dom";
import { getQuotes, searchQuotes } from "store/actions/quotes";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "components/Input";
import Button from "components/Button";
import PlusIcon from "assets/icons/plus-icon.png";
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;
`;

const ContainerWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  left: 0px;
  top: 0px;

  background: #ffffff;
`;

const Title = styled.div`
  font-family: ${style.Fonts.FontFamily.poppinsRegular}
  font-style: normal;
  font-weight: 600;
  font-size: 23.3333px;
  line-height: 31px;
  padding: 5px 82px;
  margin-top: 60px;

`;
const QuoteList = styled.div`
  left: 0px;
  top: 0px;

  /* BG/White 100% */
  margin: 0px 60px;
  background: #ffffff;
  border-radius: 38.8889px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  bottom: 5%;
  right: 5%;
  position: fixed;
`;

const TitleSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: -webkit-fill-available;
`;

const FieldHeading = styled.div`
  margin-top: 20px;
  min-width: 110px;
  width: 300px;
  padding: 5px 56px;
`;

const LogoIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const Home = (props) => {
  const quotes = useSelector((state) =>
    state.quotes.allQuotes ? state.quotes.allQuotes : []
  );
  const searchQuotes1 = useSelector((state) => state.searchQuotes);
  const dispatch = useDispatch();

  const {
    match: { params },
    onChange,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [currentQuotes, setCurrentQuotes] = useState(quotes);
  const [unmounted, setUnmounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(getQuotes({ id: params.id, page: page }));
    return setUnmounted(true);
  }, [params.id]);

  useEffect(() => {
    setCurrentQuotes(quotes);
  }, [quotes.length]);

  const search = (values) => {
    setIsLoading(true);
    dispatch(searchQuotes({ id: params.id, query: values })).then(() => {
      if (!unmounted) setIsLoading(false);
    });
    setCurrentQuotes(searchQuotes1.quotes ? searchQuotes1.quotes : []);
  };

  const loadMore = () => {
    setPage(page + 1);
    console.log("ffff", page);
    dispatch(getQuotes({ id: params.id, page: page + 1 }));
  };

  return (
    <Container
      onChange={(e) => {
        const values = e.target.value;
        // whatever stuff you want to do
        search(values);
      }}
    >
      <ContainerWrapper>
        <TitleSearchWrapper>
          <Title>{params.title}</Title>
          <FieldHeading>
            <Field
              key={"search"}
              name="search"
              component={Input}
              type="input"
              placeholder={"Search"}
            />
          </FieldHeading>
        </TitleSearchWrapper>
      </ContainerWrapper>
      <div style={{ width: "100%" }} id="infinite_Scroll">
        <InfiniteScroll
          dataLength={currentQuotes.length}
          next={loadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <QuoteList>
            {currentQuotes.map((data, index) =>
              data.category_id == params.id ? (
                <>
                  {/* //here must go quote=... because it is defined in Quote component */}
                  <Quote num={index} quote={data.description} />
                </>
              ) : null
            )}
          </QuoteList>
        </InfiniteScroll>
      </div>
      <ButtonWrapper>
        <Button
          onClick={() => setIsOpen(true)}
          radius={true}
          width={"50px"}
          text={<LogoIcon src={PlusIcon} />}
        ></Button>
      </ButtonWrapper>
      <Popup
        content={""}
        open={isOpen}
        onClose={setIsOpen}
        screen={"add_quote"}
      ></Popup>
    </Container>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "formLogin",
})(Home);
