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
		}
	]
	: [];
