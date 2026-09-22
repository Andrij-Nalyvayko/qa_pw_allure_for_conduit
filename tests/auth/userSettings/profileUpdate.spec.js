import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SignUpPage } from '../../../src/ui/pages/auth/SignUpPage';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

const updatedUserData = {
  urlPicture: 'https://pixabay.com/images/download/x-9846331_1920.jpg',
  username: faker.person.firstName(),
  email: faker.internet.email(),
  bio: faker.lorem.sentence(),
  password: faker.internet.password(),
};

test.describe('Profile update tests', () => {
  test('Update user profile picture', async ({ page }) => {
    const settingPage = new SignUpPage(page, 1);

    await settingPage.clickSettingButton();

    await settingPage.fillPictureField(updatedUserData.urlPicture);

    await settingPage.clickUpdateButton();
  });



  test(`Update users username`, async ({ page }) => {
    const settingPage = new SignUpPage(page, 1);

    await settingPage.clickSettingButton()

    await settingPage.fillUsernameUpdField(updatedUserData.username);

    await settingPage.clickUpdateButton();  
  })

  test(`Update users bio`, async ({ page }) => {
    const settingPage = new SignUpPage(page, 1);

    await settingPage.clickSettingButton()

     await settingPage.fillBioField(updatedUserData.bio);
    
    await settingPage.clickUpdateButton();  
  })


  test(`Update users email`, async ({ page }) => {
    const settingPage = new SignUpPage(page, 1);

    await settingPage.clickSettingButton()

    await settingPage.fillEmailUpdField(updatedUserData.email);
    
    await settingPage.clickUpdateButton();  
  })



  test(`Update user password`, async ({ page }) => {
    const settingPage = new SignUpPage(page, 1);

    await settingPage.clickSettingButton()

    await settingPage.fillPasswordUpdField(updatedUserData.password);
    
    await settingPage.clickUpdateButton();  
  })
});

