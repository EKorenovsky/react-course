import React, { Component, PureComponent } from 'react';

class Article extends PureComponent {
    state = {
        count: 0
    }

    incrementClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleOnClick = (event) => {
       //event.stopPropagation();
       if (this.props.isOpen) 
            this.props.onClose(this.props.article.id);
        else 
            this.props.onOpen(this.props.article.id); 
    }



    // shouldComponentUpdate = (nextProps, nextState) => {
    //     return (this.state.isOpen !== nextState.isOpen);

    // }

    componentWillMount = () => {
        console.log('---', 'mounting');
    }

    // componentWillReceiveProps = (nextProps) => {
    //     console.log('---', 'componentWillReceiveProps');
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) {
    //         this.setState({ isOpen: nextProps.defaultOpen })
    //     }
    // }

    componentWillUpdate = () => {
        console.log('---', 'update');
    }


    render() {
        const { article, isOpen } = this.props;
        const style = { width: '50%' };
        const body = isOpen && <section className="card-text" >{article.text}</section>
        return (
            <div className="card mx-auto mb-1" style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementClick} >{article.title} click: {this.state.count}
                        <button className="btn btn-primary btn-lg float-end" onClick={this.handleOnClick}>{(isOpen) ? 'Close' : 'Open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {new Date().toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
}




export default Article;