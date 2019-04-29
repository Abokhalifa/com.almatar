import userData from '../data/userData';
import homePage from '../pages/homePage';
import hotelListPage from '../pages/hotelListPage';
import hotelRoomsPage from '../pages/hotelRoomsPage';
import guestDetailsPage from '../pages/guestDetailsPage';

describe ('Reserve hotel rooms', () => {
    beforeEach(() => {
        homePage.goto();
	});
	
	afterEach(() => {
        browser.restart();
    });

    it('Reserve a room in Turkey with 1 adult and 1 child', (done) => {
    	homePage.setTravelDestination(userData.room1.destinationCountryRequired,userData.room1.destinationCityRequired);
    	homePage.setTravelerCountPerRoom(parseInt(userData.room1.adultCountRequired),parseInt(userData.room1.childCountRequired));
    	homePage.searchHotel();
    	hotelListPage.selectHotel(userData.hotel1.hotelRequired);
    	hotelRoomsPage.bookRoom();
		guestDetailsPage.submitGuestDetails(userData.guest1);    
       
    });
    
    it('Reserve a room in France with 2 adults and 2 children', (done) => {
    	homePage.setTravelDestination(userData.room2.destinationCountryRequired,userData.room2.destinationCityRequired);
    	//homePage.setCheckInDate(userData.room1.checkInDateRequired);
    	//homePage.setCheckOutDate(userData.room1.checkOutDateRequired);
    	homePage.setTravelerCountPerRoom(parseInt(userData.room2.adultCountRequired),parseInt(userData.room2.childCountRequired));
    	homePage.searchHotel();
    	hotelListPage.selectHotel(userData.hotel1.hotelRequired);
    	hotelRoomsPage.bookRoom();
		guestDetailsPage.submitGuestDetails(userData.guest1); 
    
       
    });
    
});

