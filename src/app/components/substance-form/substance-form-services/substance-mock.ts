import { ISubstanceInterface, UseRoutesEnum, SubstancePrequencyEnum } from './substance-form.interface';

export const SubstanceMock: ISubstanceInterface = {
  patientDetail: {
    address: {
      floor: 1,
      street: 'Test street',
      houseNum: '44',
      city: 'New York'
    },
    lastName: 'Lover',
    firstName: 'Pizza',
    phoneNumber: '100100100',
  },
  substanceSec: [{
    useRoutes: [UseRoutesEnum.BUCCAL , UseRoutesEnum.INHALATION, UseRoutesEnum.INTRAMUSCULAR] as any,
    prequency: SubstancePrequencyEnum.DAILY
  }]
};
