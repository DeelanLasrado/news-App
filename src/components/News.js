import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';




export default class News extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
    document.title=`${this.props.category}-NewsMonkey`
  }
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"


  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }

  async componentDidMount() {
    this.setState({ 
      loading:true });

    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b81eb7a532c2443f93d2c62ba98d6381&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
    totalResults:parsedData.totalResults,
  loading:false });
  }

  handleOnClickNext= async()=>{
    this.setState({ 
      loading:true });
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b81eb7a532c2443f93d2c62ba98d6381&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
    loading:false });

    this.setState({
        page:this.state.page+1})
  }
  handleOnClickPrev=async()=>{
    this.setState({ 
      loading:true });
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b81eb7a532c2443f93d2c62ba98d6381&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles ,
      loading:false});



    this.setState({
        page:this.state.page-1})
  }

  render() {
    return (
      <div className="container my-3 mx-1">
        <div className="text-center">{this.state.loading&&<Spinner/>}</div>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>
          
          <b>Headlines</b>-{this.props.category}
        </h1>
        <div className="row">
          {this.state.articles ? (
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <div className="text-center">{this.state.loading&&<Spinner/>}</div>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))
          ) : (
            <div className="text-center">{this.state.loading&&<Spinner/>}</div>
          )}


<div className="d-flex justify-content-between">
    <button type="button" disabled={this.state.page<=1} onClick={this.handleOnClickPrev} className="btn btn-dark">Prev</button>
    <button type="button" disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleOnClickNext} className="btn btn-dark">Next</button></div>
        </div>
      </div>
    );
  }
}
