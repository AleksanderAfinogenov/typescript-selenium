import { Builder, WebDriver, Capabilities, By } from 'selenium-webdriver';

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require('chromedriver');
const assert: IAssert = require('assert');

let capabilities = Capabilities.chrome();

capabilities.set('goog:chromeOptions', {
  args: [
    '--lang=en',
    'disable-infobars',
    '--disable-plugins',
    //'--headless' // <- use GUI or only console
  ]
});

describe('BAD - Authorization', function () {
  let driver: WebDriver;

  before(async function () {
    driver = await new Builder().withCapabilities(capabilities).build();
   });

   it('Login with incorrect data', async function () {
    await driver.get('http://lab2.webtm.ru');
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css('[ng-model="ctrl.password"]')).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click();
    // Ввели Логин и пароль, зашли в систему
    await driver.sleep(5000);
    (await driver.findElement(By.css('[id="tab-item-9"]'))).click();
    await driver.sleep(3000);
    (await  driver.findElement(By.css('[ng-model="ctrl.unit.hour"] option[value="14"]'))).click();
    (await  driver.findElement(By.css('[ng-model="ctrl.unit.minute"] option[value="30"]'))).click();
    // Ввели дату и время
    driver.findElement(By.css('[ng-model="ctrl.unit.fam"]')).sendKeys('Рыжий'); // Фамилия 
    driver.findElement(By.css('[ng-model="ctrl.unit.name"]')).sendKeys('Кот'); // Имя
    driver.findElement(By.css('[placeholder="31"]')).sendKeys('3'); // день
    driver.findElement(By.css('[placeholder="01"]')).sendKeys('4'); // месяц
    driver.findElement(By.css('[placeholder="1901"]')).sendKeys('1994'); // год
    await driver.sleep(1000);
    (await driver.findElement(By.css('[ng-click="ctrl.save()"]'))).click(); //Сохранили
    (await driver.findElement(By.css('[ng-click="exit()"]'))).click(); // Выход из учётки
    await driver.sleep(3000);
    
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css(('[ng-model="ctrl.password"]'))).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click();
    await driver.sleep(3000);
​
    // Снова вошли  систему 
    // Видим свою запись
​
​
<<<<<<< Updated upstream
    let authorizationPasswordInput = driver.findElement(By.xpath(`//div[contains(@class, 'pointer')][./div[contains(text(), '14:30')]][./div[contains(text(), 'Рыжий Кот / 1994.4.3 /')]]`));
    let exitAuthorizationPasswordInput = authorizationPasswordInput.then(() => true, () => false);
    await assert.equal(await exitAuthorizationPasswordInput, true);
=======
    let authorizationPasswordInput = driver.findElement(By.xpath(`//div[contains(@class, 'pointer')][./div[contains(text(), '14:30')]][./div[contains(text(), 'Кот Кот / 1994.4.3 /')]]`));
    let exitAuthorizationPasswordInput = authorizationPasswordInput.then(() => true, () => false);
    await assert.equal(await exitAuthorizationPasswordInput, falce);
>>>>>>> Stashed changes
   });

  xit('Login with correct data', async function () {
    await driver.get('http://lab2.webtm.ru');
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css('[ng-model="ctrl.password"]')).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click()
    await driver.sleep(1000);
    let authorizationPasswordInput = driver.findElement(By.css('[ng-model="ctrl.password"]'));
    let exitAuthorizationPasswordInput = authorizationPasswordInput.then(() => true, () => false);
<<<<<<< Updated upstream
    await assert.equal(await exitAuthorizationPasswordInput, true);
=======
    await assert.equal(await exitAuthorizationPasswordInput, t);
>>>>>>> Stashed changes
  });

  after(() => driver && driver.quit());
});
