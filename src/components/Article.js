import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired,
            comments: PropTypes.array,
        }).isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    state = {
        isCommentsExpanded: false
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = <section>{article.text}</section>
        const comments = article.comments || [];
        const commentItems = comments.map((comment, index)=>(<div key={comment.id}><b>{comment.user}: </b>{comment.text}</div>));


        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <div hidden={!isOpen}>
                    {body}
                    <button onClick={this.onCommentButtonClick}>{this.state.isCommentsExpanded ? 'Hide comments' : 'Show comments'}</button>
                    <div hidden={!this.state.isCommentsExpanded}>
                        {commentItems}
                    </div>
                </div>

                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    onCommentButtonClick = () => (
        this.setState({
            isCommentsExpanded: !this.state.isCommentsExpanded
        })
    );
}


export default Article