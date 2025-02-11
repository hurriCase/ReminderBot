const pr = process.env.PR_CHAT_ID;

if (!pr)
	console.log(
		new Date().toISOString(),
		'No PR chat ID found => not setting up any CRON jobs!'
	);

export const reminders = pr
	? [
		{
			cron: '30 16 * * *',
			message: 'Напоминание сделать чек-ин в E-Book',
			chatIds: [pr],
		}
	]
	: [];