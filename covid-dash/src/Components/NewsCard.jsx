import React, { Component } from 'react';

// b2eddec6445f43e6ad3ff867f25825b5

export default class NewsCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            newsData: null,
            loading: true
        }
    }

    componentDidMount(){
        let country = this.props.country
        let today = new Date()
        let searchUrl = `http://newsapi.org/v2/everything?q=${country+"+coronavirus"}&from=${today.toISOString().split("T")[0]}&sortBy=publishedAt&apiKey=3447c5abb75846599e393d1ae9240f04`
        fetch(searchUrl)
        .then(res => res.json())
        .then(result => {
            this.setState({
                newsData: result.articles,
                loading: false
            })
        }, error => {
            console.log(error)
        }) 
    }

    componentDidUpdate(prev){
        if(prev.country !== this.props.country){
            let country = this.props.country
            let today = new Date()
            let searchUrl = `http://newsapi.org/v2/everything?q=${country+"+coronavirus"}&from=${today.toISOString().split("T")[0]}&sortBy=publishedAt&apiKey=3447c5abb75846599e393d1ae9240f04`
            fetch(searchUrl)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    newsData: result.articles,
                    loading: false
                }, () => {
                    console.log(this.state.newsData)
                })
            }, error => {
                console.log(error)
            }) 
        }
    }

    render(){
        return (
            <div className="news-card">
                <h3>News Feed</h3>
                <div className="news-content">
                    {!this.state.loading ?
                        <div className="news-box">
                            {this.state.newsData.map((nd, index) =>{
                                return (
                                    <a className="article-box"  href={nd.url} key={index}>
                                        <h4 >{nd.title}</h4>
                                        <img src={nd.urlToImage}/>
                                    </a>
                                )
                            })}
                        </div>
                    : null}
                </div>
            </div>
        )
    }
}