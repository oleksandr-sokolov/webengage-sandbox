//@ts-ignore
import WebEngage from 'react-native-webengage';

//
//

const webEngageEvent = new WebEngage();

//
//

export const logWebEngageEvent = async () => {
  try {
    webEngageEvent.track('LOG_CUSTOM_EVENT', {'FIELD NAME': 'FIELD VALUE'});
  } catch (error) {
    console.warn('WebEngage Log Error: ', error);
  }
};

//
//

export const logoutWebEngage = async () => {
  try {
    webEngageEvent.user.logout();
  } catch (error) {
    console.warn('WebEngage LogOut Error: ', error);
  }
};

//
//

export const setWebEngageUserData = async () => {
  try {
    webEngageEvent.user.login('123456');
    webEngageEvent.user.setEmail('jon@gmail.com');
    webEngageEvent.user.setFirstName('Jon');
  } catch (error) {
    console.warn('WebEngage Set User Data Error: ', error);
  }
};

//
//

export const switchWebEngagePushOptIn = async (enable: boolean) => {
  try {
    webEngageEvent.user.setDevicePushOptIn(enable);
  } catch (error) {
    console.warn('WebEngage Push Opt In Error: ', error);
  }
};
