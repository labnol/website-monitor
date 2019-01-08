import { expBackoff, logException, TITLE, DEVELOPER } from './utils';

const sendEmailAlert = (settings, status) => {
  try {
    const { site, email = '', sheet = '' } = settings;
    const subject = `Website ${status} Alert - ${site}`;
    const quota = expBackoff(() => MailApp.getRemainingDailyQuota());
    if (quota > 1) {
      const html = HtmlService.createTemplateFromFile('email');
      html.site = site;
      html.status = status.toLowerCase();
      html.sheet = sheet;
      MailApp.sendEmail(email, subject, `${site} is ${status}`, {
        htmlBody: html.evaluate().getContent(),
        name: TITLE,
        replyTo: DEVELOPER
      });
    }
  } catch (f) {
    logException(f);
  }
};

export default sendEmailAlert;
