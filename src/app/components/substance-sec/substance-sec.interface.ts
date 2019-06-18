export interface ISubtanceInterface {
  subtanceSec: SubstanceItem;
}

export interface SubstanceItem {
  id: string;
  useRoutes: UseRoutesEnum;
  name: string;
  assessmentDate: string;
  currentStatus: string;
  currentConsump: string;
  type: string;
  consumPreConception: string;
  dateStopped: string;
  infoGiven: string;
  comment: string;
  expanded: boolean;
  prequency: SubstancePrequencyEnum;
  crunchType: 'normal' | 'hard' | 'harder';
}

export enum SubstancePrequencyEnum {
  DAILY = 1,
  MONTHLY = 2,
  YEARLY = 3
}

export interface IPatientDetail {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: {
    street: string;
    houseNum: string;
    city: string;
    floor: number;
  };
}


export enum UseRoutesEnum {
  AEROSOLS = 1,
  AMPHETAMINES = 2,
  CANNABIS = 3,
  COCAINE = 4,
  CRACK = 5,
  DIAZEPAM = 6,
  ECSTASY = 7
}