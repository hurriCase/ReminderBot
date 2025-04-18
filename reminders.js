const pr = process.env.PR_CHAT_ID;

if (!pr)
	console.log(
		new Date().toISOString(),
		'No PR chat ID found => not setting up any CRON jobs!'
	);

export const reminders = pr
	? [
		{
			cron: '0 17 * * *',
			message: 'Напоминание сделать чек-ин в TBook - https://t.me/tbook\\_incentive\\_bot/tbook?startapp=WyIzIl0',
			chatIds: [pr],
		},
		{
			cron: '30 16 * * *',
			message: 'Сделать чек-ин в сониуме',
			chatIds: [pr],
		},
		{
			cron: '00 15 * * *',
			message: 'ЖЕСТКИЙ ЧЕКИН НА ЛЯМ БАКСОВ НЕ ЗАБЫТЬ СРОЧНО, 1 ДЕНЬ ПРОСЛАКАЛ И СОСЕШЬ https://t.me/m5bank\\_bot?start=\\_tgr\\_x6OcO901OTMy',
			chatIds: [pr],
		}
	]
	: [];
