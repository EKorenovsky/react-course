import React, {PureComponent } from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {

    state = {
        openArticleId: null
    }

    closeArticle = (openArticleId) =>
    {
        this.setState({openArticleId: null})
    }

    openArticle = (openArticleId) => {
        this.setState({openArticleId});
    }



    render() {
    const articleElements = this.props.articles.map((article, index) =>
        <li className="article-list__li"
            key={article.id}>
            <Article  onOpen={this.openArticle} onClose={this.closeArticle} article={article} isOpen = {this.state.openArticleId === article.id}/>
        </li>
    );



    return (
        <ul>
            {articleElements}
        </ul>
    ) }
}