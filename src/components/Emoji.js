import React from 'react';
import getEmoji from '../lib/getEmoji';

var Emoji = (props) => {
	let word = props.word;
	let emoji = getEmoji(word);
	if(emoji!='')
	{
		let Style = {
			fontWeight	: 'normal',
			fontFamily	: 'AppleColorEmoji',
			letterSpacing	: '0.1em'
		};
		emoji+=' ';
		return	(<span style={Style}>{emoji}</span>);
	}

	else
	{
		word+=' ';
		return	(<span>{word}</span>);
	}
};


export default Emoji;
