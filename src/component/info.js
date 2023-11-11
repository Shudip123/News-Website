import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



export class info extends Component {
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello i am constructor in info");
    this.state = {
      articles: [],
      page: 1,
      totalResults:0
    };
  }
  /*Ab code aise kam karta hai */
  async updattenews() {
    this.props.setProgress(10);
    console.log("I am CDM");
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8fce2ba962654deeb12bfbb7e781991c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);

    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);

  }

  /*pehele aisa kam karta tha code*/
  async componentDidMount() {
    // console.log("I am CDM");
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8fce2ba962654deeb12bfbb7e781991c&page=1&pageSize=${this.props.pageSize}`
    // let data = await fetch(url);
    // let parsedData =await data.json()
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles ,totalResults:parsedData.totalResults})
    this.updattenews();
  }

  handleprevclick = async () => {
    console.log("prev");

    // console.log("I am CDM");
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8fce2ba962654deeb12bfbb7e781991c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // let data = await fetch(url);
    // let parsedData =await data.json()
    // console.log(parsedData);

    // this.setState({
    //   page:this.state.page -1,
    //   articles:parsedData.articles
    // })
    this.setState({ page: this.state.page - 1 });
    this.updattenews();
  };

  handlenextclick = async () => {
    console.log("Next");
    //   if(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)){

    //   }
    //   else{

    //     console.log("I am CDM");
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8fce2ba962654deeb12bfbb7e781991c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    //     let data = await fetch(url);
    //     let parsedData =await data.json()
    //     console.log(parsedData);

    //     this.setState({
    //       page:this.state.page +1,
    //       articles:parsedData.articles
    //     })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updattenews();
  };

  fetchMoreData = async() => {
    this.setState({page:this.state.page +1})
    console.log("I am CDM");
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8fce2ba962654deeb12bfbb7e781991c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat (parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    console.log("I am render");
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center" style={{ margin: "35px 0px" }}>
            News Monkey - Top Headline
          </h2>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<h4>Loading...</h4>}
          >
            <div className="container">

            </div>

            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      newsUrl={element.url}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between mb-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary "
            onClick={this.handleprevclick}
          >
            &larr; Primary
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary "
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default info;
