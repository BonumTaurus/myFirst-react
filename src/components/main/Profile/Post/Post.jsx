import './Post.css';

const Post = (props) => {
	return (
		<div className='post'>
			<div className='post__item'>
				<div className='post__ava'>
					<img src={props.ava}></img>
				</div>
				<div className='post__like'>{`like ${props.like}`}</div>
				<div className='post__name'>{props.name}</div>
				<p className='post__text'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
		</div>
	)
}

export default Post;