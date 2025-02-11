import env from 'dotenv';
const config = env.config();

const pr = config.parsed?.PR_CHAT_ID;

if (!pr)
	console.log(
		new Date().toISOString(),
		'No PR chat ID found => not setting up any CRON jobs!'
	);

export const reminders = pr
	? [
		// Test reminder that runs every minute
		{
			cron: '* * * * *',  // every minute
			message: '🔔 This is a test reminder!',
			chatIds: [pr],
		}
	]
	: [];