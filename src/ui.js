import { deleteTrigger } from './trigger';
import { getSettings } from './server';
import { TITLE } from './utils';

export const onOpen = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const menu = [
    { name: 'Configure', functionName: 'showSidebar' },
    null,
    { name: '✖ Uninstall', functionName: 'uninstall' }
  ];

  sheet.addMenu(`➪ ${TITLE}`, menu);
};

export const showSidebar = () => {
  const html = HtmlService.createTemplateFromFile('sidebar');
  const { site = '', email = '', ga = '' } = getSettings();
  html.site = site;
  html.email = email;
  html.ga = ga;
  html.sheet = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const sidebar = html.evaluate().setTitle(TITLE);
  SpreadsheetApp.getUi().showSidebar(sidebar);
};

export const removeWebsiteMonitor = () => {
  deleteTrigger();
  SpreadsheetApp.getActiveSpreadsheet().toast(`${TITLE} stopped!`);
};
