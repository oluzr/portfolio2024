export const formatDate = (date: any, formatType: 'date' | 'day') => {
	const dateObj = new Date(date || Date.now());
	const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

	const year = dateObj.getFullYear();
	const month = String(dateObj.getMonth() + 1).padStart(2, '0');
	const day = String(dateObj.getDate()).padStart(2, '0');
	const weekday = weekdays[dateObj.getDay()];

	if (formatType === 'date') {
		return `${year}-${month}-${day}`;
	} else if (formatType === 'day') {
		return `${year}-${month}-${day} ${weekday}요일`;
	}
};

export const getDayOfWeek = (day: number, lang: 'kor' | 'eng') => {
	const daysOfWeekInKorea = ['일', '월', '화', '수', '목', '금', '토', '일'];
	const daysOfWeekInEnglish = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	return lang === 'kor' ? daysOfWeekInKorea[day] : daysOfWeekInEnglish[day];
};
