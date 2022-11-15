import './Message.css';

const Message = (props) => {

	function setDialog(arr) {
		let arrObj = [];
		for (let mess of arr) {
			let frase = <p>{mess}</p>;
			arrObj.push(frase);
		}
		return arrObj;
	}


	return (
		<div className='friends__dialog'>
			{setDialog(props.message)}
		</div>
	)
}

export default Message;