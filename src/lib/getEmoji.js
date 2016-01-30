import emojis from 'emojilib';

function getEmoji(keyword) {
	let puncs = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
	keyword = keyword.trim().toLowerCase();

	if (!keyword || keyword === '' || keyword === 'it')
		return	'';

	let maybeSingular = '';
	if (keyword.length > 2 && keyword[keyword.length - 1] == 's')
		maybeSingular = keyword.slice(0, keyword.length - 1);

	let maybePlural = (keyword.length == 1) ? '' : keyword + 's';
	
	let startPuncs='', endPuncs='';
	while(puncs.indexOf(keyword[0]) != -1)
	{
		startPuncs+=keyword[0];
		keyword = keyword.slice(1, keyword.length);
	}
	
	while(puncs.indexOf(keyword[keyword.length-1]) != -1)
	{
		endPuncs+=keyword[keyword.length-1];
		keyword = keyword.slice(0, keyword.length-1);
	}

	for (let emoji in emojis) {
		let keywords = emojis[emoji].keywords;
		if (emoji == keyword || emoji == maybeSingular || emoji == maybePlural ||
				(keywords && keywords.indexOf(keyword) >= 0) ||
				(keywords && keywords.indexOf(maybeSingular) >= 0) ||
        (keywords && keywords.indexOf(maybePlural) >= 0))
		{
			if(emojis[emoji].char)
				return startPuncs+emojis[emoji].char+endPuncs;
		}

	}
	return '';
}

export default getEmoji;
