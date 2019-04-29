//page is non-angular
browser.ignoreSynchronization = true;

import BasePage from './basePage';
import userData from '../data/userData'

class GuestDetailsPage extends BasePage {
	constructor() {
		super();
		this.titleDropdown=element(by.xpath('//div[contains(text(),"Title")]/following-sibling::div/input'));
		this.firstNameTextbox=element(by.xpath('//input[@placeholder="First name"]'));
		this.lastNameTextbox = element(by.xpath('//input[@placeholder="Last name"]'));
		this.emailTextbox = element(by.xpath('//input[@placeholder="email"]'));
		this.countryDropdown = $('ng-select[bindvalue="country_phone_code"]');
		this.phoneNumberTextbox = element(by.xpath('//input[@placeholder="Phone Number"]'));
		this.dayDropdown=element(by.xpath('//div[contains(text(),"Day")]/following-sibling::div/input'));
		this.monthDropdown=element(by.xpath('//div[contains(text(),"Month")]/following-sibling::div/input'));
		this.yearDropdown=element(by.xpath('//div[contains(text(),"Year")]/following-sibling::div/input'));
		this.nationalityDropdown=element(by.xpath('//app-fields/div/div[5]//input'));
		this.continueButton = $('button span');
		
		//this.url = '';
		this.pageLoaded = this.isVisible(this.titleDropdown);
	}

	submitGuestDetails(guestObject)
	{	
		console.log(guestObject);
		browser.sleep(2000);
		this.titleDropdown.sendKeys (guestObject.title);
		browser.sleep(2000);
		this.firstNameTextbox.sendKeys(guestObject.firstName);
		browser.sleep(2000);
		this.lastNameTextbox.sendKeys(guestObject.lastName);
		browser.sleep(2000);
		this.emailTextbox.sendKeys(guestObject.email);
		browser.sleep(2000);
		//this.countryDropdown.sendKeys(guestObject.country);
		//browser.sleep(2000);
		this.phoneNumberTextbox.sendKeys(guestObject.phone);
		browser.sleep(2000);
		this.dayDropdown.sendKeys(guestObject.day);
		browser.sleep(2000);
		this.monthDropdown.sendKeys(guestObject.month);
		browser.sleep(2000);
		this.yearDropdown.sendKeys(guestObject.year);
		browser.sleep(2000);
		//this.nationalityDropdown.sendKeys(guestObject.nationality);
		//browser.sleep(2000);
		this.continueButton.click();

	}


};

export default new GuestDetailsPage();