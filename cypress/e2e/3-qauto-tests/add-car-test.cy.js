import HomePage from "../../page-object/Pages/HomePage";
import GaragePage from "../../page-object/Pages/GaragePage";
import AddAndEditCarForms from "../../page-object/Forms/AddAndEditCarForms";

describe("Add Cars tests", () => {

beforeEach(() => {
    cy.visit('/');
    HomePage.loginWitCreds("daharkov@mail.com", "ASDqwe123");
  });


  it("Verify add new car with empty fields", () => {
    GaragePage.clickAddCarButton();
    AddAndEditCarForms.elements.carMileageInput().click().blur();
    AddAndEditCarForms.getErrorMessage().should("have.text", "Mileage cost required");
    AddAndEditCarForms.clearCarMileageInput();
    AddAndEditCarForms.fillCarMileage("-1");
    AddAndEditCarForms.getErrorMessage().should("have.text", "Mileage has to be from 0 to 999999");
    AddAndEditCarForms.clearCarMileageInput();
    AddAndEditCarForms.fillCarMileage("1000000");
    AddAndEditCarForms.getErrorMessage().should("have.text", "Mileage has to be from 0 to 999999");
    AddAndEditCarForms.clickCancelAddCarButton();
  });

  it("Add car and verify add fuel expense", () => {
    GaragePage.clickAddCarButton();
    AddAndEditCarForms.selectCarBrand("Ford");
    AddAndEditCarForms.selectCarModel("Fusion");
    AddAndEditCarForms.fillCarMileage("10");
    AddAndEditCarForms.clickSaveCarButton();

    GaragePage.clickAddFuelExpenseButton();
    AddAndEditCarForms.elements.numberOfLitersInput().click().blur();
    expect(AddAndEditCarForms.getErrorMessage().should("have.text", "Liters required"));
    AddAndEditCarForms.fillNumberOfLitersInput("0");
    expect(AddAndEditCarForms.getErrorMessage().should("have.text", "Liters has to be from 0.01 to 9999"));
    AddAndEditCarForms.clearNumberOfLitersInput();
    AddAndEditCarForms.fillNumberOfLitersInput("10");

    AddAndEditCarForms.clickTotalCostInput();
    AddAndEditCarForms.elements.totalCostInput().blur();
    expect(AddAndEditCarForms.getErrorMessage().should("have.text", "Total cost required"));
    
    AddAndEditCarForms.fillTotalCostInput("-1");
    AddAndEditCarForms.elements.totalCostInput().blur();
    expect(AddAndEditCarForms.getErrorMessage().should("have.text", "Total cost has to be from 0.01 to 1000000"));
    AddAndEditCarForms.clearTotalCostInput();
    AddAndEditCarForms.fillTotalCostInput("5");
    AddAndEditCarForms.clickSaveCarButton();
    expect(AddAndEditCarForms.getAlertErrorMessage().should( "have.text", "First expense mileage must not be less or equal to car initial mileage. Car initial mileage is 10"));

    AddAndEditCarForms.fillEditCarMileage("35");
    AddAndEditCarForms.clickSaveCarButton();
  });
  

  after(() => {
    cy.get('a[routerlink="garage"]').click();
    GaragePage.removeAllCars();
  });
});