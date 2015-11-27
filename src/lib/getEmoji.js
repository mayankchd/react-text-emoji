import emojis from 'emojilib';

let getEmoji = (keyword) => {
	keyword = keyword.trim().toLowerCase();

	if (!keyword || keyword === '' || keyword === 'it')
		return	'';

	let maybeSingular = '';
	if (keyword.length > 2 && keyword[keyword.length - 1] == 's')
		maybeSingular = keyword.slice(0, keyword.length - 1);

	let maybePlural = (keyword.length == 1) ? '' : keyword + 's';
	let extraP ='';
	if(keyword[keyword.length - 1] =='.' || keyword[keyword.length - 1] ==',' || keyword[keyword.length - 1] =='!')
	{
		extraP = keyword[keyword.length-1];
		keyword = keyword.slice(0, keyword.length - 1);
	}

	for (let emoji in emojis) {
		let keywords = emojis[emoji].keywords;
		if (emoji == keyword || emoji == maybeSingular || emoji == maybePlural ||
				(keywords && keywords.indexOf(keyword) >= 0) ||
				(keywords && keywords.indexOf(maybeSingular) >= 0) ||
        (keywords && keywords.indexOf(maybePlural) >= 0))

			return emojis[emoji].char+extraP;
	}
	return '';
};

export default getEmoji;
